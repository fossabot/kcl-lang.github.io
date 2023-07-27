"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7871],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const r={title:"Schema Definition",sidebar_position:3},o=void 0,l={unversionedId:"user_docs/guides/schema-definition",id:"version-0.4.6/user_docs/guides/schema-definition",title:"Schema Definition",description:"Introduction",source:"@site/versioned_docs/version-0.4.6/user_docs/guides/schema-definition.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/schema-definition",permalink:"/docs/0.4.6/user_docs/guides/schema-definition",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/schema-definition.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1690462472,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:3,frontMatter:{title:"Schema Definition",sidebar_position:3},sidebar:"user_docs",previous:{title:"Abstraction",permalink:"/docs/0.4.6/user_docs/guides/abstraction"},next:{title:"Data Integration",permalink:"/docs/0.4.6/user_docs/guides/data-integration"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Use KCL for Defining Structures and Constraints",id:"use-kcl-for-defining-structures-and-constraints",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Output Configuration",id:"2-output-configuration",level:3},{value:"Summary",id:"summary",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The core scenario of KCL is write configurations and constraints. and a core feature of KCL is ",(0,i.kt)("strong",{parentName:"p"},"modeling"),". The keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," in KCL can be used to define structures and constraints, such as attribute types, default values, range check, and various other constraints. In addition, structures defined with KCL schema can be used in turn to verify implementation, validate input (JSON, YAML and other structured data) or generate code (multilingual structures, OpenAPI, and so on)."),(0,i.kt)("h2",{id:"use-kcl-for-defining-structures-and-constraints"},"Use KCL for Defining Structures and Constraints"),(0,i.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,i.kt)("p",null,"Firstly, let's get the example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/definition\n")),(0,i.kt)("p",null,"We can run the following command to show the config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat main.k\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import .app_module  # A relative path import\n\napp: app_module.App {\n    domainType = "Standard"\n    containerPort = 80\n    volumes = [\n        {\n            mountPath = "/tmp"\n        }\n    ]\n    services = [\n        {\n            clusterIP = "None"\n            $type = "ClusterIP"\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"We put the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," model into a separate ",(0,i.kt)("inlineCode",{parentName:"p"},"app_module.k"),", then we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," keyword in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k")," for modular management, such as the following file structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 app_module.k\n\u2514\u2500\u2500 main.k\n")),(0,i.kt)("p",null,"The content of ",(0,i.kt)("inlineCode",{parentName:"p"},"app_module.k")," is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    domainType: "Standard" | "Customized" | "Global"\n    containerPort: int\n    volumes: [Volume]\n    services: [Service]\n\n    check:\n        1 <= containerPort <= 65535\n\nschema Service:\n    clusterIP: str\n    $type: str\n\n    check:\n        clusterIP == "None" if $type == "ClusterIP"\n\nschema Volume:\n    container: str = "*"  # The default value of `container` is "*"\n    mountPath: str\n\n    check:\n        mountPath not in ["/", "/boot", "/home", "dev", "/etc", "/root"]\n')),(0,i.kt)("p",null,"In the above file, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," keyword to define three models ",(0,i.kt)("inlineCode",{parentName:"p"},"App"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Volume"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," model has four attributes ",(0,i.kt)("inlineCode",{parentName:"p"},"domainType"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"containerPort"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"volumes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"services"),", where"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The type of ",(0,i.kt)("inlineCode",{parentName:"li"},"domainType"),' is a string literal union type, similar to an "enumeration", which means that the value of ',(0,i.kt)("inlineCode",{parentName:"li"},"domainType")," can only take one of ",(0,i.kt)("inlineCode",{parentName:"li"},'"Standard"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"Customized"')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"Global"'),"."),(0,i.kt)("li",{parentName:"ul"},"The type of ",(0,i.kt)("inlineCode",{parentName:"li"},"containerPort")," is an integer (",(0,i.kt)("inlineCode",{parentName:"li"},"int"),"). In addition, we use the ",(0,i.kt)("inlineCode",{parentName:"li"},"check")," keyword to define its value range from 1 to 65535."),(0,i.kt)("li",{parentName:"ul"},"The type of ",(0,i.kt)("inlineCode",{parentName:"li"},"services")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"Service")," schema list type, and we use ",(0,i.kt)("inlineCode",{parentName:"li"},"?")," to mark it as an optional attribute."),(0,i.kt)("li",{parentName:"ul"},"The type of ",(0,i.kt)("inlineCode",{parentName:"li"},"volumes")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"Volume")," schema list type, and we use ",(0,i.kt)("inlineCode",{parentName:"li"},"?")," to mark it as an optional attribute.")),(0,i.kt)("p",null,"We can get the YAML output of the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," instance by using the following command line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\napp:\n  domainType: Standard\n  containerPort: 80\n  volumes:\n  - container: '*'\n    mountPath: /tmp\n  services:\n  - clusterIP: None\n    type: ClusterIP\n")),(0,i.kt)("h3",{id:"2-output-configuration"},"2. Output Configuration"),(0,i.kt)("p",null,"We can still get the YAML output of the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," instance by using the following command line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\napp:\n  domainType: Standard\n  containerPort: 80\n  volumes:\n  - container: '*'\n    mountPath: /tmp\n  services:\n  - clusterIP: None\n    type: ClusterIP\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"KCL is a language for defining configurations and constraints, with a core feature of modeling using the schema keyword. This allows for the definition of structures with attributes, default values, range checks, and other constraints. Structures defined using KCL schema can be used to validate data, or generate code. The example demonstrates how to define models using schema, import them for modular management, and output the YAML configuration of an instance of the defined structure using the kcl command."))}d.isMDXComponent=!0}}]);