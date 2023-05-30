"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(l,".").concat(k)]||m[k]||p[k]||o;return n?i.createElement(d,a(a({ref:t},c),{},{components:n})):i.createElement(d,a({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const o={title:"Kustomize KCL \u63d2\u4ef6",sidebar_position:3},a=void 0,s={unversionedId:"user_docs/guides/working-with-k8s/kustomize_kcl_plugin",id:"user_docs/guides/working-with-k8s/kustomize_kcl_plugin",title:"Kustomize KCL \u63d2\u4ef6",description:"Kustomize \u5141\u8bb8\u81ea\u5b9a\u4e49\u7528\u4e8e\u591a\u79cd\u76ee\u7684\u539f\u59cb\u7684\u3001\u65e0\u6a21\u677f\u7684 YAML \u6587\u4ef6\uff0c\u540c\u65f6\u4fdd\u7559\u539f\u59cb YAML \u4e0d\u53d8\u548c\u53ef\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/kustomize_kcl_plugin.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/kustomize_kcl_plugin",permalink:"/zh-CN/docs/next/user_docs/guides/working-with-k8s/kustomize_kcl_plugin",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-k8s/kustomize_kcl_plugin.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1685451649,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",sidebarPosition:3,frontMatter:{title:"Kustomize KCL \u63d2\u4ef6",sidebar_position:3},sidebar:"user_docs",previous:{title:"\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90\u914d\u7f6e",permalink:"/zh-CN/docs/next/user_docs/guides/working-with-k8s/generate_k8s_manifests"},next:{title:"Helm KCL \u63d2\u4ef6",permalink:"/zh-CN/docs/next/user_docs/guides/working-with-k8s/helm_kcl_plugin"}},l={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u83b7\u53d6\u793a\u4f8b",id:"\u83b7\u53d6\u793a\u4f8b",level:3},{value:"\u6d4b\u8bd5\u548c\u8fd0\u884c",id:"\u6d4b\u8bd5\u548c\u8fd0\u884c",level:3},{value:"KCL \u5f00\u53d1\u6307\u5357",id:"kcl-\u5f00\u53d1\u6307\u5357",level:2},{value:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize"},"Kustomize")," \u5141\u8bb8\u81ea\u5b9a\u4e49\u7528\u4e8e\u591a\u79cd\u76ee\u7684\u539f\u59cb\u7684\u3001\u65e0\u6a21\u677f\u7684 YAML \u6587\u4ef6\uff0c\u540c\u65f6\u4fdd\u7559\u539f\u59cb YAML \u4e0d\u53d8\u548c\u53ef\u7528\u3002"),(0,r.kt)("p",null,"KCL \u53ef\u7528\u4e8e\u521b\u5efa\u51fd\u6570\uff0c\u4ee5\u6539\u53d8\u548c/\u6216\u9a8c\u8bc1 Kubernetes \u8d44\u6e90\u6a21\u578b\uff08KRM\uff09\u7684 YAML \u8f93\u5165/\u8f93\u51fa\u683c\u5f0f\uff0c\u5e76\u4e14\u6211\u4eec\u63d0\u4f9b Kustomize KCL \u51fd\u6570\u6765\u7b80\u5316\u51fd\u6570\u7f16\u5199\u8fc7\u7a0b\u3002"),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kustomize"},"kustomize"))),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u4ec5\u5411 Deployment \u8d44\u6e90\u6dfb\u52a0 annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"managed-by=kustomize-kcl")," \u7684 KCL \u51fd\u6570"),(0,r.kt)("h3",{id:"\u83b7\u53d6\u793a\u4f8b"},"\u83b7\u53d6\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/KusionStack/kustomize-kcl.git\ncd ./kustomize-kcl/examples/set-annotation/\n")),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u548c\u8fd0\u884c"},"\u6d4b\u8bd5\u548c\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6ce8\u610f\uff1a\u60a8\u9700\u8981\u6dfb\u52a0 sudo \u548c --as-current-user \u4ee5\u786e\u4fdd KCL \u6709\u6743\u5728\u5bb9\u5668\u6587\u4ef6\u7cfb\u7edf\u4e2d\u5199\u5165\u4e34\u65f6\u6587\u4ef6\u3002\nsudo kustomize fn run ./local-resource/ --as-current-user --dry-run\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7684YAML\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# kcl-fn-config.yaml\napiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata:\n  annotations:\n    config.kubernetes.io/function: |\n      container:\n        image: docker.io/peefyxpf/kustomize-kcl:v0.1.0\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\n  # \u7f16\u8f91\u6b64\u6e90\u4ee3\u7801\n  # \u60a8\u5728\u6b64\u7684 KCL \u4ee3\u7801\u5c06 `ResourceList` \u9884\u52a0\u8f7d\u5230 `option("resource_list")`\nspec:\n  source: |\n    [resource | {if resource.kind == "Deployment": metadata.annotations: {"managed-by" = "kustomize-kcl"}} for resource in option("resource_list").items]\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: test\n  annotations:\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\nspec:\n  selector:\n    app: MyApp\n  ports:\n  - protocol: TCP\n    port: 80\n    targetPort: 9376\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\n  annotations:\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\n    managed-by: kustomize-kcl\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n')),(0,r.kt)("h2",{id:"kcl-\u5f00\u53d1\u6307\u5357"},"KCL \u5f00\u53d1\u6307\u5357"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u53ef\u4ee5\u4f7f\u7528 KCL \u6267\u884c\u7684\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," \u8bfb\u53d6\u8d44\u6e90\u3002",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," \u7b26\u5408 ",(0,r.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM \u51fd\u6570\u89c4\u8303"),"\u3002 \u4f60\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," \u8bfb\u53d6\u8f93\u5165\u8d44\u6e90\uff0c\u5e76\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]')," \u8bfb\u53d6 ",(0,r.kt)("inlineCode",{parentName:"li"},"functionConfig"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u8f93\u51fa\u8d44\u6e90\u7684 KPM \u5217\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"assert {condition}\uff0c{error_message}")," \u8fd4\u56de\u9519\u8bef\u6d88\u606f\u3002")),(0,r.kt)("h2",{id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"},"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kustomize-kcl"},"Kustomize KCL \u63d2\u4ef6"))))}p.isMDXComponent=!0}}]);