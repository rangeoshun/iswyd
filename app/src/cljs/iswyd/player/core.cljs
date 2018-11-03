(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]
            [iswyd.player.state :as st]))

(defonce dd (js/diffDOM.))

(defn write-html [html]
  (doto js/document
    (.open)
    (.write html)
    (.close))
  (st/load!))

(defn apply-diff [diff]
  (let [body (.-body js/document)
        head (.-head js/document)]

    (.apply dd head (clj->js (:head diff)))
    (.apply dd body (clj->js (:body diff)))))

(defn handle-change [event]
  (if-not (st/load?)
    (write-html (:html event))
    (apply-diff (:diff event))))

(defn post-parent [event]
  (.postMessage (.-parent js/window) (clj->js event)))

(defn handle-scroll [event]
  (let [mark (:mark event)
        x    (:x event)
        y    (:y event)]

    (if-not mark
      (js/scrollTo x y))))

(defn play-next! []
  (if (and (= (st/state) "playing")
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
         (case type
           "change" (handle-change event)
           "move"   (post-parent event)
           "down"   (post-parent event)
           "up"     (post-parent event)
           "resize" (post-parent event)
           "scroll" (handle-scroll event)
           (.log js/console (str "Unrecognized event type: " type)))
         (post-parent {:type  "seek"
                       :value (st/seek)})
         (st/inc-seek!)
         (play-next!))
       (- delta pdelta)))))

(defn play-events! [events]
  (st/unload!)
  (if-not (st/seek)
    (st/seek! 0))

  (st/events! events)
  (st/state! "playing")
  (post-parent {:type  "state"
                :value "playing"})
  (play-next!))

(defn handle-state [event]
  (let [value (:value event)
        curr  (st/state)]

    (st/state! value)
    (if (and (= curr "paused")
             (= value "playing"))
      (play-next!))))

(defn handle-command [command]
  (let [type (:type command)]

    (case type
      "load"  (play-events! (:events command))
      "state" (handle-state command)
      (.log js/console (str "Unrecognized command type: " type)))))

(defn main []
  (js/addEventListener "message" #(handle-command
                                   (js->clj (aget % "data") :keywordize-keys true))))

(main)
