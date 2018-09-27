(ns iswyd.services.changes.core
  (:require [cheshire.core :as json]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [monger.collection :as mc]
            [monger.core :as mg]
            [monger.util :as mu]
            [ring.middleware.cookies :as rm])
  (:import (com.mongodb MongoOptions ServerAddress)
           org.bson.types.ObjectId))

;; TODO: Find out what is the idiomatic way to handle errors

(defonce conn (mg/connect {:host (env :mongo-host)}))
(defonce db (mg/get-db conn "iswyd"))

(defn insert-change [session-id data]
  (mc/insert db "changes" {:_id (mu/random-uuid)
                           :locked false
                           :session_id session-id
                           :data data}))

(defn handle-change [session-id data]
  (insert-change session-id data)
  {:status 200
   :body (json/generate-string
          {:errors []
           :success true})})

(defn changes-handler [request]
  (let [data (slurp (:body request))
        session-id (:value ((:cookies request) "iswyd-session"))]
    (if (and session-id data)
      (handle-change session-id data)
      {:status 400
       :body (json/generate-string
                {:errors [(if (empty? session-id) "Session ID is mandatory.")
                          (if (empty? data) "Data in request body is mandatory.")]
                 :success false})})))

(defroutes service-routes
  (POST "/" request (changes-handler request))
  (route/resources "/")
  (route/not-found {:status 405
                    :body (json/generate-string
                           {:errors ["Method not allowed."]
                            :success false})}))

(def main
  (rm/wrap-cookies service-routes))
