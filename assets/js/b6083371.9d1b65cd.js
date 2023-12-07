"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[51899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"structure",sidebar_label:"Structure"},i="Konfig Structure",s={unversionedId:"user_docs/guides/working-with-konfig/structure",id:"version-0.5.5/user_docs/guides/working-with-konfig/structure",title:"Konfig Structure",description:"This article mainly explains the directory and code structure of the Konfig repository.",source:"@site/versioned_docs/version-0.5.5/user_docs/guides/working-with-konfig/2-structure.md",sourceDirName:"user_docs/guides/working-with-konfig",slug:"/user_docs/guides/working-with-konfig/structure",permalink:"/docs/0.5.5/user_docs/guides/working-with-konfig/structure",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.5/user_docs/guides/working-with-konfig/2-structure.md",tags:[],version:"0.5.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1701933583,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:2,frontMatter:{id:"structure",sidebar_label:"Structure"},sidebar:"user_docs",previous:{title:"Overview",permalink:"/docs/0.5.5/user_docs/guides/working-with-konfig/overview"},next:{title:"Quick Start",permalink:"/docs/0.5.5/user_docs/guides/working-with-konfig/guide"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Core Model",id:"core-model",level:2},{value:"Project and Stack",id:"project-and-stack",level:2},{value:"Project",id:"project",level:3},{value:"Stack",id:"stack",level:3},{value:"Relationship between Project and Stack",id:"relationship-between-project-and-stack",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"konfig-structure"},"Konfig Structure"),(0,o.kt)("p",null,"This article mainly explains the directory and code structure of the Konfig repository."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 .github             # CI Scripts\n\u251c\u2500\u2500 Makefile            # Building and testing scripts\n\u251c\u2500\u2500 README.md           # Documents\n\u251c\u2500\u2500 appops              # Application configuration. This folder is used to place KCL operation and maintenance configuration of all applications\n\u2502   \u251c\u2500\u2500 clickhouse-operator\n\u2502   \u251c\u2500\u2500 code-city\n\u2502   \u251c\u2500\u2500 guestbook\n\u2502   \u251c\u2500\u2500 http-echo\n\u2502   \u2514\u2500\u2500 nginx-example\n\u251c\u2500\u2500 base                # Models\n\u2502   \u251c\u2500\u2500 examples        # Examples\n\u2502   \u2502   \u251c\u2500\u2500 monitoring  # Monitoring example\n\u2502   \u2502   \u251c\u2500\u2500 native      # Kubernetes resource example\n\u2502   \u2502   \u251c\u2500\u2500 provider    # Basic resource configuration example such as Terraform resource\n\u2502   \u2502   \u2514\u2500\u2500 server      # Server example.\n\u2502   \u2514\u2500\u2500 pkg\n\u2502       \u251c\u2500\u2500 kusion_kubernetes   # Kubernetes domain models\n\u2502       \u251c\u2500\u2500 kusion_models       # Core models\n\u2502       \u251c\u2500\u2500 kusion_prometheus   # Prometheus domain models\n\u2502       \u2514\u2500\u2500 kusion_provider     # Basic resource models such as Terraform resource\n\u2514\u2500\u2500 kcl.mod             # The KCL module declaration file\n")),(0,o.kt)("h2",{id:"core-model"},"Core Model"),(0,o.kt)("p",null,"The core model library is generally named ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion_models"),", mainly including front-end model, back-end model, renderer, etc. The directory structure is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 commons         # Common models\n\u251c\u2500\u2500 kube            # Cloud-native resource core models\n\u2502   \u251c\u2500\u2500 backend         # Back-end models\n\u2502   \u251c\u2500\u2500 frontend        # Front-end models\n\u2502   \u2502   \u251c\u2500\u2500 common          # Common front-end models\n\u2502   \u2502   \u251c\u2500\u2500 configmap       # ConfigMap\n\u2502   \u2502   \u251c\u2500\u2500 container       # Container\n\u2502   \u2502   \u251c\u2500\u2500 ingress         # Ingress\n\u2502   \u2502   \u251c\u2500\u2500 resource        # Resource\n\u2502   \u2502   \u251c\u2500\u2500 secret          # Secret\n\u2502   \u2502   \u251c\u2500\u2500 service         # Service\n\u2502   \u2502   \u251c\u2500\u2500 sidecar         # Sidecar\n\u2502   \u2502   \u251c\u2500\u2500 strategy        # strategy\n\u2502   \u2502   \u251c\u2500\u2500 volume          # Volume\n\u2502   \u2502   \u2514\u2500\u2500 server.k        # The `Server` model\n\u2502   \u251c\u2500\u2500 metadata        # Kubernetes metadata\n\u2502   \u251c\u2500\u2500 mixins          # Mixin\n\u2502   \u251c\u2500\u2500 render          # Front-to-back-end renderers.\n\u2502   \u251c\u2500\u2500 templates       # Data template\n\u2502   \u2514\u2500\u2500 utils\n\u2514\u2500\u2500 metadata        # Common metadata\n")),(0,o.kt)("h2",{id:"project-and-stack"},"Project and Stack"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31079).Z,width:"1204",height:"764"})),(0,o.kt)("p",null,"Project and Stack are logical isolation concepts used to organize the Konfig."),(0,o.kt)("h3",{id:"project"},"Project"),(0,o.kt)("p",null,"Any folder that contains the file ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," will be regarded as a Project, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," is used to describe the metadata of this Project like ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tenant"),". Projects must have clear business semantics and must belong to a tenant. Users can map an application or an operation scenario to a Project."),(0,o.kt)("h3",{id:"stack"},"Stack"),(0,o.kt)("p",null,"Like Project, any folder that contains the file ",(0,o.kt)("inlineCode",{parentName:"p"},"stack.yaml")," will be regarded as a Stack and ",(0,o.kt)("inlineCode",{parentName:"p"},"stack.yaml")," is used to describe the metadata of this Stack. Stack is a set of ",(0,o.kt)("inlineCode",{parentName:"p"},".k")," files that represents the smallest operation unit that can be configured and deployed individually. It tends to represent different stages in the CI/CD process, such as dev, gray, prod, etc."),(0,o.kt)("h3",{id:"relationship-between-project-and-stack"},"Relationship between Project and Stack"),(0,o.kt)("p",null,"A Project contains one or more Stacks, and a Stack must belong to and can only belong to one Project. Users can interpret the meaning of Project and Stack according to their own needs and flexibly organize the Konfig structure. We provide the following example as a best practice according to our experiences:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"appops/nginx-example\n\u251c\u2500\u2500 README.md       # Project readme\n\u251c\u2500\u2500 base            # common configurations for all stacks\n\u2502   \u2514\u2500\u2500 base.k\n\u251c\u2500\u2500 dev             # dev stack\n\u2502   \u251c\u2500\u2500 ci-test     # CI test configs\n\u2502   \u2502   \u251c\u2500\u2500 settings.yaml       # test data\n\u2502   \u2502   \u2514\u2500\u2500 stdout.golden.yaml  # expected test result\n\u2502   \u251c\u2500\u2500 kcl.yaml    # kcl config\n\u2502   \u251c\u2500\u2500 main.k\n\u2502   \u2514\u2500\u2500 stack.yaml  # Stack metadata\n\u2514\u2500\u2500 project.yaml    # Project metadata\n")),(0,o.kt)("p",null,"The Project represents an application and Stack represents different environments of this application, such as dev, pre, prod, etc. Common configurations can be stored in a ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," directory under this Project."))}p.isMDXComponent=!0},31079:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/project-stack-c0d1d681c3385e9726a5965227478f60.png"}}]);