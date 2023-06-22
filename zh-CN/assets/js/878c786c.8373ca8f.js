"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},i="Visual Studio Code KCL \u63d2\u4ef6",o={unversionedId:"tools/Ide/vs-code",id:"tools/Ide/vs-code",title:"Visual Studio Code KCL \u63d2\u4ef6",description:"\u5feb\u901f\u5f00\u59cb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/Ide/vs-code.md",sourceDirName:"tools/Ide",slug:"/tools/Ide/vs-code",permalink:"/zh-CN/docs/next/tools/Ide/vs-code",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/docs/tools/Ide/vs-code.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1687453636,formattedLastUpdatedAt:"2023\u5e746\u670822\u65e5",frontMatter:{},sidebar:"tools",previous:{title:"IntelliJ IDEA",permalink:"/zh-CN/docs/next/tools/Ide/intellij"}},s={},c=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u6700\u5c0f\u4f9d\u8d56",id:"\u6700\u5c0f\u4f9d\u8d56",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2},{value:"\u5bfb\u6c42\u5e2e\u52a9",id:"\u5bfb\u6c42\u5e2e\u52a9",level:2},{value:"\u53c2\u4e0e\u8d21\u732e",id:"\u53c2\u4e0e\u8d21\u732e",level:2},{value:"\u8bb8\u53ef",id:"\u8bb8\u53ef",level:2}],p={toc:c};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"visual-studio-code-kcl-\u63d2\u4ef6"},"Visual Studio Code KCL \u63d2\u4ef6"),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"\u5b89\u88c5 KCL")," \u5e76\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"li"},"kcl")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"kcl-language-server")," \u547d\u4ee4\u5728\u60a8\u7684 PATH \u4e2d:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"which kcl\nwhich kcl-language-server\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-extension"},"VS Code KCL \u63d2\u4ef6"),". \u9700\u8981\u60a8\u7684 VS Code \u7248\u672c\u5927\u4e8e 1.50+"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:3},(0,r.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u6253\u5f00 VS Code \u5e76\u521b\u5efa\u4e00\u4e2a KCL \u6587\u4ef6\u9a8c\u8bc1 IDE \u63d2\u4ef6\u529f\u80fd")))),(0,r.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,r.kt)("p",null,"\u6b64\u6269\u5c55\u63d0\u4f9b\u4e86\u4e00\u4e9b KCL \u7f16\u7801\u5e2e\u52a9\uff0c\u5305\u62ec\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8bed\u6cd5\u9ad8\u4eae"),(0,r.kt)("img",{alt:"Highlight",src:n(31088).Z,width:"1312",height:"782"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8df3\u8f6c"),(0,r.kt)("img",{alt:"Goto Definition",src:n(33910).Z,width:"1312",height:"780"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8865\u5168"),(0,r.kt)("img",{alt:"Completion",src:n(25050).Z,width:"1312",height:"780"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5927\u7eb2"),(0,r.kt)("img",{alt:"Outline",src:n(73556).Z,width:"1312",height:"780"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u60ac\u505c"),(0,r.kt)("img",{alt:"Hover",src:n(86818).Z,width:"1312",height:"780"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8bca\u65ad"),(0,r.kt)("img",{alt:"Diagnostics",src:n(80427).Z,width:"1312",height:"780"}))),(0,r.kt)("p",null,"\u5176\u4ed6\u4e00\u4e9b\u6709\u7528\u7684\u529f\u80fd\uff0c\u5982\u4ee3\u7801\u91cd\u6784\u548c\u667a\u80fd\u611f\u77e5\u7b49\u6b63\u5728\u5f00\u53d1\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u6700\u5c0f\u4f9d\u8d56"},"\u6700\u5c0f\u4f9d\u8d56"),(0,r.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u60a8\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684 KCL\uff0c\u4f46\u6b64\u6269\u5c55\u6240\u9700\u7684 KCL \u6700\u4f4e\u7248\u672c\u4e3a v0.4.6\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u66f4\u65e9\u671f\u7248\u672c\uff0c\u5219\u6b64\u6269\u5c55\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kcl/issues/524"},"\u8be6\u89c1")),(0,r.kt)("h2",{id:"\u5bfb\u6c42\u5e2e\u52a9"},"\u5bfb\u6c42\u5e2e\u52a9"),(0,r.kt)("p",null,"\u5982\u679c\u6269\u5c55\u6ca1\u6709\u5982\u60a8\u6240\u671f\u671b\u7684\u90a3\u6837\u5de5\u4f5c\uff0c\u8bf7\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/intro/support"},"\u793e\u533a"),"\u4e0e\u6211\u4eec\u8054\u7cfb\u548c\u5bfb\u6c42\u5e2e\u52a9\u3002"),(0,r.kt)("h2",{id:"\u53c2\u4e0e\u8d21\u732e"},"\u53c2\u4e0e\u8d21\u732e"),(0,r.kt)("p",null,"\u76ee\u524d VS Code KCL \u63d2\u4ef6\u5904\u4e8e\u65e9\u671f\u7248\u672c\uff0c\u6211\u4eec\u6b63\u5728\u79ef\u6781\u6539\u8fdb VS Code KCL \u63d2\u4ef6\u4f53\u9a8c\uff0c\u6b22\u8fce\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/contribute"},"\u8d21\u732e\u6307\u5357")," \u4e00\u8d77\u5171\u5efa\uff01"),(0,r.kt)("h2",{id:"\u8bb8\u53ef"},"\u8bb8\u53ef"),(0,r.kt)("p",null,"Apache License 2.0"))}d.isMDXComponent=!0},25050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Completion-584771cd4bed237e74d3da3decaa9757.gif"},80427:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Diagnostics-716fc3b938a94e4db2cbafaad4f4174d.gif"},33910:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/GotoDef-0875243eacd6b76e49b7a5b95cb9ce55.gif"},31088:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Highlight-eb0516cd26555785169222292bede364.png"},86818:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hover-339697d17ca0d4f167b1b1a904c9f1aa.gif"},73556:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Outline-c443b2ee1e35746795e7b09c11f3f4da.gif"}}]);