(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]
            [iswyd.player.state :as st]))

;;(defnonce dd (js/diffDOM.))

(defn init-worker! []
  (js/Worker. "/js/worker.js"))

(defonce worker (init-worker!))

(defn worker-cb [msg])

(defn handle-event [ev]
  (.log js/console ev))

(defn main []
  (set! (.-onmessage worker) #(worker-cb %))
  (js/addEventListener "message" #(handle-event %)))

(main)
