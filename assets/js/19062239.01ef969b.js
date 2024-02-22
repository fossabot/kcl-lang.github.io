"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[26174],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=i(t),k=r,d=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return t?n.createElement(d,p(p({ref:a},m),{},{components:t})):n.createElement(d,p({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=k;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c[u]="string"==typeof e?e:r,p[1]=c;for(var i=2;i<l;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},73739:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=t(87462),r=(t(67294),t(3905));const l={},p="kpm pull",c={unversionedId:"reference/package-management/command-reference/pull",id:"version-0.5.2/reference/package-management/command-reference/pull",title:"kpm pull",description:"Pull a package from the kpm registry.",source:"@site/versioned_docs/version-0.5.2/reference/package-management/command-reference/9.pull.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/pull",permalink:"/docs/0.5.2/reference/package-management/command-reference/pull",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/reference/package-management/command-reference/9.pull.md",tags:[],version:"0.5.2",lastUpdatedBy:"Peefy",lastUpdatedAt:1708611628,formattedLastUpdatedAt:"Feb 22, 2024",sidebarPosition:9,frontMatter:{},sidebar:"reference",previous:{title:"kpm push",permalink:"/docs/0.5.2/reference/package-management/command-reference/push"},next:{title:"kpm help",permalink:"/docs/0.5.2/reference/package-management/command-reference/help"}},o={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--tag",id:"--tag",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"pull the package by package name",id:"pull-the-package-by-package-name",level:3},{value:"pull the package by oci url",id:"pull-the-package-by-oci-url",level:3}],m={toc:i},u="wrapper";function s(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kpm-pull"},"kpm pull"),(0,r.kt)("p",null,"Pull a package from the kpm registry."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pull [options][package_source]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm pull")," will pull a package from the kpm registry."),(0,r.kt)("h2",{id:"options"},"options"),(0,r.kt)("h3",{id:"--tag"},"--tag"),(0,r.kt)("p",null,"The tag of the package to pull."),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"Show help for ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm push")," command."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"pull-the-package-by-package-name"},"pull the package by package name"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm pull")," to download a kcl package from the default OCI registry by kcl package name.\n",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," will download the kcl package from the default OCI registry specified in the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pull <package_name>:<package_version>\n")),(0,r.kt)("h3",{id:"pull-the-package-by-oci-url"},"pull the package by oci url"),(0,r.kt)("p",null,"You can download a kcl package from an OCI-based registry url."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pull --tag <kcl_package_version> <oci_url>\n")))}s.isMDXComponent=!0}}]);