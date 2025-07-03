import{i as v,r as g,h,a as p,x as u}from"./index-lhkfOjOH.js";import{n as t,c as w,U as m}from"./if-defined-DRopHhnz.js";import"./index-YqHXSjNe.js";const S={URLS:{FAQ:"https://walletconnect.com/faq"}},f=v`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var r=function(s,o,e,n){var c=arguments.length,i=c<3?o:n===null?n=Object.getOwnPropertyDescriptor(o,e):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,o,e,n);else for(var d=s.length-1;d>=0;d--)(l=s[d])&&(i=(c<3?l(i):c>3?l(o,e,i):l(o,e))||i);return c>3&&i&&Object.defineProperty(o,e,i),i};let a=class extends p{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return u`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:m.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?u`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?u`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};a.styles=[g,h,f];r([t()],a.prototype,"variant",void 0);r([t()],a.prototype,"imageSrc",void 0);r([t()],a.prototype,"imageIcon",void 0);r([t()],a.prototype,"imageIconSize",void 0);r([t({type:Boolean})],a.prototype,"disabled",void 0);r([t()],a.prototype,"icon",void 0);r([t()],a.prototype,"href",void 0);r([t()],a.prototype,"text",void 0);a=r([w("wui-chip")],a);export{S as N};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtQ1FDMVY2cWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AcmVvd24vYXBwa2l0LWNvbW1vbi9kaXN0L2VzbS9zcmMvdXRpbHMvTmF2aWdhdGlvblV0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHJlb3duL2FwcGtpdC11aS9kaXN0L2VzbS9zcmMvY29tcG9zaXRlcy93dWktY2hpcC9zdHlsZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHJlb3duL2FwcGtpdC11aS9kaXN0L2VzbS9zcmMvY29tcG9zaXRlcy93dWktY2hpcC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTmF2aWdhdGlvblV0aWwgPSB7XG4gICAgVVJMUzoge1xuICAgICAgICBGQVE6ICdodHRwczovL3dhbGxldGNvbm5lY3QuY29tL2ZhcSdcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TmF2aWdhdGlvblV0aWwuanMubWFwIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcbmV4cG9ydCBkZWZhdWx0IGNzcyBgXG4gIGEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAxMCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0td3VpLWJvcmRlci1yYWRpdXMtM3hsKTtcbiAgfVxuXG4gIHd1aS1pbWFnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0td3VpLWJvcmRlci1yYWRpdXMtM3hsKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgYS5kaXNhYmxlZCA+IHd1aS1pY29uOm5vdCguaW1hZ2UtaWNvbiksXG4gIGEuZGlzYWJsZWQgPiB3dWktaW1hZ2Uge1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICB9XG5cbiAgYVtkYXRhLXZhcmlhbnQ9J2ZpbGwnXSB7XG4gICAgY29sb3I6IHZhcigtLXd1aS1jb2xvci1pbnZlcnNlLTEwMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWFjY2VudC0xMDApO1xuICB9XG5cbiAgYVtkYXRhLXZhcmlhbnQ9J3NoYWRlJ10sXG4gIGFbZGF0YS12YXJpYW50PSdzaGFkZVNtYWxsJ10ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAxMCk7XG4gICAgY29sb3I6IHZhcigtLXd1aS1jb2xvci1mZy0yMDApO1xuICB9XG5cbiAgYVtkYXRhLXZhcmlhbnQ9J3N1Y2Nlc3MnXSB7XG4gICAgY29sdW1uLWdhcDogdmFyKC0td3VpLXNwYWNpbmcteHhzKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13dWktY29sb3Itc3VjY2Vzcy1nbGFzcy0wMTApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1zdWNjZXNzLWdsYXNzLTAxMCk7XG4gICAgY29sb3I6IHZhcigtLXd1aS1jb2xvci1zdWNjZXNzLTEwMCk7XG4gIH1cblxuICBhW2RhdGEtdmFyaWFudD0nZXJyb3InXSB7XG4gICAgY29sdW1uLWdhcDogdmFyKC0td3VpLXNwYWNpbmcteHhzKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13dWktY29sb3ItZXJyb3ItZ2xhc3MtMDEwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13dWktY29sb3ItZXJyb3ItZ2xhc3MtMDEwKTtcbiAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLWVycm9yLTEwMCk7XG4gIH1cblxuICBhW2RhdGEtdmFyaWFudD0ndHJhbnNwYXJlbnQnXSB7XG4gICAgY29sdW1uLWdhcDogdmFyKC0td3VpLXNwYWNpbmcteHhzKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0td3VpLWNvbG9yLWZnLTE1MCk7XG4gIH1cblxuICBhW2RhdGEtdmFyaWFudD0ndHJhbnNwYXJlbnQnXSxcbiAgYVtkYXRhLXZhcmlhbnQ9J3N1Y2Nlc3MnXSxcbiAgYVtkYXRhLXZhcmlhbnQ9J3NoYWRlU21hbGwnXSxcbiAgYVtkYXRhLXZhcmlhbnQ9J2Vycm9yJ10ge1xuICAgIHBhZGRpbmc6IDdweCB2YXIoLS13dWktc3BhY2luZy1zKSA3cHggMTBweDtcbiAgfVxuXG4gIGFbZGF0YS12YXJpYW50PSd0cmFuc3BhcmVudCddOmhhcyh3dWktdGV4dDpmaXJzdC1jaGlsZCksXG4gIGFbZGF0YS12YXJpYW50PSdzdWNjZXNzJ106aGFzKHd1aS10ZXh0OmZpcnN0LWNoaWxkKSxcbiAgYVtkYXRhLXZhcmlhbnQ9J3NoYWRlU21hbGwnXTpoYXMod3VpLXRleHQ6Zmlyc3QtY2hpbGQpLFxuICBhW2RhdGEtdmFyaWFudD0nZXJyb3InXTpoYXMod3VpLXRleHQ6Zmlyc3QtY2hpbGQpIHtcbiAgICBwYWRkaW5nOiA3cHggdmFyKC0td3VpLXNwYWNpbmctcyk7XG4gIH1cblxuICBhW2RhdGEtdmFyaWFudD0nZmlsbCddLFxuICBhW2RhdGEtdmFyaWFudD0nc2hhZGUnXSB7XG4gICAgY29sdW1uLWdhcDogdmFyKC0td3VpLXNwYWNpbmcteHMpO1xuICAgIHBhZGRpbmc6IHZhcigtLXd1aS1zcGFjaW5nLXh4cykgdmFyKC0td3VpLXNwYWNpbmctbSkgdmFyKC0td3VpLXNwYWNpbmcteHhzKVxuICAgICAgdmFyKC0td3VpLXNwYWNpbmcteHMpO1xuICB9XG5cbiAgYVtkYXRhLXZhcmlhbnQ9J2ZpbGwnXTpoYXMod3VpLXRleHQ6Zmlyc3QtY2hpbGQpLFxuICBhW2RhdGEtdmFyaWFudD0nc2hhZGUnXTpoYXMod3VpLXRleHQ6Zmlyc3QtY2hpbGQpIHtcbiAgICBwYWRkaW5nOiA5cHggdmFyKC0td3VpLXNwYWNpbmctbSkgOXB4IHZhcigtLXd1aS1zcGFjaW5nLW0pO1xuICB9XG5cbiAgYVtkYXRhLXZhcmlhbnQ9J2ZpbGwnXSA+IHd1aS1pbWFnZSxcbiAgYVtkYXRhLXZhcmlhbnQ9J3NoYWRlJ10gPiB3dWktaW1hZ2Uge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxuXG4gIGFbZGF0YS12YXJpYW50PSdmaWxsJ10gPiB3dWktaW1hZ2Uge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS13dWktY29sb3ItYWNjZW50LTA5MCk7XG4gIH1cblxuICBhW2RhdGEtdmFyaWFudD0nc2hhZGUnXSA+IHd1aS1pbWFnZSxcbiAgYVtkYXRhLXZhcmlhbnQ9J3NoYWRlU21hbGwnXSA+IHd1aS1pbWFnZSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAxMCk7XG4gIH1cblxuICBhW2RhdGEtdmFyaWFudD0nZmlsbCddID4gd3VpLWljb246bm90KC5pbWFnZS1pY29uKSxcbiAgYVtkYXRhLXZhcmlhbnQ9J3NoYWRlJ10gPiB3dWktaWNvbjpub3QoLmltYWdlLWljb24pIHtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gIH1cblxuICBhW2RhdGEtdmFyaWFudD0ndHJhbnNwYXJlbnQnXSA+IHd1aS1pbWFnZSxcbiAgYVtkYXRhLXZhcmlhbnQ9J3N1Y2Nlc3MnXSA+IHd1aS1pbWFnZSxcbiAgYVtkYXRhLXZhcmlhbnQ9J3NoYWRlU21hbGwnXSA+IHd1aS1pbWFnZSxcbiAgYVtkYXRhLXZhcmlhbnQ9J2Vycm9yJ10gPiB3dWktaW1hZ2Uge1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgfVxuXG4gIGFbZGF0YS12YXJpYW50PSd0cmFuc3BhcmVudCddID4gd3VpLWljb246bm90KC5pbWFnZS1pY29uKSxcbiAgYVtkYXRhLXZhcmlhbnQ9J3N1Y2Nlc3MnXSA+IHd1aS1pY29uOm5vdCguaW1hZ2UtaWNvbiksXG4gIGFbZGF0YS12YXJpYW50PSdzaGFkZVNtYWxsJ10gPiB3dWktaWNvbjpub3QoLmltYWdlLWljb24pLFxuICBhW2RhdGEtdmFyaWFudD0nZXJyb3InXSA+IHd1aS1pY29uOm5vdCguaW1hZ2UtaWNvbikge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgfVxuXG4gIGFbZGF0YS12YXJpYW50PSdmaWxsJ106Zm9jdXMtdmlzaWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWFjY2VudC0wOTApO1xuICB9XG5cbiAgYVtkYXRhLXZhcmlhbnQ9J3NoYWRlJ106Zm9jdXMtdmlzaWJsZSxcbiAgYVtkYXRhLXZhcmlhbnQ9J3NoYWRlU21hbGwnXTpmb2N1cy12aXNpYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13dWktY29sb3ItZ3JheS1nbGFzcy0wMTUpO1xuICB9XG5cbiAgYVtkYXRhLXZhcmlhbnQ9J3RyYW5zcGFyZW50J106Zm9jdXMtdmlzaWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDA1KTtcbiAgfVxuXG4gIGFbZGF0YS12YXJpYW50PSdzdWNjZXNzJ106Zm9jdXMtdmlzaWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLXN1Y2Nlc3MtZ2xhc3MtMDE1KTtcbiAgfVxuXG4gIGFbZGF0YS12YXJpYW50PSdlcnJvciddOmZvY3VzLXZpc2libGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1lcnJvci1nbGFzcy0wMTUpO1xuICB9XG5cbiAgYS5kaXNhYmxlZCB7XG4gICAgY29sb3I6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAxNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDE1KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBhW2RhdGEtdmFyaWFudD0nZmlsbCddOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1hY2NlbnQtMDkwKTtcbiAgICB9XG5cbiAgICBhW2RhdGEtdmFyaWFudD0nc2hhZGUnXTpob3ZlcixcbiAgICBhW2RhdGEtdmFyaWFudD0nc2hhZGVTbWFsbCddOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAxNSk7XG4gICAgfVxuXG4gICAgYVtkYXRhLXZhcmlhbnQ9J3RyYW5zcGFyZW50J106aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWdyYXktZ2xhc3MtMDA1KTtcbiAgICB9XG5cbiAgICBhW2RhdGEtdmFyaWFudD0nc3VjY2VzcyddOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1zdWNjZXNzLWdsYXNzLTAxNSk7XG4gICAgfVxuXG4gICAgYVtkYXRhLXZhcmlhbnQ9J2Vycm9yJ106aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWVycm9yLWdsYXNzLTAxNSk7XG4gICAgfVxuICB9XG5cbiAgYVtkYXRhLXZhcmlhbnQ9J2ZpbGwnXTphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1hY2NlbnQtMDgwKTtcbiAgfVxuXG4gIGFbZGF0YS12YXJpYW50PSdzaGFkZSddOmFjdGl2ZSxcbiAgYVtkYXRhLXZhcmlhbnQ9J3NoYWRlU21hbGwnXTphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAyMCk7XG4gIH1cblxuICBhW2RhdGEtdmFyaWFudD0ndHJhbnNwYXJlbnQnXTphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXd1aS1jb2xvci1ncmF5LWdsYXNzLTAxMCk7XG4gIH1cblxuICBhW2RhdGEtdmFyaWFudD0nc3VjY2VzcyddOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLXN1Y2Nlc3MtZ2xhc3MtMDIwKTtcbiAgfVxuXG4gIGFbZGF0YS12YXJpYW50PSdlcnJvciddOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3VpLWNvbG9yLWVycm9yLWdsYXNzLTAyMCk7XG4gIH1cbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuanMubWFwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy93dWktaWNvbi9pbmRleC5qcyc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvd3VpLWltYWdlL2luZGV4LmpzJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy93dWktdGV4dC9pbmRleC5qcyc7XG5pbXBvcnQgeyBlbGVtZW50U3R5bGVzLCByZXNldFN0eWxlcyB9IGZyb20gJy4uLy4uL3V0aWxzL1RoZW1lVXRpbC5qcyc7XG5pbXBvcnQgeyBVaUhlbHBlclV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9VaUhlbHBlclV0aWwuanMnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL1dlYkNvbXBvbmVudHNVdGlsLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuanMnO1xubGV0IFd1aUNoaXAgPSBjbGFzcyBXdWlDaGlwIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmFyaWFudCA9ICdmaWxsJztcbiAgICAgICAgdGhpcy5pbWFnZVNyYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pbWFnZUljb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaW1hZ2VJY29uU2l6ZSA9ICdtZCc7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pY29uID0gJ2V4dGVybmFsTGluayc7XG4gICAgICAgIHRoaXMuaHJlZiA9ICcnO1xuICAgICAgICB0aGlzLnRleHQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaXNTbWFsbCA9IHRoaXMudmFyaWFudCA9PT0gJ3N1Y2Nlc3MnIHx8IHRoaXMudmFyaWFudCA9PT0gJ3RyYW5zcGFyZW50JyB8fCB0aGlzLnZhcmlhbnQgPT09ICdzaGFkZVNtYWxsJztcbiAgICAgICAgY29uc3QgdGV4dFZhcmlhbnQgPSBpc1NtYWxsID8gJ3NtYWxsLTYwMCcgOiAncGFyYWdyYXBoLTYwMCc7XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDxhXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBocmVmPSR7dGhpcy5ocmVmfVxuICAgICAgICBjbGFzcz0ke3RoaXMuZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyd9XG4gICAgICAgIGRhdGEtdmFyaWFudD0ke3RoaXMudmFyaWFudH1cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLmltYWdlVGVtcGxhdGUoKX1cbiAgICAgICAgPHd1aS10ZXh0IHZhcmlhbnQ9JHt0ZXh0VmFyaWFudH0gY29sb3I9XCJpbmhlcml0XCI+XG4gICAgICAgICAgJHt0aGlzLnRpdGxlID8gdGhpcy50aXRsZSA6IFVpSGVscGVyVXRpbC5nZXRIb3N0TmFtZSh0aGlzLmhyZWYpfVxuICAgICAgICA8L3d1aS10ZXh0PlxuICAgICAgICA8d3VpLWljb24gbmFtZT0ke3RoaXMuaWNvbn0gY29sb3I9XCJpbmhlcml0XCIgc2l6ZT1cImluaGVyaXRcIj48L3d1aS1pY29uPlxuICAgICAgPC9hPlxuICAgIGA7XG4gICAgfVxuICAgIGltYWdlVGVtcGxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlU3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gaHRtbCBgPHd1aS1pbWFnZSBzcmM9JHt0aGlzLmltYWdlU3JjfT48L3d1aS1pbWFnZT5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmltYWdlSWNvbikge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWwgYDx3dWktaWNvblxuICAgICAgICBuYW1lPSR7dGhpcy5pbWFnZUljb259XG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgIHNpemU9JHt0aGlzLmltYWdlSWNvblNpemV9XG4gICAgICAgIGNsYXNzPVwiaW1hZ2UtaWNvblwiXG4gICAgICA+PC93dWktaWNvbj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5XdWlDaGlwLnN0eWxlcyA9IFtyZXNldFN0eWxlcywgZWxlbWVudFN0eWxlcywgc3R5bGVzXTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUNoaXAucHJvdG90eXBlLCBcInZhcmlhbnRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUNoaXAucHJvdG90eXBlLCBcImltYWdlU3JjXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBXdWlDaGlwLnByb3RvdHlwZSwgXCJpbWFnZUljb25cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUNoaXAucHJvdG90eXBlLCBcImltYWdlSWNvblNpemVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgV3VpQ2hpcC5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUNoaXAucHJvdG90eXBlLCBcImljb25cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUNoaXAucHJvdG90eXBlLCBcImhyZWZcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KClcbl0sIFd1aUNoaXAucHJvdG90eXBlLCBcInRleHRcIiwgdm9pZCAwKTtcbld1aUNoaXAgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21FbGVtZW50KCd3dWktY2hpcCcpXG5dLCBXdWlDaGlwKTtcbmV4cG9ydCB7IFd1aUNoaXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uVXRpbCIsInN0eWxlcyIsImNzcyIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsInIiLCJkIiwiaSIsIld1aUNoaXAiLCJMaXRFbGVtZW50IiwidGV4dFZhcmlhbnQiLCJodG1sIiwiVWlIZWxwZXJVdGlsIiwicmVzZXRTdHlsZXMiLCJlbGVtZW50U3R5bGVzIiwicHJvcGVydHkiLCJjdXN0b21FbGVtZW50Il0sIm1hcHBpbmdzIjoic0pBQVksTUFBQ0EsRUFBaUIsQ0FDMUIsS0FBTSxDQUNGLElBQUssK0JBQ2IsQ0FDQSxFQ0hBQyxFQUFlQztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSxFQ0RmLElBQUlDLEVBQTBDLFNBQVVDLEVBQVlDLEVBQVFDLEVBQUtDLEVBQU0sQ0FDbkYsSUFBSSxFQUFJLFVBQVUsT0FBUUMsRUFBSSxFQUFJLEVBQUlILEVBQVNFLElBQVMsS0FBT0EsRUFBTyxPQUFPLHlCQUF5QkYsRUFBUUMsQ0FBRyxFQUFJQyxFQUFNRSxFQUMzSCxHQUFJLE9BQU8sU0FBWSxVQUFZLE9BQU8sUUFBUSxVQUFhLFdBQVlELEVBQUksUUFBUSxTQUFTSixFQUFZQyxFQUFRQyxFQUFLQyxDQUFJLE1BQ3hILFNBQVNHLEVBQUlOLEVBQVcsT0FBUyxFQUFHTSxHQUFLLEVBQUdBLEtBQVNELEVBQUlMLEVBQVdNLENBQUMsS0FBR0YsR0FBSyxFQUFJLEVBQUlDLEVBQUVELENBQUMsRUFBSSxFQUFJLEVBQUlDLEVBQUVKLEVBQVFDLEVBQUtFLENBQUMsRUFBSUMsRUFBRUosRUFBUUMsQ0FBRyxJQUFNRSxHQUNoSixPQUFPLEVBQUksR0FBS0EsR0FBSyxPQUFPLGVBQWVILEVBQVFDLEVBQUtFLENBQUMsRUFBR0EsQ0FDaEUsRUFVQSxJQUFJRyxFQUFVLGNBQXNCQyxDQUFXLENBQzNDLGFBQWMsQ0FDVixNQUFNLEdBQUcsU0FBUyxFQUNsQixLQUFLLFFBQVUsT0FDZixLQUFLLFNBQVcsT0FDaEIsS0FBSyxVQUFZLE9BQ2pCLEtBQUssY0FBZ0IsS0FDckIsS0FBSyxTQUFXLEdBQ2hCLEtBQUssS0FBTyxlQUNaLEtBQUssS0FBTyxHQUNaLEtBQUssS0FBTyxNQUNwQixDQUNJLFFBQVMsQ0FFTCxNQUFNQyxFQURVLEtBQUssVUFBWSxXQUFhLEtBQUssVUFBWSxlQUFpQixLQUFLLFVBQVksYUFDbkUsWUFBYyxnQkFDNUMsT0FBT0M7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsZUFJQSxLQUFLLElBQUk7QUFBQSxnQkFDUixLQUFLLFNBQVcsV0FBYSxFQUFFO0FBQUEsdUJBQ3hCLEtBQUssT0FBTztBQUFBO0FBQUEsVUFFekIsS0FBSyxjQUFlLENBQUE7QUFBQSw0QkFDRkQsQ0FBVztBQUFBLFlBQzNCLEtBQUssTUFBUSxLQUFLLE1BQVFFLEVBQWEsWUFBWSxLQUFLLElBQUksQ0FBQztBQUFBO0FBQUEseUJBRWhELEtBQUssSUFBSTtBQUFBO0FBQUEsS0FHbEMsQ0FDSSxlQUFnQixDQUNaLE9BQUksS0FBSyxTQUNFRCxtQkFBdUIsS0FBSyxRQUFRLGdCQUUzQyxLQUFLLFVBQ0VBO0FBQUFBLGVBQ0osS0FBSyxTQUFTO0FBQUE7QUFBQSxlQUVkLEtBQUssYUFBYTtBQUFBO0FBQUEsb0JBSWxCLElBQ2YsQ0FDQSxFQUNBSCxFQUFRLE9BQVMsQ0FBQ0ssRUFBYUMsRUFBZWhCLENBQU0sRUFDcERFLEVBQVcsQ0FDUGUsRUFBUSxDQUNaLEVBQUdQLEVBQVEsVUFBVyxVQUFXLE1BQU0sRUFDdkNSLEVBQVcsQ0FDUGUsRUFBUSxDQUNaLEVBQUdQLEVBQVEsVUFBVyxXQUFZLE1BQU0sRUFDeENSLEVBQVcsQ0FDUGUsRUFBUSxDQUNaLEVBQUdQLEVBQVEsVUFBVyxZQUFhLE1BQU0sRUFDekNSLEVBQVcsQ0FDUGUsRUFBUSxDQUNaLEVBQUdQLEVBQVEsVUFBVyxnQkFBaUIsTUFBTSxFQUM3Q1IsRUFBVyxDQUNQZSxFQUFTLENBQUUsS0FBTSxPQUFTLENBQUEsQ0FDOUIsRUFBR1AsRUFBUSxVQUFXLFdBQVksTUFBTSxFQUN4Q1IsRUFBVyxDQUNQZSxFQUFRLENBQ1osRUFBR1AsRUFBUSxVQUFXLE9BQVEsTUFBTSxFQUNwQ1IsRUFBVyxDQUNQZSxFQUFRLENBQ1osRUFBR1AsRUFBUSxVQUFXLE9BQVEsTUFBTSxFQUNwQ1IsRUFBVyxDQUNQZSxFQUFRLENBQ1osRUFBR1AsRUFBUSxVQUFXLE9BQVEsTUFBTSxFQUNwQ0EsRUFBVVIsRUFBVyxDQUNqQmdCLEVBQWMsVUFBVSxDQUM1QixFQUFHUixDQUFPIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyXX0=
