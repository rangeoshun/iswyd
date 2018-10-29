(ns iswyd.worker.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.lz-string]))

(defonce dmp (js/diff_match_patch.))
(defonce lz js/LZString)

(defn handle-patch-make [data]
  (let [prev  (nth data 0)
        next  (nth data 1)
        key   (empty? prev)
        patch (.patch_make dmp prev next)]

    (.postMessage js/self #js ["patch-make" (.patch_toText dmp patch) key])))

(defn handle-patch-apply [data]
  (let [prev  (nth data 0)
        patch (.patch_fromText (nth data 1))]

    (.postMessage js/self #js ["patch-apply" (.patch_apply [patch] prev)])))

(defn handle-compress [data]
  (let [log (nth data 0)]

    (.postMessage js/self #js ["compress"
                               (.compressToBase64 lz (js/JSON.stringify log))])))

(defn main []
  (set! (.-onmessage js/self)
        (fn [msg]
          (if (= (first (.-data msg)) "patch-make")
            (handle-patch-make (rest (.-data msg)))
            (handle-compress (rest (.-data msg)))))))

(main)
