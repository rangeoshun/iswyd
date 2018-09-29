(ns iswyd.services.change.core
  (:require [clojure.data.json :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [kinsky.client :as client]
            [kinsky.async :as async]
            [ring.middleware.cookies :as rm])
  (:import rufus.lzstring4java.LZString))

;; TODO: Find out what is the idiomatic way to handle errors

(defonce ch (async/producer {:bootstrap.servers (:kafka-host env)} :keyword :edn))

(defn pub-change [sid data]
  (go
    (>! ch {:topic (:change-topic env) :key :change :value {:sid  sid
                                                            :data data}}))
  {:status 200
   :body   (json/write-str {:success true})})

(defn handle-srv-fail []
  {:status 500
   :body   (json/write-str {:success false})})

(defn handle-ok [session-id data]
  (if-not (empty? data)
    (pub-change session-id data)
    (handle-srv-fail)))

(defn change-handler [request]
  (let [data (slurp (:body request))
        sid  (:value ((:cookies request) "iswyd-session"))]

    (if (and sid data)
      (handle-ok sid data)
      {:status 400
       :body   (json/write-str {:success false})})))

(defroutes srv-routes
  (GET "/" request {:status 200})
  (POST "/" request (change-handler request))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main (rm/wrap-cookies srv-routes))
