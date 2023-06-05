"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46545],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32567:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={},i="KCL Release Policy",l={unversionedId:"community/release-policy/kcl",id:"version-0.4.4/community/release-policy/kcl",title:"KCL Release Policy",description:"The KCL development team hopes to adopt semantic version to simplify management. Version format major version numbers correspond to incompatible API modifications, minor version numbers correspond to downward compatible functional additions, and revision numbers correspond to downward compatible problem corrections. The major version number and minor version number contain different features, which are called the large version and the patch repair is called the small version.",source:"@site/versioned_docs/version-0.4.4/community/release-policy/kcl.md",sourceDirName:"community/release-policy",slug:"/community/release-policy/kcl",permalink:"/docs/0.4.4/community/release-policy/kcl",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/community/release-policy/kcl.md",tags:[],version:"0.4.4",lastUpdatedBy:"Peefy",lastUpdatedAt:1685958977,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{},sidebar:"community",previous:{title:"Release Policy",permalink:"/docs/0.4.4/community/release-policy/"},next:{title:"KCL Plugin Release Policy",permalink:"/docs/0.4.4/community/release-policy/kcl_plugin"}},s={},c=[{value:"1. Release Process",id:"1-release-process",level:2},{value:"2. Release Maintenance",id:"2-release-maintenance",level:2}],p={toc:c};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kcl-release-policy"},"KCL Release Policy"),(0,o.kt)("p",null,"The KCL development team hopes to adopt ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org"},"semantic version")," to simplify management. Version format: ",(0,o.kt)("inlineCode",{parentName:"p"},"{major}.{minor}.{revision}"),". The rules for increasing version numbers are as follows: major version numbers correspond to incompatible API modifications, minor version numbers correspond to downward compatible functional additions, and revision numbers correspond to downward compatible problem corrections. The major version number and minor version number contain different features, which are called the large version and the patch repair is called the small version."),(0,o.kt)("p",null,"The overall goal is to release a large version with enhanced features every quarter, support the two recently released large versions, and release revisions of other versions from time to time as needed."),(0,o.kt)("h2",{id:"1-release-process"},"1. Release Process"),(0,o.kt)("p",null,"The release process is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The main branch is developed, and a Nightly version is produced every day, and the CI system is tested"),(0,o.kt)("li",{parentName:"ul"},"The beta test branch produces a beta version from Nightly after 6 weeks"),(0,o.kt)("li",{parentName:"ul"},"Stable branch. After 6 weeks, a stable version will be produced from the beta version"),(0,o.kt)("li",{parentName:"ul"},"release-branch.kcl-x. Y Release branch, produce a RC candidate version from the Stable version every quarter, and finally release it"),(0,o.kt)("li",{parentName:"ul"},"release-branch.kcl-x. BUG fix of branch y needs to be merged back to the main branch, and then synchronized to the beta and stable branches step by step")),(0,o.kt)("p",null,"Among them, stable and beta are only delayed the main branch, release branch.kcl-x after publishing, ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," will be saved independently from the master."),(0,o.kt)("p",null,"If this release fails, it will be postponed to the next release cycle."),(0,o.kt)("h2",{id:"2-release-maintenance"},"2. Release Maintenance"),(0,o.kt)("p",null,"Release minor versions to solve one or more critical problems that have no solution (usually related to stability or security). The only code changes included in the release are fixes for specific critical issues. Important only document changes and security test updates may also be included, but that's all. Once ",(0,o.kt)("inlineCode",{parentName:"p"},"KCL 1.x+2")," is released, minor versions that address the non security issues of ",(0,o.kt)("inlineCode",{parentName:"p"},"KCL 1.x")," will stop updating. The minor version to solve ",(0,o.kt)("inlineCode",{parentName:"p"},"KCL 1.x")," security problems will stop after ",(0,o.kt)("inlineCode",{parentName:"p"},"KCL 1.x+2")," is released."))}m.isMDXComponent=!0}}]);