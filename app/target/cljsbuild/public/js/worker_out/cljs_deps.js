goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljsjs/lz-string/development/lz-string.inc.js", ['cljsjs.lz_string'], [], {'foreign-lib': true});
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.Uri', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../process/env.js", ['process.env'], ['cljs.core']);
goog.addDependency("../cljsjs/google-diff-match-patch/development/google-diff-match-patch.inc.js", ['cljsjs.google_diff_match_patch'], [], {'foreign-lib': true});
goog.addDependency("../iswyd/worker/core.js", ['iswyd.worker.core'], ['cljsjs.lz_string', 'cljs.core', 'cljsjs.google_diff_match_patch']);
