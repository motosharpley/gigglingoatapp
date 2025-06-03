System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js"],(function(e,t){"use strict";var o,r,i,a,n,l,s,c,u,d,g,p,f,h,w,v,y;return{setters:[e=>{o=e.A,r=e.e,i=e.f,a=e.R,n=e.C,l=e.S,s=e.d,c=e.p,u=e.c,d=e.i,g=e.r,p=e.a,f=e.x,h=e.h},e=>{w=e.n,v=e.c,y=e.o}],execute:function(){e("e",(async function(e){o.setSocialProvider(e,r.state.activeChain),i.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await async function(){a.push("ConnectingFarcaster");const e=n.getAuthConnector();if(e&&!o.state.farcasterUrl)try{const{url:t}=await e.provider.getFarcasterUri();o.setFarcasterUrl(t,r.state.activeChain)}catch(t){a.goBack(),l.showError(t)}}():await async function(e){a.push("ConnectingSocial");const t=n.getAuthConnector();let i=null;try{const a=setTimeout((()=>{throw new Error("Social login timed out. Please try again.")}),45e3);if(t&&e){if(s.isTelegram()||(i=function(){try{return s.returnOpenHref(`${u.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}()),i)o.setSocialWindow(i,r.state.activeChain);else if(!s.isTelegram())throw new Error("Could not create social popup");const{uri:n}=await t.provider.getSocialRedirectUri({provider:e});var d;if(!n)throw null===(d=i)||void 0===d||d.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=n),s.isTelegram()){c.setTelegramSocialProvider(e);const t=s.formatTelegramSocialLoginUrl(n);s.openHref(t,"_top")}clearTimeout(a)}}catch(p){var g;null===(g=i)||void 0===g||g.close(),l.showError(null==p?void 0:p.message)}}(e)}));const t=d`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var b=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let x=class extends p{constructor(){super(...arguments),this.logo="google"}render(){return f`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};x.styles=[g,t],b([w()],x.prototype,"logo",void 0),x=b([v("wui-logo")],x);const m=d`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var C=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let S=class extends p{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return f`
      <button ?disabled=${this.disabled} tabindex=${y(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?f` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};S.styles=[g,h,m],C([w()],S.prototype,"logo",void 0),C([w()],S.prototype,"name",void 0),C([w()],S.prototype,"align",void 0),C([w()],S.prototype,"tabIdx",void 0),C([w({type:Boolean})],S.prototype,"disabled",void 0),S=C([v("wui-list-social")],S)}}}));
