(ns iswyd.app.core
  (:require [accountant.core :as accountant]
            [iswyd.app.material-ui :as mui]
            [reagent.core :as r]
            [secretary.core :as secretary :include-macros true]))

(def spacing 16)

(def theme-map (clj->js {:palette {:primary    {:light         "#ffffff"
                                                :main          "#eeeeee"
                                                :dark          "#bcbcbc"
                                                :contrast-text "#000000"}
                                   :secondary  {:ligh          "#ff7961"
                                                :main          "#f44336"
                                                :dark          "#ba000d"
                                                :contrast-text "#000000"}
                                   :typography {:useNextVariants true}}}))

(def theme (mui/create-theme theme-map))

(defn main-layout []
  [mui/css-baseline]
  [mui/app-bar {}
   [mui/toolbar {}
    [mui/grid {:container true
               :direction 'row
               :spacing   spacing}
     [mui/grid {:item true}
      [mui/t {:variant 'h5} "( aɪzwʌɪd )"]]]]])

(defonce page (atom #'main-layout))

(secretary/defroute "/" []
  (reset! page #'main-layout))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [mui/theme-provider {:theme theme}
             (main-layout)]
            (.getElementById js/document "app")))

(defn main []
  (accountant/configure-navigation!
   {:nav-handler  #(secretary/dispatch! %1)
    :path-exists? #(secretary/locate-route %1)})
  (accountant/dispatch-current!)
  (mount-root))
