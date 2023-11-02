"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96070],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"\u6982\u8ff0",sidebar_position:0},s=void 0,a={unversionedId:"user_docs/guides/working-with-k8s/overview",id:"user_docs/guides/working-with-k8s/overview",title:"\u6982\u8ff0",description:"Kubernetes",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/0-overview.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/overview",permalink:"/zh-CN/docs/next/user_docs/guides/working-with-k8s/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-k8s/0-overview.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1698928861,formattedLastUpdatedAt:"2023\u5e7411\u67082\u65e5",sidebarPosition:0,frontMatter:{title:"\u6982\u8ff0",sidebar_position:0},sidebar:"user_docs",previous:{title:"\u5982\u4f55\u5728 github action \u4e2d\u4f7f\u7528 kpm \u53d1\u5e03\u60a8\u7684 KCL \u5305",permalink:"/zh-CN/docs/next/user_docs/guides/package-management/how-to/push_github_action"},next:{title:"\u4ece Kubernetes \u8fc1\u79fb\u6216\u96c6\u6210",permalink:"/zh-CN/docs/next/user_docs/guides/working-with-k8s/adopt-from-kubernetes"}},u={},c=[{value:"Kubernetes",id:"kubernetes",level:2},{value:"\u7528\u4f8b",id:"\u7528\u4f8b",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," \u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u7528\u4e8e\u5728\u4e00\u7ec4\u673a\u5668\u96c6\u7fa4\u4e0a\u8fd0\u884c\u548c\u7ba1\u7406\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," \u53ef\u4ee5\u5c06 Kubernetes \u8d44\u6e90 API \u516c\u5f00\u4e3a\u8de8\u5e38\u89c1\u4e91\u539f\u751f\u5de5\u5177\u548c\u5e94\u7528\u7a0b\u5e8f\u7684 KCL \u4ee3\u7801\u6a21\u5757\u3002\u6b64\u5916\uff0c\u53ef\u4ee5\u4f7f\u7528 KCL \u56f4\u7ed5\u8fd9\u4e9b API \u6a21\u5757\u8fdb\u884c\u7f16\u7a0b\u548c\u914d\u7f6e\u3001\u7b56\u7565\u7ba1\u7406\u3002"),(0,o.kt)("h2",{id:"\u7528\u4f8b"},"\u7528\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u52a8\u6001\u914d\u7f6e\u7b56\u7565\u7ba1\u7406"),"\uff1a\u4f7f\u7528\u73b0\u4ee3\u8bed\u8a00\uff08\u5305\u62ec\u51fd\u6570\u3001\u7c7b\u578b\u3001\u6761\u4ef6\u8bed\u53e5\u548c\u4e30\u5bcc\u7684 IDE \u96c6\u6210\u5f00\u53d1\u73af\u5883\u529f\u80fd\uff09\u6765\u521b\u5efa\u3001\u7f16\u6392\u3001\u66f4\u6539\u6216\u9a8c\u8bc1\u5e94\u7528\u8d1f\u8f7d\u7684 Kubernetes API \u8d44\u6e90\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 YAML\u3001JSON\u3001\u811a\u672c\u548c\u6a21\u677f\u7b49\u65b9\u5f0f\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u63a5\u5165 Kubernetes \u5df2\u6709\u751f\u6001"),"\uff1a\u5c06 Kubernetes \u914d\u7f6e\u6e05\u5355\u548c\u81ea\u5b9a\u4e49\u8d44\u6e90\u7c7b\u578b\u8f6c\u6362\u4e3a KCL \u914d\u7f6e\u548c Schema \u5e76\u4f7f\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes \u5305\u7ba1\u7406"),"\uff1a\u4f7f\u7528 KCL \u5305\u7ba1\u7406\u5de5\u5177\u4ece Registry \u4e0b\u8f7d\u5b89\u88c5\u548c\u53d1\u5e03\u5e94\u7528\u8d1f\u8f7d\u3001\u5bb9\u5668\u548c\u670d\u52a1\u7b49\u6a21\u578b\u3002")))}d.isMDXComponent=!0}}]);