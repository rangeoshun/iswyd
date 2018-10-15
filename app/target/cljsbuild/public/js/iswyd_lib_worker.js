var CLOSURE_BASE_PATH = "/js/worker_out/goog/";
var CLOSURE_UNCOMPILED_DEFINES = {"cljs.core._STAR_target_STAR_":"webworker"};
var CLOSURE_IMPORT_SCRIPT = (function(global) { return function(src) {global['importScripts'](src); return true;};})(this);
if(typeof goog == 'undefined') importScripts("/js/worker_out/goog/base.js");
importScripts("/js/worker_out/cljs_deps.js");
goog.require("process.env");
goog.require("iswyd.worker.core");
