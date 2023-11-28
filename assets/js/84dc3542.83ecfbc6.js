"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,p=u["".concat(l,".").concat(m)]||u[m]||f[m]||r;return n?o.createElement(p,a(a({ref:t},d),{},{components:n})):o.createElement(p,a({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={id:"overview",sidebar_label:"Overview"},a="Konfig Overview",s={unversionedId:"user_docs/guides/working-with-konfig/overview",id:"version-0.4.5/user_docs/guides/working-with-konfig/overview",title:"Konfig Overview",description:"In KCL, it is recommended to uniformly manage all configurations and model libraries in the way of configuration library, that is, to store not only KCL definitions of the abstract model itself, but also various types of configurations, such as application operation and maintenance configuration, policy, etc. The configuration is recommended to be hosted in various VCS systems to facilitate configuration rollback and drift check. The best practice code of the configuration repository is Konfig, and the repository is hosted in Github\u3002",source:"@site/versioned_docs/version-0.4.5/user_docs/guides/working-with-konfig/1-overview.md",sourceDirName:"user_docs/guides/working-with-konfig",slug:"/user_docs/guides/working-with-konfig/overview",permalink:"/docs/0.4.5/user_docs/guides/working-with-konfig/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/user_docs/guides/working-with-konfig/1-overview.md",tags:[],version:"0.4.5",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:1,frontMatter:{id:"overview",sidebar_label:"Overview"},sidebar:"user_docs",previous:{title:"Differences between KCL and Kustomize",permalink:"/docs/0.4.5/user_docs/guides/working-with-k8s/vs_kustomize"},next:{title:"Structure",permalink:"/docs/0.4.5/user_docs/guides/working-with-konfig/structure"}},l={},c=[],d={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"konfig-overview"},"Konfig Overview"),(0,i.kt)("p",null,"In KCL, it is recommended to uniformly manage all configurations and model libraries in the way of ",(0,i.kt)("strong",{parentName:"p"},"configuration library"),", that is, to store not only KCL definitions of the abstract model itself, but also various types of configurations, such as application operation and maintenance configuration, policy, etc. The configuration is recommended to be hosted in various VCS systems to facilitate configuration rollback and drift check. The best practice code of the configuration repository is Konfig, and the repository is hosted in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Github"),"\u3002"),(0,i.kt)("p",null,"\u26a1 The Konfig repository mainly includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"KCL module declaration file (kcl.mod)"),(0,i.kt)("li",{parentName:"ul"},"KCL domain model libraries (Kubernetes, Prometheus, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Directories of various configurations (application operation and maintenance configuration, etc)"),(0,i.kt)("li",{parentName:"ul"},"Configuration build and test scripts (Makefile, Github CI file, etc.)")),(0,i.kt)("p",null,"The reason for using a unified warehouse to manage all KCL configuration codes is that different code packages have different R&D entities, which will lead to package management and version management problems. When the business configuration code and basic configuration code are stored in a unified warehouse, the version dependency management between codes will be relatively simple. By locating the directory and file of the unique code base, the configuration code can be managed uniformly for easy search, modification and maintenance."),(0,i.kt)("p",null,"The following is the architecture of Konfig:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15883).Z,width:"363",height:"356"})),(0,i.kt)("p",null,"Konfig provides users with an out-of-the-box and highly abstract configuration interface. The original simple starting point of the model library is to improve the efficiency and experience of Kubernetes YAML users. We hope to simplify the writing of user-side configuration code by abstracting and encapsulating the model with more complex code into a unified model. Konfig consists of the following parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Core model"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Front-end model"),': The front-end model is the "user interface", which contains all configurable attributes exposed to users on the platform side. Some repetitive and deducible configurations are omitted, and essential attributes are abstracted and exposed to users. It has user-friendly features, such as ',(0,i.kt)("inlineCode",{parentName:"li"},"server.k"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Back-end model"),': The back-end model is "model implementation", which is the model that makes the properties of the front-end model effective. It mainly contains the rendering logic of the front-end model instance. The back-end model can use KCL to write validation, logic judgment, code fragment reuse and other code to improve the reusability and robustness of the configuration code, and is not sensitive to users, such as ',(0,i.kt)("inlineCode",{parentName:"li"},"server_backend.k"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Domain model"),": It is a model that does not contain any implementation logic and abstraction. It is often generated by tool transformation and does not need to be modified. It corresponds to the real effective YAML attribute one by one. The domain model needs to be further abstracted and is generally not directly used by users. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"kusion_kubernetes")," is the domain model library of Kubernetes scenarios.")),(0,i.kt)("p",null,"In addition, the core model simplifies the configuration code of front-end users through two layers of abstraction: the front-end model and the back-end model. The domain model is automatically generated through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tools/cli/openapi/quick-start"},"KCL OpenAPI tool"),"."))}f.isMDXComponent=!0},15883:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/konfig-arch-d449927f5a1b7e08eaec85ac24ad4bc1.png"}}]);