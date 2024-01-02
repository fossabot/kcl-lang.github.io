"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[20098],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"\u6570\u636e\u96c6\u6210",sidebar_position:4},s=void 0,i={unversionedId:"user_docs/guides/data-integration",id:"version-0.4.4/user_docs/guides/data-integration",title:"\u6570\u636e\u96c6\u6210",description:"\u5728 KCL \u4e2d\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u5c06 KCL \u7f16\u5199\u7684\u914d\u7f6e\u4ee3\u7801\u7f16\u8bd1\u8f93\u51fa\u4e3a YAML \u683c\u5f0f\u7684\u6570\u636e\uff0c\u8fd8\u53ef\u4ee5\u5c06 JSON/YAML \u7b49\u6570\u636e\u76f4\u63a5\u5d4c\u5165\u5230 KCL \u8bed\u8a00\u5f53\u4e2d\uff0c\u6bd4\u5982\u5bf9\u4e8e\u5982\u4e0b\u7684 KCL \u4ee3\u7801 (main.k)\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.4/user_docs/guides/data-integration.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/data-integration",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/data-integration",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/user_docs/guides/data-integration.md",tags:[],version:"0.4.4",lastUpdatedBy:"peefy",lastUpdatedAt:1704165384,formattedLastUpdatedAt:"2024\u5e741\u67082\u65e5",sidebarPosition:4,frontMatter:{title:"\u6570\u636e\u96c6\u6210",sidebar_position:4},sidebar:"user_docs",previous:{title:"\u6a21\u578b\u5b9a\u4e49",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/schema-definition"},next:{title:"\u81ea\u52a8\u5316",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/automation"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 KCL \u4e2d\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u5c06 KCL \u7f16\u5199\u7684\u914d\u7f6e\u4ee3\u7801\u7f16\u8bd1\u8f93\u51fa\u4e3a YAML \u683c\u5f0f\u7684\u6570\u636e\uff0c\u8fd8\u53ef\u4ee5\u5c06 JSON/YAML \u7b49\u6570\u636e\u76f4\u63a5\u5d4c\u5165\u5230 KCL \u8bed\u8a00\u5f53\u4e2d\uff0c\u6bd4\u5982\u5bf9\u4e8e\u5982\u4e0b\u7684 KCL \u4ee3\u7801 (main.k)\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import yaml\n\nschema Server:\n    ports: [int]\n\nserver: Server = yaml.decode("""\\\nports:\n- 80\n- 8080\n""")\n')),(0,o.kt)("p",null,"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 KCL \u5185\u7f6e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," \u6a21\u5757\u4ee5\u53ca\u5176\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml.decode")," \u76f4\u63a5\u5b8c\u6210 YAML \u6570\u636e\u7684\u96c6\u6210\uff0c\u5e76\u4e14\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Server")," schema \u5bf9\u96c6\u6210\u7684 YAML \u6570\u636e\u76f4\u63a5\u8fdb\u884c\u6821\u9a8c\uff0c\u6211\u4eec\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u83b7\u5f97\u914d\u7f6e\u8f93\u51fa:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\nserver:\n  ports:\n  - 80\n  - 8080\n")),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml.encode")," \u5b8c\u6210 YAML \u6570\u636e\u7684\u5e8f\u5217\u5316:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kcl"},"import yaml\n\nserver = yaml.encode({\n    ports = [80, 8080]\n})\n")),(0,o.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u8f93\u51fa\u4e3a:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\nserver: |\n  ports:\n  - 80\n  - 8080\n")),(0,o.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5bf9\u4e8e JSON \u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"json.encode")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"json.decode")," \u51fd\u6570\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u96c6\u6210"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kcl"},"import json\n\nserver_json_encode = json.encode({\n    ports = [80, 8080]\n})\nserver_json_decode = json.decode('{\"ports\": [80, 8080]}')\n")),(0,o.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u8f93\u51fa\u4e3a:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\nserver_json_encode: '{\"ports\": [80, 8080]}'\nserver_json_decode:\n  ports:\n  - 80\n  - 8080\n")))}u.isMDXComponent=!0}}]);