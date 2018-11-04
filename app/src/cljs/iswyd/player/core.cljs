(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]
            [iswyd.player.state :as st]))

(defonce dd (js/diffDOM.))
(defonce parser (js/DOMParser.))

(defn set-html [html]
  (let [doc (.parseFromString parser html "text/html")
        _ (.log js/console doc)
        head (.-outerHTML(.-head doc))
        body (.-outerHTML(.-body doc))]

    (-> js/document
        (.-firstElementChild)
        (aset "innerHTML" (str  head body)))
    (st/load!)))

(defn apply-diff [diff]
  (let [body (.-body js/document)
        head (.-head js/document)]

    (.apply dd head (clj->js (:head diff)))
    (.apply dd body (clj->js (:body diff)))))

(defn handle-change [event]
  (js/setTimeout
   #(do
     (.time js/console "apply_change")
     (if-not (st/load?)
       (set-html (:html event))
       (apply-diff (:diff event)))
     (.timeEnd js/console "apply_change"))))

(defn post-parent [event]
  (.postMessage (.-parent js/window) (clj->js event)))

(defn handle-scroll [event]
  (let [mark (:mark event)
        x    (:x event)
        y    (:y event)]

    (if-not mark
      (js/scrollTo x y))))

(defn handle-event! [event]
  (let [type  (:type event)]

    (js/setTimeout
     (fn []
       (case type
         "change" (handle-change event)
         "scroll" (handle-scroll event)
         "unload" (st/unload!)
         (.log js/console (str "Unrecognized event type: " type)))))))

(defn main []
  (js/addEventListener "message" #(handle-event!
                                   (js->clj (aget % "data") :keywordize-keys true))))
(.open js/document)
(js/addEventListener "load" #(main))
