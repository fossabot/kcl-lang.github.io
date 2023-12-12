"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[32387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?l.createElement(d,o(o({ref:t},p),{},{components:n})):l.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const a={sidebar_position:3},o="\u4ee3\u7801\u683c\u5f0f\u5316\u5de5\u5177",i={unversionedId:"tools/cli/kcl/fmt",id:"tools/cli/kcl/fmt",title:"\u4ee3\u7801\u683c\u5f0f\u5316\u5de5\u5177",description:"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684\u547d\u4ee4\u884c\u5de5\u5177\u4e00\u952e\u683c\u5f0f\u5316\u591a\u4e2a KCL \u6587\u4ef6\u6587\u6863\u3002\u672c\u6587\u5c55\u793a KCL \u7f16\u7801\u98ce\u683c\u548c KCL \u683c\u5f0f\u5316\u5de5\u5177\u7684\u4f7f\u7528\u65b9\u5f0f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/cli/kcl/fmt.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/fmt",permalink:"/zh-CN/docs/next/tools/cli/kcl/fmt",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/kcl/fmt.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1702363140,formattedLastUpdatedAt:"2023\u5e7412\u670812\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tools",previous:{title:"\u6587\u6863\u751f\u6210\u5de5\u5177",permalink:"/zh-CN/docs/next/tools/cli/kcl/docgen"},next:{title:"\u6570\u636e\u548c\u7ed3\u6784\u5bfc\u5165\u5de5\u5177",permalink:"/zh-CN/docs/next/tools/cli/kcl/import"}},c={},s=[{value:"KCL \u7f16\u7801\u98ce\u683c",id:"kcl-\u7f16\u7801\u98ce\u683c",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u683c\u5f0f\u5316\u6587\u4ef6\u6548\u679c\u5c55\u793a",id:"\u683c\u5f0f\u5316\u6587\u4ef6\u6548\u679c\u5c55\u793a",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4ee3\u7801\u683c\u5f0f\u5316\u5de5\u5177"},"\u4ee3\u7801\u683c\u5f0f\u5316\u5de5\u5177"),(0,r.kt)("p",null,"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684\u547d\u4ee4\u884c\u5de5\u5177\u4e00\u952e\u683c\u5f0f\u5316\u591a\u4e2a KCL \u6587\u4ef6\u6587\u6863\u3002\u672c\u6587\u5c55\u793a KCL \u7f16\u7801\u98ce\u683c\u548c KCL \u683c\u5f0f\u5316\u5de5\u5177\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,r.kt)("h2",{id:"kcl-\u7f16\u7801\u98ce\u683c"},"KCL \u7f16\u7801\u98ce\u683c"),(0,r.kt)("p",null,"KCL \u683c\u5f0f\u5316\u5bf9\u6587\u4ef6\u7684\u4fee\u6539\u6837\u5f0f\u5177\u4f53\u89c1 KCL \u7f16\u7801\u98ce\u683c\uff1a",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/lang/spec/codestyle"},"Style Guide for KCL Code")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u6587\u4ef6\u683c\u5f0f\u5316")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl fmt your_config.k\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5939\u5185\u591a\u6587\u4ef6\u683c\u5f0f\u5316")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl fmt your_config_path -R\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u53c2\u6570",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-R|--recursive")," \u8bbe\u7f6e\u662f\u5426\u9012\u5f52\u904d\u5386\u5b50\u6587\u4ef6\u5939"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-w|--fmt-output")," \u8bbe\u7f6e\u662f\u5426\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u6d41\uff0c\u4e0d\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"-w")," \u8868\u793a\u539f\u5730\u683c\u5f0f\u5316 KCL \u6587\u4ef6")))),(0,r.kt)("h2",{id:"\u683c\u5f0f\u5316\u6587\u4ef6\u6548\u679c\u5c55\u793a"},"\u683c\u5f0f\u5316\u6587\u4ef6\u6548\u679c\u5c55\u793a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u5316\u524d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import     math\nmixin DeploymentMixin:\n    service:str ="my-service"\nschema DeploymentBase:\n    name: str\n    image  : str\nschema Deployment[replicas] ( DeploymentBase )   :\n    mixin[DeploymentMixin]\n    replicas   : int   = replicas\n    command: [str  ]\n    labels: {str:  str}\ndeploy = Deployment(replicas = 3){}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u5316\u540e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import math\n\nmixin DeploymentMixin:\n    service: str = "my-service"\n\nschema DeploymentBase:\n    name: str\n    image: str\n\nschema Deployment[replicas](DeploymentBase):\n    mixin [DeploymentMixin]\n    replicas: int = replicas\n    command: [str]\n    labels: {str:str}\n\ndeploy = Deployment(replicas=3) {}\n\n')),(0,r.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"This command formats all kcl files of the current crate.\n\nUsage:\n  kcl fmt [flags]\n\nExamples:\n  # Format the single file\n  kcl fmt /path/to/file.k\n\n  # Format all files in this folder recursively\n  kcl fmt ./...\n\nFlags:\n  -h, --help   help for fmt\n")))}u.isMDXComponent=!0}}]);