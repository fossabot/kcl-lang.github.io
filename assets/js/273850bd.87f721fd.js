"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28440],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={title:"Validation",sidebar_position:2},o=void 0,l={unversionedId:"user_docs/guides/validation",id:"version-0.5.2/user_docs/guides/validation",title:"Validation",description:"Introduction",source:"@site/versioned_docs/version-0.5.2/user_docs/guides/validation.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/validation",permalink:"/docs/0.5.2/user_docs/guides/validation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/user_docs/guides/validation.md",tags:[],version:"0.5.2",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:2,frontMatter:{title:"Validation",sidebar_position:2},sidebar:"user_docs",previous:{title:"Configuration",permalink:"/docs/0.5.2/user_docs/guides/configuration"},next:{title:"Abstraction",permalink:"/docs/0.5.2/user_docs/guides/abstraction"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Use KCL for Validation",id:"use-kcl-for-validation",level:2},{value:"0. Prerequisite",id:"0-prerequisite",level:3},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Validate the Data",id:"2-validate-the-data",level:3},{value:"Summary",id:"summary",level:2},{value:"Further Information",id:"further-information",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Validation is the process of verifying that data is accurate, reliable, and meets certain requirements or constraints. This includes checking the data for completeness, consistency, accuracy, and relevance. Data validation is performed to ensure that the data is fit for its intended purpose and that it can be used effectively and efficiently."),(0,i.kt)("p",null,"We can use KCL and its vet tools to manually or automatically perform data validation to ensure data consistency."),(0,i.kt)("h2",{id:"use-kcl-for-validation"},"Use KCL for Validation"),(0,i.kt)("p",null,"In addition to using KCL code to generate configuration formats such as JSON/YAML, KCL also supports format validation of JSON/YAML data. As a configuration language, KCL covers almost all features of ",(0,i.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI"),"."),(0,i.kt)("p",null,"In KCL, a structure definition can be used to validate configuration data. At the same time, it supports user-defined constraint rules through the check block, and writes validation expressions in the schema to check and validate the attributes defined by the schema. It is very clear and simple to check whether the input JSON/YAML satisfies the corresponding schema structure definition and constraints."),(0,i.kt)("h3",{id:"0-prerequisite"},"0. Prerequisite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL"))),(0,i.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/validation\n")),(0,i.kt)("p",null,"We can run the following command to show the config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat schema.k\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema User:\n    name: str\n    age: int\n    message?: str\n    data: Data\n    labels: {str:}\n    hc: [int]\n\n    check:\n        age > 10, "age must > 10"\n\nschema Data:\n    id: int\n    value: str\n')),(0,i.kt)("p",null,"In the schema, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"check")," keyword to write the validation rules of every schema attribute. Each line in the check block corresponds to a conditional expression. When the condition is satisfied, the validation is successful. The conditional expression can be followed by ",(0,i.kt)("inlineCode",{parentName:"p"},', "check error message"')," to indicate the message to be displayed when the check fails."),(0,i.kt)("p",null,"To sum up, the validation kinds supported in KCL schema are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kind"),(0,i.kt)("th",{parentName:"tr",align:null},"Method"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Range"),(0,i.kt)("td",{parentName:"tr",align:null},"Using comparison operators such as ",(0,i.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"td"},">"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Regex"),(0,i.kt)("td",{parentName:"tr",align:null},"Using methods such as ",(0,i.kt)("inlineCode",{parentName:"td"},"match")," from the ",(0,i.kt)("inlineCode",{parentName:"td"},"regex")," system module")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Length"),(0,i.kt)("td",{parentName:"tr",align:null},"Using the ",(0,i.kt)("inlineCode",{parentName:"td"},"len")," built-in function to get the length of a variable of type ",(0,i.kt)("inlineCode",{parentName:"td"},"list/dict/str"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enum"),(0,i.kt)("td",{parentName:"tr",align:null},"Using literal union types")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Optional/Required"),(0,i.kt)("td",{parentName:"tr",align:null},"Using optional/required attributes of schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},"Using the check if conditional expression")))),(0,i.kt)("h3",{id:"2-validate-the-data"},"2. Validate the Data"),(0,i.kt)("p",null,"There is a JSON format file ",(0,i.kt)("inlineCode",{parentName:"p"},"data.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Alice",\n  "age": 18,\n  "message": "This is Alice",\n  "data": {\n    "id": 1,\n    "value": "value1"\n  },\n  "labels": {\n    "key": "value"\n  },\n  "hc": [1, 2, 3]\n}\n')),(0,i.kt)("p",null,"Execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl-vet data.json schema.k\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"KCL is a configuration language that supports data validation through its structure definition and user-defined constraint rules. Validation kinds supported in KCL schema include range, regex, length, enum, optional/required, and condition. To validate data, a schema is defined with validation rules written using the check keyword, and the data is validated using the validation tool or a visualization product built on top of it."),(0,i.kt)("h2",{id:"further-information"},"Further Information"),(0,i.kt)("p",null,'The improvement of KCL validation capabilities will gradually focus on the "static" aspect, that is, at compile time, combined with the ability of formal validation, it can directly analyze whether the data meets the constraints, whether the constraints conflict with each other, etc., and can be exposed in real-time through the IDE.'),(0,i.kt)("p",null,"We also expect that KCL models and constraints can be managed as a package (this package has only KCL files). For example, the Kubernetes models and constraints can be used out of the box. Users can generate configurations or verify existing configurations, and can simply extend the models and constraints users want through KCL inheritance."))}p.isMDXComponent=!0}}]);