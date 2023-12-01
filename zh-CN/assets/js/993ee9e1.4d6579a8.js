"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u6821\u9a8c",sidebar_position:2},l=void 0,o={unversionedId:"user_docs/guides/validation",id:"version-0.4.4/user_docs/guides/validation",title:"\u6821\u9a8c",description:"\u4f7f\u7528 KCL \u6821\u9a8c\u6570\u636e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.4/user_docs/guides/validation.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/validation",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/validation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/user_docs/guides/validation.md",tags:[],version:"0.4.4",lastUpdatedBy:"peefy",lastUpdatedAt:1701417593,formattedLastUpdatedAt:"2023\u5e7412\u67081\u65e5",sidebarPosition:2,frontMatter:{title:"\u6821\u9a8c",sidebar_position:2},sidebar:"user_docs",previous:{title:"\u914d\u7f6e",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/configuration"},next:{title:"\u6a21\u578b\u5b9a\u4e49",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/schema-definition"}},s={},c=[{value:"\u4f7f\u7528 KCL \u6821\u9a8c\u6570\u636e",id:"\u4f7f\u7528-kcl-\u6821\u9a8c\u6570\u636e",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u672a\u6765\u8ba1\u5212",id:"\u672a\u6765\u8ba1\u5212",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528-kcl-\u6821\u9a8c\u6570\u636e"},"\u4f7f\u7528 KCL \u6821\u9a8c\u6570\u636e"),(0,r.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 KCL \u4ee3\u7801\u751f\u6210 JSON/YAML \u7b49\u914d\u7f6e\u683c\u5f0f\uff0cKCL \u8fd8\u652f\u6301\u5bf9 JSON/YAML \u6570\u636e\u8fdb\u884c\u683c\u5f0f\u6821\u9a8c\u3002\u4f5c\u4e3a\u4e00\u79cd\u914d\u7f6e\u8bed\u8a00\uff0cKCL \u5728\u9a8c\u8bc1\u65b9\u9762\u51e0\u4e4e\u6db5\u76d6\u4e86 OpenAPI \u7684\u6240\u6709\u529f\u80fd\u3002\u5728 KCL \u4e2d\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u7ed3\u6784\u5b9a\u4e49\u6765\u7ea6\u675f\u914d\u7f6e\u6570\u636e\uff0c\u540c\u65f6\u652f\u6301\u901a\u8fc7 check \u5757\u81ea\u5b9a\u4e49\u7ea6\u675f\u89c4\u5219\uff0c\u5728 schema \u4e2d\u4e66\u5199\u6821\u9a8c\u8868\u8fbe\u5f0f\u5bf9 schema \u5b9a\u4e49\u7684\u5c5e\u6027\u8fdb\u884c\u6821\u9a8c\u548c\u7ea6\u675f\u3002\u901a\u8fc7 check \u8868\u8fbe\u5f0f\u53ef\u4ee5\u975e\u5e38\u6e05\u6670\u7b80\u5355\u5730\u6821\u9a8c\u8f93\u5165\u7684 JSON/YAML \u662f\u5426\u6ee1\u8db3\u76f8\u5e94\u7684 schema \u7ed3\u6784\u5b9a\u4e49\u4e0e check \u7ea6\u675f\u3002"),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"\u5728 schema \u5b9a\u4e49\u5f53\u4e2d\u53ef\u4ee5\u4f7f\u7528 check \u5173\u952e\u5b57\u7f16\u5199 schema \u5c5e\u6027\u7684\u6821\u9a8c\u89c4\u5219, \u5982\u4e0b\u6240\u793a\uff0ccheck \u4ee3\u7801\u5757\u4e2d\u7684\u6bcf\u4e00\u884c\u90fd\u5bf9\u5e94\u4e00\u4e2a\u6761\u4ef6\u8868\u8fbe\u5f0f\uff0c\u5f53\u6ee1\u8db3\u6761\u4ef6\u65f6\u6821\u9a8c\u6210\u529f\uff0c\u5f53\u4e0d\u6ee1\u8db3\u6761\u4ef6\u65f6\u6821\u9a8c\u5931\u8d25\u3002\u6761\u4ef6\u8868\u8fbe\u5f0f\u540e\u53ef\u8ddf ",(0,r.kt)("inlineCode",{parentName:"p"},', "check error message"')," \u8868\u793a\u5f53\u6821\u9a8c\u5931\u8d25\u65f6\u9700\u8981\u663e\u793a\u7684\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nschema Sample:\n    foo: str  # Required, \u4e0d\u80fd\u4e3aNone/Undefined, \u4e14\u7c7b\u578b\u5fc5\u987b\u4e3astr\n    bar: int  # Required, \u4e0d\u80fd\u4e3aNone/Undefined, \u4e14\u7c7b\u578b\u5fc5\u987b\u4e3aint\n    fooList: [int]  # Required, \u4e0d\u80fd\u4e3aNone/Undefined, \u4e14\u7c7b\u578b\u5fc5\u987b\u4e3aint\u5217\u8868\n    color: "Red" | "Yellow" | "Blue"  # Required, \u5b57\u9762\u503c\u8054\u5408\u7c7b\u578b\uff0c\u4e14\u5fc5\u987b\u4e3a"Red", "Yellow", "Blue"\u4e2d\u7684\u4e00\u4e2a\uff0c\u679a\u4e3e\u4f5c\u7528\n    id?: int  # Optional\uff0c\u53ef\u4ee5\u7559\u7a7a\uff0c\u7c7b\u578b\u5fc5\u987b\u4e3aint\n\n    check:\n        0 <= bar < 100  # bar\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0\uff0c\u5c0f\u4e8e100\n        0 < len(fooList) < 100  # fooList\u4e0d\u80fd\u4e3aNone/Undefined\uff0c\u5e76\u4e14\u957f\u5ea6\u5fc5\u987b\u5927\u4e8e0,\u5c0f\u4e8e100\n        regex.match(foo, "^The.*Foo$") # regex \u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\n        bar in range(100) # range, bar\u8303\u56f4\u53ea\u80fd\u4e3a1\u523099\n        bar in [2, 4, 6, 8] # enum, bar\u53ea\u80fd\u53d62, 4, 6, 8\n        bar % 2 == 0  # bar\u5fc5\u987b\u4e3a2\u7684\u500d\u6570\n        all foo in fooList {\n            foo > 1\n        }  # fooList\u4e2d\u7684\u6240\u6709\u5143\u7d20\u5fc5\u987b\u5927\u4e8e1\n        any foo in fooList {\n            foo > 10\n        }  # fooList\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u5143\u7d20\u5fc5\u987b\u5927\u4e8e10\n        abs(id) > 10 if id  # check if \u8868\u8fbe\u5f0f\uff0c\u5f53 id \u4e0d\u4e3a\u7a7a\u65f6\uff0cid\u7684\u7edd\u5bf9\u503c\u5fc5\u987b\u5927\u4e8e10\n')),(0,r.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0cKCL Schema \u4e2d\u652f\u6301\u7684\u6821\u9a8c\u7c7b\u578b\u4e3a:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6821\u9a8c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u65b9\u6cd5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8303\u56f4\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"td"},">")," \u7b49\u6bd4\u8f83\u8fd0\u7b97\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6b63\u5219\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"regex")," \u7cfb\u7edf\u5e93\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"match")," \u7b49\u65b9\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u957f\u5ea6\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"len")," \u5185\u7f6e\u51fd\u6570\uff0c\u53ef\u4ee5\u6c42 ",(0,r.kt)("inlineCode",{parentName:"td"},"list/dict/str")," \u7c7b\u578b\u7684\u53d8\u91cf\u957f\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u679a\u4e3e\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5b57\u9762\u503c\u8054\u5408\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 schema \u7684\u53ef\u9009/\u5fc5\u9009\u5c5e\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6761\u4ef6\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 check if \u6761\u4ef6\u8868\u8fbe\u5f0f")))),(0,r.kt)("p",null,"\u57fa\u4e8e\u6b64\uff0cKCL \u63d0\u4f9b\u4e86\u76f8\u5e94\u7684",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/cli/kcl/vet"},"\u6821\u9a8c\u5de5\u5177")," \u76f4\u63a5\u5bf9 JSON/YAML \u6570\u636e\u8fdb\u884c\u6821\u9a8c\u3002\u6b64\u5916\uff0c\u901a\u8fc7 KCL schema \u7684 check \u8868\u8fbe\u5f0f\u53ef\u4ee5\u975e\u5e38\u6e05\u6670\u7b80\u5355\u5730\u6821\u9a8c\u8f93\u5165\u7684 JSON \u662f\u5426\u6ee1\u8db3\u76f8\u5e94\u7684 schema \u7ed3\u6784\u5b9a\u4e49\u4e0e check \u7ea6\u675f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5805).Z,width:"460",height:"388"})),(0,r.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,r.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"data.json")," \u7684 JSON \u914d\u7f6e\u6587\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Alice",\n  "age": "18",\n  "message": "This is Alice",\n  "data": {\n    "id": "1",\n    "value": "value1"\n  },\n  "labels": {\n    "key": "value"\n  },\n  "hc": [1, 2, 3]\n}\n')),(0,r.kt)("p",null,"\u6784\u5efa\u4e00\u4e2a\u7528\u4e8e\u6821\u9a8c\u4e0a\u8ff0 JSON \u6587\u4ef6\u7684 KCL \u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.k")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"schema User:\n    name: str\n    age: int\n    message?: str\n    data: Data\n    labels: {str:}\n    hc: [int]\n\n    check:\n        age > 10\n\nschema Data:\n    id: int\n    value: str\n")),(0,r.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u83b7\u5f97\u6821\u9a8c\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl-vet data.json schema.k\nValidate succuss!\n")),(0,r.kt)("h2",{id:"\u672a\u6765\u8ba1\u5212"},"\u672a\u6765\u8ba1\u5212"),(0,r.kt)("p",null,'KCL \u6821\u9a8c\u80fd\u529b\u7684\u63d0\u5347\u5c06\u9010\u6e10\u56f4\u7ed5"\u9759\u6001\u5316"\u65b9\u9762\u5c55\u5f00\u5de5\u4f5c\uff0c\u5373\u5728\u7f16\u8bd1\u65f6\uff0c\u7ed3\u5408\u5f62\u5f0f\u5316\u9a8c\u8bc1\u7684\u80fd\u529b\u76f4\u63a5\u5206\u6790\u5f97\u51fa\u6570\u636e\u662f\u5426\u6ee1\u8db3\u7ea6\u675f\u6761\u4ef6\u3001\u7ea6\u675f\u6761\u4ef6\u662f\u5426\u51b2\u7a81\u7b49\u7ed3\u8bba\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 IDE \u5b9e\u65f6\u900f\u51fa\u7ea6\u675f\u9519\u8bef\uff0c\u800c\u65e0\u9700\u5728\u8fd0\u884c\u65f6\u53d1\u73b0\u9519\u8bef\u3002'))}u.isMDXComponent=!0},5805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-kcl-validation-ui-4a33642df3b7e92c4a152a12f9f8bc5f.png"}}]);