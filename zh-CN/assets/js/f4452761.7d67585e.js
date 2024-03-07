"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[52856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u6821\u9a8c",sidebar_position:2},i=void 0,o={unversionedId:"user_docs/guides/validation",id:"user_docs/guides/validation",title:"\u6821\u9a8c",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/validation.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/validation",permalink:"/zh-CN/docs/next/user_docs/guides/validation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/validation.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1709793003,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",sidebarPosition:2,frontMatter:{title:"\u6821\u9a8c",sidebar_position:2},sidebar:"user_docs",previous:{title:"\u914d\u7f6e",permalink:"/zh-CN/docs/next/user_docs/guides/configuration"},next:{title:"\u62bd\u8c61",permalink:"/zh-CN/docs/next/user_docs/guides/abstraction"}},c={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528 KCL \u6821\u9a8c\u6570\u636e",id:"\u4f7f\u7528-kcl-\u6821\u9a8c\u6570\u636e",level:2},{value:"0. \u5148\u51b3\u6761\u4ef6",id:"0-\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u83b7\u5f97\u793a\u4f8b",id:"1-\u83b7\u5f97\u793a\u4f8b",level:3},{value:"2. \u9a8c\u8bc1\u6570\u636e",id:"2-\u9a8c\u8bc1\u6570\u636e",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u672a\u6765\u8ba1\u5212",id:"\u672a\u6765\u8ba1\u5212",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"\u9a8c\u8bc1\u662f\u6821\u9a8c\u6570\u636e\u662f\u5426\u51c6\u786e\u3001\u53ef\u9760\u5e76\u6ee1\u8db3\u67d0\u4e9b\u8981\u6c42\u6216\u9650\u5236\u7684\u8fc7\u7a0b\uff0c\u5305\u62ec\u68c0\u67e5\u6570\u636e\u7684\u5b8c\u6574\u6027\u3001\u4e00\u81f4\u6027\u3001\u51c6\u786e\u6027\u548c\u76f8\u5173\u6027\u3002\u8fdb\u884c\u6570\u636e\u9a8c\u8bc1\u662f\u4e3a\u4e86\u786e\u4fdd\u6570\u636e\u7b26\u5408\u5176\u9884\u671f\u76ee\u7684\uff0c\u5e76\u80fd\u6709\u6548\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 KCL \u53ca\u5176\u6821\u9a8c\u5de5\u5177\u624b\u52a8\u6216\u81ea\u52a8\u8fdb\u884c\u6570\u636e\u9a8c\u8bc1\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-kcl-\u6821\u9a8c\u6570\u636e"},"\u4f7f\u7528 KCL \u6821\u9a8c\u6570\u636e"),(0,r.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 KCL \u4ee3\u7801\u751f\u6210 JSON/YAML \u7b49\u914d\u7f6e\u683c\u5f0f\uff0cKCL \u8fd8\u652f\u6301\u5bf9 JSON/YAML \u6570\u636e\u8fdb\u884c\u683c\u5f0f\u6821\u9a8c\u3002\u4f5c\u4e3a\u4e00\u79cd\u914d\u7f6e\u8bed\u8a00\uff0cKCL \u5728\u9a8c\u8bc1\u65b9\u9762\u51e0\u4e4e\u6db5\u76d6\u4e86 OpenAPI \u7684\u6240\u6709\u529f\u80fd\u3002\u5728 KCL \u4e2d\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u7ed3\u6784\u5b9a\u4e49\u6765\u7ea6\u675f\u914d\u7f6e\u6570\u636e\uff0c\u540c\u65f6\u652f\u6301\u901a\u8fc7 check \u5757\u81ea\u5b9a\u4e49\u7ea6\u675f\u89c4\u5219\uff0c\u5728 schema \u4e2d\u4e66\u5199\u6821\u9a8c\u8868\u8fbe\u5f0f\u5bf9 schema \u5b9a\u4e49\u7684\u5c5e\u6027\u8fdb\u884c\u6821\u9a8c\u548c\u7ea6\u675f\u3002\u901a\u8fc7 check \u8868\u8fbe\u5f0f\u53ef\u4ee5\u975e\u5e38\u6e05\u6670\u7b80\u5355\u5730\u6821\u9a8c\u8f93\u5165\u7684 JSON/YAML \u662f\u5426\u6ee1\u8db3\u76f8\u5e94\u7684 schema \u7ed3\u6784\u5b9a\u4e49\u4e0e check \u7ea6\u675f\u3002"),(0,r.kt)("h3",{id:"0-\u5148\u51b3\u6761\u4ef6"},"0. \u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL"))),(0,r.kt)("h3",{id:"1-\u83b7\u5f97\u793a\u4f8b"},"1. \u83b7\u5f97\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/validation\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u663e\u793a\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat schema.k\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema User:\n    name: str\n    age: int\n    message?: str\n    data: Data\n    labels: {str:}\n    hc: [int]\n\n    check:\n        age > 10, "age must > 10"\n\nschema Data:\n    id: int\n    value: str\n')),(0,r.kt)("p",null,"\u5728 schema \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," \u5173\u952e\u5b57\u6765\u7f16\u5199\u6bcf\u4e2a schema \u5c5e\u6027\u7684\u9a8c\u8bc1\u89c4\u5219\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"check")," \u5757\u4e2d\u7684\u6bcf\u4e00\u884c\u90fd\u5bf9\u5e94\u4e8e\u4e00\u4e2a\u6761\u4ef6\u8868\u8fbe\u5f0f\u3002\u5f53\u6ee1\u8db3\u6761\u4ef6\u65f6\uff0c\u9a8c\u8bc1\u6210\u529f\u3002\u6761\u4ef6\u8868\u8fbe\u5f0f\u540e\u9762\u53ef\u4ee5\u8ddf ",(0,r.kt)("inlineCode",{parentName:"p"},', "\u62a5\u9519\u4fe1\u606f"'),"\uff0c\u4ee5\u6307\u793a\u68c0\u67e5\u5931\u8d25\u65f6\u8981\u7ed9\u7528\u6237\u663e\u793a\u7684\u6d88\u606f\u3002"),(0,r.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0cKCL Schema \u4e2d\u652f\u6301\u7684\u6821\u9a8c\u7c7b\u578b\u4e3a:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6821\u9a8c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u65b9\u6cd5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8303\u56f4\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"td"},">")," \u7b49\u6bd4\u8f83\u8fd0\u7b97\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6b63\u5219\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"regex")," \u7cfb\u7edf\u5e93\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"match")," \u7b49\u65b9\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u957f\u5ea6\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"len")," \u5185\u7f6e\u51fd\u6570\uff0c\u53ef\u4ee5\u6c42 ",(0,r.kt)("inlineCode",{parentName:"td"},"list/dict/str")," \u7c7b\u578b\u7684\u53d8\u91cf\u957f\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u679a\u4e3e\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5b57\u9762\u503c\u8054\u5408\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 schema \u7684\u53ef\u9009/\u5fc5\u9009\u5c5e\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6761\u4ef6\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 check if \u6761\u4ef6\u8868\u8fbe\u5f0f")))),(0,r.kt)("h3",{id:"2-\u9a8c\u8bc1\u6570\u636e"},"2. \u9a8c\u8bc1\u6570\u636e"),(0,r.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"data.json")," \u7684 JSON \u914d\u7f6e\u6587\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Alice",\n  "age": 18,\n  "message": "This is Alice",\n  "data": {\n    "id": 1,\n    "value": "value1"\n  },\n  "labels": {\n    "key": "value"\n  },\n  "hc": [1, 2, 3]\n}\n')),(0,r.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u83b7\u5f97\u6821\u9a8c\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl vet data.json schema.k\n")),(0,r.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,r.kt)("p",null,"KCL \u662f\u4e00\u79cd\u914d\u7f6e\u8bed\u8a00\uff0c\u901a\u8fc7\u5176\u7ed3\u6784\u5b9a\u4e49\u548c\u7528\u6237\u5b9a\u4e49\u7684\u7ea6\u675f\u89c4\u5219\u6765\u652f\u6301\u6570\u636e\u9a8c\u8bc1\u3002KCL Schema \u4e2d\u652f\u6301\u7684\u9a8c\u8bc1\u7c7b\u578b\u5305\u62ec\u8303\u56f4\u3001\u6b63\u5219\u8868\u8fbe\u5f0f\u3001\u957f\u5ea6\u3001\u679a\u4e3e\u3001\u53ef\u9009/\u5fc5\u9700\u548c\u6761\u4ef6\u3002\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528 KCL \u9a8c\u8bc1\u5de5\u5177\u6216\u5728\u6b64\u57fa\u7840\u4e0a\u6784\u5efa\u7684\u53ef\u89c6\u5316\u4ea7\u54c1\u6765\u9a8c\u8bc1\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"\u672a\u6765\u8ba1\u5212"},"\u672a\u6765\u8ba1\u5212"),(0,r.kt)("p",null,'KCL \u6821\u9a8c\u80fd\u529b\u7684\u63d0\u5347\u5c06\u9010\u6e10\u56f4\u7ed5"\u9759\u6001\u5316"\u65b9\u9762\u5c55\u5f00\u5de5\u4f5c\uff0c\u5373\u5728\u7f16\u8bd1\u65f6\uff0c\u7ed3\u5408\u5f62\u5f0f\u5316\u9a8c\u8bc1\u7684\u80fd\u529b\u76f4\u63a5\u5206\u6790\u5f97\u51fa\u6570\u636e\u662f\u5426\u6ee1\u8db3\u7ea6\u675f\u6761\u4ef6\u3001\u7ea6\u675f\u6761\u4ef6\u662f\u5426\u51b2\u7a81\u7b49\u7ed3\u8bba\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 IDE \u5b9e\u65f6\u900f\u51fa\u7ea6\u675f\u9519\u8bef\uff0c\u800c\u65e0\u9700\u5728\u8fd0\u884c\u65f6\u53d1\u73b0\u9519\u8bef\u3002'),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u671f\u671b KCL Schema \u548c\u7ea6\u675f\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u5305\u6765\u7ba1\u7406\uff08\u8fd9\u4e2a\u5305\u53ea\u6709 KCL \u6587\u4ef6\uff09\u3002\u4f8b\u5982\uff0cKubernetes \u6a21\u578b\u548c\u7ea6\u675f\u53ef\u4ee5\u5f00\u7bb1\u5373\u7528\u3002\u7528\u6237\u53ef\u4ee5\u751f\u6210\u914d\u7f6e\u6216\u9a8c\u8bc1\u73b0\u6709\u914d\u7f6e\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 KCL \u7ee7\u627f\u7b80\u5355\u5730\u6269\u5c55\u7528\u6237\u60f3\u8981\u7684\u6a21\u578b\u548c\u7ea6\u675f\u3002"))}u.isMDXComponent=!0}}]);