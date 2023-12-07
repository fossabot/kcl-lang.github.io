"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[88028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||c;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<c;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const c={title:"base64",linkTitle:"base64",type:"docs",description:"base64 system module - base64 encode and decode function",weight:100},a=void 0,i={unversionedId:"reference/model/base64",id:"reference/model/base64",title:"base64",description:"base64 system module - base64 encode and decode function",source:"@site/docs/reference/model/base64.md",sourceDirName:"reference/model",slug:"/reference/model/base64",permalink:"/docs/next/reference/model/base64",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/model/base64.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1701933583,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{title:"base64",linkTitle:"base64",type:"docs",description:"base64 system module - base64 encode and decode function",weight:100},sidebar:"reference",previous:{title:"builtin",permalink:"/docs/next/reference/model/builtin"},next:{title:"crypto",permalink:"/docs/next/reference/model/crypto"}},l={},d=[{value:"encode",id:"encode",level:2},{value:"decode",id:"decode",level:2}],s={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"encode"},"encode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'encode(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Encode the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using the codec registered for encoding."),(0,o.kt)("h2",{id:"decode"},"decode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'decode(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Decode the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using the codec registered for encoding."))}u.isMDXComponent=!0}}]);