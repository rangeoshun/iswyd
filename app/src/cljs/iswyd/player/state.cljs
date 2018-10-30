(ns iswyd.player.state
  (:require [reagent.core :as r]))

(defonce state (r/atom {:html nil}))
