"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"base64",linkTitle:"base64",type:"docs",description:"base64 \u7f16\u7801\u89e3\u7801",weight:100},c=void 0,i={unversionedId:"reference/model/base64",id:"reference/model/base64",title:"base64",description:"base64 \u7f16\u7801\u89e3\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/model/base64.md",sourceDirName:"reference/model",slug:"/reference/model/base64",permalink:"/zh-CN/docs/next/reference/model/base64",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/model/base64.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1688815917,formattedLastUpdatedAt:"2023\u5e747\u67088\u65e5",frontMatter:{title:"base64",linkTitle:"base64",type:"docs",description:"base64 \u7f16\u7801\u89e3\u7801",weight:100},sidebar:"reference",previous:{title:"builtin",permalink:"/zh-CN/docs/next/reference/model/builtin"},next:{title:"crypto",permalink:"/zh-CN/docs/next/reference/model/crypto"}},l={},p=[{value:"encode",id:"encode",level:2},{value:"decode",id:"decode",level:2}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"encode"},"encode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'encode(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7684\u7f16\u7801\u5668\u5bf9\u5b57\u7b26\u4e32 ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u7f16\u7801\u3002"),(0,o.kt)("h2",{id:"decode"},"decode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'decode(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7684\u7f16\u7801\u5668\u5bf9\u5b57\u7b26\u4e32 ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u89e3\u7801\u3002"))}d.isMDXComponent=!0}}]);