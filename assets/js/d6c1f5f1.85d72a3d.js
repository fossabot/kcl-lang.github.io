"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:0},a="Overview",l={unversionedId:"reference/model/overview",id:"reference/model/overview",title:"Overview",description:"KCL provides engineering extensibility through built-in modules, system modules and plug-in modules.",source:"@site/docs/reference/model/overview.md",sourceDirName:"reference/model",slug:"/reference/model/overview",permalink:"/docs/next/reference/model/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/model/overview.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1690174683,formattedLastUpdatedAt:"Jul 24, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"reference",previous:{title:"System Package",permalink:"/docs/next/reference/model/"},next:{title:"builtin",permalink:"/docs/next/reference/model/builtin"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"KCL provides engineering extensibility through built-in modules, system modules and plug-in modules."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(86288).Z,width:"1544",height:"884"})),(0,o.kt)("p",null,"The user code does not need to import functions that directly use builtin functions (such as calculating the length of a list with ",(0,o.kt)("inlineCode",{parentName:"p"},"len"),", obtaining the type of value through ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof"),", etc.), and for basic types such as strings, it also provides some built-in methods (such as converting the case of strings, etc.)."),(0,o.kt)("p",null,"For relatively complex general logic, it is provided through the system modules. For example, by importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"math")," module, we can use related mathematical functions, and we can use the regular expression by importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"regex")," module. For KCL code, it can also be organized into different user modules."),(0,o.kt)("p",null,"In addition, Python and Go can be used to develop plug-ins for KCL through the plugin mechanism. For example, there are the app-context plug-in can be used to obtain the context information of the current application to simplify code writing."))}d.isMDXComponent=!0},86288:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kcl-module-5ec74277ff23c98d06956ab10f3f2fb6.png"}}]);