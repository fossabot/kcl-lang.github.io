"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const a={sidebar_position:2},o="\u683c\u5f0f\u5316\u4ee3\u7801",i={unversionedId:"tools/cli/kcl/fmt",id:"version-0.4.3/tools/cli/kcl/fmt",title:"\u683c\u5f0f\u5316\u4ee3\u7801",description:"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684\u547d\u4ee4\u884c\u5de5\u5177\u4e00\u952e\u683c\u5f0f\u5316\u591a\u4e2a KCL \u6587\u4ef6\u6587\u6863\u3002\u672c\u6587\u5c55\u793a KCL \u7f16\u7801\u98ce\u683c\u548c KCL \u683c\u5f0f\u5316\u5de5\u5177\u7684\u4f7f\u7528\u65b9\u5f0f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.3/tools/cli/kcl/fmt.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/fmt",permalink:"/zh-CN/docs/0.4.3/tools/cli/kcl/fmt",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/versioned_docs/version-0.4.3/tools/cli/kcl/fmt.md",tags:[],version:"0.4.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1676904334,formattedLastUpdatedAt:"2023\u5e742\u670820\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tools",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/0.4.3/tools/cli/kcl/overview"},next:{title:"Lint \u68c0\u67e5\u4ee3\u7801\u98ce\u683c",permalink:"/zh-CN/docs/0.4.3/tools/cli/kcl/lint"}},c={},s=[{value:"KCL \u7f16\u7801\u98ce\u683c",id:"kcl-\u7f16\u7801\u98ce\u683c",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u683c\u5f0f\u5316\u6587\u4ef6\u6548\u679c\u5c55\u793a",id:"\u683c\u5f0f\u5316\u6587\u4ef6\u6548\u679c\u5c55\u793a",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u683c\u5f0f\u5316\u4ee3\u7801"},"\u683c\u5f0f\u5316\u4ee3\u7801"),(0,l.kt)("p",null,"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684\u547d\u4ee4\u884c\u5de5\u5177\u4e00\u952e\u683c\u5f0f\u5316\u591a\u4e2a KCL \u6587\u4ef6\u6587\u6863\u3002\u672c\u6587\u5c55\u793a KCL \u7f16\u7801\u98ce\u683c\u548c KCL \u683c\u5f0f\u5316\u5de5\u5177\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,l.kt)("h2",{id:"kcl-\u7f16\u7801\u98ce\u683c"},"KCL \u7f16\u7801\u98ce\u683c"),(0,l.kt)("p",null,"KCL \u683c\u5f0f\u5316\u5bf9\u6587\u4ef6\u7684\u4fee\u6539\u6837\u5f0f\u5177\u4f53\u89c1 KCL \u7f16\u7801\u98ce\u683c\uff1a",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/lang/spec/codestyle"},"Style Guide for KCL Code")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5355\u6587\u4ef6\u683c\u5f0f\u5316")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"kcl-fmt your_config.k\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5939\u5185\u591a\u6587\u4ef6\u683c\u5f0f\u5316")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"kcl-fmt your_config_path -R\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u53c2\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-R|--recursive")," \u8bbe\u7f6e\u662f\u5426\u9012\u5f52\u904d\u5386\u5b50\u6587\u4ef6\u5939"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-w|--fmt-output")," \u8bbe\u7f6e\u662f\u5426\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u6d41\uff0c\u4e0d\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"-w")," \u8868\u793a\u539f\u5730\u683c\u5f0f\u5316 KCL \u6587\u4ef6")))),(0,l.kt)("h2",{id:"\u683c\u5f0f\u5316\u6587\u4ef6\u6548\u679c\u5c55\u793a"},"\u683c\u5f0f\u5316\u6587\u4ef6\u6548\u679c\u5c55\u793a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u5316\u524d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import     math\nmixin DeploymentMixin:\n    service:str ="my-service"\nschema DeploymentBase:\n    name: str\n    image  : str\nschema Deployment[replicas] ( DeploymentBase )   :\n    mixin[DeploymentMixin]\n    replicas   : int   = replicas\n    command: [str  ]\n    labels: {str:  str}\ndeploy = Deployment(replicas = 3){}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u5316\u540e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import math\n\nmixin DeploymentMixin:\n    service: str = "my-service"\n\nschema DeploymentBase:\n    name: str\n    image: str\n\nschema Deployment[replicas](DeploymentBase):\n    mixin [DeploymentMixin]\n    replicas: int = replicas\n    command: [str]\n    labels: {str:str}\n\ndeploy = Deployment(replicas=3) {}\n\n')))}m.isMDXComponent=!0}}]);