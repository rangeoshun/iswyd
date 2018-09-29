(ns iswyd.services.decode.core
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

(defonce p (client/producer {:bootstrap.servers (:kafka-host env)}
                            (client/keyword-serializer)
                            (client/edn-serializer)))
(defn decode [data]
  (json/read-str (. LZString decompressFromBase64 data)
                 :value-fn (fn [_ val] (if (string? val)
                                         (ruc/percent-decode val)
                                         val))
                 :key-fn keyword))

(defn pub-decode [sid data]
  (go
    (>! ch {:topic (:decode-topic env) :key :change :value {:sid  sid
                                                            :data data}})))

(defonce [ch _] (async/consumer {:bootstrap.servers (:kafka-host env)
                                 :group.id          (:decode-group env)}
                                (client/string-deserializer)
                                (client/string-deserializer)))

(a/go-loop []
  (when-let [msg (a/<! ch)]
    (println (pr-str msg))
    (pub-decode (:sid msg) (:data msg))
    (recur)))

(defroutes srv-routes
  (GET "/" request (json/write-str {:status 200}))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main (rm/wrap-cookies srv-routes))
