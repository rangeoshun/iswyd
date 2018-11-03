(ns iswyd.app.components.core
  (:require [iswyd.app.material-ui :as mui]
            [iswyd.app.state :as st]))

(defn ua-os [session]
  (str
   (get-in session [:user_agent :os :name])
   " "
   (get-in session [:user_agent :os :version :version])))

(defn ua-browser [session]
  (str
   (get-in session [:user_agent :name])
   " "
   (get-in session [:user_agent :version :version])))

(defn sessions-table []
  [mui/paper {:key :session-paper}
   [mui/table {}
    [mui/thead {}
     [mui/trow {}
      [mui/tcell]
      [mui/tcell {} "Session ID"]
      [mui/tcell {} "OS"]
      [mui/tcell {} "Browser"]]]
    [mui/tbody {}
     (map (fn [session]
            [mui/trow {:key (:session_id session)}
             [mui/tcell {} [:a {:href (str "/sessions/" (:session_id session))}
                            [mui/icon-button {}
                             [mui/launch-icon]]]]
             [mui/tcell {} (:session_id session)]
             [mui/tcell {} (ua-os session)]
             [mui/tcell {} (ua-browser session)]])
          (st/sessions-list))]]])

;; FIXME: Fix click riple position to be centered
(defn pointer [props]
  (let [pointer (st/pointer)]
    [:div (merge-with merge {:style {:position   'absolute
                                     :transition "top .1s linear, left .1s linear"
                                     :top        (:y pointer)
                                     :left       (:x pointer)}} (or props {}))
     [mui/button-base {:id    :pointer-button
                       :style {:background-color "rgba(0, 0, 0, 0.08)"
                               :poistion         'absolute
                               :min-width        24
                               :min-height       24
                               :margin-top       -12
                               :margin-left      -12
                               :padding          0
                               :border-radius    12}}
      [mui/pointer-icon {:style {:position 'absolute
                                 :top      "50%"
                                 :left     "50%"}}]]]))
