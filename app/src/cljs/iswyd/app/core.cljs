(ns iswyd.app.core
  (:require [accountant.core :as acc]
            [iswyd.app.components.core :as ic]
            [iswyd.app.material-ui :as mui]
            [iswyd.app.state :as st]
            [iswyd.app.player :as p]
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
                         :spacing    {:unit spacing}
                         :typography {:useNextVariants true}
                         :overrides  {:MuiTypography
                                      {:h4 {:margin-bottom spacing}}}}))

(def theme (mui/create-theme theme-map))

(defn header []
  [mui/app-bar {:position 'static}
   [mui/toolbar {}
    [mui/grid {:container true
               :direction 'row
               :spacing   spacing}
     [mui/grid {:item true}
      [mui/t {:variant 'h5} "( aɪzwʌɪd )"]]]]])

(defn main-layout [& content]
  [mui/css-baseline
   [mui/theme-provider {:theme theme}
    (header)
    [mui/grid {:container true
               :direction 'row
               :justify   'center
               :spacing   spacing}
     (conj [mui/grid {:item  true
                      :xs    12
                      :md    10
                      :style {:position    'relative
                              :padding-top padding}}]
           content)]]])

(defn about-page []
  (main-layout
   [mui/t {:variant 'h6} "About"]))

(defn sessions-page []
  (if (nil? (st/sessions-time))
    (st/get-sessions!))

  (main-layout
   [mui/t {:variant 'h4
           :key     :session-title} "Sessions"]
    (ic/sessions-table)))

(defn solo-session-page [params]
  (let [sid     (st/session-id)
        wrapper (st/wrapper)
        window  (st/window)]

    (main-layout
     [mui/paper {:key    :player-wrapper
                 :square true
                 :style  {:position 'relative
                          :width    "100%"
                          :height   (:height wrapper)
                          :transition "height 0.3s ease-out"
                          :overflow 'hidden}}
      [:div {:key   :player-container
             :id    :player-container
             :style {:position         'relative
                     :transform-origin "0 0"
                     :width            (:width window)
                     :height           (:height window)
                     :transform        (str "scale(" (:scale window) ")")
                     :overflow         'hidden}}
       [:iframe {:src         "/player"
                 :key         :player-frame
                 :id          :player-frame
                 :scrolling   'no
                 :frameBorder 0
                 :style       {:pointer-events 'none
                               :position       'relative
                               :width          "100%"
                               :height         "100%"}
                 :onLoad      #(p/handle-player-load sid)}]
       [ic/pointer {:key :pointer
                    :id  :pointer}]]]
     [mui/paper {:key :progress-container}
      [mui/lprogress {:variant (if-not (p/loading?)
                                 'determinate
                                 'indeterminate)
                      :color   'secondary
                      :value   (st/seek-perc)}]
      (cond
        (p/playing?) [mui/icon-button {:onClick #(p/pause!)}
                      [mui/pause-icon]]
        :else        [mui/icon-button {:disabled (p/loading?)
                                       :onClick  #(p/play!)}
                      [mui/play-icon]])])))

(sec/defroute "/" [] (st/set-page! #'sessions-page))

(sec/defroute "/sessions" [] (st/set-page! #'sessions-page))
(sec/defroute "/sessions/:sid" {:as params}
  (do
    (st/unload!)
    (st/player-state! "loading")
    (st/window! {:width  0
                 :height 0})
    (st/set-session! (:sid params))
    (st/set-page! #'solo-session-page)))

(sec/defroute "/about" [] (st/set-page! #'about-page))

(defn mount []
  (r/render [(st/current-page)] (.getElementById js/document "app")))

(defn main []
  (acc/configure-navigation!
   {:nav-handler  (fn [route]
                    (sec/dispatch! route)
                    (mount))
    :path-exists? #(sec/locate-route %)})
  (acc/dispatch-current!)
  (mount))
