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
  (let [json-str (. LZString decompressFromBase64 data)]
    (try
      (json/read-str json-str
                     :value-fn (fn [_ val] val)
                     :key-fn keyword)
      (catch Exception e
        (str "Could not parse JSON string exception: " (.getMessage e))))))

(defn pub-decode [sid eid evs]
  (go
    (>! p-ch {:topic (:persist-topic env)
              :key   sid
              :value {:type           :events
                      :session_id     sid
                      :event_group_id eid
                      :events         (decode evs)}})))

(a/go-loop []
  (when-let [msg (<! e-ch)]
    (let [val (:value msg)
          sid (:session_id val)
          eid (:event_group_id val)
          evs (:events val)]

      (pub-decode sid eid evs))
    (recur)))

(a/put! c-ch {:op :subscribe :topic (:events-topic env)})
(a/put! c-ch {:op :commit})

(defroutes srv-routes
  (GET "/" request (json/write-str {:status 200}))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main (rm/wrap-cookies srv-routes))
