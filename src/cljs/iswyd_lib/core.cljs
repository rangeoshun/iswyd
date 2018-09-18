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
(def prev-pos (atom {}))
(def curr-pos (atom {}))

(def changelog (atom []))

(defn now [] (. js/Date now))

(defn log [ev]
  (swap! changelog (fn [] (conj @changelog ev)))
  (js/console.log (clj->js @changelog)))

(defn log-change [patch]
  (log {:tp :change
        :p patch
        :tm (now)}))

(defn log-mouse [ev]
  (log ev)
  (reset! prev-pos ev))

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

;; (def clear-css "* { margin: 0; padding: 0; border: none; }")
;; (defn clear-style [] (js/document.createElement "style"))

;; (defn add-clear [root]
;;   (let [style (clear-style)]
;;     (aset style "innerHTML" clear-css)
;;     (. (aget (. root getElementsByTagName "head") 0) appendChild style)))

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
  ;; (add-clear root)
  (del-nodes (scripts root))
  (abs-src (imgs root))
  (abs-href (links root))
  (cp-values (inputs root))
  root)

(defn capture [] (.-outerHTML (sanitize (clone-root))))

(defn change-handler []
  (let [next-html (capture)
        patch (. dmp patch_make @prev-html next-html)]
    (if-not (empty? patch)
      (log-change patch))
    (reset! prev-html next-html)))

(def obs (js/MutationObserver. (fn [] (js/setTimeout change-handler))))

(defn mouse-ev [type, e] {:tp type
                          :x (aget e "clientX")
                          :y (aget e "clientY")
                          :tm (now)})

(defn pos-handler [type, e]
  (reset! curr-pos (mouse-ev type e)))

(defn pos-change [prev curr]
  (let [prev-x (:x prev -1)
        prev-y (:y prev -1)
        curr-x (:x curr -1)
        curr-y (:y curr -1)]
    (or (not= prev-x curr-x)
        (not= prev-y curr-y))))

(defn pos-cycle []
  (js/setInterval
     (fn []
       (let [prev @prev-pos
             curr @curr-pos]
         (if (pos-change prev curr) (log-mouse curr))))
     500))

(defn listen-change [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (. node addEventListener "keydown" change-handler))
      (if-not (empty? others)
        (recur others)))))

(defn listen-move []
  (js/addEventListener "mousemove" (fn [e] (pos-handler :move e)))
  (pos-cycle))

(defn listen-down []
  (js/addEventListener "mousedown" (fn [e] (log-mouse (mouse-ev :down e)))))

(defn listen-up []
  (js/addEventListener "mouseup" (fn [e] (log-mouse (mouse-ev :up e)))))

(defn init-changelog []
  (let [root (doc-root)]
    (change-handler)
    (listen-move)
    (listen-down)
    (listen-up)
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
