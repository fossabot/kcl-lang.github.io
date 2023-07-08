"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),s=o,f=u["".concat(c,".").concat(s)]||u[s]||m[s]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml \u7f16\u7801\u89e3\u7801",weight:300},l=void 0,i={unversionedId:"reference/model/yaml",id:"reference/model/yaml",title:"yaml",description:"yaml \u7f16\u7801\u89e3\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/model/yaml.md",sourceDirName:"reference/model",slug:"/reference/model/yaml",permalink:"/zh-CN/docs/next/reference/model/yaml",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/model/yaml.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1688815917,formattedLastUpdatedAt:"2023\u5e747\u67088\u65e5",frontMatter:{title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml \u7f16\u7801\u89e3\u7801",weight:300},sidebar:"reference",previous:{title:"units",permalink:"/zh-CN/docs/next/reference/model/units"},next:{title:"kpm",permalink:"/zh-CN/docs/next/reference/package-management/command-reference/"}},c={},p=[{value:"encode",id:"encode",level:2},{value:"decode",id:"decode",level:2},{value:"dump_to_file",id:"dump_to_file",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"encode"},"encode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"encode(\n    data: any,\n    sort_keys: bool = False,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> str\n")),(0,o.kt)("p",null,"\u5c06 KCL \u5bf9\u8c61 ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," \u5e8f\u5217\u5316\u4e3a YAML \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("h2",{id:"decode"},"decode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"decode(value: str) -> any")),(0,o.kt)("p",null,"\u53cd\u5e8f\u5217\u5316 ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"\uff08\u4e00\u4e2a\u5305\u542b YAML \u683c\u5f0f\u6587\u6863\u7684\u5b57\u7b26\u4e32\u5b9e\u4f8b\uff09\u4e3a\u4e00\u4e2a KCL \u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"dump_to_file"},"dump_to_file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dump_to_file(\n    data: any,\n    filename: str,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> None\n")),(0,o.kt)("p",null,"\u5c06 KCL \u5bf9\u8c61 ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," \u5e8f\u5217\u5316\u4e3a YAML \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u5c06\u5176\u5199\u5165\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"filename")," \u4e2d\u3002"))}m.isMDXComponent=!0}}]);