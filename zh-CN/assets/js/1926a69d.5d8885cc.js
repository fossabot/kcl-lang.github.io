"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:2},o="\u5b89\u88c5",s={unversionedId:"user_docs/getting-started/install",id:"version-0.4.3/user_docs/getting-started/install",title:"\u5b89\u88c5",description:"1. \u5b89\u88c5 KCL",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.3/user_docs/getting-started/install.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/install",permalink:"/zh-CN/docs/0.4.3/user_docs/getting-started/install",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/versioned_docs/version-0.4.3/user_docs/getting-started/install.md",tags:[],version:"0.4.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1676904334,formattedLastUpdatedAt:"2023\u5e742\u670820\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"\u7b80\u4ecb",permalink:"/zh-CN/docs/0.4.3/user_docs/getting-started/intro"},next:{title:"KCL \u8bed\u8a00\u901f\u89c8",permalink:"/zh-CN/docs/0.4.3/user_docs/getting-started/kcl-quick-start"}},i={},c=[{value:"1. \u5b89\u88c5 KCL",id:"1-\u5b89\u88c5-kcl",level:2},{value:"\u4e8c\u8fdb\u5236\u4e0b\u8f7d",id:"\u4e8c\u8fdb\u5236\u4e0b\u8f7d",level:3},{value:"Homebrew",id:"homebrew",level:3},{value:"\u4f7f\u7528 Python3 \u5b89\u88c5",id:"\u4f7f\u7528-python3-\u5b89\u88c5",level:3},{value:"\u4f7f\u7528 Docker \u955c\u50cf\u5b89\u88c5",id:"\u4f7f\u7528-docker-\u955c\u50cf\u5b89\u88c5",level:3},{value:"2. \u5b89\u88c5 VS Code \u63d2\u4ef6",id:"2-\u5b89\u88c5-vs-code-\u63d2\u4ef6",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],p={toc:c};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("h2",{id:"1-\u5b89\u88c5-kcl"},"1. \u5b89\u88c5 KCL"),(0,a.kt)("h3",{id:"\u4e8c\u8fdb\u5236\u4e0b\u8f7d"},"\u4e8c\u8fdb\u5236\u4e0b\u8f7d"),(0,a.kt)("p",null,"KCL \u7684\u6bcf\u4e2a\u7248\u672c\u90fd\u5305\u542b\u5404\u79cd\u64cd\u4f5c\u7cfb\u7edf\u548c\u4f53\u7cfb\u7ed3\u6784\u3002\u8fd9\u4e9b\u4e8c\u8fdb\u5236\u7248\u672c\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/releases/"},"Github")," \u624b\u52a8\u4e0b\u8f7d\u5e76\u5b89\u88c5\uff0c\u4e0b\u8f7d\u5b8c\u6210\u540e\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"{install-location}/kclvm/bin")," \u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf PATH \u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:{install-location}/kclvm/bin\n")),(0,a.kt)("h3",{id:"homebrew"},"Homebrew"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kcl-lang/tap/kclvm\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-python3-\u5b89\u88c5"},"\u4f7f\u7528 Python3 \u5b89\u88c5"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python3")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," \u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," (Python3 \u8981\u6c42 3.7.3+)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install kclvm --user\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a kcl \u547d\u4ee4\u7684\u522b\u540d (\u53ef\u9009)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"alias kcl='python3 -m kclvm'\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-docker-\u955c\u50cf\u5b89\u88c5"},"\u4f7f\u7528 Docker \u955c\u50cf\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u672c\u547d\u4ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8080:8080 -it kusionstack/kclvm\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kusionstack/kclvm\n")),(0,a.kt)("h2",{id:"2-\u5b89\u88c5-vs-code-\u63d2\u4ef6"},"2. \u5b89\u88c5 VS Code \u63d2\u4ef6"),(0,a.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8 IDE \u5f00\u53d1 KCL \u7684\u6548\u7387\uff0cKCL \u4e3a VS Code \u5728\u7ebf\u7248\u548c\u672c\u5730\u7248\u672c\u63d0\u4f9b\u4e86\u63d2\u4ef6\u652f\u6301\u3002\u5728\u7ebf\u7248\u672c\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://vscode.dev"},"https://vscode.dev")," \u5730\u5740\u6253\u5f00\uff0c\u7136\u540e\u5b89\u88c5\u201cKCL for vscode.dev \u63d2\u4ef6\u201d\uff0c\u6548\u679c\u5982\u4e0b:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(30359).Z,width:"1604",height:"1210"})),(0,a.kt)("p",null,"\u672c\u5730 VS Code \u53ef\u4ee5\u5b89\u88c5\u5b8c\u6574\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-extension"},"KCL \u63d2\u4ef6"),"\uff0c\u63d0\u4f9b\u4e86\u9ad8\u4eae\u3001\u81ea\u52a8\u8865\u5168\uff08\u90e8\u5206\uff1a\u5173\u952e\u5b57\u8865\u5168\u7b49\uff09\u3001\u8df3\u8f6c\u3001\u60ac\u505c\u3001\u5927\u7eb2\u7b49\u529f\u80fd\u3002\u63d2\u4ef6\u867d\u7136\u4e0d\u662f KCL \u5fc5\u987b\u7684\u90e8\u5206\uff0c\u4f46\u662f\u53ef\u4ee5\u63d0\u9ad8\u6548\u7387\u63a8\u8350\u5b89\u88c5\u3002"),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/kcl-quick-start"},"KCL \u5feb\u901f\u5f00\u59cb"))))}d.isMDXComponent=!0},30359:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ide-vscode-4a5d4d1920667701ecb25a8a25b9cbb1.png"}}]);