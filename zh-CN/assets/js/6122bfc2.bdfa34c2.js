"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=l,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},24169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={title:"regex",linkTitle:"regex",type:"docs",description:"regex \u5305 - \u6b63\u5219\u8868\u8fbe\u5f0f",weight:100},i=void 0,p={unversionedId:"reference/model/regex",id:"reference/model/regex",title:"regex",description:"regex \u5305 - \u6b63\u5219\u8868\u8fbe\u5f0f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/model/regex.md",sourceDirName:"reference/model",slug:"/reference/model/regex",permalink:"/zh-CN/docs/next/reference/model/regex",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/model/regex.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1688815917,formattedLastUpdatedAt:"2023\u5e747\u67088\u65e5",frontMatter:{title:"regex",linkTitle:"regex",type:"docs",description:"regex \u5305 - \u6b63\u5219\u8868\u8fbe\u5f0f",weight:100},sidebar:"reference",previous:{title:"net",permalink:"/zh-CN/docs/next/reference/model/net"},next:{title:"units",permalink:"/zh-CN/docs/next/reference/model/units"}},o={},c=[{value:"replace",id:"replace",level:2},{value:"match",id:"match",level:2},{value:"compile",id:"compile",level:2},{value:"findall",id:"findall",level:2},{value:"search",id:"search",level:2},{value:"split",id:"split",level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"replace"},"replace"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"replace(string: str, pattern: str, replace: str, count=0) -> str")),(0,l.kt)("p",null,"\u66ff\u6362\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u4e2d\u6700\u5de6\u8fb9\u3001\u4e0d\u91cd\u53e0\u5e76\u4e14\u5339\u914d\u6a21\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"pattern")," \u7684\u90e8\u5206\u66ff\u6362\u4e3a\u6307\u5b9a\u7684\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"replace"),"\uff0c\u5e76\u8fd4\u56de\u66ff\u6362\u540e\u7684\u5b57\u7b26\u4e32"),(0,l.kt)("h2",{id:"match"},"match"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"match(string: str, pattern: str) -> bool")),(0,l.kt)("p",null,"\u5c1d\u8bd5\u5728\u5b57\u7b26\u4e32\u5f00\u5934\u5e94\u7528\u6a21\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"pattern"),"\uff0c\u627e\u5230\u4e86\u4efb\u4f55\u5339\u914d\u9879\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"True"),"\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," \u8868\u793a\u6ca1\u6709\u627e\u5230\u5339\u914d\u9879"),(0,l.kt)("h2",{id:"compile"},"compile"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"compile(pattern: str) -> bool")),(0,l.kt)("p",null,"\u7f16\u8bd1\u6b63\u5219\u8868\u8fbe\u5f0f\u6a21\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"pattern"),"\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u8be5\u6a21\u5f0f\u662f\u5426\u6709\u6548"),(0,l.kt)("h2",{id:"findall"},"findall"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"findall(string: str, pattern: str) -> List[str]")),(0,l.kt)("p",null,"\u67e5\u627e ",(0,l.kt)("inlineCode",{parentName:"p"},"pattern")," \u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," \u4e2d\u7684\u6240\u6709\u975e\u91cd\u53e0\u5339\u914d\uff0c\u5e76\u4ee5\u5b57\u7b26\u4e32\u5217\u8868\u7684\u5f62\u5f0f\u8fd4\u56de"),(0,l.kt)("h2",{id:"search"},"search"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"search(string: str, pattern: str) -> bool")),(0,l.kt)("p",null,"\u626b\u63cf\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," \u4ee5\u67e5\u627e\u4e0e\u6a21\u5f0f\u5339\u914d\u7684\u9879\uff0c\u5982\u679c\u627e\u5230\u4efb\u4f55\u5339\u914d\u9879\uff0c\u5219\u8fd4\u56de\u5e03\u5c14\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"True"),"\uff0c\u5426\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"False")),(0,l.kt)("h2",{id:"split"},"split"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"split(string: str, pattern: str, maxsplit=0) -> List[str]")),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u7531\u5b57\u7b26\u4e32\u5185\u5355\u8bcd\u7ec4\u6210\u7684\u5217\u8868\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"pattern")," \u4f5c\u4e3a\u5206\u9694\u5b57\u7b26\u4e32\uff0c\u6700\u591a\u8fdb\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"maxsplit")," \u6b21\u62c6\u5206"))}d.isMDXComponent=!0}}]);