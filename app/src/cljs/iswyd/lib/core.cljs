(ns iswyd.lib.core
  (:require [goog.dom :as dom]
            [clojure.string :as cstr]
            [iswyd.api.core :as api]))

;; ------------------------- /
;; Changelog
;; TODO: Throttle recording of changes?
;; TODO: Decide on whether to use absolute or relative times for changes

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

(defn add-css! [node style]
  (.forEach
   (.keys js/Object style) (fn [key] (aset (.-style node) key (aget style key)))))

(defn doc? [node]
  (= node js/document))

(defn mark? [node]
  (.getAttribute node "data-iswyd-mark"))

(defn mark! [node]
  (if-not (doc? node)
    (let [mark (mark? node)]
      (if-not mark
        (do (let [mark (random-uuid)]
              (. node setAttribute "data-iswyd-mark" mark)
              mark)))
      mark)))

(defn now []
  (. (js/Date.) getTime))

;; (defn csrf-token []
;;   (.getAttribute (.querySelector js/document "meta[csrf-token]") "csrf-token"))

(defn log! [ev]
  (swap! changelog (fn [] (conj @changelog (merge ev {:time (now)})))))

(defn log-change! [patch key]
  (if-not (empty? patch)
    (log! {:type  :change
           :key   key
           :patch patch})))
(defn log-focus! []
  (log! {:type :focus}))

(defn log-blur! []
  (log! {:type :blur}))

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
    (let [node   (first nodes)
          others (rest nodes)]
      (if node (aset node "src" (.-src node)))
      (if-not (empty? others)
        (recur others)))))

(defn abs-href! [nodes]
  (loop [nodes nodes]
    (let [node   (first nodes)
          others (rest nodes)]
      (if node (aset node "href" (.-href node)))
      (if-not (empty? others)
        (recur others)))))

(defn cp-values! [nodes]
  (loop [nodes nodes]
    (let [node   (first nodes)
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
  (if-not (cstr/blank? @excludes)
    (array-seq (.querySelectorAll root (clj->js @excludes)))
    []))

(defn mask! [root]
  (mask-nodes! (excluded-nodes root))
  root)

(defn sanitize! [root]
  ;; (add-clear root)
  ;; (del-nodes! (iframes root))
  (del-nodes! (scripts root))
  (abs-src! (imgs root))
  (abs-href! (links root))
  (cp-values! (inputs root))
  root)

(defn capture [root]
  (.-outerHTML (mask! (sanitize! root))))

(defn init-worker! []
  (js/Worker. "/js/worker.js"))

(defonce worker (init-worker!))

(defn compress-post! []
  (js/setTimeout
   (let [changes @changelog]
     (if-not (empty? changes)
       (do
         (reset! changelog [])
         (fn [] (.postMessage
                worker
                (clj->js ["compress" (clj->js changes)]))))))))

(defn change-handler! []
  (mark-nodes! (excluded-nodes (doc-root)))
  (let [html (capture (clone-root))]
    (js/setTimeout
     (fn []
       (.postMessage
        worker
        (clj->js ["patch-make"
                  @prev-html,
                  html]))
       (reset! prev-html html)))))

(def obs-conf #js {:attributes true
                   :childList  true
                   :subtree    true})

(defonce obs (js/MutationObserver. (fn [ev] (change-handler!))))

(defn keys-num [ev]
    (+ (if (aget ev "ctrlKey") 1 0)
       (if (aget ev "shiftKey") 2 0)
       (if (aget ev "altKey") 4 0)
       (if (aget ev "metaKey") 8 0)))

(defn mouse-ev [type, ev] {:type    type
                           :buttons (.-buttons ev)
                           :keys    (keys-num ev)
                           :x       (.-pageX ev)
                           :y       (.-pageY ev)})

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
     82))

(defn listen-change! [nodes]
  (loop [nodes nodes]
    (let [node   (first nodes)
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

(defn scroll-ev [type, ev]
  (let [node (aget ev "target")]
    {:type type
     :mark (mark! node)
     :keys (keys-num ev)
     :x    (.-scrollX js/window)
     :y    (.-scrollY js/window)}))

(defn scroll-change [prev curr]
  (or
   (not= (:mark prev) (:mmark curr))
   (not= (:x prev -1) (:x curr -1))
   (not= (:y prev -1) (:y curr -1))))

(defn scroll-handler! [type, ev]
  (if-not (doc? (.-target ev))
    (mark! (.-target ev)))
  (reset! curr-scroll (scroll-ev type ev)))

(defn scroll-cycle! []
  (js/setInterval
   (fn []
     (let [prev @prev-scroll
           curr @curr-scroll]
       (if (scroll-change prev curr) (log-scroll! curr))))
   41))

(defn listen-scroll! []
  (js/addEventListener "scroll" (fn [ev] (scroll-handler! :scroll ev)))
  (scroll-cycle!))

(defn resize-ev [] {:type   :resize
                    :width  (aget js/window "innerWidth")
                    :height (aget js/window "innerHeight")})

(defn resize-change [prev curr]
  (or
   (not= (:width prev -1) (:width curr -1))
   (not= (:height prev -1) (:height curr -1))))

(defn resize-handler! []
  (reset! curr-resize (resize-ev)))

(defn resize-cycle! []
  (log-resize! (resize-ev))
  (js/setInterval
   (fn []
     (let [prev @prev-resize
           curr @curr-resize]
       (if (resize-change prev curr) (log-resize! curr))))
   82))

(defn listen-resize! []
  (js/addEventListener "resize" (fn [_] (resize-handler!)))
  (resize-cycle!))

(defn third [arr] (aget arr 2))

(defn worker-cb [msg]
  (let [data (.-data msg)
        task (first data)]
    (if (= task "patch-make")
      (log-change! (second data) (third data))
      (api/post-change (str @sid) (second data)))))

(defn init-posting! []
  (js/setInterval #(compress-post!) 1000)
  (js/addEventListener "blur" #(compress-post!)))

(defn handle-location []
  (let [que (or (.getItem js/sessionStorage "iswyd_session_que") [])]
    (.setItem js/sessionStorage "iswyd_session_que"
              (.concat que #js {:session_id (str @sid)
                                :location   (str js/location)}))))

(defn listen-popchange! []
  (js/addEventListener "popchange" #(handle-location)))

(defn listen-blur-focus! []
  (js/addEventListener "blur" #(log-blur!))
  (js/addEventListener "focus" #(log-focus!)))

(defn handle-meta [meta]
  (api/post-meta (str @sid) {:screen {:width  (.-width  js/screen)
                                      :height (.-height js/screen)}
                             :custom meta}))

(defn init-changelog! [opts]
  (if-not @ready
    (do
      (reset! sid (random-uuid))
      (handle-meta (:meta opts))
      (reset! excludes (cstr/join "," (:exclude opts)))
      (reset! ready true)
      (mark-nodes! (excluded-nodes (doc-root)))
      (init-posting!)
      (set! (.-onmessage worker) #(worker-cb %))
      (let [root (doc-root)]
        (change-handler!)
        (listen-move!)
        (listen-down!)
        (listen-up!)
        (listen-scroll!)
        (listen-resize!)
        (listen-popchange!)
        (listen-change! (inputs root))
        (. obs observe root obs-conf))
      true)
    false))

(def iswyd-ext #js {:init #(init-changelog!
                            (merge {:exclude ["iframe"]}
                                   (js->clj % :keywordize-keys true)))})

(defn main []
  (.log js/console "iSwyd registered, waiting for init...")
  (aset js/window "iSwyd" iswyd-ext))

(main)
