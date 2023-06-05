"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:4},i="Validation",l={unversionedId:"tools/cli/kcl/vet",id:"version-0.4.5/tools/cli/kcl/vet",title:"Validation",description:"Intro",source:"@site/versioned_docs/version-0.4.5/tools/cli/kcl/vet.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/vet",permalink:"/docs/0.4.5/tools/cli/kcl/vet",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/tools/cli/kcl/vet.md",tags:[],version:"0.4.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1685958977,formattedLastUpdatedAt:"Jun 5, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tools",previous:{title:"Lint",permalink:"/docs/0.4.5/tools/cli/kcl/lint"},next:{title:"Docgen",permalink:"/docs/0.4.5/tools/cli/kcl/docgen"}},c={},s=[{value:"Intro",id:"intro",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Specify the schema for validation",id:"specify-the-schema-for-validation",level:2},{value:"Args",id:"args",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validation"},"Validation"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"The KCL Validation tool supports basic configuration data verification capabilities. You can write a KCL schema to verify the type and value of the input JSON/YAML files."),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"There is a JSON format file ",(0,r.kt)("inlineCode",{parentName:"p"},"data.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Alice",\n    "age": "18",\n    "message": "This is Alice",\n    "data": {\n        "id": "1",\n        "value": "value1"\n    },\n    "labels": {\n        "key": "value"\n    },\n    "hc": [1, 2, 3]\n}\n')),(0,r.kt)("p",null,"Build a validated KCL file ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.k"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"schema User:\n    name: str\n    age: int\n    message?: str\n    data: Data\n    labels: {str:}\n    hc: [int]\n        \n    check:\n        age > 10\n\nschema Data:\n    id: int\n    value: str\n")),(0,r.kt)("p",null,"Execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kcl-vet data.json schema.k\nValidate succuss!\n")),(0,r.kt)("h2",{id:"specify-the-schema-for-validation"},"Specify the schema for validation"),(0,r.kt)("p",null,"When multiple schema definitions exist in the KCL file, by default, the KCL Validation tool will use the first schema to check. If you need to specify a schema for verification, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d|--schema")," parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$kcl-vet data.json schema.k -d User\n")),(0,r.kt)("h2",{id:"args"},"Args"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kcl-vet -h\nusage: kcl-vet [-h] [-d schema] [--format format] [-n attribute_name]\n               data_file kcl_file\n\npositional arguments:\n  data_file             Validation data file\n  kcl_file              KCL file\n\noptional arguments:\n  -h, --help            show this help message and exit\n  -d schema, --schema schema\n  --format format       Validation data file format, support YAML and JSON\n  -n attribute_name, --attribute-name attribute_name\n")))}d.isMDXComponent=!0}}]);