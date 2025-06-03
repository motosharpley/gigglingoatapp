System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js"],(function(t,e){"use strict";var r,o,i,n,a,c;return{setters:[t=>{r=t.i,o=t.r,i=t.a,n=t.x},t=>{a=t.n,c=t.c}],execute:function(){const t=r`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var e=function(t,e,r,o){var i,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(n<3?i(a):n>3?i(e,r,a):i(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let l=class extends i{constructor(){super(...arguments),this.text=""}render(){return n`${this.template()}`}template(){return this.text?n`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};l.styles=[o,t],e([a()],l.prototype,"text",void 0),l=e([c("wui-separator")],l)}}}));
