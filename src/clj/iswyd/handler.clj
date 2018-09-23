(ns iswyd.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [hiccup.page :refer [include-js include-css html5]]
            [iswyd.middleware :refer [wrap-middleware]]
            [config.core :refer [env]]
            [cheshire.core :as json]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]
            [ring.middleware.cookies :refer [wrap-cookies]]
            [config.core :refer [env]]
            [monger.core :as mg]
            [monger.collection :as mc])
  (:import (com.mongodb MongoOptions ServerAddress)
           org.bson.types.ObjectId))

(defonce conn (mg/connect {:host (env :mongo-host)}))
(defonce db (mg/get-db conn "iswyd"))

(defn uuid [] (str (java.util.UUID/randomUUID)))

(def mount-target
  [:div#app
   [:h3 "Loading..."]])

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   [:meta {:csrf-token *anti-forgery-token*}]
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(defn loading-page []
  (html5
   (head)
   [:body {:class "body-container"}
    mount-target
    (include-js "/js/app.js")
    (include-js "/js/iswyd-lib.js")]))

(defn api-raw-changes [handler]
  (fn [req]
    ;; (mc/insert db "changes" {:_id (ObjectId. (uuid))
    ;;                            :session (:req (:cookies req))
    ;;                            :data (slurp body) })
    {:status 200
     :body (json/generate-string
            {:errors []
             :success true})}))

(defroutes app-routes
  (GET "/" [] (loading-page))
  (GET "/about" [] (loading-page))

  (POST "/api/changes" req (api-raw-changes req))

  ;;(resources "/")
  (route/not-found "Not Found"))

(defn wrap-session-id-cookie [handler]
  (fn [req]
    (let [session-id (:iswyd-session-id (:cookies req))]
      (if-not session-id (assoc-in (handler req) [:cookies :iswyd-session-id] (uuid))))))

(def app
  (wrap-cookies
   (wrap-session-id-cookie
    (wrap-reload
     (wrap-defaults app-routes (assoc-in site-defaults [:security :anti-forgery] false))))))
