System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js"],(function(t,e){"use strict";var i,o,r,a,s,n,c,l,p;return{setters:[t=>{i=t.w,o=t.u,r=t.y,a=t.z,s=t.i,n=t.a,c=t.x},t=>{l=t.r,p=t.c}],execute:function(){const e=o({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),g=t("T",i({state:e,subscribe:t=>a(e,(()=>t(e))),subscribeKey:(t,i)=>r(e,t,i),showTooltip({message:t,triggerRect:i,variant:o}){e.open=!0,e.message=t,e.triggerRect=i,e.variant=o},hide(){e.open=!1,e.message="",e.triggerRect={width:0,height:0,top:0,left:0}}})),u=s`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
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
`;var d=function(t,e,i,o){var r,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(a<3?r(s):a>3?r(e,i,s):r(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let h=class extends n{constructor(){super(),this.unsubscribe=[],this.open=g.state.open,this.message=g.state.message,this.triggerRect=g.state.triggerRect,this.variant=g.state.variant,this.unsubscribe.push(g.subscribe((t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${t}px;\n    --w3m-tooltip-left: ${e}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,c`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};h.styles=[u],d([l()],h.prototype,"open",void 0),d([l()],h.prototype,"message",void 0),d([l()],h.prototype,"triggerRect",void 0),d([l()],h.prototype,"variant",void 0),h=d([p("w3m-tooltip"),p("w3m-tooltip")],h)}}}));
