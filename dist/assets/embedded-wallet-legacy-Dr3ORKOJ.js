System.register(["./index-legacy-CV5l4Qpz.js","./if-defined-legacy-D6M4dwVv.js","./index-legacy-C5lKrPcg.js","./ref-legacy-Br7HfMRS.js","./index-legacy-BPEkTMac.js","./index-legacy-BYTHDDSo.js","./index-legacy-CY_RwfXy.js","./index-legacy-C-f6UD2F.js","./index-legacy-C0awMG0q.js","./index-legacy-DDeaeVC_.js","./index-legacy-CGWOzzQg.js","./index-legacy-DF8od_5T.js"],(function(e,t){"use strict";var i,n,r,s,a,o,l,c,u,d,m,g,p,h,f,w,v,b,y,x,S,T,R,N,A;return{setters:[e=>{i=e.i,n=e.a,r=e.M,s=e.x,a=e.C,o=e.T,l=e.g,c=e.b,u=e.r,d=e.c,m=e.E,g=e.A,p=e.d,h=e.e,f=e.f,w=e.W,v=e.S,b=e.R},e=>{y=e.r,x=e.c,S=e.n,T=e.o},e=>{R=e.N},e=>{N=e.e,A=e.n},null,null,null,null,null,null,null,null],execute:function(){const t=i`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var $=function(e,t,i,n){var r,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let E=e("W3mApproveTransactionView",class extends n{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(r.subscribeKey("open",(e=>{e||this.onHideIframe()})),r.subscribeKey("shake",(e=>{this.iframe.style.animation=e?"w3m-shake 500ms var(--wui-ease-out-power-2)":"none"})))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach((e=>e())),null===(e=this.bodyObserver)||void 0===e||e.unobserve(window.document.body)}async firstUpdated(){var e;await this.syncTheme(),this.iframe.style.display="block";const t=null==this||null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector("div");this.bodyObserver=new ResizeObserver((e=>{var i,n;const r=null==e||null===(i=e[0])||void 0===i?void 0:i.contentBoxSize,s=null==r||null===(n=r[0])||void 0===n?void 0:n.inlineSize;this.iframe.style.height="600px",t.style.height="600px",s&&s<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset"),this.ready=!0,this.onShowIframe()})),this.bodyObserver.observe(window.document.body)}render(){return s`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){const e=a.getAuthConnector();if(e){const t=o.getSnapshot().themeMode,i=o.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:i,w3mThemeVariables:l(i,t)})}}});E.styles=t,$([y()],E.prototype,"ready",void 0),e("W3mApproveTransactionView",E=$([x("w3m-approve-transaction-view")],E));var C=function(e,t,i,n){var r,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let k=e("W3mUpgradeWalletView",class extends n{render(){return s`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${c.SECURE_SITE_DASHBOARD}
          imageSrc=${c.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}});e("W3mUpgradeWalletView",k=C([x("w3m-upgrade-wallet-view")],k));const j=i`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var I=function(e,t,i,n){var r,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let O=class extends n{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return s`
      <wui-input-text
        value=${T(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return s`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${d.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?s`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?s`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};O.styles=[u,j],I([S()],O.prototype,"errorMessage",void 0),I([S({type:Boolean})],O.prototype,"disabled",void 0),I([S()],O.prototype,"value",void 0),I([S({type:Boolean})],O.prototype,"loading",void 0),O=I([x("wui-ens-input")],O);const _=i`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;var U=function(e,t,i,n){var r,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let D=e("W3mRegisterAccountNameView",class extends n{constructor(){super(),this.formRef=N(),this.usubscribe=[],this.name="",this.error="",this.loading=m.state.loading,this.suggestions=m.state.suggestions,this.registered=!1,this.profileName=g.state.profileName,this.onDebouncedNameInputChange=p.debounce((e=>{m.validateName(e)?(this.error="",this.name=e,m.getSuggestions(e),m.isNameRegistered(e).then((e=>{this.registered=e}))):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"})),this.usubscribe.push(m.subscribe((e=>{this.suggestions=e.suggestions,this.loading=e.loading})),g.subscribeKey("profileName",(e=>{this.profileName=e,e&&(this.error="You already own a name")})))}firstUpdated(){var e;null===(e=this.formRef.value)||void 0===e||e.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.usubscribe.forEach((e=>e())),null===(e=this.formRef.value)||void 0===e||e.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return s`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${A(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?s`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?s`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?s`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:s`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;const e=this.registered?this.suggestions.filter((e=>e.name!==this.name)):[];return s`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
        @click=${this.onSubmitName.bind(this)}
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map((e=>this.availableNameTemplate(e.name)))}
    </wui-flex>`}availableNameTemplate(e){return s` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&m.validateName(this.name)}async onSubmitName(){const e=h.state.activeChain;try{var t,i;if(!this.isAllowedToSubmit())return;const n=`${this.name}${d.WC_NAME_SUFFIX}`;f.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:(null===(t=g.state.preferredAccountTypes)||void 0===t?void 0:t[e])===w.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:n}}),await m.registerName(n),f.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:(null===(i=g.state.preferredAccountTypes)||void 0===i?void 0:i[e])===w.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:n}})}catch(r){var n;v.showError(r.message),f.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:(null===(n=g.state.preferredAccountTypes)||void 0===n?void 0:n[e])===w.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:`${this.name}${d.WC_NAME_SUFFIX}`,error:(null==r?void 0:r.message)||"Unknown error"}})}}onEnterKey(e){"Enter"===e.key&&this.isAllowedToSubmit()&&this.onSubmitName()}});D.styles=_,U([S()],D.prototype,"errorMessage",void 0),U([y()],D.prototype,"name",void 0),U([y()],D.prototype,"error",void 0),U([y()],D.prototype,"loading",void 0),U([y()],D.prototype,"suggestions",void 0),U([y()],D.prototype,"registered",void 0),U([y()],D.prototype,"profileName",void 0),e("W3mRegisterAccountNameView",D=U([x("w3m-register-account-name-view")],D));const M=i`
  .continue-button-container {
    width: 100%;
  }
`;var W=function(e,t,i,n){var r,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let P=e("W3mRegisterAccountNameSuccess",class extends n{render(){return s`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{p.openHref(R.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return s` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return s`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){b.replace("Account")}});P.styles=M,e("W3mRegisterAccountNameSuccess",P=W([x("w3m-register-account-name-success-view")],P))}}}));
