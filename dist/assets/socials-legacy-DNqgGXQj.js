System.register(["./index-legacy-CV5l4Qpz.js","./if-defined-legacy-D6M4dwVv.js","./index-legacy-BecWyGg1.js","./index-legacy-Qp2O6GI9.js","./index-legacy-DDeaeVC_.js","./index-legacy-CRzhNi84.js","./index-legacy-C0awMG0q.js","./index-legacy-CGWOzzQg.js","./index-legacy-109jSbdr.js","./index-legacy-Cr4kTQ5s.js","./ref-legacy-Br7HfMRS.js","./ConstantsUtil-legacy-Bt7NKyif.js","./index-legacy-BPEkTMac.js","./index-legacy-DF8od_5T.js"],(function(e,i){"use strict";var t,o,r,a,n,s,c,l,d,u,h,p,w,g,v,m,f,x,b,y,C,k,P,S,E,$;return{setters:[e=>{t=e.i,o=e.a,r=e.C,a=e.O,n=e.R,s=e.b,c=e.x,l=e.d,d=e.m,u=e.n,h=e.A,p=e.o,w=e.e,g=e.f,v=e.k,m=e.p,f=e.S,x=e.q,b=e.M,y=e.T},e=>{C=e.n,k=e.r,P=e.c,S=e.o},e=>{E=e.O},e=>{$=e.e},null,null,null,null,null,null,null,null,null,null],execute:function(){const i=t`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var L=function(e,i,t,o){var r,a=arguments.length,n=a<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,i,t,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(i,t,n):r(i,t))||n);return a>3&&n&&Object.defineProperty(i,t,n),n};let I=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=r.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.remoteFeatures=a.state.remoteFeatures,this.isPwaLoading=!1,this.unsubscribe.push(r.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),a.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e,i;let t=(null===(e=this.remoteFeatures)||void 0===e?void 0:e.socials)||[];const o=Boolean(this.authConnector),r=null===(i=t)||void 0===i?void 0:i.length,a="ConnectSocials"===n.state.view;return o&&r||a?(a&&!r&&(t=s.DEFAULT_SOCIALS),c` <wui-flex flexDirection="column" gap="xs">
      ${t.map((e=>c`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            data-testid=${`social-selector-${e}`}
            name=${e}
            logo=${e}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`))}
    </wui-flex>`):null}async onSocialClick(e){e&&await $(e)}async handlePwaFrameLoad(){if(l.isPWA()){this.isPwaLoading=!0;try{var e;(null===(e=this.authConnector)||void 0===e?void 0:e.provider)instanceof d&&await this.authConnector.provider.init()}catch(i){u.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:i.message},"error")}finally{this.isPwaLoading=!1}}}};I.styles=i,L([C()],I.prototype,"tabIdx",void 0),L([k()],I.prototype,"connectors",void 0),L([k()],I.prototype,"authConnector",void 0),L([k()],I.prototype,"remoteFeatures",void 0),L([k()],I.prototype,"isPwaLoading",void 0),I=L([P("w3m-social-login-list")],I);const O=t`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var R=function(e,i,t,o){var r,a=arguments.length,n=a<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,i,t,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(i,t,n):r(i,t))||n);return a>3&&n&&Object.defineProperty(i,t,n),n};let T=e("W3mConnectSocialsView",class extends o{constructor(){super(),this.unsubscribe=[],this.checked=E.state.isLegalCheckboxChecked,this.unsubscribe.push(E.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:i,privacyPolicyUrl:t}=a.state,o=null===(e=a.state.features)||void 0===e?void 0:e.legalCheckbox,r=Boolean(i||t)&&Boolean(o),n=r&&!this.checked,s=n?-1:void 0;return c`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r?["0","s","s","s"]:"s"}
        gap="xs"
        class=${S(n?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${S(s)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}});T.styles=O,R([k()],T.prototype,"checked",void 0),e("W3mConnectSocialsView",T=R([P("w3m-connect-socials-view")],T));const j=t`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var A=function(e,i,t,o){var r,a=arguments.length,n=a<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,i,t,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(i,t,n):r(i,t))||n);return a>3&&n&&Object.defineProperty(i,t,n),n};let U=e("W3mConnectingSocialView",class extends o{constructor(){super(),this.unsubscribe=[],this.socialProvider=h.state.socialProvider,this.socialWindow=h.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=r.getAuthConnector(),this.handleSocialConnection=async e=>{var i;if(null!==(i=e.data)&&void 0!==i&&i.resultUri)if(e.origin===p.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),h.setSocialWindow(void 0,w.state.activeChain)),this.connecting=!0,this.updateMessage();const i=e.data.resultUri;this.socialProvider&&g.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await v.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:i},this.authConnector.chain),this.socialProvider&&(m.setConnectedSocialProvider(this.socialProvider),g.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(t){this.error=!0,this.updateMessage(),this.socialProvider&&g.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else n.goBack(),f.showError("Untrusted Origin"),this.socialProvider&&g.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},x.EmbeddedWalletAbortController.signal.addEventListener("abort",(()=>{this.socialWindow&&(this.socialWindow.close(),h.setSocialWindow(void 0,w.state.activeChain))})),this.unsubscribe.push(h.subscribe((e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&(b.state.open||a.state.enableEmbedded)&&b.close()}))),this.authConnector&&this.connectSocial()}disconnectedCallback(){var e;this.unsubscribe.forEach((e=>e())),window.removeEventListener("message",this.handleSocialConnection,!1),null===(e=this.socialWindow)||void 0===e||e.close(),h.setSocialWindow(void 0,w.state.activeChain)}render(){var e;return c`
      <wui-flex
        data-error=${S(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${S(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${null!==(e=this.socialProvider)&&void 0!==e?e:"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=y.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${9*i}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval((()=>{var i;null!==(i=this.socialWindow)&&void 0!==i&&i.closed&&(this.connecting||"ConnectingSocial"!==n.state.view||(this.socialProvider&&g.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),n.goBack()),clearInterval(e))}),1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}});U.styles=j,A([k()],U.prototype,"socialProvider",void 0),A([k()],U.prototype,"socialWindow",void 0),A([k()],U.prototype,"error",void 0),A([k()],U.prototype,"connecting",void 0),A([k()],U.prototype,"message",void 0),e("W3mConnectingSocialView",U=A([P("w3m-connecting-social-view")],U));const W=t`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var _=function(e,i,t,o){var r,a=arguments.length,n=a<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,i,t,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(i,t,n):r(i,t))||n);return a>3&&n&&Object.defineProperty(i,t,n),n};let D=e("W3mConnectingFarcasterView",class extends o{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=h.state.socialProvider,this.uri=h.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=r.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(h.subscribeKey("farcasterUrl",(e=>{e&&(this.uri=e,this.connectFarcaster())})),h.subscribeKey("socialProvider",(e=>{e&&(this.socialProvider=e)}))),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),c`${this.platformTemplate()}`}platformTemplate(){return l.isMobile()?c`${this.mobileTemplate()}`:c`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?c`${this.loadingTemplate()}`:c`${this.qrTemplate()}`}qrTemplate(){return c` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","xl","xl","xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return c` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=y.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${9*i}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{var e;await(null===(e=this.authConnector)||void 0===e?void 0:e.provider.connectFarcaster()),this.socialProvider&&(m.setConnectedSocialProvider(this.socialProvider),g.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0,await v.connectExternal(this.authConnector,this.authConnector.chain),this.socialProvider&&g.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,b.close()}catch(i){this.socialProvider&&g.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),n.goBack(),f.showError(i)}}mobileLinkTemplate(){return c`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&l.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return c` <wui-qr-code
      size=${e}
      theme=${y.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${S(y.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return c`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(l.copyToClopboard(this.uri),f.showSuccess("Link copied"))}catch{f.showError("Failed to copy")}}});D.styles=W,_([k()],D.prototype,"socialProvider",void 0),_([k()],D.prototype,"uri",void 0),_([k()],D.prototype,"ready",void 0),_([k()],D.prototype,"loading",void 0),e("W3mConnectingFarcasterView",D=_([P("w3m-connecting-farcaster-view")],D))}}}));
