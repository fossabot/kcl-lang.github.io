"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Data Integration",sidebar_position:4},i=void 0,s={unversionedId:"user_docs/guides/data-integration",id:"version-0.4.3/user_docs/guides/data-integration",title:"Data Integration",description:"In KCL, we can not only compile and output the configuration code written by KCL into YAML format data, but also directly embed JSON/YAML and other data into the KCL language. For example, for the following KCL code (main.k):",source:"@site/versioned_docs/version-0.4.3/user_docs/guides/data-integration.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/data-integration",permalink:"/docs/0.4.3/user_docs/guides/data-integration",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/user_docs/guides/data-integration.md",tags:[],version:"0.4.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1690274001,formattedLastUpdatedAt:"Jul 25, 2023",sidebarPosition:4,frontMatter:{title:"Data Integration",sidebar_position:4},sidebar:"user_docs",previous:{title:"Schema Definition",permalink:"/docs/0.4.3/user_docs/guides/schema-definition"},next:{title:"Automation",permalink:"/docs/0.4.3/user_docs/guides/automation"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In KCL, we can not only compile and output the configuration code written by KCL into YAML format data, but also directly embed JSON/YAML and other data into the KCL language. For example, for the following KCL code (main.k):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import yaml\n\nschema Server:\n    ports: [int]\n\nserver: Server = yaml.decode("""\\\nports:\n- 80\n- 8080\n""")\n')),(0,o.kt)("p",null,"In the above code, we use the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," module of KCL and its ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml.decode")," function directly integrates YAML data, and uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Server")," schema to directly verify the integrated YAML data. We can obtain the configuration output through the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\nserver:\n  ports:\n  - 80\n  - 8080\n")),(0,o.kt)("p",null,"In addition, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml.encode")," to serialize YAML data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kcl"},"import yaml\n\nserver = yaml.encode({\n    ports = [80, 8080]\n})\n")),(0,o.kt)("p",null,"The output of the execution command is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\nserver: |\n  ports:\n  - 80\n  - 8080\n")),(0,o.kt)("p",null,"Similarly, for JSON data, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"json.encode")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"json.decode")," function performs data integration in the same way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kcl"},"import json\n\nserver_json_encode = json.encode({\n    ports = [80, 8080]\n})\nserver_json_decode = json.decode('{\"ports\": [80, 8080]}')\n")),(0,o.kt)("p",null,"The output of the execution command is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\nserver_json_encode: '{\"ports\": [80, 8080]}'\nserver_json_decode:\n  ports:\n  - 80\n  - 8080\n")))}u.isMDXComponent=!0}}]);