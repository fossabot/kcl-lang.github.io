"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},53507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:1},l="Visual Studio Code",o={unversionedId:"tools/Ide/vs-code",id:"tools/Ide/vs-code",title:"Visual Studio Code",description:"\u5feb\u901f\u5f00\u59cb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/Ide/vs-code.md",sourceDirName:"tools/Ide",slug:"/tools/Ide/vs-code",permalink:"/zh-CN/docs/next/tools/Ide/vs-code",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/Ide/vs-code.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"2023\u5e7411\u670828\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"IDE",permalink:"/zh-CN/docs/next/tools/Ide/"},next:{title:"NeoVim",permalink:"/zh-CN/docs/next/tools/Ide/neovim"}},s={},c=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u6700\u5c0f\u4f9d\u8d56",id:"\u6700\u5c0f\u4f9d\u8d56",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2},{value:"\u5bfb\u6c42\u5e2e\u52a9",id:"\u5bfb\u6c42\u5e2e\u52a9",level:2},{value:"\u53c2\u4e0e\u8d21\u732e",id:"\u53c2\u4e0e\u8d21\u732e",level:2},{value:"\u8bb8\u53ef",id:"\u8bb8\u53ef",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"visual-studio-code"},"Visual Studio Code"),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"1.")," ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"\u5b89\u88c5 KCL")," \u5e76\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-language-server")," \u547d\u4ee4\u5728\u60a8\u7684 PATH \u4e2d:\n\u5728 MacOs \u548c Linux\u4e2d\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"which kcl\nwhich kcl-language-server\n")),(0,r.kt)("p",{parentName:"li"},"\u5728 Windows \u4e2d:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"where kcl\nwhere kcl-language-server\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"2.")," \u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-extension"},"VS Code KCL \u63d2\u4ef6"),". \u9700\u8981\u60a8\u7684 VS Code \u7248\u672c\u5927\u4e8e 1.50+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"3.")," \u91cd\u65b0\u6253\u5f00 VS Code \u5e76\u521b\u5efa\u4e00\u4e2a KCL \u6587\u4ef6\u9a8c\u8bc1 IDE \u63d2\u4ef6\u529f\u80fd"))),(0,r.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,r.kt)("p",null,"\u6b64\u6269\u5c55\u63d0\u4f9b\u4e86\u4e00\u4e9b KCL \u7f16\u7801\u5e2e\u52a9\uff0c\u5305\u62ec\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8bed\u6cd5\u9ad8\u4eae"),(0,r.kt)("img",{alt:"Highlight",src:a(31088).Z,width:"1312",height:"782"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8df3\u8f6c:")," \u8df3\u8f6c\u81f3\u5b9a\u4e49\uff0c\u5982 schema\uff0cschema \u5c5e\u6027, \u53d8\u91cf\uff0cmap key \u7b49\n",(0,r.kt)("img",{alt:"Goto Definition",src:a(33910).Z,width:"1312",height:"780"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8865\u5168:")," \u4ee3\u7801\u8865\u5168\uff0c\u5982\u5173\u952e\u5b57\uff0c \u70b9(",(0,r.kt)("inlineCode",{parentName:"li"},"."),") \u53d8\u91cf\uff0cschema \u5c5e\u6027\u7b49\n",(0,r.kt)("img",{alt:"Completion",src:a(25050).Z,width:"1312",height:"780"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5927\u7eb2:")," \u663e\u793a KCL \u6587\u4ef6\u4e2d\u7684 schema \u548c \u53d8\u91cf\u5b9a\u4e49\n",(0,r.kt)("img",{alt:"Outline",src:a(73556).Z,width:"1312",height:"780"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60ac\u505c"),": \u60ac\u505c\u63d0\u793a Identifer \u7684\u4fe1\u606f\uff0c\u5982\u7c7b\u578b\uff0c\u51fd\u6570\u7b7e\u540d\u548c\u6587\u6863\u7b49\n",(0,r.kt)("img",{alt:"Hover",src:a(86818).Z,width:"1312",height:"780"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8bca\u65ad:")," \u8b66\u544a\u548c\u9519\u8bef\u4fe1\u606f\n",(0,r.kt)("img",{alt:"Diagnostics",src:a(80427).Z,width:"1312",height:"780"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63d0\u793a\uff1a\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens"},"Error Lens \u63d2\u4ef6")," \u6765\u589e\u5f3a\u8bca\u65ad\u6548\u679c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u683c\u5f0f\u5316:")," \u683c\u5f0f\u5316\u4e00\u4e2a KCL \u6587\u4ef6\u6216\u4ee3\u7801\u7247\u6bb5\n",(0,r.kt)("img",{alt:"Format",src:a(40752).Z,width:"1320",height:"778"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5feb\u901f\u4fee\u590d:")," \u5feb\u901f\u4fee\u590d\u4e00\u4e9b\u8bca\u65ad\u4fe1\u606f\n",(0,r.kt)("img",{alt:"Qucik Fix",src:a(98723).Z,width:"1320",height:"778"}))),(0,r.kt)("p",null,"\u5176\u4ed6\u4e00\u4e9b\u6709\u7528\u7684\u529f\u80fd\uff0c\u5982\u4ee3\u7801\u91cd\u6784\u548c\u667a\u80fd\u611f\u77e5\u7b49\u6b63\u5728\u5f00\u53d1\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u6700\u5c0f\u4f9d\u8d56"},"\u6700\u5c0f\u4f9d\u8d56"),(0,r.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u60a8\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684 KCL\uff0c\u4f46\u6b64\u6269\u5c55\u6240\u9700\u7684 KCL \u6700\u4f4e\u7248\u672c\u4e3a v0.4.6\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u66f4\u65e9\u671f\u7248\u672c\uff0c\u5219\u6b64\u6269\u5c55\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues/524"},"\u8be6\u89c1")),(0,r.kt)("h2",{id:"\u5bfb\u6c42\u5e2e\u52a9"},"\u5bfb\u6c42\u5e2e\u52a9"),(0,r.kt)("p",null,"\u5982\u679c\u6269\u5c55\u6ca1\u6709\u5982\u60a8\u6240\u671f\u671b\u7684\u90a3\u6837\u5de5\u4f5c\uff0c\u8bf7\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/intro/support"},"\u793e\u533a"),"\u4e0e\u6211\u4eec\u8054\u7cfb\u548c\u5bfb\u6c42\u5e2e\u52a9\u3002"),(0,r.kt)("h2",{id:"\u53c2\u4e0e\u8d21\u732e"},"\u53c2\u4e0e\u8d21\u732e"),(0,r.kt)("p",null,"\u76ee\u524d VS Code KCL \u63d2\u4ef6\u5904\u4e8e\u65e9\u671f\u7248\u672c\uff0c\u6211\u4eec\u6b63\u5728\u79ef\u6781\u6539\u8fdb VS Code KCL \u63d2\u4ef6\u4f53\u9a8c\uff0c\u6b22\u8fce\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/contribute"},"\u8d21\u732e\u6307\u5357")," \u4e00\u8d77\u5171\u5efa\uff01"),(0,r.kt)("h2",{id:"\u8bb8\u53ef"},"\u8bb8\u53ef"),(0,r.kt)("p",null,"Apache License 2.0"))}m.isMDXComponent=!0},25050:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Completion-584771cd4bed237e74d3da3decaa9757.gif"},80427:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Diagnostics-716fc3b938a94e4db2cbafaad4f4174d.gif"},40752:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Format-59d8915e1e2c361896c65e296bb0a1b3.gif"},33910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/GotoDef-0875243eacd6b76e49b7a5b95cb9ce55.gif"},31088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Highlight-ddacdde9f18d504f7a103583c2f76b86.png"},86818:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Hover-339697d17ca0d4f167b1b1a904c9f1aa.gif"},73556:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Outline-c443b2ee1e35746795e7b09c11f3f4da.gif"},98723:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/QuickFix-0f41e6016659a53c369573c28c88d54e.gif"}}]);