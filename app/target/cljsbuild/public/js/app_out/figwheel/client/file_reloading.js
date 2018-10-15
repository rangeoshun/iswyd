// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30295_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30295_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30322 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30323 = null;
var count__30324 = (0);
var i__30325 = (0);
while(true){
if((i__30325 < count__30324)){
var n = cljs.core._nth.call(null,chunk__30323,i__30325);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30329 = seq__30322;
var G__30330 = chunk__30323;
var G__30331 = count__30324;
var G__30332 = (i__30325 + (1));
seq__30322 = G__30329;
chunk__30323 = G__30330;
count__30324 = G__30331;
i__30325 = G__30332;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30322);
if(temp__5457__auto__){
var seq__30322__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30322__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30322__$1);
var G__30333 = cljs.core.chunk_rest.call(null,seq__30322__$1);
var G__30334 = c__4351__auto__;
var G__30335 = cljs.core.count.call(null,c__4351__auto__);
var G__30336 = (0);
seq__30322 = G__30333;
chunk__30323 = G__30334;
count__30324 = G__30335;
i__30325 = G__30336;
continue;
} else {
var n = cljs.core.first.call(null,seq__30322__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30337 = cljs.core.next.call(null,seq__30322__$1);
var G__30338 = null;
var G__30339 = (0);
var G__30340 = (0);
seq__30322 = G__30337;
chunk__30323 = G__30338;
count__30324 = G__30339;
i__30325 = G__30340;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30342){
var vec__30343 = p__30342;
var _ = cljs.core.nth.call(null,vec__30343,(0),null);
var v = cljs.core.nth.call(null,vec__30343,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__30346){
var vec__30347 = p__30346;
var k = cljs.core.nth.call(null,vec__30347,(0),null);
var v = cljs.core.nth.call(null,vec__30347,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30374_30412 = cljs.core.seq.call(null,deps);
var chunk__30375_30413 = null;
var count__30376_30414 = (0);
var i__30377_30415 = (0);
while(true){
if((i__30377_30415 < count__30376_30414)){
var dep_30417 = cljs.core._nth.call(null,chunk__30375_30413,i__30377_30415);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_30417;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30417));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30417,(depth + (1)),state);
} else {
}


var G__30419 = seq__30374_30412;
var G__30420 = chunk__30375_30413;
var G__30421 = count__30376_30414;
var G__30422 = (i__30377_30415 + (1));
seq__30374_30412 = G__30419;
chunk__30375_30413 = G__30420;
count__30376_30414 = G__30421;
i__30377_30415 = G__30422;
continue;
} else {
var temp__5457__auto___30424 = cljs.core.seq.call(null,seq__30374_30412);
if(temp__5457__auto___30424){
var seq__30374_30425__$1 = temp__5457__auto___30424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30374_30425__$1)){
var c__4351__auto___30426 = cljs.core.chunk_first.call(null,seq__30374_30425__$1);
var G__30427 = cljs.core.chunk_rest.call(null,seq__30374_30425__$1);
var G__30428 = c__4351__auto___30426;
var G__30429 = cljs.core.count.call(null,c__4351__auto___30426);
var G__30430 = (0);
seq__30374_30412 = G__30427;
chunk__30375_30413 = G__30428;
count__30376_30414 = G__30429;
i__30377_30415 = G__30430;
continue;
} else {
var dep_30431 = cljs.core.first.call(null,seq__30374_30425__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_30431;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30431));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30431,(depth + (1)),state);
} else {
}


var G__30433 = cljs.core.next.call(null,seq__30374_30425__$1);
var G__30434 = null;
var G__30435 = (0);
var G__30436 = (0);
seq__30374_30412 = G__30433;
chunk__30375_30413 = G__30434;
count__30376_30414 = G__30435;
i__30377_30415 = G__30436;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30378){
var vec__30380 = p__30378;
var seq__30381 = cljs.core.seq.call(null,vec__30380);
var first__30382 = cljs.core.first.call(null,seq__30381);
var seq__30381__$1 = cljs.core.next.call(null,seq__30381);
var x = first__30382;
var xs = seq__30381__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30380,seq__30381,first__30382,seq__30381__$1,x,xs,get_deps__$1){
return (function (p1__30353_SHARP_){
return clojure.set.difference.call(null,p1__30353_SHARP_,x);
});})(vec__30380,seq__30381,first__30382,seq__30381__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30447 = cljs.core.seq.call(null,provides);
var chunk__30448 = null;
var count__30449 = (0);
var i__30450 = (0);
while(true){
if((i__30450 < count__30449)){
var prov = cljs.core._nth.call(null,chunk__30448,i__30450);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30451_30462 = cljs.core.seq.call(null,requires);
var chunk__30452_30463 = null;
var count__30453_30464 = (0);
var i__30454_30465 = (0);
while(true){
if((i__30454_30465 < count__30453_30464)){
var req_30466 = cljs.core._nth.call(null,chunk__30452_30463,i__30454_30465);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30466,prov);


var G__30467 = seq__30451_30462;
var G__30468 = chunk__30452_30463;
var G__30469 = count__30453_30464;
var G__30470 = (i__30454_30465 + (1));
seq__30451_30462 = G__30467;
chunk__30452_30463 = G__30468;
count__30453_30464 = G__30469;
i__30454_30465 = G__30470;
continue;
} else {
var temp__5457__auto___30471 = cljs.core.seq.call(null,seq__30451_30462);
if(temp__5457__auto___30471){
var seq__30451_30472__$1 = temp__5457__auto___30471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30451_30472__$1)){
var c__4351__auto___30473 = cljs.core.chunk_first.call(null,seq__30451_30472__$1);
var G__30474 = cljs.core.chunk_rest.call(null,seq__30451_30472__$1);
var G__30475 = c__4351__auto___30473;
var G__30476 = cljs.core.count.call(null,c__4351__auto___30473);
var G__30477 = (0);
seq__30451_30462 = G__30474;
chunk__30452_30463 = G__30475;
count__30453_30464 = G__30476;
i__30454_30465 = G__30477;
continue;
} else {
var req_30478 = cljs.core.first.call(null,seq__30451_30472__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30478,prov);


var G__30479 = cljs.core.next.call(null,seq__30451_30472__$1);
var G__30480 = null;
var G__30481 = (0);
var G__30482 = (0);
seq__30451_30462 = G__30479;
chunk__30452_30463 = G__30480;
count__30453_30464 = G__30481;
i__30454_30465 = G__30482;
continue;
}
} else {
}
}
break;
}


