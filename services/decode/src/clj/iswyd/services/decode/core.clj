(ns iswyd.services.decode.core
  (:require [clojure.data.json :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [environ.core :refer [env]]
            [kinsky.client :as client]
            [kinsky.async :as async]
            [monger.util :as mu]
            [ring.middleware.cookies :as rm]
            [ring.util.codec :as ruc])
  (:import rufus.lzstring4java.LZString))

(defonce p-ch (async/producer {:bootstrap.servers (:kafka-host env)}
                              :keyword :edn))

(defonce c-vec (async/consumer {:bootstrap.servers (:kafka-host env)
                                :group.id          (mu/random-uuid)}
                               (client/keyword-deserializer)
                               (client/edn-deserializer)))

(defonce e-ch (first c-vec))
(defonce c-ch (second c-vec))

(defn decode [data]
  (json/read-str (. LZString decompressFromBase64 data)
                 :value-fn (fn [_ val] (if (string? val)
                                        (ruc/percent-decode val)
                                        val))
                 :key-fn keyword))

(defn pub-decode [sid cid evs]
  (go
    (>! p-ch {:topic (:decode-topic env)
              :key   sid
              :value {:type       :decode
                      :session_id sid
                      :change_id  cid
                      :events     (decode evs)}})))

(a/go-loop []
  (when-let [msg (<! e-ch)]
    (if (:value msg)
      (pub-decode (:session_id (:value msg)) (:change_id (:value msg)) (:events (:value msg))))
    (recur)))

(a/put! c-ch {:op :subscribe :topic (:change-topic env)})
(a/put! c-ch {:op :commit})

(defroutes srv-routes
  (GET "/" request (json/write-str {:status 200}))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main (rm/wrap-cookies srv-routes))
