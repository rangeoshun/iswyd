(ns iswyd.api.core)

(def host "http://0.0.0.0")

(defn query [url_ data]
  (reduce
   (fn [url key]
     (. url.searchParams append (str key) (get data key))
     url)
   url_
   (keys data)))

(defn fetch [url opts]
  (let [req (js/fetch url (clj->js opts))]
    (.catch req (fn [err] (console.log err)))
    (.then req (fn [res] (.json res)))))

(defn get-req [url opts data]
  (fetch (query url data) opts))

(defn post-req [url opts]
  (fetch url opts))

(defn api-req [path opts data]
  (let [url (js/URL. (str host path))]
    (if (= :POST (:method opts))
      (post-req url (merge opts {:body (.stringify js/JSON (clj->js data))}))
      (get-req url opts data))))

(defn post-change [sid changes]
  (api-req "/api/change" {:method :POST} {:sid sid
                                          :cid (str (random-uuid))
                                          :data changes}))
