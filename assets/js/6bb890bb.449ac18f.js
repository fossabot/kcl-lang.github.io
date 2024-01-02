"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[78657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"KCL Operator",sidebar_position:6},i=void 0,l={unversionedId:"user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator",id:"version-0.5.5/user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator",title:"KCL Operator",description:"Introduction",source:"@site/versioned_docs/version-0.5.5/user_docs/guides/working-with-k8s/3-mutate-manifests/6-kcl-operator.md",sourceDirName:"user_docs/guides/working-with-k8s/3-mutate-manifests",slug:"/user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator",permalink:"/docs/0.5.5/user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.5/user_docs/guides/working-with-k8s/3-mutate-manifests/6-kcl-operator.md",tags:[],version:"0.5.5",lastUpdatedBy:"peefy",lastUpdatedAt:1704165384,formattedLastUpdatedAt:"Jan 2, 2024",sidebarPosition:6,frontMatter:{title:"KCL Operator",sidebar_position:6},sidebar:"user_docs",previous:{title:"Helmfile KCL Plugin",permalink:"/docs/0.5.5/user_docs/guides/working-with-k8s/mutate-manifests/helmfile-kcl-plugin"},next:{title:"Overview",permalink:"/docs/0.5.5/user_docs/guides/working-with-konfig/overview"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Install KCL Operator",id:"1-install-kcl-operator",level:3},{value:"2. Deploy the KCL source",id:"2-deploy-the-kcl-source",level:3},{value:"3. Validate the result",id:"3-validate-the-result",level:3},{value:"Guides for Developing KCL",id:"guides-for-developing-kcl",level:2},{value:"More Documents and Examples",id:"more-documents-and-examples",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl-operator"},"KCL Operator")," provides cluster integration, allowing you to use Access Webhook to generate, mutate, or validate resources based on KCL configuration when apply resources to the cluster. Webhook will capture creation, application, and editing operations, and execute ",(0,a.kt)("inlineCode",{parentName:"p"},"KCLRun")," resource on the configuration associated with each operation, and the KCL programming language can be used to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Add")," labels or annotations based on a condition."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inject")," a sidecar container in all KRM resources that contain a PodTemplate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Validate")," all KRM resources using KCL schema."),(0,a.kt)("li",{parentName:"ul"},"Use an abstract model to ",(0,a.kt)("strong",{parentName:"li"},"generate")," KRM resources.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install Kubectl"),(0,a.kt)("li",{parentName:"ul"},"Prepare a Kubernetes cluster")),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Let\u2019s write a KCL function which add annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"managed-by=kcl-operator")," only to Pod resources at runtime."),(0,a.kt)("h3",{id:"1-install-kcl-operator"},"1. Install KCL Operator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/kcl-lang/kcl-operator/main/config/all.yaml\n")),(0,a.kt)("p",null,"Use the following command to watch and wait the pod status is Running."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get po\n")),(0,a.kt)("h3",{id:"2-deploy-the-kcl-source"},"2. Deploy the KCL source"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f- << EOF\napiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata:\n  name: set-annotation\nspec:\n  source: |\n    items = [item | {\n        metadata.annotations: {\n            "managed-by" = "kcl-operator"\n        }\n    } for item in option("items")]\nEOF\n')),(0,a.kt)("h3",{id:"3-validate-the-result"},"3. Validate the result"),(0,a.kt)("p",null,"Validate the mutation result by creating a nginx Pod YAML."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f- << EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  annotations:\n    app: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx:1.14.2\n    ports:\n    - containerPort: 80\nEOF\nkubectl get po nginx -o yaml | grep kcl-operator\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"    managed-by: kcl-operator\n")),(0,a.kt)("h2",{id:"guides-for-developing-kcl"},"Guides for Developing KCL"),(0,a.kt)("p",null,"Here's what you can do in the KCL code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read resources from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")'),". The ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," complies with the ",(0,a.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM Functions Specification"),". You can read the input resources from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("items")')," and the params from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("params")'),"."),(0,a.kt)("li",{parentName:"ul"},"Return a KPM list for output resources."),(0,a.kt)("li",{parentName:"ul"},"Return an error using ",(0,a.kt)("inlineCode",{parentName:"li"},"assert {condition}, {error_message}"),".")),(0,a.kt)("h2",{id:"more-documents-and-examples"},"More Documents and Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/krm-kcl"},"KRM KCL Spec"))))}d.isMDXComponent=!0}}]);