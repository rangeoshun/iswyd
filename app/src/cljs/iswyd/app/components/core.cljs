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
      [mui/tcell {} "Session ID"]
      [mui/tcell {} "OS"]
      [mui/tcell {} "Browser"]]]
    [mui/tbody {}
     (map (fn [session]
            [mui/trow {:key (:session_id session)}
             [mui/tcell {} (:session_id session)]
             [mui/tcell {} (ua-os session)]
             [mui/tcell {} (ua-browser session)]])
          (st/sessions-list))]]])
