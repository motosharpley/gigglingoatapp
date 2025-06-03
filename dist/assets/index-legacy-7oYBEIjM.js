System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js"],(function(o,r){"use strict";var e,i,t,c,s,n,l;return{setters:[o=>{e=o.i,i=o.r,t=o.h,c=o.a,s=o.x},o=>{n=o.n,l=o.c}],execute:function(){const o=e`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var r=function(o,r,e,i){var t,c=arguments.length,s=c<3?r:null===i?i=Object.getOwnPropertyDescriptor(r,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(o,r,e,i);else for(var n=o.length-1;n>=0;n--)(t=o[n])&&(s=(c<3?t(s):c>3?t(r,e,s):t(r,e))||s);return c>3&&s&&Object.defineProperty(r,e,s),s};let a=class extends c{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const o=this.iconSize||this.size,r="lg"===this.size,e="xl"===this.size,i=r?"12%":"16%",t=r?"xxs":e?"s":"3xl",c="gray"===this.background,n="opaque"===this.background,l="accent-100"===this.backgroundColor&&n||"success-100"===this.backgroundColor&&n||"error-100"===this.backgroundColor&&n||"inverse-100"===this.backgroundColor&&n;let a=`var(--wui-color-${this.backgroundColor})`;return l?a=`var(--wui-icon-box-bg-${this.backgroundColor})`:c&&(a=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${a};\n       --local-bg-mix: ${l||c?"100%":i};\n       --local-border-radius: var(--wui-border-radius-${t});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,s` <wui-icon color=${this.iconColor} size=${o} name=${this.icon}></wui-icon> `}};a.styles=[i,t,o],r([n()],a.prototype,"size",void 0),r([n()],a.prototype,"backgroundColor",void 0),r([n()],a.prototype,"iconColor",void 0),r([n()],a.prototype,"iconSize",void 0),r([n()],a.prototype,"background",void 0),r([n({type:Boolean})],a.prototype,"border",void 0),r([n()],a.prototype,"borderColor",void 0),r([n()],a.prototype,"icon",void 0),a=r([l("wui-icon-box")],a)}}}));
