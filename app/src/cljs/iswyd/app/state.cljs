(ns iswyd.app.state
  (:require [iswyd.api.core :as api]
            [reagent.core :as r]))

(defonce state (r/atom {:page     nil
                        :session  {:loading? false
                                   :id       nil
                                   :data     nil}
                        :sessions {:loading? false
                                   :list     []
                                   :time     nil}}))

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
  (swap! state assoc-in {:session :id} sid))

(defn session-id []
  (get-in @state {:session :id}))

(defn session-data []
  (get-in @state {:session :data}))

(defn get-session! [sid]
  (if (session-id)
    (do
      (swap! state assoc-in [:session :loading?] true)
      (let [req (api/get-session sid)]
        (.then req (fn [_res]
                     (let [res (js->clj _res :keywordize-keys true)]
                       (swap! state assoc-in [:session :data] (:data res))
                       (swap! state assoc-in [:sessions :loading?] false))))))))
