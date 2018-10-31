(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]
            [iswyd.player.state :as st]))

(defonce dd (js/diffDOM.))
(defonce parser (js/DOMParser.))

(defn playback! [event]
  (.log js/console (aget event "time"))

  (if (nil? (st/get-seek))
    (st/set-seek! 0))

  (let [seek  (st/get-seek)
        delta (aget event "delta")]

    (js/setTimeout
     (fn []
       (let [html     (aget event "html")
             doc      (.parseFromString (js/DOMParser.) html "text/html")
             old-root (.getRootNode js/document)
             new-root (.getRootNode doc)]

         (.apply dd old-root (.diff dd old-root new-root))))
     delta))
  (st/set-seek! (inc (st/get-seek))))

(defn handle-resize [event]
  (.postMessage (.-parent js/window) event))

(defn handle-event [event]
  (let [type (aget event "type")]
    (case type
      "change" (playback! event)
      "move"   nil
      "down"   nil
      "up"     nil
      "resize" (handle-resize event)
      "scroll" nil
      (.log js/console (str "Unrecognized event type: " type)))))

(defn main []
  (js/addEventListener "message" #(handle-event (aget % "data"))))

(main)
