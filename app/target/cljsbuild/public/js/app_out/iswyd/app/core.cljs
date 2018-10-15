(ns iswyd.app.core
  (:require [accountant.core :as acc]
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
  [mui/app-bar {:position 'static}
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
                  (let [sid (:session_id session)]

                    [mui/list-item {:button true :key sid}
                     [mui/t {:variant 'h6} sid]]))
                (st/sessions-list)))]])

(defn main-layout [& content]
  [mui/css-baseline
   [mui/theme-provider {:theme theme}
    (conj [:div {}
           (header)]
          content)]])

(defn about-page []
  (main-layout
   [mui/t {:variant 'h6} "About"]))

(defn sessions-page []
  (if (nil? (st/sessions-time))
    (st/get-sessions!))

  (main-layout
   [mui/t {:variant 'h4} "Sessions"]
   (session-paper)))

(sec/defroute "/" [] (st/set-page! #'sessions-page))

(sec/defroute "/about" [] (st/set-page! #'about-page))

(defn mount []
  (r/render [(st/current-page)] (.getElementById js/document "app")))

(defn main []
  (acc/configure-navigation!
   {:nav-handler  #(sec/dispatch! %1)
    :path-exists? #(sec/locate-route %1)})
  (acc/dispatch-current!)
  (mount))
