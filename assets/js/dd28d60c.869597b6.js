"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(l,".").concat(m)]||d[m]||k[m]||i;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="Quick Start",c={unversionedId:"user_docs/guides/package-management/quick-start",id:"version-0.5.3/user_docs/guides/package-management/quick-start",title:"Quick Start",description:"0. Prerequisite",source:"@site/versioned_docs/version-0.5.3/user_docs/guides/package-management/3-quick-start.md",sourceDirName:"user_docs/guides/package-management",slug:"/user_docs/guides/package-management/quick-start",permalink:"/docs/0.5.3/user_docs/guides/package-management/quick-start",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.3/user_docs/guides/package-management/3-quick-start.md",tags:[],version:"0.5.3",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:3,frontMatter:{},sidebar:"user_docs",previous:{title:"Installation",permalink:"/docs/0.5.3/user_docs/guides/package-management/installation"},next:{title:"Share Your Package",permalink:"/docs/0.5.3/user_docs/guides/package-management/how-to/share_your_pkg"}},l={},p=[{value:"0. Prerequisite",id:"0-prerequisite",level:2},{value:"1. Init an Empty KCL Package",id:"1-init-an-empty-kcl-package",level:2},{value:"2. Add a Dependency from OCI Registry",id:"2-add-a-dependency-from-oci-registry",level:2},{value:"Write a kcl program that uses the content in <code>k8s</code>",id:"write-a-kcl-program-that-uses-the-content-in-k8s",level:3},{value:"3. Run the KCL Code",id:"3-run-the-kcl-code",level:2}],s={toc:p},d="wrapper";function k(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("h2",{id:"0-prerequisite"},"0. Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/guides/package-management/installation"},"kpm"))),(0,r.kt)("h2",{id:"1-init-an-empty-kcl-package"},"1. Init an Empty KCL Package"),(0,r.kt)("p",null,"Create a new kcl package named ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package"),". And after we have created the package ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package"),", we need to go inside the package by ",(0,r.kt)("inlineCode",{parentName:"p"},"cd my_package")," to complete the following operations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm init my_package && cd my_package\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kpm_init",src:n(43515).Z,width:"1400",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," will create two kcl package configuration files: ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," in the directory where you executed the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"- my_package\n      |- kcl.mod\n      |- kcl.mod.lock\n      |- # You can write your kcl program directly in this directory.\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," is the file generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," to fix the dependency version. Do not modify this file manually."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," initializes ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," for an empty project as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "my_package"\nedition = "0.0.1"\nversion = "0.0.1"\n')),(0,r.kt)("h2",{id:"2-add-a-dependency-from-oci-registry"},"2. Add a Dependency from OCI Registry"),(0,r.kt)("p",null,"You can then add a dependency to the current kcl package using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm add")," command"),(0,r.kt)("p",null,"As shown below, taking the example of adding a package dependency named ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s"),", the version of the package is ",(0,r.kt)("inlineCode",{parentName:"p"},"1.27.2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm add k8s:1.27.2\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kpm_add_k8s",src:n(26970).Z,width:"1000",height:"300"})),(0,r.kt)("p",null,"You can see that ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," adds the dependency you just added to kcl.mod."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "my_package"\nedition = "0.0.1"\nversion = "0.0.1"\n\n[dependencies]\nk8s = "1.27.2" # The dependency \'k8s\' with version \'1.27.2\'\n')),(0,r.kt)("h3",{id:"write-a-kcl-program-that-uses-the-content-in-k8s"},"Write a kcl program that uses the content in ",(0,r.kt)("inlineCode",{parentName:"h3"},"k8s")),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file in the current package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"- my_package\n      |- kcl.mod\n      |- kcl.mod.lock\n      |- main.k # Your KCL program.\n")),(0,r.kt)("p",null,"And write the following into the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kcl"},'# Import and use the contents of the external dependency \'k8s\'.\nimport k8s.api.core.v1 as k8core\n\nk8core.Pod {\n    metadata.name = "web-app"\n    spec.containers = [{\n        name = "main-container"\n        image = "nginx"\n        ports = [{containerPort = 80}]\n    }]\n}\n\n')),(0,r.kt)("h2",{id:"3-run-the-kcl-code"},"3. Run the KCL Code"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package")," directory, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," to compile the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file you just wrote."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: web-app\nspec:\n  containers:\n    - image: nginx\n      name: main-container\n      ports:\n        - containerPort: 80\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kpm_run",src:n(97148).Z,width:"800",height:"700"})))}k.isMDXComponent=!0},26970:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kpm_add_k8s-f4dac3002db1226437daf2f31cf6b3e9.gif"},43515:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kpm_init-71ce5f44f54485fefe0b6e87686dc81f.gif"},97148:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kpm_run-17cb1d24e638fc93c858aa625cf3e15a.gif"}}]);