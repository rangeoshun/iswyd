(ns iswyd.app.player
  (:require [iswyd.app.state :as st]))

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
      (>= index (st/count-events)) (play-events (player-window) 0)
      (= "change" (:type event)) (patch-apply event index)
      :else (do
              (st/update-event! (clj->js event) index)
              (decode-event (inc index))))))

(defn decode-events [events]
  (st/session-events! events)
  (decode-event 0))

(defn worker-cb [msg]
  (let [data  (aget msg "data")
        event (aget data 1)
        index (aget data 2)]

    (st/update-event! event index)
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

(defn pointer-touch []
  (.getElementById js/document "pointer"))

(defn move-pointer [event]
  (st/pointer! {:x (:x event)
                :y (:y event)}))

(defn down-pointer [event]
  (.dispatchEvent (pointer-touch) (mouse-event "mousedown"))
  (move-pointer event))

(defn up-pointer [event]
  (.dispatchEvent (pointer-touch) (mouse-event "mouseup"))
  (move-pointer event))

(defn handle-player-message [event]
  (case (:type event)
    "resize" (resize-player event)
    "move"   (move-pointer event)
    "down"   (down-pointer event)
    "up"     (up-pointer event)
    nil))

(defn handle-player-load [events]
  (let [player (player-window)
        ;; FIXME: Find out why does an empty object get postetd in events
        events  (filter #(contains? % :time) events)]

    (js/addEventListener "message" #(handle-player-message
                                     (js->clj (aget % "data") :keywordize-keys true)))
    (js/addEventListener "resize" #(resize-player (st/window)))
    (decode-events events)))
