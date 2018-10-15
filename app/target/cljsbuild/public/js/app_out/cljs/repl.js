// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31266){
var map__31267 = p__31266;
var map__31267__$1 = ((((!((map__31267 == null)))?(((((map__31267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31267):map__31267);
var m = map__31267__$1;
var n = cljs.core.get.call(null,map__31267__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31267__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31269_31291 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31270_31292 = null;
var count__31271_31293 = (0);
var i__31272_31294 = (0);
while(true){
if((i__31272_31294 < count__31271_31293)){
var f_31295 = cljs.core._nth.call(null,chunk__31270_31292,i__31272_31294);
cljs.core.println.call(null,"  ",f_31295);


var G__31296 = seq__31269_31291;
var G__31297 = chunk__31270_31292;
var G__31298 = count__31271_31293;
var G__31299 = (i__31272_31294 + (1));
seq__31269_31291 = G__31296;
chunk__31270_31292 = G__31297;
count__31271_31293 = G__31298;
i__31272_31294 = G__31299;
continue;
} else {
var temp__5457__auto___31300 = cljs.core.seq.call(null,seq__31269_31291);
if(temp__5457__auto___31300){
var seq__31269_31301__$1 = temp__5457__auto___31300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31269_31301__$1)){
var c__4351__auto___31302 = cljs.core.chunk_first.call(null,seq__31269_31301__$1);
var G__31303 = cljs.core.chunk_rest.call(null,seq__31269_31301__$1);
var G__31304 = c__4351__auto___31302;
var G__31305 = cljs.core.count.call(null,c__4351__auto___31302);
var G__31306 = (0);
seq__31269_31291 = G__31303;
chunk__31270_31292 = G__31304;
count__31271_31293 = G__31305;
i__31272_31294 = G__31306;
continue;
} else {
var f_31307 = cljs.core.first.call(null,seq__31269_31301__$1);
cljs.core.println.call(null,"  ",f_31307);


var G__31308 = cljs.core.next.call(null,seq__31269_31301__$1);
var G__31309 = null;
var G__31310 = (0);
var G__31311 = (0);
seq__31269_31291 = G__31308;
chunk__31270_31292 = G__31309;
count__31271_31293 = G__31310;
i__31272_31294 = G__31311;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31312 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31312);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31312)))?cljs.core.second.call(null,arglists_31312):arglists_31312));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31273_31313 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31274_31314 = null;
var count__31275_31315 = (0);
var i__31276_31316 = (0);
while(true){
if((i__31276_31316 < count__31275_31315)){
var vec__31277_31317 = cljs.core._nth.call(null,chunk__31274_31314,i__31276_31316);
var name_31318 = cljs.core.nth.call(null,vec__31277_31317,(0),null);
var map__31280_31319 = cljs.core.nth.call(null,vec__31277_31317,(1),null);
var map__31280_31320__$1 = ((((!((map__31280_31319 == null)))?(((((map__31280_31319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31280_31319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31280_31319):map__31280_31319);
var doc_31321 = cljs.core.get.call(null,map__31280_31320__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31322 = cljs.core.get.call(null,map__31280_31320__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31318);

cljs.core.println.call(null," ",arglists_31322);

if(cljs.core.truth_(doc_31321)){
cljs.core.println.call(null," ",doc_31321);
} else {
}


var G__31323 = seq__31273_31313;
var G__31324 = chunk__31274_31314;
var G__31325 = count__31275_31315;
var G__31326 = (i__31276_31316 + (1));
seq__31273_31313 = G__31323;
chunk__31274_31314 = G__31324;
count__31275_31315 = G__31325;
i__31276_31316 = G__31326;
continue;
} else {
var temp__5457__auto___31327 = cljs.core.seq.call(null,seq__31273_31313);
if(temp__5457__auto___31327){
var seq__31273_31328__$1 = temp__5457__auto___31327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31273_31328__$1)){
var c__4351__auto___31329 = cljs.core.chunk_first.call(null,seq__31273_31328__$1);
var G__31330 = cljs.core.chunk_rest.call(null,seq__31273_31328__$1);
var G__31331 = c__4351__auto___31329;
var G__31332 = cljs.core.count.call(null,c__4351__auto___31329);
var G__31333 = (0);
seq__31273_31313 = G__31330;
chunk__31274_31314 = G__31331;
count__31275_31315 = G__31332;
i__31276_31316 = G__31333;
continue;
} else {
var vec__31282_31334 = cljs.core.first.call(null,seq__31273_31328__$1);
var name_31335 = cljs.core.nth.call(null,vec__31282_31334,(0),null);
var map__31285_31336 = cljs.core.nth.call(null,vec__31282_31334,(1),null);
var map__31285_31337__$1 = ((((!((map__31285_31336 == null)))?(((((map__31285_31336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31285_31336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31285_31336):map__31285_31336);
var doc_31338 = cljs.core.get.call(null,map__31285_31337__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31339 = cljs.core.get.call(null,map__31285_31337__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31335);

cljs.core.println.call(null," ",arglists_31339);

if(cljs.core.truth_(doc_31338)){
cljs.core.println.call(null," ",doc_31338);
} else {
}


var G__31340 = cljs.core.next.call(null,seq__31273_31328__$1);
var G__31341 = null;
var G__31342 = (0);
var G__31343 = (0);
seq__31273_31313 = G__31340;
chunk__31274_31314 = G__31341;
count__31275_31315 = G__31342;
i__31276_31316 = G__31343;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__31287 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31288 = null;
var count__31289 = (0);
var i__31290 = (0);
while(true){
if((i__31290 < count__31289)){
var role = cljs.core._nth.call(null,chunk__31288,i__31290);
var temp__5457__auto___31344__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31344__$1)){
var spec_31345 = temp__5457__auto___31344__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31345));
} else {
}


var G__31346 = seq__31287;
var G__31347 = chunk__31288;
var G__31348 = count__31289;
var G__31349 = (i__31290 + (1));
seq__31287 = G__31346;
chunk__31288 = G__31347;
count__31289 = G__31348;
i__31290 = G__31349;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31287);
if(temp__5457__auto____$1){
var seq__31287__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31287__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31287__$1);
var G__31350 = cljs.core.chunk_rest.call(null,seq__31287__$1);
var G__31351 = c__4351__auto__;
var G__31352 = cljs.core.count.call(null,c__4351__auto__);
var G__31353 = (0);
seq__31287 = G__31350;
chunk__31288 = G__31351;
count__31289 = G__31352;
i__31290 = G__31353;
continue;
} else {
var role = cljs.core.first.call(null,seq__31287__$1);
var temp__5457__auto___31354__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31354__$2)){
var spec_31355 = temp__5457__auto___31354__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31355));
} else {
}


var G__31356 = cljs.core.next.call(null,seq__31287__$1);
var G__31357 = null;
var G__31358 = (0);
var G__31359 = (0);
seq__31287 = G__31356;
chunk__31288 = G__31357;
count__31289 = G__31358;
i__31290 = G__31359;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1539633382628
