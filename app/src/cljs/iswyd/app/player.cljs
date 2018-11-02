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

(defn player-ratio [event]
  (let [player (player-container)
        parent (.-parentNode player)
        p-width (.-offsetWidth parent)
        width  (:width event)]

    (/ p-width width)))

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
  (st/window! {:width  (:width event)
               :height (:height event)
               :scale  (player-ratio event)}))

(defn pointer []
  (.getElementById js/document "pointer"))

(defn move-pointer [event]
  (st/pointer! {:x (:x event)
                :y (:y event)}))

(defn handle-player-message [event]
  (case (:type event)
    "resize" (resize-player event)
    "move"   (move-pointer event)
    "down"   (move-pointer event)
    "up"     (move-pointer event)
    nil))

(defn handle-player-load [events]
  (let [player (player-window)
        ;; FIXME: Find out why does an empty object get postetd in events
        events  (filter #(contains? % :time) events)]

    (js/addEventListener "message" #(handle-player-message
                                     (js->clj (aget % "data") :keywordize-keys true)))
    (js/addEventListener "resize" #(resize-player (st/window)))
    ;; (resize-player (clj->js (first (filter #(= "resize" (:type %)) events))))
    (decode-events events)))
