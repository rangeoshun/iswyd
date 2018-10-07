(ns ^:figwheel-no-load iswyd.dev
  (:require
    [iswyd.lib.core :as lib]
    [iswyd.app :as app]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(app/init!)
