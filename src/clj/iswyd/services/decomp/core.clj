(ns iswyd.services.decomp.core
  (:require [cheshire.core :as json]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [kinsky.client :as client]
            [ring.middleware.cookies :as rm])
  (:import rufus.lzstring4java.LZString))

(defonce p (client/producer {:bootstrap.servers (:kafka-host env)}
                            (client/keyword-serializer)
                            (client/edn-serializer)))

(defn decomp-change [msg]
  (log/info (json/generate-string msg))
  (client/send! p (:decomp-topic env) :c {:session-id ""
                                          :change     (. LZString decompressFromBase64 "foo")}))

(defonce c (client/consumer {:bootstrap.servers (:kafka-host env)
                             :group.id          (:decomp-group env)}
                            (client/keyword-deserializer)
                            (client/edn-deserializer)))

(client/subscribe! c (:raw-topic env))
(client/poll! c 100)

(defroutes srv-routes
  (POST "/" request (fn [request] {:status 200
                                  :body   (json/generate-string
                                           {:body   (. LZString decompressFromBase64 (slurp (:body request)))
                                           :success true})}))
  (route/resources "/")
  (route/not-found {:status 405
                    :body   (json/generate-string {:success false})}))

(def main (rm/wrap-cookies srv-routes))
