var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};function e(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}function r(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function n(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s}function i(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}function s(t){return this instanceof s?(this.v=t,this):new s(t)}const a=Symbol("Comlink.proxy"),c=Symbol("Comlink.endpoint"),u=Symbol("Comlink.releaseProxy"),l=Symbol("Comlink.finalizer"),f=Symbol("Comlink.thrown"),h=t=>"object"==typeof t&&null!==t||"function"==typeof t,p=new Map([["proxy",{canHandle:t=>h(t)&&t[a],serialize(t){const{port1:e,port2:r}=new MessageChannel;return d(t,e),[r,[r]]},deserialize:t=>(t.start(),y(t))}],["throw",{canHandle:t=>h(t)&&f in t,serialize({value:t}){let e;return e=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[e,[]]},deserialize(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function d(t,e=globalThis,r=["*"]){e.addEventListener("message",function n(o){if(!o||!o.data)return;if(!function(t,e){for(const r of t){if(e===r||"*"===r)return!0;if(r instanceof RegExp&&r.test(e))return!0}return!1}(r,o.origin))return void console.warn(`Invalid origin '${o.origin}' for comlink proxy`);const{id:i,type:s,path:a}=Object.assign({path:[]},o.data),c=(o.data.argumentList||[]).map(O);let u;try{const e=a.slice(0,-1).reduce((t,e)=>t[e],t),r=a.reduce((t,e)=>t[e],t);switch(s){case"GET":u=r;break;case"SET":e[a.slice(-1)[0]]=O(o.data.value),u=!0;break;case"APPLY":u=r.apply(e,c);break;case"CONSTRUCT":u=_(new r(...c));break;case"ENDPOINT":{const{port1:e,port2:r}=new MessageChannel;d(t,r),u=function(t,e){return S.set(t,e),t}(e,[e])}break;case"RELEASE":u=void 0;break;default:return}}catch(t){u={value:t,[f]:0}}Promise.resolve(u).catch(t=>({value:t,[f]:0})).then(r=>{const[o,a]=T(r);e.postMessage(Object.assign(Object.assign({},o),{id:i}),a),"RELEASE"===s&&(e.removeEventListener("message",n),v(e),l in t&&"function"==typeof t[l]&&t[l]())}).catch(t=>{const[r,n]=T({value:new TypeError("Unserializable return value"),[f]:0});e.postMessage(Object.assign(Object.assign({},r),{id:i}),n)})}),e.start&&e.start()}function v(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function y(t,e){return E(t,[],e)}function b(t){if(t)throw new Error("Proxy has been released and is not useable")}function w(t){return P(t,{type:"RELEASE"}).then(()=>{v(t)})}const m=new WeakMap,g="FinalizationRegistry"in globalThis&&new FinalizationRegistry(t=>{const e=(m.get(t)||0)-1;m.set(t,e),0===e&&w(t)});function E(t,e=[],r=function(){}){let n=!1;const o=new Proxy(r,{get(r,i){if(b(n),i===u)return()=>{!function(t){g&&g.unregister(t)}(o),w(t),n=!0};if("then"===i){if(0===e.length)return{then:()=>o};const r=P(t,{type:"GET",path:e.map(t=>t.toString())}).then(O);return r.then.bind(r)}return E(t,[...e,i])},set(r,o,i){b(n);const[s,a]=T(i);return P(t,{type:"SET",path:[...e,o].map(t=>t.toString()),value:s},a).then(O)},apply(r,o,i){b(n);const s=e[e.length-1];if(s===c)return P(t,{type:"ENDPOINT"}).then(O);if("bind"===s)return E(t,e.slice(0,-1));const[a,u]=x(i);return P(t,{type:"APPLY",path:e.map(t=>t.toString()),argumentList:a},u).then(O)},construct(r,o){b(n);const[i,s]=x(o);return P(t,{type:"CONSTRUCT",path:e.map(t=>t.toString()),argumentList:i},s).then(O)}});return function(t,e){const r=(m.get(e)||0)+1;m.set(e,r),g&&g.register(t,e,t)}(o,t),o}function x(t){const e=t.map(T);return[e.map(t=>t[0]),(r=e.map(t=>t[1]),Array.prototype.concat.apply([],r))];var r}const S=new WeakMap;function _(t){return Object.assign(t,{[a]:!0})}function T(t){for(const[e,r]of p)if(r.canHandle(t)){const[n,o]=r.serialize(t);return[{type:"HANDLER",name:e,value:n},o]}return[{type:"RAW",value:t},S.get(t)||[]]}function O(t){switch(t.type){case"HANDLER":return p.get(t.name).deserialize(t.value);case"RAW":return t.value}}function P(t,e,r){return new Promise(n=>{const o=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");t.addEventListener("message",function e(r){r.data&&r.data.id&&r.data.id===o&&(t.removeEventListener("message",e),n(r.data))}),t.start&&t.start(),t.postMessage(Object.assign({id:o},e),r)})}function I(t){return"function"==typeof t}function k(t){var e=t(function(t){Error.call(t),t.stack=(new Error).stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var j=k(function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}});function A(t,e){if(t){var r=t.indexOf(e);0<=r&&t.splice(r,1)}}var R=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return t.prototype.unsubscribe=function(){var t,e,r,s,a;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var u=n(c),l=u.next();!l.done;l=u.next())l.value.remove(this)}catch(e){t={error:e}}finally{try{l&&!l.done&&(e=u.return)&&e.call(u)}finally{if(t)throw t.error}}else c.remove(this);var f=this.initialTeardown;if(I(f))try{f()}catch(t){a=t instanceof j?t.errors:[t]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var p=n(h),d=p.next();!d.done;d=p.next()){var v=d.value;try{N(v)}catch(t){a=null!=a?a:[],t instanceof j?a=i(i([],o(a)),o(t.errors)):a.push(t)}}}catch(t){r={error:t}}finally{try{d&&!d.done&&(s=p.return)&&s.call(p)}finally{if(r)throw r.error}}}if(a)throw new j(a)}},t.prototype.add=function(e){var r;if(e&&e!==this)if(this.closed)N(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&A(e,t)},t.prototype.remove=function(e){var r=this._finalizers;r&&A(r,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}(),z=R.EMPTY;function C(t){return t instanceof R||t&&"closed"in t&&I(t.remove)&&I(t.add)&&I(t.unsubscribe)}function N(t){I(t)?t():t.unsubscribe()}var M={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},L={setTimeout:function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var s=L.delegate;return(null==s?void 0:s.setTimeout)?s.setTimeout.apply(s,i([t,e],o(r))):setTimeout.apply(void 0,i([t,e],o(r)))},clearTimeout:function(t){var e=L.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function U(t){L.setTimeout(function(){throw t})}function D(){}var F=H("C",void 0,void 0);function H(t,e,r){return{kind:t,value:e,error:r}}var $=null;function W(t){if(M.useDeprecatedSynchronousErrorHandling){var e=!$;if(e&&($={errorThrown:!1,error:null}),t(),e){var r=$;if($=null,r.errorThrown)throw r.error}}else t()}var q=function(t){function r(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,C(e)&&e.add(r)):r.destination=K,r}return e(r,t),r.create=function(t,e,r){return new B(t,e,r)},r.prototype.next=function(t){this.isStopped?J(function(t){return H("N",t,void 0)}(t),this):this._next(t)},r.prototype.error=function(t){this.isStopped?J(H("E",void 0,t),this):(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped?J(F,this):(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(R),Y=Function.prototype.bind;function G(t,e){return Y.call(t,e)}var X=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){V(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){V(t)}else V(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){V(t)}},t}(),B=function(t){function r(e,r,n){var o,i,s=t.call(this)||this;return I(e)||!e?o={next:null!=e?e:void 0,error:null!=r?r:void 0,complete:null!=n?n:void 0}:s&&M.useDeprecatedNextContext?((i=Object.create(e)).unsubscribe=function(){return s.unsubscribe()},o={next:e.next&&G(e.next,i),error:e.error&&G(e.error,i),complete:e.complete&&G(e.complete,i)}):o=e,s.destination=new X(o),s}return e(r,t),r}(q);function V(t){U(t)}function J(t,e){var r=M.onStoppedNotification;r&&L.setTimeout(function(){return r(t,e)})}var K={closed:!0,next:D,error:function(t){throw t},complete:D},Q="function"==typeof Symbol&&Symbol.observable||"@@observable";function Z(t){return t}var tt=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n,o=this,i=(n=t)&&n instanceof q||function(t){return t&&I(t.next)&&I(t.error)&&I(t.complete)}(n)&&C(n)?t:new B(t,e,r);return W(function(){var t=o.operator,e=o.source;i.add(t?t.call(i,e):e?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=et(e))(function(e,n){var o=new B({next:function(e){try{t(e)}catch(t){n(t),o.unsubscribe()}},error:n,complete:e});r.subscribe(o)})},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[Q]=function(){return this},t.prototype.pipe=function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return(0===(t=e).length?Z:1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)})(this)},t.prototype.toPromise=function(t){var e=this;return new(t=et(t))(function(t,r){var n;e.subscribe(function(t){return n=t},function(t){return r(t)},function(){return t(n)})})},t.create=function(e){return new t(e)},t}();function et(t){var e;return null!==(e=null!=t?t:M.Promise)&&void 0!==e?e:Promise}function rt(t){return function(e){if(function(t){return I(null==t?void 0:t.lift)}(e))return e.lift(function(e){try{return t(e,this)}catch(t){this.error(t)}});throw new TypeError("Unable to lift unknown Observable type")}}function nt(t,e,r,n,o){return new ot(t,e,r,n,o)}var ot=function(t){function r(e,r,n,o,i,s){var a=t.call(this,e)||this;return a.onFinalize=i,a.shouldUnsubscribe=s,a._next=r?function(t){try{r(t)}catch(t){e.error(t)}}:t.prototype._next,a._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,a._complete=n?function(){try{n()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,a}return e(r,t),r.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}},r}(q),it=k(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),st=function(t){function r(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return e(r,t),r.prototype.lift=function(t){var e=new at(this,this);return e.operator=t,e},r.prototype._throwIfClosed=function(){if(this.closed)throw new it},r.prototype.next=function(t){var e=this;W(function(){var r,o;if(e._throwIfClosed(),!e.isStopped){e.currentObservers||(e.currentObservers=Array.from(e.observers));try{for(var i=n(e.currentObservers),s=i.next();!s.done;s=i.next())s.value.next(t)}catch(t){r={error:t}}finally{try{s&&!s.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}}})},r.prototype.error=function(t){var e=this;W(function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=t;for(var r=e.observers;r.length;)r.shift().error(t)}})},r.prototype.complete=function(){var t=this;W(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var e=t.observers;e.length;)e.shift().complete()}})},r.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(r.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),r.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},r.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},r.prototype._innerSubscribe=function(t){var e=this,r=this,n=r.observers;return r.hasError||r.isStopped?z:(this.currentObservers=null,n.push(t),new R(function(){e.currentObservers=null,A(n,t)}))},r.prototype._checkFinalizedStatuses=function(t){var e=this,r=e.isStopped;e.hasError?t.error(e.thrownError):r&&t.complete()},r.prototype.asObservable=function(){var t=new tt;return t.source=this,t},r.create=function(t,e){return new at(t,e)},r}(tt),at=function(t){function r(e,r){var n=t.call(this)||this;return n.destination=e,n.source=r,n}return e(r,t),r.prototype.next=function(t){var e,r;null===(r=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===r||r.call(e,t)},r.prototype.error=function(t){var e,r;null===(r=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===r||r.call(e,t)},r.prototype.complete=function(){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===e||e.call(t)},r.prototype._subscribe=function(t){var e,r;return null!==(r=null===(e=this.source)||void 0===e?void 0:e.subscribe(t))&&void 0!==r?r:z},r}(st),ct=function(t){function r(e){var r=t.call(this)||this;return r._value=e,r}return e(r,t),Object.defineProperty(r.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),r.prototype._subscribe=function(e){var r=t.prototype._subscribe.call(this,e);return!r.closed&&e.next(this._value),r},r.prototype.getValue=function(){var t=this,e=t._value;if(t.hasError)throw t.thrownError;return this._throwIfClosed(),e},r.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},r}(st),ut={now:function(){return(ut.delegate||Date).now()},delegate:void 0},lt=function(t){function r(e,r){return t.call(this)||this}return e(r,t),r.prototype.schedule=function(t,e){return this},r}(R),ft={setInterval:function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var s=ft.delegate;return(null==s?void 0:s.setInterval)?s.setInterval.apply(s,i([t,e],o(r))):setInterval.apply(void 0,i([t,e],o(r)))},clearInterval:function(t){var e=ft.delegate;return((null==e?void 0:e.clearInterval)||clearInterval)(t)},delegate:void 0},ht=function(t){function r(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return e(r,t),r.prototype.schedule=function(t,e){var r;if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,o=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(o,n,e)),this.pending=!0,this.delay=e,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(o,this.id,e),this},r.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),ft.setInterval(t.flush.bind(t,this),r)},r.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!=r&&this.delay===r&&!1===this.pending)return e;null!=e&&ft.clearInterval(e)},r.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,e){var r,n=!1;try{this.work(t)}catch(t){n=!0,r=t||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r},r.prototype.unsubscribe=function(){if(!this.closed){var e=this.id,r=this.scheduler,n=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,A(n,this),null!=e&&(this.id=this.recycleAsyncId(r,e,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},r}(lt),pt=function(){function t(e,r){void 0===r&&(r=t.now),this.schedulerActionCtor=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.schedulerActionCtor(this,t).schedule(r,e)},t.now=ut.now,t}(),dt=new(function(t){function r(e,r){void 0===r&&(r=pt.now);var n=t.call(this,e,r)||this;return n.actions=[],n._active=!1,n}return e(r,t),r.prototype.flush=function(t){var e=this.actions;if(this._active)e.push(t);else{var r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},r}(pt))(ht),vt=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function yt(t){return I(null==t?void 0:t.then)}function bt(t){return I(t[Q])}function wt(t){return Symbol.asyncIterator&&I(null==t?void 0:t[Symbol.asyncIterator])}function mt(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var gt="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function Et(t){return I(null==t?void 0:t[gt])}function xt(t){return function(e,n,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,a=function(){var e,n,o;return r(this,function(r){switch(r.label){case 0:e=t.getReader(),r.label=1;case 1:r.trys.push([1,,9,10]),r.label=2;case 2:return[4,s(e.read())];case 3:return n=r.sent(),o=n.value,n.done?[4,s(void 0)]:[3,5];case 4:return[2,r.sent()];case 5:return[4,s(o)];case 6:return[4,r.sent()];case 7:return r.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})}.apply(e,n||[]),c=[];return i={},u("next"),u("throw"),u("return"),i[Symbol.asyncIterator]=function(){return this},i;function u(t){a[t]&&(i[t]=function(e){return new Promise(function(r,n){c.push([t,e,r,n])>1||l(t,e)})})}function l(t,e){try{(r=a[t](e)).value instanceof s?Promise.resolve(r.value.v).then(f,h):p(c[0][2],r)}catch(t){p(c[0][3],t)}var r}function f(t){l("next",t)}function h(t){l("throw",t)}function p(t,e){t(e),c.shift(),c.length&&l(c[0][0],c[0][1])}}(this,arguments)}function St(t){return I(null==t?void 0:t.getReader)}function _t(t){if(t instanceof tt)return t;if(null!=t){if(bt(t))return i=t,new tt(function(t){var e=i[Q]();if(I(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")});if(vt(t))return o=t,new tt(function(t){for(var e=0;e<o.length&&!t.closed;e++)t.next(o[e]);t.complete()});if(yt(t))return r=t,new tt(function(t){r.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,U)});if(wt(t))return Tt(t);if(Et(t))return e=t,new tt(function(t){var r,o;try{for(var i=n(e),s=i.next();!s.done;s=i.next())if(t.next(s.value),t.closed)return}catch(t){r={error:t}}finally{try{s&&!s.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}t.complete()});if(St(t))return Tt(xt(t))}var e,r,o,i;throw mt(t)}function Tt(t){return new tt(function(e){(function(t,e){var o,i,s,a,c,u,l;return c=this,l=function(){var c;return r(this,function(r){switch(r.label){case 0:r.trys.push([0,5,6,11]),o=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t=n(t),e={},o("next"),o("throw"),o("return"),e[Symbol.asyncIterator]=function(){return this},e);function o(r){e[r]=t[r]&&function(e){return new Promise(function(n,o){!function(t,e,r,n){Promise.resolve(n).then(function(e){t({value:e,done:r})},e)}(n,o,(e=t[r](e)).done,e.value)})}}}(t),r.label=1;case 1:return[4,o.next()];case 2:if((i=r.sent()).done)return[3,4];if(e.next(i.value),e.closed)return[2];r.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=r.sent(),s={error:c},[3,11];case 6:return r.trys.push([6,,9,10]),i&&!i.done&&(a=o.return)?[4,a.call(o)]:[3,8];case 7:r.sent(),r.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})},new((u=void 0)||(u=Promise))(function(t,e){function r(t){try{o(l.next(t))}catch(t){e(t)}}function n(t){try{o(l.throw(t))}catch(t){e(t)}}function o(e){var o;e.done?t(e.value):(o=e.value,o instanceof u?o:new u(function(t){t(o)})).then(r,n)}o((l=l.apply(c,[])).next())})})(t,e).catch(function(t){return e.error(t)})})}function Ot(t,e,r,n,o){void 0===n&&(n=0),void 0===o&&(o=!1);var i=e.schedule(function(){r(),o?t.add(this.schedule(null,n)):this.unsubscribe()},n);if(t.add(i),!o)return i}function Pt(t,e){return void 0===e&&(e=0),rt(function(r,n){r.subscribe(nt(n,function(r){return Ot(n,t,function(){return n.next(r)},e)},function(){return Ot(n,t,function(){return n.complete()},e)},function(r){return Ot(n,t,function(){return n.error(r)},e)}))})}function It(t,e){return void 0===e&&(e=0),rt(function(r,n){n.add(t.schedule(function(){return r.subscribe(n)},e))})}function kt(t,e){if(!t)throw new Error("Iterable cannot be null");return new tt(function(r){Ot(r,e,function(){var n=t[Symbol.asyncIterator]();Ot(r,e,function(){n.next().then(function(t){t.done?r.complete():r.next(t.value)})},0,!0)})})}p.set("observable",{canHandle:t=>t instanceof tt,deserialize:t=>new tt(e=>{const r=p.get("proxy").deserialize(t);r.subscribe(_({next:t=>e.next(t),error:t=>e.error(t),complete:()=>e.complete()})).then(t=>e.add(()=>{t.unsubscribe(),r[u]()}))}),serialize:t=>p.get("proxy").serialize({subscribe:e=>t.subscribe({next:t=>{e.next(t).then()},error:t=>{e.error(t).then()},complete:()=>{e.complete().then()}})})}),p.set("subscription",{canHandle:t=>t instanceof R,deserialize:t=>new R(()=>{const e=p.get("proxy").deserialize(t);e.unsubscribe().then(()=>{e[u]()})}),serialize:t=>p.get("proxy").serialize({unsubscribe:()=>t.unsubscribe()})});class jt{static array(t){return this.test("Array",t)}static boolean(t){return this.test("Boolean",t)}static date(t){return this.test("Date",t)}static function(t){return this.test("Function",t)}static null(t){return this.test("Null",t)}static number(t){return this.test("Number",t)}static object(t){return this.test("Object",t)}static process(t){return this.test("process",t)}static promise(t){return this.test("Promise",t)}static regex(t){return this.test("RegExp",t)}static string(t){return this.test("String",t)}static undefined(t){return this.test("Undefined",t)}static url(t){return this.test("URL",t)}static window(t){return this.test("Window",t)}static test(t,e){return Object.prototype.toString.call(e)===`[object ${t}]`}constructor(){throw new TypeError("TypeOf.constructor")}}if(jt.process(globalThis.process)){const t=require("comlink/dist/umd/node-adapter"),{MessageChannel:e}=require("worker_threads");p.set("proxy",{canHandle:p.get("proxy").canHandle,deserialize:e=>y(t(e)),serialize:r=>{const{port1:n,port2:o}=new e;return d(r,t(n)),[o,[o]]}})}class At{get length(){return this.database.then(t=>new Promise((e,r)=>{const n=t.transaction(this.version,"readonly").objectStore(this.version).count();n.onerror=r,n.onsuccess=()=>e(n.result)}))}constructor(t,e){this.name=void 0,this.version=void 0,this.database=void 0,this.name=t,this.version=e,this.database=new Promise((t,e)=>{const r=parseInt(this.version.replace(/[^\d]/g,"")),n=indexedDB.open(this.name,r);n.onerror=e,n.onsuccess=()=>t(n.result),n.onupgradeneeded=()=>n.result.createObjectStore(this.version,{keyPath:"key"}).createIndex("key","key",{unique:!0})})}clear(){return this.database.then(t=>new Promise((e,r)=>{const n=t.transaction(this.version,"readwrite").objectStore(this.version).clear();n.onerror=r,n.onsuccess=()=>e()}))}getItem(t){return this.database.then(e=>new Promise((r,n)=>{const o=e.transaction(this.version,"readonly").objectStore(this.version).get(t);o.onerror=n,o.onsuccess=()=>{var t,e;return r(null!=(t=null==(e=o.result)?void 0:e.value)?t:null)}}))}key(t){return this.database.then(e=>new Promise((r,n)=>{const o=e.transaction(this.version,"readonly").objectStore(this.version).openCursor();o.onerror=n,o.onsuccess=()=>{var e,n,i;return t?t=o.result.advance(t):r(null!=(e=null==(n=o.result)||null==(i=n.value)?void 0:i.key)?e:null)}}))}removeItem(t){return this.database.then(e=>new Promise((r,n)=>{const o=e.transaction(this.version,"readwrite").objectStore(this.version).delete(t);o.onerror=n,o.onsuccess=()=>r()}))}setItem(t,e){return this.database.then(r=>new Promise((n,o)=>{const i=r.transaction(this.version,"readwrite").objectStore(this.version).put({key:t,value:e});i.onerror=o,i.onsuccess=()=>n()}))}}class Rt{get length(){return new Promise(t=>this.database.transaction(()=>{const e=this.database.prepare(`\n        SELECT COUNT(*) AS count FROM '${this.version}'\n      `).get();t(e.count)})())}constructor(t,e){this.name=void 0,this.version=void 0,this.database=void 0,this.name=t,this.version=e;const r=require("better-sqlite3"),{createHash:n}=require("crypto"),{join:o}=require("path");process.on("exit",()=>this.database.close()),process.on("SIGHUP",()=>process.exit(129)),process.on("SIGINT",()=>process.exit(130)),process.on("SIGTERM",()=>process.exit(143));const i=n("md5").update(this.name).digest("hex");this.database=new r(o(__dirname,i)+".sdb").exec(`\n      CREATE TABLE IF NOT EXISTS '${this.version}' (\n        key TEXT PRIMARY KEY NOT NULL,\n        value TEXT\n      )\n    `)}clear(){return new Promise(t=>this.database.transaction(()=>{this.database.prepare(`\n        DELETE FROM '${this.version}'\n      `).run(),t()})())}getItem(t){return new Promise(e=>this.database.transaction(()=>{var r;const n=this.database.prepare(`\n        SELECT value FROM '${this.version}' WHERE key = '${t}'\n      `).get();e(null!=(r=null==n?void 0:n.value)?r:null)})())}key(t){return new Promise(e=>this.database.transaction(()=>{var r;const n=this.database.prepare(`\n        SELECT key FROM '${this.version}' WHERE ROWID = '${t+1}'\n      `).get();e(null!=(r=null==n?void 0:n.key)?r:null)})())}removeItem(t){return new Promise(e=>this.database.transaction(()=>{this.database.prepare(`\n        DELETE FROM '${this.version}' WHERE key = '${t}'\n      `).run(),e()})())}setItem(t,e){return new Promise(r=>this.database.transaction(()=>{this.database.prepare(`\n        INSERT INTO '${this.version}' (key, value) VALUES ('${t}', '${e}')\n          ON CONFLICT(key) DO UPDATE SET value=excluded.value\n      `).run(),r()})())}}class zt{constructor(){throw new TypeError("Effect.constructor")}}let Ct;p.set("effect",{canHandle:t=>(null==t?void 0:t.prototype)instanceof zt,deserialize:t=>{const e=class extends zt{};return Object.defineProperty(e.prototype,"function",{value:new Function(`return (${t});`)()}),e},serialize:t=>[t.prototype.function.toString().replace(/^[^(]+/,"function"),[]]}),Ct=Symbol.observable;class Nt{constructor(){throw this[Ct]=void 0,new TypeError("Store.constructor")}dispatch(...t){throw new ReferenceError(t[0])}}p.set("store",{canHandle:t=>(null==t?void 0:t.prototype)instanceof Nt,deserialize:t=>{const e=class extends Nt{};for(const r of Object.getOwnPropertyNames(t))Object.defineProperty(e.prototype,r,{value:new Function(`return (async ${t[r]});`)()});return e},serialize:t=>{const e={};for(const r of Object.getOwnPropertyNames(t.prototype))if(!Nt.prototype[r]){const n=t.prototype[r].toString();e[r]=n.replace(/^[^(]+/,"function")}return[e,[]]}});var Mt,Lt,Ut="@sgrud/state/worker",Dt="0.0.19";let Ft=(Mt=class{static activate(t){t.waitUntil(self.clients.claim())}static install(t){t.waitUntil(self.skipWaiting())}static message(t){t.data[Ut]instanceof MessagePort&&(d(new Lt(t.source),t.data[Ut]),t.preventDefault())}constructor(t){return this.driver=void 0,this.effects=void 0,this.proxies=void 0,this.remotes=void 0,this.states=void 0,this.stores=void 0,this.driver=jt.function(globalThis.importScripts)?new At(Ut,Dt):new Rt(Ut,Dt),this.effects=new Map,this.proxies=new WeakMap,this.remotes=new Map,this.states=new Map,this.stores=new Map,t?this.proxy(t):this}async connect(t){this.remotes.set(this,y(t))}async deploy(t,e,r,n=!1){var o;const i=this.stores.get(t);let s=this.remotes.get(this),a=this.states.get(t),c=null==(o=a)?void 0:o.get(self);if(i){const r=new Set([...Object.getOwnPropertyNames(i.prototype),...Object.getOwnPropertyNames(e.prototype)]);for(const n of r){var u,l;if((null==(u=i.prototype[n])?void 0:u.toString())!==(null==(l=e.prototype[n])?void 0:l.toString()))throw new TypeError(t)}}else this.stores.set(t,e);var f,h,p,d;if(a||(a=new WeakMap,this.states.set(t,a)),c||(n||(r=await this.driver.getItem(t).then(t=>t?JSON.parse(t):r),c=function(t,e){if(null!=t){if(bt(t))return function(t,e){return _t(t).pipe(It(e),Pt(e))}(t,e);if(vt(t))return function(t,e){return new tt(function(r){var n=0;return e.schedule(function(){n===t.length?r.complete():(r.next(t[n++]),r.closed||this.schedule())})})}(t,e);if(yt(t))return function(t,e){return _t(t).pipe(It(e),Pt(e))}(t,e);if(wt(t))return kt(t,e);if(Et(t))return function(t,e){return new tt(function(r){var n;return Ot(r,e,function(){n=t[gt](),Ot(r,e,function(){var t,e,o;try{e=(t=n.next()).value,o=t.done}catch(t){return void r.error(t)}o?r.complete():r.next(e)},0,!0)}),function(){return I(null==n?void 0:n.return)&&n.return()}})}(t,e);if(St(t))return function(t,e){return kt(xt(t),e)}(t,e)}throw mt(t)}((p=()=>c,new tt(function(t){_t(p()).subscribe(t)})),dt).pipe((h=e=>this.driver.setItem(t,JSON.stringify(e)),rt(function(t,e){var r=null,n=!1,o=function(){return n&&!r&&e.complete()};t.subscribe(nt(e,function(t){null==r||r.unsubscribe(),_t(h(t)).subscribe(r=nt(e,function(t){return e.next(t)},function(){r=null,o()}))},function(){n=!0,o()}))})))),null==(f=c)||f.subscribe(),c=new ct(r),a.set(n?this:self,c)),i||n)await(null==(d=s)?void 0:d.publish(t,c).catch(()=>{this.remotes.delete(this)}));else for(s of this.remotes.values())await s.publish(t,c).catch(()=>{this.remotes.delete(this)})}async deprecate(t){const e=this.states.get(t);let r;if(r=null==e?void 0:e.get(this))r.complete();else{if(!(r=null==e?void 0:e.get(self)))throw new ReferenceError(t);await this.driver.removeItem(t),r.complete()}}async dispatch(t,e){var r,n,o,i;const s=null==(r=this.stores.get(t))?void 0:r.prototype,a=null!=(n=this.states.get(t))&&n.has(this)?null==(o=this.states.get(t))?void 0:o.get(this):null==(i=this.states.get(t))?void 0:i.get(self);if(!a||!s)throw new ReferenceError(t);const c=s[e[0]],u=await c.call(a.value,...e[1]||[]);return a.next(u),u}async implant(t,e){var r;const n=null==(r=this.effects.get(t))?void 0:r.toString();if(n){if(n!==e.prototype.function.toString())throw new TypeError(t)}else this.effects.set(t,e.prototype.function)}async invalidate(t){if(!this.effects.delete(t))throw new ReferenceError(t)}proxy(t){const e=new Proxy(this,{get:(...r)=>{if("dispatch"===r[1]){let r=this.proxies.get(t);r||this.proxies.set(t,r=new Proxy({},{get:(t,r)=>{const n=this.effects.get(r);if(n)return n.call(e);throw new ReferenceError(r)}})),self.sgrud.state.effects=r}return Reflect.get(...r)}});return e}},(()=>{if(globalThis.sgrud=globalThis.sgrud||{},globalThis.sgrud.state=globalThis.sgrud.state||{},jt.function(globalThis.importScripts))self.addEventListener("activate",t=>Mt.activate(t)),self.addEventListener("install",t=>Mt.install(t)),self.addEventListener("message",t=>Mt.message(t));else{if(!jt.process(globalThis.process))throw new TypeError(Ut);{const{isMainThread:t,parentPort:e}=require("worker_threads");if(t)throw new TypeError(Ut);{globalThis.self=globalThis;const t=require("comlink/dist/umd/node-adapter");d(new Mt(e),t(e))}}}})(),Lt=Mt);var Ht;Ft=Lt=function(t,e,r,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}([(Ht=(t,[e])=>e?t.proxy(e):t,function(t){let e;return class extends t{constructor(...t){if(e)return(null==Ht?void 0:Ht(e,t))||e;super(...t),e=this}}})],Ft);export{Ft as StateWorker};
//# sourceMappingURL=index.modern.js.map
