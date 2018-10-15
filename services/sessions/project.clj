(defproject iswyd.services.sessions "0.1.0-SNAPHOST"
  :description "A web service to expose session data."
  :monolith/inherit true
  :deployable true
  :service :sessions

  :dependencies [[compojure "1.6.1"]
                 [com.novemberain/monger "3.1.0"
                  :exclusions [com.google.guava/guava]]
                 [lein-monolith "1.1.0"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/core.async "0.4.474"]
                 [org.slf4j/slf4j-api "1.7.5"]
                 [org.slf4j/slf4j-simple "1.6.4"]
                 [ring "1.6.3"]
                 [ring-server "0.5.0"]
                 [ring/ring-defaults "0.3.1"]
                 [user-agent "0.1.0"]
                 [environ "1.1.0"]]

  :plugins      [[lein-ring "0.12.1"]
                 [lein-environ "1.1.0"]]

  :source-paths ["src/clj"]

  :ring {:port          3453
         :handler       iswyd.services.sessions.core/main
         :open-browser? false}

  :profiles {:dev { :dependencies [[ring/ring-mock "0.3.2"]
                                   [ring/ring-devel "1.6.3"]]}})
