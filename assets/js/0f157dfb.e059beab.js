"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[78549],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=i(a),d=r,g=k["".concat(l,".").concat(d)]||k[d]||s[d]||p;return a?n.createElement(g,c(c({ref:t},m),{},{components:a})):n.createElement(g,c({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,c=new Array(p);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[k]="string"==typeof e?e:r,c[1]=o;for(var i=2;i<p;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const p={},c="kpm pkg",o={unversionedId:"reference/package-management/command-reference/pkg",id:"version-0.5.2/reference/package-management/command-reference/pkg",title:"kpm pkg",description:"Package a kcl package into *.tar.",source:"@site/versioned_docs/version-0.5.2/reference/package-management/command-reference/3.pkg.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/pkg",permalink:"/docs/0.5.2/reference/package-management/command-reference/pkg",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/reference/package-management/command-reference/3.pkg.md",tags:[],version:"0.5.2",lastUpdatedBy:"Peefy",lastUpdatedAt:1708611628,formattedLastUpdatedAt:"Feb 22, 2024",sidebarPosition:3,frontMatter:{},sidebar:"reference",previous:{title:"kpm add",permalink:"/docs/0.5.2/reference/package-management/command-reference/add"},next:{title:"kpm metadata",permalink:"/docs/0.5.2/reference/package-management/command-reference/metadata"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--target",id:"--target",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"Package a kcl package",id:"package-a-kcl-package",level:3}],m={toc:i},k="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kpm-pkg"},"kpm pkg"),(0,r.kt)("p",null,"Package a kcl package into ",(0,r.kt)("inlineCode",{parentName:"p"},"*.tar"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pkg [options]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm pkg")," will package a kcl package into ",(0,r.kt)("inlineCode",{parentName:"p"},"*.tar"),"."),(0,r.kt)("p",null,"Option ",(0,r.kt)("inlineCode",{parentName:"p"},"--target")," is required to specify the tar file path of the package."),(0,r.kt)("h2",{id:"options"},"options"),(0,r.kt)("h3",{id:"--target"},"--target"),(0,r.kt)("p",null,"Specify the tar file path of the package."),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"Show help for ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm pkm")," command."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"package-a-kcl-package"},"Package a kcl package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pkg --target /Users/my_package_tar\n")))}s.isMDXComponent=!0}}]);