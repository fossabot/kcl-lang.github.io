"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=i(r),u=a,s=d["".concat(p,".").concat(u)]||d[u]||k[u]||c;return r?n.createElement(s,l(l({ref:t},m),{},{components:r})):n.createElement(s,l({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var i=2;i<c;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const c={},l="kpm pkg",o={unversionedId:"reference/package-management/command-reference/pkg",id:"version-0.5.2/reference/package-management/command-reference/pkg",title:"kpm pkg",description:"\u6253\u5305\u4e00\u4e2a kcl \u5305\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.2/reference/package-management/command-reference/3.pkg.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/pkg",permalink:"/zh-CN/docs/0.5.2/reference/package-management/command-reference/pkg",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/reference/package-management/command-reference/3.pkg.md",tags:[],version:"0.5.2",lastUpdatedBy:"peefy",lastUpdatedAt:1701417593,formattedLastUpdatedAt:"2023\u5e7412\u67081\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"reference",previous:{title:"kpm add",permalink:"/zh-CN/docs/0.5.2/reference/package-management/command-reference/add"},next:{title:"kpm metadata",permalink:"/zh-CN/docs/0.5.2/reference/package-management/command-reference/metadata"}},p={},i=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--target",id:"--target",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6253\u5305\u5f53\u524d kcl \u5305\u4e3a <code>*.tar</code>",id:"\u6253\u5305\u5f53\u524d-kcl-\u5305\u4e3a-tar",level:3}],m={toc:i},d="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-pkg"},"kpm pkg"),(0,a.kt)("p",null,"\u6253\u5305\u4e00\u4e2a kcl \u5305\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pkg [options]\n")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm pkg")," \u4f1a\u6253\u5305\u4e00\u4e2a kcl \u5305\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"*.tar"),"\u3002"),(0,a.kt)("p",null,"\u9009\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"--target")," \u7528\u4e8e\u6307\u5b9a\u6253\u5305\u540e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.tar")," \u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("h3",{id:"--target"},"--target"),(0,a.kt)("p",null,"\u6307\u5b9a\u6253\u5305\u540e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.tar")," \u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u6253\u5305\u5f53\u524d-kcl-\u5305\u4e3a-tar"},"\u6253\u5305\u5f53\u524d kcl \u5305\u4e3a ",(0,a.kt)("inlineCode",{parentName:"h3"},"*.tar")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pkg --target /Users/my_package_tar\n")))}k.isMDXComponent=!0}}]);