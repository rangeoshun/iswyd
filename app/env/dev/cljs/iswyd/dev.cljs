(ns ^:figwheel-no-load iswyd.dev
  (:require
   [iswyd.api.core :as api]
   [iswyd.app.core :as app]
   [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(app/main)
