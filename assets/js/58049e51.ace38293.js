"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[73593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a="OpenAPI to KCL",l={unversionedId:"tools/cli/openapi/openapi-to-kcl",id:"version-0.7.0/tools/cli/openapi/openapi-to-kcl",title:"OpenAPI to KCL",description:"To convert from models defined in the OpenAPI spec file to KCL schema, we could run the following script:",source:"@site/versioned_docs/version-0.7.0/tools/cli/openapi/openapi-to-kcl.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/openapi-to-kcl",permalink:"/docs/tools/cli/openapi/openapi-to-kcl",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/tools/cli/openapi/openapi-to-kcl.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1702363140,formattedLastUpdatedAt:"Dec 12, 2023",frontMatter:{},sidebar:"tools",previous:{title:"CRD to KCL",permalink:"/docs/tools/cli/openapi/crd-to-kcl"},next:{title:"KCL OpenAPI Spec",permalink:"/docs/tools/cli/openapi/spec"}},p={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openapi-to-kcl"},"OpenAPI to KCL"),(0,o.kt)("p",null,"To convert from models defined in the OpenAPI spec file to KCL schema, we could run the following script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl import -m openapi -o ${the_kcl_files_output_dir} ${your_open_api_spec.yaml}\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There is the OpenAPI spec file that we need to convert: ",(0,o.kt)("inlineCode",{parentName:"li"},"test_open_api_spec.yaml"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  v1.TestInt:\n    type: object\n    properties:\n      name:\n        type: string\n        format: int-or-string\n    required:\n      - name\n    x-kcl-type:\n      import:\n        package: v1.test_int\n        alias: test_int\n      type: TestInt\nswagger: "2.0"\ninfo:\n  title: KCL\n  version: v0.0.2\npaths: {}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The script will be:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl import -m openapi -o ~/ -s test_open_api_spec.yaml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then we can find the generated file here: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/models/v1/test_int.k"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""\nThis is the test_int module in v1 package.\nThis file was generated by the KCL auto-gen tool. DO NOT EDIT.\nEditing this file might prove futile when you re-run the KCL auto-gen generate command.\n"""\n\n\nschema TestInt:\n    """v1 test int\n\n    Attributes\n    ----------\n    name : int | str, default is Undefined, required\n        name\n    """\n\n\n    name: int | str\n\n\n')))}m.isMDXComponent=!0}}]);