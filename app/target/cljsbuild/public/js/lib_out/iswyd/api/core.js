// Compiled by ClojureScript 1.10.339 {}
goog.provide('iswyd.api.core');
goog.require('cljs.core');
iswyd.api.core.host = "http://0.0.0.0";
iswyd.api.core.query = (function iswyd$api$core$query(url_,data){
if(!(cljs.core.empty_QMARK_.call(null,data))){
return cljs.core.reduce.call(null,(function (url,key){
url.searchParams.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),cljs.core.get.call(null,data,key));

return url;
}),url_,cljs.core.keys.call(null,data));
} else {
return url_;
}
});
iswyd.api.core.fetch = (function iswyd$api$core$fetch(url,opts){
var req = fetch(url,cljs.core.clj__GT_js.call(null,opts));
req.catch(((function (req){
return (function (err){
return console.log(err);
});})(req))
);

return req.then(((function (req){
return (function (res){
return res.json();
});})(req))
);
});
iswyd.api.core.get_req = (function iswyd$api$core$get_req(url,opts,data){
return iswyd.api.core.fetch.call(null,iswyd.api.core.query.call(null,url,data),opts);
});
iswyd.api.core.post_req = (function iswyd$api$core$post_req(url,opts){
return iswyd.api.core.fetch.call(null,url,opts);
});
iswyd.api.core.api_req = (function iswyd$api$core$api_req(path,opts,data){
var url = (new URL([cljs.core.str.cljs$core$IFn$_invoke$arity$1(iswyd.api.core.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('')));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"POST","POST",110456857),new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(opts))){
return iswyd.api.core.post_req.call(null,url,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js.call(null,data))], null)));
} else {
return iswyd.api.core.get_req.call(null,url,opts,data);
}
});
iswyd.api.core.post_change = (function iswyd$api$core$post_change(sid,events){
return iswyd.api.core.api_req.call(null,"/api/change",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"POST","POST",110456857)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session_id","session_id",1584799627),sid,new cljs.core.Keyword(null,"change_id","change_id",2005911355),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))].join(''),new cljs.core.Keyword(null,"events","events",1792552201),events], null));
});
iswyd.api.core.get_sessions = (function iswyd$api$core$get_sessions(){
return iswyd.api.core.api_req.call(null,"/api/sessions",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"GET","GET",1736591026)], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=core.js.map
