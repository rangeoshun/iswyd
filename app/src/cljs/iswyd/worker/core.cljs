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
  (let [event  (nth data 0)
        index  (nth data 2)
        patch  (.patch_fromText dmp (aget event "patch"))
        prev   (nth data 1)
        result (first (.patch_apply dmp patch prev))]

    (aset event "html" result)
    (aset event "patch" nil)
    (.postMessage js/self #js ["patch-apply" event index])))

(defn handle-compress [data]
  (let [log    (nth data 0)
        result (.compressToBase64 lz (js/JSON.stringify log))]

    (.postMessage js/self #js ["compress" result])))

(defn main []
  (set! (.-onmessage js/self)
        (fn [msg]
          (case (first (.-data msg))
            "patch-make"  (handle-patch-make (rest (.-data msg)))
            "patch-apply" (handle-patch-apply (rest (.-data msg)))
            "compress"    (handle-compress (rest (.-data msg)))))))

(main)
