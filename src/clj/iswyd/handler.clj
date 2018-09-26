(ns iswyd.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [hiccup.page :refer [include-js include-css html5]]
            [config.core :refer [env]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]
            [ring.middleware.cookies :refer [wrap-cookies]]
            [config.core :refer [env]]
            [iswyd.utils :refer [uuid]]))

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

(defroutes app-routes
  (GET "/" [] (loading-page))
  (GET "/about" [] (loading-page))

  (route/resources "/")
  (route/not-found "Not Found"))

(defn wrap-session-id-cookie [handler]
  (fn [req]
    (let [session-id (:value ((:cookies req) "iswyd-session-id"))]
      (if-not session-id (assoc-in (handler req) [:cookies :iswyd-session-id] (uuid))))))

(def app
  (wrap-cookies
   (wrap-session-id-cookie app-routes
    (wrap-reload
     (wrap-defaults  (assoc-in site-defaults [:security :anti-forgery] false))))))
