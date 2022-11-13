!function(){"use strict";function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function il(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&il(e.prototype,t),n&&il(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)})(e)}function Dg(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ve(e)););return e}function we(){return we="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,n,r){var i=Dg(t,n);if(i){var a=Object.getOwnPropertyDescriptor(i,n);return a.get?a.get.call(arguments.length<3?t:r):a.value}},we.apply(this,arguments)}function _r(e,t){return(_r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r})(e,t)}function z(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_r(e,t)}function al(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _i(e){return(_i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function ot(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _g(e,t){if(t&&("object"===_i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ot(e)}function W(e){var t=al();return function(){var i,r=ve(e);if(t){var a=ve(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return _g(this,i)}}function Ya(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ei(e,t){if(e){if("string"==typeof e)return Ya(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ya(e,t)}}function Pe(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Ei(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,u=l},f:function(){try{!a&&null!=n.return&&n.return()}finally{if(o)throw u}}}}function Mn(e,t){return function ol(e){if(Array.isArray(e))return e}(e)||function Eg(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,u,r=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(s){a=!0,u=s}finally{try{!i&&null!=n.return&&n.return()}finally{if(a)throw u}}return r}}(e,t)||Ei(e,t)||function ul(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e){return function bg(e){if(Array.isArray(e))return Ya(e)}(e)||function sl(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Ei(e)||function Sg(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function gt(e,t,n){return(gt=al()?Reflect.construct.bind():function(i,a,o){var u=[null];u.push.apply(u,a);var l=new(Function.bind.apply(i,u));return o&&_r(l,o.prototype),l}).apply(null,arguments)}function Fe(e){var t="function"==typeof Map?new Map:void 0;return Fe=function(r){if(null===r||!function Ig(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(r))return r;if("function"!=typeof r)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return gt(r,arguments,ve(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),_r(i,r)},Fe(e)}function be(e){return"function"==typeof e}function ll(e){var n=e(function(i){Error.call(i),i.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Ja=ll(function(e){return function(n){e(this),this.message=n?"".concat(n.length," errors occurred during unsubscription:\n").concat(n.map(function(r,i){return"".concat(i+1,") ").concat(r.toString())}).join("\n  ")):"",this.name="UnsubscriptionError",this.errors=n}});function Xa(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var e,dn=function(){function e(t){g(this,e),this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return m(e,[{key:"unsubscribe",value:function(){var n;if(!this.closed){this.closed=!0;var r=this._parentage;if(r)if(this._parentage=null,Array.isArray(r)){var a,i=Pe(r);try{for(i.s();!(a=i.n()).done;)a.value.remove(this)}catch(d){i.e(d)}finally{i.f()}}else r.remove(this);var u=this.initialTeardown;if(be(u))try{u()}catch(d){n=d instanceof Ja?d.errors:[d]}var s=this._finalizers;if(s){this._finalizers=null;var c,l=Pe(s);try{for(l.s();!(c=l.n()).done;){var f=c.value;try{dl(f)}catch(d){n=null!=n?n:[],d instanceof Ja?n=[].concat(Ce(n),Ce(d.errors)):n.push(d)}}}catch(d){l.e(d)}finally{l.f()}}if(n)throw new Ja(n)}}},{key:"add",value:function(n){var r;if(n&&n!==this)if(this.closed)dl(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(n)}}},{key:"_hasParent",value:function(n){var r=this._parentage;return r===n||Array.isArray(r)&&r.includes(n)}},{key:"_addParent",value:function(n){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(n),r):r?[r,n]:n}},{key:"_removeParent",value:function(n){var r=this._parentage;r===n?this._parentage=null:Array.isArray(r)&&Xa(r,n)}},{key:"remove",value:function(n){var r=this._finalizers;r&&Xa(r,n),n instanceof e&&n._removeParent(this)}}]),e}();dn.EMPTY=((e=new dn).closed=!0,e);var cl=dn.EMPTY;function fl(e){return e instanceof dn||e&&"closed"in e&&be(e.remove)&&be(e.add)&&be(e.unsubscribe)}function dl(e){be(e)?e():e.unsubscribe()}var wi={setTimeout:function(e){function t(n,r){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){for(var n=wi.delegate,r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];return null!=n&&n.setTimeout?n.setTimeout.apply(n,[e,t].concat(i)):setTimeout.apply(void 0,[e,t].concat(i))}),clearTimeout:function(e){function t(n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){var t=wi.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)}),delegate:void 0};function vl(e){wi.setTimeout(function(){throw e})}function hl(){}var Mg=eo("C",void 0,void 0);function eo(e,t,n){return{kind:e,value:t,error:n}}function Ci(e){e()}var to=function(e){z(n,e);var t=W(n);function n(r){var i;return g(this,n),(i=t.call(this)).isStopped=!1,r?(i.destination=r,fl(r)&&r.add(ot(i))):i.destination=Ng,i}return m(n,[{key:"next",value:function(i){this.isStopped?ro(function kg(e){return eo("N",e,void 0)}(i),this):this._next(i)}},{key:"error",value:function(i){this.isStopped?ro(function Tg(e){return eo("E",void 0,e)}(i),this):(this.isStopped=!0,this._error(i))}},{key:"complete",value:function(){this.isStopped?ro(Mg,this):(this.isStopped=!0,this._complete())}},{key:"unsubscribe",value:function(){this.closed||(this.isStopped=!0,we(ve(n.prototype),"unsubscribe",this).call(this),this.destination=null)}},{key:"_next",value:function(i){this.destination.next(i)}},{key:"_error",value:function(i){try{this.destination.error(i)}finally{this.unsubscribe()}}},{key:"_complete",value:function(){try{this.destination.complete()}finally{this.unsubscribe()}}}],[{key:"create",value:function(i,a,o){return new Er(i,a,o)}}]),n}(dn);var Fg=function(){function e(t){g(this,e),this.partialObserver=t}return m(e,[{key:"next",value:function(n){var r=this.partialObserver;if(r.next)try{r.next(n)}catch(i){bi(i)}}},{key:"error",value:function(n){var r=this.partialObserver;if(r.error)try{r.error(n)}catch(i){bi(i)}else bi(n)}},{key:"complete",value:function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(r){bi(r)}}}]),e}(),Er=function(e){z(n,e);var t=W(n);function n(r,i,a){var o,u;return g(this,n),o=t.call(this),be(r)||!r?u={next:null!=r?r:void 0,error:null!=i?i:void 0,complete:null!=a?a:void 0}:(ot(o),u=r),o.destination=new Fg(u),o}return m(n)}(to);function bi(e){vl(e)}function ro(e,t){var n=null;n&&wi.setTimeout(function(){return n(e,t)})}var Ng={closed:!0,next:hl,error:function Rg(e){throw e},complete:hl},io="function"==typeof Symbol&&Symbol.observable||"@@observable";function pl(e){return e}function gl(e){return 0===e.length?pl:1===e.length?e[0]:function(n){return e.reduce(function(r,i){return i(r)},n)}}var qe=function(){var e=function(){function t(n){g(this,t),n&&(this._subscribe=n)}return m(t,[{key:"lift",value:function(r){var i=new t;return i.source=this,i.operator=r,i}},{key:"subscribe",value:function(r,i,a){var o=this,u=function Lg(e){return e&&e instanceof to||function Og(e){return e&&be(e.next)&&be(e.error)&&be(e.complete)}(e)&&fl(e)}(r)?r:new Er(r,i,a);return Ci(function(){var s=o.operator,l=o.source;u.add(s?s.call(u,l):l?o._subscribe(u):o._trySubscribe(u))}),u}},{key:"_trySubscribe",value:function(r){try{return this._subscribe(r)}catch(i){r.error(i)}}},{key:"forEach",value:function(r,i){var a=this;return new(i=ml(i))(function(o,u){var s=new Er({next:function(c){try{r(c)}catch(f){u(f),s.unsubscribe()}},error:u,complete:o});a.subscribe(s)})}},{key:"_subscribe",value:function(r){var i;return null===(i=this.source)||void 0===i?void 0:i.subscribe(r)}},{key:io,value:function(){return this}},{key:"pipe",value:function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return gl(i)(this)}},{key:"toPromise",value:function(r){var i=this;return new(r=ml(r))(function(a,o){var u;i.subscribe(function(s){return u=s},function(s){return o(s)},function(){return a(u)})})}}]),t}();return e.create=function(t){return new e(t)},e}();function ml(e){var t;return null!==(t=null!=e?e:undefined)&&void 0!==t?t:Promise}var xg=ll(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Si=function(){var e=function(t){z(r,t);var n=W(r);function r(){var i;return g(this,r),(i=n.call(this)).closed=!1,i.currentObservers=null,i.observers=[],i.isStopped=!1,i.hasError=!1,i.thrownError=null,i}return m(r,[{key:"lift",value:function(a){var o=new yl(this,this);return o.operator=a,o}},{key:"_throwIfClosed",value:function(){if(this.closed)throw new xg}},{key:"next",value:function(a){var o=this;Ci(function(){if(o._throwIfClosed(),!o.isStopped){o.currentObservers||(o.currentObservers=Array.from(o.observers));var s,u=Pe(o.currentObservers);try{for(u.s();!(s=u.n()).done;)s.value.next(a)}catch(c){u.e(c)}finally{u.f()}}})}},{key:"error",value:function(a){var o=this;Ci(function(){if(o._throwIfClosed(),!o.isStopped){o.hasError=o.isStopped=!0,o.thrownError=a;for(var u=o.observers;u.length;)u.shift().error(a)}})}},{key:"complete",value:function(){var a=this;Ci(function(){if(a._throwIfClosed(),!a.isStopped){a.isStopped=!0;for(var o=a.observers;o.length;)o.shift().complete()}})}},{key:"unsubscribe",value:function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}},{key:"observed",get:function(){var a;return(null===(a=this.observers)||void 0===a?void 0:a.length)>0}},{key:"_trySubscribe",value:function(a){return this._throwIfClosed(),we(ve(r.prototype),"_trySubscribe",this).call(this,a)}},{key:"_subscribe",value:function(a){return this._throwIfClosed(),this._checkFinalizedStatuses(a),this._innerSubscribe(a)}},{key:"_innerSubscribe",value:function(a){var o=this,l=this.observers;return this.hasError||this.isStopped?cl:(this.currentObservers=null,l.push(a),new dn(function(){o.currentObservers=null,Xa(l,a)}))}},{key:"_checkFinalizedStatuses",value:function(a){var s=this.isStopped;this.hasError?a.error(this.thrownError):s&&a.complete()}},{key:"asObservable",value:function(){var a=new qe;return a.source=this,a}}]),r}(qe);return e.create=function(t,n){return new yl(t,n)},e}(),yl=function(e){z(n,e);var t=W(n);function n(r,i){var a;return g(this,n),(a=t.call(this)).destination=r,a.source=i,a}return m(n,[{key:"next",value:function(i){var a,o;null===(o=null===(a=this.destination)||void 0===a?void 0:a.next)||void 0===o||o.call(a,i)}},{key:"error",value:function(i){var a,o;null===(o=null===(a=this.destination)||void 0===a?void 0:a.error)||void 0===o||o.call(a,i)}},{key:"complete",value:function(){var i,a;null===(a=null===(i=this.destination)||void 0===i?void 0:i.complete)||void 0===a||a.call(i)}},{key:"_subscribe",value:function(i){var a,o;return null!==(o=null===(a=this.source)||void 0===a?void 0:a.subscribe(i))&&void 0!==o?o:cl}}]),n}(Si);function Tn(e){return function(t){if(function Bg(e){return be(null==e?void 0:e.lift)}(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function kn(e,t,n,r,i){return new jg(e,t,n,r,i)}var jg=function(e){z(n,e);var t=W(n);function n(r,i,a,o,u,s){var l,c,f,d;return g(this,n),(d=t.call(this,r)).onFinalize=u,d.shouldUnsubscribe=s,d._next=i?function(v){try{i(v)}catch(h){r.error(h)}}:we((l=ot(d),ve(n.prototype)),"_next",l),d._error=o?function(v){try{o(v)}catch(h){r.error(h)}finally{this.unsubscribe()}}:we((c=ot(d),ve(n.prototype)),"_error",c),d._complete=a?function(){try{a()}catch(v){r.error(v)}finally{this.unsubscribe()}}:we((f=ot(d),ve(n.prototype)),"_complete",f),d}return m(n,[{key:"unsubscribe",value:function(){var i;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var a=this.closed;we(ve(n.prototype),"unsubscribe",this).call(this),!a&&(null===(i=this.onFinalize)||void 0===i||i.call(this))}}}]),n}(to);function Dl(e,t){return Tn(function(n,r){var i=0;n.subscribe(kn(r,function(a){r.next(e.call(t,a,i++))}))})}function wr(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
wr=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function u(b,w,T){return Object.defineProperty(b,w,{value:T,enumerable:!0,configurable:!0,writable:!0}),b[w]}try{u({},"")}catch(b){u=function(T,A,x){return T[A]=x}}function s(b,w,T,A){var Tt,Bt,se,je,G=Object.create((w&&w.prototype instanceof f?w:f).prototype),fe=new ue(A||[]);return G._invoke=(Tt=b,Bt=T,se=fe,je="suspendedStart",function(jt,mg){if("executing"===je)throw new Error("Generator is already running");if("completed"===je){if("throw"===jt)throw mg;return{value:void 0,done:!0}}for(se.method=jt,se.arg=mg;;){var yg=se.delegate;if(yg){var rl=I(yg,se);if(rl){if(rl===c)continue;return rl}}if("next"===se.method)se.sent=se._sent=se.arg;else if("throw"===se.method){if("suspendedStart"===je)throw je="completed",se.arg;se.dispatchException(se.arg)}else"return"===se.method&&se.abrupt("return",se.arg);je="executing";var Di=l(Tt,Bt,se);if("normal"===Di.type){if(je=se.done?"completed":"suspendedYield",Di.arg===c)continue;return{value:Di.arg,done:se.done}}"throw"===Di.type&&(je="completed",se.method="throw",se.arg=Di.arg)}}),G}function l(b,w,T){try{return{type:"normal",arg:b.call(w,T)}}catch(A){return{type:"throw",arg:A}}}e.wrap=s;var c={};function f(){}function d(){}function v(){}var h={};u(h,i,function(){return this});var p=Object.getPrototypeOf,D=p&&p(p(ke([])));D&&D!==t&&n.call(D,i)&&(h=D);var _=v.prototype=f.prototype=Object.create(h);function C(b){["next","throw","return"].forEach(function(w){u(b,w,function(T){return this._invoke(w,T)})})}function y(b,w){function T(x,G,fe,Tt){var Bt=l(b[x],b,G);if("throw"!==Bt.type){var se=Bt.arg,je=se.value;return je&&"object"==_i(je)&&n.call(je,"__await")?w.resolve(je.__await).then(function(jt){T("next",jt,fe,Tt)},function(jt){T("throw",jt,fe,Tt)}):w.resolve(je).then(function(jt){se.value=jt,fe(se)},function(jt){return T("throw",jt,fe,Tt)})}Tt(Bt.arg)}var A;this._invoke=function(x,G){function fe(){return new w(function(Tt,Bt){T(x,G,Tt,Bt)})}return A=A?A.then(fe,fe):fe()}}function I(b,w){var T=b.iterator[w.method];if(void 0===T){if(w.delegate=null,"throw"===w.method){if(b.iterator.return&&(w.method="return",w.arg=void 0,I(b,w),"throw"===w.method))return c;w.method="throw",w.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var A=l(T,b.iterator,w.arg);if("throw"===A.type)return w.method="throw",w.arg=A.arg,w.delegate=null,c;var x=A.arg;return x?x.done?(w[b.resultName]=x.value,w.next=b.nextLoc,"return"!==w.method&&(w.method="next",w.arg=void 0),w.delegate=null,c):x:(w.method="throw",w.arg=new TypeError("iterator result is not an object"),w.delegate=null,c)}function N(b){var w={tryLoc:b[0]};1 in b&&(w.catchLoc=b[1]),2 in b&&(w.finallyLoc=b[2],w.afterLoc=b[3]),this.tryEntries.push(w)}function V(b){var w=b.completion||{};w.type="normal",delete w.arg,b.completion=w}function ue(b){this.tryEntries=[{tryLoc:"root"}],b.forEach(N,this),this.reset(!0)}function ke(b){if(b){var w=b[i];if(w)return w.call(b);if("function"==typeof b.next)return b;if(!isNaN(b.length)){var T=-1,A=function x(){for(;++T<b.length;)if(n.call(b,T))return x.value=b[T],x.done=!1,x;return x.value=void 0,x.done=!0,x};return A.next=A}}return{next:Be}}function Be(){return{value:void 0,done:!0}}return d.prototype=v,u(_,"constructor",v),u(v,"constructor",d),d.displayName=u(v,o,"GeneratorFunction"),e.isGeneratorFunction=function(b){var w="function"==typeof b&&b.constructor;return!!w&&(w===d||"GeneratorFunction"===(w.displayName||w.name))},e.mark=function(b){return Object.setPrototypeOf?Object.setPrototypeOf(b,v):(b.__proto__=v,u(b,o,"GeneratorFunction")),b.prototype=Object.create(_),b},e.awrap=function(b){return{__await:b}},C(y.prototype),u(y.prototype,a,function(){return this}),e.AsyncIterator=y,e.async=function(b,w,T,A,x){void 0===x&&(x=Promise);var G=new y(s(b,w,T,A),x);return e.isGeneratorFunction(w)?G:G.next().then(function(fe){return fe.done?fe.value:G.next()})},C(_),u(_,o,"Generator"),u(_,i,function(){return this}),u(_,"toString",function(){return"[object Generator]"}),e.keys=function(b){var w=[];for(var T in b)w.push(T);return w.reverse(),function A(){for(;w.length;){var x=w.pop();if(x in b)return A.value=x,A.done=!1,A}return A.done=!0,A}},e.values=ke,ue.prototype={constructor:ue,reset:function(w){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(V),!w)for(var T in this)"t"===T.charAt(0)&&n.call(this,T)&&!isNaN(+T.slice(1))&&(this[T]=void 0)},stop:function(){this.done=!0;var w=this.tryEntries[0].completion;if("throw"===w.type)throw w.arg;return this.rval},dispatchException:function(w){if(this.done)throw w;var T=this;function A(se,je){return fe.type="throw",fe.arg=w,T.next=se,je&&(T.method="next",T.arg=void 0),!!je}for(var x=this.tryEntries.length-1;x>=0;--x){var G=this.tryEntries[x],fe=G.completion;if("root"===G.tryLoc)return A("end");if(G.tryLoc<=this.prev){var Tt=n.call(G,"catchLoc"),Bt=n.call(G,"finallyLoc");if(Tt&&Bt){if(this.prev<G.catchLoc)return A(G.catchLoc,!0);if(this.prev<G.finallyLoc)return A(G.finallyLoc)}else if(Tt){if(this.prev<G.catchLoc)return A(G.catchLoc,!0)}else{if(!Bt)throw new Error("try statement without catch or finally");if(this.prev<G.finallyLoc)return A(G.finallyLoc)}}}},abrupt:function(w,T){for(var A=this.tryEntries.length-1;A>=0;--A){var x=this.tryEntries[A];if(x.tryLoc<=this.prev&&n.call(x,"finallyLoc")&&this.prev<x.finallyLoc){var G=x;break}}G&&("break"===w||"continue"===w)&&G.tryLoc<=T&&T<=G.finallyLoc&&(G=null);var fe=G?G.completion:{};return fe.type=w,fe.arg=T,G?(this.method="next",this.next=G.finallyLoc,c):this.complete(fe)},complete:function(w,T){if("throw"===w.type)throw w.arg;return"break"===w.type||"continue"===w.type?this.next=w.arg:"return"===w.type?(this.rval=this.arg=w.arg,this.method="return",this.next="end"):"normal"===w.type&&T&&(this.next=T),c},finish:function(w){for(var T=this.tryEntries.length-1;T>=0;--T){var A=this.tryEntries[T];if(A.finallyLoc===w)return this.complete(A.completion,A.afterLoc),V(A),c}},catch:function(w){for(var T=this.tryEntries.length-1;T>=0;--T){var A=this.tryEntries[T];if(A.tryLoc===w){var x=A.completion;if("throw"===x.type){var G=x.arg;V(A)}return G}}throw new Error("illegal catch attempt")},delegateYield:function(w,T,A){return this.delegate={iterator:ke(w),resultName:T,nextLoc:A},"next"===this.method&&(this.arg=void 0),c}},e}function pn(e){return this instanceof pn?(this.v=e,this):new pn(e)}function Ug(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,r=n.apply(e,t||[]),a=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(d){r[d]&&(i[d]=function(v){return new Promise(function(h,p){a.push([d,v,h,p])>1||u(d,v)})})}function u(d,v){try{!function s(d){d.value instanceof pn?Promise.resolve(d.value.v).then(l,c):f(a[0][2],d)}(r[d](v))}catch(h){f(a[0][3],h)}}function l(d){u("next",d)}function c(d){u("throw",d)}function f(d,v){d(v),a.shift(),a.length&&u(a[0][0],a[0][1])}}function Gg(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=function wl(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(a){n[a]=e[a]&&function(o){return new Promise(function(u,s){!function i(a,o,u,s){Promise.resolve(s).then(function(l){a({value:l,done:u})},o)}(u,s,(o=e[a](o)).done,o.value)})}}}var Cl=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function bl(e){return be(null==e?void 0:e.then)}function Sl(e){return be(e[io])}function Il(e){return Symbol.asyncIterator&&be(null==e?void 0:e[Symbol.asyncIterator])}function Ml(e){return new TypeError("You provided ".concat(null!==e&&"object"==typeof e?"an invalid object":"'".concat(e,"'")," where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."))}var Tl=function Wg(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function kl(e){return be(null==e?void 0:e[Tl])}function Al(e){return Ug(this,arguments,wr().mark(function t(){var n,r,i;return wr().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:n=e.getReader(),u.prev=1;case 2:return u.next=5,pn(n.read());case 5:if(i=(r=u.sent).value,!r.done){u.next=12;break}return u.next=11,pn(void 0);case 11:return u.abrupt("return",u.sent);case 12:return u.next=14,pn(i);case 14:return u.next=16,u.sent;case 16:u.next=2;break;case 18:return u.prev=18,n.releaseLock(),u.finish(18);case 21:case"end":return u.stop()}},t,null,[[1,,18,21]])}))}function Pl(e){return be(null==e?void 0:e.getReader)}function nn(e){if(e instanceof qe)return e;if(null!=e){if(Sl(e))return function qg(e){return new qe(function(t){var n=e[io]();if(be(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(e);if(Cl(e))return function Zg(e){return new qe(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}(e);if(bl(e))return function $g(e){return new qe(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,vl)})}(e);if(Il(e))return Fl(e);if(kl(e))return function Qg(e){return new qe(function(t){var r,n=Pe(e);try{for(n.s();!(r=n.n()).done;)if(t.next(r.value),t.closed)return}catch(a){n.e(a)}finally{n.f()}t.complete()})}(e);if(Pl(e))return function Kg(e){return Fl(Al(e))}(e)}throw Ml(e)}function Fl(e){return new qe(function(t){(function Yg(e,t){var n,r,i,a;return function Vg(e,t,n,r){return new(n||(n=Promise))(function(a,o){function u(c){try{l(r.next(c))}catch(f){o(f)}}function s(c){try{l(r.throw(c))}catch(f){o(f)}}function l(c){c.done?a(c.value):function i(a){return a instanceof n?a:new n(function(o){o(a)})}(c.value).then(u,s)}l((r=r.apply(e,t||[])).next())})}(this,void 0,void 0,wr().mark(function o(){return wr().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:l.prev=0,n=Gg(e);case 2:return l.next=4,n.next();case 4:if((r=l.sent).done){l.next=12;break}if(t.next(r.value),!t.closed){l.next=10;break}return l.abrupt("return");case 10:l.next=2;break;case 12:l.next=17;break;case 14:l.prev=14,l.t0=l.catch(0),i={error:l.t0};case 17:if(l.prev=17,l.prev=18,!r||r.done||!(a=n.return)){l.next=22;break}return l.next=22,a.call(n);case 22:if(l.prev=22,!i){l.next=25;break}throw i.error;case 25:return l.finish(22);case 26:return l.finish(17);case 27:t.complete();case 28:case"end":return l.stop()}},o,null,[[0,14,17,27],[18,,22,26]])}))})(e,t).catch(function(n){return t.error(n)})})}function rn(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(a),!i)return a}function Jg(e,t,n,r,i,a,o,u){var s=[],l=0,c=0,f=!1,d=function(){f&&!s.length&&!l&&t.complete()},v=function(D){return l<r?h(D):s.push(D)},h=function p(D){a&&t.next(D),l++;var _=!1;nn(n(D,c++)).subscribe(kn(t,function(C){null==i||i(C),a?v(C):t.next(C)},function(){_=!0},void 0,function(){if(_)try{l--;for(var C=function(){var I=s.shift();o?rn(t,o,function(){return p(I)}):p(I)};s.length&&l<r;)C();d()}catch(y){t.error(y)}}))};return e.subscribe(kn(t,v,function(){f=!0,d()})),function(){null==u||u()}}function Rl(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return be(t)?Rl(function(r,i){return Dl(function(a,o){return t(r,a,i,o)})(nn(e(r,i)))},n):("number"==typeof t&&(n=t),Tn(function(r,i){return Jg(r,i,e,n)}))}function Xg(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0;return Rl(pl,e)}var Nl=new qe(function(e){return e.complete()});function oo(e){return e[e.length-1]}function nm(e){return function tm(e){return e&&be(e.schedule)}(oo(e))?e.pop():void 0}function rm(e,t){return"number"==typeof oo(e)?e.pop():t}function Ol(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Tn(function(n,r){n.subscribe(kn(r,function(i){return rn(r,e,function(){return r.next(i)},t)},function(){return rn(r,e,function(){return r.complete()},t)},function(i){return rn(r,e,function(){return r.error(i)},t)}))})}function Ll(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Tn(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function xl(e,t){if(!e)throw new Error("Iterable cannot be null");return new qe(function(n){rn(n,t,function(){var r=e[Symbol.asyncIterator]();rn(n,t,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function cm(e,t){return t?function lm(e,t){if(null!=e){if(Sl(e))return function im(e,t){return nn(e).pipe(Ll(t),Ol(t))}(e,t);if(Cl(e))return function om(e,t){return new qe(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}(e,t);if(bl(e))return function am(e,t){return nn(e).pipe(Ll(t),Ol(t))}(e,t);if(Il(e))return xl(e,t);if(kl(e))return function um(e,t){return new qe(function(n){var r;return rn(n,t,function(){r=e[Tl](),rn(n,t,function(){var i,a;try{var o=r.next();i=o.value,a=o.done}catch(u){return void n.error(u)}a?n.complete():n.next(i)},0,!0)}),function(){return be(null==r?void 0:r.return)&&r.return()}})}(e,t);if(Pl(e))return function sm(e,t){return xl(Al(e),t)}(e,t)}throw Ml(e)}(e,t):nn(e)}function Bl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=nm(t),i=rm(t,1/0),a=t;return a.length?1===a.length?nn(a[0]):Xg(i)(cm(a,r)):Nl}function uo(e,t){if(!0!==t){if(!1!==t){for(var n=new Er({next:function(){n.unsubscribe(),e()}}),r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];return t.apply(void 0,i).subscribe(n)}}else e()}
/**
   * @license Angular v14.2.10
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function ne(e){for(var t in e)if(e[t]===ne)return t;throw Error("Could not find renamed property on target object.")}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function re(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(re).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return"".concat(e.overriddenName);if(e.name)return"".concat(e.name);var t=e.toString();if(null==t)return""+t;var n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function lo(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */var dm=ne({__forward_ref__:ne});function co(e){return e.__forward_ref__=co,e.toString=function(){return re(this())},e}function R(e){return function fo(e){return"function"==typeof e&&e.hasOwnProperty(dm)&&e.__forward_ref__===co}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */(e)?e():e}var P=function(e){z(n,e);var t=W(n);function n(r,i){var a;return g(this,n),(a=t.call(this,function Ii(e,t){var n="NG0".concat(Math.abs(e));return"".concat(n).concat(t?": "+t.trim():"")}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */(r,i))).code=r,a}return m(n)}(Fe(Error));
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function B(e){return"string"==typeof e?e:null==e?"":String(e)}function Mi(e,t){throw t&&" in ".concat(t),new P(-201,!1)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function Xe(e,t){null==e&&function ee(e,t,n,r){throw new Error("ASSERTION ERROR: ".concat(e)+(null==r?"":" [Expected=> ".concat(n," ").concat(r," ").concat(t," <=Actual]")))}(t,e,null,"!=")}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function le(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function An(e){return{providers:e.providers||[],imports:e.imports||[]}}function Ti(e){return jl(e,ki)||jl(e,Hl)}function jl(e,t){return e.hasOwnProperty(t)?e[t]:null}function Vl(e){return e&&(e.hasOwnProperty(vo)||e.hasOwnProperty(_m))?e[vo]:null}var ho,ki=ne({"\u0275prov":ne}),vo=ne({"\u0275inj":ne}),Hl=ne({ngInjectableDef:ne}),_m=ne({ngInjectorDef:ne}),O=function(){return(O=O||{})[O.Default=0]="Default",O[O.Host=1]="Host",O[O.Self=2]="Self",O[O.SkipSelf=4]="SkipSelf",O[O.Optional=8]="Optional",O}();
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function Em(){return ho}function ut(e){var t=ho;return ho=e,t}function Ul(e,t,n){var r=Ti(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&O.Optional?null:void 0!==t?t:void Mi(re(e),"Injector")}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function an(e){return{toString:e}.toString()}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */var mt=function(){return(mt=mt||{})[mt.OnPush=0]="OnPush",mt[mt.Default=1]="Default",mt}(),kt=function(){return function(e){e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom"}(kt||(kt={})),kt}(),ie=function(){return"undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof global&&global||"undefined"!=typeof window&&window||"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self}(),Pn={},J=[],Ai=ne({"\u0275cmp":ne}),po=ne({"\u0275dir":ne}),go=ne({"\u0275pipe":ne}),Gl=ne({"\u0275mod":ne}),Ht=ne({"\u0275fac":ne}),Cr=ne({__NG_ELEMENT_ID__:ne}),wm=0;function mo(e){return an(function(){var n=!0===e.standalone,r={},i={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===mt.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||J,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||kt.Emulated,id:"c".concat(wm++),styles:e.styles||J,_:null,setInput:null,schemas:e.schemas||null,tView:null},a=e.dependencies,o=e.features;return i.inputs=ql(e.inputs,r),i.outputs=ql(e.outputs),o&&o.forEach(function(u){return u(i)}),i.directiveDefs=a?function(){return("function"==typeof a?a():a).map(zl).filter(Wl)}:null,i.pipeDefs=a?function(){return("function"==typeof a?a():a).map(He).filter(Wl)}:null,i})}function zl(e){return te(e)||Ve(e)}function Wl(e){return null!==e}function br(e){return an(function(){return{type:e.type,bootstrap:e.bootstrap||J,declarations:e.declarations||J,imports:e.imports||J,exports:e.exports||J,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}})}function ql(e,t){if(null==e)return Pn;var n={};for(var r in e)if(e.hasOwnProperty(r)){var i=e[r],a=i;Array.isArray(i)&&(a=i[1],i=i[0]),n[i]=r,t&&(t[i]=a)}return n}function te(e){return e[Ai]||null}function Ve(e){return e[po]||null}function He(e){return e[go]||null}var q=11;
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function $e(e){return Array.isArray(e)&&"object"==typeof e[1]}function Dt(e){return Array.isArray(e)&&!0===e[1]}function _o(e){return 0!=(8&e.flags)}function Ni(e){return 2==(2&e.flags)}function _t(e){return null!==e.template}function Tm(e){return 0!=(256&e[2])}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function _n(e,t){return e.hasOwnProperty(Ht)?e[Ht]:null}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */var Ql=function(){function e(t,n,r){g(this,e),this.previousValue=t,this.currentValue=n,this.firstChange=r}return m(e,[{key:"isFirstChange",value:function(){return this.firstChange}}]),e}();
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function Kl(e){return e.type.prototype.ngOnChanges&&(e.setInput=Fm),Pm}function Pm(){var e=Jl(this),t=null==e?void 0:e.current;if(t){var n=e.previous;if(n===Pn)e.previous=t;else for(var r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Fm(e,t,n,r){var i=Jl(e)||function Rm(e,t){return e[Yl]=t}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */(e,{previous:Pn,current:null}),a=i.current||(i.current={}),o=i.previous,u=this.declaredInputs[n],s=o[u];a[u]=new Ql(s&&s.currentValue,t,o===Pn),e[r]=t}var Yl="__ngSimpleChanges__";function Jl(e){return e[Yl]||null}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function ye(e){for(;Array.isArray(e);)e=e[0];return e}function ft(e,t){return ye(t[e.index])}function nt(e,t){var n=t[e];return $e(n)?n:n[0]}function Bi(e){return 64==(64&e[2])}function on(e,t){return null==t?null:e[t]}function Xl(e){e[18]=0}function Io(e,t){e[5]+=t;for(var n=e,r=e[3];null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */}var L={lFrame:lc(null),bindingsEnabled:!0};function tc(){return L.bindingsEnabled}function E(){return L.lFrame.lView}function K(){return L.lFrame.tView}function Se(){for(var e=nc();null!==e&&64===e.type;)e=e.parent;return e}function nc(){return L.lFrame.currentTNode}function At(e,t){var n=L.lFrame;n.currentTNode=e,n.isParent=t}function Mo(){return L.lFrame.isParent}function Km(e,t){var n=L.lFrame;n.bindingIndex=n.bindingRootIndex=e,ko(t)}function ko(e){L.lFrame.currentDirectiveIndex=e}function Po(e){L.lFrame.currentQueryIndex=e}function Jm(e){var t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function uc(e,t,n){if(n&O.SkipSelf){for(var r=t,i=e;!(null!==(r=r.parent)||n&O.Host||null===(r=Jm(i))||(i=i[15],10&r.type)););if(null===r)return!1;t=r,e=i}var a=L.lFrame=sc();return a.currentTNode=t,a.lView=e,!0}function Fo(e){var t=sc(),n=e[1];L.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function sc(){var e=L.lFrame,t=null===e?null:e.child;return null===t?lc(e):t}function lc(e){var t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function cc(){var e=L.lFrame;return L.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var fc=cc;function Ro(){var e=cc();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Ge(){return L.lFrame.selectedIndex}function un(e){L.lFrame.selectedIndex=e}function ji(e,t){for(var n=t.directiveStart,r=t.directiveEnd;n<r;n++){var a=e.data[n].type.prototype,o=a.ngAfterContentInit,u=a.ngAfterContentChecked,s=a.ngAfterViewInit,l=a.ngAfterViewChecked,c=a.ngOnDestroy;o&&(e.contentHooks||(e.contentHooks=[])).push(-n,o),u&&((e.contentHooks||(e.contentHooks=[])).push(n,u),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,u)),s&&(e.viewHooks||(e.viewHooks=[])).push(-n,s),l&&((e.viewHooks||(e.viewHooks=[])).push(n,l),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,l)),null!=c&&(e.destroyHooks||(e.destroyHooks=[])).push(n,c)}}function Vi(e,t,n){dc(e,t,3,n)}function Hi(e,t,n,r){(3&e[2])===n&&dc(e,t,n,r)}function No(e,t){var n=e[2];(3&n)===t&&(n&=2047,e[2]=n+=1)}function dc(e,t,n,r){for(var a=null!=r?r:-1,o=t.length-1,u=0,s=void 0!==r?65535&e[18]:0;s<o;s++)if("number"==typeof t[s+1]){if(u=t[s],null!=r&&u>=r)break}else t[s]<0&&(e[18]+=65536),(u<a||-1==a)&&(uy(e,n,t,s),e[18]=(4294901760&e[18])+s+2),s++}function uy(e,t,n,r){var i=n[r]<0,a=n[r+1],u=e[i?-n[r]:n[r]];if(i){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{a.call(u)}finally{}}}else try{a.call(u)}finally{}}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */var Pr=m(function e(t,n,r){g(this,e),this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r});function Ui(e,t,n){for(var r=0;r<n.length;){var i=n[r];if("number"==typeof i){if(0!==i)break;r++;var a=n[r++],o=n[r++],u=n[r++];e.setAttribute(t,o,u,a)}else{var s=i,l=n[++r];hc(s)?e.setProperty(t,s,l):e.setAttribute(t,s,l),r++}}return r}function vc(e){return 3===e||4===e||6===e}function hc(e){return 64===e.charCodeAt(0)}function Gi(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else for(var n=-1,r=0;r<t.length;r++){var i=t[r];"number"==typeof i?n=i:0===n||pc(e,n,i,null,-1===n||2===n?t[++r]:null)}return e}function pc(e,t,n,r,i){var a=0,o=e.length;if(-1===t)o=-1;else for(;a<e.length;){var u=e[a++];if("number"==typeof u){if(u===t){o=-1;break}if(u>t){o=a-1;break}}}for(;a<e.length;){var s=e[a];if("number"==typeof s)break;if(s===n){if(null===r)return void(null!==i&&(e[a+1]=i));if(r===e[a+1])return void(e[a+2]=i)}a++,null!==r&&a++,null!==i&&a++}-1!==o&&(e.splice(o,0,t),a=o+1),e.splice(a++,0,n),null!==r&&e.splice(a++,0,r),null!==i&&e.splice(a++,0,i)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function xn(e){return 32767&e}function Bn(e,t){for(var n=function dy(e){return e>>16}(e),r=t;n>0;)r=r[15],n--;return r}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */var Lo=!0;function zi(e){var t=Lo;return Lo=e,t}var hy=0,Pt={};function Rr(e,t){var n=Bo(e,t);if(-1!==n)return n;var r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,xo(r.data,e),xo(t,null),xo(r.blueprint,null));var i=Wi(e,t),a=e.injectorIndex;if(function gc(e){return-1!==e}(i))for(var o=xn(i),u=Bn(i,t),s=u[1].data,l=0;l<8;l++)t[a+l]=u[o+l]|s[o+l];return t[a+8]=i,a}function xo(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Bo(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function Wi(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;for(var n=0,r=null,i=t;null!==i;){if(null===(r=Sc(i)))return-1;if(n++,i=i[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function qi(e,t,n){!function py(e,t,n){var r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Cr)&&(r=n[Cr]),null==r&&(r=n[Cr]=hy++);var i=255&r;t.data[e+(i>>5)]|=1<<i}(e,t,n)}function Dc(e,t,n){if(n&O.Optional||void 0!==e)return e;Mi(0,"NodeInjector")}function _c(e,t,n,r){if(n&O.Optional&&void 0===r&&(r=null),0==(n&(O.Self|O.Host))){var i=e[9],a=ut(void 0);try{return i?i.get(t,r,n&O.Optional):Ul(t,r,n&O.Optional)}finally{ut(a)}}return Dc(r,0,n)}function Ec(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:O.Default,i=arguments.length>4?arguments[4]:void 0;if(null!==e){if(1024&t[2]){var a=Ey(e,t,n,r,Pt);if(a!==Pt)return a}var o=wc(e,t,n,r,Pt);if(o!==Pt)return o}return _c(t,n,r,i)}function wc(e,t,n,r,i){var a=function yy(e){if("string"==typeof e)return e.charCodeAt(0)||0;var t=e.hasOwnProperty(Cr)?e[Cr]:void 0;return"number"==typeof t?t>=0?255&t:Dy:t}(n);if("function"==typeof a){if(!uc(t,e,r))return r&O.Host?Dc(i,0,r):_c(t,n,r,i);try{var o=a(r);if(null!=o||r&O.Optional)return o;Mi()}finally{fc()}}else if("number"==typeof a){var u=null,s=Bo(e,t),l=-1,c=r&O.Host?t[16][6]:null;for((-1===s||r&O.SkipSelf)&&(-1!==(l=-1===s?Wi(e,t):t[s+8])&&bc(r,!1)?(u=t[1],s=xn(l),t=Bn(l,t)):s=-1);-1!==s;){var f=t[1];if(Cc(a,s,f.data)){var d=my(s,t,n,u,r,c);if(d!==Pt)return d}-1!==(l=t[s+8])&&bc(r,t[1].data[s+8]===c)&&Cc(a,s,t)?(u=f,s=xn(l),t=Bn(l,t)):s=-1}}return i}function my(e,t,n,r,i,a){var o=t[1],u=o.data[e+8],c=function Zi(e,t,n,r,i){for(var a=e.providerIndexes,o=t.data,u=1048575&a,s=e.directiveStart,c=a>>20,d=i?u+c:e.directiveEnd,v=r?u:u+c;v<d;v++){var h=o[v];if(v<s&&n===h||v>=s&&h.type===n)return v}if(i){var p=o[s];if(p&&_t(p)&&p.type===n)return s}return null}(u,o,n,null==r?Ni(u)&&Lo:r!=o&&0!=(3&u.type),i&O.Host&&a===u);return null!==c?Nr(t,o,c,u):Pt}function Nr(e,t,n,r){var i=e[n],a=t.data;if(function sy(e){return e instanceof Pr}(i)){var o=i;o.resolving&&
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function vm(e,t){var n=t?". Dependency path: ".concat(t.join(" > ")," > ").concat(e):"";throw new P(-200,"Circular dependency in DI detected for ".concat(e).concat(n))}(function Y(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():B(e)}(a[n]));var u=zi(o.canSeeViewProviders);o.resolving=!0;var s=o.injectImpl?ut(o.injectImpl):null;uc(e,r,O.Default);try{i=e[n]=o.factory(void 0,a,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function oy(e,t,n){var r=t.type.prototype,a=r.ngOnInit,o=r.ngDoCheck;if(r.ngOnChanges){var u=Kl(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,u),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,u)}a&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,a),o&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,o),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,o))}(n,a[n],t)}finally{null!==s&&ut(s),zi(u),o.resolving=!1,fc()}}return i}function Cc(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function bc(e,t){return!(e&O.Self||e&O.Host&&t)}var jn=function(){function e(t,n){g(this,e),this._tNode=t,this._lView=n}return m(e,[{key:"get",value:function(n,r,i){return Ec(this._tNode,this._lView,n,i,r)}}]),e}();function Dy(){return new jn(Se(),E())}function Ey(e,t,n,r,i){for(var a=e,o=t;null!==a&&null!==o&&1024&o[2]&&!(256&o[2]);){var u=wc(a,o,n,r|O.Self,Pt);if(u!==Pt)return u;var s=a.parent;if(!s){var l=o[21];if(l){var c=l.get(n,Pt,r);if(c!==Pt)return c}s=Sc(o),o=o[15]}a=s}return i}function Sc(e){var t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
var $=function(){function e(t,n){g(this,e),this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=le({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}return m(e,[{key:"multi",get:function(){return this}},{key:"toString",value:function(){return"InjectionToken ".concat(this._desc)}}]),e}();
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function zt(e,t){e.forEach(function(n){return Array.isArray(n)?zt(n,t):t(n)})}function $i(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
var Br={},Ki="ngTempTokenPath",Ny=/\n/gm,Pc="__source",jr=void 0;function Wn(e){var t=jr;return jr=e,t}function Ly(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.Default;if(void 0===jr)throw new P(-203,!1);return null===jr?Ul(e,void 0,t):jr.get(e,t&O.Optional?null:void 0,t)}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.Default;return(Em()||Ly)(R(e),t)}function qo(e){for(var t=[],n=0;n<e.length;n++){var r=R(e[n]);if(Array.isArray(r)){if(0===r.length)throw new P(900,!1);for(var i=void 0,a=O.Default,o=0;o<r.length;o++){var u=r[o],s=By(u);"number"==typeof s?-1===s?i=u.token:a|=s:i=u}t.push(X(i,a))}else t.push(X(r))}return t}function By(e){return e.__NG_DI_FLAG__}function jy(e,t,n,r){var i=e[Ki];throw t[Pc]&&i.unshift(t[Pc]),e.message=function Vy(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;var i=re(t);if(Array.isArray(t))i=t.map(re).join(" -> ");else if("object"==typeof t){var a=[];for(var o in t)if(t.hasOwnProperty(o)){var u=t[o];a.push(o+":"+("string"==typeof u?JSON.stringify(u):re(u)))}i="{".concat(a.join(", "),"}")}return"".concat(n).concat(r?"("+r+")":"","[").concat(i,"]: ").concat(e.replace(Ny,"\n  "))}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */("\n"+e.message,i,n,r),e.ngTokenPath=i,e[Ki]=null,e}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
var Xc=new $("ENVIRONMENT_INITIALIZER"),ef=new $("INJECTOR",-1),tf=new $("INJECTOR_DEF_TYPES"),nf=function(){function e(){g(this,e)}return m(e,[{key:"get",value:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Br;if(r===Br){var i=new Error("NullInjectorError: No provider for ".concat(re(n),"!"));throw i.name="NullInjectorError",i}return r}}]),e}();
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function MD(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{"\u0275providers":rf(!0,t)}}function rf(e){for(var r,t=[],n=new Set,i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return zt(a,function(u){var l=u;tu(l,t,[],n)&&(r||(r=[]),r.push(l))}),void 0!==r&&af(r,t),t}function af(e,t){for(var r=0;r<e.length;r++)zt(e[r].providers,function(l){t.push(l)})}function tu(e,t,n,r){if(!(e=R(e)))return!1;var i=null,a=Vl(e),o=!a&&te(e);if(a||o){if(o&&!o.standalone)return!1;i=e}else{var u=e.ngModule;if(!(a=Vl(u)))return!1;i=u}var c=r.has(i);if(o){if(c)return!1;if(r.add(i),o.dependencies){var v,d=Pe("function"==typeof o.dependencies?o.dependencies():o.dependencies);try{for(d.s();!(v=d.n()).done;)tu(v.value,t,n,r)}catch(y){d.e(y)}finally{d.f()}}}else{if(!a)return!1;if(null!=a.imports&&!c){var p;r.add(i);try{zt(a.imports,function(y){tu(y,t,n,r)&&(p||(p=[]),p.push(y))})}finally{}void 0!==p&&af(p,t)}if(!c){var D=_n(i)||function(){return new i};t.push({provide:i,useFactory:D,deps:J},{provide:tf,useValue:i,multi:!0},{provide:Xc,useValue:function(){return X(i)},multi:!0})}var _=a.providers;null==_||c||zt(_,function(y){t.push(y)})}return i!==e&&void 0!==e.providers}var TD=ne({provide:String,useValue:ne});function nu(e){return null!==e&&"object"==typeof e&&TD in e}function En(e){return"function"==typeof e}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
var ru=new $("Set Injector scope."),ia={},AD={},iu=void 0;
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function aa(){return void 0===iu&&(iu=new nf),iu}var $n=m(function e(){g(this,e)}),sf=function(e){z(n,e);var t=W(n);function n(r,i,a,o){var u;g(this,n),(u=t.call(this)).parent=i,u.source=a,u.scopes=o,u.records=new Map,u._ngOnDestroyHooks=new Set,u._onDestroyHooks=[],u._destroyed=!1,ou(r,function(l){return u.processProvider(l)}),u.records.set(ef,Qn(void 0,ot(u))),o.has("environment")&&u.records.set($n,Qn(void 0,ot(u)));var s=u.records.get(ru);return null!=s&&"string"==typeof s.value&&u.scopes.add(s.value),u.injectorDefTypes=new Set(u.get(tf.multi,J,O.Self)),u}return m(n,[{key:"destroyed",get:function(){return this._destroyed}},{key:"destroy",value:function(){this.assertNotDestroyed(),this._destroyed=!0;try{var a,i=Pe(this._ngOnDestroyHooks);try{for(i.s();!(a=i.n()).done;)a.value.ngOnDestroy()}catch(c){i.e(c)}finally{i.f()}var s,u=Pe(this._onDestroyHooks);try{for(u.s();!(s=u.n()).done;)(0,s.value)()}catch(c){u.e(c)}finally{u.f()}}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}},{key:"onDestroy",value:function(i){this._onDestroyHooks.push(i)}},{key:"runInContext",value:function(i){this.assertNotDestroyed();var a=Wn(this),o=ut(void 0);try{return i()}finally{Wn(a),ut(o)}}},{key:"get",value:function(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Br,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:O.Default;this.assertNotDestroyed();var u=Wn(this),s=ut(void 0);try{if(!(o&O.SkipSelf)){var l=this.records.get(i);if(void 0===l){var c=OD(i)&&Ti(i);l=c&&this.injectableDefInScope(c)?Qn(au(i),ia):null,this.records.set(i,l)}if(null!=l)return this.hydrate(i,l)}var f=o&O.Self?aa():this.parent;return f.get(i,a=o&O.Optional&&a===Br?null:a)}catch(v){if("NullInjectorError"===v.name){var d=v[Ki]=v[Ki]||[];if(d.unshift(re(i)),u)throw v;return jy(v,i,"R3InjectorError",this.source)}throw v}finally{ut(s),Wn(u)}}},{key:"resolveInjectorInitializers",value:function(){var i=Wn(this),a=ut(void 0);try{var s,u=Pe(this.get(Xc.multi,J,O.Self));try{for(u.s();!(s=u.n()).done;)(0,s.value)()}catch(c){u.e(c)}finally{u.f()}}finally{Wn(i),ut(a)}}},{key:"toString",value:function(){var u,i=[],o=Pe(this.records.keys());try{for(o.s();!(u=o.n()).done;)i.push(re(u.value))}catch(l){o.e(l)}finally{o.f()}return"R3Injector[".concat(i.join(", "),"]")}},{key:"assertNotDestroyed",value:function(){if(this._destroyed)throw new P(205,!1)}},{key:"processProvider",value:function(i){var a=En(i=R(i))?i:R(i&&i.provide),o=function FD(e){return nu(e)?Qn(void 0,e.useValue):Qn(function lf(e,t,n){var r=void 0;if(En(e)){var i=R(e);return _n(i)||au(i)}if(nu(e))r=function(){return R(e.useValue)};else if(function uf(e){return!(!e||!e.useFactory)}(e))r=function(){return e.useFactory.apply(e,Ce(qo(e.deps||[])))};else if(function of(e){return!(!e||!e.useExisting)}(e))r=function(){return X(R(e.useExisting))};else{var a=R(e&&(e.useClass||e.provide));if(!function RD(e){return!!e.deps}(e))return _n(a)||au(a);r=function(){return gt(a,Ce(qo(e.deps)))}}return r}(e),ia)}(i);if(En(i)||!0!==i.multi)this.records.get(a);else{var u=this.records.get(a);u||((u=Qn(void 0,ia,!0)).factory=function(){return qo(u.multi)},this.records.set(a,u)),a=i,u.multi.push(i)}this.records.set(a,o)}},{key:"hydrate",value:function(i,a){return a.value===ia&&(a.value=AD,a.value=a.factory()),"object"==typeof a.value&&a.value&&function ND(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(a.value)&&this._ngOnDestroyHooks.add(a.value),a.value}},{key:"injectableDefInScope",value:function(i){if(!i.providedIn)return!1;var a=R(i.providedIn);return"string"==typeof a?"any"===a||this.scopes.has(a):this.injectorDefTypes.has(a)}}]),n}($n);function au(e){var t=Ti(e),n=null!==t?t.factory:_n(e);if(null!==n)return n;if(e instanceof $)throw new P(204,!1);if(e instanceof Function)return function PD(e){var t=e.length;if(t>0)throw function xr(e,t){for(var n=[],r=0;r<e;r++)n.push(t);return n}(t,"?"),new P(204,!1);var r=function ym(e){var t=e&&(e[ki]||e[Hl]);if(t){var n=function Dm(e){if(e.hasOwnProperty("name"))return e.name;var t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn('DEPRECATED: DI is instantiating a token "'.concat(n,'" that inherits its @Injectable decorator but does not provide one itself.\n')+'This will become an error in a future version of Angular. Please add @Injectable() to the "'.concat(n,'" class.')),t}return null}(e);return null!==r?function(){return r.factory(e)}:function(){return new e}}(e);throw new P(204,!1)}function Qn(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{factory:e,value:t,multi:n?[]:void 0}}function OD(e){return"function"==typeof e||"object"==typeof e&&e instanceof $}function LD(e){return!!e.\u0275providers}function ou(e,t){var r,n=Pe(e);try{for(n.s();!(r=n.n()).done;){var i=r.value;Array.isArray(i)?ou(i,t):LD(i)?ou(i.\u0275providers,t):t(i)}}catch(a){n.e(a)}finally{n.f()}}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */var xD=m(function e(){g(this,e)}),cf=m(function e(){g(this,e)}),jD=function(){function e(){g(this,e)}return m(e,[{key:"resolveComponentFactory",value:function(n){
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
throw function BD(e){var t=Error("No component factory found for ".concat(re(e),". Did you add it to @NgModule.entryComponents?"));return t.ngComponent=e,t}(n)}}]),e}(),Kn=function(){var e=m(function t(){g(this,t)});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
return e.NULL=new jD,e}();function VD(){return Yn(Se(),E())}function Yn(e,t){return new Jn(ft(e,t))}var Jn=function(){var e=m(function t(n){g(this,t),this.nativeElement=n});return e.__NG_ELEMENT_ID__=VD,e}(),df=m(function e(){g(this,e)}),GD=function(){var e=m(function t(){g(this,t)});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
return e.\u0275prov=le({token:e,providedIn:"root",factory:function(){return null}}),e}(),oa=m(function e(t){g(this,e),this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}),zD=new oa("14.2.10"),uu={};function du(e){return e.ngOriginalError}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */var Xn=function(){function e(){g(this,e),this._console=console}return m(e,[{key:"handleError",value:function(n){var r=this._findOriginalError(n);this._console.error("ERROR",n),r&&this._console.error("ORIGINAL ERROR",r)}},{key:"_findOriginalError",value:function(n){for(var r=n&&du(n);r&&du(r);)r=du(r);return r||null}}]),e}(),vu=new Map,n_=0,pu="__ngContext__";
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function Oe(e,t){$e(t)?(e[pu]=t[20],function i_(e){vu.set(e[20],e)}(t)):e[pu]=t}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
var Qe=function(){return(Qe=Qe||{})[Qe.Important=1]="Important",Qe[Qe.DashCase=2]="DashCase",Qe}();
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function mu(e,t){return undefined(e,t)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function Zr(e){var t=e[3];return Dt(t)?t[3]:t}function yu(e){return Mf(e[13])}function Du(e){return Mf(e[4])}function Mf(e){for(;null!==e&&!Dt(e);)e=e[4];return e}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function tr(e,t,n,r,i){if(null!=r){var a,o=!1;Dt(r)?a=r:$e(r)&&(o=!0,r=r[0]);var u=ye(r);0===e&&null!==n?null==i?Rf(t,n,u):wn(t,n,u,i||null,!0):1===e&&null!==n?wn(t,n,u,i||null,!0):2===e?function Vf(e,t,n){var r=function ua(e,t){return e.parentNode(t)}(e,t);r&&function P_(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,u,o):3===e&&t.destroyNode(u),null!=a&&function N_(e,t,n,r,i){var a=n[7];a!==ye(n)&&tr(t,e,r,a,i);for(var u=10;u<n.length;u++){var s=n[u];$r(s[1],s,e,t,r,a)}}(t,e,a,n,i)}}function _u(e,t){return e.createText(t)}function Eu(e,t,n){return e.createElement(t,n)}function kf(e,t){var n=e[9],r=n.indexOf(t),i=t[3];512&t[2]&&(t[2]&=-513,Io(i,-1)),n.splice(r,1)}function Cu(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function A_(e,t){var n;if(null!=e&&null!=(n=e.destroyHooks))for(var r=0;r<n.length;r+=2){var i=t[n[r]];if(!(i instanceof Pr)){var a=n[r+1];if(Array.isArray(a))for(var o=0;o<a.length;o+=2){var u=i[a[o]],s=a[o+1];try{s.call(u)}finally{}}else try{a.call(i)}finally{}}}}(e,t),function k_(e,t){var n=e.cleanup,r=t[7],i=-1;if(null!==n)for(var a=0;a<n.length-1;a+=2)if("string"==typeof n[a]){var o=n[a+1],u="function"==typeof o?o(t):ye(t[o]),s=r[i=n[a+2]],l=n[a+3];"boolean"==typeof l?u.removeEventListener(n[a],s,l):l>=0?r[i=l]():r[i=-l].unsubscribe(),a+=2}else{var c=r[i=n[a+1]];n[a].call(c)}if(null!==r){for(var f=i+1;f<r.length;f++)(0,r[f])();t[7]=null}}(e,t),1===t[1].type&&t[q].destroy();var n=t[17];if(null!==n&&Dt(t[3])){n!==t[3]&&kf(n,t);var r=t[19];null!==r&&r.detachView(e)}!function a_(e){vu.delete(e[20])}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */(t)}}function Pf(e,t,n){return function Ff(e,t,n){for(var r=t;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){var i=e.data[r.directiveStart].encapsulation;if(i===kt.None||i===kt.Emulated)return null}return ft(r,n)}(e,t.parent,n)}function wn(e,t,n,r,i){e.insertBefore(t,n,r,i)}function Rf(e,t,n){e.appendChild(t,n)}function Nf(e,t,n,r,i){null!==r?wn(e,t,n,r,i):Rf(e,t,n)}var xf=function Lf(e,t,n){return 40&e.type?ft(e,n):null};function sa(e,t,n,r){var i=Pf(e,r,t),a=t[q],u=function Of(e,t,n){return xf(e,t,n)}(r.parent||t[6],r,t);if(null!=i)if(Array.isArray(n))for(var s=0;s<n.length;s++)Nf(a,i,n[s],u,!1);else Nf(a,i,n,u,!1)}function jf(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Iu(e,t,n,r,i,a,o){for(;null!=n;){var u=r[n.index],s=n.type;if(o&&0===t&&(u&&Oe(ye(u),r),n.flags|=4),64!=(64&n.flags))if(8&s)Iu(e,t,n.child,r,i,a,!1),tr(t,e,i,u,a);else if(32&s){for(var l=mu(n,r),c=void 0;c=l();)tr(t,e,i,c,a);tr(t,e,i,u,a)}else 16&s?Hf(e,t,r,n,i,a):tr(t,e,i,u,a);n=o?n.projectionNext:n.next}}function $r(e,t,n,r,i,a){Iu(n,r,e.firstChild,t,i,a,!1)}function Hf(e,t,n,r,i,a){var o=n[16],s=o[6].projection[r.projection];if(Array.isArray(s))for(var l=0;l<s.length;l++)tr(t,e,i,s[l],a);else Iu(e,t,s,o[3],i,a,!0)}function Uf(e,t,n){e.setAttribute(t,"style",n)}function Mu(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function Gf(e,t,n){for(var r=e.length;;){var i=e.indexOf(t,n);if(-1===i)return i;if(0===i||e.charCodeAt(i-1)<=32){var a=t.length;if(i+a===r||e.charCodeAt(i+a)<=32)return i}n=i+1}}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */var zf="ng-template";function L_(e,t,n){for(var r=0;r<e.length;){var i=e[r++];if(n&&"class"===i){if(-1!==Gf((i=e[r]).toLowerCase(),t,0))return!0}else if(1===i){for(;r<e.length&&"string"==typeof(i=e[r++]);)if(i.toLowerCase()===t)return!0;return!1}}return!1}function Wf(e){return 4===e.type&&e.value!==zf}function x_(e,t,n){return t===(4!==e.type||n?e.value:zf)}function B_(e,t,n){for(var r=4,i=e.attrs||[],a=function H_(e){for(var t=0;t<e.length;t++)if(vc(e[t]))return t;return e.length}(i),o=!1,u=0;u<t.length;u++){var s=t[u];if("number"!=typeof s){if(!o)if(4&r){if(r=2|1&r,""!==s&&!x_(e,s,n)||""===s&&1===t.length){if(Et(r))return!1;o=!0}}else{var l=8&r?s:t[++u];if(8&r&&null!==e.attrs){if(!L_(e.attrs,l,n)){if(Et(r))return!1;o=!0}continue}var f=j_(8&r?"class":s,i,Wf(e),n);if(-1===f){if(Et(r))return!1;o=!0;continue}if(""!==l){var d;d=f>a?"":i[f+1].toLowerCase();var v=8&r?d:null;if(v&&-1!==Gf(v,l,0)||2&r&&l!==d){if(Et(r))return!1;o=!0}}}}else{if(!o&&!Et(r)&&!Et(s))return!1;if(o&&Et(s))continue;o=!1,r=s|1&r}}return Et(r)||o}function Et(e){return 0==(1&e)}function j_(e,t,n,r){if(null===t)return-1;var i=0;if(r||!n){for(var a=!1;i<t.length;){var o=t[i];if(o===e)return i;if(3===o||6===o)a=!0;else{if(1===o||2===o){for(var u=t[++i];"string"==typeof u;)u=t[++i];continue}if(4===o)break;if(0===o){i+=4;continue}}i+=a?1:2}return-1}return function U_(e,t){var n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){var r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function qf(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=0;r<t.length;r++)if(B_(e,t[r],n))return!0;return!1}function Zf(e,t){return e?":not("+t.trim()+")":t}function z_(e){for(var t=e[0],n=1,r=2,i="",a=!1;n<e.length;){var o=e[n];if("string"==typeof o)if(2&r){var u=e[++n];i+="["+o+(u.length>0?'="'+u+'"':"")+"]"}else 8&r?i+="."+o:4&r&&(i+=" "+o);else""!==i&&!Et(o)&&(t+=Zf(a,i),i=""),r=o,a=a||!Et(r);n++}return""!==i&&(t+=Zf(a,i)),t}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
var j={};
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function Qf(e,t,n,r){if(!r)if(3==(3&t[2])){var a=e.preOrderCheckHooks;null!==a&&Vi(t,a,n)}else{var o=e.preOrderHooks;null!==o&&Hi(t,o,0,n)}un(n)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function Xf(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,i=ed(e,t,n,r);return i.resolveInjectorInitializers(),i}function ed(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new Set,a=[n||J,MD(e)];return r=r||("object"==typeof e?void 0:re(e)),new sf(a,t||aa(),r||null,i)
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */}var Zt=function(){var e=function(){function t(){g(this,t)}return m(t,null,[{key:"create",value:function(r,i){var a;if(Array.isArray(r))return Xf({name:""},i,r,"");var o=null!==(a=r.name)&&void 0!==a?a:"";return Xf({name:o},r.parent,r.providers,o)}}]),t}();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
return e.THROW_IF_NOT_FOUND=Br,e.NULL=new nf,e.\u0275prov=le({token:e,providedIn:"any",factory:function(){return X(ef)}}),e.__NG_ELEMENT_ID__=-1,e}();
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.Default,n=E();if(null===n)return X(e,t);var r=Se();return Ec(r,n,R(e),t)}function yd(e,t){var n=e.contentQueries;if(null!==n)for(var r=0;r<n.length;r+=2){var a=n[r+1];if(-1!==a){var o=e.data[a];Po(n[r]),o.contentQueries(2,t[a],a)}}}function va(e,t,n,r,i,a,o,u,s,l,c){var f=t.blueprint.slice();return f[0]=i,f[2]=76|r,(null!==c||e&&1024&e[2])&&(f[2]|=1024),Xl(f),f[3]=f[15]=e,f[8]=n,f[10]=o||e&&e[10],f[q]=u||e&&e[q],f[12]=s||e&&e[12]||null,f[9]=l||e&&e[9]||null,f[6]=a,f[20]=function r_(){return n_++}(),f[21]=c,f[16]=2==t.type?e[16]:f,f}function rr(e,t,n,r,i){var a=e.data[t];if(null===a)a=function Hu(e,t,n,r,i){var a=nc(),o=Mo(),s=e.data[t]=function SE(e,t,n,r,i,a){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:i,attrs:a,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,o?a:a&&a.parent,n,t,r,i);return null===e.firstChild&&(e.firstChild=s),null!==a&&(o?null==a.child&&null!==s.parent&&(a.child=s):null===a.next&&(a.next=s)),s}(e,t,n,r,i),function Qm(){return L.lFrame.inI18n}()&&(a.flags|=64);else if(64&a.type){a.type=n,a.value=r,a.attrs=i;var o=function Ar(){var e=L.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();a.injectorIndex=null===o?-1:o.injectorIndex}return At(a,!0),a}function ir(e,t,n,r){if(0===n)return-1;for(var i=t.length,a=0;a<n;a++)t.push(r),e.blueprint.push(r),e.data.push(null);return i}function Uu(e,t,n){Fo(t);try{var r=e.viewQuery;null!==r&&Ku(1,r,n);var i=e.template;null!==i&&Dd(e,t,i,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&yd(e,t),e.staticViewQueries&&Ku(2,e.viewQuery,n);var a=e.components;null!==a&&function wE(e,t){for(var n=0;n<t.length;n++)HE(e,t[n])}(t,a)}catch(o){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),o}finally{t[2]&=-5,Ro()}}function ha(e,t,n,r){var i=t[2];if(128!=(128&i)){Fo(t);try{Xl(t),function ic(e){return L.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Dd(e,t,n,2,r);var o=3==(3&i);if(o){var u=e.preOrderCheckHooks;null!==u&&Vi(t,u,null)}else{var s=e.preOrderHooks;null!==s&&Hi(t,s,0,null),No(t,0)}if(function jE(e){for(var t=yu(e);null!==t;t=Du(t))if(t[2])for(var n=t[9],r=0;r<n.length;r++){var i=n[r];0==(512&i[2])&&Io(i[3],1),i[2]|=512}}(t),function BE(e){for(var t=yu(e);null!==t;t=Du(t))for(var n=10;n<t.length;n++){var r=t[n],i=r[1];Bi(r)&&ha(i,r,i.template,r[8])}}(t),null!==e.contentQueries&&yd(e,t),o){var l=e.contentCheckHooks;null!==l&&Vi(t,l)}else{var c=e.contentHooks;null!==c&&Hi(t,c,1),No(t,1)}!
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function _E(e,t){var n=e.hostBindingOpCodes;if(null!==n)try{for(var r=0;r<n.length;r++){var i=n[r];if(i<0)un(~i);else{var a=i,o=n[++r],u=n[++r];Km(o,a),u(2,t[a])}}}finally{un(-1)}}(e,t);var f=e.components;null!==f&&function EE(e,t){for(var n=0;n<t.length;n++)VE(e,t[n])}(t,f);var d=e.viewQuery;if(null!==d&&Ku(2,d,r),o){var v=e.viewCheckHooks;null!==v&&Vi(t,v)}else{var h=e.viewHooks;null!==h&&Hi(t,h,2),No(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,Io(t[3],-1))}finally{Ro()}}}function Dd(e,t,n,r,i){var a=Ge(),o=2&r;try{un(-1),o&&t.length>22&&Qf(e,t,22,!1),n(r,i)}finally{un(a)}}function Ed(e){var t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Wu(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Wu(e,t,n,r,i,a,o,u,s,l){var c=22+r,f=c+i,d=function CE(e,t){for(var n=[],r=0;r<t;r++)n.push(r<e?null:j);return n}(c,f),v="function"==typeof l?l():l;return d[1]={type:e,blueprint:d,template:n,queries:null,viewQuery:u,declTNode:t,data:d.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof a?a():a,pipeRegistry:"function"==typeof o?o():o,firstChild:null,schemas:s,consts:v,incompleteFirstPass:!1}}function Cd(e,t,n){for(var r in e)if(e.hasOwnProperty(r)){var i=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,i):n[r]=[t,i]}return n}function bd(e,t){for(var r=t.directiveEnd,i=e.data,a=t.attrs,o=[],u=null,s=null,l=t.directiveStart;l<r;l++){var c=i[l],f=c.inputs,d=null===a||Wf(t)?null:xE(f,a);o.push(d),u=Cd(f,l,u),s=Cd(c.outputs,l,s)}null!==u&&(u.hasOwnProperty("class")&&(t.flags|=16),u.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=o,t.inputs=u,t.outputs=s}function Id(e,t,n,r,i,a){var o=a.hostBindings;if(o){var u=e.hostBindingOpCodes;null===u&&(u=e.hostBindingOpCodes=[]);var s=~t.index;(function kE(e){for(var t=e.length;t>0;){var n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(u)!=s&&u.push(s),u.push(r,i,o)}}function Md(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Td(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function NE(e,t,n){if(n){if(t.exportAs)for(var r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;_t(t)&&(n[""]=e)}}function kd(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Ad(e,t,n,r,i){e.data[r]=i;var a=i.factory||(i.factory=_n(i.type)),o=new Pr(a,_t(i),Z);e.blueprint[r]=o,n[r]=o,Id(e,t,0,r,ir(e,n,i.hostVars,j),i)}function OE(e,t,n){var r=ft(t,e),i=Ed(n),a=e[10],o=pa(e,va(e,i,null,n.onPush?32:16,r,t,a,a.createRenderer(r,n),null,null,null));e[t.index]=o}function LE(e,t,n,r,i,a){var o=a[t];if(null!==o)for(var u=r.setInput,s=0;s<o.length;){var l=o[s++],c=o[s++],f=o[s++];null!==u?r.setInput(n,f,l,c):n[c]=f}}function xE(e,t){for(var n=null,r=0;r<t.length;){var i=t[r];if(0!==i)if(5!==i){if("number"==typeof i)break;e.hasOwnProperty(i)&&(null===n&&(n=[]),n.push(i,e[i],t[r+1])),r+=2}else r+=2;else r+=4}return n}function VE(e,t){var n=nt(t,e);if(Bi(n)){var r=n[1];48&n[2]?ha(r,n,r.template,n[8]):n[5]>0&&$u(n)}}function $u(e){for(var t=yu(e);null!==t;t=Du(t))for(var n=10;n<t.length;n++){var r=t[n];if(Bi(r))if(512&r[2]){var i=r[1];ha(i,r,i.template,r[8])}else r[5]>0&&$u(r)}var o=e[1].components;if(null!==o)for(var u=0;u<o.length;u++){var s=nt(o[u],e);Bi(s)&&s[5]>0&&$u(s)}}function HE(e,t){var n=nt(t,e),r=n[1];(function UE(e,t){for(var n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Uu(r,n,n[8])}function pa(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function ga(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=t[10],a=!1;!a&&i.begin&&i.begin();try{ha(e,t,e.template,n)}catch(o){throw r&&Od(t,o),o}finally{!a&&i.end&&i.end()}}function Ku(e,t,n){Po(0),t(e,n)}function Od(e,t){var n=e[9],r=n?n.get(Xn,null):null;r&&r.handleError(t)}function Yu(e,t,n,r,i){for(var a=0;a<n.length;){var o=n[a++],u=n[a++],s=t[o],l=e.data[o];null!==l.setInput?l.setInput(s,i,r,u):s[u]=i}}function Qt(e,t,n){var r=function xi(e,t){return ye(t[e])}(t,e);!function Tf(e,t,n){e.setValue(t,n)}(e[q],r,n)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function ma(e,t,n){var r=n?e.styles:null,i=n?e.classes:null,a=0;if(null!==t)for(var o=0;o<t.length;o++){var u=t[o];"number"==typeof u?a=u:1==a?i=lo(i,u):2==a&&(r=lo(r,u+": "+t[++o]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=i:e.classesWithoutHost=i}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function ya(e,t,n,r){for(var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];null!==n;){var a=t[n.index];if(null!==a&&r.push(ye(a)),Dt(a))for(var o=10;o<a.length;o++){var u=a[o],s=u[1].firstChild;null!==s&&ya(u[1],u,s,r)}var l=n.type;if(8&l)ya(e,t,n.child,r);else if(32&l)for(var c=mu(n,t),f=void 0;f=c();)r.push(f);else if(16&l){var d=jf(t,n);if(Array.isArray(d))r.push.apply(r,Ce(d));else{var v=Zr(t[16]);ya(v[1],v,d,r,!0)}}n=i?n.projectionNext:n.next}return r}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */var Qr=function(){function e(t,n){g(this,e),this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}return m(e,[{key:"rootNodes",get:function(){var n=this._lView,r=n[1];return ya(r,n,r.firstChild,[])}},{key:"context",get:function(){return this._lView[8]},set:function(n){this._lView[8]=n}},{key:"destroyed",get:function(){return 128==(128&this._lView[2])}},{key:"destroy",value:function(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){var n=this._lView[3];if(Dt(n)){var r=n[8],i=r?r.indexOf(this):-1;i>-1&&(function wu(e,t){if(!(e.length<=10)){var n=10+t,r=e[n];if(r){var i=r[17];null!==i&&i!==e&&kf(i,r),t>0&&(e[n-1][4]=r[4]);var a=$i(e,10+t);!function C_(e,t){$r(e,t,t[q],2,null,null),t[0]=null,t[6]=null}(r[1],r);var o=a[19];null!==o&&o.detachView(a[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}}(n,i),$i(r,i))}this._attachedToViewContainer=!1}!function Af(e,t){if(!(128&t[2])){var n=t[q];n.destroyNode&&$r(e,t,n,3,null,null),function I_(e){var t=e[13];if(!t)return Cu(e[1],e);for(;t;){var n=null;if($e(t))n=t[13];else{var r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)$e(t)&&Cu(t[1],t),t=t[3];null===t&&(t=e),$e(t)&&Cu(t[1],t),n=t&&t[4]}t=n}}(t)}}(this._lView[1],this._lView)}},{key:"onDestroy",value:function(n){!function wd(e,t,n,r){var i=function Fd(e){return e[7]||(e[7]=[])}(t);null===n?i.push(r):(i.push(n),e.firstCreatePass&&function Rd(e){return e.cleanup||(e.cleanup=[])}(e).push(r,i.length-1))}(this._lView[1],this._lView,null,n)}},{key:"markForCheck",value:function(){!function Qu(e){for(;e;){e[2]|=32;var t=Zr(e);if(Tm(e)&&!t)return e;e=t}return null}(this._cdRefInjectingView||this._lView)}},{key:"detach",value:function(){this._lView[2]&=-65}},{key:"reattach",value:function(){this._lView[2]|=64}},{key:"detectChanges",value:function(){ga(this._lView[1],this._lView,this.context)}},{key:"checkNoChanges",value:function(){}},{key:"attachToViewContainerRef",value:function(){if(this._appRef)throw new P(902,!1);this._attachedToViewContainer=!0}},{key:"detachFromAppRef",value:function(){this._appRef=null,function S_(e,t){$r(e,t,t[q],2,null,null)}(this._lView[1],this._lView)}},{key:"attachToAppRef",value:function(n){if(this._attachedToViewContainer)throw new P(902,!1);this._appRef=n}}]),e}(),GE=function(e){z(n,e);var t=W(n);function n(r){var i;return g(this,n),(i=t.call(this,r))._view=r,i}return m(n,[{key:"detectChanges",value:function(){var i=this._view;ga(i[1],i,i[8],!1)}},{key:"checkNoChanges",value:function(){}},{key:"context",get:function(){return null}}]),n}(Qr),Ju=function(e){z(n,e);var t=W(n);function n(r){var i;return g(this,n),(i=t.call(this)).ngModule=r,i}return m(n,[{key:"resolveComponentFactory",value:function(i){var a=te(i);return new Kr(a,this.ngModule)}}]),n}(Kn);
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function Ld(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}var WE=function(){function e(t,n){g(this,e),this.injector=t,this.parentInjector=n}return m(e,[{key:"get",value:function(n,r,i){var a=this.injector.get(n,uu,i);return a!==uu||r===uu?a:this.parentInjector.get(n,r,i)}}]),e}(),Kr=function(e){z(n,e);var t=W(n);function n(r,i){var a;return g(this,n),(a=t.call(this)).componentDef=r,a.ngModule=i,a.componentType=r.type,a.selector=function W_(e){return e.map(z_).join(",")}(r.selectors),a.ngContentSelectors=r.ngContentSelectors?r.ngContentSelectors:[],a.isBoundToModule=!!i,a}return m(n,[{key:"inputs",get:function(){return Ld(this.componentDef.inputs)}},{key:"outputs",get:function(){return Ld(this.componentDef.outputs)}},{key:"create",value:function(i,a,o,u){var s=(u=u||this.ngModule)instanceof $n?u:null==u?void 0:u.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);var l=s?new WE(i,s):i,c=l.get(df,null);if(null===c)throw new P(407,!1);var C,y,f=l.get(GD,null),d=c.createRenderer(null,this.componentDef),v=this.componentDef.selectors[0][0]||"div",h=o?function bE(e,t,n){return e.selectRootElement(t,n===kt.ShadowDom)}(d,o,this.componentDef.encapsulation):Eu(d,v,function zE(e){var t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(v)),p=this.componentDef.onPush?288:272,D=Wu(0,null,null,1,0,null,null,null,null,null),_=va(null,D,null,p,null,null,c,d,f,l,null);Fo(_);try{var I=function $E(e,t,n,r,i,a){var o=n[1];n[22]=e;var s=rr(o,22,2,"#host",null),l=s.mergedAttrs=t.hostAttrs;null!==l&&(ma(s,l,!0),null!==e&&(Ui(i,e,l),null!==s.classes&&Mu(i,e,s.classes),null!==s.styles&&Uf(i,e,s.styles)));var c=r.createRenderer(e,t),f=va(n,Ed(t),null,t.onPush?32:16,n[22],s,r,c,a||null,null,null);return o.firstCreatePass&&(qi(Rr(s,n),o,t.type),Td(o,s),kd(s,n.length,1)),pa(n,f),n[22]=f}(h,this.componentDef,_,c,d);if(h)if(o)Ui(d,h,["ng-version",zD.full]);else{var N=function q_(e){for(var t=[],n=[],r=1,i=2;r<e.length;){var a=e[r];if("string"==typeof a)2===i?""!==a&&t.push(a,e[++r]):8===i&&n.push(a);else{if(!Et(i))break;i=a}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]),V=N.attrs,ue=N.classes;V&&Ui(d,h,V),ue&&ue.length>0&&Mu(d,h,ue.join(" "))}if(y=function So(e,t){return e.data[t]}(D,22),void 0!==a)for(var ke=y.projection=[],Be=0;Be<this.ngContentSelectors.length;Be++){var b=a[Be];ke.push(null!=b?Array.from(b):null)}C=function QE(e,t,n,r){var i=n[1],a=function TE(e,t,n){var r=Se();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Ad(e,r,t,ir(e,t,1,null),n),bd(e,r));var a=Nr(t,e,r.directiveStart,r);Oe(a,t);var o=ft(r,t);return o&&Oe(o,t),a}(i,n,t);if(e[8]=n[8]=a,null!==r){var u,o=Pe(r);try{for(o.s();!(u=o.n()).done;)(0,u.value)(a,t)}catch(d){o.e(d)}finally{o.f()}}if(t.contentQueries){var l=Se();t.contentQueries(1,a,l.directiveStart)}var c=Se();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(un(c.index),Id(n[1],c,0,c.directiveStart,c.directiveEnd,t),Md(t,a)),a}(I,this.componentDef,_,[KE]),Uu(D,_,null)}finally{Ro()}return new ZE(this.componentType,C,Yn(y,_),_,y)}}]),n}(cf),ZE=function(e){z(n,e);var t=W(n);function n(r,i,a,o,u){var s;return g(this,n),(s=t.call(this)).location=a,s._rootLView=o,s._tNode=u,s.instance=i,s.hostView=s.changeDetectorRef=new GE(o),s.componentType=r,s}return m(n,[{key:"setInput",value:function(i,a){var u,o=this._tNode.inputs;if(null!==o&&(u=o[i])){var s=this._rootLView;Yu(s[1],s,u,i,a),function Sd(e,t){var n=nt(t,e);16&n[2]||(n[2]|=32)}(s,this._tNode.index)}}},{key:"injector",get:function(){return new jn(this._tNode,this._rootLView)}},{key:"destroy",value:function(){this.hostView.destroy()}},{key:"onDestroy",value:function(i){this.hostView.onDestroy(i)}}]),n}(xD);function KE(){var e=Se();ji(E()[1],e)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function or(e,t,n,r){return function Le(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}(e,function Ln(){return L.lFrame.bindingIndex++}(),n)?t+B(n)+r:j}function ts(e,t,n,r,i){var o=i?"class":"style";Yu(e,n,t.inputs[o],o,r)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function Xr(e,t,n,r){var i=E(),a=K(),o=22+e,u=i[q],s=i[o]=Eu(u,t,function ay(){return L.lFrame.currentNamespace}()),l=a.firstCreatePass?function dw(e,t,n,r,i,a,o){var u=t.consts,l=rr(t,e,2,i,on(u,a));return function qu(e,t,n,r){var i=!1;if(tc()){var a=function FE(e,t,n){var r=e.directiveRegistry,i=null;if(r)for(var a=0;a<r.length;a++){var o=r[a];qf(n,o.selectors,!1)&&(i||(i=[]),qi(Rr(n,t),e,o.type),_t(o)?(Td(e,n),i.unshift(o)):i.push(o))}return i}(e,t,n),o=null===r?null:{"":-1};if(null!==a){i=!0,kd(n,e.data.length,a.length);for(var u=0;u<a.length;u++){var s=a[u];s.providersResolver&&s.providersResolver(s)}for(var l=!1,c=!1,f=ir(e,t,a.length,null),d=0;d<a.length;d++){var v=a[d];n.mergedAttrs=Gi(n.mergedAttrs,v.hostAttrs),Ad(e,n,t,f,v),NE(f,v,o),null!==v.contentQueries&&(n.flags|=8),(null!==v.hostBindings||null!==v.hostAttrs||0!==v.hostVars)&&(n.flags|=128);var h=v.type.prototype;!l&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),l=!0),!c&&(h.ngOnChanges||h.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),c=!0),f++}bd(e,n)}o&&function RE(e,t,n){if(t)for(var r=e.localNames=[],i=0;i<t.length;i+=2){var a=n[t[i+1]];if(null==a)throw new P(-301,!1);r.push(t[i],a)}}(n,r,o)}return n.mergedAttrs=Gi(n.mergedAttrs,n.attrs),i}(t,n,l,on(u,o)),null!==l.attrs&&ma(l,l.attrs,!1),null!==l.mergedAttrs&&ma(l,l.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,l),l}(o,a,i,0,t,n,r):a.data[o];At(l,!0);var c=l.mergedAttrs;null!==c&&Ui(u,s,c);var f=l.classes;null!==f&&Mu(u,s,f);var d=l.styles;return null!==d&&Uf(u,s,d),64!=(64&l.flags)&&sa(a,i,s,l),0===function Hm(){return L.lFrame.elementDepthCount}()&&Oe(s,i),function Um(){L.lFrame.elementDepthCount++}(),function Oi(e){return 1==(1&e.flags)}(l)&&(function Gu(e,t,n){!tc()||(function AE(e,t,n,r){var i=n.directiveStart,a=n.directiveEnd;e.firstCreatePass||Rr(n,t),Oe(r,t);for(var o=n.initialInputs,u=i;u<a;u++){var s=e.data[u],l=_t(s);l&&OE(t,n,s);var c=Nr(t,e,u,n);Oe(c,t),null!==o&&LE(0,u-i,c,s,0,o),l&&(nt(n.index,t)[8]=c)}}(e,t,n,ft(n,t)),128==(128&n.flags)&&function PE(e,t,n){var r=n.directiveStart,i=n.directiveEnd,a=n.index,o=function Ym(){return L.lFrame.currentDirectiveIndex}();try{un(a);for(var u=r;u<i;u++){var s=e.data[u],l=t[u];ko(u),(null!==s.hostBindings||0!==s.hostVars||null!==s.hostAttrs)&&Md(s,l)}}finally{un(-1),ko(o)}}(e,t,n))}(a,i,l),function _d(e,t,n){if(_o(t))for(var i=t.directiveEnd,a=t.directiveStart;a<i;a++){var o=e.data[a];o.contentQueries&&o.contentQueries(1,n[a],a)}}(a,l,i)),null!==r&&function zu(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ft,r=t.localNames;if(null!==r)for(var i=t.index+1,a=0;a<r.length;a+=2){var o=r[a+1],u=-1===o?n(t,e):e[o];e[i++]=u}}(i,l),Xr}function ei(){var e=Se();Mo()?function To(){L.lFrame.isParent=!1}():At(e=e.parent,!1);var t=e;!function Gm(){L.lFrame.elementDepthCount--}();var n=K();return n.firstCreatePass&&(ji(n,e),_o(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function cy(e){return 0!=(16&e.flags)}(t)&&ts(n,t,E(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function fy(e){return 0!=(32&e.flags)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */(t)&&ts(n,t,E(),t.stylesWithoutHost,!1),ei}function ns(e,t,n,r){return Xr(e,t,n,r),ei(),ns
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function as(e){return!!e&&"function"==typeof e.then}var pw=function Yd(e){return!!e&&"function"==typeof e.subscribe};
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function wa(e,t,n){var r=E(),i=or(r,e,t,n);return i!==j&&Qt(r,Ge(),i),wa}var gr="en-US";
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
var mr=m(function e(){g(this,e)}),a0=m(function e(){g(this,e)}),wh=function(e){z(n,e);var t=W(n);function n(r,i){var a;g(this,n),(a=t.call(this))._parent=i,a._bootstrapComponents=[],a.destroyCbs=[],a.componentFactoryResolver=new Ju(ot(a));var o=function et(e,t){var n=e[Gl]||null;if(!n&&!0===t)throw new Error("Type ".concat(re(e)," does not have '\u0275mod' property."));return n}(r);return a._bootstrapComponents=function qt(e){return e instanceof Function?e():e}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */(o.bootstrap),a._r3Injector=ed(r,i,[{provide:mr,useValue:ot(a)},{provide:Kn,useValue:a.componentFactoryResolver}],re(r),new Set(["environment"])),a._r3Injector.resolveInjectorInitializers(),a.instance=a._r3Injector.get(r),a}return m(n,[{key:"injector",get:function(){return this._r3Injector}},{key:"destroy",value:function(){var i=this._r3Injector;!i.destroyed&&i.destroy(),this.destroyCbs.forEach(function(a){return a()}),this.destroyCbs=null}},{key:"onDestroy",value:function(i){this.destroyCbs.push(i)}}]),n}(mr),hs=function(e){z(n,e);var t=W(n);function n(r){var i;return g(this,n),(i=t.call(this)).moduleType=r,i}return m(n,[{key:"create",value:function(i){return new wh(this.moduleType,i)}}]),n}(a0),B0=function(e){z(n,e);var t=W(n);function n(){var r,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return g(this,n),(r=t.call(this)).__isAsync=i,r}return m(n,[{key:"emit",value:function(i){we(ve(n.prototype),"next",this).call(this,i)}},{key:"subscribe",value:function(i,a,o){var u,s,l,c=i,f=a||function(){return null},d=o;if(i&&"object"==typeof i){var v=i;c=null===(u=v.next)||void 0===u?void 0:u.bind(v),f=null===(s=v.error)||void 0===s?void 0:s.bind(v),d=null===(l=v.complete)||void 0===l?void 0:l.bind(v)}this.__isAsync&&(f=ps(f),c&&(c=ps(c)),d&&(d=ps(d)));var h=we(ve(n.prototype),"subscribe",this).call(this,{next:c,error:f,complete:d});return i instanceof dn&&i.add(h),h}}]),n}(Si);
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function ps(e){return function(t){setTimeout(e,void 0,t)}}var Kt=B0;
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function ka(){}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */var rp=new $("Application Initializer"),Aa=function(){var e=function(){function t(n){var r=this;g(this,t),this.appInits=n,this.resolve=ka,this.reject=ka,this.initialized=!1,this.done=!1,this.donePromise=new Promise(function(i,a){r.resolve=i,r.reject=a})}return m(t,[{key:"runInitializers",value:function(){var r=this;if(!this.initialized){var i=[],a=function(){r.done=!0,r.resolve()};if(this.appInits)for(var o=function(l){var c=r.appInits[l]();if(as(c))i.push(c);else if(pw(c)){var f=new Promise(function(d,v){c.subscribe({complete:d,error:v})});i.push(f)}},u=0;u<this.appInits.length;u++)o(u);Promise.all(i).then(function(){a()}).catch(function(s){r.reject(s)}),0===i.length&&a(),this.initialized=!0}}}]),t}();return e.\u0275fac=function(n){return new(n||e)(X(rp,8))},e.\u0275prov=le({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),ci=new $("AppId",{providedIn:"root",factory:function ip(){return"".concat(ws()).concat(ws()).concat(ws())}});
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function ws(){return String.fromCharCode(97+Math.floor(25*Math.random()))}var ap=new $("Platform Initializer"),op=new $("Platform ID",{providedIn:"platform",factory:function(){return"unknown"}}),Tb=new $("appBootstrapListener"),Jt=new $("LocaleId",{providedIn:"root",factory:function(){return function xy(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.Default;return"number"!=typeof t&&(t=0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)),X(e,t)}(Jt,O.Optional|O.SkipSelf)||
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function kb(){return"undefined"!=typeof $localize&&$localize.locale||gr}()}}),Nb=function(){return Promise.resolve(0)}();
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function Cs(e){"undefined"==typeof Zone?Nb.then(function(){e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
var Ke=function(){function e(t){var n=t.enableLongStackTrace,r=void 0!==n&&n,i=t.shouldCoalesceEventChangeDetection,a=void 0!==i&&i,o=t.shouldCoalesceRunChangeDetection,u=void 0!==o&&o;if(g(this,e),this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Kt(!1),this.onMicrotaskEmpty=new Kt(!1),this.onStable=new Kt(!1),this.onError=new Kt(!1),"undefined"==typeof Zone)throw new P(908,!1);Zone.assertZonePatched();var s=this;if(s._nesting=0,s._outer=s._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){var l=Zone.AsyncStackTaggingZoneSpec;s._inner=s._inner.fork(new l("Angular"))}Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),r&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!u&&a,s.shouldCoalesceRunChangeDetection=u,s.lastRequestAnimationFrameId=-1,s.nativeRequestAnimationFrame=function Ob(){var e=ie.requestAnimationFrame,t=ie.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){var n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);var r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function Bb(e){var t=function(){!function xb(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(ie,function(){e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",function(){e.lastRequestAnimationFrameId=-1,Ss(e),e.isCheckStableRunning=!0,bs(e),e.isCheckStableRunning=!1},void 0,function(){},function(){})),e.fakeTopEventTask.invoke()}),Ss(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:function(r,i,a,o,u,s){try{return lp(e),r.invokeTask(a,o,u,s)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===o.type||e.shouldCoalesceRunChangeDetection)&&t(),cp(e)}},onInvoke:function(r,i,a,o,u,s,l){try{return lp(e),r.invoke(a,o,u,s,l)}finally{e.shouldCoalesceRunChangeDetection&&t(),cp(e)}},onHasTask:function(r,i,a,o){r.hasTask(a,o),i===a&&("microTask"==o.change?(e._hasPendingMicrotasks=o.microTask,Ss(e),bs(e)):"macroTask"==o.change&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:function(r,i,a,o){return r.handleError(a,o),e.runOutsideAngular(function(){return e.onError.emit(o)}),!1}})}(s)}return m(e,[{key:"run",value:function(n,r,i){return this._inner.run(n,r,i)}},{key:"runTask",value:function(n,r,i,a){var o=this._inner,u=o.scheduleEventTask("NgZoneEvent: "+a,n,Lb,ka,ka);try{return o.runTask(u,r,i)}finally{o.cancelTask(u)}}},{key:"runGuarded",value:function(n,r,i){return this._inner.runGuarded(n,r,i)}},{key:"runOutsideAngular",value:function(n){return this._outer.run(n)}}],[{key:"isInAngularZone",value:function(){return"undefined"!=typeof Zone&&!0===Zone.current.get("isAngularZone")}},{key:"assertInAngularZone",value:function(){if(!e.isInAngularZone())throw new P(909,!1)}},{key:"assertNotInAngularZone",value:function(){if(e.isInAngularZone())throw new P(909,!1)}}]),e}(),Lb={};function bs(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(function(){return e.onStable.emit(null)})}finally{e.isStable=!0}}}function Ss(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function lp(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function cp(e){e._nesting--,bs(e)}var fi,jb=function(){function e(){g(this,e),this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Kt,this.onMicrotaskEmpty=new Kt,this.onStable=new Kt,this.onError=new Kt}return m(e,[{key:"run",value:function(n,r,i){return n.apply(r,i)}},{key:"runGuarded",value:function(n,r,i){return n.apply(r,i)}},{key:"runOutsideAngular",value:function(n){return n()}},{key:"runTask",value:function(n,r,i,a){return n.apply(r,i)}}]),e}(),fp=new $(""),Pa=new $(""),Is=function(){var e=function(){function t(n,r,i){var a=this;g(this,t),this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,fi||(function Vb(e){fi=e}(i),i.addToWindow(r)),this._watchAngularEvents(),n.run(function(){a.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}return m(t,[{key:"_watchAngularEvents",value:function(){var r=this;this._ngZone.onUnstable.subscribe({next:function(){r._didWork=!0,r._isZoneStable=!1}}),this._ngZone.runOutsideAngular(function(){r._ngZone.onStable.subscribe({next:function(){Ke.assertNotInAngularZone(),Cs(function(){r._isZoneStable=!0,r._runCallbacksIfReady()})}})})}},{key:"increasePendingRequestCount",value:function(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}},{key:"decreasePendingRequestCount",value:function(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}},{key:"isStable",value:function(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}},{key:"_runCallbacksIfReady",value:function(){var r=this;if(this.isStable())Cs(function(){for(;0!==r._callbacks.length;){var a=r._callbacks.pop();clearTimeout(a.timeoutId),a.doneCb(r._didWork)}r._didWork=!1});else{var i=this.getPendingTasks();this._callbacks=this._callbacks.filter(function(a){return!a.updateCb||!a.updateCb(i)||(clearTimeout(a.timeoutId),!1)}),this._didWork=!0}}},{key:"getPendingTasks",value:function(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(function(r){return{source:r.source,creationLocation:r.creationLocation,data:r.data}}):[]}},{key:"addCallback",value:function(r,i,a){var o=this,u=-1;i&&i>0&&(u=setTimeout(function(){o._callbacks=o._callbacks.filter(function(s){return s.timeoutId!==u}),r(o._didWork,o.getPendingTasks())},i)),this._callbacks.push({doneCb:r,timeoutId:u,updateCb:a})}},{key:"whenStable",value:function(r,i,a){if(a&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(r,i,a),this._runCallbacksIfReady()}},{key:"getPendingRequestCount",value:function(){return this._pendingCount}},{key:"registerApplication",value:function(r){this.registry.registerApplication(r,this)}},{key:"unregisterApplication",value:function(r){this.registry.unregisterApplication(r)}},{key:"findProviders",value:function(r,i,a){return[]}}]),t}();return e.\u0275fac=function(n){return new(n||e)(X(Ke),X(Ms),X(Pa))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e}(),Ms=function(){var e=function(){function t(){g(this,t),this._applications=new Map}return m(t,[{key:"registerApplication",value:function(r,i){this._applications.set(r,i)}},{key:"unregisterApplication",value:function(r){this._applications.delete(r)}},{key:"unregisterAllApplications",value:function(){this._applications.clear()}},{key:"getTestability",value:function(r){return this._applications.get(r)||null}},{key:"getAllTestabilities",value:function(){return Array.from(this._applications.values())}},{key:"getAllRootElements",value:function(){return Array.from(this._applications.keys())}},{key:"findTestabilityInTree",value:function(r){var a,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return null!==(a=null==fi?void 0:fi.findTestabilityInTree(this,r,i))&&void 0!==a?a:null}}]),t}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=le({token:e,factory:e.\u0275fac,providedIn:"platform"}),e}(),xt=null,dp=new $("AllowMultipleToken"),Ts=new $("PlatformDestroyListeners");
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function Hb(e,t,n){var r=new hs(n);return Promise.resolve(r)}function Gb(e){if(xt&&!xt.get(dp,!1))throw new P(400,!1);xt=e;var t=e.get(gp);return function vp(e){var t=e.get(ap,null);t&&t.forEach(function(n){return n()})}(e),t}function hp(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r="Platform: ".concat(t),i=new $(r);return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=ks();if(!o||o.injector.get(dp,!1)){var u=[].concat(Ce(n),Ce(a),[{provide:i,useValue:!0}]);e?e(u):Gb(pp(u,r))}return Wb()}}function Wb(e){var t=ks();if(!t)throw new P(401,!1);return t}function pp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return Zt.create({name:t,providers:[{provide:ru,useValue:"platform"},{provide:Ts,useValue:new Set([function(){return xt=null}])}].concat(Ce(e))})}function ks(){var e;return null!==(e=null==xt?void 0:xt.get(gp))&&void 0!==e?e:null}var gp=function(){var e=function(){function t(n){g(this,t),this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}return m(t,[{key:"bootstrapModuleFactory",value:function(r,i){var a=this,o=function yp(e,t){return"noop"===e?new jb:("zone.js"===e?void 0:e)||new Ke(t)}(null==i?void 0:i.ngZone,function mp(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(i)),u=[{provide:Ke,useValue:o}];return o.run(function(){var s=Zt.create({providers:u,parent:a.injector,name:r.moduleType.name}),l=r.create(s),c=l.injector.get(Xn,null);if(!c)throw new P(402,!1);return o.runOutsideAngular(function(){var f=o.onError.subscribe({next:function(v){c.handleError(v)}});l.onDestroy(function(){Ra(a._modules,l),f.unsubscribe()})}),function Dp(e,t,n){try{var r=n();return as(r)?r.catch(function(i){throw t.runOutsideAngular(function(){return e.handleError(i)}),i}):r}catch(i){throw t.runOutsideAngular(function(){return e.handleError(i)}),i}}(c,o,function(){var f=l.injector.get(Aa);return f.runInitializers(),f.donePromise.then(function(){return function Yv(e){Xe(e,"Expected localeId to be defined"),"string"==typeof e&&e.toLowerCase().replace(/_/g,"-")}(l.injector.get(Jt,gr)||gr),a._moduleDoBootstrap(l),l})})})}},{key:"bootstrapModule",value:function(r){var i=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=_p({},a);return Hb(0,0,r).then(function(u){return i.bootstrapModuleFactory(u,o)})}},{key:"_moduleDoBootstrap",value:function(r){var i=r.injector.get(Fa);if(r._bootstrapComponents.length>0)r._bootstrapComponents.forEach(function(a){return i.bootstrap(a)});else{if(!r.instance.ngDoBootstrap)throw new P(403,!1);r.instance.ngDoBootstrap(i)}this._modules.push(r)}},{key:"onDestroy",value:function(r){this._destroyListeners.push(r)}},{key:"injector",get:function(){return this._injector}},{key:"destroy",value:function(){if(this._destroyed)throw new P(404,!1);this._modules.slice().forEach(function(i){return i.destroy()}),this._destroyListeners.forEach(function(i){return i()});var r=this._injector.get(Ts,null);r&&(r.forEach(function(i){return i()}),r.clear()),this._destroyed=!0}},{key:"destroyed",get:function(){return this._destroyed}}]),t}();return e.\u0275fac=function(n){return new(n||e)(X(Zt))},e.\u0275prov=le({token:e,factory:e.\u0275fac,providedIn:"platform"}),e}();function _p(e,t){return Array.isArray(t)?t.reduce(_p,e):Object.assign(Object.assign({},e),t)}var Fa=function(){var e=function(){function t(n,r,i){var a=this;g(this,t),this._zone=n,this._injector=r,this._exceptionHandler=i,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:function(){a._zone.run(function(){a.tick()})}});var o=new qe(function(s){a._stable=a._zone.isStable&&!a._zone.hasPendingMacrotasks&&!a._zone.hasPendingMicrotasks,a._zone.runOutsideAngular(function(){s.next(a._stable),s.complete()})}),u=new qe(function(s){var l;a._zone.runOutsideAngular(function(){l=a._zone.onStable.subscribe(function(){Ke.assertNotInAngularZone(),Cs(function(){!a._stable&&!a._zone.hasPendingMacrotasks&&!a._zone.hasPendingMicrotasks&&(a._stable=!0,s.next(!0))})})});var c=a._zone.onUnstable.subscribe(function(){Ke.assertInAngularZone(),a._stable&&(a._stable=!1,a._zone.runOutsideAngular(function(){s.next(!1)}))});return function(){l.unsubscribe(),c.unsubscribe()}});this.isStable=Bl(o,u.pipe(function fm(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.connector,n=void 0===t?function(){return new Si}:t,r=e.resetOnError,i=void 0===r||r,a=e.resetOnComplete,o=void 0===a||a,u=e.resetOnRefCountZero,s=void 0===u||u;return function(l){var c,f,d,v=0,h=!1,p=!1,D=function(){null==f||f.unsubscribe(),f=void 0},_=function(){D(),c=d=void 0,h=p=!1},C=function(){var I=c;_(),null==I||I.unsubscribe()};return Tn(function(y,I){v++,!p&&!h&&D();var N=d=null!=d?d:n();I.add(function(){0==--v&&!p&&!h&&(f=uo(C,s))}),N.subscribe(I),!c&&v>0&&(c=new Er({next:function(ue){return N.next(ue)},error:function(ue){p=!0,D(),f=uo(_,i,ue),N.error(ue)},complete:function(){h=!0,D(),f=uo(_,o),N.complete()}}),nn(y).subscribe(c))})(l)}}()))}return m(t,[{key:"destroyed",get:function(){return this._destroyed}},{key:"injector",get:function(){return this._injector}},{key:"bootstrap",value:function(r,i){var c,a=this,o=r instanceof cf;if(!this._injector.get(Aa).done)throw!o&&function Sr(e){var t=te(e)||Ve(e)||He(e);return null!==t&&t.standalone}(r),new P(405,false);c=o?r:this._injector.get(Kn).resolveComponentFactory(r),this.componentTypes.push(c.componentType);var d=function Ub(e){return e.isBoundToModule}(c)?void 0:this._injector.get(mr),h=c.create(Zt.NULL,[],i||c.selector,d),p=h.location.nativeElement,D=h.injector.get(fp,null);return null==D||D.registerApplication(p),h.onDestroy(function(){a.detachView(h.hostView),Ra(a.components,h),null==D||D.unregisterApplication(p)}),this._loadComponent(h),h}},{key:"tick",value:function(){var r=this;if(this._runningTick)throw new P(101,!1);try{this._runningTick=!0;var a,i=Pe(this._views);try{for(i.s();!(a=i.n()).done;)a.value.detectChanges()}catch(c){i.e(c)}finally{i.f()}}catch(c){this._zone.runOutsideAngular(function(){return r._exceptionHandler.handleError(c)})}finally{this._runningTick=!1}}},{key:"attachView",value:function(r){var i=r;this._views.push(i),i.attachToAppRef(this)}},{key:"detachView",value:function(r){var i=r;Ra(this._views,i),i.detachFromAppRef()}},{key:"_loadComponent",value:function(r){this.attachView(r.hostView),this.tick(),this.components.push(r),this._injector.get(Tb,[]).concat(this._bootstrapListeners).forEach(function(a){return a(r)})}},{key:"ngOnDestroy",value:function(){if(!this._destroyed)try{this._destroyListeners.forEach(function(r){return r()}),this._views.slice().forEach(function(r){return r.destroy()}),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}},{key:"onDestroy",value:function(r){var i=this;return this._destroyListeners.push(r),function(){return Ra(i._destroyListeners,r)}}},{key:"destroy",value:function(){if(this._destroyed)throw new P(406,!1);var r=this._injector;r.destroy&&!r.destroyed&&r.destroy()}},{key:"viewCount",get:function(){return this._views.length}},{key:"warnIfDestroyed",value:function(){}}]),t}();return e.\u0275fac=function(n){return new(n||e)(X(Ke),X($n),X(Xn))},e.\u0275prov=le({token:e,factory:e.\u0275fac,providedIn:"root"}),e}();function Ra(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
var Sp=function(){var e=m(function t(){g(this,t)});return e.__NG_ELEMENT_ID__=Zb,e}();function Zb(e){return function $b(e,t,n){if(Ni(e)&&!n){var r=nt(e.index,t);return new Qr(r,r)}return 47&e.type?new Qr(t[16],t):null}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */(Se(),E(),16==(16&e))}var aS=hp(null,"core",[]),oS=function(){var e=m(function t(n){g(this,t)});return e.\u0275fac=function(n){return new(n||e)(X(Fa))},e.\u0275mod=br({type:e}),e.\u0275inj=An({}),e}(),Oa=null;
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function vi(){return Oa}var qa,lS=m(function e(){g(this,e)}),en=new $("DocumentToken"),TI=function(){var e=m(function t(){g(this,t)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=br({type:e}),e.\u0275inj=An({}),e}(),FI=m(function e(){g(this,e)}),KI=function(e){z(n,e);var t=W(n);function n(){var r;return g(this,n),(r=t.apply(this,arguments)).supportsDOMEvents=!0,r}return m(n)}(lS),YI=function(e){z(n,e);var t=W(n);function n(){return g(this,n),t.apply(this,arguments)}return m(n,[{key:"onAndCancel",value:function(i,a,o){return i.addEventListener(a,o,!1),function(){i.removeEventListener(a,o,!1)}}},{key:"dispatchEvent",value:function(i,a){i.dispatchEvent(a)}},{key:"remove",value:function(i){i.parentNode&&i.parentNode.removeChild(i)}},{key:"createElement",value:function(i,a){return(a=a||this.getDefaultDocument()).createElement(i)}},{key:"createHtmlDocument",value:function(){return document.implementation.createHTMLDocument("fakeTitle")}},{key:"getDefaultDocument",value:function(){return document}},{key:"isElementNode",value:function(i){return i.nodeType===Node.ELEMENT_NODE}},{key:"isShadowRoot",value:function(i){return i instanceof DocumentFragment}},{key:"getGlobalEventTarget",value:function(i,a){return"window"===a?window:"document"===a?i:"body"===a?i.body:null}},{key:"getBaseHref",value:function(i){var a=function JI(){return(mi=mi||document.querySelector("base"))?mi.getAttribute("href"):null}();return null==a?null:function XI(e){(qa=qa||document.createElement("a")).setAttribute("href",e);var t=qa.pathname;return"/"===t.charAt(0)?t:"/".concat(t)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */(a)}},{key:"resetBaseElement",value:function(){mi=null}},{key:"getUserAgent",value:function(){return window.navigator.userAgent}},{key:"getCookie",value:function(i){
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
return function $S(e,t){t=encodeURIComponent(t);var r,n=Pe(e.split(";"));try{for(n.s();!(r=n.n()).done;){var i=r.value,a=i.indexOf("="),u=Mn(-1==a?[i,""]:[i.slice(0,a),i.slice(a+1)],2),l=u[1];if(u[0].trim()===t)return decodeURIComponent(l)}}catch(c){n.e(c)}finally{n.f()}return null}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */(document.cookie,i)}}],[{key:"makeCurrent",value:function(){!function sS(e){Oa||(Oa=e)}(new n)}}]),n}(KI),mi=null,Xp=new $("TRANSITION_ID"),tM=[{provide:rp,useFactory:function eM(e,t,n){return function(){n.get(Aa).donePromise.then(function(){for(var r=vi(),i=t.querySelectorAll('style[ng-transition="'.concat(e,'"]')),a=0;a<i.length;a++)r.remove(i[a])})}},deps:[Xp,en,Zt],multi:!0}],nM=function(){function e(){g(this,e)}return m(e,[{key:"addToWindow",value:function(n){ie.getAngularTestability=function(i){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=n.findTestabilityInTree(i,a);if(null==o)throw new Error("Could not find testability for element.");return o},ie.getAllAngularTestabilities=function(){return n.getAllTestabilities()},ie.getAllAngularRootElements=function(){return n.getAllRootElements()},ie.frameworkStabilizers||(ie.frameworkStabilizers=[]),ie.frameworkStabilizers.push(function(a){var o=ie.getAllAngularTestabilities(),u=o.length,s=!1,l=function(f){s=s||f,0==--u&&a(s)};o.forEach(function(c){c.whenStable(l)})})}},{key:"findTestabilityInTree",value:function(n,r,i){if(null==r)return null;var a=n.getTestability(r);return null!=a?a:i?vi().isShadowRoot(r)?this.findTestabilityInTree(n,r.host,!0):this.findTestabilityInTree(n,r.parentElement,!0):null}}]),e}(),rM=function(){var e=function(){function t(){g(this,t)}return m(t,[{key:"build",value:function(){return new XMLHttpRequest}}]),t}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e}(),Za=new $("EventManagerPlugins"),$a=function(){var e=function(){function t(n,r){var i=this;g(this,t),this._zone=r,this._eventNameToPlugin=new Map,n.forEach(function(a){return a.manager=i}),this._plugins=n.slice().reverse()}return m(t,[{key:"addEventListener",value:function(r,i,a){return this._findPluginFor(i).addEventListener(r,i,a)}},{key:"addGlobalEventListener",value:function(r,i,a){return this._findPluginFor(i).addGlobalEventListener(r,i,a)}},{key:"getZone",value:function(){return this._zone}},{key:"_findPluginFor",value:function(r){var i=this._eventNameToPlugin.get(r);if(i)return i;for(var a=this._plugins,o=0;o<a.length;o++){var u=a[o];if(u.supports(r))return this._eventNameToPlugin.set(r,u),u}throw new Error("No event manager plugin found for event ".concat(r))}}]),t}();return e.\u0275fac=function(n){return new(n||e)(X(Za),X(Ke))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e}(),eg=function(){function e(t){g(this,e),this._doc=t}return m(e,[{key:"addGlobalEventListener",value:function(n,r,i){var a=vi().getGlobalEventTarget(this._doc,n);if(!a)throw new Error("Unsupported event target ".concat(a," for event ").concat(r));return this.addEventListener(a,r,i)}}]),e}(),tg=function(){var e=function(){function t(){g(this,t),this._stylesSet=new Set}return m(t,[{key:"addStyles",value:function(r){var i=this,a=new Set;r.forEach(function(o){i._stylesSet.has(o)||(i._stylesSet.add(o),a.add(o))}),this.onStylesAdded(a)}},{key:"onStylesAdded",value:function(r){}},{key:"getAllStyles",value:function(){return Array.from(this._stylesSet)}}]),t}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e}(),yi=function(){var e=function(t){z(r,t);var n=W(r);function r(i){var a;return g(this,r),(a=n.call(this))._doc=i,a._hostNodes=new Map,a._hostNodes.set(i.head,[]),a}return m(r,[{key:"_addStylesToHost",value:function(a,o,u){var s=this;a.forEach(function(l){var c=s._doc.createElement("style");c.textContent=l,u.push(o.appendChild(c))})}},{key:"addHost",value:function(a){var o=[];this._addStylesToHost(this._stylesSet,a,o),this._hostNodes.set(a,o)}},{key:"removeHost",value:function(a){var o=this._hostNodes.get(a);o&&o.forEach(ng),this._hostNodes.delete(a)}},{key:"onStylesAdded",value:function(a){var o=this;this._hostNodes.forEach(function(u,s){o._addStylesToHost(a,s,u)})}},{key:"ngOnDestroy",value:function(){this._hostNodes.forEach(function(a){return a.forEach(ng)})}}]),r}(tg);return e.\u0275fac=function(n){return new(n||e)(X(en))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e}();
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function ng(e){vi().remove(e)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */var Ks={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Ys=/%COMP%/g,iM="_nghost-".concat("%COMP%"),aM="_ngcontent-".concat("%COMP%");function Qa(e,t,n){for(var r=0;r<t.length;r++){var i=t[r];Array.isArray(i)?Qa(e,i,n):(i=i.replace(Ys,e),n.push(i))}return n}function ag(e){return function(t){if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}var Js=function(){var e=function(){function t(n,r,i){g(this,t),this.eventManager=n,this.sharedStylesHost=r,this.appId=i,this.rendererByCompId=new Map,this.defaultRenderer=new Xs(n)}return m(t,[{key:"createRenderer",value:function(r,i){if(!r||!i)return this.defaultRenderer;switch(i.encapsulation){case kt.Emulated:var a=this.rendererByCompId.get(i.id);return a||(a=new lM(this.eventManager,this.sharedStylesHost,i,this.appId),this.rendererByCompId.set(i.id,a)),a.applyToHost(r),a;case 1:case kt.ShadowDom:return new cM(this.eventManager,this.sharedStylesHost,r,i);default:if(!this.rendererByCompId.has(i.id)){var o=Qa(i.id,i.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(i.id,this.defaultRenderer)}return this.defaultRenderer}}},{key:"begin",value:function(){}},{key:"end",value:function(){}}]),t}();return e.\u0275fac=function(n){return new(n||e)(X($a),X(yi),X(ci))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e}(),Xs=function(){function e(t){g(this,e),this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}return m(e,[{key:"destroy",value:function(){}},{key:"createElement",value:function(n,r){return r?document.createElementNS(Ks[r]||r,n):document.createElement(n)}},{key:"createComment",value:function(n){return document.createComment(n)}},{key:"createText",value:function(n){return document.createTextNode(n)}},{key:"appendChild",value:function(n,r){(ug(n)?n.content:n).appendChild(r)}},{key:"insertBefore",value:function(n,r,i){n&&(ug(n)?n.content:n).insertBefore(r,i)}},{key:"removeChild",value:function(n,r){n&&n.removeChild(r)}},{key:"selectRootElement",value:function(n,r){var i="string"==typeof n?document.querySelector(n):n;if(!i)throw new Error('The selector "'.concat(n,'" did not match any elements'));return r||(i.textContent=""),i}},{key:"parentNode",value:function(n){return n.parentNode}},{key:"nextSibling",value:function(n){return n.nextSibling}},{key:"setAttribute",value:function(n,r,i,a){if(a){r=a+":"+r;var o=Ks[a];o?n.setAttributeNS(o,r,i):n.setAttribute(r,i)}else n.setAttribute(r,i)}},{key:"removeAttribute",value:function(n,r,i){if(i){var a=Ks[i];a?n.removeAttributeNS(a,r):n.removeAttribute("".concat(i,":").concat(r))}else n.removeAttribute(r)}},{key:"addClass",value:function(n,r){n.classList.add(r)}},{key:"removeClass",value:function(n,r){n.classList.remove(r)}},{key:"setStyle",value:function(n,r,i,a){a&(Qe.DashCase|Qe.Important)?n.style.setProperty(r,i,a&Qe.Important?"important":""):n.style[r]=i}},{key:"removeStyle",value:function(n,r,i){i&Qe.DashCase?n.style.removeProperty(r):n.style[r]=""}},{key:"setProperty",value:function(n,r,i){n[r]=i}},{key:"setValue",value:function(n,r){n.nodeValue=r}},{key:"listen",value:function(n,r,i){return"string"==typeof n?this.eventManager.addGlobalEventListener(n,r,ag(i)):this.eventManager.addEventListener(n,r,ag(i))}}]),e}();function ug(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}var lM=function(e){z(n,e);var t=W(n);function n(r,i,a,o){var u;g(this,n),(u=t.call(this,r)).component=a;var s=Qa(o+"-"+a.id,a.styles,[]);return i.addStyles(s),u.contentAttr=function oM(e){return aM.replace(Ys,e)}(o+"-"+a.id),u.hostAttr=function uM(e){return iM.replace(Ys,e)}(o+"-"+a.id),u}return m(n,[{key:"applyToHost",value:function(i){we(ve(n.prototype),"setAttribute",this).call(this,i,this.hostAttr,"")}},{key:"createElement",value:function(i,a){var o=we(ve(n.prototype),"createElement",this).call(this,i,a);return we(ve(n.prototype),"setAttribute",this).call(this,o,this.contentAttr,""),o}}]),n}(Xs),cM=function(e){z(n,e);var t=W(n);function n(r,i,a,o){var u;g(this,n),(u=t.call(this,r)).sharedStylesHost=i,u.hostEl=a,u.shadowRoot=a.attachShadow({mode:"open"}),u.sharedStylesHost.addHost(u.shadowRoot);for(var s=Qa(o.id,o.styles,[]),l=0;l<s.length;l++){var c=document.createElement("style");c.textContent=s[l],u.shadowRoot.appendChild(c)}return u}return m(n,[{key:"nodeOrShadowRoot",value:function(i){return i===this.hostEl?this.shadowRoot:i}},{key:"destroy",value:function(){this.sharedStylesHost.removeHost(this.shadowRoot)}},{key:"appendChild",value:function(i,a){return we(ve(n.prototype),"appendChild",this).call(this,this.nodeOrShadowRoot(i),a)}},{key:"insertBefore",value:function(i,a,o){return we(ve(n.prototype),"insertBefore",this).call(this,this.nodeOrShadowRoot(i),a,o)}},{key:"removeChild",value:function(i,a){return we(ve(n.prototype),"removeChild",this).call(this,this.nodeOrShadowRoot(i),a)}},{key:"parentNode",value:function(i){return this.nodeOrShadowRoot(we(ve(n.prototype),"parentNode",this).call(this,this.nodeOrShadowRoot(i)))}}]),n}(Xs),fM=function(){var e=function(t){z(r,t);var n=W(r);function r(i){return g(this,r),n.call(this,i)}return m(r,[{key:"supports",value:function(a){return!0}},{key:"addEventListener",value:function(a,o,u){var s=this;return a.addEventListener(o,u,!1),function(){return s.removeEventListener(a,o,u)}}},{key:"removeEventListener",value:function(a,o,u){return a.removeEventListener(o,u)}}]),r}(eg);return e.\u0275fac=function(n){return new(n||e)(X(en))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e}(),sg=["alt","control","meta","shift"],dM={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},vM={alt:function(t){return t.altKey},control:function(t){return t.ctrlKey},meta:function(t){return t.metaKey},shift:function(t){return t.shiftKey}},hM=function(){var e=function(t){z(r,t);var n=W(r);function r(i){return g(this,r),n.call(this,i)}return m(r,[{key:"supports",value:function(a){return null!=r.parseEventName(a)}},{key:"addEventListener",value:function(a,o,u){var s=r.parseEventName(o),l=r.eventCallback(s.fullKey,u,this.manager.getZone());return this.manager.getZone().runOutsideAngular(function(){return vi().onAndCancel(a,s.domEventName,l)})}}],[{key:"parseEventName",value:function(a){var o=a.toLowerCase().split("."),u=o.shift();if(0===o.length||"keydown"!==u&&"keyup"!==u)return null;var s=r._normalizeKey(o.pop()),l="",c=o.indexOf("code");if(c>-1&&(o.splice(c,1),l="code."),sg.forEach(function(d){var v=o.indexOf(d);v>-1&&(o.splice(v,1),l+=d+".")}),l+=s,0!=o.length||0===s.length)return null;var f={};return f.domEventName=u,f.fullKey=l,f}},{key:"matchEventFullKeyCode",value:function(a,o){var u=dM[a.key]||a.key,s="";return o.indexOf("code.")>-1&&(u=a.code,s="code."),!(null==u||!u)&&(" "===(u=u.toLowerCase())?u="space":"."===u&&(u="dot"),sg.forEach(function(l){l!==u&&(0,vM[l])(a)&&(s+=l+".")}),(s+=u)===o)}},{key:"eventCallback",value:function(a,o,u){return function(s){r.matchEventFullKeyCode(s,a)&&u.runGuarded(function(){return o(s)})}}},{key:"_normalizeKey",value:function(a){return"esc"===a?"escape":a}}]),r}(eg);return e.\u0275fac=function(n){return new(n||e)(X(en))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e}(),yM=hp(aS,"browser",[{provide:op,useValue:"browser"},{provide:ap,useValue:function pM(){YI.makeCurrent()},multi:!0},{provide:en,useFactory:function mM(){return document,document},deps:[]}]),fg=new $(""),dg=[{provide:Pa,useClass:nM,deps:[]},{provide:fp,useClass:Is,deps:[Ke,Ms,Pa]},{provide:Is,useClass:Is,deps:[Ke,Ms,Pa]}],vg=[{provide:ru,useValue:"root"},{provide:Xn,useFactory:function gM(){return new Xn},deps:[]},{provide:Za,useClass:fM,multi:!0,deps:[en,Ke,op]},{provide:Za,useClass:hM,multi:!0,deps:[en]},{provide:Js,useClass:Js,deps:[$a,yi,ci]},{provide:df,useExisting:Js},{provide:tg,useExisting:yi},{provide:yi,useClass:yi,deps:[en]},{provide:$a,useClass:$a,deps:[Za,Ke]},{provide:FI,useClass:rM,deps:[]},[]],DM=function(){var e=function(){function t(n){g(this,t)}return m(t,null,[{key:"withServerTransition",value:function(r){return{ngModule:t,providers:[{provide:ci,useValue:r.appId},{provide:Xp,useExisting:ci},tM]}}}]),t}();return e.\u0275fac=function(n){return new(n||e)(X(fg,12))},e.\u0275mod=br({type:e}),e.\u0275inj=An({providers:[].concat(vg,dg),imports:[TI,oS]}),e}();
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */"undefined"!=typeof window&&window;var nl,gg={now:function(){return(gg.delegate||Date).now()},delegate:void 0},MM=function(e){z(n,e);var t=W(n);function n(){var r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:gg;return g(this,n),(r=t.call(this))._bufferSize=i,r._windowTime=a,r._timestampProvider=o,r._buffer=[],r._infiniteTimeWindow=!0,r._infiniteTimeWindow=a===1/0,r._bufferSize=Math.max(1,i),r._windowTime=Math.max(1,a),r}return m(n,[{key:"next",value:function(i){var o=this._buffer,u=this._infiniteTimeWindow,s=this._timestampProvider,l=this._windowTime;this.isStopped||(o.push(i),!u&&o.push(s.now()+l)),this._trimBuffer(),we(ve(n.prototype),"next",this).call(this,i)}},{key:"_subscribe",value:function(i){this._throwIfClosed(),this._trimBuffer();for(var a=this._innerSubscribe(i),o=this._infiniteTimeWindow,s=this._buffer.slice(),l=0;l<s.length&&!i.closed;l+=o?1:2)i.next(s[l]);return this._checkFinalizedStatuses(i),a}},{key:"_trimBuffer",value:function(){var i=this._bufferSize,a=this._timestampProvider,o=this._buffer,u=this._infiniteTimeWindow,s=(u?1:2)*i;if(i<1/0&&s<o.length&&o.splice(0,o.length-s),!u){for(var l=a.now(),c=0,f=1;f<o.length&&o[f]<=l;f+=2)c=f;c&&o.splice(0,c+1)}}}]),n}(Si),Ka={schedule:function(t,n){var r=setTimeout(t,n);return function(){return clearTimeout(r)}},scheduleBeforeRender:function(t){if("undefined"==typeof window)return Ka.schedule(t,0);if(void 0===window.requestAnimationFrame)return Ka.schedule(t,16);var r=window.requestAnimationFrame(t);return function(){return window.cancelAnimationFrame(r)}}};
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */function xM(e,t,n){var r=n;return function AM(e){return!!e&&e.nodeType===Node.ELEMENT_NODE}(e)&&t.some(function(i,a){return!("*"===i||!function FM(e,t){if(!nl){var n=Element.prototype;nl=n.matches||n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}return e.nodeType===Node.ELEMENT_NODE&&nl.call(e,t)}(e,i)||(r=a,0))}),r
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */}var jM=function(){function e(t,n){g(this,e),this.componentFactory=n.get(Kn).resolveComponentFactory(t)}return m(e,[{key:"create",value:function(n){return new VM(this.componentFactory,n)}}]),e}(),VM=function(){function e(t,n){g(this,e),this.componentFactory=t,this.injector=n,this.eventEmitters=new MM(1),this.events=this.eventEmitters.pipe(function TM(e,t){return Tn(function(n,r){var i=null,a=0,o=!1,u=function(){return o&&!i&&r.complete()};n.subscribe(kn(r,function(s){null==i||i.unsubscribe();var l=0,c=a++;nn(e(s,c)).subscribe(i=kn(r,function(f){return r.next(t?t(s,f,c,l++):f)},function(){i=null,u()}))},function(){o=!0,u()}))})}
/**
   * @license Angular v14.2.10
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */(function(r){return Bl.apply(void 0,Ce(r))})),this.componentRef=null,this.viewChangeDetectorRef=null,this.inputChanges=null,this.hasInputChanges=!1,this.implementsOnChanges=!1,this.scheduledChangeDetectionFn=null,this.scheduledDestroyFn=null,this.initialInputValues=new Map,this.unchangedInputs=new Set(this.componentFactory.inputs.map(function(r){return r.propName})),this.ngZone=this.injector.get(Ke),this.elementZone="undefined"==typeof Zone?null:this.ngZone.run(function(){return Zone.current})}return m(e,[{key:"connect",value:function(n){var r=this;this.runInZone(function(){if(null!==r.scheduledDestroyFn)return r.scheduledDestroyFn(),void(r.scheduledDestroyFn=null);null===r.componentRef&&r.initializeComponent(n)})}},{key:"disconnect",value:function(){var n=this;this.runInZone(function(){null===n.componentRef||null!==n.scheduledDestroyFn||(n.scheduledDestroyFn=Ka.schedule(function(){null!==n.componentRef&&(n.componentRef.destroy(),n.componentRef=null,n.viewChangeDetectorRef=null)},10))})}},{key:"getInputValue",value:function(n){var r=this;return this.runInZone(function(){return null===r.componentRef?r.initialInputValues.get(n):r.componentRef.instance[n]})}},{key:"setInputValue",value:function(n,r){var i=this;this.runInZone(function(){null!==i.componentRef?function RM(e,t){return e===t||e!=e&&t!=t}(r,i.getInputValue(n))&&(void 0!==r||!i.unchangedInputs.has(n))||(i.recordInputChange(n,r),i.unchangedInputs.delete(n),i.hasInputChanges=!0,i.componentRef.instance[n]=r,i.scheduleDetectChanges()):i.initialInputValues.set(n,r)})}},{key:"initializeComponent",value:function(n){var r=Zt.create({providers:[],parent:this.injector}),i=
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function LM(e,t){var n=e.childNodes,r=t.map(function(){return[]}),i=-1;t.some(function(l,c){return"*"===l&&(i=c,!0)});for(var a=0,o=n.length;a<o;++a){var u=n[a],s=xM(u,t,i);-1!==s&&r[s].push(u)}return r}(n,this.componentFactory.ngContentSelectors);this.componentRef=this.componentFactory.create(r,i,n),this.viewChangeDetectorRef=this.componentRef.injector.get(Sp),this.implementsOnChanges=function PM(e){return"function"==typeof e}(this.componentRef.instance.ngOnChanges),this.initializeInputs(),this.initializeOutputs(this.componentRef),this.detectChanges(),this.injector.get(Fa).attachView(this.componentRef.hostView)}},{key:"initializeInputs",value:function(){var n=this;this.componentFactory.inputs.forEach(function(r){var i=r.propName;n.initialInputValues.has(i)&&n.setInputValue(i,n.initialInputValues.get(i))}),this.initialInputValues.clear()}},{key:"initializeOutputs",value:function(n){var r=this.componentFactory.outputs.map(function(i){var o=i.templateName;return n.instance[i.propName].pipe(Dl(function(s){return{name:o,value:s}}))});this.eventEmitters.next(r)}},{key:"callNgOnChanges",value:function(n){if(this.implementsOnChanges&&null!==this.inputChanges){var r=this.inputChanges;this.inputChanges=null,n.instance.ngOnChanges(r)}}},{key:"markViewForCheck",value:function(n){this.hasInputChanges&&(this.hasInputChanges=!1,n.markForCheck())}},{key:"scheduleDetectChanges",value:function(){var n=this;this.scheduledChangeDetectionFn||(this.scheduledChangeDetectionFn=Ka.scheduleBeforeRender(function(){n.scheduledChangeDetectionFn=null,n.detectChanges()}))}},{key:"recordInputChange",value:function(n,r){if(this.implementsOnChanges){null===this.inputChanges&&(this.inputChanges={});var i=this.inputChanges[n];if(i)return void(i.currentValue=r);var a=this.unchangedInputs.has(n),o=a?void 0:this.getInputValue(n);this.inputChanges[n]=new Ql(o,r,a)}}},{key:"detectChanges",value:function(){null!==this.componentRef&&(this.callNgOnChanges(this.componentRef),this.markViewForCheck(this.viewChangeDetectorRef),this.componentRef.changeDetectorRef.detectChanges())}},{key:"runInZone",value:function(n){return this.elementZone&&Zone.current!==this.elementZone?this.ngZone.run(n):n()}}]),e}(),HM=function(e){z(n,e);var t=W(n);function n(){var r;return g(this,n),(r=t.apply(this,arguments)).ngElementEventsSubscription=null,r}return m(n)}(Fe(HTMLElement));
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
var GM=function(){var e=m(function t(){g(this,t),this.name="world"});return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=mo({type:e,selectors:[["ng-component"]],inputs:{name:"name"},decls:5,vars:1,template:function(n,r){1&n&&(Xr(0,"div")(1,"h1"),
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
function Mv(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=E(),r=K(),i=e+22,a=r.firstCreatePass?rr(r,i,1,t,null):r.data[i],o=n[i]=_u(n[q],t);sa(r,n,o,a),At(a,!1)}
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */(2),ei(),Xr(3,"div"),ns(4,"slot"),ei()()),2&n&&(function $f(e){Qf(K(),E(),Ge()+e,!1)}(2),wa("angular-component says hello ",r.name,""))},styles:[":host>div>h1{font-style:italic}\n"],encapsulation:3}),e}(),zM=function(){var e=function(){function t(n){g(this,t),this.injector=n,customElements.define("angular-component",function UM(e,t){var n=function OM(e,t){return t.get(Kn).resolveComponentFactory(e).inputs}(e,t.injector),r=t.strategyFactory||new jM(e,t.injector),i=function NM(e){var t={};return e.forEach(function(n){var r=n.propName;t[function kM(e){return e.replace(/[A-Z]/g,function(t){return"-".concat(t.toLowerCase())})}(n.templateName)]=r}),t}(n),a=function(o){z(s,o);var u=W(s);function s(l){var c;return g(this,s),(c=u.call(this)).injector=l,c}return m(s,[{key:"ngElementStrategy",get:function(){var c=this;if(!this._ngElementStrategy){var f=this._ngElementStrategy=r.create(this.injector||t.injector);n.forEach(function(d){var v=d.propName;if(c.hasOwnProperty(v)){var h=c[v];delete c[v],f.setInputValue(v,h)}})}return this._ngElementStrategy}},{key:"attributeChangedCallback",value:function(c,f,d,v){this.ngElementStrategy.setInputValue(i[c],d)}},{key:"connectedCallback",value:function(){var c=!1;this.ngElementStrategy.events&&(this.subscribeToEvents(),c=!0),this.ngElementStrategy.connect(this),c||this.subscribeToEvents()}},{key:"disconnectedCallback",value:function(){this._ngElementStrategy&&this._ngElementStrategy.disconnect(),this.ngElementEventsSubscription&&(this.ngElementEventsSubscription.unsubscribe(),this.ngElementEventsSubscription=null)}},{key:"subscribeToEvents",value:function(){var c=this;this.ngElementEventsSubscription=this.ngElementStrategy.events.subscribe(function(f){var d=new CustomEvent(f.name,{detail:f.value});c.dispatchEvent(d)})}}]),s}(HM);return a.observedAttributes=Object.keys(i),n.forEach(function(o){var u=o.propName;Object.defineProperty(a.prototype,u,{get:function(){return this.ngElementStrategy.getInputValue(u)},set:function(l){this.ngElementStrategy.setInputValue(u,l)},configurable:!0,enumerable:!0})}),a}(GM,{injector:this.injector}))}return m(t,[{key:"ngDoBootstrap",value:function(){}}]),t}();return e.\u0275fac=function(n){return new(n||e)(X(Zt))},e.\u0275mod=br({type:e}),e.\u0275inj=An({imports:[DM]}),e}();
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */yM().bootstrapModule(zM,{ngZone:"noop"}).catch(function(e){console.error(e)})}();
//# sourceMappingURL=sgrud-skeleton-angular.js.map