(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]
            [iswyd.player.state :as st]))

(defonce dd (js/diffDOM.))
(defonce parser (js/DOMParser.))

(defonce css "<style>* { scroll-behavior: smooth; }</style>")

(defn handle-change [event]
  (let [html     (.replace (aget event "html") "<head>" (str "<head>" css))
        doc      (.parseFromString (js/DOMParser.) html "text/html")
        old-root (.getRootNode js/document)
        new-root (.getRootNode doc)]

    (.apply dd old-root (.diff dd old-root new-root))))

(defn send-top [event]
  (.postMessage (.-parent js/window) event))

(defn handle-scroll [event]
  (let [mark (aget event "mark")
        x    (aget event "x")
        y    (aget event "y")]
    (if-not mark
      (js/scrollTo x y))))

(defn handle-event [event]
  (if (nil? (st/get-seek))
    (st/set-seek! 0))

    (js/setTimeout
     (fn []
       (let [type (aget event "type")]
         (case type
           "change" (handle-change event)
           "move"   (send-top event)
           "down"   (send-top event)
           "up"     (send-top event)
           "resize" (send-top event)
           "scroll" (handle-scroll event)
           (.log js/console (str "Unrecognized event type: " type)))))
     (aget event "delta"))
  (st/set-seek! (inc (st/get-seek))))

(defn main []
  (js/addEventListener "message" #(handle-event (aget % "data"))))

(main)
