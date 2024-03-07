"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[66224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},66820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Configuration",sidebar_position:1},i=void 0,s={unversionedId:"user_docs/guides/configuration",id:"version-0.5.6/user_docs/guides/configuration",title:"Configuration",description:"Introduction",source:"@site/versioned_docs/version-0.5.6/user_docs/guides/configuration.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/configuration",permalink:"/docs/0.5.6/user_docs/guides/configuration",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.6/user_docs/guides/configuration.md",tags:[],version:"0.5.6",lastUpdatedBy:"peefy",lastUpdatedAt:1709793003,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:1,frontMatter:{title:"Configuration",sidebar_position:1},sidebar:"user_docs",previous:{title:"User Guide",permalink:"/docs/0.5.6/user_docs/guides/"},next:{title:"Validation",permalink:"/docs/0.5.6/user_docs/guides/validation"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Use KCL for Configuration",id:"use-kcl-for-configuration",level:2},{value:"0. Prerequisite",id:"0-prerequisite",level:3},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Generate YAML using KCL",id:"2-generate-yaml-using-kcl",level:3},{value:"3. Configuration with Dynamic Parameters",id:"3-configuration-with-dynamic-parameters",level:3},{value:"Summary",id:"summary",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Configuration is a vital aspect of software systems that are constantly in flux due to evolving business requirements, infrastructure demands, and other factors. Often, changing these systems' behavior quickly can be challenging, especially when doing so requires a costly and time-consuming reconstruction and redeployment process. In such cases, making changes to the business code may not be sufficient. Fortunately, the configuration provides a low-overhead way to modify system functions. For instance, many developers write JSON or YAML files to configure their systems."),(0,r.kt)("p",null,"We can store the static configuration in JSON and YAML files as needed. Moreover, the configuration can also be stored in a high-level language that allows for more flexible configuration. This language can be coded, rendered, and statically configured. KCL is a configuration language that offers such functionality. Developers can write KCL code to generate JSON/YAML and other configurations."),(0,r.kt)("h2",{id:"use-kcl-for-configuration"},"Use KCL for Configuration"),(0,r.kt)("p",null,"KCL's core features are its modeling and constraint capabilities, and its basic functions revolve around these two key elements. Additionally, KCL follows a user-centric configuration concept when designing its basic functions. Configuration code has requirements for configuration data constraints, such as type constraints and required/optional constraints on configuration attributes, range constraints, and immutability constraints. These are also some of the core issues that KCL is committed to resolving."),(0,r.kt)("p",null,"Now that we have an understanding of KCL's capabilities, let's explore how to use it to generate configurations."),(0,r.kt)("h3",{id:"0-prerequisite"},"0. Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL"))),(0,r.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,r.kt)("p",null,"Firstly, let's get the example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/configuration\n")),(0,r.kt)("p",null,"We can run the following command to show the config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat nginx.k\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema Nginx:\n    """Schema for Nginx configuration files"""\n    http: Http\n\nschema Http:\n    server: Server\n\nschema Server:\n    listen: int | str    # The attribute `listen` can be int type or a string type.\n    location?: Location  # Optional, but must be non-empty when specified\n\nschema Location:\n    root: str\n    index: str\n\nnginx = Nginx {\n    http.server = {\n        listen = 80\n        location = {\n            root = "/var/www/html"\n            index = "index.html"\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"2-generate-yaml-using-kcl"},"2. Generate YAML using KCL"),(0,r.kt)("p",null,"Run the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl nginx.k\n")),(0,r.kt)("p",null,"We can get the output YAML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  http:\n    server:\n      listen: 80\n      location:\n        root: /var/www/html\n        index: index.html\n")),(0,r.kt)("h3",{id:"3-configuration-with-dynamic-parameters"},"3. Configuration with Dynamic Parameters"),(0,r.kt)("p",null,"Besides, we can dynamically receive external parameters through the KCL builtin function ",(0,r.kt)("inlineCode",{parentName:"p"},"option"),". For example, for the following KCL file (db.k), we can use the KCL command line ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," flag to receive an external dynamic parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'env: str = option("env") or "dev"  # The attribute `env` has a default value "den"\ndatabase: str = option("database")\nhosts = {\n    dev = "postgres.dev"\n    stage = "postgres.stage"\n    prod = "postgres.prod"\n}\ndbConfig = {\n    host = hosts[env]\n    database = database\n    port = "2023"\n    conn = "postgres://${host}:${port}/${database}"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Use the `-D` flag to input external parameters.\nkcl db.k -D database="foo"\n')),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'env: dev\ndatabase: foo\nhosts:\n  dev: postgres.dev\n  stage: postgres.stage\n  prod: postgres.prod\ndbConfig:\n  host: postgres.dev\n  database: foo\n  port: "2023"\n  conn: "postgres://postgres.dev:2023/foo"\n')),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"By using KCL, we can generate low-level data configurations. For different situations, we set dynamic parameters through the ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," flag to meet the scene requirements. For more KCL features, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/lang/tour"},"here"),"."))}p.isMDXComponent=!0}}]);