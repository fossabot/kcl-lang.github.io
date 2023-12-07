"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[3820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(k,i(i({ref:t},l),{},{components:n})):o.createElement(k,i({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"Adopt From Kubernetes",sidebar_position:1},i=void 0,s={unversionedId:"user_docs/guides/working-with-k8s/adopt-from-kubernetes",id:"version-0.5.1/user_docs/guides/working-with-k8s/adopt-from-kubernetes",title:"Adopt From Kubernetes",description:"Introduction",source:"@site/versioned_docs/version-0.5.1/user_docs/guides/working-with-k8s/1-adopt-from-kubernetes.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/adopt-from-kubernetes",permalink:"/docs/0.5.1/user_docs/guides/working-with-k8s/adopt-from-kubernetes",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/user_docs/guides/working-with-k8s/1-adopt-from-kubernetes.md",tags:[],version:"0.5.1",lastUpdatedBy:"Peefy",lastUpdatedAt:1701933583,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:1,frontMatter:{title:"Adopt From Kubernetes",sidebar_position:1},sidebar:"user_docs",previous:{title:"Kubernetes",permalink:"/docs/0.5.1/user_docs/guides/working-with-k8s/"},next:{title:"Generate Kubernetes Manifests",permalink:"/docs/0.5.1/user_docs/guides/working-with-k8s/generate-k8s-manifests"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Kubernetes OpenAPI Spec",id:"1-kubernetes-openapi-spec",level:3},{value:"2. KCL OpenAPI Support",id:"2-kcl-openapi-support",level:3},{value:"3. Migrate From Kubernetes To KCL",id:"3-migrate-from-kubernetes-to-kcl",level:3},{value:"3.1 Write configurations based on the Kusion_Models package",id:"31-write-configurations-based-on-the-kusion_models-package",level:4},{value:"3.2 Build Your Custom Frontend Models",id:"32-build-your-custom-frontend-models",level:4},{value:"3.2.1 Get the k8s package",id:"321-get-the-k8s-package",level:5},{value:"3.2.2 Design Custom Frontend Models",id:"322-design-custom-frontend-models",level:5},{value:"3.2.3 Migrate The Configuration Data",id:"323-migrate-the-configuration-data",level:5},{value:"4. Migrate From Kubernetes CRD",id:"4-migrate-from-kubernetes-crd",level:3},{value:"Summary",id:"summary",level:2}],l={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"KCL provides many out of the box support for Kubernetes configuration. Through KCL tools, we can integrate Kubernetes Schema and configuration into KCL. This section will introduce how to use KCL to integrate Kubernetes."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("h3",{id:"1-kubernetes-openapi-spec"},"1. Kubernetes OpenAPI Spec"),(0,r.kt)("p",null,"Starting from Kubernetes 1.4, the alpha support for the OpenAPI specification (known as Swagger 2.0 before it was donated to the OpenAPI Initiative) was introduced, and the API descriptions follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md"},"OpenAPI Spec 2.0"),". And since Kubernetes 1.5, Kubernetes supports ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kube-openapi"},"directly extracting models from source code and then generating the OpenAPI spec file")," to automatically keep the specifications and documents up to date with the operation and models."),(0,r.kt)("p",null,"In addition, Kubernetes CRD uses ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation"},"OpenAPI V3.0 validation")," to describe a custom schema (in addition to the built-in attributes apiVersion, Kind, and metadata), that APIServer uses to validate the CR during the resource creation and update phases."),(0,r.kt)("h3",{id:"2-kcl-openapi-support"},"2. KCL OpenAPI Support"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-openapi")," tool supports extracting and generating KCL schemas from Kubernetes OpenAPI/CRD. the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/cli/openapi/spec"},"KCL OpenAPI Spec")," defines the mapping between the OpenAPI specification and the KCL language features. For a quick start with the tool, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/cli/openapi/"},"KCL OpenAPI tool")),(0,r.kt)("h3",{id:"3-migrate-from-kubernetes-to-kcl"},"3. Migrate From Kubernetes To KCL"),(0,r.kt)("h4",{id:"31-write-configurations-based-on-the-kusion_models-package"},"3.1 Write configurations based on the Kusion_Models package"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"We provide an out-of-the-box `kusion_models` package for you to quickly start. It contains a well-designed frontend model called [`Server schema`](https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k). You can declare the configurations by initializing the `Server schema`. For the description and usage of the schema and its attributes, please refer to the [Server schema documentation](https://kusionstack.io/docs/reference/model/kusion_models/kube/frontend/doc_server).")),(0,r.kt)("h4",{id:"32-build-your-custom-frontend-models"},"3.2 Build Your Custom Frontend Models"),(0,r.kt)("p",null,"The existing KCL Models may not meet your specific business requirements, then you can also design your custom frontend model package. You can design your custom models based on the pre-generated Kubernetes KCL models among all versions. And you can also develop your custom scripts to migrate your configuration data as what ",(0,r.kt)("inlineCode",{parentName:"p"},"kube2kcl")," tool does."),(0,r.kt)("h5",{id:"321-get-the-k8s-package"},"3.2.1 Get the k8s package"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/KusionStack/packages/container/package/k8s"},"Kubernetes KCL models")," among all versions are pre-generated, you get it by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm add k8s:<version>")," under your project. For detailed information about kpm usage, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kpm#quick-start"},"kpm quick start guide"),"."),(0,r.kt)("p",null,"Alternatively, if you may want to generate them yourself, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl-openapi/blob/main/docs/generate_from_k8s_spec.md"},"Generate KCL Packages from Kubernetes OpenAPI Specs"),"."),(0,r.kt)("h5",{id:"322-design-custom-frontend-models"},"3.2.2 Design Custom Frontend Models"),(0,r.kt)("p",null,"Since the Kubernetes built-in models are atomistic and kind of complex to beginners, we recommend taking the native model of Kubernetes as the backend output model and designing a batch of frontend models which could become a more abstract, friendlier and simpler interface to the user. You can refer to the design pattern in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k"},(0,r.kt)("inlineCode",{parentName:"a"},"Server Schema in the Konfig repo")),"."),(0,r.kt)("h5",{id:"323-migrate-the-configuration-data"},"3.2.3 Migrate The Configuration Data"),(0,r.kt)("p",null,"You can develop your custom scripts to migrate your configuration data automatically. KCL will later provide writing scaffolding and writing guidelines for this script."),(0,r.kt)("h3",{id:"4-migrate-from-kubernetes-crd"},"4. Migrate From Kubernetes CRD"),(0,r.kt)("p",null,"If you developed CRDs, you can generate the KCL version of the CRD schemas and declare CRs based on that."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generate KCL Schema from CRD"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kcl-openapi generate model --crd --skip-validation -f <your_crd.yaml>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Define CR based on CRDs in KCL"),(0,r.kt)("p",{parentName:"li"},"You can initialize the CRD schema to define a CR, or further, you can use the generated schema as a backend model and design a frontend interface for users to initialize. The practice is similar to what ",(0,r.kt)("inlineCode",{parentName:"p"},"KCL Models")," does on Kubernetes built-in models."))),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This section provides a quick start guide for using KCL with OpenAPI and Custom Resource Definitions (CRD). KCL also supports OpenAPI through the ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-openapi tool"),", which maps OpenAPI specifications to KCL language features."))}p.isMDXComponent=!0}}]);