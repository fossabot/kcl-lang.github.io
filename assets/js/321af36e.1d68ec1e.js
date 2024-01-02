"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[43889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=i(a),k=r,g=s["".concat(p,".").concat(k)]||s[k]||d[k]||o;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},97207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={},l="kcl mod pkg",c={unversionedId:"tools/cli/package-management/command-reference/pkg",id:"tools/cli/package-management/command-reference/pkg",title:"kcl mod pkg",description:"Package a kcl package into *.tar.",source:"@site/docs/tools/cli/package-management/command-reference/3.pkg.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/pkg",permalink:"/docs/next/tools/cli/package-management/command-reference/pkg",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/package-management/command-reference/3.pkg.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1704165384,formattedLastUpdatedAt:"Jan 2, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tools",previous:{title:"kcl mod add",permalink:"/docs/next/tools/cli/package-management/command-reference/add"},next:{title:"kcl mod metadata",permalink:"/docs/next/tools/cli/package-management/command-reference/metadata"}},p={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--target",id:"--target",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"Package a kcl package",id:"package-a-kcl-package",level:3}],m={toc:i},s="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl-mod-pkg"},"kcl mod pkg"),(0,r.kt)("p",null,"Package a kcl package into ",(0,r.kt)("inlineCode",{parentName:"p"},"*.tar"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod pkg [options]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod pkg")," will package a kcl package into ",(0,r.kt)("inlineCode",{parentName:"p"},"*.tar"),"."),(0,r.kt)("p",null,"Option ",(0,r.kt)("inlineCode",{parentName:"p"},"--target")," is required to specify the tar file path of the package."),(0,r.kt)("h2",{id:"options"},"options"),(0,r.kt)("h3",{id:"--target"},"--target"),(0,r.kt)("p",null,"Specify the tar file path of the package."),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"Show help for ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod pkm")," command."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"package-a-kcl-package"},"Package a kcl package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod pkg --target /Users/my_package_tar\n")))}d.isMDXComponent=!0}}]);