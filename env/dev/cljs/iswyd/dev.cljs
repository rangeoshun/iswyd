(ns ^:figwheel-no-load iswyd.dev
  (:require
    [iswyd.app.core :as app]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(app/main)
