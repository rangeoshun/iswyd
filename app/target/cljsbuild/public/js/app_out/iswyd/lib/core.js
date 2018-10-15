// Compiled by ClojureScript 1.10.339 {}
goog.provide('iswyd.lib.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('iswyd.api.core');
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.sid !== 'undefined')){
} else {
iswyd.lib.core.sid = cljs.core.atom.call(null,"");
}
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.ready !== 'undefined')){
} else {
iswyd.lib.core.ready = cljs.core.atom.call(null,false);
}
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.prev_html !== 'undefined')){
} else {
iswyd.lib.core.prev_html = cljs.core.atom.call(null,"");
}
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.prev_pos !== 'undefined')){
} else {
iswyd.lib.core.prev_pos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.curr_pos !== 'undefined')){
} else {
iswyd.lib.core.curr_pos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.prev_resize !== 'undefined')){
} else {
iswyd.lib.core.prev_resize = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.curr_resize !== 'undefined')){
} else {
iswyd.lib.core.curr_resize = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.prev_scroll !== 'undefined')){
} else {
iswyd.lib.core.prev_scroll = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.curr_scroll !== 'undefined')){
} else {
iswyd.lib.core.curr_scroll = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.changelog !== 'undefined')){
} else {
iswyd.lib.core.changelog = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.excludes !== 'undefined')){
} else {
iswyd.lib.core.excludes = cljs.core.atom.call(null,"");
}
iswyd.lib.core.add_css_BANG_ = (function iswyd$lib$core$add_css_BANG_(node,style){
return Object.keys(style).forEach((function (key){
return (node.style[key] = (style[key]));
}));
});
iswyd.lib.core.doc_QMARK_ = (function iswyd$lib$core$doc_QMARK_(node){
return cljs.core._EQ_.call(null,node,document);
});
iswyd.lib.core.mark_QMARK_ = (function iswyd$lib$core$mark_QMARK_(node){
return node.getAttribute("data-iswyd-mark");
});
iswyd.lib.core.mark_BANG_ = (function iswyd$lib$core$mark_BANG_(node){
if(cljs.core.not.call(null,iswyd.lib.core.doc_QMARK_.call(null,node))){
var mark = iswyd.lib.core.mark_QMARK_.call(null,node);
if(cljs.core.not.call(null,mark)){
var mark_25706__$1 = cljs.core.random_uuid.call(null);
node.setAttribute("data-iswyd-mark",mark_25706__$1);

} else {
}

return mark;
} else {
return null;
}
});
iswyd.lib.core.now = (function iswyd$lib$core$now(){
return (new Date()).getTime();
});
iswyd.lib.core.log_BANG_ = (function iswyd$lib$core$log_BANG_(ev){
return cljs.core.swap_BANG_.call(null,iswyd.lib.core.changelog,(function (){
return cljs.core.conj.call(null,cljs.core.deref.call(null,iswyd.lib.core.changelog),ev);
}));
});
iswyd.lib.core.log_change_BANG_ = (function iswyd$lib$core$log_change_BANG_(patch,key){
if(!(cljs.core.empty_QMARK_.call(null,patch))){
return iswyd.lib.core.log_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"patch","patch",380775109),patch,new cljs.core.Keyword(null,"time","time",1385887882),iswyd.lib.core.now.call(null)], null));
} else {
return null;
}
});
iswyd.lib.core.log_scroll_BANG_ = (function iswyd$lib$core$log_scroll_BANG_(ev){
iswyd.lib.core.log_BANG_.call(null,ev);

return cljs.core.reset_BANG_.call(null,iswyd.lib.core.prev_scroll,ev);
});
iswyd.lib.core.log_resize_BANG_ = (function iswyd$lib$core$log_resize_BANG_(ev){
iswyd.lib.core.log_BANG_.call(null,ev);

return cljs.core.reset_BANG_.call(null,iswyd.lib.core.prev_resize,ev);
});
iswyd.lib.core.doc_root = (function iswyd$lib$core$doc_root(){
return document.querySelector("html");
});
iswyd.lib.core.clone_root = (function iswyd$lib$core$clone_root(){
return iswyd.lib.core.doc_root.call(null).cloneNode(true);
});
iswyd.lib.core.get_tags = (function iswyd$lib$core$get_tags(root,tag){
return cljs.core.array_seq.call(null,goog.dom.getElementsByTagName(tag,root));
});
iswyd.lib.core.iframes = (function iswyd$lib$core$iframes(root){
return iswyd.lib.core.get_tags.call(null,root,"iframe");
});
iswyd.lib.core.scripts = (function iswyd$lib$core$scripts(root){
return iswyd.lib.core.get_tags.call(null,root,"script");
});
iswyd.lib.core.links = (function iswyd$lib$core$links(root){
return iswyd.lib.core.get_tags.call(null,root,"link");
});
iswyd.lib.core.imgs = (function iswyd$lib$core$imgs(root){
return iswyd.lib.core.get_tags.call(null,root,"img");
});
iswyd.lib.core.inputs = (function iswyd$lib$core$inputs(root){
return iswyd.lib.core.get_tags.call(null,root,"input");
});
iswyd.lib.core.del_nodes_BANG_ = (function iswyd$lib$core$del_nodes_BANG_(nodes){
var nodes__$1 = nodes;
while(true){
var node = cljs.core.first.call(null,nodes__$1);
if(cljs.core.truth_(node)){
goog.dom.removeNode(node);
} else {
}

if(!(cljs.core.empty_QMARK_.call(null,nodes__$1))){
var G__25711 = nodes__$1;
nodes__$1 = G__25711;
continue;
} else {
return null;
}
break;
}
});
iswyd.lib.core.abs_src_BANG_ = (function iswyd$lib$core$abs_src_BANG_(nodes){
var nodes__$1 = nodes;
while(true){
var node = cljs.core.first.call(null,nodes__$1);
var others = cljs.core.rest.call(null,nodes__$1);
if(cljs.core.truth_(node)){
(node["src"] = node.src);
} else {
}

if(!(cljs.core.empty_QMARK_.call(null,others))){
var G__25717 = others;
nodes__$1 = G__25717;
continue;
} else {
return null;
}
break;
}
});
iswyd.lib.core.abs_href_BANG_ = (function iswyd$lib$core$abs_href_BANG_(nodes){
var nodes__$1 = nodes;
while(true){
var node = cljs.core.first.call(null,nodes__$1);
var others = cljs.core.rest.call(null,nodes__$1);
if(cljs.core.truth_(node)){
(node["href"] = node.href);
} else {
}

if(!(cljs.core.empty_QMARK_.call(null,others))){
var G__25719 = others;
nodes__$1 = G__25719;
continue;
} else {
return null;
}
break;
}
});
iswyd.lib.core.cp_values_BANG_ = (function iswyd$lib$core$cp_values_BANG_(nodes){
var nodes__$1 = nodes;
while(true){
var node = cljs.core.first.call(null,nodes__$1);
var others = cljs.core.rest.call(null,nodes__$1);
if(cljs.core.truth_(node)){
node.setAttribute("value",node.value);
} else {
}

if(!(cljs.core.empty_QMARK_.call(null,others))){
var G__25720 = others;
nodes__$1 = G__25720;
continue;
} else {
return null;
}
break;
}
});
iswyd.lib.core.create_mask = (function iswyd$lib$core$create_mask(node){
var mask = document.createElement("div");
var orig = iswyd.lib.core.doc_root.call(null).querySelector(["[data-iswyd-mark=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(iswyd.lib.core.mark_QMARK_.call(null,node)),"\"]"].join(''));
var comp = window.getComputedStyle(orig);
var style = ({"width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(orig.offsetWidth),"px"].join(''), "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(orig.offsetHeight),"px"].join(''), "display": "inline-block", "background": "#333"});
iswyd.lib.core.add_css_BANG_.call(null,mask,comp);

iswyd.lib.core.add_css_BANG_.call(null,mask,style);

return mask;
});
iswyd.lib.core.mask_input_BANG_ = (function iswyd$lib$core$mask_input_BANG_(node){
return node.setAttribute("value",clojure.string.replace.call(null,node.value,/./,"\u2022"));
});
iswyd.lib.core.mask_node_BANG_ = (function iswyd$lib$core$mask_node_BANG_(node){
if(cljs.core._EQ_.call(null,node.localName,"input")){
return iswyd.lib.core.mask_input_BANG_.call(null,node);
} else {
return node.replaceWith(iswyd.lib.core.create_mask.call(null,node));
}
});
iswyd.lib.core.mark_nodes_BANG_ = (function iswyd$lib$core$mark_nodes_BANG_(nodes){
var nodes__$1 = nodes;
while(true){
var node = cljs.core.first.call(null,nodes__$1);
var others = cljs.core.rest.call(null,nodes__$1);
if(cljs.core.truth_(node)){
iswyd.lib.core.mark_BANG_.call(null,node);
} else {
}

if(!(cljs.core.empty_QMARK_.call(null,others))){
var G__25727 = others;
nodes__$1 = G__25727;
continue;
} else {
return null;
}
break;
}
});
iswyd.lib.core.mask_nodes_BANG_ = (function iswyd$lib$core$mask_nodes_BANG_(nodes){
var nodes__$1 = nodes;
while(true){
var node = cljs.core.first.call(null,nodes__$1);
var others = cljs.core.rest.call(null,nodes__$1);
if(cljs.core.truth_(node)){
iswyd.lib.core.mask_node_BANG_.call(null,node);
} else {
}

if(!(cljs.core.empty_QMARK_.call(null,others))){
var G__25728 = others;
nodes__$1 = G__25728;
continue;
} else {
return null;
}
break;
}
});
iswyd.lib.core.excluded_nodes = (function iswyd$lib$core$excluded_nodes(root){
if(!(clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,iswyd.lib.core.excludes)))){
return cljs.core.array_seq.call(null,root.querySelectorAll(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,iswyd.lib.core.excludes))));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
iswyd.lib.core.mask_BANG_ = (function iswyd$lib$core$mask_BANG_(root){
iswyd.lib.core.mask_nodes_BANG_.call(null,iswyd.lib.core.excluded_nodes.call(null,root));

return root;
});
iswyd.lib.core.sanitize_BANG_ = (function iswyd$lib$core$sanitize_BANG_(root){
iswyd.lib.core.del_nodes_BANG_.call(null,iswyd.lib.core.iframes.call(null,root));

iswyd.lib.core.del_nodes_BANG_.call(null,iswyd.lib.core.scripts.call(null,root));

iswyd.lib.core.abs_src_BANG_.call(null,iswyd.lib.core.imgs.call(null,root));

iswyd.lib.core.abs_href_BANG_.call(null,iswyd.lib.core.links.call(null,root));

iswyd.lib.core.cp_values_BANG_.call(null,iswyd.lib.core.inputs.call(null,root));

return root;
});
iswyd.lib.core.capture = (function iswyd$lib$core$capture(root){
return iswyd.lib.core.mask_BANG_.call(null,iswyd.lib.core.sanitize_BANG_.call(null,root)).outerHTML;
});
iswyd.lib.core.init_worker_BANG_ = (function iswyd$lib$core$init_worker_BANG_(){
return (new Worker("/js/iswyd_lib_worker.js"));
});
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.worker !== 'undefined')){
} else {
iswyd.lib.core.worker = iswyd.lib.core.init_worker_BANG_.call(null);
}
iswyd.lib.core.compress_post_BANG_ = (function iswyd$lib$core$compress_post_BANG_(){
return setTimeout((function (){var changes = cljs.core.deref.call(null,iswyd.lib.core.changelog);
if(!(cljs.core.empty_QMARK_.call(null,changes))){
cljs.core.reset_BANG_.call(null,iswyd.lib.core.changelog,cljs.core.PersistentVector.EMPTY);

return ((function (changes){
return (function (){
return iswyd.lib.core.worker.postMessage(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compress",cljs.core.clj__GT_js.call(null,changes)], null)));
});
;})(changes))
} else {
return null;
}
})());
});
iswyd.lib.core.change_handler_BANG_ = (function iswyd$lib$core$change_handler_BANG_(){
iswyd.lib.core.mark_nodes_BANG_.call(null,iswyd.lib.core.excluded_nodes.call(null,iswyd.lib.core.doc_root.call(null)));

var html = iswyd.lib.core.capture.call(null,iswyd.lib.core.clone_root.call(null));
return setTimeout(((function (html){
return (function (){
iswyd.lib.core.worker.postMessage(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["patch-make",cljs.core.deref.call(null,iswyd.lib.core.prev_html),html], null)));

return cljs.core.reset_BANG_.call(null,iswyd.lib.core.prev_html,html);
});})(html))
);
});
iswyd.lib.core.obs_conf = ({"attributes": true, "childList": true, "subtree": true});
if((typeof iswyd !== 'undefined') && (typeof iswyd.lib !== 'undefined') && (typeof iswyd.lib.core !== 'undefined') && (typeof iswyd.lib.core.obs !== 'undefined')){
} else {
iswyd.lib.core.obs = (new MutationObserver((function (ev){
return iswyd.lib.core.change_handler_BANG_.call(null);
})));
}
iswyd.lib.core.keys_num = (function iswyd$lib$core$keys_num(ev){
return ((((cljs.core.truth_((ev["ctrlKey"]))?(1):(0)) + (cljs.core.truth_((ev["shiftKey"]))?(2):(0))) + (cljs.core.truth_((ev["altKey"]))?(4):(0))) + (cljs.core.truth_((ev["metaKey"]))?(8):(0)));
});
iswyd.lib.core.mouse_ev = (function iswyd$lib$core$mouse_ev(type,ev){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),ev.buttons,new cljs.core.Keyword(null,"keys","keys",1068423698),iswyd.lib.core.keys_num.call(null,ev),new cljs.core.Keyword(null,"x","x",2099068185),ev.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),ev.clientY,new cljs.core.Keyword(null,"time","time",1385887882),iswyd.lib.core.now.call(null)], null);
});
iswyd.lib.core.log_mouse_BANG_ = (function iswyd$lib$core$log_mouse_BANG_(ev){
iswyd.lib.core.log_BANG_.call(null,ev);

if(cljs.core._EQ_.call(null,ev,new cljs.core.Keyword(null,"click","click",1912301393))){
iswyd.lib.core.compress_post_BANG_.call(null);
} else {
}

return cljs.core.reset_BANG_.call(null,iswyd.lib.core.prev_pos,ev);
});
iswyd.lib.core.pos_handler_BANG_ = (function iswyd$lib$core$pos_handler_BANG_(type,ev){
return cljs.core.reset_BANG_.call(null,iswyd.lib.core.curr_pos,iswyd.lib.core.mouse_ev.call(null,type,ev));
});
iswyd.lib.core.pos_change = (function iswyd$lib$core$pos_change(prev,curr){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(prev,(-1)),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(curr,(-1)))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(prev,(-1)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(curr,(-1)))));
});
iswyd.lib.core.pos_cycle_BANG_ = (function iswyd$lib$core$pos_cycle_BANG_(){
return setInterval((function (){
var prev = cljs.core.deref.call(null,iswyd.lib.core.prev_pos);
var curr = cljs.core.deref.call(null,iswyd.lib.core.curr_pos);
if(cljs.core.truth_(iswyd.lib.core.pos_change.call(null,prev,curr))){
return iswyd.lib.core.log_mouse_BANG_.call(null,curr);
} else {
return null;
}
}),(300));
});
iswyd.lib.core.listen_change_BANG_ = (function iswyd$lib$core$listen_change_BANG_(nodes){
var nodes__$1 = nodes;
while(true){
var node = cljs.core.first.call(null,nodes__$1);
var others = cljs.core.rest.call(null,nodes__$1);
if(cljs.core.truth_(node)){
node.addEventListener("keydown",iswyd.lib.core.change_handler_BANG_);
} else {
}

if(!(cljs.core.empty_QMARK_.call(null,others))){
var G__25746 = others;
nodes__$1 = G__25746;
continue;
} else {
return null;
}
break;
}
});
iswyd.lib.core.listen_move_BANG_ = (function iswyd$lib$core$listen_move_BANG_(){
addEventListener("mousemove",(function (ev){
return iswyd.lib.core.pos_handler_BANG_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),ev);
}));

