"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[91028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"Helm KCL Plugin",sidebar_position:2},l=void 0,o={unversionedId:"user_docs/guides/working-with-k8s/mutate-manifests/helm-kcl-plugin",id:"version-0.5.5/user_docs/guides/working-with-k8s/mutate-manifests/helm-kcl-plugin",title:"Helm KCL Plugin",description:"Introduction",source:"@site/versioned_docs/version-0.5.5/user_docs/guides/working-with-k8s/3-mutate-manifests/2-helm-kcl-plugin.md",sourceDirName:"user_docs/guides/working-with-k8s/3-mutate-manifests",slug:"/user_docs/guides/working-with-k8s/mutate-manifests/helm-kcl-plugin",permalink:"/docs/0.5.5/user_docs/guides/working-with-k8s/mutate-manifests/helm-kcl-plugin",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.5/user_docs/guides/working-with-k8s/3-mutate-manifests/2-helm-kcl-plugin.md",tags:[],version:"0.5.5",lastUpdatedBy:"peefy",lastUpdatedAt:1702363140,formattedLastUpdatedAt:"Dec 12, 2023",sidebarPosition:2,frontMatter:{title:"Helm KCL Plugin",sidebar_position:2},sidebar:"user_docs",previous:{title:"Kubectl KCL Plugin",permalink:"/docs/0.5.5/user_docs/guides/working-with-k8s/mutate-manifests/kubectl-kcl-plugin"},next:{title:"Kustomize KCL Plugin",permalink:"/docs/0.5.5/user_docs/guides/working-with-k8s/mutate-manifests/kustomize-kcl-plugin"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Test and Run",id:"2-test-and-run",level:3},{value:"Guides for Developing KCL",id:"guides-for-developing-kcl",level:2},{value:"More Documents and Examples",id:"more-documents-and-examples",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/helm"},"Helm")," is a tool for managing Charts. Charts are packages of pre-configured Kubernetes resources. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Helm-KCL-Plugin")," to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit the helm charts in a hook way to separate data and logic for the Kubernetes manifests management."),(0,r.kt)("li",{parentName:"ul"},"For multi-environment and multi-tenant scenarios, you can maintain these configurations gracefully rather than simply copy and paste."),(0,r.kt)("li",{parentName:"ul"},"Validate all KRM resources using the KCL schema.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/helm/helm"},"Helm")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/helm-kcl"},"Helm KCL Plugin"))),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Let\u2019s write a KCL function which add annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"managed-by=helm-kcl-plugin")," only to ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," resources in the helm chart."),(0,r.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/helm-kcl.git/\ncd ./helm-kcl/examples/workload-charts-with-kcl\n")),(0,r.kt)("h3",{id:"2-test-and-run"},"2. Test and Run"),(0,r.kt)("p",null,"Run the KCL code via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Helm KCL Plugin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm kcl template --file ./kcl-run.yaml\n")),(0,r.kt)("p",null,"The output yaml is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: workload\n    app.kubernetes.io/version: 0.1.0\n    helm.sh/chart: workload-0.1.0\n  name: workload\nspec:\n  ports:\n    - name: www\n      port: 80\n      protocol: TCP\n      targetPort: 80\n  selector:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/name: workload\n  type: ClusterIP\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: workload\n    app.kubernetes.io/version: 0.1.0\n    helm.sh/chart: workload-0.1.0\n  name: workload\n  annotations:\n    managed-by: helm-kcl-plugin\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/instance: workload\n      app.kubernetes.io/name: workload\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/instance: workload\n        app.kubernetes.io/name: workload\n    spec:\n      containers:\n        - image: nginx:alpine\n          name: frontend\n")),(0,r.kt)("h2",{id:"guides-for-developing-kcl"},"Guides for Developing KCL"),(0,r.kt)("p",null,"Here's what you can do in the KCL code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read resources from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")'),". The ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," complies with the ",(0,r.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM Functions Specification"),". You can read the input resources from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"functionConfig")," from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]'),"."),(0,r.kt)("li",{parentName:"ul"},"Return a KPM list for output resources."),(0,r.kt)("li",{parentName:"ul"},"Return an error using ",(0,r.kt)("inlineCode",{parentName:"li"},"assert {condition}, {error_message}"),".")),(0,r.kt)("h2",{id:"more-documents-and-examples"},"More Documents and Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/helm-kcl"},"Helm KCL Plugin"))))}m.isMDXComponent=!0}}]);