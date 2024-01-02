"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[31403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),k=r,m=p["".concat(l,".").concat(k)]||p[k]||d[k]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},36586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="KPT KCL SDK",s={unversionedId:"user_docs/guides/working-with-k8s/kpt_kcl_sdk",id:"version-0.4.5/user_docs/guides/working-with-k8s/kpt_kcl_sdk",title:"KPT KCL SDK",description:"kpt is a package-centric toolchain that enables a configuration authoring, automation, and delivery experience, which simplifies managing Kubernetes platforms and KRM-driven infrastructure (e.g., Config Connector, Crossplane) at scale by manipulating declarative Configuration as Data for automating Kubernetes configuration editing including transforming and validating.",source:"@site/versioned_docs/version-0.4.5/user_docs/guides/working-with-k8s/kpt_kcl_sdk.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/kpt_kcl_sdk",permalink:"/docs/0.4.5/user_docs/guides/working-with-k8s/kpt_kcl_sdk",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/user_docs/guides/working-with-k8s/kpt_kcl_sdk.md",tags:[],version:"0.4.5",lastUpdatedBy:"peefy",lastUpdatedAt:1704165384,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{},sidebar:"user_docs",previous:{title:"Use KCL to Generate and Manage Kubernetes Resources",permalink:"/docs/0.4.5/user_docs/guides/working-with-k8s/generate_k8s_manifests"},next:{title:"Differences between KCL and Helm",permalink:"/docs/0.4.5/user_docs/guides/working-with-k8s/vs_helm"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Get the Example",id:"get-the-example",level:2},{value:"Show the KRM",id:"show-the-krm",level:2},{value:"Update the <code>FunctionConfig</code>",id:"update-the-functionconfig",level:2},{value:"Test and Run",id:"test-and-run",level:2},{value:"More Documents and Examples",id:"more-documents-and-examples",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kpt-kcl-sdk"},"KPT KCL SDK"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/kpt"},"kpt")," is a package-centric toolchain that enables a configuration authoring, automation, and delivery experience, which simplifies managing Kubernetes platforms and KRM-driven infrastructure (e.g., Config Connector, Crossplane) at scale by manipulating declarative Configuration as Data for automating Kubernetes configuration editing including transforming and validating."),(0,r.kt)("p",null,"KCL can be used to create functions to transform and/or validate the YAML Kubernetes Resource Model (KRM) input/output format, but we provide KPT KCL SDKs to simplify the function authoring process."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/kpt"},"kpt")),(0,r.kt)("li",{parentName:"ul"},"Install Docker")),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Let\u2019s write a KCL function which add annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"managed-by=kpt")," only to Deployment resources."),(0,r.kt)("h2",{id:"get-the-example"},"Get the Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kpt-kcl-sdk.git/\ncd ./kpt-kcl-sdk/get-started/set-annotation\n")),(0,r.kt)("h2",{id:"show-the-krm"},"Show the KRM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kpt pkg tree\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"set-annotation\n\u251c\u2500\u2500 [kcl-fn-config.yaml]  KCLRun set-annotation\n\u2514\u2500\u2500 data\n    \u251c\u2500\u2500 [resources.yaml]  Deployment nginx-deployment\n    \u2514\u2500\u2500 [resources.yaml]  Service test\n")),(0,r.kt)("h2",{id:"update-the-functionconfig"},"Update the ",(0,r.kt)("inlineCode",{parentName:"h2"},"FunctionConfig")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# kcl-fn-config.yaml\napiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata: # kpt-merge: /set-annotation\n  name: set-annotation\nspec:\n  # EDIT THE SOURCE!\n  # This should be your KCL code which preloads the `ResourceList` to `option("resource_list")\n  source: |\n    [resource | {if resource.kind == "Deployment": metadata.annotations: {"managed-by" = "kpt"}} for resource in option("resource_list").items]\n')),(0,r.kt)("h2",{id:"test-and-run"},"Test and Run"),(0,r.kt)("p",null,"Run the KCL code via kpt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Note: you need add sudo and --as-current-user flags to ensure KCL has permission to write temp files in the container filesystem.\nsudo kpt fn eval ./data -i docker.io/kcllang/kpt-kcl:v0.2.0 --as-current-user --fn-config kcl-fn-config.yaml\n\n# Verify that the annotation is added to the `Deployment` resource and the other resource `Service`\n# does not have this annotation.\ncat ./data/resources.yaml | grep annotations -A1 -B5\n")),(0,r.kt)("h2",{id:"more-documents-and-examples"},"More Documents and Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kpt-kcl-sdk"},"KPT KCL SDK"))))}d.isMDXComponent=!0}}]);