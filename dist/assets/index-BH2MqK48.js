import{i as w,r as g,h,a as v,x as l}from"./index-C4QAg8YX.js";import{n as e,c as x,e as m,o as c}from"./if-defined-BYYrXBY0.js";import{e as b,n as f}from"./ref-DqiK23uq.js";const y=w`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var t=function(s,a,o,r){var p=arguments.length,n=p<3?a:r===null?r=Object.getOwnPropertyDescriptor(a,o):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,a,o,r);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(n=(p<3?u(n):p>3?u(a,o,n):u(a,o))||n);return p>3&&n&&Object.defineProperty(a,o,n),n};let i=class extends v{constructor(){super(...arguments),this.inputElementRef=b(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const a=`wui-padding-right-${this.inputRightPadding}`,r={[`wui-size-${this.size}`]:!0,[a]:!!this.inputRightPadding};return l`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${f(this.inputElementRef)}
        class=${m(r)}
        type=${this.type}
        enterkeyhint=${c(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${c(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?l`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};i.styles=[g,h,y];t([e()],i.prototype,"size",void 0);t([e()],i.prototype,"icon",void 0);t([e({type:Boolean})],i.prototype,"disabled",void 0);t([e()],i.prototype,"placeholder",void 0);t([e()],i.prototype,"type",void 0);t([e()],i.prototype,"keyHint",void 0);t([e()],i.prototype,"value",void 0);t([e()],i.prototype,"inputRightPadding",void 0);t([e()],i.prototype,"tabIdx",void 0);i=t([x("wui-input-text")],i);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtQkgyTXFLNDguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AcmVvd24vYXBwa2l0LXVpL2Rpc3QvZXNtL3NyYy9jb21wb3NpdGVzL3d1aS1pbnB1dC10ZXh0L3N0eWxlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AcmVvd24vYXBwa2l0LXVpL2Rpc3QvZXNtL3NyYy9jb21wb3NpdGVzL3d1aS1pbnB1dC10ZXh0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XG5leHBvcnQgZGVmYXVsdCBjc3MgYFxuICA6aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLWZnLTI3NSk7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0td3VpLWJvcmRlci1yYWRpdXMteHMpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwMik7XG4gICAgZm9udC1zaXplOiB2YXIoLS13dWktZm9udC1zaXplLXBhcmFncmFwaCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXd1aS1sZXR0ZXItc3BhY2luZy1wYXJhZ3JhcGgpO1xuICAgIGNvbG9yOiB2YXIoLS13dWktY29sb3ItZmctMTAwKTtcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgYmFja2dyb3VuZC1jb2xvciB2YXIoLS13dWktZWFzZS1pbm91dC1wb3dlci0xKSB2YXIoLS13dWktZHVyYXRpb24tbWQpLFxuICAgICAgYm9yZGVyLWNvbG9yIHZhcigtLXd1aS1lYXNlLWlub3V0LXBvd2VyLTEpIHZhcigtLXd1aS1kdXJhdGlvbi1tZCksXG4gICAgICBib3gtc2hhZG93IHZhcigtLXd1aS1lYXNlLWlub3V0LXBvd2VyLTEpIHZhcigtLXd1aS1kdXJhdGlvbi1tZCk7XG4gICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgYm94LXNoYWRvdztcbiAgICBjYXJldC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWFjY2VudC0xMDApO1xuICB9XG5cbiAgaW5wdXQ6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDEwKTtcbiAgfVxuXG4gIGlucHV0OmRpc2FibGVkOjpwbGFjZWhvbGRlcixcbiAgaW5wdXQ6ZGlzYWJsZWQgKyB3dWktaWNvbiB7XG4gICAgY29sb3I6IHZhcigtLXd1aS1jb2xvci1mZy0zMDApO1xuICB9XG5cbiAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLWZnLTI3NSk7XG4gIH1cblxuICBpbnB1dDpmb2N1czplbmFibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzpcbiAgICAgIGluc2V0IDAgMCAwIDFweCB2YXIoLS13dWktY29sb3ItYWNjZW50LTEwMCksXG4gICAgICAwcHggMHB4IDBweCA0cHggdmFyKC0td3VpLWJveC1zaGFkb3ctYmx1ZSk7XG4gICAgLW1vei1ib3gtc2hhZG93OlxuICAgICAgaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1hY2NlbnQtMTAwKSxcbiAgICAgIDBweCAwcHggMHB4IDRweCB2YXIoLS13dWktYm94LXNoYWRvdy1ibHVlKTtcbiAgICBib3gtc2hhZG93OlxuICAgICAgaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1hY2NlbnQtMTAwKSxcbiAgICAgIDBweCAwcHggMHB4IDRweCB2YXIoLS13dWktYm94LXNoYWRvdy1ibHVlKTtcbiAgfVxuXG4gIGlucHV0OmhvdmVyOmVuYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwNSk7XG4gIH1cblxuICB3dWktaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC53dWktc2l6ZS1zbSB7XG4gICAgcGFkZGluZzogOXB4IHZhcigtLXd1aS1zcGFjaW5nLW0pIDEwcHggdmFyKC0td3VpLXNwYWNpbmctcyk7XG4gIH1cblxuICB3dWktaWNvbiArIC53dWktc2l6ZS1zbSB7XG4gICAgcGFkZGluZzogOXB4IHZhcigtLXd1aS1zcGFjaW5nLW0pIDEwcHggMzZweDtcbiAgfVxuXG4gIHd1aS1pY29uW2RhdGEtaW5wdXQ9J3NtJ10ge1xuICAgIGxlZnQ6IHZhcigtLXd1aS1zcGFjaW5nLXMpO1xuICB9XG5cbiAgLnd1aS1zaXplLW1kIHtcbiAgICBwYWRkaW5nOiAxNXB4IHZhcigtLXd1aS1zcGFjaW5nLW0pIHZhcigtLXd1aS1zcGFjaW5nLWwpIHZhcigtLXd1aS1zcGFjaW5nLW0pO1xuICB9XG5cbiAgd3VpLWljb24gKyAud3VpLXNpemUtbWQsXG4gIHd1aS1sb2FkaW5nLXNwaW5uZXIgKyAud3VpLXNpemUtbWQge1xuICAgIHBhZGRpbmc6IDEwLjVweCB2YXIoLS13dWktc3BhY2luZy0zeGwpIDEwLjVweCB2YXIoLS13dWktc3BhY2luZy0zeGwpO1xuICB9XG5cbiAgd3VpLWljb25bZGF0YS1pbnB1dD0nbWQnXSB7XG4gICAgbGVmdDogdmFyKC0td3VpLXNwYWNpbmctbCk7XG4gIH1cblxuICAud3VpLXNpemUtbGcge1xuICAgIHBhZGRpbmc6IHZhcigtLXd1aS1zcGFjaW5nLXMpIHZhcigtLXd1aS1zcGFjaW5nLXMpIHZhcigtLXd1aS1zcGFjaW5nLXMpIHZhcigtLXd1aS1zcGFjaW5nLWwpO1xuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS13dWktbGV0dGVyLXNwYWNpbmctbWVkaXVtLXRpdGxlKTtcbiAgICBmb250LXNpemU6IHZhcigtLXd1aS1mb250LXNpemUtbWVkaXVtLXRpdGxlKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0td3VpLWZvbnQtd2VpZ2h0LWxpZ2h0KTtcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLWZnLTEwMCk7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICB9XG5cbiAgLnd1aS1wYWRkaW5nLXJpZ2h0LXhzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS13dWktc3BhY2luZy14cyk7XG4gIH1cblxuICAud3VpLXBhZGRpbmctcmlnaHQtcyB7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0td3VpLXNwYWNpbmctcyk7XG4gIH1cblxuICAud3VpLXBhZGRpbmctcmlnaHQtbSB7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0td3VpLXNwYWNpbmctbSk7XG4gIH1cblxuICAud3VpLXBhZGRpbmctcmlnaHQtbCB7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0td3VpLXNwYWNpbmctbCk7XG4gIH1cblxuICAud3VpLXBhZGRpbmctcmlnaHQteGwge1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXd1aS1zcGFjaW5nLXhsKTtcbiAgfVxuXG4gIC53dWktcGFkZGluZy1yaWdodC0yeGwge1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXd1aS1zcGFjaW5nLTJ4bCk7XG4gIH1cblxuICAud3VpLXBhZGRpbmctcmlnaHQtM3hsIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS13dWktc3BhY2luZy0zeGwpO1xuICB9XG5cbiAgLnd1aS1wYWRkaW5nLXJpZ2h0LTR4bCB7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0td3VpLXNwYWNpbmctNHhsKTtcbiAgfVxuXG4gIC53dWktcGFkZGluZy1yaWdodC01eGwge1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXd1aS1zcGFjaW5nLTV4bCk7XG4gIH1cblxuICB3dWktaWNvbiArIC53dWktc2l6ZS1sZyxcbiAgd3VpLWxvYWRpbmctc3Bpbm5lciArIC53dWktc2l6ZS1sZyB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG5cbiAgd3VpLWljb25bZGF0YS1pbnB1dD0nbGcnXSB7XG4gICAgbGVmdDogdmFyKC0td3VpLXNwYWNpbmctbCk7XG4gIH1cblxuICAud3VpLXNpemUtbWRsIHtcbiAgICBwYWRkaW5nOiAxNy4yNXB4IHZhcigtLXd1aS1zcGFjaW5nLW0pIDE3LjI1cHggdmFyKC0td3VpLXNwYWNpbmctbSk7XG4gIH1cbiAgd3VpLWljb24gKyAud3VpLXNpemUtbWRsLFxuICB3dWktbG9hZGluZy1zcGlubmVyICsgLnd1aS1zaXplLW1kbCB7XG4gICAgcGFkZGluZzogMTcuMjVweCB2YXIoLS13dWktc3BhY2luZy0zeGwpIDE3LjI1cHggNDBweDtcbiAgfVxuICB3dWktaWNvbltkYXRhLWlucHV0PSdtZGwnXSB7XG4gICAgbGVmdDogdmFyKC0td3VpLXNwYWNpbmctbSk7XG4gIH1cblxuICBpbnB1dDpwbGFjZWhvbGRlci1zaG93biB+IDo6c2xvdHRlZCh3dWktaW5wdXQtZWxlbWVudCksXG4gIGlucHV0OnBsYWNlaG9sZGVyLXNob3duIH4gOjpzbG90dGVkKHd1aS1pY29uKSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGlucHV0W3R5cGU9J251bWJlciddIHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgfVxuXG4gIDo6c2xvdHRlZCh3dWktaW5wdXQtZWxlbWVudCksXG4gIDo6c2xvdHRlZCh3dWktaWNvbikge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cblxuICA6OnNsb3R0ZWQod3VpLWlucHV0LWVsZW1lbnQpIHtcbiAgICByaWdodDogdmFyKC0td3VpLXNwYWNpbmctbSk7XG4gIH1cblxuICA6OnNsb3R0ZWQod3VpLWljb24pIHtcbiAgICByaWdodDogMHB4O1xuICB9XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmpzLm1hcCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL2NsYXNzLW1hcC5qcyc7XG5pbXBvcnQgeyBpZkRlZmluZWQgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLmpzJztcbmltcG9ydCB7IGNyZWF0ZVJlZiwgcmVmIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvcmVmLmpzJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy93dWktaWNvbi9pbmRleC5qcyc7XG5pbXBvcnQgeyBlbGVtZW50U3R5bGVzLCByZXNldFN0eWxlcyB9IGZyb20gJy4uLy4uL3V0aWxzL1RoZW1lVXRpbC5qcyc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvV2ViQ29tcG9uZW50c1V0aWwuanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5qcyc7XG5sZXQgV3VpSW5wdXRUZXh0ID0gY2xhc3MgV3VpSW5wdXRUZXh0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50UmVmID0gY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc2l6ZSA9ICdtZCc7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICB0aGlzLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpbnB1dENsYXNzID0gYHd1aS1wYWRkaW5nLXJpZ2h0LSR7dGhpcy5pbnB1dFJpZ2h0UGFkZGluZ31gO1xuICAgICAgICBjb25zdCBzaXplQ2xhc3MgPSBgd3VpLXNpemUtJHt0aGlzLnNpemV9YDtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgIFtzaXplQ2xhc3NdOiB0cnVlLFxuICAgICAgICAgICAgW2lucHV0Q2xhc3NdOiBCb29sZWFuKHRoaXMuaW5wdXRSaWdodFBhZGRpbmcpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBodG1sIGAke3RoaXMudGVtcGxhdGVJY29uKCl9XG4gICAgICA8aW5wdXRcbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJ3dWktaW5wdXQtdGV4dFwiXG4gICAgICAgICR7cmVmKHRoaXMuaW5wdXRFbGVtZW50UmVmKX1cbiAgICAgICAgY2xhc3M9JHtjbGFzc01hcChjbGFzc2VzKX1cbiAgICAgICAgdHlwZT0ke3RoaXMudHlwZX1cbiAgICAgICAgZW50ZXJrZXloaW50PSR7aWZEZWZpbmVkKHRoaXMuZW50ZXJLZXlIaW50KX1cbiAgICAgICAgP2Rpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cbiAgICAgICAgcGxhY2Vob2xkZXI9JHt0aGlzLnBsYWNlaG9sZGVyfVxuICAgICAgICBAaW5wdXQ9JHt0aGlzLmRpc3BhdGNoSW5wdXRDaGFuZ2VFdmVudC5iaW5kKHRoaXMpfVxuICAgICAgICAudmFsdWU9JHt0aGlzLnZhbHVlIHx8ICcnfVxuICAgICAgICB0YWJpbmRleD0ke2lmRGVmaW5lZCh0aGlzLnRhYklkeCl9XG4gICAgICAvPlxuICAgICAgPHNsb3Q+PC9zbG90PmA7XG4gICAgfVxuICAgIHRlbXBsYXRlSWNvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaWNvbikge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWwgYDx3dWktaWNvblxuICAgICAgICBkYXRhLWlucHV0PSR7dGhpcy5zaXplfVxuICAgICAgICBzaXplPSR7dGhpcy5zaXplfVxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICBuYW1lPSR7dGhpcy5pY29ufVxuICAgICAgPjwvd3VpLWljb24+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGlzcGF0Y2hJbnB1dENoYW5nZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbnB1dENoYW5nZScsIHtcbiAgICAgICAgICAgIGRldGFpbDogdGhpcy5pbnB1dEVsZW1lbnRSZWYudmFsdWU/LnZhbHVlLFxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICB9XG59O1xuV3VpSW5wdXRUZXh0LnN0eWxlcyA9IFtyZXNldFN0eWxlcywgZWxlbWVudFN0eWxlcywgc3R5bGVzXTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUlucHV0VGV4dC5wcm90b3R5cGUsIFwic2l6ZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgV3VpSW5wdXRUZXh0LnByb3RvdHlwZSwgXCJpY29uXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIFd1aUlucHV0VGV4dC5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUlucHV0VGV4dC5wcm90b3R5cGUsIFwicGxhY2Vob2xkZXJcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUlucHV0VGV4dC5wcm90b3R5cGUsIFwidHlwZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgV3VpSW5wdXRUZXh0LnByb3RvdHlwZSwgXCJrZXlIaW50XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBXdWlJbnB1dFRleHQucHJvdG90eXBlLCBcInZhbHVlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBXdWlJbnB1dFRleHQucHJvdG90eXBlLCBcImlucHV0UmlnaHRQYWRkaW5nXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBXdWlJbnB1dFRleHQucHJvdG90eXBlLCBcInRhYklkeFwiLCB2b2lkIDApO1xuV3VpSW5wdXRUZXh0ID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgnd3VpLWlucHV0LXRleHQnKVxuXSwgV3VpSW5wdXRUZXh0KTtcbmV4cG9ydCB7IFd1aUlucHV0VGV4dCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbInN0eWxlcyIsImNzcyIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJyIiwiZCIsImkiLCJXdWlJbnB1dFRleHQiLCJMaXRFbGVtZW50IiwiY3JlYXRlUmVmIiwiaW5wdXRDbGFzcyIsImNsYXNzZXMiLCJodG1sIiwicmVmIiwiY2xhc3NNYXAiLCJpZkRlZmluZWQiLCJyZXNldFN0eWxlcyIsImVsZW1lbnRTdHlsZXMiLCJwcm9wZXJ0eSIsImN1c3RvbUVsZW1lbnQiXSwibWFwcGluZ3MiOiI4S0FDQSxNQUFBQSxFQUFlQztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSxFQ0RmLElBQUlDLEVBQTBDLFNBQVVDLEVBQVlDLEVBQVFDLEVBQUtDLEVBQU0sQ0FDbkYsSUFBSUMsRUFBSSxVQUFVLE9BQVFDLEVBQUlELEVBQUksRUFBSUgsRUFB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
