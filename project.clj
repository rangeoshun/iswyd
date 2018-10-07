(defproject iswyd "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[cljsjs/google-diff-match-patch "20121119-2"]
                 [cljsjs/lz-string "1.4.4-1"]
                 [com.github.wajda/lzstring4java "0.1"]
                 [com.novemberain/monger "3.1.0"
                  :exclusions [com.google.guava/guava]]
                 [compojure "1.6.1"]
                 [hiccup "1.0.5"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"
                  :scope "provided"]
                 [org.clojure/data.json "0.2.6"]
                 [org.slf4j/slf4j-api "1.7.5"]
                 [org.slf4j/slf4j-simple "1.6.4"]
                 [overtone/at-at "1.2.0"]
                 [reagent "0.8.1"]
                 [reagent-utils "0.3.1"]
                 [ring "1.6.3"]
                 [ring-server "0.5.0"]
                 [ring/ring-defaults "0.3.1"]
                 [secretary "1.2.3"]
                 [spootnik/kinsky "0.1.22"]
                 [venantius/accountant "0.2.4"
                  :exclusions [org.clojure/tools.reader]]
                 [yogthos/config "1.1.1"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-asset-minifier "0.2.7"
             :exclusions [org.clojure/clojure]]]

  :min-lein-version "2.5.0"
  :uberjar-name "iswyd.warswyd.jar"
  ;; :main iswyd.app.server
  :omit-source true
  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources" "target/cljsbuild"]

  :minify-assets
  {:assets
   {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :cljsbuild
  {:builds {:min-lib
            {:source-paths ["src/cljs/iswyd/lib"]
             :compiler
             {:externs ["iswyd_lib.ext.js"]
              :output-to "target/cljsbuild/public/js/iswyd_lib.min.js"
              :output-dir "target/cljsbuild/public/js/min_lib_out"
              :optimizations :advanced
              :pretty-print false}}
            :min-worker
            {:source-paths ["src/cljs/iswyd/worker"]
             :compiler
             {:output-to "target/cljsbuild/public/js/iswyd_worker.min.js"
              :output-dir "target/cljsbuild/public/js/min_worker-out"
              :optimizations :advanced
              :pretty-print true}}
            :worker
            {:source-paths ["src/cljs/iswyd/worker"]
             :compiler
             {:output-to "target/cljsbuild/public/js/iswyd_lib_worker.js"
              :output-dir "target/cljsbuild/public/js/worker-out"
              :optimizations :advanced
              :source-map "target/cljsbuild/public/js/iswyd_lib_worker.js.map"
              :pretty-print true}}
            :lib
            {:source-paths ["src/cljs/iswyd/lib"
                            "src/cljs/iswyd/api"]
             :compiler
             {:externs ["iswyd_lib.ext.js"]
              :output-to "target/cljsbuild/public/js/iswyd_lib.js"
              :output-dir "target/cljsbuild/public/js/lib_out"
              :optimizations :advanced
              :source-map "target/cljsbuild/public/js/iswyd_lib.js.map"
              :pretty-print true}}
            :app
            {:source-paths ["src/cljs/iswyd/app"
                            "src/cljs/iswyd/api"]
             :figwheel {:on-jsload "iswyd.app.core/mount-root"}
             :compiler
             {:main "iswyd.dev"
              :output-to "target/cljsbuild/public/js/app.js"
              :output-dir "target/cljsbuild/public/js/app_out"
              :source-map "target/cljsbuild/public/js/app.js.map"
              :optimizations :advanced
              :pretty-print true}}}}

  :profiles {:change-srv-dev {:plugins [[lein-ring "0.12.1"]]
                              :source-paths ["src/clj/iswyd/services/change"]
                              :ring {:port 3450
                                     :main iswyd.services.change.core/-main
                                     :handler iswyd.services.change.core/main
                                     :open-browser? false}}

             :decode-srv-dev {:plugins [[lein-ring "0.12.1"]]
                              :source-paths ["src/clj/iswyd/services/decode"]
                              :ring {:port 3451
                                     :main iswyd.services.change.core/-main
                                     :handler iswyd.services.decode.core/main
                                     :open-browser? false}}

             :row-srv-dev {:plugins [[lein-ring "0.12.1"]]
                           :source-paths ["src/clj/iswyd/services/decode"]
                           :ring {:port 3452
                                  :main iswyd.services.row.core/-main
                                  :handler iswyd.services.row.core/main}}

             :sessions-srv-dev {:plugins [[lein-ring "0.12.1"]]
                                :source-paths ["src/clj/iswyd/services/sessions"]
                                :ring {:port 3453
                                       :main iswyd.services.sessions.core/-main
                                       :handler iswyd.services.sessions.core/main}}

             :app-dev {:plugins [[lein-ring "0.12.1"]]
                       :source-paths ["src/clj/iswyd/app"]
                       :ring {:port 3449
                              :main iswyd.app.server/-main
                              :handler iswyd.app.handler/app}}

             :prod {:resource-paths ["config/prod"]}

             :dev {:repl-options {:init-ns iswyd.repl}
                   :dependencies [[cider/piggieback "0.3.8"]
                                  [binaryage/devtools "0.9.10"]
                                  [ring/ring-mock "0.3.2"]
                                  [ring/ring-devel "1.6.3"]
                                  [prone "1.5.2"]
                                  [figwheel-sidecar "0.5.16"]
                                  [nrepl "0.4.4"]
                                  [cider/piggieback "0.3.8"]
                                  [pjstadig/humane-test-output "0.8.3"]]

                   :resource-paths ["config/dev"]
                   :source-paths ["env/dev/clj"]
                   :plugins [[lein-figwheel "0.5.16"]]

                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]

                   :env {:dev true}}

             :uberjar {:hooks [minify-assets.plugin/hooks]
                       :source-paths ["env/prod/clj"]
                       :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
                       :env {:production true}
                       :aot :all
                       :omit-source true}})
