(ns iswyd.services.sessions.core
  (:require [clojure.data.json :as json]
            [clojure.core.async :as a :refer [go <! >!]]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [monger.collection :as mc]
            [monger.core :as mg]
            [monger.util :as mu]
            [ring.middleware.cookies :as rm])
  (:import (com.mongodb MongoOptions ServerAddress)))

(defonce conn (mg/connect {:host (:mongo-host env)}))
(defonce db (mg/get-db conn (:mongo-db env)))
(defonce coll (:mongo-session env))

(defn multi-handler [request]
  {:status 200
   :body   (json/write-str {:success true
                            :data    (mc/find-maps db coll {} {:_id        0
                                                               :changes    0
                                                               :events     0
                                                               :user_agent 0})})})

(defn solo-handler [request]
  (let [session (mc/find-one-as-map
                 db coll {:session_id (:session_id (:params request))} {:_id     0
                                                                        :changes 0})]

    (if session
      {:status 200
       :body   (json/write-str {:success true
                                :data    session})}
      {:status 404
       :body   (json/write-str {:success false})})))

(defn wrap-cors [handler]
  (fn [request]
    (assoc-in (handler request) [:headers "Access-Control-Allow-Origin"] "*")))

(defroutes srv-routes
  (GET "/" request (multi-handler request))
  (GET "/:session_id" request (solo-handler request))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/write-str {:success false})}))

(def main (wrap-cors
           (rm/wrap-cookies srv-routes)))
