System.register(["./index-legacy-CV5l4Qpz.js","./if-defined-legacy-D6M4dwVv.js","./index-legacy-DvzErYf_.js","./index-legacy-DDeaeVC_.js","./index-legacy-DF8od_5T.js","./index-legacy-BPEkTMac.js","./index-legacy-DFeqyvdr.js","./index-legacy-BecWyGg1.js","./index-legacy-6QVE975v.js","./index-legacy-CGWOzzQg.js","./index-legacy-C0awMG0q.js","./index-legacy-CRzhNi84.js","./index-legacy-BYTHDDSo.js","./index-legacy-Cr4kTQ5s.js","./ref-legacy-Br7HfMRS.js","./ConstantsUtil-legacy-Bt7NKyif.js"],(function(e,t){"use strict";var i,r,o,s,a,n,c,l,u,d,p,h,m,w,g,y,v,f,b,x,C,k,T,R,I,$,P,A;return{setters:[e=>{i=e.i,r=e.a,o=e.x,s=e.D,a=e.F,n=e.G,c=e.H,l=e.A,u=e.O,d=e.M,p=e.e,h=e.t,m=e.f,w=e.W,g=e.R,y=e.d,v=e.b,f=e.B,b=e.k,x=e.S,C=e.T},e=>{k=e.n,T=e.c,R=e.o,I=e.r},e=>{$=e.D,P=e.T},null,null,null,null,e=>{A=e.O},null,null,null,null,null,null,null,null],execute:function(){const t=i`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var O=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let j=class extends r{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return o`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?o`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:o`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await s._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return o`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return o`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return o`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};j.styles=[t],O([k({type:Boolean})],j.prototype,"disabled",void 0),O([k()],j.prototype,"color",void 0),O([k()],j.prototype,"label",void 0),O([k()],j.prototype,"purchaseValue",void 0),O([k()],j.prototype,"purchaseCurrency",void 0),O([k()],j.prototype,"date",void 0),O([k({type:Boolean})],j.prototype,"completed",void 0),O([k({type:Boolean})],j.prototype,"inProgress",void 0),O([k({type:Boolean})],j.prototype,"failed",void 0),O([k()],j.prototype,"onClick",void 0),O([k()],j.prototype,"symbol",void 0),O([k()],j.prototype,"icon",void 0),j=O([T("w3m-onramp-activity-item")],j);const S=i`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var D=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let _=e("W3mOnRampActivityView",class extends r{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=a.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=n.state.coinbaseTransactions,this.tokenImages=c.state.tokenImages,this.unsubscribe.push(a.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e})),c.subscribeKey("tokenImages",(e=>this.tokenImages=e)),(()=>{clearTimeout(this.refetchTimeout)}),n.subscribe((e=>{this.coinbaseTransactions={...e.coinbaseTransactions}}))),n.clearCursor(),this.fetchTransactions()}render(){return o`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return null==e?void 0:e.map((e=>{var t,i,r;const s=$.formatDate(null==e||null===(t=e.metadata)||void 0===t?void 0:t.minedAt),a=e.transfers[0],n=null==a?void 0:a.fungible_info;if(!n)return null;const c=(null==n||null===(i=n.icon)||void 0===i?void 0:i.url)||(null===(r=this.tokenImages)||void 0===r?void 0:r[n.symbol||""]);return o`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${R(n.symbol)}
          purchaseValue=${a.quantity.numeric}
          date=${s}
          icon=${R(c)}
          symbol=${R(n.symbol)}
        ></w3m-onramp-activity-item>
      `}))}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map((e=>{const t=parseInt(e,10);return new Array(12).fill(null).map(((e,t)=>t)).reverse().map((e=>{var i;const r=P.getTransactionGroupTitle(t,e),s=null===(i=this.coinbaseTransactions[t])||void 0===i?void 0:i[e];return s?o`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${r}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(s)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=l.state.address,t=u.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await n.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var e;const t=new Date;0!==((null===(e=this.coinbaseTransactions[t.getFullYear()])||void 0===e?void 0:e[t.getMonth()])||[]).filter((e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?this.refetchTimeout=setTimeout((async()=>{const e=l.state.address;await n.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()}),3e3):clearTimeout(this.refetchTimeout)}templateLoading(){return Array(7).fill(o` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}});_.styles=S,D([I()],_.prototype,"selectedOnRampProvider",void 0),D([I()],_.prototype,"loading",void 0),D([I()],_.prototype,"coinbaseTransactions",void 0),D([I()],_.prototype,"tokenImages",void 0),e("W3mOnRampActivityView",_=D([T("w3m-onramp-activity-view")],_));const B=i`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var N=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let W=e("W3mOnrampFiatSelectView",class extends r{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=a.state.paymentCurrency,this.currencies=a.state.paymentCurrencies,this.currencyImages=c.state.currencyImages,this.checked=A.state.isLegalCheckboxChecked,this.unsubscribe.push(a.subscribe((e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies})),c.subscribeKey("currencyImages",(e=>this.currencyImages=e)),A.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:i}=u.state,r=null===(e=u.state.features)||void 0===e?void 0:e.legalCheckbox,s=Boolean(t||i)&&Boolean(r)&&!this.checked;return o`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${R(s?"disabled":void 0)}
      >
        ${this.currenciesTemplate(s)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.currencies.map((t=>{var i;return o`
        <wui-list-item
          imageSrc=${R(null===(i=this.currencyImages)||void 0===i?void 0:i[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${R(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `}))}selectCurrency(e){e&&(a.setPaymentCurrency(e),d.close())}});W.styles=B,N([I()],W.prototype,"selectedCurrency",void 0),N([I()],W.prototype,"currencies",void 0),N([I()],W.prototype,"currencyImages",void 0),N([I()],W.prototype,"checked",void 0),e("W3mOnrampFiatSelectView",W=N([T("w3m-onramp-fiat-select-view")],W));const U=i`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var E=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let L=class extends r{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return o`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${R(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?o`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:o`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var e;const t=p.getAllRequestedCaipNetworks(),i=null==t||null===(e=t.filter((e=>{var t;return null==e||null===(t=e.assets)||void 0===t?void 0:t.imageId})))||void 0===e?void 0:e.slice(0,5);return o`
      <wui-flex class="networks">
        ${null==i?void 0:i.map((e=>o`
            <wui-flex class="network-icon">
              <wui-image src=${R(h.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `))}
      </wui-flex>
    `}};L.styles=[U],E([k({type:Boolean})],L.prototype,"disabled",void 0),E([k()],L.prototype,"color",void 0),E([k()],L.prototype,"name",void 0),E([k()],L.prototype,"label",void 0),E([k()],L.prototype,"feeRange",void 0),E([k({type:Boolean})],L.prototype,"loading",void 0),E([k()],L.prototype,"onClick",void 0),L=E([T("w3m-onramp-provider-item")],L);const z=i`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var V=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let M=class extends r{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=u.state;return e||t?o`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return o` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){var e;const t=p.state.activeChain;m.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(null===(e=l.state.preferredAccountTypes)||void 0===e?void 0:e[t])===w.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("WhatIsABuy")}};M.styles=[z],M=V([T("w3m-onramp-providers-footer")],M);var K=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let q=e("W3mOnRampProvidersView",class extends r{constructor(){super(),this.unsubscribe=[],this.providers=a.state.providers,this.unsubscribe.push(a.subscribeKey("providers",(e=>{this.providers=e})))}firstUpdated(){const e=this.providers.map((async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(null==e?void 0:e.url)));Promise.all(e).then((e=>{this.providers=this.providers.map(((t,i)=>({...t,url:e[i]||""})))}))}render(){return o`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter((e=>{var t;return e.supportedChains.includes(null!==(t=p.state.activeChain)&&void 0!==t?t:"eip155")})).map((e=>o`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
            data-testid=${`onramp-provider-${e.name}`}
          ></w3m-onramp-provider-item>
        `))}onClickProvider(e){var t;const i=p.state.activeChain;a.setSelectedProvider(e),g.push("BuyInProgress"),y.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),m.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:(null===(t=l.state.preferredAccountTypes)||void 0===t?void 0:t[i])===w.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){var e;const t=l.state.address,i=p.state.activeCaipNetwork;if(!t)throw new Error("No address found");if(null==i||!i.name)throw new Error("No network found");const r=null!==(e=v.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[i.name])&&void 0!==e?e:v.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=a.state.purchaseCurrency,s=o?[o.symbol]:a.state.purchaseCurrencies.map((e=>e.symbol));return await f.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:t,blockchains:v.WC_COINBASE_PAY_SDK_CHAINS,assets:s}],partnerUserId:t,purchaseAmount:a.state.purchaseAmount})}});K([I()],q.prototype,"providers",void 0),e("W3mOnRampProvidersView",q=K([T("w3m-onramp-providers-view")],q));const F=i`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Y=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let G=e("W3mOnrampTokensView",class extends r{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=a.state.purchaseCurrencies,this.tokens=a.state.purchaseCurrencies,this.tokenImages=c.state.tokenImages,this.checked=A.state.isLegalCheckboxChecked,this.unsubscribe.push(a.subscribe((e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies})),c.subscribeKey("tokenImages",(e=>this.tokenImages=e)),A.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:i}=u.state,r=null===(e=u.state.features)||void 0===e?void 0:e.legalCheckbox,s=Boolean(t||i)&&Boolean(r)&&!this.checked;return o`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${R(s?"disabled":void 0)}
      >
        ${this.currenciesTemplate(s)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.tokens.map((t=>{var i;return o`
        <wui-list-item
          imageSrc=${R(null===(i=this.tokenImages)||void 0===i?void 0:i[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${R(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${t.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `}))}selectToken(e){e&&(a.setPurchaseCurrency(e),d.close())}});G.styles=F,Y([I()],G.prototype,"selectedCurrency",void 0),Y([I()],G.prototype,"tokens",void 0),Y([I()],G.prototype,"tokenImages",void 0),Y([I()],G.prototype,"checked",void 0),e("W3mOnrampTokensView",G=Y([T("w3m-onramp-token-select-view")],G));const H=i`
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
`;var Q=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let X=e("W3mBuyInProgressView",class extends r{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=a.state.selectedProvider,this.uri=b.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(a.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e}))),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var e;let t="Continue in external window";if(this.error)t="Buy failed";else if(this.selectedOnRampProvider){var i;t=`Buy in ${null===(i=this.selectedOnRampProvider)||void 0===i?void 0:i.label}`}const r=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return o`
      <wui-flex
        data-error=${R(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${R(null===(e=this.selectedOnRampProvider)||void 0===e?void 0:e.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

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
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${r}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name&&(this.startTime=Date.now(),this.initializeCoinbaseTransactions())}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval((()=>this.watchCoinbaseTransactions()),4e3)}async watchCoinbaseTransactions(){try{const e=l.state.address;if(!e)throw new Error("No address found");const t=await f.fetchTransactions({account:e,onramp:"coinbase"});t.data.filter((e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?(clearInterval(this.intervalId),g.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){x.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,y.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return null!==(e=this.selectedOnRampProvider)&&void 0!==e&&e.url?o`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=C.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){var e;if(null===(e=this.selectedOnRampProvider)||void 0===e||!e.url)return x.showError("No link found"),void g.goBack();try{y.copyToClopboard(this.selectedOnRampProvider.url),x.showSuccess("Link copied")}catch{x.showError("Failed to copy")}}});X.styles=H,Q([I()],X.prototype,"intervalId",void 0),Q([I()],X.prototype,"selectedOnRampProvider",void 0),Q([I()],X.prototype,"uri",void 0),Q([I()],X.prototype,"ready",void 0),Q([I()],X.prototype,"showRetry",void 0),Q([I()],X.prototype,"buffering",void 0),Q([I()],X.prototype,"error",void 0),Q([I()],X.prototype,"startTime",void 0),Q([k({type:Boolean})],X.prototype,"isMobile",void 0),Q([k()],X.prototype,"onRetry",void 0),e("W3mBuyInProgressView",X=Q([T("w3m-buy-in-progress-view")],X));var J=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let Z=e("W3mWhatIsABuyView",class extends r{render(){return o`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${g.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}});e("W3mWhatIsABuyView",Z=J([T("w3m-what-is-a-buy-view")],Z));const ee=i`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var te=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let ie=class extends r{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=null===(e=this.currencies)||void 0===e?void 0:e[0],this.currencyImages=c.state.currencyImages,this.tokenImages=c.state.tokenImages,this.unsubscribe.push(a.subscribeKey("purchaseCurrency",(e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))})),a.subscribeKey("paymentCurrency",(e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))})),a.subscribe((e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)})),c.subscribe((e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}})))}firstUpdated(){a.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=(null===(e=this.selectedCurrency)||void 0===e?void 0:e.symbol)||"",i=this.currencyImages[t]||this.tokenImages[t];return o`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?o` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>d.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${R(i)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:o`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};ie.styles=ee,te([k({type:String})],ie.prototype,"type",void 0),te([k({type:Number})],ie.prototype,"value",void 0),te([I()],ie.prototype,"currencies",void 0),te([I()],ie.prototype,"selectedCurrency",void 0),te([I()],ie.prototype,"currencyImages",void 0),te([I()],ie.prototype,"tokenImages",void 0),ie=te([T("w3m-onramp-input")],ie);const re=i`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var oe=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};const se={USD:"$",EUR:"€",GBP:"£"},ae=[100,250,500,1e3];let ne=e("W3mOnrampWidget",class extends r{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=p.state.activeCaipAddress,this.loading=d.state.loading,this.paymentCurrency=a.state.paymentCurrency,this.paymentAmount=a.state.paymentAmount,this.purchaseAmount=a.state.purchaseAmount,this.quoteLoading=a.state.quotesLoading,this.unsubscribe.push(p.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)),d.subscribeKey("loading",(e=>{this.loading=e})),a.subscribe((e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${ae.map((e=>{var t;return o`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${se[(null===(t=this.paymentCurrency)||void 0===t?void 0:t.id)||"USD"]} ${e}`}</wui-button
                >`}))}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?o`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:o`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||d.open({view:"OnRampProviders"})}openModal(){d.open({view:"Connect"})}async onPaymentAmountChange(e){a.setPaymentAmount(Number(e.detail)),await a.getQuote()}async selectPresetAmount(e){a.setPaymentAmount(e),await a.getQuote()}});ne.styles=re,oe([k({type:Boolean})],ne.prototype,"disabled",void 0),oe([I()],ne.prototype,"caipAddress",void 0),oe([I()],ne.prototype,"loading",void 0),oe([I()],ne.prototype,"paymentCurrency",void 0),oe([I()],ne.prototype,"paymentAmount",void 0),oe([I()],ne.prototype,"purchaseAmount",void 0),oe([I()],ne.prototype,"quoteLoading",void 0),e("W3mOnrampWidget",ne=oe([T("w3m-onramp-widget")],ne))}}}));
