(ns iswyd-lib.core
  (:require [goog.dom :as dom]
            [cljsjs.lz-string]))

;; -------------------------
;; Changelog
;; TODO: Throttle recording of changes?
;; TODO: Decide to use absolute or relative times for changes

(def lz js/LZString)

;; (def last-tm (atom 0))

(def prev-html (atom ""))
(def prev-pos (atom {}))
(def curr-pos (atom {}))

(def prev-scroll (atom {}))
(def curr-scroll (atom {}))

(def changelog (atom []))

(defn now [] (. (js/Date.) getTime))

(defn csrf-token []
  (.getAttribute (.querySelector js/document "meta[csrf-token]") "csrf-token"))

;; (defn delta-tm [ev]
;;   (let [t1 @last-tm
;;         t2 (:tm ev)]
;;     (reset! last-tm t2)
;;     (- t2 t1)))

(defn log [ev]
  (swap! changelog (fn [] (conj @changelog ev)))
  ;;(js/console.log (clj->js ev))
  )

(defn log-change [patch]
  (if-not (empty? patch)
    (log {:tp :change
          :p patch
          :tm (now)})))

(defn log-mouse [ev]
  (log ev)
  (reset! prev-pos ev))

(defn log-scroll [ev]
  (log ev)
  (reset! prev-scroll ev))

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
      (if node (.setAttribute node "value" (.-value node)))
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

(def obs-conf #js {:attributes true
                 :childList true
                 :subtree true})

(defn init-worker []
  (js/Worker. "http://0.0.0.0:3449/js/bootstrap_worker.js"))

(defonce worker (init-worker))

(defn change-handler []
  (let [html (capture)]
    (.postMessage worker (clj->js [@prev-html, html]))
    (reset! prev-html html)))

(def obs (js/MutationObserver. (fn [] (change-handler))))

(defn compress [log] (lz.compress (js/JSON.stringify (clj->js log))))

(defn post-change []
  (let [changes @changelog]
    (reset! changelog [])
    (js/fetch
     ;; (:api-changes-url env)
     "http://0.0.0.0:3449/api/changes"
     #js {:method 'POST
          :body (.stringify js/JSON (compress changes))})))

(defn keys-num [ev]
    (+ (if (aget ev "ctrlKey") 1 0)
       (if (aget ev "shiftKey") 2 0)
       (if (aget ev "altKey") 4 0)
       (if (aget ev "metaKey") 8 0)))

(defn mouse-ev [type, ev] {:tp type
                           :bs (aget ev "buttons")
                           :ks (keys-num ev)
                           :x (aget ev "clientX")
                           :y (aget ev "clientY")
                           :tm (now)})

(defn pos-handler [type, ev]
  (reset! curr-pos (mouse-ev type ev)))

(defn pos-change [prev curr]
    (or (not= (:x prev -1) (:x curr -1))
        (not= (:y prev -1) (:y curr -1))))

(defn pos-cycle []
  (js/setInterval
     (fn []
       (let [prev @prev-pos
             curr @curr-pos]
         (if (pos-change prev curr) (log-mouse curr))))
     300))


(defn listen-change [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (. node addEventListener "keydown" change-handler))
      (if-not (empty? others)
        (recur others)))))

(defn listen-move []
  (js/addEventListener "mousemove" (fn [ev] (pos-handler :move ev)))
  (pos-cycle))

(defn listen-down []
  (js/addEventListener "mousedown" (fn [ev] (log-mouse (mouse-ev :down ev)))))

(defn listen-up []
  (js/addEventListener "mouseup" (fn [ev] (log-mouse (mouse-ev :up ev)))))

(defn mark? [node] (.getAttribute node "data-iswyd-mark"))

;; (defn mark [node]
;;   (let [mark (mark? node)]
;;     (js/console.log mark)
;;     (if-not mark
;;       ((fn [] (let [mark (random-uuid)]
;;               (js/console.log mark)
;;               (. node setAttribute "data-iswyd-mark" mark)
;;               mark))))
;;     mark))

;; (defn scroll-target [node] (if (= node js/document) js/document.body node))

(defn scroll-ev [type, ev]
  (let [node (aget ev "target")]
    {:tp type
     ;; :m (mark node)
     :ks (keys-num ev)
     :x (.-scrollX js/window)
     :y (.-scrollY js/window)
     :tm (now)}))

(defn scroll-change [prev curr] (or ;; (not= (:m prev "") (:m curr ""))
                                    (not= (:x prev -1) (:x curr -1))
                                    (not= (:y prev -1) (:y curr -1))))

(defn scroll-handler [type, ev]
  (reset! curr-scroll (scroll-ev type ev)))

(defn scroll-cycle []
  (js/setInterval
   (fn []
     (let [prev @prev-scroll
           curr @curr-scroll]
       (if (scroll-change prev curr) (log-scroll curr))))
   100))

(defn listen-scroll []
  (js/addEventListener "scroll" (fn [ev] (scroll-handler :scroll ev)))
  (scroll-cycle))

(defn init-changelog []
  (let [root (doc-root)]
    (change-handler)
    (listen-move)
    (listen-down)
    (listen-up)
    (listen-scroll)
    (listen-change (inputs root))
    (. obs observe root obs-conf))
  (set! (.-onmessage worker) (fn [msg]
                               (log-change (.-data msg)))))

(defn main []
  (init-changelog))

(def iswyd-ext #js {:init (fn [] (init-changelog))
                  :capture (fn [] (capture))
                  :changelog (fn [] (clj->js @changelog))
                  :compressed (fn [] (compress @changelog))
                  :postchange (fn [] (post-change))})

(aset js/window "iSwyd" iswyd-ext)
