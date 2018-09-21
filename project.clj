(defproject iswyd "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [ring-server "0.5.0"]
                 [reagent "0.8.1"]
                 [reagent-utils "0.3.1"]
                 [ring "1.6.3"]
                 [ring/ring-defaults "0.3.1"]
                 [compojure "1.6.1"]
                 [hiccup "1.0.5"]
                 [yogthos/config "1.1.1"]
                 [org.clojure/clojurescript "1.10.339"
                  :scope "provided"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.2.4"
                  :exclusions [org.clojure/tools.reader]]
                 [cljsjs/google-diff-match-patch "20121119-2"]
                 [cljsjs/lz-string "1.4.4-1"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-asset-minifier "0.2.7"
             :exclusions [org.clojure/clojure]]]

  :ring {:handler iswyd.handler/app
         :uberwar-name "iswyd.war"}

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
  {:builds {:min
            {:source-paths ["src/cljs/iswyd_lib"]
             :compiler
             {:externs ["iswyd-lib.ext.js"]
              :output-to "target/cljsbuild/public/js/iswyd-lib.min.js"
              :optimizations :advanced
              :pretty-print  false}}
            :min-worker
            {:source-paths ["src/cljs/iswyd_worker"]
             :compiler
             {:output-to "target/cljsbuild/public/js/iswyd-worker.min.js"
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
   :server-port 3449
   :nrepl-port 7002
   :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
   :css-dirs ["resources/public/css"]
   :ring-handler iswyd.handler/app}

  :profiles {:prod {:resource-paths ["config/prod"]}
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
