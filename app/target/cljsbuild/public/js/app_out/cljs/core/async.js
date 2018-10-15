// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27410 = arguments.length;
switch (G__27410) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27411 = (function (f,blockable,meta27412){
this.f = f;
this.blockable = blockable;
this.meta27412 = meta27412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27413,meta27412__$1){
var self__ = this;
var _27413__$1 = this;
return (new cljs.core.async.t_cljs$core$async27411(self__.f,self__.blockable,meta27412__$1));
});

cljs.core.async.t_cljs$core$async27411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27413){
var self__ = this;
var _27413__$1 = this;
return self__.meta27412;
});

cljs.core.async.t_cljs$core$async27411.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27411.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27411.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27411.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27412","meta27412",-1472774398,null)], null);
});

cljs.core.async.t_cljs$core$async27411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27411";

cljs.core.async.t_cljs$core$async27411.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27411");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27411.
 */
cljs.core.async.__GT_t_cljs$core$async27411 = (function cljs$core$async$__GT_t_cljs$core$async27411(f__$1,blockable__$1,meta27412){
return (new cljs.core.async.t_cljs$core$async27411(f__$1,blockable__$1,meta27412));
});

}

return (new cljs.core.async.t_cljs$core$async27411(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27427 = arguments.length;
switch (G__27427) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27435 = arguments.length;
switch (G__27435) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27446 = arguments.length;
switch (G__27446) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27452 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27452);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27452,ret){
return (function (){
return fn1.call(null,val_27452);
});})(val_27452,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27455 = arguments.length;
switch (G__27455) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___27457 = n;
var x_27458 = (0);
while(true){
if((x_27458 < n__4408__auto___27457)){
(a[x_27458] = (0));

var G__27459 = (x_27458 + (1));
x_27458 = G__27459;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27460 = (i + (1));
i = G__27460;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27461 = (function (flag,meta27462){
this.flag = flag;
this.meta27462 = meta27462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27463,meta27462__$1){
var self__ = this;
var _27463__$1 = this;
return (new cljs.core.async.t_cljs$core$async27461(self__.flag,meta27462__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27463){
var self__ = this;
var _27463__$1 = this;
return self__.meta27462;
});})(flag))
;

cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27461.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27461.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27462","meta27462",-516584178,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27461";

cljs.core.async.t_cljs$core$async27461.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27461");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27461.
 */
cljs.core.async.__GT_t_cljs$core$async27461 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27461(flag__$1,meta27462){
return (new cljs.core.async.t_cljs$core$async27461(flag__$1,meta27462));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27461(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27474 = (function (flag,cb,meta27475){
this.flag = flag;
this.cb = cb;
this.meta27475 = meta27475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27476,meta27475__$1){
var self__ = this;
var _27476__$1 = this;
return (new cljs.core.async.t_cljs$core$async27474(self__.flag,self__.cb,meta27475__$1));
});

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27476){
var self__ = this;
var _27476__$1 = this;
return self__.meta27475;
});

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27475","meta27475",-799131289,null)], null);
});

cljs.core.async.t_cljs$core$async27474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27474";

cljs.core.async.t_cljs$core$async27474.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27474");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27474.
 */
cljs.core.async.__GT_t_cljs$core$async27474 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27474(flag__$1,cb__$1,meta27475){
return (new cljs.core.async.t_cljs$core$async27474(flag__$1,cb__$1,meta27475));
});

}

