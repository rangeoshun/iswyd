(ns iswyd.services.change.core
  (:require [clojure.data.json :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [kinsky.client :as client]
            [kinsky.async :as async]
            [ring.middleware.cookies :as rm]))

;; TODO: Find out what is the idiomatic way to handle errors

(defonce ch (async/producer {:bootstrap.servers (:kafka-host env)}
                            :keyword :edn))

(defn pub-change [sid cid data]
  (go
    (>! ch {:topic (:change-topic env)
            :key   sid
            :value {:sid  sid
                    :cid  cid
                    :data data}}))
  {:status 200
   :body   (json/write-str {:success true})})

(defn handle-srv-fail []
  {:status 500
   :body   (json/write-str {:success false})})

(defn handle-ok [sid cid data]
  (if-not (empty? data)
    (pub-change sid cid data)
    (handle-srv-fail)))

(defn change-handler [request]
  (let [body (json/read-str (slurp (:body request)) :key-fn keyword)
        sid  (:sid body)
        cid  (:cid body)
        data (:data body)]

    (if (and sid cid data)
      (handle-ok sid cid data)
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
