System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js","./index-legacy-Brpa9nMA.js"],(function(e,t){"use strict";var i,r,a,s,o,n,l;return{setters:[e=>{i=e.i,r=e.r,a=e.a,s=e.x},e=>{o=e.n,n=e.c,l=e.o},null],execute:function(){const e=i`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var t=function(e,t,i,r){var a,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(s<3?a(o):s>3?a(t,i,o):a(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o};let u=class extends a{constructor(){super(...arguments),this.disabled=!1}render(){return s`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${l(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?s`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};u.styles=[r,e],t([o()],u.prototype,"errorMessage",void 0),t([o({type:Boolean})],u.prototype,"disabled",void 0),t([o()],u.prototype,"value",void 0),t([o()],u.prototype,"tabIdx",void 0),u=t([n("wui-email-input")],u)}}}));