return (new cljs.core.async.t_cljs$core$async27474(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27477_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27477_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27478_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27478_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27486 = (i + (1));
i = G__27486;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27493 = arguments.length;
var i__4532__auto___27494 = (0);
while(true){
if((i__4532__auto___27494 < len__4531__auto___27493)){
args__4534__auto__.push((arguments[i__4532__auto___27494]));

var G__27495 = (i__4532__auto___27494 + (1));
i__4532__auto___27494 = G__27495;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27490){
var map__27491 = p__27490;
var map__27491__$1 = ((((!((map__27491 == null)))?(((((map__27491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27491):map__27491);
var opts = map__27491__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27488){
var G__27489 = cljs.core.first.call(null,seq27488);
var seq27488__$1 = cljs.core.next.call(null,seq27488);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27489,seq27488__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27497 = arguments.length;
switch (G__27497) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27336__auto___27553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___27553){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___27553){
return (function (state_27528){
var state_val_27529 = (state_27528[(1)]);
if((state_val_27529 === (7))){
var inst_27522 = (state_27528[(2)]);
var state_27528__$1 = state_27528;
var statearr_27531_27554 = state_27528__$1;
(statearr_27531_27554[(2)] = inst_27522);

(statearr_27531_27554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (1))){
var state_27528__$1 = state_27528;
var statearr_27532_27555 = state_27528__$1;
(statearr_27532_27555[(2)] = null);

(statearr_27532_27555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (4))){
var inst_27502 = (state_27528[(7)]);
var inst_27502__$1 = (state_27528[(2)]);
var inst_27504 = (inst_27502__$1 == null);
var state_27528__$1 = (function (){var statearr_27533 = state_27528;
(statearr_27533[(7)] = inst_27502__$1);

return statearr_27533;
})();
if(cljs.core.truth_(inst_27504)){
var statearr_27534_27558 = state_27528__$1;
(statearr_27534_27558[(1)] = (5));

} else {
var statearr_27535_27559 = state_27528__$1;
(statearr_27535_27559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (13))){
var state_27528__$1 = state_27528;
var statearr_27536_27560 = state_27528__$1;
(statearr_27536_27560[(2)] = null);

(statearr_27536_27560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (6))){
var inst_27502 = (state_27528[(7)]);
var state_27528__$1 = state_27528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27528__$1,(11),to,inst_27502);
} else {
if((state_val_27529 === (3))){
var inst_27526 = (state_27528[(2)]);
var state_27528__$1 = state_27528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27528__$1,inst_27526);
} else {
if((state_val_27529 === (12))){
var state_27528__$1 = state_27528;
var statearr_27537_27561 = state_27528__$1;
(statearr_27537_27561[(2)] = null);

(statearr_27537_27561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (2))){
var state_27528__$1 = state_27528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27528__$1,(4),from);
} else {
if((state_val_27529 === (11))){
var inst_27513 = (state_27528[(2)]);
var state_27528__$1 = state_27528;
if(cljs.core.truth_(inst_27513)){
var statearr_27538_27562 = state_27528__$1;
(statearr_27538_27562[(1)] = (12));

} else {
var statearr_27539_27563 = state_27528__$1;
(statearr_27539_27563[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (9))){
var state_27528__$1 = state_27528;
var statearr_27540_27564 = state_27528__$1;
(statearr_27540_27564[(2)] = null);

(statearr_27540_27564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (5))){
var state_27528__$1 = state_27528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27541_27565 = state_27528__$1;
(statearr_27541_27565[(1)] = (8));

} else {
var statearr_27542_27566 = state_27528__$1;
(statearr_27542_27566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (14))){
var inst_27520 = (state_27528[(2)]);
var state_27528__$1 = state_27528;
var statearr_27543_27567 = state_27528__$1;
(statearr_27543_27567[(2)] = inst_27520);

(statearr_27543_27567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (10))){
var inst_27510 = (state_27528[(2)]);
var state_27528__$1 = state_27528;
var statearr_27544_27568 = state_27528__$1;
(statearr_27544_27568[(2)] = inst_27510);

(statearr_27544_27568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (8))){
var inst_27507 = cljs.core.async.close_BANG_.call(null,to);
var state_27528__$1 = state_27528;
var statearr_27545_27569 = state_27528__$1;
(statearr_27545_27569[(2)] = inst_27507);

(statearr_27545_27569[(1)] = (10));


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
});})(c__27336__auto___27553))
;
return ((function (switch__27198__auto__,c__27336__auto___27553){
return (function() {
var cljs$core$async$state_machine__27199__auto__ = null;
var cljs$core$async$state_machine__27199__auto____0 = (function (){
var statearr_27546 = [null,null,null,null,null,null,null,null];
(statearr_27546[(0)] = cljs$core$async$state_machine__27199__auto__);

(statearr_27546[(1)] = (1));

return statearr_27546;
});
var cljs$core$async$state_machine__27199__auto____1 = (function (state_27528){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_27528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e27547){if((e27547 instanceof Object)){
var ex__27202__auto__ = e27547;
var statearr_27548_27570 = state_27528;
(statearr_27548_27570[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27572 = state_27528;
state_27528 = G__27572;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$state_machine__27199__auto__ = function(state_27528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27199__auto____1.call(this,state_27528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27199__auto____0;
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27199__auto____1;
return cljs$core$async$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___27553))
})();
var state__27338__auto__ = (function (){var statearr_27549 = f__27337__auto__.call(null);
(statearr_27549[(6)] = c__27336__auto___27553);

return statearr_27549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___27553))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27573){
var vec__27574 = p__27573;
var v = cljs.core.nth.call(null,vec__27574,(0),null);
var p = cljs.core.nth.call(null,vec__27574,(1),null);
var job = vec__27574;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27336__auto___27752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___27752,res,vec__27574,v,p,job,jobs,results){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___27752,res,vec__27574,v,p,job,jobs,results){
return (function (state_27581){
var state_val_27582 = (state_27581[(1)]);
if((state_val_27582 === (1))){
var state_27581__$1 = state_27581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27581__$1,(2),res,v);
} else {
if((state_val_27582 === (2))){
var inst_27578 = (state_27581[(2)]);
var inst_27579 = cljs.core.async.close_BANG_.call(null,res);
var state_27581__$1 = (function (){var statearr_27583 = state_27581;
(statearr_27583[(7)] = inst_27578);

return statearr_27583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27581__$1,inst_27579);
} else {
return null;
}
}
});})(c__27336__auto___27752,res,vec__27574,v,p,job,jobs,results))
;
return ((function (switch__27198__auto__,c__27336__auto___27752,res,vec__27574,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0 = (function (){
var statearr_27584 = [null,null,null,null,null,null,null,null];
(statearr_27584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__);

(statearr_27584[(1)] = (1));

return statearr_27584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1 = (function (state_27581){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_27581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e27585){if((e27585 instanceof Object)){
var ex__27202__auto__ = e27585;
var statearr_27586_27753 = state_27581;
(statearr_27586_27753[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27754 = state_27581;
state_27581 = G__27754;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__ = function(state_27581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1.call(this,state_27581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___27752,res,vec__27574,v,p,job,jobs,results))
})();
var state__27338__auto__ = (function (){var statearr_27587 = f__27337__auto__.call(null);
(statearr_27587[(6)] = c__27336__auto___27752);

return statearr_27587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___27752,res,vec__27574,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27588){
var vec__27589 = p__27588;
var v = cljs.core.nth.call(null,vec__27589,(0),null);
var p = cljs.core.nth.call(null,vec__27589,(1),null);
var job = vec__27589;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___27756 = n;
var __27757 = (0);
while(true){
if((__27757 < n__4408__auto___27756)){
var G__27592_27758 = type;
var G__27592_27759__$1 = (((G__27592_27758 instanceof cljs.core.Keyword))?G__27592_27758.fqn:null);
switch (G__27592_27759__$1) {
case "compute":
var c__27336__auto___27761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27757,c__27336__auto___27761,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (__27757,c__27336__auto___27761,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async){
return (function (state_27605){
var state_val_27606 = (state_27605[(1)]);
if((state_val_27606 === (1))){
var state_27605__$1 = state_27605;
var statearr_27607_27763 = state_27605__$1;
(statearr_27607_27763[(2)] = null);

(statearr_27607_27763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (2))){
var state_27605__$1 = state_27605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27605__$1,(4),jobs);
} else {
if((state_val_27606 === (3))){
var inst_27603 = (state_27605[(2)]);
var state_27605__$1 = state_27605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27605__$1,inst_27603);
} else {
if((state_val_27606 === (4))){
var inst_27595 = (state_27605[(2)]);
var inst_27596 = process.call(null,inst_27595);
var state_27605__$1 = state_27605;
if(cljs.core.truth_(inst_27596)){
var statearr_27610_27765 = state_27605__$1;
(statearr_27610_27765[(1)] = (5));

} else {
var statearr_27611_27766 = state_27605__$1;
(statearr_27611_27766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (5))){
var state_27605__$1 = state_27605;
var statearr_27612_27767 = state_27605__$1;
(statearr_27612_27767[(2)] = null);

(statearr_27612_27767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (6))){
var state_27605__$1 = state_27605;
var statearr_27613_27768 = state_27605__$1;
(statearr_27613_27768[(2)] = null);

(statearr_27613_27768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (7))){
var inst_27601 = (state_27605[(2)]);
var state_27605__$1 = state_27605;
var statearr_27614_27769 = state_27605__$1;
(statearr_27614_27769[(2)] = inst_27601);

(statearr_27614_27769[(1)] = (3));


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
});})(__27757,c__27336__auto___27761,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async))
;
return ((function (__27757,switch__27198__auto__,c__27336__auto___27761,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0 = (function (){
var statearr_27615 = [null,null,null,null,null,null,null];
(statearr_27615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__);

(statearr_27615[(1)] = (1));

return statearr_27615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1 = (function (state_27605){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_27605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e27616){if((e27616 instanceof Object)){
var ex__27202__auto__ = e27616;
var statearr_27617_27770 = state_27605;
(statearr_27617_27770[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27771 = state_27605;
state_27605 = G__27771;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__ = function(state_27605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1.call(this,state_27605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__;
})()
;})(__27757,switch__27198__auto__,c__27336__auto___27761,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async))
})();
var state__27338__auto__ = (function (){var statearr_27620 = f__27337__auto__.call(null);
(statearr_27620[(6)] = c__27336__auto___27761);

return statearr_27620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(__27757,c__27336__auto___27761,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async))
);


break;
case "async":
var c__27336__auto___27772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27757,c__27336__auto___27772,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (__27757,c__27336__auto___27772,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async){
return (function (state_27633){
var state_val_27634 = (state_27633[(1)]);
if((state_val_27634 === (1))){
var state_27633__$1 = state_27633;
var statearr_27635_27775 = state_27633__$1;
(statearr_27635_27775[(2)] = null);

(statearr_27635_27775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (2))){
var state_27633__$1 = state_27633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27633__$1,(4),jobs);
} else {
if((state_val_27634 === (3))){
var inst_27631 = (state_27633[(2)]);
var state_27633__$1 = state_27633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27633__$1,inst_27631);
} else {
if((state_val_27634 === (4))){
var inst_27623 = (state_27633[(2)]);
var inst_27624 = async.call(null,inst_27623);
var state_27633__$1 = state_27633;
if(cljs.core.truth_(inst_27624)){
var statearr_27636_27776 = state_27633__$1;
(statearr_27636_27776[(1)] = (5));

} else {
var statearr_27637_27777 = state_27633__$1;
(statearr_27637_27777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (5))){
var state_27633__$1 = state_27633;
var statearr_27638_27779 = state_27633__$1;
(statearr_27638_27779[(2)] = null);

(statearr_27638_27779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (6))){
var state_27633__$1 = state_27633;
var statearr_27639_27780 = state_27633__$1;
(statearr_27639_27780[(2)] = null);

(statearr_27639_27780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (7))){
var inst_27629 = (state_27633[(2)]);
var state_27633__$1 = state_27633;
var statearr_27640_27782 = state_27633__$1;
(statearr_27640_27782[(2)] = inst_27629);

(statearr_27640_27782[(1)] = (3));


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
});})(__27757,c__27336__auto___27772,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async))
;
return ((function (__27757,switch__27198__auto__,c__27336__auto___27772,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0 = (function (){
var statearr_27641 = [null,null,null,null,null,null,null];
(statearr_27641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__);

(statearr_27641[(1)] = (1));

return statearr_27641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1 = (function (state_27633){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_27633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e27642){if((e27642 instanceof Object)){
var ex__27202__auto__ = e27642;
var statearr_27643_27783 = state_27633;
(statearr_27643_27783[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27784 = state_27633;
state_27633 = G__27784;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__ = function(state_27633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1.call(this,state_27633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__;
})()
;})(__27757,switch__27198__auto__,c__27336__auto___27772,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async))
})();
var state__27338__auto__ = (function (){var statearr_27645 = f__27337__auto__.call(null);
(statearr_27645[(6)] = c__27336__auto___27772);

return statearr_27645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(__27757,c__27336__auto___27772,G__27592_27758,G__27592_27759__$1,n__4408__auto___27756,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27592_27759__$1)].join('')));

}

var G__27785 = (__27757 + (1));
__27757 = G__27785;
continue;
} else {
}
break;
}

var c__27336__auto___27786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___27786,jobs,results,process,async){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___27786,jobs,results,process,async){
return (function (state_27668){
var state_val_27669 = (state_27668[(1)]);
if((state_val_27669 === (1))){
var state_27668__$1 = state_27668;
var statearr_27670_27787 = state_27668__$1;
(statearr_27670_27787[(2)] = null);

(statearr_27670_27787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (2))){
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27668__$1,(4),from);
} else {
if((state_val_27669 === (3))){
var inst_27666 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27668__$1,inst_27666);
} else {
if((state_val_27669 === (4))){
var inst_27649 = (state_27668[(7)]);
var inst_27649__$1 = (state_27668[(2)]);
var inst_27650 = (inst_27649__$1 == null);
var state_27668__$1 = (function (){var statearr_27671 = state_27668;
(statearr_27671[(7)] = inst_27649__$1);

return statearr_27671;
})();
if(cljs.core.truth_(inst_27650)){
var statearr_27672_27788 = state_27668__$1;
(statearr_27672_27788[(1)] = (5));

} else {
var statearr_27673_27789 = state_27668__$1;
(statearr_27673_27789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (5))){
var inst_27652 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27668__$1 = state_27668;
var statearr_27674_27790 = state_27668__$1;
(statearr_27674_27790[(2)] = inst_27652);

(statearr_27674_27790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (6))){
var inst_27649 = (state_27668[(7)]);
var inst_27654 = (state_27668[(8)]);
var inst_27654__$1 = cljs.core.async.chan.call(null,(1));
var inst_27655 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27656 = [inst_27649,inst_27654__$1];
var inst_27657 = (new cljs.core.PersistentVector(null,2,(5),inst_27655,inst_27656,null));
var state_27668__$1 = (function (){var statearr_27675 = state_27668;
(statearr_27675[(8)] = inst_27654__$1);

return statearr_27675;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27668__$1,(8),jobs,inst_27657);
} else {
if((state_val_27669 === (7))){
var inst_27664 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27676_27791 = state_27668__$1;
(statearr_27676_27791[(2)] = inst_27664);

(statearr_27676_27791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (8))){
var inst_27654 = (state_27668[(8)]);
var inst_27659 = (state_27668[(2)]);
var state_27668__$1 = (function (){var statearr_27677 = state_27668;
(statearr_27677[(9)] = inst_27659);

return statearr_27677;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27668__$1,(9),results,inst_27654);
} else {
if((state_val_27669 === (9))){
var inst_27661 = (state_27668[(2)]);
var state_27668__$1 = (function (){var statearr_27678 = state_27668;
(statearr_27678[(10)] = inst_27661);

return statearr_27678;
})();
var statearr_27679_27792 = state_27668__$1;
(statearr_27679_27792[(2)] = null);

(statearr_27679_27792[(1)] = (2));


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
});})(c__27336__auto___27786,jobs,results,process,async))
;
return ((function (switch__27198__auto__,c__27336__auto___27786,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0 = (function (){
var statearr_27680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27680[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__);

(statearr_27680[(1)] = (1));

return statearr_27680;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1 = (function (state_27668){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_27668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e27681){if((e27681 instanceof Object)){
var ex__27202__auto__ = e27681;
var statearr_27682_27793 = state_27668;
(statearr_27682_27793[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27794 = state_27668;
state_27668 = G__27794;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__ = function(state_27668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1.call(this,state_27668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___27786,jobs,results,process,async))
})();
var state__27338__auto__ = (function (){var statearr_27683 = f__27337__auto__.call(null);
(statearr_27683[(6)] = c__27336__auto___27786);

return statearr_27683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___27786,jobs,results,process,async))
);


var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__,jobs,results,process,async){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto__,jobs,results,process,async){
return (function (state_27721){
var state_val_27722 = (state_27721[(1)]);
if((state_val_27722 === (7))){
var inst_27717 = (state_27721[(2)]);
var state_27721__$1 = state_27721;
var statearr_27723_27797 = state_27721__$1;
(statearr_27723_27797[(2)] = inst_27717);

(statearr_27723_27797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (20))){
var state_27721__$1 = state_27721;
var statearr_27724_27798 = state_27721__$1;
(statearr_27724_27798[(2)] = null);

(statearr_27724_27798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (1))){
var state_27721__$1 = state_27721;
var statearr_27725_27800 = state_27721__$1;
(statearr_27725_27800[(2)] = null);

(statearr_27725_27800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (4))){
var inst_27686 = (state_27721[(7)]);
var inst_27686__$1 = (state_27721[(2)]);
var inst_27687 = (inst_27686__$1 == null);
var state_27721__$1 = (function (){var statearr_27726 = state_27721;
(statearr_27726[(7)] = inst_27686__$1);

return statearr_27726;
})();
if(cljs.core.truth_(inst_27687)){
var statearr_27727_27801 = state_27721__$1;
(statearr_27727_27801[(1)] = (5));

} else {
var statearr_27728_27802 = state_27721__$1;
(statearr_27728_27802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (15))){
var inst_27699 = (state_27721[(8)]);
var state_27721__$1 = state_27721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27721__$1,(18),to,inst_27699);
} else {
if((state_val_27722 === (21))){
var inst_27712 = (state_27721[(2)]);
var state_27721__$1 = state_27721;
var statearr_27729_27804 = state_27721__$1;
(statearr_27729_27804[(2)] = inst_27712);

(statearr_27729_27804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (13))){
var inst_27714 = (state_27721[(2)]);
var state_27721__$1 = (function (){var statearr_27731 = state_27721;
(statearr_27731[(9)] = inst_27714);

return statearr_27731;
})();
var statearr_27732_27805 = state_27721__$1;
(statearr_27732_27805[(2)] = null);

(statearr_27732_27805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (6))){
var inst_27686 = (state_27721[(7)]);
var state_27721__$1 = state_27721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27721__$1,(11),inst_27686);
} else {
if((state_val_27722 === (17))){
var inst_27707 = (state_27721[(2)]);
var state_27721__$1 = state_27721;
if(cljs.core.truth_(inst_27707)){
var statearr_27733_27806 = state_27721__$1;
(statearr_27733_27806[(1)] = (19));

} else {
var statearr_27734_27807 = state_27721__$1;
(statearr_27734_27807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (3))){
var inst_27719 = (state_27721[(2)]);
var state_27721__$1 = state_27721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27721__$1,inst_27719);
} else {
if((state_val_27722 === (12))){
var inst_27696 = (state_27721[(10)]);
var state_27721__$1 = state_27721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27721__$1,(14),inst_27696);
} else {
if((state_val_27722 === (2))){
var state_27721__$1 = state_27721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27721__$1,(4),results);
} else {
if((state_val_27722 === (19))){
var state_27721__$1 = state_27721;
var statearr_27735_27808 = state_27721__$1;
(statearr_27735_27808[(2)] = null);

(statearr_27735_27808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (11))){
var inst_27696 = (state_27721[(2)]);
var state_27721__$1 = (function (){var statearr_27736 = state_27721;
(statearr_27736[(10)] = inst_27696);

return statearr_27736;
})();
var statearr_27737_27809 = state_27721__$1;
(statearr_27737_27809[(2)] = null);

(statearr_27737_27809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (9))){
var state_27721__$1 = state_27721;
var statearr_27738_27812 = state_27721__$1;
(statearr_27738_27812[(2)] = null);

(statearr_27738_27812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (5))){
var state_27721__$1 = state_27721;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27739_27813 = state_27721__$1;
(statearr_27739_27813[(1)] = (8));

} else {
var statearr_27740_27816 = state_27721__$1;
(statearr_27740_27816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (14))){
var inst_27701 = (state_27721[(11)]);
var inst_27699 = (state_27721[(8)]);
var inst_27699__$1 = (state_27721[(2)]);
var inst_27700 = (inst_27699__$1 == null);
var inst_27701__$1 = cljs.core.not.call(null,inst_27700);
var state_27721__$1 = (function (){var statearr_27741 = state_27721;
(statearr_27741[(11)] = inst_27701__$1);

(statearr_27741[(8)] = inst_27699__$1);

return statearr_27741;
})();
if(inst_27701__$1){
var statearr_27742_27818 = state_27721__$1;
(statearr_27742_27818[(1)] = (15));

} else {
var statearr_27743_27819 = state_27721__$1;
(statearr_27743_27819[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (16))){
var inst_27701 = (state_27721[(11)]);
var state_27721__$1 = state_27721;
var statearr_27744_27821 = state_27721__$1;
(statearr_27744_27821[(2)] = inst_27701);

(statearr_27744_27821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (10))){
var inst_27693 = (state_27721[(2)]);
var state_27721__$1 = state_27721;
var statearr_27745_27822 = state_27721__$1;
(statearr_27745_27822[(2)] = inst_27693);

(statearr_27745_27822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (18))){
var inst_27704 = (state_27721[(2)]);
var state_27721__$1 = state_27721;
var statearr_27746_27823 = state_27721__$1;
(statearr_27746_27823[(2)] = inst_27704);

(statearr_27746_27823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27722 === (8))){
var inst_27690 = cljs.core.async.close_BANG_.call(null,to);
var state_27721__$1 = state_27721;
var statearr_27747_27824 = state_27721__$1;
(statearr_27747_27824[(2)] = inst_27690);

(statearr_27747_27824[(1)] = (10));


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
});})(c__27336__auto__,jobs,results,process,async))
;
return ((function (switch__27198__auto__,c__27336__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0 = (function (){
var statearr_27748 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__);

(statearr_27748[(1)] = (1));

return statearr_27748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1 = (function (state_27721){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_27721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e27749){if((e27749 instanceof Object)){
var ex__27202__auto__ = e27749;
var statearr_27750_27827 = state_27721;
(statearr_27750_27827[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27828 = state_27721;
state_27721 = G__27828;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__ = function(state_27721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1.call(this,state_27721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto__,jobs,results,process,async))
})();
var state__27338__auto__ = (function (){var statearr_27751 = f__27337__auto__.call(null);
(statearr_27751[(6)] = c__27336__auto__);

return statearr_27751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__,jobs,results,process,async))
);

return c__27336__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27831 = arguments.length;
switch (G__27831) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27839 = arguments.length;
switch (G__27839) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27842 = arguments.length;
switch (G__27842) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27336__auto___27891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___27891,tc,fc){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___27891,tc,fc){
return (function (state_27868){
var state_val_27869 = (state_27868[(1)]);
if((state_val_27869 === (7))){
var inst_27864 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
var statearr_27870_27892 = state_27868__$1;
(statearr_27870_27892[(2)] = inst_27864);

(statearr_27870_27892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (1))){
var state_27868__$1 = state_27868;
var statearr_27871_27893 = state_27868__$1;
(statearr_27871_27893[(2)] = null);

(statearr_27871_27893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (4))){
var inst_27845 = (state_27868[(7)]);
var inst_27845__$1 = (state_27868[(2)]);
var inst_27846 = (inst_27845__$1 == null);
var state_27868__$1 = (function (){var statearr_27872 = state_27868;
(statearr_27872[(7)] = inst_27845__$1);

return statearr_27872;
})();
if(cljs.core.truth_(inst_27846)){
var statearr_27873_27894 = state_27868__$1;
(statearr_27873_27894[(1)] = (5));

} else {
var statearr_27874_27895 = state_27868__$1;
(statearr_27874_27895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (13))){
var state_27868__$1 = state_27868;
var statearr_27875_27896 = state_27868__$1;
(statearr_27875_27896[(2)] = null);

(statearr_27875_27896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (6))){
var inst_27845 = (state_27868[(7)]);
var inst_27851 = p.call(null,inst_27845);
var state_27868__$1 = state_27868;
if(cljs.core.truth_(inst_27851)){
var statearr_27876_27897 = state_27868__$1;
(statearr_27876_27897[(1)] = (9));

} else {
var statearr_27877_27898 = state_27868__$1;
(statearr_27877_27898[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (3))){
var inst_27866 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27868__$1,inst_27866);
} else {
if((state_val_27869 === (12))){
var state_27868__$1 = state_27868;
var statearr_27878_27899 = state_27868__$1;
(statearr_27878_27899[(2)] = null);

(statearr_27878_27899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (2))){
var state_27868__$1 = state_27868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27868__$1,(4),ch);
} else {
if((state_val_27869 === (11))){
var inst_27845 = (state_27868[(7)]);
var inst_27855 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27868__$1,(8),inst_27855,inst_27845);
} else {
if((state_val_27869 === (9))){
var state_27868__$1 = state_27868;
var statearr_27879_27900 = state_27868__$1;
(statearr_27879_27900[(2)] = tc);

(statearr_27879_27900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (5))){
var inst_27848 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27849 = cljs.core.async.close_BANG_.call(null,fc);
var state_27868__$1 = (function (){var statearr_27880 = state_27868;
(statearr_27880[(8)] = inst_27848);

return statearr_27880;
})();
var statearr_27881_27901 = state_27868__$1;
(statearr_27881_27901[(2)] = inst_27849);

(statearr_27881_27901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (14))){
var inst_27862 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
var statearr_27882_27902 = state_27868__$1;
(statearr_27882_27902[(2)] = inst_27862);

(statearr_27882_27902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (10))){
var state_27868__$1 = state_27868;
var statearr_27883_27903 = state_27868__$1;
(statearr_27883_27903[(2)] = fc);

(statearr_27883_27903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27869 === (8))){
var inst_27857 = (state_27868[(2)]);
var state_27868__$1 = state_27868;
if(cljs.core.truth_(inst_27857)){
var statearr_27884_27904 = state_27868__$1;
(statearr_27884_27904[(1)] = (12));

} else {
var statearr_27885_27905 = state_27868__$1;
(statearr_27885_27905[(1)] = (13));

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
});})(c__27336__auto___27891,tc,fc))
;
return ((function (switch__27198__auto__,c__27336__auto___27891,tc,fc){
return (function() {
var cljs$core$async$state_machine__27199__auto__ = null;
var cljs$core$async$state_machine__27199__auto____0 = (function (){
var statearr_27886 = [null,null,null,null,null,null,null,null,null];
(statearr_27886[(0)] = cljs$core$async$state_machine__27199__auto__);

(statearr_27886[(1)] = (1));

return statearr_27886;
});
var cljs$core$async$state_machine__27199__auto____1 = (function (state_27868){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_27868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e27887){if((e27887 instanceof Object)){
var ex__27202__auto__ = e27887;
var statearr_27888_27906 = state_27868;
(statearr_27888_27906[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27907 = state_27868;
state_27868 = G__27907;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$state_machine__27199__auto__ = function(state_27868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27199__auto____1.call(this,state_27868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27199__auto____0;
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27199__auto____1;
return cljs$core$async$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___27891,tc,fc))
})();
var state__27338__auto__ = (function (){var statearr_27889 = f__27337__auto__.call(null);
(statearr_27889[(6)] = c__27336__auto___27891);

return statearr_27889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___27891,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto__){
return (function (state_27928){
var state_val_27929 = (state_27928[(1)]);
if((state_val_27929 === (7))){
var inst_27924 = (state_27928[(2)]);
var state_27928__$1 = state_27928;
var statearr_27930_27948 = state_27928__$1;
(statearr_27930_27948[(2)] = inst_27924);

(statearr_27930_27948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (1))){
var inst_27908 = init;
var state_27928__$1 = (function (){var statearr_27931 = state_27928;
(statearr_27931[(7)] = inst_27908);

return statearr_27931;
})();
var statearr_27932_27949 = state_27928__$1;
(statearr_27932_27949[(2)] = null);

(statearr_27932_27949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (4))){
var inst_27911 = (state_27928[(8)]);
var inst_27911__$1 = (state_27928[(2)]);
var inst_27912 = (inst_27911__$1 == null);
var state_27928__$1 = (function (){var statearr_27933 = state_27928;
(statearr_27933[(8)] = inst_27911__$1);

return statearr_27933;
})();
if(cljs.core.truth_(inst_27912)){
var statearr_27934_27950 = state_27928__$1;
(statearr_27934_27950[(1)] = (5));

} else {
var statearr_27935_27951 = state_27928__$1;
(statearr_27935_27951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (6))){
var inst_27911 = (state_27928[(8)]);
var inst_27908 = (state_27928[(7)]);
var inst_27915 = (state_27928[(9)]);
var inst_27915__$1 = f.call(null,inst_27908,inst_27911);
var inst_27916 = cljs.core.reduced_QMARK_.call(null,inst_27915__$1);
var state_27928__$1 = (function (){var statearr_27936 = state_27928;
(statearr_27936[(9)] = inst_27915__$1);

return statearr_27936;
})();
if(inst_27916){
var statearr_27937_27952 = state_27928__$1;
(statearr_27937_27952[(1)] = (8));

} else {
var statearr_27938_27953 = state_27928__$1;
(statearr_27938_27953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (3))){
var inst_27926 = (state_27928[(2)]);
var state_27928__$1 = state_27928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27928__$1,inst_27926);
} else {
if((state_val_27929 === (2))){
var state_27928__$1 = state_27928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27928__$1,(4),ch);
} else {
if((state_val_27929 === (9))){
var inst_27915 = (state_27928[(9)]);
var inst_27908 = inst_27915;
var state_27928__$1 = (function (){var statearr_27939 = state_27928;
(statearr_27939[(7)] = inst_27908);

return statearr_27939;
})();
var statearr_27940_27954 = state_27928__$1;
(statearr_27940_27954[(2)] = null);

(statearr_27940_27954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (5))){
var inst_27908 = (state_27928[(7)]);
var state_27928__$1 = state_27928;
var statearr_27941_27955 = state_27928__$1;
(statearr_27941_27955[(2)] = inst_27908);

(statearr_27941_27955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (10))){
var inst_27922 = (state_27928[(2)]);
var state_27928__$1 = state_27928;
var statearr_27942_27956 = state_27928__$1;
(statearr_27942_27956[(2)] = inst_27922);

(statearr_27942_27956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27929 === (8))){
var inst_27915 = (state_27928[(9)]);
var inst_27918 = cljs.core.deref.call(null,inst_27915);
var state_27928__$1 = state_27928;
var statearr_27943_27957 = state_27928__$1;
(statearr_27943_27957[(2)] = inst_27918);

(statearr_27943_27957[(1)] = (10));


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
});})(c__27336__auto__))
;
return ((function (switch__27198__auto__,c__27336__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27199__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27199__auto____0 = (function (){
var statearr_27944 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27944[(0)] = cljs$core$async$reduce_$_state_machine__27199__auto__);

(statearr_27944[(1)] = (1));

return statearr_27944;
});
var cljs$core$async$reduce_$_state_machine__27199__auto____1 = (function (state_27928){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_27928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e27945){if((e27945 instanceof Object)){
var ex__27202__auto__ = e27945;
var statearr_27946_27958 = state_27928;
(statearr_27946_27958[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27959 = state_27928;
state_27928 = G__27959;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27199__auto__ = function(state_27928){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27199__auto____1.call(this,state_27928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27199__auto____0;
cljs$core$async$reduce_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27199__auto____1;
return cljs$core$async$reduce_$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto__))
})();
var state__27338__auto__ = (function (){var statearr_27947 = f__27337__auto__.call(null);
(statearr_27947[(6)] = c__27336__auto__);

return statearr_27947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__))
);

return c__27336__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__,f__$1){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto__,f__$1){
return (function (state_27965){
var state_val_27966 = (state_27965[(1)]);
if((state_val_27966 === (1))){
var inst_27960 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27965__$1 = state_27965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27965__$1,(2),inst_27960);
} else {
if((state_val_27966 === (2))){
var inst_27962 = (state_27965[(2)]);
var inst_27963 = f__$1.call(null,inst_27962);
var state_27965__$1 = state_27965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27965__$1,inst_27963);
} else {
return null;
}
}
});})(c__27336__auto__,f__$1))
;
return ((function (switch__27198__auto__,c__27336__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27199__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27199__auto____0 = (function (){
var statearr_27967 = [null,null,null,null,null,null,null];
(statearr_27967[(0)] = cljs$core$async$transduce_$_state_machine__27199__auto__);

(statearr_27967[(1)] = (1));

return statearr_27967;
});
var cljs$core$async$transduce_$_state_machine__27199__auto____1 = (function (state_27965){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_27965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e27968){if((e27968 instanceof Object)){
var ex__27202__auto__ = e27968;
var statearr_27969_27971 = state_27965;
(statearr_27969_27971[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27972 = state_27965;
state_27965 = G__27972;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27199__auto__ = function(state_27965){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27199__auto____1.call(this,state_27965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27199__auto____0;
cljs$core$async$transduce_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27199__auto____1;
return cljs$core$async$transduce_$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto__,f__$1))
})();
var state__27338__auto__ = (function (){var statearr_27970 = f__27337__auto__.call(null);
(statearr_27970[(6)] = c__27336__auto__);

return statearr_27970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__,f__$1))
);

return c__27336__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27974 = arguments.length;
switch (G__27974) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto__){
return (function (state_27999){
var state_val_28000 = (state_27999[(1)]);
if((state_val_28000 === (7))){
var inst_27981 = (state_27999[(2)]);
var state_27999__$1 = state_27999;
var statearr_28001_28024 = state_27999__$1;
(statearr_28001_28024[(2)] = inst_27981);

(statearr_28001_28024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28000 === (1))){
var inst_27975 = cljs.core.seq.call(null,coll);
var inst_27976 = inst_27975;
var state_27999__$1 = (function (){var statearr_28002 = state_27999;
(statearr_28002[(7)] = inst_27976);

return statearr_28002;
})();
var statearr_28003_28025 = state_27999__$1;
(statearr_28003_28025[(2)] = null);

(statearr_28003_28025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28000 === (4))){
var inst_27976 = (state_27999[(7)]);
var inst_27979 = cljs.core.first.call(null,inst_27976);
var state_27999__$1 = state_27999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27999__$1,(7),ch,inst_27979);
} else {
if((state_val_28000 === (13))){
var inst_27993 = (state_27999[(2)]);
var state_27999__$1 = state_27999;
var statearr_28004_28026 = state_27999__$1;
(statearr_28004_28026[(2)] = inst_27993);

(statearr_28004_28026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28000 === (6))){
var inst_27984 = (state_27999[(2)]);
var state_27999__$1 = state_27999;
if(cljs.core.truth_(inst_27984)){
var statearr_28005_28028 = state_27999__$1;
(statearr_28005_28028[(1)] = (8));

} else {
var statearr_28006_28029 = state_27999__$1;
(statearr_28006_28029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28000 === (3))){
var inst_27997 = (state_27999[(2)]);
var state_27999__$1 = state_27999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27999__$1,inst_27997);
} else {
if((state_val_28000 === (12))){
var state_27999__$1 = state_27999;
var statearr_28007_28030 = state_27999__$1;
(statearr_28007_28030[(2)] = null);

(statearr_28007_28030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28000 === (2))){
var inst_27976 = (state_27999[(7)]);
var state_27999__$1 = state_27999;
if(cljs.core.truth_(inst_27976)){
var statearr_28008_28031 = state_27999__$1;
(statearr_28008_28031[(1)] = (4));

} else {
var statearr_28009_28032 = state_27999__$1;
(statearr_28009_28032[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28000 === (11))){
var inst_27990 = cljs.core.async.close_BANG_.call(null,ch);
var state_27999__$1 = state_27999;
var statearr_28010_28038 = state_27999__$1;
(statearr_28010_28038[(2)] = inst_27990);

(statearr_28010_28038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28000 === (9))){
var state_27999__$1 = state_27999;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28011_28039 = state_27999__$1;
(statearr_28011_28039[(1)] = (11));

} else {
var statearr_28014_28040 = state_27999__$1;
(statearr_28014_28040[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28000 === (5))){
var inst_27976 = (state_27999[(7)]);
var state_27999__$1 = state_27999;
var statearr_28015_28041 = state_27999__$1;
(statearr_28015_28041[(2)] = inst_27976);

(statearr_28015_28041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28000 === (10))){
var inst_27995 = (state_27999[(2)]);
var state_27999__$1 = state_27999;
var statearr_28016_28042 = state_27999__$1;
(statearr_28016_28042[(2)] = inst_27995);

(statearr_28016_28042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28000 === (8))){
var inst_27976 = (state_27999[(7)]);
var inst_27986 = cljs.core.next.call(null,inst_27976);
var inst_27976__$1 = inst_27986;
var state_27999__$1 = (function (){var statearr_28017 = state_27999;
(statearr_28017[(7)] = inst_27976__$1);

return statearr_28017;
})();
var statearr_28018_28043 = state_27999__$1;
(statearr_28018_28043[(2)] = null);

(statearr_28018_28043[(1)] = (2));


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
});})(c__27336__auto__))
;
return ((function (switch__27198__auto__,c__27336__auto__){
return (function() {
var cljs$core$async$state_machine__27199__auto__ = null;
var cljs$core$async$state_machine__27199__auto____0 = (function (){
var statearr_28019 = [null,null,null,null,null,null,null,null];
(statearr_28019[(0)] = cljs$core$async$state_machine__27199__auto__);

(statearr_28019[(1)] = (1));

return statearr_28019;
});
var cljs$core$async$state_machine__27199__auto____1 = (function (state_27999){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_27999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e28020){if((e28020 instanceof Object)){
var ex__27202__auto__ = e28020;
var statearr_28021_28044 = state_27999;
(statearr_28021_28044[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28047 = state_27999;
state_27999 = G__28047;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$state_machine__27199__auto__ = function(state_27999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27199__auto____1.call(this,state_27999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27199__auto____0;
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27199__auto____1;
return cljs$core$async$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto__))
})();
var state__27338__auto__ = (function (){var statearr_28022 = f__27337__auto__.call(null);
(statearr_28022[(6)] = c__27336__auto__);

return statearr_28022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__))
);

return c__27336__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28064 = (function (ch,cs,meta28065){
this.ch = ch;
this.cs = cs;
this.meta28065 = meta28065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28066,meta28065__$1){
var self__ = this;
var _28066__$1 = this;
return (new cljs.core.async.t_cljs$core$async28064(self__.ch,self__.cs,meta28065__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28066){
var self__ = this;
var _28066__$1 = this;
return self__.meta28065;
});})(cs))
;

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28064.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28064.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28065","meta28065",-1903069486,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28064";

cljs.core.async.t_cljs$core$async28064.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28064");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28064.
 */
cljs.core.async.__GT_t_cljs$core$async28064 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28064(ch__$1,cs__$1,meta28065){
return (new cljs.core.async.t_cljs$core$async28064(ch__$1,cs__$1,meta28065));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28064(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27336__auto___28331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___28331,cs,m,dchan,dctr,done){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___28331,cs,m,dchan,dctr,done){
return (function (state_28208){
var state_val_28209 = (state_28208[(1)]);
if((state_val_28209 === (7))){
var inst_28203 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28210_28333 = state_28208__$1;
(statearr_28210_28333[(2)] = inst_28203);

(statearr_28210_28333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (20))){
var inst_28103 = (state_28208[(7)]);
var inst_28115 = cljs.core.first.call(null,inst_28103);
var inst_28116 = cljs.core.nth.call(null,inst_28115,(0),null);
var inst_28117 = cljs.core.nth.call(null,inst_28115,(1),null);
var state_28208__$1 = (function (){var statearr_28211 = state_28208;
(statearr_28211[(8)] = inst_28116);

return statearr_28211;
})();
if(cljs.core.truth_(inst_28117)){
var statearr_28212_28335 = state_28208__$1;
(statearr_28212_28335[(1)] = (22));

} else {
var statearr_28213_28336 = state_28208__$1;
(statearr_28213_28336[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (27))){
var inst_28150 = (state_28208[(9)]);
var inst_28148 = (state_28208[(10)]);
var inst_28155 = (state_28208[(11)]);
var inst_28072 = (state_28208[(12)]);
var inst_28155__$1 = cljs.core._nth.call(null,inst_28148,inst_28150);
var inst_28156 = cljs.core.async.put_BANG_.call(null,inst_28155__$1,inst_28072,done);
var state_28208__$1 = (function (){var statearr_28215 = state_28208;
(statearr_28215[(11)] = inst_28155__$1);

return statearr_28215;
})();
if(cljs.core.truth_(inst_28156)){
var statearr_28216_28340 = state_28208__$1;
(statearr_28216_28340[(1)] = (30));

} else {
var statearr_28217_28341 = state_28208__$1;
(statearr_28217_28341[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (1))){
var state_28208__$1 = state_28208;
var statearr_28218_28342 = state_28208__$1;
(statearr_28218_28342[(2)] = null);

(statearr_28218_28342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (24))){
var inst_28103 = (state_28208[(7)]);
var inst_28123 = (state_28208[(2)]);
var inst_28124 = cljs.core.next.call(null,inst_28103);
var inst_28081 = inst_28124;
var inst_28082 = null;
var inst_28083 = (0);
var inst_28084 = (0);
var state_28208__$1 = (function (){var statearr_28219 = state_28208;
(statearr_28219[(13)] = inst_28123);

(statearr_28219[(14)] = inst_28084);

(statearr_28219[(15)] = inst_28081);

(statearr_28219[(16)] = inst_28083);

(statearr_28219[(17)] = inst_28082);

return statearr_28219;
})();
var statearr_28220_28348 = state_28208__$1;
(statearr_28220_28348[(2)] = null);

(statearr_28220_28348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (39))){
var state_28208__$1 = state_28208;
var statearr_28224_28349 = state_28208__$1;
(statearr_28224_28349[(2)] = null);

(statearr_28224_28349[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (4))){
var inst_28072 = (state_28208[(12)]);
var inst_28072__$1 = (state_28208[(2)]);
var inst_28073 = (inst_28072__$1 == null);
var state_28208__$1 = (function (){var statearr_28225 = state_28208;
(statearr_28225[(12)] = inst_28072__$1);

return statearr_28225;
})();
if(cljs.core.truth_(inst_28073)){
var statearr_28227_28351 = state_28208__$1;
(statearr_28227_28351[(1)] = (5));

} else {
var statearr_28228_28352 = state_28208__$1;
(statearr_28228_28352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (15))){
var inst_28084 = (state_28208[(14)]);
var inst_28081 = (state_28208[(15)]);
var inst_28083 = (state_28208[(16)]);
var inst_28082 = (state_28208[(17)]);
var inst_28099 = (state_28208[(2)]);
var inst_28100 = (inst_28084 + (1));
var tmp28221 = inst_28081;
var tmp28222 = inst_28083;
var tmp28223 = inst_28082;
var inst_28081__$1 = tmp28221;
var inst_28082__$1 = tmp28223;
var inst_28083__$1 = tmp28222;
var inst_28084__$1 = inst_28100;
var state_28208__$1 = (function (){var statearr_28229 = state_28208;
(statearr_28229[(18)] = inst_28099);

(statearr_28229[(14)] = inst_28084__$1);

(statearr_28229[(15)] = inst_28081__$1);

(statearr_28229[(16)] = inst_28083__$1);

(statearr_28229[(17)] = inst_28082__$1);

return statearr_28229;
})();
var statearr_28230_28356 = state_28208__$1;
(statearr_28230_28356[(2)] = null);

(statearr_28230_28356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (21))){
var inst_28127 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28234_28358 = state_28208__$1;
(statearr_28234_28358[(2)] = inst_28127);

(statearr_28234_28358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (31))){
var inst_28155 = (state_28208[(11)]);
var inst_28159 = done.call(null,null);
var inst_28160 = cljs.core.async.untap_STAR_.call(null,m,inst_28155);
var state_28208__$1 = (function (){var statearr_28235 = state_28208;
(statearr_28235[(19)] = inst_28159);

return statearr_28235;
})();
var statearr_28236_28360 = state_28208__$1;
(statearr_28236_28360[(2)] = inst_28160);

(statearr_28236_28360[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (32))){
var inst_28147 = (state_28208[(20)]);
var inst_28150 = (state_28208[(9)]);
var inst_28148 = (state_28208[(10)]);
var inst_28149 = (state_28208[(21)]);
var inst_28162 = (state_28208[(2)]);
var inst_28163 = (inst_28150 + (1));
var tmp28231 = inst_28147;
var tmp28232 = inst_28148;
var tmp28233 = inst_28149;
var inst_28147__$1 = tmp28231;
var inst_28148__$1 = tmp28232;
var inst_28149__$1 = tmp28233;
var inst_28150__$1 = inst_28163;
var state_28208__$1 = (function (){var statearr_28238 = state_28208;
(statearr_28238[(20)] = inst_28147__$1);

(statearr_28238[(9)] = inst_28150__$1);

(statearr_28238[(10)] = inst_28148__$1);

(statearr_28238[(21)] = inst_28149__$1);

(statearr_28238[(22)] = inst_28162);

return statearr_28238;
})();
var statearr_28239_28366 = state_28208__$1;
(statearr_28239_28366[(2)] = null);

(statearr_28239_28366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (40))){
var inst_28175 = (state_28208[(23)]);
var inst_28179 = done.call(null,null);
var inst_28180 = cljs.core.async.untap_STAR_.call(null,m,inst_28175);
var state_28208__$1 = (function (){var statearr_28240 = state_28208;
(statearr_28240[(24)] = inst_28179);

return statearr_28240;
})();
var statearr_28241_28368 = state_28208__$1;
(statearr_28241_28368[(2)] = inst_28180);

(statearr_28241_28368[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (33))){
var inst_28166 = (state_28208[(25)]);
var inst_28168 = cljs.core.chunked_seq_QMARK_.call(null,inst_28166);
var state_28208__$1 = state_28208;
if(inst_28168){
var statearr_28242_28371 = state_28208__$1;
(statearr_28242_28371[(1)] = (36));

} else {
var statearr_28243_28372 = state_28208__$1;
(statearr_28243_28372[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (13))){
var inst_28093 = (state_28208[(26)]);
var inst_28096 = cljs.core.async.close_BANG_.call(null,inst_28093);
var state_28208__$1 = state_28208;
var statearr_28248_28374 = state_28208__$1;
(statearr_28248_28374[(2)] = inst_28096);

(statearr_28248_28374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (22))){
var inst_28116 = (state_28208[(8)]);
var inst_28120 = cljs.core.async.close_BANG_.call(null,inst_28116);
var state_28208__$1 = state_28208;
var statearr_28249_28376 = state_28208__$1;
(statearr_28249_28376[(2)] = inst_28120);

(statearr_28249_28376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (36))){
var inst_28166 = (state_28208[(25)]);
var inst_28170 = cljs.core.chunk_first.call(null,inst_28166);
var inst_28171 = cljs.core.chunk_rest.call(null,inst_28166);
var inst_28172 = cljs.core.count.call(null,inst_28170);
var inst_28147 = inst_28171;
var inst_28148 = inst_28170;
var inst_28149 = inst_28172;
var inst_28150 = (0);
var state_28208__$1 = (function (){var statearr_28250 = state_28208;
(statearr_28250[(20)] = inst_28147);

(statearr_28250[(9)] = inst_28150);

(statearr_28250[(10)] = inst_28148);

(statearr_28250[(21)] = inst_28149);

return statearr_28250;
})();
var statearr_28251_28380 = state_28208__$1;
(statearr_28251_28380[(2)] = null);

(statearr_28251_28380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (41))){
var inst_28166 = (state_28208[(25)]);
var inst_28182 = (state_28208[(2)]);
var inst_28183 = cljs.core.next.call(null,inst_28166);
var inst_28147 = inst_28183;
var inst_28148 = null;
var inst_28149 = (0);
var inst_28150 = (0);
var state_28208__$1 = (function (){var statearr_28253 = state_28208;
(statearr_28253[(20)] = inst_28147);

(statearr_28253[(9)] = inst_28150);

(statearr_28253[(10)] = inst_28148);

(statearr_28253[(21)] = inst_28149);

(statearr_28253[(27)] = inst_28182);

return statearr_28253;
})();
var statearr_28254_28387 = state_28208__$1;
(statearr_28254_28387[(2)] = null);

(statearr_28254_28387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (43))){
var state_28208__$1 = state_28208;
var statearr_28255_28389 = state_28208__$1;
(statearr_28255_28389[(2)] = null);

(statearr_28255_28389[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (29))){
var inst_28191 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28256_28391 = state_28208__$1;
(statearr_28256_28391[(2)] = inst_28191);

(statearr_28256_28391[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (44))){
var inst_28200 = (state_28208[(2)]);
var state_28208__$1 = (function (){var statearr_28258 = state_28208;
(statearr_28258[(28)] = inst_28200);

return statearr_28258;
})();
var statearr_28259_28393 = state_28208__$1;
(statearr_28259_28393[(2)] = null);

(statearr_28259_28393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (6))){
var inst_28137 = (state_28208[(29)]);
var inst_28136 = cljs.core.deref.call(null,cs);
var inst_28137__$1 = cljs.core.keys.call(null,inst_28136);
var inst_28138 = cljs.core.count.call(null,inst_28137__$1);
var inst_28139 = cljs.core.reset_BANG_.call(null,dctr,inst_28138);
var inst_28146 = cljs.core.seq.call(null,inst_28137__$1);
var inst_28147 = inst_28146;
var inst_28148 = null;
var inst_28149 = (0);
var inst_28150 = (0);
var state_28208__$1 = (function (){var statearr_28261 = state_28208;
(statearr_28261[(20)] = inst_28147);

(statearr_28261[(9)] = inst_28150);

(statearr_28261[(30)] = inst_28139);

(statearr_28261[(10)] = inst_28148);

(statearr_28261[(21)] = inst_28149);

(statearr_28261[(29)] = inst_28137__$1);

return statearr_28261;
})();
var statearr_28262_28397 = state_28208__$1;
(statearr_28262_28397[(2)] = null);

(statearr_28262_28397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (28))){
var inst_28147 = (state_28208[(20)]);
var inst_28166 = (state_28208[(25)]);
var inst_28166__$1 = cljs.core.seq.call(null,inst_28147);
var state_28208__$1 = (function (){var statearr_28264 = state_28208;
(statearr_28264[(25)] = inst_28166__$1);

return statearr_28264;
})();
if(inst_28166__$1){
var statearr_28265_28399 = state_28208__$1;
(statearr_28265_28399[(1)] = (33));

} else {
var statearr_28266_28400 = state_28208__$1;
(statearr_28266_28400[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (25))){
var inst_28150 = (state_28208[(9)]);
var inst_28149 = (state_28208[(21)]);
var inst_28152 = (inst_28150 < inst_28149);
var inst_28153 = inst_28152;
var state_28208__$1 = state_28208;
if(cljs.core.truth_(inst_28153)){
var statearr_28267_28406 = state_28208__$1;
(statearr_28267_28406[(1)] = (27));

} else {
var statearr_28268_28407 = state_28208__$1;
(statearr_28268_28407[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (34))){
var state_28208__$1 = state_28208;
var statearr_28270_28410 = state_28208__$1;
(statearr_28270_28410[(2)] = null);

(statearr_28270_28410[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (17))){
var state_28208__$1 = state_28208;
var statearr_28271_28412 = state_28208__$1;
(statearr_28271_28412[(2)] = null);

(statearr_28271_28412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (3))){
var inst_28205 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28208__$1,inst_28205);
} else {
if((state_val_28209 === (12))){
var inst_28132 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28272_28415 = state_28208__$1;
(statearr_28272_28415[(2)] = inst_28132);

(statearr_28272_28415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (2))){
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28208__$1,(4),ch);
} else {
if((state_val_28209 === (23))){
var state_28208__$1 = state_28208;
var statearr_28273_28416 = state_28208__$1;
(statearr_28273_28416[(2)] = null);

(statearr_28273_28416[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (35))){
var inst_28189 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28274_28419 = state_28208__$1;
(statearr_28274_28419[(2)] = inst_28189);

(statearr_28274_28419[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (19))){
var inst_28103 = (state_28208[(7)]);
var inst_28107 = cljs.core.chunk_first.call(null,inst_28103);
var inst_28108 = cljs.core.chunk_rest.call(null,inst_28103);
var inst_28109 = cljs.core.count.call(null,inst_28107);
var inst_28081 = inst_28108;
var inst_28082 = inst_28107;
var inst_28083 = inst_28109;
var inst_28084 = (0);
var state_28208__$1 = (function (){var statearr_28279 = state_28208;
(statearr_28279[(14)] = inst_28084);

(statearr_28279[(15)] = inst_28081);

(statearr_28279[(16)] = inst_28083);

(statearr_28279[(17)] = inst_28082);

return statearr_28279;
})();
var statearr_28280_28423 = state_28208__$1;
(statearr_28280_28423[(2)] = null);

(statearr_28280_28423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (11))){
var inst_28081 = (state_28208[(15)]);
var inst_28103 = (state_28208[(7)]);
var inst_28103__$1 = cljs.core.seq.call(null,inst_28081);
var state_28208__$1 = (function (){var statearr_28281 = state_28208;
(statearr_28281[(7)] = inst_28103__$1);

return statearr_28281;
})();
if(inst_28103__$1){
var statearr_28282_28424 = state_28208__$1;
(statearr_28282_28424[(1)] = (16));

} else {
var statearr_28283_28425 = state_28208__$1;
(statearr_28283_28425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (9))){
var inst_28134 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28284_28426 = state_28208__$1;
(statearr_28284_28426[(2)] = inst_28134);

(statearr_28284_28426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (5))){
var inst_28079 = cljs.core.deref.call(null,cs);
var inst_28080 = cljs.core.seq.call(null,inst_28079);
var inst_28081 = inst_28080;
var inst_28082 = null;
var inst_28083 = (0);
var inst_28084 = (0);
var state_28208__$1 = (function (){var statearr_28285 = state_28208;
(statearr_28285[(14)] = inst_28084);

(statearr_28285[(15)] = inst_28081);

(statearr_28285[(16)] = inst_28083);

(statearr_28285[(17)] = inst_28082);

return statearr_28285;
})();
var statearr_28287_28430 = state_28208__$1;
(statearr_28287_28430[(2)] = null);

(statearr_28287_28430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (14))){
var state_28208__$1 = state_28208;
var statearr_28288_28431 = state_28208__$1;
(statearr_28288_28431[(2)] = null);

(statearr_28288_28431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (45))){
var inst_28197 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28289_28433 = state_28208__$1;
(statearr_28289_28433[(2)] = inst_28197);

(statearr_28289_28433[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (26))){
var inst_28137 = (state_28208[(29)]);
var inst_28193 = (state_28208[(2)]);
var inst_28194 = cljs.core.seq.call(null,inst_28137);
var state_28208__$1 = (function (){var statearr_28290 = state_28208;
(statearr_28290[(31)] = inst_28193);

return statearr_28290;
})();
if(inst_28194){
var statearr_28291_28436 = state_28208__$1;
(statearr_28291_28436[(1)] = (42));

} else {
var statearr_28292_28437 = state_28208__$1;
(statearr_28292_28437[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (16))){
var inst_28103 = (state_28208[(7)]);
var inst_28105 = cljs.core.chunked_seq_QMARK_.call(null,inst_28103);
var state_28208__$1 = state_28208;
if(inst_28105){
var statearr_28293_28441 = state_28208__$1;
(statearr_28293_28441[(1)] = (19));

} else {
var statearr_28294_28443 = state_28208__$1;
(statearr_28294_28443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (38))){
var inst_28186 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28296_28444 = state_28208__$1;
(statearr_28296_28444[(2)] = inst_28186);

(statearr_28296_28444[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (30))){
var state_28208__$1 = state_28208;
var statearr_28298_28446 = state_28208__$1;
(statearr_28298_28446[(2)] = null);

(statearr_28298_28446[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (10))){
var inst_28084 = (state_28208[(14)]);
var inst_28082 = (state_28208[(17)]);
var inst_28092 = cljs.core._nth.call(null,inst_28082,inst_28084);
var inst_28093 = cljs.core.nth.call(null,inst_28092,(0),null);
var inst_28094 = cljs.core.nth.call(null,inst_28092,(1),null);
var state_28208__$1 = (function (){var statearr_28299 = state_28208;
(statearr_28299[(26)] = inst_28093);

return statearr_28299;
})();
if(cljs.core.truth_(inst_28094)){
var statearr_28301_28450 = state_28208__$1;
(statearr_28301_28450[(1)] = (13));

} else {
var statearr_28302_28451 = state_28208__$1;
(statearr_28302_28451[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (18))){
var inst_28130 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28303_28453 = state_28208__$1;
(statearr_28303_28453[(2)] = inst_28130);

(statearr_28303_28453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (42))){
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28208__$1,(45),dchan);
} else {
if((state_val_28209 === (37))){
var inst_28166 = (state_28208[(25)]);
var inst_28175 = (state_28208[(23)]);
var inst_28072 = (state_28208[(12)]);
var inst_28175__$1 = cljs.core.first.call(null,inst_28166);
var inst_28176 = cljs.core.async.put_BANG_.call(null,inst_28175__$1,inst_28072,done);
var state_28208__$1 = (function (){var statearr_28307 = state_28208;
(statearr_28307[(23)] = inst_28175__$1);

return statearr_28307;
})();
if(cljs.core.truth_(inst_28176)){
var statearr_28308_28457 = state_28208__$1;
(statearr_28308_28457[(1)] = (39));

} else {
var statearr_28309_28458 = state_28208__$1;
(statearr_28309_28458[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (8))){
var inst_28084 = (state_28208[(14)]);
var inst_28083 = (state_28208[(16)]);
var inst_28086 = (inst_28084 < inst_28083);
var inst_28087 = inst_28086;
var state_28208__$1 = state_28208;
if(cljs.core.truth_(inst_28087)){
var statearr_28311_28460 = state_28208__$1;
(statearr_28311_28460[(1)] = (10));

} else {
var statearr_28312_28461 = state_28208__$1;
(statearr_28312_28461[(1)] = (11));

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
});})(c__27336__auto___28331,cs,m,dchan,dctr,done))
;
return ((function (switch__27198__auto__,c__27336__auto___28331,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27199__auto__ = null;
var cljs$core$async$mult_$_state_machine__27199__auto____0 = (function (){
var statearr_28314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28314[(0)] = cljs$core$async$mult_$_state_machine__27199__auto__);

(statearr_28314[(1)] = (1));

return statearr_28314;
});
var cljs$core$async$mult_$_state_machine__27199__auto____1 = (function (state_28208){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_28208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e28316){if((e28316 instanceof Object)){
var ex__27202__auto__ = e28316;
var statearr_28317_28465 = state_28208;
(statearr_28317_28465[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28467 = state_28208;
state_28208 = G__28467;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27199__auto__ = function(state_28208){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27199__auto____1.call(this,state_28208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27199__auto____0;
cljs$core$async$mult_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27199__auto____1;
return cljs$core$async$mult_$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___28331,cs,m,dchan,dctr,done))
})();
var state__27338__auto__ = (function (){var statearr_28318 = f__27337__auto__.call(null);
(statearr_28318[(6)] = c__27336__auto___28331);

return statearr_28318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___28331,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28472 = arguments.length;
switch (G__28472) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28501 = arguments.length;
var i__4532__auto___28502 = (0);
while(true){
if((i__4532__auto___28502 < len__4531__auto___28501)){
args__4534__auto__.push((arguments[i__4532__auto___28502]));

var G__28504 = (i__4532__auto___28502 + (1));
i__4532__auto___28502 = G__28504;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28494){
var map__28495 = p__28494;
var map__28495__$1 = ((((!((map__28495 == null)))?(((((map__28495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28495):map__28495);
var opts = map__28495__$1;
var statearr_28498_28505 = state;
(statearr_28498_28505[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28495,map__28495__$1,opts){
return (function (val){
var statearr_28499_28507 = state;
(statearr_28499_28507[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28495,map__28495__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28500_28508 = state;
(statearr_28500_28508[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28490){
var G__28491 = cljs.core.first.call(null,seq28490);
var seq28490__$1 = cljs.core.next.call(null,seq28490);
var G__28492 = cljs.core.first.call(null,seq28490__$1);
var seq28490__$2 = cljs.core.next.call(null,seq28490__$1);
var G__28493 = cljs.core.first.call(null,seq28490__$2);
var seq28490__$3 = cljs.core.next.call(null,seq28490__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28491,G__28492,G__28493,seq28490__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28520 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28521){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28521 = meta28521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28522,meta28521__$1){
var self__ = this;
var _28522__$1 = this;
return (new cljs.core.async.t_cljs$core$async28520(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28521__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28522){
var self__ = this;
var _28522__$1 = this;
return self__.meta28521;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28520.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28520.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28520.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28520.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28520.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28520.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28520.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28520.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28520.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28521","meta28521",-1827530149,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28520";

cljs.core.async.t_cljs$core$async28520.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28520");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28520.
 */
cljs.core.async.__GT_t_cljs$core$async28520 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28520(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28521){
return (new cljs.core.async.t_cljs$core$async28520(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28521));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28520(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27336__auto___28810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___28810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___28810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28644){
var state_val_28645 = (state_28644[(1)]);
if((state_val_28645 === (7))){
var inst_28556 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28646_28815 = state_28644__$1;
(statearr_28646_28815[(2)] = inst_28556);

(statearr_28646_28815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (20))){
var inst_28568 = (state_28644[(7)]);
var state_28644__$1 = state_28644;
var statearr_28647_28817 = state_28644__$1;
(statearr_28647_28817[(2)] = inst_28568);

(statearr_28647_28817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (27))){
var state_28644__$1 = state_28644;
var statearr_28648_28818 = state_28644__$1;
(statearr_28648_28818[(2)] = null);

(statearr_28648_28818[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (1))){
var inst_28543 = (state_28644[(8)]);
var inst_28543__$1 = calc_state.call(null);
var inst_28545 = (inst_28543__$1 == null);
var inst_28546 = cljs.core.not.call(null,inst_28545);
var state_28644__$1 = (function (){var statearr_28650 = state_28644;
(statearr_28650[(8)] = inst_28543__$1);

return statearr_28650;
})();
if(inst_28546){
var statearr_28651_28822 = state_28644__$1;
(statearr_28651_28822[(1)] = (2));

} else {
var statearr_28652_28823 = state_28644__$1;
(statearr_28652_28823[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (24))){
var inst_28603 = (state_28644[(9)]);
var inst_28617 = (state_28644[(10)]);
var inst_28593 = (state_28644[(11)]);
var inst_28617__$1 = inst_28593.call(null,inst_28603);
var state_28644__$1 = (function (){var statearr_28653 = state_28644;
(statearr_28653[(10)] = inst_28617__$1);

return statearr_28653;
})();
if(cljs.core.truth_(inst_28617__$1)){
var statearr_28654_28825 = state_28644__$1;
(statearr_28654_28825[(1)] = (29));

} else {
var statearr_28655_28826 = state_28644__$1;
(statearr_28655_28826[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (4))){
var inst_28559 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28559)){
var statearr_28656_28829 = state_28644__$1;
(statearr_28656_28829[(1)] = (8));

} else {
var statearr_28657_28832 = state_28644__$1;
(statearr_28657_28832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (15))){
var inst_28587 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28587)){
var statearr_28658_28834 = state_28644__$1;
(statearr_28658_28834[(1)] = (19));

} else {
var statearr_28660_28835 = state_28644__$1;
(statearr_28660_28835[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (21))){
var inst_28592 = (state_28644[(12)]);
var inst_28592__$1 = (state_28644[(2)]);
var inst_28593 = cljs.core.get.call(null,inst_28592__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28594 = cljs.core.get.call(null,inst_28592__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28595 = cljs.core.get.call(null,inst_28592__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28644__$1 = (function (){var statearr_28661 = state_28644;
(statearr_28661[(12)] = inst_28592__$1);

(statearr_28661[(11)] = inst_28593);

(statearr_28661[(13)] = inst_28594);

return statearr_28661;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28644__$1,(22),inst_28595);
} else {
if((state_val_28645 === (31))){
var inst_28625 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28625)){
var statearr_28662_28841 = state_28644__$1;
(statearr_28662_28841[(1)] = (32));

} else {
var statearr_28663_28842 = state_28644__$1;
(statearr_28663_28842[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (32))){
var inst_28602 = (state_28644[(14)]);
var state_28644__$1 = state_28644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28644__$1,(35),out,inst_28602);
} else {
if((state_val_28645 === (33))){
var inst_28592 = (state_28644[(12)]);
var inst_28568 = inst_28592;
var state_28644__$1 = (function (){var statearr_28667 = state_28644;
(statearr_28667[(7)] = inst_28568);

return statearr_28667;
})();
var statearr_28668_28844 = state_28644__$1;
(statearr_28668_28844[(2)] = null);

(statearr_28668_28844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (13))){
var inst_28568 = (state_28644[(7)]);
var inst_28576 = inst_28568.cljs$lang$protocol_mask$partition0$;
var inst_28577 = (inst_28576 & (64));
var inst_28578 = inst_28568.cljs$core$ISeq$;
var inst_28579 = (cljs.core.PROTOCOL_SENTINEL === inst_28578);
var inst_28580 = ((inst_28577) || (inst_28579));
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28580)){
var statearr_28670_28847 = state_28644__$1;
(statearr_28670_28847[(1)] = (16));

} else {
var statearr_28671_28848 = state_28644__$1;
(statearr_28671_28848[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (22))){
var inst_28603 = (state_28644[(9)]);
var inst_28602 = (state_28644[(14)]);
var inst_28600 = (state_28644[(2)]);
var inst_28602__$1 = cljs.core.nth.call(null,inst_28600,(0),null);
var inst_28603__$1 = cljs.core.nth.call(null,inst_28600,(1),null);
var inst_28604 = (inst_28602__$1 == null);
var inst_28605 = cljs.core._EQ_.call(null,inst_28603__$1,change);
var inst_28606 = ((inst_28604) || (inst_28605));
var state_28644__$1 = (function (){var statearr_28672 = state_28644;
(statearr_28672[(9)] = inst_28603__$1);

(statearr_28672[(14)] = inst_28602__$1);

return statearr_28672;
})();
if(cljs.core.truth_(inst_28606)){
var statearr_28673_28851 = state_28644__$1;
(statearr_28673_28851[(1)] = (23));

} else {
var statearr_28674_28852 = state_28644__$1;
(statearr_28674_28852[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (36))){
var inst_28592 = (state_28644[(12)]);
var inst_28568 = inst_28592;
var state_28644__$1 = (function (){var statearr_28675 = state_28644;
(statearr_28675[(7)] = inst_28568);

return statearr_28675;
})();
var statearr_28676_28853 = state_28644__$1;
(statearr_28676_28853[(2)] = null);

(statearr_28676_28853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (29))){
var inst_28617 = (state_28644[(10)]);
var state_28644__$1 = state_28644;
var statearr_28677_28856 = state_28644__$1;
(statearr_28677_28856[(2)] = inst_28617);

(statearr_28677_28856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (6))){
var state_28644__$1 = state_28644;
var statearr_28679_28858 = state_28644__$1;
(statearr_28679_28858[(2)] = false);

(statearr_28679_28858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (28))){
var inst_28613 = (state_28644[(2)]);
var inst_28614 = calc_state.call(null);
var inst_28568 = inst_28614;
var state_28644__$1 = (function (){var statearr_28680 = state_28644;
(statearr_28680[(7)] = inst_28568);

(statearr_28680[(15)] = inst_28613);

return statearr_28680;
})();
var statearr_28681_28859 = state_28644__$1;
(statearr_28681_28859[(2)] = null);

(statearr_28681_28859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (25))){
var inst_28639 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28682_28861 = state_28644__$1;
(statearr_28682_28861[(2)] = inst_28639);

(statearr_28682_28861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (34))){
var inst_28637 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28683_28864 = state_28644__$1;
(statearr_28683_28864[(2)] = inst_28637);

(statearr_28683_28864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (17))){
var state_28644__$1 = state_28644;
var statearr_28684_28866 = state_28644__$1;
(statearr_28684_28866[(2)] = false);

(statearr_28684_28866[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (3))){
var state_28644__$1 = state_28644;
var statearr_28686_28867 = state_28644__$1;
(statearr_28686_28867[(2)] = false);

(statearr_28686_28867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (12))){
var inst_28641 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28644__$1,inst_28641);
} else {
if((state_val_28645 === (2))){
var inst_28543 = (state_28644[(8)]);
var inst_28548 = inst_28543.cljs$lang$protocol_mask$partition0$;
var inst_28549 = (inst_28548 & (64));
var inst_28550 = inst_28543.cljs$core$ISeq$;
var inst_28551 = (cljs.core.PROTOCOL_SENTINEL === inst_28550);
var inst_28552 = ((inst_28549) || (inst_28551));
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28552)){
var statearr_28687_28869 = state_28644__$1;
(statearr_28687_28869[(1)] = (5));

} else {
var statearr_28688_28872 = state_28644__$1;
(statearr_28688_28872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (23))){
var inst_28602 = (state_28644[(14)]);
var inst_28608 = (inst_28602 == null);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28608)){
var statearr_28689_28874 = state_28644__$1;
(statearr_28689_28874[(1)] = (26));

} else {
var statearr_28690_28875 = state_28644__$1;
(statearr_28690_28875[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (35))){
var inst_28628 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28628)){
var statearr_28691_28876 = state_28644__$1;
(statearr_28691_28876[(1)] = (36));

} else {
var statearr_28692_28878 = state_28644__$1;
(statearr_28692_28878[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (19))){
var inst_28568 = (state_28644[(7)]);
var inst_28589 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28568);
var state_28644__$1 = state_28644;
var statearr_28693_28879 = state_28644__$1;
(statearr_28693_28879[(2)] = inst_28589);

(statearr_28693_28879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (11))){
var inst_28568 = (state_28644[(7)]);
var inst_28572 = (inst_28568 == null);
var inst_28573 = cljs.core.not.call(null,inst_28572);
var state_28644__$1 = state_28644;
if(inst_28573){
var statearr_28695_28883 = state_28644__$1;
(statearr_28695_28883[(1)] = (13));

} else {
var statearr_28696_28884 = state_28644__$1;
(statearr_28696_28884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (9))){
var inst_28543 = (state_28644[(8)]);
var state_28644__$1 = state_28644;
var statearr_28697_28885 = state_28644__$1;
(statearr_28697_28885[(2)] = inst_28543);

(statearr_28697_28885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (5))){
var state_28644__$1 = state_28644;
var statearr_28698_28886 = state_28644__$1;
(statearr_28698_28886[(2)] = true);

(statearr_28698_28886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (14))){
var state_28644__$1 = state_28644;
var statearr_28699_28888 = state_28644__$1;
(statearr_28699_28888[(2)] = false);

(statearr_28699_28888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (26))){
var inst_28603 = (state_28644[(9)]);
var inst_28610 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28603);
var state_28644__$1 = state_28644;
var statearr_28700_28890 = state_28644__$1;
(statearr_28700_28890[(2)] = inst_28610);

(statearr_28700_28890[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (16))){
var state_28644__$1 = state_28644;
var statearr_28701_28893 = state_28644__$1;
(statearr_28701_28893[(2)] = true);

(statearr_28701_28893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (38))){
var inst_28633 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28702_28894 = state_28644__$1;
(statearr_28702_28894[(2)] = inst_28633);

(statearr_28702_28894[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (30))){
var inst_28603 = (state_28644[(9)]);
var inst_28593 = (state_28644[(11)]);
var inst_28594 = (state_28644[(13)]);
var inst_28620 = cljs.core.empty_QMARK_.call(null,inst_28593);
var inst_28621 = inst_28594.call(null,inst_28603);
var inst_28622 = cljs.core.not.call(null,inst_28621);
var inst_28623 = ((inst_28620) && (inst_28622));
var state_28644__$1 = state_28644;
var statearr_28704_28896 = state_28644__$1;
(statearr_28704_28896[(2)] = inst_28623);

(statearr_28704_28896[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (10))){
var inst_28543 = (state_28644[(8)]);
var inst_28564 = (state_28644[(2)]);
var inst_28565 = cljs.core.get.call(null,inst_28564,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28566 = cljs.core.get.call(null,inst_28564,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28567 = cljs.core.get.call(null,inst_28564,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28568 = inst_28543;
var state_28644__$1 = (function (){var statearr_28708 = state_28644;
(statearr_28708[(7)] = inst_28568);

(statearr_28708[(16)] = inst_28565);

(statearr_28708[(17)] = inst_28566);

(statearr_28708[(18)] = inst_28567);

return statearr_28708;
})();
var statearr_28709_28900 = state_28644__$1;
(statearr_28709_28900[(2)] = null);

(statearr_28709_28900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (18))){
var inst_28584 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28710_28902 = state_28644__$1;
(statearr_28710_28902[(2)] = inst_28584);

(statearr_28710_28902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (37))){
var state_28644__$1 = state_28644;
var statearr_28711_28903 = state_28644__$1;
(statearr_28711_28903[(2)] = null);

(statearr_28711_28903[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (8))){
var inst_28543 = (state_28644[(8)]);
var inst_28561 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28543);
var state_28644__$1 = state_28644;
var statearr_28713_28907 = state_28644__$1;
(statearr_28713_28907[(2)] = inst_28561);

(statearr_28713_28907[(1)] = (10));


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
});})(c__27336__auto___28810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27198__auto__,c__27336__auto___28810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27199__auto__ = null;
var cljs$core$async$mix_$_state_machine__27199__auto____0 = (function (){
var statearr_28714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28714[(0)] = cljs$core$async$mix_$_state_machine__27199__auto__);

(statearr_28714[(1)] = (1));

return statearr_28714;
});
var cljs$core$async$mix_$_state_machine__27199__auto____1 = (function (state_28644){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_28644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e28715){if((e28715 instanceof Object)){
var ex__27202__auto__ = e28715;
var statearr_28716_28912 = state_28644;
(statearr_28716_28912[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28913 = state_28644;
state_28644 = G__28913;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27199__auto__ = function(state_28644){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27199__auto____1.call(this,state_28644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27199__auto____0;
cljs$core$async$mix_$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27199__auto____1;
return cljs$core$async$mix_$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___28810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27338__auto__ = (function (){var statearr_28718 = f__27337__auto__.call(null);
(statearr_28718[(6)] = c__27336__auto___28810);

return statearr_28718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___28810,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28936 = arguments.length;
switch (G__28936) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28973 = arguments.length;
switch (G__28973) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__28971_SHARP_){
if(cljs.core.truth_(p1__28971_SHARP_.call(null,topic))){
return p1__28971_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28971_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28976 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28977){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28977 = meta28977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28978,meta28977__$1){
var self__ = this;
var _28978__$1 = this;
return (new cljs.core.async.t_cljs$core$async28976(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28977__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28978){
var self__ = this;
var _28978__$1 = this;
return self__.meta28977;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28976.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28977","meta28977",-6333100,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28976";

cljs.core.async.t_cljs$core$async28976.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28976");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28976.
 */
cljs.core.async.__GT_t_cljs$core$async28976 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28977){
return (new cljs.core.async.t_cljs$core$async28976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28977));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28976(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27336__auto___29120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___29120,mults,ensure_mult,p){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___29120,mults,ensure_mult,p){
return (function (state_29062){
var state_val_29063 = (state_29062[(1)]);
if((state_val_29063 === (7))){
var inst_29058 = (state_29062[(2)]);
var state_29062__$1 = state_29062;
var statearr_29064_29121 = state_29062__$1;
(statearr_29064_29121[(2)] = inst_29058);

(statearr_29064_29121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (20))){
var state_29062__$1 = state_29062;
var statearr_29065_29122 = state_29062__$1;
(statearr_29065_29122[(2)] = null);

(statearr_29065_29122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (1))){
var state_29062__$1 = state_29062;
var statearr_29066_29123 = state_29062__$1;
(statearr_29066_29123[(2)] = null);

(statearr_29066_29123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (24))){
var inst_29040 = (state_29062[(7)]);
var inst_29050 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29040);
var state_29062__$1 = state_29062;
var statearr_29067_29124 = state_29062__$1;
(statearr_29067_29124[(2)] = inst_29050);

(statearr_29067_29124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (4))){
var inst_28989 = (state_29062[(8)]);
var inst_28989__$1 = (state_29062[(2)]);
var inst_28990 = (inst_28989__$1 == null);
var state_29062__$1 = (function (){var statearr_29068 = state_29062;
(statearr_29068[(8)] = inst_28989__$1);

return statearr_29068;
})();
if(cljs.core.truth_(inst_28990)){
var statearr_29071_29125 = state_29062__$1;
(statearr_29071_29125[(1)] = (5));

} else {
var statearr_29073_29126 = state_29062__$1;
(statearr_29073_29126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (15))){
var inst_29034 = (state_29062[(2)]);
var state_29062__$1 = state_29062;
var statearr_29074_29127 = state_29062__$1;
(statearr_29074_29127[(2)] = inst_29034);

(statearr_29074_29127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (21))){
var inst_29055 = (state_29062[(2)]);
var state_29062__$1 = (function (){var statearr_29075 = state_29062;
(statearr_29075[(9)] = inst_29055);

return statearr_29075;
})();
var statearr_29076_29128 = state_29062__$1;
(statearr_29076_29128[(2)] = null);

(statearr_29076_29128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (13))){
var inst_29016 = (state_29062[(10)]);
var inst_29018 = cljs.core.chunked_seq_QMARK_.call(null,inst_29016);
var state_29062__$1 = state_29062;
if(inst_29018){
var statearr_29077_29129 = state_29062__$1;
(statearr_29077_29129[(1)] = (16));

} else {
var statearr_29078_29130 = state_29062__$1;
(statearr_29078_29130[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (22))){
var inst_29047 = (state_29062[(2)]);
var state_29062__$1 = state_29062;
if(cljs.core.truth_(inst_29047)){
var statearr_29079_29131 = state_29062__$1;
(statearr_29079_29131[(1)] = (23));

} else {
var statearr_29080_29132 = state_29062__$1;
(statearr_29080_29132[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (6))){
var inst_29040 = (state_29062[(7)]);
var inst_28989 = (state_29062[(8)]);
var inst_29042 = (state_29062[(11)]);
var inst_29040__$1 = topic_fn.call(null,inst_28989);
var inst_29041 = cljs.core.deref.call(null,mults);
var inst_29042__$1 = cljs.core.get.call(null,inst_29041,inst_29040__$1);
var state_29062__$1 = (function (){var statearr_29081 = state_29062;
(statearr_29081[(7)] = inst_29040__$1);

(statearr_29081[(11)] = inst_29042__$1);

return statearr_29081;
})();
if(cljs.core.truth_(inst_29042__$1)){
var statearr_29082_29135 = state_29062__$1;
(statearr_29082_29135[(1)] = (19));

} else {
var statearr_29083_29136 = state_29062__$1;
(statearr_29083_29136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (25))){
var inst_29052 = (state_29062[(2)]);
var state_29062__$1 = state_29062;
var statearr_29084_29138 = state_29062__$1;
(statearr_29084_29138[(2)] = inst_29052);

(statearr_29084_29138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (17))){
var inst_29016 = (state_29062[(10)]);
var inst_29025 = cljs.core.first.call(null,inst_29016);
var inst_29026 = cljs.core.async.muxch_STAR_.call(null,inst_29025);
var inst_29027 = cljs.core.async.close_BANG_.call(null,inst_29026);
var inst_29028 = cljs.core.next.call(null,inst_29016);
var inst_28999 = inst_29028;
var inst_29000 = null;
var inst_29001 = (0);
var inst_29002 = (0);
var state_29062__$1 = (function (){var statearr_29086 = state_29062;
(statearr_29086[(12)] = inst_29000);

(statearr_29086[(13)] = inst_29001);

(statearr_29086[(14)] = inst_29027);

(statearr_29086[(15)] = inst_29002);

(statearr_29086[(16)] = inst_28999);

return statearr_29086;
})();
var statearr_29087_29139 = state_29062__$1;
(statearr_29087_29139[(2)] = null);

(statearr_29087_29139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (3))){
var inst_29060 = (state_29062[(2)]);
var state_29062__$1 = state_29062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29062__$1,inst_29060);
} else {
if((state_val_29063 === (12))){
var inst_29036 = (state_29062[(2)]);
var state_29062__$1 = state_29062;
var statearr_29088_29140 = state_29062__$1;
(statearr_29088_29140[(2)] = inst_29036);

(statearr_29088_29140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (2))){
var state_29062__$1 = state_29062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29062__$1,(4),ch);
} else {
if((state_val_29063 === (23))){
var state_29062__$1 = state_29062;
var statearr_29089_29141 = state_29062__$1;
(statearr_29089_29141[(2)] = null);

(statearr_29089_29141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (19))){
var inst_28989 = (state_29062[(8)]);
var inst_29042 = (state_29062[(11)]);
var inst_29045 = cljs.core.async.muxch_STAR_.call(null,inst_29042);
var state_29062__$1 = state_29062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29062__$1,(22),inst_29045,inst_28989);
} else {
if((state_val_29063 === (11))){
var inst_29016 = (state_29062[(10)]);
var inst_28999 = (state_29062[(16)]);
var inst_29016__$1 = cljs.core.seq.call(null,inst_28999);
var state_29062__$1 = (function (){var statearr_29090 = state_29062;
(statearr_29090[(10)] = inst_29016__$1);

return statearr_29090;
})();
if(inst_29016__$1){
var statearr_29091_29142 = state_29062__$1;
(statearr_29091_29142[(1)] = (13));

} else {
var statearr_29092_29143 = state_29062__$1;
(statearr_29092_29143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (9))){
var inst_29038 = (state_29062[(2)]);
var state_29062__$1 = state_29062;
var statearr_29093_29144 = state_29062__$1;
(statearr_29093_29144[(2)] = inst_29038);

(statearr_29093_29144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (5))){
var inst_28996 = cljs.core.deref.call(null,mults);
var inst_28997 = cljs.core.vals.call(null,inst_28996);
var inst_28998 = cljs.core.seq.call(null,inst_28997);
var inst_28999 = inst_28998;
var inst_29000 = null;
var inst_29001 = (0);
var inst_29002 = (0);
var state_29062__$1 = (function (){var statearr_29094 = state_29062;
(statearr_29094[(12)] = inst_29000);

(statearr_29094[(13)] = inst_29001);

(statearr_29094[(15)] = inst_29002);

(statearr_29094[(16)] = inst_28999);

return statearr_29094;
})();
var statearr_29095_29148 = state_29062__$1;
(statearr_29095_29148[(2)] = null);

(statearr_29095_29148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (14))){
var state_29062__$1 = state_29062;
var statearr_29099_29149 = state_29062__$1;
(statearr_29099_29149[(2)] = null);

(statearr_29099_29149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (16))){
var inst_29016 = (state_29062[(10)]);
var inst_29020 = cljs.core.chunk_first.call(null,inst_29016);
var inst_29021 = cljs.core.chunk_rest.call(null,inst_29016);
var inst_29022 = cljs.core.count.call(null,inst_29020);
var inst_28999 = inst_29021;
var inst_29000 = inst_29020;
var inst_29001 = inst_29022;
var inst_29002 = (0);
var state_29062__$1 = (function (){var statearr_29100 = state_29062;
(statearr_29100[(12)] = inst_29000);

(statearr_29100[(13)] = inst_29001);

(statearr_29100[(15)] = inst_29002);

(statearr_29100[(16)] = inst_28999);

return statearr_29100;
})();
var statearr_29105_29150 = state_29062__$1;
(statearr_29105_29150[(2)] = null);

(statearr_29105_29150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (10))){
var inst_29000 = (state_29062[(12)]);
var inst_29001 = (state_29062[(13)]);
var inst_29002 = (state_29062[(15)]);
var inst_28999 = (state_29062[(16)]);
var inst_29010 = cljs.core._nth.call(null,inst_29000,inst_29002);
var inst_29011 = cljs.core.async.muxch_STAR_.call(null,inst_29010);
var inst_29012 = cljs.core.async.close_BANG_.call(null,inst_29011);
var inst_29013 = (inst_29002 + (1));
var tmp29096 = inst_29000;
var tmp29097 = inst_29001;
var tmp29098 = inst_28999;
var inst_28999__$1 = tmp29098;
var inst_29000__$1 = tmp29096;
var inst_29001__$1 = tmp29097;
var inst_29002__$1 = inst_29013;
var state_29062__$1 = (function (){var statearr_29106 = state_29062;
(statearr_29106[(12)] = inst_29000__$1);

(statearr_29106[(13)] = inst_29001__$1);

(statearr_29106[(15)] = inst_29002__$1);

(statearr_29106[(17)] = inst_29012);

(statearr_29106[(16)] = inst_28999__$1);

return statearr_29106;
})();
var statearr_29107_29151 = state_29062__$1;
(statearr_29107_29151[(2)] = null);

(statearr_29107_29151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (18))){
var inst_29031 = (state_29062[(2)]);
var state_29062__$1 = state_29062;
var statearr_29108_29152 = state_29062__$1;
(statearr_29108_29152[(2)] = inst_29031);

(statearr_29108_29152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29063 === (8))){
var inst_29001 = (state_29062[(13)]);
var inst_29002 = (state_29062[(15)]);
var inst_29004 = (inst_29002 < inst_29001);
var inst_29005 = inst_29004;
var state_29062__$1 = state_29062;
if(cljs.core.truth_(inst_29005)){
var statearr_29109_29153 = state_29062__$1;
(statearr_29109_29153[(1)] = (10));

} else {
var statearr_29110_29154 = state_29062__$1;
(statearr_29110_29154[(1)] = (11));

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
});})(c__27336__auto___29120,mults,ensure_mult,p))
;
return ((function (switch__27198__auto__,c__27336__auto___29120,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27199__auto__ = null;
var cljs$core$async$state_machine__27199__auto____0 = (function (){
var statearr_29113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29113[(0)] = cljs$core$async$state_machine__27199__auto__);

(statearr_29113[(1)] = (1));

return statearr_29113;
});
var cljs$core$async$state_machine__27199__auto____1 = (function (state_29062){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_29062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e29115){if((e29115 instanceof Object)){
var ex__27202__auto__ = e29115;
var statearr_29116_29155 = state_29062;
(statearr_29116_29155[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29156 = state_29062;
state_29062 = G__29156;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$state_machine__27199__auto__ = function(state_29062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27199__auto____1.call(this,state_29062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27199__auto____0;
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27199__auto____1;
return cljs$core$async$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___29120,mults,ensure_mult,p))
})();
var state__27338__auto__ = (function (){var statearr_29117 = f__27337__auto__.call(null);
(statearr_29117[(6)] = c__27336__auto___29120);

return statearr_29117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___29120,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29158 = arguments.length;
switch (G__29158) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29161 = arguments.length;
switch (G__29161) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29164 = arguments.length;
switch (G__29164) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27336__auto___29233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___29233,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___29233,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29205){
var state_val_29206 = (state_29205[(1)]);
if((state_val_29206 === (7))){
var state_29205__$1 = state_29205;
var statearr_29207_29234 = state_29205__$1;
(statearr_29207_29234[(2)] = null);

(statearr_29207_29234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (1))){
var state_29205__$1 = state_29205;
var statearr_29208_29235 = state_29205__$1;
(statearr_29208_29235[(2)] = null);

(statearr_29208_29235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (4))){
var inst_29167 = (state_29205[(7)]);
var inst_29169 = (inst_29167 < cnt);
var state_29205__$1 = state_29205;
if(cljs.core.truth_(inst_29169)){
var statearr_29209_29236 = state_29205__$1;
(statearr_29209_29236[(1)] = (6));

} else {
var statearr_29210_29237 = state_29205__$1;
(statearr_29210_29237[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (15))){
var inst_29201 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29211_29238 = state_29205__$1;
(statearr_29211_29238[(2)] = inst_29201);

(statearr_29211_29238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (13))){
var inst_29194 = cljs.core.async.close_BANG_.call(null,out);
var state_29205__$1 = state_29205;
var statearr_29212_29239 = state_29205__$1;
(statearr_29212_29239[(2)] = inst_29194);

(statearr_29212_29239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (6))){
var state_29205__$1 = state_29205;
var statearr_29213_29240 = state_29205__$1;
(statearr_29213_29240[(2)] = null);

(statearr_29213_29240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (3))){
var inst_29203 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29205__$1,inst_29203);
} else {
if((state_val_29206 === (12))){
var inst_29191 = (state_29205[(8)]);
var inst_29191__$1 = (state_29205[(2)]);
var inst_29192 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29191__$1);
var state_29205__$1 = (function (){var statearr_29214 = state_29205;
(statearr_29214[(8)] = inst_29191__$1);

return statearr_29214;
})();
if(cljs.core.truth_(inst_29192)){
var statearr_29215_29242 = state_29205__$1;
(statearr_29215_29242[(1)] = (13));

} else {
var statearr_29216_29243 = state_29205__$1;
(statearr_29216_29243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (2))){
var inst_29166 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29167 = (0);
var state_29205__$1 = (function (){var statearr_29217 = state_29205;
(statearr_29217[(7)] = inst_29167);

(statearr_29217[(9)] = inst_29166);

return statearr_29217;
})();
var statearr_29218_29244 = state_29205__$1;
(statearr_29218_29244[(2)] = null);

(statearr_29218_29244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (11))){
var inst_29167 = (state_29205[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29205,(10),Object,null,(9));
var inst_29178 = chs__$1.call(null,inst_29167);
var inst_29179 = done.call(null,inst_29167);
var inst_29180 = cljs.core.async.take_BANG_.call(null,inst_29178,inst_29179);
var state_29205__$1 = state_29205;
var statearr_29219_29245 = state_29205__$1;
(statearr_29219_29245[(2)] = inst_29180);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (9))){
var inst_29167 = (state_29205[(7)]);
var inst_29182 = (state_29205[(2)]);
var inst_29183 = (inst_29167 + (1));
var inst_29167__$1 = inst_29183;
var state_29205__$1 = (function (){var statearr_29220 = state_29205;
(statearr_29220[(10)] = inst_29182);

(statearr_29220[(7)] = inst_29167__$1);

return statearr_29220;
})();
var statearr_29221_29247 = state_29205__$1;
(statearr_29221_29247[(2)] = null);

(statearr_29221_29247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (5))){
var inst_29189 = (state_29205[(2)]);
var state_29205__$1 = (function (){var statearr_29222 = state_29205;
(statearr_29222[(11)] = inst_29189);

return statearr_29222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29205__$1,(12),dchan);
} else {
if((state_val_29206 === (14))){
var inst_29191 = (state_29205[(8)]);
var inst_29196 = cljs.core.apply.call(null,f,inst_29191);
var state_29205__$1 = state_29205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29205__$1,(16),out,inst_29196);
} else {
if((state_val_29206 === (16))){
var inst_29198 = (state_29205[(2)]);
var state_29205__$1 = (function (){var statearr_29223 = state_29205;
(statearr_29223[(12)] = inst_29198);

return statearr_29223;
})();
var statearr_29224_29249 = state_29205__$1;
(statearr_29224_29249[(2)] = null);

(statearr_29224_29249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (10))){
var inst_29173 = (state_29205[(2)]);
var inst_29174 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29205__$1 = (function (){var statearr_29225 = state_29205;
(statearr_29225[(13)] = inst_29173);

return statearr_29225;
})();
var statearr_29226_29250 = state_29205__$1;
(statearr_29226_29250[(2)] = inst_29174);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (8))){
var inst_29187 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29227_29252 = state_29205__$1;
(statearr_29227_29252[(2)] = inst_29187);

(statearr_29227_29252[(1)] = (5));


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
});})(c__27336__auto___29233,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27198__auto__,c__27336__auto___29233,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27199__auto__ = null;
var cljs$core$async$state_machine__27199__auto____0 = (function (){
var statearr_29228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29228[(0)] = cljs$core$async$state_machine__27199__auto__);

(statearr_29228[(1)] = (1));

return statearr_29228;
});
var cljs$core$async$state_machine__27199__auto____1 = (function (state_29205){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_29205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e29229){if((e29229 instanceof Object)){
var ex__27202__auto__ = e29229;
var statearr_29230_29253 = state_29205;
(statearr_29230_29253[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29254 = state_29205;
state_29205 = G__29254;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$state_machine__27199__auto__ = function(state_29205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27199__auto____1.call(this,state_29205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27199__auto____0;
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27199__auto____1;
return cljs$core$async$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___29233,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27338__auto__ = (function (){var statearr_29231 = f__27337__auto__.call(null);
(statearr_29231[(6)] = c__27336__auto___29233);

return statearr_29231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___29233,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29257 = arguments.length;
switch (G__29257) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27336__auto___29314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___29314,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___29314,out){
return (function (state_29291){
var state_val_29292 = (state_29291[(1)]);
if((state_val_29292 === (7))){
var inst_29269 = (state_29291[(7)]);
var inst_29268 = (state_29291[(8)]);
var inst_29268__$1 = (state_29291[(2)]);
var inst_29269__$1 = cljs.core.nth.call(null,inst_29268__$1,(0),null);
var inst_29270 = cljs.core.nth.call(null,inst_29268__$1,(1),null);
var inst_29271 = (inst_29269__$1 == null);
var state_29291__$1 = (function (){var statearr_29293 = state_29291;
(statearr_29293[(9)] = inst_29270);

(statearr_29293[(7)] = inst_29269__$1);

(statearr_29293[(8)] = inst_29268__$1);

return statearr_29293;
})();
if(cljs.core.truth_(inst_29271)){
var statearr_29294_29318 = state_29291__$1;
(statearr_29294_29318[(1)] = (8));

} else {
var statearr_29295_29319 = state_29291__$1;
(statearr_29295_29319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (1))){
var inst_29258 = cljs.core.vec.call(null,chs);
var inst_29259 = inst_29258;
var state_29291__$1 = (function (){var statearr_29296 = state_29291;
(statearr_29296[(10)] = inst_29259);

return statearr_29296;
})();
var statearr_29297_29321 = state_29291__$1;
(statearr_29297_29321[(2)] = null);

(statearr_29297_29321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (4))){
var inst_29259 = (state_29291[(10)]);
var state_29291__$1 = state_29291;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29291__$1,(7),inst_29259);
} else {
if((state_val_29292 === (6))){
var inst_29285 = (state_29291[(2)]);
var state_29291__$1 = state_29291;
var statearr_29298_29322 = state_29291__$1;
(statearr_29298_29322[(2)] = inst_29285);

(statearr_29298_29322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (3))){
var inst_29288 = (state_29291[(2)]);
var state_29291__$1 = state_29291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29291__$1,inst_29288);
} else {
if((state_val_29292 === (2))){
var inst_29259 = (state_29291[(10)]);
var inst_29261 = cljs.core.count.call(null,inst_29259);
var inst_29262 = (inst_29261 > (0));
var state_29291__$1 = state_29291;
if(cljs.core.truth_(inst_29262)){
var statearr_29300_29323 = state_29291__$1;
(statearr_29300_29323[(1)] = (4));

} else {
var statearr_29301_29324 = state_29291__$1;
(statearr_29301_29324[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (11))){
var inst_29259 = (state_29291[(10)]);
var inst_29278 = (state_29291[(2)]);
var tmp29299 = inst_29259;
var inst_29259__$1 = tmp29299;
var state_29291__$1 = (function (){var statearr_29303 = state_29291;
(statearr_29303[(11)] = inst_29278);

(statearr_29303[(10)] = inst_29259__$1);

return statearr_29303;
})();
var statearr_29304_29325 = state_29291__$1;
(statearr_29304_29325[(2)] = null);

(statearr_29304_29325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (9))){
var inst_29269 = (state_29291[(7)]);
var state_29291__$1 = state_29291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29291__$1,(11),out,inst_29269);
} else {
if((state_val_29292 === (5))){
var inst_29283 = cljs.core.async.close_BANG_.call(null,out);
var state_29291__$1 = state_29291;
var statearr_29305_29326 = state_29291__$1;
(statearr_29305_29326[(2)] = inst_29283);

(statearr_29305_29326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (10))){
var inst_29281 = (state_29291[(2)]);
var state_29291__$1 = state_29291;
var statearr_29306_29327 = state_29291__$1;
(statearr_29306_29327[(2)] = inst_29281);

(statearr_29306_29327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (8))){
var inst_29270 = (state_29291[(9)]);
var inst_29269 = (state_29291[(7)]);
var inst_29259 = (state_29291[(10)]);
var inst_29268 = (state_29291[(8)]);
var inst_29273 = (function (){var cs = inst_29259;
var vec__29264 = inst_29268;
var v = inst_29269;
var c = inst_29270;
return ((function (cs,vec__29264,v,c,inst_29270,inst_29269,inst_29259,inst_29268,state_val_29292,c__27336__auto___29314,out){
return (function (p1__29255_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29255_SHARP_);
});
;})(cs,vec__29264,v,c,inst_29270,inst_29269,inst_29259,inst_29268,state_val_29292,c__27336__auto___29314,out))
})();
var inst_29274 = cljs.core.filterv.call(null,inst_29273,inst_29259);
var inst_29259__$1 = inst_29274;
var state_29291__$1 = (function (){var statearr_29307 = state_29291;
(statearr_29307[(10)] = inst_29259__$1);

return statearr_29307;
})();
var statearr_29308_29328 = state_29291__$1;
(statearr_29308_29328[(2)] = null);

(statearr_29308_29328[(1)] = (2));


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
});})(c__27336__auto___29314,out))
;
return ((function (switch__27198__auto__,c__27336__auto___29314,out){
return (function() {
var cljs$core$async$state_machine__27199__auto__ = null;
var cljs$core$async$state_machine__27199__auto____0 = (function (){
var statearr_29309 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29309[(0)] = cljs$core$async$state_machine__27199__auto__);

(statearr_29309[(1)] = (1));

return statearr_29309;
});
var cljs$core$async$state_machine__27199__auto____1 = (function (state_29291){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_29291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e29310){if((e29310 instanceof Object)){
var ex__27202__auto__ = e29310;
var statearr_29311_29329 = state_29291;
(statearr_29311_29329[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29330 = state_29291;
state_29291 = G__29330;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$state_machine__27199__auto__ = function(state_29291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27199__auto____1.call(this,state_29291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27199__auto____0;
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27199__auto____1;
return cljs$core$async$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___29314,out))
})();
var state__27338__auto__ = (function (){var statearr_29312 = f__27337__auto__.call(null);
(statearr_29312[(6)] = c__27336__auto___29314);

return statearr_29312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___29314,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29332 = arguments.length;
switch (G__29332) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27336__auto___29405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___29405,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___29405,out){
return (function (state_29357){
var state_val_29358 = (state_29357[(1)]);
if((state_val_29358 === (7))){
var inst_29338 = (state_29357[(7)]);
var inst_29338__$1 = (state_29357[(2)]);
var inst_29339 = (inst_29338__$1 == null);
var inst_29340 = cljs.core.not.call(null,inst_29339);
var state_29357__$1 = (function (){var statearr_29359 = state_29357;
(statearr_29359[(7)] = inst_29338__$1);

return statearr_29359;
})();
if(inst_29340){
var statearr_29360_29416 = state_29357__$1;
(statearr_29360_29416[(1)] = (8));

} else {
var statearr_29361_29417 = state_29357__$1;
(statearr_29361_29417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (1))){
var inst_29333 = (0);
var state_29357__$1 = (function (){var statearr_29364 = state_29357;
(statearr_29364[(8)] = inst_29333);

return statearr_29364;
})();
var statearr_29365_29421 = state_29357__$1;
(statearr_29365_29421[(2)] = null);

(statearr_29365_29421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (4))){
var state_29357__$1 = state_29357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29357__$1,(7),ch);
} else {
if((state_val_29358 === (6))){
var inst_29351 = (state_29357[(2)]);
var state_29357__$1 = state_29357;
var statearr_29372_29422 = state_29357__$1;
(statearr_29372_29422[(2)] = inst_29351);

(statearr_29372_29422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (3))){
var inst_29354 = (state_29357[(2)]);
var inst_29355 = cljs.core.async.close_BANG_.call(null,out);
var state_29357__$1 = (function (){var statearr_29373 = state_29357;
(statearr_29373[(9)] = inst_29354);

return statearr_29373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29357__$1,inst_29355);
} else {
if((state_val_29358 === (2))){
var inst_29333 = (state_29357[(8)]);
var inst_29335 = (inst_29333 < n);
var state_29357__$1 = state_29357;
if(cljs.core.truth_(inst_29335)){
var statearr_29374_29438 = state_29357__$1;
(statearr_29374_29438[(1)] = (4));

} else {
var statearr_29375_29439 = state_29357__$1;
(statearr_29375_29439[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (11))){
var inst_29333 = (state_29357[(8)]);
var inst_29343 = (state_29357[(2)]);
var inst_29344 = (inst_29333 + (1));
var inst_29333__$1 = inst_29344;
var state_29357__$1 = (function (){var statearr_29376 = state_29357;
(statearr_29376[(8)] = inst_29333__$1);

(statearr_29376[(10)] = inst_29343);

return statearr_29376;
})();
var statearr_29377_29440 = state_29357__$1;
(statearr_29377_29440[(2)] = null);

(statearr_29377_29440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (9))){
var state_29357__$1 = state_29357;
var statearr_29382_29441 = state_29357__$1;
(statearr_29382_29441[(2)] = null);

(statearr_29382_29441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (5))){
var state_29357__$1 = state_29357;
var statearr_29386_29442 = state_29357__$1;
(statearr_29386_29442[(2)] = null);

(statearr_29386_29442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (10))){
var inst_29348 = (state_29357[(2)]);
var state_29357__$1 = state_29357;
var statearr_29387_29443 = state_29357__$1;
(statearr_29387_29443[(2)] = inst_29348);

(statearr_29387_29443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (8))){
var inst_29338 = (state_29357[(7)]);
var state_29357__$1 = state_29357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29357__$1,(11),out,inst_29338);
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
});})(c__27336__auto___29405,out))
;
return ((function (switch__27198__auto__,c__27336__auto___29405,out){
return (function() {
var cljs$core$async$state_machine__27199__auto__ = null;
var cljs$core$async$state_machine__27199__auto____0 = (function (){
var statearr_29391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29391[(0)] = cljs$core$async$state_machine__27199__auto__);

(statearr_29391[(1)] = (1));

return statearr_29391;
});
var cljs$core$async$state_machine__27199__auto____1 = (function (state_29357){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_29357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e29392){if((e29392 instanceof Object)){
var ex__27202__auto__ = e29392;
var statearr_29393_29451 = state_29357;
(statearr_29393_29451[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29457 = state_29357;
state_29357 = G__29457;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$state_machine__27199__auto__ = function(state_29357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27199__auto____1.call(this,state_29357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27199__auto____0;
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27199__auto____1;
return cljs$core$async$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___29405,out))
})();
var state__27338__auto__ = (function (){var statearr_29395 = f__27337__auto__.call(null);
(statearr_29395[(6)] = c__27336__auto___29405);

return statearr_29395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___29405,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29468 = (function (f,ch,meta29469){
this.f = f;
this.ch = ch;
this.meta29469 = meta29469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29470,meta29469__$1){
var self__ = this;
var _29470__$1 = this;
return (new cljs.core.async.t_cljs$core$async29468(self__.f,self__.ch,meta29469__$1));
});

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29470){
var self__ = this;
var _29470__$1 = this;
return self__.meta29469;
});

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29486 = (function (f,ch,meta29469,_,fn1,meta29487){
this.f = f;
this.ch = ch;
this.meta29469 = meta29469;
this._ = _;
this.fn1 = fn1;
this.meta29487 = meta29487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29488,meta29487__$1){
var self__ = this;
var _29488__$1 = this;
return (new cljs.core.async.t_cljs$core$async29486(self__.f,self__.ch,self__.meta29469,self__._,self__.fn1,meta29487__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29488){
var self__ = this;
var _29488__$1 = this;
return self__.meta29487;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29467_SHARP_){
return f1.call(null,(((p1__29467_SHARP_ == null))?null:self__.f.call(null,p1__29467_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29486.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29469","meta29469",768769113,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29468","cljs.core.async/t_cljs$core$async29468",-1597406639,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29487","meta29487",1684984506,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29486";

cljs.core.async.t_cljs$core$async29486.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29486");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29486.
 */
cljs.core.async.__GT_t_cljs$core$async29486 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29486(f__$1,ch__$1,meta29469__$1,___$2,fn1__$1,meta29487){
return (new cljs.core.async.t_cljs$core$async29486(f__$1,ch__$1,meta29469__$1,___$2,fn1__$1,meta29487));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29486(self__.f,self__.ch,self__.meta29469,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29469","meta29469",768769113,null)], null);
});

cljs.core.async.t_cljs$core$async29468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29468";

cljs.core.async.t_cljs$core$async29468.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29468");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29468.
 */
cljs.core.async.__GT_t_cljs$core$async29468 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29468(f__$1,ch__$1,meta29469){
return (new cljs.core.async.t_cljs$core$async29468(f__$1,ch__$1,meta29469));
});

}

return (new cljs.core.async.t_cljs$core$async29468(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29552 = (function (f,ch,meta29553){
this.f = f;
this.ch = ch;
this.meta29553 = meta29553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29554,meta29553__$1){
var self__ = this;
var _29554__$1 = this;
return (new cljs.core.async.t_cljs$core$async29552(self__.f,self__.ch,meta29553__$1));
});

cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29554){
var self__ = this;
var _29554__$1 = this;
return self__.meta29553;
});

cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29553","meta29553",1976954679,null)], null);
});

cljs.core.async.t_cljs$core$async29552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29552";

cljs.core.async.t_cljs$core$async29552.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29552");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29552.
 */
cljs.core.async.__GT_t_cljs$core$async29552 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29552(f__$1,ch__$1,meta29553){
return (new cljs.core.async.t_cljs$core$async29552(f__$1,ch__$1,meta29553));
});

}

return (new cljs.core.async.t_cljs$core$async29552(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29562 = (function (p,ch,meta29563){
this.p = p;
this.ch = ch;
this.meta29563 = meta29563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29564,meta29563__$1){
var self__ = this;
var _29564__$1 = this;
return (new cljs.core.async.t_cljs$core$async29562(self__.p,self__.ch,meta29563__$1));
});

cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29564){
var self__ = this;
var _29564__$1 = this;
return self__.meta29563;
});

cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29563","meta29563",-1464340416,null)], null);
});

cljs.core.async.t_cljs$core$async29562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29562";

cljs.core.async.t_cljs$core$async29562.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29562");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29562.
 */
cljs.core.async.__GT_t_cljs$core$async29562 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29562(p__$1,ch__$1,meta29563){
return (new cljs.core.async.t_cljs$core$async29562(p__$1,ch__$1,meta29563));
});

}

return (new cljs.core.async.t_cljs$core$async29562(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29569 = arguments.length;
switch (G__29569) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27336__auto___29614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___29614,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___29614,out){
return (function (state_29592){
var state_val_29593 = (state_29592[(1)]);
if((state_val_29593 === (7))){
var inst_29588 = (state_29592[(2)]);
var state_29592__$1 = state_29592;
var statearr_29594_29617 = state_29592__$1;
(statearr_29594_29617[(2)] = inst_29588);

(statearr_29594_29617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (1))){
var state_29592__$1 = state_29592;
var statearr_29595_29618 = state_29592__$1;
(statearr_29595_29618[(2)] = null);

(statearr_29595_29618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (4))){
var inst_29572 = (state_29592[(7)]);
var inst_29572__$1 = (state_29592[(2)]);
var inst_29573 = (inst_29572__$1 == null);
var state_29592__$1 = (function (){var statearr_29596 = state_29592;
(statearr_29596[(7)] = inst_29572__$1);

return statearr_29596;
})();
if(cljs.core.truth_(inst_29573)){
var statearr_29597_29620 = state_29592__$1;
(statearr_29597_29620[(1)] = (5));

} else {
var statearr_29598_29621 = state_29592__$1;
(statearr_29598_29621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (6))){
var inst_29572 = (state_29592[(7)]);
var inst_29579 = p.call(null,inst_29572);
var state_29592__$1 = state_29592;
if(cljs.core.truth_(inst_29579)){
var statearr_29599_29622 = state_29592__$1;
(statearr_29599_29622[(1)] = (8));

} else {
var statearr_29600_29623 = state_29592__$1;
(statearr_29600_29623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (3))){
var inst_29590 = (state_29592[(2)]);
var state_29592__$1 = state_29592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29592__$1,inst_29590);
} else {
if((state_val_29593 === (2))){
var state_29592__$1 = state_29592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29592__$1,(4),ch);
} else {
if((state_val_29593 === (11))){
var inst_29582 = (state_29592[(2)]);
var state_29592__$1 = state_29592;
var statearr_29601_29626 = state_29592__$1;
(statearr_29601_29626[(2)] = inst_29582);

(statearr_29601_29626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (9))){
var state_29592__$1 = state_29592;
var statearr_29602_29627 = state_29592__$1;
(statearr_29602_29627[(2)] = null);

(statearr_29602_29627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (5))){
var inst_29577 = cljs.core.async.close_BANG_.call(null,out);
var state_29592__$1 = state_29592;
var statearr_29603_29629 = state_29592__$1;
(statearr_29603_29629[(2)] = inst_29577);

(statearr_29603_29629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (10))){
var inst_29585 = (state_29592[(2)]);
var state_29592__$1 = (function (){var statearr_29604 = state_29592;
(statearr_29604[(8)] = inst_29585);

return statearr_29604;
})();
var statearr_29607_29630 = state_29592__$1;
(statearr_29607_29630[(2)] = null);

(statearr_29607_29630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29593 === (8))){
var inst_29572 = (state_29592[(7)]);
var state_29592__$1 = state_29592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29592__$1,(11),out,inst_29572);
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
});})(c__27336__auto___29614,out))
;
return ((function (switch__27198__auto__,c__27336__auto___29614,out){
return (function() {
var cljs$core$async$state_machine__27199__auto__ = null;
var cljs$core$async$state_machine__27199__auto____0 = (function (){
var statearr_29608 = [null,null,null,null,null,null,null,null,null];
(statearr_29608[(0)] = cljs$core$async$state_machine__27199__auto__);

(statearr_29608[(1)] = (1));

return statearr_29608;
});
var cljs$core$async$state_machine__27199__auto____1 = (function (state_29592){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_29592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e29609){if((e29609 instanceof Object)){
var ex__27202__auto__ = e29609;
var statearr_29610_29631 = state_29592;
(statearr_29610_29631[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29632 = state_29592;
state_29592 = G__29632;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$state_machine__27199__auto__ = function(state_29592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27199__auto____1.call(this,state_29592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27199__auto____0;
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27199__auto____1;
return cljs$core$async$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___29614,out))
})();
var state__27338__auto__ = (function (){var statearr_29612 = f__27337__auto__.call(null);
(statearr_29612[(6)] = c__27336__auto___29614);

return statearr_29612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___29614,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29636 = arguments.length;
switch (G__29636) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto__){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto__){
return (function (state_29706){
var state_val_29707 = (state_29706[(1)]);
if((state_val_29707 === (7))){
var inst_29702 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29727_29780 = state_29706__$1;
(statearr_29727_29780[(2)] = inst_29702);

(statearr_29727_29780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (20))){
var inst_29672 = (state_29706[(7)]);
var inst_29683 = (state_29706[(2)]);
var inst_29684 = cljs.core.next.call(null,inst_29672);
var inst_29658 = inst_29684;
var inst_29659 = null;
var inst_29660 = (0);
var inst_29661 = (0);
var state_29706__$1 = (function (){var statearr_29728 = state_29706;
(statearr_29728[(8)] = inst_29660);

(statearr_29728[(9)] = inst_29661);

(statearr_29728[(10)] = inst_29683);

(statearr_29728[(11)] = inst_29658);

(statearr_29728[(12)] = inst_29659);

return statearr_29728;
})();
var statearr_29736_29781 = state_29706__$1;
(statearr_29736_29781[(2)] = null);

(statearr_29736_29781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (1))){
var state_29706__$1 = state_29706;
var statearr_29737_29782 = state_29706__$1;
(statearr_29737_29782[(2)] = null);

(statearr_29737_29782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (4))){
var inst_29647 = (state_29706[(13)]);
var inst_29647__$1 = (state_29706[(2)]);
var inst_29648 = (inst_29647__$1 == null);
var state_29706__$1 = (function (){var statearr_29741 = state_29706;
(statearr_29741[(13)] = inst_29647__$1);

return statearr_29741;
})();
if(cljs.core.truth_(inst_29648)){
var statearr_29742_29783 = state_29706__$1;
(statearr_29742_29783[(1)] = (5));

} else {
var statearr_29743_29784 = state_29706__$1;
(statearr_29743_29784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (15))){
var state_29706__$1 = state_29706;
var statearr_29747_29785 = state_29706__$1;
(statearr_29747_29785[(2)] = null);

(statearr_29747_29785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (21))){
var state_29706__$1 = state_29706;
var statearr_29748_29786 = state_29706__$1;
(statearr_29748_29786[(2)] = null);

(statearr_29748_29786[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (13))){
var inst_29660 = (state_29706[(8)]);
var inst_29661 = (state_29706[(9)]);
var inst_29658 = (state_29706[(11)]);
var inst_29659 = (state_29706[(12)]);
var inst_29668 = (state_29706[(2)]);
var inst_29669 = (inst_29661 + (1));
var tmp29744 = inst_29660;
var tmp29745 = inst_29658;
var tmp29746 = inst_29659;
var inst_29658__$1 = tmp29745;
var inst_29659__$1 = tmp29746;
var inst_29660__$1 = tmp29744;
var inst_29661__$1 = inst_29669;
var state_29706__$1 = (function (){var statearr_29749 = state_29706;
(statearr_29749[(8)] = inst_29660__$1);

(statearr_29749[(9)] = inst_29661__$1);

(statearr_29749[(11)] = inst_29658__$1);

(statearr_29749[(14)] = inst_29668);

(statearr_29749[(12)] = inst_29659__$1);

return statearr_29749;
})();
var statearr_29750_29787 = state_29706__$1;
(statearr_29750_29787[(2)] = null);

(statearr_29750_29787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (22))){
var state_29706__$1 = state_29706;
var statearr_29755_29788 = state_29706__$1;
(statearr_29755_29788[(2)] = null);

(statearr_29755_29788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (6))){
var inst_29647 = (state_29706[(13)]);
var inst_29656 = f.call(null,inst_29647);
var inst_29657 = cljs.core.seq.call(null,inst_29656);
var inst_29658 = inst_29657;
var inst_29659 = null;
var inst_29660 = (0);
var inst_29661 = (0);
var state_29706__$1 = (function (){var statearr_29756 = state_29706;
(statearr_29756[(8)] = inst_29660);

(statearr_29756[(9)] = inst_29661);

(statearr_29756[(11)] = inst_29658);

(statearr_29756[(12)] = inst_29659);

return statearr_29756;
})();
var statearr_29757_29789 = state_29706__$1;
(statearr_29757_29789[(2)] = null);

(statearr_29757_29789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (17))){
var inst_29672 = (state_29706[(7)]);
var inst_29676 = cljs.core.chunk_first.call(null,inst_29672);
var inst_29677 = cljs.core.chunk_rest.call(null,inst_29672);
var inst_29678 = cljs.core.count.call(null,inst_29676);
var inst_29658 = inst_29677;
var inst_29659 = inst_29676;
var inst_29660 = inst_29678;
var inst_29661 = (0);
var state_29706__$1 = (function (){var statearr_29758 = state_29706;
(statearr_29758[(8)] = inst_29660);

(statearr_29758[(9)] = inst_29661);

(statearr_29758[(11)] = inst_29658);

(statearr_29758[(12)] = inst_29659);

return statearr_29758;
})();
var statearr_29759_29794 = state_29706__$1;
(statearr_29759_29794[(2)] = null);

(statearr_29759_29794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (3))){
var inst_29704 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29706__$1,inst_29704);
} else {
if((state_val_29707 === (12))){
var inst_29692 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29760_29795 = state_29706__$1;
(statearr_29760_29795[(2)] = inst_29692);

(statearr_29760_29795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (2))){
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29706__$1,(4),in$);
} else {
if((state_val_29707 === (23))){
var inst_29700 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29761_29796 = state_29706__$1;
(statearr_29761_29796[(2)] = inst_29700);

(statearr_29761_29796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (19))){
var inst_29687 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29762_29797 = state_29706__$1;
(statearr_29762_29797[(2)] = inst_29687);

(statearr_29762_29797[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (11))){
var inst_29658 = (state_29706[(11)]);
var inst_29672 = (state_29706[(7)]);
var inst_29672__$1 = cljs.core.seq.call(null,inst_29658);
var state_29706__$1 = (function (){var statearr_29763 = state_29706;
(statearr_29763[(7)] = inst_29672__$1);

return statearr_29763;
})();
if(inst_29672__$1){
var statearr_29764_29802 = state_29706__$1;
(statearr_29764_29802[(1)] = (14));

} else {
var statearr_29765_29803 = state_29706__$1;
(statearr_29765_29803[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (9))){
var inst_29694 = (state_29706[(2)]);
var inst_29695 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29706__$1 = (function (){var statearr_29766 = state_29706;
(statearr_29766[(15)] = inst_29694);

return statearr_29766;
})();
if(cljs.core.truth_(inst_29695)){
var statearr_29767_29804 = state_29706__$1;
(statearr_29767_29804[(1)] = (21));

} else {
var statearr_29768_29805 = state_29706__$1;
(statearr_29768_29805[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (5))){
var inst_29650 = cljs.core.async.close_BANG_.call(null,out);
var state_29706__$1 = state_29706;
var statearr_29770_29806 = state_29706__$1;
(statearr_29770_29806[(2)] = inst_29650);

(statearr_29770_29806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (14))){
var inst_29672 = (state_29706[(7)]);
var inst_29674 = cljs.core.chunked_seq_QMARK_.call(null,inst_29672);
var state_29706__$1 = state_29706;
if(inst_29674){
var statearr_29771_29807 = state_29706__$1;
(statearr_29771_29807[(1)] = (17));

} else {
var statearr_29772_29808 = state_29706__$1;
(statearr_29772_29808[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (16))){
var inst_29690 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29773_29809 = state_29706__$1;
(statearr_29773_29809[(2)] = inst_29690);

(statearr_29773_29809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (10))){
var inst_29661 = (state_29706[(9)]);
var inst_29659 = (state_29706[(12)]);
var inst_29666 = cljs.core._nth.call(null,inst_29659,inst_29661);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29706__$1,(13),out,inst_29666);
} else {
if((state_val_29707 === (18))){
var inst_29672 = (state_29706[(7)]);
var inst_29681 = cljs.core.first.call(null,inst_29672);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29706__$1,(20),out,inst_29681);
} else {
if((state_val_29707 === (8))){
var inst_29660 = (state_29706[(8)]);
var inst_29661 = (state_29706[(9)]);
var inst_29663 = (inst_29661 < inst_29660);
var inst_29664 = inst_29663;
var state_29706__$1 = state_29706;
if(cljs.core.truth_(inst_29664)){
var statearr_29774_29810 = state_29706__$1;
(statearr_29774_29810[(1)] = (10));

} else {
var statearr_29775_29811 = state_29706__$1;
(statearr_29775_29811[(1)] = (11));

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
});})(c__27336__auto__))
;
return ((function (switch__27198__auto__,c__27336__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27199__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27199__auto____0 = (function (){
var statearr_29776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29776[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27199__auto__);

(statearr_29776[(1)] = (1));

return statearr_29776;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27199__auto____1 = (function (state_29706){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_29706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e29777){if((e29777 instanceof Object)){
var ex__27202__auto__ = e29777;
var statearr_29778_29812 = state_29706;
(statearr_29778_29812[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29813 = state_29706;
state_29706 = G__29813;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27199__auto__ = function(state_29706){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27199__auto____1.call(this,state_29706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27199__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27199__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto__))
})();
var state__27338__auto__ = (function (){var statearr_29779 = f__27337__auto__.call(null);
(statearr_29779[(6)] = c__27336__auto__);

return statearr_29779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto__))
);

return c__27336__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29815 = arguments.length;
switch (G__29815) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29818 = arguments.length;
switch (G__29818) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29821 = arguments.length;
switch (G__29821) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27336__auto___29872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___29872,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___29872,out){
return (function (state_29845){
var state_val_29846 = (state_29845[(1)]);
if((state_val_29846 === (7))){
var inst_29840 = (state_29845[(2)]);
var state_29845__$1 = state_29845;
var statearr_29847_29876 = state_29845__$1;
(statearr_29847_29876[(2)] = inst_29840);

(statearr_29847_29876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (1))){
var inst_29822 = null;
var state_29845__$1 = (function (){var statearr_29848 = state_29845;
(statearr_29848[(7)] = inst_29822);

return statearr_29848;
})();
var statearr_29849_29877 = state_29845__$1;
(statearr_29849_29877[(2)] = null);

(statearr_29849_29877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (4))){
var inst_29825 = (state_29845[(8)]);
var inst_29825__$1 = (state_29845[(2)]);
var inst_29826 = (inst_29825__$1 == null);
var inst_29827 = cljs.core.not.call(null,inst_29826);
var state_29845__$1 = (function (){var statearr_29850 = state_29845;
(statearr_29850[(8)] = inst_29825__$1);

return statearr_29850;
})();
if(inst_29827){
var statearr_29851_29878 = state_29845__$1;
(statearr_29851_29878[(1)] = (5));

} else {
var statearr_29852_29879 = state_29845__$1;
(statearr_29852_29879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (6))){
var state_29845__$1 = state_29845;
var statearr_29853_29880 = state_29845__$1;
(statearr_29853_29880[(2)] = null);

(statearr_29853_29880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (3))){
var inst_29842 = (state_29845[(2)]);
var inst_29843 = cljs.core.async.close_BANG_.call(null,out);
var state_29845__$1 = (function (){var statearr_29854 = state_29845;
(statearr_29854[(9)] = inst_29842);

return statearr_29854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29845__$1,inst_29843);
} else {
if((state_val_29846 === (2))){
var state_29845__$1 = state_29845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29845__$1,(4),ch);
} else {
if((state_val_29846 === (11))){
var inst_29825 = (state_29845[(8)]);
var inst_29834 = (state_29845[(2)]);
var inst_29822 = inst_29825;
var state_29845__$1 = (function (){var statearr_29855 = state_29845;
(statearr_29855[(7)] = inst_29822);

(statearr_29855[(10)] = inst_29834);

return statearr_29855;
})();
var statearr_29856_29882 = state_29845__$1;
(statearr_29856_29882[(2)] = null);

(statearr_29856_29882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (9))){
var inst_29825 = (state_29845[(8)]);
var state_29845__$1 = state_29845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29845__$1,(11),out,inst_29825);
} else {
if((state_val_29846 === (5))){
var inst_29822 = (state_29845[(7)]);
var inst_29825 = (state_29845[(8)]);
var inst_29829 = cljs.core._EQ_.call(null,inst_29825,inst_29822);
var state_29845__$1 = state_29845;
if(inst_29829){
var statearr_29858_29883 = state_29845__$1;
(statearr_29858_29883[(1)] = (8));

} else {
var statearr_29859_29884 = state_29845__$1;
(statearr_29859_29884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (10))){
var inst_29837 = (state_29845[(2)]);
var state_29845__$1 = state_29845;
var statearr_29860_29885 = state_29845__$1;
(statearr_29860_29885[(2)] = inst_29837);

(statearr_29860_29885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (8))){
var inst_29822 = (state_29845[(7)]);
var tmp29857 = inst_29822;
var inst_29822__$1 = tmp29857;
var state_29845__$1 = (function (){var statearr_29861 = state_29845;
(statearr_29861[(7)] = inst_29822__$1);

return statearr_29861;
})();
var statearr_29862_29886 = state_29845__$1;
(statearr_29862_29886[(2)] = null);

(statearr_29862_29886[(1)] = (2));


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
});})(c__27336__auto___29872,out))
;
return ((function (switch__27198__auto__,c__27336__auto___29872,out){
return (function() {
var cljs$core$async$state_machine__27199__auto__ = null;
var cljs$core$async$state_machine__27199__auto____0 = (function (){
var statearr_29863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29863[(0)] = cljs$core$async$state_machine__27199__auto__);

(statearr_29863[(1)] = (1));

return statearr_29863;
});
var cljs$core$async$state_machine__27199__auto____1 = (function (state_29845){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_29845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e29864){if((e29864 instanceof Object)){
var ex__27202__auto__ = e29864;
var statearr_29865_29887 = state_29845;
(statearr_29865_29887[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29888 = state_29845;
state_29845 = G__29888;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$state_machine__27199__auto__ = function(state_29845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27199__auto____1.call(this,state_29845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27199__auto____0;
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27199__auto____1;
return cljs$core$async$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___29872,out))
})();
var state__27338__auto__ = (function (){var statearr_29866 = f__27337__auto__.call(null);
(statearr_29866[(6)] = c__27336__auto___29872);

return statearr_29866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___29872,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29890 = arguments.length;
switch (G__29890) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27336__auto___29975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___29975,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___29975,out){
return (function (state_29932){
var state_val_29933 = (state_29932[(1)]);
if((state_val_29933 === (7))){
var inst_29928 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
var statearr_29935_29976 = state_29932__$1;
(statearr_29935_29976[(2)] = inst_29928);

(statearr_29935_29976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (1))){
var inst_29891 = (new Array(n));
var inst_29892 = inst_29891;
var inst_29893 = (0);
var state_29932__$1 = (function (){var statearr_29938 = state_29932;
(statearr_29938[(7)] = inst_29893);

(statearr_29938[(8)] = inst_29892);

return statearr_29938;
})();
var statearr_29939_29977 = state_29932__$1;
(statearr_29939_29977[(2)] = null);

(statearr_29939_29977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (4))){
var inst_29896 = (state_29932[(9)]);
var inst_29896__$1 = (state_29932[(2)]);
var inst_29897 = (inst_29896__$1 == null);
var inst_29898 = cljs.core.not.call(null,inst_29897);
var state_29932__$1 = (function (){var statearr_29940 = state_29932;
(statearr_29940[(9)] = inst_29896__$1);

return statearr_29940;
})();
if(inst_29898){
var statearr_29941_29978 = state_29932__$1;
(statearr_29941_29978[(1)] = (5));

} else {
var statearr_29942_29979 = state_29932__$1;
(statearr_29942_29979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (15))){
var inst_29922 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
var statearr_29943_29980 = state_29932__$1;
(statearr_29943_29980[(2)] = inst_29922);

(statearr_29943_29980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (13))){
var state_29932__$1 = state_29932;
var statearr_29944_29981 = state_29932__$1;
(statearr_29944_29981[(2)] = null);

(statearr_29944_29981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (6))){
var inst_29893 = (state_29932[(7)]);
var inst_29917 = (inst_29893 > (0));
var state_29932__$1 = state_29932;
if(cljs.core.truth_(inst_29917)){
var statearr_29948_29982 = state_29932__$1;
(statearr_29948_29982[(1)] = (12));

} else {
var statearr_29949_29983 = state_29932__$1;
(statearr_29949_29983[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (3))){
var inst_29930 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29932__$1,inst_29930);
} else {
if((state_val_29933 === (12))){
var inst_29892 = (state_29932[(8)]);
var inst_29920 = cljs.core.vec.call(null,inst_29892);
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29932__$1,(15),out,inst_29920);
} else {
if((state_val_29933 === (2))){
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29932__$1,(4),ch);
} else {
if((state_val_29933 === (11))){
var inst_29908 = (state_29932[(2)]);
var inst_29910 = (new Array(n));
var inst_29892 = inst_29910;
var inst_29893 = (0);
var state_29932__$1 = (function (){var statearr_29950 = state_29932;
(statearr_29950[(10)] = inst_29908);

(statearr_29950[(7)] = inst_29893);

(statearr_29950[(8)] = inst_29892);

return statearr_29950;
})();
var statearr_29951_29984 = state_29932__$1;
(statearr_29951_29984[(2)] = null);

(statearr_29951_29984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (9))){
var inst_29892 = (state_29932[(8)]);
var inst_29906 = cljs.core.vec.call(null,inst_29892);
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29932__$1,(11),out,inst_29906);
} else {
if((state_val_29933 === (5))){
var inst_29896 = (state_29932[(9)]);
var inst_29901 = (state_29932[(11)]);
var inst_29893 = (state_29932[(7)]);
var inst_29892 = (state_29932[(8)]);
var inst_29900 = (inst_29892[inst_29893] = inst_29896);
var inst_29901__$1 = (inst_29893 + (1));
var inst_29902 = (inst_29901__$1 < n);
var state_29932__$1 = (function (){var statearr_29952 = state_29932;
(statearr_29952[(11)] = inst_29901__$1);

(statearr_29952[(12)] = inst_29900);

return statearr_29952;
})();
if(cljs.core.truth_(inst_29902)){
var statearr_29953_29985 = state_29932__$1;
(statearr_29953_29985[(1)] = (8));

} else {
var statearr_29954_29986 = state_29932__$1;
(statearr_29954_29986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (14))){
var inst_29925 = (state_29932[(2)]);
var inst_29926 = cljs.core.async.close_BANG_.call(null,out);
var state_29932__$1 = (function (){var statearr_29956 = state_29932;
(statearr_29956[(13)] = inst_29925);

return statearr_29956;
})();
var statearr_29957_29987 = state_29932__$1;
(statearr_29957_29987[(2)] = inst_29926);

(statearr_29957_29987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (10))){
var inst_29913 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
var statearr_29958_29988 = state_29932__$1;
(statearr_29958_29988[(2)] = inst_29913);

(statearr_29958_29988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (8))){
var inst_29901 = (state_29932[(11)]);
var inst_29892 = (state_29932[(8)]);
var tmp29955 = inst_29892;
var inst_29892__$1 = tmp29955;
var inst_29893 = inst_29901;
var state_29932__$1 = (function (){var statearr_29963 = state_29932;
(statearr_29963[(7)] = inst_29893);

(statearr_29963[(8)] = inst_29892__$1);

return statearr_29963;
})();
var statearr_29964_29989 = state_29932__$1;
(statearr_29964_29989[(2)] = null);

(statearr_29964_29989[(1)] = (2));


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
});})(c__27336__auto___29975,out))
;
return ((function (switch__27198__auto__,c__27336__auto___29975,out){
return (function() {
var cljs$core$async$state_machine__27199__auto__ = null;
var cljs$core$async$state_machine__27199__auto____0 = (function (){
var statearr_29965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29965[(0)] = cljs$core$async$state_machine__27199__auto__);

(statearr_29965[(1)] = (1));

return statearr_29965;
});
var cljs$core$async$state_machine__27199__auto____1 = (function (state_29932){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_29932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e29966){if((e29966 instanceof Object)){
var ex__27202__auto__ = e29966;
var statearr_29967_29990 = state_29932;
(statearr_29967_29990[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29991 = state_29932;
state_29932 = G__29991;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$state_machine__27199__auto__ = function(state_29932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27199__auto____1.call(this,state_29932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27199__auto____0;
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27199__auto____1;
return cljs$core$async$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___29975,out))
})();
var state__27338__auto__ = (function (){var statearr_29972 = f__27337__auto__.call(null);
(statearr_29972[(6)] = c__27336__auto___29975);

return statearr_29972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___29975,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29993 = arguments.length;
switch (G__29993) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27336__auto___30069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27336__auto___30069,out){
return (function (){
var f__27337__auto__ = (function (){var switch__27198__auto__ = ((function (c__27336__auto___30069,out){
return (function (state_30035){
var state_val_30036 = (state_30035[(1)]);
if((state_val_30036 === (7))){
var inst_30031 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
var statearr_30039_30070 = state_30035__$1;
(statearr_30039_30070[(2)] = inst_30031);

(statearr_30039_30070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (1))){
var inst_29994 = [];
var inst_29995 = inst_29994;
var inst_29996 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30035__$1 = (function (){var statearr_30040 = state_30035;
(statearr_30040[(7)] = inst_29996);

(statearr_30040[(8)] = inst_29995);

return statearr_30040;
})();
var statearr_30041_30071 = state_30035__$1;
(statearr_30041_30071[(2)] = null);

(statearr_30041_30071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (4))){
var inst_29999 = (state_30035[(9)]);
var inst_29999__$1 = (state_30035[(2)]);
var inst_30000 = (inst_29999__$1 == null);
var inst_30001 = cljs.core.not.call(null,inst_30000);
var state_30035__$1 = (function (){var statearr_30045 = state_30035;
(statearr_30045[(9)] = inst_29999__$1);

return statearr_30045;
})();
if(inst_30001){
var statearr_30046_30072 = state_30035__$1;
(statearr_30046_30072[(1)] = (5));

} else {
var statearr_30047_30073 = state_30035__$1;
(statearr_30047_30073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (15))){
var inst_30025 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
var statearr_30048_30074 = state_30035__$1;
(statearr_30048_30074[(2)] = inst_30025);

(statearr_30048_30074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (13))){
var state_30035__$1 = state_30035;
var statearr_30049_30075 = state_30035__$1;
(statearr_30049_30075[(2)] = null);

(statearr_30049_30075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (6))){
var inst_29995 = (state_30035[(8)]);
var inst_30020 = inst_29995.length;
var inst_30021 = (inst_30020 > (0));
var state_30035__$1 = state_30035;
if(cljs.core.truth_(inst_30021)){
var statearr_30050_30078 = state_30035__$1;
(statearr_30050_30078[(1)] = (12));

} else {
var statearr_30051_30079 = state_30035__$1;
(statearr_30051_30079[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (3))){
var inst_30033 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30035__$1,inst_30033);
} else {
if((state_val_30036 === (12))){
var inst_29995 = (state_30035[(8)]);
var inst_30023 = cljs.core.vec.call(null,inst_29995);
var state_30035__$1 = state_30035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30035__$1,(15),out,inst_30023);
} else {
if((state_val_30036 === (2))){
var state_30035__$1 = state_30035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30035__$1,(4),ch);
} else {
if((state_val_30036 === (11))){
var inst_29999 = (state_30035[(9)]);
var inst_30003 = (state_30035[(10)]);
var inst_30013 = (state_30035[(2)]);
var inst_30014 = [];
var inst_30015 = inst_30014.push(inst_29999);
var inst_29995 = inst_30014;
var inst_29996 = inst_30003;
var state_30035__$1 = (function (){var statearr_30052 = state_30035;
(statearr_30052[(11)] = inst_30015);

(statearr_30052[(7)] = inst_29996);

(statearr_30052[(8)] = inst_29995);

(statearr_30052[(12)] = inst_30013);

return statearr_30052;
})();
var statearr_30053_30082 = state_30035__$1;
(statearr_30053_30082[(2)] = null);

(statearr_30053_30082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (9))){
var inst_29995 = (state_30035[(8)]);
var inst_30011 = cljs.core.vec.call(null,inst_29995);
var state_30035__$1 = state_30035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30035__$1,(11),out,inst_30011);
} else {
if((state_val_30036 === (5))){
var inst_29996 = (state_30035[(7)]);
var inst_29999 = (state_30035[(9)]);
var inst_30003 = (state_30035[(10)]);
var inst_30003__$1 = f.call(null,inst_29999);
var inst_30004 = cljs.core._EQ_.call(null,inst_30003__$1,inst_29996);
var inst_30005 = cljs.core.keyword_identical_QMARK_.call(null,inst_29996,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30006 = ((inst_30004) || (inst_30005));
var state_30035__$1 = (function (){var statearr_30054 = state_30035;
(statearr_30054[(10)] = inst_30003__$1);

return statearr_30054;
})();
if(cljs.core.truth_(inst_30006)){
var statearr_30055_30083 = state_30035__$1;
(statearr_30055_30083[(1)] = (8));

} else {
var statearr_30056_30084 = state_30035__$1;
(statearr_30056_30084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (14))){
var inst_30028 = (state_30035[(2)]);
var inst_30029 = cljs.core.async.close_BANG_.call(null,out);
var state_30035__$1 = (function (){var statearr_30058 = state_30035;
(statearr_30058[(13)] = inst_30028);

return statearr_30058;
})();
var statearr_30059_30085 = state_30035__$1;
(statearr_30059_30085[(2)] = inst_30029);

(statearr_30059_30085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (10))){
var inst_30018 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
var statearr_30060_30086 = state_30035__$1;
(statearr_30060_30086[(2)] = inst_30018);

(statearr_30060_30086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (8))){
var inst_29999 = (state_30035[(9)]);
var inst_29995 = (state_30035[(8)]);
var inst_30003 = (state_30035[(10)]);
var inst_30008 = inst_29995.push(inst_29999);
var tmp30057 = inst_29995;
var inst_29995__$1 = tmp30057;
var inst_29996 = inst_30003;
var state_30035__$1 = (function (){var statearr_30061 = state_30035;
(statearr_30061[(7)] = inst_29996);

(statearr_30061[(8)] = inst_29995__$1);

(statearr_30061[(14)] = inst_30008);

return statearr_30061;
})();
var statearr_30062_30087 = state_30035__$1;
(statearr_30062_30087[(2)] = null);

(statearr_30062_30087[(1)] = (2));


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
});})(c__27336__auto___30069,out))
;
return ((function (switch__27198__auto__,c__27336__auto___30069,out){
return (function() {
var cljs$core$async$state_machine__27199__auto__ = null;
var cljs$core$async$state_machine__27199__auto____0 = (function (){
var statearr_30063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30063[(0)] = cljs$core$async$state_machine__27199__auto__);

(statearr_30063[(1)] = (1));

return statearr_30063;
});
var cljs$core$async$state_machine__27199__auto____1 = (function (state_30035){
while(true){
var ret_value__27200__auto__ = (function (){try{while(true){
var result__27201__auto__ = switch__27198__auto__.call(null,state_30035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27201__auto__;
}
break;
}
}catch (e30064){if((e30064 instanceof Object)){
var ex__27202__auto__ = e30064;
var statearr_30065_30088 = state_30035;
(statearr_30065_30088[(5)] = ex__27202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30089 = state_30035;
state_30035 = G__30089;
continue;
} else {
return ret_value__27200__auto__;
}
break;
}
});
cljs$core$async$state_machine__27199__auto__ = function(state_30035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27199__auto____1.call(this,state_30035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27199__auto____0;
cljs$core$async$state_machine__27199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27199__auto____1;
return cljs$core$async$state_machine__27199__auto__;
})()
;})(switch__27198__auto__,c__27336__auto___30069,out))
})();
var state__27338__auto__ = (function (){var statearr_30066 = f__27337__auto__.call(null);
(statearr_30066[(6)] = c__27336__auto___30069);

return statearr_30066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27338__auto__);
});})(c__27336__auto___30069,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1539633381819
