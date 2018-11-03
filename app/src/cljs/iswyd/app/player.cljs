(ns iswyd.app.player
  (:require [cljsjs.diffdom]
            [iswyd.app.state :as st]))

(defonce dd (js/diffDOM.))
(defonce parser (js/DOMParser.))

(defn init-worker! []
  (js/Worker. "/js/worker.js"))

(defonce worker (init-worker!))

(defn post-player [player events]
  (.postMessage player (clj->js events) "*"))

(defn play-events [player index]
  (post-player player {:type "play"
                       :events (st/events-from index)}))

(defn player-container []
  (.getElementById js/document "player-container"))

(defn player-frame []
  (.getElementById js/document "player-frame"))

(defn player-window []
  (.-contentWindow (player-frame)))

(defn patch-apply [event index]
  (let [prev (st/html)]

    (.postMessage worker (clj->js ["patch-apply" event prev index]))))

(defn player-ratio [event]
  (let [player (player-container)
        parent (.-parentNode player)
        p-width (.-offsetWidth parent)
        width  (:width event)]

    (/ p-width width)))

(defn decode-event [index]
  (let [event (st/event-at index)]
    (cond
      (>= index (st/count-events)) (do
                                     (.log js/console "Finished decoding, start playback...")
                                     (play-events (player-window) 0))
      (= "change" (:type event)) (patch-apply event index)
      :else (do
              (st/update-event! event index)
              (decode-event (inc index))))))

(defn decode-events [events]
  (st/session-events! events)
  (decode-event 0))

(defonce css "<style>* { scroll-behavior: smooth; margin: 0; padding: 0;}</style>")

(defn sanitize-html [html]
  (-> html
      ;; Add scroll smoother CSS
      (.replace #"<head>" (str "<head>" css))
      ;; Remove title as that's not displayed and minimizes style reflow in head
      (.replace #"<title>.{0,}</title>" "")
      ;; Remove strange attribute "%" first seen on github.com
      (.replace (js/RegExp "(<.{0,})(%=\".{0,}\")(.{0,}>)" "g")"$1$3")))

(defn ddiff [event]
  (let [old-doc  (.parseFromString parser (sanitize-html (st/html)) "text/html")
        old-head (.-head old-doc)
        old-body (.-body old-doc)
        new-doc  (.parseFromString parser (sanitize-html (:html event)) "text/html")
        new-head (.-head new-doc)
        new-body (.-body new-doc)]

    (merge event
           {:diff {:head (.diff dd old-head new-head)
                   :body (.diff dd old-body new-body)}})))

(defn worker-cb [msg]
  (let [data  (aget msg "data")
        event (js->clj (aget data 1) :keywordize-keys true)
        index (aget data 2)]

    (st/update-event! (ddiff event) index)
    (decode-event (inc index))))

(set! (.-onmessage worker) #(worker-cb %))

(defn resize-player [event]
  (st/window! {:width  (:width event)
               :height (:height event)
               :scale  (player-ratio event)}))

(defn mouse-event [type]
  (let [event (.createEvent js/document "MouseEvents")]
    (.initMouseEvent event type true true js/window)
    event))

(defn pointer-node []
  (.getElementById js/document "pointer"))

(defn pointer-button []
  (.getElementById js/document "pointer-button"))

(defn move-pointer [event]
  (st/pointer! {:x (:x event)
                :y (:y event)}))

(defn down-pointer [event]
  (.dispatchEvent (pointer-button) (mouse-event "mousedown"))
  (move-pointer event))

(defn up-pointer [event]
  (.dispatchEvent (pointer-button) (mouse-event "mouseup"))
  (move-pointer event))

(defn handle-seek [event]
  (st/seek! (:value event)))

(defn handle-player-message [event]
  (let [type (:type event)]

    (case type
      "resize" (resize-player event)
      "move"   (move-pointer event)
      "down"   (down-pointer event)
      "up"     (up-pointer event)
      "seek"   (handle-seek event)
      (.log js/console (str "Unrecognized event type: " type)))))

(defn handle-player-load [events]
  (let [player (player-window)
        ;; FIXME: Find out why does an empty object get postetd in events
        events  (filter #(contains? % :time) events)]

    (js/addEventListener "message" #(handle-player-message
                                     (js->clj (aget % "data") :keywordize-keys true)))
    (js/addEventListener "resize" #(resize-player (st/window)))
    (decode-events events)))
