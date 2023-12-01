"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml encode and decode function",weight:300},l=void 0,i={unversionedId:"reference/model/yaml",id:"version-0.7.0/reference/model/yaml",title:"yaml",description:"yaml encode and decode function",source:"@site/versioned_docs/version-0.7.0/reference/model/yaml.md",sourceDirName:"reference/model",slug:"/reference/model/yaml",permalink:"/docs/reference/model/yaml",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/reference/model/yaml.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701417593,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml encode and decode function",weight:300},sidebar:"reference",previous:{title:"units",permalink:"/docs/reference/model/units"},next:{title:"Plugin System",permalink:"/docs/reference/plugin/"}},d={},c=[{value:"encode",id:"encode",level:2},{value:"encode_all",id:"encode_all",level:2},{value:"decode",id:"decode",level:2},{value:"decode_all",id:"decode_all",level:2},{value:"dump_to_file",id:"dump_to_file",level:2},{value:"validate",id:"validate",level:2}],p={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"encode"},"encode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"encode(\n    data: any,\n    sort_keys: bool = False,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> str\n")),(0,a.kt)("p",null,"Serialize a KCL object ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," to a YAML formatted str."),(0,a.kt)("h2",{id:"encode_all"},"encode_all"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"encode(\n    data: [any],\n    sort_keys: bool = False,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> str\n")),(0,a.kt)("p",null,"Serialize a sequence of KCL objects into a YAML stream str."),(0,a.kt)("h2",{id:"decode"},"decode"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"decode(value: str) -> any")),(0,a.kt)("p",null,"Deserialize ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," (a string instance containing a YAML document) to a KCL object."),(0,a.kt)("h2",{id:"decode_all"},"decode_all"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"decode_all(value: str) -> [any]")),(0,a.kt)("p",null,"Parse all YAML documents in a stream and produce corresponding KCL objects."),(0,a.kt)("h2",{id:"dump_to_file"},"dump_to_file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"dump_to_file(\n    data: any,\n    filename: str,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> None\n")),(0,a.kt)("p",null,"Serialize a KCL object ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," to a YAML formatted str and write it into the file ",(0,a.kt)("inlineCode",{parentName:"p"},"filename"),"."),(0,a.kt)("h2",{id:"validate"},"validate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"validate(value: str) -> bool\n")),(0,a.kt)("p",null,"Validate whether the given string is a valid YAML or YAML stream document."))}u.isMDXComponent=!0}}]);