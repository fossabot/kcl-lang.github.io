"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[80356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="kpm login",i={unversionedId:"reference/package-management/command-reference/login",id:"version-0.5.1/reference/package-management/command-reference/login",title:"kpm login",description:"Login to the kpm registry.",source:"@site/versioned_docs/version-0.5.1/reference/package-management/command-reference/6.login.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/login",permalink:"/docs/0.5.1/reference/package-management/command-reference/login",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/reference/package-management/command-reference/6.login.md",tags:[],version:"0.5.1",lastUpdatedBy:"Peefy",lastUpdatedAt:1701933583,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:6,frontMatter:{},sidebar:"reference",previous:{title:"kpm run",permalink:"/docs/0.5.1/reference/package-management/command-reference/run"},next:{title:"kpm logout",permalink:"/docs/0.5.1/reference/package-management/command-reference/logout"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--username",id:"--username",level:3},{value:"--password",id:"--password",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"login to a registry with account and password",id:"login-to-a-registry-with-account-and-password",level:3},{value:"login to a registry with account, and enter the password interactively",id:"login-to-a-registry-with-account-and-enter-the-password-interactively",level:3},{value:"login to a registry, and enter the account and password interactively",id:"login-to-a-registry-and-enter-the-account-and-password-interactively",level:3}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-login"},"kpm login"),(0,a.kt)("p",null,"Login to the kpm registry."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login [options][kpm_registry]\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm login")," will login the kpm registry."),(0,a.kt)("h2",{id:"options"},"options"),(0,a.kt)("h3",{id:"--username"},"--username"),(0,a.kt)("p",null,"Specify the username of the kpm registry."),(0,a.kt)("h3",{id:"--password"},"--password"),(0,a.kt)("p",null,"Specify the password of the kpm registry."),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"Show help for ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm login")," command."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"login-to-a-registry-with-account-and-password"},"login to a registry with account and password"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login -u <account_name> -p <password> <oci_registry>\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Login succeeded\n")),(0,a.kt)("h3",{id:"login-to-a-registry-with-account-and-enter-the-password-interactively"},"login to a registry with account, and enter the password interactively"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login -u <account_name> <oci_registry>\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Password:\nLogin succeeded\n")),(0,a.kt)("h3",{id:"login-to-a-registry-and-enter-the-account-and-password-interactively"},"login to a registry, and enter the account and password interactively"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login <oci_registry>\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Username: <account_name>\nPassword:\nLogin succeeded\n")))}m.isMDXComponent=!0}}]);