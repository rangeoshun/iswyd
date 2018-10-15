// Compiled by ClojureScript 1.10.339 {:target :webworker}
goog.provide('iswyd.worker.core');
goog.require('cljs.core');
goog.require('cljsjs.google_diff_match_patch');
goog.require('cljsjs.lz_string');
if((typeof iswyd !== 'undefined') && (typeof iswyd.worker !== 'undefined') && (typeof iswyd.worker.core !== 'undefined') && (typeof iswyd.worker.core.dmp !== 'undefined')){
} else {
iswyd.worker.core.dmp = (new diff_match_patch());
}
if((typeof iswyd !== 'undefined') && (typeof iswyd.worker !== 'undefined') && (typeof iswyd.worker.core !== 'undefined') && (typeof iswyd.worker.core.lz !== 'undefined')){
} else {
iswyd.worker.core.lz = LZString;
}
iswyd.worker.core.handle_patch_make = (function iswyd$worker$core$handle_patch_make(data){
var prev = cljs.core.nth.call(null,data,(0));
var next = cljs.core.nth.call(null,data,(1));
var key = cljs.core.empty_QMARK_.call(null,prev);
var patch = iswyd.worker.core.dmp.patch_make(prev,next);
return self.postMessage(["patch-make",iswyd.worker.core.dmp.patch_toText(patch),key]);
});
iswyd.worker.core.handle_compress = (function iswyd$worker$core$handle_compress(data){
var log = cljs.core.nth.call(null,data,(0));
return self.postMessage(["compress",iswyd.worker.core.lz.compressToBase64(JSON.stringify(log))]);
});
iswyd.worker.core.main = (function iswyd$worker$core$main(){
return self.onmessage = (function (msg){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg.data),"patch-make")){
return iswyd.worker.core.handle_patch_make.call(null,cljs.core.rest.call(null,msg.data));
} else {
return iswyd.worker.core.handle_compress.call(null,cljs.core.rest.call(null,msg.data));
}
});
});
iswyd.worker.core.main.call(null);

//# sourceMappingURL=core.js.map