var G__30483 = seq__30447;
var G__30484 = chunk__30448;
var G__30485 = count__30449;
var G__30486 = (i__30450 + (1));
seq__30447 = G__30483;
chunk__30448 = G__30484;
count__30449 = G__30485;
i__30450 = G__30486;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30447);
if(temp__5457__auto__){
var seq__30447__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30447__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30447__$1);
var G__30487 = cljs.core.chunk_rest.call(null,seq__30447__$1);
var G__30488 = c__4351__auto__;
var G__30489 = cljs.core.count.call(null,c__4351__auto__);
var G__30490 = (0);
seq__30447 = G__30487;
chunk__30448 = G__30488;
count__30449 = G__30489;
i__30450 = G__30490;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30447__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30455_30491 = cljs.core.seq.call(null,requires);
var chunk__30456_30492 = null;
var count__30457_30493 = (0);
var i__30458_30494 = (0);
while(true){
if((i__30458_30494 < count__30457_30493)){
var req_30499 = cljs.core._nth.call(null,chunk__30456_30492,i__30458_30494);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30499,prov);


var G__30503 = seq__30455_30491;
var G__30504 = chunk__30456_30492;
var G__30505 = count__30457_30493;
var G__30506 = (i__30458_30494 + (1));
seq__30455_30491 = G__30503;
chunk__30456_30492 = G__30504;
count__30457_30493 = G__30505;
i__30458_30494 = G__30506;
continue;
} else {
var temp__5457__auto___30507__$1 = cljs.core.seq.call(null,seq__30455_30491);
if(temp__5457__auto___30507__$1){
var seq__30455_30508__$1 = temp__5457__auto___30507__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30455_30508__$1)){
var c__4351__auto___30509 = cljs.core.chunk_first.call(null,seq__30455_30508__$1);
var G__30510 = cljs.core.chunk_rest.call(null,seq__30455_30508__$1);
var G__30511 = c__4351__auto___30509;
var G__30512 = cljs.core.count.call(null,c__4351__auto___30509);
var G__30513 = (0);
seq__30455_30491 = G__30510;
chunk__30456_30492 = G__30511;
count__30457_30493 = G__30512;
i__30458_30494 = G__30513;
continue;
} else {
var req_30514 = cljs.core.first.call(null,seq__30455_30508__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30514,prov);


var G__30515 = cljs.core.next.call(null,seq__30455_30508__$1);
var G__30516 = null;
var G__30517 = (0);
var G__30518 = (0);
seq__30455_30491 = G__30515;
chunk__30456_30492 = G__30516;
count__30457_30493 = G__30517;
i__30458_30494 = G__30518;
continue;
}
} else {
}
}
break;
}


