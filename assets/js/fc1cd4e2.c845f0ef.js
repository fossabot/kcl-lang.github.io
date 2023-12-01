"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={title:"Validation",sidebar_position:2},o=void 0,l={unversionedId:"user_docs/guides/validation",id:"version-0.4.5/user_docs/guides/validation",title:"Validation",description:"Use KCL to Validate the\xa0Data",source:"@site/versioned_docs/version-0.4.5/user_docs/guides/validation.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/validation",permalink:"/docs/0.4.5/user_docs/guides/validation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/user_docs/guides/validation.md",tags:[],version:"0.4.5",lastUpdatedBy:"peefy",lastUpdatedAt:1701417593,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:2,frontMatter:{title:"Validation",sidebar_position:2},sidebar:"user_docs",previous:{title:"Configuration",permalink:"/docs/0.4.5/user_docs/guides/configuration"},next:{title:"Schema Definition",permalink:"/docs/0.4.5/user_docs/guides/schema-definition"}},s={},d=[{value:"Use KCL to Validate the\xa0Data",id:"use-kcl-to-validate-thedata",level:2},{value:"Introduction",id:"introduction",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Future Plan",id:"future-plan",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"use-kcl-to-validate-thedata"},"Use KCL to Validate the\xa0Data"),(0,i.kt)("p",null,"In addition to using KCL code to generate configuration formats such as JSON/YAML, KCL also supports format validation of JSON/YAML data. As a configuration language, KCL covers almost all features of ",(0,i.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI"),"."),(0,i.kt)("p",null,"In KCL, a structure definition can be used to validate configuration data. At the same time, it supports user-defined constraint rules through the check block, and writes validation expressions in the schema to check and validate the attributes defined by the schema. It is very clear and simple to check whether the input JSON/YAML satisfies the corresponding schema structure definition and constraints."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In the schema, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"check")," keyword to write the validation rules of every schema attribute. Each line in the check block corresponds to a conditional expression. When the condition is satisfied, the validation is successful. The conditional expression can be followed by ",(0,i.kt)("inlineCode",{parentName:"p"},', "check error message"')," to indicate the message to be displayed when the check fails. Here is an example of a schema with constraint expressions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nschema Sample:\n    foo: str  # Required, cannot be None/Undefined, and the type must be str\n    bar: int  # Required, cannot be None/Undefined, and the type must be int\n    fooList: [int]  # Required, cannot be None/Undefined, and the type must be int list\n    color: "Red" | "Yellow" | "Blue"  # Required, literal union type, and must be one of "Red", "Yellow", "Blue".\n    id?: int  # Optional, can be None/Undefined, the type must be int\n\n    check:\n        0 <= bar < 100  # bar must be greater than or equal to 0 and less than 100\n        0 < len(fooList) < 100  # fooList cannot be None/Undefined, and the length must be greater than 0 and less than 100\n        regex.match(foo, "^The.*Foo$")  # regular expression matching\n        bar in range(100)  # bar can only range from 1 to 99\n        bar in [2, 4, 6, 8]  # bar can only take 2, 4, 6, 8\n        bar % 2 == 0  # bar must be a multiple of 2\n        all foo in fooList {\n            foo > 1\n        }  # All elements in fooList must be greater than 1\n        any foo in fooList {\n            foo > 10\n        }  # At least one element in fooList must be greater than 10\n        abs(id) > 10 if id  # check expression with if guard, when id is not empty, the absolute value of id must be greater than 10\n')),(0,i.kt)("p",null,"To sum up, the validation kinds supported in KCL schema are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kind"),(0,i.kt)("th",{parentName:"tr",align:null},"Method"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Range"),(0,i.kt)("td",{parentName:"tr",align:null},"Using comparison operators such as ",(0,i.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"td"},">"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Regex"),(0,i.kt)("td",{parentName:"tr",align:null},"Using methods such as ",(0,i.kt)("inlineCode",{parentName:"td"},"match")," from the ",(0,i.kt)("inlineCode",{parentName:"td"},"regex")," system module")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Length"),(0,i.kt)("td",{parentName:"tr",align:null},"Using the ",(0,i.kt)("inlineCode",{parentName:"td"},"len")," built-in function to get the length of a variable of type ",(0,i.kt)("inlineCode",{parentName:"td"},"list/dict/str"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enum"),(0,i.kt)("td",{parentName:"tr",align:null},"Using literal union types")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Optional/Required"),(0,i.kt)("td",{parentName:"tr",align:null},"Using optional/required attributes of schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},"Using the check if conditional expression")))),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"There is a JSON format file ",(0,i.kt)("inlineCode",{parentName:"p"},"data.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Alice",\n  "age": "18",\n  "message": "This is Alice",\n  "data": {\n    "id": "1",\n    "value": "value1"\n  },\n  "labels": {\n    "key": "value"\n  },\n  "hc": [1, 2, 3]\n}\n')),(0,i.kt)("p",null,"Build a validated KCL file ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"schema User:\n    name: str\n    age: int\n    message?: str\n    data: Data\n    labels: {str:}\n    hc: [int]\n\n    check:\n        age > 10\n\nschema Data:\n    id: int\n    value: str\n")),(0,i.kt)("p",null,"Execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kcl-vet data.json schema.k\nValidate succuss!\n")),(0,i.kt)("p",null,"Based on this, KCL provides the corresponding ",(0,i.kt)("a",{parentName:"p",href:"/docs/tools/cli/kcl/vet"},"Validation Tool")," to validate JSON/YAML data directly. In addition, based on this capability, we can build a K-V validation visualization product."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5805).Z,width:"460",height:"388"})),(0,i.kt)("h2",{id:"future-plan"},"Future Plan"),(0,i.kt)("p",null,'The improvement of KCL validation capabilities will gradually focus on the "static" aspect, that is, at compile time, combined with the ability of formal validation, it can directly analyze whether the data meets the constraints, whether the constraints conflict with each other, etc., and can be exposed in real-time through the IDE.'),(0,i.kt)("p",null,"We also expect that KCL models and constraints can be managed as a package (this package has only KCL files). For example, the Kubernetes models and constraints can be used out of the box. Users can generate configurations or verify existing configurations, and can simply extend the models and constraints users want through KCL inheritance."))}p.isMDXComponent=!0},5805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-kcl-validation-ui-4a33642df3b7e92c4a152a12f9f8bc5f.png"}}]);