"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[67638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(n),f=o,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"json",linkTitle:"json",type:"docs",description:"JSON \u7f16\u7801\u89e3\u7801",weight:100},l=void 0,i={unversionedId:"reference/model/json",id:"reference/model/json",title:"json",description:"JSON \u7f16\u7801\u89e3\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/model/json.md",sourceDirName:"reference/model",slug:"/reference/model/json",permalink:"/zh-CN/docs/next/reference/model/json",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/model/json.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1709793003,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",frontMatter:{title:"json",linkTitle:"json",type:"docs",description:"JSON \u7f16\u7801\u89e3\u7801",weight:100},sidebar:"reference",previous:{title:"file",permalink:"/zh-CN/docs/next/reference/model/file"},next:{title:"manifests",permalink:"/zh-CN/docs/next/reference/model/manifests"}},c={},d=[{value:"encode",id:"encode",level:2},{value:"decode",id:"decode",level:2},{value:"dump_to_file",id:"dump_to_file",level:2},{value:"validate",id:"validate",level:2}],p={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"encode"},"encode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"encode(\n    data: any,\n    sort_keys: bool = False,\n    indent: int = None,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> str\n")),(0,o.kt)("p",null,"\u5c06 KCL \u5bf9\u8c61 ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," \u5e8f\u5217\u5316\u4e3a JSON \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("h2",{id:"decode"},"decode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"decode(value: str) -> any")),(0,o.kt)("p",null,"\u53cd\u5e8f\u5217\u5316 ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"\uff08\u4e00\u4e2a\u5305\u542b JSON \u683c\u5f0f\u6587\u6863\u7684\u5b57\u7b26\u4e32\u5b9e\u4f8b\uff09\u4e3a\u4e00\u4e2a KCL \u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"dump_to_file"},"dump_to_file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"dump_to_file(\n    data: any,\n    filename: str,\n    sort_keys: bool = False,\n    indent: int = None,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> None\n")),(0,o.kt)("p",null,"\u5c06 KCL \u5bf9\u8c61 ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," \u5e8f\u5217\u5316\u4e3a JSON \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u5c06\u5176\u5199\u5165\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"filename")," \u4e2d\u3002"),(0,o.kt)("h2",{id:"validate"},"validate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"validate(value: str) -> bool\n")),(0,o.kt)("p",null,"\u9a8c\u8bc1\u7ed9\u5b9a\u7684\u5b57\u7b26\u4e32\u662f\u5426\u662f\u4e00\u4e2a\u5408\u6cd5\u7684 JSON \u5b57\u7b26\u4e32\u3002"))}u.isMDXComponent=!0}}]);