(ns iswyd.services.events.core
  (:require [clojure.data.json :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [environ.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [kinsky.client :as client]
            [kinsky.async :as async]
            [ring.middleware.cookies :as rm]))

;; TODO: Find out what is the idiomatic way to handle errors

(log/info "Eventss service starting up with config:")
(log/info (:env env))

(defonce ch (async/producer {:bootstrap.servers (:kafka-host env)}
                             :keyword :edn))

(defn pub-events [sid eid evs]
  (go
    (>! ch {:topic (:events-topic env)
            :key   sid
            :value {:session_id     sid
                    :event_group_id eid
                    :events         evs}}))
  {:status 200
   :body   (json/write-str {:success true})})

(defn handle-srv-fail []
  {:status 500
   :body   (json/write-str {:success false})})

(defn handle-events-ok [sid eid evs]
  (if-not (empty? evs)
    (pub-events sid eid evs)
    (handle-srv-fail)))

;; TODO: Save timestamp of receiveing
(defn change-handler [request]
  (let [body (json/read-str (slurp (:body request)) :key-fn keyword)
        sid  (:session_id body)
        eid  (:event_group_id body)
        evs  (:events body)]

    (if (and sid eid evs)
      (handle-events-ok sid eid evs)
      {:status 400
       :body   (json/write-str {:success false})})))

(defn wrap-cors [handler]
  (fn [request]
    (assoc-in (handler request) [:headers "Access-Control-Allow-Origin"] "*")))

(defroutes srv-routes
  (GET "/" request {:status 200})
  (POST "/" request (change-handler request))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main (wrap-cors
           (rm/wrap-cookies srv-routes)))
