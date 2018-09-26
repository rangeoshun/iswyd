(ns iswyd.services.changes.core
  (:require [config.core :refer [env]]
            [clojure.tools.logging :as log]
            [iswyd.utils :refer [uuid]]
            [monger.core :as mg]
            [cheshire.core :as json]
            [monger.collection :as mc]
            [monger.util :as mu]
            [ring.middleware.cookies :as rm])
  (:import (com.mongodb MongoOptions ServerAddress)
           org.bson.types.ObjectId))

;; TODO: Find out what is the idiomatic way to handle errors

(defonce conn (mg/connect {:host (env :mongo-host)}))
(defonce db (mg/get-db conn "iswyd"))

(defn changes-handler [request]
  (let [data (slurp (:body request))
        session-id (:value ((:cookies request) "iswyd-session-id"))]
    (if (and session-id data)
      (mc/insert db "changes" {:_id (mu/random-uuid)
                               :session_id session-id
                               :data data}))
    {:status 200
     :body (json/generate-string
            {:errors []
             :success true})}))

(def main
  (rm/wrap-cookies changes-handler))
