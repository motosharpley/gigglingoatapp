System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js"],(function(e,i){"use strict";var o,t,r,n,s,c,a,d;return{setters:[e=>{o=e.i,t=e.r,r=e.h,n=e.K,s=e.a,c=e.x},e=>{a=e.n,d=e.c}],execute:function(){const e=o`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var i=function(e,i,o,t){var r,n=arguments.length,s=n<3?i:null===t?t=Object.getOwnPropertyDescriptor(i,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,i,o,t);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(n<3?r(s):n>3?r(i,o,s):r(i,o))||s);return n>3&&s&&Object.defineProperty(i,o,s),s};let l=class extends s{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",i="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${i});\n`,c`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[t,r,n,e],i([a()],l.prototype,"size",void 0),i([a({type:Boolean})],l.prototype,"disabled",void 0),i([a()],l.prototype,"icon",void 0),i([a()],l.prototype,"iconColor",void 0),l=i([d("wui-icon-link")],l)}}}));
