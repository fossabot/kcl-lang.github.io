"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[7170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime \u5305 - \u65f6\u95f4\u5904\u7406",weight:100},o=void 0,l={unversionedId:"reference/model/datetime",id:"version-0.4.3/reference/model/datetime",title:"datetime",description:"datetime \u5305 - \u65f6\u95f4\u5904\u7406",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.3/reference/model/datetime.md",sourceDirName:"reference/model",slug:"/reference/model/datetime",permalink:"/zh-CN/docs/0.4.3/reference/model/datetime",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/reference/model/datetime.md",tags:[],version:"0.4.3",lastUpdatedBy:"peefy",lastUpdatedAt:1704165384,formattedLastUpdatedAt:"2024\u5e741\u67082\u65e5",frontMatter:{title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime \u5305 - \u65f6\u95f4\u5904\u7406",weight:100},sidebar:"reference",previous:{title:"crypto",permalink:"/zh-CN/docs/0.4.3/reference/model/crypto"},next:{title:"json",permalink:"/zh-CN/docs/0.4.3/reference/model/json"}},c={},d=[{value:"time",id:"time",level:2},{value:"date",id:"date",level:2},{value:"now",id:"now",level:2},{value:"today",id:"today",level:2}],p={toc:d},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"datetime",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ticks() -> float\nReturn the current time in seconds since the Epoch. Fractions of a second may be present if the system clock provides them."),(0,a.kt)("li",{parentName:"ul"},"date() -> str\nReturn the ",(0,a.kt)("inlineCode",{parentName:"li"},"%Y-%m-%d %H:%M:%S")," format date."),(0,a.kt)("li",{parentName:"ul"},"now() -> str\nReturn the local time. e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"'Sat Jun 06 16:26:11 1998'")),(0,a.kt)("li",{parentName:"ul"},"today() -> str\nReturn the ",(0,a.kt)("inlineCode",{parentName:"li"},"%Y-%m-%d %H:%M:%S.%{ticks}")," format date.")))),(0,a.kt)("h2",{id:"time"},"time"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ticks() -> float")),(0,a.kt)("p",null,"Return the current time in seconds since the Epoch. Fractions of a second may be present if the system clock provides them."),(0,a.kt)("h2",{id:"date"},"date"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"date() -> str")),(0,a.kt)("p",null,"Return the ",(0,a.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S")," format date."),(0,a.kt)("h2",{id:"now"},"now"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"now() -> str")),(0,a.kt)("p",null,"Return the local time. e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"'Sat Jun 06 16:26:11 1998'")),(0,a.kt)("h2",{id:"today"},"today"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"today() -> str")),(0,a.kt)("p",null,"Return the ",(0,a.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S.%{ticks}")," format date."))}s.isMDXComponent=!0}}]);