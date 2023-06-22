"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94032],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(t),k=r,u=m["".concat(p,".").concat(k)]||m[k]||d[k]||i;return t?a.createElement(u,o(o({ref:n},s),{},{components:t})):a.createElement(u,o({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={},o="Quick Start",c={unversionedId:"user_docs/guides/package-management/quick-start",id:"version-0.5.0/user_docs/guides/package-management/quick-start",title:"Quick Start",description:"1. Init an Empty KCL Package",source:"@site/versioned_docs/version-0.5.0/user_docs/guides/package-management/3-quick-start.md",sourceDirName:"user_docs/guides/package-management",slug:"/user_docs/guides/package-management/quick-start",permalink:"/docs/user_docs/guides/package-management/quick-start",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/user_docs/guides/package-management/3-quick-start.md",tags:[],version:"0.5.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1687453636,formattedLastUpdatedAt:"Jun 22, 2023",sidebarPosition:3,frontMatter:{},sidebar:"user_docs",previous:{title:"Installation",permalink:"/docs/user_docs/guides/package-management/installation"},next:{title:"Kubernetes",permalink:"/docs/user_docs/guides/working-with-k8s/"}},p={},l=[{value:"1. Init an Empty KCL Package",id:"1-init-an-empty-kcl-package",level:2},{value:"2. Add a Dependency from OCI Registry",id:"2-add-a-dependency-from-oci-registry",level:2},{value:"Write a kcl program that uses the content in <code>k8s</code>",id:"write-a-kcl-program-that-uses-the-content-in-k8s",level:3},{value:"3. Run the KCL Code",id:"3-run-the-kcl-code",level:2}],s={toc:l};function d(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("h2",{id:"1-init-an-empty-kcl-package"},"1. Init an Empty KCL Package"),(0,r.kt)("p",null,"Create a new kcl package named ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package"),". And after we have created the package ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package"),", we need to go inside the package by ",(0,r.kt)("inlineCode",{parentName:"p"},"cd my_package")," to complete the following operations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm init my_package\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kpm_init",src:t(43515).Z,width:"1400",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," will create two kcl package configuration files: ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," in the directory where you executed the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"- my_package\n      |- kcl.mod\n      |- kcl.mod.lock\n      |- # You can write your kcl program directly in this directory.\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," is the file generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," to fix the dependency version. Do not modify this file manually."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," initializes ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," for an empty project as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "my_package"\nedition = "0.0.1"\nversion = "0.0.1"\n')),(0,r.kt)("h2",{id:"2-add-a-dependency-from-oci-registry"},"2. Add a Dependency from OCI Registry"),(0,r.kt)("p",null,"You can then add a dependency to the current kcl package using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm add")," command"),(0,r.kt)("p",null,"As shown below, taking the example of adding a package dependency named ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s"),", the version of the package is ",(0,r.kt)("inlineCode",{parentName:"p"},"1.27.2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm add k8s:1.27.2\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kpm_add_k8s",src:t(26970).Z,width:"1000",height:"300"})),(0,r.kt)("p",null,"You can see that ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," adds the dependency you just added to kcl.mod."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "my_package"\nedition = "0.0.1"\nversion = "0.0.1"\n\n[dependencies]\nk8s = "1.27.2" # The dependency \'k8s\' with version \'1.27.2\'\n')),(0,r.kt)("h3",{id:"write-a-kcl-program-that-uses-the-content-in-k8s"},"Write a kcl program that uses the content in ",(0,r.kt)("inlineCode",{parentName:"h3"},"k8s")),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file in the current package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"- my_package\n      |- kcl.mod\n      |- kcl.mod.lock\n      |- main.k # Your KCL program.\n")),(0,r.kt)("p",null,"And write the following into the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kcl"},'# Import and use the contents of the external dependency \'k8s\'.\nimport k8s.api.core.v1 as k8core\n\nk8core.Pod {\n    metadata.name = "web-app"\n    spec.containers = [{\n        name = "main-container"\n        image = "nginx"\n        ports = [{containerPort = 80}]\n    }]\n}\n\n')),(0,r.kt)("h2",{id:"3-run-the-kcl-code"},"3. Run the KCL Code"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package")," directory, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," to compile the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file you just wrote."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: web-app\nspec:\n  containers:\n    - image: nginx\n      name: main-container\n      ports:\n        - containerPort: 80\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kpm_run",src:t(97148).Z,width:"800",height:"700"})))}d.isMDXComponent=!0},26970:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/kpm_add_k8s-f4dac3002db1226437daf2f31cf6b3e9.gif"},43515:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/kpm_init-71ce5f44f54485fefe0b6e87686dc81f.gif"},97148:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/kpm_run-17cb1d24e638fc93c858aa625cf3e15a.gif"}}]);