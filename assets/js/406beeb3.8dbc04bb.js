"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67617],{3905:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>f});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):m(m({},n),e)),a},i=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=p(a),s=r,f=d["".concat(l,".").concat(s)]||d[s]||k[s]||c;return a?t.createElement(f,m(m({ref:n},i),{},{components:a})):t.createElement(f,m({ref:n},i))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=a.length,m=new Array(c);m[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:r,m[1]=o;for(var p=2;p<c;p++)m[p]=a[p];return t.createElement.apply(null,m)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},44894:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>m,default:()=>k,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const c={},m="kpm",o={unversionedId:"reference/package-management/command-reference/index",id:"reference/package-management/command-reference/index",title:"kpm",description:"The kpm cli",source:"@site/docs/reference/package-management/command-reference/index.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/",permalink:"/docs/next/reference/package-management/command-reference/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/package-management/command-reference/index.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1690274001,formattedLastUpdatedAt:"Jul 25, 2023",frontMatter:{},sidebar:"reference",previous:{title:"yaml",permalink:"/docs/next/reference/model/yaml"},next:{title:"kpm init",permalink:"/docs/next/reference/package-management/command-reference/init"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"--version, -v",id:"--version--v",level:3},{value:"Subcommands",id:"subcommands",level:2}],i={toc:p},d="wrapper";function k(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kpm"},"kpm"),(0,r.kt)("p",null,"The kpm cli"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm  <command> [arguments]...\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," is a kcl package manager. It is used to install, remove, and update kcl packages."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"Show help for kpm command"),(0,r.kt)("h3",{id:"--version--v"},"--version, -v"),(0,r.kt)("p",null,"Print the version of kpm"),(0,r.kt)("h2",{id:"subcommands"},"Subcommands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/package-management/command-reference/init"},"kpm init")," - Init a kcl package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/package-management/command-reference/add"},"kpm add")," - Add a dependency to a kcl package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/package-management/command-reference/pkg"},"kpm pkg")," - Package a kcl package into `*.tar``"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/package-management/command-reference/metadata"},"kpm metadata")," - Print the metadata of a kcl package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/package-management/command-reference/run"},"kpm run")," - Compile a kcl package into yaml"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/package-management/command-reference/login"},"kpm login")," - Login to a kcl registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/package-management/command-reference/logout"},"kpm logout")," - Logout from a kcl registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/package-management/command-reference/push"},"kpm push")," - Push a kcl package to a registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/package-management/command-reference/pull"},"kpm pull")," - Pull a kcl package from a registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/package-management/command-reference/help"},"kpm help")," - print help for kpm command")))}k.isMDXComponent=!0}}]);