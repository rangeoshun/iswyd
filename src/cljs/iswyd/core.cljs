(ns iswyd.core
  (:require [cljsjs.google-diff-match-patch]))

;; -------------------------
;; Changelog
;; TODO: Throttle recording

(def dmp (js/diff_match_patch.))

(def prev-html (atom ""))
(def changelog (atom []))

=
(def styles (atom []))

(defn add-to-changelog [patch, timestamp]
  (swap! changelog (fn [] (conj @changelog {:patch patch
                                            :timestamp timestamp}))))

(def obs-conf #js {:attributes true
                   :childList true
                   :subtree true})

(def doc-root (aget js/document.children 0))

(defn child-list? [mut]
  (= (.-type mut) "childList"))

(defn has-link? [mut]
  (let [nodes (array-seq (.-addedNodes mut))]
    (reduce (fn [acc node]
              (if acc
                acc
                (= (.-localName node) "link")))
            false
            nodes)))

(defn link-added? [mut-list]
  (reduce (fn [acc mut]
            (if acc
              acc
              (and (child-list? mut) (has-link? mut))))
          false
          mut-list))

(defn store-style [url text]
  (swap! styles (fn [] (conj @styles [url text])))
  (js/console.log (clj->js @styles)))

(defn links []
  (array-seq (. js/document getElementsByTagName "link")))

(defn link-src [link]
  (. link getAttribute "href"))

(defn get-req [url, handler]
  (let [req (js/XMLHttpRequest.)]
    (. req addEventListener "load" handler)
    (. req open "get" url)
    (. req send)))

(defn res-text [ev] ev.target.responseText)

(defn stored? [url]
  (reduce (fn [acc link]
            (if acc
              acc
              (= (first link) url)))
          false
          @styles))

(defn get-style [url]
  (if-not (stored? url)
    (get-req url (fn [ev] (store-style url (res-text ev))))))

(defn get-styles [links]
  (js/console.log (count links))
  (if-not (empty? links)
    (reduce (fn [_, link]
              (get-style (link-src link)))
            nil
            links)))

(defn change-handlr [mut-list]
  (let [next-html (.-innerHTML doc-root)
        diff (. dmp patch-make @prev-html next-html)
        patch (. dmp patch-toText diff)]
    (if (> (count patch) 0)
      (add-to-changelog patch (. js/Date now)))
    (js/console.log (clj->js @changelog))
    (if (link-added? mut-list)
      (get-styles (links)))
    (reset! prev-html next-html)))

(def obs (js/MutationObserver. change-handlr))

(defn init-changelog []
  (. obs observe doc-root obs-conf))

(defn main []
  (get-styles (links))
  (init-changelog))
