(ns iswyd.services.change.core
  (:require [clojure.data.json :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [kinsky.client :as client]
            [kinsky.async :as async]
            [ring.middleware.cookies :as rm]
            [ring.util.codec :as ruc])
  (:import rufus.lzstring4java.LZString))

;; TODO: Find out what is the idiomatic way to handle errors

(defonce ch (async/producer {:bootstrap.servers (:kafka-host env)} :keyword :edn))

(defn decode [data]
  (json/read-str (. LZString decompressFromBase64 data)
                 :value-fn (fn [key val] (if (string? val)
                                          (ruc/percent-decode val)
                                          val))
                 :key-fn keyword))

(defn pub-change [session-id data]
  (go
    (>! ch {:topic (:change-topic env) :key :change :value {:session-id session-id
                                                            :data       data}}))
  {:status 200
   :body   (json/write-str {:success true})})

(defn handle-srv-fail []
  {:status 500
   :body   (json/write-str {:success false})})

(defn handle-ok [session-id data]
  (try
    (let [data (decode data)]
      (if-not (nil? data)
        (pub-change session-id data)
        (handle-srv-fail)))
    (catch Exception ex
      (log/error (str ex))
      (handle-srv-fail))))

(defn change-handler [request]
  (let [data (slurp (:body request))
        session-id (:value ((:cookies request) "iswyd-session"))]

    (if (and session-id data)
      (handle-ok session-id data)
      {:status 400
       :body   (json/write-str {:success false})})))

(defroutes srv-routes
  (POST "/" request (change-handler request))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main (rm/wrap-cookies srv-routes))
