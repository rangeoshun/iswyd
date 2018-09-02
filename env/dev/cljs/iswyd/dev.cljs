(ns ^:figwheel-no-load iswyd.dev
  (:require
    [iswyd.core :as lib]
    [iswyd.app :as app]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(lib/main)
(app/init!)
