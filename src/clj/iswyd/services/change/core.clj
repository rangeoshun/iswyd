(ns iswyd.services.change.core
  (:require [cheshire.core :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [kinsky.client :as client]
            [kinsky.async       :as async]
            [ring.middleware.cookies :as rm])
  (:import rufus.lzstring4java.LZString))

;; TODO: Find out what is the idiomatic way to handle errors

(defonce p (client/producer {:bootstrap.servers (:kafka-host env)}
                            (client/keyword-serializer)
                            (client/edn-serializer)))

(defn decomp [data] (. LZString decompressFromBase64 data))

(defn pub-change [session-id data]
  (client/send! p (:raw-topic env) :c {:session-id session-id
                                       :data       data})
  {:status 200
   :body   (json/generate-string {:success true})})

(defn handle-srv-fail []
  {:status 500
   :body   (json/generate-string {:success false})})

(defn handle-ok [session-id data]
  (try
    (let [data (decomp data)]
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
       :body   (json/generate-string {:success false})})))

(defroutes srv-routes
  (POST "/" request (change-handler request))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/generate-string {:success false})}))

(def main (rm/wrap-cookies srv-routes))
