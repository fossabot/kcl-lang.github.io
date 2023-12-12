"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[44814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,u=s["".concat(l,".").concat(m)]||s[m]||k[m]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Quick Start",c={unversionedId:"user_docs/guides/package-management/quick-start",id:"user_docs/guides/package-management/quick-start",title:"Quick Start",description:"0. Prerequisite",source:"@site/docs/user_docs/guides/package-management/3-quick-start.md",sourceDirName:"user_docs/guides/package-management",slug:"/user_docs/guides/package-management/quick-start",permalink:"/docs/next/user_docs/guides/package-management/quick-start",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/package-management/3-quick-start.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1702363140,formattedLastUpdatedAt:"Dec 12, 2023",sidebarPosition:3,frontMatter:{},sidebar:"user_docs",previous:{title:"Automation",permalink:"/docs/next/user_docs/guides/automation"},next:{title:"Share Your Package to ghcr.io",permalink:"/docs/next/user_docs/guides/package-management/how-to/share_your_pkg"}},l={},p=[{value:"0. Prerequisite",id:"0-prerequisite",level:2},{value:"1. Init an Empty KCL Package",id:"1-init-an-empty-kcl-package",level:2},{value:"2. Add a Dependency from OCI Registry",id:"2-add-a-dependency-from-oci-registry",level:2},{value:"Write a kcl program that uses the content in <code>k8s</code>",id:"write-a-kcl-program-that-uses-the-content-in-k8s",level:3},{value:"3. Run the KCL Code",id:"3-run-the-kcl-code",level:2}],d={toc:p},s="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("h2",{id:"0-prerequisite"},"0. Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install/"},"kcl"))),(0,r.kt)("h2",{id:"1-init-an-empty-kcl-package"},"1. Init an Empty KCL Package"),(0,r.kt)("p",null,"Create a new kcl package named ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod init")," command. And after we have created the package ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package"),", we need to go inside the package by ",(0,r.kt)("inlineCode",{parentName:"p"},"cd my_package")," to complete the following operations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init my_package && cd my_package\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," will create two kcl package configuration files: ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," in the directory where you executed the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"- my_package\n      |- kcl.mod\n      |- kcl.mod.lock\n      |- # You can write your kcl program directly in this directory.\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," is the file generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," to fix the dependency version. Do not modify this file manually."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," initializes ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," for an empty project as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "my_package"\nedition = "0.0.1"\nversion = "0.0.1"\n')),(0,r.kt)("h2",{id:"2-add-a-dependency-from-oci-registry"},"2. Add a Dependency from OCI Registry"),(0,r.kt)("p",null,"You can then add a dependency to the current kcl package using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod add")," command"),(0,r.kt)("p",null,"As shown below, taking the example of adding a package dependency named ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s"),", the version of the package is ",(0,r.kt)("inlineCode",{parentName:"p"},"1.28"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod add k8s:1.28\n")),(0,r.kt)("p",null,"You can see that ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," adds the dependency you just added to kcl.mod."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "my_package"\nedition = "0.0.1"\nversion = "0.0.1"\n\n[dependencies]\nk8s = "1.28" # The dependency \'k8s\' with version \'1.28\'\n')),(0,r.kt)("h3",{id:"write-a-kcl-program-that-uses-the-content-in-k8s"},"Write a kcl program that uses the content in ",(0,r.kt)("inlineCode",{parentName:"h3"},"k8s")),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file in the current package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"- my_package\n      |- kcl.mod\n      |- kcl.mod.lock\n      |- main.k # Your KCL program.\n")),(0,r.kt)("p",null,"And write the following into the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kcl"},'# Import and use the contents of the external dependency \'k8s\'.\nimport k8s.api.core.v1 as k8core\n\nk8core.Pod {\n    metadata.name = "web-app"\n    spec.containers = [{\n        name = "main-container"\n        image = "nginx"\n        ports = [{containerPort = 80}]\n    }]\n}\n\n')),(0,r.kt)("h2",{id:"3-run-the-kcl-code"},"3. Run the KCL Code"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package")," directory, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," to compile the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file you just wrote."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl run\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: web-app\nspec:\n  containers:\n    - image: nginx\n      name: main-container\n      ports:\n        - containerPort: 80\n")))}k.isMDXComponent=!0}}]);