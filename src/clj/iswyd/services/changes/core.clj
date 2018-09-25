(ns iswyd.services.changes.core
  (:require [config.core :refer [env]]
            [clojure.tools.logging :as log]
            [iswyd.utils :refer [uuid]]
            [monger.core :as mg]
            [cheshire.core :as json]
            [monger.collection :as mc]
            [ring.middleware.cookies :refer [wrap-cookies]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.reload :refer [wrap-reload]])
  (:import (com.mongodb MongoOptions ServerAddress)
           org.bson.types.ObjectId))

(defonce conn (mg/connect {:host (env :mongo-host)}))
(defonce db (mg/get-db conn "iswyd"))

(defn wrap-post-only [handler]
  (fn [req]
    (log/info (:request-method req))
    (if (= ((:request-method req) :post))
      (handler req)
      {:status 405})))

(defn changes-handler [req]
  (mc/insert db "changes" {:_id (ObjectId.)
                           :session (:req (:cookies req))
                           :data (slurp (:body req))})
  {:status 200
   :body (json/generate-string
          {:errors []
           :success true})})

(def main
  (wrap-post-only
   (wrap-cookies changes-handler)))
