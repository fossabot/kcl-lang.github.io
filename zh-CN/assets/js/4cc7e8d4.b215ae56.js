"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47206],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),k=i,d=m["".concat(l,".").concat(k)]||m[k]||p[k]||o;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={},a="Kustomize KCL \u63d2\u4ef6",s={unversionedId:"user_docs/guides/working-with-k8s/kustomize_kcl_plugin",id:"version-0.4.6/user_docs/guides/working-with-k8s/kustomize_kcl_plugin",title:"Kustomize KCL \u63d2\u4ef6",description:"Kustomize \u5141\u8bb8\u81ea\u5b9a\u4e49\u7528\u4e8e\u591a\u79cd\u76ee\u7684\u539f\u59cb\u7684\u3001\u65e0\u6a21\u677f\u7684 YAML \u6587\u4ef6\uff0c\u540c\u65f6\u4fdd\u7559\u539f\u59cb YAML \u4e0d\u53d8\u548c\u53ef\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.6/user_docs/guides/working-with-k8s/kustomize_kcl_plugin.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/kustomize_kcl_plugin",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/kustomize_kcl_plugin",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/working-with-k8s/kustomize_kcl_plugin.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1687874331,formattedLastUpdatedAt:"2023\u5e746\u670827\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"KPT KCL SDK",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/kpt_kcl_sdk"},next:{title:"KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Helm \u7bc7",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/vs_helm"}},l={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u83b7\u53d6\u793a\u4f8b",id:"\u83b7\u53d6\u793a\u4f8b",level:3},{value:"\u6d4b\u8bd5\u548c\u8fd0\u884c",id:"\u6d4b\u8bd5\u548c\u8fd0\u884c",level:3},{value:"KCL \u5f00\u53d1\u6307\u5357",id:"kcl-\u5f00\u53d1\u6307\u5357",level:2},{value:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kustomize-kcl-\u63d2\u4ef6"},"Kustomize KCL \u63d2\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize"},"Kustomize")," \u5141\u8bb8\u81ea\u5b9a\u4e49\u7528\u4e8e\u591a\u79cd\u76ee\u7684\u539f\u59cb\u7684\u3001\u65e0\u6a21\u677f\u7684 YAML \u6587\u4ef6\uff0c\u540c\u65f6\u4fdd\u7559\u539f\u59cb YAML \u4e0d\u53d8\u548c\u53ef\u7528\u3002"),(0,i.kt)("p",null,"KCL \u53ef\u7528\u4e8e\u521b\u5efa\u51fd\u6570\uff0c\u4ee5\u6539\u53d8\u548c/\u6216\u9a8c\u8bc1 Kubernetes \u8d44\u6e90\u6a21\u578b\uff08KRM\uff09\u7684 YAML \u8f93\u5165/\u8f93\u51fa\u683c\u5f0f\uff0c\u5e76\u4e14\u6211\u4eec\u63d0\u4f9b Kustomize KCL \u51fd\u6570\u6765\u7b80\u5316\u51fd\u6570\u7f16\u5199\u8fc7\u7a0b\u3002"),(0,i.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kustomize"},"kustomize"))),(0,i.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u4ec5\u5411 Deployment \u8d44\u6e90\u6dfb\u52a0 annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"managed-by=kustomize-kcl")," \u7684 KCL \u51fd\u6570"),(0,i.kt)("h3",{id:"\u83b7\u53d6\u793a\u4f8b"},"\u83b7\u53d6\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/KusionStack/kustomize-kcl.git\ncd ./kustomize-kcl/examples/set-annotation/\n")),(0,i.kt)("h3",{id:"\u6d4b\u8bd5\u548c\u8fd0\u884c"},"\u6d4b\u8bd5\u548c\u8fd0\u884c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6ce8\u610f\uff1a\u60a8\u9700\u8981\u6dfb\u52a0 sudo \u548c --as-current-user \u4ee5\u786e\u4fdd KCL \u6709\u6743\u5728\u5bb9\u5668\u6587\u4ef6\u7cfb\u7edf\u4e2d\u5199\u5165\u4e34\u65f6\u6587\u4ef6\u3002\nsudo kustomize fn run ./local-resource/ --as-current-user --dry-run\n")),(0,i.kt)("p",null,"\u8f93\u51fa\u7684YAML\u4e3a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# kcl-fn-config.yaml\napiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata:\n  annotations:\n    config.kubernetes.io/function: |\n      container:\n        image: docker.io/peefyxpf/kustomize-kcl:v0.1.0\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\n  # \u7f16\u8f91\u6b64\u6e90\u4ee3\u7801\n  # \u60a8\u5728\u6b64\u7684 KCL \u4ee3\u7801\u5c06 `ResourceList` \u9884\u52a0\u8f7d\u5230 `option("resource_list")`\nspec:\n  source: |\n    [resource | {if resource.kind == "Deployment": metadata.annotations: {"managed-by" = "kustomize-kcl"}} for resource in option("resource_list").items]\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: test\n  annotations:\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\nspec:\n  selector:\n    app: MyApp\n  ports:\n  - protocol: TCP\n    port: 80\n    targetPort: 9376\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\n  annotations:\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\n    managed-by: kustomize-kcl\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n')),(0,i.kt)("h2",{id:"kcl-\u5f00\u53d1\u6307\u5357"},"KCL \u5f00\u53d1\u6307\u5357"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u53ef\u4ee5\u4f7f\u7528 KCL \u6267\u884c\u7684\u64cd\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," \u8bfb\u53d6\u8d44\u6e90\u3002",(0,i.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," \u7b26\u5408 ",(0,i.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM \u51fd\u6570\u89c4\u8303"),"\u3002 \u4f60\u53ef\u4ee5\u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," \u8bfb\u53d6\u8f93\u5165\u8d44\u6e90\uff0c\u5e76\u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]')," \u8bfb\u53d6 ",(0,i.kt)("inlineCode",{parentName:"li"},"functionConfig"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u8f93\u51fa\u8d44\u6e90\u7684 KPM \u5217\u8868\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"assert {condition}\uff0c{error_message}")," \u8fd4\u56de\u9519\u8bef\u6d88\u606f\u3002")),(0,i.kt)("h2",{id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"},"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kustomize-kcl"},"Kustomize KCL \u63d2\u4ef6"))))}p.isMDXComponent=!0}}]);