(ns iswyd-lib.core
  (:require [goog.dom :as dom]
            [clojure.string :as cstr]
            [clojure.string :as str]))

;; -------------------------
;; Changelog
;; TODO: Throttle recording of changes?
;; TODO: Decide on whether to use absolute or relative times for changes

;; (def last-tm (atom 0))

(defonce sid (atom ""))
(defonce ready (atom false))

(defonce prev-html (atom ""))

(defonce prev-pos (atom {}))
(defonce curr-pos (atom {}))

(defonce prev-resize (atom {}))
(defonce curr-resize (atom {}))

(defonce prev-scroll (atom {}))
(defonce curr-scroll (atom {}))

(defonce changelog (atom []))

(defonce excludes (atom ""))

(defonce frame (dom/createDom "iframe"))

(defn add-css! [node style]
  (.forEach
   (.keys js/Object style) (fn [key] (aset (.-style node) key (aget style key)))))

(defn mark? [node] (.getAttribute node "data-iswyd-mark"))

(defn mark! [node]
  (let [mark (mark? node)]
    (if-not mark
      (do (let [mark (random-uuid)]
                (. node setAttribute "data-iswyd-mark" mark)
                mark)))
    mark))

(defn init-frame! [root]
  (add-css! frame #js {:width    (str (.-innerWidth js/window) "px")
                       :height   (str (.-innerHeight js/window) "px")
                       :position "fixed"
                       :top      "200%"
                       :left     "200%"})
  ;;(mark! frame)
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


(defn post-change! [changes]
  (if-not (cstr/blank? changes)
    (js/fetch
     "http://0.0.0.0:3450/"
     #js {:method 'POST
          :body (.stringify js/JSON #js {:sid (str @sid)
                                         :cid (str (random-uuid))
                                         :data changes})})))

(defn log! [ev]
  (swap! changelog (fn [] (conj @changelog ev))))

(defn log-change! [patch key]
  (if-not (empty? patch)
    (log! {:tp :change
           :ky key
           :p patch
           :tm (now)})))

(defn log-scroll! [ev]
  (log! ev)
  (reset! prev-scroll ev))

(defn log-resize! [ev]
  (log! ev)
  (reset! prev-resize ev))

(defn doc-root []
  (.querySelector js/document "html"))

(defn clone-root []
  (.cloneNode (doc-root) true))

(defn frame! [root]
  ;; root)
  (let [doc (.-outerHTML root)
        fdoc (.-contentDocument frame)]
    (.write fdoc doc)
    (.querySelector fdoc "html")))

(defn get-tags [root tag]
  (array-seq (dom/getElementsByTagName tag root)))

(defn iframes [root]
  (get-tags root "iframe"))

(defn scripts [root]
  (get-tags root "script"))

(defn links [root]
  (get-tags root "link"))

(defn imgs [root]
  (get-tags root "img"))

(defn inputs [root]
  (get-tags root "input"))

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

(defn create-mask [node]
  (let [mask  (.createElement js/document "div")
        orig  (.querySelector (doc-root) (str "[data-iswyd-mark=\"" (mark? node) "\"]"))
        comp  (.getComputedStyle js/window orig)
        style #js {:width      (str (.-offsetWidth orig) "px")
                   :height     (str (.-offsetHeight orig) "px")
                   :display    "inline-block"
                   :background "#333"}]
        ;; comp  (.getComputedStyle js/window node)
        ;; style #js {:width      (str (.-offsetWidth node) "px")
        ;;            :height     (str (.-offsetHeight node) "px")
        ;;            :display    "inline-block"
        ;;            :background "#333"}]
    (add-css! mask comp)
    (add-css! mask style)
    mask))

(defn mask-input! [node]
  (.setAttribute node "value" (cstr/replace (.-value node) #"." "•")))

(defn mask-node! [node]
  (if (= (.-localName node) "input")
    (mask-input! node)
    (.replaceWith node (create-mask node))))

(defn mark-nodes! [nodes]
  (loop [nodes nodes]
    (let [node   (first nodes)
          others (rest nodes)]
      (if node (mark! node))
      (if-not (empty? others)
        (recur others)))))

(defn mask-nodes! [nodes]
  (loop [nodes nodes]
    (let [node   (first nodes)
          others (rest nodes)]
      (if node (mask-node! node))
      (if-not (empty? others)
        (recur others)))))

(defn excluded-nodes [root]
  ;;(.log js/console (clj->js @excludes))
  (if-not (cstr/blank? @excludes)
    (array-seq (.querySelectorAll root (clj->js @excludes)))
    []))

(defn mask! [root]
  (mask-nodes! (excluded-nodes root))
  root)

(defn sanitize! [root]
  ;; (add-clear root)
  (del-nodes! (iframes root))
  (del-nodes! (scripts root))
  (abs-src! (imgs root))
  (abs-href! (links root))
  (cp-values! (inputs root))
  root)

(defn capture [root]
  (.-outerHTML (mask!
                ;;(frame!
                (sanitize! root)
                ;;)
               )))

(defn init-worker! []
  (js/Worker. "/js/bootstrap_worker.js"))

(defonce worker (init-worker!))

(defn compress-post! []
  (js/setTimeout
   (let [changes @changelog]
     (reset! changelog [])
     (fn [] (.postMessage
            worker
            (clj->js ["compress" (clj->js changes)]))))))

(defn change-handler! []
  (mark-nodes! (excluded-nodes (doc-root)))
  (let [html (capture (clone-root))]
    (js/setTimeout
     (fn [] (.postMessage
             worker
             (clj->js ["patch-make"
                       @prev-html,
                       html]))))
    (reset! prev-html html)))

(def obs-conf #js {:attributes true
                   :childList true
                   :subtree true})

(defonce obs (js/MutationObserver. (fn [ev] (change-handler!))))

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

(defn log-mouse! [ev]
  (log! ev)
  (if (= ev :click)
    (compress-post!))
  (reset! prev-pos ev))

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

(defn third [arr] (aget arr 0))

(defn worker-cb [msg]
  (let [data  (.-data msg)
        task  (first data)]
    (if (= task "patch-make")
      (log-change! (second data) (third data))
      (post-change! (second data)))))

(defn init-posting! []
  (js/setInterval #(compress-post!) 10000)
  (js/addEventListener "blur" #(compress-post!)))

(defn init-changelog! [opts]
  (if-not @ready
    (do
      (reset! excludes (cstr/join "," (:exclude opts)))
      (reset! ready true)
      (reset! sid (random-uuid))
      (mark-nodes! (excluded-nodes (doc-root)))
      (let [root (doc-root)]
        ;; (init-frame! root)
        (change-handler!)
        (listen-move!)
        (listen-down!)
        (listen-up!)
        (listen-scroll!)
        (listen-resize!)
        (listen-change! (inputs root))
        (. obs observe root obs-conf))
      (init-posting!)
      (set! (.-onmessage worker) (fn [msg] (worker-cb msg)))
      true)
    false))

(def iswyd-ext #js {:init       (fn [opts]
                                  (init-changelog!
                                   (merge {:exclude []}
                                          (js->clj opts :keywordize-keys true))))
                    :capture    (fn [] (capture (clone-root)))
                    :changelog  (fn [] (clj->js @changelog))})

(aset js/window "iSwyd" iswyd-ext)
