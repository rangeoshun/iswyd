(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]
            [iswyd.player.state :as st]))

(defonce dd (js/diffDOM.))
(defonce parser (js/DOMParser.))

(defonce css "<style>* { scroll-behavior: smooth; }</style>")

(defn sanitize-html [html]
  (-> html
      ;; Add scroll smoother CSS
      (.replace #"<head>" (str "<head>" css))
      ;; Remove title as that's not displayed and minimizes style reflow in head
      (.replace #"<title>.{0,}</title>" "")
      ;; Remove strange attribute "%" first seen on github.com
      (.replace (js/RegExp "(<.{0,})(%=\".{0,}\")(.{0,}>)" "g")"$1$3")))

(defn handle-change [event]
  (let [html     (sanitize-html (aget event "html"))
        doc      (.parseFromString parser html "text/html")
        old-body (.-body js/document)
        new-body (.-body doc)
        old-head (.-head js/document)
        new-head (.-head doc)]

    (.apply dd old-head (.diff dd old-head new-head))
    (.apply dd old-body (.diff dd old-body new-body))))

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
