"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[38817],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=p(r),u=o,m=s["".concat(c,".").concat(u)]||s[u]||f[u]||i;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"file",linkTitle:"file",type:"docs",description:"file system functions",weight:100},l=void 0,a={unversionedId:"reference/model/file",id:"version-0.8.0/reference/model/file",title:"file",description:"file system functions",source:"@site/versioned_docs/version-0.8.0/reference/model/file.md",sourceDirName:"reference/model",slug:"/reference/model/file",permalink:"/docs/reference/model/file",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.8.0/reference/model/file.md",tags:[],version:"0.8.0",lastUpdatedBy:"peefy",lastUpdatedAt:1709793003,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{title:"file",linkTitle:"file",type:"docs",description:"file system functions",weight:100},sidebar:"reference",previous:{title:"datetime",permalink:"/docs/reference/model/datetime"},next:{title:"json",permalink:"/docs/reference/model/json"}},c={},p=[{value:"read",id:"read",level:2},{value:"glob",id:"glob",level:2},{value:"modpath",id:"modpath",level:2},{value:"workdir",id:"workdir",level:2}],d={toc:p},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"read"},"read"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"read(filepath: string) -> str")),(0,o.kt)("p",null,"Read the contents of the file ",(0,o.kt)("inlineCode",{parentName:"p"},"filepath")," and return a string instance."),(0,o.kt)("h2",{id:"glob"},"glob"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"glob(pattern: str) -> str")),(0,o.kt)("p",null,"Return a list containing all file names that match ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern"),"."),(0,o.kt)("h2",{id:"modpath"},"modpath"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"modpath() -> str")),(0,o.kt)("p",null,"Return the root path of the current KCL module (kcl.mod file path or single ","*",".k file path)."),(0,o.kt)("h2",{id:"workdir"},"workdir"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"workdir() -> str")),(0,o.kt)("p",null,"Return the path of the current working directory."))}f.isMDXComponent=!0}}]);