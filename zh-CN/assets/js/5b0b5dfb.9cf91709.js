"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71078],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return t?r.createElement(k,s(s({ref:n},c),{},{components:t})):r.createElement(k,s({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11977:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={title:"\u4ece Kubernetes \u8fc1\u79fb\u6216\u96c6\u6210",sidebar_position:1},s=void 0,o={unversionedId:"user_docs/guides/working-with-k8s/adopt-from-kubernetes",id:"version-0.7.0/user_docs/guides/working-with-k8s/adopt-from-kubernetes",title:"\u4ece Kubernetes \u8fc1\u79fb\u6216\u96c6\u6210",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7.0/user_docs/guides/working-with-k8s/1-adopt-from-kubernetes.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/adopt-from-kubernetes",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/adopt-from-kubernetes",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/working-with-k8s/1-adopt-from-kubernetes.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1698928861,formattedLastUpdatedAt:"2023\u5e7411\u67082\u65e5",sidebarPosition:1,frontMatter:{title:"\u4ece Kubernetes \u8fc1\u79fb\u6216\u96c6\u6210",sidebar_position:1},sidebar:"user_docs",previous:{title:"\u6982\u8ff0",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/overview"},next:{title:"\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90\u914d\u7f6e",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/generate-k8s-manifests"}},i={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u524d\u7f6e\u4f9d\u8d56",id:"\u524d\u7f6e\u4f9d\u8d56",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u5c06 Kubernetes \u914d\u7f6e\u6e05\u5355\u8f6c\u6362\u4e3aKCL",id:"\u5c06-kubernetes-\u914d\u7f6e\u6e05\u5355\u8f6c\u6362\u4e3akcl",level:3},{value:"\u4ece Kubernetes \u81ea\u5b9a\u4e49\u8d44\u6e90\u751f\u6210 KCL \u7c7b\u578b",id:"\u4ece-kubernetes-\u81ea\u5b9a\u4e49\u8d44\u6e90\u751f\u6210-kcl-\u7c7b\u578b",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"KCL \u63d0\u4f9b\u4e86\u8bb8\u591a\u5bf9 Kubernetes \u914d\u7f6e\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002\u901a\u8fc7 KCL \u5de5\u5177\uff0c\u6211\u4eec\u9996\u5148\u53ef\u4ee5\u5c06Kubernetes \u914d\u7f6e\u6e05\u5355\u548c\u81ea\u5b9a\u4e49\u7c7b\u578b\u96c6\u6210\u5230 KCL \u4e2d\u3002\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u4ece Kubernetes \u8fdb\u884c\u8fc1\u79fb\u548c\u96c6\u6210\u3002"),(0,a.kt)("h2",{id:"\u524d\u7f6e\u4f9d\u8d56"},"\u524d\u7f6e\u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install/"},"kcl"))),(0,a.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("h3",{id:"\u5c06-kubernetes-\u914d\u7f6e\u6e05\u5355\u8f6c\u6362\u4e3akcl"},"\u5c06 Kubernetes \u914d\u7f6e\u6e05\u5355\u8f6c\u6362\u4e3aKCL"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u83b7\u53d6\u793a\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/kubernetes/from-kubernetes\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u663e\u793a\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat deployment.yaml\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n")),(0,a.kt)("p",null,"\u5c06 Kubernetes YAML \u4ee3\u7801\u8f6c\u6362\u4e3a KCL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl import -f deployment.yaml\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u547d\u4ee4\u5c06\u751f\u6210\u6587\u4ef6 deployment.k"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""\nThis file was generated by the KCL auto-gen tool. DO NOT EDIT.\nEditing this file might prove futile when you re-run the KCL auto-gen generate command.\n"""\n\napiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx-deployment"\n    labels = {\n        app = "nginx"\n    }\n}\nspec = {\n    replicas = 3\n    selector = {\n        matchLabels = {\n            app = "nginx"\n        }\n    }\n    template = {\n        metadata = {\n            labels = {\n                app = "nginx"\n            }\n        }\n        spec = {\n            containers = [\n                {\n                    name = "nginx"\n                    image = "nginx:1.14.2"\n                    ports = [\n                        {\n                            containerPort = 80\n                        }\n                    ]\n                }\n            ]\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u8fd0\u884c KCL \u4ee3\u7801\u5e76\u751f\u6210 YAML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl deployment.k\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n")),(0,a.kt)("h3",{id:"\u4ece-kubernetes-\u81ea\u5b9a\u4e49\u8d44\u6e90\u751f\u6210-kcl-\u7c7b\u578b"},"\u4ece Kubernetes \u81ea\u5b9a\u4e49\u8d44\u6e90\u751f\u6210 KCL \u7c7b\u578b"),(0,a.kt)("p",null,"KCL \u652f\u6301\u4ece Kubernetes OpenAPI/\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49\uff08CRD\uff09\u4e2d\u63d0\u53d6\u548c\u751f\u6210 KCL Schema\u3002",(0,a.kt)("a",{parentName:"p",href:"/docs/tools/cli/openapi/spec"},"KCL OpenAPI \u89c4\u8303"),"\u5b9a\u4e49\u4e86 OpenAPI \u89c4\u8303\u4e0e KCL \u8bed\u8a00\u529f\u80fd\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5f00\u53d1\u4e86 Kubernetes CRD\uff0c\u53ef\u4ee5\u7531 CRD \u751f\u6210 KCL Schema\uff0c\u5e76\u57fa\u4e8e\u6b64\u7c7b\u578b\u58f0\u660e CR\u3002\u8fd9\u91cc\u6211\u4eec\u4ee5 Kubernetes \u6587\u6863\u4e2d\u6240\u793a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#create-a-customresourcedefinition"},"CronTab CRD")," \u4e3a\u4f8b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ece CRD \u751f\u6210 KCL Schema")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Add the Kubernetes dependency\nkcl mod add k8s\n# Convert the CRD YAML to KCL Schema\nkcl import -m crd -s -f crd.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u751f\u6210\u7684 KCL Schema \u5b9a\u4e49\u8d44\u6e90")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import models\n\nmodels.CronTab {\n    metadata.name = "my-new-cron-object",\n    spec: {\n        cronSpec = "* * * * */5",\n        image = "my-awesome-cron-image",\n        replicas = 3,\n    }\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u8fd0\u884c KCL \u4ee3\u7801\u5e76\u751f\u6210 CR YAML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl cr.k\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: stable.example.com/v1\nkind: CronTab\nmetadata:\n  name: my-new-cron-object\nspec:\n  cronSpec: '* * * * */5'\n  image: my-awesome-cron-image\n  replicas: 3\n")),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("p",null,"\u672c\u8282\u5185\u5bb9\u89e3\u91ca\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl import")," \u5de5\u5177\u5c06 Kubernetes YAML\u3001CRD \u7b49\u8fc1\u79fb\u5230 KCL\u3002\u5feb\u901f\u5165\u95e8\u6307\u5357\u5c06\u5e2e\u52a9\u60a8\u8fdb\u884c\u4ece Kubernetes \u7684\u8fc1\u79fb\u6216\u96c6\u6210\u3002"))}m.isMDXComponent=!0}}]);