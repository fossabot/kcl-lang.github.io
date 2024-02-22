"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[33844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,u=m["".concat(o,".").concat(k)]||m[k]||s[k]||i;return n?a.createElement(u,c(c({ref:t},d),{},{components:n})):a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},11096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},c="kcl mod init",l={unversionedId:"tools/cli/package-management/command-reference/init",id:"tools/cli/package-management/command-reference/init",title:"kcl mod init",description:"Init a kcl module.",source:"@site/docs/tools/cli/package-management/command-reference/1.init.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/init",permalink:"/docs/next/tools/cli/package-management/command-reference/init",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/package-management/command-reference/1.init.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1708611628,formattedLastUpdatedAt:"Feb 22, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tools",previous:{title:"Validation",permalink:"/docs/next/tools/cli/kcl/vet"},next:{title:"kcl mod add",permalink:"/docs/next/tools/cli/package-management/command-reference/add"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"Init the current directory into a kcl package",id:"init-the-current-directory-into-a-kcl-package",level:3},{value:"Init a kcl package with a name",id:"init-a-kcl-package-with-a-name",level:3}],d={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl-mod-init"},"kcl mod init"),(0,r.kt)("p",null,"Init a kcl module."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init [options][module_name]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod init")," will initialize a kcl package in the current directory. If the package name is not provided, the name of the current directory will be used."),(0,r.kt)("p",null,"If the package name is provided, a subdirectory with the name of the package will be created and the package will be initialized in that directory."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod init")," will create ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," under the package directory."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"Show help for ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod init")," command."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"init-the-current-directory-into-a-kcl-package"},"Init the current directory into a kcl package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# create an empty directory\n$ mkdir my_package\n\n# cd into the directory\n$ cd my_package\n\n# init the current directory into a kcl package\n$ kcl mod init\n")),(0,r.kt)("h3",{id:"init-a-kcl-package-with-a-name"},"Init a kcl package with a name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# init a kcl package with a name 'my_package'\nkcl mod init my_package\n")))}s.isMDXComponent=!0}}]);