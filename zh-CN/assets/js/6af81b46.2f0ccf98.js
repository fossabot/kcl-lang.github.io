"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[41425],{3905:(e,n,r)=>{r.d(n,{Zo:()=>i,kt:()=>u});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function m(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),o=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):m(m({},n),e)),r},i=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),k=o(r),f=a,u=k["".concat(p,".").concat(f)]||k[f]||d[f]||c;return r?t.createElement(u,m(m({ref:n},i),{},{components:r})):t.createElement(u,m({ref:n},i))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=r.length,m=new Array(c);m[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[k]="string"==typeof e?e:a,m[1]=l;for(var o=2;o<c;o++)m[o]=r[o];return t.createElement.apply(null,m)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14556:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var t=r(87462),a=(r(67294),r(3905));const c={},m="kpm",l={unversionedId:"reference/package-management/command-reference/index",id:"version-0.5.3/reference/package-management/command-reference/index",title:"kpm",description:"kpm \u547d\u4ee4\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.3/reference/package-management/command-reference/index.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/",permalink:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.3/reference/package-management/command-reference/index.md",tags:[],version:"0.5.3",lastUpdatedBy:"peefy",lastUpdatedAt:1709793003,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"yaml",permalink:"/zh-CN/docs/0.5.3/reference/model/yaml"},next:{title:"kpm init",permalink:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/init"}},p={},o=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"--version, -v",id:"--version--v",level:3},{value:"\u5b50\u547d\u4ee4",id:"\u5b50\u547d\u4ee4",level:2}],i={toc:o},k="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(k,(0,t.Z)({},i,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm"},"kpm"),(0,a.kt)("p",null,"kpm \u547d\u4ee4\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm  <command> [arguments]...\n")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm")," \u662f kcl \u5305\u7ba1\u7406\u5de5\u5177\u3002\u5b83\u7528\u4e8e\u5206\u53d1\u548c\u7ba1\u7406 kcl \u5305\u3002"),(0,a.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"\u5c55\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"--version--v"},"--version, -v"),(0,a.kt)("p",null,"\u5c55\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm")," \u547d\u4ee4\u7684\u7248\u672c\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u5b50\u547d\u4ee4"},"\u5b50\u547d\u4ee4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/init"},"kpm init")," - \u521d\u59cb\u5316\u4e00\u4e2a kcl \u5305"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/add"},"kpm add")," - \u6dfb\u52a0\u4e00\u4e2a\u4f9d\u8d56\u5230 kcl \u5305"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/pkg"},"kpm pkg")," - \u6253\u5305\u4e00\u4e2a kcl \u5305\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"*.tar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/metadata"},"kpm metadata")," - \u6253\u5370\u4e00\u4e2a kcl \u5305\u7684\u5143\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/run"},"kpm run")," - \u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u4e3a yaml \u5e76\u8fd0\u884c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/login"},"kpm login")," - \u767b\u5f55\u5230\u4e00\u4e2a kcl registry"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/logout"},"kpm logout")," - \u767b\u51fa\u4e00\u4e2a kcl registry"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/push"},"kpm push")," - \u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230\u4e00\u4e2a registry"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/pull"},"kpm pull")," - \u4e0b\u8f7d\u4e00\u4e2a kcl \u5305\u4ece\u4e00\u4e2a registry"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.3/reference/package-management/command-reference/help"},"kpm help")," - \u6253\u5370 kpm \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f")))}d.isMDXComponent=!0}}]);