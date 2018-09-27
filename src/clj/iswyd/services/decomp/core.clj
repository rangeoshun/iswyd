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

(defn decomp-change [msg]
  (client/send! p (:decomp-topic env) :c
                (merge (:c msg) {:change (.decompress LZString (get-in msg :c :change))})))

(client/subscribe! c (:raw-topic env) decomp-change)
(client/poll! c 100)

(defroutes srv-routes
  (GET "/" request (fn [request] {:status 200 :body "OK"})))

(def main srv-routes)
