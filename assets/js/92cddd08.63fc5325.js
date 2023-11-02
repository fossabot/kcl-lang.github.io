"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,f=p["".concat(s,".").concat(c)]||p[c]||d[c]||l;return n?i.createElement(f,a(a({ref:t},m),{},{components:n})):i.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const l={title:"units",linkTitle:"units",type:"docs",description:"units system module - Unit handlers",weight:100},a=void 0,o={unversionedId:"reference/model/units",id:"version-0.5.0/reference/model/units",title:"units",description:"units system module - Unit handlers",source:"@site/versioned_docs/version-0.5.0/reference/model/units.md",sourceDirName:"reference/model",slug:"/reference/model/units",permalink:"/docs/0.5.0/reference/model/units",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/reference/model/units.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1698928861,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{title:"units",linkTitle:"units",type:"docs",description:"units system module - Unit handlers",weight:100},sidebar:"reference",previous:{title:"regex",permalink:"/docs/0.5.0/reference/model/regex"},next:{title:"yaml",permalink:"/docs/0.5.0/reference/model/yaml"}},s={},u=[{value:"Constants",id:"constants",level:2},{value:"Functions",id:"functions",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"constants"},"Constants"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed point unit constants: ",(0,r.kt)("inlineCode",{parentName:"li"},"n"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"u"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"m"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"k"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"K"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"G"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"P"),"."),(0,r.kt)("li",{parentName:"ul"},"Power of 2 unit constants: ",(0,r.kt)("inlineCode",{parentName:"li"},"Ki"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Mi"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Gi"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Ti")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Pi"),".")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_n(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_u(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"u")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_m(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"m")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_K(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"K")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_M(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"M")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_G(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"G")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_T(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_P(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"P")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_Ki(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"Ki")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_Mi(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"Mi")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_Gi(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"Gi")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_Ti(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"Ti")," suffix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_Pi(num: int) -> str"),"\nInt literal to string with ",(0,r.kt)("inlineCode",{parentName:"li"},"Pi")," suffix")))}d.isMDXComponent=!0}}]);