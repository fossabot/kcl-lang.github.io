"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[13265],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||c;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,l=new Array(c);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<c;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const c={},l="\u547d\u4ee4\u884c\u5de5\u5177",a={unversionedId:"tools/cli/index",id:"tools/cli/index",title:"\u547d\u4ee4\u884c\u5de5\u5177",description:"KCL \u63d0\u4f9b\u4e86 IDE \u63d2\u4ef6\u3001\u4e30\u5bcc\u7684\u8bed\u8a00\u5de5\u5177\u548c OpenAPI \u5de5\u5177\u3002\u901a\u8fc7\u8fd9\u4e9b\u5de5\u5177\uff0c\u53ef\u4ee5\u63d0\u4f9b\u4e00\u6574\u5957\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u62ec\u914d\u7f6e\u8bed\u8a00\u3001\u6a21\u578b\u754c\u9762\u3001\u81ea\u52a8\u5316\u5de5\u5177\u548c\u6700\u4f73\u5b9e\u8df5\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/cli/index.md",sourceDirName:"tools/cli",slug:"/tools/cli/",permalink:"/zh-CN/docs/next/tools/cli/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/index.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1702363140,formattedLastUpdatedAt:"2023\u5e7412\u670812\u65e5",frontMatter:{},sidebar:"tools",next:{title:"KCL \u8bed\u8a00\u5de5\u5177",permalink:"/zh-CN/docs/next/tools/cli/kcl/"}},i={},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,o.kt)("p",null,"KCL \u63d0\u4f9b\u4e86 IDE \u63d2\u4ef6\u3001\u4e30\u5bcc\u7684\u8bed\u8a00\u5de5\u5177\u548c OpenAPI \u5de5\u5177\u3002\u901a\u8fc7\u8fd9\u4e9b\u5de5\u5177\uff0c\u53ef\u4ee5\u63d0\u4f9b\u4e00\u6574\u5957\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u62ec\u914d\u7f6e\u8bed\u8a00\u3001\u6a21\u578b\u754c\u9762\u3001\u81ea\u52a8\u5316\u5de5\u5177\u548c\u6700\u4f73\u5b9e\u8df5\u3002"))}f.isMDXComponent=!0}}]);