(ns iswyd.handler
  (:require [compojure.core :refer [POST GET defroutes context]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [iswyd.middleware :refer [wrap-middleware]]
            [config.core :refer [env]]
            [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]))

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

(defn api-dummy [req] (print req))

(defroutes routes
  (GET "/" [] (loading-page))
  (GET "/about" [] (loading-page))

  ;; FIXME: why 404?
  (context "/api" []
           (POST "/change" [req] (api-dummy req)))

  (resources "/")
  (not-found "Not Found"))

(def app (wrap-middleware #'routes))
