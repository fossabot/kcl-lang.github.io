"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[89984],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),o=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=o(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=o(t),k=a,d=s["".concat(i,".").concat(k)]||s[k]||u[k]||p;return t?n.createElement(d,l(l({ref:r},m),{},{components:t})):n.createElement(d,l({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,l=new Array(p);l[0]=k;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var o=2;o<p;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},48918:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>o});var n=t(87462),a=(t(67294),t(3905));const p={},l="kpm push",c={unversionedId:"reference/package-management/command-reference/push",id:"version-0.5.5/reference/package-management/command-reference/push",title:"kpm push",description:"\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kpm registry\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.5/reference/package-management/command-reference/8.push.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/push",permalink:"/zh-CN/docs/0.5.5/reference/package-management/command-reference/push",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.5/reference/package-management/command-reference/8.push.md",tags:[],version:"0.5.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1701933583,formattedLastUpdatedAt:"2023\u5e7412\u67087\u65e5",sidebarPosition:8,frontMatter:{},sidebar:"reference",previous:{title:"kpm logout",permalink:"/zh-CN/docs/0.5.5/reference/package-management/command-reference/logout"},next:{title:"kpm pull",permalink:"/zh-CN/docs/0.5.5/reference/package-management/command-reference/pull"}},i={},o=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--tar_path",id:"--tar_path",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4e0a\u4f20\u5f53\u524d kcl \u5305\u5230 kpm registry",id:"\u4e0a\u4f20\u5f53\u524d-kcl-\u5305\u5230-kpm-registry",level:3},{value:"\u4e0a\u4f20\u4e00\u4e2a <code>*.tar</code> \u6587\u4ef6\u5230 kpm registry",id:"\u4e0a\u4f20\u4e00\u4e2a-tar-\u6587\u4ef6\u5230-kpm-registry",level:3}],m={toc:o},s="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-push"},"kpm push"),(0,a.kt)("p",null,"\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kpm registry\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push [options][kpm_registry]\n")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," \u5c06\u4f1a\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kpm registry\u3002"),(0,a.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("h3",{id:"--tar_path"},"--tar_path"),(0,a.kt)("p",null,"\u6307\u5b9a\u4e0a\u4f20\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.tar")," \u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"\u5c55\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u4e0a\u4f20\u5f53\u524d-kcl-\u5305\u5230-kpm-registry"},"\u4e0a\u4f20\u5f53\u524d kcl \u5305\u5230 kpm registry"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 kcl \u5305\u7684\u6839\u76ee\u5f55\u4e0b\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," \u547d\u4ee4\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kpm registry\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u4e00\u4e2a kcl \u5305\n$ kpm init <package_name>\n# \u8fdb\u5165 kcl \u5305\u76ee\u5f55\n$ cd <package_name>\n# \u4e0a\u4f20 kcl \u5305\u5230 kpm registry\n$ kpm push <oci_url>\n")),(0,a.kt)("h3",{id:"\u4e0a\u4f20\u4e00\u4e2a-tar-\u6587\u4ef6\u5230-kpm-registry"},"\u4e0a\u4f20\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"h3"},"*.tar")," \u6587\u4ef6\u5230 kpm registry"),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," \u547d\u4ee4\u4e0a\u4f20\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"*.tar")," \u6587\u4ef6\u5230 kpm registry\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push --tar_path <tar_path> <oci_url>\n")))}u.isMDXComponent=!0}}]);