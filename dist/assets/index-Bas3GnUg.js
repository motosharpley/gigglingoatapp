import{i as h,r as p,h as w,a as x,x as m}from"./index-lhkfOjOH.js";import{n as t,c as g,U as f}from"./if-defined-DRopHhnz.js";import"./index-YqHXSjNe.js";const b=h`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var u=function(a,o,r,i){var l=arguments.length,e=l<3?o:i===null?i=Object.getOwnPropertyDescriptor(o,r):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(a,o,r,i);else for(var s=a.length-1;s>=0;s--)(c=a[s])&&(e=(l<3?c(e):l>3?c(o,r,e):c(o,r))||e);return l>3&&e&&Object.defineProperty(o,r,e),e};let n=class extends x{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return m`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${f.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?m`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:m`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};n.styles=[p,w,b];u([t()],n.prototype,"tokenName",void 0);u([t()],n.prototype,"tokenImageUrl",void 0);u([t({type:Number})],n.prototype,"tokenValue",void 0);u([t()],n.prototype,"tokenAmount",void 0);u([t()],n.prototype,"tokenCurrency",void 0);u([t({type:Boolean})],n.prototype,"clickable",void 0);n=u([g("wui-list-token")],n);const y=h`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var v=function(a,o,r,i){var l=arguments.length,e=l<3?o:i===null?i=Object.getOwnPropertyDescriptor(o,r):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(a,o,r,i);else for(var s=a.length-1;s>=0;s--)(c=a[s])&&(e=(l<3?c(e):l>3?c(o,r,e):c(o,r))||e);return l>3&&e&&Object.defineProperty(o,r,e),e};let d=class extends x{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,m`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",m`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const o=f.generateAvatarColors(this.address);return this.style.cssText+=`
 ${o}`,null}return this.dataset.variant="default",null}};d.styles=[p,y];v([t()],d.prototype,"imageSrc",void 0);v([t()],d.prototype,"alt",void 0);v([t()],d.prototype,"address",void 0);v([t()],d.prototype,"size",void 0);d=v([g("wui-avatar")],d);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtQmFzM0duVWcuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AcmVvd24vYXBwa2l0LXVpL2Rpc3QvZXNtL3NyYy9jb21wb3NpdGVzL3d1aS1saXN0LXRva2VuL3N0eWxlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AcmVvd24vYXBwa2l0LXVpL2Rpc3QvZXNtL3NyYy9jb21wb3NpdGVzL3d1aS1saXN0LXRva2VuL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW93bi9hcHBraXQtdWkvZGlzdC9lc20vc3JjL2NvbXBvc2l0ZXMvd3VpLWF2YXRhci9zdHlsZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHJlb3duL2FwcGtpdC11aS9kaXN0L2VzbS9zcmMvY29tcG9zaXRlcy93dWktYXZhdGFyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XG5leHBvcnQgZGVmYXVsdCBjc3MgYFxuICBidXR0b24ge1xuICAgIHBhZGRpbmc6IDYuNXB4IHZhcigtLXd1aS1zcGFjaW5nLWwpIDYuNXB4IHZhcigtLXd1aS1zcGFjaW5nLXhzKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS13dWktYm9yZGVyLXJhZGl1cy14cyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDAyKTtcbiAgfVxuXG4gIGJ1dHRvbltkYXRhLWNsaWNrYWJsZT0nZmFsc2UnXSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICB3dWktaW1hZ2UsXG4gIHd1aS1pY29uIHtcbiAgICB3aWR0aDogdmFyKC0td3VpLXNwYWNpbmctM3hsKTtcbiAgICBoZWlnaHQ6IHZhcigtLXd1aS1zcGFjaW5nLTN4bCk7XG4gIH1cblxuICB3dWktaW1hZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXd1aS1ib3JkZXItcmFkaXVzLTN4bCk7XG4gIH1cbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuanMubWFwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy93dWktaWNvbi9pbmRleC5qcyc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvd3VpLWltYWdlL2luZGV4LmpzJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy93dWktdGV4dC9pbmRleC5qcyc7XG5pbXBvcnQgJy4uLy4uL2xheW91dC93dWktZmxleC9pbmRleC5qcyc7XG5pbXBvcnQgeyBlbGVtZW50U3R5bGVzLCByZXNldFN0eWxlcyB9IGZyb20gJy4uLy4uL3V0aWxzL1RoZW1lVXRpbC5qcyc7XG5pbXBvcnQgeyBVaUhlbHBlclV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9VaUhlbHBlclV0aWwuanMnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL1dlYkNvbXBvbmVudHNVdGlsLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuanMnO1xubGV0IFd1aUxpc3RUb2tlbiA9IGNsYXNzIFd1aUxpc3RUb2tlbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnRva2VuTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLnRva2VuSW1hZ2VVcmwgPSAnJztcbiAgICAgICAgdGhpcy50b2tlblZhbHVlID0gMC4wO1xuICAgICAgICB0aGlzLnRva2VuQW1vdW50ID0gJzAuMCc7XG4gICAgICAgIHRoaXMudG9rZW5DdXJyZW5jeSA9ICcnO1xuICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDxidXR0b24gZGF0YS1jbGlja2FibGU9JHtTdHJpbmcodGhpcy5jbGlja2FibGUpfT5cbiAgICAgICAgPHd1aS1mbGV4IGdhcD1cInNcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgJHt0aGlzLnZpc3VhbFRlbXBsYXRlKCl9XG4gICAgICAgICAgPHd1aS1mbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgICAgPHd1aS10ZXh0IHZhcmlhbnQ9XCJwYXJhZ3JhcGgtNTAwXCIgY29sb3I9XCJmZy0xMDBcIj4ke3RoaXMudG9rZW5OYW1lfTwvd3VpLXRleHQ+XG4gICAgICAgICAgICA8d3VpLXRleHQgdmFyaWFudD1cInNtYWxsLTQwMFwiIGNvbG9yPVwiZmctMjAwXCI+XG4gICAgICAgICAgICAgICR7VWlIZWxwZXJVdGlsLmZvcm1hdE51bWJlclRvTG9jYWxTdHJpbmcodGhpcy50b2tlbkFtb3VudCwgNCl9ICR7dGhpcy50b2tlbkN1cnJlbmN5fVxuICAgICAgICAgICAgPC93dWktdGV4dD5cbiAgICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgICA8L3d1aS1mbGV4PlxuICAgICAgICA8d3VpLXRleHQgdmFyaWFudD1cInBhcmFncmFwaC01MDBcIiBjb2xvcj1cImZnLTEwMFwiPiQke3RoaXMudG9rZW5WYWx1ZS50b0ZpeGVkKDIpfTwvd3VpLXRleHQ+XG4gICAgICA8L2J1dHRvbj5cbiAgICBgO1xuICAgIH1cbiAgICB2aXN1YWxUZW1wbGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5OYW1lICYmIHRoaXMudG9rZW5JbWFnZVVybCkge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWwgYDx3dWktaW1hZ2UgYWx0PSR7dGhpcy50b2tlbk5hbWV9IHNyYz0ke3RoaXMudG9rZW5JbWFnZVVybH0+PC93dWktaW1hZ2U+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHRtbCBgPHd1aS1pY29uIG5hbWU9XCJjb2luUGxhY2Vob2xkZXJcIiBjb2xvcj1cImZnLTEwMFwiPjwvd3VpLWljb24+YDtcbiAgICB9XG59O1xuV3VpTGlzdFRva2VuLnN0eWxlcyA9IFtyZXNldFN0eWxlcywgZWxlbWVudFN0eWxlcywgc3R5bGVzXTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUxpc3RUb2tlbi5wcm90b3R5cGUsIFwidG9rZW5OYW1lXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBXdWlMaXN0VG9rZW4ucHJvdG90eXBlLCBcInRva2VuSW1hZ2VVcmxcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG5dLCBXdWlMaXN0VG9rZW4ucHJvdG90eXBlLCBcInRva2VuVmFsdWVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUxpc3RUb2tlbi5wcm90b3R5cGUsIFwidG9rZW5BbW91bnRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUxpc3RUb2tlbi5wcm90b3R5cGUsIFwidG9rZW5DdXJyZW5jeVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBXdWlMaXN0VG9rZW4ucHJvdG90eXBlLCBcImNsaWNrYWJsZVwiLCB2b2lkIDApO1xuV3VpTGlzdFRva2VuID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgnd3VpLWxpc3QtdG9rZW4nKVxuXSwgV3VpTGlzdFRva2VuKTtcbmV4cG9ydCB7IFd1aUxpc3RUb2tlbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcbmV4cG9ydCBkZWZhdWx0IGNzcyBgXG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogdmFyKC0tbG9jYWwtd2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0tbG9jYWwtaGVpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS13dWktYm9yZGVyLXJhZGl1cy0zeGwpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDhweCB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgOmhvc3QoW2RhdGEtdmFyaWFudD0nZ2VuZXJhdGVkJ10pIHtcbiAgICAtLW1peGVkLWxvY2FsLWNvbG9yLTE6IHZhcigtLWxvY2FsLWNvbG9yLTEpO1xuICAgIC0tbWl4ZWQtbG9jYWwtY29sb3ItMjogdmFyKC0tbG9jYWwtY29sb3ItMik7XG4gICAgLS1taXhlZC1sb2NhbC1jb2xvci0zOiB2YXIoLS1sb2NhbC1jb2xvci0zKTtcbiAgICAtLW1peGVkLWxvY2FsLWNvbG9yLTQ6IHZhcigtLWxvY2FsLWNvbG9yLTQpO1xuICAgIC0tbWl4ZWQtbG9jYWwtY29sb3ItNTogdmFyKC0tbG9jYWwtY29sb3ItNSk7XG4gIH1cblxuICBAc3VwcG9ydHMgKGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB3aGl0ZSA1MCUsIGJsYWNrKSkge1xuICAgIDpob3N0KFtkYXRhLXZhcmlhbnQ9J2dlbmVyYXRlZCddKSB7XG4gICAgICAtLW1peGVkLWxvY2FsLWNvbG9yLTE6IGNvbG9yLW1peChcbiAgICAgICAgaW4gc3JnYixcbiAgICAgICAgdmFyKC0tdzNtLWNvbG9yLW1peCkgdmFyKC0tdzNtLWNvbG9yLW1peC1zdHJlbmd0aCksXG4gICAgICAgIHZhcigtLWxvY2FsLWNvbG9yLTEpXG4gICAgICApO1xuICAgICAgLS1taXhlZC1sb2NhbC1jb2xvci0yOiBjb2xvci1taXgoXG4gICAgICAgIGluIHNyZ2IsXG4gICAgICAgIHZhcigtLXczbS1jb2xvci1taXgpIHZhcigtLXczbS1jb2xvci1taXgtc3RyZW5ndGgpLFxuICAgICAgICB2YXIoLS1sb2NhbC1jb2xvci0yKVxuICAgICAgKTtcbiAgICAgIC0tbWl4ZWQtbG9jYWwtY29sb3ItMzogY29sb3ItbWl4KFxuICAgICAgICBpbiBzcmdiLFxuICAgICAgICB2YXIoLS13M20tY29sb3ItbWl4KSB2YXIoLS13M20tY29sb3ItbWl4LXN0cmVuZ3RoKSxcbiAgICAgICAgdmFyKC0tbG9jYWwtY29sb3ItMylcbiAgICAgICk7XG4gICAgICAtLW1peGVkLWxvY2FsLWNvbG9yLTQ6IGNvbG9yLW1peChcbiAgICAgICAgaW4gc3JnYixcbiAgICAgICAgdmFyKC0tdzNtLWNvbG9yLW1peCkgdmFyKC0tdzNtLWNvbG9yLW1peC1zdHJlbmd0aCksXG4gICAgICAgIHZhcigtLWxvY2FsLWNvbG9yLTQpXG4gICAgICApO1xuICAgICAgLS1taXhlZC1sb2NhbC1jb2xvci01OiBjb2xvci1taXgoXG4gICAgICAgIGluIHNyZ2IsXG4gICAgICAgIHZhcigtLXczbS1jb2xvci1taXgpIHZhcigtLXczbS1jb2xvci1taXgtc3RyZW5ndGgpLFxuICAgICAgICB2YXIoLS1sb2NhbC1jb2xvci01KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICA6aG9zdChbZGF0YS12YXJpYW50PSdnZW5lcmF0ZWQnXSkge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDhweCB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMDUpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgIHZhcigtLWxvY2FsLXJhZGlhbC1jaXJjbGUpLFxuICAgICAgI2ZmZiAwLjUyJSxcbiAgICAgIHZhcigtLW1peGVkLWxvY2FsLWNvbG9yLTUpIDMxLjI1JSxcbiAgICAgIHZhcigtLW1peGVkLWxvY2FsLWNvbG9yLTMpIDUxLjU2JSxcbiAgICAgIHZhcigtLW1peGVkLWxvY2FsLWNvbG9yLTIpIDY1LjYzJSxcbiAgICAgIHZhcigtLW1peGVkLWxvY2FsLWNvbG9yLTEpIDgyLjI5JSxcbiAgICAgIHZhcigtLW1peGVkLWxvY2FsLWNvbG9yLTQpIDEwMCVcbiAgICApO1xuICB9XG5cbiAgOmhvc3QoW2RhdGEtdmFyaWFudD0nZGVmYXVsdCddKSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgOHB4IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAwNSk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgNzUuMjklIDc1LjI5JSBhdCA2NC45NiUgMjQuMzYlLFxuICAgICAgI2ZmZiAwLjUyJSxcbiAgICAgICNmNWNjZmMgMzEuMjUlLFxuICAgICAgI2RiYTRmNSA1MS41NiUsXG4gICAgICAjOWE4ZWU4IDY1LjYzJSxcbiAgICAgICM2NDkzZGEgODIuMjklLFxuICAgICAgIzZlYmRlYSAxMDAlXG4gICAgKTtcbiAgfVxuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlcy5qcy5tYXAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3d1aS1pbWFnZS9pbmRleC5qcyc7XG5pbXBvcnQgeyByZXNldFN0eWxlcyB9IGZyb20gJy4uLy4uL3V0aWxzL1RoZW1lVXRpbC5qcyc7XG5pbXBvcnQgeyBVaUhlbHBlclV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9VaUhlbHBlclV0aWwuanMnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL1dlYkNvbXBvbmVudHNVdGlsLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuanMnO1xubGV0IFd1aUF2YXRhciA9IGNsYXNzIFd1aUF2YXRhciBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmltYWdlU3JjID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmFsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNpemUgPSAneGwnO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAtLWxvY2FsLXdpZHRoOiB2YXIoLS13dWktaWNvbi1ib3gtc2l6ZS0ke3RoaXMuc2l6ZX0pO1xuICAgIC0tbG9jYWwtaGVpZ2h0OiB2YXIoLS13dWktaWNvbi1ib3gtc2l6ZS0ke3RoaXMuc2l6ZX0pO1xuICAgIGA7XG4gICAgICAgIHJldHVybiBodG1sIGAke3RoaXMudmlzdWFsVGVtcGxhdGUoKX1gO1xuICAgIH1cbiAgICB2aXN1YWxUZW1wbGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VTcmMpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YXNldFsndmFyaWFudCddID0gJ2ltYWdlJztcbiAgICAgICAgICAgIHJldHVybiBodG1sIGA8d3VpLWltYWdlIHNyYz0ke3RoaXMuaW1hZ2VTcmN9IGFsdD0ke3RoaXMuYWx0ID8/ICdhdmF0YXInfT48L3d1aS1pbWFnZT5gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWRkcmVzcykge1xuICAgICAgICAgICAgdGhpcy5kYXRhc2V0Wyd2YXJpYW50J10gPSAnZ2VuZXJhdGVkJztcbiAgICAgICAgICAgIGNvbnN0IGNzc0NvbG9ycyA9IFVpSGVscGVyVXRpbC5nZW5lcmF0ZUF2YXRhckNvbG9ycyh0aGlzLmFkZHJlc3MpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5jc3NUZXh0ICs9IGBcXG4gJHtjc3NDb2xvcnN9YDtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YXNldFsndmFyaWFudCddID0gJ2RlZmF1bHQnO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuV3VpQXZhdGFyLnN0eWxlcyA9IFtyZXNldFN0eWxlcywgc3R5bGVzXTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUF2YXRhci5wcm90b3R5cGUsIFwiaW1hZ2VTcmNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUF2YXRhci5wcm90b3R5cGUsIFwiYWx0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBXdWlBdmF0YXIucHJvdG90eXBlLCBcImFkZHJlc3NcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUF2YXRhci5wcm90b3R5cGUsIFwic2l6ZVwiLCB2b2lkIDApO1xuV3VpQXZhdGFyID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgnd3VpLWF2YXRhcicpXG5dLCBXdWlBdmF0YXIpO1xuZXhwb3J0IHsgV3VpQXZhdGFyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOlsic3R5bGVzJDEiLCJjc3MiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiciIsImQiLCJpIiwiV3VpTGlzdFRva2VuIiwiTGl0RWxlbWVudCIsImh0bWwiLCJVaUhlbHBlclV0aWwiLCJyZXNldFN0eWxlcyIsImVsZW1lbnRTdHlsZXMiLCJzdHlsZXMiLCJwcm9wZXJ0eSIsImN1c3RvbUVsZW1lbnQiLCJXdWlBdmF0YXIiLCJjc3NDb2xvcnMiXSwibWFwcGluZ3MiOiIySkFDQSxNQUFBQSxFQUFlQztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSxFQ0RmLElBQUlDLEVBQTBDLFNBQVVDLEVBQVlDLEVBQVFDLEVBQUtDLEVBQU0sQ0FDbkYsSUFBSUMsRUFBSSxVQUFVLE9BQVFDLEVBQUlELEVBQUksRUFBSUgsRUFBU0UsSUFBUyxLQUFPQSxFQUFPLE9BQU8seUJBQXlCRixFQUFRQyxDQUFHLEVBQUlDLEVBQU1HLEVBQzNILEdBQUksT0FBTyxTQUFZLFVBQVksT0FBTyxRQUFRLFVBQWEsV0FBWUQsRUFBSSxRQUFRLFNBQVNMLEVBQVlDLEVBQVFDLEVBQUtDLENBQUksTUFDeEgsU0FBU0ksRUFBSVAsRUFBVyxPQUFTLEVBQUdPLEdBQUssRUFBR0EsS0FBU0QsRUFBSU4sRUFBV08sQ0FBQyxLQUFHRixHQUFLRCxFQUFJLEVBQUlFLEVBQUVELENBQUMsRUFBSUQsRUFBSSxFQUFJRSxFQUFFTCxFQUFRQyxFQUFLRyxDQUFDLEVBQUlDLEVBQUVMLEVBQVFDLENBQUcsSUFBTUcsR0FDaEosT0FBT0QsRUFBSSxHQUFLQyxHQUFLLE9BQU8sZUFBZUosRUFBUUMsRUFBS0csQ0FBQyxFQUFHQSxDQUNoRSxFQVdBLElBQUlHLEVBQWUsY0FBMkJDLENBQVcsQ0FDckQsYUFBYyxDQUNWLE1BQU0sR0FBRyxTQUFTLEVBQ2xCLEtBQUssVUFBWSxHQUNqQixLQUFLLGNBQWdCLEdBQ3JCLEtBQUssV0FBYSxFQUNsQixLQUFLLFlBQWMsTUFDbkIsS0FBSyxjQUFnQixHQUNyQixLQUFLLFVBQVksRUFDekIsQ0FDSSxRQUFTLENBQ0wsT0FBT0M7QUFBQUEsK0JBQ2dCLE9BQU8sS0FBSyxTQUFTLENBQUM7QUFBQTtBQUFBLFlBRXpDLEtBQUssZUFBZ0IsQ0FBQTtBQUFBO0FBQUEsK0RBRThCLEtBQUssU0FBUztBQUFBO0FBQUEsZ0JBRTdEQyxFQUFhLDBCQUEwQixLQUFLLFlBQWEsQ0FBQyxDQUFDLElBQUksS0FBSyxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBSXJDLEtBQUssV0FBVyxRQUFRLENBQUMsQ0FBQztBQUFBO0FBQUEsS0FHdEYsQ0FDSSxnQkFBaUIsQ0FDYixPQUFJLEtBQUssV0FBYSxLQUFLLGNBQ2hCRCxtQkFBdUIsS0FBSyxTQUFTLFFBQVEsS0FBSyxhQUFhLGdCQUVuRUEsOERBQ2YsQ0FDQSxFQUNBRixFQUFhLE9BQVMsQ0FBQ0ksRUFBYUMsRUFBZUMsQ0FBTSxFQUN6RGYsRUFBVyxDQUNQZ0IsRUFBUSxDQUNaLEVBQUdQLEVBQWEsVUFBVyxZQUFhLE1BQU0sRUFDOUNULEVBQVcsQ0FDUGdCLEVBQVEsQ0FDWixFQUFHUCxFQUFhLFVBQVcsZ0JBQWlCLE1BQU0sRUFDbERULEVBQVcsQ0FDUGdCLEVBQVMsQ0FBRSxLQUFNLE1BQVEsQ0FBQSxDQUM3QixFQUFHUCxFQUFhLFVBQVcsYUFBYyxNQUFNLEVBQy9DVCxFQUFXLENBQ1BnQixFQUFRLENBQ1osRUFBR1AsRUFBYSxVQUFXLGNBQWUsTUFBTSxFQUNoRFQsRUFBVyxDQUNQZ0IsRUFBUSxDQUNaLEVBQUdQLEVBQWEsVUFBVyxnQkFBaUIsTUFBTSxFQUNsRFQsRUFBVyxDQUNQZ0IsRUFBUyxDQUFFLEtBQU0sT0FBUyxDQUFBLENBQzlCLEVBQUdQLEVBQWEsVUFBVyxZQUFhLE1BQU0sRUFDOUNBLEVBQWVULEVBQVcsQ0FDdEJpQixFQUFjLGdCQUFnQixDQUNsQyxFQUFHUixDQUFZLEVDckVmLE1BQUFNLEVBQWVoQjtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSxFQ0RmLElBQUlDLEVBQTBDLFNBQVVDLEVBQVlDLEVBQVFDLEVBQUtDLEVBQU0sQ0FDbkYsSUFBSUMsRUFBSSxVQUFVLE9BQVFDLEVBQUlELEVBQUksRUFBSUgsRUFBU0UsSUFBUyxLQUFPQSxFQUFPLE9BQU8seUJBQXlCRixFQUFRQyxDQUFHLEVBQUlDLEVBQU1HLEVBQzNILEdBQUksT0FBTyxTQUFZLFVBQVksT0FBTyxRQUFRLFVBQWEsV0FBWUQsRUFBSSxRQUFRLFNBQVNMLEVBQVlDLEVBQVFDLEVBQUtDLENBQUksTUFDeEgsU0FBU0ksRUFBSVAsRUFBVyxPQUFTLEVBQUdPLEdBQUssRUFBR0EsS0FBU0QsRUFBSU4sRUFBV08sQ0FBQyxLQUFHRixHQUFLRCxFQUFJLEVBQUlFLEVBQUVELENBQUMsRUFBSUQsRUFBSSxFQUFJRSxFQUFFTCxFQUFRQyxFQUFLRyxDQUFDLEVBQUlDLEVBQUVMLEVBQVFDLENBQUcsSUFBTUcsR0FDaEosT0FBT0QsRUFBSSxHQUFLQyxHQUFLLE9BQU8sZUFBZUosRUFBUUMsRUFBS0csQ0FBQyxFQUFHQSxDQUNoRSxFQVFBLElBQUlZLEVBQVksY0FBd0JSLENBQVcsQ0FDL0MsYUFBYyxDQUNWLE1BQU0sR0FBRyxTQUFTLEVBQ2xCLEtBQUssU0FBVyxPQUNoQixLQUFLLElBQU0sT0FDWCxLQUFLLFFBQVUsT0FDZixLQUFLLEtBQU8sSUFDcEIsQ0FDSSxRQUFTLENBQ0wsWUFBSyxNQUFNLFFBQVU7QUFBQSw2Q0FDZ0IsS0FBSyxJQUFJO0FBQUEsOENBQ1IsS0FBSyxJQUFJO0FBQUEsTUFFeENDLElBQVEsS0FBSyxlQUFnQixDQUFBLEVBQzVDLENBQ0ksZ0JBQWlCLENBQ2IsR0FBSSxLQUFLLFNBQ0wsWUFBSyxRQUFRLFFBQWEsUUFDbkJBLG1CQUF1QixLQUFLLFFBQVEsUUFBUSxLQUFLLEtBQU8sUUFBUSxnQkFFdEUsR0FBSSxLQUFLLFFBQVMsQ0FDbkIsS0FBSyxRQUFRLFFBQWEsWUFDMUIsTUFBTVEsRUFBWVAsRUFBYSxxQkFBcUIsS0FBSyxPQUFPLEVBQ2hFLFlBQUssTUFBTSxTQUFXO0FBQUEsR0FBTU8sQ0FBUyxHQUM5QixJQUNuQixDQUNRLFlBQUssUUFBUSxRQUFhLFVBQ25CLElBQ2YsQ0FDQSxFQUNBRCxFQUFVLE9BQVMsQ0FBQ0wsRUFBYUUsQ0FBTSxFQUN2Q2YsRUFBVyxDQUNQZ0IsRUFBUSxDQUNaLEVBQUdFLEVBQVUsVUFBVyxXQUFZLE1BQU0sRUFDMUNsQixFQUFXLENBQ1BnQixFQUFRLENBQ1osRUFBR0UsRUFBVSxVQUFXLE1BQU8sTUFBTSxFQUNyQ2xCLEVBQVcsQ0FDUGdCLEVBQVEsQ0FDWixFQUFHRSxFQUFVLFVBQVcsVUFBVyxNQUFNLEVBQ3pDbEIsRUFBVyxDQUNQZ0IsRUFBUSxDQUNaLEVBQUdFLEVBQVUsVUFBVyxPQUFRLE1BQU0sRUFDdENBLEVBQVlsQixFQUFXLENBQ25CaUIsRUFBYyxZQUFZLENBQzlCLEVBQUdDLENBQVMiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsM119
