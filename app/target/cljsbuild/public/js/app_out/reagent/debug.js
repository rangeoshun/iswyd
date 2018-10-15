// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__24659__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24660__i = 0, G__24660__a = new Array(arguments.length -  0);
while (G__24660__i < G__24660__a.length) {G__24660__a[G__24660__i] = arguments[G__24660__i + 0]; ++G__24660__i;}
  args = new cljs.core.IndexedSeq(G__24660__a,0,null);
} 
return G__24659__delegate.call(this,args);};
G__24659.cljs$lang$maxFixedArity = 0;
G__24659.cljs$lang$applyTo = (function (arglist__24661){
var args = cljs.core.seq(arglist__24661);
return G__24659__delegate(args);
});
G__24659.cljs$core$IFn$_invoke$arity$variadic = G__24659__delegate;
return G__24659;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24662__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24663__i = 0, G__24663__a = new Array(arguments.length -  0);
while (G__24663__i < G__24663__a.length) {G__24663__a[G__24663__i] = arguments[G__24663__i + 0]; ++G__24663__i;}
  args = new cljs.core.IndexedSeq(G__24663__a,0,null);
} 
return G__24662__delegate.call(this,args);};
G__24662.cljs$lang$maxFixedArity = 0;
G__24662.cljs$lang$applyTo = (function (arglist__24665){
var args = cljs.core.seq(arglist__24665);
return G__24662__delegate(args);
});
G__24662.cljs$core$IFn$_invoke$arity$variadic = G__24662__delegate;
return G__24662;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1539633378260
