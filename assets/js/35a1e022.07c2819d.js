"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=i(a),u=r,k=d["".concat(l,".").concat(u)]||d[u]||s[u]||c;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<c;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14337:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>p,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const c={},o="kpm metadata",p={unversionedId:"reference/package-management/command-reference/metadata",id:"reference/package-management/command-reference/metadata",title:"kpm metadata",description:"Print the metadata of a kcl package.",source:"@site/docs/reference/package-management/command-reference/4.metadata.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/metadata",permalink:"/docs/next/reference/package-management/command-reference/metadata",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/package-management/command-reference/4.metadata.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1690462472,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:4,frontMatter:{},sidebar:"reference",previous:{title:"kpm pkg",permalink:"/docs/next/reference/package-management/command-reference/pkg"},next:{title:"kpm run",permalink:"/docs/next/reference/package-management/command-reference/run"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--update",id:"--update",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"Print the metadata of a kcl package",id:"print-the-metadata-of-a-kcl-package",level:3}],m={toc:i},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kpm-metadata"},"kpm metadata"),(0,r.kt)("p",null,"Print the metadata of a kcl package."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm metadata [options]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm metadata")," will print the metadata of a kcl package. The metadata includes the dependency information of the package."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--update")," option is used to automatically download the missing dependency packages."),(0,r.kt)("h2",{id:"options"},"options"),(0,r.kt)("h3",{id:"--update"},"--update"),(0,r.kt)("p",null,"Automatically download the missing dependency packages."),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"Show help for ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm metadata")," command."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"print-the-metadata-of-a-kcl-package"},"Print the metadata of a kcl package"),(0,r.kt)("p",null,"Print the metadata of a kcl package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm metadata\n")),(0,r.kt)("p",null,"Print the metadata of a kcl package and automatically download the missing dependency packages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm metadata --update\n")))}s.isMDXComponent=!0}}]);