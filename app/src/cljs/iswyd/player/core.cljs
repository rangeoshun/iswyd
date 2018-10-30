(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]
            [iswyd.player.state :as st]))

;;(defnonce dd (js/diffDOM.))

(defn init-worker! []
  (js/Worker. "/js/worker.js"))

(defonce worker (init-worker!))

(defn worker-cb [msg])

(defn handle-event [event]
  (let [type  (aget event "type")]
    (case type
      "change" (.log js/console event)
      "move"   nil
      "down"   nil
      "up"     nil
      "scroll" nil
      (.log js/console (str "Unrecognized event type: " type)))))

(defn main []
  (set! (.-onmessage worker) #(worker-cb %))
  (js/addEventListener "message" (fn [ev] (handle-event (aget ev "data")))))

(main)
