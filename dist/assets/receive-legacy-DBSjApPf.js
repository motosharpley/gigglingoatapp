System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js","./index-legacy-BtWSK_ZE.js","./index-legacy-aclEvsjH.js","./index-legacy-BtJ7NVdX.js"],(function(e,t){"use strict";var i,r,o,s,a,n,c,l,u,d,p,w,h,f,g,m,v,y;return{setters:[e=>{i=e.i,r=e.r,o=e.h,s=e.a,a=e.x,n=e.A,c=e.e,l=e.S,u=e.t,d=e.T,p=e.W,w=e.R,h=e.d},e=>{f=e.n,g=e.c,m=e.U,v=e.o,y=e.r},null,null,null],execute:function(){const t=i`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var k=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let b=class extends s{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return a`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return a` <wui-flex class="networks">
      ${null==e?void 0:e.map((e=>a` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`))}
    </wui-flex>`}};b.styles=[r,o,t],k([f({type:Array})],b.prototype,"networkImages",void 0),k([f()],b.prototype,"text",void 0),b=k([g("wui-compatible-network")],b);const x=i`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var N=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let C=e("W3mWalletReceiveView",class extends s{constructor(){super(),this.unsubscribe=[],this.address=n.state.address,this.profileName=n.state.profileName,this.network=c.state.activeCaipNetwork,this.preferredAccountTypes=n.state.preferredAccountTypes,this.unsubscribe.push(n.subscribe((e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountTypes=e.preferredAccountTypes):l.showError("Account not found")})),c.subscribeKey("activeCaipNetwork",(e=>{null!=e&&e.id&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=u.getNetworkImage(this.network);return a` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${m.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${d.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${v(d.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var e,t;const i=c.getAllRequestedCaipNetworks(),r=c.checkIfSmartAccountEnabled(),o=c.state.activeCaipNetwork,s=i.filter((e=>(null==e?void 0:e.chainNamespace)===(null==o?void 0:o.chainNamespace)));var n;if((null===(e=this.preferredAccountTypes)||void 0===e?void 0:e[null==o?void 0:o.chainNamespace])===p.ACCOUNT_TYPES.SMART_ACCOUNT&&r)return o?a`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[null!==(n=u.getNetworkImage(o))&&void 0!==n?n:""]}
      ></wui-compatible-network>`:null;const l=(null==s||null===(t=s.filter((e=>{var t;return null==e||null===(t=e.assets)||void 0===t?void 0:t.imageId})))||void 0===t?void 0:t.slice(0,5)).map(u.getNetworkImage).filter(Boolean);return a`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${l}
    ></wui-compatible-network>`}onReceiveClick(){w.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(h.copyToClopboard(this.address),l.showSuccess("Address copied"))}catch{l.showError("Failed to copy")}}});C.styles=x,N([y()],C.prototype,"address",void 0),N([y()],C.prototype,"profileName",void 0),N([y()],C.prototype,"network",void 0),N([y()],C.prototype,"preferredAccountTypes",void 0),e("W3mWalletReceiveView",C=N([g("w3m-wallet-receive-view")],C))}}}));
