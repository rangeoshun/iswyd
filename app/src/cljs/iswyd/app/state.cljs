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
                                   :decoded  false
                                   :time     nil}
                        :player   {:state     nil
                                   :html      nil
                                   :seek      nil
                                   :seek-perc 0
                                   :load      false
                                   :wrapper   {:height 0}
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
      (swap! state assoc-in [:session :user-agent] nil)
      (html! "")
      (let [req (api/get-session sid)]
        (.then req (fn [_res]
                     (let [res    (js->clj _res :keywordize-keys true)
                           data   (:data res)
                           events (sort-by (juxt :time) (:events data))]
                       (cb events)
                       (swap! state assoc-in [:session :user-agent] (:user_agent data))
                       (swap! state assoc-in [:session :loading?] false))))))))

(defn html []
  (or (get-in @state [:player :html]) (str)))

(defn loaded? []
  (get-in @state [:player :load]))

(defn load! []
  (swap! state assoc-in [:player :load] true))

(defn unload! []
  (swap! state assoc-in [:player :load] false))

(defn last-time! [time]
  (swap! state assoc-in [:player :last-time] time))

(defn last-event []
  (last (session-events)))

(defn first-event []
  (first (session-events)))

(defn zero-time []
  (or (:time (first-event)) 0))

(defn events! [events]
  (swap! state assoc-in [:session :events] (into [] events)))

(defn update-event! [event index]
  (let [html  (:html event)
        delta (if (not= index 0)
                (- (:time event) (zero-time))
                0)]
    (if html
      (html! html))
    (swap! state assoc-in [:session :events index] (assoc event :delta delta))))

(defn event-at [index]
  (get-in (session-events) [index]))

(defn seek! [int]
  (swap! state assoc-in [:player :seek] int))

(defn seek []
  (get-in @state [:player :seek]))

(defn inc-seek! []
  (swap! state assoc-in [:player :seek] (inc (seek))))

(defn seek-as-perc [time]
  (* 100
     (/ time
        (:delta (last-event)))))

(defn max-seek-perc []
  (:delta (event-at (seek))))

(defn tick [] 42)

(defn act-seek-perc []
  (get-in @state [:player :seek-perc]))

(defn inc-seek-perc! []
  (swap! state assoc-in [:player :seek-perc]
         (+ (tick) (act-seek-perc))))

(defn seek-perc []
  (seek-as-perc
   (min (max-seek-perc)
        (act-seek-perc))))

(defn event-count []
  (count (session-events)))

(defn pointer []
  (get-in @state [:player :pointer]))

(defn pointer! [coords]
  (swap! state assoc-in [:player :pointer] coords))

(defn window []
  (get-in @state [:player :window]))

(defn window! [win]
  (let [scale  (:scale win)
        wscale (if (> scale 0) scale 1)]

    (swap! state assoc-in [:player :wrapper :height] (* scale (:height win))))
  (swap! state assoc-in [:player :window] win))

(defn wrapper []
  (get-in @state [:player :wrapper]))

(defn player-state []
  (get-in @state [:player :state]))

(defn player-state! [new-state]
  (swap! state assoc-in [:player :state] new-state))
