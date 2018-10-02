(ns iswyd.services.sessions.core
  (:require [clojure.data.json :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [monger.collection :as mc]
            [monger.core :as mg]
            [monger.query :refer :all]
            [monger.util :as mu]
            [ring.middleware.cookies :as rm])
  (:import (com.mongodb MongoOptions ServerAddress)))

;; TODO: Find out what is the idiomatic way to handle errors
(defonce ch (async/producer {:bootstrap.servers (:kafka-host env)}
                            :keyword :edn))

(defonce conn (mg/connect {:host (:mongo-host env)}))
(defonce db (mg/get-db conn (:mongo-db env)))
(defonce coll (:mongo-session env))

(defn multi-handler [request]
  {:status 200
   :body (json/write-str {:data (with-collection db coll
                                  (find {})
                                  (fields [:_id]))})})

(defn wrap-cors [handler]
  (fn [request]
    (assoc-in (handler request) [:headers "Access-Control-Allow-Origin"] "*")))

(defroutes srv-routes
  (GET "/" request (multi-handler request))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main (wrap-cors
           (rm/wrap-cookies srv-routes)))