return iswyd.lib.core.pos_cycle_BANG_.call(null);
});
iswyd.lib.core.listen_down_BANG_ = (function iswyd$lib$core$listen_down_BANG_(){
return addEventListener("mousedown",(function (ev){
return iswyd.lib.core.log_mouse_BANG_.call(null,iswyd.lib.core.mouse_ev.call(null,new cljs.core.Keyword(null,"down","down",1565245570),ev));
}));
});
iswyd.lib.core.listen_up_BANG_ = (function iswyd$lib$core$listen_up_BANG_(){
return addEventListener("mouseup",(function (ev){
return iswyd.lib.core.log_mouse_BANG_.call(null,iswyd.lib.core.mouse_ev.call(null,new cljs.core.Keyword(null,"up","up",-269712113),ev));
}));
});
iswyd.lib.core.scroll_ev = (function iswyd$lib$core$scroll_ev(type,ev){
var node = (ev["target"]);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"mark","mark",-373816345),iswyd.lib.core.mark_BANG_.call(null,node),new cljs.core.Keyword(null,"keys","keys",1068423698),iswyd.lib.core.keys_num.call(null,ev),new cljs.core.Keyword(null,"x","x",2099068185),window.scrollX,new cljs.core.Keyword(null,"y","y",-1757859776),window.scrollY,new cljs.core.Keyword(null,"time","time",1385887882),iswyd.lib.core.now.call(null)], null);
});
iswyd.lib.core.scroll_change = (function iswyd$lib$core$scroll_change(prev,curr){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(prev),new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(curr))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(prev,(-1)),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(curr,(-1)))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(prev,(-1)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(curr,(-1)))));
});
iswyd.lib.core.scroll_handler_BANG_ = (function iswyd$lib$core$scroll_handler_BANG_(type,ev){
if(cljs.core.not.call(null,iswyd.lib.core.doc_QMARK_.call(null,ev.target))){
iswyd.lib.core.mark_BANG_.call(null,ev.target);
} else {
}

return cljs.core.reset_BANG_.call(null,iswyd.lib.core.curr_scroll,iswyd.lib.core.scroll_ev.call(null,type,ev));
});
iswyd.lib.core.scroll_cycle_BANG_ = (function iswyd$lib$core$scroll_cycle_BANG_(){
return setInterval((function (){
var prev = cljs.core.deref.call(null,iswyd.lib.core.prev_scroll);
var curr = cljs.core.deref.call(null,iswyd.lib.core.curr_scroll);
if(cljs.core.truth_(iswyd.lib.core.scroll_change.call(null,prev,curr))){
return iswyd.lib.core.log_scroll_BANG_.call(null,curr);
} else {
return null;
}
}),(100));
});
iswyd.lib.core.listen_scroll_BANG_ = (function iswyd$lib$core$listen_scroll_BANG_(){
addEventListener("scroll",(function (ev){
return iswyd.lib.core.scroll_handler_BANG_.call(null,new cljs.core.Keyword(null,"scroll","scroll",971553779),ev);
}));

return iswyd.lib.core.scroll_cycle_BANG_.call(null);
});
iswyd.lib.core.resize_ev = (function iswyd$lib$core$resize_ev(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"width","width",-384071477),(window["innerWidth"]),new cljs.core.Keyword(null,"height","height",1025178622),(window["innerHeight"]),new cljs.core.Keyword(null,"time","time",1385887882),iswyd.lib.core.now.call(null)], null);
});
iswyd.lib.core.resize_change = (function iswyd$lib$core$resize_change(prev,curr){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$2(prev,(-1)),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$2(curr,(-1)))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$2(prev,(-1)),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$2(curr,(-1)))));
});
iswyd.lib.core.resize_handler_BANG_ = (function iswyd$lib$core$resize_handler_BANG_(){
return cljs.core.reset_BANG_.call(null,iswyd.lib.core.curr_resize,iswyd.lib.core.resize_ev.call(null));
});
iswyd.lib.core.resize_cycle_BANG_ = (function iswyd$lib$core$resize_cycle_BANG_(){
iswyd.lib.core.resize_handler_BANG_.call(null);

return setInterval((function (){
var prev = cljs.core.deref.call(null,iswyd.lib.core.prev_resize);
var curr = cljs.core.deref.call(null,iswyd.lib.core.curr_resize);
if(cljs.core.truth_(iswyd.lib.core.resize_change.call(null,prev,curr))){
return iswyd.lib.core.log_resize_BANG_.call(null,curr);
} else {
return null;
}
}),(100));
});
iswyd.lib.core.listen_resize_BANG_ = (function iswyd$lib$core$listen_resize_BANG_(){
addEventListener("resize",(function (_){
return iswyd.lib.core.resize_handler_BANG_.call(null);
}));

return iswyd.lib.core.resize_cycle_BANG_.call(null);
});
iswyd.lib.core.third = (function iswyd$lib$core$third(arr){
return (arr[(2)]);
});
iswyd.lib.core.worker_cb = (function iswyd$lib$core$worker_cb(msg){
var data = msg.data;
var task = cljs.core.first.call(null,data);
if(cljs.core._EQ_.call(null,task,"patch-make")){
return iswyd.lib.core.log_change_BANG_.call(null,cljs.core.second.call(null,data),iswyd.lib.core.third.call(null,data));
} else {
return iswyd.api.core.post_change.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,iswyd.lib.core.sid))].join(''),cljs.core.second.call(null,data));
}
});
iswyd.lib.core.init_posting_BANG_ = (function iswyd$lib$core$init_posting_BANG_(){
setInterval((function (){
return iswyd.lib.core.compress_post_BANG_.call(null);
}),(10000));

return addEventListener("blur",(function (){
return iswyd.lib.core.compress_post_BANG_.call(null);
}));
});
iswyd.lib.core.init_changelog_BANG_ = (function iswyd$lib$core$init_changelog_BANG_(opts){
if(cljs.core.not.call(null,cljs.core.deref.call(null,iswyd.lib.core.ready))){
cljs.core.reset_BANG_.call(null,iswyd.lib.core.excludes,clojure.string.join.call(null,",",new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(opts)));

cljs.core.reset_BANG_.call(null,iswyd.lib.core.ready,true);

cljs.core.reset_BANG_.call(null,iswyd.lib.core.sid,cljs.core.random_uuid.call(null));

iswyd.lib.core.mark_nodes_BANG_.call(null,iswyd.lib.core.excluded_nodes.call(null,iswyd.lib.core.doc_root.call(null)));

var root_25759 = iswyd.lib.core.doc_root.call(null);
iswyd.lib.core.change_handler_BANG_.call(null);

iswyd.lib.core.listen_move_BANG_.call(null);

iswyd.lib.core.listen_down_BANG_.call(null);

iswyd.lib.core.listen_up_BANG_.call(null);

iswyd.lib.core.listen_scroll_BANG_.call(null);

iswyd.lib.core.listen_resize_BANG_.call(null);

iswyd.lib.core.listen_change_BANG_.call(null,iswyd.lib.core.inputs.call(null,root_25759));

iswyd.lib.core.obs.observe(root_25759,iswyd.lib.core.obs_conf);

iswyd.lib.core.init_posting_BANG_.call(null);

iswyd.lib.core.worker.onmessage = (function (msg){
return iswyd.lib.core.worker_cb.call(null,msg);
});

return true;
} else {
return false;
}
});
iswyd.lib.core.iswyd_ext = ({"init": (function (opts){
return iswyd.lib.core.init_changelog_BANG_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exclude","exclude",-1230250334),cljs.core.PersistentVector.EMPTY], null),cljs.core.js__GT_clj.call(null,opts,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
}), "capture": (function (){
return iswyd.lib.core.capture.call(null,iswyd.lib.core.clone_root.call(null));
}), "changelog": (function (){
return cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,iswyd.lib.core.changelog));
})});
iswyd.lib.core.main = (function iswyd$lib$core$main(){
console.log("iSwyd registered, waiting for init...");

return (window["iSwyd"] = iswyd.lib.core.iswyd_ext);
});
iswyd.lib.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1539633379576
