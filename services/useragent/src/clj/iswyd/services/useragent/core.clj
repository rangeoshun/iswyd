(ns iswyd.services.useragent.core
  (:require [clojure.data.json :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [environ.core :refer [env]]
            [monger.collection :as mc]
            [monger.core :as mg]
            [monger.operators :refer :all]
            [monger.util :as mu]
            [kinsky.client :as client]
            [kinsky.async :as async]
            [user-agent :as ua])
  (:import (com.mongodb MongoOptions ServerAddress)))

(defonce p-ch (async/producer {:bootstrap.servers (:kafka-host env)}
                              :keyword :edn))

(defonce c-vec (async/consumer {:bootstrap.servers (:kafka-host env)
                                :group.id          (mu/random-uuid)}
                               (client/keyword-deserializer)
                               (client/edn-deserializer)))

(defonce e-ch (first c-vec))
(defonce c-ch (second c-vec))

(defn pub-ua [sid uas]
  (go
    (>! p-ch {:topic (:persist-topic env)
              :key   sid
              :value {:type       :user_agent
                      :session_id sid
                      :user_agent (ua/parse uas)}})))

(a/go-loop []
  (when-let [msg (<! e-ch)]
    (let [val (:value msg)
          sid (:session_id val)
          uas (:user_agent val)]
      (if (and (string? sid)
               (string? uas))
        (pub-ua sid uas)))
    (recur)))

(a/put! c-ch {:op :subscribe :topic (:ua-topic env)})
(a/put! c-ch {:op :commit})

(defroutes srv-routes
  (GET "/" request (json/write-str {:status 200}))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main srv-routes)
