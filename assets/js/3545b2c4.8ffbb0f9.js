"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:2},o="Installation",i={unversionedId:"user_docs/getting-started/install",id:"version-0.4.3/user_docs/getting-started/install",title:"Installation",description:"1. Install KCL",source:"@site/versioned_docs/version-0.4.3/user_docs/getting-started/install.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/install",permalink:"/docs/0.4.3/user_docs/getting-started/install",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/user_docs/getting-started/install.md",tags:[],version:"0.4.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1685958977,formattedLastUpdatedAt:"Jun 5, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Introduction",permalink:"/docs/0.4.3/user_docs/getting-started/intro"},next:{title:"Quick Start",permalink:"/docs/0.4.3/user_docs/getting-started/kcl-quick-start"}},s={},c=[{value:"1. Install KCL",id:"1-install-kcl",level:2},{value:"From the Binary Releases",id:"from-the-binary-releases",level:3},{value:"MacOS &amp; Linux",id:"macos--linux",level:4},{value:"Windows",id:"windows",level:4},{value:"Homebrew (MacOS)",id:"homebrew-macos",level:3},{value:"From Python3",id:"from-python3",level:3},{value:"From Docker",id:"from-docker",level:3},{value:"Note",id:"note",level:3},{value:"2. Install the KCL IDE Extension",id:"2-install-the-kcl-ide-extension",level:2},{value:"VS Code",id:"vs-code",level:3},{value:"IntelliJ IDEA",id:"intellij-idea",level:3},{value:"Next Step",id:"next-step",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("h2",{id:"1-install-kcl"},"1. Install KCL"),(0,l.kt)("h3",{id:"from-the-binary-releases"},"From the Binary Releases"),(0,l.kt)("p",null,"Each release of KCL includes various OSes and architectures. These binary versions can be manually downloaded and installed from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kcl/releases/"},"Github")," and add ",(0,l.kt)("inlineCode",{parentName:"p"},"{install-location}/kclvm/bin")," to the environment PATH."),(0,l.kt)("h4",{id:"macos--linux"},"MacOS & Linux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:{install-location}/kclvm/bin\n")),(0,l.kt)("h4",{id:"windows"},"Windows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PATH += ";{install-location}\\kclvm\\bin;"\n')),(0,l.kt)("h3",{id:"homebrew-macos"},"Homebrew (MacOS)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kcl-lang/tap/kclvm\n")),(0,l.kt)("h3",{id:"from-python3"},"From Python3"),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl")," through the ",(0,l.kt)("inlineCode",{parentName:"p"},"python3")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"pip")," (",(0,l.kt)("inlineCode",{parentName:"p"},"python3")," requires 3.7.3+)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install kclvm --user\n")),(0,l.kt)("p",null,"Add an alias for the kcl command (optional)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alias kcl='python3 -m kclvm'\n")),(0,l.kt)("h3",{id:"from-docker"},"From Docker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8080:8080 -it kusionstack/kclvm\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update image")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kusionstack/kclvm\n")),(0,l.kt)("h3",{id:"note"},"Note"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f For all the above operating systems and installation methods, if you want to use ",(0,l.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/plugin/overview"},"KCL Python plug-in"),", you need to ensure that Python 3.7+ is installed and add the python3 command to your PATH environment variable.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To avoid the GLIBC version being too low, for lower versions of Linux such as Centos7, you can visit ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kcl/releases/"},"Github")," to find the release of kclvm-centos and download and install it.")),(0,l.kt)("h2",{id:"2-install-the-kcl-ide-extension"},"2. Install the KCL IDE Extension"),(0,l.kt)("h3",{id:"vs-code"},"VS Code"),(0,l.kt)("p",null,"There are VS Code extensions for both VS Code and VS Code Web IDE."),(0,l.kt)("p",null,"The KCL extension for the local VS Code IDE can be download from ",(0,l.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-extension"},"here")," and it provides more rich language support for the KCL language such as highlighting, auto-completion, quick info hover and code navigation, etc."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://vscode.dev"},"VS Code Web IDE")," can be reached through the browser, and you can search and install the ",(0,l.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-web-extension"},"KCL for vscode.dev")," in the VS Code Extension tab. And here's the syntax highlighting view you'll get:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(30359).Z,width:"1604",height:"1210"})),(0,l.kt)("h3",{id:"intellij-idea"},"IntelliJ IDEA"),(0,l.kt)("p",null,"Download the distribution from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/intellij-kcl"},"here")," and in IntelliJ IDEA, click Preference -> plugins -> install Plugin from Disk... -> select kcl-idea-plugin zip -> restart IDE. This plugin requires the IntelliJ IDEA 2020.2+"),(0,l.kt)("h2",{id:"next-step"},"Next Step"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/kcl-quick-start"},"KCL Quick Start"))))}u.isMDXComponent=!0},30359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ide-vscode-4a5d4d1920667701ecb25a8a25b9cbb1.png"}}]);