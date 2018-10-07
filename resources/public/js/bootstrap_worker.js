CLOSURE_BASE_PATH = "worker-out/goog/";
/**
 * Imports a script using the Web Worker importScript API.
 *
 * @param {string} src The script source.
 * @return {boolean} True if the script was imported, false otherwise.
 */
this.CLOSURE_IMPORT_SCRIPT = (function(global) {
  return function(src) {
    global["importScripts"](src);
    return true;
  };
})(this);

if (typeof goog == "undefined") importScripts(CLOSURE_BASE_PATH + "base.js");

importScripts("iswyd_worker.js");
goog.require("iswyd_worker.core");
