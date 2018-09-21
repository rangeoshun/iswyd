(ns iswyd-worker.core
  (:require [cljsjs.google-diff-match-patch]))

(def dmp (js/diff_match_patch.))

(defn init []
  (set! (.-onmessage js/self)
        (fn [msg]
          (let [data (.-data msg)
                prev (aget data 0)
                next (aget data 1)]
            (.postMessage js/self (. dmp patch_make prev next))))))

(init)
