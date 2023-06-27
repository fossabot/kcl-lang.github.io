"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11269],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return t?n.createElement(g,s(s({ref:a},m),{},{components:t})):n.createElement(g,s({ref:a},m))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84896:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const r={sidebar_position:1},s="Introduction",o={unversionedId:"user_docs/getting-started/intro",id:"user_docs/getting-started/intro",title:"Introduction",description:"What is KCL?",source:"@site/docs/user_docs/getting-started/intro.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/intro",permalink:"/docs/next/user_docs/getting-started/intro",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/docs/user_docs/getting-started/intro.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1687874331,formattedLastUpdatedAt:"Jun 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"Get Started",permalink:"/docs/next/user_docs/getting-started/"},next:{title:"Installation",permalink:"/docs/next/user_docs/getting-started/install"}},l={},c=[{value:"What is KCL?",id:"what-is-kcl",level:2},{value:"Why Use KCL?",id:"why-use-kcl",level:2},{value:"How to Choose?",id:"how-to-choose",level:2},{value:"vs. YAML/JSON",id:"vs-yamljson",level:3},{value:"vs. Jsonnet/GCL",id:"vs-jsonnetgcl",level:3},{value:"vs. HCL",id:"vs-hcl",level:3},{value:"vs. CUE",id:"vs-cue",level:3},{value:"vs. Dhall",id:"vs-dhall",level:3},{value:"vs. Nickel",id:"vs-nickel",level:3},{value:"vs. Starlark",id:"vs-starlark",level:3},{value:"vs. Kustomize",id:"vs-kustomize",level:3},{value:"vs. Helm",id:"vs-helm",level:3},{value:"vs. CDK",id:"vs-cdk",level:3},{value:"vs. OPA/Rego",id:"vs-oparego",level:3}],m={toc:c};function p(e){let{components:a,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"what-is-kcl"},"What is KCL?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kcl"},"Kusion Configuration Language (KCL)")," is an open-source, constraint-based record and functional language that enhances the writing of complex configurations, including those for cloud-native scenarios. With its advanced programming language technology and practices, KCL is dedicated to promoting better modularity, scalability, and stability for configurations. It enables simpler logic writing and offers ease of automation APIs and integration with homegrown systems."),(0,i.kt)("h2",{id:"why-use-kcl"},"Why Use KCL?"),(0,i.kt)("p",null,"KCL expects to solve the following problems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hide infrastructure and platform details by defining more appropriate ",(0,i.kt)("strong",{parentName:"li"},"API abstractions")," to reduce the burden of developers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mutate")," and ",(0,i.kt)("strong",{parentName:"li"},"validate")," existing config files or manifests."),(0,i.kt)("li",{parentName:"ul"},"Manage large-scale configuration data across teams without side effects through configuration language.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("strong",{parentName:"li"},"production level high-performance programming language")," to ",(0,i.kt)("strong",{parentName:"li"},"write code")," to improve the flexibility of configuration, such as conditional statements, loops, functions, package management and other features to improve the ability of configuration reuse."),(0,i.kt)("li",{parentName:"ul"},"Improve the ability of ",(0,i.kt)("strong",{parentName:"li"},"configuration semantic verification")," at the code level, such as optional/required fields, types, ranges, and other configuration checks."),(0,i.kt)("li",{parentName:"ul"},"Provide the ",(0,i.kt)("strong",{parentName:"li"},"ability to write, combine and abstract configuration blocks"),", such as structure definition, structure inheritance, constraint definition, etc.")))),(0,i.kt)("p",null,"You can use KCL to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Generate")," low-level static configuration data like JSON, YAML, etc."),(0,i.kt)("li",{parentName:"ul"},"Reduce boilerplate in configuration data with the ",(0,i.kt)("strong",{parentName:"li"},"schema modeling"),"."),(0,i.kt)("li",{parentName:"ul"},"Define transformers and constraints for configuration data and templates and ",(0,i.kt)("strong",{parentName:"li"},"mutate/validate")," them automatically."),(0,i.kt)("li",{parentName:"ul"},"Organize, simplify, unify and manage large configurations scalably without side effects."),(0,i.kt)("li",{parentName:"ul"},"Used as a platform engineering language to deliver modern app with ",(0,i.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"KusionStack"),".")),(0,i.kt)("p",null,"In addition to the language itself, KCL also provides many additional tools, such as formatting, testing, document, package management, to help users use, understand and check the configuration or policy they write. We can reduce the cost of configuration writing and sharing through IDE extensions such as VS Code, playground and package manage tools. In addition, through KCL Rust, Go, and Python multilingual SDKs, the configuration can be automatically managed and executed."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(55686).Z,width:"702",height:"419"})),(0,i.kt)("p",null,"Besides, KCL is a modern high-level domain language, which is a compiled, static and strongly typed language. It provides developers with the ability to write ",(0,i.kt)("strong",{parentName:"p"},"configuration (config)"),", ",(0,i.kt)("strong",{parentName:"p"},"modeling abstraction (schema)"),", ",(0,i.kt)("strong",{parentName:"p"},"logic (lambda)"),", and ",(0,i.kt)("strong",{parentName:"p"},"policies (rule)")," as the core elements through recording and functional language design."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(70159).Z,width:"427",height:"326"})),(0,i.kt)("p",null,"KCL tries to provide runtime-independent programmability and does not natively provide system functions such as threads and IO, but supports functions for cloud-native operation scenarios, and tries to provide stable, secure, low-noise, low-side effect, easy-to-automate and easy-to-govern programming support for solving domain problems."),(0,i.kt)("p",null,"In summary, KCL has the following characteristics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Easy-to-use"),": Originated from high-level languages \u200b\u200bsuch as Python and Golang, incorporating functional language features with low side effects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Well-designed"),": Independent Spec-driven syntax, semantics, runtime and system modules design."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Quick modeling"),": ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour#schema"},"Schema"),"-centric configuration types and modular abstraction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rich capabilities"),": Configuration with type, logic and policy based on ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/codelab/simple"},"Config"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#schema"},"Schema"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#function"},"Lambda"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#rule"},"Rule"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stability"),": Configuration stability built on ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#type-system"},"static type system"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#validation"},"constraints"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour#rule"},"rules"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scalability"),": High scalability through ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#-operators-1"},"automatic merge mechanism")," of isolated config blocks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fast automation"),": Gradient automation scheme of ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#kcl-cli-variable-override"},"CRUD APIs"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/xlang-api/overview"},"multilingual SDKs"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/plugin/overview"},"language plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"High performance"),": High compile time and runtime performance using Rust & C and ",(0,i.kt)("a",{parentName:"li",href:"https://llvm.org/"},"LLVM"),", and support compilation to native code and ",(0,i.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WASM"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API affinity"),": Native support API ecological specifications such as ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/tools/cli/openapi/"},"OpenAPI"),", Kubernetes CRD, Kubernetes YAML spec."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Development friendly"),": Friendly development experiences with rich ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/tools/cli/kcl/overview"},"language tools")," (Format, Lint, Test, Vet, Doc, etc.) and ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/tools/Ide/"},"IDE extensions"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Safety & maintainable"),": Domain-oriented, no system-level functions such as native threads and IO, low noise and security risk, easy maintenance and governance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rich multi-language API"),": Rich multilingual API: ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/xlang-api/go-api"},"Go"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/xlang-api/python-api"},"Python"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/xlang-api/java-api"},"Java")," and ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/xlang-api/rest-api"},"REST APIs")," meet different scenarios and application use prelude."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Kubernetes Integrations"),": External mutation and validation plugins including ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kustomize-kcl"},"Kustomize KCL Plugin"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/helm-kcl"},"Helm KCL Plugin"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kpt-kcl-sdk"},"KPT KCL SDK"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kubectl-kcl"},"Kubectl KCL Plugin")," to separate data and logic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Production-ready"),": Widely used in production practice of platform engineering and automation at Ant Group.")),(0,i.kt)("p",null,"Although KCL is not a general language, it has corresponding application scenarios. Developers can write ",(0,i.kt)("strong",{parentName:"p"},"config"),", ",(0,i.kt)("strong",{parentName:"p"},"schema"),", ",(0,i.kt)("strong",{parentName:"p"},"function")," and ",(0,i.kt)("strong",{parentName:"p"},"rule")," through KCL, where config is used to define data, schema is used to describe the model definition of data, rule is used to validate data, and schema and rule can also be combined to use models and constraints that fully describe data, In addition, we can also use the lambda pure function in KCL to organize data code, encapsulate common code, and call it directly when needed."),(0,i.kt)("p",null,"The configuration of attributes in KCL usually meets the simple pattern:"),(0,i.kt)("div",{className:"math math-display"},(0,i.kt)("span",{parentName:"div",className:"katex-display"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"k"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"T"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,i.kt)("mi",{parentName:"mrow"},"v")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k = (T) v")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v")))))),(0,i.kt)("p",null,"where ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"k")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," is the attribute name, ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"v")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"v")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v")))))," is the attributes value, and ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"T")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T")))))," is the type annotation. Since KCL has the ability of the type inference, ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"T")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T")))))," is usually omitted."),(0,i.kt)("p",null,"This is an example of generating kubernetes manifests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = name\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"We can use the KCL code to generate a Kubernetes YAML manifest."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n")),(0,i.kt)("h2",{id:"how-to-choose"},"How to Choose?"),(0,i.kt)("p",null,"Communities have been making significant efforts to improve their configuration technologies, which can be categorized into three groups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Low-level data format-based tools that utilize external tools for enhancing reuse and validation, specifically for templating, patching, and validation."),(0,i.kt)("li",{parentName:"ul"},"Domain-Specific Languages (DSLs) and Configuration Languages (CLs), which enhance language abilities."),(0,i.kt)("li",{parentName:"ul"},"General Purpose Language (GPL)-based solutions that utilize Cloud-Development Kit (CDK) or framework to define the configuration.")),(0,i.kt)("p",null,"To simplify, here are some recommended options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"YAML/JSON/Kustomize/Helm are recommended if you need to write structured key-value pairs, or use Kubernetes native tools."),(0,i.kt)("li",{parentName:"ul"},"HCL is recommended if you want to use programming language convenience to remove boilerplate with good human readability, or if you are already a Terraform user."),(0,i.kt)("li",{parentName:"ul"},"CUE is recommended if you want to use type system to improve stability and maintain scalable configurations."),(0,i.kt)("li",{parentName:"ul"},"KCL is recommended if you want types and modeling like a modern language, scalable configurations, in-house pure functions and rules, and production-ready performance and automation.")),(0,i.kt)("h3",{id:"vs-yamljson"},"vs. YAML/JSON"),(0,i.kt)("p",null,"YAML/JSON configurations are suitable for small-scale configuration scenarios. However, if you require frequent modifications in large-scale cloud-native configuration scenarios, KCL is more appropriate. The primary difference between the two is the abstraction of configuration data and deployment."),(0,i.kt)("p",null,"The advantages of using KCL for configuration are numerous. First, abstracting one layer for static data provides deployment flexibility, allowing various configuration environments, tenants, and runtime to have distinct requirements for static data. Additionally, different organizations may have different specifications and product requirements. By leveraging KCL, administrators can expose the most important and frequently modified configurations to users."),(0,i.kt)("h3",{id:"vs-jsonnetgcl"},"vs. Jsonnet/GCL"),(0,i.kt)("p",null,"GCL is a declarative configuration programming language implemented in Python, providing necessary language capabilities for template abstraction. However, the compiler itself is written in Python, and the language runs with interpretation, leading to poor performance for large template instances, such as the Kubernetes model."),(0,i.kt)("p",null,"On the other hand, Jsonnet is a data template language implemented in C++/Go, suitable for application and tool developers. It can generate configuration data and organize, simplify, and manage large configurations without any side effects."),(0,i.kt)("p",null,"Both Jsonnet and GCL are excellent at reducing boilerplate, using code to generate configuration, so engineers can write advanced GPL code instead of manually writing error-prone and difficult-to-understand server binary code. Despite reducing some of the complexities of GCL, Jsonnet largely falls into the same category. Both have runtime errors, insufficient type-checking and constraint capacity."),(0,i.kt)("h3",{id:"vs-hcl"},"vs. HCL"),(0,i.kt)("p",null,"HCL is a configuration language implemented in Go that is structured and inspired by the syntax of libucl and nginx configurations. It is designed to be both human and machine-friendly, primarily for use in devops tools, server configurations, and resource configurations as a ",(0,i.kt)("a",{parentName:"p",href:"https://www.terraform.io/language"},"Terraform language"),"."),(0,i.kt)("p",null,"The user interface of HCL is not readily apparent in the Terraform provider Schema definition and can be cumbersome when defining complex object and required/optional fields. Dynamic parameters are constrained by the condition field of the variable, and resource constraints must be defined either by the provider schema or through the use of Sentinel/Rego and other policy languages. The language itself may not be self-contained."),(0,i.kt)("h3",{id:"vs-cue"},"vs. CUE"),(0,i.kt)("p",null,"CUE can be utilized for modeling through structures without the need for inheritance or other features. This can lead to high abstraction as long as there are no conflicts with model definitions. However, since CUE performs all constraint checks at runtime, there may be performance bottlenecks in large-scale modeling scenarios. Despite this, CUE simplifies constraint writing through various syntax options, eliminating the need for generic types and enumerations. Additionally, configuration merging is supported but is completely idempotent, which may not be suitable for complex multi-tenant and multi-environment configuration scenarios. Writing complex loop and constraint scenarios can be challenging and cumbersome for accurately modifying configurations."),(0,i.kt)("p",null,"On the other hand, KCL conducts modeling through the schema and achieves high model abstraction through language-level engineering and some object-oriented features, such as single inheritance. KCL is a statically compiled language with low overhead for large-scale modeling scenarios. Additionally, KCL provides a richer declarative constraint syntax, making it easier to write. Compared to CUE, KCL offers more if guard combination constraints, all/any/map/filter, and other collection constraint writing methods, which simplify configuration field combination constraints."),(0,i.kt)("h3",{id:"vs-dhall"},"vs. Dhall"),(0,i.kt)("p",null,"Dhall is a functional, programmable configuration language that incorporates JSON, functions, types and imports. If you have experience with languages like Haskell, you may find Dhall familiar. KCL also offers similar functionality for programmability and abstraction, but has made greater advancements in areas such as modeling, constraint checking, automation and package management for sharing models. KCL's syntax and semantics are more aligned with object-oriented languages, making it more approachable than pure functional styles in some cases."),(0,i.kt)("h3",{id:"vs-nickel"},"vs. Nickel"),(0,i.kt)("p",null,"Nickel is the cheap configuration language. Its purpose is to automate the generation of static configuration files and it is in essence JSON with functions and types."),(0,i.kt)("p",null,"KCL and Nickel both have a similar gradual type system (static + dynamic), merge strategy, function and constraint definition. The difference is that KCL is a Python-like language, while Nickel is a JSON-like language. In addition, KCL provides the schema keyword to distinguish between configuration definitions and configuration data to avoid mixed use."),(0,i.kt)("h3",{id:"vs-starlark"},"vs. Starlark"),(0,i.kt)("p",null,"Starlark is the language of Bazel, which is a dialect of Python. It does not have types and recursion is forbidden."),(0,i.kt)("p",null,"KCL can also be regarded as a variant of Python to some extent, but it greatly enhances the design related to static typing and configuration extensibility, and is a compiled language, which is essentially different from Starlark."),(0,i.kt)("h3",{id:"vs-kustomize"},"vs. Kustomize"),(0,i.kt)("p",null,"The key feature of Kustomize is its ability to overlay files at a granular level. However, it faces challenges with multiple overlay chains as a specific attribute value may not be the final value, as it can be overridden by another value elsewhere. Retrieving the inheritance chain of Kustomize files can be less convenient than retrieving the inheritance chain of KCL code, particularly for complex scenarios where careful consideration of the specified configuration file overwrite order is necessary. Additionally, Kustomize does not address issues related to YAML configuration writing, constraint verification, model abstraction, and development, making it more suited for simpler configuration scenarios."),(0,i.kt)("p",null,"In contrast, KCL offers fine-grained configuration merge operations for each attribute in the code, with flexible merge strategy settings that are not limited to overall resources. KCL also allows for static analysis of configuration dependencies through import statements."),(0,i.kt)("h3",{id:"vs-helm"},"vs. Helm"),(0,i.kt)("p",null,"The idea behind Helm can be traced back to the package management system used in operating systems. It is a package management tool that relies on templated YAML files to execute and manage resources within packages."),(0,i.kt)("p",null,"KCL provides a greater range of capabilities than Helm, making it a viable alternative. Users who have already adopted Helm can still utilize KCL by packaging the stack compilation results in a Helm format or by using the Helm-KCL plugin to programmatically extend existing Helm charts."),(0,i.kt)("h3",{id:"vs-cdk"},"vs. CDK"),(0,i.kt)("p",null,"CDK's high-level language integrates well into application projects, effectively becoming part of the client runtime. In contrast, KCL decouples external configurations and policies written using KCL from the client runtime."),(0,i.kt)("p",null,"General-purpose languages can often be over-engineered, going beyond the requirements of the problem being solved. These languages can also present various security issues, such as problems with the ability boundary, such as accessing I/O, network, code infinite looping, and other security risks. In specialized fields, such as music, there are special notes used to communicate effectively, which cannot be expressed clearly in general-purpose languages."),(0,i.kt)("p",null,"Furthermore, general-purpose languages come in a variety of styles, which can create challenges in terms of unified maintenance, management, and automation. These languages are generally better suited to writing the client runtime, which is a continuation of the server runtime. They are not ideal for writing configurations that are independent of the runtime, as they are compiled into binaries and started from the process, making stability and scalability challenging to control. In contrast, configuration languages are often used to write data combined with simple logic, and they describe the expected final result, which is then consumed by the compiler or engine."),(0,i.kt)("h3",{id:"vs-oparego"},"vs. OPA/Rego"),(0,i.kt)("p",null,"While not originally intended as a data definition language, Rego, the language used for Open Policy Agent (OPA), can also address the issue of adding constraints from multiple sources."),(0,i.kt)("p",null,"Rego has its roots in logic programming and is based on Datalog, a restricted form of Prolog. In contrast, KCL is based on a static type structure. Typed-feature structures were developed to address the limitations of Prolog in encoding human languages. Using a Datalog variant for a constraint validation task may seem unusual. Datalog excels as a query language, but it can be cumbersome for constraint enforcement, in that values must be queried before applying constraints."),(0,i.kt)("p",null,"KCL's approach to constraint validation is more conducive to finding normalized and simplified representations of constraints, making it well-suited for creating structures generated from OpenAPI."))}p.isMDXComponent=!0},70159:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/kcl-concepts-ab0af9c71c218368b5f789b5c9092753.png"},55686:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/kcl-overview-4e6b6311b7b042e5b6d46c4877d0c2f9.png"}}]);