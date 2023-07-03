"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(n),k=s,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(87462),s=(n(67294),n(3905));const o={},i="\u5c06 Kubernetes \u6a21\u578b\u8f6c\u6362\u4e3a KCL \u6a21\u578b",a={unversionedId:"user_docs/guides/working-with-k8s/from_kubernetes",id:"version-0.4.6/user_docs/guides/working-with-k8s/from_kubernetes",title:"\u5c06 Kubernetes \u6a21\u578b\u8f6c\u6362\u4e3a KCL \u6a21\u578b",description:"1. Kubernetes OpenAPI Spec",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.6/user_docs/guides/working-with-k8s/from_kubernetes.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/from_kubernetes",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/from_kubernetes",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/working-with-k8s/from_kubernetes.md",tags:[],version:"0.4.6",lastUpdatedBy:"cuih",lastUpdatedAt:1682610357,formattedLastUpdatedAt:"2023\u5e744\u670827\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"Kubernetes",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/"},next:{title:"\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90\u914d\u7f6e",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/generate_k8s_manifests"}},p={},u=[{value:"1. Kubernetes OpenAPI Spec",id:"1-kubernetes-openapi-spec",level:2},{value:"2. KCL \u7684 OpenAPI \u652f\u6301",id:"2-kcl-\u7684-openapi-\u652f\u6301",level:2},{value:"3. \u4ece Kubernetes \u8fc1\u79fb\u5230 KCL",id:"3-\u4ece-kubernetes-\u8fc1\u79fb\u5230-kcl",level:2},{value:"3.1 \u57fa\u4e8e\u6a21\u578b\u7f16\u5199\u914d\u7f6e",id:"31-\u57fa\u4e8e\u6a21\u578b\u7f16\u5199\u914d\u7f6e",level:3},{value:"3.2 \u6784\u5efa\u4f60\u7684\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b",id:"32-\u6784\u5efa\u4f60\u7684\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b",level:3},{value:"3.2.1 \u5c06 Kubernetes Deployment \u8f6c\u6362\u4e3a KCL \u6a21\u578b",id:"321-\u5c06-kubernetes-deployment-\u8f6c\u6362\u4e3a-kcl-\u6a21\u578b",level:3},{value:"3.2.2 \u8bbe\u8ba1\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b",id:"322-\u8bbe\u8ba1\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b",level:4},{value:"3.2.3 \u8fc1\u79fb\u914d\u7f6e\u6570\u636e",id:"323-\u8fc1\u79fb\u914d\u7f6e\u6570\u636e",level:4},{value:"4. \u4ece Kubernetes CRD \u8fc1\u79fb",id:"4-\u4ece-kubernetes-crd-\u8fc1\u79fb",level:2}],l={toc:u};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u5c06-kubernetes-\u6a21\u578b\u8f6c\u6362\u4e3a-kcl-\u6a21\u578b"},"\u5c06 Kubernetes \u6a21\u578b\u8f6c\u6362\u4e3a KCL \u6a21\u578b"),(0,s.kt)("h2",{id:"1-kubernetes-openapi-spec"},"1. Kubernetes OpenAPI Spec"),(0,s.kt)("p",null,"\u4ece Kubernetes 1.4 \u5f00\u59cb\uff0c\u5f15\u5165\u4e86\u5bf9 OpenAPI \u89c4\u8303\u7684 alpha \u652f\u6301\uff08\u4e4b\u524d\u79f0\u4e3a Swagger 2.0\uff0c\u540e\u6765\u6350\u8d60\u7ed9\u4e86 OpenAPI Initiative\uff09\uff0c\u5e76\u4e14 API \u63cf\u8ff0\u9075\u5faa ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md"},"OpenAPI Spec 2.0"),"\u3002\u81ea Kubernetes 1.5 \u5f00\u59cb\uff0cKubernetes \u53ef\u4ee5",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kube-openapi"},"\u76f4\u63a5\u4ece\u6e90\u4ee3\u7801\u4e2d\u63d0\u53d6\u6a21\u578b\uff0c\u7136\u540e\u751f\u6210 OpenAPI \u89c4\u8303\u6587\u4ef6"),"\uff0c\u4ee5\u4fbf\u81ea\u52a8\u4fdd\u6301\u89c4\u8303\u548c\u6587\u6863\u4e0e\u64cd\u4f5c\u548c\u6a21\u578b\u4e00\u81f4\u66f4\u65b0\u3002"),(0,s.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0cKubernetes CRD \u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation"},"OpenAPI V3.0 \u9a8c\u8bc1")," \u6765\u63cf\u8ff0\u81ea\u5b9a\u4e49\u6a21\u5f0f\uff08\u9664\u4e86\u5185\u7f6e\u7684 apiVersion\u3001Kind \u548c metadata \u5c5e\u6027\u4e4b\u5916\uff09\uff0cAPIServer \u5728\u8d44\u6e90\u521b\u5efa\u548c\u66f4\u65b0\u9636\u6bb5\u4f7f\u7528\u5b83\u6765\u9a8c\u8bc1 CR\u3002"),(0,s.kt)("h2",{id:"2-kcl-\u7684-openapi-\u652f\u6301"},"2. KCL \u7684 OpenAPI \u652f\u6301"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"kcl-openapi")," \u5de5\u5177\u652f\u6301\u4ece Kubernetes OpenAPI/CRD \u4e2d\u63d0\u53d6\u548c\u751f\u6210 KCL \u6a21\u578b\uff08schema\uff09\u3002",(0,s.kt)("a",{parentName:"p",href:"/docs/tools/cli/openapi/spec"},"KCL OpenAPI \u89c4\u8303")," \u5b9a\u4e49\u4e86 OpenAPI \u89c4\u8303\u548c KCL \u8bed\u8a00\u7279\u6027\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002\u8981\u5feb\u901f\u5f00\u59cb\u4f7f\u7528\u8be5\u5de5\u5177\uff0c\u8bf7\u53c2\u89c1 ",(0,s.kt)("a",{parentName:"p",href:"/docs/tools/cli/openapi/"},"KCL OpenAPI \u5de5\u5177"),"\u3002"),(0,s.kt)("h2",{id:"3-\u4ece-kubernetes-\u8fc1\u79fb\u5230-kcl"},"3. \u4ece Kubernetes \u8fc1\u79fb\u5230 KCL"),(0,s.kt)("p",null,"\u5b8c\u6574\u7684 Kubernetes \u5185\u7f6e\u6a21\u578b OpenAPI \u5b9a\u4e49\u5b58\u50a8\u5728 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/api/openapi-spec/swagger.json"},"Kubernetes OpenAPI-Spec \u6587\u4ef6"),"\u4e2d\u3002\u5c06\u8be5\u6587\u4ef6\u4f5c\u4e3a\u8f93\u5165\uff0cKCL OpenAPI \u5de5\u5177\u53ef\u4ee5\u751f\u6210\u76f8\u5e94\u7248\u672c\u7684\u6240\u6709\u6a21\u578b\uff08model\uff09\u7684 schema\u3002\u5728\u4e0b\u9762\u7684\u90e8\u5206\u4e2d\uff0c\u6211\u4eec\u5c06\u4ee5\u90e8\u7f72\u53d1\u5e03\u573a\u666f\u4e3a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4ece Kubernetes \u8fc1\u79fb\u5230 KCL\u3002\u5047\u8bbe\u4f60\u7684\u9879\u76ee\u6b63\u5728\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Kubernetes Deployment")," \u6765\u5b9a\u4e49 Deployment \u914d\u7f6e\uff0c\u8fc1\u79fb\u5230 KCL \u53ea\u9700\u8981\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,s.kt)("h3",{id:"31-\u57fa\u4e8e\u6a21\u578b\u7f16\u5199\u914d\u7f6e"},"3.1 \u57fa\u4e8e\u6a21\u578b\u7f16\u5199\u914d\u7f6e"),(0,s.kt)("p",null,"\u6211\u4eec\u4e3a\u4f60\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"kusion_models")," \u5305\uff0c\u8ba9\u4f60\u53ef\u4ee5\u5feb\u901f\u5f00\u59cb\u3002\u5176\u4e2d\u5305\u542b\u4e00\u4e2a\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u524d\u7aef\u6a21\u578b\uff0c\u79f0\u4e3a",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k"},"\u670d\u52a1\u5668\u6a21\u578b"),"(Server schema)\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u521d\u59cb\u5316 ",(0,s.kt)("inlineCode",{parentName:"p"},"Server schema")," \u6765\u58f0\u660e\u5176\u914d\u7f6e\u3002\u6709\u5173\u6a21\u5f0f\u53ca\u5176\u5c5e\u6027\u7684\u8bf4\u660e\u548c\u7528\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,s.kt)("a",{parentName:"p",href:"https://kusionstack.io/docs/reference/model/kusion_models/kube/frontend/doc_server"},"Server schema \u6587\u6863"),"\u3002"),(0,s.kt)("h3",{id:"32-\u6784\u5efa\u4f60\u7684\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b"},"3.2 \u6784\u5efa\u4f60\u7684\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b"),(0,s.kt)("p",null,"\u73b0\u6709\u7684 KCL \u6a21\u578b\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u4f60\u7684\u7279\u5b9a\u4e1a\u52a1\u9700\u6c42\uff0c\u90a3\u4e48\u4f60\u4e5f\u53ef\u4ee5\u8bbe\u8ba1\u4f60\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b\u5305\u3002\u5728 Konfig \u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"kusion_kubernetes")," \u76ee\u5f55\u4e2d\uff0c\u6709\u4e00\u4e2a Kubernetes 1.22 \u751f\u6210\u6a21\u578b\u7684\u526f\u672c\uff0c\u4f60\u53ef\u4ee5\u57fa\u4e8e\u5b83\u8bbe\u8ba1\u4f60\u7684\u81ea\u5b9a\u4e49\u6a21\u578b\u3002\u4f60\u8fd8\u53ef\u4ee5\u5f00\u53d1\u81ea\u5b9a\u4e49\u811a\u672c\u4ee5\u8fc1\u79fb\u4f60\u7684\u914d\u7f6e\u6570\u636e\uff0c\u5c31\u50cf ",(0,s.kt)("inlineCode",{parentName:"p"},"kube2kcl")," \u5de5\u5177\u6240\u505a\u7684\u90a3\u6837\u3002"),(0,s.kt)("h3",{id:"321-\u5c06-kubernetes-deployment-\u8f6c\u6362\u4e3a-kcl-\u6a21\u578b"},"3.2.1 \u5c06 Kubernetes Deployment \u8f6c\u6362\u4e3a KCL \u6a21\u578b"),(0,s.kt)("p",null,"\u5728 Konfig \u5b58\u50a8\u5e93\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"base/pkg/kusion_kubernetes")," \u76ee\u5f55\u4e0b\u5df2\u7ecf\u6709 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/deployment.k"},"Kubernetes 1.22 \u751f\u6210\u6a21\u578b"),"\u7684\u526f\u672c\u3002\u4f60\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u5e76\u4f7f\u7528\u73b0\u6709\u7684\u6a21\u578b\uff0c\u6216\u8005\u5982\u679c\u9700\u8981\uff0c\u53ef\u4ee5\u751f\u6210\u5176\u4ed6\u7248\u672c\u7684\u6a21\u578b\u3002"),(0,s.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u751f\u6210 Kubernetes \u6a21\u578b\u7684 v1.23 \u7248\u672c\u3002\u4ece ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/release-1.23/api/openapi-spec/swagger.json"},"Kubernetes v1.23 OpenAPI \u89c4\u8303"),"\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u627e\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"apps/v1.Deployment")," \u6a21\u578b\u7684\u5b9a\u4e49\uff0c\u4ee5\u4e0b\u662f\u90e8\u5206\u5185\u5bb9\u6458\u5f55\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "definitions": {\n        "io.k8s.api.apps.v1.Deployment": {\n            "description": "Deployment enables declarative updates for Pods and ReplicaSets.",\n            "properties": {\n                "apiVersion": {\n                    "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",\n                    "type": "string"\n                },\n                "kind": {\n                    "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",\n                    "type": "string"\n                },\n                "metadata": {\n                    "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta",\n                    "description": "Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata"\n                },\n                "spec": {\n                    "$ref": "#/definitions/io.k8s.api.apps.v1.DeploymentSpec",\n                    "description": "Specification of the desired behavior of the Deployment."\n                },\n                "status": {\n                    "$ref": "#/definitions/io.k8s.api.apps.v1.DeploymentStatus",\n                    "description": "Most recently observed status of the Deployment."\n                }\n            },\n            "type": "object",\n            "x-kubernetes-group-version-kind": [\n                {\n                    "group": "apps",\n                    "kind": "Deployment",\n                    "version": "v1"\n                }\n            ]\n        }\n    },\n    "info": {\n        "title": "Kubernetes",\n        "version": "unversioned"\n    },\n    "paths": {},\n    "swagger": "2.0"\n}\n')),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u4e0a\u8ff0\u89c4\u8303\u4fdd\u5b58\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"deployment.json")," \u6587\u4ef6\uff0c\u5e76\u8fd0\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"kcl-openapi generate model -f deployment.json"),"\uff0cKCL Schemas \u5c06\u4f1a\u751f\u6210\u5e76\u8f93\u51fa\u5230\u4f60\u5f53\u524d\u7684\u5de5\u4f5c\u7a7a\u95f4\u3002\u5176\u4ed6 Kubernetes \u6a21\u578b\u4e5f\u53ef\u4ee5\u4fdd\u5b58\u5728\u8be5\u89c4\u8303\u6587\u4ef6\u4e2d\uff0c\u5e76\u4e14\u53ef\u4ee5\u7c7b\u4f3c\u5730\u8fdb\u884c\u751f\u6210\u3002"),(0,s.kt)("h4",{id:"322-\u8bbe\u8ba1\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b"},"3.2.2 \u8bbe\u8ba1\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b"),(0,s.kt)("p",null,"\u7531\u4e8e Kubernetes \u5185\u7f6e\u6a21\u578b\u7ed3\u6784\u590d\u6742\u4e14\u5bf9\u521d\u5b66\u8005\u6765\u8bf4\u6709\u4e9b\u68d8\u624b\uff0c\u6211\u4eec\u5efa\u8bae\u5c06 Kubernetes \u7684\u539f\u751f\u6a21\u578b\u4f5c\u4e3a\u540e\u7aef\u8f93\u51fa\u6a21\u578b\uff0c\u5e76\u8bbe\u8ba1\u4e00\u6279\u524d\u7aef\u6a21\u578b\uff0c\u5c06\u5176\u4f5c\u4e3a\u4e00\u79cd\u66f4\u62bd\u8c61\u3001\u66f4\u53cb\u597d\u548c\u66f4\u7b80\u5355\u7684\u7528\u6237\u63a5\u53e3\u3002\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k"},"Konfig \u5b58\u50a8\u5e93\u4e2d Server Schema")," \u7684\u8bbe\u8ba1\u6a21\u5f0f\u3002"),(0,s.kt)("h4",{id:"323-\u8fc1\u79fb\u914d\u7f6e\u6570\u636e"},"3.2.3 \u8fc1\u79fb\u914d\u7f6e\u6570\u636e"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5f00\u53d1\u81ea\u5b9a\u4e49\u811a\u672c\u4ee5\u81ea\u52a8\u8fc1\u79fb\u4f60\u7684\u914d\u7f6e\u6570\u636e\u3002KCL \u7a0d\u540e\u5c06\u4e3a\u6b64\u811a\u672c\u63d0\u4f9b\u7f16\u5199\u811a\u624b\u67b6\u548c\u7f16\u5199\u6307\u5357\u3002"),(0,s.kt)("h2",{id:"4-\u4ece-kubernetes-crd-\u8fc1\u79fb"},"4. \u4ece Kubernetes CRD \u8fc1\u79fb"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u5f00\u53d1\u4e86 CRD\uff0c\u4f60\u53ef\u4ee5\u751f\u6210KCL \u7248\u672c\u7684 CRD \u6a21\u5f0f\uff0c\u5e76\u57fa\u4e8e\u5b83\u58f0\u660e CR\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u4ece CRD \u751f\u6210 KCL Schema"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kcl-openapi generate model --crd --skip-validation -f <your_crd.yaml>\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u5728 KCL \u4e2d\u57fa\u4e8e CRD \u5b9a\u4e49 CR"),(0,s.kt)("p",{parentName:"li"},"  \u4f60\u53ef\u4ee5\u521d\u59cb\u5316 CRD \u6a21\u5f0f\u6765\u5b9a\u4e49 CR\uff0c\u6216\u8005\u4f60\u53ef\u4ee5\u4f7f\u7528\u751f\u6210\u7684\u6a21\u5f0f\u4f5c\u4e3a\u540e\u7aef\u6a21\u578b\uff0c\u5e76\u4e3a\u7528\u6237\u8bbe\u8ba1\u4e00\u4e2a\u524d\u7aef\u754c\u9762\u8fdb\u884c\u521d\u59cb\u5316\u3002\u8fd9\u7c7b\u4f3c\u4e8e ",(0,s.kt)("inlineCode",{parentName:"p"},"KCL Models")," \u5728 Kubernetes \u5185\u7f6e\u6a21\u578b\u4e0a\u7684\u5b9e\u8df5\u3002"))))}c.isMDXComponent=!0}}]);