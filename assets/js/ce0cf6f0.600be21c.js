"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"KPT KCL SDK",sidebar_position:5},i=void 0,s={unversionedId:"user_docs/guides/working-with-k8s/kpt_kcl_sdk",id:"version-0.5.0/user_docs/guides/working-with-k8s/kpt_kcl_sdk",title:"KPT KCL SDK",description:"Introduction",source:"@site/versioned_docs/version-0.5.0/user_docs/guides/working-with-k8s/kpt_kcl_sdk.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/kpt_kcl_sdk",permalink:"/docs/user_docs/guides/working-with-k8s/kpt_kcl_sdk",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/user_docs/guides/working-with-k8s/kpt_kcl_sdk.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1687874331,formattedLastUpdatedAt:"Jun 27, 2023",sidebarPosition:5,frontMatter:{title:"KPT KCL SDK",sidebar_position:5},sidebar:"user_docs",previous:{title:"Helm KCL Plugin",permalink:"/docs/user_docs/guides/working-with-k8s/helm_kcl_plugin"},next:{title:"ArgoCD",permalink:"/docs/user_docs/guides/working-with-k8s/argocd"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Show the KRM",id:"2-show-the-krm",level:3},{value:"3. Show and Update the KCL <code>FunctionConfig</code>",id:"3-show-and-update-the-kcl-functionconfig",level:3},{value:"4. Test and Run",id:"4-test-and-run",level:3},{value:"Guides for Developing KCL",id:"guides-for-developing-kcl",level:2},{value:"More Documents and Examples",id:"more-documents-and-examples",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/kpt"},"kpt")," is a package-centric toolchain that enables a configuration authoring, automation, and delivery experience, which simplifies managing Kubernetes platforms and KRM-driven infrastructure (e.g., Config Connector, Crossplane) at scale by manipulating declarative Configuration as Data for automating Kubernetes configuration editing including transforming and validating."),(0,o.kt)("p",null,"KCL can be used to create functions to transform and/or validate the YAML Kubernetes Resource Model (KRM) input/output format, but we provide KPT KCL SDKs to simplify the function authoring process."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/kpt"},"kpt")),(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"))),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"Let\u2019s write a KCL function which add annotation ",(0,o.kt)("inlineCode",{parentName:"p"},"managed-by=kpt")," only to Deployment resources."),(0,o.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/KusionStack/kpt-kcl-sdk.git/\ncd ./kpt-kcl-sdk/get-started/set-annotation\n")),(0,o.kt)("h3",{id:"2-show-the-krm"},"2. Show the KRM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kpt pkg tree\n")),(0,o.kt)("p",null,"The output is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"set-annotation\n\u251c\u2500\u2500 [kcl-fn-config.yaml]  KCLRun set-annotation\n\u2514\u2500\u2500 data\n    \u251c\u2500\u2500 [resources.yaml]  Deployment nginx-deployment\n    \u2514\u2500\u2500 [resources.yaml]  Service test\n")),(0,o.kt)("h3",{id:"3-show-and-update-the-kcl-functionconfig"},"3. Show and Update the KCL ",(0,o.kt)("inlineCode",{parentName:"h3"},"FunctionConfig")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat ./kcl-fn-config.yaml\n")),(0,o.kt)("p",null,"The output is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# kcl-fn-config.yaml\napiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata: # kpt-merge: /set-annotation\n  name: set-annotation\nspec:\n  # EDIT THE SOURCE!\n  # This should be your KCL code which preloads the `ResourceList` to `option("resource_list")`\n  source: |\n    [resource | {if resource.kind == "Deployment": metadata.annotations: {"managed-by" = "kpt"}} for resource in option("resource_list").items]\n')),(0,o.kt)("h3",{id:"4-test-and-run"},"4. Test and Run"),(0,o.kt)("p",null,"Run the KCL code via kpt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Note: you need add sudo and --as-current-user flags to ensure KCL has permission to write temp files in the container filesystem.\nsudo kpt fn eval ./data -i docker.io/peefyxpf/kpt-kcl:v0.1.1 --as-current-user --fn-config kcl-fn-config.yaml\n\n# Verify that the annotation is added to the `Deployment` resource and the other resource `Service` \n# does not have this annotation.\ncat ./data/resources.yaml | grep annotations -A1 -B0\n")),(0,o.kt)("p",null,"The output is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  annotations:\n    managed-by: kpt\n")),(0,o.kt)("p",null,"It can be seen that we have indeed added the annotation ",(0,o.kt)("inlineCode",{parentName:"p"},"managed-by=kpt"),"."),(0,o.kt)("h2",{id:"guides-for-developing-kcl"},"Guides for Developing KCL"),(0,o.kt)("p",null,"Here's what you can do in the KCL code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read resources from ",(0,o.kt)("inlineCode",{parentName:"li"},'option("resource_list")'),". The ",(0,o.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," complies with the ",(0,o.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM Functions Specification"),". You can read the input resources from ",(0,o.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," and the ",(0,o.kt)("inlineCode",{parentName:"li"},"functionConfig")," from ",(0,o.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]'),"."),(0,o.kt)("li",{parentName:"ul"},"Return a KPM list for output resources."),(0,o.kt)("li",{parentName:"ul"},"Return an error using ",(0,o.kt)("inlineCode",{parentName:"li"},"assert {condition}, {error_message}"),".")),(0,o.kt)("h2",{id:"more-documents-and-examples"},"More Documents and Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kpt-kcl-sdk"},"KPT KCL SDK"))))}p.isMDXComponent=!0}}]);