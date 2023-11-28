"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22261],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"\u6570\u636e\u96c6\u6210",sidebar_position:4},l=void 0,s={unversionedId:"user_docs/guides/data-integration",id:"version-0.4.6/user_docs/guides/data-integration",title:"\u6570\u636e\u96c6\u6210",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.6/user_docs/guides/data-integration.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/data-integration",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/data-integration",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/data-integration.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"2023\u5e7411\u670828\u65e5",sidebarPosition:4,frontMatter:{title:"\u6570\u636e\u96c6\u6210",sidebar_position:4},sidebar:"user_docs",previous:{title:"\u6a21\u578b\u5b9a\u4e49",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/schema-definition"},next:{title:"\u81ea\u52a8\u5316",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/automation"}},i={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528 KCL \u8fdb\u884c\u6570\u636e\u96c6\u6210",id:"\u4f7f\u7528-kcl-\u8fdb\u884c\u6570\u636e\u96c6\u6210",level:2},{value:"1. \u83b7\u5f97\u793a\u4f8b",id:"1-\u83b7\u5f97\u793a\u4f8b",level:3},{value:"2. YAML \u96c6\u6210",id:"2-yaml-\u96c6\u6210",level:3},{value:"3. JSON \u96c6\u6210",id:"3-json-\u96c6\u6210",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u5728 KCL \u4e2d\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u5c06 KCL \u7f16\u5199\u7684\u914d\u7f6e\u4ee3\u7801\u7f16\u8bd1\u8f93\u51fa\u4e3a YAML \u683c\u5f0f\u7684\u6570\u636e\uff0c\u8fd8\u53ef\u4ee5\u5c06 JSON/YAML \u7b49\u6570\u636e\u76f4\u63a5\u5d4c\u5165\u5230 KCL \u8bed\u8a00\u5f53\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-kcl-\u8fdb\u884c\u6570\u636e\u96c6\u6210"},"\u4f7f\u7528 KCL \u8fdb\u884c\u6570\u636e\u96c6\u6210"),(0,a.kt)("h3",{id:"1-\u83b7\u5f97\u793a\u4f8b"},"1. \u83b7\u5f97\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/data-integration\n")),(0,a.kt)("h3",{id:"2-yaml-\u96c6\u6210"},"2. YAML \u96c6\u6210"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u663e\u793a KCL YAML \u96c6\u6210\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat yaml.k\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import yaml\n\nschema Server:\n    ports: [int]\n\nserver: Server = yaml.decode("""\\\nports:\n- 80\n- 8080\n""")\nserver_yaml = yaml.encode({\n    ports = [80, 8080]\n})\n')),(0,a.kt)("p",null,"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 KCL \u5185\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," \u6a21\u5757\u4ee5\u53ca\u5176\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml.decode")," \u76f4\u63a5\u5b8c\u6210 YAML \u6570\u636e\u7684\u96c6\u6210\uff0c\u5e76\u4e14\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," schema \u5bf9\u96c6\u6210\u7684 YAML \u6570\u636e\u76f4\u63a5\u8fdb\u884c\u6821\u9a8c\u3002\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml.encode")," \u5b8c\u6210 YAML \u6570\u636e\u7684\u5e8f\u5217\u5316\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u83b7\u5f97\u914d\u7f6e\u8f93\u51fa:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl yaml.k\nserver:\n  ports:\n    - 80\n    - 8080\nserver_yaml: |\n  ports:\n    - 80\n    - 8080\n")),(0,a.kt)("h3",{id:"3-json-\u96c6\u6210"},"3. JSON \u96c6\u6210"),(0,a.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5bf9\u4e8e JSON \u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"json.encode")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"json.decode")," \u51fd\u6570\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u96c6\u6210\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u663e\u793a KCL JSON \u96c6\u6210\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat json.k\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import json\n\nschema Server:\n    ports: [int]\n\nserver: Server = json.decode('{\"ports\": [80, 8080]}')\nserver_json = json.encode({\n    ports = [80, 8080]\n})\n")),(0,a.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u8f93\u51fa\u4e3a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ kcl json.k\nserver:\n  ports:\n    - 80\n    - 8080\nserver_json: "{\\"ports\\": [80, 8080]}"\n')),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728 KCL \u4e2d\u8fdb\u884c\u6570\u636e\u96c6\u6210\uff0c\u4f7f\u7528 KCL \u5185\u7f6e\u7684 yaml \u548c json \u5305\u5c06 YAML \u548c JSON \u6570\u636e\u76f4\u63a5\u96c6\u6210\u5230 KCL \u8bed\u8a00\u4e2d\uff0c\u5e76\u4f7f\u7528\u76f8\u5e94\u7684\u89e3\u7801\u548c\u7f16\u7801\u529f\u80fd\u5bf9\u5176\u8fdb\u884c\u9a8c\u8bc1\u548c\u5e8f\u5217\u5316\u3002"))}u.isMDXComponent=!0}}]);