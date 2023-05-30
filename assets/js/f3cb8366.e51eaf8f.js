"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,u=m["".concat(c,".").concat(d)]||m[d]||k[d]||i;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="Quick Start",l={unversionedId:"user_docs/guides/package-management/quick-start",id:"version-0.4.6/user_docs/guides/package-management/quick-start",title:"Quick Start",description:"Init an empty kcl package",source:"@site/versioned_docs/version-0.4.6/user_docs/guides/package-management/3-quick-start.md",sourceDirName:"user_docs/guides/package-management",slug:"/user_docs/guides/package-management/quick-start",permalink:"/docs/0.4.6/user_docs/guides/package-management/quick-start",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/package-management/3-quick-start.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1685451649,formattedLastUpdatedAt:"May 30, 2023",sidebarPosition:3,frontMatter:{},sidebar:"user_docs",previous:{title:"Installation",permalink:"/docs/0.4.6/user_docs/guides/package-management/installation"},next:{title:"Kubernetes",permalink:"/docs/0.4.6/user_docs/guides/working-with-k8s/"}},c={},p=[{value:"Init an empty kcl package",id:"init-an-empty-kcl-package",level:2},{value:"Add a dependency from Git Registry",id:"add-a-dependency-from-git-registry",level:2},{value:"Write a kcl program that uses the content in <code>konfig</code>",id:"write-a-kcl-program-that-uses-the-content-in-konfig",level:2},{value:"Compile the kcl package",id:"compile-the-kcl-package",level:2},{value:"Package your current kcl package with its dependencies",id:"package-your-current-kcl-package-with-its-dependencies",level:2}],s={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("h2",{id:"init-an-empty-kcl-package"},"Init an empty kcl package"),(0,r.kt)("p",null,"First, create an empty folder for the KCL package and go into that folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir my_package # create an empty folder 'my_package'\ncd my_package # go into the folder 'my_package'\n")),(0,r.kt)("p",null,"Create a new kcl package named ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm init my_package\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," will create two kcl package configuration files: ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," in the directory where you executed the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"- my_package\n      |- kcl.mod\n      |- kcl.mod.lock\n      |- # You can write your kcl program directly in this directory.\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," is the file generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," to fix the dependency version. Do not modify this file manually."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," initializes ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," for an empty project as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "my_package"\nedition = "0.0.1"\nversion = "0.0.1"\n')),(0,r.kt)("h2",{id:"add-a-dependency-from-git-registry"},"Add a dependency from Git Registry"),(0,r.kt)("p",null,"If you need to use the KCL model in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awesome-kusion/konfig.git"},"Konfig")," to write the kcl program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm add -git https://github.com/awesome-kusion/konfig.git -tag v0.0.1\n")),(0,r.kt)("p",null,"You can see that ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," adds the dependency you just added to kcl.mod."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "my_package"\nedition = "0.0.1"\nversion = "0.0.1"\n\n[dependencies]\n# \'konfig\' is the package name\n# If you want to use the contents of this package, \n# you need to write the import statment with the package name \'konfig\' as the prefix.\nkonfig = { git = "https://github.com/awesome-kusion/konfig.git", tag = "v0.0.1" }\n')),(0,r.kt)("h2",{id:"write-a-kcl-program-that-uses-the-content-in-konfig"},"Write a kcl program that uses the content in ",(0,r.kt)("inlineCode",{parentName:"h2"},"konfig")),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file in the current package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"- my_package\n      |- kcl.mod\n      |- kcl.mod.lock\n      |- main.k # Your KCL program.\n")),(0,r.kt)("p",null,"And write the following into the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kcl"},'import konfig.base.pkg.kusion_kubernetes.api.apps.v1 as apps\n\ndemo = apps.Deployment {\n    metadata.name = "nginx-deployment"\n    spec = {\n        replicas = 3\n        selector.matchLabels.app = "nginx"\n        template.metadata.labels = selector.matchLabels\n        template.spec.containers = [\n            {\n                name = selector.matchLabels.app\n                image = "nginx:1.14.2"\n                ports = [\n                    {containerPort = 80}\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"compile-the-kcl-package"},"Compile the kcl package"),(0,r.kt)("p",null,"You can use the command to compile the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file you just wrote."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl main.k -S demo\n")),(0,r.kt)("p",null,"If you get the following output, congratulations !, you have successfully compiled your kcl package with ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - image: "nginx:1.14.2"\n          name: nginx\n          ports:\n            - containerPort: 80\n')),(0,r.kt)("h2",{id:"package-your-current-kcl-package-with-its-dependencies"},"Package your current kcl package with its dependencies"),(0,r.kt)("p",null,"You can use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm pkg")," to package your current kcl package with its dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pkg --target my_package.tar\n")),(0,r.kt)("p",null,"After this command is executed, a tar package will be packaged in the ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package.tar")," directory. And all the dependencies for ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package")," will be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"vendor")," subdirectory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"- my_package\n      |- kcl.mod\n      |- kcl.mod.lock\n      |- main.k\n      |- my_package.tar # The file (*.tar) packaged by kpm.\n      |- vendor # All the dependencies for `my_package` will be stored in the `vendor` \n            |- konfig_v0.0.1\n")))}k.isMDXComponent=!0}}]);