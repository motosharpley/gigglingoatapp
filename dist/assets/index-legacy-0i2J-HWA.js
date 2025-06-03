System.register(["./index-legacy-CV5l4Qpz.js","./if-defined-legacy-D6M4dwVv.js","./index-legacy-C0awMG0q.js","./index-legacy-B4tPRNYC.js","./index-legacy-CY_RwfXy.js","./index-legacy-DF8od_5T.js","./index-legacy-DFeqyvdr.js","./index-legacy-BPEkTMac.js","./index-legacy-DWB81zPq.js","./index-legacy-CRzhNi84.js","./index-legacy-DDeaeVC_.js"],(function(e,t){"use strict";var n,a,s,i,r,o,c,l,u,d,p,m,h,g,y,w,f,x,v,P,I,E,b;return{setters:[e=>{n=e.O,a=e.P,s=e.d,i=e.e,r=e.c,o=e.k,c=e.I,l=e.u,u=e.f,d=e.S,p=e.A,m=e.R,h=e.J,g=e.M,y=e.y,w=e.z,f=e.i,x=e.a,v=e.x,P=e.T},e=>{I=e.o,E=e.r,b=e.c},null,null,null,null,null,null,null,null,null],execute:function(){e({getExchanges:function(){return z.getExchanges()},getIsPaymentInProgress:function(){return z.state.isPaymentInProgress},getPayError:function(){return z.state.error},getPayResult:function(){var e;return null===(e=z.state.currentPayment)||void 0===e?void 0:e.result},openPay:async function(e){return z.handleOpenPay(e)}});const t="INVALID_PAYMENT_CONFIG",A="INVALID_RECIPIENT",N="INVALID_ASSET",S="INVALID_AMOUNT",k="UNKNOWN_ERROR",C="UNABLE_TO_INITIATE_PAYMENT",T="INVALID_CHAIN_NAMESPACE",_="GENERIC_PAYMENT_ERROR",R="UNABLE_TO_GET_EXCHANGES",U="ASSET_NOT_SUPPORTED",$="UNABLE_TO_GET_PAY_URL",O="UNABLE_TO_GET_BUY_STATUS",D={[t]:"Invalid payment configuration",[A]:"Invalid recipient address",[N]:"Invalid asset specified",[S]:"Invalid payment amount",[k]:"Unknown payment error occurred",[C]:"Unable to initiate payment",[T]:"Invalid chain namespace",[_]:"Unable to process payment",[R]:"Unable to get exchanges",[U]:"Asset not supported by the selected exchange",[$]:"Unable to get payment URL",[O]:"Unable to get buy status"};class M extends Error{get message(){return D[this.code]}constructor(e,t){super(D[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,M)}}class W extends Error{}async function L(e,t){const a=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${n.getSnapshot().projectId}`,s={jsonrpc:"2.0",id:1,method:e,params:t},i=await fetch(a,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}),r=await i.json();if(r.error)throw new W(r.error.message);return r}async function j(e){return(await L("reown_getExchanges",e)).result}const V=["eip155"],H={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function Y(e,t){const{chainNamespace:n,chainId:s}=a.parseCaipNetworkId(e),i=H[n];if(!i)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let r=i.native.assetNamespace,o=i.native.assetReference;return"native"!==t&&(r=i.defaultTokenNamespace,o=t),`${n}:${s}/${r}:${o}`}const G="unknown",B=l({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),z={state:B,subscribe:e=>w(B,(()=>e(B))),subscribeKey:(e,t)=>y(B,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.subscribeEvents(),this.initializeAnalytics(),B.isConfigured=!0,u.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:B.exchanges,configuration:{network:B.paymentAsset.network,asset:B.paymentAsset.asset,recipient:B.recipient,amount:B.amount}}}),await g.open({view:"Pay"})},resetState(){B.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},B.recipient="0x0",B.amount=0,B.isConfigured=!1,B.error=null,B.isPaymentInProgress=!1,B.isLoading=!1,B.currentPayment=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new M(t);try{var n;B.paymentAsset=e.paymentAsset,B.recipient=e.recipient,B.amount=e.amount,B.openInNewTab=null===(n=e.openInNewTab)||void 0===n||n,B.redirectUrl=e.redirectUrl,B.payWithExchange=e.payWithExchange,B.error=null}catch(a){throw new M(t,a.message)}},getPaymentAsset:()=>B.paymentAsset,getExchanges:()=>B.exchanges,async fetchExchanges(){try{B.isLoading=!0;const e=await j({page:0,asset:Y(B.paymentAsset.network,B.paymentAsset.asset),amount:B.amount.toString()});B.exchanges=e.exchanges.slice(0,2)}catch(e){throw d.showError(D.UNABLE_TO_GET_EXCHANGES),new M(R)}finally{B.isLoading=!1}},async getAvailableExchanges(e){try{var t,n;const a=null!=e&&e.asset&&null!=e&&e.network?Y(e.network,e.asset):void 0;return await j({page:null!==(t=null==e?void 0:e.page)&&void 0!==t?t:0,asset:a,amount:null==e||null===(n=e.amount)||void 0===n?void 0:n.toString()})}catch(a){throw new M(R)}},async getPayUrl(e,t,n=!1){try{const a=Number(t.amount),s=await async function(e){return(await L("reown_getExchangePayUrl",e)).result}({exchangeId:e,asset:Y(t.network,t.asset),amount:a.toString(),recipient:`${t.network}:${t.recipient}`});return u.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:e},headless:n}}),n&&(this.initiatePayment(),u.sendEvent({type:"track",event:"PAY_INITIATED",properties:{paymentId:B.paymentId||G,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:e}}})),s}catch(a){if(a instanceof Error&&a.message.includes("is not supported"))throw new M(U);throw new Error(a.message)}},async openPayUrl(e,t,n=!1){try{var a;const i=await this.getPayUrl(e.exchangeId,t,n);if(!i)throw new M($);const r=null===(a=e.openInNewTab)||void 0===a||a?"_blank":"_self";return s.openHref(i.url,r),i}catch(i){throw B.error=i instanceof M?i.message:D.GENERIC_PAYMENT_ERROR,new M($)}},subscribeEvents(){B.isConfigured||(h.subscribeProviders((async e=>{const t=i.state.activeChain;h.getProvider(t)&&await this.handlePayment()})),p.subscribeKey("caipAddress",(async e=>{e&&await this.handlePayment()})))},async handlePayment(){B.currentPayment={type:"wallet",status:"IN_PROGRESS"};const e=p.state.caipAddress;if(!e)return;const{chainId:n,address:l}=a.parseCaipAddress(e),u=i.state.activeChain;if(!l||!n||!u)return;if(!h.getProvider(u))return;const m=i.state.activeCaipNetwork;if(m&&!B.isPaymentInProgress)try{this.initiatePayment();const e=i.getAllRequestedCaipNetworks(),n=i.getAllApprovedCaipNetworkIds();if(await async function(e){const{paymentAssetNetwork:n,activeCaipNetwork:a,approvedCaipNetworkIds:r,requestedCaipNetworks:o}=e,c=s.sortRequestedNetworks(r,o).find((e=>e.caipNetworkId===n));if(!c)throw new M(t);if(c.caipNetworkId===a.caipNetworkId)return;const l=i.getNetworkProp("supportsAllNetworks",c.chainNamespace);if(!(null==r?void 0:r.includes(c.caipNetworkId))&&!l)throw new M(t);try{await i.switchActiveNetwork(c)}catch(u){throw new M(_,u)}}({paymentAssetNetwork:B.paymentAsset.network,activeCaipNetwork:m,approvedCaipNetworkIds:n,requestedCaipNetworks:e}),await g.open({view:"PayLoading"}),u!==r.CHAIN.EVM)throw new M(T);"native"===B.paymentAsset.asset&&(B.currentPayment.result=await async function(e,n,a){var s,i;if(n!==r.CHAIN.EVM)throw new M(T);if(!a.fromAddress)throw new M(t,"fromAddress is required for native EVM payments.");const c="string"==typeof a.amount?parseFloat(a.amount):a.amount;if(isNaN(c))throw new M(t);const l=null!==(s=null===(i=e.metadata)||void 0===i?void 0:i.decimals)&&void 0!==s?s:18,u=o.parseUnits(c.toString(),l);if("bigint"!=typeof u)throw new M(_);const d=await o.sendTransaction({chainNamespace:n,to:a.recipient,address:a.fromAddress,value:u,data:"0x"});return null!=d?d:void 0}(B.paymentAsset,u,{recipient:B.recipient,amount:B.amount,fromAddress:l})),B.paymentAsset.asset.startsWith("0x")&&(B.currentPayment.result=await async function(e,n){if(!n.fromAddress)throw new M(t,"fromAddress is required for ERC20 EVM payments.");const a=e.asset,s=n.recipient,i=Number(e.metadata.decimals),l=o.parseUnits(n.amount.toString(),i);if(void 0===l)throw new M(_);const u=await o.writeContract({fromAddress:n.fromAddress,tokenAddress:a,args:[s,l],method:"transfer",abi:c.getERC20Abi(a),chainNamespace:r.CHAIN.EVM});return null!=u?u:void 0}(B.paymentAsset,{recipient:B.recipient,amount:B.amount,fromAddress:l})),B.currentPayment.status="SUCCESS"}catch(y){B.error=y instanceof M?y.message:D.GENERIC_PAYMENT_ERROR,B.currentPayment.status="FAILED",d.showError(B.error)}finally{B.isPaymentInProgress=!1}},getExchangeById:e=>B.exchanges.find((t=>t.id===e)),validatePayConfig(e){const{paymentAsset:n,recipient:a,amount:s}=e;if(!n)throw new M(t);if(!a)throw new M(A);if(!n.asset)throw new M(N);if(null==s||s<=0)throw new M(S)},handlePayWithWallet(){const e=p.state.caipAddress;if(!e)return void m.push("Connect");const{chainId:t,address:n}=a.parseCaipAddress(e),s=i.state.activeChain;n&&t&&s?this.handlePayment():m.push("Connect")},async handlePayWithExchange(e){try{B.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:n}=B.paymentAsset,a={network:t,asset:n,amount:B.amount,recipient:B.recipient},s=await this.getPayUrl(e,a);if(!s)throw new M(C);return B.currentPayment.sessionId=s.sessionId,B.currentPayment.status="IN_PROGRESS",B.currentPayment.exchangeId=e,this.initiatePayment(),{url:s.url,openInNewTab:B.openInNewTab}}catch(t){return B.error=t instanceof M?t.message:D.GENERIC_PAYMENT_ERROR,B.isPaymentInProgress=!1,d.showError(B.error),null}},async getBuyStatus(e,t){try{const s=await async function(e){return(await L("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});var n,a;return"SUCCESS"!==s.status&&"FAILED"!==s.status||u.sendEvent({type:"track",event:"SUCCESS"===s.status?"PAY_SUCCESS":"PAY_ERROR",properties:{paymentId:B.paymentId||G,configuration:{network:B.paymentAsset.network,asset:B.paymentAsset.asset,recipient:B.recipient,amount:B.amount},currentPayment:{type:"exchange",exchangeId:null===(n=B.currentPayment)||void 0===n?void 0:n.exchangeId,sessionId:null===(a=B.currentPayment)||void 0===a?void 0:a.sessionId,result:s.txHash}}}),s}catch(s){throw new M(O)}},async updateBuyStatus(e,t){try{const n=await this.getBuyStatus(e,t);B.currentPayment&&(B.currentPayment.status=n.status,B.currentPayment.result=n.txHash),"SUCCESS"!==n.status&&"FAILED"!==n.status||(B.isPaymentInProgress=!1)}catch(n){throw new M(O)}},initiatePayment(){B.isPaymentInProgress=!0,B.paymentId=crypto.randomUUID()},initializeAnalytics(){B.analyticsSet||(B.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",(e=>{var t;if(null!==(t=B.currentPayment)&&void 0!==t&&t.status&&"UNKNOWN"!==B.currentPayment.status){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[B.currentPayment.status];u.sendEvent({type:"track",event:e,properties:{paymentId:B.paymentId||G,configuration:{network:B.paymentAsset.network,asset:B.paymentAsset.asset,recipient:B.recipient,amount:B.amount},currentPayment:{type:B.currentPayment.type,exchangeId:B.currentPayment.exchangeId,sessionId:B.currentPayment.sessionId,result:B.currentPayment.result}}})}})))}},F=f`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  .token-display {
    padding: var(--wui-spacing-s) var(--wui-spacing-m);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-bg-125);
    margin-top: var(--wui-spacing-s);
    margin-bottom: var(--wui-spacing-s);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--wui-spacing-xs);
  }
`;var K=function(e,t,n,a){var s,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let q=e("W3mPayView",class extends x{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=z.state.exchanges,this.isLoading=z.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=p.state.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(z.subscribeKey("exchanges",(e=>this.exchanges=e))),this.unsubscribe.push(z.subscribeKey("isLoading",(e=>this.isLoading=e))),this.unsubscribe.push(p.subscribe((e=>this.connectedWalletInfo=e.connectedWalletInfo))),z.fetchExchanges()}get isWalletConnected(){return"connected"===p.state.status}render(){return v`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="s">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){const e=z.getPaymentAsset();this.networkName=e.network,this.tokenSymbol=e.metadata.symbol,this.amount=z.state.amount.toString()}renderPayWithWallet(){return function(e){const{chainNamespace:t}=a.parseCaipNetworkId(e);return V.includes(t)}(this.networkName)?v`<wui-flex flexDirection="column" gap="s">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`:v``}renderPaymentHeader(){let e=this.networkName;if(this.networkName){const t=i.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.networkName));t&&(e=t.name)}return v`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="large-700" color="fg-100">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="xxs">
            <wui-text variant="paragraph-600" color="fg-100">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${e?v`
                  <wui-text variant="small-500" color="fg-200"> on ${e} </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){var e,t,n;const a=(null===(e=this.connectedWalletInfo)||void 0===e?void 0:e.name)||"connected wallet";return v`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        data-testid="wallet-payment-option"
      >
        <wui-flex alignItems="center" gap="s">
          <wui-wallet-image
            size="sm"
            imageSrc=${I(null===(t=this.connectedWalletInfo)||void 0===t?void 0:t.icon)}
            name=${I(null===(n=this.connectedWalletInfo)||void 0===n?void 0:n.name)}
          ></wui-wallet-image>
          <wui-text variant="paragraph-500" color="inherit">Pay with ${a}</wui-text>
        </wui-flex>
      </wui-list-item>

      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="disconnect"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return v`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="walletPlaceholder"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="paragraph-500" color="inherit">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?v`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:0===this.exchanges.length?v`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-100">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map((e=>v`
        <wui-list-item
          @click=${()=>this.onExchangePayment(e.id)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
        >
          <wui-flex alignItems="center" gap="s">
            ${this.loadingExchangeId===e.id?v`<wui-loading-spinner color="accent-100" size="md"></wui-loading-spinner>`:v`<wui-wallet-image
                  size="sm"
                  imageSrc=${I(e.imageUrl)}
                  name=${e.name}
                ></wui-wallet-image>`}
            <wui-text flexGrow="1" variant="paragraph-500" color="inherit"
              >Pay with ${e.name} <wui-spinner size="sm" color="fg-200"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `))}onWalletPayment(){z.handlePayWithWallet()}async onExchangePayment(e){try{this.loadingExchangeId=e;const t=await z.handlePayWithExchange(e);t&&(await g.open({view:"PayLoading"}),s.openHref(t.url,t.openInNewTab?"_blank":"_self"))}catch(t){console.error("Failed to pay with exchange",t),d.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await o.disconnect(),g.close()}catch{console.error("Failed to disconnect"),d.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}});q.styles=F,K([E()],q.prototype,"amount",void 0),K([E()],q.prototype,"tokenSymbol",void 0),K([E()],q.prototype,"networkName",void 0),K([E()],q.prototype,"exchanges",void 0),K([E()],q.prototype,"isLoading",void 0),K([E()],q.prototype,"loadingExchangeId",void 0),K([E()],q.prototype,"connectedWalletInfo",void 0),e("W3mPayView",q=K([b("w3m-pay-view")],q));const J=f`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }
`;var X=function(e,t,n,a){var s,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Q=e("W3mPayLoadingView",class extends x{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=z.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return v`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){var e;switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;default:"exchange"===(null===(e=z.state.currentPayment)||void 0===e?void 0:e.type)?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet")}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();default:return this.loaderTemplate()}}setupExchangeSubscription(){var e;"exchange"===(null===(e=z.state.currentPayment)||void 0===e?void 0:e.type)&&(this.exchangeSubscription=setInterval((async()=>{var e,t;const n=null===(e=z.state.currentPayment)||void 0===e?void 0:e.exchangeId,a=null===(t=z.state.currentPayment)||void 0===t?void 0:t.sessionId;var s;n&&a&&(await z.updateBuyStatus(n,a),"SUCCESS"===(null===(s=z.state.currentPayment)||void 0===s?void 0:s.status)&&clearInterval(this.exchangeSubscription))}),4e3))}setupSubscription(){z.subscribeKey("isPaymentInProgress",(e=>{var t;e||"in-progress"!==this.paymentState||(z.state.error||null===(t=z.state.currentPayment)||void 0===t||!t.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout((()=>{"disconnected"!==o.state.status&&g.close()}),3e3))})),z.subscribeKey("error",(e=>{e&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())}))}loaderTemplate(){const e=P.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return v`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}successTemplate(){return v`<wui-icon size="xl" color="success-100" name="checkmark"></wui-icon>`}errorTemplate(){return v`<wui-icon size="xl" color="error-100" name="close"></wui-icon>`}});Q.styles=J,X([E()],Q.prototype,"loadingMessage",void 0),X([E()],Q.prototype,"subMessage",void 0),X([E()],Q.prototype,"paymentState",void 0),e("W3mPayLoadingView",Q=X([b("w3m-pay-loading-view")],Q)),e("baseETH",{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}}),e("baseUSDC",{network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}}),e("baseSepoliaETH",{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}})}}}));
