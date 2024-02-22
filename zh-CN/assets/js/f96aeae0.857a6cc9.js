"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[25241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=s,m=c["".concat(p,".").concat(d)]||c[d]||k[d]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),s=(n(67294),n(3905));const o={},a="From Kubernetes",i={unversionedId:"user_docs/guides/working-with-k8s/adopt_from_kubernetes",id:"version-0.4.3/user_docs/guides/working-with-k8s/adopt_from_kubernetes",title:"From Kubernetes",description:"1. Kubernetes OpenAPI Spec",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.3/user_docs/guides/working-with-k8s/adopt_from_kubernetes.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/adopt_from_kubernetes",permalink:"/zh-CN/docs/0.4.3/user_docs/guides/working-with-k8s/adopt_from_kubernetes",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/user_docs/guides/working-with-k8s/adopt_from_kubernetes.md",tags:[],version:"0.4.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1708611628,formattedLastUpdatedAt:"2024\u5e742\u670822\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"Kubernetes",permalink:"/zh-CN/docs/0.4.3/user_docs/guides/working-with-k8s/"},next:{title:"\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90\u914d\u7f6e",permalink:"/zh-CN/docs/0.4.3/user_docs/guides/working-with-k8s/generate_k8s_manifests"}},p={},u=[{value:"1. Kubernetes OpenAPI Spec",id:"1-kubernetes-openapi-spec",level:2},{value:"2. KCL OpenAPI \u652f\u6301",id:"2-kcl-openapi-\u652f\u6301",level:2},{value:"3. \u4ece Kubernetes \u6a21\u578b\u8fc1\u79fb\u5230 KCL",id:"3-\u4ece-kubernetes-\u6a21\u578b\u8fc1\u79fb\u5230-kcl",level:2},{value:"3.1 \u57fa\u4e8e kusion_models \u7f16\u5199\u914d\u7f6e",id:"31-\u57fa\u4e8e-kusion_models-\u7f16\u5199\u914d\u7f6e",level:3},{value:"3.2 \u521b\u5efa\u81ea\u5b9a\u4e49\u7684 models \u524d\u7aef\u6a21\u578b",id:"32-\u521b\u5efa\u81ea\u5b9a\u4e49\u7684-models-\u524d\u7aef\u6a21\u578b",level:3},{value:"3.2.1 \u83b7\u53d6 Kubernetes KCL \u6a21\u578b",id:"321-\u83b7\u53d6-kubernetes-kcl-\u6a21\u578b",level:4},{value:"3.2.2 \u7f16\u5199\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b",id:"322-\u7f16\u5199\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b",level:4},{value:"3.2.3 \u8fc1\u79fb\u914d\u7f6e\u6570\u636e",id:"323-\u8fc1\u79fb\u914d\u7f6e\u6570\u636e",level:4},{value:"4. \u4ece Kubernetes CRD \u8fc1\u79fb",id:"4-\u4ece-kubernetes-crd-\u8fc1\u79fb",level:2}],l={toc:u},c="wrapper";function k(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"from-kubernetes"},"From Kubernetes"),(0,s.kt)("h2",{id:"1-kubernetes-openapi-spec"},"1. Kubernetes OpenAPI Spec"),(0,s.kt)("p",null,"\u4ece Kubernetes 1.4 \u5f00\u59cb\uff0c\u5f15\u5165\u4e86\u5bf9 OpenAPI \u89c4\u8303\uff08\u5728\u6350\u8d60\u7ed9 Open API Initiative \u4e4b\u524d\u79f0\u4e3a swagger 2.0\uff09\u7684 alpha \u652f\u6301\uff0cAPI \u63cf\u8ff0\u9075\u5faa ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md"},"OpenAPI \u89c4\u8303 2.0"),"\uff0c\u4ece Kubernetes 1.5 \u5f00\u59cb\uff0cKubernetes \u80fd\u591f\u76f4\u63a5\u4ece",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kube-openapi"},"\u6e90\u7801\u81ea\u52a8\u5730\u63d0\u53d6\u6a21\u578b\u5e76\u751f\u6210 OpenAPI \u89c4\u8303"),"\uff0c\u81ea\u52a8\u5316\u5730\u4fdd\u8bc1\u4e86\u89c4\u8303\u548c\u6587\u6863\u4e0e\u64cd\u4f5c/\u6a21\u578b\u7684\u66f4\u65b0\u5b8c\u5168\u540c\u6b65\u3002"),(0,s.kt)("p",null,"\u6b64\u5916\uff0cKubernetes CRD \u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation"},"OpenAPI v3.0 validation")," \u6765\u63cf\u8ff0\uff08\u9664\u5185\u7f6e\u5c5e\u6027 apiVersion\u3001kind\u3001metadata \u4e4b\u5916\u7684\uff09\u81ea\u5b9a\u4e49 schema\uff0c\u5728 CR \u7684\u521b\u5efa\u548c\u66f4\u65b0\u9636\u6bb5\uff0cAPIServer \u4f1a\u4f7f\u7528\u8fd9\u4e2a schema \u5bf9 CR \u7684\u5185\u5bb9\u8fdb\u884c\u6821\u9a8c\u3002"),(0,s.kt)("h2",{id:"2-kcl-openapi-\u652f\u6301"},"2. KCL OpenAPI \u652f\u6301"),(0,s.kt)("p",null,"KCLOpenAPI \u5de5\u5177\u652f\u6301\u4ece OpenAPI/CRD \u5b9a\u4e49\u63d0\u53d6\u5e76\u751f\u6210 KCL schema. \u5728",(0,s.kt)("a",{parentName:"p",href:"/docs/tools/cli/openapi/spec"},"KCLOpenapi Spec"),"\u4e2d\u660e\u786e\u5b9a\u4e49\u4e86 OpenAPI \u89c4\u8303\u4e0e KCL \u8bed\u8a00\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002"),(0,s.kt)("h2",{id:"3-\u4ece-kubernetes-\u6a21\u578b\u8fc1\u79fb\u5230-kcl"},"3. \u4ece Kubernetes \u6a21\u578b\u8fc1\u79fb\u5230 KCL"),(0,s.kt)("h3",{id:"31-\u57fa\u4e8e-kusion_models-\u7f16\u5199\u914d\u7f6e"},"3.1 \u57fa\u4e8e kusion_models \u7f16\u5199\u914d\u7f6e"),(0,s.kt)("p",null,"\u6211\u4eec\u4e3a\u4f60\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"kusion_models")," \u5305\uff0c\u8ba9\u4f60\u53ef\u4ee5\u5feb\u901f\u5f00\u59cb\u3002\u5176\u4e2d\u5305\u542b\u4e00\u4e2a\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u524d\u7aef\u6a21\u578b\uff0c\u79f0\u4e3a",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k"},"\u670d\u52a1\u5668\u6a21\u578b"),"(Server schema)\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u521d\u59cb\u5316 ",(0,s.kt)("inlineCode",{parentName:"p"},"Server schema")," \u6765\u58f0\u660e\u5176\u914d\u7f6e\u3002\u6709\u5173\u6a21\u5f0f\u53ca\u5176\u5c5e\u6027\u7684\u8bf4\u660e\u548c\u7528\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,s.kt)("a",{parentName:"p",href:"https://kusionstack.io/docs/reference/model/kusion_models/kube/frontend/doc_server"},"Server schema \u6587\u6863"),"\u3002"),(0,s.kt)("h3",{id:"32-\u521b\u5efa\u81ea\u5b9a\u4e49\u7684-models-\u524d\u7aef\u6a21\u578b"},"3.2 \u521b\u5efa\u81ea\u5b9a\u4e49\u7684 models \u524d\u7aef\u6a21\u578b"),(0,s.kt)("p",null,"\u73b0\u6709\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"kusion_models")," \u6a21\u578b\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u4f60\u7684\u7279\u5b9a\u4e1a\u52a1\u9700\u6c42\uff0c\u90a3\u4e48\u4f60\u4e5f\u53ef\u4ee5\u8bbe\u8ba1\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b\u5305\u3002 \u60a8\u53ef\u57fa\u4e8e\u9884\u5148\u751f\u6210\u7684 Kubernetes KCL \u5305\u81ea\u5b9a\u4e49\u60a8\u7684\u524d\u7aef\u6a21\u578b\u3002\u60a8\u8fd8\u53ef\u4ee5\u4eff\u7167",(0,s.kt)("inlineCode",{parentName:"p"},"kube2kcl")," \u5de5\u5177\u7684\u6a21\u5f0f\uff0c\u5f00\u53d1\u81ea\u5b9a\u4e49\u811a\u672c\uff0c\u5b8c\u6210\u914d\u7f6e\u6570\u636e\u7684\u8fc1\u79fb\u3002"),(0,s.kt)("h4",{id:"321-\u83b7\u53d6-kubernetes-kcl-\u6a21\u578b"},"3.2.1 \u83b7\u53d6 Kubernetes KCL \u6a21\u578b"),(0,s.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u9884\u751f\u6210\u7684\u5404\u7248\u672c",(0,s.kt)("a",{parentName:"p",href:"https://github.com/orgs/KusionStack/packages/container/package/k8s"},"Kubernetes KCL\u6a21\u578b"),"\uff0c\u60a8\u53ef\u4ee5\u5728\u9879\u76ee\u4e0b\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"kpm add k8s:<version>")," \u6765\u83b7\u5f97\u5b83\u3002\u6709\u5173 kpm \u4f7f\u7528\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kpm#quick-start"},"kpm\u5feb\u901f\u5165\u95e8\u6307\u5357"),"\u3002"),(0,s.kt)("p",null,"\u6216\u8005\uff0c\u5982\u679c\u60a8\u9700\u8981\u81ea\u5df1\u751f\u6210\u8fd9\u4e9b\u5305\uff0c\u8bf7\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl-openapi/blob/main/docs/generate_from_k8s_spec.md"},"\u4ece Kubernetes OpenAPI \u6587\u4ef6\u751f\u6210 KCL \u5305"),"\u3002"),(0,s.kt)("h4",{id:"322-\u7f16\u5199\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b"},"3.2.2 \u7f16\u5199\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b"),(0,s.kt)("p",null,"\u7531\u4e8e Kubernetes \u5185\u7f6e\u6a21\u578b\u8f83\u4e3a\u539f\u5b50\u5316\u548c\u590d\u6742\uff0c\u6211\u4eec\u63a8\u8350\u4ee5 Kubernetes \u539f\u751f\u6a21\u578b\u4f5c\u4e3a\u540e\u7aef\u8f93\u51fa\u7684\u6a21\u578b\uff0c\u5bf9\u5176\u8fdb\u4e00\u6b65\u62bd\u8c61\uff0c\u800c\u5411\u7528\u6237\u66b4\u9732\u4e00\u4efd\u66f4\u4e3a\u53cb\u597d\u548c\u7b80\u5355\u7684\u524d\u7aef\u6a21\u578b\u754c\u9762\uff0c\u5177\u4f53\u60a8\u53ef\u53c2\u7167 Konfig \u4ed3\u5e93\u4e2d ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k"},"kusion_models Server")," \u6a21\u578b\u7684\u8bbe\u8ba1\u65b9\u5f0f\u8fdb\u884c\u3002"),(0,s.kt)("h4",{id:"323-\u8fc1\u79fb\u914d\u7f6e\u6570\u636e"},"3.2.3 \u8fc1\u79fb\u914d\u7f6e\u6570\u636e"),(0,s.kt)("p",null,"\u5bf9\u4e8e\u5b58\u91cf\u7684 Kubernetes \u914d\u7f6e\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u4eff\u7167 kube2Kcl \u5de5\u5177\u7684\u505a\u6cd5\uff0c\u7f16\u5199\u81ea\u5b9a\u4e49\u7684\u8f6c\u6362\u811a\u672c\uff0c\u8fdb\u884c\u4e00\u952e\u8fc1\u79fb\u3002Kusion \u540e\u7eed\u5c06\u63d0\u4f9b\u8be5\u811a\u672c\u7684\u7f16\u5199\u811a\u624b\u67b6\u548c\u7f16\u5199\u6307\u5357\u3002"),(0,s.kt)("h2",{id:"4-\u4ece-kubernetes-crd-\u8fc1\u79fb"},"4. \u4ece Kubernetes CRD \u8fc1\u79fb"),(0,s.kt)("p",null,"\u5982\u679c\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528\u4e86 CRD\uff0c\u4e5f\u53ef\u4ee5\u91c7\u7528\u7c7b\u4f3c\u7684\u6a21\u5f0f\uff0c\u751f\u6210 CRD \u5bf9\u5e94\u7684 KCL schema\uff0c\u5e76\u57fa\u4e8e\u8be5 schema \u58f0\u660e CR\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u4ece CRD \u751f\u6210 KCL Schema"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"kcl-openapi generate model --crd --skip-validation -f your_crd.yaml\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u4f7f\u7528 KCL \u58f0\u660e CR"),(0,s.kt)("p",{parentName:"li"},"\u4f7f\u7528 KCL \u58f0\u660e CR \u7684\u6a21\u5f0f\u4e0e\u58f0\u660e Kubernetes \u5185\u7f6e\u6a21\u578b\u914d\u7f6e\u7684\u6a21\u5f0f\u76f8\u540c\uff0c\u5728\u6b64\u4e0d\u505a\u8d58\u8ff0\u3002"))))}k.isMDXComponent=!0}}]);