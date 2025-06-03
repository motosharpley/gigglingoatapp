System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js","./index-legacy-2Pe44fr3.js","./index-legacy-7oYBEIjM.js","./index-legacy-CR17gdOy.js","./index-legacy-aclEvsjH.js"],(function(t,e){"use strict";var i,r,n,o,a,s,l,c,u,p,d,g,h,w,x,v,y,m;return{setters:[t=>{i=t.i,r=t.a,n=t.x,o=t.r,a=t.e,s=t.G,l=t.d,c=t.R,u=t.O,p=t.f,d=t.A,g=t.W},t=>{h=t.n,w=t.c,x=t.o,v=t.r},t=>{y=t.T,m=t.D},null,null,null],execute:function(){var t;!function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"}(t||(t={}));const e=i`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var f=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let b=class extends r{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images,i="NFT"===(null==t?void 0:t.type),r=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",o=(null!=e&&e.url?"NFT"===e.type:i)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${r};\n    --local-right-border-radius: ${o};\n    `,n`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,i=null==t?void 0:t.type;return 2===this.images.length&&(null!=t&&t.url||null!=e&&e.url)?n`<div class="swap-images-container">
        ${null!=t&&t.url?n`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${null!=e&&e.url?n`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:null!=t&&t.url?n`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===i?n`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:n`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,e="accent-100";return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?n`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};b.styles=[e],f([h()],b.prototype,"type",void 0),f([h()],b.prototype,"status",void 0),f([h()],b.prototype,"direction",void 0),f([h({type:Boolean})],b.prototype,"onlyDirectionIcon",void 0),f([h({type:Array})],b.prototype,"images",void 0),f([h({type:Object})],b.prototype,"secondImage",void 0),b=f([w("wui-transaction-visual")],b);const $=i`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var T=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let A=class extends r{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return n`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${x(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${x(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${t[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var t;const e=null===(t=this.descriptions)||void 0===t?void 0:t[0];return e?n`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var t;const e=null===(t=this.descriptions)||void 0===t?void 0:t[1];return e?n`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};A.styles=[o,$],T([h()],A.prototype,"type",void 0),T([h({type:Array})],A.prototype,"descriptions",void 0),T([h()],A.prototype,"date",void 0),T([h({type:Boolean})],A.prototype,"onlyDirectionIcon",void 0),T([h()],A.prototype,"status",void 0),T([h()],A.prototype,"direction",void 0),T([h({type:Array})],A.prototype,"images",void 0),T([h({type:Array})],A.prototype,"price",void 0),T([h({type:Array})],A.prototype,"amount",void 0),T([h({type:Array})],A.prototype,"symbol",void 0),A=T([w("wui-transaction-list-item")],A);const C=i`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
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

  .emptyContainer {
    height: 100%;
  }
`;var I=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};const k="last-transaction";let D=class extends r{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=a.state.activeCaipAddress,this.transactionsByYear=s.state.transactionsByYear,this.loading=s.state.loading,this.empty=s.state.empty,this.next=s.state.next,s.clearCursor(),this.unsubscribe.push(a.subscribeKey("activeCaipAddress",(t=>{t&&this.caipAddress!==t&&(s.resetTransactions(),s.fetchTransactions(t)),this.caipAddress=t})),a.subscribeKey("activeCaipNetwork",(()=>{this.updateTransactionView()})),s.subscribe((t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next})))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return n` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){var t;const e=null===(t=a.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId;s.state.lastNetworkInView!==e&&(s.resetTransactions(),this.caipAddress&&s.fetchTransactions(l.getPlainAddress(this.caipAddress))),s.setLastNetworkInView(e)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map((t=>{const e=parseInt(t,10),i=new Array(12).fill(null).map(((t,i)=>{var r;return{groupTitle:y.getTransactionGroupTitle(e,i),transactions:null===(r=this.transactionsByYear[e])||void 0===r?void 0:r[i]}})).filter((({transactions:t})=>t)).reverse();return i.map((({groupTitle:t,transactions:e},r)=>{const o=r===i.length-1;return e?n`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${o?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${t}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(e,o)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}templateRenderTransaction(t,e){const{date:i,descriptions:r,direction:o,isAllNFT:a,images:s,status:l,transfers:c,type:u}=this.getTransactionListItemProps(t),p=(null==c?void 0:c.length)>1;return 2!==(null==c?void 0:c.length)||a?p?c.map(((t,r)=>{const o=y.getTransferDescription(t),a=e&&r===c.length-1;return n` <wui-transaction-list-item
          date=${i}
          direction=${t.direction}
          id=${a&&this.next?k:""}
          status=${l}
          type=${u}
          .onlyDirectionIcon=${!0}
          .images=${[s[r]]}
          .descriptions=${[o]}
        ></wui-transaction-list-item>`})):n`
      <wui-transaction-list-item
        date=${i}
        .direction=${o}
        id=${e&&this.next?k:""}
        status=${l}
        type=${u}
        .images=${s}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `:n`
        <wui-transaction-list-item
          date=${i}
          .direction=${o}
          id=${e&&this.next?k:""}
          status=${l}
          type=${u}
          .images=${s}
          .descriptions=${r}
        ></wui-transaction-list-item>
      `}templateTransactions(t,e){return t.map(((i,r)=>{const o=e&&r===t.length-1;return n`${this.templateRenderTransaction(i,o)}`}))}emptyStateActivity(){return n`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return n`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
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
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?n`${this.emptyStateAccount()}`:n`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(n` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((t=>t)):null}onReceiveClick(){c.push("WalletReceive")}createPaginationObserver(){const t=a.state.activeChain,{projectId:e}=u.state;this.paginationObserver=new IntersectionObserver((([i])=>{var r;null!=i&&i.isIntersecting&&!this.loading&&(s.fetchTransactions(l.getPlainAddress(this.caipAddress)),p.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:l.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:(null===(r=d.state.preferredAccountTypes)||void 0===r?void 0:r[t])===g.ACCOUNT_TYPES.SMART_ACCOUNT}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){var t,e;null===(t=this.paginationObserver)||void 0===t||t.disconnect();const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`#${k}`);var r;i&&(null===(r=this.paginationObserver)||void 0===r||r.observe(i))}getTransactionListItemProps(t){var e,i,r,n,o;const a=m.formatDate(null==t||null===(e=t.metadata)||void 0===e?void 0:e.minedAt),s=y.getTransactionDescriptions(t),l=null==t?void 0:t.transfers,c=null==t||null===(i=t.transfers)||void 0===i?void 0:i[0],u=Boolean(c)&&(null==t||null===(r=t.transfers)||void 0===r?void 0:r.every((t=>Boolean(t.nft_info)))),p=y.getTransactionImages(l);return{date:a,direction:null==c?void 0:c.direction,descriptions:s,isAllNFT:u,images:p,status:null===(n=t.metadata)||void 0===n?void 0:n.status,transfers:l,type:null===(o=t.metadata)||void 0===o?void 0:o.operationType}}};D.styles=C,I([h()],D.prototype,"page",void 0),I([v()],D.prototype,"caipAddress",void 0),I([v()],D.prototype,"transactionsByYear",void 0),I([v()],D.prototype,"loading",void 0),I([v()],D.prototype,"empty",void 0),I([v()],D.prototype,"next",void 0),D=I([w("w3m-activity-list")],D)}}}));
