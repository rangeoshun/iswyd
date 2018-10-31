(ns iswyd.app.player
  (:require [iswyd.app.state :as st]))

(defn init-worker! []
  (js/Worker. "/js/worker.js"))

(defonce worker (init-worker!))

(defn post-player-event [player ev]
  (.postMessage player (clj->js ev) "*"))

(defn play-events [player]
  (loop [events (st/session-events)]
    (let [current (first events)
          others  (rest events)]

      (post-player-event player current)

      (if-not (empty? others)
        (recur others)))))

(defn player-container []
  (.getElementById js/document "player-container"))

(defn player-frame []
  (.getElementById js/document "player-frame"))

(defn player-window []
  (.-contentWindow (player-frame)))

(defn patch-apply [event index]
  (let [prev (st/html)]

    (.postMessage worker (clj->js ["patch-apply" event prev index]))))

(defn scale-player []
  (let [player (player-container)
        parent (.-parentNode player)
        p-width (.-offsetWidth parent)
        width  (.-offsetWidth player)
        ratio  (/ p-width width)
        style  (.-style player)]

    (aset style "transform" (str "scale(" ratio ")"))))

(defn decode-event [index]
  (let [event (st/event-at index)]
    (cond
      (>= index (st/count-events)) (play-events (player-window))
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
  (let [player (player-container)
        style  (.-style player)]

    (aset style "width" (str (aget event "width") "px"))
    (aset style "height" (str (aget event "height") "px"))
  (scale-player)))

(defn pointer []
  (.getElementById js/document "pointer"))

(defn move-pointer [event]
  (let [pointer (pointer)
        style   (.-style pointer)]

    (aset style "top" (str (aget event "x") "px"))
    (aset style "left" (str (aget event "y") "px"))))

(defn handle-player-message [ev]
  (let [event (aget ev "data")]
    (case (aget event "type")
      "resize" (resize-player event)
      "move"   (move-pointer event)
      "down"   (move-pointer event)
      "up"     (move-pointer event)
      nil)))

(defn handle-player-load [events]
  (let [player (player-window)]

    (js/addEventListener "message" #(handle-player-message %))
    (js/addEventListener "resize" (fn [] (scale-player)))
    (resize-player (clj->js (first (filter #(= "resize" (:type %)) events))))
    (decode-events events)))
