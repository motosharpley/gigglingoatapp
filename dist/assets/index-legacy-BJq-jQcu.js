System.register(["./index-legacy-CV5l4Qpz.js","./if-defined-legacy-D6M4dwVv.js","./index-legacy-DF8od_5T.js","./index-legacy-BPEkTMac.js","./index-legacy-hSC_w_-k.js","./index-legacy-DDeaeVC_.js","./index-legacy-CfFf7OdZ.js","./index-legacy-CY_RwfXy.js","./index-legacy-DFeqyvdr.js","./index-legacy-C0awMG0q.js","./index-legacy-C-f6UD2F.js","./index-legacy-B4tPRNYC.js","./index-legacy-BeVkexG7.js","./index-legacy-CGWOzzQg.js","./index-legacy-BFrk8aq4.js","./index-legacy-DLy3vKsn.js","./ref-legacy-Br7HfMRS.js","./index-legacy-BYTHDDSo.js","./index-legacy-Cr4kTQ5s.js","./index-legacy-DWB81zPq.js","./index-legacy-D4CW8Z1g.js","./index-legacy-BecWyGg1.js","./index-legacy-Qp2O6GI9.js","./index-legacy-C5lKrPcg.js","./index-legacy-CRzhNi84.js","./index-legacy-DF3uwQia.js","./index-legacy-109jSbdr.js","./index-legacy-6QVE975v.js","./index-legacy-DvzErYf_.js","./ConstantsUtil-legacy-Bt7NKyif.js"],(function(e,t){"use strict";var i,o,n,r,a,s,l,c,d,u,p,h,w,g,b,f,v,m,x,y,k,C,$,S,T,I,R,A,O,E,N,j,P,D,W,U,L,_,B,z,V,F,K,M,q,H,G;return{setters:[e=>{i=e.i,o=e.r,n=e.h,r=e.a,a=e.x,s=e.e,l=e.t,c=e.O,d=e.H,u=e.A,p=e.d,h=e.M,w=e.f,g=e.p,b=e.C,f=e.c,v=e.R,m=e.b,x=e.S,y=e.W,k=e.k,C=e.s,$=e.o,S=e.B,T=e.K,I=e.D,R=e.L,A=e.m,O=e.n,E=e.Q,N=e.l,j=e.T,P=e.U,D=e.V},e=>{W=e.n,U=e.c,L=e.o,_=e.U,B=e.r,z=e.e},null,null,null,null,t=>{e("W3mRouter",t.W)},null,null,null,null,e=>{V=e.n},null,null,e=>{F=e.M},null,e=>{K=e.e,M=e.n},null,null,null,null,e=>{q=e.O},e=>{H=e.e},e=>{G=e.N},null,null,null,null,null,null],execute:function(){const t=i`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Y=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let X=class extends r{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return a`
      <button
        ?disabled=${this.disabled}
        class=${L(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?_.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return a` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?a`<wui-image src=${this.networkSrc}></wui-image>`:a`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,t=this.loading?a`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:a`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return a`${e} ${t}`}return null}};X.styles=[o,n,t],Y([W()],X.prototype,"networkSrc",void 0),Y([W()],X.prototype,"avatarSrc",void 0),Y([W()],X.prototype,"balance",void 0),Y([W({type:Boolean})],X.prototype,"isUnsupportedChain",void 0),Y([W({type:Boolean})],X.prototype,"disabled",void 0),Y([W({type:Boolean})],X.prototype,"loading",void 0),Y([W()],X.prototype,"address",void 0),Y([W()],X.prototype,"profileName",void 0),Y([W()],X.prototype,"charsStart",void 0),Y([W()],X.prototype,"charsEnd",void 0),X=Y([U("wui-account-button")],X);var Q=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class J extends r{constructor(){var e,t,i,o,n,r;super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=null===(e=s.getAccountData(this.namespace))||void 0===e?void 0:e.caipAddress,this.balanceVal=null===(t=s.getAccountData(this.namespace))||void 0===t?void 0:t.balance,this.balanceSymbol=null===(i=s.getAccountData(this.namespace))||void 0===i?void 0:i.balanceSymbol,this.profileName=null===(o=s.getAccountData(this.namespace))||void 0===o?void 0:o.profileName,this.profileImage=null===(n=s.getAccountData(this.namespace))||void 0===n?void 0:n.profileImage,this.network=null===(r=s.getNetworkData(this.namespace))||void 0===r?void 0:r.caipNetwork,this.networkImage=l.getNetworkImage(this.network),this.isSupported=!!c.state.allowUnsupportedChain||!s.state.activeChain||s.checkIfSupportedNetwork(s.state.activeChain)}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(s.subscribeChainProp("accountState",(e=>{this.caipAddress=null==e?void 0:e.caipAddress,this.balanceVal=null==e?void 0:e.balance,this.balanceSymbol=null==e?void 0:e.balanceSymbol,this.profileName=null==e?void 0:e.profileName,this.profileImage=null==e?void 0:e.profileImage}),e),s.subscribeChainProp("networkState",(t=>{this.network=null==t?void 0:t.caipNetwork,this.isSupported=s.checkIfSupportedNetwork(e,null==t?void 0:t.caipNetwork),this.networkImage=l.getNetworkImage(null==t?void 0:t.caipNetwork)}),e)):this.unsubscribe.push(d.subscribeNetworkImages((()=>{this.networkImage=l.getNetworkImage(this.network)})),s.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),u.subscribeKey("balance",(e=>this.balanceVal=e)),u.subscribeKey("balanceSymbol",(e=>this.balanceSymbol=e)),u.subscribeKey("profileName",(e=>this.profileName=e)),u.subscribeKey("profileImage",(e=>this.profileImage=e)),s.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=l.getNetworkImage(e),this.isSupported=null==e||!e.chainNamespace||s.checkIfSupportedNetwork(null==e?void 0:e.chainNamespace),this.fetchNetworkImage(e)})))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!s.state.activeChain)return null;const e="show"===this.balance,t="string"!=typeof this.balanceVal;return a`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!c.state.allowUnsupportedChain&&!this.isSupported}
        address=${L(p.getPlainAddress(this.caipAddress))}
        profileName=${L(this.profileName)}
        networkSrc=${L(this.networkImage)}
        avatarSrc=${L(this.profileImage)}
        balance=${e?p.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${"account-button"+(this.namespace?`-${this.namespace}`:"")}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||c.state.allowUnsupportedChain?h.open({namespace:this.namespace}):h.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){var t,i;null!=e&&null!==(t=e.assets)&&void 0!==t&&t.imageId&&(this.networkImage=await l.fetchNetworkImage(null==e||null===(i=e.assets)||void 0===i?void 0:i.imageId))}}Q([W({type:Boolean})],J.prototype,"disabled",void 0),Q([W()],J.prototype,"balance",void 0),Q([W()],J.prototype,"charsStart",void 0),Q([W()],J.prototype,"charsEnd",void 0),Q([W()],J.prototype,"namespace",void 0),Q([B()],J.prototype,"caipAddress",void 0),Q([B()],J.prototype,"balanceVal",void 0),Q([B()],J.prototype,"balanceSymbol",void 0),Q([B()],J.prototype,"profileName",void 0),Q([B()],J.prototype,"profileImage",void 0),Q([B()],J.prototype,"network",void 0),Q([B()],J.prototype,"networkImage",void 0),Q([B()],J.prototype,"isSupported",void 0);let Z=e("W3mAccountButton",class extends J{});e("W3mAccountButton",Z=Q([U("w3m-account-button")],Z));let ee=e("AppKitAccountButton",class extends J{});e("AppKitAccountButton",ee=Q([U("appkit-account-button")],ee));const te=i`
  :host {
    display: block;
    width: max-content;
  }
