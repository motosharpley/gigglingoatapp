System.register(["./index-legacy-l_Zrv-hC.js"],(function(t,i){"use strict";var e,o,a,r,n,s,l,c,g,d;return{setters:[t=>{e=t.a0,o=t.a1,a=t.a2,r=t.i,n=t.r,s=t.K,l=t.a,c=t.x,g=t.a3,d=t.Y}],execute:function(){t({c:h,n:u,r:
/**
          * @license
          * Copyright 2017 Google LLC
          * SPDX-License-Identifier: BSD-3-Clause
          */
function(t){return u({...t,state:!0,attribute:!1})}
/**
          * @license
          * Copyright 2020 Google LLC
          * SPDX-License-Identifier: BSD-3-Clause
          */});const p=t("U",{getSpacingStyles:(t,i)=>Array.isArray(t)?t[i]?`var(--wui-spacing-${t[i]})`:void 0:"string"==typeof t?`var(--wui-spacing-${t})`:void 0,getFormattedDate:t=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t),getHostName(t){try{return new URL(t).hostname}catch(i){return""}},getTruncateString:({string:t,charsStart:i,charsEnd:e,truncate:o})=>t.length<=i+e?t:"end"===o?`${t.substring(0,i)}...`:"start"===o?`...${t.substring(t.length-e)}`:`${t.substring(0,Math.floor(i))}...${t.substring(t.length-Math.floor(e))}`,generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),e=this.hexToRgb(i),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=100-3*Number(null==o?void 0:o.replace("px","")),r=`${a}% ${a}% at 65% 40%`,n=[];for(let s=0;s<5;s+=1){const t=this.tintColor(e,.15*s);n.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${n[0]};\n    --local-color-2: ${n[1]};\n    --local-color-3: ${n[2]};\n    --local-color-4: ${n[3]};\n    --local-color-5: ${n[4]};\n    --local-radial-circle: ${r}\n   `},hexToRgb(t){const i=parseInt(t,16);return[i>>16&255,i>>8&255,255&i]},tintColor(t,i){const[e,o,a]=t;return[Math.round(e+(255-e)*i),Math.round(o+(255-o)*i),Math.round(a+(255-a)*i)]},isNumber:t=>/^[0-9]+$/u.test(t),getColorTheme(t){return t||("undefined"!=typeof window&&window.matchMedia?null!==(i=window.matchMedia("(prefers-color-scheme: dark)"))&&void 0!==i&&i.matches?"dark":"light":"dark");var i},splitBalance(t){const i=t.split(".");return 2===i.length?[i[0],i[1]]:["0","00"]},roundNumber:(t,i,e)=>t.toString().length>=i?Number(t).toFixed(e):t,formatNumberToLocalString:(t,i=2)=>void 0===t?"0.00":"number"==typeof t?t.toLocaleString("en-US",{maximumFractionDigits:i,minimumFractionDigits:i}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:i,minimumFractionDigits:i})});function h(t){return function(i){return"function"==typeof i?function(t,i){return customElements.get(t)||customElements.define(t,i),i}(t,i):function(t,i){const{kind:e,elements:o}=i;return{kind:e,elements:o,finisher(i){customElements.get(t)||customElements.define(t,i)}}}(t,i)}}
/**
          * @license
          * Copyright 2017 Google LLC
          * SPDX-License-Identifier: BSD-3-Clause
          */const v={attribute:!0,type:String,converter:o,reflect:!1,hasChanged:e},w=(t=v,i,e)=>{const{kind:o,metadata:a}=e;let r=globalThis.litPropertyMetadata.get(a);if(void 0===r&&globalThis.litPropertyMetadata.set(a,r=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),r.set(e.name,t),"accessor"===o){const{name:o}=e;return{set(e){const a=i.get.call(this);i.set.call(this,e),this.requestUpdate(o,a,t)},init(i){return void 0!==i&&this.C(o,void 0,t,i),i}}}if("setter"===o){const{name:o}=e;return function(e){const a=this[o];i.call(this,e),this.requestUpdate(o,a,t)}}throw Error("Unsupported decorator location: "+o)};function u(t){return(i,e)=>"object"==typeof e?w(t,i,e):((t,i,e)=>{const o=i.hasOwnProperty(e);return i.constructor.createProperty(e,t),o?Object.getOwnPropertyDescriptor(i,e):void 0})(t,i,e)}const y=1,m=2,f=t("a",(t=>(...i)=>({_$litDirective$:t,values:i})));
/**
          * @license
          * Copyright 2017 Google LLC
          * SPDX-License-Identifier: BSD-3-Clause
          */let S=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};
/**
          * @license
          * Copyright 2017 Google LLC
          * SPDX-License-Identifier: BSD-3-Clause
          */const $=(t,i)=>{const e=t._$AN;if(void 0===e)return!1;for(const a of e){var o;null!==(o=a._$AO)&&void 0!==o&&o.call(a,i,!1),$(a,i)}return!0},j=t=>{let i,e;do{var o;if(void 0===(i=t._$AM))break;e=i._$AN,e.delete(t),t=i}while(0===(null===(o=e)||void 0===o?void 0:o.size))},b=t=>{for(let i;i=t._$AM;t=i){let e=i._$AN;if(void 0===e)i._$AN=e=new Set;else if(e.has(t))break;e.add(t),_(i)}};function x(t){void 0!==this._$AN?(j(this),this._$AM=t,b(this)):this._$AM=t}function C(t,i=!1,e=0){const o=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(i)if(Array.isArray(o))for(let r=e;r<o.length;r++)$(o[r],!1),j(o[r]);else null!=o&&($(o,!1),j(o));else $(this,t)}const _=t=>{var i,e;t.type==m&&(null!==(i=t._$AP)&&void 0!==i||(t._$AP=C),null!==(e=t._$AQ)&&void 0!==e||(t._$AQ=x))};class k extends S{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,e){super._$AT(t,i,e),b(this),this.isConnected=t._$AU}_$AO(t,i=!0){var e,o;t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),i&&($(this,t),j(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}t("f",k);
/**
          * @license
          * Copyright 2021 Google LLC
          * SPDX-License-Identifier: BSD-3-Clause
          */
class z{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class A{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null!==(t=this.Z)&&void 0!==t&&t.call(this),this.Y=this.Z=void 0}}
/**
          * @license
          * Copyright 2017 Google LLC
          * SPDX-License-Identifier: BSD-3-Clause
          */const P=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,R=1073741823,T=f(class extends k{constructor(){super(...arguments),this._$Cwt=R,this._$Cbt=[],this._$CK=new z(this),this._$CX=new A}render(...t){var i;return null!==(i=t.find((t=>!P(t))))&&void 0!==i?i:a}update(t,i){const e=this._$Cbt;let o=e.length;this._$Cbt=i;const r=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<i.length&&!(a>this._$Cwt);a++){const t=i[a];if(!P(t))return this._$Cwt=a,t;a<o&&t===e[a]||(this._$Cwt=R,o=0,Promise.resolve(t).then((async i=>{for(;n.get();)await n.get();const e=r.deref();if(void 0!==e){const o=e._$Cbt.indexOf(t);o>-1&&o<e._$Cwt&&(e._$Cwt=o,e.setValue(i))}})))}return a}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),B=new class{constructor(){this.cache=new Map}set(t,i){this.cache.set(t,i)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}},M=r`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var H=function(t,i,e,o){var a,r=arguments.length,n=r<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,e,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(i,e,n):a(i,e))||n);return r>3&&n&&Object.defineProperty(i,e,n),n};const O={add:async()=>(await g((()=>i.import("./add-legacy-CgYGWJht.js")),void 0)).addSvg,allWallets:async()=>(await g((()=>i.import("./all-wallets-legacy-DRsFrAW-.js")),void 0)).allWalletsSvg,arrowBottomCircle:async()=>(await g((()=>i.import("./arrow-bottom-circle-legacy-DNi5CLt-.js")),void 0)).arrowBottomCircleSvg,appStore:async()=>(await g((()=>i.import("./app-store-legacy-Dg7xeeXZ.js")),void 0)).appStoreSvg,apple:async()=>(await g((()=>i.import("./apple-legacy-BJTCVKeZ.js")),void 0)).appleSvg,arrowBottom:async()=>(await g((()=>i.import("./arrow-bottom-legacy-C2BZG9Lt.js")),void 0)).arrowBottomSvg,arrowLeft:async()=>(await g((()=>i.import("./arrow-left-legacy-DxtdMGQD.js")),void 0)).arrowLeftSvg,arrowRight:async()=>(await g((()=>i.import("./arrow-right-legacy-Ca942NQE.js")),void 0)).arrowRightSvg,arrowTop:async()=>(await g((()=>i.import("./arrow-top-legacy-DaIWpyHu.js")),void 0)).arrowTopSvg,bank:async()=>(await g((()=>i.import("./bank-legacy-bPQqlLvZ.js")),void 0)).bankSvg,browser:async()=>(await g((()=>i.import("./browser-legacy-DnTPFnEt.js")),void 0)).browserSvg,card:async()=>(await g((()=>i.import("./card-legacy-BoAcMFc7.js")),void 0)).cardSvg,checkmark:async()=>(await g((()=>i.import("./checkmark-legacy-C_BOWqXM.js")),void 0)).checkmarkSvg,checkmarkBold:async()=>(await g((()=>i.import("./checkmark-bold-legacy-Bo935IzH.js")),void 0)).checkmarkBoldSvg,chevronBottom:async()=>(await g((()=>i.import("./chevron-bottom-legacy-BkPJtPyL.js")),void 0)).chevronBottomSvg,chevronLeft:async()=>(await g((()=>i.import("./chevron-left-legacy-C4nDlRD3.js")),void 0)).chevronLeftSvg,chevronRight:async()=>(await g((()=>i.import("./chevron-right-legacy-CFMcyCpt.js")),void 0)).chevronRightSvg,chevronTop:async()=>(await g((()=>i.import("./chevron-top-legacy-CC68JEMd.js")),void 0)).chevronTopSvg,chromeStore:async()=>(await g((()=>i.import("./chrome-store-legacy-w_DA56op.js")),void 0)).chromeStoreSvg,clock:async()=>(await g((()=>i.import("./clock-legacy-SErYjLxw.js")),void 0)).clockSvg,close:async()=>(await g((()=>i.import("./close-legacy-DvKeZRg5.js")),void 0)).closeSvg,compass:async()=>(await g((()=>i.import("./compass-legacy-BwO2wOn2.js")),void 0)).compassSvg,coinPlaceholder:async()=>(await g((()=>i.import("./coinPlaceholder-legacy-C_Z-rpYX.js")),void 0)).coinPlaceholderSvg,copy:async()=>(await g((()=>i.import("./copy-legacy-CUiAWjmD.js")),void 0)).copySvg,cursor:async()=>(await g((()=>i.import("./cursor-legacy-CBr1jRAJ.js")),void 0)).cursorSvg,cursorTransparent:async()=>(await g((()=>i.import("./cursor-transparent-legacy-DkHPX1SV.js")),void 0)).cursorTransparentSvg,desktop:async()=>(await g((()=>i.import("./desktop-legacy-C-ucVLR3.js")),void 0)).desktopSvg,disconnect:async()=>(await g((()=>i.import("./disconnect-legacy-DGxhZKHE.js")),void 0)).disconnectSvg,discord:async()=>(await g((()=>i.import("./discord-legacy-WkCLqB9O.js")),void 0)).discordSvg,etherscan:async()=>(await g((()=>i.import("./etherscan-legacy-HPQPa4Pm.js")),void 0)).etherscanSvg,extension:async()=>(await g((()=>i.import("./extension-legacy-p-REqeCW.js")),void 0)).extensionSvg,externalLink:async()=>(await g((()=>i.import("./external-link-legacy-COUYkdux.js")),void 0)).externalLinkSvg,facebook:async()=>(await g((()=>i.import("./facebook-legacy-24wPCAGi.js")),void 0)).facebookSvg,farcaster:async()=>(await g((()=>i.import("./farcaster-legacy-jQNjrPoS.js")),void 0)).farcasterSvg,filters:async()=>(await g((()=>i.import("./filters-legacy-BCuBvW-k.js")),void 0)).filtersSvg,github:async()=>(await g((()=>i.import("./github-legacy-i3WzXUoA.js")),void 0)).githubSvg,google:async()=>(await g((()=>i.import("./google-legacy-CZRGIOgX.js")),void 0)).googleSvg,helpCircle:async()=>(await g((()=>i.import("./help-circle-legacy-UvP5TUhF.js")),void 0)).helpCircleSvg,image:async()=>(await g((()=>i.import("./image-legacy-CKIhvUty.js")),void 0)).imageSvg,id:async()=>(await g((()=>i.import("./id-legacy-BpWV_lDp.js")),void 0)).idSvg,infoCircle:async()=>(await g((()=>i.import("./info-circle-legacy-Cw-SwEVk.js")),void 0)).infoCircleSvg,lightbulb:async()=>(await g((()=>i.import("./lightbulb-legacy-D0usHVeN.js")),void 0)).lightbulbSvg,mail:async()=>(await g((()=>i.import("./mail-legacy-B-KTC6Xe.js")),void 0)).mailSvg,mobile:async()=>(await g((()=>i.import("./mobile-legacy-BW_zSiGx.js")),void 0)).mobileSvg,more:async()=>(await g((()=>i.import("./more-legacy-DEkDz5On.js")),void 0)).moreSvg,networkPlaceholder:async()=>(await g((()=>i.import("./network-placeholder-legacy-D_Lrmz4Z.js")),void 0)).networkPlaceholderSvg,nftPlaceholder:async()=>(await g((()=>i.import("./nftPlaceholder-legacy-DSpMDYkQ.js")),void 0)).nftPlaceholderSvg,off:async()=>(await g((()=>i.import("./off-legacy-vgsRTqEA.js")),void 0)).offSvg,playStore:async()=>(await g((()=>i.import("./play-store-legacy-BuvgUC_S.js")),void 0)).playStoreSvg,plus:async()=>(await g((()=>i.import("./plus-legacy-CyOZWCt3.js")),void 0)).plusSvg,qrCode:async()=>(await g((()=>i.import("./qr-code-legacy-tBL5udSy.js")),void 0)).qrCodeIcon,recycleHorizontal:async()=>(await g((()=>i.import("./recycle-horizontal-legacy-Dv816kZ8.js")),void 0)).recycleHorizontalSvg,refresh:async()=>(await g((()=>i.import("./refresh-legacy-a1yGLwBo.js")),void 0)).refreshSvg,search:async()=>(await g((()=>i.import("./search-legacy-pR3NEgxb.js")),void 0)).searchSvg,send:async()=>(await g((()=>i.import("./send-legacy-Bdukfq3V.js")),void 0)).sendSvg,swapHorizontal:async()=>(await g((()=>i.import("./swapHorizontal-legacy-C-lbfY7_.js")),void 0)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await g((()=>i.import("./swapHorizontalMedium-legacy-fE1Wy8Jd.js")),void 0)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await g((()=>i.import("./swapHorizontalBold-legacy-B4Y7cv5T.js")),void 0)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await g((()=>i.import("./swapHorizontalRoundedBold-legacy-DcI72467.js")),void 0)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await g((()=>i.import("./swapVertical-legacy-ipc4vJTe.js")),void 0)).swapVerticalSvg,telegram:async()=>(await g((()=>i.import("./telegram-legacy-wmnodYhq.js")),void 0)).telegramSvg,threeDots:async()=>(await g((()=>i.import("./three-dots-legacy-C82UzsDc.js")),void 0)).threeDotsSvg,twitch:async()=>(await g((()=>i.import("./twitch-legacy-C8FjPWj4.js")),void 0)).twitchSvg,twitter:async()=>(await g((()=>i.import("./x-legacy-k4HGL8ya.js")),void 0)).xSvg,twitterIcon:async()=>(await g((()=>i.import("./twitterIcon-legacy-CS2gI9rO.js")),void 0)).twitterIconSvg,verify:async()=>(await g((()=>i.import("./verify-legacy-DMUM5WOM.js")),void 0)).verifySvg,verifyFilled:async()=>(await g((()=>i.import("./verify-filled-legacy-BaW-2tAm.js")),void 0)).verifyFilledSvg,wallet:async()=>(await g((()=>i.import("./wallet-legacy-oMGB4lmU.js")),void 0)).walletSvg,walletConnect:async()=>(await g((()=>i.import("./walletconnect-legacy-CpAurJC7.js")),void 0)).walletConnectSvg,walletConnectLightBrown:async()=>(await g((()=>i.import("./walletconnect-legacy-CpAurJC7.js")),void 0)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await g((()=>i.import("./walletconnect-legacy-CpAurJC7.js")),void 0)).walletConnectBrownSvg,walletPlaceholder:async()=>(await g((()=>i.import("./wallet-placeholder-legacy-DWVCtBt3.js")),void 0)).walletPlaceholderSvg,warningCircle:async()=>(await g((()=>i.import("./warning-circle-legacy-CeFp29Z4.js")),void 0)).warningCircleSvg,x:async()=>(await g((()=>i.import("./x-legacy-k4HGL8ya.js")),void 0)).xSvg,info:async()=>(await g((()=>i.import("./info-legacy-BPo4buTk.js")),void 0)).infoSvg,exclamationTriangle:async()=>(await g((()=>i.import("./exclamation-triangle-legacy-CM8hYq-v.js")),void 0)).exclamationTriangleSvg,reown:async()=>(await g((()=>i.import("./reown-logo-legacy-Cd-eVK_I.js")),void 0)).reownSvg};let D=class extends l{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,c`${T(async function(t){var i;if(B.has(t))return B.get(t);const e=(null!==(i=O[t])&&void 0!==i?i:O.copy)();return B.set(t,e),e}(this.name),c`<div class="fallback"></div>`)}`}};D.styles=[n,s,M],H([u()],D.prototype,"size",void 0),H([u()],D.prototype,"name",void 0),H([u()],D.prototype,"color",void 0),H([u()],D.prototype,"aspectRatio",void 0),D=H([h("wui-icon")],D);
/**
          * @license
          * Copyright 2018 Google LLC
          * SPDX-License-Identifier: BSD-3-Clause
          */
const L=t("e",f(class extends S{constructor(t){var i;if(super(t),t.type!==y||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i){var e;i[t]&&(null===(e=this.nt)||void 0===e||!e.has(t))&&this.st.add(t)}return this.render(i)}const o=t.element.classList;for(const a of this.st)a in i||(o.remove(a),this.st.delete(a));for(const a in i){var r;const t=!!i[a];t===this.st.has(a)||(null===(r=this.nt)||void 0===r?void 0:r.has(a))||(t?(o.add(a),this.st.add(a)):(o.remove(a),this.st.delete(a)))}return a}})),N=r`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var G=function(t,i,e,o){var a,r=arguments.length,n=r<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,e,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(i,e,n):a(i,e))||n);return r>3&&n&&Object.defineProperty(i,e,n),n};let U=class extends l{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,c`<slot class=${L(t)}></slot>`}};U.styles=[n,N],G([u()],U.prototype,"variant",void 0),G([u()],U.prototype,"color",void 0),G([u()],U.prototype,"align",void 0),G([u()],U.prototype,"lineClamp",void 0),U=G([h("wui-text")],U);const F=r`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var I=function(t,i,e,o){var a,r=arguments.length,n=r<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,e,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(i,e,n):a(i,e))||n);return r>3&&n&&Object.defineProperty(i,e,n),n};let E=class extends l{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&p.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&p.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&p.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&p.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&p.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&p.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&p.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&p.getSpacingStyles(this.margin,3)};\n    `,c`<slot></slot>`}};E.styles=[n,F],I([u()],E.prototype,"flexDirection",void 0),I([u()],E.prototype,"flexWrap",void 0),I([u()],E.prototype,"flexBasis",void 0),I([u()],E.prototype,"flexGrow",void 0),I([u()],E.prototype,"flexShrink",void 0),I([u()],E.prototype,"alignItems",void 0),I([u()],E.prototype,"justifyContent",void 0),I([u()],E.prototype,"columnGap",void 0),I([u()],E.prototype,"rowGap",void 0),I([u()],E.prototype,"gap",void 0),I([u()],E.prototype,"padding",void 0),I([u()],E.prototype,"margin",void 0),E=I([h("wui-flex")],E),t("o",(t=>null!=t?t:d))}}}));
