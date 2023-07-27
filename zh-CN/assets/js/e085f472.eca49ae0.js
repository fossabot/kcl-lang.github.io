"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59449],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>m});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(l),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return l?n.createElement(m,i(i({ref:t},p),{},{components:l})):n.createElement(m,i({ref:t},p))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=l[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},46632:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=l(87462),a=(l(67294),l(3905));const r={sidebar_position:2},i="\u5b89\u88c5",o={unversionedId:"user_docs/getting-started/install",id:"version-0.4.5/user_docs/getting-started/install",title:"\u5b89\u88c5",description:"1. \u5b89\u88c5 KCL",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.5/user_docs/getting-started/install.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/install",permalink:"/zh-CN/docs/0.4.5/user_docs/getting-started/install",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/user_docs/getting-started/install.md",tags:[],version:"0.4.5",lastUpdatedBy:"peefy",lastUpdatedAt:1690462472,formattedLastUpdatedAt:"2023\u5e747\u670827\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"\u7b80\u4ecb",permalink:"/zh-CN/docs/0.4.5/user_docs/getting-started/intro"},next:{title:"KCL \u8bed\u8a00\u901f\u89c8",permalink:"/zh-CN/docs/0.4.5/user_docs/getting-started/kcl-quick-start"}},s={},c=[{value:"1. \u5b89\u88c5 KCL",id:"1-\u5b89\u88c5-kcl",level:2},{value:"\u4e8c\u8fdb\u5236\u4e0b\u8f7d",id:"\u4e8c\u8fdb\u5236\u4e0b\u8f7d",level:3},{value:"MacOS &amp; Linux",id:"macos--linux",level:4},{value:"Windows",id:"windows",level:4},{value:"\u4f7f\u7528\u811a\u672c\u5b89\u88c5\u6700\u65b0\u7248\u672c",id:"\u4f7f\u7528\u811a\u672c\u5b89\u88c5\u6700\u65b0\u7248\u672c",level:3},{value:"MacOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4},{value:"Windows",id:"windows-1",level:4},{value:"Homebrew (MacOS)",id:"homebrew-macos",level:3},{value:"Scoop (Windows)",id:"scoop-windows",level:3},{value:"\u4f7f\u7528 Python3 \u5b89\u88c5",id:"\u4f7f\u7528-python3-\u5b89\u88c5",level:3},{value:"\u4f7f\u7528 Go \u5b89\u88c5",id:"\u4f7f\u7528-go-\u5b89\u88c5",level:3},{value:"\u4f7f\u7528 Docker \u955c\u50cf\u5b89\u88c5",id:"\u4f7f\u7528-docker-\u955c\u50cf\u5b89\u88c5",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3},{value:"2. \u5b89\u88c5 KCL IDE \u63d2\u4ef6",id:"2-\u5b89\u88c5-kcl-ide-\u63d2\u4ef6",level:2},{value:"VS Code",id:"vs-code",level:3},{value:"IntelliJ IDEA",id:"intellij-idea",level:3},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("h2",{id:"1-\u5b89\u88c5-kcl"},"1. \u5b89\u88c5 KCL"),(0,a.kt)("h3",{id:"\u4e8c\u8fdb\u5236\u4e0b\u8f7d"},"\u4e8c\u8fdb\u5236\u4e0b\u8f7d"),(0,a.kt)("p",null,"KCL \u7684\u6bcf\u4e2a\u7248\u672c\u90fd\u5305\u542b\u5404\u79cd\u64cd\u4f5c\u7cfb\u7edf\u548c\u4f53\u7cfb\u7ed3\u6784\u3002\u8fd9\u4e9b\u4e8c\u8fdb\u5236\u7248\u672c\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/releases/"},"Github")," \u624b\u52a8\u4e0b\u8f7d\u5e76\u5b89\u88c5\uff0c\u4e0b\u8f7d\u5b8c\u6210\u540e\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"{install-location}/kclvm/bin")," \u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf PATH \u4e2d\u3002"),(0,a.kt)("h4",{id:"macos--linux"},"MacOS & Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:{install-location}/kclvm/bin\n")),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PATH += ";{install-location}\\kclvm\\bin;"\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528\u811a\u672c\u5b89\u88c5\u6700\u65b0\u7248\u672c"},"\u4f7f\u7528\u811a\u672c\u5b89\u88c5\u6700\u65b0\u7248\u672c"),(0,a.kt)("h4",{id:"macos"},"MacOS"),(0,a.kt)("p",null,"\u5c06 KCL darwin \u6700\u65b0\u7248\u672c\u5b89\u88c5\u5230 /usr/local/kclvm/bin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kcl-lang.io/script/install.sh | /bin/bash\n")),(0,a.kt)("h4",{id:"linux"},"Linux"),(0,a.kt)("p",null,"\u5c06 KCL linux \u6700\u65b0\u7248\u672c\u5b89\u88c5\u5230 /usr/local/kclvm/bin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://kcl-lang.io/script/install.sh -O - | /bin/bash\n")),(0,a.kt)("h4",{id:"windows-1"},"Windows"),(0,a.kt)("p",null,"\u5c06 KCL windows \u6700\u65b0\u7248\u672c\u5b89\u88c5\u5230 $Env:SystemDrive\\kclvm\\bin\uff0c\u5e76\u5c06\u8be5\u76ee\u5f55\u6dfb\u52a0\u5230\u7528\u6237 PATH \u73af\u5883\u53d8\u91cf\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'powershell -Command "iwr -useb https://kcl-lang.io/script/install.ps1 | iex"\n')),(0,a.kt)("h3",{id:"homebrew-macos"},"Homebrew (MacOS)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kcl-lang/tap/kclvm\n")),(0,a.kt)("h3",{id:"scoop-windows"},"Scoop (Windows)"),(0,a.kt)("p",null,"\u9996\u5148\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop"),", \u7136\u540e\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop bucket add kcl-lang https://github.com/kcl-lang/scoop-bucket.git\nscoop install kcl-lang/kclvm\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-python3-\u5b89\u88c5"},"\u4f7f\u7528 Python3 \u5b89\u88c5"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python3")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," \u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," (Python3 \u8981\u6c42 3.7.3+)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install kclvm --user\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a kcl \u547d\u4ee4\u7684\u522b\u540d (\u53ef\u9009)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"alias kcl='python3 -m kclvm'\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-go-\u5b89\u88c5"},"\u4f7f\u7528 Go \u5b89\u88c5"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Go")," \u547d\u4ee4\u5b89\u88c5 (Go \u8981\u6c42 1.18+)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install kcl-lang.io/kcl-go/cmds/kcl-go@main\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a kcl \u547d\u4ee4\u7684\u522b\u540d (\u53ef\u9009)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"alias kcl='kcl-go run'\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-docker-\u955c\u50cf\u5b89\u88c5"},"\u4f7f\u7528 Docker \u955c\u50cf\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u672c\u547d\u4ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8080:8080 -it kusionstack/kclvm\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kusionstack/kclvm\n")),(0,a.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u5bf9\u4e8e\u4e0a\u8ff0\u6240\u6709\u5b89\u88c5\u65b9\u5f0f, \u5982\u679c\u60a8\u60f3\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/plugin/overview"},"KCL Python \u63d2\u4ef6"),", \u9700\u8981\u786e\u4fdd\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86 Python 3.7+ \u5e76\u5c06 python3 \u547d\u4ee4\u6dfb\u52a0\u5230\u60a8\u7684 PATH \u4e2d")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u907f\u514d GLIBC \u7248\u672c\u8fc7\u4f4e\u95ee\u9898, \u5bf9\u4e8e\u4f4e\u7248\u672c\u7684 linux \u53d1\u884c\u7248\u5982 centos7, \u60a8\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/releases/"},"Github")," \u627e\u5230 kclvm-centos \u7248\u672c\u5e76\u4e0b\u8f7d\u5b89\u88c5\u3002")),(0,a.kt)("h2",{id:"2-\u5b89\u88c5-kcl-ide-\u63d2\u4ef6"},"2. \u5b89\u88c5 KCL IDE \u63d2\u4ef6"),(0,a.kt)("h3",{id:"vs-code"},"VS Code"),(0,a.kt)("p",null,"KCL \u4e3a VS Code \u672c\u5730\u7248\u672c\u548c\u5728\u7ebf\u7248\u672c\u63d0\u4f9b\u4e86\u63d2\u4ef6\u652f\u6301\u3002"),(0,a.kt)("p",null,"\u672c\u5730 VS Code \u53ef\u4ee5\u5b89\u88c5\u5b8c\u6574\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-extension"},"KCL \u63d2\u4ef6"),"\uff0c\u63d0\u4f9b\u4e86\u9ad8\u4eae\u3001\u81ea\u52a8\u8865\u5168\uff08\u90e8\u5206\uff1a\u5173\u952e\u5b57\u8865\u5168\u7b49\uff09\u3001\u8df3\u8f6c\u3001\u60ac\u505c\u3001\u5927\u7eb2\u7b49\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u5728\u7ebf\u7248\u672c\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://vscode.dev"},"https://vscode.dev")," \u5730\u5740\u6253\u5f00\uff0c\u7136\u540e\u5b89\u88c5\u201cKCL for vscode.dev \u63d2\u4ef6\u201d\uff0c\u6548\u679c\u5982\u4e0b:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(30359).Z,width:"1604",height:"1210"})),(0,a.kt)("h3",{id:"intellij-idea"},"IntelliJ IDEA"),(0,a.kt)("p",null,"\u4ece",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/intellij-kcl/releases"},"\u8fd9\u91cc"),"\u4e0b\u8f7d\u53d1\u884c\u7248\uff0c\u5728 IntelliJ IDEA \u4e2d\uff0c\u70b9\u51fb Preference -> plugins -> install Plugin from Disk... -> \u9009\u62e9 kcl-idea-plugin zip -> \u91cd\u542f IDE\u3002\u6b64\u63d2\u4ef6\u9700\u8981 IntelliJ IDEA 2020.2+"),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/kcl-quick-start"},"KCL \u5feb\u901f\u5f00\u59cb"))))}d.isMDXComponent=!0},30359:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/ide-vscode-4a5d4d1920667701ecb25a8a25b9cbb1.png"}}]);