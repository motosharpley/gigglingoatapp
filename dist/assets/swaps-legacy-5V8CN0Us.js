System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js","./index-legacy-CPUiEAWY.js","./index-legacy-CC6ML0jk.js","./index-legacy-5NOYxmWo.js","./index-legacy-CQNc3Opc.js","./index-legacy-BRJBVyH1.js","./index-legacy-Brpa9nMA.js","./index-legacy-aclEvsjH.js","./index-legacy-CeJrug3e.js","./index-legacy-7oYBEIjM.js","./ref-legacy-Dv2CBelb.js"],(function(e,t){"use strict";var o,i,n,a,r,s,l,u,c,p,d,w,h,g,x,k,v,b,m,f;return{setters:[e=>{o=e.i,i=e.a,n=e.e,a=e.N,r=e.x,s=e.b,l=e.f,u=e.R,c=e.A,p=e.d,d=e.M,w=e.W,h=e.r,g=e.h},e=>{x=e.r,k=e.n,v=e.c,b=e.U},null,e=>{m=e.M},null,e=>{f=e.S},null,null,null,null,null,null],execute:function(){const t={numericInputKeyDown(e,t,o){const i=e.metaKey||e.ctrlKey,n=e.key,a=n.toLocaleLowerCase(),r=","===n,s="."===n,l=n>="0"&&n<="9";!i&&("a"===a||"c"===a||"v"===a||"x"===a)&&e.preventDefault(),"0"!==t||r||s||"0"!==n||e.preventDefault(),"0"===t&&l&&(o(n),e.preventDefault()),(r||s)&&(t||(o("0."),e.preventDefault()),(null!=t&&t.includes(".")||null!=t&&t.includes(","))&&e.preventDefault()),l||["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"].includes(n)||s||r||e.preventDefault()}},T=o`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var y=function(e,t,o,i){var n,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,o,r):n(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};const S=s.CONVERT_SLIPPAGE_TOLERANCE;let $=class extends i{constructor(){var e;super(),this.unsubscribe=[],this.networkName=null===(e=n.state.activeCaipNetwork)||void 0===e?void 0:e.name,this.detailsOpen=!1,this.sourceToken=f.state.sourceToken,this.toToken=f.state.toToken,this.toTokenAmount=f.state.toTokenAmount,this.sourceTokenPriceInUSD=f.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=f.state.toTokenPriceInUSD,this.priceImpact=f.state.priceImpact,this.maxSlippage=f.state.maxSlippage,this.networkTokenSymbol=f.state.networkTokenSymbol,this.inputError=f.state.inputError,this.unsubscribe.push(f.subscribe((e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError})))}render(){const e=this.toTokenAmount&&this.maxSlippage?a.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const t=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return r`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${b.formatNumberToLocalString(t,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${b.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?r`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  ${this.priceImpact?r` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${b.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?r`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${"Max slippage sets the minimum amount you must receive for the transaction to proceed. "+(e?`Transaction will be reversed if you receive less than ${b.formatNumberToLocalString(e,6)} ${this.toToken.symbol} due to price changes.`:"")}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${b.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${S}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};$.styles=[T],y([x()],$.prototype,"networkName",void 0),y([k()],$.prototype,"detailsOpen",void 0),y([x()],$.prototype,"sourceToken",void 0),y([x()],$.prototype,"toToken",void 0),y([x()],$.prototype,"toTokenAmount",void 0),y([x()],$.prototype,"sourceTokenPriceInUSD",void 0),y([x()],$.prototype,"toTokenPriceInUSD",void 0),y([x()],$.prototype,"priceImpact",void 0),y([x()],$.prototype,"maxSlippage",void 0),y([x()],$.prototype,"networkTokenSymbol",void 0),y([x()],$.prototype,"inputError",void 0),$=y([v("w3m-swap-details")],$);const A=o`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var I=function(e,t,o,i){var n,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,o,r):n(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let C=class extends i{constructor(){super(...arguments),this.target="sourceToken"}render(){return r`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return r`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};C.styles=[A],I([k()],C.prototype,"target",void 0),C=I([v("w3m-swap-input-skeleton")],C);const D=o`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var P=function(e,t,o,i){var n,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,o,r):n(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let j=class extends i{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",t=a.bigNumber(e).gt("0");return r`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${b.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){return t.numericInputKeyDown(e,this.value,(e=>{var t;return null===(t=this.onSetAmount)||void 0===t?void 0:t.call(this,this.target,e)}))}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const t=e.target.value.replace(/[^0-9.]/gu,"");","===t||"."===t?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){var e;null===(e=this.onSetMaxValue)||void 0===e||e.call(this,this.target,this.balance)}templateTokenSelectButton(){return this.token?r`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:r` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const e=a.multiply(this.balance,this.price),t=!!e&&(null==e?void 0:e.gt(5e-5));return r`
      ${t?r`<wui-text variant="small-400" color="fg-200">
            ${b.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?r` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:r` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){l.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),u.push("SwapSelectToken",{target:this.target})}onBuyToken(){u.push("OnRampProviders")}};j.styles=[D],P([k()],j.prototype,"focused",void 0),P([k()],j.prototype,"balance",void 0),P([k()],j.prototype,"value",void 0),P([k()],j.prototype,"price",void 0),P([k()],j.prototype,"marketValue",void 0),P([k()],j.prototype,"disabled",void 0),P([k()],j.prototype,"target",void 0),P([k()],j.prototype,"token",void 0),P([k()],j.prototype,"onSetAmount",void 0),P([k()],j.prototype,"onSetMaxValue",void 0),j=P([v("w3m-swap-input")],j);const E=o`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var N=function(e,t,o,i){var n,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,o,r):n(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let U=e("W3mSwapView",class extends i{constructor(){var e,t;super(),this.unsubscribe=[],this.initialParams=null===(e=u.state.data)||void 0===e?void 0:e.swap,this.detailsOpen=!1,this.caipAddress=c.state.caipAddress,this.caipNetworkId=null===(t=n.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId,this.initialized=f.state.initialized,this.loadingQuote=f.state.loadingQuote,this.loadingPrices=f.state.loadingPrices,this.loadingTransaction=f.state.loadingTransaction,this.sourceToken=f.state.sourceToken,this.sourceTokenAmount=f.state.sourceTokenAmount,this.sourceTokenPriceInUSD=f.state.sourceTokenPriceInUSD,this.toToken=f.state.toToken,this.toTokenAmount=f.state.toTokenAmount,this.toTokenPriceInUSD=f.state.toTokenPriceInUSD,this.inputError=f.state.inputError,this.fetchError=f.state.fetchError,this.onDebouncedGetSwapCalldata=p.debounce((async()=>{await f.swapTokens()}),200),n.subscribeKey("activeCaipNetwork",(e=>this.onCaipNetworkChange({newCaipNetwork:e,resetSwapState:!0,initializeSwapState:!1}))),c.subscribeKey("caipAddress",(e=>this.onCaipAddressChange({newCaipAddress:e,resetSwapState:!0,initializeSwapState:!1}))),this.unsubscribe.push(n.subscribeKey("activeCaipNetwork",(e=>this.onCaipNetworkChange({newCaipNetwork:e,resetSwapState:!1,initializeSwapState:!0}))),c.subscribeKey("caipAddress",(e=>this.onCaipAddressChange({newCaipAddress:e,resetSwapState:!1,initializeSwapState:!0}))),d.subscribeKey("open",(e=>{e||f.resetState()})),u.subscribeKey("view",(e=>{e.includes("Swap")||f.resetValues()})),f.subscribe((e=>{this.initialized=e.initialized,this.loadingQuote=e.loadingQuote,this.loadingPrices=e.loadingPrices,this.loadingTransaction=e.loadingTransaction,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.fetchError=e.fetchError})))}async firstUpdated(){f.initializeState(),this.watchTokensAndValues(),await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach((e=>null==e?void 0:e())),clearInterval(this.interval)}render(){return r`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval((()=>{f.getNetworkTokenPrice(),f.getMyTokensWithBalance(),f.swapTokens()}),1e4)}templateSwap(){return r`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return r`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return r`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,t){var o,i;const n=null===(o=f.state.myTokensWithBalance)||void 0===o?void 0:o.find((e=>(null==e?void 0:e.address)===(null==t?void 0:t.address))),s="toToken"===e?this.toTokenAmount:this.sourceTokenAmount,l="toToken"===e?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,u=a.parseLocalStringToNumber(s)*l;return r`<w3m-swap-input
      .value=${"toToken"===e?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${"toToken"===e}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${null==n||null===(i=n.quantity)||void 0===i?void 0:i.numeric}
      .price=${null==n?void 0:n.price}
      .marketValue=${u}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,t){const o=a.bigNumber(t||"0");this.handleChangeAmount(e,o.gt(0)?o.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?r`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(e,t){f.clearError(),"sourceToken"===e?f.setSourceTokenAmount(t):f.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,o=this.loadingQuote||this.loadingPrices||this.loadingTransaction,i=o||e||t||this.inputError;return r` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${o}
        .disabled=${i}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){f.switchTokens()}async onSwapPreview(){var e,t,o;const i=n.state.activeChain;this.fetchError&&await f.swapTokens(),l.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:(null===(e=this.sourceToken)||void 0===e?void 0:e.symbol)||"",swapToToken:(null===(t=this.toToken)||void 0===t?void 0:t.symbol)||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:(null===(o=c.state.preferredAccountTypes)||void 0===o?void 0:o[i])===w.ACCOUNT_TYPES.SMART_ACCOUNT}}),u.push("SwapPreview")}async handleSwapParameters(){if(this.initialParams){if(!f.state.initialized){const e=new Promise((e=>{const t=f.subscribeKey("initialized",(o=>{o&&(null==t||t(),e())}))}));await e}await this.setSwapParameters(this.initialParams)}}async setSwapParameters({amount:e,fromToken:t,toToken:o}){if(!f.state.tokens||!f.state.myTokensWithBalance){const e=new Promise((e=>{const t=f.subscribeKey("myTokensWithBalance",(o=>{o&&o.length>0&&(null==t||t(),e())}));setTimeout((()=>{null==t||t(),e()}),5e3)}));await e}const i=[...f.state.tokens||[],...f.state.myTokensWithBalance||[]];if(t){const e=i.find((e=>e.symbol.toLowerCase()===t.toLowerCase()));e&&f.setSourceToken(e)}if(o){const e=i.find((e=>e.symbol.toLowerCase()===o.toLowerCase()));e&&f.setToToken(e)}e&&!isNaN(Number(e))&&f.setSourceTokenAmount(e)}onCaipAddressChange({newCaipAddress:e,resetSwapState:t,initializeSwapState:o}){this.caipAddress!==e&&(this.caipAddress=e,t&&f.resetState(),o&&f.initializeState())}onCaipNetworkChange({newCaipNetwork:e,resetSwapState:t,initializeSwapState:o}){this.caipNetworkId!==(null==e?void 0:e.caipNetworkId)&&(this.caipNetworkId=null==e?void 0:e.caipNetworkId,t&&f.resetState(),o&&f.initializeState())}});U.styles=E,N([k({type:Object})],U.prototype,"initialParams",void 0),N([x()],U.prototype,"interval",void 0),N([x()],U.prototype,"detailsOpen",void 0),N([x()],U.prototype,"caipAddress",void 0),N([x()],U.prototype,"caipNetworkId",void 0),N([x()],U.prototype,"initialized",void 0),N([x()],U.prototype,"loadingQuote",void 0),N([x()],U.prototype,"loadingPrices",void 0),N([x()],U.prototype,"loadingTransaction",void 0),N([x()],U.prototype,"sourceToken",void 0),N([x()],U.prototype,"sourceTokenAmount",void 0),N([x()],U.prototype,"sourceTokenPriceInUSD",void 0),N([x()],U.prototype,"toToken",void 0),N([x()],U.prototype,"toTokenAmount",void 0),N([x()],U.prototype,"toTokenPriceInUSD",void 0),N([x()],U.prototype,"inputError",void 0),N([x()],U.prototype,"fetchError",void 0),e("W3mSwapView",U=N([v("w3m-swap-view")],U));const L=o`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var B=function(e,t,o,i){var n,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,o,r):n(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let O=e("W3mSwapPreviewView",class extends i{constructor(){var e,t;super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=f.state.approvalTransaction,this.swapTransaction=f.state.swapTransaction,this.sourceToken=f.state.sourceToken,this.sourceTokenAmount=null!==(e=f.state.sourceTokenAmount)&&void 0!==e?e:"",this.sourceTokenPriceInUSD=f.state.sourceTokenPriceInUSD,this.toToken=f.state.toToken,this.toTokenAmount=null!==(t=f.state.toTokenAmount)&&void 0!==t?t:"",this.toTokenPriceInUSD=f.state.toTokenPriceInUSD,this.caipNetwork=n.state.activeCaipNetwork,this.balanceSymbol=c.state.balanceSymbol,this.inputError=f.state.inputError,this.loadingQuote=f.state.loadingQuote,this.loadingApprovalTransaction=f.state.loadingApprovalTransaction,this.loadingBuildTransaction=f.state.loadingBuildTransaction,this.loadingTransaction=f.state.loadingTransaction,this.unsubscribe.push(c.subscribeKey("balanceSymbol",(e=>{this.balanceSymbol!==e&&u.goBack()})),n.subscribeKey("activeCaipNetwork",(e=>{this.caipNetwork!==e&&(this.caipNetwork=e)})),f.subscribe((e=>{var t,o;this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=null!==(t=e.sourceTokenAmount)&&void 0!==t?t:"",this.toTokenAmount=null!==(o=e.toTokenAmount)&&void 0!==o?o:"",this.inputError=e.inputError,e.inputError&&u.goBack(),this.loadingQuote=e.loadingQuote,this.loadingApprovalTransaction=e.loadingApprovalTransaction,this.loadingBuildTransaction=e.loadingBuildTransaction,this.loadingTransaction=e.loadingTransaction})))}firstUpdated(){f.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach((e=>null==e?void 0:e())),clearInterval(this.interval)}render(){return r`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval((()=>{f.getApprovalLoadingState()||f.getTransaction()}),1e4)}templateSwap(){var e,t,o,i;const n=`${b.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${null===(e=this.sourceToken)||void 0===e?void 0:e.symbol}`,a=`${b.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${null===(t=this.toToken)||void 0===t?void 0:t.symbol}`,s=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,l=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD,u=b.formatNumberToLocalString(s),c=b.formatNumberToLocalString(l),p=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return r`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${u}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${n}
              imageSrc=${null===(o=this.sourceToken)||void 0===o?void 0:o.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${c}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${a}
              imageSrc=${null===(i=this.toToken)||void 0===i?void 0:i.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${p}
            ?disabled=${p}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?r`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){u.goBack()}onSendTransaction(){this.approvalTransaction?f.sendTransactionForApproval(this.approvalTransaction):f.sendTransactionForSwap(this.swapTransaction)}});O.styles=L,B([x()],O.prototype,"interval",void 0),B([x()],O.prototype,"detailsOpen",void 0),B([x()],O.prototype,"approvalTransaction",void 0),B([x()],O.prototype,"swapTransaction",void 0),B([x()],O.prototype,"sourceToken",void 0),B([x()],O.prototype,"sourceTokenAmount",void 0),B([x()],O.prototype,"sourceTokenPriceInUSD",void 0),B([x()],O.prototype,"toToken",void 0),B([x()],O.prototype,"toTokenAmount",void 0),B([x()],O.prototype,"toTokenPriceInUSD",void 0),B([x()],O.prototype,"caipNetwork",void 0),B([x()],O.prototype,"balanceSymbol",void 0),B([x()],O.prototype,"inputError",void 0),B([x()],O.prototype,"loadingQuote",void 0),B([x()],O.prototype,"loadingApprovalTransaction",void 0),B([x()],O.prototype,"loadingBuildTransaction",void 0),B([x()],O.prototype,"loadingTransaction",void 0),e("W3mSwapPreviewView",O=B([v("w3m-swap-preview-view")],O));const R=o`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var z=function(e,t,o,i){var n,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,o,r):n(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let W=class extends i{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.visible=!0:this.visible=!1}))}),{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e;if(!this.visible)return null;const t=this.amount&&this.price?null===(e=a.multiply(this.price,this.amount))||void 0===e?void 0:e.toFixed(3):null;return r`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${t?r`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${b.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?r`<wui-text variant="small-400" color="fg-200">
                  ${b.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?r`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?r`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};W.styles=[h,g,R],z([k()],W.prototype,"imageSrc",void 0),z([k()],W.prototype,"name",void 0),z([k()],W.prototype,"symbol",void 0),z([k()],W.prototype,"price",void 0),z([k()],W.prototype,"amount",void 0),z([x()],W.prototype,"visible",void 0),z([x()],W.prototype,"imageError",void 0),W=z([v("wui-token-list-item")],W);const V=o`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var _=function(e,t,o,i){var n,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,o,r):n(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let K=e("W3mSwapSelectTokenView",class extends i{constructor(){var e;super(),this.unsubscribe=[],this.targetToken=null===(e=u.state.data)||void 0===e?void 0:e.target,this.sourceToken=f.state.sourceToken,this.sourceTokenAmount=f.state.sourceTokenAmount,this.toToken=f.state.toToken,this.myTokensWithBalance=f.state.myTokensWithBalance,this.popularTokens=f.state.popularTokens,this.searchValue="",this.unsubscribe.push(f.subscribe((e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance})))}updated(){var e,t;const o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".suggested-tokens-container");null==o||o.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(".tokens");null==i||i.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var e,t;super.disconnectedCallback();const o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".suggested-tokens-container"),i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(".tokens");null==o||o.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),null==i||i.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return r`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){"sourceToken"===this.targetToken?f.setSourceToken(e):(f.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&f.swapTokens()),u.goBack()}templateSearchInput(){return r`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],t=this.popularTokens?this.popularTokens:[],o=this.filterTokensWithText(e,this.searchValue),i=this.filterTokensWithText(t,this.searchValue);return r`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${(null==o?void 0:o.length)>0?r`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${o.map((e=>{var t,o,i;const n=e.symbol===(null===(t=this.sourceToken)||void 0===t?void 0:t.symbol)||e.symbol===(null===(o=this.toToken)||void 0===o?void 0:o.symbol);return r`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${e.symbol}"
                      name=${e.name}
                      ?disabled=${n}
                      symbol=${e.symbol}
                      price=${null==e?void 0:e.price}
                      amount=${null==e||null===(i=e.quantity)||void 0===i?void 0:i.numeric}
                      imageSrc=${e.logoUri}
                      @click=${()=>{n||this.onSelectToken(e)}}
                    >
                    </wui-token-list-item>
                  `}))}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${(null==i?void 0:i.length)>0?i.map((e=>r`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${e.symbol}"
                    name=${e.name}
                    symbol=${e.symbol}
                    imageSrc=${e.logoUri}
                    @click=${()=>this.onSelectToken(e)}
                  >
                  </wui-token-list-item>
                `)):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=f.state.suggestedTokens?f.state.suggestedTokens.slice(0,8):null;return e?r`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map((e=>r`
            <wui-token-button
              text=${e.symbol}
              imageSrc=${e.logoUri}
              @click=${()=>this.onSelectToken(e)}
            >
            </wui-token-button>
          `))}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){var e;const t=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".suggested-tokens-container");t&&(t.style.setProperty("--suggested-tokens-scroll--left-opacity",m.interpolate([0,100],[0,1],t.scrollLeft).toString()),t.style.setProperty("--suggested-tokens-scroll--right-opacity",m.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString()))}handleTokenListScroll(){var e;const t=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".tokens");t&&(t.style.setProperty("--tokens-scroll--top-opacity",m.interpolate([0,100],[0,1],t.scrollTop).toString()),t.style.setProperty("--tokens-scroll--bottom-opacity",m.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter((e=>`${e.symbol} ${e.name} ${e.address}`.toLowerCase().includes(t.toLowerCase())))}});K.styles=V,_([x()],K.prototype,"interval",void 0),_([x()],K.prototype,"targetToken",void 0),_([x()],K.prototype,"sourceToken",void 0),_([x()],K.prototype,"sourceTokenAmount",void 0),_([x()],K.prototype,"toToken",void 0),_([x()],K.prototype,"myTokensWithBalance",void 0),_([x()],K.prototype,"popularTokens",void 0),_([x()],K.prototype,"searchValue",void 0),e("W3mSwapSelectTokenView",K=_([v("w3m-swap-select-token-view")],K))}}}));
