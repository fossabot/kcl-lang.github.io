"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto system module",weight:100},i=void 0,l={unversionedId:"reference/model/crypto",id:"version-0.4.4/reference/model/crypto",title:"crypto",description:"crypto system module",source:"@site/versioned_docs/version-0.4.4/reference/model/crypto.md",sourceDirName:"reference/model",slug:"/reference/model/crypto",permalink:"/docs/0.4.4/reference/model/crypto",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/reference/model/crypto.md",tags:[],version:"0.4.4",lastUpdatedBy:"peefy",lastUpdatedAt:1701417593,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto system module",weight:100},sidebar:"reference",previous:{title:"base64",permalink:"/docs/0.4.4/reference/model/base64"},next:{title:"datetime",permalink:"/docs/0.4.4/reference/model/datetime"}},c={},p=[{value:"md5",id:"md5",level:2},{value:"sha1",id:"sha1",level:2},{value:"sha224",id:"sha224",level:2},{value:"sha256",id:"sha256",level:2},{value:"sha384",id:"sha384",level:2},{value:"sha512",id:"sha512",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"md5"},"md5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'md5(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"MD5")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha1"},"sha1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha1(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA1")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha224"},"sha224"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha224(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA224")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha256"},"sha256"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha256(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA256")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha384"},"sha384"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha384(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA384")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha512"},"sha512"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha512(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA512")," and the codec registered for encoding."))}u.isMDXComponent=!0}}]);