System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js"],(function(r,t){"use strict";var a,o,e,i,s,n;return{setters:[r=>{a=r.i,o=r.r,e=r.a,i=r.x},r=>{s=r.n,n=r.c}],execute:function(){const r=a`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var t=function(r,t,a,o){var e,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(r,t,a,o);else for(var n=r.length-1;n>=0;n--)(e=r[n])&&(s=(i<3?e(s):i>3?e(t,a,s):e(t,a))||s);return i>3&&s&&Object.defineProperty(t,a,s),s};let c=class extends e{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const r="md"===this.size?"mini-700":"micro-700";return i`
      <wui-text data-variant=${this.variant} variant=${r} color="inherit">
        <slot></slot>
      </wui-text>
    `}};c.styles=[o,r],t([s()],c.prototype,"variant",void 0),t([s()],c.prototype,"size",void 0),c=t([n("wui-tag")],c)}}}));
