"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[75776],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),i=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return l.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=i(a),d=n,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||r;return a?l.createElement(k,o(o({ref:t},m),{},{components:a})):l.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var i=2;i<r;i++)o[i]=a[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6292:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var l=a(87462),n=(a(67294),a(3905));const r={},o="kcl mod pull",c={unversionedId:"tools/cli/package-management/command-reference/pull",id:"tools/cli/package-management/command-reference/pull",title:"kcl mod pull",description:"Pull a package from the kcl mod registry.",source:"@site/docs/tools/cli/package-management/command-reference/9.pull.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/pull",permalink:"/docs/next/tools/cli/package-management/command-reference/pull",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/package-management/command-reference/9.pull.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1702363140,formattedLastUpdatedAt:"Dec 12, 2023",sidebarPosition:9,frontMatter:{},sidebar:"tools",previous:{title:"kcl mod push",permalink:"/docs/next/tools/cli/package-management/command-reference/push"},next:{title:"kcl mod help",permalink:"/docs/next/tools/cli/package-management/command-reference/help"}},p={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--tag",id:"--tag",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"pull the package by package name",id:"pull-the-package-by-package-name",level:3},{value:"pull the package by oci url",id:"pull-the-package-by-oci-url",level:3}],m={toc:i},u="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kcl-mod-pull"},"kcl mod pull"),(0,n.kt)("p",null,"Pull a package from the kcl mod registry."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod pull [options][package_source]\n")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod pull")," will pull a package from the kcl mod registry."),(0,n.kt)("h2",{id:"options"},"options"),(0,n.kt)("h3",{id:"--tag"},"--tag"),(0,n.kt)("p",null,"The tag of the package to pull."),(0,n.kt)("h3",{id:"--help--h"},"--help, -h"),(0,n.kt)("p",null,"Show help for ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push")," command."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"pull-the-package-by-package-name"},"pull the package by package name"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod pull")," to download a kcl package from the default OCI registry by kcl package name.\n",(0,n.kt)("inlineCode",{parentName:"p"},"kpm")," will download the kcl package from the default OCI registry specified in the configuration file ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm.json"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod pull <package_name>:<package_version>\n")),(0,n.kt)("h3",{id:"pull-the-package-by-oci-url"},"pull the package by oci url"),(0,n.kt)("p",null,"You can download a kcl package from an OCI-based registry url."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod pull --tag <kcl_package_version> <oci_url>\n")))}s.isMDXComponent=!0}}]);