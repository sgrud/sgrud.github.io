import{__decorate as t}from"tslib";import{unsafeCSS as o,LitElement as e,html as r}from"lit";import{property as s,customElement as i}from"lit/decorators.js";let l,d,h=t=>t,n=(l=class extends e{constructor(...t){super(...t),this.name="world"}render(){return r(d||(d=h`
      <div>
        <h1>lit-component says hello ${0}</h1>
        <div><slot></slot></div>
      </div>
    `),this.name)}createRenderRoot(){for(;null!=(t=this.shadowRoot)&&t.hasChildNodes();){var t;this.shadowRoot.removeChild(this.shadowRoot.lastChild)}return super.createRenderRoot()}},l.styles=o(":host>div>h1{font-style:italic}"),l);t([s({type:String})],n.prototype,"name",void 0),n=t([i("lit-component")],n);export{n as LitComponent};
//# sourceMappingURL=sgrud-skeleton-lit.modern.js.map
