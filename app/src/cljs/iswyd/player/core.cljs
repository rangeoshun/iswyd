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
  (let [data (aget msg "data")
        html (aget data 1)]

    (st/set-html! html)
    (.write js/document html)))

(defn handle-change [event]
  (if (aget event "key")
    (patch-apply (aget event "patch"))))

(defn handle-resize [event]
  (.postMessage (.-parent js/window) event))

(defn handle-event [event]
  (let [type (aget event "type")]
    (case type
      "change" (handle-change event)
      "move"   nil
      "down"   nil
      "up"     nil
      "resize" (handle-resize event)
      "scroll" nil
      (.log js/console (str "Unrecognized event type: " type)))))

(defn main []
  (set! (.-onmessage worker) #(worker-cb %))
  (js/addEventListener "message" #(handle-event (aget % "data"))))

(main)
