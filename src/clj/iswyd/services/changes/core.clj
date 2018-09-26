(ns iswyd.services.changes.core
  (:require [cheshire.core :as json]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [monger.collection :as mc]
            [monger.core :as mg]
            [monger.util :as mu]
            [ring.middleware.cookies :as rm])
  (:import (com.mongodb MongoOptions ServerAddress)
           org.bson.types.ObjectId))

;; TODO: Find out what is the idiomatic way to handle errors

(defonce conn (mg/connect {:host (env :mongo-host)}))
(defonce db (mg/get-db conn "iswyd"))

(defn changes-handler [request]
  (let [data (slurp (:body request))
        session-id (:value ((:cookies request) "iswyd-session"))]
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
