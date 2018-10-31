(ns iswyd.player.state
  (:require [reagent.core :as r]))

(defonce state (r/atom {:html      nil
                        :last-time nil
                        :seek      nil
                        :changes   []}))

(defn set-html! [html]
  (swap! state assoc :html html))

(defn get-html []
  (or (:html @state) ""))

(defn set-last-time! [time]
  (swap! state assoc :last-time time))

(defn last-change []
  (last (:changes @state)))

(defn first-change []
  (first (:changes @state)))

(defn zero-time []
  (or (aget (first-change) "time") 0))

(defn add-change! [event]
  (set-html! (aget event "html"))
  (swap! state assoc :changes (conj (:changes @state) event)))

(defn get-changes []
  (:changes @state))

(defn get-change-at [at]
  (nth (:changes @state) at))

(defn set-seek! [int]
  (swap! state assoc :seek int))

(defn get-seek []
  (:seek @state))
