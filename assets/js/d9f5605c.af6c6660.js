"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[32389],{3905:(e,a,n)=>{n.d(a,{Zo:()=>i,kt:()=>f});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),p=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):m(m({},a),e)),n},i=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},s=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=t,f=d["".concat(l,".").concat(s)]||d[s]||k[s]||c;return n?r.createElement(f,m(m({ref:a},i),{},{components:n})):r.createElement(f,m({ref:a},i))}));function f(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var c=n.length,m=new Array(c);m[0]=s;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[d]="string"==typeof e?e:t,m[1]=o;for(var p=2;p<c;p++)m[p]=n[p];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},73774:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>k,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var r=n(87462),t=(n(67294),n(3905));const c={},m="kpm",o={unversionedId:"reference/package-management/command-reference/index",id:"version-0.5.0/reference/package-management/command-reference/index",title:"kpm",description:"The kpm cli",source:"@site/versioned_docs/version-0.5.0/reference/package-management/command-reference/index.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/",permalink:"/docs/0.5.0/reference/package-management/command-reference/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/reference/package-management/command-reference/index.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1702363140,formattedLastUpdatedAt:"Dec 12, 2023",frontMatter:{},sidebar:"reference",previous:{title:"yaml",permalink:"/docs/0.5.0/reference/model/yaml"},next:{title:"kpm init",permalink:"/docs/0.5.0/reference/package-management/command-reference/init"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"--version, -v",id:"--version--v",level:3},{value:"Subcommands",id:"subcommands",level:2}],i={toc:p},d="wrapper";function k(e){let{components:a,...n}=e;return(0,t.kt)(d,(0,r.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"kpm"},"kpm"),(0,t.kt)("p",null,"The kpm cli"),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kpm  <command> [arguments]...\n")),(0,t.kt)("h2",{id:"description"},"Description"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"kpm")," is a kcl package manager. It is used to install, remove, and update kcl packages."),(0,t.kt)("h2",{id:"options"},"Options"),(0,t.kt)("h3",{id:"--help--h"},"--help, -h"),(0,t.kt)("p",null,"Show help for kpm command"),(0,t.kt)("h3",{id:"--version--v"},"--version, -v"),(0,t.kt)("p",null,"Print the version of kpm"),(0,t.kt)("h2",{id:"subcommands"},"Subcommands"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/0.5.0/reference/package-management/command-reference/init"},"kpm init")," - Init a kcl package"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/0.5.0/reference/package-management/command-reference/add"},"kpm add")," - Add a dependency to a kcl package"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/0.5.0/reference/package-management/command-reference/pkg"},"kpm pkg")," - Package a kcl package into `","*",".tar``"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/0.5.0/reference/package-management/command-reference/metadata"},"kpm metadata")," - Print the metadata of a kcl package"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/0.5.0/reference/package-management/command-reference/run"},"kpm run")," - Compile a kcl package into yaml"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/0.5.0/reference/package-management/command-reference/login"},"kpm login")," - Login to a kcl registry"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/0.5.0/reference/package-management/command-reference/logout"},"kpm logout")," - Logout from a kcl registry"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/0.5.0/reference/package-management/command-reference/push"},"kpm push")," - Push a kcl package to a registry"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/0.5.0/reference/package-management/command-reference/pull"},"kpm pull")," - Pull a kcl package from a registry"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/0.5.0/reference/package-management/command-reference/help"},"kpm help")," - print help for kpm command")))}k.isMDXComponent=!0}}]);