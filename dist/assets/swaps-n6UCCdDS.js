import{i as A,a as C,e as I,N as E,x as u,b as V,f as O,R as T,A as P,d as K,M,W as F,r as Q,h as q}from"./index-C4QAg8YX.js";import{r as s,n as h,c as D,U as x}from"./if-defined-BYYrXBY0.js";import"./index-9f6LuDk9.js";import{M as N}from"./index-EXYhvN4G.js";import"./index-Dc8ntwLA.js";import{S as i}from"./index-3xaCB5SL.js";import"./index-B9RM8SMB.js";import"./index-BH2MqK48.js";import"./index-BRbX2CYq.js";import"./index-BTa2w2R5.js";import"./index-DQcN5B-F.js";import"./ref-DqiK23uq.js";const H={numericInputKeyDown(l,e,o){const n=["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"],a=l.metaKey||l.ctrlKey,t=l.key,r=t.toLocaleLowerCase(),c=r==="a",U=r==="c",W=r==="v",z=r==="x",j=t===",",L=t===".",R=t>="0"&&t<="9";!a&&(c||U||W||z)&&l.preventDefault(),e==="0"&&!j&&!L&&t==="0"&&l.preventDefault(),e==="0"&&R&&(o(t),l.preventDefault()),(j||L)&&(e||(o("0."),l.preventDefault()),(e?.includes(".")||e?.includes(","))&&l.preventDefault()),!R&&!n.includes(t)&&!L&&!j&&l.preventDefault()}},G=A`
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
`;var b=function(l,e,o,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,o,n);else for(var c=l.length-1;c>=0;c--)(r=l[c])&&(t=(a<3?r(t):a>3?r(e,o,t):r(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t};const Y=V.CONVERT_SLIPPAGE_TOLERANCE;let f=class extends C{constructor(){super(),this.unsubscribe=[],this.networkName=I.state.activeCaipNetwork?.name,this.detailsOpen=!1,this.sourceToken=i.state.sourceToken,this.toToken=i.state.toToken,this.toTokenAmount=i.state.toTokenAmount,this.sourceTokenPriceInUSD=i.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=i.state.toTokenPriceInUSD,this.priceImpact=i.state.priceImpact,this.maxSlippage=i.state.maxSlippage,this.networkTokenSymbol=i.state.networkTokenSymbol,this.inputError=i.state.inputError,this.unsubscribe.push(i.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError}))}render(){const e=this.toTokenAmount&&this.maxSlippage?E.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const o=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return u`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${x.formatNumberToLocalString(o,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${x.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?u`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  ${this.priceImpact?u` <wui-flex flexDirection="column" gap="xs">
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
                              ${x.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?u`<wui-flex flexDirection="column" gap="xs">
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
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${e?`Transaction will be reversed if you receive less than ${x.formatNumberToLocalString(e,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${x.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${Y}%
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
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};f.styles=[G];b([s()],f.prototype,"networkName",void 0);b([h()],f.prototype,"detailsOpen",void 0);b([s()],f.prototype,"sourceToken",void 0);b([s()],f.prototype,"toToken",void 0);b([s()],f.prototype,"toTokenAmount",void 0);b([s()],f.prototype,"sourceTokenPriceInUSD",void 0);b([s()],f.prototype,"toTokenPriceInUSD",void 0);b([s()],f.prototype,"priceImpact",void 0);b([s()],f.prototype,"maxSlippage",void 0);b([s()],f.prototype,"networkTokenSymbol",void 0);b([s()],f.prototype,"inputError",void 0);f=b([D("w3m-swap-details")],f);const X=A`
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
`;var B=function(l,e,o,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,o,n);else for(var c=l.length-1;c>=0;c--)(r=l[c])&&(t=(a<3?r(t):a>3?r(e,o,t):r(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t};let _=class extends C{constructor(){super(...arguments),this.target="sourceToken"}render(){return u`
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
    `}templateTokenSelectButton(){return u`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};_.styles=[X];B([h()],_.prototype,"target",void 0);_=B([D("w3m-swap-input-skeleton")],_);const Z=A`
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
`;var v=function(l,e,o,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,o,n);else for(var c=l.length-1;c>=0;c--)(r=l[c])&&(t=(a<3?r(t):a>3?r(e,o,t):r(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t};const J=5e-5;let m=class extends C{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",o=E.bigNumber(e).gt("0");return u`
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
            ${o?`$${x.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){return H.numericInputKeyDown(e,this.value,o=>this.onSetAmount?.(this.target,o))}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const o=e.target.value.replace(/[^0-9.]/gu,"");o===","||o==="."?this.onSetAmount(this.target,"0."):o.endsWith(",")?this.onSetAmount(this.target,o.replace(",",".")):this.onSetAmount(this.target,o)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?u`
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
    `:u` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const e=E.multiply(this.balance,this.price),o=e?e?.gt(J):!1;return u`
      ${o?u`<wui-text variant="small-400" color="fg-200">
            ${x.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(o):null}
    `}tokenActionButtonTemplate(e){return e?u` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:u` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){O.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),T.push("SwapSelectToken",{target:this.target})}onBuyToken(){T.push("OnRampProviders")}};m.styles=[Z];v([h()],m.prototype,"focused",void 0);v([h()],m.prototype,"balance",void 0);v([h()],m.prototype,"value",void 0);v([h()],m.prototype,"price",void 0);v([h()],m.prototype,"marketValue",void 0);v([h()],m.prototype,"disabled",void 0);v([h()],m.prototype,"target",void 0);v([h()],m.prototype,"token",void 0);v([h()],m.prototype,"onSetAmount",void 0);v([h()],m.prototype,"onSetMaxValue",void 0);m=v([D("w3m-swap-input")],m);const ee=A`
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
`;var w=function(l,e,o,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,o,n);else for(var c=l.length-1;c>=0;c--)(r=l[c])&&(t=(a<3?r(t):a>3?r(e,o,t):r(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t};let p=class extends C{constructor(){super(),this.unsubscribe=[],this.initialParams=T.state.data?.swap,this.detailsOpen=!1,this.caipAddress=P.state.caipAddress,this.caipNetworkId=I.state.activeCaipNetwork?.caipNetworkId,this.initialized=i.state.initialized,this.loadingQuote=i.state.loadingQuote,this.loadingPrices=i.state.loadingPrices,this.loadingTransaction=i.state.loadingTransaction,this.sourceToken=i.state.sourceToken,this.sourceTokenAmount=i.state.sourceTokenAmount,this.sourceTokenPriceInUSD=i.state.sourceTokenPriceInUSD,this.toToken=i.state.toToken,this.toTokenAmount=i.state.toTokenAmount,this.toTokenPriceInUSD=i.state.toTokenPriceInUSD,this.inputError=i.state.inputError,this.fetchError=i.state.fetchError,this.onDebouncedGetSwapCalldata=K.debounce(async()=>{await i.swapTokens()},200),I.subscribeKey("activeCaipNetwork",e=>this.onCaipNetworkChange({newCaipNetwork:e,resetSwapState:!0,initializeSwapState:!1})),P.subscribeKey("caipAddress",e=>this.onCaipAddressChange({newCaipAddress:e,resetSwapState:!0,initializeSwapState:!1})),this.unsubscribe.push(I.subscribeKey("activeCaipNetwork",e=>this.onCaipNetworkChange({newCaipNetwork:e,resetSwapState:!1,initializeSwapState:!0})),P.subscribeKey("caipAddress",e=>this.onCaipAddressChange({newCaipAddress:e,resetSwapState:!1,initializeSwapState:!0})),M.subscribeKey("open",e=>{e||i.resetState()}),T.subscribeKey("view",e=>{e.includes("Swap")||i.resetValues()}),i.subscribe(e=>{this.initialized=e.initialized,this.loadingQuote=e.loadingQuote,this.loadingPrices=e.loadingPrices,this.loadingTransaction=e.loadingTransaction,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.fetchError=e.fetchError}))}async firstUpdated(){i.initializeState(),this.watchTokensAndValues(),await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach(e=>e?.()),clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{i.getNetworkTokenPrice(),i.getMyTokensWithBalance(),i.swapTokens()},1e4)}templateSwap(){return u`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":!this.sourceToken||!this.toToken?"Select token":this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount"}templateReplaceTokensButton(){return u`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return u`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,o){const n=i.state.myTokensWithBalance?.find(c=>c?.address===o?.address),a=e==="toToken"?this.toTokenAmount:this.sourceTokenAmount,t=e==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,r=E.parseLocalStringToNumber(a)*t;return u`<w3m-swap-input
      .value=${e==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${e==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${o}
      .balance=${n?.quantity?.numeric}
      .price=${n?.price}
      .marketValue=${r}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,o){const n=E.bigNumber(o||"0");this.handleChangeAmount(e,n.gt(0)?n.toFixed(20):"0")}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:u`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(e,o){i.clearError(),e==="sourceToken"?i.setSourceTokenAmount(o):i.setToTokenAmount(o),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,o=!this.sourceTokenAmount,n=this.loadingQuote||this.loadingPrices||this.loadingTransaction,a=n||e||o||this.inputError;return u` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${n}
        .disabled=${a}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){i.switchTokens()}async onSwapPreview(){const e=I.state.activeChain;this.fetchError&&await i.swapTokens(),O.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:P.state.preferredAccountTypes?.[e]===F.ACCOUNT_TYPES.SMART_ACCOUNT}}),T.push("SwapPreview")}async handleSwapParameters(){this.initialParams&&(i.state.initialized||await new Promise(o=>{const n=i.subscribeKey("initialized",a=>{a&&(n?.(),o())})}),await this.setSwapParameters(this.initialParams))}async setSwapParameters({amount:e,fromToken:o,toToken:n}){(!i.state.tokens||!i.state.myTokensWithBalance)&&await new Promise(r=>{const c=i.subscribeKey("myTokensWithBalance",U=>{U&&U.length>0&&(c?.(),r())});setTimeout(()=>{c?.(),r()},5e3)});const a=[...i.state.tokens||[],...i.state.myTokensWithBalance||[]];if(o){const t=a.find(r=>r.symbol.toLowerCase()===o.toLowerCase());t&&i.setSourceToken(t)}if(n){const t=a.find(r=>r.symbol.toLowerCase()===n.toLowerCase());t&&i.setToToken(t)}e&&!isNaN(Number(e))&&i.setSourceTokenAmount(e)}onCaipAddressChange({newCaipAddress:e,resetSwapState:o,initializeSwapState:n}){this.caipAddress!==e&&(this.caipAddress=e,o&&i.resetState(),n&&i.initializeState())}onCaipNetworkChange({newCaipNetwork:e,resetSwapState:o,initializeSwapState:n}){this.caipNetworkId!==e?.caipNetworkId&&(this.caipNetworkId=e?.caipNetworkId,o&&i.resetState(),n&&i.initializeState())}};p.styles=ee;w([h({type:Object})],p.prototype,"initialParams",void 0);w([s()],p.prototype,"interval",void 0);w([s()],p.prototype,"detailsOpen",void 0);w([s()],p.prototype,"caipAddress",void 0);w([s()],p.prototype,"caipNetworkId",void 0);w([s()],p.prototype,"initialized",void 0);w([s()],p.prototype,"loadingQuote",void 0);w([s()],p.prototype,"loadingPrices",void 0);w([s()],p.prototype,"loadingTransaction",void 0);w([s()],p.prototype,"sourceToken",void 0);w([s()],p.prototype,"sourceTokenAmount",void 0);w([s()],p.prototype,"sourceTokenPriceInUSD",void 0);w([s()],p.prototype,"toToken",void 0);w([s()],p.prototype,"toTokenAmount",void 0);w([s()],p.prototype,"toTokenPriceInUSD",void 0);w([s()],p.prototype,"inputError",void 0);w([s()],p.prototype,"fetchError",void 0);p=w([D("w3m-swap-view")],p);const te=A`
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
`;var g=function(l,e,o,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,o,n);else for(var c=l.length-1;c>=0;c--)(r=l[c])&&(t=(a<3?r(t):a>3?r(e,o,t):r(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t};let d=class extends C{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=i.state.approvalTransaction,this.swapTransaction=i.state.swapTransaction,this.sourceToken=i.state.sourceToken,this.sourceTokenAmount=i.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=i.state.sourceTokenPriceInUSD,this.toToken=i.state.toToken,this.toTokenAmount=i.state.toTokenAmount??"",this.toTokenPriceInUSD=i.state.toTokenPriceInUSD,this.caipNetwork=I.state.activeCaipNetwork,this.balanceSymbol=P.state.balanceSymbol,this.inputError=i.state.inputError,this.loadingQuote=i.state.loadingQuote,this.loadingApprovalTransaction=i.state.loadingApprovalTransaction,this.loadingBuildTransaction=i.state.loadingBuildTransaction,this.loadingTransaction=i.state.loadingTransaction,this.unsubscribe.push(P.subscribeKey("balanceSymbol",e=>{this.balanceSymbol!==e&&T.goBack()}),I.subscribeKey("activeCaipNetwork",e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),i.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.inputError=e.inputError,e.inputError&&T.goBack(),this.loadingQuote=e.loadingQuote,this.loadingApprovalTransaction=e.loadingApprovalTransaction,this.loadingBuildTransaction=e.loadingBuildTransaction,this.loadingTransaction=e.loadingTransaction}))}firstUpdated(){i.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(e=>e?.()),clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{i.getApprovalLoadingState()||i.getTransaction()},1e4)}templateSwap(){const e=`${x.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,o=`${x.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,n=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,a=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD,t=x.formatNumberToLocalString(n),r=x.formatNumberToLocalString(a),c=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return u`
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
              <wui-text variant="paragraph-400" color="fg-100">$${t}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${this.sourceToken?.logoUri}
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
              <wui-text variant="paragraph-400" color="fg-100">$${r}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${o}
              imageSrc=${this.toToken?.logoUri}
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
            ?loading=${c}
            ?disabled=${c}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:u`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){T.goBack()}onSendTransaction(){this.approvalTransaction?i.sendTransactionForApproval(this.approvalTransaction):i.sendTransactionForSwap(this.swapTransaction)}};d.styles=te;g([s()],d.prototype,"interval",void 0);g([s()],d.prototype,"detailsOpen",void 0);g([s()],d.prototype,"approvalTransaction",void 0);g([s()],d.prototype,"swapTransaction",void 0);g([s()],d.prototype,"sourceToken",void 0);g([s()],d.prototype,"sourceTokenAmount",void 0);g([s()],d.prototype,"sourceTokenPriceInUSD",void 0);g([s()],d.prototype,"toToken",void 0);g([s()],d.prototype,"toTokenAmount",void 0);g([s()],d.prototype,"toTokenPriceInUSD",void 0);g([s()],d.prototype,"caipNetwork",void 0);g([s()],d.prototype,"balanceSymbol",void 0);g([s()],d.prototype,"inputError",void 0);g([s()],d.prototype,"loadingQuote",void 0);g([s()],d.prototype,"loadingApprovalTransaction",void 0);g([s()],d.prototype,"loadingBuildTransaction",void 0);g([s()],d.prototype,"loadingTransaction",void 0);d=g([D("w3m-swap-preview-view")],d);const oe=A`
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
`;var $=function(l,e,o,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,o,n);else for(var c=l.length-1;c>=0;c--)(r=l[c])&&(t=(a<3?r(t):a>3?r(e,o,t):r(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t};let y=class extends C{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;const e=this.amount&&this.price?E.multiply(this.price,this.amount)?.toFixed(3):null;return u`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${e?u`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${x.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?u`<wui-text variant="small-400" color="fg-200">
                  ${x.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?u`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?u`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};y.styles=[Q,q,oe];$([h()],y.prototype,"imageSrc",void 0);$([h()],y.prototype,"name",void 0);$([h()],y.prototype,"symbol",void 0);$([h()],y.prototype,"price",void 0);$([h()],y.prototype,"amount",void 0);$([s()],y.prototype,"visible",void 0);$([s()],y.prototype,"imageError",void 0);y=$([D("wui-token-list-item")],y);const ie=A`
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
`;var S=function(l,e,o,n){var a=arguments.length,t=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,o,n);else for(var c=l.length-1;c>=0;c--)(r=l[c])&&(t=(a<3?r(t):a>3?r(e,o,t):r(e,o))||t);return a>3&&t&&Object.defineProperty(e,o,t),t};let k=class extends C{constructor(){super(),this.unsubscribe=[],this.targetToken=T.state.data?.target,this.sourceToken=i.state.sourceToken,this.sourceTokenAmount=i.state.sourceTokenAmount,this.toToken=i.state.toToken,this.myTokensWithBalance=i.state.myTokensWithBalance,this.popularTokens=i.state.popularTokens,this.searchValue="",this.unsubscribe.push(i.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance}))}updated(){this.renderRoot?.querySelector(".suggested-tokens-container")?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),this.renderRoot?.querySelector(".tokens")?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();const e=this.renderRoot?.querySelector(".suggested-tokens-container"),o=this.renderRoot?.querySelector(".tokens");e?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),o?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){this.targetToken==="sourceToken"?i.setSourceToken(e):(i.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&i.swapTokens()),T.goBack()}templateSearchInput(){return u`
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
    `}templateTokens(){const e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],o=this.popularTokens?this.popularTokens:[],n=this.filterTokensWithText(e,this.searchValue),a=this.filterTokensWithText(o,this.searchValue);return u`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${n?.length>0?u`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${n.map(t=>{const r=t.symbol===this.sourceToken?.symbol||t.symbol===this.toToken?.symbol;return u`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${t.symbol}"
                      name=${t.name}
                      ?disabled=${r}
                      symbol=${t.symbol}
                      price=${t?.price}
                      amount=${t?.quantity?.numeric}
                      imageSrc=${t.logoUri}
                      @click=${()=>{r||this.onSelectToken(t)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${a?.length>0?a.map(t=>u`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${t.symbol}"
                    name=${t.name}
                    symbol=${t.symbol}
                    imageSrc=${t.logoUri}
                    @click=${()=>this.onSelectToken(t)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=i.state.suggestedTokens?i.state.suggestedTokens.slice(0,8):null;return e?u`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map(o=>u`
            <wui-token-button
              text=${o.symbol}
              imageSrc=${o.logoUri}
              @click=${()=>this.onSelectToken(o)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){const e=this.renderRoot?.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",N.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",N.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){const e=this.renderRoot?.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",N.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",N.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,o){return e.filter(n=>`${n.symbol} ${n.name} ${n.address}`.toLowerCase().includes(o.toLowerCase()))}};k.styles=ie;S([s()],k.prototype,"interval",void 0);S([s()],k.prototype,"targetToken",void 0);S([s()],k.prototype,"sourceToken",void 0);S([s()],k.prototype,"sourceTokenAmount",void 0);S([s()],k.prototype,"toToken",void 0);S([s()],k.prototype,"myTokensWithBalance",void 0);S([s()],k.prototype,"popularTokens",void 0);S([s()],k.prototype,"searchValue",void 0);k=S([D("w3m-swap-select-token-view")],k);export{d as W3mSwapPreviewView,k as W3mSwapSelectTokenView,p as W3mSwapView};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhcHMtbjZVQ0NkRFMuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AcmVvd24vYXBwa2l0LWNvbW1vbi9kaXN0L2VzbS9zcmMvdXRpbHMvSW5wdXRVdGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW93bi9hcHBraXQtc2NhZmZvbGQtdWkvZGlzdC9lc20vc3JjL3BhcnRpYWxzL3czbS1zd2FwLWRldGFpbHMvc3R5bGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW93bi9hcHBraXQtc2NhZmZvbGQtdWkvZGlzdC9lc20vc3JjL3BhcnRpYWxzL3czbS1zd2FwLWRldGFpbHMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHJlb3duL2FwcGtpdC1zY2FmZm9sZC11aS9kaXN0L2VzbS9zcmMvcGFydGlhbHMvdzNtLXN3YXAtaW5wdXQtc2tlbGV0b24vc3R5bGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW93bi9hcHBraXQtc2NhZmZvbGQtdWkvZGlzdC9lc20vc3JjL3BhcnRpYWxzL3czbS1zd2FwLWlucHV0LXNrZWxldG9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW93bi9hcHBraXQtc2NhZmZvbGQtdWkvZGlzdC9lc20vc3JjL3BhcnRpYWxzL3czbS1zd2FwLWlucHV0L3N0eWxlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AcmVvd24vYXBwa2l0LXNjYWZmb2xkLXVpL2Rpc3QvZXNtL3NyYy9wYXJ0aWFscy93M20tc3dhcC1pbnB1dC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AcmVvd24vYXBwa2l0LXNjYWZmb2xkLXVpL2Rpc3QvZXNtL3NyYy92aWV3cy93M20tc3dhcC12aWV3L3N0eWxlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AcmVvd24vYXBwa2l0LXNjYWZmb2xkLXVpL2Rpc3QvZXNtL3NyYy92aWV3cy93M20tc3dhcC12aWV3L2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW93bi9hcHBraXQtc2NhZmZvbGQtdWkvZGlzdC9lc20vc3JjL3ZpZXdzL3czbS1zd2FwLXByZXZpZXctdmlldy9zdHlsZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHJlb3duL2FwcGtpdC1zY2FmZm9sZC11aS9kaXN0L2VzbS9zcmMvdmlld3MvdzNtLXN3YXAtcHJldmlldy12aWV3L2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW93bi9hcHBraXQtdWkvZGlzdC9lc20vc3JjL2NvbXBvc2l0ZXMvd3VpLXRva2VuLWxpc3QtaXRlbS9zdHlsZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHJlb3duL2FwcGtpdC11aS9kaXN0L2VzbS9zcmMvY29tcG9zaXRlcy93dWktdG9rZW4tbGlzdC1pdGVtL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW93bi9hcHBraXQtc2NhZmZvbGQtdWkvZGlzdC9lc20vc3JjL3ZpZXdzL3czbS1zd2FwLXNlbGVjdC10b2tlbi12aWV3L3N0eWxlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AcmVvd24vYXBwa2l0LXNjYWZmb2xkLXVpL2Rpc3QvZXNtL3NyYy92aWV3cy93M20tc3dhcC1zZWxlY3QtdG9rZW4tdmlldy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSW5wdXRVdGlsID0ge1xuICAgIG51bWVyaWNJbnB1dEtleURvd24oZXZlbnQsIGN1cnJlbnRWYWx1ZSwgb25DaGFuZ2UpIHtcbiAgICAgICAgY29uc3QgYWxsb3dlZEtleXMgPSBbXG4gICAgICAgICAgICAnQmFja3NwYWNlJyxcbiAgICAgICAgICAgICdNZXRhJyxcbiAgICAgICAgICAgICdDdHJsJyxcbiAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICdBJyxcbiAgICAgICAgICAgICdjJyxcbiAgICAgICAgICAgICdDJyxcbiAgICAgICAgICAgICd4JyxcbiAgICAgICAgICAgICdYJyxcbiAgICAgICAgICAgICd2JyxcbiAgICAgICAgICAgICdWJyxcbiAgICAgICAgICAgICdBcnJvd0xlZnQnLFxuICAgICAgICAgICAgJ0Fycm93UmlnaHQnLFxuICAgICAgICAgICAgJ1RhYidcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgY29udHJvbFByZXNzZWQgPSBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXk7XG4gICAgICAgIGNvbnN0IGV2ZW50S2V5ID0gZXZlbnQua2V5O1xuICAgICAgICBjb25zdCBsb3dlcmNhc2VFdmVudEtleSA9IGV2ZW50S2V5LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbCA9IGxvd2VyY2FzZUV2ZW50S2V5ID09PSAnYSc7XG4gICAgICAgIGNvbnN0IGNvcHlLZXkgPSBsb3dlcmNhc2VFdmVudEtleSA9PT0gJ2MnO1xuICAgICAgICBjb25zdCBwYXN0ZUtleSA9IGxvd2VyY2FzZUV2ZW50S2V5ID09PSAndic7XG4gICAgICAgIGNvbnN0IGN1dEtleSA9IGxvd2VyY2FzZUV2ZW50S2V5ID09PSAneCc7XG4gICAgICAgIGNvbnN0IGlzQ29tbWEgPSBldmVudEtleSA9PT0gJywnO1xuICAgICAgICBjb25zdCBpc0RvdCA9IGV2ZW50S2V5ID09PSAnLic7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY0tleSA9IGV2ZW50S2V5ID49ICcwJyAmJiBldmVudEtleSA8PSAnOSc7XG4gICAgICAgIGlmICghY29udHJvbFByZXNzZWQgJiYgKHNlbGVjdEFsbCB8fCBjb3B5S2V5IHx8IHBhc3RlS2V5IHx8IGN1dEtleSkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gJzAnICYmICFpc0NvbW1hICYmICFpc0RvdCAmJiBldmVudEtleSA9PT0gJzAnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUgPT09ICcwJyAmJiBpc051bWVyaWNLZXkpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50S2V5KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ29tbWEgfHwgaXNEb3QpIHtcbiAgICAgICAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoJzAuJyk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWU/LmluY2x1ZGVzKCcuJykgfHwgY3VycmVudFZhbHVlPy5pbmNsdWRlcygnLCcpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTnVtZXJpY0tleSAmJiAhYWxsb3dlZEtleXMuaW5jbHVkZXMoZXZlbnRLZXkpICYmICFpc0RvdCAmJiAhaXNDb21tYSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JbnB1dFV0aWwuanMubWFwIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcbmV4cG9ydCBkZWZhdWx0IGNzcyBgXG4gIDpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kZXRhaWxzLWNvbnRhaW5lciA+IHd1aS1mbGV4IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXd1aS1ib3JkZXItcmFkaXVzLXh4cyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZGV0YWlscy1jb250YWluZXIgPiB3dWktZmxleCA+IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcGFkZGluZzogdmFyKC0td3VpLXNwYWNpbmctcyk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0td3VpLWJvcmRlci1yYWRpdXMteHhzKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuZGV0YWlscy1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogdmFyKC0td3VpLXNwYWNpbmctMXhzKTtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5kZXRhaWxzLWNvbnRlbnQtY29udGFpbmVyID4gd3VpLWZsZXgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmRldGFpbHMtcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiB2YXIoLS13dWktc3BhY2luZy1zKTtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXd1aS1zcGFjaW5nLXMpO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXd1aS1zcGFjaW5nLTF4cyk7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS13dWktYm9yZGVyLXJhZGl1cy01eHMpICsgdmFyKC0td3VpLWJvcmRlci1yYWRpdXMtNHhzKSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDAyKTtcbiAgfVxuXG4gIC5kZXRhaWxzLXJvdy10aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC5kZXRhaWxzLXJvdy5wcm92aWRlci1mcmVlLXJvdyB7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0td3VpLXNwYWNpbmcteHMpO1xuICB9XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmpzLm1hcCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHksIHN0YXRlIH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgTnVtYmVyVXRpbCB9IGZyb20gJ0ByZW93bi9hcHBraXQtY29tbW9uJztcbmltcG9ydCB7IENoYWluQ29udHJvbGxlciwgQ29uc3RhbnRzVXRpbCwgU3dhcENvbnRyb2xsZXIgfSBmcm9tICdAcmVvd24vYXBwa2l0LWNvbnRyb2xsZXJzJztcbmltcG9ydCB7IFVpSGVscGVyVXRpbCwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ0ByZW93bi9hcHBraXQtdWknO1xuaW1wb3J0ICdAcmVvd24vYXBwa2l0LXVpL3d1aS1mbGV4JztcbmltcG9ydCAnQHJlb3duL2FwcGtpdC11aS93dWktaWNvbic7XG5pbXBvcnQgJ0ByZW93bi9hcHBraXQtdWkvd3VpLXRleHQnO1xuaW1wb3J0ICcuLi93M20tdG9vbHRpcC10cmlnZ2VyL2luZGV4LmpzJztcbmltcG9ydCAnLi4vdzNtLXRvb2x0aXAvaW5kZXguanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5qcyc7XG5jb25zdCBzbGlwcGFnZVJhdGUgPSBDb25zdGFudHNVdGlsLkNPTlZFUlRfU0xJUFBBR0VfVE9MRVJBTkNFO1xubGV0IFd1aVN3YXBEZXRhaWxzID0gY2xhc3MgV3VpU3dhcERldGFpbHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IFtdO1xuICAgICAgICB0aGlzLm5ldHdvcmtOYW1lID0gQ2hhaW5Db250cm9sbGVyLnN0YXRlLmFjdGl2ZUNhaXBOZXR3b3JrPy5uYW1lO1xuICAgICAgICB0aGlzLmRldGFpbHNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc291cmNlVG9rZW4gPSBTd2FwQ29udHJvbGxlci5zdGF0ZS5zb3VyY2VUb2tlbjtcbiAgICAgICAgdGhpcy50b1Rva2VuID0gU3dhcENvbnRyb2xsZXIuc3RhdGUudG9Ub2tlbjtcbiAgICAgICAgdGhpcy50b1Rva2VuQW1vdW50ID0gU3dhcENvbnRyb2xsZXIuc3RhdGUudG9Ub2tlbkFtb3VudDtcbiAgICAgICAgdGhpcy5zb3VyY2VUb2tlblByaWNlSW5VU0QgPSBTd2FwQ29udHJvbGxlci5zdGF0ZS5zb3VyY2VUb2tlblByaWNlSW5VU0Q7XG4gICAgICAgIHRoaXMudG9Ub2tlblByaWNlSW5VU0QgPSBTd2FwQ29udHJvbGxlci5zdGF0ZS50b1Rva2VuUHJpY2VJblVTRDtcbiAgICAgICAgdGhpcy5wcmljZUltcGFjdCA9IFN3YXBDb250cm9sbGVyLnN0YXRlLnByaWNlSW1wYWN0O1xuICAgICAgICB0aGlzLm1heFNsaXBwYWdlID0gU3dhcENvbnRyb2xsZXIuc3RhdGUubWF4U2xpcHBhZ2U7XG4gICAgICAgIHRoaXMubmV0d29ya1Rva2VuU3ltYm9sID0gU3dhcENvbnRyb2xsZXIuc3RhdGUubmV0d29ya1Rva2VuU3ltYm9sO1xuICAgICAgICB0aGlzLmlucHV0RXJyb3IgPSBTd2FwQ29udHJvbGxlci5zdGF0ZS5pbnB1dEVycm9yO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlLnB1c2goLi4uW1xuICAgICAgICAgICAgU3dhcENvbnRyb2xsZXIuc3Vic2NyaWJlKG5ld1N0YXRlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZVRva2VuID0gbmV3U3RhdGUuc291cmNlVG9rZW47XG4gICAgICAgICAgICAgICAgdGhpcy50b1Rva2VuID0gbmV3U3RhdGUudG9Ub2tlbjtcbiAgICAgICAgICAgICAgICB0aGlzLnRvVG9rZW5BbW91bnQgPSBuZXdTdGF0ZS50b1Rva2VuQW1vdW50O1xuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VJbXBhY3QgPSBuZXdTdGF0ZS5wcmljZUltcGFjdDtcbiAgICAgICAgICAgICAgICB0aGlzLm1heFNsaXBwYWdlID0gbmV3U3RhdGUubWF4U2xpcHBhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VUb2tlblByaWNlSW5VU0QgPSBuZXdTdGF0ZS5zb3VyY2VUb2tlblByaWNlSW5VU0Q7XG4gICAgICAgICAgICAgICAgdGhpcy50b1Rva2VuUHJpY2VJblVTRCA9IG5ld1N0YXRlLnRvVG9rZW5QcmljZUluVVNEO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFcnJvciA9IG5ld1N0YXRlLmlucHV0RXJyb3I7XG4gICAgICAgICAgICB9KVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtaW5SZWNlaXZlZEFtb3VudCA9IHRoaXMudG9Ub2tlbkFtb3VudCAmJiB0aGlzLm1heFNsaXBwYWdlXG4gICAgICAgICAgICA/IE51bWJlclV0aWwuYmlnTnVtYmVyKHRoaXMudG9Ub2tlbkFtb3VudCkubWludXModGhpcy5tYXhTbGlwcGFnZSkudG9TdHJpbmcoKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBpZiAoIXRoaXMuc291cmNlVG9rZW4gfHwgIXRoaXMudG9Ub2tlbiB8fCB0aGlzLmlucHV0RXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvVG9rZW5Td2FwcGVkQW1vdW50ID0gdGhpcy5zb3VyY2VUb2tlblByaWNlSW5VU0QgJiYgdGhpcy50b1Rva2VuUHJpY2VJblVTRFxuICAgICAgICAgICAgPyAoMSAvIHRoaXMudG9Ub2tlblByaWNlSW5VU0QpICogdGhpcy5zb3VyY2VUb2tlblByaWNlSW5VU0RcbiAgICAgICAgICAgIDogMDtcbiAgICAgICAgcmV0dXJuIGh0bWwgYFxuICAgICAgPHd1aS1mbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwiMXhzXCIgY2xhc3M9XCJkZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICA8d3VpLWZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxidXR0b24gQGNsaWNrPSR7dGhpcy50b2dnbGVEZXRhaWxzLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPHd1aS1mbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIC5wYWRkaW5nPSR7WycwJywgJ3hzJywgJzAnLCAneHMnXX0+XG4gICAgICAgICAgICAgIDx3dWktZmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIiBmbGV4R3Jvdz1cIjFcIiBnYXA9XCJ4c1wiPlxuICAgICAgICAgICAgICAgIDx3dWktdGV4dCB2YXJpYW50PVwic21hbGwtNDAwXCIgY29sb3I9XCJmZy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgIDEgJHt0aGlzLnNvdXJjZVRva2VuLnN5bWJvbH0gPVxuICAgICAgICAgICAgICAgICAgJHtVaUhlbHBlclV0aWwuZm9ybWF0TnVtYmVyVG9Mb2NhbFN0cmluZyh0b1Rva2VuU3dhcHBlZEFtb3VudCwgMyl9XG4gICAgICAgICAgICAgICAgICAke3RoaXMudG9Ub2tlbi5zeW1ib2x9XG4gICAgICAgICAgICAgICAgPC93dWktdGV4dD5cbiAgICAgICAgICAgICAgICA8d3VpLXRleHQgdmFyaWFudD1cInNtYWxsLTQwMFwiIGNvbG9yPVwiZmctMjAwXCI+XG4gICAgICAgICAgICAgICAgICAkJHtVaUhlbHBlclV0aWwuZm9ybWF0TnVtYmVyVG9Mb2NhbFN0cmluZyh0aGlzLnNvdXJjZVRva2VuUHJpY2VJblVTRCl9XG4gICAgICAgICAgICAgICAgPC93dWktdGV4dD5cbiAgICAgICAgICAgICAgPC93dWktZmxleD5cbiAgICAgICAgICAgICAgPHd1aS1pY29uIG5hbWU9XCJjaGV2cm9uQm90dG9tXCI+PC93dWktaWNvbj5cbiAgICAgICAgICAgIDwvd3VpLWZsZXg+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgJHt0aGlzLmRldGFpbHNPcGVuXG4gICAgICAgICAgICA/IGh0bWwgYFxuICAgICAgICAgICAgICAgIDx3dWktZmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPVwieHNcIiBjbGFzcz1cImRldGFpbHMtY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5wcmljZUltcGFjdFxuICAgICAgICAgICAgICAgID8gaHRtbCBgIDx3dWktZmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPVwieHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx3dWktZmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZXRhaWxzLXJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx3dWktZmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwieHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8d3VpLXRleHQgY2xhc3M9XCJkZXRhaWxzLXJvdy10aXRsZVwiIHZhcmlhbnQ9XCJzbWFsbC00MDBcIiBjb2xvcj1cImZnLTE1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpY2UgaW1wYWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC93dWktdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dzNtLXRvb2x0aXAtdHJpZ2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlByaWNlIGltcGFjdCByZWZsZWN0cyB0aGUgY2hhbmdlIGluIG1hcmtldCBwcmljZSBkdWUgdG8geW91ciB0cmFkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHd1aS1pY29uIHNpemU9XCJ4c1wiIGNvbG9yPVwiZmctMjUwXCIgbmFtZT1cImluZm9DaXJjbGVcIj48L3d1aS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdzNtLXRvb2x0aXAtdHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC93dWktZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHd1aS1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx3dWktdGV4dCB2YXJpYW50PVwic21hbGwtNDAwXCIgY29sb3I9XCJmZy0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7VWlIZWxwZXJVdGlsLmZvcm1hdE51bWJlclRvTG9jYWxTdHJpbmcodGhpcy5wcmljZUltcGFjdCwgMyl9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvd3VpLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvd3VpLWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgIDwvd3VpLWZsZXg+YFxuICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5tYXhTbGlwcGFnZSAmJiB0aGlzLnNvdXJjZVRva2VuLnN5bWJvbFxuICAgICAgICAgICAgICAgID8gaHRtbCBgPHd1aS1mbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9XCJ4c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHd1aS1mbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRldGFpbHMtcm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHd1aS1mbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBnYXA9XCJ4c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx3dWktdGV4dCBjbGFzcz1cImRldGFpbHMtcm93LXRpdGxlXCIgdmFyaWFudD1cInNtYWxsLTQwMFwiIGNvbG9yPVwiZmctMTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXguIHNsaXBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC93dWktdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dzNtLXRvb2x0aXAtdHJpZ2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD0ke2BNYXggc2xpcHBhZ2Ugc2V0cyB0aGUgbWluaW11bSBhbW91bnQgeW91IG11c3QgcmVjZWl2ZSBmb3IgdGhlIHRyYW5zYWN0aW9uIHRvIHByb2NlZWQuICR7bWluUmVjZWl2ZWRBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgPyBgVHJhbnNhY3Rpb24gd2lsbCBiZSByZXZlcnNlZCBpZiB5b3UgcmVjZWl2ZSBsZXNzIHRoYW4gJHtVaUhlbHBlclV0aWwuZm9ybWF0TnVtYmVyVG9Mb2NhbFN0cmluZyhtaW5SZWNlaXZlZEFtb3VudCwgNil9ICR7dGhpcy50b1Rva2VuLnN5bWJvbH0gZHVlIHRvIHByaWNlIGNoYW5nZXMuYFxuICAgICAgICAgICAgICAgICAgICA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHd1aS1pY29uIHNpemU9XCJ4c1wiIGNvbG9yPVwiZmctMjUwXCIgbmFtZT1cImluZm9DaXJjbGVcIj48L3d1aS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdzNtLXRvb2x0aXAtdHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC93dWktZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHd1aS1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx3dWktdGV4dCB2YXJpYW50PVwic21hbGwtNDAwXCIgY29sb3I9XCJmZy0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7VWlIZWxwZXJVdGlsLmZvcm1hdE51bWJlclRvTG9jYWxTdHJpbmcodGhpcy5tYXhTbGlwcGFnZSwgNil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMudG9Ub2tlbi5zeW1ib2x9ICR7c2xpcHBhZ2VSYXRlfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3d1aS10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC93dWktZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3d1aS1mbGV4PmBcbiAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgICA8d3VpLWZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD1cInhzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx3dWktZmxleFxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZXRhaWxzLXJvdyBwcm92aWRlci1mcmVlLXJvd1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8d3VpLWZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiIGdhcD1cInhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8d3VpLXRleHQgY2xhc3M9XCJkZXRhaWxzLXJvdy10aXRsZVwiIHZhcmlhbnQ9XCJzbWFsbC00MDBcIiBjb2xvcj1cImZnLTE1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcm92aWRlciBmZWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvd3VpLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC93dWktZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICA8d3VpLWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8d3VpLXRleHQgdmFyaWFudD1cInNtYWxsLTQwMFwiIGNvbG9yPVwiZmctMjAwXCI+MC44NSU8L3d1aS10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvd3VpLWZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvd3VpLWZsZXg+XG4gICAgICAgICAgICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgICAgICAgICAgIDwvd3VpLWZsZXg+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC93dWktZmxleD5cbiAgICAgIDwvd3VpLWZsZXg+XG4gICAgYDtcbiAgICB9XG4gICAgdG9nZ2xlRGV0YWlscygpIHtcbiAgICAgICAgdGhpcy5kZXRhaWxzT3BlbiA9ICF0aGlzLmRldGFpbHNPcGVuO1xuICAgIH1cbn07XG5XdWlTd2FwRGV0YWlscy5zdHlsZXMgPSBbc3R5bGVzXTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFd1aVN3YXBEZXRhaWxzLnByb3RvdHlwZSwgXCJuZXR3b3JrTmFtZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgV3VpU3dhcERldGFpbHMucHJvdG90eXBlLCBcImRldGFpbHNPcGVuXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXdWlTd2FwRGV0YWlscy5wcm90b3R5cGUsIFwic291cmNlVG9rZW5cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFd1aVN3YXBEZXRhaWxzLnByb3RvdHlwZSwgXCJ0b1Rva2VuXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXdWlTd2FwRGV0YWlscy5wcm90b3R5cGUsIFwidG9Ub2tlbkFtb3VudFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgV3VpU3dhcERldGFpbHMucHJvdG90eXBlLCBcInNvdXJjZVRva2VuUHJpY2VJblVTRFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgV3VpU3dhcERldGFpbHMucHJvdG90eXBlLCBcInRvVG9rZW5QcmljZUluVVNEXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXdWlTd2FwRGV0YWlscy5wcm90b3R5cGUsIFwicHJpY2VJbXBhY3RcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFd1aVN3YXBEZXRhaWxzLnByb3RvdHlwZSwgXCJtYXhTbGlwcGFnZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgV3VpU3dhcERldGFpbHMucHJvdG90eXBlLCBcIm5ldHdvcmtUb2tlblN5bWJvbFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgV3VpU3dhcERldGFpbHMucHJvdG90eXBlLCBcImlucHV0RXJyb3JcIiwgdm9pZCAwKTtcbld1aVN3YXBEZXRhaWxzID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgndzNtLXN3YXAtZGV0YWlscycpXG5dLCBXdWlTd2FwRGV0YWlscyk7XG5leHBvcnQgeyBXdWlTd2FwRGV0YWlscyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcbmV4cG9ydCBkZWZhdWx0IGNzcyBgXG4gIDpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIDpob3N0ID4gd3VpLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS13dWktYm9yZGVyLXJhZGl1cy1zKTtcbiAgICBwYWRkaW5nOiB2YXIoLS13dWktc3BhY2luZy14bCk7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0td3VpLXNwYWNpbmctcyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDAyKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAxcHggdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDAyKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgd3VpLXNoaW1tZXIubWFya2V0LXZhbHVlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgOmhvc3QgPiB3dWktZmxleCA+IHN2Zy5pbnB1dF9tYXNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgei1pbmRleDogNTtcbiAgfVxuXG4gIDpob3N0IHd1aS1mbGV4IC5pbnB1dF9tYXNrX19ib3JkZXIsXG4gIDpob3N0IHd1aS1mbGV4IC5pbnB1dF9tYXNrX19iYWNrZ3JvdW5kIHtcbiAgICB0cmFuc2l0aW9uOiBmaWxsIHZhcigtLXd1aS1kdXJhdGlvbi1tZCkgdmFyKC0td3VpLWVhc2Utb3V0LXBvd2VyLTEpO1xuICAgIHdpbGwtY2hhbmdlOiBmaWxsO1xuICB9XG5cbiAgOmhvc3Qgd3VpLWZsZXggLmlucHV0X21hc2tfX2JvcmRlciB7XG4gICAgZmlsbDogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDIwKTtcbiAgfVxuXG4gIDpob3N0IHd1aS1mbGV4IC5pbnB1dF9tYXNrX19iYWNrZ3JvdW5kIHtcbiAgICBmaWxsOiB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDIpO1xuICB9XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmpzLm1hcCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQge30gZnJvbSAnQHJlb3duL2FwcGtpdC1jb250cm9sbGVycyc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50IH0gZnJvbSAnQHJlb3duL2FwcGtpdC11aSc7XG5pbXBvcnQgJ0ByZW93bi9hcHBraXQtdWkvd3VpLWZsZXgnO1xuaW1wb3J0ICdAcmVvd24vYXBwa2l0LXVpL3d1aS1zaGltbWVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuanMnO1xubGV0IFczbVN3YXBJbnB1dFNrZWxldG9uID0gY2xhc3MgVzNtU3dhcElucHV0U2tlbGV0b24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSAnc291cmNlVG9rZW4nO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDx3dWktZmxleCBjbGFzcyBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgPHd1aS1mbGV4XG4gICAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgY2xhc3M9XCJzd2FwLWlucHV0XCJcbiAgICAgICAgICBnYXA9XCJ4eHNcIlxuICAgICAgICA+XG4gICAgICAgICAgPHd1aS1zaGltbWVyIHdpZHRoPVwiODBweFwiIGhlaWdodD1cIjQwcHhcIiBib3JkZXJSYWRpdXM9XCJ4eHNcIiB2YXJpYW50PVwibGlnaHRcIj48L3d1aS1zaGltbWVyPlxuICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgICAke3RoaXMudGVtcGxhdGVUb2tlblNlbGVjdEJ1dHRvbigpfVxuICAgICAgPC93dWktZmxleD5cbiAgICBgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZVRva2VuU2VsZWN0QnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICA8d3VpLWZsZXhcbiAgICAgICAgY2xhc3M9XCJzd2FwLXRva2VuLWJ1dHRvblwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGdhcD1cInh4c1wiXG4gICAgICA+XG4gICAgICAgIDx3dWktc2hpbW1lciB3aWR0aD1cIjgwcHhcIiBoZWlnaHQ9XCI0MHB4XCIgYm9yZGVyUmFkaXVzPVwiM3hsXCIgdmFyaWFudD1cImxpZ2h0XCI+PC93dWktc2hpbW1lcj5cbiAgICAgIDwvd3VpLWZsZXg+XG4gICAgYDtcbiAgICB9XG59O1xuVzNtU3dhcElucHV0U2tlbGV0b24uc3R5bGVzID0gW3N0eWxlc107XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBXM21Td2FwSW5wdXRTa2VsZXRvbi5wcm90b3R5cGUsIFwidGFyZ2V0XCIsIHZvaWQgMCk7XG5XM21Td2FwSW5wdXRTa2VsZXRvbiA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUVsZW1lbnQoJ3czbS1zd2FwLWlucHV0LXNrZWxldG9uJylcbl0sIFczbVN3YXBJbnB1dFNrZWxldG9uKTtcbmV4cG9ydCB7IFczbVN3YXBJbnB1dFNrZWxldG9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xuZXhwb3J0IGRlZmF1bHQgY3NzIGBcbiAgOmhvc3QgPiB3dWktZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXd1aS1ib3JkZXItcmFkaXVzLXMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwMik7XG4gICAgcGFkZGluZzogdmFyKC0td3VpLXNwYWNpbmcteGwpO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXd1aS1zcGFjaW5nLXMpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAxcHggdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDAyKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyB2YXIoLS13dWktZWFzZS1vdXQtcG93ZXItMSkgdmFyKC0td3VpLWR1cmF0aW9uLWxnKTtcbiAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1jb2xvcjtcbiAgfVxuXG4gIDpob3N0IHd1aS1mbGV4LmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAxcHggdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDA1KTtcbiAgfVxuXG4gIDpob3N0ID4gd3VpLWZsZXggLnN3YXAtaW5wdXQsXG4gIDpob3N0ID4gd3VpLWZsZXggLnN3YXAtdG9rZW4tYnV0dG9uIHtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuXG4gIDpob3N0ID4gd3VpLWZsZXggLnN3YXAtaW5wdXQge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMjcwZGVnLFxuICAgICAgdHJhbnNwYXJlbnQgMHB4LFxuICAgICAgdHJhbnNwYXJlbnQgOHB4LFxuICAgICAgYmxhY2sgMjRweCxcbiAgICAgIGJsYWNrIDI1cHgsXG4gICAgICBibGFjayAzMnB4LFxuICAgICAgYmxhY2sgMTAwJVxuICAgICk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMjcwZGVnLFxuICAgICAgdHJhbnNwYXJlbnQgMHB4LFxuICAgICAgdHJhbnNwYXJlbnQgOHB4LFxuICAgICAgYmxhY2sgMjRweCxcbiAgICAgIGJsYWNrIDI1cHgsXG4gICAgICBibGFjayAzMnB4LFxuICAgICAgYmxhY2sgMTAwJVxuICAgICk7XG4gIH1cblxuICA6aG9zdCA+IHd1aS1mbGV4IC5zd2FwLWlucHV0IGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMS4yOHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY2FyZXQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1hY2NlbnQtMTAwKTtcbiAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLWZnLTEwMCk7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgOmhvc3QgPiB3dWktZmxleCAuc3dhcC1pbnB1dCBpbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgOmhvc3QgPiB3dWktZmxleCAuc3dhcC1pbnB1dCBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgOmhvc3QgPiB3dWktZmxleCAuc3dhcC1pbnB1dCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5tYXgtdmFsdWUtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMjApO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG5cbiAgLm1hcmtldC12YWx1ZSB7XG4gICAgbWluLWhlaWdodDogMThweDtcbiAgfVxuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlcy5qcy5tYXAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHsgSW5wdXRVdGlsLCBOdW1iZXJVdGlsIH0gZnJvbSAnQHJlb3duL2FwcGtpdC1jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRzQ29udHJvbGxlciwgUm91dGVyQ29udHJvbGxlciB9IGZyb20gJ0ByZW93bi9hcHBraXQtY29udHJvbGxlcnMnO1xuaW1wb3J0IHsgVWlIZWxwZXJVdGlsLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnQHJlb3duL2FwcGtpdC11aSc7XG5pbXBvcnQgJ0ByZW93bi9hcHBraXQtdWkvd3VpLWJ1dHRvbic7XG5pbXBvcnQgJ0ByZW93bi9hcHBraXQtdWkvd3VpLWZsZXgnO1xuaW1wb3J0ICdAcmVvd24vYXBwa2l0LXVpL3d1aS10ZXh0JztcbmltcG9ydCAnQHJlb3duL2FwcGtpdC11aS93dWktdG9rZW4tYnV0dG9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuanMnO1xuY29uc3QgTUlOSU1VTV9VU0RfVkFMVUVfVE9fQ09OVkVSVCA9IDAuMDAwMDU7XG5sZXQgVzNtU3dhcElucHV0ID0gY2xhc3MgVzNtU3dhcElucHV0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByaWNlID0gMDtcbiAgICAgICAgdGhpcy50YXJnZXQgPSAnc291cmNlVG9rZW4nO1xuICAgICAgICB0aGlzLm9uU2V0QW1vdW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vblNldE1heFZhbHVlID0gbnVsbDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtYXJrZXRWYWx1ZSA9IHRoaXMubWFya2V0VmFsdWUgfHwgJzAnO1xuICAgICAgICBjb25zdCBpc01hcmtldFZhbHVlR3JlYXRlclRoYW5aZXJvID0gTnVtYmVyVXRpbC5iaWdOdW1iZXIobWFya2V0VmFsdWUpLmd0KCcwJyk7XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDx3dWktZmxleCBjbGFzcz1cIiR7dGhpcy5mb2N1c2VkID8gJ2ZvY3VzJyA6ICcnfVwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICA8d3VpLWZsZXhcbiAgICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICBjbGFzcz1cInN3YXAtaW5wdXRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cInN3YXAtaW5wdXQtJHt0aGlzLnRhcmdldH1cIlxuICAgICAgICAgICAgQGZvY3VzaW49JHsoKSA9PiB0aGlzLm9uRm9jdXNDaGFuZ2UodHJ1ZSl9XG4gICAgICAgICAgICBAZm9jdXNvdXQ9JHsoKSA9PiB0aGlzLm9uRm9jdXNDaGFuZ2UoZmFsc2UpfVxuICAgICAgICAgICAgP2Rpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cbiAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMudmFsdWV9XG4gICAgICAgICAgICBAaW5wdXQ9JHt0aGlzLmRpc3BhdGNoSW5wdXRDaGFuZ2VFdmVudH1cbiAgICAgICAgICAgIEBrZXlkb3duPSR7dGhpcy5oYW5kbGVLZXlkb3dufVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlucHV0bW9kZT1cImRlY2ltYWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHd1aS10ZXh0IGNsYXNzPVwibWFya2V0LXZhbHVlXCIgdmFyaWFudD1cInNtYWxsLTQwMFwiIGNvbG9yPVwiZmctMjAwXCI+XG4gICAgICAgICAgICAke2lzTWFya2V0VmFsdWVHcmVhdGVyVGhhblplcm9cbiAgICAgICAgICAgID8gYCQke1VpSGVscGVyVXRpbC5mb3JtYXROdW1iZXJUb0xvY2FsU3RyaW5nKHRoaXMubWFya2V0VmFsdWUsIDIpfWBcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L3d1aS10ZXh0PlxuICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgICAke3RoaXMudGVtcGxhdGVUb2tlblNlbGVjdEJ1dHRvbigpfVxuICAgICAgPC93dWktZmxleD5cbiAgICBgO1xuICAgIH1cbiAgICBoYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBJbnB1dFV0aWwubnVtZXJpY0lucHV0S2V5RG93bihldmVudCwgdGhpcy52YWx1ZSwgKHZhbHVlKSA9PiB0aGlzLm9uU2V0QW1vdW50Py4odGhpcy50YXJnZXQsIHZhbHVlKSk7XG4gICAgfVxuICAgIGRpc3BhdGNoSW5wdXRDaGFuZ2VFdmVudChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMub25TZXRBbW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXjAtOS5dL2d1LCAnJyk7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJywnIHx8IHZhbHVlID09PSAnLicpIHtcbiAgICAgICAgICAgIHRoaXMub25TZXRBbW91bnQodGhpcy50YXJnZXQsICcwLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLmVuZHNXaXRoKCcsJykpIHtcbiAgICAgICAgICAgIHRoaXMub25TZXRBbW91bnQodGhpcy50YXJnZXQsIHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25TZXRBbW91bnQodGhpcy50YXJnZXQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRNYXhWYWx1ZVRvSW5wdXQoKSB7XG4gICAgICAgIHRoaXMub25TZXRNYXhWYWx1ZT8uKHRoaXMudGFyZ2V0LCB0aGlzLmJhbGFuY2UpO1xuICAgIH1cbiAgICB0ZW1wbGF0ZVRva2VuU2VsZWN0QnV0dG9uKCkge1xuICAgICAgICBpZiAoIXRoaXMudG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sIGAgPHd1aS1idXR0b25cbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJzd2FwLXNlbGVjdC10b2tlbi1idXR0b24tJHt0aGlzLnRhcmdldH1cIlxuICAgICAgICBjbGFzcz1cInN3YXAtdG9rZW4tYnV0dG9uXCJcbiAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgdmFyaWFudD1cImFjY2VudFwiXG4gICAgICAgIEBjbGljaz0ke3RoaXMub25TZWxlY3RUb2tlbi5iaW5kKHRoaXMpfVxuICAgICAgPlxuICAgICAgICBTZWxlY3QgdG9rZW5cbiAgICAgIDwvd3VpLWJ1dHRvbj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDx3dWktZmxleFxuICAgICAgICBjbGFzcz1cInN3YXAtdG9rZW4tYnV0dG9uXCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgZ2FwPVwieHhzXCJcbiAgICAgID5cbiAgICAgICAgPHd1aS10b2tlbi1idXR0b25cbiAgICAgICAgICBkYXRhLXRlc3RpZD1cInN3YXAtaW5wdXQtdG9rZW4tJHt0aGlzLnRhcmdldH1cIlxuICAgICAgICAgIHRleHQ9JHt0aGlzLnRva2VuLnN5bWJvbH1cbiAgICAgICAgICBpbWFnZVNyYz0ke3RoaXMudG9rZW4ubG9nb1VyaX1cbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLm9uU2VsZWN0VG9rZW4uYmluZCh0aGlzKX1cbiAgICAgICAgPlxuICAgICAgICA8L3d1aS10b2tlbi1idXR0b24+XG4gICAgICAgIDx3dWktZmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwieHhzXCI+ICR7dGhpcy50b2tlbkJhbGFuY2VUZW1wbGF0ZSgpfSA8L3d1aS1mbGV4PlxuICAgICAgPC93dWktZmxleD5cbiAgICBgO1xuICAgIH1cbiAgICB0b2tlbkJhbGFuY2VUZW1wbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgYmFsYW5jZVZhbHVlSW5VU0QgPSBOdW1iZXJVdGlsLm11bHRpcGx5KHRoaXMuYmFsYW5jZSwgdGhpcy5wcmljZSk7XG4gICAgICAgIGNvbnN0IGhhdmVCYWxhbmNlID0gYmFsYW5jZVZhbHVlSW5VU0RcbiAgICAgICAgICAgID8gYmFsYW5jZVZhbHVlSW5VU0Q/Lmd0KE1JTklNVU1fVVNEX1ZBTFVFX1RPX0NPTlZFUlQpXG4gICAgICAgICAgICA6IGZhbHNlO1xuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICAke2hhdmVCYWxhbmNlXG4gICAgICAgICAgICA/IGh0bWwgYDx3dWktdGV4dCB2YXJpYW50PVwic21hbGwtNDAwXCIgY29sb3I9XCJmZy0yMDBcIj5cbiAgICAgICAgICAgICR7VWlIZWxwZXJVdGlsLmZvcm1hdE51bWJlclRvTG9jYWxTdHJpbmcodGhpcy5iYWxhbmNlLCAyKX1cbiAgICAgICAgICA8L3d1aS10ZXh0PmBcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICR7dGhpcy50YXJnZXQgPT09ICdzb3VyY2VUb2tlbicgPyB0aGlzLnRva2VuQWN0aW9uQnV0dG9uVGVtcGxhdGUoaGF2ZUJhbGFuY2UpIDogbnVsbH1cbiAgICBgO1xuICAgIH1cbiAgICB0b2tlbkFjdGlvbkJ1dHRvblRlbXBsYXRlKGhhdmVCYWxhbmNlKSB7XG4gICAgICAgIGlmIChoYXZlQmFsYW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWwgYCA8YnV0dG9uIGNsYXNzPVwibWF4LXZhbHVlLWJ1dHRvblwiIEBjbGljaz0ke3RoaXMuc2V0TWF4VmFsdWVUb0lucHV0LmJpbmQodGhpcyl9PlxuICAgICAgICA8d3VpLXRleHQgY29sb3I9XCJhY2NlbnQtMTAwXCIgdmFyaWFudD1cInNtYWxsLTYwMFwiPk1heDwvd3VpLXRleHQ+XG4gICAgICA8L2J1dHRvbj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sIGAgPGJ1dHRvbiBjbGFzcz1cIm1heC12YWx1ZS1idXR0b25cIiBAY2xpY2s9JHt0aGlzLm9uQnV5VG9rZW4uYmluZCh0aGlzKX0+XG4gICAgICA8d3VpLXRleHQgY29sb3I9XCJhY2NlbnQtMTAwXCIgdmFyaWFudD1cInNtYWxsLTYwMFwiPkJ1eTwvd3VpLXRleHQ+XG4gICAgPC9idXR0b24+YDtcbiAgICB9XG4gICAgb25Gb2N1c0NoYW5nZShzdGF0ZSkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBzdGF0ZTtcbiAgICB9XG4gICAgb25TZWxlY3RUb2tlbigpIHtcbiAgICAgICAgRXZlbnRzQ29udHJvbGxlci5zZW5kRXZlbnQoeyB0eXBlOiAndHJhY2snLCBldmVudDogJ0NMSUNLX1NFTEVDVF9UT0tFTl9UT19TV0FQJyB9KTtcbiAgICAgICAgUm91dGVyQ29udHJvbGxlci5wdXNoKCdTd2FwU2VsZWN0VG9rZW4nLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkJ1eVRva2VuKCkge1xuICAgICAgICBSb3V0ZXJDb250cm9sbGVyLnB1c2goJ09uUmFtcFByb3ZpZGVycycpO1xuICAgIH1cbn07XG5XM21Td2FwSW5wdXQuc3R5bGVzID0gW3N0eWxlc107XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBXM21Td2FwSW5wdXQucHJvdG90eXBlLCBcImZvY3VzZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFczbVN3YXBJbnB1dC5wcm90b3R5cGUsIFwiYmFsYW5jZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgVzNtU3dhcElucHV0LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgVzNtU3dhcElucHV0LnByb3RvdHlwZSwgXCJwcmljZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgVzNtU3dhcElucHV0LnByb3RvdHlwZSwgXCJtYXJrZXRWYWx1ZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgVzNtU3dhcElucHV0LnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgVzNtU3dhcElucHV0LnByb3RvdHlwZSwgXCJ0YXJnZXRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFczbVN3YXBJbnB1dC5wcm90b3R5cGUsIFwidG9rZW5cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFczbVN3YXBJbnB1dC5wcm90b3R5cGUsIFwib25TZXRBbW91bnRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFczbVN3YXBJbnB1dC5wcm90b3R5cGUsIFwib25TZXRNYXhWYWx1ZVwiLCB2b2lkIDApO1xuVzNtU3dhcElucHV0ID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgndzNtLXN3YXAtaW5wdXQnKVxuXSwgVzNtU3dhcElucHV0KTtcbmV4cG9ydCB7IFczbVN3YXBJbnB1dCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcbmV4cG9ydCBkZWZhdWx0IGNzcyBgXG4gIDpob3N0ID4gd3VpLWZsZXg6Zmlyc3QtY2hpbGQge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgfVxuXG4gIDpob3N0ID4gd3VpLWZsZXg6Zmlyc3QtY2hpbGQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgd3VpLWxvYWRpbmctaGV4YWdvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmFjdGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXd1aS1ib3JkZXItcmFkaXVzLXhzKTtcbiAgfVxuXG4gIC5hY3Rpb24tYnV0dG9uOmRpc2FibGVkIHtcbiAgICBib3JkZXItY29sb3I6IDFweCBzb2xpZCB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDUpO1xuICB9XG5cbiAgLnN3YXAtaW5wdXRzLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnJlcGxhY2UtdG9rZW5zLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGdhcDogdmFyKC0td3VpLXNwYWNpbmctMXhzKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS13dWktYm9yZGVyLXJhZGl1cy14cyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLW1vZGFsLWJnLWJhc2UpO1xuICAgIHBhZGRpbmc6IHZhcigtLXd1aS1zcGFjaW5nLXh4cyk7XG4gIH1cblxuICAucmVwbGFjZS10b2tlbnMtYnV0dG9uLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiB2YXIoLS13dWktc3BhY2luZy14cyk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXd1aS1ib3JkZXItcmFkaXVzLXh4cyk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDAyKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXd1aS1kdXJhdGlvbi1tZCkgdmFyKC0td3VpLWVhc2Utb3V0LXBvd2VyLTEpO1xuICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHotaW5kZXg6IDIwO1xuICB9XG5cbiAgLnJlcGxhY2UtdG9rZW5zLWJ1dHRvbi1jb250YWluZXIgPiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwNSk7XG4gIH1cblxuICAuZGV0YWlscy1jb250YWluZXIgPiB3dWktZmxleCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDAyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS13dWktYm9yZGVyLXJhZGl1cy14eHMpO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmRldGFpbHMtY29udGFpbmVyID4gd3VpLWZsZXggPiBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHBhZGRpbmc6IHZhcigtLXd1aS1zcGFjaW5nLXMpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXd1aS1ib3JkZXItcmFkaXVzLXh4cyk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGxpbmVhcjtcbiAgfVxuXG4gIC5kZXRhaWxzLWNvbnRhaW5lciA+IHd1aS1mbGV4ID4gYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDIpO1xuICB9XG5cbiAgLmRldGFpbHMtY29udGVudC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLXd1aS1zcGFjaW5nLTF4cyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmRldGFpbHMtY29udGVudC1jb250YWluZXIgPiB3dWktZmxleCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZGV0YWlscy1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IHZhcigtLXd1aS1zcGFjaW5nLXMpIHZhcigtLXd1aS1zcGFjaW5nLXhsKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS13dWktYm9yZGVyLXJhZGl1cy14eHMpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwMik7XG4gIH1cbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuanMubWFwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBOdW1iZXJVdGlsIH0gZnJvbSAnQHJlb3duL2FwcGtpdC1jb21tb24nO1xuaW1wb3J0IHsgQWNjb3VudENvbnRyb2xsZXIsIENoYWluQ29udHJvbGxlciwgQ29yZUhlbHBlclV0aWwsIEV2ZW50c0NvbnRyb2xsZXIsIE1vZGFsQ29udHJvbGxlciwgUm91dGVyQ29udHJvbGxlciwgU3dhcENvbnRyb2xsZXIgfSBmcm9tICdAcmVvd24vYXBwa2l0LWNvbnRyb2xsZXJzJztcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tICdAcmVvd24vYXBwa2l0LXVpJztcbmltcG9ydCAnQHJlb3duL2FwcGtpdC11aS93dWktYnV0dG9uJztcbmltcG9ydCAnQHJlb3duL2FwcGtpdC11aS93dWktZmxleCc7XG5pbXBvcnQgJ0ByZW93bi9hcHBraXQtdWkvd3VpLWljb24nO1xuaW1wb3J0ICdAcmVvd24vYXBwa2l0LXVpL3d1aS10ZXh0JztcbmltcG9ydCB7IFczbUZyYW1lUnBjQ29uc3RhbnRzIH0gZnJvbSAnQHJlb3duL2FwcGtpdC13YWxsZXQvdXRpbHMnO1xuaW1wb3J0ICcuLi8uLi9wYXJ0aWFscy93M20tc3dhcC1kZXRhaWxzL2luZGV4LmpzJztcbmltcG9ydCAnLi4vLi4vcGFydGlhbHMvdzNtLXN3YXAtaW5wdXQtc2tlbGV0b24vaW5kZXguanMnO1xuaW1wb3J0ICcuLi8uLi9wYXJ0aWFscy93M20tc3dhcC1pbnB1dC9pbmRleC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmpzJztcbmxldCBXM21Td2FwVmlldyA9IGNsYXNzIFczbVN3YXBWaWV3IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBbXTtcbiAgICAgICAgdGhpcy5pbml0aWFsUGFyYW1zID0gUm91dGVyQ29udHJvbGxlci5zdGF0ZS5kYXRhPy5zd2FwO1xuICAgICAgICB0aGlzLmRldGFpbHNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FpcEFkZHJlc3MgPSBBY2NvdW50Q29udHJvbGxlci5zdGF0ZS5jYWlwQWRkcmVzcztcbiAgICAgICAgdGhpcy5jYWlwTmV0d29ya0lkID0gQ2hhaW5Db250cm9sbGVyLnN0YXRlLmFjdGl2ZUNhaXBOZXR3b3JrPy5jYWlwTmV0d29ya0lkO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gU3dhcENvbnRyb2xsZXIuc3RhdGUuaW5pdGlhbGl6ZWQ7XG4gICAgICAgIHRoaXMubG9hZGluZ1F1b3RlID0gU3dhcENvbnRyb2xsZXIuc3RhdGUubG9hZGluZ1F1b3RlO1xuICAgICAgICB0aGlzLmxvYWRpbmdQcmljZXMgPSBTd2FwQ29udHJvbGxlci5zdGF0ZS5sb2FkaW5nUHJpY2VzO1xuICAgICAgICB0aGlzLmxvYWRpbmdUcmFuc2FjdGlvbiA9IFN3YXBDb250cm9sbGVyLnN0YXRlLmxvYWRpbmdUcmFuc2FjdGlvbjtcbiAgICAgICAgdGhpcy5zb3VyY2VUb2tlbiA9IFN3YXBDb250cm9sbGVyLnN0YXRlLnNvdXJjZVRva2VuO1xuICAgICAgICB0aGlzLnNvdXJjZVRva2VuQW1vdW50ID0gU3dhcENvbnRyb2xsZXIuc3RhdGUuc291cmNlVG9rZW5BbW91bnQ7XG4gICAgICAgIHRoaXMuc291cmNlVG9rZW5QcmljZUluVVNEID0gU3dhcENvbnRyb2xsZXIuc3RhdGUuc291cmNlVG9rZW5QcmljZUluVVNEO1xuICAgICAgICB0aGlzLnRvVG9rZW4gPSBTd2FwQ29udHJvbGxlci5zdGF0ZS50b1Rva2VuO1xuICAgICAgICB0aGlzLnRvVG9rZW5BbW91bnQgPSBTd2FwQ29udHJvbGxlci5zdGF0ZS50b1Rva2VuQW1vdW50O1xuICAgICAgICB0aGlzLnRvVG9rZW5QcmljZUluVVNEID0gU3dhcENvbnRyb2xsZXIuc3RhdGUudG9Ub2tlblByaWNlSW5VU0Q7XG4gICAgICAgIHRoaXMuaW5wdXRFcnJvciA9IFN3YXBDb250cm9sbGVyLnN0YXRlLmlucHV0RXJyb3I7XG4gICAgICAgIHRoaXMuZmV0Y2hFcnJvciA9IFN3YXBDb250cm9sbGVyLnN0YXRlLmZldGNoRXJyb3I7XG4gICAgICAgIHRoaXMub25EZWJvdW5jZWRHZXRTd2FwQ2FsbGRhdGEgPSBDb3JlSGVscGVyVXRpbC5kZWJvdW5jZShhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBTd2FwQ29udHJvbGxlci5zd2FwVG9rZW5zKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICAgIENoYWluQ29udHJvbGxlci5zdWJzY3JpYmVLZXkoJ2FjdGl2ZUNhaXBOZXR3b3JrJywgbmV3Q2FpcE5ldHdvcmsgPT4gdGhpcy5vbkNhaXBOZXR3b3JrQ2hhbmdlKHtcbiAgICAgICAgICAgIG5ld0NhaXBOZXR3b3JrLFxuICAgICAgICAgICAgcmVzZXRTd2FwU3RhdGU6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsaXplU3dhcFN0YXRlOiBmYWxzZVxuICAgICAgICB9KSk7XG4gICAgICAgIEFjY291bnRDb250cm9sbGVyLnN1YnNjcmliZUtleSgnY2FpcEFkZHJlc3MnLCBuZXdDYWlwQWRkcmVzcyA9PiB0aGlzLm9uQ2FpcEFkZHJlc3NDaGFuZ2Uoe1xuICAgICAgICAgICAgbmV3Q2FpcEFkZHJlc3MsXG4gICAgICAgICAgICByZXNldFN3YXBTdGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWxpemVTd2FwU3RhdGU6IGZhbHNlXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZS5wdXNoKC4uLltcbiAgICAgICAgICAgIENoYWluQ29udHJvbGxlci5zdWJzY3JpYmVLZXkoJ2FjdGl2ZUNhaXBOZXR3b3JrJywgbmV3Q2FpcE5ldHdvcmsgPT4gdGhpcy5vbkNhaXBOZXR3b3JrQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICBuZXdDYWlwTmV0d29yayxcbiAgICAgICAgICAgICAgICByZXNldFN3YXBTdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZVN3YXBTdGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgQWNjb3VudENvbnRyb2xsZXIuc3Vic2NyaWJlS2V5KCdjYWlwQWRkcmVzcycsIG5ld0NhaXBBZGRyZXNzID0+IHRoaXMub25DYWlwQWRkcmVzc0NoYW5nZSh7XG4gICAgICAgICAgICAgICAgbmV3Q2FpcEFkZHJlc3MsXG4gICAgICAgICAgICAgICAgcmVzZXRTd2FwU3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVTd2FwU3RhdGU6IHRydWVcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIE1vZGFsQ29udHJvbGxlci5zdWJzY3JpYmVLZXkoJ29wZW4nLCBpc09wZW4gPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIFN3YXBDb250cm9sbGVyLnJlc2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJvdXRlckNvbnRyb2xsZXIuc3Vic2NyaWJlS2V5KCd2aWV3JywgbmV3Um91dGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbmV3Um91dGUuaW5jbHVkZXMoJ1N3YXAnKSkge1xuICAgICAgICAgICAgICAgICAgICBTd2FwQ29udHJvbGxlci5yZXNldFZhbHVlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgU3dhcENvbnRyb2xsZXIuc3Vic2NyaWJlKG5ld1N0YXRlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gbmV3U3RhdGUuaW5pdGlhbGl6ZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nUXVvdGUgPSBuZXdTdGF0ZS5sb2FkaW5nUXVvdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nUHJpY2VzID0gbmV3U3RhdGUubG9hZGluZ1ByaWNlcztcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdUcmFuc2FjdGlvbiA9IG5ld1N0YXRlLmxvYWRpbmdUcmFuc2FjdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZVRva2VuID0gbmV3U3RhdGUuc291cmNlVG9rZW47XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VUb2tlbkFtb3VudCA9IG5ld1N0YXRlLnNvdXJjZVRva2VuQW1vdW50O1xuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlVG9rZW5QcmljZUluVVNEID0gbmV3U3RhdGUuc291cmNlVG9rZW5QcmljZUluVVNEO1xuICAgICAgICAgICAgICAgIHRoaXMudG9Ub2tlbiA9IG5ld1N0YXRlLnRvVG9rZW47XG4gICAgICAgICAgICAgICAgdGhpcy50b1Rva2VuQW1vdW50ID0gbmV3U3RhdGUudG9Ub2tlbkFtb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLnRvVG9rZW5QcmljZUluVVNEID0gbmV3U3RhdGUudG9Ub2tlblByaWNlSW5VU0Q7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVycm9yID0gbmV3U3RhdGUuaW5wdXRFcnJvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoRXJyb3IgPSBuZXdTdGF0ZS5mZXRjaEVycm9yO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgU3dhcENvbnRyb2xsZXIuaW5pdGlhbGl6ZVN0YXRlKCk7XG4gICAgICAgIHRoaXMud2F0Y2hUb2tlbnNBbmRWYWx1ZXMoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVTd2FwUGFyYW1ldGVycygpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZS5mb3JFYWNoKHVuc3Vic2NyaWJlID0+IHVuc3Vic2NyaWJlPy4oKSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWwgYFxuICAgICAgPHd1aS1mbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiAucGFkZGluZz0ke1snMCcsICdsJywgJ2wnLCAnbCddfSBnYXA9XCJzXCI+XG4gICAgICAgICR7dGhpcy5pbml0aWFsaXplZCA/IHRoaXMudGVtcGxhdGVTd2FwKCkgOiB0aGlzLnRlbXBsYXRlTG9hZGluZygpfVxuICAgICAgPC93dWktZmxleD5cbiAgICBgO1xuICAgIH1cbiAgICB3YXRjaFRva2Vuc0FuZFZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIFN3YXBDb250cm9sbGVyLmdldE5ldHdvcmtUb2tlblByaWNlKCk7XG4gICAgICAgICAgICBTd2FwQ29udHJvbGxlci5nZXRNeVRva2Vuc1dpdGhCYWxhbmNlKCk7XG4gICAgICAgICAgICBTd2FwQ29udHJvbGxlci5zd2FwVG9rZW5zKCk7XG4gICAgICAgIH0sIDEwXzAwMCk7XG4gICAgfVxuICAgIHRlbXBsYXRlU3dhcCgpIHtcbiAgICAgICAgcmV0dXJuIGh0bWwgYFxuICAgICAgPHd1aS1mbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9XCJzXCI+XG4gICAgICAgIDx3dWktZmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGdhcD1cInhzXCIgY2xhc3M9XCJzd2FwLWlucHV0cy1jb250YWluZXJcIj5cbiAgICAgICAgICAke3RoaXMudGVtcGxhdGVUb2tlbklucHV0KCdzb3VyY2VUb2tlbicsIHRoaXMuc291cmNlVG9rZW4pfVxuICAgICAgICAgICR7dGhpcy50ZW1wbGF0ZVRva2VuSW5wdXQoJ3RvVG9rZW4nLCB0aGlzLnRvVG9rZW4pfSAke3RoaXMudGVtcGxhdGVSZXBsYWNlVG9rZW5zQnV0dG9uKCl9XG4gICAgICAgIDwvd3VpLWZsZXg+XG4gICAgICAgICR7dGhpcy50ZW1wbGF0ZURldGFpbHMoKX0gJHt0aGlzLnRlbXBsYXRlQWN0aW9uQnV0dG9uKCl9XG4gICAgICA8L3d1aS1mbGV4PlxuICAgIGA7XG4gICAgfVxuICAgIGFjdGlvbkJ1dHRvbkxhYmVsKCkge1xuICAgICAgICBpZiAodGhpcy5mZXRjaEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1N3YXAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zb3VyY2VUb2tlbiB8fCAhdGhpcy50b1Rva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1NlbGVjdCB0b2tlbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnNvdXJjZVRva2VuQW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gJ0VudGVyIGFtb3VudCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW5wdXRFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ1JldmlldyBzd2FwJztcbiAgICB9XG4gICAgdGVtcGxhdGVSZXBsYWNlVG9rZW5zQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICA8d3VpLWZsZXggY2xhc3M9XCJyZXBsYWNlLXRva2Vucy1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPSR7dGhpcy5vblN3aXRjaFRva2Vucy5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8d3VpLWljb24gbmFtZT1cInJlY3ljbGVIb3Jpem9udGFsXCIgY29sb3I9XCJmZy0yNTBcIiBzaXplPVwibGdcIj48L3d1aS1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvd3VpLWZsZXg+XG4gICAgYDtcbiAgICB9XG4gICAgdGVtcGxhdGVMb2FkaW5nKCkge1xuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICA8d3VpLWZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD1cImxcIj5cbiAgICAgICAgPHd1aS1mbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwieHNcIiBjbGFzcz1cInN3YXAtaW5wdXRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDx3M20tc3dhcC1pbnB1dC1za2VsZXRvbiB0YXJnZXQ9XCJzb3VyY2VUb2tlblwiPjwvdzNtLXN3YXAtaW5wdXQtc2tlbGV0b24+XG4gICAgICAgICAgPHczbS1zd2FwLWlucHV0LXNrZWxldG9uIHRhcmdldD1cInRvVG9rZW5cIj48L3czbS1zd2FwLWlucHV0LXNrZWxldG9uPlxuICAgICAgICAgICR7dGhpcy50ZW1wbGF0ZVJlcGxhY2VUb2tlbnNCdXR0b24oKX1cbiAgICAgICAgPC93dWktZmxleD5cbiAgICAgICAgJHt0aGlzLnRlbXBsYXRlQWN0aW9uQnV0dG9uKCl9XG4gICAgICA8L3d1aS1mbGV4PlxuICAgIGA7XG4gICAgfVxuICAgIHRlbXBsYXRlVG9rZW5JbnB1dCh0YXJnZXQsIHRva2VuKSB7XG4gICAgICAgIGNvbnN0IG15VG9rZW4gPSBTd2FwQ29udHJvbGxlci5zdGF0ZS5teVRva2Vuc1dpdGhCYWxhbmNlPy5maW5kKGN0ID0+IGN0Py5hZGRyZXNzID09PSB0b2tlbj8uYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IHRhcmdldCA9PT0gJ3RvVG9rZW4nID8gdGhpcy50b1Rva2VuQW1vdW50IDogdGhpcy5zb3VyY2VUb2tlbkFtb3VudDtcbiAgICAgICAgY29uc3QgcHJpY2UgPSB0YXJnZXQgPT09ICd0b1Rva2VuJyA/IHRoaXMudG9Ub2tlblByaWNlSW5VU0QgOiB0aGlzLnNvdXJjZVRva2VuUHJpY2VJblVTRDtcbiAgICAgICAgY29uc3QgbWFya2V0VmFsdWUgPSBOdW1iZXJVdGlsLnBhcnNlTG9jYWxTdHJpbmdUb051bWJlcihhbW91bnQpICogcHJpY2U7XG4gICAgICAgIHJldHVybiBodG1sIGA8dzNtLXN3YXAtaW5wdXRcbiAgICAgIC52YWx1ZT0ke3RhcmdldCA9PT0gJ3RvVG9rZW4nID8gdGhpcy50b1Rva2VuQW1vdW50IDogdGhpcy5zb3VyY2VUb2tlbkFtb3VudH1cbiAgICAgIC5kaXNhYmxlZD0ke3RhcmdldCA9PT0gJ3RvVG9rZW4nfVxuICAgICAgLm9uU2V0QW1vdW50PSR7dGhpcy5oYW5kbGVDaGFuZ2VBbW91bnQuYmluZCh0aGlzKX1cbiAgICAgIHRhcmdldD0ke3RhcmdldH1cbiAgICAgIC50b2tlbj0ke3Rva2VufVxuICAgICAgLmJhbGFuY2U9JHtteVRva2VuPy5xdWFudGl0eT8ubnVtZXJpY31cbiAgICAgIC5wcmljZT0ke215VG9rZW4/LnByaWNlfVxuICAgICAgLm1hcmtldFZhbHVlPSR7bWFya2V0VmFsdWV9XG4gICAgICAub25TZXRNYXhWYWx1ZT0ke3RoaXMub25TZXRNYXhWYWx1ZS5iaW5kKHRoaXMpfVxuICAgID48L3czbS1zd2FwLWlucHV0PmA7XG4gICAgfVxuICAgIG9uU2V0TWF4VmFsdWUodGFyZ2V0LCBiYWxhbmNlKSB7XG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gTnVtYmVyVXRpbC5iaWdOdW1iZXIoYmFsYW5jZSB8fCAnMCcpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUFtb3VudCh0YXJnZXQsIG1heFZhbHVlLmd0KDApID8gbWF4VmFsdWUudG9GaXhlZCgyMCkgOiAnMCcpO1xuICAgIH1cbiAgICB0ZW1wbGF0ZURldGFpbHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5zb3VyY2VUb2tlbiB8fCAhdGhpcy50b1Rva2VuIHx8IHRoaXMuaW5wdXRFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0bWwgYDx3M20tc3dhcC1kZXRhaWxzIC5kZXRhaWxzT3Blbj0ke3RoaXMuZGV0YWlsc09wZW59PjwvdzNtLXN3YXAtZGV0YWlscz5gO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2VBbW91bnQodGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgICBTd2FwQ29udHJvbGxlci5jbGVhckVycm9yKCk7XG4gICAgICAgIGlmICh0YXJnZXQgPT09ICdzb3VyY2VUb2tlbicpIHtcbiAgICAgICAgICAgIFN3YXBDb250cm9sbGVyLnNldFNvdXJjZVRva2VuQW1vdW50KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFN3YXBDb250cm9sbGVyLnNldFRvVG9rZW5BbW91bnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25EZWJvdW5jZWRHZXRTd2FwQ2FsbGRhdGEoKTtcbiAgICB9XG4gICAgdGVtcGxhdGVBY3Rpb25CdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGhhdmVOb1Rva2VuU2VsZWN0ZWQgPSAhdGhpcy50b1Rva2VuIHx8ICF0aGlzLnNvdXJjZVRva2VuO1xuICAgICAgICBjb25zdCBoYXZlTm9BbW91bnQgPSAhdGhpcy5zb3VyY2VUb2tlbkFtb3VudDtcbiAgICAgICAgY29uc3QgbG9hZGluZyA9IHRoaXMubG9hZGluZ1F1b3RlIHx8IHRoaXMubG9hZGluZ1ByaWNlcyB8fCB0aGlzLmxvYWRpbmdUcmFuc2FjdGlvbjtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBsb2FkaW5nIHx8IGhhdmVOb1Rva2VuU2VsZWN0ZWQgfHwgaGF2ZU5vQW1vdW50IHx8IHRoaXMuaW5wdXRFcnJvcjtcbiAgICAgICAgcmV0dXJuIGh0bWwgYCA8d3VpLWZsZXggZ2FwPVwieHNcIj5cbiAgICAgIDx3dWktYnV0dG9uXG4gICAgICAgIGRhdGEtdGVzdGlkPVwic3dhcC1hY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cInhzXCJcbiAgICAgICAgdmFyaWFudD0ke2hhdmVOb1Rva2VuU2VsZWN0ZWQgPyAnbmV1dHJhbCcgOiAnbWFpbid9XG4gICAgICAgIC5sb2FkaW5nPSR7bG9hZGluZ31cbiAgICAgICAgLmRpc2FibGVkPSR7ZGlzYWJsZWR9XG4gICAgICAgIEBjbGljaz0ke3RoaXMub25Td2FwUHJldmlldy5iaW5kKHRoaXMpfVxuICAgICAgPlxuICAgICAgICAke3RoaXMuYWN0aW9uQnV0dG9uTGFiZWwoKX1cbiAgICAgIDwvd3VpLWJ1dHRvbj5cbiAgICA8L3d1aS1mbGV4PmA7XG4gICAgfVxuICAgIG9uU3dpdGNoVG9rZW5zKCkge1xuICAgICAgICBTd2FwQ29udHJvbGxlci5zd2l0Y2hUb2tlbnMoKTtcbiAgICB9XG4gICAgYXN5bmMgb25Td2FwUHJldmlldygpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2hhaW5OYW1lc3BhY2UgPSBDaGFpbkNvbnRyb2xsZXIuc3RhdGUuYWN0aXZlQ2hhaW47XG4gICAgICAgIGlmICh0aGlzLmZldGNoRXJyb3IpIHtcbiAgICAgICAgICAgIGF3YWl0IFN3YXBDb250cm9sbGVyLnN3YXBUb2tlbnMoKTtcbiAgICAgICAgfVxuICAgICAgICBFdmVudHNDb250cm9sbGVyLnNlbmRFdmVudCh7XG4gICAgICAgICAgICB0eXBlOiAndHJhY2snLFxuICAgICAgICAgICAgZXZlbnQ6ICdJTklUSUFURV9TV0FQJyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBuZXR3b3JrOiB0aGlzLmNhaXBOZXR3b3JrSWQgfHwgJycsXG4gICAgICAgICAgICAgICAgc3dhcEZyb21Ub2tlbjogdGhpcy5zb3VyY2VUb2tlbj8uc3ltYm9sIHx8ICcnLFxuICAgICAgICAgICAgICAgIHN3YXBUb1Rva2VuOiB0aGlzLnRvVG9rZW4/LnN5bWJvbCB8fCAnJyxcbiAgICAgICAgICAgICAgICBzd2FwRnJvbUFtb3VudDogdGhpcy5zb3VyY2VUb2tlbkFtb3VudCB8fCAnJyxcbiAgICAgICAgICAgICAgICBzd2FwVG9BbW91bnQ6IHRoaXMudG9Ub2tlbkFtb3VudCB8fCAnJyxcbiAgICAgICAgICAgICAgICBpc1NtYXJ0QWNjb3VudDogQWNjb3VudENvbnRyb2xsZXIuc3RhdGUucHJlZmVycmVkQWNjb3VudFR5cGVzPy5bYWN0aXZlQ2hhaW5OYW1lc3BhY2VdID09PVxuICAgICAgICAgICAgICAgICAgICBXM21GcmFtZVJwY0NvbnN0YW50cy5BQ0NPVU5UX1RZUEVTLlNNQVJUX0FDQ09VTlRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFJvdXRlckNvbnRyb2xsZXIucHVzaCgnU3dhcFByZXZpZXcnKTtcbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlU3dhcFBhcmFtZXRlcnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbml0aWFsUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFTd2FwQ29udHJvbGxlci5zdGF0ZS5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgY29uc3Qgd2FpdEZvckluaXRpYWxpemF0aW9uID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBTd2FwQ29udHJvbGxlci5zdWJzY3JpYmVLZXkoJ2luaXRpYWxpemVkJywgaW5pdGlhbGl6ZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlPy4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhd2FpdCB3YWl0Rm9ySW5pdGlhbGl6YXRpb247XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTd2FwUGFyYW1ldGVycyh0aGlzLmluaXRpYWxQYXJhbXMpO1xuICAgIH1cbiAgICBhc3luYyBzZXRTd2FwUGFyYW1ldGVycyh7IGFtb3VudCwgZnJvbVRva2VuLCB0b1Rva2VuIH0pIHtcbiAgICAgICAgaWYgKCFTd2FwQ29udHJvbGxlci5zdGF0ZS50b2tlbnMgfHwgIVN3YXBDb250cm9sbGVyLnN0YXRlLm15VG9rZW5zV2l0aEJhbGFuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHdhaXRGb3JUb2tlbnMgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IFN3YXBDb250cm9sbGVyLnN1YnNjcmliZUtleSgnbXlUb2tlbnNXaXRoQmFsYW5jZScsIHRva2VucyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbnMgJiYgdG9rZW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlPy4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZT8uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXdhaXQgd2FpdEZvclRva2VucztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxUb2tlbnMgPSBbXG4gICAgICAgICAgICAuLi4oU3dhcENvbnRyb2xsZXIuc3RhdGUudG9rZW5zIHx8IFtdKSxcbiAgICAgICAgICAgIC4uLihTd2FwQ29udHJvbGxlci5zdGF0ZS5teVRva2Vuc1dpdGhCYWxhbmNlIHx8IFtdKVxuICAgICAgICBdO1xuICAgICAgICBpZiAoZnJvbVRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGFsbFRva2Vucy5maW5kKHQgPT4gdC5zeW1ib2wudG9Mb3dlckNhc2UoKSA9PT0gZnJvbVRva2VuLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgU3dhcENvbnRyb2xsZXIuc2V0U291cmNlVG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0b1Rva2VuKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGFsbFRva2Vucy5maW5kKHQgPT4gdC5zeW1ib2wudG9Mb3dlckNhc2UoKSA9PT0gdG9Ub2tlbi50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgIFN3YXBDb250cm9sbGVyLnNldFRvVG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhbW91bnQgJiYgIWlzTmFOKE51bWJlcihhbW91bnQpKSkge1xuICAgICAgICAgICAgU3dhcENvbnRyb2xsZXIuc2V0U291cmNlVG9rZW5BbW91bnQoYW1vdW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNhaXBBZGRyZXNzQ2hhbmdlKHsgbmV3Q2FpcEFkZHJlc3MsIHJlc2V0U3dhcFN0YXRlLCBpbml0aWFsaXplU3dhcFN0YXRlIH0pIHtcbiAgICAgICAgaWYgKHRoaXMuY2FpcEFkZHJlc3MgIT09IG5ld0NhaXBBZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNhaXBBZGRyZXNzID0gbmV3Q2FpcEFkZHJlc3M7XG4gICAgICAgICAgICBpZiAocmVzZXRTd2FwU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBTd2FwQ29udHJvbGxlci5yZXNldFN0YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5pdGlhbGl6ZVN3YXBTdGF0ZSkge1xuICAgICAgICAgICAgICAgIFN3YXBDb250cm9sbGVyLmluaXRpYWxpemVTdGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2FpcE5ldHdvcmtDaGFuZ2UoeyBuZXdDYWlwTmV0d29yaywgcmVzZXRTd2FwU3RhdGUsIGluaXRpYWxpemVTd2FwU3RhdGUgfSkge1xuICAgICAgICBpZiAodGhpcy5jYWlwTmV0d29ya0lkICE9PSBuZXdDYWlwTmV0d29yaz8uY2FpcE5ldHdvcmtJZCkge1xuICAgICAgICAgICAgdGhpcy5jYWlwTmV0d29ya0lkID0gbmV3Q2FpcE5ldHdvcms/LmNhaXBOZXR3b3JrSWQ7XG4gICAgICAgICAgICBpZiAocmVzZXRTd2FwU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBTd2FwQ29udHJvbGxlci5yZXNldFN0YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5pdGlhbGl6ZVN3YXBTdGF0ZSkge1xuICAgICAgICAgICAgICAgIFN3YXBDb250cm9sbGVyLmluaXRpYWxpemVTdGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblczbVN3YXBWaWV3LnN0eWxlcyA9IHN0eWxlcztcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG5dLCBXM21Td2FwVmlldy5wcm90b3R5cGUsIFwiaW5pdGlhbFBhcmFtc1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFZpZXcucHJvdG90eXBlLCBcImludGVydmFsXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwVmlldy5wcm90b3R5cGUsIFwiZGV0YWlsc09wZW5cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBWaWV3LnByb3RvdHlwZSwgXCJjYWlwQWRkcmVzc1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFZpZXcucHJvdG90eXBlLCBcImNhaXBOZXR3b3JrSWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBWaWV3LnByb3RvdHlwZSwgXCJpbml0aWFsaXplZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFZpZXcucHJvdG90eXBlLCBcImxvYWRpbmdRdW90ZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFZpZXcucHJvdG90eXBlLCBcImxvYWRpbmdQcmljZXNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBWaWV3LnByb3RvdHlwZSwgXCJsb2FkaW5nVHJhbnNhY3Rpb25cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBWaWV3LnByb3RvdHlwZSwgXCJzb3VyY2VUb2tlblwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFZpZXcucHJvdG90eXBlLCBcInNvdXJjZVRva2VuQW1vdW50XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwVmlldy5wcm90b3R5cGUsIFwic291cmNlVG9rZW5QcmljZUluVVNEXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwVmlldy5wcm90b3R5cGUsIFwidG9Ub2tlblwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFZpZXcucHJvdG90eXBlLCBcInRvVG9rZW5BbW91bnRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBWaWV3LnByb3RvdHlwZSwgXCJ0b1Rva2VuUHJpY2VJblVTRFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFZpZXcucHJvdG90eXBlLCBcImlucHV0RXJyb3JcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBWaWV3LnByb3RvdHlwZSwgXCJmZXRjaEVycm9yXCIsIHZvaWQgMCk7XG5XM21Td2FwVmlldyA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUVsZW1lbnQoJ3czbS1zd2FwLXZpZXcnKVxuXSwgVzNtU3dhcFZpZXcpO1xuZXhwb3J0IHsgVzNtU3dhcFZpZXcgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XG5leHBvcnQgZGVmYXVsdCBjc3MgYFxuICA6aG9zdCA+IHd1aS1mbGV4OmZpcnN0LWNoaWxkIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIH1cblxuICA6aG9zdCA+IHd1aS1mbGV4OmZpcnN0LWNoaWxkOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wcmV2aWV3LWNvbnRhaW5lcixcbiAgLmRldGFpbHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC50b2tlbi1pbWFnZSB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cblxuICB3dWktbG9hZGluZy1oZXhhZ29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAudG9rZW4taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogdmFyKC0td3VpLXNwYWNpbmcteHhzKTtcbiAgICBwYWRkaW5nOiB2YXIoLS13dWktc3BhY2luZy14cyk7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwMik7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBsaW5lYXI7XG4gIH1cblxuICAudG9rZW4taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDA1KTtcbiAgfVxuXG4gIC5wcmV2aWV3LXRva2VuLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kZXRhaWxzLXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogdmFyKC0td3VpLXNwYWNpbmctcykgdmFyKC0td3VpLXNwYWNpbmcteGwpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXd1aS1ib3JkZXItcmFkaXVzLXh4cyk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDAyKTtcbiAgfVxuXG4gIC5hY3Rpb24tYnV0dG9ucy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogdmFyKC0td3VpLXNwYWNpbmcteHMpO1xuICB9XG5cbiAgLmFjdGlvbi1idXR0b25zLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS13dWktYm9yZGVyLXJhZGl1cy14cyk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMTApO1xuICB9XG5cbiAgLmFjdGlvbi1idXR0b25zLWNvbnRhaW5lciA+IGJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAuYWN0aW9uLWJ1dHRvbiA+IHd1aS1sb2FkaW5nLXNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5jYW5jZWwtYnV0dG9uOmhvdmVyLFxuICAuYWN0aW9uLWJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmFjdGlvbi1idXR0b25zLWNvbnRhaW5lciA+IHd1aS1idXR0b24uY2FuY2VsLWJ1dHRvbiB7XG4gICAgZmxleDogMjtcbiAgfVxuXG4gIC5hY3Rpb24tYnV0dG9ucy1jb250YWluZXIgPiB3dWktYnV0dG9uLmFjdGlvbi1idXR0b24ge1xuICAgIGZsZXg6IDQ7XG4gIH1cblxuICAuYWN0aW9uLWJ1dHRvbnMtY29udGFpbmVyID4gYnV0dG9uLmFjdGlvbi1idXR0b24gPiB3dWktdGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLmRldGFpbHMtY29udGFpbmVyID4gd3VpLWZsZXgge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwMik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0td3VpLWJvcmRlci1yYWRpdXMteHhzKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kZXRhaWxzLWNvbnRhaW5lciA+IHd1aS1mbGV4ID4gYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwYWRkaW5nOiB2YXIoLS13dWktc3BhY2luZy1zKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS13dWktYm9yZGVyLXJhZGl1cy14eHMpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBsaW5lYXI7XG4gIH1cblxuICAuZGV0YWlscy1jb250YWluZXIgPiB3dWktZmxleCA+IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDAyKTtcbiAgfVxuXG4gIC5kZXRhaWxzLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiB2YXIoLS13dWktc3BhY2luZy0xeHMpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5kZXRhaWxzLWNvbnRlbnQtY29udGFpbmVyID4gd3VpLWZsZXgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmRldGFpbHMtcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiB2YXIoLS13dWktc3BhY2luZy1zKSB2YXIoLS13dWktc3BhY2luZy14bCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0td3VpLWJvcmRlci1yYWRpdXMteHhzKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDIpO1xuICB9XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmpzLm1hcCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBBY2NvdW50Q29udHJvbGxlciwgQ2hhaW5Db250cm9sbGVyLCBSb3V0ZXJDb250cm9sbGVyLCBTd2FwQ29udHJvbGxlciB9IGZyb20gJ0ByZW93bi9hcHBraXQtY29udHJvbGxlcnMnO1xuaW1wb3J0IHsgVWlIZWxwZXJVdGlsLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnQHJlb3duL2FwcGtpdC11aSc7XG5pbXBvcnQgJ0ByZW93bi9hcHBraXQtdWkvd3VpLWJ1dHRvbic7XG5pbXBvcnQgJ0ByZW93bi9hcHBraXQtdWkvd3VpLWZsZXgnO1xuaW1wb3J0ICdAcmVvd24vYXBwa2l0LXVpL3d1aS1pY29uJztcbmltcG9ydCAnQHJlb3duL2FwcGtpdC11aS93dWktdGV4dCc7XG5pbXBvcnQgJ0ByZW93bi9hcHBraXQtdWkvd3VpLXRva2VuLWJ1dHRvbic7XG5pbXBvcnQgJy4uLy4uL3BhcnRpYWxzL3czbS1zd2FwLWRldGFpbHMvaW5kZXguanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5qcyc7XG5sZXQgVzNtU3dhcFByZXZpZXdWaWV3ID0gY2xhc3MgVzNtU3dhcFByZXZpZXdWaWV3IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBbXTtcbiAgICAgICAgdGhpcy5kZXRhaWxzT3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuYXBwcm92YWxUcmFuc2FjdGlvbiA9IFN3YXBDb250cm9sbGVyLnN0YXRlLmFwcHJvdmFsVHJhbnNhY3Rpb247XG4gICAgICAgIHRoaXMuc3dhcFRyYW5zYWN0aW9uID0gU3dhcENvbnRyb2xsZXIuc3RhdGUuc3dhcFRyYW5zYWN0aW9uO1xuICAgICAgICB0aGlzLnNvdXJjZVRva2VuID0gU3dhcENvbnRyb2xsZXIuc3RhdGUuc291cmNlVG9rZW47XG4gICAgICAgIHRoaXMuc291cmNlVG9rZW5BbW91bnQgPSBTd2FwQ29udHJvbGxlci5zdGF0ZS5zb3VyY2VUb2tlbkFtb3VudCA/PyAnJztcbiAgICAgICAgdGhpcy5zb3VyY2VUb2tlblByaWNlSW5VU0QgPSBTd2FwQ29udHJvbGxlci5zdGF0ZS5zb3VyY2VUb2tlblByaWNlSW5VU0Q7XG4gICAgICAgIHRoaXMudG9Ub2tlbiA9IFN3YXBDb250cm9sbGVyLnN0YXRlLnRvVG9rZW47XG4gICAgICAgIHRoaXMudG9Ub2tlbkFtb3VudCA9IFN3YXBDb250cm9sbGVyLnN0YXRlLnRvVG9rZW5BbW91bnQgPz8gJyc7XG4gICAgICAgIHRoaXMudG9Ub2tlblByaWNlSW5VU0QgPSBTd2FwQ29udHJvbGxlci5zdGF0ZS50b1Rva2VuUHJpY2VJblVTRDtcbiAgICAgICAgdGhpcy5jYWlwTmV0d29yayA9IENoYWluQ29udHJvbGxlci5zdGF0ZS5hY3RpdmVDYWlwTmV0d29yaztcbiAgICAgICAgdGhpcy5iYWxhbmNlU3ltYm9sID0gQWNjb3VudENvbnRyb2xsZXIuc3RhdGUuYmFsYW5jZVN5bWJvbDtcbiAgICAgICAgdGhpcy5pbnB1dEVycm9yID0gU3dhcENvbnRyb2xsZXIuc3RhdGUuaW5wdXRFcnJvcjtcbiAgICAgICAgdGhpcy5sb2FkaW5nUXVvdGUgPSBTd2FwQ29udHJvbGxlci5zdGF0ZS5sb2FkaW5nUXVvdGU7XG4gICAgICAgIHRoaXMubG9hZGluZ0FwcHJvdmFsVHJhbnNhY3Rpb24gPSBTd2FwQ29udHJvbGxlci5zdGF0ZS5sb2FkaW5nQXBwcm92YWxUcmFuc2FjdGlvbjtcbiAgICAgICAgdGhpcy5sb2FkaW5nQnVpbGRUcmFuc2FjdGlvbiA9IFN3YXBDb250cm9sbGVyLnN0YXRlLmxvYWRpbmdCdWlsZFRyYW5zYWN0aW9uO1xuICAgICAgICB0aGlzLmxvYWRpbmdUcmFuc2FjdGlvbiA9IFN3YXBDb250cm9sbGVyLnN0YXRlLmxvYWRpbmdUcmFuc2FjdGlvbjtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZS5wdXNoKC4uLltcbiAgICAgICAgICAgIEFjY291bnRDb250cm9sbGVyLnN1YnNjcmliZUtleSgnYmFsYW5jZVN5bWJvbCcsIG5ld0JhbGFuY2VTeW1ib2wgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGFuY2VTeW1ib2wgIT09IG5ld0JhbGFuY2VTeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyQ29udHJvbGxlci5nb0JhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIENoYWluQ29udHJvbGxlci5zdWJzY3JpYmVLZXkoJ2FjdGl2ZUNhaXBOZXR3b3JrJywgbmV3Q2FpcE5ldHdvcmsgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhaXBOZXR3b3JrICE9PSBuZXdDYWlwTmV0d29yaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhaXBOZXR3b3JrID0gbmV3Q2FpcE5ldHdvcms7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBTd2FwQ29udHJvbGxlci5zdWJzY3JpYmUobmV3U3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwcm92YWxUcmFuc2FjdGlvbiA9IG5ld1N0YXRlLmFwcHJvdmFsVHJhbnNhY3Rpb247XG4gICAgICAgICAgICAgICAgdGhpcy5zd2FwVHJhbnNhY3Rpb24gPSBuZXdTdGF0ZS5zd2FwVHJhbnNhY3Rpb247XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VUb2tlbiA9IG5ld1N0YXRlLnNvdXJjZVRva2VuO1xuICAgICAgICAgICAgICAgIHRoaXMudG9Ub2tlbiA9IG5ld1N0YXRlLnRvVG9rZW47XG4gICAgICAgICAgICAgICAgdGhpcy50b1Rva2VuUHJpY2VJblVTRCA9IG5ld1N0YXRlLnRvVG9rZW5QcmljZUluVVNEO1xuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlVG9rZW5BbW91bnQgPSBuZXdTdGF0ZS5zb3VyY2VUb2tlbkFtb3VudCA/PyAnJztcbiAgICAgICAgICAgICAgICB0aGlzLnRvVG9rZW5BbW91bnQgPSBuZXdTdGF0ZS50b1Rva2VuQW1vdW50ID8/ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFcnJvciA9IG5ld1N0YXRlLmlucHV0RXJyb3I7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1N0YXRlLmlucHV0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyQ29udHJvbGxlci5nb0JhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nUXVvdGUgPSBuZXdTdGF0ZS5sb2FkaW5nUXVvdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nQXBwcm92YWxUcmFuc2FjdGlvbiA9IG5ld1N0YXRlLmxvYWRpbmdBcHByb3ZhbFRyYW5zYWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0J1aWxkVHJhbnNhY3Rpb24gPSBuZXdTdGF0ZS5sb2FkaW5nQnVpbGRUcmFuc2FjdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdUcmFuc2FjdGlvbiA9IG5ld1N0YXRlLmxvYWRpbmdUcmFuc2FjdGlvbjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIFN3YXBDb250cm9sbGVyLmdldFRyYW5zYWN0aW9uKCk7XG4gICAgICAgIHRoaXMucmVmcmVzaFRyYW5zYWN0aW9uKCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlLmZvckVhY2godW5zdWJzY3JpYmUgPT4gdW5zdWJzY3JpYmU/LigpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICA8d3VpLWZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIC5wYWRkaW5nPSR7WycwJywgJ2wnLCAnbCcsICdsJ119IGdhcD1cInNcIj5cbiAgICAgICAgJHt0aGlzLnRlbXBsYXRlU3dhcCgpfVxuICAgICAgPC93dWktZmxleD5cbiAgICBgO1xuICAgIH1cbiAgICByZWZyZXNoVHJhbnNhY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIVN3YXBDb250cm9sbGVyLmdldEFwcHJvdmFsTG9hZGluZ1N0YXRlKCkpIHtcbiAgICAgICAgICAgICAgICBTd2FwQ29udHJvbGxlci5nZXRUcmFuc2FjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMF8wMDApO1xuICAgIH1cbiAgICB0ZW1wbGF0ZVN3YXAoKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVRva2VuVGV4dCA9IGAke1VpSGVscGVyVXRpbC5mb3JtYXROdW1iZXJUb0xvY2FsU3RyaW5nKHBhcnNlRmxvYXQodGhpcy5zb3VyY2VUb2tlbkFtb3VudCkpfSAke3RoaXMuc291cmNlVG9rZW4/LnN5bWJvbH1gO1xuICAgICAgICBjb25zdCB0b1Rva2VuVGV4dCA9IGAke1VpSGVscGVyVXRpbC5mb3JtYXROdW1iZXJUb0xvY2FsU3RyaW5nKHBhcnNlRmxvYXQodGhpcy50b1Rva2VuQW1vdW50KSl9ICR7dGhpcy50b1Rva2VuPy5zeW1ib2x9YDtcbiAgICAgICAgY29uc3Qgc291cmNlVG9rZW5WYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5zb3VyY2VUb2tlbkFtb3VudCkgKiB0aGlzLnNvdXJjZVRva2VuUHJpY2VJblVTRDtcbiAgICAgICAgY29uc3QgdG9Ub2tlblZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnRvVG9rZW5BbW91bnQpICogdGhpcy50b1Rva2VuUHJpY2VJblVTRDtcbiAgICAgICAgY29uc3Qgc2VudFByaWNlID0gVWlIZWxwZXJVdGlsLmZvcm1hdE51bWJlclRvTG9jYWxTdHJpbmcoc291cmNlVG9rZW5WYWx1ZSk7XG4gICAgICAgIGNvbnN0IHJlY2VpdmVQcmljZSA9IFVpSGVscGVyVXRpbC5mb3JtYXROdW1iZXJUb0xvY2FsU3RyaW5nKHRvVG9rZW5WYWx1ZSk7XG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdRdW90ZSB8fFxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQnVpbGRUcmFuc2FjdGlvbiB8fFxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nVHJhbnNhY3Rpb24gfHxcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0FwcHJvdmFsVHJhbnNhY3Rpb247XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDx3dWktZmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGdhcD1cImxcIj5cbiAgICAgICAgPHd1aS1mbGV4IGNsYXNzPVwicHJldmlldy1jb250YWluZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBnYXA9XCJsXCI+XG4gICAgICAgICAgPHd1aS1mbGV4XG4gICAgICAgICAgICBjbGFzcz1cInByZXZpZXctdG9rZW4tZGV0YWlscy1jb250YWluZXJcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgZ2FwPVwibFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHd1aS1mbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIGdhcD1cIjR4c1wiPlxuICAgICAgICAgICAgICA8d3VpLXRleHQgdmFyaWFudD1cInNtYWxsLTQwMFwiIGNvbG9yPVwiZmctMTUwXCI+U2VuZDwvd3VpLXRleHQ+XG4gICAgICAgICAgICAgIDx3dWktdGV4dCB2YXJpYW50PVwicGFyYWdyYXBoLTQwMFwiIGNvbG9yPVwiZmctMTAwXCI+JCR7c2VudFByaWNlfTwvd3VpLXRleHQ+XG4gICAgICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgICAgICAgPHd1aS10b2tlbi1idXR0b25cbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvdy1yZXZlcnNlXCJcbiAgICAgICAgICAgICAgdGV4dD0ke3NvdXJjZVRva2VuVGV4dH1cbiAgICAgICAgICAgICAgaW1hZ2VTcmM9JHt0aGlzLnNvdXJjZVRva2VuPy5sb2dvVXJpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC93dWktdG9rZW4tYnV0dG9uPlxuICAgICAgICAgIDwvd3VpLWZsZXg+XG4gICAgICAgICAgPHd1aS1pY29uIG5hbWU9XCJyZWN5Y2xlSG9yaXpvbnRhbFwiIGNvbG9yPVwiZmctMjAwXCIgc2l6ZT1cIm1kXCI+PC93dWktaWNvbj5cbiAgICAgICAgICA8d3VpLWZsZXhcbiAgICAgICAgICAgIGNsYXNzPVwicHJldmlldy10b2tlbi1kZXRhaWxzLWNvbnRhaW5lclwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICBnYXA9XCJsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8d3VpLWZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgZ2FwPVwiNHhzXCI+XG4gICAgICAgICAgICAgIDx3dWktdGV4dCB2YXJpYW50PVwic21hbGwtNDAwXCIgY29sb3I9XCJmZy0xNTBcIj5SZWNlaXZlPC93dWktdGV4dD5cbiAgICAgICAgICAgICAgPHd1aS10ZXh0IHZhcmlhbnQ9XCJwYXJhZ3JhcGgtNDAwXCIgY29sb3I9XCJmZy0xMDBcIj4kJHtyZWNlaXZlUHJpY2V9PC93dWktdGV4dD5cbiAgICAgICAgICAgIDwvd3VpLWZsZXg+XG4gICAgICAgICAgICA8d3VpLXRva2VuLWJ1dHRvblxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93LXJldmVyc2VcIlxuICAgICAgICAgICAgICB0ZXh0PSR7dG9Ub2tlblRleHR9XG4gICAgICAgICAgICAgIGltYWdlU3JjPSR7dGhpcy50b1Rva2VuPy5sb2dvVXJpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC93dWktdG9rZW4tYnV0dG9uPlxuICAgICAgICAgIDwvd3VpLWZsZXg+XG4gICAgICAgIDwvd3VpLWZsZXg+XG5cbiAgICAgICAgJHt0aGlzLnRlbXBsYXRlRGV0YWlscygpfVxuXG4gICAgICAgIDx3dWktZmxleCBmbGV4RGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZ2FwPVwieHNcIj5cbiAgICAgICAgICA8d3VpLWljb24gc2l6ZT1cInNtXCIgY29sb3I9XCJmZy0yMDBcIiBuYW1lPVwiaW5mb0NpcmNsZVwiPjwvd3VpLWljb24+XG4gICAgICAgICAgPHd1aS10ZXh0IHZhcmlhbnQ9XCJzbWFsbC00MDBcIiBjb2xvcj1cImZnLTIwMFwiPlJldmlldyB0cmFuc2FjdGlvbiBjYXJlZnVsbHk8L3d1aS10ZXh0PlxuICAgICAgICA8L3d1aS1mbGV4PlxuXG4gICAgICAgIDx3dWktZmxleFxuICAgICAgICAgIGNsYXNzPVwiYWN0aW9uLWJ1dHRvbnMtY29udGFpbmVyXCJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgIGdhcD1cInhzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx3dWktYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cImNhbmNlbC1idXR0b25cIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwieHNcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm5ldXRyYWxcIlxuICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5vbkNhbmNlbFRyYW5zYWN0aW9uLmJpbmQodGhpcyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHd1aS10ZXh0IHZhcmlhbnQ9XCJwYXJhZ3JhcGgtNjAwXCIgY29sb3I9XCJmZy0yMDBcIj5DYW5jZWw8L3d1aS10ZXh0PlxuICAgICAgICAgIDwvd3VpLWJ1dHRvbj5cbiAgICAgICAgICA8d3VpLWJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cInhzXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJtYWluXCJcbiAgICAgICAgICAgID9sb2FkaW5nPSR7bG9hZGluZ31cbiAgICAgICAgICAgID9kaXNhYmxlZD0ke2xvYWRpbmd9XG4gICAgICAgICAgICBAY2xpY2s9JHt0aGlzLm9uU2VuZFRyYW5zYWN0aW9uLmJpbmQodGhpcyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHd1aS10ZXh0IHZhcmlhbnQ9XCJwYXJhZ3JhcGgtNjAwXCIgY29sb3I9XCJpbnZlcnNlLTEwMFwiPlxuICAgICAgICAgICAgICAke3RoaXMuYWN0aW9uQnV0dG9uTGFiZWwoKX1cbiAgICAgICAgICAgIDwvd3VpLXRleHQ+XG4gICAgICAgICAgPC93dWktYnV0dG9uPlxuICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgPC93dWktZmxleD5cbiAgICBgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZURldGFpbHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5zb3VyY2VUb2tlbiB8fCAhdGhpcy50b1Rva2VuIHx8IHRoaXMuaW5wdXRFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0bWwgYDx3M20tc3dhcC1kZXRhaWxzIC5kZXRhaWxzT3Blbj0ke3RoaXMuZGV0YWlsc09wZW59PjwvdzNtLXN3YXAtZGV0YWlscz5gO1xuICAgIH1cbiAgICBhY3Rpb25CdXR0b25MYWJlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ0FwcHJvdmFsVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAnQXBwcm92aW5nLi4uJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hcHByb3ZhbFRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0FwcHJvdmUnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnU3dhcCc7XG4gICAgfVxuICAgIG9uQ2FuY2VsVHJhbnNhY3Rpb24oKSB7XG4gICAgICAgIFJvdXRlckNvbnRyb2xsZXIuZ29CYWNrKCk7XG4gICAgfVxuICAgIG9uU2VuZFRyYW5zYWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5hcHByb3ZhbFRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICBTd2FwQ29udHJvbGxlci5zZW5kVHJhbnNhY3Rpb25Gb3JBcHByb3ZhbCh0aGlzLmFwcHJvdmFsVHJhbnNhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgU3dhcENvbnRyb2xsZXIuc2VuZFRyYW5zYWN0aW9uRm9yU3dhcCh0aGlzLnN3YXBUcmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuVzNtU3dhcFByZXZpZXdWaWV3LnN0eWxlcyA9IHN0eWxlcztcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBQcmV2aWV3Vmlldy5wcm90b3R5cGUsIFwiaW50ZXJ2YWxcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBQcmV2aWV3Vmlldy5wcm90b3R5cGUsIFwiZGV0YWlsc09wZW5cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBQcmV2aWV3Vmlldy5wcm90b3R5cGUsIFwiYXBwcm92YWxUcmFuc2FjdGlvblwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFByZXZpZXdWaWV3LnByb3RvdHlwZSwgXCJzd2FwVHJhbnNhY3Rpb25cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBQcmV2aWV3Vmlldy5wcm90b3R5cGUsIFwic291cmNlVG9rZW5cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBQcmV2aWV3Vmlldy5wcm90b3R5cGUsIFwic291cmNlVG9rZW5BbW91bnRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBQcmV2aWV3Vmlldy5wcm90b3R5cGUsIFwic291cmNlVG9rZW5QcmljZUluVVNEXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwUHJldmlld1ZpZXcucHJvdG90eXBlLCBcInRvVG9rZW5cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBQcmV2aWV3Vmlldy5wcm90b3R5cGUsIFwidG9Ub2tlbkFtb3VudFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFByZXZpZXdWaWV3LnByb3RvdHlwZSwgXCJ0b1Rva2VuUHJpY2VJblVTRFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFByZXZpZXdWaWV3LnByb3RvdHlwZSwgXCJjYWlwTmV0d29ya1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFByZXZpZXdWaWV3LnByb3RvdHlwZSwgXCJiYWxhbmNlU3ltYm9sXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwUHJldmlld1ZpZXcucHJvdG90eXBlLCBcImlucHV0RXJyb3JcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBQcmV2aWV3Vmlldy5wcm90b3R5cGUsIFwibG9hZGluZ1F1b3RlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwUHJldmlld1ZpZXcucHJvdG90eXBlLCBcImxvYWRpbmdBcHByb3ZhbFRyYW5zYWN0aW9uXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwUHJldmlld1ZpZXcucHJvdG90eXBlLCBcImxvYWRpbmdCdWlsZFRyYW5zYWN0aW9uXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwUHJldmlld1ZpZXcucHJvdG90eXBlLCBcImxvYWRpbmdUcmFuc2FjdGlvblwiLCB2b2lkIDApO1xuVzNtU3dhcFByZXZpZXdWaWV3ID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgndzNtLXN3YXAtcHJldmlldy12aWV3Jylcbl0sIFczbVN3YXBQcmV2aWV3Vmlldyk7XG5leHBvcnQgeyBXM21Td2FwUHJldmlld1ZpZXcgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XG5leHBvcnQgZGVmYXVsdCBjc3MgYFxuICA6aG9zdCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIH1cblxuICA6aG9zdCA+IHd1aS1mbGV4IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogdmFyKC0td3VpLXNwYWNpbmctcyk7XG4gICAgcGFkZGluZzogdmFyKC0td3VpLXNwYWNpbmcteHMpO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXd1aS1zcGFjaW5nLWwpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXd1aS1ib3JkZXItcmFkaXVzLXhzKTtcbiAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLWZnLTI1MCk7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgIGJhY2tncm91bmQtY29sb3IgdmFyKC0td3VpLWVhc2Utb3V0LXBvd2VyLTEpIHZhcigtLXd1aS1kdXJhdGlvbi1sZyksXG4gICAgICBvcGFjaXR5IHZhcigtLXd1aS1lYXNlLW91dC1wb3dlci0xKSB2YXIoLS13dWktZHVyYXRpb24tbGcpO1xuICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5O1xuICB9XG5cbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAgIDpob3N0ID4gd3VpLWZsZXg6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDAyKTtcbiAgICB9XG5cbiAgICA6aG9zdCA+IHd1aS1mbGV4OmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDUpO1xuICAgIH1cbiAgfVxuXG4gIDpob3N0KFtkaXNhYmxlZF0pID4gd3VpLWZsZXgge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuXG4gIDpob3N0KFtkaXNhYmxlZF0pID4gd3VpLWZsZXg6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgOmhvc3QgPiB3dWktZmxleCA+IHd1aS1mbGV4IHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgOmhvc3QgPiB3dWktZmxleCA+IHd1aS1pbWFnZSxcbiAgOmhvc3QgPiB3dWktZmxleCA+IC50b2tlbi1pdGVtLWltYWdlLXBsYWNlaG9sZGVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXd1aS1ib3JkZXItcmFkaXVzLTN4bCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgOmhvc3QgPiB3dWktZmxleCA+IC50b2tlbi1pdGVtLWltYWdlLXBsYWNlaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICA6aG9zdCA+IHd1aS1mbGV4ID4gd3VpLWltYWdlOjphZnRlcixcbiAgOmhvc3QgPiB3dWktZmxleCA+IC50b2tlbi1pdGVtLWltYWdlLXBsYWNlaG9sZGVyOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGluc2V0OiAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMTApO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXd1aS1ib3JkZXItcmFkaXVzLWwpO1xuICB9XG5cbiAgYnV0dG9uID4gd3VpLWljb24tYm94W2RhdGEtdmFyaWFudD0nc3F1YXJlLWJsdWUnXSB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0td3VpLWJvcmRlci1yYWRpdXMtM3hzKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgfVxuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlcy5qcy5tYXAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IE51bWJlclV0aWwgfSBmcm9tICdAcmVvd24vYXBwa2l0LWNvbW1vbic7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvd3VpLWljb24vaW5kZXguanMnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3d1aS1pbWFnZS9pbmRleC5qcyc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvd3VpLXRleHQvaW5kZXguanMnO1xuaW1wb3J0ICcuLi8uLi9sYXlvdXQvd3VpLWZsZXgvaW5kZXguanMnO1xuaW1wb3J0IHsgZWxlbWVudFN0eWxlcywgcmVzZXRTdHlsZXMgfSBmcm9tICcuLi8uLi91dGlscy9UaGVtZVV0aWwuanMnO1xuaW1wb3J0IHsgVWlIZWxwZXJVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvVWlIZWxwZXJVdGlsLmpzJztcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9XZWJDb21wb25lbnRzVXRpbC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmpzJztcbmxldCBXdWlUb2tlbkxpc3RJdGVtID0gY2xhc3MgV3VpVG9rZW5MaXN0SXRlbSBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKCgpID0+IHVuZGVmaW5lZCk7XG4gICAgICAgIHRoaXMuaW1hZ2VTcmMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucHJpY2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbWFnZUVycm9yID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHsgdGhyZXNob2xkOiAwLjEgfSk7XG4gICAgfVxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5hbW91bnQgJiYgdGhpcy5wcmljZSA/IE51bWJlclV0aWwubXVsdGlwbHkodGhpcy5wcmljZSwgdGhpcy5hbW91bnQpPy50b0ZpeGVkKDMpIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIGh0bWwgYFxuICAgICAgPHd1aS1mbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgJHt0aGlzLnZpc3VhbFRlbXBsYXRlKCl9XG4gICAgICAgIDx3dWktZmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPVwiM3hzXCI+XG4gICAgICAgICAgPHd1aS1mbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgPHd1aS10ZXh0IHZhcmlhbnQ9XCJwYXJhZ3JhcGgtNTAwXCIgY29sb3I9XCJmZy0xMDBcIiBsaW5lQ2xhbXA9XCIxXCI+JHt0aGlzLm5hbWV9PC93dWktdGV4dD5cbiAgICAgICAgICAgICR7dmFsdWVcbiAgICAgICAgICAgID8gaHRtbCBgXG4gICAgICAgICAgICAgICAgICA8d3VpLXRleHQgdmFyaWFudD1cInBhcmFncmFwaC01MDBcIiBjb2xvcj1cImZnLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAkJHtVaUhlbHBlclV0aWwuZm9ybWF0TnVtYmVyVG9Mb2NhbFN0cmluZyh2YWx1ZSwgMyl9XG4gICAgICAgICAgICAgICAgICA8L3d1aS10ZXh0PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgICAgIDx3dWktZmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgIDx3dWktdGV4dCB2YXJpYW50PVwic21hbGwtNDAwXCIgY29sb3I9XCJmZy0yMDBcIiBsaW5lQ2xhbXA9XCIxXCI+JHt0aGlzLnN5bWJvbH08L3d1aS10ZXh0PlxuICAgICAgICAgICAgJHt0aGlzLmFtb3VudFxuICAgICAgICAgICAgPyBodG1sIGA8d3VpLXRleHQgdmFyaWFudD1cInNtYWxsLTQwMFwiIGNvbG9yPVwiZmctMjAwXCI+XG4gICAgICAgICAgICAgICAgICAke1VpSGVscGVyVXRpbC5mb3JtYXROdW1iZXJUb0xvY2FsU3RyaW5nKHRoaXMuYW1vdW50LCA0KX1cbiAgICAgICAgICAgICAgICA8L3d1aS10ZXh0PmBcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgPC93dWktZmxleD5cbiAgICBgO1xuICAgIH1cbiAgICB2aXN1YWxUZW1wbGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWwgYDx3dWktZmxleCBjbGFzcz1cInRva2VuLWl0ZW0taW1hZ2UtcGxhY2Vob2xkZXJcIj5cbiAgICAgICAgPHd1aS1pY29uIG5hbWU9XCJpbWFnZVwiIGNvbG9yPVwiaW5oZXJpdFwiPjwvd3VpLWljb24+XG4gICAgICA8L3d1aS1mbGV4PmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VTcmMpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sIGA8d3VpLWltYWdlXG4gICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgIHNyYz0ke3RoaXMuaW1hZ2VTcmN9XG4gICAgICAgIEBvbkxvYWRFcnJvcj0ke3RoaXMuaW1hZ2VMb2FkRXJyb3J9XG4gICAgICA+PC93dWktaW1hZ2U+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaW1hZ2VMb2FkRXJyb3IoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VFcnJvciA9IHRydWU7XG4gICAgfVxufTtcbld1aVRva2VuTGlzdEl0ZW0uc3R5bGVzID0gW3Jlc2V0U3R5bGVzLCBlbGVtZW50U3R5bGVzLCBzdHlsZXNdO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgV3VpVG9rZW5MaXN0SXRlbS5wcm90b3R5cGUsIFwiaW1hZ2VTcmNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aVRva2VuTGlzdEl0ZW0ucHJvdG90eXBlLCBcIm5hbWVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aVRva2VuTGlzdEl0ZW0ucHJvdG90eXBlLCBcInN5bWJvbFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgV3VpVG9rZW5MaXN0SXRlbS5wcm90b3R5cGUsIFwicHJpY2VcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aVRva2VuTGlzdEl0ZW0ucHJvdG90eXBlLCBcImFtb3VudFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgV3VpVG9rZW5MaXN0SXRlbS5wcm90b3R5cGUsIFwidmlzaWJsZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgV3VpVG9rZW5MaXN0SXRlbS5wcm90b3R5cGUsIFwiaW1hZ2VFcnJvclwiLCB2b2lkIDApO1xuV3VpVG9rZW5MaXN0SXRlbSA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUVsZW1lbnQoJ3d1aS10b2tlbi1saXN0LWl0ZW0nKVxuXSwgV3VpVG9rZW5MaXN0SXRlbSk7XG5leHBvcnQgeyBXdWlUb2tlbkxpc3RJdGVtIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xuZXhwb3J0IGRlZmF1bHQgY3NzIGBcbiAgOmhvc3Qge1xuICAgIC0tdG9rZW5zLXNjcm9sbC0tdG9wLW9wYWNpdHk6IDA7XG4gICAgLS10b2tlbnMtc2Nyb2xsLS1ib3R0b20tb3BhY2l0eTogMTtcbiAgICAtLXN1Z2dlc3RlZC10b2tlbnMtc2Nyb2xsLS1sZWZ0LW9wYWNpdHk6IDA7XG4gICAgLS1zdWdnZXN0ZWQtdG9rZW5zLXNjcm9sbC0tcmlnaHQtb3BhY2l0eTogMTtcbiAgfVxuXG4gIDpob3N0ID4gd3VpLWZsZXg6Zmlyc3QtY2hpbGQge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIHNjcm9sbGJhci1oZWlnaHQ6IG5vbmU7XG4gIH1cblxuICA6aG9zdCA+IHd1aS1mbGV4OmZpcnN0LWNoaWxkOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIHd1aS1sb2FkaW5nLWhleGFnb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5zdWdnZXN0ZWQtdG9rZW5zLWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHJnYmEoMCwgMCwgMCwgY2FsYygxIC0gdmFyKC0tc3VnZ2VzdGVkLXRva2Vucy1zY3JvbGwtLWxlZnQtb3BhY2l0eSkpKSAwcHgsXG4gICAgICByZ2JhKDIwMCwgMjAwLCAyMDAsIGNhbGMoMSAtIHZhcigtLXN1Z2dlc3RlZC10b2tlbnMtc2Nyb2xsLS1sZWZ0LW9wYWNpdHkpKSkgMXB4LFxuICAgICAgYmxhY2sgNTBweCxcbiAgICAgIGJsYWNrIDkwcHgsXG4gICAgICBibGFjayBjYWxjKDEwMCUgLSA5MHB4KSxcbiAgICAgIGJsYWNrIGNhbGMoMTAwJSAtIDUwcHgpLFxuICAgICAgcmdiYSgxNTUsIDE1NSwgMTU1LCBjYWxjKDEgLSB2YXIoLS1zdWdnZXN0ZWQtdG9rZW5zLXNjcm9sbC0tcmlnaHQtb3BhY2l0eSkpKSBjYWxjKDEwMCUgLSAxcHgpLFxuICAgICAgcmdiYSgwLCAwLCAwLCBjYWxjKDEgLSB2YXIoLS1zdWdnZXN0ZWQtdG9rZW5zLXNjcm9sbC0tcmlnaHQtb3BhY2l0eSkpKSAxMDAlXG4gICAgKTtcbiAgfVxuXG4gIC5zdWdnZXN0ZWQtdG9rZW5zLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAudG9rZW5zLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwNSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDM5MHB4O1xuICB9XG5cbiAgLnRva2VucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byBib3R0b20sXG4gICAgICByZ2JhKDAsIDAsIDAsIGNhbGMoMSAtIHZhcigtLXRva2Vucy1zY3JvbGwtLXRvcC1vcGFjaXR5KSkpIDBweCxcbiAgICAgIHJnYmEoMjAwLCAyMDAsIDIwMCwgY2FsYygxIC0gdmFyKC0tdG9rZW5zLXNjcm9sbC0tdG9wLW9wYWNpdHkpKSkgMXB4LFxuICAgICAgYmxhY2sgNTBweCxcbiAgICAgIGJsYWNrIDkwcHgsXG4gICAgICBibGFjayBjYWxjKDEwMCUgLSA5MHB4KSxcbiAgICAgIGJsYWNrIGNhbGMoMTAwJSAtIDUwcHgpLFxuICAgICAgcmdiYSgxNTUsIDE1NSwgMTU1LCBjYWxjKDEgLSB2YXIoLS10b2tlbnMtc2Nyb2xsLS1ib3R0b20tb3BhY2l0eSkpKSBjYWxjKDEwMCUgLSAxcHgpLFxuICAgICAgcmdiYSgwLCAwLCAwLCBjYWxjKDEgLSB2YXIoLS10b2tlbnMtc2Nyb2xsLS1ib3R0b20tb3BhY2l0eSkpKSAxMDAlXG4gICAgKTtcbiAgfVxuXG4gIC5uZXR3b3JrLXNlYXJjaC1pbnB1dCxcbiAgLnNlbGVjdC1uZXR3b3JrLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgLnNlbGVjdC1uZXR3b3JrLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogdmFyKC0td3VpLXNwYWNpbmcteHMpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXd1aS1ib3JkZXItcmFkaXVzLXh4cyk7XG4gICAgcGFkZGluZzogdmFyKC0td3VpLXNwYWNpbmcteHMpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcbiAgfVxuXG4gIC5zZWxlY3QtbmV0d29yay1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwMik7XG4gIH1cblxuICAuc2VsZWN0LW5ldHdvcmstYnV0dG9uID4gd3VpLWltYWdlIHtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0td3VpLWJvcmRlci1yYWRpdXMteHMpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMTApO1xuICB9XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmpzLm1hcCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBSb3V0ZXJDb250cm9sbGVyLCBTd2FwQ29udHJvbGxlciB9IGZyb20gJ0ByZW93bi9hcHBraXQtY29udHJvbGxlcnMnO1xuaW1wb3J0IHsgTWF0aFV0aWwsIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdAcmVvd24vYXBwa2l0LXVpJztcbmltcG9ydCAnQHJlb3duL2FwcGtpdC11aS93dWktYnV0dG9uJztcbmltcG9ydCAnQHJlb3duL2FwcGtpdC11aS93dWktZmxleCc7XG5pbXBvcnQgJ0ByZW93bi9hcHBraXQtdWkvd3VpLWljb24nO1xuaW1wb3J0ICdAcmVvd24vYXBwa2l0LXVpL3d1aS1pbnB1dC10ZXh0JztcbmltcG9ydCAnQHJlb3duL2FwcGtpdC11aS93dWktdGV4dCc7XG5pbXBvcnQgJ0ByZW93bi9hcHBraXQtdWkvd3VpLXRva2VuLWJ1dHRvbic7XG5pbXBvcnQgJ0ByZW93bi9hcHBraXQtdWkvd3VpLXRva2VuLWxpc3QtaXRlbSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmpzJztcbmxldCBXM21Td2FwU2VsZWN0VG9rZW5WaWV3ID0gY2xhc3MgVzNtU3dhcFNlbGVjdFRva2VuVmlldyBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gW107XG4gICAgICAgIHRoaXMudGFyZ2V0VG9rZW4gPSBSb3V0ZXJDb250cm9sbGVyLnN0YXRlLmRhdGE/LnRhcmdldDtcbiAgICAgICAgdGhpcy5zb3VyY2VUb2tlbiA9IFN3YXBDb250cm9sbGVyLnN0YXRlLnNvdXJjZVRva2VuO1xuICAgICAgICB0aGlzLnNvdXJjZVRva2VuQW1vdW50ID0gU3dhcENvbnRyb2xsZXIuc3RhdGUuc291cmNlVG9rZW5BbW91bnQ7XG4gICAgICAgIHRoaXMudG9Ub2tlbiA9IFN3YXBDb250cm9sbGVyLnN0YXRlLnRvVG9rZW47XG4gICAgICAgIHRoaXMubXlUb2tlbnNXaXRoQmFsYW5jZSA9IFN3YXBDb250cm9sbGVyLnN0YXRlLm15VG9rZW5zV2l0aEJhbGFuY2U7XG4gICAgICAgIHRoaXMucG9wdWxhclRva2VucyA9IFN3YXBDb250cm9sbGVyLnN0YXRlLnBvcHVsYXJUb2tlbnM7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZS5wdXNoKC4uLltcbiAgICAgICAgICAgIFN3YXBDb250cm9sbGVyLnN1YnNjcmliZShuZXdTdGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VUb2tlbiA9IG5ld1N0YXRlLnNvdXJjZVRva2VuO1xuICAgICAgICAgICAgICAgIHRoaXMudG9Ub2tlbiA9IG5ld1N0YXRlLnRvVG9rZW47XG4gICAgICAgICAgICAgICAgdGhpcy5teVRva2Vuc1dpdGhCYWxhbmNlID0gbmV3U3RhdGUubXlUb2tlbnNXaXRoQmFsYW5jZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICB1cGRhdGVkKCkge1xuICAgICAgICBjb25zdCBzdWdnZXN0ZWRUb2tlbnNDb250YWluZXIgPSB0aGlzLnJlbmRlclJvb3Q/LnF1ZXJ5U2VsZWN0b3IoJy5zdWdnZXN0ZWQtdG9rZW5zLWNvbnRhaW5lcicpO1xuICAgICAgICBzdWdnZXN0ZWRUb2tlbnNDb250YWluZXI/LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU3VnZ2VzdGVkVG9rZW5zU2Nyb2xsLmJpbmQodGhpcykpO1xuICAgICAgICBjb25zdCB0b2tlbnNMaXN0ID0gdGhpcy5yZW5kZXJSb290Py5xdWVyeVNlbGVjdG9yKCcudG9rZW5zJyk7XG4gICAgICAgIHRva2Vuc0xpc3Q/LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlVG9rZW5MaXN0U2Nyb2xsLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgY29uc3Qgc3VnZ2VzdGVkVG9rZW5zQ29udGFpbmVyID0gdGhpcy5yZW5kZXJSb290Py5xdWVyeVNlbGVjdG9yKCcuc3VnZ2VzdGVkLXRva2Vucy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdG9rZW5zTGlzdCA9IHRoaXMucmVuZGVyUm9vdD8ucXVlcnlTZWxlY3RvcignLnRva2VucycpO1xuICAgICAgICBzdWdnZXN0ZWRUb2tlbnNDb250YWluZXI/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU3VnZ2VzdGVkVG9rZW5zU2Nyb2xsLmJpbmQodGhpcykpO1xuICAgICAgICB0b2tlbnNMaXN0Py5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVRva2VuTGlzdFNjcm9sbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICA8d3VpLWZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD1cInNcIj5cbiAgICAgICAgJHt0aGlzLnRlbXBsYXRlU2VhcmNoSW5wdXQoKX0gJHt0aGlzLnRlbXBsYXRlU3VnZ2VzdGVkVG9rZW5zKCl9ICR7dGhpcy50ZW1wbGF0ZVRva2VucygpfVxuICAgICAgPC93dWktZmxleD5cbiAgICBgO1xuICAgIH1cbiAgICBvblNlbGVjdFRva2VuKHRva2VuKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldFRva2VuID09PSAnc291cmNlVG9rZW4nKSB7XG4gICAgICAgICAgICBTd2FwQ29udHJvbGxlci5zZXRTb3VyY2VUb2tlbih0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBTd2FwQ29udHJvbGxlci5zZXRUb1Rva2VuKHRva2VuKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNvdXJjZVRva2VuICYmIHRoaXMuc291cmNlVG9rZW5BbW91bnQpIHtcbiAgICAgICAgICAgICAgICBTd2FwQ29udHJvbGxlci5zd2FwVG9rZW5zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyQ29udHJvbGxlci5nb0JhY2soKTtcbiAgICB9XG4gICAgdGVtcGxhdGVTZWFyY2hJbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIGh0bWwgYFxuICAgICAgPHd1aS1mbGV4IC5wYWRkaW5nPSR7WyczeHMnLCAncycsICcwJywgJ3MnXX0gZ2FwPVwieHNcIj5cbiAgICAgICAgPHd1aS1pbnB1dC10ZXh0XG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJzd2FwLXNlbGVjdC10b2tlbi1zZWFyY2gtaW5wdXRcIlxuICAgICAgICAgIGNsYXNzPVwibmV0d29yay1zZWFyY2gtaW5wdXRcIlxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdG9rZW5cIlxuICAgICAgICAgIGljb249XCJzZWFyY2hcIlxuICAgICAgICAgIC52YWx1ZT0ke3RoaXMuc2VhcmNoVmFsdWV9XG4gICAgICAgICAgQGlucHV0Q2hhbmdlPSR7dGhpcy5vblNlYXJjaElucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgID48L3d1aS1pbnB1dC10ZXh0PlxuICAgICAgPC93dWktZmxleD5cbiAgICBgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZVRva2VucygpIHtcbiAgICAgICAgY29uc3QgeW91clRva2VucyA9IHRoaXMubXlUb2tlbnNXaXRoQmFsYW5jZSA/IE9iamVjdC52YWx1ZXModGhpcy5teVRva2Vuc1dpdGhCYWxhbmNlKSA6IFtdO1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBvcHVsYXJUb2tlbnMgPyB0aGlzLnBvcHVsYXJUb2tlbnMgOiBbXTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRZb3VyVG9rZW5zID0gdGhpcy5maWx0ZXJUb2tlbnNXaXRoVGV4dCh5b3VyVG9rZW5zLCB0aGlzLnNlYXJjaFZhbHVlKTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRUb2tlbnMgPSB0aGlzLmZpbHRlclRva2Vuc1dpdGhUZXh0KHRva2VucywgdGhpcy5zZWFyY2hWYWx1ZSk7XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDx3dWktZmxleCBjbGFzcz1cInRva2Vucy1jb250YWluZXJcIj5cbiAgICAgICAgPHd1aS1mbGV4IGNsYXNzPVwidG9rZW5zXCIgLnBhZGRpbmc9JHtbJzAnLCAncycsICdzJywgJ3MnXX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICR7ZmlsdGVyZWRZb3VyVG9rZW5zPy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGh0bWwgYFxuICAgICAgICAgICAgICAgIDx3dWktZmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIiBwYWRkaW5nPVwic1wiPlxuICAgICAgICAgICAgICAgICAgPHd1aS10ZXh0IHZhcmlhbnQ9XCJwYXJhZ3JhcGgtNTAwXCIgY29sb3I9XCJmZy0yMDBcIj5Zb3VyIHRva2Vuczwvd3VpLXRleHQ+XG4gICAgICAgICAgICAgICAgPC93dWktZmxleD5cbiAgICAgICAgICAgICAgICAke2ZpbHRlcmVkWW91clRva2Vucy5tYXAodG9rZW4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdG9rZW4uc3ltYm9sID09PSB0aGlzLnNvdXJjZVRva2VuPy5zeW1ib2wgfHxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4uc3ltYm9sID09PSB0aGlzLnRvVG9rZW4/LnN5bWJvbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICAgICAgICAgICAgICAgIDx3dWktdG9rZW4tbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJzd2FwLXNlbGVjdC10b2tlbi1pdGVtLSR7dG9rZW4uc3ltYm9sfVwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0ke3Rva2VuLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgP2Rpc2FibGVkPSR7c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPSR7dG9rZW4uc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlPSR7dG9rZW4/LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD0ke3Rva2VuPy5xdWFudGl0eT8ubnVtZXJpY31cbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYz0ke3Rva2VuLmxvZ29Vcml9XG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0VG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L3d1aS10b2tlbi1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogbnVsbH1cblxuICAgICAgICAgIDx3dWktZmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIiBwYWRkaW5nPVwic1wiPlxuICAgICAgICAgICAgPHd1aS10ZXh0IHZhcmlhbnQ9XCJwYXJhZ3JhcGgtNTAwXCIgY29sb3I9XCJmZy0yMDBcIj5Ub2tlbnM8L3d1aS10ZXh0PlxuICAgICAgICAgIDwvd3VpLWZsZXg+XG4gICAgICAgICAgJHtmaWx0ZXJlZFRva2Vucz8ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBmaWx0ZXJlZFRva2Vucy5tYXAodG9rZW4gPT4gaHRtbCBgXG4gICAgICAgICAgICAgICAgICA8d3VpLXRva2VuLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInN3YXAtc2VsZWN0LXRva2VuLWl0ZW0tJHt0b2tlbi5zeW1ib2x9XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ke3Rva2VuLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbD0ke3Rva2VuLnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9JHt0b2tlbi5sb2dvVXJpfVxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHsoKSA9PiB0aGlzLm9uU2VsZWN0VG9rZW4odG9rZW4pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC93dWktdG9rZW4tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgIGApXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvd3VpLWZsZXg+XG4gICAgICA8L3d1aS1mbGV4PlxuICAgIGA7XG4gICAgfVxuICAgIHRlbXBsYXRlU3VnZ2VzdGVkVG9rZW5zKCkge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBTd2FwQ29udHJvbGxlci5zdGF0ZS5zdWdnZXN0ZWRUb2tlbnNcbiAgICAgICAgICAgID8gU3dhcENvbnRyb2xsZXIuc3RhdGUuc3VnZ2VzdGVkVG9rZW5zLnNsaWNlKDAsIDgpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGlmICghdG9rZW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICA8d3VpLWZsZXggY2xhc3M9XCJzdWdnZXN0ZWQtdG9rZW5zLWNvbnRhaW5lclwiIC5wYWRkaW5nPSR7WycwJywgJ3MnLCAnMCcsICdzJ119IGdhcD1cInhzXCI+XG4gICAgICAgICR7dG9rZW5zLm1hcCh0b2tlbiA9PiBodG1sIGBcbiAgICAgICAgICAgIDx3dWktdG9rZW4tYnV0dG9uXG4gICAgICAgICAgICAgIHRleHQ9JHt0b2tlbi5zeW1ib2x9XG4gICAgICAgICAgICAgIGltYWdlU3JjPSR7dG9rZW4ubG9nb1VyaX1cbiAgICAgICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5vblNlbGVjdFRva2VuKHRva2VuKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvd3VpLXRva2VuLWJ1dHRvbj5cbiAgICAgICAgICBgKX1cbiAgICAgIDwvd3VpLWZsZXg+XG4gICAgYDtcbiAgICB9XG4gICAgb25TZWFyY2hJbnB1dENoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gZXZlbnQuZGV0YWlsO1xuICAgIH1cbiAgICBoYW5kbGVTdWdnZXN0ZWRUb2tlbnNTY3JvbGwoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucmVuZGVyUm9vdD8ucXVlcnlTZWxlY3RvcignLnN1Z2dlc3RlZC10b2tlbnMtY29udGFpbmVyJyk7XG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLXN1Z2dlc3RlZC10b2tlbnMtc2Nyb2xsLS1sZWZ0LW9wYWNpdHknLCBNYXRoVXRpbC5pbnRlcnBvbGF0ZShbMCwgMTAwXSwgWzAsIDFdLCBjb250YWluZXIuc2Nyb2xsTGVmdCkudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zdWdnZXN0ZWQtdG9rZW5zLXNjcm9sbC0tcmlnaHQtb3BhY2l0eScsIE1hdGhVdGlsLmludGVycG9sYXRlKFswLCAxMDBdLCBbMCwgMV0sIGNvbnRhaW5lci5zY3JvbGxXaWR0aCAtIGNvbnRhaW5lci5zY3JvbGxMZWZ0IC0gY29udGFpbmVyLm9mZnNldFdpZHRoKS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgaGFuZGxlVG9rZW5MaXN0U2Nyb2xsKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnJlbmRlclJvb3Q/LnF1ZXJ5U2VsZWN0b3IoJy50b2tlbnMnKTtcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tdG9rZW5zLXNjcm9sbC0tdG9wLW9wYWNpdHknLCBNYXRoVXRpbC5pbnRlcnBvbGF0ZShbMCwgMTAwXSwgWzAsIDFdLCBjb250YWluZXIuc2Nyb2xsVG9wKS50b1N0cmluZygpKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLXRva2Vucy1zY3JvbGwtLWJvdHRvbS1vcGFjaXR5JywgTWF0aFV0aWwuaW50ZXJwb2xhdGUoWzAsIDEwMF0sIFswLCAxXSwgY29udGFpbmVyLnNjcm9sbEhlaWdodCAtIGNvbnRhaW5lci5zY3JvbGxUb3AgLSBjb250YWluZXIub2Zmc2V0SGVpZ2h0KS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZmlsdGVyVG9rZW5zV2l0aFRleHQodG9rZW5zLCB0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0b2tlbnMuZmlsdGVyKHRva2VuID0+IGAke3Rva2VuLnN5bWJvbH0gJHt0b2tlbi5uYW1lfSAke3Rva2VuLmFkZHJlc3N9YC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQudG9Mb3dlckNhc2UoKSkpO1xuICAgIH1cbn07XG5XM21Td2FwU2VsZWN0VG9rZW5WaWV3LnN0eWxlcyA9IHN0eWxlcztcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBTZWxlY3RUb2tlblZpZXcucHJvdG90eXBlLCBcImludGVydmFsXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwU2VsZWN0VG9rZW5WaWV3LnByb3RvdHlwZSwgXCJ0YXJnZXRUb2tlblwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoKVxuXSwgVzNtU3dhcFNlbGVjdFRva2VuVmlldy5wcm90b3R5cGUsIFwic291cmNlVG9rZW5cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHN0YXRlKClcbl0sIFczbVN3YXBTZWxlY3RUb2tlblZpZXcucHJvdG90eXBlLCBcInNvdXJjZVRva2VuQW1vdW50XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwU2VsZWN0VG9rZW5WaWV3LnByb3RvdHlwZSwgXCJ0b1Rva2VuXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwU2VsZWN0VG9rZW5WaWV3LnByb3RvdHlwZSwgXCJteVRva2Vuc1dpdGhCYWxhbmNlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwU2VsZWN0VG9rZW5WaWV3LnByb3RvdHlwZSwgXCJwb3B1bGFyVG9rZW5zXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBzdGF0ZSgpXG5dLCBXM21Td2FwU2VsZWN0VG9rZW5WaWV3LnByb3RvdHlwZSwgXCJzZWFyY2hWYWx1ZVwiLCB2b2lkIDApO1xuVzNtU3dhcFNlbGVjdFRva2VuVmlldyA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUVsZW1lbnQoJ3czbS1zd2FwLXNlbGVjdC10b2tlbi12aWV3Jylcbl0sIFczbVN3YXBTZWxlY3RUb2tlblZpZXcpO1xuZXhwb3J0IHsgVzNtU3dhcFNlbGVjdFRva2VuVmlldyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbIklucHV0VXRpbCIsImV2ZW50IiwiY3VycmVudFZhbHVlIiwib25DaGFuZ2UiLCJhbGxvd2VkS2V5cyIsImNvbnRyb2xQcmVzc2VkIiwiZXZlbnRLZXkiLCJsb3dlcmNhc2VFdmVudEtleSIsInNlbGVjdEFsbCIsImNvcHlLZXkiLCJwYXN0ZUtleSIsImN1dEtleSIsImlzQ29tbWEiLCJpc0RvdCIsImlzTnVtZXJpY0tleSIsInN0eWxlcyQ2IiwiY3NzIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsInIiLCJkIiwiaSIsInNsaXBwYWdlUmF0ZSIsIkNvbnN0YW50c1V0aWwiLCJXdWlTd2FwRGV0YWlscyIsIkxpdEVsZW1lbnQiLCJDaGFpbkNvbnRyb2xsZXIiLCJTd2FwQ29udHJvbGxlciIsIm5ld1N0YXRlIiwibWluUmVjZWl2ZWRBbW91bnQiLCJOdW1iZXJVdGlsIiwidG9Ub2tlblN3YXBwZWRBbW91bnQiLCJodG1sIiwiVWlIZWxwZXJVdGlsIiwic3R5bGVzIiwic3RhdGUiLCJwcm9wZXJ0eSIsImN1c3RvbUVsZW1lbnQiLCJzdHlsZXMkNSIsIlczbVN3YXBJbnB1dFNrZWxldG9uIiwic3R5bGVzJDQiLCJNSU5JTVVNX1VTRF9WQUxVRV9UT19DT05WRVJUIiwiVzNtU3dhcElucHV0IiwibWFya2V0VmFsdWUiLCJpc01hcmtldFZhbHVlR3JlYXRlclRoYW5aZXJvIiwidmFsdWUiLCJiYWxhbmNlVmFsdWVJblVTRCIsImhhdmVCYWxhbmNlIiwiRXZlbnRzQ29udHJvbGxlciIsIlJvdXRlckNvbnRyb2xsZXIiLCJzdHlsZXMkMyIsIlczbVN3YXBWaWV3IiwiQWNjb3VudENvbnRyb2xsZXIiLCJDb3JlSGVscGVyVXRpbCIsIm5ld0NhaXBOZXR3b3JrIiwibmV3Q2FpcEFkZHJlc3MiLCJNb2RhbENvbnRyb2xsZXIiLCJpc09wZW4iLCJuZXdSb3V0ZSIsInVuc3Vic2NyaWJlIiwidG9rZW4iLCJteVRva2VuIiwiY3QiLCJhbW91bnQiLCJwcmljZSIsImJhbGFuY2UiLCJtYXhWYWx1ZSIsImhhdmVOb1Rva2VuU2VsZWN0ZWQiLCJoYXZlTm9BbW91bnQiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJhY3RpdmVDaGFpbk5hbWVzcGFjZSIsIlczbUZyYW1lUnBjQ29uc3RhbnRzIiwicmVzb2x2ZSIsImluaXRpYWxpemVkIiwiZnJvbVRva2VuIiwidG9Ub2tlbiIsInRva2VucyIsImFsbFRva2VucyIsInQiLCJyZXNldFN3YXBTdGF0ZSIsImluaXRpYWxpemVTd2FwU3RhdGUiLCJzdHlsZXMkMiIsIlczbVN3YXBQcmV2aWV3VmlldyIsIm5ld0JhbGFuY2VTeW1ib2wiLCJzb3VyY2VUb2tlblRleHQiLCJ0b1Rva2VuVGV4dCIsInNvdXJjZVRva2VuVmFsdWUiLCJ0b1Rva2VuVmFsdWUiLCJzZW50UHJpY2UiLCJyZWNlaXZlUHJpY2UiLCJzdHlsZXMkMSIsIld1aVRva2VuTGlzdEl0ZW0iLCJlbnRyaWVzIiwiZW50cnkiLCJyZXNldFN0eWxlcyIsImVsZW1lbnRTdHlsZXMiLCJXM21Td2FwU2VsZWN0VG9rZW5WaWV3Iiwic3VnZ2VzdGVkVG9rZW5zQ29udGFpbmVyIiwidG9rZW5zTGlzdCIsInlvdXJUb2tlbnMiLCJmaWx0ZXJlZFlvdXJUb2tlbnMiLCJmaWx0ZXJlZFRva2VucyIsInNlbGVjdGVkIiwiY29udGFpbmVyIiwiTWF0aFV0aWwiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOGVBQU8sTUFBTUEsRUFBWSxDQUNyQixvQkFBb0JDLEVBQU9DLEVBQWNDLEVBQVUsQ0FDL0MsTUFBTUMsRUFBYyxDQUNoQixZQUNBLE9BQ0EsT0FDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsWUFDQSxhQUNBLEtBQ0gsRUFDS0MsRUFBaUJKLEVBQU0sU0FBV0EsRUFBTSxRQUN4Q0ssRUFBV0wsRUFBTSxJQUNqQk0sRUFBb0JELEVBQVMsa0JBQW1CLEVBQ2hERSxFQUFZRCxJQUFzQixJQUNsQ0UsRUFBVUYsSUFBc0IsSUFDaENHLEVBQVdILElBQXNCLElBQ2pDSSxFQUFTSixJQUFzQixJQUMvQkssRUFBVU4sSUFBYSxJQUN2Qk8sRUFBUVAsSUFBYSxJQUNyQlEsRUFBZVIsR0FBWSxLQUFPQSxHQUFZLElBQ2hELENBQUNELElBQW1CRyxHQUFhQyxHQUFXQyxHQUFZQyxJQUN4RFYsRUFBTSxlQUFnQixFQUV0QkMsSUFBaUIsS0FBTyxDQUFDVSxHQUFXLENBQUNDLEdBQVNQLElBQWEsS0FDM0RMLEVBQU0sZUFB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VyxDQUNQc0IsRUFBSyxDQUNULEVBQUc4RCxFQUF1QixVQUFXLGNBQWUsTUFBTSxFQUMxRHBGLEVBQVcsQ0FDUHNCLEVBQUssQ0FDVCxFQUFHOEQsRUFBdUIsVUFBVyxjQUFlLE1BQU0sRUFDMURwRixFQUFXLENBQ1BzQixFQUFLLENBQ1QsRUFBRzhELEVBQXVCLFVBQVcsb0JBQXFCLE1BQU0sRUFDaEVwRixFQUFXLENBQ1BzQixFQUFLLENBQ1QsRUFBRzhELEVBQXVCLFVBQVcsVUFBVyxNQUFNLEVBQ3REcEYsRUFBVyxDQUNQc0IsRUFBSyxDQUNULEVBQUc4RCxFQUF1QixVQUFXLHNCQUF1QixNQUFNLEVBQ2xFcEYsRUFBVyxDQUNQc0IsRUFBSyxDQUNULEVBQUc4RCxFQUF1QixVQUFXLGdCQUFpQixNQUFNLEVBQzVEcEYsRUFBVyxDQUNQc0IsRUFBSyxDQUNULEVBQUc4RCxFQUF1QixVQUFXLGNBQWUsTUFBTSxFQUMxREEsRUFBeUJwRixFQUFXLENBQ2hDd0IsRUFBYyw0QkFBNEIsQ0FDOUMsRUFBRzRELENBQXNCIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTRdfQ==
