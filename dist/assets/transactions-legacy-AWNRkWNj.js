System.register(["./index-legacy-l_Zrv-hC.js","./if-defined-legacy-CtbYZVez.js","./index-legacy-D3CGFl3Z.js","./index-legacy-2Pe44fr3.js","./index-legacy-BRJBVyH1.js","./index-legacy-7oYBEIjM.js","./index-legacy-CR17gdOy.js","./index-legacy-aclEvsjH.js"],(function(e,t){"use strict";var i,l,n,c;return{setters:[e=>{i=e.i,l=e.a,n=e.x},e=>{c=e.c},null,null,null,null,null,null],execute:function(){const t=i`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var s=function(e,t,i,l){var n,c=arguments.length,s=c<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,i):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,l);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(s=(c<3?n(s):c>3?n(t,i,s):n(t,i))||s);return c>3&&s&&Object.defineProperty(t,i,s),s};let r=e("W3mTransactionsView",class extends l{render(){return n`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}});r.styles=t,e("W3mTransactionsView",r=s([c("w3m-transactions-view")],r))}}}));
