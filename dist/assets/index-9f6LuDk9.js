import{i as g,r as b,h as p,a as h,x as d}from"./index-C4QAg8YX.js";import{n as r,c as w}from"./if-defined-BYYrXBY0.js";import"./index-BTa2w2R5.js";const f=g`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var t=function(s,o,i,n){var c=arguments.length,e=c<3?o:n===null?n=Object.getOwnPropertyDescriptor(o,i):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,o,i,n);else for(var u=s.length-1;u>=0;u--)(l=s[u])&&(e=(c<3?l(e):c>3?l(o,i,e):l(o,i))||e);return c>3&&e&&Object.defineProperty(o,i,e),e};const v={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},x={lg:"paragraph-600",md:"small-600"},y={lg:"md",md:"md"};let a=class extends h{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const o=this.textVariant??x[this.size];return d`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${o} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const o=y[this.size],i=this.disabled?v.disabled:v[this.variant];return d`<wui-loading-spinner color=${i} size=${o}></wui-loading-spinner>`}return d``}};a.styles=[b,p,f];t([r()],a.prototype,"size",void 0);t([r({type:Boolean})],a.prototype,"disabled",void 0);t([r({type:Boolean})],a.prototype,"fullWidth",void 0);t([r({type:Boolean})],a.prototype,"loading",void 0);t([r()],a.prototype,"variant",void 0);t([r({type:Boolean})],a.prototype,"hasIconLeft",void 0);t([r({type:Boolean})],a.prototype,"hasIconRight",void 0);t([r()],a.prototype,"borderRadius",void 0);t([r()],a.prototype,"textVariant",void 0);a=t([w("wui-button")],a);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtOWY2THVEazkuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AcmVvd24vYXBwa2l0LXVpL2Rpc3QvZXNtL3NyYy9jb21wb3NpdGVzL3d1aS1idXR0b24vc3R5bGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW93bi9hcHBraXQtdWkvZGlzdC9lc20vc3JjL2NvbXBvc2l0ZXMvd3VpLWJ1dHRvbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xuZXhwb3J0IGRlZmF1bHQgY3NzIGBcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiB2YXIoLS1sb2NhbC13aWR0aCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbG9jYWwtYm9yZGVyLXJhZGl1cyk7XG4gICAgd2lkdGg6IHZhcigtLWxvY2FsLXdpZHRoKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLyogLS0gU2l6ZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIGJ1dHRvbltkYXRhLXNpemU9J21kJ10ge1xuICAgIHBhZGRpbmc6IDguMnB4IHZhcigtLXd1aS1zcGFjaW5nLWwpIDlweCB2YXIoLS13dWktc3BhY2luZy1sKTtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cblxuICBidXR0b25bZGF0YS1zaXplPSdtZCddW2RhdGEtaWNvbi1sZWZ0PSd0cnVlJ11bZGF0YS1pY29uLXJpZ2h0PSdmYWxzZSddIHtcbiAgICBwYWRkaW5nOiA4LjJweCB2YXIoLS13dWktc3BhY2luZy1sKSA5cHggdmFyKC0td3VpLXNwYWNpbmctcyk7XG4gIH1cblxuICBidXR0b25bZGF0YS1zaXplPSdtZCddW2RhdGEtaWNvbi1yaWdodD0ndHJ1ZSddW2RhdGEtaWNvbi1sZWZ0PSdmYWxzZSddIHtcbiAgICBwYWRkaW5nOiA4LjJweCB2YXIoLS13dWktc3BhY2luZy1zKSA5cHggdmFyKC0td3VpLXNwYWNpbmctbCk7XG4gIH1cblxuICBidXR0b25bZGF0YS1zaXplPSdsZyddIHtcbiAgICBwYWRkaW5nOiB2YXIoLS13dWktc3BhY2luZy1tKSB2YXIoLS13dWktc3BhY2luZy0ybCk7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG5cbiAgLyogLS0gVmFyaWFudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIGJ1dHRvbltkYXRhLXZhcmlhbnQ9J21haW4nXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWFjY2VudC0xMDApO1xuICAgIGNvbG9yOiB2YXIoLS13dWktY29sb3ItaW52ZXJzZS0xMDApO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDEwKTtcbiAgfVxuXG4gIGJ1dHRvbltkYXRhLXZhcmlhbnQ9J2ludmVyc2UnXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWludmVyc2UtMTAwKTtcbiAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLWludmVyc2UtMDAwKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAxMCk7XG4gIH1cblxuICBidXR0b25bZGF0YS12YXJpYW50PSdhY2NlbnQnXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWFjY2VudC1nbGFzcy0wMTApO1xuICAgIGNvbG9yOiB2YXIoLS13dWktY29sb3ItYWNjZW50LTEwMCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDUpO1xuICB9XG5cbiAgYnV0dG9uW2RhdGEtdmFyaWFudD0nYWNjZW50LWVycm9yJ10ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXd1aS1jb2xvci1lcnJvci1nbGFzcy0wMTUpO1xuICAgIGNvbG9yOiB2YXIoLS13dWktY29sb3ItZXJyb3ItMTAwKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1lcnJvci1nbGFzcy0wMTApO1xuICB9XG5cbiAgYnV0dG9uW2RhdGEtdmFyaWFudD0nYWNjZW50LXN1Y2Nlc3MnXSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td3VpLWNvbG9yLXN1Y2Nlc3MtZ2xhc3MtMDE1KTtcbiAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLXN1Y2Nlc3MtMTAwKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1zdWNjZXNzLWdsYXNzLTAxMCk7XG4gIH1cblxuICBidXR0b25bZGF0YS12YXJpYW50PSduZXV0cmFsJ10ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS13dWktY29sb3ItZmctMTAwKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwNSk7XG4gIH1cblxuICAvKiAtLSBGb2N1cyBzdGF0ZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIGJ1dHRvbltkYXRhLXZhcmlhbnQ9J21haW4nXTpmb2N1cy12aXNpYmxlOmVuYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1hY2NlbnQtMDkwKTtcbiAgICBib3gtc2hhZG93OlxuICAgICAgaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1hY2NlbnQtMTAwKSxcbiAgICAgIDAgMCAwIDRweCB2YXIoLS13dWktY29sb3ItYWNjZW50LWdsYXNzLTAyMCk7XG4gIH1cbiAgYnV0dG9uW2RhdGEtdmFyaWFudD0naW52ZXJzZSddOmZvY3VzLXZpc2libGU6ZW5hYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWludmVyc2UtMTAwKTtcbiAgICBib3gtc2hhZG93OlxuICAgICAgaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAxMCksXG4gICAgICAwIDAgMCA0cHggdmFyKC0td3VpLWNvbG9yLWFjY2VudC1nbGFzcy0wMjApO1xuICB9XG4gIGJ1dHRvbltkYXRhLXZhcmlhbnQ9J2FjY2VudCddOmZvY3VzLXZpc2libGU6ZW5hYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWFjY2VudC1nbGFzcy0wMTApO1xuICAgIGJveC1zaGFkb3c6XG4gICAgICBpbnNldCAwIDAgMCAxcHggdmFyKC0td3VpLWNvbG9yLWFjY2VudC0xMDApLFxuICAgICAgMCAwIDAgNHB4IHZhcigtLXd1aS1jb2xvci1hY2NlbnQtZ2xhc3MtMDIwKTtcbiAgfVxuICBidXR0b25bZGF0YS12YXJpYW50PSdhY2NlbnQtZXJyb3InXTpmb2N1cy12aXNpYmxlOmVuYWJsZWQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXd1aS1jb2xvci1lcnJvci1nbGFzcy0wMTUpO1xuICAgIGJveC1zaGFkb3c6XG4gICAgICBpbnNldCAwIDAgMCAxcHggdmFyKC0td3VpLWNvbG9yLWVycm9yLTEwMCksXG4gICAgICAwIDAgMCA0cHggdmFyKC0td3VpLWNvbG9yLWVycm9yLWdsYXNzLTAyMCk7XG4gIH1cbiAgYnV0dG9uW2RhdGEtdmFyaWFudD0nYWNjZW50LXN1Y2Nlc3MnXTpmb2N1cy12aXNpYmxlOmVuYWJsZWQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXd1aS1jb2xvci1zdWNjZXNzLWdsYXNzLTAxNSk7XG4gICAgYm94LXNoYWRvdzpcbiAgICAgIGluc2V0IDAgMCAwIDFweCB2YXIoLS13dWktY29sb3Itc3VjY2Vzcy0xMDApLFxuICAgICAgMCAwIDAgNHB4IHZhcigtLXd1aS1jb2xvci1zdWNjZXNzLWdsYXNzLTAyMCk7XG4gIH1cbiAgYnV0dG9uW2RhdGEtdmFyaWFudD0nbmV1dHJhbCddOmZvY3VzLXZpc2libGU6ZW5hYmxlZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDA1KTtcbiAgICBib3gtc2hhZG93OlxuICAgICAgaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAxMCksXG4gICAgICAwIDAgMCA0cHggdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDAyKTtcbiAgfVxuXG4gIC8qIC0tIEhvdmVyICYgQWN0aXZlIHN0YXRlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gICAgYnV0dG9uW2RhdGEtdmFyaWFudD0nbWFpbiddOmhvdmVyOmVuYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWFjY2VudC0wOTApO1xuICAgIH1cblxuICAgIGJ1dHRvbltkYXRhLXZhcmlhbnQ9J21haW4nXTphY3RpdmU6ZW5hYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13dWktY29sb3ItYWNjZW50LTA4MCk7XG4gICAgfVxuXG4gICAgYnV0dG9uW2RhdGEtdmFyaWFudD0nYWNjZW50J106aG92ZXI6ZW5hYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13dWktY29sb3ItYWNjZW50LWdsYXNzLTAxNSk7XG4gICAgfVxuXG4gICAgYnV0dG9uW2RhdGEtdmFyaWFudD0nYWNjZW50J106YWN0aXZlOmVuYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWFjY2VudC1nbGFzcy0wMjApO1xuICAgIH1cblxuICAgIGJ1dHRvbltkYXRhLXZhcmlhbnQ9J2FjY2VudC1lcnJvciddOmhvdmVyOmVuYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0td3VpLWNvbG9yLWVycm9yLWdsYXNzLTAyMCk7XG4gICAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLWVycm9yLTEwMCk7XG4gICAgfVxuXG4gICAgYnV0dG9uW2RhdGEtdmFyaWFudD0nYWNjZW50LWVycm9yJ106YWN0aXZlOmVuYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0td3VpLWNvbG9yLWVycm9yLWdsYXNzLTAzMCk7XG4gICAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLWVycm9yLTEwMCk7XG4gICAgfVxuXG4gICAgYnV0dG9uW2RhdGEtdmFyaWFudD0nYWNjZW50LXN1Y2Nlc3MnXTpob3ZlcjplbmFibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXd1aS1jb2xvci1zdWNjZXNzLWdsYXNzLTAyMCk7XG4gICAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLXN1Y2Nlc3MtMTAwKTtcbiAgICB9XG5cbiAgICBidXR0b25bZGF0YS12YXJpYW50PSdhY2NlbnQtc3VjY2VzcyddOmFjdGl2ZTplbmFibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXd1aS1jb2xvci1zdWNjZXNzLWdsYXNzLTAzMCk7XG4gICAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLXN1Y2Nlc3MtMTAwKTtcbiAgICB9XG5cbiAgICBidXR0b25bZGF0YS12YXJpYW50PSduZXV0cmFsJ106aG92ZXI6ZW5hYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDIpO1xuICAgIH1cblxuICAgIGJ1dHRvbltkYXRhLXZhcmlhbnQ9J25ldXRyYWwnXTphY3RpdmU6ZW5hYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDUpO1xuICAgIH1cblxuICAgIGJ1dHRvbltkYXRhLXNpemU9J2xnJ11bZGF0YS1pY29uLWxlZnQ9J3RydWUnXVtkYXRhLWljb24tcmlnaHQ9J2ZhbHNlJ10ge1xuICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS13dWktc3BhY2luZy1tKTtcbiAgICB9XG5cbiAgICBidXR0b25bZGF0YS1zaXplPSdsZyddW2RhdGEtaWNvbi1yaWdodD0ndHJ1ZSddW2RhdGEtaWNvbi1sZWZ0PSdmYWxzZSddIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXd1aS1zcGFjaW5nLW0pO1xuICAgIH1cbiAgfVxuXG4gIC8qIC0tIERpc2FibGVkIHN0YXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBidXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwMik7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwMik7XG4gICAgY29sb3I6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAyMCk7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gIGJ1dHRvbiA+IHd1aS10ZXh0IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLXd1aS1lYXNlLW91dC1wb3dlci0xKSB2YXIoLS13dWktZHVyYXRpb24tbWQpO1xuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAgIG9wYWNpdHk6IHZhcigtLWxvY2FsLW9wYWNpdHktMTAwKTtcbiAgfVxuXG4gIDo6c2xvdHRlZCgqKSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSB2YXIoLS13dWktZWFzZS1vdXQtcG93ZXItMSkgdmFyKC0td3VpLWR1cmF0aW9uLW1kKTtcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgICBvcGFjaXR5OiB2YXIoLS1sb2NhbC1vcGFjaXR5LTEwMCk7XG4gIH1cblxuICB3dWktbG9hZGluZy1zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG9wYWNpdHk6IHZhcigtLWxvY2FsLW9wYWNpdHktMDAwKTtcbiAgfVxuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlcy5qcy5tYXAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3d1aS1sb2FkaW5nLXNwaW5uZXIvaW5kZXguanMnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3d1aS10ZXh0L2luZGV4LmpzJztcbmltcG9ydCB7IGVsZW1lbnRTdHlsZXMsIHJlc2V0U3R5bGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvVGhlbWVVdGlsLmpzJztcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9XZWJDb21wb25lbnRzVXRpbC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmpzJztcbmNvbnN0IFNQSU5ORVJfQ09MT1JfQllfVkFSSUFOVCA9IHtcbiAgICBtYWluOiAnaW52ZXJzZS0xMDAnLFxuICAgIGludmVyc2U6ICdpbnZlcnNlLTAwMCcsXG4gICAgYWNjZW50OiAnYWNjZW50LTEwMCcsXG4gICAgJ2FjY2VudC1lcnJvcic6ICdlcnJvci0xMDAnLFxuICAgICdhY2NlbnQtc3VjY2Vzcyc6ICdzdWNjZXNzLTEwMCcsXG4gICAgbmV1dHJhbDogJ2ZnLTEwMCcsXG4gICAgZGlzYWJsZWQ6ICdncmF5LWdsYXNzLTAyMCdcbn07XG5jb25zdCBURVhUX1ZBUklBTlRfQllfU0laRSA9IHtcbiAgICBsZzogJ3BhcmFncmFwaC02MDAnLFxuICAgIG1kOiAnc21hbGwtNjAwJ1xufTtcbmNvbnN0IFNQSU5ORVJfU0laRV9CWV9TSVpFID0ge1xuICAgIGxnOiAnbWQnLFxuICAgIG1kOiAnbWQnXG59O1xubGV0IFd1aUJ1dHRvbiA9IGNsYXNzIFd1aUJ1dHRvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnNpemUgPSAnbGcnO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnVsbFdpZHRoID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhcmlhbnQgPSAnbWFpbic7XG4gICAgICAgIHRoaXMuaGFzSWNvbkxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNJY29uUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib3JkZXJSYWRpdXMgPSAnbSc7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5jc3NUZXh0ID0gYFxuICAgIC0tbG9jYWwtd2lkdGg6ICR7dGhpcy5mdWxsV2lkdGggPyAnMTAwJScgOiAnYXV0byd9O1xuICAgIC0tbG9jYWwtb3BhY2l0eS0xMDA6ICR7dGhpcy5sb2FkaW5nID8gMCA6IDF9O1xuICAgIC0tbG9jYWwtb3BhY2l0eS0wMDA6ICR7dGhpcy5sb2FkaW5nID8gMSA6IDB9O1xuICAgIC0tbG9jYWwtYm9yZGVyLXJhZGl1czogdmFyKC0td3VpLWJvcmRlci1yYWRpdXMtJHt0aGlzLmJvcmRlclJhZGl1c30pO1xuICAgIGA7XG4gICAgICAgIGNvbnN0IHRleHRWYXJpYW50ID0gdGhpcy50ZXh0VmFyaWFudCA/PyBURVhUX1ZBUklBTlRfQllfU0laRVt0aGlzLnNpemVdO1xuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRhdGEtdmFyaWFudD0ke3RoaXMudmFyaWFudH1cbiAgICAgICAgZGF0YS1pY29uLWxlZnQ9JHt0aGlzLmhhc0ljb25MZWZ0fVxuICAgICAgICBkYXRhLWljb24tcmlnaHQ9JHt0aGlzLmhhc0ljb25SaWdodH1cbiAgICAgICAgZGF0YS1zaXplPSR7dGhpcy5zaXplfVxuICAgICAgICA/ZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxuICAgICAgPlxuICAgICAgICAke3RoaXMubG9hZGluZ1RlbXBsYXRlKCl9XG4gICAgICAgIDxzbG90IG5hbWU9XCJpY29uTGVmdFwiIEBzbG90Y2hhbmdlPSR7KCkgPT4gdGhpcy5oYW5kbGVTbG90TGVmdENoYW5nZSgpfT48L3Nsb3Q+XG4gICAgICAgIDx3dWktdGV4dCB2YXJpYW50PSR7dGV4dFZhcmlhbnR9IGNvbG9yPVwiaW5oZXJpdFwiPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC93dWktdGV4dD5cbiAgICAgICAgPHNsb3QgbmFtZT1cImljb25SaWdodFwiIEBzbG90Y2hhbmdlPSR7KCkgPT4gdGhpcy5oYW5kbGVTbG90UmlnaHRDaGFuZ2UoKX0+PC9zbG90PlxuICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgICB9XG4gICAgaGFuZGxlU2xvdExlZnRDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuaGFzSWNvbkxlZnQgPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVTbG90UmlnaHRDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuaGFzSWNvblJpZ2h0ID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9hZGluZ1RlbXBsYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gU1BJTk5FUl9TSVpFX0JZX1NJWkVbdGhpcy5zaXplXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICAgICAgICAgID8gU1BJTk5FUl9DT0xPUl9CWV9WQVJJQU5UWydkaXNhYmxlZCddXG4gICAgICAgICAgICAgICAgOiBTUElOTkVSX0NPTE9SX0JZX1ZBUklBTlRbdGhpcy52YXJpYW50XTtcbiAgICAgICAgICAgIHJldHVybiBodG1sIGA8d3VpLWxvYWRpbmctc3Bpbm5lciBjb2xvcj0ke2NvbG9yfSBzaXplPSR7c2l6ZX0+PC93dWktbG9hZGluZy1zcGlubmVyPmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0bWwgYGA7XG4gICAgfVxufTtcbld1aUJ1dHRvbi5zdHlsZXMgPSBbcmVzZXRTdHlsZXMsIGVsZW1lbnRTdHlsZXMsIHN0eWxlc107XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBXdWlCdXR0b24ucHJvdG90eXBlLCBcInNpemVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgV3VpQnV0dG9uLnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBXdWlCdXR0b24ucHJvdG90eXBlLCBcImZ1bGxXaWR0aFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBXdWlCdXR0b24ucHJvdG90eXBlLCBcImxvYWRpbmdcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUJ1dHRvbi5wcm90b3R5cGUsIFwidmFyaWFudFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBXdWlCdXR0b24ucHJvdG90eXBlLCBcImhhc0ljb25MZWZ0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIFd1aUJ1dHRvbi5wcm90b3R5cGUsIFwiaGFzSWNvblJpZ2h0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBXdWlCdXR0b24ucHJvdG90eXBlLCBcImJvcmRlclJhZGl1c1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgV3VpQnV0dG9uLnByb3RvdHlwZSwgXCJ0ZXh0VmFyaWFudFwiLCB2b2lkIDApO1xuV3VpQnV0dG9uID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgnd3VpLWJ1dHRvbicpXG5dLCBXdWlCdXR0b24pO1xuZXhwb3J0IHsgV3VpQnV0dG9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOlsic3R5bGVzIiwiY3NzIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiciIsImQiLCJpIiwiU1BJTk5FUl9DT0xPUl9CWV9WQVJJQU5UIiwiVEVYVF9WQVJJQU5UX0JZX1NJWkUiLCJTUElOTkVSX1NJWkVfQllfU0laRSIsIld1aUJ1dHRvbiIsIkxpdEVsZW1lbnQiLCJ0ZXh0VmFyaWFudCIsImh0bWwiLCJzaXplIiwiY29sb3IiLCJyZXNldFN0eWxlcyIsImVsZW1lbnRTdHlsZXMiLCJwcm9wZXJ0eSIsImN1c3RvbUVsZW1lbnQiXSwibWFwcGluZ3MiOiJvSkFDQSxNQUFBQSxFQUFlQztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtB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O0FBQUEsVUFFdkIsS0FBSyxnQkFBaUIsQ0FBQTtBQUFBLDRDQUNZLElBQU0sS0FBSyxzQkFBc0I7QUFBQSw0QkFDakRELENBQVc7QUFBQTtBQUFBO0FBQUEsNkNBR00sSUFBTSxLQUFLLHVCQUF1QjtBQUFBO0FBQUEsS0FHL0UsQ0FDSSxzQkFBdUIsQ0FDbkIsS0FBSyxZQUFjLEVBQzNCLENBQ0ksdUJBQXdCLENBQ3BCLEtBQUssYUFBZSxFQUM1QixDQUNJLGlCQUFrQixDQUNkLEdBQUksS0FBSyxRQUFTLENBQ2QsTUFBTUUsRUFBT0wsRUFBcUIsS0FBSyxJQUFJLEVBQ3JDTSxFQUFRLEtBQUssU0FDYlIsRUFBeUIsU0FDekJBLEVBQXlCLEtBQUssT0FBTyxFQUMzQyxPQUFPTSwrQkFBbUNFLENBQUssU0FBU0QsQ0FBSSx5QkFDeEUsQ0FDUSxPQUFPRCxHQUNmLENBQ0EsRUFDQUgsRUFBVSxPQUFTLENBQUNNLEVBQWFDLEVBQWVwQixDQUFNLEVBQ3RERSxFQUFXLENBQ1BtQixFQUFRLENBQ1osRUFBR1IsRUFBVSxVQUFXLE9BQVEsTUFBTSxFQUN0Q1gsRUFBVyxDQUNQbUIsRUFBUyxDQUFFLEtBQU0sT0FBUyxDQUFBLENBQzlCLEVBQUdSLEVBQVUsVUFBVyxXQUFZLE1BQU0sRUFDMUNYLEVBQVcsQ0FDUG1CLEVBQVMsQ0FBRSxLQUFNLE9BQVMsQ0FBQSxDQUM5QixFQUFHUixFQUFVLFVBQVcsWUFBYSxNQUFNLEVBQzNDWCxFQUFXLENBQ1BtQixFQUFTLENBQUUsS0FBTSxPQUFTLENBQUEsQ0FDOUIsRUFBR1IsRUFBVSxVQUFXLFVBQVcsTUFBTSxFQUN6Q1gsRUFBVyxDQUNQbUIsRUFBUSxDQUNaLEVBQUdSLEVBQVUsVUFBVyxVQUFXLE1BQU0sRUFDekNYLEVBQVcsQ0FDUG1CLEVBQVMsQ0FBRSxLQUFNLE9BQVMsQ0FBQSxDQUM5QixFQUFHUixFQUFVLFVBQVcsY0FBZSxNQUFNLEVBQzdDWCxFQUFXLENBQ1BtQixFQUFTLENBQUUsS0FBTSxPQUFTLENBQUEsQ0FDOUIsRUFBR1IsRUFBVSxVQUFXLGVBQWdCLE1BQU0sRUFDOUNYLEVBQVcsQ0FDUG1CLEVBQVEsQ0FDWixFQUFHUixFQUFVLFVBQVcsZUFBZ0IsTUFBTSxFQUM5Q1gsRUFBVyxDQUNQbUIsRUFBUSxDQUNaLEVBQUdSLEVBQVUsVUFBVyxjQUFlLE1BQU0sRUFDN0NBLEVBQVlYLEVBQVcsQ0FDbkJvQixFQUFjLFlBQVksQ0FDOUIsRUFBR1QsQ0FBUyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDFdfQ==
