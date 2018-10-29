(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]))

(defn init-worker! []
  (js/Worker. "/js/worker.js"))

(defonce worker (init-worker!))

(defn worker-cb [msg])

(defn handle-event [ev])

(defn main []
  (set! (.-onmessage worker) #(worker-cb %))
  (js/addEventListener "message" #(handle-event %)))

(main)
