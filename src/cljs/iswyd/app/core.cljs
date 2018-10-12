(ns iswyd.app.core
  (:import goog.history.Html5History)
  (:require [accountant.core :as accountant]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [iswyd.app.material-ui :as mui]
            [iswyd.app.state :as st]
            [reagent.core :as r]
            [secretary.core :as sec :include-macros true]))

(def spacing 16)
(def padding (* spacing 2))

(def theme-map (clj->js {:palette    {:primary   {:light         "#ffffff"
                                                  :main          "#eeeeee"
                                                  :dark          "#bcbcbc"
                                                  :contrast-text "#000000"}
                                      :secondary {:ligh          "#ff7961"
                                                  :main          "#f44336"
                                                  :dark          "#ba000d"
                                                  :contrast-text "#000000"}}
                         :typography {:useNextVariants true}
                         :overrides  {
                                      ;; :MuiAppBar {:root {:paddingLeft   0
                                      ;;                    :paddingRight  0
                                      ;;                    :paddingTop    0
                                      ;;                    :paddingBottom 0}}
                                      ;; :MuiPaper  {:root {:paddingLeft   padding
                                      ;;                    :paddingRight  padding
                                      ;;                    :paddingTop    padding
                                      ;;                    :paddingBottom padding}}
                                      }}))

(def theme (mui/create-theme theme-map))

(defn header []
  [mui/css-baseline]
  [mui/app-bar {}
   [mui/toolbar {}
    [mui/grid {:container true
               :direction 'row
               :spacing   spacing}
     [mui/grid {:item true}
      [mui/t {:variant 'h5} "( aɪzwʌɪd )"]]]]])

(defn session-paper []
  [mui/paper {}
   [mui/list {:component 'nav}
    (doall (map (fn [session]
                  (let [id (:_id session)]

                    [mui/list-item {:button true :key id}
                     [mui/t {:variant 'h6} id]]))
                (st/sessions-list)))]])

(defn main-layout [& content]
  (conj
   [mui/theme-provider {:theme theme}
    (header)]
   content))

(defn about []
  (main-layout
   [mui/t {:variant 'h6} "About"]))

(defn sessions []
  (if (empty? (st/sessions-list))
    (st/get-sessions!))

  (main-layout
   [mui/t {:variant 'h4} "Sessions"]
   (session-paper)))

(defn hook-browser-navigation! []
  (doto (Html5History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (sec/dispatch! (.-token event))))
    (.setEnabled true)))

;; TODO: Find a method without #/
(defn app-routes []
  (sec/set-config! :prefix "#")

  (sec/defroute "/" []
    (swap! st/state assoc :page :home))

  (sec/defroute "/about" []
    (swap! st/state assoc :page :about))
  (hook-browser-navigation!))

(defmulti current-page #(@st/state :page))

(defmethod current-page :home []
  (sessions))

(defmethod current-page :about []
  (about))

(defmethod current-page :default []
  (sessions))

(defn main []
  (app-routes)
  (r/render [current-page] (.getElementById js/document "app")))
