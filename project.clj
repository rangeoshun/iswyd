(defproject example/all "MONOLITH"
  :description "The iSwyd project to help us keep our eyes wide open for user behaviour."

  :plugins [[lein-asset-minifier "0.2.7"
             :exclusions [org.clojure/clojure]]
            [lein-cprint "1.2.0"]
            [lein-cljsbuild "1.1.7"]
            [lein-monolith "1.1.0"]
            [lein-ring "0.12.1"]
            [lein-environ "1.1.0"]]

  :dependencies [[cljsjs/google-diff-match-patch "20121119-2"]
                 [cljsjs/lz-string "1.4.4-1"]
                 [cljsjs/material-ui "3.2.0-0"]
                 [com.github.wajda/lzstring4java "0.1"]
                 [com.novemberain/monger "3.1.0"
                  :exclusions [com.google.guava/guava]]
                 [compojure "1.6.1"]
                 [environ "1.1.0"]
                 [hiccup "1.0.5"]
                 [lein-monolith "1.1.0"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [org.clojure/data.json "0.2.6"]
                 [org.slf4j/slf4j-api "1.7.5"]
                 [org.slf4j/slf4j-simple "1.6.4"]
                 [reagent "0.8.1"]
                 [reagent-utils "0.3.1"]
                 [ring "1.6.3"]
                 [ring-server "0.5.0"]
                 [ring/ring-defaults "0.3.1"]
                 [secretary "1.2.3"]
                 [spootnik/kinsky "0.1.22"]
                 [user-agent "0.1.0"]
                 [venantius/accountant "0.2.4"
                  :exclusions [org.clojure/tools.reader]]]

  ;; :test-selectors
  ;; {:unit (complement :integration)
  ;;  :integration :integration}

  :monolith {:inherit [:test-selectors
                       :env]

             :inherit-leaky [:repositories
                             :managed-dependencies]

             :project-selectors {:deployable :deployable
                                 :unstable   #(= (first (:version %)) \0)
                                 :app        :app
                                 :change     #(= (:service %) :change)
                                 :decode     #(= (:service %) :decode)
                                 :persist    #(= (:service %) :persist)
                                 :sessions   #(= (:service %) :sessions)
                                 :useragent  #(= (:service %) :useragent)
                                 :meta       #(= (:service %) :meta)}

             :project-dirs ["services/*"
                            "app"
                            "not-found"]}

  :profiles {:dev {:env {:dev             true
                         :app-host        "http://0.0.0.0"
                         :api-change-path "/api/changes"
                         :mongo-host      "mongo"
                         :mongo-db        "iswyd"
                         :mongo-session   "sessions"
                         :kafka-host      "kafka:9092"
                         :change-topic    "change"
                         :decode-topic    "decode"
                         :ua-topic        "user-agent"
                         :meta-topic      "meta"}}})
