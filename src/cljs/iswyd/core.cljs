(ns iswyd.core
  (:require [cljsjs.google-diff-match-patch]))

;; -------------------------
;; Views

(def dmp (js/diff_match_patch.))

(def prev-html (atom ""))
(def changelog (atom ()))

(defn add-to-changelog [patch, timestamp]
  (swap! changelog (fn [] (flatten (list @changelog {:patch patch
                                                     :timestamp timestamp})))))

(defn init-changelog []
  (. js/document addEventListener
     'DOMSubtreeModified
     (fn []
       (let [next-html (.-innerHTML (aget js/document.children 0))
             diff (. dmp patch-make @prev-html next-html)
             patch (. dmp patch-toText diff)]
         (add-to-changelog patch (. js/Date now))
         (js/console.log (clj->js @changelog))
         (reset! prev-html next-html)))
     false))

(defn main []
  (init-changelog))
