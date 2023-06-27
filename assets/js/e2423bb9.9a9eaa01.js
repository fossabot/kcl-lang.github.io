"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=o,f=s["".concat(d,".").concat(u)]||s[u]||m[u]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},68440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime system module",weight:100},a=void 0,l={unversionedId:"reference/model/datetime",id:"version-0.4.6/reference/model/datetime",title:"datetime",description:"datetime system module",source:"@site/versioned_docs/version-0.4.6/reference/model/datetime.md",sourceDirName:"reference/model",slug:"/reference/model/datetime",permalink:"/docs/0.4.6/reference/model/datetime",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/reference/model/datetime.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1687874331,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime system module",weight:100},sidebar:"reference",previous:{title:"crypto",permalink:"/docs/0.4.6/reference/model/crypto"},next:{title:"json",permalink:"/docs/0.4.6/reference/model/json"}},d={},c=[{value:"time",id:"time",level:2},{value:"date",id:"date",level:2},{value:"now",id:"now",level:2},{value:"today",id:"today",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"time"},"time"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ticks() -> float")),(0,o.kt)("p",null,"Return the current time in seconds since the Epoch. Fractions of a second may be present if the system clock provides them."),(0,o.kt)("h2",{id:"date"},"date"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"date() -> str")),(0,o.kt)("p",null,"Return the ",(0,o.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S")," format date."),(0,o.kt)("h2",{id:"now"},"now"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"now() -> str")),(0,o.kt)("p",null,"Return the local time. e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"'Sat Jun 06 16:26:11 1998'")),(0,o.kt)("h2",{id:"today"},"today"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"today() -> str")),(0,o.kt)("p",null,"Return the ",(0,o.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S.%{ticks}")," format date."))}m.isMDXComponent=!0}}]);