(ns iswyd.player.state
  (:require [reagent.core :as r]))

(defonce state (r/atom {:html      nil
                        :last-time nil}))

(defn set-html! [html]
  (swap! state :html html))

(defn get-html []
  (:html @state))

(defn set-last-time! [time]
  (swap! state assoc :last-time time))

(defn get-last-time []
  (:last-time @state))
