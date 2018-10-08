(ns iswyd.app.core
  (:require [accountant.core :as accountant]
            [reagent.core :as r]
            [secretary.core :as secretary :include-macros true]))

;; -------------------------
;; Routes

(defn main-layout []
  [:h1 {} "( aɪzwʌɪd )"])

(defonce page (atom #'main-layout))

(def theme-map #js {:palette #js {:primary   #js {:light         "#ffffff"
                                                  :main          "#eeeeee"
                                                  :dark          "#bcbcbc"
                                                  :contrast-text "#000000"}
                                  :secondary #js {:ligh          "#ff7961"
                                                  :main          "#f44336"
                                                  :dark          "#ba000d"
                                                  :contrast-text "#000000"}}})

(secretary/defroute "/" []
  (reset! page #'main-layout))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [main-layout] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
   {:nav-handler  #(secretary/dispatch! %1)
    :path-exists? #(secretary/locate-route %1)})
  (accountant/dispatch-current!)
  (mount-root))

(init!)
