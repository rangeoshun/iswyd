(ns iswyd.services.change.core
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

(log/info "changes service starting up with config:")
(log/info (:env env))

(defonce ch (async/producer {:bootstrap.servers (:kafka-host env)}
                            :keyword :edn))

(defn pub-change [sid cid evs]
  (go
    (>! ch {:topic (:change-topic env)
            :key   sid
            :value {:session_id sid
                    :change_id  cid
                    :events     evs}}))
  {:status 200
   :body   (json/write-str {:success true})})

(defn pub-ua [sid ua]
  (go
    (>! ch {:topic (:ua-topic env)
            :key   sid
            :value {:session_id sid
                    :user_agent ua}}))
  {:status 200
   :body   (json/write-str {:success true})})

(defn handle-srv-fail []
  {:status 500
   :body   (json/write-str {:success false})})

(defn handle-change-ok [sid cid evs]
  (if-not (empty? evs)
    (pub-change sid cid evs)
    (handle-srv-fail)))

(defn handle-ua-ok [sid ua]
  (if-not (nil? ua)
    (pub-ua sid ua)))

;; TODO: Save timestamp of receiveing
(defn change-handler [request]
  (let [body (json/read-str (slurp (:body request)) :key-fn keyword)
        sid  (:session_id body)
        cid  (:change_id body)
        evs  (:events body)
        ua   (get-in request [:headers "user-agent"])]

    (if (and sid cid evs)
      (do
        (handle-ua-ok sid ua)
        (handle-change-ok sid cid evs))
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
