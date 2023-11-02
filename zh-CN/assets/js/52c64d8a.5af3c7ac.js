"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,s=m["".concat(i,".").concat(d)]||m[d]||k[d]||a;return n?r.createElement(s,c(c({ref:t},u),{},{components:n})):r.createElement(s,c({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:l,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={},c="kpm run",o={unversionedId:"tools/cli/package-management/command-reference/run",id:"version-0.7.0/tools/cli/package-management/command-reference/run",title:"kpm run",description:"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7.0/tools/cli/package-management/command-reference/5.run.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/run",permalink:"/zh-CN/docs/tools/cli/package-management/command-reference/run",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/tools/cli/package-management/command-reference/5.run.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1698928861,formattedLastUpdatedAt:"2023\u5e7411\u67082\u65e5",sidebarPosition:5,frontMatter:{},sidebar:"tools",previous:{title:"kpm metadata",permalink:"/zh-CN/docs/tools/cli/package-management/command-reference/metadata"},next:{title:"kpm login",permalink:"/zh-CN/docs/tools/cli/package-management/command-reference/login"}},i={},p=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--input",id:"--input",level:3},{value:"--tag",id:"--tag",level:3},{value:"--vendor",id:"--vendor",level:3},{value:"--kcl_args",id:"--kcl_args",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u7f16\u8bd1\u5f53\u524d kcl \u5305",id:"\u7f16\u8bd1\u5f53\u524d-kcl-\u5305",level:3},{value:"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305 tar \u6587\u4ef6",id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305-tar-\u6587\u4ef6",level:3},{value:"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u6765\u81ea oci url",id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305\u6765\u81ea-oci-url",level:3},{value:"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u6765\u81ea oci ref",id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305\u6765\u81ea-oci-ref",level:3}],u={toc:p},m="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kpm-run"},"kpm run"),(0,l.kt)("p",null,"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run [options][package_source]\n")),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kpm run")," \u4f1a\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u3002"),(0,l.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.kt)("h3",{id:"--input"},"--input"),(0,l.kt)("p",null,"\u6307\u5b9a\u5305\u7684\u5165\u53e3\u6587\u4ef6\u8def\u5f84\u3002"),(0,l.kt)("h3",{id:"--tag"},"--tag"),(0,l.kt)("p",null,"\u6307\u5b9a oci url \u7684\u5305\u7684 tag\u3002"),(0,l.kt)("h3",{id:"--vendor"},"--vendor"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--vendor")," \u9009\u9879\u4f1a\u5c06\u4f9d\u8d56\u5305\u79fb\u52a8\u5230\u5f53\u524d\u5305\uff0c\u5e76\u81ea\u52a8\u4e0b\u8f7d\u7f3a\u5931\u7684\u4f9d\u8d56\u5305\u3002"),(0,l.kt)("h3",{id:"--kcl_args"},"--kcl_args"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--kcl_args")," \u63cf\u8ff0\u4e86\u4f20\u9012\u7ed9 kcl \u7f16\u8bd1\u5668\u7684\u53c2\u6570\u3002"),(0,l.kt)("h3",{id:"--help--h"},"--help, -h"),(0,l.kt)("p",null,"\u5c55\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"kpm run")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u7f16\u8bd1\u5f53\u524d-kcl-\u5305"},"\u7f16\u8bd1\u5f53\u524d kcl \u5305"),(0,l.kt)("p",null,"\u5728 kcl \u5305\u76ee\u5f55\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"kpm run")," \u53ef\u4ee5\u7528\u4e8e\u7f16\u8bd1\u5f53\u524d kcl \u5305\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run\n")),(0,l.kt)("h3",{id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305-tar-\u6587\u4ef6"},"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305 tar \u6587\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kpm run")," \u53ef\u4ee5\u7528\u4e8e\u7f16\u8bd1\u4e00\u4e2a kcl \u5305 tar \u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run /Users/demo/my_package.tar\n")),(0,l.kt)("h3",{id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305\u6765\u81ea-oci-url"},"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u6765\u81ea oci url"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kpm run")," \u53ef\u4ee5\u7528\u4e8e\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u4ece oci url\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run --tag 0.0.1 oci://localhost:5001/test/my_package\n")),(0,l.kt)("h3",{id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305\u6765\u81ea-oci-ref"},"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u6765\u81ea oci ref"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kpm run")," \u53ef\u4ee5\u7528\u4e8e\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u4ece oci ref\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run test/my_package:0.0.1\n")))}k.isMDXComponent=!0}}]);