`;var ie=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class oe extends r{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=s.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(s.subscribeChainProp("accountState",(e=>{this.caipAddress=null==e?void 0:e.caipAddress}),this.namespace)):this.unsubscribe.push(s.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.caipAddress?a`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${L(this.balance)}
            .charsStart=${L(this.charsStart)}
            .charsEnd=${L(this.charsEnd)}
            namespace=${L(this.namespace)}
          >
          </appkit-account-button>
        `:a`
          <appkit-connect-button
            size=${L(this.size)}
            label=${L(this.label)}
            loadingLabel=${L(this.loadingLabel)}
            namespace=${L(this.namespace)}
          ></appkit-connect-button>
        `}}oe.styles=te,ie([W({type:Boolean})],oe.prototype,"disabled",void 0),ie([W()],oe.prototype,"balance",void 0),ie([W()],oe.prototype,"size",void 0),ie([W()],oe.prototype,"label",void 0),ie([W()],oe.prototype,"loadingLabel",void 0),ie([W()],oe.prototype,"charsStart",void 0),ie([W()],oe.prototype,"charsEnd",void 0),ie([W()],oe.prototype,"namespace",void 0),ie([B()],oe.prototype,"caipAddress",void 0);let ne=e("W3mButton",class extends oe{});e("W3mButton",ne=ie([U("w3m-button")],ne));let re=e("AppKitButton",class extends oe{});e("AppKitButton",re=ie([U("appkit-button")],re));const ae=i`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var se=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let le=class extends r{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return a`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?a`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};le.styles=[o,n,ae],se([W()],le.prototype,"size",void 0),se([W({type:Boolean})],le.prototype,"loading",void 0),le=se([U("wui-connect-button")],le);var ce=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class de extends r{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=h.state.open,this.loading=this.namespace?h.state.loadingNamespaceMap.get(this.namespace):h.state.loading,this.unsubscribe.push(h.subscribe((e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a`
      <wui-connect-button
        size=${L(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${"connect-button"+(this.namespace?`-${this.namespace}`:"")}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?h.close():this.loading||h.open({view:"Connect",namespace:this.namespace})}}ce([W()],de.prototype,"size",void 0),ce([W()],de.prototype,"label",void 0),ce([W()],de.prototype,"loadingLabel",void 0),ce([W()],de.prototype,"namespace",void 0),ce([B()],de.prototype,"open",void 0),ce([B()],de.prototype,"loading",void 0);let ue=e("W3mConnectButton",class extends de{});e("W3mConnectButton",ue=ce([U("w3m-connect-button")],ue));let pe=e("AppKitConnectButton",class extends de{});e("AppKitConnectButton",pe=ce([U("appkit-connect-button")],pe));const he=i`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var we=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ge=class extends r{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return a`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?a`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?a`<wui-image src=${this.imageSrc}></wui-image>`:a`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ge.styles=[o,n,he],we([W()],ge.prototype,"imageSrc",void 0),we([W({type:Boolean})],ge.prototype,"isUnsupportedChain",void 0),we([W({type:Boolean})],ge.prototype,"disabled",void 0),ge=we([U("wui-network-button")],ge);const be=i`
  :host {
    display: block;
    width: max-content;
  }
`;var fe=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class ve extends r{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=s.state.activeCaipNetwork,this.networkImage=l.getNetworkImage(this.network),this.caipAddress=s.state.activeCaipAddress,this.loading=h.state.loading,this.isSupported=!!c.state.allowUnsupportedChain||!s.state.activeChain||s.checkIfSupportedNetwork(s.state.activeChain),this.unsubscribe.push(d.subscribeNetworkImages((()=>{this.networkImage=l.getNetworkImage(this.network)})),s.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),s.subscribeKey("activeCaipNetwork",(e=>{var t;this.network=e,this.networkImage=l.getNetworkImage(e),this.isSupported=null==e||!e.chainNamespace||s.checkIfSupportedNetwork(e.chainNamespace),l.fetchNetworkImage(null==e||null===(t=e.assets)||void 0===t?void 0:t.imageId)})),h.subscribeKey("loading",(e=>this.loading=e)))}firstUpdated(){var e;l.fetchNetworkImage(null===(e=this.network)||void 0===e||null===(e=e.assets)||void 0===e?void 0:e.imageId)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=!this.network||s.checkIfSupportedNetwork(this.network.chainNamespace);return a`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!c.state.allowUnsupportedChain&&!e}
        imageSrc=${L(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||c.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(w.sendEvent({type:"track",event:"CLICK_NETWORKS"}),h.open({view:"Networks"}))}}ve.styles=be,fe([W({type:Boolean})],ve.prototype,"disabled",void 0),fe([W({type:String})],ve.prototype,"label",void 0),fe([B()],ve.prototype,"network",void 0),fe([B()],ve.prototype,"networkImage",void 0),fe([B()],ve.prototype,"caipAddress",void 0),fe([B()],ve.prototype,"loading",void 0),fe([B()],ve.prototype,"isSupported",void 0);let me=e("W3mNetworkButton",class extends ve{});e("W3mNetworkButton",me=fe([U("w3m-network-button")],me));let xe=e("AppKitNetworkButton",class extends ve{});e("AppKitNetworkButton",xe=fe([U("appkit-network-button")],xe));const ye=i`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var ke=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ce=class extends r{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return a`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Ce.styles=[o,n,ye],ke([W()],Ce.prototype,"label",void 0),ke([W()],Ce.prototype,"description",void 0),ke([W()],Ce.prototype,"icon",void 0),Ce=ke([U("wui-notice-card")],Ce);var $e=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Se=class extends r{constructor(){super(),this.unsubscribe=[],this.socialProvider=g.getConnectedSocialProvider(),this.socialUsername=g.getConnectedSocialUsername(),this.namespace=s.state.activeChain,this.unsubscribe.push(s.subscribeKey("activeChain",(e=>{this.namespace=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e,t;const i=b.getConnectorId(this.namespace),o=b.getAuthConnector();if(!o||i!==f.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const n=null!==(e=o.provider.getEmail())&&void 0!==e?e:"";return n||this.socialUsername?a`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${null!==(t=this.socialProvider)&&void 0!==t?t:"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(n,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(n)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||v.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};$e([B()],Se.prototype,"namespace",void 0),Se=$e([U("w3m-account-auth-button")],Se);var Te=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ie=e("W3mAccountSettingsView",class extends r{constructor(){super(),this.usubscribe=[],this.networkImages=d.state.networkImages,this.address=u.state.address,this.profileImage=u.state.profileImage,this.profileName=u.state.profileName,this.network=s.state.activeCaipNetwork,this.preferredAccountTypes=u.state.preferredAccountTypes,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(u.subscribe((e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountTypes=e.preferredAccountTypes)})),u.subscribeKey("preferredAccountTypes",(e=>this.preferredAccountTypes=e)),s.subscribeKey("activeCaipNetwork",(e=>{null!=e&&e.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){var e,t,i,o;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const n=this.networkImages[null!==(e=null===(t=this.network)||void 0===t||null===(t=t.assets)||void 0===t?void 0:t.imageId)&&void 0!==e?e:""];return a`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${L(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${_.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${n?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${L(n)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${null!==(i=null===(o=this.network)||void 0===o?void 0:o.name)&&void 0!==i?i:"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){var e;const t=null===(e=this.network)||void 0===e?void 0:e.chainNamespace,i=b.getConnectorId(t),o=b.getAuthConnector();return s.checkIfNamesSupported()&&o&&i===f.CONNECTOR_ID.AUTH&&!this.profileName?a`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){var e;const t=null===(e=this.network)||void 0===e?void 0:e.chainNamespace,i=b.getConnectorId(t),o=b.getAuthConnector(),{origin:n}=location;return!o||i!==f.CONNECTOR_ID.AUTH||n.includes(m.SECURE_SITE)?null:a`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=s.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=null==e?void 0:e.find((({id:e})=>{var t;return e===(null===(t=this.network)||void 0===t?void 0:t.id)}));return t||!i}onCopyAddress(){try{this.address&&(p.copyToClopboard(this.address),x.showSuccess("Address copied"))}catch{x.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){var e;const t=null===(e=this.network)||void 0===e?void 0:e.chainNamespace,i=s.checkIfSmartAccountEnabled(),o=b.getConnectorId(t);return b.getAuthConnector()&&o===f.CONNECTOR_ID.AUTH&&i?(this.switched||(this.text=(null===(n=this.preferredAccountTypes)||void 0===n?void 0:n[t])===y.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),a`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null;var n}onChooseName(){v.push("ChooseAccountName")}async changePreferredAccountType(){var e,t;const i=null===(e=this.network)||void 0===e?void 0:e.chainNamespace,o=s.checkIfSmartAccountEnabled(),n=(null===(t=this.preferredAccountTypes)||void 0===t?void 0:t[i])!==y.ACCOUNT_TYPES.SMART_ACCOUNT&&o?y.ACCOUNT_TYPES.SMART_ACCOUNT:y.ACCOUNT_TYPES.EOA;b.getAuthConnector()&&(this.loading=!0,await k.setPreferredAccountType(n,i),this.text=n===y.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,C.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&v.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await k.disconnect(),h.close()}catch{w.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),x.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){w.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),v.push("UpgradeEmailWallet")}});Te([B()],Ie.prototype,"address",void 0),Te([B()],Ie.prototype,"profileImage",void 0),Te([B()],Ie.prototype,"profileName",void 0),Te([B()],Ie.prototype,"network",void 0),Te([B()],Ie.prototype,"preferredAccountTypes",void 0),Te([B()],Ie.prototype,"disconnecting",void 0),Te([B()],Ie.prototype,"loading",void 0),Te([B()],Ie.prototype,"switched",void 0),Te([B()],Ie.prototype,"text",void 0),e("W3mAccountSettingsView",Ie=Te([U("w3m-account-settings-view")],Ie));const Re=i`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Ae=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Oe=class extends r{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){const e=s.state.activeChain,t=b.getConnectorId(e)===f.CONNECTOR_ID.AUTH;return a`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${t?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${_.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){var t,i;e.target instanceof HTMLElement&&"copy-address"===e.target.id?null===(i=this.onCopyClick)||void 0===i||i.call(this,e):null===(t=this.onProfileClick)||void 0===t||t.call(this,e)}getIconTemplate(e){return a`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};Oe.styles=[o,n,Re],Ae([W()],Oe.prototype,"avatarSrc",void 0),Ae([W()],Oe.prototype,"profileName",void 0),Ae([W()],Oe.prototype,"address",void 0),Ae([W()],Oe.prototype,"icon",void 0),Ae([W()],Oe.prototype,"onProfileClick",void 0),Ae([W()],Oe.prototype,"onCopyClick",void 0),Oe=Ae([U("wui-profile-button-v2")],Oe);const Ee=i`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Ne=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let je=class extends r{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{var i;const o=t===this.activeTab;return a`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${o}
          data-testid="tab-${null===(i=e.label)||void 0===i?void 0:i.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}iconTemplate(e){return e.icon?a`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const i=this.buttons[this.activeTab],o=this.buttons[e],n=null==i?void 0:i.querySelector("wui-text"),r=null==o?void 0:o.querySelector("wui-text"),a=null==o?void 0:o.getBoundingClientRect(),s=null==r?void 0:r.getBoundingClientRect();i&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&s&&r&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,o.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),r.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};je.styles=[o,n,Ee],Ne([W({type:Array})],je.prototype,"tabs",void 0),Ne([W()],je.prototype,"onTabChange",void 0),Ne([W({type:Array})],je.prototype,"buttons",void 0),Ne([W({type:Boolean})],je.prototype,"disabled",void 0),Ne([W()],je.prototype,"localTabWidth",void 0),Ne([B()],je.prototype,"activeTab",void 0),Ne([B()],je.prototype,"isDense",void 0),je=Ne([U("wui-tabs")],je);const Pe=i`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var De=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let We=class extends r{constructor(){var e;super(),this.unsubscribe=[],this.caipAddress=u.state.caipAddress,this.address=p.getPlainAddress(u.state.caipAddress),this.allAccounts=u.state.allAccounts,this.profileImage=u.state.profileImage,this.profileName=u.state.profileName,this.disconnecting=!1,this.balance=u.state.balance,this.balanceSymbol=u.state.balanceSymbol,this.features=c.state.features,this.remoteFeatures=c.state.remoteFeatures,this.namespace=s.state.activeChain,this.chainId=null===(e=s.state.activeCaipNetwork)||void 0===e?void 0:e.id,this.unsubscribe.push(u.subscribeKey("caipAddress",(e=>{this.address=p.getPlainAddress(e),this.caipAddress=e})),u.subscribeKey("balance",(e=>this.balance=e)),u.subscribeKey("balanceSymbol",(e=>this.balanceSymbol=e)),u.subscribeKey("profileName",(e=>this.profileName=e)),u.subscribeKey("profileImage",(e=>this.profileImage=e)),c.subscribeKey("features",(e=>this.features=e)),c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)),u.subscribeKey("allAccounts",(e=>{this.allAccounts=e})),c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)),s.subscribeKey("activeChain",(e=>this.namespace=e)),s.subscribeKey("activeCaipNetwork",(e=>{if(e){var t;const[i,o]=(null==e||null===(t=e.caipNetworkId)||void 0===t?void 0:t.split(":"))||[];i&&o&&(this.namespace=i,this.chainId=o)}})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.caipAddress)return null;const e=s.state.activeChain!==f.CHAIN.SOLANA&&this.allAccounts.length>1;return a`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${e?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${p.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){var e;if(!this.namespace)return null;const t=null===(e=this.remoteFeatures)||void 0===e?void 0:e.onramp,i=m.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return t&&i?a`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){var e;return((null===(e=this.features)||void 0===e?void 0:e.walletFeaturesOrder)||m.DEFAULT_FEATURES.walletFeaturesOrder).map((e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}}))}activityTemplate(){var e;return this.namespace&&(null===(e=this.remoteFeatures)||void 0===e?void 0:e.activity)&&m.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?a` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){var e;const t=null===(e=this.remoteFeatures)||void 0===e?void 0:e.swaps,i=s.state.activeChain===f.CHAIN.EVM;return t&&i?a`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){var e;const t=null===(e=this.features)||void 0===e?void 0:e.send,i=s.state.activeChain,o=m.SEND_SUPPORTED_NAMESPACES.includes(i);return t&&o?a`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=s.state.activeChain,t=b.getConnectorId(e),i=b.getAuthConnector(),{origin:o}=location;return!i||t!==f.CONNECTOR_ID.AUTH||o.includes(m.SECURE_SITE)?null:a`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){v.push("SwitchAddress")}handleClickPay(){v.push("OnRampProviders")}handleClickSwap(){v.push("Swap")}handleClickSend(){v.push("WalletSend")}explorerBtnTemplate(){return u.state.addressExplorerUrl?a`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return a`
      <wui-avatar
        alt=${L(this.caipAddress)}
        address=${L(p.getPlainAddress(this.caipAddress))}
        imageSrc=${L(null===this.profileImage?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?_.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):_.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.allAccounts.find((e=>e.address===this.address)),t=u.state.addressLabels.get(this.address);return"bip122"===this.namespace?this.btcAccountsTemplate():a`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${L(this.address)}
        icon="${(null==e?void 0:e.type)===y.ACCOUNT_TYPES.SMART_ACCOUNT&&s.state.activeChain===f.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${L(this.profileImage?this.profileImage:void 0)}
        profileName=${L(t||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return a`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${L(this.profileImage?this.profileImage:void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${e=>{var t;return u.setCaipAddress(`bip122:${this.chainId}:${(null===(t=this.allAccounts[e])||void 0===t?void 0:t.address)||""}`,this.namespace)}}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${_.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{this.address&&(p.copyToClopboard(this.address),x.showSuccess("Address copied"))}catch{x.showError("Failed to copy")}}onTransactions(){var e;const t=s.state.activeChain;w.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:(null===(e=u.state.preferredAccountTypes)||void 0===e?void 0:e[t])===y.ACCOUNT_TYPES.SMART_ACCOUNT}}),v.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await k.disconnect(),h.close()}catch{w.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),x.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=u.state.addressExplorerUrl;e&&p.openHref(e,"_blank")}onGoToUpgradeView(){w.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),v.push("UpgradeEmailWallet")}};We.styles=Pe,De([B()],We.prototype,"caipAddress",void 0),De([B()],We.prototype,"address",void 0),De([B()],We.prototype,"allAccounts",void 0),De([B()],We.prototype,"profileImage",void 0),De([B()],We.prototype,"profileName",void 0),De([B()],We.prototype,"disconnecting",void 0),De([B()],We.prototype,"balance",void 0),De([B()],We.prototype,"balanceSymbol",void 0),De([B()],We.prototype,"features",void 0),De([B()],We.prototype,"remoteFeatures",void 0),De([B()],We.prototype,"namespace",void 0),De([B()],We.prototype,"chainId",void 0),We=De([U("w3m-account-default-widget")],We);const Ue=i`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var Le=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let _e=class extends r{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return a`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};_e.styles=[o,Ue],Le([W()],_e.prototype,"dollars",void 0),Le([W()],_e.prototype,"pennies",void 0),_e=Le([U("wui-balance")],_e);const Be=i`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var ze=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ve=class extends r{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return a`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${_.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?a`<wui-image src=${this.networkSrc}></wui-image>`:a`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Ve.styles=[o,n,Be],ze([W()],Ve.prototype,"networkSrc",void 0),ze([W()],Ve.prototype,"avatarSrc",void 0),ze([W()],Ve.prototype,"profileName",void 0),ze([W()],Ve.prototype,"address",void 0),ze([W()],Ve.prototype,"icon",void 0),Ve=ze([U("wui-profile-button")],Ve);const Fe=i`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ke=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Me=class extends r{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,a`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Me.styles=[o,n,Fe],Ke([W()],Me.prototype,"placement",void 0),Ke([W()],Me.prototype,"variant",void 0),Ke([W()],Me.prototype,"message",void 0),Me=Ke([U("wui-tooltip")],Me);const qe={getTabsByNamespace(e){var t;return Boolean(e)&&e===f.CHAIN.EVM?!1===(null===(t=c.state.remoteFeatures)||void 0===t?void 0:t.activity)?$.ACCOUNT_TABS.filter((e=>"Activity"!==e.label)):$.ACCOUNT_TABS:[]}},He=i`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var Ge=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ye=class extends r{render(){return a`<w3m-activity-list page="account"></w3m-activity-list>`}};Ye.styles=He,Ye=Ge([U("w3m-account-activity-widget")],Ye);const Xe=i`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Qe=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Je=class extends r{render(){return a`${this.nftTemplate()}`}nftTemplate(){return a` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){v.push("WalletReceive")}};Je.styles=Xe,Je=Qe([U("w3m-account-nfts-widget")],Je);const Ze=i`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var et=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let tt=class extends r{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return a`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?a` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:a`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};tt.styles=[o,n,Ze],et([W()],tt.prototype,"icon",void 0),et([W()],tt.prototype,"text",void 0),et([W()],tt.prototype,"description",void 0),et([W()],tt.prototype,"tag",void 0),et([W()],tt.prototype,"iconBackgroundColor",void 0),et([W()],tt.prototype,"iconColor",void 0),et([W({type:Boolean})],tt.prototype,"disabled",void 0),tt=et([U("wui-list-description")],tt);const it=i`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var ot=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let nt=class extends r{constructor(){super(),this.unsubscribe=[],this.tokenBalance=u.state.tokenBalance,this.remoteFeatures=c.state.remoteFeatures,this.unsubscribe.push(u.subscribe((e=>{this.tokenBalance=e.tokenBalance})),c.subscribeKey("remoteFeatures",(e=>{this.remoteFeatures=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&(null===(e=this.tokenBalance)||void 0===e?void 0:e.length)>0?a`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:a` <wui-flex flexDirection="column" gap="xs"
      >${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){var e;return null!==(e=this.remoteFeatures)&&void 0!==e&&e.onramp?a`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description>`:a``}tokenItemTemplate(){var e;return null===(e=this.tokenBalance)||void 0===e?void 0:e.map((e=>a`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`))}onReceiveClick(){v.push("WalletReceive")}onBuyClick(){var e;const t=s.state.activeChain;w.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:(null===(e=u.state.preferredAccountTypes)||void 0===e?void 0:e[t])===y.ACCOUNT_TYPES.SMART_ACCOUNT}}),v.push("OnRampProviders")}};nt.styles=it,ot([B()],nt.prototype,"tokenBalance",void 0),ot([B()],nt.prototype,"remoteFeatures",void 0),nt=ot([U("w3m-account-tokens-widget")],nt);const rt=i`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var at=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let st=class extends r{constructor(){super(),this.unsubscribe=[],this.address=u.state.address,this.profileImage=u.state.profileImage,this.profileName=u.state.profileName,this.network=s.state.activeCaipNetwork,this.currentTab=u.state.currentTab,this.tokenBalance=u.state.tokenBalance,this.features=c.state.features,this.remoteFeatures=c.state.remoteFeatures,this.networkImage=l.getNetworkImage(this.network),this.unsubscribe.push(d.subscribeNetworkImages((()=>{this.networkImage=l.getNetworkImage(this.network)})),u.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):h.close()})),s.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=l.getNetworkImage(this.network)})),c.subscribeKey("features",(e=>this.features=e)),c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e))),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearInterval(this.watchTokenBalance)}firstUpdated(){u.fetchTokenBalance()}render(){var e;if(!this.address)throw new Error("w3m-account-view: No account provided");return a`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${L(this.address)}
        networkSrc=${L(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${L(this.profileImage?this.profileImage:void 0)}
        profileName=${L(null!==(e=this.profileName)&&void 0!==e?e:void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()} ${this.tabsTemplate()}
      ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){var e;const t=(null===(e=this.features)||void 0===e?void 0:e.walletFeaturesOrder)||m.DEFAULT_FEATURES.walletFeaturesOrder;return t.every((e=>{var t,i;return"send"===e||"receive"===e?!(null!==(t=this.features)&&void 0!==t&&t[e]):"swaps"!==e&&"onramp"!==e||!(null!==(i=this.remoteFeatures)&&void 0!==i&&i[e])}))?null:a`<wui-flex gap="s">
      ${t.map((e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}}))}
    </wui-flex>`}onrampTemplate(){var e;return(null===(e=this.remoteFeatures)||void 0===e?void 0:e.onramp)?a`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){var e;const t=null===(e=this.remoteFeatures)||void 0===e?void 0:e.swaps,i=s.state.activeChain===f.CHAIN.EVM;return t&&i?a`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}receiveTemplate(){var e;return(null===(e=this.features)||void 0===e?void 0:e.receive)?a`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){var e;const t=null===(e=this.features)||void 0===e?void 0:e.send,i=s.state.activeChain,o=m.SEND_SUPPORTED_NAMESPACES.includes(i);return t&&o?a`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval((()=>u.fetchTokenBalance((e=>this.onTokenBalanceError(e)))),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===f.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return 0===this.currentTab?a`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?a`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?a`<w3m-account-activity-widget></w3m-account-activity-widget>`:a`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&(null===(e=this.tokenBalance)||void 0===e?void 0:e.length)>=0){const e=p.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=p.formatTokenBalance(e);return a`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return a`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=qe.getTabsByNamespace(s.state.activeChain);if(0===e.length)return null;let t="104px";return t=p.isMobile()&&window.innerWidth<430?(window.innerWidth-48)/e.length+"px":2===e.length?"156px":"104px",a`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${t}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){u.setCurrentTab(e)}onProfileButtonClick(){const{allAccounts:e}=u.state;e.length>1?v.push("Profile"):v.push("AccountSettings")}onBuyClick(){v.push("OnRampProviders")}onSwapClick(){var e,t;const i=s.state.activeChain;var o,n;null!==(e=this.network)&&void 0!==e&&e.caipNetworkId&&!m.SWAP_SUPPORTED_NETWORKS.includes(null===(t=this.network)||void 0===t?void 0:t.caipNetworkId)?v.push("UnsupportedChain",{swapUnsupportedChain:!0}):(w.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:(null===(o=this.network)||void 0===o?void 0:o.caipNetworkId)||"",isSmartAccount:(null===(n=u.state.preferredAccountTypes)||void 0===n?void 0:n[i])===y.ACCOUNT_TYPES.SMART_ACCOUNT}}),v.push("Swap"))}onReceiveClick(){v.push("WalletReceive")}onSendClick(){var e,t;const i=s.state.activeChain;w.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:(null===(e=this.network)||void 0===e?void 0:e.caipNetworkId)||"",isSmartAccount:(null===(t=u.state.preferredAccountTypes)||void 0===t?void 0:t[i])===y.ACCOUNT_TYPES.SMART_ACCOUNT}}),v.push("WalletSend")}};st.styles=rt,at([B()],st.prototype,"watchTokenBalance",void 0),at([B()],st.prototype,"address",void 0),at([B()],st.prototype,"profileImage",void 0),at([B()],st.prototype,"profileName",void 0),at([B()],st.prototype,"network",void 0),at([B()],st.prototype,"currentTab",void 0),at([B()],st.prototype,"tokenBalance",void 0),at([B()],st.prototype,"features",void 0),at([B()],st.prototype,"remoteFeatures",void 0),at([B()],st.prototype,"networkImage",void 0),st=at([U("w3m-account-wallet-features-widget")],st);var lt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ct=e("W3mAccountView",class extends r{constructor(){super(),this.unsubscribe=[],this.namespace=s.state.activeChain,this.unsubscribe.push(s.subscribeKey("activeChain",(e=>{this.namespace=e})))}render(){if(!this.namespace)return null;const e=b.getConnectorId(this.namespace),t=b.getAuthConnector();return a`
      ${t&&e===f.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return a`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return a`<w3m-account-default-widget></w3m-account-default-widget>`}});lt([B()],ct.prototype,"namespace",void 0),e("W3mAccountView",ct=lt([U("w3m-account-view")],ct));const dt=i`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var ut=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let pt=class extends r{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.labels=u.state.addressLabels,this.caipNetwork=s.state.activeCaipNetwork,this.socialProvider=g.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){var e;super.connectedCallback(),S.getBalance(this.accountAddress,null===(e=this.caipNetwork)||void 0===e?void 0:e.caipNetworkId).then((e=>{let t=this.balance;e.balances.length>0&&(t=e.balances.reduce(((e,t)=>e+((null==t?void 0:t.value)||0)),0)),this.balance=t,this.fetchingBalance=!1,this.requestUpdate()})).catch((()=>{this.fetchingBalance=!1,this.requestUpdate()}))}render(){var e;const t=this.getLabel(),i=s.state.activeChain,o=b.getConnectorId(i);return this.shouldShowIcon=o===f.CONNECTOR_ID.AUTH,a`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?a`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===y.ACCOUNT_TYPES.EOA?null!==(e=this.socialProvider)&&void 0!==e?e:"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:a`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${_.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${t}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?a`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:a` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){var e;let t=null===(e=this.labels)||void 0===e?void 0:e.get(this.accountAddress);const i=s.state.activeChain,o=b.getConnectorId(i);var n;return t||o!==f.CONNECTOR_ID.AUTH?t||(t="EOA"):t=`${"eoa"===this.accountType?null!==(n=this.socialProvider)&&void 0!==n?n:"Email":"Smart"} Account`,t}};pt.styles=[o,n,dt],ut([W()],pt.prototype,"accountAddress",void 0),ut([W()],pt.prototype,"accountType",void 0),ut([W({type:Boolean})],pt.prototype,"selected",void 0),ut([W({type:Function})],pt.prototype,"onSelect",void 0),pt=ut([U("wui-list-account")],pt);const ht=i`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var wt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let gt=e("W3mProfileView",class extends r{constructor(){super(),this.usubscribe=[],this.address=u.state.address,this.profileImage=u.state.profileImage,this.profileName=u.state.profileName,this.accounts=u.state.allAccounts,this.loading=!1,this.usubscribe.push(u.subscribeKey("address",(e=>{e?this.address=e:h.close()}))),this.usubscribe.push(u.subscribeKey("profileImage",(e=>{this.profileImage=e}))),this.usubscribe.push(u.subscribeKey("profileName",(e=>{this.profileName=e})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");return a`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${L(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?_.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):_.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>v.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return a`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((e=>this.accountTemplate(e)))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){var t;const i=null===(t=s.state.activeCaipNetwork)||void 0===t?void 0:t.chainNamespace;if(this.loading=!0,b.getAuthConnector()){const t=e.type;await k.setPreferredAccountType(t,i)}u.setShouldUpdateToAddress(e.address,i),this.loading=!1}accountTemplate(e){return a`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":a`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.address&&(p.copyToClopboard(this.address),x.showSuccess("Address copied"))}catch{x.showError("Failed to copy")}}});gt.styles=ht,wt([B()],gt.prototype,"address",void 0),wt([B()],gt.prototype,"profileImage",void 0),wt([B()],gt.prototype,"profileName",void 0),wt([B()],gt.prototype,"accounts",void 0),wt([B()],gt.prototype,"loading",void 0),e("W3mProfileView",gt=wt([U("w3m-profile-view")],gt));const bt=i`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var ft=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let vt=class extends r{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return a`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};vt.styles=[o,n,bt],ft([W()],vt.prototype,"imageSrc",void 0),ft([W()],vt.prototype,"text",void 0),ft([W()],vt.prototype,"size",void 0),vt=ft([U("wui-banner-img")],vt);const mt=i`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var xt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let yt=e("W3mSwitchAddressView",class extends r{constructor(){super(),this.metadata=c.state.metadata,this.allAccounts=u.state.allAccounts||[],this.balances={},this.labels=u.state.addressLabels,this.currentAddress=u.state.address||"",this.caipNetwork=s.state.activeCaipNetwork,u.subscribeKey("allAccounts",(e=>{this.allAccounts=e}))}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach((e=>{var t;S.getBalance(e.address,null===(t=this.caipNetwork)||void 0===t?void 0:t.caipNetworkId).then((t=>{let i=this.balances[e.address]||0;t.balances.length>0&&(i=t.balances.reduce(((e,t)=>e+((null==t?void 0:t.value)||0)),0)),this.balances[e.address]=i,this.requestUpdate()}))}))}getAddressIcon(e){return"smartAccount"===e?"lightbulb":"mail"}render(){var e,t;return a`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${L(null===(e=this.metadata)||void 0===e?void 0:e.icons[0])}
          text=${L(null===(t=this.metadata)||void 0===t?void 0:t.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(((e,t)=>this.getAddressTemplate(e,t)))}
      </wui-flex>
    `}getAddressTemplate(e,t){var i,o,n,r;const l=null===(i=this.labels)||void 0===i?void 0:i.get(e.address),c=s.state.activeChain,d=b.getConnectorId(c)===f.CONNECTOR_ID.AUTH;return a`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${d?a`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:a`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${l||_.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${"number"==typeof this.balances[e.address]?`$${null===(o=this.balances[e.address])||void 0===o?void 0:o.toFixed(2)}`:a`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${(null===(n=e.address)||void 0===n?void 0:n.toLowerCase())===(null===(r=this.currentAddress)||void 0===r?void 0:r.toLowerCase())?"":a`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){const t=s.state.activeCaipNetwork,i=null==t?void 0:t.chainNamespace,o=`${i}:${null==t?void 0:t.id}:${e}`;u.setCaipAddress(o,i),h.close()}});yt.styles=mt,xt([B()],yt.prototype,"allAccounts",void 0),xt([B()],yt.prototype,"balances",void 0),e("W3mSwitchAddressView",yt=xt([U("w3m-switch-address-view")],yt));const kt=i`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var Ct=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $t=class extends r{constructor(){super(...arguments),this.inputElementRef=K(),this.checked=void 0}render(){return a`
      <label>
        <input
          ${M(this.inputElementRef)}
          type="checkbox"
          ?checked=${L(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:null===(e=this.inputElementRef.value)||void 0===e?void 0:e.checked,bubbles:!0,composed:!0}))}};$t.styles=[o,n,T,kt],Ct([W({type:Boolean})],$t.prototype,"checked",void 0),$t=Ct([U("wui-switch")],$t);const St=i`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Tt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let It=class extends r{constructor(){super(...arguments),this.checked=void 0}render(){return a`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${L(this.checked)}></wui-switch>
      </button>
    `}};It.styles=[o,n,St],Tt([W({type:Boolean})],It.prototype,"checked",void 0),It=Tt([U("wui-certified-switch")],It);const Rt=i`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var At=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ot=class extends r{constructor(){super(...arguments),this.icon="copy"}render(){return a`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Ot.styles=[o,n,Rt],At([W()],Ot.prototype,"icon",void 0),Ot=At([U("wui-input-element")],Ot);const Et=i`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Nt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let jt=class extends r{constructor(){super(...arguments),this.inputComponentRef=K()}render(){return a`
      <wui-input-text
        ${M(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=null==e?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};jt.styles=[o,Et],jt=Nt([U("wui-search-bar")],jt);const Pt=i`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Dt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Wt=class extends r{constructor(){super(...arguments),this.type="wallet"}render(){return a`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?a` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${V}`:a`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Wt.styles=[o,n,Pt],Dt([W()],Wt.prototype,"type",void 0),Wt=Dt([U("wui-card-select-loader")],Wt);const Ut=i`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Lt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let _t=class extends r{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&_.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&_.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&_.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&_.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&_.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&_.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&_.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&_.getSpacingStyles(this.margin,3)};\n    `,a`<slot></slot>`}};_t.styles=[o,Ut],Lt([W()],_t.prototype,"gridTemplateRows",void 0),Lt([W()],_t.prototype,"gridTemplateColumns",void 0),Lt([W()],_t.prototype,"justifyItems",void 0),Lt([W()],_t.prototype,"alignItems",void 0),Lt([W()],_t.prototype,"justifyContent",void 0),Lt([W()],_t.prototype,"alignContent",void 0),Lt([W()],_t.prototype,"columnGap",void 0),Lt([W()],_t.prototype,"rowGap",void 0),Lt([W()],_t.prototype,"gap",void 0),Lt([W()],_t.prototype,"padding",void 0),Lt([W()],_t.prototype,"margin",void 0),_t=Lt([U("wui-grid")],_t);const Bt=i`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var zt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Vt=class extends r{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e,t;const i="certified"===(null===(e=this.wallet)||void 0===e?void 0:e.badge_type);return a`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${L(i?"certified":void 0)}
            >${null===(t=this.wallet)||void 0===t?void 0:t.name}</wui-text
          >
          ${i?a`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,t;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():a`
      <wui-wallet-image
        size="md"
        imageSrc=${L(this.imageSrc)}
        name=${null===(e=this.wallet)||void 0===e?void 0:e.name}
        .installed=${null===(t=this.wallet)||void 0===t?void 0:t.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return a`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=l.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await l.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Vt.styles=Bt,zt([B()],Vt.prototype,"visible",void 0),zt([B()],Vt.prototype,"imageSrc",void 0),zt([B()],Vt.prototype,"imageLoading",void 0),zt([W()],Vt.prototype,"wallet",void 0),Vt=zt([U("w3m-all-wallets-list-item")],Vt);const Ft=i`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Kt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Mt="local-paginator";let qt=class extends r{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!I.state.wallets.length,this.wallets=I.state.wallets,this.recommended=I.state.recommended,this.featured=I.state.featured,this.filteredWallets=I.state.filteredWallets,this.unsubscribe.push(I.subscribeKey("wallets",(e=>this.wallets=e)),I.subscribeKey("recommended",(e=>this.recommended=e)),I.subscribeKey("featured",(e=>this.featured=e)),I.subscribeKey("filteredWallets",(e=>this.filteredWallets=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach((e=>e())),null===(e=this.paginationObserver)||void 0===e||e.disconnect()}render(){return a`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;this.loading=!0;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-grid");t&&(await I.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>a`
        <wui-card-select-loader type="wallet" id=${L(t)}></wui-card-select-loader>
      `))}walletsTemplate(){var e;const t=(null===(e=this.filteredWallets)||void 0===e?void 0:e.length)>0?p.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):p.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return R.markWalletsAsInstalled(t).map((e=>a`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:o}=I.state,n=window.innerWidth<352?3:4,r=e.length+t.length;let a=Math.ceil(r/n)*n-r+n;return a-=e.length?i.length%n:0,0===o&&i.length>0?null:0===o||[...i,...e,...t].length<o?this.shimmerTemplate(a,Mt):null}createPaginationObserver(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`#${Mt}`);t&&(this.paginationObserver=new IntersectionObserver((([e])=>{if(null!=e&&e.isIntersecting&&!this.loading){const{page:e,count:t,wallets:i}=I.state;i.length<t&&I.fetchWalletsByPage({page:e+1})}})),this.paginationObserver.observe(t))}onConnectWallet(e){b.selectWalletConnector(e)}};qt.styles=Ft,Kt([B()],qt.prototype,"loading",void 0),Kt([B()],qt.prototype,"wallets",void 0),Kt([B()],qt.prototype,"recommended",void 0),Kt([B()],qt.prototype,"featured",void 0),Kt([B()],qt.prototype,"filteredWallets",void 0),qt=Kt([U("w3m-all-wallets-list")],qt);const Ht=i`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Gt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Yt=class extends r{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?a`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await I.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=I.state,t=R.markWalletsAsInstalled(e);return e.length?a`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map((e=>a`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:a`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){b.selectWalletConnector(e)}};Yt.styles=Ht,Gt([B()],Yt.prototype,"loading",void 0),Gt([W()],Yt.prototype,"query",void 0),Gt([W()],Yt.prototype,"badge",void 0),Yt=Gt([U("w3m-all-wallets-search")],Yt);var Xt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Qt=e("W3mAllWalletsView",class extends r{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=p.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return a`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?a`<w3m-all-wallets-search
            query=${this.search}
            badge=${L(this.badge)}
          ></w3m-all-wallets-search>`:a`<w3m-all-wallets-list badge=${L(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){"certified"!==this.badge?(this.badge="certified",x.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return p.isMobile()?a`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){v.push("ConnectingWalletConnect")}});Xt([B()],Qt.prototype,"search",void 0),Xt([B()],Qt.prototype,"badge",void 0),e("W3mAllWalletsView",Qt=Xt([U("w3m-all-wallets-view")],Qt));const Jt=i`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Zt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ei=class extends r{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return a`
      <button ?disabled=${this.disabled} tabindex=${L(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};ei.styles=[o,n,Jt],Zt([W()],ei.prototype,"text",void 0),Zt([W({type:Boolean})],ei.prototype,"disabled",void 0),Zt([W()],ei.prototype,"tabIdx",void 0),ei=Zt([U("wui-list-button")],ei);const ti=i`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var ii=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let oi=class extends r{constructor(){super(...arguments),this.unsubscribe=[],this.formRef=K(),this.email="",this.loading=!1,this.error=""}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){var e;null===(e=this.formRef.value)||void 0===e||e.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){return a`
      <form ${M(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${L(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?a`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?a`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?a`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!f.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===s.state.activeChain))){const e=s.getFirstCaipNetworkSupportsAuthConnector();if(e)return void v.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=b.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:i}=await t.provider.connectEmail({email:this.email});w.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i?(w.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),v.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===i?v.push("EmailVerifyDevice",{email:this.email}):"CONNECT"===i&&(await k.connectExternal(t,s.state.activeChain),v.replace("Account"))}catch(t){const e=p.parseError(t);null!=e&&e.includes("Invalid email")?this.error="Invalid email. Try again.":x.showError(t)}finally{this.loading=!1}}onFocusEvent(){w.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};oi.styles=ti,ii([W()],oi.prototype,"tabIdx",void 0),ii([B()],oi.prototype,"email",void 0),ii([B()],oi.prototype,"loading",void 0),ii([B()],oi.prototype,"error",void 0),oi=ii([U("w3m-email-login-widget")],oi);const ni=i`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ri=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ai=class extends r{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return a`
      <button ?disabled=${this.disabled} tabindex=${L(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ai.styles=[o,n,ni],ri([W()],ai.prototype,"logo",void 0),ri([W({type:Boolean})],ai.prototype,"disabled",void 0),ri([W()],ai.prototype,"tabIdx",void 0),ai=ri([U("wui-logo-select")],ai);const si=i`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var li=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ci=class extends r{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=b.state.connectors,this.remoteFeatures=c.state.remoteFeatures,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.isPwaLoading=!1,this.unsubscribe.push(b.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){var e;const t="explore"===this.walletGuide;let i=null===(e=this.remoteFeatures)||void 0===e?void 0:e.socials;return!i&&t?(i=m.DEFAULT_SOCIALS,this.renderTopViewContent(i)):i?this.renderTopViewContent(i):null}renderTopViewContent(e){return 2===e.length?a` <wui-flex gap="xs">
        ${e.slice(0,2).map((e=>a`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${L(this.tabIdx)}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`))}
      </wui-flex>`:a` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      logo=${L(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${L(this.tabIdx)}
      ?disabled=${this.isPwaLoading}
    ></wui-list-social>`}bottomViewTemplate(){var e;let t=null===(e=this.remoteFeatures)||void 0===e?void 0:e.socials;const i="explore"===this.walletGuide;return(!this.authConnector||!t||0===t.length)&&i&&(t=m.DEFAULT_SOCIALS),t?t.length<=2?null:t&&t.length>6?a`<wui-flex gap="xs">
        ${t.slice(1,5).map((e=>a`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${L(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`))}
        <wui-logo-select
          logo="more"
          tabIdx=${L(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:t?a`<wui-flex gap="xs">
      ${t.slice(1,t.length).map((e=>a`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${L(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading}
          ></wui-logo-select>`))}
    </wui-flex>`:null:null}onMoreSocialsClick(){v.push("ConnectSocials")}async onSocialClick(e){if(!f.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===s.state.activeChain))){const e=s.getFirstCaipNetworkSupportsAuthConnector();if(e)return void v.push("SwitchNetwork",{network:e})}e&&await H(e)}async handlePwaFrameLoad(){if(p.isPWA()){this.isPwaLoading=!0;try{var e;(null===(e=this.authConnector)||void 0===e?void 0:e.provider)instanceof A&&await this.authConnector.provider.init()}catch(t){O.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:t.message},"error")}finally{this.isPwaLoading=!1}}}};ci.styles=si,li([W()],ci.prototype,"walletGuide",void 0),li([W()],ci.prototype,"tabIdx",void 0),li([B()],ci.prototype,"connectors",void 0),li([B()],ci.prototype,"remoteFeatures",void 0),li([B()],ci.prototype,"authConnector",void 0),li([B()],ci.prototype,"isPwaLoading",void 0),ci=li([U("w3m-social-login-widget")],ci);const di=i`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var ui=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let pi=class extends r{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return"explore"===this.walletGuide?a`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:a`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${L(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){v.push("Create")}};pi.styles=di,ui([W()],pi.prototype,"tabIdx",void 0),ui([W()],pi.prototype,"walletGuide",void 0),pi=ui([U("w3m-wallet-guide")],pi);const hi=i`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var wi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let gi=class extends r{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return a`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>a`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${L(t)}
            ></wui-wallet-image>
          `))}
      ${e?[...Array(4-this.walletImages.length)].map((()=>a` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};gi.styles=[o,hi],wi([W({type:Array})],gi.prototype,"walletImages",void 0),gi=wi([U("wui-all-wallets-image")],gi);const bi=i`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var fi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let vi=class extends r{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return a`
      <button ?disabled=${this.disabled} tabindex=${L(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?a` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?a` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?a`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:a`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?a`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?a`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?a`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};vi.styles=[o,n,bi],fi([W({type:Array})],vi.prototype,"walletImages",void 0),fi([W()],vi.prototype,"imageSrc",void 0),fi([W()],vi.prototype,"name",void 0),fi([W()],vi.prototype,"tagLabel",void 0),fi([W()],vi.prototype,"tagVariant",void 0),fi([W()],vi.prototype,"icon",void 0),fi([W()],vi.prototype,"walletIcon",void 0),fi([W()],vi.prototype,"tabIdx",void 0),fi([W({type:Boolean})],vi.prototype,"installed",void 0),fi([W({type:Boolean})],vi.prototype,"disabled",void 0),fi([W({type:Boolean})],vi.prototype,"showAllWallets",void 0),fi([W({type:Boolean})],vi.prototype,"loading",void 0),fi([W({type:String})],vi.prototype,"loadingSpinnerColor",void 0),vi=fi([U("wui-list-wallet")],vi);var mi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xi=class extends r{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.count=I.state.count,this.filteredCount=I.state.filteredWallets.length,this.isFetchingRecommendedWallets=I.state.isFetchingRecommendedWallets,this.unsubscribe.push(b.subscribeKey("connectors",(e=>this.connectors=e)),I.subscribeKey("count",(e=>this.count=e)),I.subscribeKey("filteredWallets",(e=>this.filteredCount=e.length)),I.subscribeKey("isFetchingRecommendedWallets",(e=>this.isFetchingRecommendedWallets=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"walletConnect"===e.id)),{allWallets:t}=c.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!p.isMobile())return null;const i=I.state.featured.length,o=this.count+i,n=o<10?o:10*Math.floor(o/10),r=this.filteredCount>0?this.filteredCount:n;let s=`${r}`;return this.filteredCount>0?s=`${this.filteredCount}`:r<o&&(s=`${r}+`),a`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${L(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){w.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),v.push("AllWallets")}};mi([W()],xi.prototype,"tabIdx",void 0),mi([B()],xi.prototype,"connectors",void 0),mi([B()],xi.prototype,"count",void 0),mi([B()],xi.prototype,"filteredCount",void 0),mi([B()],xi.prototype,"isFetchingRecommendedWallets",void 0),xi=mi([U("w3m-all-wallets-widget")],xi);var yi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ki=class extends r{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"ANNOUNCED"===e.type));return null!=e&&e.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(E.showConnector).map((e=>{var t;return a`
              <wui-list-wallet
                imageSrc=${L(l.getConnectorImage(e))}
                name=${null!==(t=e.name)&&void 0!==t?t:"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${L(this.tabIdx)}
              >
              </wui-list-wallet>
            `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?p.isMobile()?v.push("AllWallets"):v.push("ConnectingWalletConnect"):v.push("ConnectingExternal",{connector:e})}};yi([W()],ki.prototype,"tabIdx",void 0),yi([B()],ki.prototype,"connectors",void 0),ki=yi([U("w3m-connect-announced-widget")],ki);var Ci=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $i=class extends r{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",(e=>this.connectors=e))),p.isTelegram()&&p.isIos()&&(this.loading=!k.state.wcUri,this.unsubscribe.push(k.subscribeKey("wcUri",(e=>this.loading=!e))))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{customWallets:e}=c.state;if(null==e||!e.length)return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return a`<wui-flex flexDirection="column" gap="xs">
      ${t.map((e=>{var t;return a`
          <wui-list-wallet
            imageSrc=${L(l.getWalletImage(e))}
            name=${null!==(t=e.name)&&void 0!==t?t:"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${L(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `}))}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=g.getRecentWallets(),i=this.connectors.map((e=>{var t;return null===(t=e.info)||void 0===t?void 0:t.rdns})).filter(Boolean),o=t.map((e=>e.rdns)).filter(Boolean),n=i.concat(o);if(n.includes("io.metamask.mobile")&&p.isMobile()){const e=n.indexOf("io.metamask.mobile");n[e]="io.metamask"}return e.filter((e=>!n.includes(String(null==e?void 0:e.rdns))))}onConnectWallet(e){this.loading||v.push("ConnectingWalletConnect",{wallet:e})}};Ci([W()],$i.prototype,"tabIdx",void 0),Ci([B()],$i.prototype,"connectors",void 0),Ci([B()],$i.prototype,"loading",void 0),$i=Ci([U("w3m-connect-custom-widget")],$i);var Si=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ti=class extends r{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"EXTERNAL"===e.type)).filter(E.showConnector).filter((e=>e.id!==f.CONNECTOR_ID.COINBASE_SDK));return null!=e&&e.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>{var t;return a`
            <wui-list-wallet
              imageSrc=${L(l.getConnectorImage(e))}
              .installed=${!0}
              name=${null!==(t=e.name)&&void 0!==t?t:"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${L(this.tabIdx)}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){v.push("ConnectingExternal",{connector:e})}};Si([W()],Ti.prototype,"tabIdx",void 0),Si([B()],Ti.prototype,"connectors",void 0),Ti=Si([U("w3m-connect-external-widget")],Ti);var Ii=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ri=class extends r{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((e=>{var t;return a`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${L(l.getWalletImage(e))}
              name=${null!==(t=e.name)&&void 0!==t?t:"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${L(this.tabIdx)}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){b.selectWalletConnector(e)}};Ii([W()],Ri.prototype,"tabIdx",void 0),Ii([W()],Ri.prototype,"wallets",void 0),Ri=Ii([U("w3m-connect-featured-widget")],Ri);var Ai=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Oi=class extends r{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const e=this.connectors.filter(E.showConnector);return 0===e.length?(this.style.cssText="display: none",null):a`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>{var t;return a`
            <wui-list-wallet
              imageSrc=${L(l.getConnectorImage(e))}
              .installed=${!0}
              name=${null!==(t=e.name)&&void 0!==t?t:"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${L(this.tabIdx)}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `}onConnector(e){b.setActiveConnector(e),v.push("ConnectingExternal",{connector:e})}};Ai([W()],Oi.prototype,"tabIdx",void 0),Ai([W()],Oi.prototype,"connectors",void 0),Oi=Ai([U("w3m-connect-injected-widget")],Oi);var Ei=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ni=class extends r{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name));return null!=e&&e.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>{var t;return a`
            <wui-list-wallet
              imageSrc=${L(l.getConnectorImage(e))}
              .installed=${!0}
              name=${null!==(t=e.name)&&void 0!==t?t:"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${L(this.tabIdx)}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){b.setActiveConnector(e),v.push("ConnectingMultiChain")}};Ei([W()],Ni.prototype,"tabIdx",void 0),Ei([B()],Ni.prototype,"connectors",void 0),Ni=Ei([U("w3m-connect-multi-chain-widget")],Ni);var ji=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Pi=class extends r{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",(e=>this.connectors=e))),p.isTelegram()&&p.isIos()&&(this.loading=!k.state.wcUri,this.unsubscribe.push(k.subscribeKey("wcUri",(e=>this.loading=!e))))}render(){const e=g.getRecentWallets().filter((e=>!R.isExcluded(e))).filter((e=>!this.hasWalletConnector(e))).filter((e=>this.isWalletCompatibleWithCurrentChain(e)));return e.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>{var t;return a`
            <wui-list-wallet
              imageSrc=${L(l.getWalletImage(e))}
              name=${null!==(t=e.name)&&void 0!==t?t:"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${L(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){this.loading||b.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some((t=>t.id===e.id||t.name===e.name))}isWalletCompatibleWithCurrentChain(e){const t=s.state.activeChain;return!t||!e.chains||e.chains.some((e=>{const i=e.split(":")[0];return t===i}))}};ji([W()],Pi.prototype,"tabIdx",void 0),ji([B()],Pi.prototype,"connectors",void 0),ji([B()],Pi.prototype,"loading",void 0),Pi=ji([U("w3m-connect-recent-widget")],Pi);var Di=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Wi=class extends r{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,p.isTelegram()&&p.isIos()&&(this.loading=!k.state.wcUri,this.unsubscribe.push(k.subscribeKey("wcUri",(e=>this.loading=!e))))}render(){const{connectors:e}=b.state,{customWallets:t,featuredWalletIds:i}=c.state,o=g.getRecentWallets(),n=e.find((e=>"walletConnect"===e.id)),r=e.filter((e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type)).filter((e=>"Browser Wallet"!==e.name));if(!n)return null;if(i||t||!this.wallets.length)return this.style.cssText="display: none",null;const s=r.length+o.length,d=Math.max(0,2-s),u=R.filterOutDuplicateWallets(this.wallets).slice(0,d);return u.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${u.map((e=>{var t;return a`
            <wui-list-wallet
              imageSrc=${L(l.getWalletImage(e))}
              name=${null!==(t=null==e?void 0:e.name)&&void 0!==t?t:"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${L(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `}))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){if(this.loading)return;const t=b.getConnector(e.id,e.rdns);t?v.push("ConnectingExternal",{connector:t}):v.push("ConnectingWalletConnect",{wallet:e})}};Di([W()],Wi.prototype,"tabIdx",void 0),Di([W()],Wi.prototype,"wallets",void 0),Di([B()],Wi.prototype,"loading",void 0),Wi=Di([U("w3m-connect-recommended-widget")],Wi);var Ui=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Li=class extends r{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.connectorImages=d.state.connectorImages,this.unsubscribe.push(b.subscribeKey("connectors",(e=>this.connectors=e)),d.subscribeKey("connectorImages",(e=>this.connectorImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e,t;if(p.isMobile())return this.style.cssText="display: none",null;const i=this.connectors.find((e=>"walletConnect"===e.id));if(!i)return this.style.cssText="display: none",null;const o=i.imageUrl||this.connectorImages[null!==(e=null==i?void 0:i.imageId)&&void 0!==e?e:""];return a`
      <wui-list-wallet
        imageSrc=${L(o)}
        name=${null!==(t=i.name)&&void 0!==t?t:"Unknown"}
        @click=${()=>this.onConnector(i)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${L(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(e){b.setActiveConnector(e),v.push("ConnectingWalletConnect")}};Ui([W()],Li.prototype,"tabIdx",void 0),Ui([B()],Li.prototype,"connectors",void 0),Ui([B()],Li.prototype,"connectorImages",void 0),Li=Ui([U("w3m-connect-walletconnect-widget")],Li);const _i=i`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Bi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let zi=class extends r{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.recommended=I.state.recommended,this.featured=I.state.featured,this.unsubscribe.push(b.subscribeKey("connectors",(e=>this.connectors=e)),I.subscribeKey("recommended",(e=>this.recommended=e)),I.subscribeKey("featured",(e=>this.featured=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:t,announced:i,injected:o,multiChain:n,recommended:r,featured:s,external:l}=E.getConnectorsByType(this.connectors,this.recommended,this.featured);return E.getConnectorTypeOrder({custom:e,recent:t,announced:i,injected:o,multiChain:n,recommended:r,featured:s,external:l}).map((e=>{switch(e){case"injected":return a`
            ${n.length?a`<w3m-connect-multi-chain-widget
                  tabIdx=${L(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?a`<w3m-connect-announced-widget
                  tabIdx=${L(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${o.length?a`<w3m-connect-injected-widget
                  .connectors=${o}
                  tabIdx=${L(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return a`<w3m-connect-walletconnect-widget
            tabIdx=${L(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return a`<w3m-connect-recent-widget
            tabIdx=${L(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return a`<w3m-connect-featured-widget
            .wallets=${s}
            tabIdx=${L(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return a`<w3m-connect-custom-widget
            tabIdx=${L(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return a`<w3m-connect-external-widget
            tabIdx=${L(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return a`<w3m-connect-recommended-widget
            .wallets=${r}
            tabIdx=${L(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${e}`),null}}))}};zi.styles=_i,Bi([W()],zi.prototype,"tabIdx",void 0),Bi([B()],zi.prototype,"connectors",void 0),Bi([B()],zi.prototype,"recommended",void 0),Bi([B()],zi.prototype,"featured",void 0),zi=Bi([U("w3m-connector-list")],zi);var Vi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Fi=class extends r{constructor(){super(...arguments),this.tabIdx=void 0}render(){return a`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${L(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${L(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Vi([W()],Fi.prototype,"tabIdx",void 0),Fi=Vi([U("w3m-wallet-login-list")],Fi);const Ki=i`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Mi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let qi=e("W3mConnectView",class extends r{constructor(){var e,t;super(),this.unsubscribe=[],this.connectors=b.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.features=c.state.features,this.remoteFeatures=c.state.remoteFeatures,this.enableWallets=c.state.enableWallets,this.noAdapters=s.state.noAdapters,this.walletGuide="get-started",this.checked=q.state.isLegalCheckboxChecked,this.isEmailEnabled=(null===(e=this.remoteFeatures)||void 0===e?void 0:e.email)&&!s.state.noAdapters,this.isSocialEnabled=(null===(t=this.remoteFeatures)||void 0===t?void 0:t.socials)&&this.remoteFeatures.socials.length>0&&!s.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(b.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})),c.subscribeKey("features",(e=>{this.features=e})),c.subscribeKey("remoteFeatures",(e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)})),c.subscribeKey("enableWallets",(e=>this.enableWallets=e)),s.subscribeKey("noAdapters",(e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures))),q.subscribeKey("isLegalCheckboxChecked",(e=>this.checked=e)))}disconnectedCallback(){var e,t;this.unsubscribe.forEach((e=>e())),null===(e=this.resizeObserver)||void 0===e||e.disconnect();const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".connect");null==i||i.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".connect");var i;t&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),null==t||t.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleConnectListScroll()})),null===(i=this.resizeObserver)||void 0===i||i.observe(t),this.handleConnectListScroll())}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:i}=c.state,o=null===(e=c.state.features)||void 0===e?void 0:e.legalCheckbox,n=Boolean(t||i)&&Boolean(o)&&"get-started"===this.walletGuide&&!this.checked,r={connect:!0,disabled:n},s=c.state.enableWalletGuide,l=this.enableWallets,d=this.isSocialEnabled||this.authConnector,u=n?-1:void 0;return a`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${z(r)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${d&&l&&s&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(u)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(n)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=(null==t?void 0:t.email)&&!e,this.isSocialEnabled=(null==t?void 0:t.socials)&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){const t=e.filter((e=>e.type===N.CONNECTOR_TYPE_AUTH)).map((e=>e.chain));return f.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((e=>t.includes(e)))}renderConnectMethod(e){const t=R.getConnectOrderMethod(this.features,this.connectors);return a`${t.map(((t,i)=>{switch(t){case"email":return a`${this.emailTemplate(e)} ${this.separatorTemplate(i,"email")}`;case"social":return a`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return a`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}}))}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const t=R.getConnectOrderMethod(this.features,this.connectors)[e+1];if(t)return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){const i=this.checkIsThereNextMethod(e),o="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&i&&!o?a`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const e="social"===i;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&i?a`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const e="email"===i;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&i?a`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?a`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${L(e)}
    ></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?a`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${L(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){var t,i;const o=this.enableWallets,n=!1===(null===(t=this.features)||void 0===t?void 0:t.emailShowWallets),r=null===(i=this.features)||void 0===i?void 0:i.collapseWallets,s=n||r;return o?(p.isTelegram()&&(p.isSafari()||p.isIos())&&k.connectWalletConnect().catch((e=>({}))),"explore"===this.walletGuide?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&s?a`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${L(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:a`<w3m-wallet-login-list tabIdx=${L(e)}></w3m-wallet-login-list>`):null}guideTemplate(e=!1){if(!c.state.enableWalletGuide)return null;const t={guide:!0,disabled:e},i=e?-1:void 0;return this.authConnector||this.isSocialEnabled?a`
      ${"explore"!==this.walletGuide||s.state.noAdapters?null:a`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`}
      <w3m-wallet-guide
        class=${z(t)}
        tabIdx=${L(i)}
        walletGuide=${this.walletGuide}
      ></w3m-wallet-guide>
    `:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:a`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".connect");t&&(t.scrollHeight>470?(t.style.setProperty("--connect-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 40px,\n          black calc(100% - 40px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"),t.style.setProperty("--connect-scroll--top-opacity",F.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",F.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--connect-mask-image","none"),t.style.setProperty("--connect-scroll--top-opacity","0"),t.style.setProperty("--connect-scroll--bottom-opacity","0")))}onContinueWalletClick(){v.push("ConnectWallets")}});qi.styles=Ki,Mi([B()],qi.prototype,"connectors",void 0),Mi([B()],qi.prototype,"authConnector",void 0),Mi([B()],qi.prototype,"features",void 0),Mi([B()],qi.prototype,"remoteFeatures",void 0),Mi([B()],qi.prototype,"enableWallets",void 0),Mi([B()],qi.prototype,"noAdapters",void 0),Mi([W()],qi.prototype,"walletGuide",void 0),Mi([B()],qi.prototype,"checked",void 0),Mi([B()],qi.prototype,"isEmailEnabled",void 0),Mi([B()],qi.prototype,"isSocialEnabled",void 0),Mi([B()],qi.prototype,"isAuthEnabled",void 0),e("W3mConnectView",qi=Mi([U("w3m-connect-view")],qi));const Hi=i`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Gi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Yi=class extends r{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return a`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Yi.styles=[o,n,Hi],Gi([W({type:Boolean})],Yi.prototype,"disabled",void 0),Gi([W()],Yi.prototype,"label",void 0),Gi([W()],Yi.prototype,"buttonLabel",void 0),Yi=Gi([U("wui-cta-button")],Yi);const Xi=i`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Qi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ji=class extends r{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:o,homepage:n}=this.wallet,r=p.isMobile(),s=p.isIos(),l=p.isAndroid(),c=[t,i,n,o].filter(Boolean).length>1,d=_.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!r?a`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>v.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?a`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?a`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?a`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.app_store&&p.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.play_store&&p.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;null!==(e=this.wallet)&&void 0!==e&&e.homepage&&p.openHref(this.wallet.homepage,"_blank")}};Ji.styles=[Xi],Qi([W({type:Object})],Ji.prototype,"wallet",void 0),Ji=Qi([U("w3m-mobile-download-links")],Ji);const Zi=i`
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
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
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

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var eo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class to extends r{constructor(){var e,t,i,o,n,r,a,s;super(),this.wallet=null===(e=v.state.data)||void 0===e?void 0:e.wallet,this.connector=null===(t=v.state.data)||void 0===t?void 0:t.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=null!==(i=l.getWalletImage(this.wallet))&&void 0!==i?i:l.getConnectorImage(this.connector),this.name=null!==(o=null!==(n=null===(r=this.wallet)||void 0===r?void 0:r.name)&&void 0!==n?n:null===(a=this.connector)||void 0===a?void 0:a.name)&&void 0!==o?o:"Wallet",this.isRetrying=!1,this.uri=k.state.wcUri,this.error=k.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(k.subscribeKey("wcUri",(e=>{var t;this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,null===(t=this.onConnect)||void 0===t||t.call(this))})),k.subscribeKey("wcError",(e=>this.error=e))),(p.isTelegram()||p.isSafari())&&p.isIos()&&k.state.wcUri&&(null===(s=this.onConnect)||void 0===s||s.call(this))}firstUpdated(){var e;null===(e=this.onAutoConnect)||void 0===e||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),k.setWcError(!1),clearTimeout(this.timeout)}render(){var e;null===(e=this.onRender)||void 0===e||e.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i=`Continue in ${this.name}`;return this.error&&(i="Connection declined"),a`
      <wui-flex
        data-error=${L(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${L(this.imageSrc)}></wui-wallet-image>

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
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?a`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?a`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){var e;this.showRetry=!0;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-button");null==t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;k.setWcError(!1),this.onRetry?(this.isRetrying=!0,null===(e=this.onRetry)||void 0===e||e.call(this)):null===(t=this.onConnect)||void 0===t||t.call(this)}loaderTemplate(){const e=j.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return a`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(p.copyToClopboard(this.uri),x.showSuccess("Link copied"))}catch{x.showError("Failed to copy")}}}to.styles=Zi,eo([B()],to.prototype,"isRetrying",void 0),eo([B()],to.prototype,"uri",void 0),eo([B()],to.prototype,"error",void 0),eo([B()],to.prototype,"ready",void 0),eo([B()],to.prototype,"showRetry",void 0),eo([B()],to.prototype,"secondaryBtnLabel",void 0),eo([B()],to.prototype,"secondaryLabel",void 0),eo([B()],to.prototype,"isLoading",void 0),eo([W({type:Boolean})],to.prototype,"isMobile",void 0),eo([W()],to.prototype,"onRetry",void 0);var io=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let oo=e("W3mConnectingExternalView",class extends to{constructor(){var e;if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");w.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:null!==(e=this.connector.name)&&void 0!==e?e:"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(s.subscribeKey("activeCaipAddress",(e=>{e&&h.close()})))}disconnectedCallback(){this.externalViewUnsubscribe.forEach((e=>e()))}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id===f.CONNECTOR_ID.COINBASE_SDK&&this.error||(await k.connectExternal(this.connector,this.connector.chain),w.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})))}catch(t){var e;w.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:null!==(e=null==t?void 0:t.message)&&void 0!==e?e:"Unknown"}}),this.error=!0}}});e("W3mConnectingExternalView",oo=io([U("w3m-connecting-external-view")],oo));const no=i`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var ro=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ao=e("W3mConnectingMultiChainView",class extends r{constructor(){super(),this.unsubscribe=[],this.activeConnector=b.state.activeConnector,this.unsubscribe.push(b.subscribeKey("activeConnector",(e=>this.activeConnector=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;return a`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${L(l.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${null===(e=this.activeConnector)||void 0===e?void 0:e.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var e;return null===(e=this.activeConnector)||void 0===e||null===(e=e.connectors)||void 0===e?void 0:e.map((e=>e.name?a`
            <wui-list-wallet
              imageSrc=${L(l.getChainImage(e.chain))}
              name=${f.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `:null))}onConnector(e){var t;const i=null===(t=this.activeConnector)||void 0===t||null===(t=t.connectors)||void 0===t?void 0:t.find((t=>t.chain===e.chain));i?"walletConnect"===i.id?p.isMobile()?v.push("AllWallets"):v.push("ConnectingWalletConnect"):v.push("ConnectingExternal",{connector:i}):x.showError("Failed to find connector")}});ao.styles=no,ro([B()],ao.prototype,"activeConnector",void 0),e("W3mConnectingMultiChainView",ao=ro([U("w3m-connecting-multi-chain-view")],ao));var so=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let lo=class extends r{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return a`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){const t=this.platformTabs[e];var i;t&&(null===(i=this.onSelectPlatfrom)||void 0===i||i.call(this,t))}};so([W({type:Array})],lo.prototype,"platforms",void 0),so([W()],lo.prototype,"onSelectPlatfrom",void 0),lo=so([U("w3m-connecting-header")],lo);var co=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let uo=class extends to{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),w.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{var e;this.error=!1;const{connectors:t}=b.state,i=t.find((e=>{var t,i,o;return"ANNOUNCED"===e.type&&(null===(t=e.info)||void 0===t?void 0:t.rdns)===(null===(i=this.wallet)||void 0===i?void 0:i.rdns)||"INJECTED"===e.type||e.name===(null===(o=this.wallet)||void 0===o?void 0:o.name)}));if(!i)throw new Error("w3m-connecting-wc-browser: No connector found");await k.connectExternal(i,i.chain),h.close(),w.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:(null===(e=this.wallet)||void 0===e?void 0:e.name)||"Unknown"}})}catch(i){var t;w.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:null!==(t=null==i?void 0:i.message)&&void 0!==t?t:"Unknown"}}),this.error=!0}}};uo=co([U("w3m-connecting-wc-browser")],uo);var po=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ho=class extends to{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),w.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,null===(e=this.onConnect)||void 0===e||e.call(this))}onConnectProxy(){var e;if(null!==(e=this.wallet)&&void 0!==e&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=p.formatNativeUrl(e,this.uri);k.setWcLinking({name:t,href:o}),k.setRecentWallet(this.wallet),p.openHref(i,"_blank")}catch{this.error=!0}}};ho=po([U("w3m-connecting-wc-desktop")],ho);var wo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let go=class extends to{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=c.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var e;if(null!==(e=this.wallet)&&void 0!==e&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:o,redirectUniversalLink:n,href:r}=p.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=n,this.target=p.isIframe()?"_top":"_self",k.setWcLinking({name:i,href:r}),k.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?p.openHref(this.redirectUniversalLink,this.target):p.openHref(this.redirectDeeplink,this.target)}catch(K){w.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:K instanceof Error?K.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=m.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(k.subscribeKey("wcUri",(()=>{this.onHandleURI()}))),w.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var e;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,null===(e=this.onConnect)||void 0===e||e.call(this))}onTryAgain(){var e;k.setWcError(!1),null===(e=this.onConnect)||void 0===e||e.call(this)}};wo([B()],go.prototype,"redirectDeeplink",void 0),wo([B()],go.prototype,"redirectUniversalLink",void 0),wo([B()],go.prototype,"target",void 0),wo([B()],go.prototype,"preferUniversalLinks",void 0),wo([B()],go.prototype,"isLoading",void 0),go=wo([U("w3m-connecting-wc-mobile")],go);const bo=i`
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
`;var fo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let vo=class extends to{constructor(){var e,t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),w.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:null!==(e=null===(t=this.wallet)||void 0===t?void 0:t.name)&&void 0!==e?e:"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.unsubscribe)||void 0===e||e.forEach((e=>e())),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),a`
      <wui-flex
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
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return k.setWcLinking(void 0),k.setRecentWallet(this.wallet),a` <wui-qr-code
      size=${e}
      theme=${j.state.themeMode}
      uri=${this.uri}
      imageSrc=${L(l.getWalletImage(this.wallet))}
      color=${L(j.state.themeVariables["--w3m-qr-color"])}
      alt=${L(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return a`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};vo.styles=bo,vo=fo([U("w3m-connecting-wc-qrcode")],vo);var mo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xo=class extends r{constructor(){var e;if(super(),this.wallet=null===(e=v.state.data)||void 0===e?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");w.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return a`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${L(l.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};xo=mo([U("w3m-connecting-wc-unsupported")],xo);var yo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ko=class extends to{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=m.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(k.subscribeKey("wcUri",(()=>{this.updateLoadingState()}))),w.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if(null!==(e=this.wallet)&&void 0!==e&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=p.formatUniversalUrl(e,this.uri);k.setWcLinking({name:t,href:o}),k.setRecentWallet(this.wallet),p.openHref(i,"_blank")}catch{this.error=!0}}};yo([B()],ko.prototype,"isLoading",void 0),ko=yo([U("w3m-connecting-wc-web")],ko);var Co=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $o=e("W3mConnectingWcView",class extends r{constructor(){var e;super(),this.wallet=null===(e=v.state.data)||void 0===e?void 0:e.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(c.state.siwx),this.remoteFeatures=c.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var e;return null!==(e=this.remoteFeatures)&&void 0!==e&&e.reownBranding?a`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!c.state.manualWCControl||e))try{const{wcPairingExpiry:t,status:i}=k.state;(e||c.state.enableEmbedded||p.isPairingExpired(t)||"connecting"===i)&&(await k.connectWalletConnect(),this.isSiwxEnabled||h.close())}catch(o){var t,i;w.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:null!==(t=null==o?void 0:o.message)&&void 0!==t?t:"Unknown"}}),k.setWcError(!0),x.showError(null!==(i=o.message)&&void 0!==i?i:"Connection error"),k.resetWcConnection(),v.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:n}=this.wallet,r=null==o?void 0:o.map((({injected_id:e})=>e)).filter(Boolean),a=[...n?[n]:null!=r?r:[]],l=!c.state.isUniversalProvider&&a.length,d=e,u=i,h=k.checkInstalled(a),w=l&&h,g=t&&!p.isMobile();w&&!s.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(p.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),g&&this.platforms.push("desktop"),w||!l||s.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return a`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return a`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return a`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return a`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return a`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return a`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?a`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}});Co([B()],$o.prototype,"platform",void 0),Co([B()],$o.prototype,"platforms",void 0),Co([B()],$o.prototype,"isSiwxEnabled",void 0),Co([B()],$o.prototype,"remoteFeatures",void 0),e("W3mConnectingWcView",$o=Co([U("w3m-connecting-wc-view")],$o));var So=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let To=e("W3mConnectingWcBasicView",class extends r{constructor(){super(...arguments),this.isMobile=p.isMobile()}render(){if(this.isMobile){const{featured:e,recommended:t}=I.state,{customWallets:i}=c.state,o=g.getRecentWallets(),n=e.length||t.length||(null==i?void 0:i.length)||o.length;return a`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${n?a`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return a`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}});So([B()],To.prototype,"isMobile",void 0),e("W3mConnectingWcBasicView",To=So([U("w3m-connecting-wc-basic-view")],To));const Io=i`
  .continue-button-container {
    width: 100%;
  }
`;var Ro=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ao=e("W3mChooseAccountNameView",class extends r{constructor(){super(...arguments),this.loading=!1}render(){return a`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{p.openHref(G.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return a` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return a`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){var e;const t=s.state.activeChain;v.push("RegisterAccountName"),w.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:(null===(e=u.state.preferredAccountTypes)||void 0===e?void 0:e[t])===y.ACCOUNT_TYPES.SMART_ACCOUNT}})}});Ao.styles=Io,Ro([B()],Ao.prototype,"loading",void 0),e("W3mChooseAccountNameView",Ao=Ro([U("w3m-choose-account-name-view")],Ao));var Oo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Eo=e("W3mDownloadsView",class extends r{constructor(){var e;super(...arguments),this.wallet=null===(e=v.state.data)||void 0===e?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return a`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.chrome_store?a`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.app_store?a`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.play_store?a`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.homepage?a`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.chrome_store&&p.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.app_store&&p.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.play_store&&p.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;null!==(e=this.wallet)&&void 0!==e&&e.homepage&&p.openHref(this.wallet.homepage,"_blank")}});e("W3mDownloadsView",Eo=Oo([U("w3m-downloads-view")],Eo));var No=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let jo=e("W3mGetWalletView",class extends r{render(){return a`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{p.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=I.state,{customWallets:i}=c.state;return[...t,...null!=i?i:[],...e].slice(0,4).map((e=>{var t;return a`
        <wui-list-wallet
          name=${null!==(t=e.name)&&void 0!==t?t:"Unknown"}
          tagVariant="main"
          imageSrc=${L(l.getWalletImage(e))}
          @click=${()=>{var t;p.openHref(null!==(t=e.homepage)&&void 0!==t?t:"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `}))}});e("W3mGetWalletView",jo=No([U("w3m-get-wallet-view")],jo));var Po=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Do=class extends r{constructor(){super(...arguments),this.data=[]}render(){return a`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>a`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>a`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};Po([W({type:Array})],Do.prototype,"data",void 0),Do=Po([U("w3m-help-widget")],Do);var Wo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Uo=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Lo=e("W3mWhatIsAWalletView",class extends r{render(){return a`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Uo}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){w.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),v.push("GetWallet")}});e("W3mWhatIsAWalletView",Lo=Wo([U("w3m-what-is-a-wallet-view")],Lo));const _o=i`
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
`;var Bo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let zo=e("W3mConnectWalletsView",class extends r{constructor(){super(),this.unsubscribe=[],this.checked=q.state.isLegalCheckboxChecked,this.unsubscribe.push(q.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:i}=c.state,o=null===(e=c.state.features)||void 0===e?void 0:e.legalCheckbox,n=Boolean(t||i)&&Boolean(o),r=n&&!this.checked,s=r?-1:void 0;return a`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${n?["0","s","s","s"]:"s"}
        gap="xs"
        class=${L(r?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${L(s)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}});zo.styles=_o,Bo([B()],zo.prototype,"checked",void 0),e("W3mConnectWalletsView",zo=Bo([U("w3m-connect-wallets-view")],zo));const Vo=i`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Fo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ko=class extends r{render(){return a`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ko.styles=[o,Vo],Ko=Fo([U("wui-loading-hexagon")],Ko);const Mo=i`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var qo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ho=e("W3mNetworkSwitchView",class extends r{constructor(){var e;super(),this.network=null===(e=v.state.data)||void 0===e?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return a`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${L(l.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:a`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=s.state.activeChain,t=b.getConnectorId(e);return b.getAuthConnector()&&t===f.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=s.state.activeChain,t=b.getConnectorId(e);var i,o;return b.getAuthConnector()&&t===f.CONNECTOR_ID.AUTH?`Switching to ${null!==(i=null===(o=this.network)||void 0===o?void 0:o.name)&&void 0!==i?i:"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){var e;this.showRetry=!0;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-button");null==t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onSwitchNetwork(){try{var e;this.error=!1,s.state.activeChain!==(null===(e=this.network)||void 0===e?void 0:e.chainNamespace)&&s.setIsSwitchingNamespace(!0),this.network&&s.switchActiveNetwork(this.network)}catch(t){this.error=!0}}});Ho.styles=Mo,qo([B()],Ho.prototype,"showRetry",void 0),qo([B()],Ho.prototype,"error",void 0),e("W3mNetworkSwitchView",Ho=qo([U("w3m-network-switch-view")],Ho));const Go=i`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Yo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Xo=class extends r{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return a`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?a`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?a`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:a`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};Xo.styles=[o,n,Go],Yo([W()],Xo.prototype,"imageSrc",void 0),Yo([W()],Xo.prototype,"name",void 0),Yo([W({type:Boolean})],Xo.prototype,"disabled",void 0),Yo([W({type:Boolean})],Xo.prototype,"selected",void 0),Yo([W({type:Boolean})],Xo.prototype,"transparent",void 0),Xo=Yo([U("wui-list-network")],Xo);const Qo=i`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var Jo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Zo=e("W3mNetworksView",class extends r{constructor(){super(),this.unsubscribe=[],this.network=s.state.activeCaipNetwork,this.requestedCaipNetworks=s.getCaipNetworks(),this.search="",this.onDebouncedSearch=p.debounce((e=>{this.search=e}),100),this.unsubscribe.push(d.subscribeNetworkImages((()=>this.requestUpdate())),s.subscribeKey("activeCaipNetwork",(e=>this.network=e)),s.subscribe((()=>{this.requestedCaipNetworks=s.getAllRequestedCaipNetworks()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return a`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){w.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),v.push("WhatIsANetwork")}networksTemplate(){var e;const t=s.getAllApprovedCaipNetworkIds(),i=p.sortRequestedNetworks(t,this.requestedCaipNetworks);return this.search?this.filteredNetworks=null==i?void 0:i.filter((e=>{var t;return null==e||null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(this.search.toLowerCase())})):this.filteredNetworks=i,null===(e=this.filteredNetworks)||void 0===e?void 0:e.map((e=>{var t,i,o;return a`
        <wui-list-network
          .selected=${(null===(t=this.network)||void 0===t?void 0:t.id)===e.id}
          imageSrc=${L(l.getNetworkImage(e))}
          type="network"
          name=${null!==(i=e.name)&&void 0!==i?i:e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${null!==(o=e.name)&&void 0!==o?o:e.id}`}
        ></wui-list-network>
      `}))}getNetworkDisabled(e){const t=e.chainNamespace,i=u.getCaipAddress(t),o=s.getAllApprovedCaipNetworkIds(),n=!1!==s.getNetworkProp("supportsAllNetworks",t),r=b.getConnectorId(t),a=b.getAuthConnector(),l=r===f.CONNECTOR_ID.AUTH&&a;return!(!i||n||l||null!=o&&o.includes(e.caipNetworkId))}onSwitchNetwork(e){P.onSwitchNetwork({network:e})}});Zo.styles=Qo,Jo([B()],Zo.prototype,"network",void 0),Jo([B()],Zo.prototype,"requestedCaipNetworks",void 0),Jo([B()],Zo.prototype,"filteredNetworks",void 0),Jo([B()],Zo.prototype,"search",void 0),e("W3mNetworksView",Zo=Jo([U("w3m-networks-view")],Zo));const en=i`
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

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
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

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var tn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const on={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let nn=e("W3mSwitchActiveChainView",class extends r{constructor(){var e,t;super(...arguments),this.unsubscribe=[],this.switchToChain=null===(e=v.state.data)||void 0===e?void 0:e.switchToChain,this.caipNetwork=null===(t=v.state.data)||void 0===t?void 0:t.network,this.activeChain=s.state.activeChain}firstUpdated(){this.unsubscribe.push(s.subscribeKey("activeChain",(e=>this.activeChain=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.switchToChain?f.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const t=f.CHAIN_NAME_MAP[this.switchToChain];return a`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${L(on[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(s.setIsSwitchingNamespace(!0),b.setFilterByNamespace(this.switchToChain),this.caipNetwork?await s.switchActiveNetwork(this.caipNetwork):s.setActiveNamespace(this.switchToChain),v.reset("Connect"))}});nn.styles=en,tn([W()],nn.prototype,"activeChain",void 0),e("W3mSwitchActiveChainView",nn=tn([U("w3m-switch-active-chain-view")],nn));var rn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const an=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let sn=e("W3mWhatIsANetworkView",class extends r{render(){return a`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${an}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{p.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}});e("W3mWhatIsANetworkView",sn=rn([U("w3m-what-is-a-network-view")],sn));const ln=i`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var cn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let dn=e("W3mUnsupportedChainView",class extends r{constructor(){var e;super(),this.swapUnsupportedChain=null===(e=v.state.data)||void 0===e?void 0:e.swapUnsupportedChain,this.unsubscribe=[],this.disconecting=!1,this.unsubscribe.push(d.subscribeNetworkImages((()=>this.requestUpdate())))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?a`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:a`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=s.getAllRequestedCaipNetworks(),t=s.getAllApprovedCaipNetworkIds(),i=p.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?i.filter((e=>m.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId))):i).map((e=>{var t;return a`
        <wui-list-network
          imageSrc=${L(l.getNetworkImage(e))}
          name=${null!==(t=e.name)&&void 0!==t?t:"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `}))}async onDisconnect(){try{this.disconecting=!0,await k.disconnect(),h.close()}catch{w.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),x.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const t=u.state.caipAddress,i=s.getAllApprovedCaipNetworkIds(),o=(s.getNetworkProp("supportsAllNetworks",e.chainNamespace),v.state.data);t?null!=i&&i.includes(e.caipNetworkId)?await s.switchActiveNetwork(e):v.push("SwitchNetwork",{...o,network:e}):t||(s.setActiveCaipNetwork(e),v.push("Connect"))}});dn.styles=ln,cn([B()],dn.prototype,"disconecting",void 0),e("W3mUnsupportedChainView",dn=cn([U("w3m-unsupported-chain-view")],dn));const un=i`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var pn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let hn=class extends r{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return a`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};hn.styles=[o,n,un],pn([W()],hn.prototype,"icon",void 0),pn([W()],hn.prototype,"text",void 0),hn=pn([U("wui-banner")],hn);const wn=i`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var gn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let bn=e("W3mWalletCompatibleNetworksView",class extends r{constructor(){super(),this.unsubscribe=[],this.preferredAccountTypes=u.state.preferredAccountTypes,this.unsubscribe.push(u.subscribeKey("preferredAccountTypes",(e=>{this.preferredAccountTypes=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var e;const t=s.getAllRequestedCaipNetworks(),i=s.getAllApprovedCaipNetworkIds(),o=s.state.activeCaipNetwork,n=s.checkIfSmartAccountEnabled();let r=p.sortRequestedNetworks(i,t);if(n&&(null===(e=this.preferredAccountTypes)||void 0===e?void 0:e[null==o?void 0:o.chainNamespace])===y.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;r=[o]}return r.filter((e=>e.chainNamespace===(null==o?void 0:o.chainNamespace))).map((e=>{var t;return a`
        <wui-list-network
          imageSrc=${L(l.getNetworkImage(e))}
          name=${null!==(t=e.name)&&void 0!==t?t:"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `}))}});bn.styles=wn,gn([B()],bn.prototype,"preferredAccountTypes",void 0),e("W3mWalletCompatibleNetworksView",bn=gn([U("w3m-wallet-compatible-networks-view")],bn));const fn=i`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var vn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let mn=class extends r{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,a`${this.templateVisual()}`}templateVisual(){var e;return this.imageSrc?a`<wui-image src=${this.imageSrc} alt=${null!==(e=this.alt)&&void 0!==e?e:""}></wui-image>`:a`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};mn.styles=[o,fn],vn([W()],mn.prototype,"imageSrc",void 0),vn([W()],mn.prototype,"alt",void 0),vn([W({type:Boolean})],mn.prototype,"borderRadiusFull",void 0),mn=vn([U("wui-visual-thumbnail")],mn);const xn=i`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var yn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let kn=class extends r{constructor(){var e,t;super(...arguments),this.dappImageUrl=null===(e=c.state.metadata)||void 0===e?void 0:e.icons,this.walletImageUrl=null===(t=u.state.connectedWalletInfo)||void 0===t?void 0:t.icon}firstUpdated(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("wui-visual-thumbnail");null!=t&&t[0]&&this.createAnimation(t[0],"translate(18px)"),null!=t&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var e;return a`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${null===(e=this.dappImageUrl)||void 0===e?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};kn.styles=xn,kn=yn([U("w3m-siwx-sign-message-thumbnails")],kn);var Cn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $n=e("W3mSIWXSignMessageView",class extends r{constructor(){var e;super(...arguments),this.dappName=null===(e=c.state.metadata)||void 0===e?void 0:e.name,this.isCancelling=!1,this.isSigning=!1}render(){var e;return a`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${null!==(e=this.dappName)&&void 0!==e?e:"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await D.requestSignMessage().finally((()=>this.isSigning=!1))}async onCancel(){this.isCancelling=!0,await D.cancelSignMessage().finally((()=>this.isCancelling=!1))}});Cn([B()],$n.prototype,"isCancelling",void 0),Cn([B()],$n.prototype,"isSigning",void 0),e("W3mSIWXSignMessageView",$n=Cn([U("w3m-siwx-sign-message-view")],$n))}}}));
