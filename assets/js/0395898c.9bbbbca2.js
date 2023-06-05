"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:5},i="Installation Troubleshooting",c={unversionedId:"user_docs/support/faq-install",id:"version-0.5.0/user_docs/support/faq-install",title:"Installation Troubleshooting",description:"MacOS prompts that 'kcl' cannot be opened because Apple cannot check if it contains malicious software",source:"@site/versioned_docs/version-0.5.0/user_docs/support/faq-install.md",sourceDirName:"user_docs/support",slug:"/user_docs/support/faq-install",permalink:"/docs/user_docs/support/faq-install",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/user_docs/support/faq-install.md",tags:[],version:"0.5.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1685958977,formattedLastUpdatedAt:"Jun 5, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"user_docs",previous:{title:"Command Line Tool",permalink:"/docs/user_docs/support/faq-cli"}},s={},l=[{value:"MacOS prompts that &#39;kcl&#39; cannot be opened because Apple cannot check if it contains malicious software",id:"macos-prompts-that-kcl-cannot-be-opened-because-apple-cannot-check-if-it-contains-malicious-software",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-troubleshooting"},"Installation Troubleshooting"),(0,r.kt)("h2",{id:"macos-prompts-that-kcl-cannot-be-opened-because-apple-cannot-check-if-it-contains-malicious-software"},"MacOS prompts that 'kcl' cannot be opened because Apple cannot check if it contains malicious software"),(0,r.kt)("p",null,"MacOS prompts that 'kcl' cannot be opened because Apple cannot check if it contains malicious software. This issue is due to the Gatekeeper security feature in the macOS system preventing the application from running. To solve this issue, follow these steps:"),(0,r.kt)("p",null,"Open 'System Preferences' and click 'Security and Privacy'. In the \"General\" tab, you will see a message: '\"kcl\" cannot be opened'. Click 'Open still'. Alternatively, you can click 'Open any method' to open your application. (You may need to use administrator privileges to open the application.)"),(0,r.kt)("p",null,"If you don't want to perform these steps every time you open an application, you can add the application to the whitelist to run without being blocked. To add your application to the whitelist:"),(0,r.kt)("p",null,"Open the terminal and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"xattr -rd com.apple.quarantine /path/to/kcl\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/kcl")," is the complete path of the kcl application. After running the command, the application will be added to the whitelist and Gatekeeper will no longer prevent it from running."))}u.isMDXComponent=!0}}]);