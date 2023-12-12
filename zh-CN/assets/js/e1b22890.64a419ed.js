"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[50608],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(t),f=o,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||l;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},91427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const l={title:"json",linkTitle:"json",type:"docs",description:"JSON \u7f16\u7801\u89e3\u7801",weight:100},a=void 0,i={unversionedId:"reference/model/json",id:"version-0.5.6/reference/model/json",title:"json",description:"JSON \u7f16\u7801\u89e3\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.6/reference/model/json.md",sourceDirName:"reference/model",slug:"/reference/model/json",permalink:"/zh-CN/docs/0.5.6/reference/model/json",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.6/reference/model/json.md",tags:[],version:"0.5.6",lastUpdatedBy:"peefy",lastUpdatedAt:1702363140,formattedLastUpdatedAt:"2023\u5e7412\u670812\u65e5",frontMatter:{title:"json",linkTitle:"json",type:"docs",description:"JSON \u7f16\u7801\u89e3\u7801",weight:100},sidebar:"reference",previous:{title:"datetime",permalink:"/zh-CN/docs/0.5.6/reference/model/datetime"},next:{title:"manifests",permalink:"/zh-CN/docs/0.5.6/reference/model/manifests"}},c={},d=[{value:"encode",id:"encode",level:2},{value:"decode",id:"decode",level:2},{value:"dump_to_file",id:"dump_to_file",level:2}],p={toc:d},s="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"encode"},"encode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"encode(\n    data: any,\n    sort_keys: bool = False,\n    indent: int = None,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> str\n")),(0,o.kt)("p",null,"\u5c06 KCL \u5bf9\u8c61 ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," \u5e8f\u5217\u5316\u4e3a JSON \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("h2",{id:"decode"},"decode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"decode(value: str) -> any")),(0,o.kt)("p",null,"\u53cd\u5e8f\u5217\u5316 ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"\uff08\u4e00\u4e2a\u5305\u542b JSON \u683c\u5f0f\u6587\u6863\u7684\u5b57\u7b26\u4e32\u5b9e\u4f8b\uff09\u4e3a\u4e00\u4e2a KCL \u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"dump_to_file"},"dump_to_file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dump_to_file(\n    data: any,\n    filename: str,\n    sort_keys: bool = False,\n    indent: int = None,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> None\n")),(0,o.kt)("p",null,"\u5c06 KCL \u5bf9\u8c61 ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," \u5e8f\u5217\u5316\u4e3a JSON \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u5c06\u5176\u5199\u5165\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"filename")," \u4e2d\u3002"))}u.isMDXComponent=!0}}]);