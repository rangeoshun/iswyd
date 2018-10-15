(defproject iswyd.app "0.1.0-SNAPHOST"
  :description "Front end libs and app."
  :monolith/inherit true
  :deployable true
  :app true

  :dependencies [[cljsjs/google-diff-match-patch "20121119-2"]
                 [cljsjs/lz-string "1.4.4-1"]
                 [cljsjs/material-ui "3.2.0-0"]
                 [com.novemberain/monger "3.1.0"
                  :exclusions [com.google.guava/guava]]
                 [compojure "1.6.1"]
                 [environ "1.1.0"]
                 [hiccup "1.0.5"]
                 [lein-monolith "1.1.0"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/core.async "0.4.474"]
                 [org.slf4j/slf4j-api "1.7.5"]
                 [org.slf4j/slf4j-simple "1.6.4"]
                 [reagent "0.8.1"]
                 [reagent-utils "0.3.1"]
                 [ring "1.6.3"]
                 [ring-server "0.5.0"]
                 [ring/ring-defaults "0.3.1"]
                 [spootnik/kinsky "0.1.22"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.2.4"
                  :exclusions [org.clojure/tools.reader]]]

  :plugins      [[lein-ring "0.12.1"]
                 [lein-figwheel "0.5.16"]
                 [lein-environ "1.1.0"]
                 [lein-cljsbuild "1.1.7"]
                 [lein-asset-minifier "0.2.7"
                  :exclusions [org.clojure/clojure]]
                 [lein-monolith "1.1.0"]]

  :source-paths ["src/clj"]

  :profiles {:dev {:repl-options {:init-ns iswyd.repl}
                   :dependencies [[cider/piggieback "0.3.8"]
                                  [binaryage/oops "0.6.2"]
                                  [binaryage/devtools "0.9.10"]
                                  [ring/ring-mock "0.3.2"]
                                  [ring/ring-devel "1.6.3"]
                                  [prone "1.5.2"]
                                  [figwheel-sidecar "0.5.16"]
                                  [nrepl "0.4.4"]
                                  [cider/piggieback "0.3.8"]
                                  [pjstadig/humane-test-output "0.8.3"]
                                  [ring/ring-mock "0.3.2"]
                                  [ring/ring-devel "1.6.3"]]

                   :source-paths ["env/dev/clj"]
                   :plugins      [[lein-figwheel "0.5.16"]]

                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]}}

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["resources" "target/cljsbuild"]

  :minify-assets
  {:assets
   {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :figwheel {:http-server-root "app/public"
             :repl             false
             :server-port      3449
             :server-ip        "0.0.0.0"
             :nrepl-port       7002
             :hawk-options     {:watcher :polling}
             :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
             :css-dirs         ["resources/public/css"]
             :ring-handler     iswyd.app.handler/app}

  :cljsbuild
  {:builds [{:id           "min-lib"
             :source-paths ["src/cljs/iswyd/lib"]
             :compiler     {:main          "iswyd.lib.core"
                            :externs       ["iswyd_lib.ext.js"]
                            :output-to     "target/cljsbuild/public/js/iswyd_lib.min.js"
                            :output-dir    "target/cljsbuild/public/js/min_lib_out"
                            :optimizations :advanced
                            :pretty-print  false}}

            {:id           "min-worker"
             :source-paths ["src/cljs/iswyd/worker"]
             :compiler     {:main          "iswyd.worker.core"
                            :output-to     "target/cljsbuild/public/js/iswyd_worker.min.js"
                            :output-dir    "target/cljsbuild/public/js/min_worker-out"
                            :optimizations :advanced
                            :pretty-print  true}}

            {:id           "worker"
             :source-paths ["src/cljs/iswyd/worker"]
             :compiler     {:main           "iswyd.worker.core"
                            :asset-path     "/js/worker_out"
                            :output-to      "target/cljsbuild/public/js/iswyd_lib_worker.js"
                            :output-dir     "target/cljsbuild/public/js/worker_out"
                            :optimizations  :none
                            :target         :webworker
                            :source-map     true
                            :parallel-build true
                            :pretty-print   false}}

            {:id           "lib"
             :source-paths ["src/cljs/iswyd/lib"
                            "src/cljs/iswyd/api"]
             :compiler     {:main           "iswyd.lib.core"
                            :externs        ["iswyd_lib.ext.js"]
                            :asset-path     "/js/lib_out"
                            :output-to      "target/cljsbuild/public/js/iswyd_lib.js"
                            :output-dir     "target/cljsbuild/public/js/lib_out"
                            :optimizations  :none
                            :source-map     true
                            :parallel-build true
                            :pretty-print   false}}

            {:id           "app"
             :figwheel     true
             :source-paths ["src/cljs/iswyd/app"
                            "src/cljs/iswyd/api"
                            "src/cljs/iswyd/lib"
                            "env/dev/cljs/iswyd"]
             :compiler     {:main           "iswyd.dev"
                            :asset-path     "/js/app_out"
                            :output-to      "target/cljsbuild/public/js/app.js"
                            :output-dir     "target/cljsbuild/public/js/app_out"
                            :optimizations  :none
                            :source-map     true
                            :pretty-print   true
                            :parallel-build true}}]})
