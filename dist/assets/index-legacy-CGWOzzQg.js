System.register(["./index-legacy-CV5l4Qpz.js","./if-defined-legacy-D6M4dwVv.js"],(function(t,e){"use strict";var o,r,i,n,s,a,c,l;return{setters:[t=>{o=t.i,r=t.r,i=t.h,n=t.a,s=t.x},t=>{a=t.n,c=t.c,l=t.o}],execute:function(){const t=o`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var e=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let d=class extends n{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return s`
      <button ?disabled=${this.disabled} tabindex=${l(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};d.styles=[r,i,t],e([a()],d.prototype,"tabIdx",void 0),e([a({type:Boolean})],d.prototype,"disabled",void 0),e([a()],d.prototype,"color",void 0),d=e([c("wui-link")],d)}}}));
