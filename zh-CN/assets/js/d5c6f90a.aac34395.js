"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[93506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=i(n),k=a,u=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?r.createElement(u,o(o({ref:t},m),{},{components:n})):r.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},12966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={},o="kpm pkg",c={unversionedId:"tools/cli/package-management/command-reference/pkg",id:"version-0.6.0/tools/cli/package-management/command-reference/pkg",title:"kpm pkg",description:"\u6253\u5305\u4e00\u4e2a kcl \u5305\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.6.0/tools/cli/package-management/command-reference/3.pkg.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/pkg",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/pkg",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/tools/cli/package-management/command-reference/3.pkg.md",tags:[],version:"0.6.0",lastUpdatedBy:"peefy",lastUpdatedAt:1702363140,formattedLastUpdatedAt:"2023\u5e7412\u670812\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"tools",previous:{title:"kpm add",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/add"},next:{title:"kpm metadata",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/metadata"}},p={},i=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--target",id:"--target",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6253\u5305\u5f53\u524d kcl \u5305\u4e3a <code>*.tar</code>",id:"\u6253\u5305\u5f53\u524d-kcl-\u5305\u4e3a-tar",level:3}],m={toc:i},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-pkg"},"kpm pkg"),(0,a.kt)("p",null,"\u6253\u5305\u4e00\u4e2a kcl \u5305\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pkg [options]\n")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm pkg")," \u4f1a\u6253\u5305\u4e00\u4e2a kcl \u5305\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"*.tar"),"\u3002"),(0,a.kt)("p",null,"\u9009\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"--target")," \u7528\u4e8e\u6307\u5b9a\u6253\u5305\u540e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.tar")," \u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("h3",{id:"--target"},"--target"),(0,a.kt)("p",null,"\u6307\u5b9a\u6253\u5305\u540e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.tar")," \u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u6253\u5305\u5f53\u524d-kcl-\u5305\u4e3a-tar"},"\u6253\u5305\u5f53\u524d kcl \u5305\u4e3a ",(0,a.kt)("inlineCode",{parentName:"h3"},"*.tar")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pkg --target /Users/my_package_tar\n")))}s.isMDXComponent=!0}}]);