(ns iswyd.player.state
  (:require [reagent.core :as r]))

(defonce st (r/atom {:load   nil}))

(defn load? []
  (:load @st))

(defn load! []
  (swap! st assoc :load true))

(defn unload! []
  (swap! st assoc :load false))
