System.register(["./index-legacy-CV5l4Qpz.js","./if-defined-legacy-D6M4dwVv.js","./index-legacy-DLy3vKsn.js"],(function(e,t){"use strict";var i,r,a,n,s,w,c,o;return{setters:[e=>{i=e.i,r=e.a,a=e.R,n=e.o,s=e.x},e=>{w=e.r,c=e.c},e=>{o=e.T}],execute:function(){const t=i`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var m=function(e,t,i,r){var a,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var w=e.length-1;w>=0;w--)(a=e[w])&&(s=(n<3?a(s):n>3?a(t,i,s):a(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let l=e("W",class extends r{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=a.state.view,this.viewDirection="",this.unsubscribe.push(a.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){var e;this.resizeObserver=new ResizeObserver((([e])=>{const t=`${null==e?void 0:e.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout((()=>{this.prevHeight=t,this.style.animation="unset"}),n.ANIMATION_DURATIONS.ModalHeight)})),null===(e=this.resizeObserver)||void 0===e||e.observe(this.getWrapper())}disconnectedCallback(){var e;null===(e=this.resizeObserver)||void 0===e||e.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return s`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return s`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return s`<w3m-account-view></w3m-account-view>`;case"AllWallets":return s`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return s`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return s`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return s`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return s`<w3m-connect-view></w3m-connect-view>`;case"Create":return s`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return s`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return s`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return s`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return s`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return s`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return s`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return s`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return s`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return s`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return s`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return s`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return s`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return s`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return s`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return s`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return s`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return s`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return s`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return s`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return s`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return s`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return s`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return s`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return s`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return s`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return s`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return s`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return s`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return s`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return s`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return s`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return s`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return s`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return s`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return s`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return s`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return s`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return s`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return s`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return s`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return s`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return s`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return s`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return s`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return s`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return s`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return s`<w3m-pay-loading-view></w3m-pay-loading-view>`}}onViewChange(e){o.hide();let t=n.VIEW_DIRECTION.Next;const{history:i}=a.state;i.length<this.prevHistoryLength&&(t=n.VIEW_DIRECTION.Prev),this.prevHistoryLength=i.length,this.viewDirection=t,setTimeout((()=>{this.view=e}),n.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("div")}});l.styles=t,m([w()],l.prototype,"view",void 0),m([w()],l.prototype,"viewDirection",void 0),e("W",l=m([c("w3m-router")],l))}}}));
