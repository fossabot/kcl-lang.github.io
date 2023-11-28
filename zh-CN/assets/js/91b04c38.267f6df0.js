"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto \u5305 - \u63d0\u4f9b SHA \u76f8\u5173\u7684\u54c8\u5e0c\u51fd\u6570",weight:100},o=void 0,i={unversionedId:"reference/model/crypto",id:"version-0.5.4/reference/model/crypto",title:"crypto",description:"crypto \u5305 - \u63d0\u4f9b SHA \u76f8\u5173\u7684\u54c8\u5e0c\u51fd\u6570",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.4/reference/model/crypto.md",sourceDirName:"reference/model",slug:"/reference/model/crypto",permalink:"/zh-CN/docs/0.5.4/reference/model/crypto",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.4/reference/model/crypto.md",tags:[],version:"0.5.4",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"2023\u5e7411\u670828\u65e5",frontMatter:{title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto \u5305 - \u63d0\u4f9b SHA \u76f8\u5173\u7684\u54c8\u5e0c\u51fd\u6570",weight:100},sidebar:"reference",previous:{title:"base64",permalink:"/zh-CN/docs/0.5.4/reference/model/base64"},next:{title:"datetime",permalink:"/zh-CN/docs/0.5.4/reference/model/datetime"}},p={},c=[{value:"md5",id:"md5",level:2},{value:"sha1",id:"sha1",level:2},{value:"sha224",id:"sha224",level:2},{value:"sha256",id:"sha256",level:2},{value:"sha384",id:"sha384",level:2},{value:"sha512",id:"sha512",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"md5"},"md5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'md5(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"MD5")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"),(0,a.kt)("h2",{id:"sha1"},"sha1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha1(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA1")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"),(0,a.kt)("h2",{id:"sha224"},"sha224"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha224(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA224")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"),(0,a.kt)("h2",{id:"sha256"},"sha256"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha256(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA256")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"),(0,a.kt)("h2",{id:"sha384"},"sha384"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha384(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA384")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"),(0,a.kt)("h2",{id:"sha512"},"sha512"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha512(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA512")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"))}u.isMDXComponent=!0}}]);