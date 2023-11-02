"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47972],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>m});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(l),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return l?n.createElement(m,o(o({ref:t},c),{},{components:l})):n.createElement(m,o({ref:t},c))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},73521:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=l(87462),a=(l(67294),l(3905));const r={sidebar_position:1},o="Quick Start",i={unversionedId:"tools/cli/openapi/quick-start",id:"version-0.7.0/tools/cli/openapi/quick-start",title:"Quick Start",description:"1. Install KCLOpenAPI Tool",source:"@site/versioned_docs/version-0.7.0/tools/cli/openapi/quick-start.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/quick-start",permalink:"/docs/tools/cli/openapi/quick-start",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/tools/cli/openapi/quick-start.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1698928861,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"OpenAPI Tools",permalink:"/docs/tools/cli/openapi/"},next:{title:"CRD to KCL",permalink:"/docs/tools/cli/openapi/crd-to-kcl"}},s={},p=[{value:"1. Install KCLOpenAPI Tool",id:"1-install-kclopenapi-tool",level:2},{value:"1.1 go install",id:"11-go-install",level:2},{value:"1.2 Curl|sh install (MacOS &amp; Linux)",id:"12-curlsh-install-macos--linux",level:2},{value:"1.3 Download from release",id:"13-download-from-release",level:2},{value:"1.4 Verify your installation",id:"14-verify-your-installation",level:2},{value:"2. Generate KCL Files",id:"2-generate-kcl-files",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("h2",{id:"1-install-kclopenapi-tool"},"1. Install KCLOpenAPI Tool"),(0,a.kt)("p",null,"The kcl-openapi tool can be installed in following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#quick-start"},"Quick Start"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#1-install-kclopenapi-tool"},"1. Install KCLOpenAPI Tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#11-go-install"},"1.1 go install")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#12-curlsh-install-macos--linux"},"1.2 Curl|sh install (MacOS \\& Linux)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#13-download-from-release"},"1.3 Download from release")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#14-verify-your-installation"},"1.4 Verify your installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#2-generate-kcl-files"},"2. Generate KCL Files"))))),(0,a.kt)("h2",{id:"11-go-install"},"1.1 go install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go install kcl-lang.io/kcl-openapi@latest\n")),(0,a.kt)("h2",{id:"12-curlsh-install-macos--linux"},"1.2 Curl|sh install (MacOS & Linux)"),(0,a.kt)("p",null,"If you don't have go, you can install the CLI with this one-liner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://kcl-lang.io/script/install-kcl-openapi.sh | /bin/bash\n")),(0,a.kt)("h2",{id:"13-download-from-release"},"1.3 Download from release"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# 1. download the released binary from:\n# https://github.com/kcl-lang/kcl-openapi/releases\n\n# 2. Unzip the package and add the binary location to PATH\nexport PATH="<Your directory to store KCLOpenapi binary>:$PATH"\n')),(0,a.kt)("h2",{id:"14-verify-your-installation"},"1.4 Verify your installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  kcl-openapi -v\nkcl-openapi 0.5.0\n")),(0,a.kt)("h2",{id:"2-generate-kcl-files"},"2. Generate KCL Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tools/cli/openapi/openapi-to-kcl"},"OpenAPI to KCL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tools/cli/openapi/crd-to-kcl"},"CRD to KCL"))))}d.isMDXComponent=!0}}]);