"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"KPT KCL SDK",sidebar_position:4},i=void 0,l={unversionedId:"user_docs/guides/working-with-k8s/mutate-manifests/kpt-kcl-sdk",id:"version-0.5.0/user_docs/guides/working-with-k8s/mutate-manifests/kpt-kcl-sdk",title:"KPT KCL SDK",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.0/user_docs/guides/working-with-k8s/3-mutate-manifests/4-kpt-kcl-sdk.md",sourceDirName:"user_docs/guides/working-with-k8s/3-mutate-manifests",slug:"/user_docs/guides/working-with-k8s/mutate-manifests/kpt-kcl-sdk",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/mutate-manifests/kpt-kcl-sdk",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/user_docs/guides/working-with-k8s/3-mutate-manifests/4-kpt-kcl-sdk.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1690462472,formattedLastUpdatedAt:"2023\u5e747\u670827\u65e5",sidebarPosition:4,frontMatter:{title:"KPT KCL SDK",sidebar_position:4},sidebar:"user_docs",previous:{title:"Kustomize KCL \u63d2\u4ef6",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/mutate-manifests/kustomize-kcl-plugin"},next:{title:"Helmfile KCL Plugin",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/mutate-manifests/helmfile-kcl-plugin"}},s={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"1. \u83b7\u53d6\u793a\u4f8b",id:"1-\u83b7\u53d6\u793a\u4f8b",level:3},{value:"2. \u663e\u793a KRM",id:"2-\u663e\u793a-krm",level:3},{value:"3. \u663e\u793a\u548c\u66f4\u65b0 KCL <code>FunctionConfig</code>",id:"3-\u663e\u793a\u548c\u66f4\u65b0-kcl-functionconfig",level:3},{value:"4. \u6d4b\u8bd5\u548c\u8fd0\u884c",id:"4-\u6d4b\u8bd5\u548c\u8fd0\u884c",level:3},{value:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",level:2}],p={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/kpt"},"kpt")," \u662f\u4e00\u4e2a\u4ee5\u5305\u4e3a\u4e2d\u5fc3\u7684\u5de5\u5177\u94fe\uff0c\u53ef\u5b9e\u73b0\u914d\u7f6e\u539f\u5730\u7f16\u8f91\u3001\u81ea\u52a8\u5316\u548c\u4ea4\u4ed8\uff0c\u901a\u8fc7\u5c06\u58f0\u660e\u6027\u914d\u7f6e\u4f5c\u4e3a\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\uff0c\u4ece\u800c\u7b80\u5316 Kubernetes \u5e73\u53f0\u548c KRM \u9a71\u52a8\u7684\u57fa\u7840\u8bbe\u65bd\uff08\u4f8b\u5982\uff0cConfig Connector\u3001Crossplane\uff09\u7684\u5927\u89c4\u6a21\u7ba1\u7406\uff0c\u4ee5\u5b9e\u73b0 Kubernetes \u914d\u7f6e\u7f16\u8f91\u7684\u81ea\u52a8\u5316\u5305\u62ec\u8f6c\u6362\u548c\u9a8c\u8bc1\u3002"),(0,r.kt)("p",null,"KCL \u53ef\u7528\u4e8e\u521b\u5efa\u51fd\u6570\u6765\u8f6c\u6362\u548c/\u6216\u9a8c\u8bc1 YAML Kubernetes \u8d44\u6e90\u6a21\u578b (KRM) \u8f93\u5165/\u8f93\u51fa\u683c\u5f0f\uff0c\u4f46\u6211\u4eec\u63d0\u4f9b KPT KCL SDK \u6765\u7b80\u5316\u51fd\u6570\u7f16\u5199\u8fc7\u7a0b\u3002"),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/kpt"},"kpt")),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"))),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u4ec5\u5411 Deployment \u8d44\u6e90\u6dfb\u52a0 annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"managed-by=kpt")," \u7684 KCL \u51fd\u6570"),(0,r.kt)("h3",{id:"1-\u83b7\u53d6\u793a\u4f8b"},"1. \u83b7\u53d6\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kpt-kcl-sdk.git/\ncd ./kpt-kcl-sdk/get-started/set-annotation\n")),(0,r.kt)("h3",{id:"2-\u663e\u793a-krm"},"2. \u663e\u793a KRM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kpt pkg tree\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"set-annotation\n\u251c\u2500\u2500 [kcl-fn-config.yaml]  KCLRun set-annotation\n\u2514\u2500\u2500 data\n    \u251c\u2500\u2500 [resources.yaml]  Deployment nginx-deployment\n    \u2514\u2500\u2500 [resources.yaml]  Service test\n")),(0,r.kt)("h3",{id:"3-\u663e\u793a\u548c\u66f4\u65b0-kcl-functionconfig"},"3. \u663e\u793a\u548c\u66f4\u65b0 KCL ",(0,r.kt)("inlineCode",{parentName:"h3"},"FunctionConfig")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat ./kcl-fn-config.yaml\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# kcl-fn-config.yaml\napiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata: # kpt-merge: /set-annotation\n  name: set-annotation\nspec:\n  # \u7f16\u8f91\u6b64\u6e90\u4ee3\u7801\n  # \u60a8\u5728\u6b64\u7684 KCL \u4ee3\u7801\u5c06 `ResourceList` \u9884\u52a0\u8f7d\u5230 `option("resource_list")`\n  source: |\n    [resource | {if resource.kind == "Deployment": metadata.annotations: {"managed-by" = "kpt"}} for resource in option("resource_list").items]\n')),(0,r.kt)("h3",{id:"4-\u6d4b\u8bd5\u548c\u8fd0\u884c"},"4. \u6d4b\u8bd5\u548c\u8fd0\u884c"),(0,r.kt)("p",null,"\u901a\u8fc7 kpt \u8fd0\u884c KCL \u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kpt fn eval ./data -i docker.io/kcllang/kpt-kcl:v0.2.0 --fn-config kcl-fn-config.yaml\n\n# \u9a8c\u8bc1 annotation \u662f\u5426\u6dfb\u52a0\u5230 `Deployment` \u8d44\u6e90\u5e76\u4e14\u5176\u4ed6\u8d44\u6e90 `Service` \u6ca1\u6709\u8fd9\u4e2a annotation\u3002\ncat ./data/resources.yaml | grep annotations -A1 -B0\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  annotations:\n    managed-by: kpt\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0c\u6211\u4eec\u786e\u5b9e\u6210\u529f\u6dfb\u52a0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"managed-by=kpt")," \u6807\u7b7e"),(0,r.kt)("h2",{id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"},"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kpt-kcl-sdk"},"KPT KCL SDK"))))}k.isMDXComponent=!0}}]);