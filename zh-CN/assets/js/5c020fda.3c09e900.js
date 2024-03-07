"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[5064],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),k=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=k(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=k(t),s=i,u=m["".concat(o,".").concat(s)]||m[s]||c[s]||r;return t?a.createElement(u,l(l({ref:n},d),{},{components:t})):a.createElement(u,l({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[m]="string"==typeof e?e:i,l[1]=p;for(var k=2;k<r;k++)l[k]=t[k];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},78296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var a=t(87462),i=(t(67294),t(3905));const r={},l="kcl.mod: KCL \u5305\u6e05\u5355\u6587\u4ef6",p={unversionedId:"user_docs/guides/package-management/how-to/kcl_mod",id:"user_docs/guides/package-management/how-to/kcl_mod",title:"kcl.mod: KCL \u5305\u6e05\u5355\u6587\u4ef6",description:"1. KCL \u5305\u6e05\u5355",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/package-management/4-how-to/8-kcl_mod.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/kcl_mod",permalink:"/zh-CN/docs/next/user_docs/guides/package-management/how-to/kcl_mod",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/package-management/4-how-to/8-kcl_mod.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1709793003,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",sidebarPosition:8,frontMatter:{},sidebar:"user_docs",previous:{title:"\u5c06\u60a8\u7684 KCL \u5305\u53d1\u5e03\u5230 ArtifactHub",permalink:"/zh-CN/docs/next/user_docs/guides/package-management/how-to/publish_pkg_to_ah"},next:{title:"Support for OCI Registries",permalink:"/zh-CN/docs/next/user_docs/guides/package-management/how-to/kpm_oci"}},o={},k=[{value:"1. KCL \u5305\u6e05\u5355",id:"1-kcl-\u5305\u6e05\u5355",level:2},{value:"2. package",id:"2-package",level:2},{value:"2.1. name",id:"21-name",level:3},{value:"2.2. version",id:"22-version",level:3},{value:"2.3. edition",id:"23-edition",level:3},{value:"2.4. description",id:"24-description",level:3},{value:"3. dependencies",id:"3-dependencies",level:2},{value:"3.1. oci dependency",id:"31-oci-dependency",level:3},{value:"3.2. git dependency",id:"32-git-dependency",level:3},{value:"4. entries",id:"4-entries",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3}],d={toc:k},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kclmod-kcl-\u5305\u6e05\u5355\u6587\u4ef6"},"kcl.mod: KCL \u5305\u6e05\u5355\u6587\u4ef6"),(0,i.kt)("h2",{id:"1-kcl-\u5305\u6e05\u5355"},"1. KCL \u5305\u6e05\u5355"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u6a21\u5757\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u6587\u4ef6\u90fd\u88ab\u79f0\u4e3a\u5176\u6e05\u5355\u3002\u5b83\u91c7\u7528 TOML \u683c\u5f0f\u7f16\u5199\uff0c\u5305\u542b\u7f16\u8bd1\u6a21\u5757\u6240\u9700\u7684\u5143\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u76ee\u524d ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u4e2d\u652f\u6301\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5305\u5143\u6570\u636e\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#package"},"package")," - \u5b9a\u4e49\u4e00\u4e2a\u5305\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#package"},"name")," \u2014 \u5305\u7684\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#package"},"version")," \u2014 \u5305\u7684\u7248\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#package"},"edition")," \u2014 KCL \u7f16\u8bd1\u5668\u7248\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#package"},"description")," \u2014 \u5305\u7684\u63cf\u8ff0\u3002"))))),(0,i.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u8868\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dependencies"},"dependencies")," - \u5305\u5e93\u4f9d\u8d56\u9879\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u5668\u8bbe\u7f6e\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#entries"},"profile")," - \u7f16\u8bd1\u5668\u8bbe\u7f6e\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#entries"},"entries")," - \u7f16\u8bd1\u5305\u7684\u5165\u53e3\u70b9\u3002")))))),(0,i.kt)("h2",{id:"2-package"},"2. package"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u4e2d\u7684\u7b2c\u4e00\u4e2a\u90e8\u5206\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"[package]"),"\u3002\u4e3b\u8981\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"version"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"edition")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," \u5b57\u6bb5\u3002"),(0,i.kt)("h3",{id:"21-name"},"2.1. name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u662f\u5305\u7684\u540d\u79f0\uff0c\u5b83\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32, \u8fd9\u662f\u4e00\u4e2a\u5fc5\u8981\u7684\u5b57\u6bb5, \u6ce8\u610f\uff0c\u5305\u7684\u540d\u79f0\u4e2d\u4e0d\u53ef\u4ee5\u5305\u542b",(0,i.kt)("inlineCode",{parentName:"p"},'"."'),"\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982: \u4e00\u4e2a\u5305\u540d\u4e3a my_pkg \u7684 kcl \u7a0b\u5e8f\u5305\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[package]\nname = "my_pkg"\n')),(0,i.kt)("h3",{id:"22-version"},"2.2. version"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"version")," \u662f\u5305\u7684\u7248\u672c\uff0c\u5b83\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32, \u8fd9\u662f\u4e00\u4e2a\u5fc5\u8981\u7684\u5b57\u6bb5\u3002\u6ce8\u610f\uff0c\u76ee\u524d KCL \u7a0b\u5e8f\u5305\u7684\u7248\u672c\u53f7\u4ec5\u652f\u6301\u8bed\u4e49\u5316\u7248\u672c\u53f7\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982: ",(0,i.kt)("inlineCode",{parentName:"p"},"my_pkg")," \u7a0b\u5e8f\u5305\u7684\u7248\u672c\u53f7\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1.0"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[package]\nname = "my_pkg"\nversion = "0.1.0"\n')),(0,i.kt)("h3",{id:"23-edition"},"2.3. edition"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"edition")," \u662f KCL \u7f16\u8bd1\u5668\u7248\u672c\uff0c\u5b83\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32, \u8fd9\u662f\u4e00\u4e2a\u5fc5\u8981\u7684\u5b57\u6bb5\u3002\u6ce8\u610f\uff0c\u76ee\u524d KCL \u7f16\u8bd1\u5668\u7248\u672c\u53f7\u4ec5\u652f\u6301\u8bed\u4e49\u5316\u7248\u672c\u53f7\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982: ",(0,i.kt)("inlineCode",{parentName:"p"},"my_pkg")," \u7a0b\u5e8f\u5305\u7684\u7248\u672c\u53f7\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1.0"),", \u5e76\u4e14\u4e0e 0.5.1 \u7684 KCL \u7f16\u8bd1\u5668\u517c\u5bb9\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[package]\nname = "my_pkg"\nversion = "0.1.0"\nedition = "0.5.0"\n')),(0,i.kt)("h3",{id:"24-description"},"2.4. description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"description")," \u662f\u5305\u7684\u63cf\u8ff0\uff0c\u5b83\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32, \u8fd9\u662f\u4e00\u4e2a\u53ef\u9009\u7684\u5b57\u6bb5\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982: ",(0,i.kt)("inlineCode",{parentName:"p"},"my_pkg")," \u7a0b\u5e8f\u5305\u7684\u63cf\u8ff0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"This is my package."),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[package]\nname = "my_pkg"\nversion = "0.1.0"\nedition = "0.5.0"\ndescription = "This is my package."\n')),(0,i.kt)("h2",{id:"3-dependencies"},"3. dependencies"),(0,i.kt)("p",null,"\u4f60\u7684 kcl \u5305\u53ef\u4ee5\u4f9d\u8d56\u4e8e\u6765\u81ea OCI \u4ed3\u5e93\u3001Git \u5b58\u50a8\u5e93\u6216\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u5b50\u76ee\u5f55\u7684\u5176\u4ed6\u5e93\u3002"),(0,i.kt)("h3",{id:"31-oci-dependency"},"3.1. oci dependency"),(0,i.kt)("p",null,"KCL \u5305\u7ba1\u7406\u5de5\u5177\u9ed8\u8ba4\u5c06\u5305\u4fdd\u5b58\u5728 oci registry \u4e0a\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7684 oci registry \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"ghcr.io/kcl-lang"),"\u3002\n\u66f4\u591a\u5185\u5bb9\u5173\u4e8e oci registry \u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/package-management/how-to/oci_reg_supports"},"\u652f\u6301 OCI registry"),"\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u65b9\u5f0f\u6307\u5b9a\u4f9d\u8d56\u9879\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"[dependencies]\n<package name> = <package_version>\n")),(0,i.kt)("p",null,"\u8fd9\u5c06\u4f1a\u4ece oci registry \u4e2d\u62c9\u53d6\u540d\u79f0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<package name>")," \u7684\u5305\uff0c\u7248\u672c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<package_version>"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u62c9\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s")," \u5305\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"1.27")," \u7248\u672c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nk8s = "1.27"\n')),(0,i.kt)("h3",{id:"32-git-dependency"},"3.2. git dependency"),(0,i.kt)("p",null,"\u6839\u636e git \u4ed3\u5e93\u4e2d\u7684 tag \u6307\u5b9a\u5bf9\u5e94\u7684\u4f9d\u8d56\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[dependencies]\n<package name> = { git = "<git repo url>", tag = "<git repo tag>" }\n')),(0,i.kt)("p",null,"\u8fd9\u5c06\u4f1a\u4ece Git \u5b58\u50a8\u5e93",(0,i.kt)("inlineCode",{parentName:"p"},"<git repo url>"),"\u4e2d\u62c9\u53d6\u540d\u79f0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<package name>")," \u7684\u5305\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<git repo tag>"),"\u3002"),(0,i.kt)("p",null,"\u6839\u636e git \u4ed3\u5e93\u4e2d\u7684 commit id \u6307\u5b9a\u5bf9\u5e94\u7684\u4f9d\u8d56\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[dependencies]\n<package name> = { git = "<git repo url>", commit = "<git repo commit>" }\n')),(0,i.kt)("p",null,"\u8fd9\u5c06\u4f1a\u4ece Git \u5b58\u50a8\u5e93",(0,i.kt)("inlineCode",{parentName:"p"},"<git repo url>"),"\u4e2d\u62c9\u53d6\u540d\u79f0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<package name>")," \u7684\u5305\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"commit id")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<git repo commit>"),"\u3002"),(0,i.kt)("h2",{id:"4-entries"},"4. entries"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u6307\u5b9a\u5305\u7684\u5165\u53e3\u70b9\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"entries")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"[profile]")," \u90e8\u5206\u7684\u5b50\u90e8\u5206\u3002entries \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u5305\u542b\u7f16\u8bd1\u5668\u7684\u5165\u53e3\u70b9\u3002\u8fd9\u662f\u4e00\u4e2a\u53ef\u9009\u7684\u5b57\u6bb5\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4e3a\u5305\u6839\u76ee\u5f55\u4e0b\u7684\u6240\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"*.k")," \u6587\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"[profile]\nentries = [\n   ...\n]\n")),(0,i.kt)("p",null,"entries \u4e2d\u53ef\u4ee5\u5b9a\u4e49\u7edd\u5bf9\u8def\u5f84\u548c\u76f8\u5bf9\u8def\u5f84\uff0c\u5982\u679c\u5b9a\u4e49\u7684\u662f\u76f8\u5bf9\u8def\u5f84\uff0c\u90a3\u4e48\u5c31\u4f1a\u4ee5\u5f53\u524d\u5305\u7684"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"entries")," \u662f kcl \u5305\u6839\u8def\u5f84\u7684\u76f8\u5bf9\u8def\u5f84\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u6587\u4ef6\u8def\u5f84\u662f\u5305\u7684\u6839\u8def\u5f84\u3002\u652f\u6301\u4e24\u79cd\u6587\u4ef6\u8def\u5f84\u683c\u5f0f\uff0c\u5373 ",(0,i.kt)("inlineCode",{parentName:"p"},"normal paths")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"mod relative paths"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"normal path\uff1a\u76f8\u5bf9\u4e8e\u5f53\u524d\u5305\u7684\u6839\u8def\u5f84\u3002"),(0,i.kt)("li",{parentName:"ul"},"mod relative path\uff1a\u76f8\u5bf9\u4e8e kcl.mod \u4e2d ",(0,i.kt)("a",{parentName:"li",href:"#dependencies"},"dependencies")," \u90e8\u5206\u4e2d\u7684\u4e09\u65b9\u5305\u7684\u6839\u8def\u5f84\u3002")),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"kcl.mod")," \u4f4d\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/my_pkg/kcl.mod"),"\uff0c\u5219 ",(0,i.kt)("inlineCode",{parentName:"li"},"kpm run")," \u5c06\u628a ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/my_pkg/entry1.k")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/my_pkg/subdir/entry2.k")," \u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"kcl")," \u7f16\u8bd1\u5668\u7684\u5165\u53e3\u70b9\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'entries = [\n   "entry1.k",\n   "subdir/entry2.k",\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"kcl.mod")," \u4f4d\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/my_pkg/kcl.mod"),"\uff0c\u5e76\u4e14\u5f53\u524d ",(0,i.kt)("inlineCode",{parentName:"li"},"kcl")," \u5305\u4f9d\u8d56\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"kcl")," \u5305 ",(0,i.kt)("inlineCode",{parentName:"li"},"k8s"),"\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"mod relative paths")," \u5c06\u6765\u81ea\u5305 ",(0,i.kt)("inlineCode",{parentName:"li"},"k8s")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"kcl")," \u6587\u4ef6\u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"kcl")," \u7f16\u8bd1\u5668\u7684\u5165\u53e3\u70b9\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'entries = [\n   "entry1.k",\n   "subdir/entry2.k",\n   "${k8s:KCL_MOD}/core/api/v1/deployment.k"\n]\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mod relative paths")," \u5fc5\u987b\u5305\u542b\u524d\u7f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"${k8s:KCL_MOD}"),"\uff0c\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s")," \u662f\u5305\u540d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"${k8s:KCL_MOD}")," \u8868\u793a\u5305 k8s \u7684\u5305\u6839\u8def\u5f84\u3002\u56e0\u6b64\uff0c\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s")," \u7684\u5305\u6839\u8def\u5f84\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"/.kcl/kpm/k8s"),"\uff0c\u5219\u4e0a\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"entries")," \u5c06\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/my_pkg/entry1.k"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/my_pkg/subdir/entry2.k")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"/.kcl/kpm/k8s/core/api/v1/deployment.k")," \u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl")," \u7f16\u8bd1\u5668\u7684\u5165\u53e3\u70b9\u3002"),(0,i.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"normal path")," \u6307\u5b9a\u5f53\u524d\u5305\u8def\u5f84\u4e2d\u7684\u7f16\u8bd1\u5165\u53e3\u70b9\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"mod relative path")," \u6307\u5b9a\u4e09\u65b9\u5305\u4e2d\u7684\u5165\u53e3\u70b9\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"normal path")," \u5236\u5b9a\u7684\u6587\u4ef6\u8def\u5f84\u5fc5\u987b\u6765\u81ea\u4e8e\u540c\u4e00\u4e2a\u5305\uff0c\u5373\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"normal path")," \u5f00\u59cb\u5bfb\u627e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u8def\u5f84\u5fc5\u987b\u53ea\u80fd\u627e\u5230\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u6587\u4ef6\uff0c\u4e0d\u7136\u7f16\u8bd1\u5668\u5c06\u8f93\u51fa\u9519\u8bef\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982:"),(0,i.kt)("p",null,"\u5728\u8def\u5f84 ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/kcl1")," \u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/kcl1\n      |--- kcl.mod\n      |--- entry1.k\n")),(0,i.kt)("p",null,"\u5728\u8def\u5f84 ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/kcl2")," \u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/kcl2\n      |--- kcl.mod\n      |--- entry2.k\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5728\u8def\u5f84",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/kcl1"),"\u4e0b\u4f7f\u7528\u8fd9\u6837\u7684 kcl.mod \u7f16\u8bd1\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'entries = [\n   "entry1.k", # \u5bf9\u5e94\u7684 kcl.mod \u6587\u4ef6\u662f /usr/kcl1/kcl.mod\n   "/usr/kcl2/entry2.k", # \u5bf9\u5e94\u7684 kcl.mod \u6587\u4ef6\u662f /usr/kcl2/kcl.mod\n]\n')),(0,i.kt)("p",null,"\u5c06\u4f1a\u5f97\u5230\u9519\u8bef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"error[E3M38]: conflict kcl.mod file paths\n")))}c.isMDXComponent=!0}}]);