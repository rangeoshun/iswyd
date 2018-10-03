(ns iswyd-lib.core
  (:require [goog.dom :as dom]
            [clojure.string :as cstr]
            [cljsjs.lz-string]))

;; -------------------------
;; Changelog
;; TODO: Throttle recording of changes?
;; TODO: Decide to use absolute or relative times for changes

(def lz js/LZString)

;; (def last-tm (atom 0))

(def sid (atom ""))
(def ready (atom false))

(def prev-html (atom ""))

(def prev-pos (atom {}))
(def curr-pos (atom {}))

(def prev-resize (atom {}))
(def curr-resize (atom {}))

(def prev-scroll (atom {}))
(def curr-scroll (atom {}))

(def changelog (atom []))

(def excludes (atom []))

(def frame (dom/createDom "iframe"))

(defn add-css [node style]
  (.forEach
   (.keys js/Object style) (fn [key] (aset (.-style node) key (aget style key)))))

(defn init-frame! [root]
  (add-css frame #js {:width    (str (.-innerWidth js/window) "px")
                      :height   (str (.-innerHeight js/window) "px")
                      :position "fixed"
                      :top      "200%"
                      :left     "200%"})
  (.appendChild (.querySelector root "body") frame))

(defn now []
  (. (js/Date.) getTime))

;; (defn csrf-token []
;;   (.getAttribute (.querySelector js/document "meta[csrf-token]") "csrf-token"))

;; (defn delta-tm [ev]
;;   (let [t1 @last-tm
;;         t2 (:tm ev)]
;;     (reset! last-tm t2)
;;     (- t2 t1)))

(defn compress [log] (lz.compressToBase64 (js/JSON.stringify (clj->js log))))

(defn post-change! []
  (let [changes @changelog]
    (if-not (empty? changes)
      (do
        (reset! changelog [])
        ;;(reset! prev-html "")
        (js/fetch
         "http://0.0.0.0:3450/"
         #js {:method 'POST
              :body (.stringify js/JSON #js {:sid (str @sid)
                                             :cid (str (random-uuid))
                                             :data (compress changes)})})))))

(defn log! [ev]
  (swap! changelog (fn [] (conj @changelog ev)))
  ;;(js/console.log (clj->js ev))
  )

(defn log-change! [patch key]
  (if-not (empty? patch)
    (log! {:tp :change
           :ky key
           :p patch
           :tm (now)})))

(defn log-mouse! [ev]
  (log! ev)
  (if (= ev :click)
    (post-change!))
  (reset! prev-pos ev))

(defn log-scroll! [ev]
  (log! ev)
  (reset! prev-scroll ev))

(defn log-resize! [ev]
  (log! ev)
  (reset! prev-resize ev))

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

(defn del-nodes! [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)]
      (if node
        (dom/removeNode node))
      (if-not (empty? nodes)
        (recur nodes)))))

(defn abs-src! [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (aset node "src" (.-src node)))
      (if-not (empty? others)
        (recur others)))))

(defn abs-href! [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (aset node "href" (.-href node)))
      (if-not (empty? others)
        (recur others)))))

(defn cp-values! [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (.setAttribute node "value" (.-value node)))
      (if-not (empty? others)
        (recur others)))))

(defn mark? [node] (.getAttribute node "data-iswyd-mark"))

(defn mark! [node]
  (let [mark (mark? node)]
    (if-not mark
      ((fn [] (let [mark (random-uuid)]
               (. node setAttribute "data-iswyd-mark" mark)
               mark))))
    mark))

(defn create-mask [node]
  (let [mask  (.createElement js/document "div")
        orig  (.querySelector (doc-root) (str "*[data-iswyd-mark=\"" (mark! node) "\"]"))
        comp  (.getComputedStyle js/window orig)
        style #js {:width      (str (.-offsetWidth orig) "px")
                   :height     (str (.-offsetHeight orig) "px")
                   :display    "inline-block"
                   :background "#333"}]

    (.forEach
     (.keys js/Object comp) (fn [key] (aset (.-style mask) key (aget comp key))))
    (.forEach
     (.keys js/Object style) (fn [key] (aset (.-style mask) key (aget style key))))

    mask))

(defn mask-input! [node]
  (.setAttribute node "value" (cstr/replace (.-value node) #"." "•")))

(defn mask-node! [node]
  (if (= (.-localName node) "input")
    (mask-input! node)
    (.replaceWith node (create-mask node))))

(defn mark-nodes! [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (mark! node))
      (if-not (empty? others)
        (recur others)))))

(defn mask-nodes! [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (mask-node! node))
      (if-not (empty? others)
        (recur others)))))

(defn mask! [root]
  (loop [ex @excludes]
    (let [sel    (first ex)
          nodes  (array-seq (.querySelectorAll root sel))
          others (rest ex)]
      (mark-nodes! nodes)
      (mask-nodes! nodes)
      (if-not (empty? others)
        (recur others)))))

(defn sanitize! [root]
  ;; (add-clear root)
  (del-nodes! (scripts root))
  (abs-src! (imgs root))
  (abs-href! (links root))
  (cp-values! (inputs root))
  (mask! root)
  root)

