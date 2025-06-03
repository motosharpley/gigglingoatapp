System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js","./index-legacy-aclEvsjH.js","./index-legacy-CeJrug3e.js","./index-legacy-7oYBEIjM.js"],(function(i,t){"use strict";var o,a,e,n,r,s,u,l;return{setters:[i=>{o=i.i,a=i.r,e=i.h,n=i.a,r=i.x},i=>{s=i.n,u=i.c,l=i.o},null,null,null],execute:function(){const i=o`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var t=function(i,t,o,a){var e,n=arguments.length,r=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(i,t,o,a);else for(var s=i.length-1;s>=0;s--)(e=i[s])&&(r=(n<3?e(r):n>3?e(t,o,r):e(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let c=class extends n{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return r`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${l(this.iconVariant)}
        tabindex=${l(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){var i;if("image"===this.variant&&this.imageSrc)return r`<wui-image src=${this.imageSrc} alt=${null!==(i=this.alt)&&void 0!==i?i:"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return r`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const i=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",o=this.iconSize?this.iconSize:t;return r`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${o}
          background="transparent"
          iconColor=${i}
          backgroundColor=${i}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?r`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:r``}chevronTemplate(){return this.chevron?r`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};c.styles=[a,e,i],t([s()],c.prototype,"icon",void 0),t([s()],c.prototype,"iconSize",void 0),t([s()],c.prototype,"tabIdx",void 0),t([s()],c.prototype,"variant",void 0),t([s()],c.prototype,"iconVariant",void 0),t([s({type:Boolean})],c.prototype,"disabled",void 0),t([s()],c.prototype,"imageSrc",void 0),t([s()],c.prototype,"alt",void 0),t([s({type:Boolean})],c.prototype,"chevron",void 0),t([s({type:Boolean})],c.prototype,"loading",void 0),c=t([u("wui-list-item")],c)}}}));
