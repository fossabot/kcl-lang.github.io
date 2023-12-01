"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="KCL Extension for Visual Studio Code",s={unversionedId:"tools/Ide/vs-code",id:"version-0.5.3/tools/Ide/vs-code",title:"KCL Extension for Visual Studio Code",description:"Quick Start",source:"@site/versioned_docs/version-0.5.3/tools/Ide/vs-code.md",sourceDirName:"tools/Ide",slug:"/tools/Ide/vs-code",permalink:"/docs/0.5.3/tools/Ide/vs-code",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.3/tools/Ide/vs-code.md",tags:[],version:"0.5.3",lastUpdatedBy:"peefy",lastUpdatedAt:1701417593,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tools",previous:{title:"IntelliJ IDEA",permalink:"/docs/0.5.3/tools/Ide/intellij"}},l={},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"Features",id:"features",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Ask for help",id:"ask-for-help",level:2},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl-extension-for-visual-studio-code"},"KCL Extension for Visual Studio Code"),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"Install KCL")," on your system. Please check that ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-language-server")," are installed and have been added to your PATH:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"which kcl\nwhich kcl-language-server\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Install the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-extension"},"KCL extension")," for Visual Studio Code. This extension requires the VS Code 1.50+.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Reopen VS Code and create a KCL file and begin your KCL tour!"))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"This extension provides some coding assistance, including the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Syntax Highlight:"),"\n",(0,r.kt)("img",{alt:"Highlight",src:n(31088).Z,width:"1312",height:"782"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Goto Definition:")," Goto definition of schema, variable, schema attribute, and import pkg.\n",(0,r.kt)("img",{alt:"Goto Definition",src:n(33910).Z,width:"1312",height:"780"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Completion:")," Keywords completions and dot(",(0,r.kt)("inlineCode",{parentName:"p"},"."),") completion.\n",(0,r.kt)("img",{alt:"Completion",src:n(25050).Z,width:"1312",height:"780"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Outline:")," Main definition(schema def) and variables in KCL file.\n",(0,r.kt)("img",{alt:"Outline",src:n(73556).Z,width:"1312",height:"780"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Hover:")," Identifier information (type and schema documentation).\n",(0,r.kt)("img",{alt:"Hover",src:n(86818).Z,width:"1312",height:"780"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Diagnostics:")," Warnings and errors in KCL file."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Tips: You can enhance the effect of diagnostics by installing another plugin: ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens"},"Error Lens"),".")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Diagnostics",src:n(80427).Z,width:"1312",height:"780"})))),(0,r.kt)("p",null,"Other useful features such as refactoring and testing are in development."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"We recommend that you use the latest version of KCL, but the minimum required version for this extension is 0.4.6. If you are using an earlier version, the extension may not work properly."),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues/524"},"here"),"."),(0,r.kt)("h2",{id:"ask-for-help"},"Ask for help"),(0,r.kt)("p",null,"If the extension isn't working as you expect, please contact us with ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/intro/support"},"community")," for help."),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"We are working actively on improving the KCL development on VS Code. All kinds of contributions are welcomed. You can refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/contribute"},"contribution guide"),". It introduces how to build and run the extension locally, and describes the process of sending a contribution."),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"Apache License 2.0"))}u.isMDXComponent=!0},25050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Completion-584771cd4bed237e74d3da3decaa9757.gif"},80427:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Diagnostics-716fc3b938a94e4db2cbafaad4f4174d.gif"},33910:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/GotoDef-0875243eacd6b76e49b7a5b95cb9ce55.gif"},31088:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Highlight-ddacdde9f18d504f7a103583c2f76b86.png"},86818:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Hover-339697d17ca0d4f167b1b1a904c9f1aa.gif"},73556:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Outline-c443b2ee1e35746795e7b09c11f3f4da.gif"}}]);