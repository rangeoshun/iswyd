(ns iswyd.app.state
  (:require [iswyd.api.core :as api]
            [reagent.core :as r]))

(defonce state (r/atom {:page     nil
                        :session  {:loading?   false
                                   :id         nil
                                   :events     nil
                                   :user-agent nil}
                        :sessions {:loading? false
                                   :list     []
                                   :time     nil}
                        :player   {:html      nil
                                   :last-time nil
                                   :seek      nil
                                   :window    {:width  0
                                               :height 0}
                                   :pointer   {:x -30
                                               :y -30}}}))

(defn set-page! [page]
  (swap! state assoc :page page))

(defn current-page []
  (get @state :page))

(defn get-sessions! []
  (swap! state assoc-in [:sessions :loading?] true)
  (let [req (api/get-sessions)]
    (.then req (fn [_res]
                 (let [res (js->clj _res :keywordize-keys true)]
                   (swap! state assoc-in [:sessions :list] (:data res))
                   (swap! state assoc-in [:sessions :loading?] false)
                   (swap! state assoc-in [:sessions :time] (.now js/Date)))))))

(defn sessions-list []
  (get-in @state [:sessions :list]))

(defn sessions-time []
  (get-in @state [:sessions :time]))

(defn sessions-loading? []
  (get-in @state [:sessions :loading?]))

(defn set-session! [sid]
  (swap! state assoc-in [:session :id] sid))

(defn session-id []
  (get-in @state [:session :id]))

(defn session-events []
  (get-in @state [:session :events]))

(defn events-from [index]
  (subvec (session-events) index))

(defn html! [html]
  (swap! state assoc-in [:player :html] html))

(defn get-session! [sid cb]
  (if (session-id)
    (do
      (swap! state assoc-in [:session :loading?] true)
      (swap! state assoc-in [:session :events] nil)
      (html! "")
      (let [req (api/get-session sid)]
        (.then req (fn [_res]
                     (let [res  (js->clj _res :keywordize-keys true)
                           data (:data res)
                           events (sort-by (juxt :time) (:events data))]
                       (cb events)
                       (swap! state assoc-in [:session :user-agent] (:user_agent data))
                       (swap! state assoc-in [:session :loading?] false))))))))

(defn html []
  (or (get-in @state [:player :html]) ""))

(defn last-time! [time]
  (swap! state assoc-in [:player :last-time] time))

(defn last-event []
  (last (session-events)))

(defn first-event []
  (first (session-events)))

(defn zero-time []
  (or (aget (first-event) "time") 0))

(defn session-events! [events]
  (swap! state assoc-in [:session :events] (into [] events)))

(defn update-event! [event index]
  (let [html  (aget event "html")
        delta (if (not= index 0)
                (- (aget event "time") (zero-time))
                0)]
    (if html
      (html! html))
    (aset event "delta" delta)
    (swap! state assoc-in [:session :events index] event)))

(defn event-at [index]
  (get-in (session-events) [index]))

(defn set-seek! [int]
  (swap! state assoc-in [:player :seek] int))

(defn get-seek []
  (get-in @state [:player :seek]))

(defn count-events []
  (count (session-events)))

(defn pointer []
  (get-in @state [:player :pointer]))

(defn pointer! [coords]
  (swap! state assoc-in [:player :pointer] coords))

(defn window []
  (get-in @state [:player :window]))

(defn window! [win]
  (swap! state assoc-in [:player :window] win))
