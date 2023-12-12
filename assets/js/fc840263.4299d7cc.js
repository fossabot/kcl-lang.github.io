"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[52716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"json",linkTitle:"json",type:"docs",description:"json system module",weight:100},l=void 0,i={unversionedId:"reference/model/json",id:"version-0.7.0/reference/model/json",title:"json",description:"json system module",source:"@site/versioned_docs/version-0.7.0/reference/model/json.md",sourceDirName:"reference/model",slug:"/reference/model/json",permalink:"/docs/reference/model/json",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/reference/model/json.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1702363140,formattedLastUpdatedAt:"Dec 12, 2023",frontMatter:{title:"json",linkTitle:"json",type:"docs",description:"json system module",weight:100},sidebar:"reference",previous:{title:"datetime",permalink:"/docs/reference/model/datetime"},next:{title:"manifests",permalink:"/docs/reference/model/manifests"}},c={},s=[{value:"encode",id:"encode",level:2},{value:"decode",id:"decode",level:2},{value:"dump_to_file",id:"dump_to_file",level:2},{value:"validate",id:"validate",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"encode"},"encode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"encode(\n    data: any,\n    sort_keys: bool = False,\n    indent: int = None,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> str\n")),(0,o.kt)("p",null,"Serialize a KCL object ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," to a JSON formatted str."),(0,o.kt)("h2",{id:"decode"},"decode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"decode(value: str) -> any")),(0,o.kt)("p",null,"Deserialize ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," (a string instance containing a JSON document) to a KCL object."),(0,o.kt)("h2",{id:"dump_to_file"},"dump_to_file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"dump_to_file(\n    data: any,\n    filename: str,\n    sort_keys: bool = False,\n    indent: int = None,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> None\n")),(0,o.kt)("p",null,"Serialize a KCL object ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," to a JSON formatted str and write it into the file ",(0,o.kt)("inlineCode",{parentName:"p"},"filename"),"."),(0,o.kt)("h2",{id:"validate"},"validate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"validate(value: str) -> bool\n")),(0,o.kt)("p",null,"Validate whether the given string is a valid JSON."))}u.isMDXComponent=!0}}]);