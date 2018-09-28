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
  :main iswyd.server
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
            {:source-paths ["src/cljs/iswyd_lib"]
             :compiler
             {:externs ["iswyd-lib.ext.js"]
              :output-to "target/cljsbuild/public/js/iswyd-lib.min.js"
              :output-dir "target/cljsbuild/public/js/min-lib-out"
              :optimizations :advanced
              :pretty-print  false}}
            :min-worker
            {:source-paths ["src/cljs/iswyd_worker"]
             :compiler
             {:output-to "target/cljsbuild/public/js/iswyd-worker.min.js"
              :output-dir "target/cljsbuild/public/js/min-worker-out"
              :optimizations :advanced
              :pretty-print  true}}
            :worker
            {:source-paths ["src/cljs/iswyd_worker"]
             :compiler
             {:output-to "target/cljsbuild/public/js/iswyd-worker.js"
              :output-dir "target/cljsbuild/public/js/worker-out"
              :optimizations :none
              :pretty-print  true}}
            :lib
            {:source-paths ["src/cljs/iswyd_lib"]
             :compiler
             {:output-to "target/cljsbuild/public/js/iswyd-lib.js"
              :output-dir "target/cljsbuild/public/js/lib-out"
              :source-map true
              :optimizations :none
              :pretty-print  true}}
            :app
            {:source-paths ["src/cljs/iswyd_lib" "src/cljs/iswyd" "src/cljc/iswyd" "env/dev/cljs/iswyd"]
             :figwheel {:on-jsload "iswyd.app/mount-root"}
             :compiler
             {:main "iswyd.dev"
              :asset-path "/js/app-out"
              :output-to "target/cljsbuild/public/js/app.js"
              :output-dir "target/cljsbuild/public/js/app-out"
              :source-map true
              :optimizations :none
              :pretty-print  true}}}}

  :figwheel
  {:http-server-root "public"
   :repl false
   :server-port 3449
   :server-ip "0.0.0.0"
   :nrepl-port 7002
   :hawk-options {:watcher :polling}
   :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
   :css-dirs ["resources/public/css"]
   :ring-handler iswyd.handler/app}

  :profiles {:change-srv-dev {:plugins [[lein-ring "0.12.1"]]
                              :source-paths ["src/clj/iswyd/services/change" "src/cljc"]
                              :ring {:port 3450
                                     :handler iswyd.services.change.core/main
                                     :open-browser? false}}

             ;; :decomp-srv-dev {:plugins [[lein-ring "0.12.1"]]
             ;;                  :ring {:port 3451
             ;;                         :handler iswyd.services.decomp.core/main
             ;;                         :open-browser? false}}

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

                   :source-paths ["env/dev/clj"]
                   :plugins [[lein-figwheel "0.5.16"]]

                   :resource-paths ["config/dev"]

                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]

                   :env {:dev true}}

             :uberjar {:hooks [minify-assets.plugin/hooks]
                       :source-paths ["env/prod/clj"]
                       :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
                       :env {:production true}
                       :aot :all
                       :omit-source true}})
