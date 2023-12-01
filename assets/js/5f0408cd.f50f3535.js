"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:5},i="Installation Troubleshooting",l={unversionedId:"user_docs/support/faq-install",id:"version-0.7.0/user_docs/support/faq-install",title:"Installation Troubleshooting",description:"MacOS prompts that 'kcl' cannot be opened because Apple cannot check if it contains malicious software",source:"@site/versioned_docs/version-0.7.0/user_docs/support/faq-install.md",sourceDirName:"user_docs/support",slug:"/user_docs/support/faq-install",permalink:"/docs/user_docs/support/faq-install",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/support/faq-install.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701417593,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"user_docs",previous:{title:"Command Line Tool",permalink:"/docs/user_docs/support/faq-cli"}},s={},c=[{value:"MacOS prompts that &#39;kcl&#39; cannot be opened because Apple cannot check if it contains malicious software",id:"macos-prompts-that-kcl-cannot-be-opened-because-apple-cannot-check-if-it-contains-malicious-software",level:2},{value:"program not found or run linker failed error on Windows/Linux/MacOS",id:"program-not-found-or-run-linker-failed-error-on-windowslinuxmacos",level:2},{value:"Encountering exit status 0xc0000135 error on Windows platform",id:"encountering-exit-status-0xc0000135-error-on-windows-platform",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-troubleshooting"},"Installation Troubleshooting"),(0,r.kt)("h2",{id:"macos-prompts-that-kcl-cannot-be-opened-because-apple-cannot-check-if-it-contains-malicious-software"},"MacOS prompts that 'kcl' cannot be opened because Apple cannot check if it contains malicious software"),(0,r.kt)("p",null,"MacOS prompts that 'kcl' cannot be opened because Apple cannot check if it contains malicious software. This issue is due to the Gatekeeper security feature in the macOS system preventing the application from running. To solve this issue, follow these steps:"),(0,r.kt)("p",null,"Open 'System Preferences' and click 'Security and Privacy'. In the \"General\" tab, you will see a message: '\"kcl\" cannot be opened'. Click 'Open still'. Alternatively, you can click 'Open any method' to open your application. (You may need to use administrator privileges to open the application.)"),(0,r.kt)("p",null,"If you don't want to perform these steps every time you open an application, you can add the application to the whitelist to run without being blocked. To add your application to the whitelist:"),(0,r.kt)("p",null,"Open the terminal and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"xattr -rd com.apple.quarantine /path/to/kcl\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/kcl")," is the complete path of the kcl application. After running the command, the application will be added to the whitelist and Gatekeeper will no longer prevent it from running."),(0,r.kt)("h2",{id:"program-not-found-or-run-linker-failed-error-on-windowslinuxmacos"},"program not found or run linker failed error on Windows/Linux/MacOS"),(0,r.kt)("p",null,"Please ensure that the following dependencies are in your PATH:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clang")," for MacOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gcc")," for Linux"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cl.exe")," for Windows, which can be obtained by installing ",(0,r.kt)("inlineCode",{parentName:"li"},"MSVC"))),(0,r.kt)("h2",{id:"encountering-exit-status-0xc0000135-error-on-windows-platform"},"Encountering exit status 0xc0000135 error on Windows platform"),(0,r.kt)("p",null,"Please ensure that .NET Framework and MSVC are installed on your Windows. If not installed, you can install them and try again."))}d.isMDXComponent=!0}}]);