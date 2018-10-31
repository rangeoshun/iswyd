(ns iswyd.app.material-ui
  (:require [reagent.core :as r]
            [material-ui]))

(def mui js/MaterialUI)

(def create-theme (.-createMuiTheme mui))
(def create-generate-class-name (.-createGenerateClassName mui))

(def theme-provider (r/adapt-react-class (.-MuiThemeProvider mui)))
(def css-baseline (r/adapt-react-class (.-CssBaseline mui)))

(def app-bar (r/adapt-react-class (.-AppBar mui)))
(def toolbar (r/adapt-react-class (.-Toolbar mui)))
(def t (r/adapt-react-class (.-Typography mui)))
(def label (r/adapt-react-class (.-FormLabel mui)))
(def link (r/adapt-react-class (.-Button mui)))
(def list (r/adapt-react-class (.-List mui)))
(def list-item (r/adapt-react-class (.-ListItem mui)))
(def text-field (r/adapt-react-class (.-TextField mui)))
(def popover (r/adapt-react-class (.-Popover mui)))
(def paper (r/adapt-react-class (.-Paper mui)))
(def menu-list (r/adapt-react-class (.-MenuList mui)))
(def menu-item (r/adapt-react-class (.-MenuItem mui)))
(def spinner (r/adapt-react-class (.-CircularProgress mui)))

(def grid (r/adapt-react-class (.-Grid mui)))

(def grow (r/adapt-react-class (.-Grow mui)))

(def svg-icon (r/adapt-react-class (.-SvgIcon mui)))

(defn pointer [props]
  [svg-icon (merge props {:viewBox "8 6 24 24"})
   [:polygon {:fill   "#FFFFFF"
              :points "8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "}]
   [:polygon {:fill   "#FFFFFF"
              :points "17.3,21.6 13.7,23.1 9,12 12.7,10.5 "}]
   [:rect {:x "12.5"
           :y "13.6"
           :transform"matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)"
           :width "2"
           :height "8"}]
   [:polygon {:points "9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 "}]])
