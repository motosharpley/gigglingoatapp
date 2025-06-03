System.register(["./index-legacy-CV5l4Qpz.js","./if-defined-legacy-D6M4dwVv.js","./index-legacy-DLy3vKsn.js"],(function(e,t){"use strict";var n,i,r,s,o,c,h,a,d;return{setters:[e=>{n=e.i,i=e.a,r=e.R,s=e.M,o=e.x},e=>{c=e.n,h=e.r,a=e.c},e=>{d=e.T}],execute:function(){e("M",{interpolate(e,t,n){if(2!==e.length||2!==t.length)throw new Error("inputRange and outputRange must be an array of length 2");const i=e[0]||0,r=e[1]||0,s=t[0]||0,o=t[1]||0;return n<i?s:n>r?o:(o-s)/(r-i)*(n-i)+s}});const t=n`
  :host {
    width: 100%;
    display: block;
  }
`;var l=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let u=class extends i{constructor(){super(),this.unsubscribe=[],this.text="",this.open=d.state.open,this.unsubscribe.push(r.subscribeKey("view",(()=>{d.hide()})),s.subscribeKey("open",(e=>{e||d.hide()})),d.subscribeKey("open",(e=>{this.open=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),d.hide()}render(){return o`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return o`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||d.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||d.hide()}};u.styles=[t],l([c()],u.prototype,"text",void 0),l([h()],u.prototype,"open",void 0),u=l([a("w3m-tooltip-trigger")],u)}}}));
