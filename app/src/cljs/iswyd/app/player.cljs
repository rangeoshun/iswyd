(ns iswyd.app.player
  (:require [iswyd.app.state :as st]))

(defn init-worker! []
  (js/Worker. "/js/worker.js"))

(defonce worker (init-worker!))

(defn changes [events]
  (into [] (doall (filter #(= "change" (:type %)) events))))

(defn post-player-event [player ev]
  (.postMessage player (clj->js ev) "*"))

(defn play-changes [player]
  (loop [events (st/get-changes)]
    (let [current (first events)
          others  (rest events)]

      (post-player-event player current)

      (if-not (empty? others)
        (recur others)))))

(defn get-player-frame []
  (.getElementById js/document "player-frame"))

(defn get-player-window []
  (.-contentWindow (get-player-frame)))

(defn patch-apply [patch index]
  (let [prev (st/get-html)]

    (.postMessage worker (clj->js ["patch-apply" patch prev index]))))

(defn scale-player []
  (let [player (get-player-frame)
        parent (.-parentNode player)
        p-width (.-offsetWidth parent)
        width  (.-offsetWidth player)
        ratio  (/ p-width width)
        style  (.-style player)]

    (aset style "transform" (str "scale(" ratio ")"))))

(defn decode-change [index]
  (let [change (st/get-change-at index)]
    (cond
      (<= (st/count-changes) index) (play-changes (get-player-window))
      change (patch-apply change index))))

(defn decode-changes [events]
  (st/set-changes! (changes events))
  (decode-change 0))

(defn worker-cb [msg]
  (let [data  (aget msg "data")
        event (aget data 1)
        index (aget data 2)]

    (st/update-change! event index)
    (decode-change (inc index))))

(set! (.-onmessage worker) #(worker-cb %))

(defn resize-player [event]
  (let [player (get-player-frame)]

    (aset player "width" (:width event))
    (aset player "height" (:height event)))
  (scale-player))

(defn handle-player-message [ev]
  (let [event (aget ev "data")]
    (case (aget event "type")
      "resize" (resize-player event)
      nil)))

(defn handle-player-load [events]
  (let [player (get-player-window)]

    (js/addEventListener "message" #(handle-player-message %))
    (resize-player (first (filter #(= "resize" (:type %)) events)))
    (decode-changes events)))
