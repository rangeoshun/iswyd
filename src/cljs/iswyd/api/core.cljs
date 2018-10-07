(ns iswyd.api.core)

(def host "http://0.0.0.0:3450/")

(defn query [url_ data]
  (reduce
   (fn [url key]
     (. url.searchParams append (str key) (get data key))
     url)
   url_
   (keys data)))

(defn fetch [url opts]
  (let [req (js/fetch url opts)]
    (.catch req (fn [err] (console.log err)))
    (.then req (fn [res] (.json res)))))

(defn get-req [url opts data]
  (fetch (query url data) opts))

(defn post-req [url opts]
  (fetch url opts))

(defn api-req [path opts data]
  (let [url (js/URL. (str host path))]
    (if (= :POST opts.method)
      (post-req url (merge opts {:body data}))
      (get-req url opts data))))

(defn post-change [sid changes]
  (api-req "/repos" {:method :POST} {'search_criteria term}))
