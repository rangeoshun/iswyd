(ns iswyd.app.player
  (:require [cljsjs.diffdom]
            [iswyd.app.components.core :as ic]

            [iswyd.app.material-ui :as mui]
            [iswyd.app.state :as st]))

(defonce dd (js/diffDOM.))
(defonce parser (js/DOMParser.))

(defn init-worker! []
  (js/Worker. "/js/worker.js"))

(defonce worker (init-worker!))

(defn player-frame []
  (.getElementById js/document "player-frame"))

(defn player-window []
  (.-contentWindow (player-frame)))

(defn post-player! [event]
  (.postMessage (player-window) (clj->js event) "*"))

(defn player-container []
  (.getElementById js/document "player-container"))

(defn patch-apply [event index]
  (let [prev (st/html)]

    (.postMessage worker (clj->js ["patch-apply" event prev index]))))

(defn player-ratio [event]
  (let [player (player-container)
        parent (.-parentNode player)
        p-width (.-offsetWidth parent)
        width  (:width event)]

    (/ p-width width)))

(defn loading? []
  (= (st/player-state) "loading"))

(defn playing? []
  (= (st/player-state) "playing"))

(defn pause! []
  (st/player-state! "paused"))

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

(defn handle-event! [event]
  (let [type (:type event)]

    (case type
      "resize" (resize-player event)
      "move"   (move-pointer event)
      "down"   (down-pointer event)
      "up"     (up-pointer event)
      (.log js/console (str "Unrecognized event type: " type) event))))

(defn play-next! []
  (if (and (playing?)
           (< (st/seek) (st/event-count)))

    (let [index (st/seek)
          event (st/event-at index)
          delta (:delta event)
          pdelta (if (> index 0)
                   (:delta (st/event-at (dec index)))
                   0)
          type  (:type event)]

      (js/setTimeout
       (fn []
         (cond
           (= (:type event) "change") (post-player! event)
           (= (:type event) "scroll") (post-player! event)
           :else (handle-event! event))
         (st/inc-seek!)
         (play-next!))
       (- delta pdelta)))))

(defn play! []
  (st/player-state! "playing")
  (play-next!))

(defn play-events! [index]
  (st/seek! (or index 0))
  (post-player! {:type "unload"})
  (st/player-state! "playing")
  (play-next!))

(defn decode-event [index]
  (let [event (st/event-at index)]
    (cond
      (>= index (st/event-count)) (do
                                    (.log js/console "Finished decoding, start playback...")
                                    (play-events! 0))
      (= "change" (:type event)) (patch-apply event index)
      :else (do
              (st/update-event! event index)
              (decode-event (inc index))))))

(defn decode-events [events]
  (st/events! events)
  (decode-event 0))

(defonce css "<style>* { scroll-behavior: smooth; margin: 0; padding: 0;}</style>")

(defn sanitize-html [html]
  (-> html
      ;; Add scroll smoother CSS
      ;; (.replace #"<head>" (str "<head>\\n" css))
      ;; Remove title as that's not displayed and minimizes style reflow in head
      ;; (.replace #"<title>.{0,}</title>" "")
      ;; Remove strange attribute "%" first seen on github.com
      (.replace (js/RegExp "%=\"\"" "g")"")))

(defn ddiff [event]
  (let [old-doc  (.parseFromString parser (st/html) "text/html")
        old-head (.-head old-doc)
        old-body (.-body old-doc)
        html     (sanitize-html (:html event))
        new-doc  (.parseFromString parser html "text/html")
        new-head (.-head new-doc)
        new-body (.-body new-doc)]

    (merge event
           {:html html
            :diff {:head (.diff dd old-head new-head)
                   :body (.diff dd old-body new-body)}})))

(defn worker-cb [msg]
  (let [data  (aget msg "data")
        event (js->clj (aget data 1) :keywordize-keys true)
        index (aget data 2)]

    (st/update-event! (ddiff event) index)
    (decode-event (inc index))))

(set! (.-onmessage worker) #(worker-cb %))

(defn handle-seek [event]
  (st/seek! (:value event)))

(defn handle-session-load [events]
  (.log js/console "Session loaded, decoding...")
  (let [events  (filter #(contains? % :time) events)]
    (js/addEventListener "resize" #(resize-player (st/window)))
    (decode-events events)))

(defn handle-player-load [sid]
  (if-not (st/loaded?)
    (do
      (.log js/console "Player loaded, fetching session...")
      (st/load!)
      (st/get-session! sid #(handle-session-load %)))))
