"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:3},o="Quick Start",l={unversionedId:"user_docs/getting-started/kcl-quick-start",id:"version-0.5.0/user_docs/getting-started/kcl-quick-start",title:"Quick Start",description:"KCL is a cloud-native domain configuration and policy language. At the beginning of its design, KCL was inspired by Python3, and at the same time absorbed the conceptual design of declarative and OOP programming paradigms. In this section we will quickly demonstrate the basic features of the KCL language.",source:"@site/versioned_docs/version-0.5.0/user_docs/getting-started/kcl-quick-start.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/kcl-quick-start",permalink:"/docs/user_docs/getting-started/kcl-quick-start",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/user_docs/getting-started/kcl-quick-start.md",tags:[],version:"0.5.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1688815917,formattedLastUpdatedAt:"Jul 8, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"Installation",permalink:"/docs/user_docs/getting-started/install"},next:{title:"User Guide",permalink:"/docs/user_docs/guides/"}},s={},p=[{value:"1. Hello KCL",id:"1-hello-kcl",level:2},{value:"2. A little more complicated configuration",id:"2-a-little-more-complicated-configuration",level:2},{value:"3. Define the structure of the configuration using KCL schema",id:"3-define-the-structure-of-the-configuration-using-kcl-schema",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"KCL is a cloud-native domain configuration and policy language. At the beginning of its design, KCL was inspired by Python3, and at the same time absorbed the conceptual design of declarative and OOP programming paradigms. In this section we will quickly demonstrate the basic features of the KCL language."),(0,i.kt)("h2",{id:"1-hello-kcl"},"1. Hello KCL"),(0,i.kt)("p",null,"The best way to learn a new language is to write a few small programs, and the same goes for configuring languages. We can write KCL programs just like writing configuration."),(0,i.kt)("p",null,"Here is a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'hello = "KCL"\n')),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," attribute to the ",(0,i.kt)("inlineCode",{parentName:"p"},'"KCL"')," string. Then save the code to the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.k")," file."),(0,i.kt)("p",null,"How to execute this program depends on the specific development environment, we first assume that the local macOS or Linux system has installed the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl")," command (or enter the ",(0,i.kt)("strong",{parentName:"p"},"Docker")," environment test by ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run --rm -it kusionstack/kclvm"),") and then run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl hello.k\nhello: KCL\n")),(0,i.kt)("p",null,"The effect of command line execution is shown as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(44001).Z,width:"1944",height:"888"})),(0,i.kt)("p",null,"The output is configuration data in YAML format. Although this program is simple, we can verify the basic usage of the development environment and the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl")," command line by executing the KCL configuration program to the output."),(0,i.kt)("h2",{id:"2-a-little-more-complicated-configuration"},"2. A little more complicated configuration"),(0,i.kt)("p",null,"In addition to the common key-value pairs, common configuration data also has nested dictionary and list types, and the value basic type includes boolean and numeric types in addition to strings. Here's a slightly more complex ",(0,i.kt)("inlineCode",{parentName:"p"},"server.k")," configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# This is a KCL document\n\ntitle = "KCL Example"\n\nowner = {\n    name = "The KCL Authors"\n    data = "2020-01-02T03:04:05"\n}\n\ndatabase = {\n    enabled = True\n    ports = [8000, 8001, 8002]\n    data = [["delta", "phi"], [3.14]]\n    temp_targets = {cpu = 79.5, case = 72.0}\n}\n\nservers = [\n    {ip = "10.0.0.1", role = "frontend"}\n    {ip = "10.0.0.2", role = "backend"}\n]\n')),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," begins with a line comment. The value of ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," is a dictionary. The value of the dictionary contains the content in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),". The key-value inside the dictionary is similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},'hello = "KCL"')," example. ",(0,i.kt)("inlineCode",{parentName:"p"},"database")," is another dictionary in which the value of the dictionary attribute appears boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", list ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," and dictionary ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),", in which the value of the numeric type also appears in the list and dictionary. The ",(0,i.kt)("inlineCode",{parentName:"p"},"servers")," attribute is a list with dictionaries nested inside the list (dictionaries and lists, as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," that will be discussed later, can be nested within each other)."),(0,i.kt)("p",null,"The YAML output of this configuration is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kcl server.k \ntitle: KCL Example\nowner:\n  name: The KCL Authors\n  data: '2020-01-02T03:04:05'\ndatabase:\n  enabled: true\n  ports:\n  - 8000\n  - 8001\n  - 8002\n  data:\n  - - delta\n    - phi\n  - - 3.14\n  temp_targets:\n    cpu: 79.5\n    case: 72.0\nservers:\n- ip: 10.0.0.1\n  role: frontend\n- ip: 10.0.0.2\n  role: backend\n")),(0,i.kt)("h2",{id:"3-define-the-structure-of-the-configuration-using-kcl-schema"},"3. Define the structure of the configuration using KCL schema"),(0,i.kt)("p",null,"The KCL provides abstract support for attributes with a fixed attribute structure and default value behavior through the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," syntax."),(0,i.kt)("p",null,"For example, the configuration of ",(0,i.kt)("inlineCode",{parentName:"p"},"database")," in the above example is generally the default value. We can define a structure for the default configuration of the database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema DatabaseConfig:\n    enabled: bool = True\n    ports: [int] = [8000, 8001, 8002]\n    data: [[str|float]] = [["delta", "phi"], [3.14]]\n    temp_targets: {str: float} = {cpu = 79.5, case = 72.0}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," is a boolean type; ",(0,i.kt)("inlineCode",{parentName:"p"},"ports")," is an integer list type; ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," is a list of lists, and the inner list elements are strings or floats; ",(0,i.kt)("inlineCode",{parentName:"p"},"temp_targets")," is a dictionary type, and the attribute value of the dictionary is floating point type. And each attribute of ",(0,i.kt)("inlineCode",{parentName:"p"},"DatabaseConfig")," defines a default value."),(0,i.kt)("p",null,"Then pass ",(0,i.kt)("inlineCode",{parentName:"p"},"database = DatabaseConfig {}")," to generate a structure with the same attributes as the default values. We can also modify the default value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"database = DatabaseConfig {\n    ports = [2020, 2021]\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"schema DatabaseConfig")," not only provides default values for attributes, but also adds type information to attributes. Therefore, if we accidentally writes the wrong attribute value type, KCL will give a friendly error prompt, such as the following example where ",(0,i.kt)("inlineCode",{parentName:"p"},"ports")," is wrongly written as a floating point type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"database = DatabaseConfig {\n    ports = [1.2, 1.3]\n}\n")),(0,i.kt)("p",null,"When executed, an error similar to the following will be generated (the displayed file path depends on the local environment):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl server.k \nerror[E2G22]: TypeError\n --\x3e /path/to/server.k:8:5\n  |\n8 |     ports = [1.2, 1.3]\n  |     ^ expected [int], got [float(1.2)|float(1.3)]\n  |\n\n --\x3e /path/to/server.k:3:5\n  |\n3 |     ports: [int] = [8000, 8001, 8002]\n  |     ^ variable is defined here, its type is [int], but got [float(1.2)|float(1.3)]\n  |\n")),(0,i.kt)("p",null,"Similarly we can encapsulate the attributes of the ",(0,i.kt)("inlineCode",{parentName:"p"},"servers")," section with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema ServerConfig:\n    ip: str\n    role: "frontend" | "backend"\n\nservers = [\n    ServerConfig {ip = "10.0.0.1", role = "frontend"}\n    ServerConfig {ip = "10.0.0.2", role = "backend"}\n]\n')),(0,i.kt)("p",null,"The attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerConfig")," is a string type, and no default value is given. We must manually add the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," attribute when generating the ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerConfig")," type attribute, otherwise the KCL will report a missing required attribute error. The ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," attribute is a ",(0,i.kt)("inlineCode",{parentName:"p"},'"frontend" | "backend"')," enumerated string type."),(0,i.kt)("p",null,"In addition, ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," can also combine ",(0,i.kt)("inlineCode",{parentName:"p"},"check"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mixin"),", optional attributes, inheritance and extension modules to achieve more complex configuration and policy data abstraction, full language details can be found at ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/lang/tour"},"here"),"."))}d.isMDXComponent=!0},44001:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hello-86644801c77c9a1ca5662da7e16dd1de.gif"}}]);