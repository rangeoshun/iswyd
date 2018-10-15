// Compiled by ClojureScript 1.10.339 {}
goog.provide('iswyd.app.state');
goog.require('cljs.core');
goog.require('iswyd.api.core');
goog.require('reagent.core');
if((typeof iswyd !== 'undefined') && (typeof iswyd.app !== 'undefined') && (typeof iswyd.app.state !== 'undefined') && (typeof iswyd.app.state.state !== 'undefined')){
} else {
iswyd.app.state.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"list","list",765357683),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"time","time",1385887882),null], null)], null));
}
iswyd.app.state.set_page_BANG_ = (function iswyd$app$state$set_page_BANG_(page){
return cljs.core.swap_BANG_.call(null,iswyd.app.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page);
});
iswyd.app.state.current_page = (function iswyd$app$state$current_page(){
return cljs.core.get.call(null,cljs.core.deref.call(null,iswyd.app.state.state),new cljs.core.Keyword(null,"page","page",849072397));
});
iswyd.app.state.get_sessions_BANG_ = (function iswyd$app$state$get_sessions_BANG_(){
cljs.core.swap_BANG_.call(null,iswyd.app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true);

var req = iswyd.api.core.get_sessions.call(null);
return req.then(((function (req){
return (function (_res){
var res = cljs.core.js__GT_clj.call(null,_res,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
cljs.core.swap_BANG_.call(null,iswyd.app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Keyword(null,"list","list",765357683)], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(res));

cljs.core.swap_BANG_.call(null,iswyd.app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);

return cljs.core.swap_BANG_.call(null,iswyd.app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Keyword(null,"time","time",1385887882)], null),Date.now());
});})(req))
);
});
iswyd.app.state.sessions_list = (function iswyd$app$state$sessions_list(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,iswyd.app.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Keyword(null,"list","list",765357683)], null));
});
iswyd.app.state.sessions_time = (function iswyd$app$state$sessions_time(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,iswyd.app.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Keyword(null,"time","time",1385887882)], null));
});
iswyd.app.state.sessions_loading_QMARK_ = (function iswyd$app$state$sessions_loading_QMARK_(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,iswyd.app.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null));
});

//# sourceMappingURL=state.js.map?rel=1539633379430
