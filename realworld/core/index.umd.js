!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@babel/runtime/helpers/extends"),require("@babel/runtime/helpers/createClass"),require("@sgrud/core"),require("rxjs"),require("@babel/runtime/helpers/inheritsLoose"),require("tslib"),require("@sgrud/state"),require("@babel/runtime/helpers/assertThisInitialized")):"function"==typeof define&&define.amd?define(["exports","@babel/runtime/helpers/extends","@babel/runtime/helpers/createClass","@sgrud/core","rxjs","@babel/runtime/helpers/inheritsLoose","tslib","@sgrud/state","@babel/runtime/helpers/assertThisInitialized"],t):t(((e||self).sgrud=e.sgrud||{},e.sgrud.realworld=e.sgrud.realworld||{},e.sgrud.realworld.core={}),e.babel.runtime.helpers.extends,e.babel.runtime.helpers.createClass,e.sgrud.core,e.rxjs,e.babel.runtime.helpers.inheritsLoose,e.globalThis,e.sgrud.state,e.babel.runtime.helpers.assertThisInitialized)}(this,function(e,t,r,n,i,o,s,u,a){function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l,p,f=/*#__PURE__*/c(t),d=/*#__PURE__*/c(r),h=/*#__PURE__*/c(o),m=/*#__PURE__*/c(a);e.ConfigStore=(l=/*#__PURE__*/function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).apiUrl=void 0,t}return h.default(t,e),t}(u.Store),l.handle="io.github.sgrud.state.config",p=l),e.ConfigStore=p=s.__decorate([u.Stateful(p.handle,{apiUrl:"https://api.realworld.io/api"})],e.ConfigStore);var g,v,y=/*#__PURE__*/function(){function t(){throw new TypeError("Endpoint.constructor")}return t.readArticles=function(e){var t=void 0===e?{}:e,r=t.author,o=void 0===r?void 0:r,s=t.favorited,u=void 0===s?void 0:s,a=t.limit,c=void 0===a?10:a,l=t.offset,p=void 0===l?0:l,d=t.path,h=void 0===d?void 0:d,m=t.tag,g=void 0===m?void 0:m;return this.apiUrl.pipe(i.switchMap(function(e){return n.Http.request({queryParams:f.default({},o&&{author:o},u&&{favorited:u},c&&{limit:c},p&&{offset:p},g&&{tag:g}),url:e+"/articles"+(h?"/"+h:"")})}),i.map(function(e){return f.default({},e.response,{author:o,favorited:u,limit:c,offset:p,path:h,tag:g})}))},t.readArticle=function(e){return this.apiUrl.pipe(i.map(function(t){return t+"/articles/"+e}),i.switchMap(function(e){return n.Http.get(e)}),i.map(function(e){return e.response.article}))},t.readComments=function(e){return this.apiUrl.pipe(i.map(function(t){return t+"/articles/"+e+"/comments"}),i.switchMap(function(e){return n.Http.get(e)}),i.map(function(e){return e.response.comments}))},t.readProfile=function(e){return this.apiUrl.pipe(i.map(function(t){return t+"/profiles/"+e}),i.switchMap(function(e){return n.Http.get(e)}),i.map(function(e){return e.response.profile}))},t.readTags=function(){return this.apiUrl.pipe(i.map(function(e){return e+"/tags"}),i.switchMap(function(e){return n.Http.get(e)}),i.map(function(e){return e.response.tags}))},t.removeArticle=function(e){return this.apiUrl.pipe(i.map(function(t){return t+"/articles/"+e.slug}),i.switchMap(function(e){return n.Http.delete(e)}),i.map(function(e){return e.response}))},t.removeComment=function(e,t){return this.apiUrl.pipe(i.map(function(r){return r+"/articles/"+e.slug+"/comments/"+t.id}),i.switchMap(function(e){return n.Http.delete(e)}),i.map(function(e){return e.response}))},t.updateArticle=function(e){return this.apiUrl.pipe(i.switchMap(function(t){return n.Http.request({body:{article:e},method:e.slug?"PUT":"POST",url:t+"/articles"+(e.slug?"/"+e.slug:"")})}),i.map(function(e){return e.response.article}))},t.updateComment=function(e,t){return this.apiUrl.pipe(i.switchMap(function(r){return n.Http.request({body:{comment:t},method:"POST",url:r+"/articles/"+e.slug+"/comments"})}),i.map(function(e){return e.response.comment}))},t.updateFollow=function(e){return this.apiUrl.pipe(i.switchMap(function(t){return n.Http.request({method:e.following?"DELETE":"POST",url:t+"/profiles/"+e.username+"/follow"})}),i.map(function(e){return e.response.profile}))},t.updateLike=function(e){return this.apiUrl.pipe(i.switchMap(function(t){return n.Http.request({method:e.favorited?"DELETE":"POST",url:t+"/articles/"+e.slug+"/favorite"})}),i.map(function(e){return e.response.article}))},d.default(t,null,[{key:"apiUrl",get:function(){return i.from(new e.ConfigStore).pipe(i.first(),i.map(function(e){return e.apiUrl}))}}]),t}();e.UserStore=(g=/*#__PURE__*/function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).bio=void 0,t.email=void 0,t.image=void 0,t.token=void 0,t.username=void 0,t}h.default(t,e);var r=t.prototype;return r.login=function(e,t){try{var r=this,n=sgrud.state.effects,i=n.fetch;return Promise.resolve((0,n.state)("io.github.sgrud.state.config")).then(function(n){return Promise.resolve(i(n.apiUrl+"/users/login",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({user:{email:e,password:t}})})).then(function(e){function t(t){return Promise.resolve(e.json()).then(function(e){return Object.assign({},r,e.user)})}var n=function(){if(!e.ok)return Promise.resolve(e.json()).then(function(e){throw e})}();return n&&n.then?n.then(t):t()})})}catch(e){return Promise.reject(e)}},r.logout=function(){try{return Promise.resolve(Object.assign({},this,{bio:void 0,email:void 0,image:void 0,password:void 0,token:void 0,username:void 0}))}catch(e){return Promise.reject(e)}},r.register=function(e,t,r){try{var n=this,i=sgrud.state.effects,o=i.fetch;return Promise.resolve((0,i.state)("io.github.sgrud.state.config")).then(function(i){return Promise.resolve(o(i.apiUrl+"/users",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({user:{email:e,username:t,password:r}})})).then(function(e){function t(t){return Promise.resolve(e.json()).then(function(e){return Object.assign({},n,e.user)})}var r=function(){if(!e.ok)return Promise.resolve(e.json()).then(function(e){throw e})}();return r&&r.then?r.then(t):t()})})}catch(e){return Promise.reject(e)}},r.update=function(e){try{var t=this,r=sgrud.state.effects,n=r.fetch;return Promise.resolve((0,r.state)("io.github.sgrud.state.config")).then(function(r){return Promise.resolve(n(r.apiUrl+"/user",{method:"PUT",headers:{accept:"application/json",authorization:"Token "+t.token,"content-type":"application/json"},body:JSON.stringify({user:e})})).then(function(e){function r(r){return Promise.resolve(e.json()).then(function(e){return Object.assign({},t,e.user)})}var n=function(){if(!e.ok)return Promise.resolve(e.json()).then(function(e){throw e})}();return n&&n.then?n.then(r):r()})})}catch(e){return Promise.reject(e)}},t}(u.Store),g.handle="io.github.sgrud.state.user",v=g),e.UserStore=v=s.__decorate([u.Stateful(v.handle,{bio:void 0,email:void 0,image:void 0,token:void 0,username:void 0})],e.UserStore),e.UserProxy=/*#__PURE__*/function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).configStore=void 0,t.userStore=void 0,t}return h.default(t,e),t.prototype.handle=function(e,t){var r=this;return i.race(u.StateHandler,i.timer(0)).pipe(i.switchMap(function(o){return o instanceof u.StateHandler?i.forkJoin({configState:i.from(r.configStore).pipe(i.first()),userState:i.from(r.userStore).pipe(i.first())}).pipe(i.switchMap(function(r){var i=r.userState;return e.url.startsWith(r.configState.apiUrl)&&i.token&&n.assign(e,{headers:{authorization:"Token "+i.token}}),t.handle(e)})):t.handle(e)}))},t}(n.Provider("sgrud.core.Proxy")),s.__decorate([n.Factor(function(){return e.ConfigStore})],e.UserProxy.prototype,"configStore",void 0),s.__decorate([n.Factor(function(){return e.UserStore})],e.UserProxy.prototype,"userStore",void 0),e.UserProxy=s.__decorate([n.Target()],e.UserProxy),e.FadeProxy=/*#__PURE__*/function(e){function t(){var t;return t=e.call(this)||this,document.documentElement.style.transition="250ms filter",i.from(m.default(t)).subscribe(function(e){var t=e.length;document.documentElement.style.filter="grayscale("+(t?1:0)+")",document.documentElement.style.pointerEvents=t?"none":"auto"}),t}return h.default(t,e),t}(n.Transit),e.FadeProxy=s.__decorate([n.Target([],n.Transit)],e.FadeProxy),e.FadeQueue=/*#__PURE__*/function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).element=void 0,t}return h.default(t,e),t.prototype.handle=function(e,t,r){var n,o=this;return this.element?((n=this.element.style).transition||(n.transition="opacity 100ms"),this.element.style.opacity="0",i.timer(100).pipe(i.switchMap(function(){return r.handle(t).pipe(i.delay(50))}),i.finalize(function(){return o.element.style.opacity="1"}))):r.handle(t)},t}(n.Provider("sgrud.shell.Queue")),e.FadeQueue=s.__decorate([n.Target()],e.FadeQueue),e.Endpoint=y});
//# sourceMappingURL=index.umd.js.map
