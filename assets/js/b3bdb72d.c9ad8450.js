"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[46076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:4},o="Validation",i={unversionedId:"tools/cli/kcl/vet",id:"version-0.5.1/tools/cli/kcl/vet",title:"Validation",description:"Intro",source:"@site/versioned_docs/version-0.5.1/tools/cli/kcl/vet.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/vet",permalink:"/docs/0.5.1/tools/cli/kcl/vet",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/tools/cli/kcl/vet.md",tags:[],version:"0.5.1",lastUpdatedBy:"Peefy",lastUpdatedAt:1708611628,formattedLastUpdatedAt:"Feb 22, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tools",previous:{title:"Lint",permalink:"/docs/0.5.1/tools/cli/kcl/lint"},next:{title:"Docgen",permalink:"/docs/0.5.1/tools/cli/kcl/docgen"}},c={},s=[{value:"Intro",id:"intro",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Specify the schema for validation",id:"specify-the-schema-for-validation",level:2},{value:"Args",id:"args",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validation"},"Validation"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"The KCL Validation tool supports basic configuration data verification capabilities. You can write a KCL schema to verify the type and value of the input JSON/YAML files."),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"There is a JSON format file ",(0,r.kt)("inlineCode",{parentName:"p"},"data.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Alice",\n  "age": 18,\n  "message": "This is Alice",\n  "data": {\n    "id": 1,\n    "value": "value1"\n  },\n  "labels": {\n    "key": "value"\n  },\n  "hc": [1, 2, 3]\n}\n')),(0,r.kt)("p",null,"Build a validated KCL file ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.k"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"schema User:\n    name: str\n    age: int\n    message?: str\n    data: Data\n    labels: {str:}\n    hc: [int]\n\n    check:\n        age > 10\n\nschema Data:\n    id: int\n    value: str\n")),(0,r.kt)("p",null,"Execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-vet data.json schema.k\n")),(0,r.kt)("h2",{id:"specify-the-schema-for-validation"},"Specify the schema for validation"),(0,r.kt)("p",null,"When multiple schema definitions exist in the KCL file, by default, the KCL Validation tool will use the first schema to check. If you need to specify a schema for verification, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d|--schema")," parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-vet data.json schema.k -d User\n")),(0,r.kt)("h2",{id:"args"},"Args"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl-vet -h\nUSAGE:\n    kcl-vet [OPTIONS] [ARGS]\n\nARGS:\n    <data_file>    Validation data file\n    <kcl_file>     KCL file\n\nOPTIONS:\n    -d, --schema <schema>\n            Iterate through subdirectories recursively\n\n        --format <format>\n            Validation data file format, support YAML and JSON, default is JSON\n\n    -h, --help\n            Print help information\n\n    -n, --attribute_name <attribute_name>\n            The attribute name for the data loading\n")))}u.isMDXComponent=!0}}]);