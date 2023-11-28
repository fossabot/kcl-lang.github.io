"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="OpenAPI Tools",p={unversionedId:"tools/cli/openapi/index",id:"version-0.5.2/tools/cli/openapi/index",title:"OpenAPI Tools",description:"kcl-openapi \u5de5\u5177\u652f\u6301\u5c06\u901a\u8fc7 OpenAPI \u89c4\u8303\u63cf\u8ff0\u7684\u6a21\u578b\u8f6c\u6362\u4e3a KCL \u914d\u7f6e\u7b56\u7565\u8bed\u8a00\uff0c\u9664\u4e86\u80fd\u76f4\u63a5\u8f6c\u6362 OpenAPI \u63cf\u8ff0\u6587\u4ef6\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u4ece Kubernetes CRD \u4e2d\u63d0\u53d6\u5e76\u8f6c\u6362\u4e3a KCL schema.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.2/tools/cli/openapi/index.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/",permalink:"/zh-CN/docs/0.5.2/tools/cli/openapi/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/tools/cli/openapi/index.md",tags:[],version:"0.5.2",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"2023\u5e7411\u670828\u65e5",frontMatter:{},sidebar:"tools",previous:{title:"\u6d4b\u8bd5\u5de5\u5177",permalink:"/zh-CN/docs/0.5.2/tools/cli/kcl/test"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/0.5.2/tools/cli/openapi/quick-start"}},c={},l=[],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openapi-tools"},"OpenAPI Tools"),(0,o.kt)("p",null,"kcl-openapi \u5de5\u5177\u652f\u6301\u5c06\u901a\u8fc7 OpenAPI \u89c4\u8303\u63cf\u8ff0\u7684\u6a21\u578b\u8f6c\u6362\u4e3a KCL \u914d\u7f6e\u7b56\u7565\u8bed\u8a00\uff0c\u9664\u4e86\u80fd\u76f4\u63a5\u8f6c\u6362 OpenAPI \u63cf\u8ff0\u6587\u4ef6\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u4ece Kubernetes CRD \u4e2d\u63d0\u53d6\u5e76\u8f6c\u6362\u4e3a KCL schema."))}d.isMDXComponent=!0}}]);