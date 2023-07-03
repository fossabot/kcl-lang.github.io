"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},p="OpenAPI to KCL",i={unversionedId:"tools/cli/openapi/openapi-to-kcl",id:"version-0.4.5/tools/cli/openapi/openapi-to-kcl",title:"OpenAPI to KCL",description:"\u547d\u4ee4",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.5/tools/cli/openapi/openapi-to-kcl.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/openapi-to-kcl",permalink:"/zh-CN/docs/0.4.5/tools/cli/openapi/openapi-to-kcl",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/tools/cli/openapi/openapi-to-kcl.md",tags:[],version:"0.4.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1676950659,formattedLastUpdatedAt:"2023\u5e742\u670821\u65e5",frontMatter:{},sidebar:"tools",previous:{title:"CRD to KCL",permalink:"/zh-CN/docs/0.4.5/tools/cli/openapi/crd-to-kcl"},next:{title:"KCL OpenAPI \u89c4\u8303",permalink:"/zh-CN/docs/0.4.5/tools/cli/openapi/spec"}},l={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openapi-to-kcl"},"OpenAPI to KCL"),(0,o.kt)("p",null,"\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model -f ${your_open_api_spec.yaml} -t ${the_kcl_files_output_dir}\n")),(0,o.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u6587\u4ef6\uff1atest_open_api_spec.yaml:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  v1.TestInt:\n    type: object\n    properties:\n      name:\n        type: string\n        format: int-or-string\n    required:\n      - name\n    x-kcl-type:\n      import:\n        package: v1.test_int\n        alias: test_int\n      type: TestInt\nswagger: "2.0"\ninfo:\n  title: Kusion\n  version: v0.0.2\npaths: {}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u547d\u4ee4\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model -f test_open_api_spec.yaml -t ~/\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u51fa\uff1a~/models/v1/test_int.k"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""\nThis is the test_int module in v1 package.\namytestThis file was generated by the KCL auto-gen tool. DO NOT EDIT.\nEditing this file might prove futile when you re-run the KCL auto-gen generate command.\n"""\n')))),(0,o.kt)("p",null,'  schema TestInt:\n"""v1 test int\n"""'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  name: int | str\n  """name\n  """\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")))}u.isMDXComponent=!0}}]);