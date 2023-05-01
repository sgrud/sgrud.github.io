!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@babel/runtime/helpers/extends"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/inheritsLoose"),require("@babel/runtime/helpers/wrapNativeSuper"),require("tslib"),require("@sgrud/shell/jsx-runtime"),require("@sgrud/core"),require("@sgrud/shell"),require("rxjs"),require("sgrud-realworld-core"),require("sgrud-realworld-eager")):"function"==typeof define&&define.amd?define(["exports","@babel/runtime/helpers/extends","@babel/runtime/helpers/createClass","@babel/runtime/helpers/inheritsLoose","@babel/runtime/helpers/wrapNativeSuper","tslib","@sgrud/shell/jsx-runtime","@sgrud/core","@sgrud/shell","rxjs","sgrud-realworld-core","sgrud-realworld-eager"],r):r(((e||self).sgrud=e.sgrud||{},e.sgrud.realworld=e.sgrud.realworld||{},e.sgrud.realworld.lazy={}),e.babel.runtime.helpers.extends,e.babel.runtime.helpers.createClass,e.babel.runtime.helpers.inheritsLoose,e.babel.runtime.helpers.wrapNativeSuper,e.globalThis,e.sgrud.shell.jsx.runtime,e.sgrud.core,e.sgrud.shell,e.rxjs,e.sgrud.realworld.core,e.sgrud.realworld.eager)}(this,function(e,r,t,o,s,i,n,l,a,u,d,c){function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=/*#__PURE__*/p(r),h=/*#__PURE__*/p(t),g=/*#__PURE__*/p(o),f=/*#__PURE__*/p(s);e.EditorComponent=/*#__PURE__*/function(e){function r(){for(var r,t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return(r=e.call.apply(e,[this].concat(o))||this).styles=['@import url("/realworld/style.css");'],r.router=void 0,r.form=void 0,r.article=void 0,r.errors=void 0,r}return g.default(r,e),r.prototype.updateArticle=function(){var e=this,r=new FormData(this.form);this.errors&&(this.errors=void 0,this.renderComponent()),d.Endpoint.updateArticle(m.default({},this.article,{body:r.get("body").toString(),description:r.get("description").toString(),tagList:r.get("tagList").toString().split(" "),title:r.get("title").toString()})).subscribe({error:function(r){e.errors=r.errors,e.renderComponent()},next:function(r){return e.router.navigate("/article/"+r.slug).subscribe()}})},h.default(r,[{key:"template",get:function(){var e,r,t,o,s,i,l,a,u=this;return n.jsx(n.Fragment,{children:n.jsx("div",{className:"editor-page",children:n.jsx("div",{className:"container page",children:n.jsx("div",{className:"row",children:n.jsxs("div",{className:"col-md-10 col-xs-12 offset-md-1",children:[n.jsx(c.ErrorMessages,{errors:this.errors}),n.jsx("form",{children:n.jsxs("fieldset",{children:[n.jsx("fieldset",{className:"form-group",children:n.jsx("input",{className:"form-control form-control-lg",name:"title",placeholder:"Article Title",required:!0,type:"text",value:null!=(e=null==(r=this.article)?void 0:r.title)?e:""})}),n.jsx("fieldset",{className:"form-group",children:n.jsx("input",{className:"form-control",name:"description",placeholder:"What's this article about?",required:!0,type:"text",value:null!=(t=null==(o=this.article)?void 0:o.description)?t:""})}),n.jsx("fieldset",{className:"form-group",children:n.jsx("textarea",{className:"form-control",name:"body",placeholder:"Write your article (in markdown)",required:!0,rows:8,children:null==(s=this.article)?void 0:s.body})}),n.jsxs("fieldset",{className:"form-group",children:[n.jsx("input",{className:"form-control",name:"tagList",placeholder:"Enter tags",type:"text",value:null!=(i=null==(l=this.article)?void 0:l.tagList.join(" "))?i:""}),n.jsx("div",{className:"tag-list"})]}),n.jsx("button",{className:"btn btn-lg btn-primary pull-xs-right",disabled:!(null!=(a=this.form)&&a.checkValidity())||void 0,onclick:function(){return u.updateArticle()},type:"button",children:"Publish Article"})]})},"form")]})})})})})}}]),r}(/*#__PURE__*/f.default(HTMLElement)),i.__decorate([l.Factor(function(){return a.Router})],e.EditorComponent.prototype,"router",void 0),i.__decorate([a.Reference("form",["input"])],e.EditorComponent.prototype,"form",void 0),i.__decorate([a.Resolve(function(e){var r=e.params;return r.slug?d.Endpoint.readArticle(r.slug):u.of(void 0)})],e.EditorComponent.prototype,"article",void 0),e.EditorComponent=i.__decorate([a.Route({parent:c.AppComponent,path:"editor/:slug?"}),a.Component("editor-component")],e.EditorComponent),e.SettingsComponent=/*#__PURE__*/function(e){function r(){for(var r,t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return(r=e.call.apply(e,[this].concat(o))||this).styles=['@import url("/realworld/style.css");'],r.router=void 0,r.userStore=void 0,r.userState=void 0,r.form=void 0,r.errors=void 0,r}g.default(r,e);var t=r.prototype;return t.dispatchLogout=function(){var e=this;this.userStore.dispatch("logout").subscribe({error:function(r){e.errors=r.errors,e.renderComponent()},next:function(){return e.router.navigate("/login").subscribe()}})},t.dispatchUpdate=function(){var e=this,r=new FormData(this.form);this.errors&&(this.errors=void 0,this.renderComponent()),this.userStore.dispatch("update",[{bio:r.get("bio").toString(),email:r.get("email").toString(),image:r.get("image").toString(),password:r.get("password").toString(),username:r.get("username").toString()}]).subscribe({error:function(r){e.errors=r.errors,e.renderComponent()},next:function(r){return e.router.navigate("/profile/"+r.username).subscribe()}})},h.default(r,[{key:"template",get:function(){var e,r,t,o,s,i,l,a,u=this;return n.jsx(n.Fragment,{children:n.jsx("div",{className:"settings-page",children:n.jsx("div",{className:"container page",children:n.jsx("div",{className:"row",children:n.jsxs("div",{className:"col-md-6 col-xs-12 offset-md-3",children:[n.jsx("h1",{className:"text-xs-center",children:"Your Settings"}),n.jsx(c.ErrorMessages,{errors:this.errors}),n.jsx("form",{children:n.jsxs("fieldset",{children:[n.jsx("fieldset",{className:"form-group",children:n.jsx("input",{className:"form-control",name:"image",placeholder:"URL of profile picture",type:"url",value:null!=(e=null==(r=this.userState)?void 0:r.image)?e:""})}),n.jsx("fieldset",{className:"form-group",children:n.jsx("input",{className:"form-control form-control-lg",name:"username",placeholder:"Your Name",required:!0,type:"text",value:null!=(t=null==(o=this.userState)?void 0:o.username)?t:""})}),n.jsx("fieldset",{className:"form-group",children:n.jsx("textarea",{className:"form-control form-control-lg",name:"bio",placeholder:"Short bio about you",rows:8,children:null==(s=this.userState)?void 0:s.bio})}),n.jsx("fieldset",{className:"form-group",children:n.jsx("input",{className:"form-control form-control-lg",name:"email",pattern:"^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",placeholder:"Email",required:!0,type:"email",value:null!=(i=null==(l=this.userState)?void 0:l.email)?i:""})}),n.jsx("fieldset",{className:"form-group",children:n.jsx("input",{className:"form-control form-control-lg",name:"password",pattern:"^.{8,}$",placeholder:"Password",type:"password"})}),n.jsx("button",{className:"btn btn-lg btn-primary pull-xs-right",disabled:!(null!=(a=this.form)&&a.checkValidity())||void 0,onclick:function(){return u.dispatchUpdate()},type:"button",children:"Update Settings"})]})},"form"),n.jsx("hr",{}),n.jsx("button",{className:"btn btn-outline-danger",onclick:function(){return u.dispatchLogout()},type:"button",children:"Or click here to logout."})]})})})})})}}]),r}(/*#__PURE__*/f.default(HTMLElement)),i.__decorate([l.Factor(function(){return a.Router})],e.SettingsComponent.prototype,"router",void 0),i.__decorate([l.Factor(function(){return d.UserStore})],e.SettingsComponent.prototype,"userStore",void 0),i.__decorate([a.Fluctuate(function(){return new d.UserStore})],e.SettingsComponent.prototype,"userState",void 0),i.__decorate([a.Reference("form",["input"])],e.SettingsComponent.prototype,"form",void 0),e.SettingsComponent=i.__decorate([a.Route({parent:c.AppComponent,path:"settings"}),a.Component("settings-component")],e.SettingsComponent)});
//# sourceMappingURL=index.umd.js.map