var G__30520 = cljs.core.next.call(null,seq__30447__$1);
var G__30521 = null;
var G__30522 = (0);
var G__30523 = (0);
seq__30447 = G__30520;
chunk__30448 = G__30521;
count__30449 = G__30522;
i__30450 = G__30523;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30532_30546 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30533_30547 = null;
var count__30534_30548 = (0);
var i__30535_30549 = (0);
while(true){
if((i__30535_30549 < count__30534_30548)){
var ns_30551 = cljs.core._nth.call(null,chunk__30533_30547,i__30535_30549);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30551);


var G__30552 = seq__30532_30546;
var G__30553 = chunk__30533_30547;
var G__30554 = count__30534_30548;
var G__30555 = (i__30535_30549 + (1));
seq__30532_30546 = G__30552;
chunk__30533_30547 = G__30553;
count__30534_30548 = G__30554;
i__30535_30549 = G__30555;
continue;
} else {
var temp__5457__auto___30558 = cljs.core.seq.call(null,seq__30532_30546);
if(temp__5457__auto___30558){
var seq__30532_30560__$1 = temp__5457__auto___30558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30532_30560__$1)){
var c__4351__auto___30562 = cljs.core.chunk_first.call(null,seq__30532_30560__$1);
var G__30564 = cljs.core.chunk_rest.call(null,seq__30532_30560__$1);
var G__30565 = c__4351__auto___30562;
var G__30566 = cljs.core.count.call(null,c__4351__auto___30562);
var G__30567 = (0);
seq__30532_30546 = G__30564;
chunk__30533_30547 = G__30565;
count__30534_30548 = G__30566;
i__30535_30549 = G__30567;
continue;
} else {
var ns_30568 = cljs.core.first.call(null,seq__30532_30560__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30568);


var G__30569 = cljs.core.next.call(null,seq__30532_30560__$1);
var G__30570 = null;
var G__30571 = (0);
var G__30572 = (0);
seq__30532_30546 = G__30569;
chunk__30533_30547 = G__30570;
count__30534_30548 = G__30571;
i__30535_30549 = G__30572;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30573__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30576__i = 0, G__30576__a = new Array(arguments.length -  0);
while (G__30576__i < G__30576__a.length) {G__30576__a[G__30576__i] = arguments[G__30576__i + 0]; ++G__30576__i;}
  args = new cljs.core.IndexedSeq(G__30576__a,0,null);
} 
return G__30573__delegate.call(this,args);};
G__30573.cljs$lang$maxFixedArity = 0;
G__30573.cljs$lang$applyTo = (function (arglist__30580){
var args = cljs.core.seq(arglist__30580);
return G__30573__delegate(args);
});
G__30573.cljs$core$IFn$_invoke$arity$variadic = G__30573__delegate;
return G__30573;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30589_SHARP_,p2__30590_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30589_SHARP_)].join('')),p2__30590_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30591_SHARP_,p2__30592_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30591_SHARP_)].join(''),p2__30592_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30596 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30596.addCallback(((function (G__30596){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30596))
);

G__30596.addErrback(((function (G__30596){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30596))
);

return G__30596;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30600){if((e30600 instanceof Error)){
var e = e30600;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30600;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30602){if((e30602 instanceof Error)){
var e = e30602;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30602;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30606 = cljs.core._EQ_;
var expr__30607 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30606.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30607))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30606.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30607))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30606.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30607))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30606,expr__30607){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30606,expr__30607))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30615,callback){
var map__30616 = p__30615;
var map__30616__$1 = ((((!((map__30616 == null)))?(((((map__30616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30616):map__30616);
var file_msg = map__30616__$1;
var request_url = cljs.core.get.call(null,map__30616__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30616,map__30616__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30616,map__30616__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto__){
return (function (state_30665){
var state_val_30666 = (state_30665[(1)]);
if((state_val_30666 === (7))){
var inst_30661 = (state_30665[(2)]);
var state_30665__$1 = state_30665;
var statearr_30667_30703 = state_30665__$1;
(statearr_30667_30703[(2)] = inst_30661);

(statearr_30667_30703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (1))){
var state_30665__$1 = state_30665;
var statearr_30668_30704 = state_30665__$1;
(statearr_30668_30704[(2)] = null);

(statearr_30668_30704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (4))){
var inst_30622 = (state_30665[(7)]);
var inst_30622__$1 = (state_30665[(2)]);
var state_30665__$1 = (function (){var statearr_30670 = state_30665;
(statearr_30670[(7)] = inst_30622__$1);

return statearr_30670;
})();
if(cljs.core.truth_(inst_30622__$1)){
var statearr_30671_30705 = state_30665__$1;
(statearr_30671_30705[(1)] = (5));

} else {
var statearr_30672_30706 = state_30665__$1;
(statearr_30672_30706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (15))){
var inst_30639 = (state_30665[(8)]);
var inst_30636 = (state_30665[(9)]);
var inst_30647 = inst_30639.call(null,inst_30636);
var state_30665__$1 = state_30665;
var statearr_30676_30707 = state_30665__$1;
(statearr_30676_30707[(2)] = inst_30647);

(statearr_30676_30707[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (13))){
var inst_30655 = (state_30665[(2)]);
var state_30665__$1 = state_30665;
var statearr_30677_30708 = state_30665__$1;
(statearr_30677_30708[(2)] = inst_30655);

(statearr_30677_30708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (6))){
var state_30665__$1 = state_30665;
var statearr_30678_30709 = state_30665__$1;
(statearr_30678_30709[(2)] = null);

(statearr_30678_30709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (17))){
var inst_30652 = (state_30665[(2)]);
var state_30665__$1 = state_30665;
var statearr_30680_30731 = state_30665__$1;
(statearr_30680_30731[(2)] = inst_30652);

(statearr_30680_30731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (3))){
var inst_30663 = (state_30665[(2)]);
var state_30665__$1 = state_30665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30665__$1,inst_30663);
} else {
if((state_val_30666 === (12))){
var state_30665__$1 = state_30665;
var statearr_30681_30735 = state_30665__$1;
(statearr_30681_30735[(2)] = null);

(statearr_30681_30735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (2))){
var state_30665__$1 = state_30665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30665__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30666 === (11))){
var inst_30627 = (state_30665[(10)]);
var inst_30634 = figwheel.client.file_reloading.blocking_load.call(null,inst_30627);
var state_30665__$1 = state_30665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30665__$1,(14),inst_30634);
} else {
if((state_val_30666 === (9))){
var inst_30627 = (state_30665[(10)]);
var state_30665__$1 = state_30665;
if(cljs.core.truth_(inst_30627)){
var statearr_30682_30740 = state_30665__$1;
(statearr_30682_30740[(1)] = (11));

} else {
var statearr_30683_30742 = state_30665__$1;
(statearr_30683_30742[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (5))){
var inst_30629 = (state_30665[(11)]);
var inst_30622 = (state_30665[(7)]);
var inst_30627 = cljs.core.nth.call(null,inst_30622,(0),null);
var inst_30629__$1 = cljs.core.nth.call(null,inst_30622,(1),null);
var state_30665__$1 = (function (){var statearr_30684 = state_30665;
(statearr_30684[(11)] = inst_30629__$1);

(statearr_30684[(10)] = inst_30627);

return statearr_30684;
})();
if(cljs.core.truth_(inst_30629__$1)){
var statearr_30685_30743 = state_30665__$1;
(statearr_30685_30743[(1)] = (8));

} else {
var statearr_30686_30744 = state_30665__$1;
(statearr_30686_30744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (14))){
var inst_30639 = (state_30665[(8)]);
var inst_30627 = (state_30665[(10)]);
var inst_30636 = (state_30665[(2)]);
var inst_30638 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30639__$1 = cljs.core.get.call(null,inst_30638,inst_30627);
var state_30665__$1 = (function (){var statearr_30687 = state_30665;
(statearr_30687[(8)] = inst_30639__$1);

(statearr_30687[(9)] = inst_30636);

return statearr_30687;
})();
if(cljs.core.truth_(inst_30639__$1)){
var statearr_30688_30745 = state_30665__$1;
(statearr_30688_30745[(1)] = (15));

} else {
var statearr_30689_30746 = state_30665__$1;
(statearr_30689_30746[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (16))){
var inst_30636 = (state_30665[(9)]);
var inst_30649 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30636);
var state_30665__$1 = state_30665;
var statearr_30690_30747 = state_30665__$1;
(statearr_30690_30747[(2)] = inst_30649);

(statearr_30690_30747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (10))){
var inst_30657 = (state_30665[(2)]);
var state_30665__$1 = (function (){var statearr_30694 = state_30665;
(statearr_30694[(12)] = inst_30657);

return statearr_30694;
})();
var statearr_30695_30748 = state_30665__$1;
(statearr_30695_30748[(2)] = null);

(statearr_30695_30748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (8))){
var inst_30629 = (state_30665[(11)]);
var inst_30631 = eval(inst_30629);
var state_30665__$1 = state_30665;
var statearr_30696_30754 = state_30665__$1;
(statearr_30696_30754[(2)] = inst_30631);

(statearr_30696_30754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27336__auto__))
;
return ((function (switch__27198__auto__,c__27336__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27199__auto__ = null;
var figwheel$client$file_reloading$state_machine__27199__auto____0 = (function (){
var statearr_30699 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30699[(0)] = figwheel$client$file_reloading$state_machine__27199__auto__);

(statearr_30699[(1)] = (1));

return statearr_30699;
});
var figwheel$client$file_reloading$state_machine__27199__auto____1 = (function (state_30665){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_30665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e30700){if((e30700 instanceof Object)){
var ex__27202__auto__ = e30700;
var statearr_30701_30758 = state_30665;
(statearr_30701_30758[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30759 = state_30665;
state_30665 = G__30759;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27199__auto__ = function(state_30665){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27199__auto____1.call(this,state_30665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27199__auto____0;
figwheel$client$file_reloading$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27199__auto____1;
return figwheel$client$file_reloading$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto__))
})();
var state__27338__auto__ = (function (){var statearr_30702 = f__27337__auto__.call(null);
(statearr_30702[(6)] = c__27336__auto__);

return statearr_30702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__))
);

return c__27336__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30780 = arguments.length;
switch (G__30780) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30788,callback){
var map__30789 = p__30788;
var map__30789__$1 = ((((!((map__30789 == null)))?(((((map__30789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30789):map__30789);
var file_msg = map__30789__$1;
var namespace = cljs.core.get.call(null,map__30789__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30789,map__30789__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30789,map__30789__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30791){
var map__30792 = p__30791;
var map__30792__$1 = ((((!((map__30792 == null)))?(((((map__30792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30792):map__30792);
var file_msg = map__30792__$1;
var namespace = cljs.core.get.call(null,map__30792__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30796){
var map__30797 = p__30796;
var map__30797__$1 = ((((!((map__30797 == null)))?(((((map__30797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30797):map__30797);
var file_msg = map__30797__$1;
var namespace = cljs.core.get.call(null,map__30797__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30799,callback){
var map__30800 = p__30799;
var map__30800__$1 = ((((!((map__30800 == null)))?(((((map__30800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30800):map__30800);
var file_msg = map__30800__$1;
var request_url = cljs.core.get.call(null,map__30800__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30800__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27336__auto___30856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___30856,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___30856,out){
return (function (state_30839){
var state_val_30840 = (state_30839[(1)]);
if((state_val_30840 === (1))){
var inst_30812 = cljs.core.seq.call(null,files);
var inst_30813 = cljs.core.first.call(null,inst_30812);
var inst_30814 = cljs.core.next.call(null,inst_30812);
var inst_30815 = files;
var state_30839__$1 = (function (){var statearr_30842 = state_30839;
(statearr_30842[(7)] = inst_30814);

(statearr_30842[(8)] = inst_30813);

(statearr_30842[(9)] = inst_30815);

return statearr_30842;
})();
var statearr_30843_30857 = state_30839__$1;
(statearr_30843_30857[(2)] = null);

(statearr_30843_30857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (2))){
var inst_30821 = (state_30839[(10)]);
var inst_30815 = (state_30839[(9)]);
var inst_30820 = cljs.core.seq.call(null,inst_30815);
var inst_30821__$1 = cljs.core.first.call(null,inst_30820);
var inst_30822 = cljs.core.next.call(null,inst_30820);
var inst_30824 = (inst_30821__$1 == null);
var inst_30825 = cljs.core.not.call(null,inst_30824);
var state_30839__$1 = (function (){var statearr_30845 = state_30839;
(statearr_30845[(10)] = inst_30821__$1);

(statearr_30845[(11)] = inst_30822);

return statearr_30845;
})();
if(inst_30825){
var statearr_30846_30858 = state_30839__$1;
(statearr_30846_30858[(1)] = (4));

} else {
var statearr_30847_30859 = state_30839__$1;
(statearr_30847_30859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (3))){
var inst_30837 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30839__$1,inst_30837);
} else {
if((state_val_30840 === (4))){
var inst_30821 = (state_30839[(10)]);
var inst_30827 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30821);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30839__$1,(7),inst_30827);
} else {
if((state_val_30840 === (5))){
var inst_30833 = cljs.core.async.close_BANG_.call(null,out);
var state_30839__$1 = state_30839;
var statearr_30848_30860 = state_30839__$1;
(statearr_30848_30860[(2)] = inst_30833);

(statearr_30848_30860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (6))){
var inst_30835 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30849_30861 = state_30839__$1;
(statearr_30849_30861[(2)] = inst_30835);

(statearr_30849_30861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (7))){
var inst_30822 = (state_30839[(11)]);
var inst_30829 = (state_30839[(2)]);
var inst_30830 = cljs.core.async.put_BANG_.call(null,out,inst_30829);
var inst_30815 = inst_30822;
var state_30839__$1 = (function (){var statearr_30850 = state_30839;
(statearr_30850[(12)] = inst_30830);

(statearr_30850[(9)] = inst_30815);

return statearr_30850;
})();
var statearr_30851_30862 = state_30839__$1;
(statearr_30851_30862[(2)] = null);

(statearr_30851_30862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27336__auto___30856,out))
;
return ((function (switch__27198__auto__,c__27336__auto___30856,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto____0 = (function (){
var statearr_30852 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30852[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto__);

(statearr_30852[(1)] = (1));

return statearr_30852;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto____1 = (function (state_30839){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_30839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e30853){if((e30853 instanceof Object)){
var ex__27202__auto__ = e30853;
var statearr_30854_30863 = state_30839;
(statearr_30854_30863[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30864 = state_30839;
state_30839 = G__30864;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto__ = function(state_30839){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto____1.call(this,state_30839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___30856,out))
})();
var state__27338__auto__ = (function (){var statearr_30855 = f__27337__auto__.call(null);
(statearr_30855[(6)] = c__27336__auto___30856);

return statearr_30855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___30856,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30865,opts){
var map__30866 = p__30865;
var map__30866__$1 = ((((!((map__30866 == null)))?(((((map__30866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30866):map__30866);
var eval_body = cljs.core.get.call(null,map__30866__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30866__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30868){var e = e30868;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30873_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30873_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30886){
var vec__30887 = p__30886;
var k = cljs.core.nth.call(null,vec__30887,(0),null);
var v = cljs.core.nth.call(null,vec__30887,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30890){
var vec__30891 = p__30890;
var k = cljs.core.nth.call(null,vec__30891,(0),null);
var v = cljs.core.nth.call(null,vec__30891,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30902,p__30903){
var map__30904 = p__30902;
var map__30904__$1 = ((((!((map__30904 == null)))?(((((map__30904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30904):map__30904);
var opts = map__30904__$1;
var before_jsload = cljs.core.get.call(null,map__30904__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30904__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30904__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30905 = p__30903;
var map__30905__$1 = ((((!((map__30905 == null)))?(((((map__30905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30905):map__30905);
var msg = map__30905__$1;
var files = cljs.core.get.call(null,map__30905__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30905__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30905__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31062){
var state_val_31063 = (state_31062[(1)]);
if((state_val_31063 === (7))){
var inst_30920 = (state_31062[(7)]);
var inst_30921 = (state_31062[(8)]);
var inst_30922 = (state_31062[(9)]);
var inst_30919 = (state_31062[(10)]);
var inst_30927 = cljs.core._nth.call(null,inst_30920,inst_30922);
var inst_30928 = figwheel.client.file_reloading.eval_body.call(null,inst_30927,opts);
var inst_30929 = (inst_30922 + (1));
var tmp31064 = inst_30920;
var tmp31065 = inst_30921;
var tmp31066 = inst_30919;
var inst_30919__$1 = tmp31066;
var inst_30920__$1 = tmp31064;
var inst_30921__$1 = tmp31065;
var inst_30922__$1 = inst_30929;
var state_31062__$1 = (function (){var statearr_31067 = state_31062;
(statearr_31067[(7)] = inst_30920__$1);

(statearr_31067[(8)] = inst_30921__$1);

(statearr_31067[(9)] = inst_30922__$1);

(statearr_31067[(10)] = inst_30919__$1);

(statearr_31067[(11)] = inst_30928);

return statearr_31067;
})();
var statearr_31068_31161 = state_31062__$1;
(statearr_31068_31161[(2)] = null);

(statearr_31068_31161[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (20))){
var inst_30962 = (state_31062[(12)]);
var inst_30970 = figwheel.client.file_reloading.sort_files.call(null,inst_30962);
var state_31062__$1 = state_31062;
var statearr_31069_31162 = state_31062__$1;
(statearr_31069_31162[(2)] = inst_30970);

(statearr_31069_31162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (27))){
var state_31062__$1 = state_31062;
var statearr_31070_31163 = state_31062__$1;
(statearr_31070_31163[(2)] = null);

(statearr_31070_31163[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (1))){
var inst_30911 = (state_31062[(13)]);
var inst_30908 = before_jsload.call(null,files);
var inst_30909 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30910 = (function (){return ((function (inst_30911,inst_30908,inst_30909,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30896_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30896_SHARP_);
});
;})(inst_30911,inst_30908,inst_30909,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30911__$1 = cljs.core.filter.call(null,inst_30910,files);
var inst_30912 = cljs.core.not_empty.call(null,inst_30911__$1);
var state_31062__$1 = (function (){var statearr_31071 = state_31062;
(statearr_31071[(14)] = inst_30908);

(statearr_31071[(13)] = inst_30911__$1);

(statearr_31071[(15)] = inst_30909);

return statearr_31071;
})();
if(cljs.core.truth_(inst_30912)){
var statearr_31072_31169 = state_31062__$1;
(statearr_31072_31169[(1)] = (2));

} else {
var statearr_31073_31170 = state_31062__$1;
(statearr_31073_31170[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (24))){
var state_31062__$1 = state_31062;
var statearr_31074_31171 = state_31062__$1;
(statearr_31074_31171[(2)] = null);

(statearr_31074_31171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (39))){
var inst_31012 = (state_31062[(16)]);
var state_31062__$1 = state_31062;
var statearr_31075_31172 = state_31062__$1;
(statearr_31075_31172[(2)] = inst_31012);

(statearr_31075_31172[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (46))){
var inst_31057 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31076_31173 = state_31062__$1;
(statearr_31076_31173[(2)] = inst_31057);

(statearr_31076_31173[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (4))){
var inst_30956 = (state_31062[(2)]);
var inst_30957 = cljs.core.List.EMPTY;
var inst_30958 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30957);
var inst_30959 = (function (){return ((function (inst_30956,inst_30957,inst_30958,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30897_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30897_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30897_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30897_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_30956,inst_30957,inst_30958,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30960 = cljs.core.filter.call(null,inst_30959,files);
var inst_30961 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30962 = cljs.core.concat.call(null,inst_30960,inst_30961);
var state_31062__$1 = (function (){var statearr_31077 = state_31062;
(statearr_31077[(12)] = inst_30962);

(statearr_31077[(17)] = inst_30956);

(statearr_31077[(18)] = inst_30958);

return statearr_31077;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31078_31176 = state_31062__$1;
(statearr_31078_31176[(1)] = (16));

} else {
var statearr_31079_31177 = state_31062__$1;
(statearr_31079_31177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (15))){
var inst_30946 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31080_31178 = state_31062__$1;
(statearr_31080_31178[(2)] = inst_30946);

(statearr_31080_31178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (21))){
var inst_30972 = (state_31062[(19)]);
var inst_30972__$1 = (state_31062[(2)]);
var inst_30973 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30972__$1);
var state_31062__$1 = (function (){var statearr_31081 = state_31062;
(statearr_31081[(19)] = inst_30972__$1);

return statearr_31081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31062__$1,(22),inst_30973);
} else {
if((state_val_31063 === (31))){
var inst_31060 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31062__$1,inst_31060);
} else {
if((state_val_31063 === (32))){
var inst_31012 = (state_31062[(16)]);
var inst_31017 = inst_31012.cljs$lang$protocol_mask$partition0$;
var inst_31018 = (inst_31017 & (64));
var inst_31019 = inst_31012.cljs$core$ISeq$;
var inst_31020 = (cljs.core.PROTOCOL_SENTINEL === inst_31019);
var inst_31022 = ((inst_31018) || (inst_31020));
var state_31062__$1 = state_31062;
if(cljs.core.truth_(inst_31022)){
var statearr_31082_31183 = state_31062__$1;
(statearr_31082_31183[(1)] = (35));

} else {
var statearr_31083_31184 = state_31062__$1;
(statearr_31083_31184[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (40))){
var inst_31037 = (state_31062[(20)]);
var inst_31036 = (state_31062[(2)]);
var inst_31037__$1 = cljs.core.get.call(null,inst_31036,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31038 = cljs.core.get.call(null,inst_31036,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31039 = cljs.core.not_empty.call(null,inst_31037__$1);
var state_31062__$1 = (function (){var statearr_31084 = state_31062;
(statearr_31084[(21)] = inst_31038);

(statearr_31084[(20)] = inst_31037__$1);

return statearr_31084;
})();
if(cljs.core.truth_(inst_31039)){
var statearr_31085_31185 = state_31062__$1;
(statearr_31085_31185[(1)] = (41));

} else {
var statearr_31086_31186 = state_31062__$1;
(statearr_31086_31186[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (33))){
var state_31062__$1 = state_31062;
var statearr_31087_31187 = state_31062__$1;
(statearr_31087_31187[(2)] = false);

(statearr_31087_31187[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (13))){
var inst_30932 = (state_31062[(22)]);
var inst_30936 = cljs.core.chunk_first.call(null,inst_30932);
var inst_30937 = cljs.core.chunk_rest.call(null,inst_30932);
var inst_30938 = cljs.core.count.call(null,inst_30936);
var inst_30919 = inst_30937;
var inst_30920 = inst_30936;
var inst_30921 = inst_30938;
var inst_30922 = (0);
var state_31062__$1 = (function (){var statearr_31088 = state_31062;
(statearr_31088[(7)] = inst_30920);

(statearr_31088[(8)] = inst_30921);

(statearr_31088[(9)] = inst_30922);

(statearr_31088[(10)] = inst_30919);

return statearr_31088;
})();
var statearr_31089_31188 = state_31062__$1;
(statearr_31089_31188[(2)] = null);

(statearr_31089_31188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (22))){
var inst_30972 = (state_31062[(19)]);
var inst_30976 = (state_31062[(23)]);
var inst_30980 = (state_31062[(24)]);
var inst_30975 = (state_31062[(25)]);
var inst_30975__$1 = (state_31062[(2)]);
var inst_30976__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30975__$1);
var inst_30977 = (function (){var all_files = inst_30972;
var res_SINGLEQUOTE_ = inst_30975__$1;
var res = inst_30976__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30972,inst_30976,inst_30980,inst_30975,inst_30975__$1,inst_30976__$1,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30898_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30898_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30972,inst_30976,inst_30980,inst_30975,inst_30975__$1,inst_30976__$1,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30978 = cljs.core.filter.call(null,inst_30977,inst_30975__$1);
var inst_30979 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30980__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30979);
var inst_30981 = cljs.core.not_empty.call(null,inst_30980__$1);
var state_31062__$1 = (function (){var statearr_31090 = state_31062;
(statearr_31090[(26)] = inst_30978);

(statearr_31090[(23)] = inst_30976__$1);

(statearr_31090[(24)] = inst_30980__$1);

(statearr_31090[(25)] = inst_30975__$1);

return statearr_31090;
})();
if(cljs.core.truth_(inst_30981)){
var statearr_31091_31192 = state_31062__$1;
(statearr_31091_31192[(1)] = (23));

} else {
var statearr_31092_31193 = state_31062__$1;
(statearr_31092_31193[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (36))){
var state_31062__$1 = state_31062;
var statearr_31093_31194 = state_31062__$1;
(statearr_31093_31194[(2)] = false);

(statearr_31093_31194[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (41))){
var inst_31037 = (state_31062[(20)]);
var inst_31041 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31042 = cljs.core.map.call(null,inst_31041,inst_31037);
var inst_31043 = cljs.core.pr_str.call(null,inst_31042);
var inst_31044 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31043)].join('');
var inst_31045 = figwheel.client.utils.log.call(null,inst_31044);
var state_31062__$1 = state_31062;
var statearr_31094_31195 = state_31062__$1;
(statearr_31094_31195[(2)] = inst_31045);

(statearr_31094_31195[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (43))){
var inst_31038 = (state_31062[(21)]);
var inst_31048 = (state_31062[(2)]);
var inst_31049 = cljs.core.not_empty.call(null,inst_31038);
var state_31062__$1 = (function (){var statearr_31095 = state_31062;
(statearr_31095[(27)] = inst_31048);

return statearr_31095;
})();
if(cljs.core.truth_(inst_31049)){
var statearr_31096_31196 = state_31062__$1;
(statearr_31096_31196[(1)] = (44));

} else {
var statearr_31097_31197 = state_31062__$1;
(statearr_31097_31197[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (29))){
var inst_30978 = (state_31062[(26)]);
var inst_30972 = (state_31062[(19)]);
var inst_30976 = (state_31062[(23)]);
var inst_30980 = (state_31062[(24)]);
var inst_30975 = (state_31062[(25)]);
var inst_31012 = (state_31062[(16)]);
var inst_31008 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31011 = (function (){var all_files = inst_30972;
var res_SINGLEQUOTE_ = inst_30975;
var res = inst_30976;
var files_not_loaded = inst_30978;
var dependencies_that_loaded = inst_30980;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30978,inst_30972,inst_30976,inst_30980,inst_30975,inst_31012,inst_31008,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31010){
var map__31098 = p__31010;
var map__31098__$1 = ((((!((map__31098 == null)))?(((((map__31098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31098):map__31098);
var namespace = cljs.core.get.call(null,map__31098__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30978,inst_30972,inst_30976,inst_30980,inst_30975,inst_31012,inst_31008,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31012__$1 = cljs.core.group_by.call(null,inst_31011,inst_30978);
var inst_31014 = (inst_31012__$1 == null);
var inst_31015 = cljs.core.not.call(null,inst_31014);
var state_31062__$1 = (function (){var statearr_31100 = state_31062;
(statearr_31100[(28)] = inst_31008);

(statearr_31100[(16)] = inst_31012__$1);

return statearr_31100;
})();
if(inst_31015){
var statearr_31101_31198 = state_31062__$1;
(statearr_31101_31198[(1)] = (32));

} else {
var statearr_31102_31199 = state_31062__$1;
(statearr_31102_31199[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (44))){
var inst_31038 = (state_31062[(21)]);
var inst_31051 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31038);
var inst_31052 = cljs.core.pr_str.call(null,inst_31051);
var inst_31053 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31052)].join('');
var inst_31054 = figwheel.client.utils.log.call(null,inst_31053);
var state_31062__$1 = state_31062;
var statearr_31103_31200 = state_31062__$1;
(statearr_31103_31200[(2)] = inst_31054);

(statearr_31103_31200[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (6))){
var inst_30953 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31104_31201 = state_31062__$1;
(statearr_31104_31201[(2)] = inst_30953);

(statearr_31104_31201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (28))){
var inst_30978 = (state_31062[(26)]);
var inst_31005 = (state_31062[(2)]);
var inst_31006 = cljs.core.not_empty.call(null,inst_30978);
var state_31062__$1 = (function (){var statearr_31105 = state_31062;
(statearr_31105[(29)] = inst_31005);

return statearr_31105;
})();
if(cljs.core.truth_(inst_31006)){
var statearr_31106_31205 = state_31062__$1;
(statearr_31106_31205[(1)] = (29));

} else {
var statearr_31108_31206 = state_31062__$1;
(statearr_31108_31206[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (25))){
var inst_30976 = (state_31062[(23)]);
var inst_30992 = (state_31062[(2)]);
var inst_30993 = cljs.core.not_empty.call(null,inst_30976);
var state_31062__$1 = (function (){var statearr_31109 = state_31062;
(statearr_31109[(30)] = inst_30992);

return statearr_31109;
})();
if(cljs.core.truth_(inst_30993)){
var statearr_31110_31207 = state_31062__$1;
(statearr_31110_31207[(1)] = (26));

} else {
var statearr_31111_31208 = state_31062__$1;
(statearr_31111_31208[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (34))){
var inst_31031 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
if(cljs.core.truth_(inst_31031)){
var statearr_31115_31209 = state_31062__$1;
(statearr_31115_31209[(1)] = (38));

} else {
var statearr_31116_31210 = state_31062__$1;
(statearr_31116_31210[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (17))){
var state_31062__$1 = state_31062;
var statearr_31117_31211 = state_31062__$1;
(statearr_31117_31211[(2)] = recompile_dependents);

(statearr_31117_31211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (3))){
var state_31062__$1 = state_31062;
var statearr_31118_31212 = state_31062__$1;
(statearr_31118_31212[(2)] = null);

(statearr_31118_31212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (12))){
var inst_30949 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31119_31213 = state_31062__$1;
(statearr_31119_31213[(2)] = inst_30949);

(statearr_31119_31213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (2))){
var inst_30911 = (state_31062[(13)]);
var inst_30918 = cljs.core.seq.call(null,inst_30911);
var inst_30919 = inst_30918;
var inst_30920 = null;
var inst_30921 = (0);
var inst_30922 = (0);
var state_31062__$1 = (function (){var statearr_31120 = state_31062;
(statearr_31120[(7)] = inst_30920);

(statearr_31120[(8)] = inst_30921);

(statearr_31120[(9)] = inst_30922);

(statearr_31120[(10)] = inst_30919);

return statearr_31120;
})();
var statearr_31121_31214 = state_31062__$1;
(statearr_31121_31214[(2)] = null);

(statearr_31121_31214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (23))){
var inst_30978 = (state_31062[(26)]);
var inst_30972 = (state_31062[(19)]);
var inst_30976 = (state_31062[(23)]);
var inst_30980 = (state_31062[(24)]);
var inst_30975 = (state_31062[(25)]);
var inst_30983 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30985 = (function (){var all_files = inst_30972;
var res_SINGLEQUOTE_ = inst_30975;
var res = inst_30976;
var files_not_loaded = inst_30978;
var dependencies_that_loaded = inst_30980;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30978,inst_30972,inst_30976,inst_30980,inst_30975,inst_30983,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30984){
var map__31122 = p__30984;
var map__31122__$1 = ((((!((map__31122 == null)))?(((((map__31122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31122):map__31122);
var request_url = cljs.core.get.call(null,map__31122__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30978,inst_30972,inst_30976,inst_30980,inst_30975,inst_30983,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30986 = cljs.core.reverse.call(null,inst_30980);
var inst_30987 = cljs.core.map.call(null,inst_30985,inst_30986);
var inst_30988 = cljs.core.pr_str.call(null,inst_30987);
var inst_30989 = figwheel.client.utils.log.call(null,inst_30988);
var state_31062__$1 = (function (){var statearr_31124 = state_31062;
(statearr_31124[(31)] = inst_30983);

return statearr_31124;
})();
var statearr_31125_31215 = state_31062__$1;
(statearr_31125_31215[(2)] = inst_30989);

(statearr_31125_31215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (35))){
var state_31062__$1 = state_31062;
var statearr_31129_31216 = state_31062__$1;
(statearr_31129_31216[(2)] = true);

(statearr_31129_31216[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (19))){
var inst_30962 = (state_31062[(12)]);
var inst_30968 = figwheel.client.file_reloading.expand_files.call(null,inst_30962);
var state_31062__$1 = state_31062;
var statearr_31130_31217 = state_31062__$1;
(statearr_31130_31217[(2)] = inst_30968);

(statearr_31130_31217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (11))){
var state_31062__$1 = state_31062;
var statearr_31131_31218 = state_31062__$1;
(statearr_31131_31218[(2)] = null);

(statearr_31131_31218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (9))){
var inst_30951 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31132_31219 = state_31062__$1;
(statearr_31132_31219[(2)] = inst_30951);

(statearr_31132_31219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (5))){
var inst_30921 = (state_31062[(8)]);
var inst_30922 = (state_31062[(9)]);
var inst_30924 = (inst_30922 < inst_30921);
var inst_30925 = inst_30924;
var state_31062__$1 = state_31062;
if(cljs.core.truth_(inst_30925)){
var statearr_31133_31220 = state_31062__$1;
(statearr_31133_31220[(1)] = (7));

} else {
var statearr_31134_31221 = state_31062__$1;
(statearr_31134_31221[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (14))){
var inst_30932 = (state_31062[(22)]);
var inst_30941 = cljs.core.first.call(null,inst_30932);
var inst_30942 = figwheel.client.file_reloading.eval_body.call(null,inst_30941,opts);
var inst_30943 = cljs.core.next.call(null,inst_30932);
var inst_30919 = inst_30943;
var inst_30920 = null;
var inst_30921 = (0);
var inst_30922 = (0);
var state_31062__$1 = (function (){var statearr_31135 = state_31062;
(statearr_31135[(7)] = inst_30920);

(statearr_31135[(8)] = inst_30921);

(statearr_31135[(9)] = inst_30922);

(statearr_31135[(10)] = inst_30919);

(statearr_31135[(32)] = inst_30942);

return statearr_31135;
})();
var statearr_31136_31222 = state_31062__$1;
(statearr_31136_31222[(2)] = null);

(statearr_31136_31222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (45))){
var state_31062__$1 = state_31062;
var statearr_31137_31223 = state_31062__$1;
(statearr_31137_31223[(2)] = null);

(statearr_31137_31223[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (26))){
var inst_30978 = (state_31062[(26)]);
var inst_30972 = (state_31062[(19)]);
var inst_30976 = (state_31062[(23)]);
var inst_30980 = (state_31062[(24)]);
var inst_30975 = (state_31062[(25)]);
var inst_30995 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30997 = (function (){var all_files = inst_30972;
var res_SINGLEQUOTE_ = inst_30975;
var res = inst_30976;
var files_not_loaded = inst_30978;
var dependencies_that_loaded = inst_30980;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30978,inst_30972,inst_30976,inst_30980,inst_30975,inst_30995,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30996){
var map__31139 = p__30996;
var map__31139__$1 = ((((!((map__31139 == null)))?(((((map__31139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31139):map__31139);
var namespace = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30978,inst_30972,inst_30976,inst_30980,inst_30975,inst_30995,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30998 = cljs.core.map.call(null,inst_30997,inst_30976);
var inst_30999 = cljs.core.pr_str.call(null,inst_30998);
var inst_31000 = figwheel.client.utils.log.call(null,inst_30999);
var inst_31001 = (function (){var all_files = inst_30972;
var res_SINGLEQUOTE_ = inst_30975;
var res = inst_30976;
var files_not_loaded = inst_30978;
var dependencies_that_loaded = inst_30980;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30978,inst_30972,inst_30976,inst_30980,inst_30975,inst_30995,inst_30997,inst_30998,inst_30999,inst_31000,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30978,inst_30972,inst_30976,inst_30980,inst_30975,inst_30995,inst_30997,inst_30998,inst_30999,inst_31000,state_val_31063,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31002 = setTimeout(inst_31001,(10));
var state_31062__$1 = (function (){var statearr_31141 = state_31062;
(statearr_31141[(33)] = inst_31000);

(statearr_31141[(34)] = inst_30995);

return statearr_31141;
})();
var statearr_31144_31228 = state_31062__$1;
(statearr_31144_31228[(2)] = inst_31002);

(statearr_31144_31228[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (16))){
var state_31062__$1 = state_31062;
var statearr_31145_31229 = state_31062__$1;
(statearr_31145_31229[(2)] = reload_dependents);

(statearr_31145_31229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (38))){
var inst_31012 = (state_31062[(16)]);
var inst_31033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31012);
var state_31062__$1 = state_31062;
var statearr_31146_31230 = state_31062__$1;
(statearr_31146_31230[(2)] = inst_31033);

(statearr_31146_31230[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (30))){
var state_31062__$1 = state_31062;
var statearr_31147_31231 = state_31062__$1;
(statearr_31147_31231[(2)] = null);

(statearr_31147_31231[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (10))){
var inst_30932 = (state_31062[(22)]);
var inst_30934 = cljs.core.chunked_seq_QMARK_.call(null,inst_30932);
var state_31062__$1 = state_31062;
if(inst_30934){
var statearr_31148_31232 = state_31062__$1;
(statearr_31148_31232[(1)] = (13));

} else {
var statearr_31149_31233 = state_31062__$1;
(statearr_31149_31233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (18))){
var inst_30966 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
if(cljs.core.truth_(inst_30966)){
var statearr_31150_31234 = state_31062__$1;
(statearr_31150_31234[(1)] = (19));

} else {
var statearr_31151_31235 = state_31062__$1;
(statearr_31151_31235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (42))){
var state_31062__$1 = state_31062;
var statearr_31152_31236 = state_31062__$1;
(statearr_31152_31236[(2)] = null);

(statearr_31152_31236[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (37))){
var inst_31028 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31153_31237 = state_31062__$1;
(statearr_31153_31237[(2)] = inst_31028);

(statearr_31153_31237[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (8))){
var inst_30919 = (state_31062[(10)]);
var inst_30932 = (state_31062[(22)]);
var inst_30932__$1 = cljs.core.seq.call(null,inst_30919);
var state_31062__$1 = (function (){var statearr_31154 = state_31062;
(statearr_31154[(22)] = inst_30932__$1);

return statearr_31154;
})();
if(inst_30932__$1){
var statearr_31155_31238 = state_31062__$1;
(statearr_31155_31238[(1)] = (10));

} else {
var statearr_31156_31239 = state_31062__$1;
(statearr_31156_31239[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27198__auto__,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto____0 = (function (){
var statearr_31157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31157[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto__);

(statearr_31157[(1)] = (1));

return statearr_31157;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto____1 = (function (state_31062){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_31062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e31158){if((e31158 instanceof Object)){
var ex__27202__auto__ = e31158;
var statearr_31159_31244 = state_31062;
(statearr_31159_31244[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31245 = state_31062;
state_31062 = G__31245;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto__ = function(state_31062){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto____1.call(this,state_31062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27338__auto__ = (function (){var statearr_31160 = f__27337__auto__.call(null);
(statearr_31160[(6)] = c__27336__auto__);

return statearr_31160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__,map__30904,map__30904__$1,opts,before_jsload,on_jsload,reload_dependents,map__30905,map__30905__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27336__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31248,link){
var map__31249 = p__31248;
var map__31249__$1 = ((((!((map__31249 == null)))?(((((map__31249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31249):map__31249);
var file = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__31249,map__31249__$1,file){
return (function (p1__31246_SHARP_,p2__31247_SHARP_){
if(cljs.core._EQ_.call(null,p1__31246_SHARP_,p2__31247_SHARP_)){
return p1__31246_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__31249,map__31249__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31252){
var map__31253 = p__31252;
var map__31253__$1 = ((((!((map__31253 == null)))?(((((map__31253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31253):map__31253);
var match_length = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31251_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31251_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31255_SHARP_,p2__31256_SHARP_){
return cljs.core.assoc.call(null,p1__31255_SHARP_,cljs.core.get.call(null,p2__31256_SHARP_,key),p2__31256_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31257 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31257);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31257);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31258,p__31259){
var map__31260 = p__31258;
var map__31260__$1 = ((((!((map__31260 == null)))?(((((map__31260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31260):map__31260);
var on_cssload = cljs.core.get.call(null,map__31260__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31261 = p__31259;
var map__31261__$1 = ((((!((map__31261 == null)))?(((((map__31261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31261):map__31261);
var files_msg = map__31261__$1;
var files = cljs.core.get.call(null,map__31261__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1539633382480
