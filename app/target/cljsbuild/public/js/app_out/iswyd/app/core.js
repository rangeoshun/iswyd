// Compiled by ClojureScript 1.10.339 {}
goog.provide('iswyd.app.core');
goog.require('cljs.core');
goog.require('accountant.core');
goog.require('iswyd.app.material_ui');
goog.require('iswyd.app.state');
goog.require('reagent.core');
goog.require('secretary.core');
iswyd.app.core.spacing = (16);
iswyd.app.core.padding = (iswyd.app.core.spacing * (2));
iswyd.app.core.theme_map = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"light","light",1918998747),"#ffffff",new cljs.core.Keyword(null,"main","main",-2117802661),"#eeeeee",new cljs.core.Keyword(null,"dark","dark",1818973999),"#bcbcbc",new cljs.core.Keyword(null,"contrast-text","contrast-text",231616578),"#000000"], null),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ligh","ligh",1448936167),"#ff7961",new cljs.core.Keyword(null,"main","main",-2117802661),"#f44336",new cljs.core.Keyword(null,"dark","dark",1818973999),"#ba000d",new cljs.core.Keyword(null,"contrast-text","contrast-text",231616578),"#000000"], null)], null),new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"useNextVariants","useNextVariants",-1997726210),true], null),new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY], null));
iswyd.app.core.theme = iswyd.app.material_ui.create_theme.call(null,iswyd.app.core.theme_map);
iswyd.app.core.header = (function iswyd$app$core$header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.app_bar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"static","static",-1440077198,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.toolbar,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.Keyword(null,"spacing","spacing",204422175),iswyd.app.core.spacing], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Symbol(null,"h5","h5",-188625098,null)], null),"( a\u026Azw\u028C\u026Ad )"], null)], null)], null)], null)], null);
});
iswyd.app.core.session_paper = (function iswyd$app$core$session_paper(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.paper,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol(null,"nav","nav",-1934895292,null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (session){
var sid = new cljs.core.Keyword(null,"session_id","session_id",1584799627).cljs$core$IFn$_invoke$arity$1(session);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.list_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"button","button",1456579943),true,new cljs.core.Keyword(null,"key","key",-1516042587),sid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Symbol(null,"h6","h6",-2097141989,null)], null),sid], null)], null);
}),iswyd.app.state.sessions_list.call(null)))], null)], null);
});
iswyd.app.core.main_layout = (function iswyd$app$core$main_layout(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28378 = arguments.length;
var i__4532__auto___28379 = (0);
while(true){
if((i__4532__auto___28379 < len__4531__auto___28378)){
args__4534__auto__.push((arguments[i__4532__auto___28379]));

var G__28380 = (i__4532__auto___28379 + (1));
i__4532__auto___28379 = G__28380;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return iswyd.app.core.main_layout.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

iswyd.app.core.main_layout.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.css_baseline,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),iswyd.app.core.theme], null),cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,iswyd.app.core.header.call(null)], null),content)], null)], null);
});

iswyd.app.core.main_layout.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
iswyd.app.core.main_layout.cljs$lang$applyTo = (function (seq28377){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28377));
});

iswyd.app.core.about_page = (function iswyd$app$core$about_page(){
return iswyd.app.core.main_layout.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Symbol(null,"h6","h6",-2097141989,null)], null),"About"], null));
});
iswyd.app.core.sessions_page = (function iswyd$app$core$sessions_page(){
if((iswyd.app.state.sessions_time.call(null) == null)){
iswyd.app.state.get_sessions_BANG_.call(null);
} else {
}

return iswyd.app.core.main_layout.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.material_ui.t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Symbol(null,"h4","h4",-649572776,null)], null),"Sessions"], null),iswyd.app.core.session_paper.call(null));
});
var action__27351__auto___28386 = (function (params__27352__auto__){
if(cljs.core.map_QMARK_.call(null,params__27352__auto__)){
var map__28381 = params__27352__auto__;
var map__28381__$1 = ((((!((map__28381 == null)))?(((((map__28381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28381):map__28381);
return iswyd.app.state.set_page_BANG_.call(null,new cljs.core.Var(function(){return iswyd.app.core.sessions_page;},new cljs.core.Symbol("iswyd.app.core","sessions-page","iswyd.app.core/sessions-page",1292190375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"iswyd.app.core","iswyd.app.core",1387797988,null),new cljs.core.Symbol(null,"sessions-page","sessions-page",1655081669,null),"src/cljs/iswyd/app/core.cljs",20,1,63,63,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(iswyd.app.core.sessions_page)?iswyd.app.core.sessions_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27352__auto__)){
var vec__28383 = params__27352__auto__;
return iswyd.app.state.set_page_BANG_.call(null,new cljs.core.Var(function(){return iswyd.app.core.sessions_page;},new cljs.core.Symbol("iswyd.app.core","sessions-page","iswyd.app.core/sessions-page",1292190375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"iswyd.app.core","iswyd.app.core",1387797988,null),new cljs.core.Symbol(null,"sessions-page","sessions-page",1655081669,null),"src/cljs/iswyd/app/core.cljs",20,1,63,63,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(iswyd.app.core.sessions_page)?iswyd.app.core.sessions_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27351__auto___28386);

var action__27351__auto___28392 = (function (params__27352__auto__){
if(cljs.core.map_QMARK_.call(null,params__27352__auto__)){
var map__28387 = params__27352__auto__;
var map__28387__$1 = ((((!((map__28387 == null)))?(((((map__28387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28387):map__28387);
return iswyd.app.state.set_page_BANG_.call(null,new cljs.core.Var(function(){return iswyd.app.core.about_page;},new cljs.core.Symbol("iswyd.app.core","about-page","iswyd.app.core/about-page",1854293775,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"iswyd.app.core","iswyd.app.core",1387797988,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/iswyd/app/core.cljs",17,1,59,59,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(iswyd.app.core.about_page)?iswyd.app.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27352__auto__)){
var vec__28389 = params__27352__auto__;
return iswyd.app.state.set_page_BANG_.call(null,new cljs.core.Var(function(){return iswyd.app.core.about_page;},new cljs.core.Symbol("iswyd.app.core","about-page","iswyd.app.core/about-page",1854293775,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"iswyd.app.core","iswyd.app.core",1387797988,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/iswyd/app/core.cljs",17,1,59,59,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(iswyd.app.core.about_page)?iswyd.app.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__27351__auto___28392);

iswyd.app.core.mount = (function iswyd$app$core$mount(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [iswyd.app.state.current_page.call(null)], null),document.getElementById("app"));
});
iswyd.app.core.main = (function iswyd$app$core$main(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (p1__28393_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__28393_SHARP_);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (p1__28394_SHARP_){
return secretary.core.locate_route.call(null,p1__28394_SHARP_);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return iswyd.app.core.mount.call(null);
});

//# sourceMappingURL=core.js.map?rel=1539634489372
