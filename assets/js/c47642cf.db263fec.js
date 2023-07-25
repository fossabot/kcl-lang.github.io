"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95316],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),h=n,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||p;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var i=2;i<p;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},40503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const p={},o="kpm push",c={unversionedId:"reference/package-management/command-reference/push",id:"reference/package-management/command-reference/push",title:"kpm push",description:"Push a package to the kpm registry.",source:"@site/docs/reference/package-management/command-reference/8.push.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/push",permalink:"/docs/next/reference/package-management/command-reference/push",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/package-management/command-reference/8.push.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1690274001,formattedLastUpdatedAt:"Jul 25, 2023",sidebarPosition:8,frontMatter:{},sidebar:"reference",previous:{title:"kpm logout",permalink:"/docs/next/reference/package-management/command-reference/logout"},next:{title:"kpm pull",permalink:"/docs/next/reference/package-management/command-reference/pull"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--tar_path",id:"--tar_path",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"push the current package",id:"push-the-current-package",level:3},{value:"push a tar to the registry",id:"push-a-tar-to-the-registry",level:3}],s={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kpm-push"},"kpm push"),(0,n.kt)("p",null,"Push a package to the kpm registry."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push [options][kpm_registry]\n")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kpm push")," will push a package to the kpm registry."),(0,n.kt)("h2",{id:"options"},"options"),(0,n.kt)("h3",{id:"--tar_path"},"--tar_path"),(0,n.kt)("p",null,"The path to the tar file to push."),(0,n.kt)("h3",{id:"--help--h"},"--help, -h"),(0,n.kt)("p",null,"Show help for ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm push")," command."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"push-the-current-package"},"push the current package"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm push")," under the kcl package root directory to upload a kcl package to an OCI-based registry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# create a new kcl package.\n$ kpm init <package_name> \n# enter the kcl package root directory\n$ cd <package_name> \n# push it to an oci registry\n$ kpm push <oci_url>\n")),(0,n.kt)("h3",{id:"push-a-tar-to-the-registry"},"push a tar to the registry"),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm push")," to upload a tar file to an OCI-based registry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push --tar_path <tar_path> <oci_url>\n")))}m.isMDXComponent=!0}}]);