System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js"],(function(r,e){"use strict";var o,i,t,a,c;return{setters:[r=>{o=r.i,i=r.a,t=r.x},r=>{a=r.n,c=r.c}],execute:function(){const r=o`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var e=function(r,e,o,i){var t,a=arguments.length,c=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(r,e,o,i);else for(var s=r.length-1;s>=0;s--)(t=r[s])&&(c=(a<3?t(c):a>3?t(e,o,c):t(e,o))||c);return a>3&&c&&Object.defineProperty(e,o,c),c};let s=class extends i{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,t`<slot></slot>`}};s.styles=[r],e([a()],s.prototype,"width",void 0),e([a()],s.prototype,"height",void 0),e([a()],s.prototype,"borderRadius",void 0),e([a()],s.prototype,"variant",void 0),s=e([c("wui-shimmer")],s)}}}));
