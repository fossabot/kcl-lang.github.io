"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[3696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),k=a,m=p["".concat(s,".").concat(k)]||p[k]||u[k]||o;return n?l.createElement(m,r(r({ref:t},d),{},{components:n})):l.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},24788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var l=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},r="Installation",i={unversionedId:"user_docs/getting-started/install",id:"version-0.4.5/user_docs/getting-started/install",title:"Installation",description:"1. Install KCL",source:"@site/versioned_docs/version-0.4.5/user_docs/getting-started/install.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/install",permalink:"/docs/0.4.5/user_docs/getting-started/install",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/user_docs/getting-started/install.md",tags:[],version:"0.4.5",lastUpdatedBy:"peefy",lastUpdatedAt:1702363140,formattedLastUpdatedAt:"Dec 12, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Introduction",permalink:"/docs/0.4.5/user_docs/getting-started/intro"},next:{title:"Quick Start",permalink:"/docs/0.4.5/user_docs/getting-started/kcl-quick-start"}},s={},c=[{value:"1. Install KCL",id:"1-install-kcl",level:2},{value:"From the Binary Releases",id:"from-the-binary-releases",level:3},{value:"MacOS &amp; Linux",id:"macos--linux",level:4},{value:"Windows",id:"windows",level:4},{value:"Using script to install the latest release",id:"using-script-to-install-the-latest-release",level:3},{value:"MacOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4},{value:"Windows",id:"windows-1",level:4},{value:"Homebrew (MacOS)",id:"homebrew-macos",level:3},{value:"Scoop (Windows)",id:"scoop-windows",level:3},{value:"From Python3",id:"from-python3",level:3},{value:"From Go",id:"from-go",level:3},{value:"From Docker",id:"from-docker",level:3},{value:"Note",id:"note",level:3},{value:"2. Install KCL IDE Extension",id:"2-install-kcl-ide-extension",level:2},{value:"VS Code",id:"vs-code",level:3},{value:"IntelliJ IDEA",id:"intellij-idea",level:3},{value:"Next Step",id:"next-step",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,l.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"1-install-kcl"},"1. Install KCL"),(0,a.kt)("h3",{id:"from-the-binary-releases"},"From the Binary Releases"),(0,a.kt)("p",null,"Each release of KCL includes various OSes and architectures. These binary versions can be manually downloaded and installed from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/releases/"},"Github")," and add ",(0,a.kt)("inlineCode",{parentName:"p"},"{install-location}/kclvm/bin")," to the environment PATH."),(0,a.kt)("h4",{id:"macos--linux"},"MacOS & Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:{install-location}/kclvm/bin\n")),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PATH += ";{install-location}\\kclvm\\bin;"\n')),(0,a.kt)("h3",{id:"using-script-to-install-the-latest-release"},"Using script to install the latest release"),(0,a.kt)("h4",{id:"macos"},"MacOS"),(0,a.kt)("p",null,"Install the latest darwin KCL to /usr/local/kclvm/bin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kcl-lang.io/script/install.sh | /bin/bash\n")),(0,a.kt)("h4",{id:"linux"},"Linux"),(0,a.kt)("p",null,"Install the latest linux KCL to /usr/local/kclvm/bin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://kcl-lang.io/script/install.sh -O - | /bin/bash\n")),(0,a.kt)("h4",{id:"windows-1"},"Windows"),(0,a.kt)("p",null,"Install the latest windows KCL to $Env:SystemDrive\\kclvm\\bin and add this directory to User PATH environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'powershell -Command "iwr -useb https://kcl-lang.io/script/install.ps1 | iex"\n')),(0,a.kt)("h3",{id:"homebrew-macos"},"Homebrew (MacOS)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kcl-lang/tap/kclvm\n")),(0,a.kt)("h3",{id:"scoop-windows"},"Scoop (Windows)"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop")," first, then add this bucket and install ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop bucket add kcl-lang https://github.com/kcl-lang/scoop-bucket.git\nscoop install kcl-lang/kclvm\n")),(0,a.kt)("h3",{id:"from-python3"},"From Python3"),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," through the ",(0,a.kt)("inlineCode",{parentName:"p"},"python3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," (",(0,a.kt)("inlineCode",{parentName:"p"},"python3")," requires 3.7.3+)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install kclvm --user\n")),(0,a.kt)("p",null,"Add an alias for the kcl command (optional)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"alias kcl='python3 -m kclvm'\n")),(0,a.kt)("h3",{id:"from-go"},"From Go"),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Go")," command (",(0,a.kt)("inlineCode",{parentName:"p"},"Go")," requires 1.18+)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install kcl-lang.io/kcl-go/cmds/kcl-go@main\n")),(0,a.kt)("p",null,"Add an alias for the kcl command (optional)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"alias kcl='kcl-go run'\n")),(0,a.kt)("h3",{id:"from-docker"},"From Docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8080:8080 -it kusionstack/kclvm\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kusionstack/kclvm\n")),(0,a.kt)("h3",{id:"note"},"Note"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f For all the above operating systems and installation methods, if you want to use ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/plugin/overview"},"KCL Python plug-in"),", you need to ensure that Python 3.7+ is installed and add the python3 command to your PATH environment variable.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To avoid the GLIBC version being too low, for lower versions of Linux such as Centos7, you can visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/releases/"},"Github")," to find the release of kclvm-centos and download and install it.")),(0,a.kt)("h2",{id:"2-install-kcl-ide-extension"},"2. Install KCL IDE Extension"),(0,a.kt)("h3",{id:"vs-code"},"VS Code"),(0,a.kt)("p",null,"There are VS Code extensions for both VS Code and VS Code Web IDE."),(0,a.kt)("p",null,"The KCL extension for the local VS Code IDE can be download from ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-extension"},"here")," and it provides more rich language support for the KCL language such as highlighting, auto-completion, quick info hover and code navigation, etc."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://vscode.dev"},"VS Code Web IDE")," can be reached through the browser, and you can search and install the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-web-extension"},"KCL for vscode.dev")," in the VS Code Extension tab. And here's the syntax highlighting view you'll get:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(30359).Z,width:"1604",height:"1210"})),(0,a.kt)("h3",{id:"intellij-idea"},"IntelliJ IDEA"),(0,a.kt)("p",null,"Download the distribution from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/intellij-kcl/releases"},"here")," and in IntelliJ IDEA, click Preference -> plugins -> install Plugin from Disk... -> select kcl-idea-plugin zip -> restart IDE. This plugin requires the IntelliJ IDEA 2020.2+"),(0,a.kt)("h2",{id:"next-step"},"Next Step"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/kcl-quick-start"},"KCL Quick Start"))))}u.isMDXComponent=!0},30359:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/ide-vscode-58773bb1d989369777665f0b7e583ed6.png"}}]);