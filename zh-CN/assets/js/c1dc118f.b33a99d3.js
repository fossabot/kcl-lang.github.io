"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[98689],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=l,d=u["".concat(s,".").concat(m)]||u[m]||k[m]||a;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(87462),l=(t(67294),t(3905));const a={},i="Helm KCL \u63d2\u4ef6",o={unversionedId:"user_docs/guides/working-with-k8s/helm_kcl_plugin",id:"version-0.4.6/user_docs/guides/working-with-k8s/helm_kcl_plugin",title:"Helm KCL \u63d2\u4ef6",description:"Helm \u662f\u4e00\u4e2a\u7ba1\u7406 Charts \u7684\u5de5\u5177\u3002Charts \u662f\u9884\u914d\u7f6e\u7684 Kubernetes \u8d44\u6e90\u7684\u5305\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 Helm-KCL-Plugin \u6765\u5b8c\u6210\u4ee5\u4e0b\u64cd\u4f5c\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.6/user_docs/guides/working-with-k8s/helm_kcl_plugin.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/helm_kcl_plugin",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/helm_kcl_plugin",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/working-with-k8s/helm_kcl_plugin.md",tags:[],version:"0.4.6",lastUpdatedBy:"Peefy",lastUpdatedAt:1708611628,formattedLastUpdatedAt:"2024\u5e742\u670822\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90\u914d\u7f6e",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/generate_k8s_manifests"},next:{title:"KPT KCL SDK",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/kpt_kcl_sdk"}},s={},p=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u83b7\u53d6\u793a\u4f8b",id:"\u83b7\u53d6\u793a\u4f8b",level:3},{value:"\u6d4b\u8bd5\u548c\u8fd0\u884c",id:"\u6d4b\u8bd5\u548c\u8fd0\u884c",level:3},{value:"KCL \u5f00\u53d1\u6307\u5357",id:"kcl-\u5f00\u53d1\u6307\u5357",level:3},{value:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",level:2}],c={toc:p},u="wrapper";function k(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"helm-kcl-\u63d2\u4ef6"},"Helm KCL \u63d2\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm"},"Helm")," \u662f\u4e00\u4e2a\u7ba1\u7406 Charts \u7684\u5de5\u5177\u3002Charts \u662f\u9884\u914d\u7f6e\u7684 Kubernetes \u8d44\u6e90\u7684\u5305\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Helm-KCL-Plugin")," \u6765\u5b8c\u6210\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5 hook \u7684\u65b9\u5f0f\u7f16\u8f91 Helm charts\uff0c\u5c06\u6570\u636e\u548c\u903b\u8f91\u5206\u79bb\u4ee5\u4fbf\u66f4\u597d\u5730\u7ba1\u7406 Kubernetes manifests"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u591a\u73af\u5883\u548c\u591a\u79df\u6237\u65b9\u6848\uff0c\u53ef\u4ee5\u4f18\u96c5\u5730\u7ef4\u62a4\u8fd9\u4e9b\u914d\u7f6e\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u7b80\u5355\u5730\u590d\u5236\u548c\u7c98\u8d34"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 KCL \u6a21\u5f0f\u9a8c\u8bc1\u6240\u6709 KRM \u8d44\u6e90")),(0,l.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/helm/helm"},"Helm")),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/helm-kcl"},"Helm KCL \u63d2\u4ef6"))),(0,l.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u4ec5\u5411 ",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment")," \u8d44\u6e90\u6dfb\u52a0 annotation ",(0,l.kt)("inlineCode",{parentName:"p"},"managed-by=helm-kcl-plugin")," \u7684 KCL \u51fd\u6570"),(0,l.kt)("h3",{id:"\u83b7\u53d6\u793a\u4f8b"},"\u83b7\u53d6\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/helm-kcl.git/\ncd ./helm-kcl/examples/workload-charts-with-kcl\n")),(0,l.kt)("h3",{id:"\u6d4b\u8bd5\u548c\u8fd0\u884c"},"\u6d4b\u8bd5\u548c\u8fd0\u884c"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Helm KCL Plugin")," \u8fd0\u884cKCL\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm kcl template --file ./kcl-run.yaml\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7684YAML\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: workload\n    app.kubernetes.io/version: 0.1.0\n    helm.sh/chart: workload-0.1.0\n  name: workload\nspec:\n  ports:\n    - name: www\n      port: 80\n      protocol: TCP\n      targetPort: 80\n  selector:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/name: workload\n  type: ClusterIP\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: workload\n    app.kubernetes.io/version: 0.1.0\n    helm.sh/chart: workload-0.1.0\n  name: workload\n  annotations:\n    managed-by: helm-kcl-plugin\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/instance: workload\n      app.kubernetes.io/name: workload\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/instance: workload\n        app.kubernetes.io/name: workload\n    spec:\n      containers:\n        - image: nginx:alpine\n          name: frontend\n")),(0,l.kt)("h3",{id:"kcl-\u5f00\u53d1\u6307\u5357"},"KCL \u5f00\u53d1\u6307\u5357"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u60a8\u53ef\u4ee5\u5728 KCL \u4ee3\u7801\u4e2d\u6267\u884c\u7684\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ece ",(0,l.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," \u8bfb\u53d6\u8d44\u6e90\u3002",(0,l.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," \u7b26\u5408 ",(0,l.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM \u51fd\u6570\u89c4\u8303"),"\u3002 \u4f60\u53ef\u4ee5\u4ece ",(0,l.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," \u8bfb\u53d6\u8f93\u5165\u8d44\u6e90\uff0c\u5e76\u4ece ",(0,l.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]')," \u8bfb\u53d6 ",(0,l.kt)("inlineCode",{parentName:"li"},"functionConfig"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u8f93\u51fa\u8d44\u6e90\u7684 KPM \u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"assert {condition}\uff0c{error_message}")," \u8fd4\u56de\u9519\u8bef\u6d88\u606f\u3002")),(0,l.kt)("h2",{id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"},"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/helm-kcl"},"Helm KCL \u63d2\u4ef6"))))}k.isMDXComponent=!0}}]);