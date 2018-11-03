(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]
            [iswyd.player.state :as st]))

(defonce dd (js/diffDOM.))
(defonce parser (js/DOMParser.))

(defonce css "<style>* { scroll-behavior: smooth; margin: 0; padding: 0;}</style>")

(defn sanitize-html [html]
  (-> html
      ;; Add scroll smoother CSS
      (.replace #"<head>" (str "<head>" css))
      ;; Remove title as that's not displayed and minimizes style reflow in head
      (.replace #"<title>.{0,}</title>" "")
      ;; Remove strange attribute "%" first seen on github.com
      (.replace (js/RegExp "(<.{0,})(%=\".{0,}\")(.{0,}>)" "g")"$1$3")))

(defn write-html [html]
  (doto js/document
    (.open)
    (.write html)
    (.close))
  (st/load!))

(defn apply-html [html]
  (let [doc      (.parseFromString parser html "text/html")
        old-body (.-body js/document)
        new-body (.-body doc)
        old-head (.-head js/document)
        new-head (.-head doc)]

    (.apply dd old-head (.diff dd old-head new-head))
    (.apply dd old-body (.diff dd old-body new-body))))

(defn handle-change [event]
  (let [html (sanitize-html (:html event))]

    (if-not (st/load?)
      (write-html html)
      (apply-html html))))

(defn send-top [event]
  (.postMessage (.-parent js/window) (clj->js event)))

(defn handle-scroll [event]
  (let [mark (:mark event)
        x    (:x event)
        y    (:y event)]

    (if-not mark
      (js/scrollTo x y))))

(defn play-next! []
  (if (and (= (st/state) :playing)
           (< (st/seek) (st/event-count)))

    (let [index (st/seek)
          event (st/event-at index)
          delta (:delta event)
          pdelta (if (> index 0)
                   (:delta (st/event-at (dec index)))
                   0)
          type  (:type event)]

      (js/setTimeout
       (fn []
         (st/inc-seek!)
         (play-next!)
         (case type
           "change" (handle-change event)
           "move"   (send-top event)
           "down"   (send-top event)
           "up"     (send-top event)
           "resize" (send-top event)
           "scroll" (handle-scroll event)
           (.log js/console (str "Unrecognized event type: " type))))
       (- delta pdelta)))))

(defn play-events! [events]
  (st/unload!)
  (if-not (st/seek)
    (st/seek! 0))

  (st/events! events)
  (st/state! :playing)

  (play-next!))

(defn handle-command [command]
  (let [type (:type command)]

    (case type
      "play" (play-events! (:events command))
      (.log js/console (str "Unrecognized command type: " type)))))

(defn main []
  (js/addEventListener "message" #(handle-command
                                   (js->clj (aget % "data") :keywordize-keys true))))

(main)
