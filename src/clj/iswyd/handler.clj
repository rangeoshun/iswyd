(ns iswyd.handler
  (:require [clojure.tools.logging :as log]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [config.core :refer [env]]
            [hiccup.page :refer [include-js include-css html5]]
            [monger.util :as mu]
            [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]
            [ring.middleware.cookies :refer [wrap-cookies]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.reload :refer [wrap-reload]]))

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
  (fn [request]
    (let [session-id (get-in request [:cookies "iswyd-session" :value])
          session-id? (empty? session-id)]
    (log/info session-id session-id?)
    (log/info (empty? session-id))
    (if session-id? (assoc (handler request) :cookies {"iswyd-session" {:value (mu/random-uuid)}})
    (handler request)))))

(def app
  (wrap-cookies
   (wrap-session-id-cookie
    (wrap-defaults app-routes site-defaults))))
