"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="KusionStack",s={unversionedId:"user_docs/guides/working-with-kusion/index",id:"version-0.5.2/user_docs/guides/working-with-kusion/index",title:"KusionStack",description:"KusionStack is an open-source cloud-native programmable technology stack!",source:"@site/versioned_docs/version-0.5.2/user_docs/guides/working-with-kusion/index.md",sourceDirName:"user_docs/guides/working-with-kusion",slug:"/user_docs/guides/working-with-kusion/",permalink:"/docs/0.5.2/user_docs/guides/working-with-kusion/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/user_docs/guides/working-with-kusion/index.md",tags:[],version:"0.5.2",lastUpdatedBy:"peefy",lastUpdatedAt:1701417593,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"user_docs",previous:{title:"Vault",permalink:"/docs/0.5.2/user_docs/guides/secret-management/vault"},next:{title:"Concepts",permalink:"/docs/0.5.2/user_docs/concepts/"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusionstack"},"KusionStack"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"KusionStack is an open-source cloud-native programmable technology stack!")),(0,o.kt)("p",null,"KusionStack is a highly flexible programmable technology stack to enable unified application delivery and operation, inspired by the word Fusion, which aims to help enterprises build an application-centric configuration management plane and DevOps ecosystem."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fusion of hybrid scenarios of ",(0,o.kt)("strong",{parentName:"li"},"private cloud"),", ",(0,o.kt)("strong",{parentName:"li"},"hybrid cloud"),", and ",(0,o.kt)("strong",{parentName:"li"},"multi-cloud")),(0,o.kt)("li",{parentName:"ol"},"Fusion of hybrid platform technologies of ",(0,o.kt)("strong",{parentName:"li"},"cloud-native")," and a variety of other platform technologies"),(0,o.kt)("li",{parentName:"ol"},"Fusion of enterprise-level demands of ",(0,o.kt)("strong",{parentName:"li"},"multi-project"),", ",(0,o.kt)("strong",{parentName:"li"},"multi-team"),", ",(0,o.kt)("strong",{parentName:"li"},"multi-role"),", ",(0,o.kt)("strong",{parentName:"li"},"multi-tenant"),", and ",(0,o.kt)("strong",{parentName:"li"},"multi-environment"))),(0,o.kt)("p",null,"Based on the concept of Platform as Code, developers can quickly unify the full configuration schemas, constraints, policies and configs across the application life cycle, work with the ",(0,o.kt)("strong",{parentName:"p"},"hybrid technologies and cloud environment"),", go through the ",(0,o.kt)("strong",{parentName:"p"},"end-to-end workflow")," from programming to launching, and truly achieve ",(0,o.kt)("strong",{parentName:"p"},"write once, deliver anywhere"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(43007).Z,width:"2852",height:"962"})),(0,o.kt)("p",null,"More documents and use cases at ",(0,o.kt)("a",{parentName:"p",href:"https://kusionstack.io/"},"https://kusionstack.io/")))}d.isMDXComponent=!0},43007:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kusion-stack-1-494a7deb96c7270018a08019da33e6fb.png"}}]);