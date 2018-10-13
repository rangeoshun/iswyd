(ns iswyd.services.ua.core
  (:require [clojure.data.json :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [monger.collection :as mc]
            [monger.core :as mg]
            [monger.operators :refer :all]
            [monger.util :as mu]
            [kinsky.client :as client]
            [kinsky.async :as async]
            [user-agent :as ua])
  (:import (com.mongodb MongoOptions ServerAddress)))

(defonce conn (mg/connect {:host (:mongo-host env)}))
(defonce db (mg/get-db conn (:mongo-db env)))
(defonce coll (:mongo-session env))

(defonce c-vec (async/consumer {:bootstrap.servers (:kafka-host env)
                                :group.id          (mu/random-uuid)}
                               (client/keyword-deserializer)
                               (client/edn-deserializer)))

(defonce e-ch (first c-vec))
(defonce c-ch (second c-vec))

(defn up-doc [sid uao]
  (mc/update db coll {:session_id sid
                      :user_agent {$exists false}}
             {$set {:user_agent uao}}))

(defn handle [msg]
  (let [val (:value msg)
        sid (:session_id val)
        uas (:user_agent val)]

    (if uas
      (up-doc sid (ua/parse uas)))))

(a/go-loop []
  (when-let [msg (<! e-ch)]
    (handle msg)
    (recur)))

(a/put! c-ch {:op :subscribe :topic (:ua-topic env)})
(a/put! c-ch {:op :commit})

(defroutes srv-routes
  (GET "/" request (json/write-str {:status 200}))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main srv-routes)
