// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31362){if((e31362 instanceof Error)){
var e = e31362;
return "Error: Unable to stringify";
} else {
throw e31362;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31365 = arguments.length;
switch (G__31365) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31363_SHARP_){
if(typeof p1__31363_SHARP_ === 'string'){
return p1__31363_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31363_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31368 = arguments.length;
var i__4532__auto___31369 = (0);
while(true){
if((i__4532__auto___31369 < len__4531__auto___31368)){
args__4534__auto__.push((arguments[i__4532__auto___31369]));

var G__31370 = (i__4532__auto___31369 + (1));
i__4532__auto___31369 = G__31370;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31367){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31367));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31372 = arguments.length;
var i__4532__auto___31373 = (0);
while(true){
if((i__4532__auto___31373 < len__4531__auto___31372)){
args__4534__auto__.push((arguments[i__4532__auto___31373]));

var G__31374 = (i__4532__auto___31373 + (1));
i__4532__auto___31373 = G__31374;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31371){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31371));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31375){
var map__31376 = p__31375;
var map__31376__$1 = ((((!((map__31376 == null)))?(((((map__31376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31376):map__31376);
var message = cljs.core.get.call(null,map__31376__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31376__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27336__auto___31455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___31455,ch){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___31455,ch){
return (function (state_31427){
var state_val_31428 = (state_31427[(1)]);
if((state_val_31428 === (7))){
var inst_31423 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
var statearr_31429_31456 = state_31427__$1;
(statearr_31429_31456[(2)] = inst_31423);

(statearr_31429_31456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (1))){
var state_31427__$1 = state_31427;
var statearr_31430_31457 = state_31427__$1;
(statearr_31430_31457[(2)] = null);

(statearr_31430_31457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (4))){
var inst_31380 = (state_31427[(7)]);
var inst_31380__$1 = (state_31427[(2)]);
var state_31427__$1 = (function (){var statearr_31431 = state_31427;
(statearr_31431[(7)] = inst_31380__$1);

return statearr_31431;
})();
if(cljs.core.truth_(inst_31380__$1)){
var statearr_31432_31458 = state_31427__$1;
(statearr_31432_31458[(1)] = (5));

} else {
var statearr_31433_31459 = state_31427__$1;
(statearr_31433_31459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (15))){
var inst_31387 = (state_31427[(8)]);
var inst_31402 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31387);
var inst_31403 = cljs.core.first.call(null,inst_31402);
var inst_31404 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31403);
var inst_31405 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31404)].join('');
var inst_31406 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31405);
var state_31427__$1 = state_31427;
var statearr_31434_31460 = state_31427__$1;
(statearr_31434_31460[(2)] = inst_31406);

(statearr_31434_31460[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (13))){
var inst_31411 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
var statearr_31435_31461 = state_31427__$1;
(statearr_31435_31461[(2)] = inst_31411);

(statearr_31435_31461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (6))){
var state_31427__$1 = state_31427;
var statearr_31436_31462 = state_31427__$1;
(statearr_31436_31462[(2)] = null);

(statearr_31436_31462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (17))){
var inst_31409 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
var statearr_31437_31463 = state_31427__$1;
(statearr_31437_31463[(2)] = inst_31409);

(statearr_31437_31463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (3))){
var inst_31425 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31427__$1,inst_31425);
} else {
if((state_val_31428 === (12))){
var inst_31386 = (state_31427[(9)]);
var inst_31400 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31386,opts);
var state_31427__$1 = state_31427;
if(cljs.core.truth_(inst_31400)){
var statearr_31438_31464 = state_31427__$1;
(statearr_31438_31464[(1)] = (15));

} else {
var statearr_31439_31465 = state_31427__$1;
(statearr_31439_31465[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (2))){
var state_31427__$1 = state_31427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31427__$1,(4),ch);
} else {
if((state_val_31428 === (11))){
var inst_31387 = (state_31427[(8)]);
var inst_31392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31393 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31387);
var inst_31394 = cljs.core.async.timeout.call(null,(1000));
var inst_31395 = [inst_31393,inst_31394];
var inst_31396 = (new cljs.core.PersistentVector(null,2,(5),inst_31392,inst_31395,null));
var state_31427__$1 = state_31427;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31427__$1,(14),inst_31396);
} else {
if((state_val_31428 === (9))){
var inst_31387 = (state_31427[(8)]);
var inst_31413 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31414 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31387);
var inst_31415 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31414);
var inst_31416 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31415)].join('');
var inst_31417 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31416);
var state_31427__$1 = (function (){var statearr_31440 = state_31427;
(statearr_31440[(10)] = inst_31413);

return statearr_31440;
})();
var statearr_31441_31466 = state_31427__$1;
(statearr_31441_31466[(2)] = inst_31417);

(statearr_31441_31466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (5))){
var inst_31380 = (state_31427[(7)]);
var inst_31382 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31383 = (new cljs.core.PersistentArrayMap(null,2,inst_31382,null));
var inst_31384 = (new cljs.core.PersistentHashSet(null,inst_31383,null));
var inst_31385 = figwheel.client.focus_msgs.call(null,inst_31384,inst_31380);
var inst_31386 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31385);
var inst_31387 = cljs.core.first.call(null,inst_31385);
var inst_31388 = figwheel.client.autoload_QMARK_.call(null);
var state_31427__$1 = (function (){var statearr_31442 = state_31427;
(statearr_31442[(8)] = inst_31387);

(statearr_31442[(9)] = inst_31386);

return statearr_31442;
})();
if(cljs.core.truth_(inst_31388)){
var statearr_31443_31467 = state_31427__$1;
(statearr_31443_31467[(1)] = (8));

} else {
var statearr_31444_31468 = state_31427__$1;
(statearr_31444_31468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (14))){
var inst_31398 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
var statearr_31445_31469 = state_31427__$1;
(statearr_31445_31469[(2)] = inst_31398);

(statearr_31445_31469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (16))){
var state_31427__$1 = state_31427;
var statearr_31446_31470 = state_31427__$1;
(statearr_31446_31470[(2)] = null);

(statearr_31446_31470[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (10))){
var inst_31419 = (state_31427[(2)]);
var state_31427__$1 = (function (){var statearr_31447 = state_31427;
(statearr_31447[(11)] = inst_31419);

return statearr_31447;
})();
var statearr_31448_31471 = state_31427__$1;
(statearr_31448_31471[(2)] = null);

(statearr_31448_31471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (8))){
var inst_31386 = (state_31427[(9)]);
var inst_31390 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31386,opts);
var state_31427__$1 = state_31427;
if(cljs.core.truth_(inst_31390)){
var statearr_31449_31472 = state_31427__$1;
(statearr_31449_31472[(1)] = (11));

} else {
var statearr_31450_31473 = state_31427__$1;
(statearr_31450_31473[(1)] = (12));

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
});})(c__27336__auto___31455,ch))
;
return ((function (switch__27198__auto__,c__27336__auto___31455,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27199__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27199__auto____0 = (function (){
var statearr_31451 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31451[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27199__auto__);

(statearr_31451[(1)] = (1));

return statearr_31451;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27199__auto____1 = (function (state_31427){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_31427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e31452){if((e31452 instanceof Object)){
var ex__27202__auto__ = e31452;
var statearr_31453_31474 = state_31427;
(statearr_31453_31474[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31475 = state_31427;
state_31427 = G__31475;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27199__auto__ = function(state_31427){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27199__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27199__auto____1.call(this,state_31427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27199__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27199__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___31455,ch))
})();
var state__27338__auto__ = (function (){var statearr_31454 = f__27337__auto__.call(null);
(statearr_31454[(6)] = c__27336__auto___31455);

return statearr_31454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___31455,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31476_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31476_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31480 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31480){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31478 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31479 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31478,_STAR_print_fn_STAR_31479,sb,base_path_31480){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31478,_STAR_print_fn_STAR_31479,sb,base_path_31480))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31479;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31478;
}}catch (e31477){if((e31477 instanceof Error)){
var e = e31477;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31480], null));
} else {
var e = e31477;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31480))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31481){
var map__31482 = p__31481;
var map__31482__$1 = ((((!((map__31482 == null)))?(((((map__31482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31482):map__31482);
var opts = map__31482__$1;
var build_id = cljs.core.get.call(null,map__31482__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31482,map__31482__$1,opts,build_id){
return (function (p__31484){
var vec__31485 = p__31484;
var seq__31486 = cljs.core.seq.call(null,vec__31485);
var first__31487 = cljs.core.first.call(null,seq__31486);
var seq__31486__$1 = cljs.core.next.call(null,seq__31486);
var map__31488 = first__31487;
var map__31488__$1 = ((((!((map__31488 == null)))?(((((map__31488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31488):map__31488);
var msg = map__31488__$1;
var msg_name = cljs.core.get.call(null,map__31488__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31486__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31485,seq__31486,first__31487,seq__31486__$1,map__31488,map__31488__$1,msg,msg_name,_,map__31482,map__31482__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31485,seq__31486,first__31487,seq__31486__$1,map__31488,map__31488__$1,msg,msg_name,_,map__31482,map__31482__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31482,map__31482__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31490){
var vec__31491 = p__31490;
var seq__31492 = cljs.core.seq.call(null,vec__31491);
var first__31493 = cljs.core.first.call(null,seq__31492);
var seq__31492__$1 = cljs.core.next.call(null,seq__31492);
var map__31494 = first__31493;
var map__31494__$1 = ((((!((map__31494 == null)))?(((((map__31494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31494):map__31494);
var msg = map__31494__$1;
var msg_name = cljs.core.get.call(null,map__31494__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31492__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31496){
var map__31497 = p__31496;
var map__31497__$1 = ((((!((map__31497 == null)))?(((((map__31497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31497):map__31497);
var on_compile_warning = cljs.core.get.call(null,map__31497__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31497__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31497,map__31497__$1,on_compile_warning,on_compile_fail){
return (function (p__31499){
var vec__31500 = p__31499;
var seq__31501 = cljs.core.seq.call(null,vec__31500);
var first__31502 = cljs.core.first.call(null,seq__31501);
var seq__31501__$1 = cljs.core.next.call(null,seq__31501);
var map__31503 = first__31502;
var map__31503__$1 = ((((!((map__31503 == null)))?(((((map__31503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31503):map__31503);
var msg = map__31503__$1;
var msg_name = cljs.core.get.call(null,map__31503__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31501__$1;
var pred__31505 = cljs.core._EQ_;
var expr__31506 = msg_name;
if(cljs.core.truth_(pred__31505.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31506))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31505.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31506))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31497,map__31497__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto__,msg_hist,msg_names,msg){
return (function (state_31595){
var state_val_31596 = (state_31595[(1)]);
if((state_val_31596 === (7))){
var inst_31515 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31515)){
var statearr_31597_31644 = state_31595__$1;
(statearr_31597_31644[(1)] = (8));

} else {
var statearr_31598_31645 = state_31595__$1;
(statearr_31598_31645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (20))){
var inst_31589 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31599_31646 = state_31595__$1;
(statearr_31599_31646[(2)] = inst_31589);

(statearr_31599_31646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (27))){
var inst_31585 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31600_31647 = state_31595__$1;
(statearr_31600_31647[(2)] = inst_31585);

(statearr_31600_31647[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (1))){
var inst_31508 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31508)){
var statearr_31601_31648 = state_31595__$1;
(statearr_31601_31648[(1)] = (2));

} else {
var statearr_31602_31649 = state_31595__$1;
(statearr_31602_31649[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (24))){
var inst_31587 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31603_31650 = state_31595__$1;
(statearr_31603_31650[(2)] = inst_31587);

(statearr_31603_31650[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (4))){
var inst_31593 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31595__$1,inst_31593);
} else {
if((state_val_31596 === (15))){
var inst_31591 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31604_31651 = state_31595__$1;
(statearr_31604_31651[(2)] = inst_31591);

(statearr_31604_31651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (21))){
var inst_31544 = (state_31595[(2)]);
var inst_31545 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31546 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31545);
var state_31595__$1 = (function (){var statearr_31605 = state_31595;
(statearr_31605[(7)] = inst_31544);

return statearr_31605;
})();
var statearr_31606_31652 = state_31595__$1;
(statearr_31606_31652[(2)] = inst_31546);

(statearr_31606_31652[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (31))){
var inst_31574 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31574)){
var statearr_31607_31653 = state_31595__$1;
(statearr_31607_31653[(1)] = (34));

} else {
var statearr_31608_31654 = state_31595__$1;
(statearr_31608_31654[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (32))){
var inst_31583 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31609_31655 = state_31595__$1;
(statearr_31609_31655[(2)] = inst_31583);

(statearr_31609_31655[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (33))){
var inst_31570 = (state_31595[(2)]);
var inst_31571 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31572 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31571);
var state_31595__$1 = (function (){var statearr_31610 = state_31595;
(statearr_31610[(8)] = inst_31570);

return statearr_31610;
})();
var statearr_31611_31656 = state_31595__$1;
(statearr_31611_31656[(2)] = inst_31572);

(statearr_31611_31656[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (13))){
var inst_31529 = figwheel.client.heads_up.clear.call(null);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31595__$1,(16),inst_31529);
} else {
if((state_val_31596 === (22))){
var inst_31550 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31551 = figwheel.client.heads_up.append_warning_message.call(null,inst_31550);
var state_31595__$1 = state_31595;
var statearr_31612_31657 = state_31595__$1;
(statearr_31612_31657[(2)] = inst_31551);

(statearr_31612_31657[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (36))){
var inst_31581 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31613_31658 = state_31595__$1;
(statearr_31613_31658[(2)] = inst_31581);

(statearr_31613_31658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (29))){
var inst_31561 = (state_31595[(2)]);
var inst_31562 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31563 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31562);
var state_31595__$1 = (function (){var statearr_31614 = state_31595;
(statearr_31614[(9)] = inst_31561);

return statearr_31614;
})();
var statearr_31615_31659 = state_31595__$1;
(statearr_31615_31659[(2)] = inst_31563);

(statearr_31615_31659[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (6))){
var inst_31510 = (state_31595[(10)]);
var state_31595__$1 = state_31595;
var statearr_31616_31660 = state_31595__$1;
(statearr_31616_31660[(2)] = inst_31510);

(statearr_31616_31660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (28))){
var inst_31557 = (state_31595[(2)]);
var inst_31558 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31559 = figwheel.client.heads_up.display_warning.call(null,inst_31558);
var state_31595__$1 = (function (){var statearr_31617 = state_31595;
(statearr_31617[(11)] = inst_31557);

return statearr_31617;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31595__$1,(29),inst_31559);
} else {
if((state_val_31596 === (25))){
var inst_31555 = figwheel.client.heads_up.clear.call(null);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31595__$1,(28),inst_31555);
} else {
if((state_val_31596 === (34))){
var inst_31576 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31595__$1,(37),inst_31576);
} else {
if((state_val_31596 === (17))){
var inst_31535 = (state_31595[(2)]);
var inst_31536 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31537 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31536);
var state_31595__$1 = (function (){var statearr_31618 = state_31595;
(statearr_31618[(12)] = inst_31535);

return statearr_31618;
})();
var statearr_31619_31661 = state_31595__$1;
(statearr_31619_31661[(2)] = inst_31537);

(statearr_31619_31661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (3))){
var inst_31527 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31527)){
var statearr_31620_31662 = state_31595__$1;
(statearr_31620_31662[(1)] = (13));

} else {
var statearr_31621_31663 = state_31595__$1;
(statearr_31621_31663[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (12))){
var inst_31523 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31622_31664 = state_31595__$1;
(statearr_31622_31664[(2)] = inst_31523);

(statearr_31622_31664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (2))){
var inst_31510 = (state_31595[(10)]);
var inst_31510__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31595__$1 = (function (){var statearr_31623 = state_31595;
(statearr_31623[(10)] = inst_31510__$1);

return statearr_31623;
})();
if(cljs.core.truth_(inst_31510__$1)){
var statearr_31624_31665 = state_31595__$1;
(statearr_31624_31665[(1)] = (5));

} else {
var statearr_31625_31666 = state_31595__$1;
(statearr_31625_31666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (23))){
var inst_31553 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31553)){
var statearr_31626_31667 = state_31595__$1;
(statearr_31626_31667[(1)] = (25));

} else {
var statearr_31627_31668 = state_31595__$1;
(statearr_31627_31668[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (35))){
var state_31595__$1 = state_31595;
var statearr_31628_31669 = state_31595__$1;
(statearr_31628_31669[(2)] = null);

(statearr_31628_31669[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (19))){
var inst_31548 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31548)){
var statearr_31629_31670 = state_31595__$1;
(statearr_31629_31670[(1)] = (22));

} else {
var statearr_31630_31671 = state_31595__$1;
(statearr_31630_31671[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (11))){
var inst_31519 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31631_31672 = state_31595__$1;
(statearr_31631_31672[(2)] = inst_31519);

(statearr_31631_31672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (9))){
var inst_31521 = figwheel.client.heads_up.clear.call(null);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31595__$1,(12),inst_31521);
} else {
if((state_val_31596 === (5))){
var inst_31512 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31595__$1 = state_31595;
var statearr_31632_31673 = state_31595__$1;
(statearr_31632_31673[(2)] = inst_31512);

(statearr_31632_31673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (14))){
var inst_31539 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31539)){
var statearr_31633_31674 = state_31595__$1;
(statearr_31633_31674[(1)] = (18));

} else {
var statearr_31634_31675 = state_31595__$1;
(statearr_31634_31675[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (26))){
var inst_31565 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31565)){
var statearr_31635_31676 = state_31595__$1;
(statearr_31635_31676[(1)] = (30));

} else {
var statearr_31636_31677 = state_31595__$1;
(statearr_31636_31677[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (16))){
var inst_31531 = (state_31595[(2)]);
var inst_31532 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31533 = figwheel.client.heads_up.display_exception.call(null,inst_31532);
var state_31595__$1 = (function (){var statearr_31637 = state_31595;
(statearr_31637[(13)] = inst_31531);

return statearr_31637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31595__$1,(17),inst_31533);
} else {
if((state_val_31596 === (30))){
var inst_31567 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31568 = figwheel.client.heads_up.display_warning.call(null,inst_31567);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31595__$1,(33),inst_31568);
} else {
if((state_val_31596 === (10))){
var inst_31525 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31638_31678 = state_31595__$1;
(statearr_31638_31678[(2)] = inst_31525);

(statearr_31638_31678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (18))){
var inst_31541 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31542 = figwheel.client.heads_up.display_exception.call(null,inst_31541);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31595__$1,(21),inst_31542);
} else {
if((state_val_31596 === (37))){
var inst_31578 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31639_31679 = state_31595__$1;
(statearr_31639_31679[(2)] = inst_31578);

(statearr_31639_31679[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (8))){
var inst_31517 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31595__$1,(11),inst_31517);
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
});})(c__27336__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27198__auto__,c__27336__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto____0 = (function (){
var statearr_31640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31640[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto__);

(statearr_31640[(1)] = (1));

return statearr_31640;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto____1 = (function (state_31595){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_31595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e31641){if((e31641 instanceof Object)){
var ex__27202__auto__ = e31641;
var statearr_31642_31680 = state_31595;
(statearr_31642_31680[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31681 = state_31595;
state_31595 = G__31681;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto__ = function(state_31595){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto____1.call(this,state_31595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto__,msg_hist,msg_names,msg))
})();
var state__27338__auto__ = (function (){var statearr_31643 = f__27337__auto__.call(null);
(statearr_31643[(6)] = c__27336__auto__);

return statearr_31643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__,msg_hist,msg_names,msg))
);

return c__27336__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27336__auto___31710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___31710,ch){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___31710,ch){
return (function (state_31696){
var state_val_31697 = (state_31696[(1)]);
if((state_val_31697 === (1))){
var state_31696__$1 = state_31696;
var statearr_31698_31711 = state_31696__$1;
(statearr_31698_31711[(2)] = null);

(statearr_31698_31711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (2))){
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(4),ch);
} else {
if((state_val_31697 === (3))){
var inst_31694 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31696__$1,inst_31694);
} else {
if((state_val_31697 === (4))){
var inst_31684 = (state_31696[(7)]);
var inst_31684__$1 = (state_31696[(2)]);
var state_31696__$1 = (function (){var statearr_31699 = state_31696;
(statearr_31699[(7)] = inst_31684__$1);

return statearr_31699;
})();
if(cljs.core.truth_(inst_31684__$1)){
var statearr_31700_31712 = state_31696__$1;
(statearr_31700_31712[(1)] = (5));

} else {
var statearr_31701_31713 = state_31696__$1;
(statearr_31701_31713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (5))){
var inst_31684 = (state_31696[(7)]);
var inst_31686 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31684);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(8),inst_31686);
} else {
if((state_val_31697 === (6))){
var state_31696__$1 = state_31696;
var statearr_31702_31714 = state_31696__$1;
(statearr_31702_31714[(2)] = null);

(statearr_31702_31714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (7))){
var inst_31692 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31703_31715 = state_31696__$1;
(statearr_31703_31715[(2)] = inst_31692);

(statearr_31703_31715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (8))){
var inst_31688 = (state_31696[(2)]);
var state_31696__$1 = (function (){var statearr_31704 = state_31696;
(statearr_31704[(8)] = inst_31688);

return statearr_31704;
})();
var statearr_31705_31716 = state_31696__$1;
(statearr_31705_31716[(2)] = null);

(statearr_31705_31716[(1)] = (2));


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
});})(c__27336__auto___31710,ch))
;
return ((function (switch__27198__auto__,c__27336__auto___31710,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27199__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27199__auto____0 = (function (){
var statearr_31706 = [null,null,null,null,null,null,null,null,null];
(statearr_31706[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27199__auto__);

(statearr_31706[(1)] = (1));

return statearr_31706;
});
var figwheel$client$heads_up_plugin_$_state_machine__27199__auto____1 = (function (state_31696){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_31696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e31707){if((e31707 instanceof Object)){
var ex__27202__auto__ = e31707;
var statearr_31708_31717 = state_31696;
(statearr_31708_31717[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31718 = state_31696;
state_31696 = G__31718;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27199__auto__ = function(state_31696){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27199__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27199__auto____1.call(this,state_31696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27199__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27199__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___31710,ch))
})();
var state__27338__auto__ = (function (){var statearr_31709 = f__27337__auto__.call(null);
(statearr_31709[(6)] = c__27336__auto___31710);

return statearr_31709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___31710,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto__){
return (function (state_31724){
var state_val_31725 = (state_31724[(1)]);
if((state_val_31725 === (1))){
var inst_31719 = cljs.core.async.timeout.call(null,(3000));
var state_31724__$1 = state_31724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31724__$1,(2),inst_31719);
} else {
if((state_val_31725 === (2))){
var inst_31721 = (state_31724[(2)]);
var inst_31722 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31724__$1 = (function (){var statearr_31726 = state_31724;
(statearr_31726[(7)] = inst_31721);

return statearr_31726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31724__$1,inst_31722);
} else {
return null;
}
}
});})(c__27336__auto__))
;
return ((function (switch__27198__auto__,c__27336__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27199__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27199__auto____0 = (function (){
var statearr_31727 = [null,null,null,null,null,null,null,null];
(statearr_31727[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27199__auto__);

(statearr_31727[(1)] = (1));

return statearr_31727;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27199__auto____1 = (function (state_31724){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_31724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e31728){if((e31728 instanceof Object)){
var ex__27202__auto__ = e31728;
var statearr_31729_31731 = state_31724;
(statearr_31729_31731[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31732 = state_31724;
state_31724 = G__31732;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27199__auto__ = function(state_31724){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27199__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27199__auto____1.call(this,state_31724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27199__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27199__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto__))
})();
var state__27338__auto__ = (function (){var statearr_31730 = f__27337__auto__.call(null);
(statearr_31730[(6)] = c__27336__auto__);

return statearr_31730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__))
);

return c__27336__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31739){
var state_val_31740 = (state_31739[(1)]);
if((state_val_31740 === (1))){
var inst_31733 = cljs.core.async.timeout.call(null,(2000));
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31739__$1,(2),inst_31733);
} else {
if((state_val_31740 === (2))){
var inst_31735 = (state_31739[(2)]);
var inst_31736 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31737 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31736);
var state_31739__$1 = (function (){var statearr_31741 = state_31739;
(statearr_31741[(7)] = inst_31735);

return statearr_31741;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31739__$1,inst_31737);
} else {
return null;
}
}
});})(c__27336__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27198__auto__,c__27336__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto____0 = (function (){
var statearr_31742 = [null,null,null,null,null,null,null,null];
(statearr_31742[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto__);

(statearr_31742[(1)] = (1));

return statearr_31742;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto____1 = (function (state_31739){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_31739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e31743){if((e31743 instanceof Object)){
var ex__27202__auto__ = e31743;
var statearr_31744_31746 = state_31739;
(statearr_31744_31746[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31747 = state_31739;
state_31739 = G__31747;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto__ = function(state_31739){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto____1.call(this,state_31739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27338__auto__ = (function (){var statearr_31745 = f__27337__auto__.call(null);
(statearr_31745[(6)] = c__27336__auto__);

return statearr_31745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__,figwheel_version,temp__5457__auto__))
);

return c__27336__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31748){
var map__31749 = p__31748;
var map__31749__$1 = ((((!((map__31749 == null)))?(((((map__31749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31749):map__31749);
var file = cljs.core.get.call(null,map__31749__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31749__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31749__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31751 = "";
var G__31751__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31751),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31751);
var G__31751__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31751__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31751__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31751__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31751__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31752){
var map__31753 = p__31752;
var map__31753__$1 = ((((!((map__31753 == null)))?(((((map__31753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31753):map__31753);
var ed = map__31753__$1;
var formatted_exception = cljs.core.get.call(null,map__31753__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31753__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31753__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31755_31759 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31756_31760 = null;
var count__31757_31761 = (0);
var i__31758_31762 = (0);
while(true){
if((i__31758_31762 < count__31757_31761)){
var msg_31763 = cljs.core._nth.call(null,chunk__31756_31760,i__31758_31762);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31763);


var G__31764 = seq__31755_31759;
var G__31765 = chunk__31756_31760;
var G__31766 = count__31757_31761;
var G__31767 = (i__31758_31762 + (1));
seq__31755_31759 = G__31764;
chunk__31756_31760 = G__31765;
count__31757_31761 = G__31766;
i__31758_31762 = G__31767;
continue;
} else {
var temp__5457__auto___31768 = cljs.core.seq.call(null,seq__31755_31759);
if(temp__5457__auto___31768){
var seq__31755_31769__$1 = temp__5457__auto___31768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31755_31769__$1)){
var c__4351__auto___31770 = cljs.core.chunk_first.call(null,seq__31755_31769__$1);
var G__31771 = cljs.core.chunk_rest.call(null,seq__31755_31769__$1);
var G__31772 = c__4351__auto___31770;
var G__31773 = cljs.core.count.call(null,c__4351__auto___31770);
var G__31774 = (0);
seq__31755_31759 = G__31771;
chunk__31756_31760 = G__31772;
count__31757_31761 = G__31773;
i__31758_31762 = G__31774;
continue;
} else {
var msg_31775 = cljs.core.first.call(null,seq__31755_31769__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31775);


var G__31776 = cljs.core.next.call(null,seq__31755_31769__$1);
var G__31777 = null;
var G__31778 = (0);
var G__31779 = (0);
seq__31755_31759 = G__31776;
chunk__31756_31760 = G__31777;
count__31757_31761 = G__31778;
i__31758_31762 = G__31779;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31780){
var map__31781 = p__31780;
var map__31781__$1 = ((((!((map__31781 == null)))?(((((map__31781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31781):map__31781);
var w = map__31781__$1;
var message = cljs.core.get.call(null,map__31781__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/target/cljsbuild/public/js/app_out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/target/cljsbuild/public/js/app_out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31783 = cljs.core.seq.call(null,plugins);
var chunk__31784 = null;
var count__31785 = (0);
var i__31786 = (0);
while(true){
if((i__31786 < count__31785)){
var vec__31787 = cljs.core._nth.call(null,chunk__31784,i__31786);
var k = cljs.core.nth.call(null,vec__31787,(0),null);
var plugin = cljs.core.nth.call(null,vec__31787,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31793 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31783,chunk__31784,count__31785,i__31786,pl_31793,vec__31787,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31793.call(null,msg_hist);
});})(seq__31783,chunk__31784,count__31785,i__31786,pl_31793,vec__31787,k,plugin))
);
} else {
}


var G__31794 = seq__31783;
var G__31795 = chunk__31784;
var G__31796 = count__31785;
var G__31797 = (i__31786 + (1));
seq__31783 = G__31794;
chunk__31784 = G__31795;
count__31785 = G__31796;
i__31786 = G__31797;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31783);
if(temp__5457__auto__){
var seq__31783__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31783__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31783__$1);
var G__31798 = cljs.core.chunk_rest.call(null,seq__31783__$1);
var G__31799 = c__4351__auto__;
var G__31800 = cljs.core.count.call(null,c__4351__auto__);
var G__31801 = (0);
seq__31783 = G__31798;
chunk__31784 = G__31799;
count__31785 = G__31800;
i__31786 = G__31801;
continue;
} else {
var vec__31790 = cljs.core.first.call(null,seq__31783__$1);
var k = cljs.core.nth.call(null,vec__31790,(0),null);
var plugin = cljs.core.nth.call(null,vec__31790,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31802 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31783,chunk__31784,count__31785,i__31786,pl_31802,vec__31790,k,plugin,seq__31783__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31802.call(null,msg_hist);
});})(seq__31783,chunk__31784,count__31785,i__31786,pl_31802,vec__31790,k,plugin,seq__31783__$1,temp__5457__auto__))
);
} else {
}


var G__31803 = cljs.core.next.call(null,seq__31783__$1);
var G__31804 = null;
var G__31805 = (0);
var G__31806 = (0);
seq__31783 = G__31803;
chunk__31784 = G__31804;
count__31785 = G__31805;
i__31786 = G__31806;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31808 = arguments.length;
switch (G__31808) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31809_31814 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31810_31815 = null;
var count__31811_31816 = (0);
var i__31812_31817 = (0);
while(true){
if((i__31812_31817 < count__31811_31816)){
var msg_31818 = cljs.core._nth.call(null,chunk__31810_31815,i__31812_31817);
figwheel.client.socket.handle_incoming_message.call(null,msg_31818);


var G__31819 = seq__31809_31814;
var G__31820 = chunk__31810_31815;
var G__31821 = count__31811_31816;
var G__31822 = (i__31812_31817 + (1));
seq__31809_31814 = G__31819;
chunk__31810_31815 = G__31820;
count__31811_31816 = G__31821;
i__31812_31817 = G__31822;
continue;
} else {
var temp__5457__auto___31823 = cljs.core.seq.call(null,seq__31809_31814);
if(temp__5457__auto___31823){
var seq__31809_31824__$1 = temp__5457__auto___31823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31809_31824__$1)){
var c__4351__auto___31825 = cljs.core.chunk_first.call(null,seq__31809_31824__$1);
var G__31826 = cljs.core.chunk_rest.call(null,seq__31809_31824__$1);
var G__31827 = c__4351__auto___31825;
var G__31828 = cljs.core.count.call(null,c__4351__auto___31825);
var G__31829 = (0);
seq__31809_31814 = G__31826;
chunk__31810_31815 = G__31827;
count__31811_31816 = G__31828;
i__31812_31817 = G__31829;
continue;
} else {
var msg_31830 = cljs.core.first.call(null,seq__31809_31824__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31830);


var G__31831 = cljs.core.next.call(null,seq__31809_31824__$1);
var G__31832 = null;
var G__31833 = (0);
var G__31834 = (0);
seq__31809_31814 = G__31831;
chunk__31810_31815 = G__31832;
count__31811_31816 = G__31833;
i__31812_31817 = G__31834;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31839 = arguments.length;
var i__4532__auto___31840 = (0);
while(true){
if((i__4532__auto___31840 < len__4531__auto___31839)){
args__4534__auto__.push((arguments[i__4532__auto___31840]));

var G__31841 = (i__4532__auto___31840 + (1));
i__4532__auto___31840 = G__31841;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31836){
var map__31837 = p__31836;
var map__31837__$1 = ((((!((map__31837 == null)))?(((((map__31837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31837):map__31837);
var opts = map__31837__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31835){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31835));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31842){if((e31842 instanceof Error)){
var e = e31842;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31842;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31843){
var map__31844 = p__31843;
var map__31844__$1 = ((((!((map__31844 == null)))?(((((map__31844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31844):map__31844);
var msg_name = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1539633382908
