(ns iswyd.services.change.core
  (:require [cheshire.core :as json]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [kinsky.client :as client]
            [kinsky.async :as async]
            [ring.middleware.cookies :as rm]))

;; TODO: Find out what is the idiomatic way to handle errors

(defonce p (client/producer {:bootstrap.servers (:kafka-host env)}
                            (client/keyword-serializer)
                            (client/edn-serializer)))

(defn pub-change [session-id data]
  (client/send! p (:raw-topic env) :change {:session_id session-id
                                            :data data}))

(defn handle-change [session-id data]
  (pub-change session-id data)
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
  (route/not-found {:status 405
                    :body (json/generate-string
                           {:errors  ["Method not allowed."]
                            :success false})}))

(def main
  (rm/wrap-cookies service-routes))
