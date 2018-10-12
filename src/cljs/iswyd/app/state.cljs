(ns iswyd.app.state
  (:require [iswyd.api.core :as api]
            [reagent.core :as r :refer [atom]]))

(defonce state (atom {:page     :home
                      :sessions {:loading? false
                                 :list     []}}))

(defn get-sessions! []
  (swap! state assoc-in [:sessions :loading?] true)
  (let [req (api/get-sessions)]
    (.then req (fn [_res]
                 (let [res (js->clj _res :keywordize-keys true)]
                   (swap! state assoc-in [:sessions :list] (:data res))
                   (swap! state assoc-in [:sessions :loading?] false))))))

(defn sessions-list []
  (get-in @state [:sessions :list]))

(defn sessions-loading? []
  (get-in @state [:sessions :loading?]))
