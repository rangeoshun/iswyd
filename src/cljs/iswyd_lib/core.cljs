(ns iswyd-lib.core
  (:require [goog.dom :as dom]
            [cljsjs.google-diff-match-patch]
            [cljsjs.lz-string]))

;; -------------------------
;; Changelog
;; TODO: Throttle recording?

(def dmp (js/diff_match_patch.))
(def lz js/LZString)

(def prev-html (atom ""))
(def changelog (atom []))

(defn add-to-changelog [patch, timestamp]
  (swap! changelog (fn [] (conj @changelog {:p patch
                                            :t timestamp}))))

(def obs-conf #js {:attributes true
                   :childList true
                   :subtree true})

(defn doc-root [] (aget js/document.children 0))

(defn clone-root []
  (. (doc-root) cloneNode true))

(defn get-tags [root tag]
  (array-seq (dom/getElementsByTagName tag root)))

(defn scripts [root] (get-tags root "script"))
(defn links [root] (get-tags root "link"))
(defn imgs [root] (get-tags root "img"))
(defn inputs [root] (get-tags root "input"))

(defn del-nodes [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)]
      (if node
        (dom/removeNode node))
      (if-not (empty? nodes)
        (recur nodes)))))

(defn abs-src [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (aset node "src" (.-src node)))
      (if-not (empty? others)
        (recur others)))))

(defn abs-href [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (aset node "href" (.-href node)))
      (if-not (empty? others)
        (recur others)))))

(defn cp-values [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (. node setAttribute "value" (.-value node)))
      (if-not (empty? others)
        (recur others)))))

(defn sanitize [root]
  (del-nodes (scripts root))
  (abs-src (imgs root))
  (abs-href (links root))
  (cp-values (inputs root))
  root)

(defn capture []
  (.-outerHTML (sanitize (clone-root))))

(defn change-handler []
  (let [next-html (capture)
        patch (. dmp patch_make @prev-html next-html)]
    (if-not (empty? patch)
      (add-to-changelog patch (. js/Date now)))
    (js/console.log (clj->js @changelog))
    (reset! prev-html next-html)))

(def obs (js/MutationObserver. (fn [] (js/setTimeout change-handler))))

(defn listen-change [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (. node addEventListener "keydown" change-handler))
      (if-not (empty? others)
        (recur others)))))

(defn init-changelog []
  (let [root (doc-root)]
    (change-handler)
    (listen-change (inputs root))
    (. obs observe root obs-conf)))

(defn compressed-log [] (lz.compressToBase64 (js/JSON.stringify (clj->js @changelog))))

(defn main []
  (init-changelog))

(def iswyd-ext #js {:init (fn [] (init-changelog))
                    :capture (fn [] (capture))
                    :changelog (fn [] (clj->js @changelog))
                    :compressed (fn [] (compressed-log))})

(aset js/window "iSwyd" iswyd-ext)
