"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const l={title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml \u7f16\u7801\u89e3\u7801",weight:300},a=void 0,i={unversionedId:"reference/model/yaml",id:"version-0.4.6/reference/model/yaml",title:"yaml",description:"yaml \u7f16\u7801\u89e3\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.6/reference/model/yaml.md",sourceDirName:"reference/model",slug:"/reference/model/yaml",permalink:"/zh-CN/docs/0.4.6/reference/model/yaml",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/reference/model/yaml.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1690462472,formattedLastUpdatedAt:"2023\u5e747\u670827\u65e5",frontMatter:{title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml \u7f16\u7801\u89e3\u7801",weight:300},sidebar:"reference",previous:{title:"units",permalink:"/zh-CN/docs/0.4.6/reference/model/units"},next:{title:"\u63d2\u4ef6\u7cfb\u7edf",permalink:"/zh-CN/docs/0.4.6/reference/plugin/"}},c={},p=[{value:"encode",id:"encode",level:2},{value:"decode",id:"decode",level:2},{value:"dump_to_file",id:"dump_to_file",level:2}],d={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"encode"},"encode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"encode(\n    data: any,\n    sort_keys: bool = False,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> str\n")),(0,o.kt)("p",null,"\u5c06 KCL \u5bf9\u8c61 ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," \u5e8f\u5217\u5316\u4e3a YAML \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("h2",{id:"decode"},"decode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"decode(value: str) -> any")),(0,o.kt)("p",null,"\u53cd\u5e8f\u5217\u5316 ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"\uff08\u4e00\u4e2a\u5305\u542b YAML \u683c\u5f0f\u6587\u6863\u7684\u5b57\u7b26\u4e32\u5b9e\u4f8b\uff09\u4e3a\u4e00\u4e2a KCL \u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"dump_to_file"},"dump_to_file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dump_to_file(\n    data: any,\n    filename: str,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> None\n")),(0,o.kt)("p",null,"\u5c06 KCL \u5bf9\u8c61 ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," \u5e8f\u5217\u5316\u4e3a YAML \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u5c06\u5176\u5199\u5165\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"filename")," \u4e2d\u3002"))}u.isMDXComponent=!0}}]);