(ns iswyd.player.state
  (:require [reagent.core :as r]))

(defonce st (r/atom {:html     nil
                        :seek     nil
                        :state    :stopped
                        :events   []}))

(defn last-change []
  (last (:events @st)))

(defn first-change []
  (first (:events @st)))

(defn zero-time []
  (or (:time (first-change)) 0))

(defn event-at [at]
  (nth (:events @st) at))

(defn events! [events]
  (swap! st assoc :events events))

(defn events-count []
  (count (:events @st)))

(defn seek []
  (:seek @st))

(defn seek! [int]
  (swap! st assoc :seek int))

(defn inc-seek! []
  (swap! st assoc :seek (inc (seek))))

(defn state []
  (:state @st))

(defn state! [new-state]
  (swap! st assoc :state new-state))
