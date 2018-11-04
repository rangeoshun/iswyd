(ns iswyd.player.core
  (:require [cljsjs.google-diff-match-patch]
            [cljsjs.diffdom]
            [iswyd.player.state :as st]))

(defonce dd (js/diffDOM.))

(defn write-html [html]
  (doto js/document
    ;;(.open)
    (.write html)
    ;;(.close)
    )
  (st/load!))

(defn apply-diff [diff]
  (let [body (.-body js/document)
        head (.-head js/document)]

    (.apply dd head (clj->js (:head diff)))
    (.apply dd body (clj->js (:body diff)))))

(defn handle-change [event]
  (if-not (st/load?)
    ;; FIXME: Find a way to write html the first time if possible
    ;;(write-html (:html event))
    (apply-diff (:diff event))))

(defn post-parent [event]
  (.postMessage (.-parent js/window) (clj->js event)))

(defn handle-scroll [event]
  (let [mark (:mark event)
        x    (:x event)
        y    (:y event)]

    (if-not mark
      (js/scrollTo x y))))

(defn play-event! [event]
  (let [type  (:type event)]

    (js/setTimeout
     (fn []
       (case type
         "change" (handle-change event)
         "scroll" (handle-scroll event)
         "unload" (st/unload!)
         (.log js/console (str "Unrecognized event type: " type)))))))

(defn main []
  (js/addEventListener "message" #(play-event!
                                   (js->clj (aget % "data") :keywordize-keys true))))

(main)
