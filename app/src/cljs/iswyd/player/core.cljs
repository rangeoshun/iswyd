(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]))

(defn main []
  (js/addEventListener "message" ))
