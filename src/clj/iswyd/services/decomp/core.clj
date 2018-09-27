(ns iswyd.services.decomp.core
  (:require [cheshire.core :as json]
            [clojure.tools.logging :as log]
            [config.core :refer [env]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [kinsky.client :as client]
            [kinsky.async :as async]
            [ring.middleware.cookies :as rm])
  (:import com.diogoduailibe.lzstring4j.LZString))

(defonce p (client/producer {:bootstrap.servers "kafka:9092"}
                            (client/keyword-serializer)
                            (client/edn-serializer)))

(defonce c (client/consumer {:bootstrap.servers (:kafka-host env)
                             :group.id          (:decomp-group env)}
                            (client/keyword-deserializer)
                            (client/edn-deserializer)))

(client/subscribe! c (:raw-topic env))
(client/poll! c 100)

(defn decomp-change [change]
  (client/send! p (:decomp-topic env) :change
                (log/info (str change)
                (merge change {:changes (.decompress LZString (:data change))}))))

(defroutes service-routes
  (GET "/" request (fn [request] {:status 200 :body "OK"})))

(def main service-routes)
