"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[12202],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>g});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)l=s[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)l=s[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(l),k=a,g=u["".concat(o,".").concat(k)]||u[k]||d[k]||s;return l?n.createElement(g,r(r({ref:t},p),{},{components:l})):n.createElement(g,r({ref:t},p))}));function g(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=l.length,r=new Array(s);r[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<s;c++)r[c]=l[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},11684:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=l(87462),a=(l(67294),l(3905));const s={sidebar_position:2},r="Installation",i={unversionedId:"user_docs/getting-started/install",id:"version-0.7.0/user_docs/getting-started/install",title:"Installation",description:"1. Install KCL",source:"@site/versioned_docs/version-0.7.0/user_docs/getting-started/install.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/install",permalink:"/docs/user_docs/getting-started/install",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/getting-started/install.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1708611628,formattedLastUpdatedAt:"Feb 22, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Introduction",permalink:"/docs/user_docs/getting-started/intro"},next:{title:"Quick Start",permalink:"/docs/user_docs/getting-started/kcl-quick-start"}},o={},c=[{value:"1. Install KCL",id:"1-install-kcl",level:2},{value:"From the Binary Releases",id:"from-the-binary-releases",level:3},{value:"MacOS &amp; Linux",id:"macos--linux",level:4},{value:"Windows",id:"windows",level:4},{value:"Using script to install the latest release",id:"using-script-to-install-the-latest-release",level:3},{value:"MacOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4},{value:"Windows",id:"windows-1",level:4},{value:"Homebrew (MacOS)",id:"homebrew-macos",level:3},{value:"Scoop (Windows)",id:"scoop-windows",level:3},{value:"From Go",id:"from-go",level:3},{value:"From Docker",id:"from-docker",level:3},{value:"Note",id:"note",level:3},{value:"2. Install KCL IDE Extension",id:"2-install-kcl-ide-extension",level:2},{value:"Install Language Server",id:"install-language-server",level:3},{value:"MacOS",id:"macos-1",level:4},{value:"Linux",id:"linux-1",level:4},{value:"Windows",id:"windows-2",level:4},{value:"Homebrew (MacOS)",id:"homebrew-macos-1",level:4},{value:"Scoop (Windows)",id:"scoop-windows-1",level:4},{value:"Install KCL Extensions for IDE",id:"install-kcl-extensions-for-ide",level:3},{value:"VS Code",id:"vs-code",level:4},{value:"NeoVim",id:"neovim",level:4},{value:"IntelliJ IDEA",id:"intellij-idea",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...s}=e;return(0,a.kt)(u,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"1-install-kcl"},"1. Install KCL"),(0,a.kt)("h3",{id:"from-the-binary-releases"},"From the Binary Releases"),(0,a.kt)("p",null,"Each release of KCL includes various OSes and architectures. These binary versions can be manually downloaded and installed from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/cli/releases/"},"Github")," and add ",(0,a.kt)("inlineCode",{parentName:"p"},"{install-location}")," to the environment PATH."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If you cannot successfully access Github, you can also access Gitee to obtain binaries for installation.")),(0,a.kt)("h4",{id:"macos--linux"},"MacOS & Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:{install-location}\n")),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:PATH += ";{install-location};"\n')),(0,a.kt)("h3",{id:"using-script-to-install-the-latest-release"},"Using script to install the latest release"),(0,a.kt)("h4",{id:"macos"},"MacOS"),(0,a.kt)("p",null,"Install or upgrade the latest darwin KCL to /usr/local/bin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kcl-lang.io/script/install-cli.sh | /bin/bash\n")),(0,a.kt)("p",null,"Uninstall"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kcl-lang.io/script/uninstall-cli.sh | /bin/bash\n")),(0,a.kt)("h4",{id:"linux"},"Linux"),(0,a.kt)("p",null,"Install or upgrade the latest linux KCL to /usr/local/bin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://kcl-lang.io/script/install-cli.sh -O - | /bin/bash\n")),(0,a.kt)("p",null,"Uninstall"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://kcl-lang.io/script/uninstall-cli.sh -O - | /bin/bash\n")),(0,a.kt)("h4",{id:"windows-1"},"Windows"),(0,a.kt)("p",null,"Install or upgrade the latest windows KCL to $Env:SystemDrive\\kclvm\\bin and add this directory to User PATH environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'powershell -Command "iwr -useb https://kcl-lang.io/script/install-cli.ps1 | iex"\n')),(0,a.kt)("p",null,"Uninstall"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'powershell -Command "iwr -useb https://kcl-lang.io/script/uninstall-cli.ps1 | iex"\n')),(0,a.kt)("h3",{id:"homebrew-macos"},"Homebrew (MacOS)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the latest version\nbrew install kcl-lang/tap/kcl@0.7.0\n\n# Specify a version\nbrew install kcl-lang/tap/kcl@x.y.z\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upgrade")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew upgrade kcl-lang/tap/kcl\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uninstall")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew uninstall kcl-lang/tap/kcl\n")),(0,a.kt)("h3",{id:"scoop-windows"},"Scoop (Windows)"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop")," first, then add this bucket and install ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop bucket add kcl-lang https://github.com/kcl-lang/scoop-bucket.git\nscoop install kcl-lang/kcl\n")),(0,a.kt)("h3",{id:"from-go"},"From Go"),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Go")," command (",(0,a.kt)("inlineCode",{parentName:"p"},"Go")," requires 1.19+)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install kcl-lang.io/cli/cmd/kcl@latest\n")),(0,a.kt)("h3",{id:"from-docker"},"From Docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it kcllang/kcl\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kcllang/kcl\n")),(0,a.kt)("h3",{id:"note"},"Note"),(0,a.kt)("p",null,"We can execute the following command to ensure that KCL has been installed correctly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kcl --help\n")),(0,a.kt)("p",null,"For all the above operating systems and installation methods, if you want to use ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/plugin/overview"},"KCL Python Plugin"),", you need to ensure that Python 3.7+ is installed and add the python3 command to your PATH environment variable."),(0,a.kt)("p",null,"If you are unable to successfully install and run KCL, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/support/faq-install"},"here")),(0,a.kt)("h2",{id:"2-install-kcl-ide-extension"},"2. Install KCL IDE Extension"),(0,a.kt)("h3",{id:"install-language-server"},"Install Language Server"),(0,a.kt)("p",null,"Before we enable the IDE extension, first we install the KCL Language Server binary and add it to the PATH."),(0,a.kt)("h4",{id:"macos-1"},"MacOS"),(0,a.kt)("p",null,"Install or upgrade the latest darwin KCL language server to /usr/local/bin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kcl-lang.io/script/install-kcl-lsp.sh | /bin/bash\n")),(0,a.kt)("h4",{id:"linux-1"},"Linux"),(0,a.kt)("p",null,"Install or upgrade the latest linux KCL language server to /usr/local/bin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://kcl-lang.io/script/install-kcl-lsp.sh -O - | /bin/bash\n")),(0,a.kt)("h4",{id:"windows-2"},"Windows"),(0,a.kt)("p",null,"Install or upgrade the latest windows KCL language server to $Env:SystemDrive\\kclvm\\bin and add this directory to User PATH environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'powershell -Command "iwr -useb https://kcl-lang.io/script/install-kcl-lsp.ps1 | iex"\n')),(0,a.kt)("h4",{id:"homebrew-macos-1"},"Homebrew (MacOS)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the latest version\nbrew install kcl-lang/tap/kcl-lsp@0.7.0\n\n# Specify a version\nbrew install kcl-lang/tap/kcl-lsp@x.y.z\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upgrade")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew upgrade kcl-lang/tap/kcl-lsp\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uninstall")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew uninstall kcl-lang/tap/kcl-lsp\n")),(0,a.kt)("h4",{id:"scoop-windows-1"},"Scoop (Windows)"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop")," first, then add this bucket and install ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl-language-server")," by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scoop bucket add kcl-lang https://github.com/kcl-lang/scoop-bucket.git\nscoop install kcl-lang/kcl-lsp\n")),(0,a.kt)("h3",{id:"install-kcl-extensions-for-ide"},"Install KCL Extensions for IDE"),(0,a.kt)("h4",{id:"vs-code"},"VS Code"),(0,a.kt)("p",null,"The KCL Extension extension provides some coding assistance, e.g., highlight, goto definition, completion, hover, outline, and diagnostics. You can go ",(0,a.kt)("a",{parentName:"p",href:"/docs/tools/Ide/vs-code"},"here")," for more information about the installation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Completion",src:l(25050).Z,width:"1312",height:"780"})),(0,a.kt)("h4",{id:"neovim"},"NeoVim"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl.nvim"},"here")," to config the KCL language server and enable it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kcl.nvim",src:l(20253).Z,width:"1246",height:"1121"})),(0,a.kt)("h4",{id:"intellij-idea"},"IntelliJ IDEA"),(0,a.kt)("p",null,"Download the distribution from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/intellij-kcl/releases"},"here")," and in IntelliJ IDEA, click Preference -> plugins -> install Plugin from Disk... -> select kcl-idea-plugin zip -> restart IDE. This plugin requires the IntelliJ IDEA 2020.2+"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"intellij",src:l(30517).Z,width:"1041",height:"650"})))}d.isMDXComponent=!0},30517:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/overview-1dbf1cc2cd1bbf6b03b06702335a10ce.png"},20253:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/overview-0667184faaf2ee0abe93374de277929b.png"},25050:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/Completion-584771cd4bed237e74d3da3decaa9757.gif"}}]);