(ns iswyd.app.server
    (:require [iswyd.app.handler :refer [app]]
              [config.core :refer [env]]
              [ring.adapter.jetty :refer [run-jetty]])
    (:gen-class))

(defn -main [& args]
  (let [port (or (env :port) 3449)]
    (run-jetty app {:port port :join? false})))
