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
  [mui/paper {:key :session-paper}
   [mui/list {:component 'nav}
    (doall (map (fn [session]
                  (let [sid (:session_id session)]

                    [mui/list-item {:button true :key sid}
                     [:a {:href (str "/sessions/" sid)}
                      [mui/t {:variant 'h6} sid]]]))
                (st/sessions-list)))]])

(defn main-layout [& content]
  [mui/css-baseline
   [mui/theme-provider {:theme theme}
    (header)
    [mui/grid {:container true
               :direction 'row
               :justify   'center
               :spacing   spacing}
     (conj [mui/grid {:item true
                      :xs   12
                      :md   10
                      :style {:position 'relative}}]
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
    (session-paper)))

(defn post-player-event [player ev]
  (.postMessage player (clj->js ev) "*"))

(defn play-events [player events]
  (loop [events events]
    (let [current (first events)
          others  (rest events)]

      (post-player-event player current)
      (if-not (empty? others)
        (recur others)))))

(defn get-player-frame []
  (.getElementById js/document "player-frame"))

(defn get-player-window []
  (.-contentWindow (get-player-frame)))

(defn scale-player []
  (let [player (get-player-frame)
        parent (.-parentNode player)
        p-width (.-offsetWidth parent)
        width  (.-offsetWidth player)
        ratio  (/ p-width width)
        style  (.-style player)]

    (aset style "transform" (str "scale(" ratio ")"))))

(defn resize-player [event]
  (let [player (get-player-frame)]

    (aset player "width" (aget event "width"))
    (aset player "height" (aget event "height")))
  (scale-player))

(defn handle-player-message [ev]
  (let [event (aget ev "data")]
    (case (aget event "type")
      "resize" (resize-player event)
      nil)))

(defn handle-player-load [events]
  (let [player (get-player-window)]

    (js/addEventListener "message" #(handle-player-message %))
    (play-events player events)))

(defn solo-session-page [params]
  (let [sid (st/session-id)]

  (main-layout
   [mui/t {:variant 'h4
           :key     :session-title} sid]
   [:iframe {:src         "/player"
             :key         :player-frame
             :id          :player-frame
             :scrolling   'no
             :frameBorder 1
             :width       "100%"
             :style       {:pointer-events   'none
                           :position         'absolute
                           :transform-origin "0 0"}
             :onLoad      (fn [] (st/get-session! sid #(handle-player-load %)))}])))

(sec/defroute "/" [] (st/set-page! #'sessions-page))

(sec/defroute "/sessions" [] (st/set-page! #'sessions-page))
(sec/defroute "/sessions/:sid" {:as params}
  (do
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
