(ns iswyd.services.cue.core
  (:require [cheshire.core :as json]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [monger.collection :as mc]
            [monger.core :as mg]
            [monger.util :as mu]
            [overtone.at-at :as at]
            [ring.middleware.cookies :as rm])
  (:import (com.mongodb MongoOptions ServerAddress)
           org.bson.types.ObjectId
           com.diogoduailibe.lzstring4j.LZString))
(defonce conn (mg/connect {:host (env :mongo-host)}))
(defonce db (mg/get-db conn "iswyd"))
(defonce cue-pool (at/mk-pool))

(defn ingest-first-change []
  (if (mc/any? db "changes" {:locked false})
    (let [change (mc/find-one db "changes" {:locekd false})
          change-id (:_id change)
          session-id (:session_id change)]
      (log/info (str "Ingesting " change-id))
      (mc/update db "changes" {:_id change-id} {:locked true})
      (log/info (str "locked " change-id))
      (mc/upsert db "sessions"
                 {:_id session-id}
                 {:$pushAll
                  {:changes (.decompress LZString (:data change))}})
      (log/info (str "Updated session " session-id))
      (mc/remove-by-id db "changes" change-id)
      (log/info (str "Removing " change-id)))))

(defroutes service-routes
  (GET "/" request (fn [request] {:status 200 :body "OK"}))
  (route/resources "/")
  (route/not-found {:status 405
                    :body (json/generate-string
                           {:errors ["Method not allowed."]
                            :success false})}))

(at/every 100 #(ingest-first-change) cue-pool)

(def main service-routes)
