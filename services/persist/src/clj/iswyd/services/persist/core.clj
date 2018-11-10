(ns iswyd.services.persist.core
  (:require [clojure.data.json :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [environ.core :refer [env]]
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

(defn exists? [sid] (mc/any? db coll {:session_id sid}))

(defn in-doc-events [sid eid evs]
  (mc/insert db coll {:_id          (mu/random-uuid)
                      :event_groups [eid]
                      :session_id   sid
                      :events       evs}))

(defn up-doc-events [sid eid evs]
  (mc/update db coll {:session_id sid :changes {$ne eid}}
             {$push {:event_groups eid
                     :events       {$each evs}}}))

(defn in-doc-meta [sid meta]
  (mc/insert db coll {:_id        (mu/random-uuid)
                      :meta       meta
                      :session_id sid}))

(defn up-doc-meta [sid meta]
  (mc/update db coll {:session_id sid :meta {$exists false}}
             {:meta meta}))

(defn in-doc-ua [sid uao]
  (mc/insert db coll {:session_id sid
                      :user_agent uao}))

(defn up-doc-ua [sid uao]
  (mc/update db coll {:session_id sid
                      :user_agent {$exists false}}
             {$set {:user_agent uao}}))

;; TODO: Save cids in hash with cid as key and timestamp as value
(defn handle-events [msg]
  (let [val (:value msg)
        sid (:session_id val)
        eid (:event_group_id val)
        evs (:events val)]

    (if (and sid eid (not (empty? evs)))
      (if (exists? sid)
        (up-doc-events sid eid evs)
        (in-doc-events sid eid evs)))))

(defn handle-meta [msg]
  (let [val  (:value msg)
        sid  (:session_id val)
        meta (:meta val)]

    (if (and sid (not (empty? meta)))
      (if (exists? sid)
        (up-doc-meta sid meta)
        (in-doc-meta sid meta)))))

(defn handle-ua [msg]
  (let [val (:value msg)
        sid (:session_id val)
        uao (:user_agent val)]

    (if (exists?)
      (up-doc-ua sid uao)
      (in-doc-ua sid uao))))

(a/go-loop []
  (when-let [msg (<! e-ch)]
    (log/info "Persisting message:" (get-in msg [:value :meta]))
    (case (get-in msg [:value :type])
      :meta       (handle-meta msg)
      :user_agent (handle-ua msg)
      :events     (handle-events msg))
    (recur)))

(a/put! c-ch {:op :subscribe :topic (:persist-topic env)})
(a/put! c-ch {:op :commit})

(defroutes srv-routes
  (GET "/" request (json/write-str {:status 200}))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main srv-routes)
