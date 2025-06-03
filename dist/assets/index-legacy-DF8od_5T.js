System.register(["./index-legacy-CV5l4Qpz.js","./if-defined-legacy-D6M4dwVv.js"],(function(e,t){"use strict";var i,r,s,o,c,n,a;return{setters:[e=>{i=e.i,r=e.r,s=e.K,o=e.a,c=e.x},e=>{n=e.n,a=e.c}],execute:function(){const e=i`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var t=function(e,t,i,r){var s,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(c=(o<3?s(c):o>3?s(t,i,c):s(t,i))||c);return o>3&&c&&Object.defineProperty(t,i,c),c};let l=class extends o{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,c`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[r,s,e],t([n()],l.prototype,"src",void 0),t([n()],l.prototype,"alt",void 0),t([n()],l.prototype,"size",void 0),l=t([a("wui-image")],l)}}}));
