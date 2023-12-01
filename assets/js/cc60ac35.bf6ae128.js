"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7615],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>m});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(l),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return l?n.createElement(m,i(i({ref:t},p),{},{components:l})):n.createElement(m,i({ref:t},p))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=l[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},47263:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=l(87462),a=(l(67294),l(3905));const r={sidebar_position:2},i="Installation",o={unversionedId:"user_docs/getting-started/install",id:"version-0.6.0/user_docs/getting-started/install",title:"Installation",description:"1. Install KCL",source:"@site/versioned_docs/version-0.6.0/user_docs/getting-started/install.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/install",permalink:"/docs/0.6.0/user_docs/getting-started/install",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/user_docs/getting-started/install.md",tags:[],version:"0.6.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701417593,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Introduction",permalink:"/docs/0.6.0/user_docs/getting-started/intro"},next:{title:"Quick Start",permalink:"/docs/0.6.0/user_docs/getting-started/kcl-quick-start"}},s={},c=[{value:"1. Install KCL",id:"1-install-kcl",level:2},{value:"From the Binary Releases",id:"from-the-binary-releases",level:3},{value:"MacOS &amp; Linux",id:"macos--linux",level:4},{value:"Windows",id:"windows",level:4},{value:"Using script to install the latest release",id:"using-script-to-install-the-latest-release",level:3},{value:"MacOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4},{value:"Windows",id:"windows-1",level:4},{value:"Homebrew (MacOS)",id:"homebrew-macos",level:3},{value:"Scoop (Windows)",id:"scoop-windows",level:3},{value:"From Go",id:"from-go",level:3},{value:"From Docker",id:"from-docker",level:3},{value:"Note",id:"note",level:3},{value:"2. Install KCL IDE Extension",id:"2-install-kcl-ide-extension",level:2},{value:"VS Code",id:"vs-code",level:3},{value:"NeoVim",id:"neovim",level:3},{value:"IntelliJ IDEA",id:"intellij-idea",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"1-install-kcl"},"1. Install KCL"),(0,a.kt)("h3",{id:"from-the-binary-releases"},"From the Binary Releases"),(0,a.kt)("p",null,"Each release of KCL includes various OSes and architectures. These binary versions can be manually downloaded and installed from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/releases/"},"Github")," or ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/kusionstack/kcl/releases"},"Gitee")," and add ",(0,a.kt)("inlineCode",{parentName:"p"},"{install-location}/kclvm/bin")," to the environment PATH."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If you cannot successfully access Github, you can also access Gitee to obtain binaries for installation.")),(0,a.kt)("h4",{id:"macos--linux"},"MacOS & Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:{install-location}/kclvm/bin\n")),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PATH += ";{install-location}\\kclvm\\bin;"\n')),(0,a.kt)("h3",{id:"using-script-to-install-the-latest-release"},"Using script to install the latest release"),(0,a.kt)("h4",{id:"macos"},"MacOS"),(0,a.kt)("p",null,"Install or upgrade the latest darwin KCL to /usr/local/kclvm/bin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kcl-lang.io/script/install.sh | /bin/bash\n")),(0,a.kt)("h4",{id:"linux"},"Linux"),(0,a.kt)("p",null,"Install or upgrade the latest linux KCL to /usr/local/kclvm/bin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://kcl-lang.io/script/install.sh -O - | /bin/bash\n")),(0,a.kt)("h4",{id:"windows-1"},"Windows"),(0,a.kt)("p",null,"Install or upgrade the latest windows KCL to $Env:SystemDrive\\kclvm\\bin and add this directory to User PATH environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'powershell -Command "iwr -useb https://kcl-lang.io/script/install.ps1 | iex"\n')),(0,a.kt)("h3",{id:"homebrew-macos"},"Homebrew (MacOS)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kcl-lang/tap/kcl\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upgrade")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew upgrade kcl-lang/tap/kcl\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uninstall")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew uninstall kcl-lang/tap/kcl\n")),(0,a.kt)("h3",{id:"scoop-windows"},"Scoop (Windows)"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop")," first, then add this bucket and install ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop bucket add kcl-lang https://github.com/kcl-lang/scoop-bucket.git\nscoop install kcl-lang/kcl\n")),(0,a.kt)("h3",{id:"from-go"},"From Go"),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Go")," command (",(0,a.kt)("inlineCode",{parentName:"p"},"Go")," requires 1.18+)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install kcl-lang.io/kcl-go/cmds/kcl-go@main\n")),(0,a.kt)("p",null,"Add an alias for the kcl command (optional)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"alias kcl='kcl-go run'\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl-go")," does not rely on the installation of ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl"),", but if ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," exists in PATH, it will be used by ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl-go")," first.")),(0,a.kt)("h3",{id:"from-docker"},"From Docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it kcllang/kcl\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kcllang/kcl\n")),(0,a.kt)("h3",{id:"note"},"Note"),(0,a.kt)("p",null,"We can execute the following command to ensure that KCL has been installed correctly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kcl -V\n")),(0,a.kt)("p",null,"The output may looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Version: {kcl version}\nPlatform: {your platform}\nGitCommit: {git commit}\n")),(0,a.kt)("p",null,"For all the above operating systems and installation methods, if you want to use ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/plugin/overview"},"KCL Python Plugin"),", you need to ensure that Python 3.7+ is installed and add the python3 command to your PATH environment variable."),(0,a.kt)("p",null,"If you are unable to successfully install and run KCL, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/support/faq-install"},"here")),(0,a.kt)("h2",{id:"2-install-kcl-ide-extension"},"2. Install KCL IDE Extension"),(0,a.kt)("h3",{id:"vs-code"},"VS Code"),(0,a.kt)("p",null,"The KCL Extension extension provides some coding assistance, e.g., highlight, goto definition, completion, hover, outline, and diagnostics. You can go ",(0,a.kt)("a",{parentName:"p",href:"/docs/tools/Ide/vs-code"},"here")," for more information about the installation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Completion",src:l(25050).Z,width:"1312",height:"780"})),(0,a.kt)("h3",{id:"neovim"},"NeoVim"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl.nvim"},"here")," to config the KCL language server and enable it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kcl.nvim",src:l(20253).Z,width:"1246",height:"1121"})),(0,a.kt)("h3",{id:"intellij-idea"},"IntelliJ IDEA"),(0,a.kt)("p",null,"Download the distribution from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/intellij-kcl/releases"},"here")," and in IntelliJ IDEA, click Preference -> plugins -> install Plugin from Disk... -> select kcl-idea-plugin zip -> restart IDE. This plugin requires the IntelliJ IDEA 2020.2+"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"intellij",src:l(30517).Z,width:"1041",height:"650"})))}d.isMDXComponent=!0},30517:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/overview-1dbf1cc2cd1bbf6b03b06702335a10ce.png"},20253:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/overview-0667184faaf2ee0abe93374de277929b.png"},25050:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/Completion-584771cd4bed237e74d3da3decaa9757.gif"}}]);