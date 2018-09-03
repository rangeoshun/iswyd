(ns iswyd.core
  (:require [cljsjs.google-diff-match-patch]))

;; -------------------------
;; Changelog
;; TODO: Throttle recording
;; TODO: Use mutation observer instead to record attribute changes

(def dmp (js/diff_match_patch.))

(def prev-html (atom ""))
(def changelog (atom []))

(defn add-to-changelog [patch, timestamp]
  (swap! changelog (fn [] (conj @changelog {:patch patch
                                            :timestamp timestamp}))))

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

;; -------------------------
;; Styles

(def styles (atom []))

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

(defn res-text [ev]
  ev.target.responseText)

(defn save-style [style])

(defn get-style [url]
  (get-req url (fn [ev] (store-style url (res-text ev)))))

(defn main []
  (get-style (link-src (first (links))))
  (init-changelog))
