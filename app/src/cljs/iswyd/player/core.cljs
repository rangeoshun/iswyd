(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]
            [iswyd.player.state :as st]))

;;(defnonce dd (js/diffDOM.))

(defn init-worker! []
  (js/Worker. "/js/worker.js"))

(defonce worker (init-worker!))

(defn patch-apply [patch]
  (let [prev (or (st/get-html) "")]

    (.postMessage worker (clj->js ["patch-apply" patch prev]))))

(defn worker-cb [msg]
  (.log js/console msg))

(defn handle-change [event]
  (if (aget event "key")
    (patch-apply (aget event "patch"))))

(defn handle-event [event]
  (let [type (aget event "type")]
    (case type
      "change" (handle-change event)
      "move"   nil
      "down"   nil
      "up"     nil
      "scroll" nil
      (.log js/console (str "Unrecognized event type: " type)))))

(defn main []
  (set! (.-onmessage worker) #(worker-cb %))
  (js/addEventListener "message" (fn [ev] (handle-event (aget ev "data")))))

(main)
