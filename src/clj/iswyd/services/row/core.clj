(ns iswyd.services.row.core
  (:require [clojure.data.json :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [kinsky.client :as client]
            [kinsky.async :as async]
            [monger.collection :as mc]
            [monger.core :as mg]
            [monger.operators :refer :all]
            [monger.util :as mu]
            [ring.util.codec :as ruc])
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

(defn exists? [sid] (mc/any? db coll {:sid sid}))

(defn in-doc [sid cid data]
  (mc/insert db coll {:_id (mu/random-uuid)
                      :cids [cid]
                      :sid sid
                      :data data}))

(defn up-doc [sid cid data]
  (mc/update db coll {:sid sid :cids {$ne cid}}
             {$push {:cids cid
                     :data {$each data
                            $sort {:tm 1}}}}))

;; TODO: Save cids in hash with cid as key and timestamp as value
(defn handle [msg]
  (let [val  (:value msg)
        sid  (:sid val)
        cid  (:cid val)
        data (:data val)]
    (if (and sid cid (not (empty? data)))
      (if (exists? sid)
        (up-doc sid cid data)
        (in-doc sid cid data)))))

(a/go-loop []
  (when-let [msg (<! e-ch)]
    (handle msg)
    (recur)))

(a/put! c-ch {:op :subscribe :topic (:decode-topic env)})
(a/put! c-ch {:op :commit})

(defroutes srv-routes
  (GET "/" request (json/write-str {:status 200}))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main srv-routes)