(defn capture []
  (mark-nodes! (array-seq (.querySelectorAll (doc-root) "*")))
  (.-outerHTML (sanitize! (clone-root))))

(def obs-conf #js {:attributes true
                   :childList true
                   :subtree true})

(defn init-worker! []
  (js/Worker. "/js/bootstrap_worker.js"))

(defonce worker (init-worker!))

(defn change-handler! []
  (let [html (capture)]
    (.postMessage worker (clj->js [@prev-html, html]))
    (reset! prev-html html)))

(def obs (js/MutationObserver. (fn [] (change-handler!))))

(defn keys-num [ev]
    (+ (if (aget ev "ctrlKey") 1 0)
       (if (aget ev "shiftKey") 2 0)
       (if (aget ev "altKey") 4 0)
       (if (aget ev "metaKey") 8 0)))

(defn mouse-ev [type, ev] {:tp type
                           :bs (.-buttons ev)
                           :ks (keys-num ev)
                           :x  (.-clientX ev)
                           :y  (.-clientY ev)
                           :tm (now)})

(defn pos-handler! [type, ev]
  (reset! curr-pos (mouse-ev type ev)))

(defn pos-change  [prev curr]
    (or (not= (:x prev -1) (:x curr -1))
        (not= (:y prev -1) (:y curr -1))))

(defn pos-cycle! []
  (js/setInterval
     (fn []
       (let [prev @prev-pos
             curr @curr-pos]
         (if (pos-change prev curr) (log-mouse! curr))))
     300))

(defn listen-change! [nodes]
  (loop [nodes nodes]
    (let [node (first nodes)
          others (rest nodes)]
      (if node (. node addEventListener "keydown" change-handler!))
      (if-not (empty? others)
        (recur others)))))

(defn listen-move! []
  (js/addEventListener "mousemove" (fn [ev] (pos-handler! :move ev)))
  (pos-cycle!))

(defn listen-down! []
  (js/addEventListener "mousedown" (fn [ev] (log-mouse! (mouse-ev :down ev)))))

(defn listen-up! []
  (js/addEventListener "mouseup" (fn [ev] (log-mouse! (mouse-ev :up ev)))))

;; (defn scroll-target [node] (if (= node js/document) js/document.body node))

(defn scroll-ev [type, ev]
  (let [node (aget ev "target")]
    {:tp type
     ;; :m (mark node)
     :ks (keys-num ev)
     :x  (.-scrollX js/window)
     :y  (.-scrollY js/window)
     :tm (now)}))

(defn scroll-change [prev curr]
  (or ;; (not= (:m prev "") (:m curr ""))
   (not= (:x prev -1) (:x curr -1))
   (not= (:y prev -1) (:y curr -1))))

(defn scroll-handler! [type, ev]
  (reset! curr-scroll (scroll-ev type ev)))

(defn scroll-cycle! []
  (js/setInterval
   (fn []
     (let [prev @prev-scroll
           curr @curr-scroll]
       (if (scroll-change prev curr) (log-scroll! curr))))
   100))

(defn listen-scroll! []
  (js/addEventListener "scroll" (fn [ev] (scroll-handler! :scroll ev)))
  (scroll-cycle!))

(defn resize-ev [] {:tp :resize
                    :w  (aget js/window "innerWidth")
                    :h  (aget js/window "innerHeight")
                    :tm (now)})

(defn resize-change [prev curr]
  (or
   (not= (:w prev -1) (:w curr -1))
   (not= (:h prev -1) (:h curr -1))))

(defn resize-handler! []
  (reset! curr-resize (resize-ev)))

(defn resize-cycle! []
  (resize-handler!)
  (js/setInterval
   (fn []
     (let [prev @prev-resize
           curr @curr-resize]
       (if (resize-change prev curr) (log-resize! curr))))
   100))

(defn listen-resize! []
  (js/addEventListener "resize" (fn [_] (resize-handler!)))
  (resize-cycle!))

(defn worker-cb [msg]
  (let [data  (.-data msg)
        patch (aget data 0)
        key   (aget data 1)]
  (log-change! patch key)))

(defn init-posting! []
  (js/setInterval #(post-change!) 10000)
  (js/addEventListener "blur" #(post-change!)))

(defn init-changelog! [opts]
  (reset! excludes (opts "exclude" []))
  (if-not @ready
    (do
      (reset! ready true)
      (reset! sid (random-uuid))
      (let [root (doc-root)]
        (change-handler!)
        (listen-move!)
        (listen-down!)
        (listen-up!)
        (listen-scroll!)
        (listen-resize!)
        (listen-change! (inputs root))
        (. obs observe root obs-conf)
        (init-frame! root))
      (init-posting!)
      (set! (.-onmessage worker) (fn [msg] (worker-cb msg)))
      true)
    false))

(def iswyd-ext #js {:init       (fn [opts] (init-changelog! (js->clj (or opts {}))))
                    :capture    (fn [] (.-outerHTML (sanitize! (clone-root))))
                    :changelog  (fn [] (clj->js @changelog))
                    :postchange (fn [] (post-change!))})

(aset js/window "iSwyd" iswyd-ext)
