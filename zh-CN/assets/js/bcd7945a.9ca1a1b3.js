"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(n),m=l,d=k["".concat(s,".").concat(m)]||k[m]||c[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},46834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={title:"Helm KCL \u63d2\u4ef6",sidebar_position:4},i=void 0,o={unversionedId:"user_docs/guides/working-with-k8s/helm_kcl_plugin",id:"user_docs/guides/working-with-k8s/helm_kcl_plugin",title:"Helm KCL \u63d2\u4ef6",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/helm_kcl_plugin.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/helm_kcl_plugin",permalink:"/zh-CN/docs/next/user_docs/guides/working-with-k8s/helm_kcl_plugin",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-k8s/helm_kcl_plugin.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1685506038,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",sidebarPosition:4,frontMatter:{title:"Helm KCL \u63d2\u4ef6",sidebar_position:4},sidebar:"user_docs",previous:{title:"Kustomize KCL \u63d2\u4ef6",permalink:"/zh-CN/docs/next/user_docs/guides/working-with-k8s/kustomize_kcl_plugin"},next:{title:"KPT KCL SDK",permalink:"/zh-CN/docs/next/user_docs/guides/working-with-k8s/kpt_kcl_sdk"}},s={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"1. \u83b7\u53d6\u793a\u4f8b",id:"1-\u83b7\u53d6\u793a\u4f8b",level:3},{value:"2. \u6d4b\u8bd5\u548c\u8fd0\u884c",id:"2-\u6d4b\u8bd5\u548c\u8fd0\u884c",level:3},{value:"KCL \u5f00\u53d1\u6307\u5357",id:"kcl-\u5f00\u53d1\u6307\u5357",level:2},{value:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm"},"Helm")," \u662f\u4e00\u4e2a\u7ba1\u7406 Charts \u7684\u5de5\u5177\u3002Charts \u662f\u9884\u914d\u7f6e\u7684 Kubernetes \u8d44\u6e90\u7684\u5305\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Helm-KCL-Plugin")," \u6765\u5b8c\u6210\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5 hook \u7684\u65b9\u5f0f\u7f16\u8f91 Helm charts\uff0c\u5c06\u6570\u636e\u548c\u903b\u8f91\u5206\u79bb\u4ee5\u4fbf\u66f4\u597d\u5730\u7ba1\u7406 Kubernetes manifests"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u591a\u73af\u5883\u548c\u591a\u79df\u6237\u65b9\u6848\uff0c\u53ef\u4ee5\u4f18\u96c5\u5730\u7ef4\u62a4\u8fd9\u4e9b\u914d\u7f6e\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u7b80\u5355\u5730\u590d\u5236\u548c\u7c98\u8d34"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 KCL \u6a21\u5f0f\u9a8c\u8bc1\u6240\u6709 KRM \u8d44\u6e90")),(0,l.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/helm/helm"},"Helm")),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/helm-kcl"},"Helm KCL \u63d2\u4ef6"))),(0,l.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u4ec5\u5411 ",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment")," \u8d44\u6e90\u6dfb\u52a0 annotation ",(0,l.kt)("inlineCode",{parentName:"p"},"managed-by=helm-kcl-plugin")," \u7684 KCL \u51fd\u6570"),(0,l.kt)("h3",{id:"1-\u83b7\u53d6\u793a\u4f8b"},"1. \u83b7\u53d6\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/KusionStack/helm-kcl.git/\ncd ./helm-kcl/examples/workload-charts-with-kcl\n")),(0,l.kt)("h3",{id:"2-\u6d4b\u8bd5\u548c\u8fd0\u884c"},"2. \u6d4b\u8bd5\u548c\u8fd0\u884c"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Helm KCL Plugin")," \u8fd0\u884cKCL\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm kcl template --file ./kcl-run.yaml\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7684YAML\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: workload\n    app.kubernetes.io/version: 0.1.0\n    helm.sh/chart: workload-0.1.0\n  name: workload\nspec:\n  ports:\n  - name: www\n    port: 80\n    protocol: TCP\n    targetPort: 80\n  selector:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/name: workload\n  type: ClusterIP\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: workload\n    app.kubernetes.io/version: 0.1.0\n    helm.sh/chart: workload-0.1.0\n  name: workload\n  annotations:\n    managed-by: helm-kcl-plugin\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/instance: workload\n      app.kubernetes.io/name: workload\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/instance: workload\n        app.kubernetes.io/name: workload\n    spec:\n      containers:\n      - image: nginx:alpine\n        name: frontend\n")),(0,l.kt)("h2",{id:"kcl-\u5f00\u53d1\u6307\u5357"},"KCL \u5f00\u53d1\u6307\u5357"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u60a8\u53ef\u4ee5\u5728 KCL \u4ee3\u7801\u4e2d\u6267\u884c\u7684\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ece ",(0,l.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," \u8bfb\u53d6\u8d44\u6e90\u3002",(0,l.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," \u7b26\u5408 ",(0,l.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM \u51fd\u6570\u89c4\u8303"),"\u3002 \u4f60\u53ef\u4ee5\u4ece ",(0,l.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," \u8bfb\u53d6\u8f93\u5165\u8d44\u6e90\uff0c\u5e76\u4ece ",(0,l.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]')," \u8bfb\u53d6 ",(0,l.kt)("inlineCode",{parentName:"li"},"functionConfig"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u8f93\u51fa\u8d44\u6e90\u7684 KPM \u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"assert {condition}\uff0c{error_message}")," \u8fd4\u56de\u9519\u8bef\u6d88\u606f\u3002")),(0,l.kt)("h2",{id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"},"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/helm-kcl"},"Helm KCL \u63d2\u4ef6"))))}c.isMDXComponent=!0}}]);