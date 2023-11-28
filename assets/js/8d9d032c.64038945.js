"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58059],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>d});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=r.createContext({}),i=function(e){var a=r.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},m=function(e){var a=i(e.components);return r.createElement(o.Provider,{value:a},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},s=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=i(n),s=t,d=k["".concat(o,".").concat(s)]||k[s]||u[s]||l;return n?r.createElement(d,c(c({ref:a},m),{},{components:n})):r.createElement(d,c({ref:a},m))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,c=new Array(l);c[0]=s;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[k]="string"==typeof e?e:t,c[1]=p;for(var i=2;i<l;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63947:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(87462),t=(n(67294),n(3905));const l={},c="kpm run",p={unversionedId:"reference/package-management/command-reference/run",id:"version-0.5.1/reference/package-management/command-reference/run",title:"kpm run",description:"Compile a kcl package.",source:"@site/versioned_docs/version-0.5.1/reference/package-management/command-reference/5.run.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/run",permalink:"/docs/0.5.1/reference/package-management/command-reference/run",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/reference/package-management/command-reference/5.run.md",tags:[],version:"0.5.1",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:5,frontMatter:{},sidebar:"reference",previous:{title:"kpm metadata",permalink:"/docs/0.5.1/reference/package-management/command-reference/metadata"},next:{title:"kpm login",permalink:"/docs/0.5.1/reference/package-management/command-reference/login"}},o={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--input",id:"--input",level:3},{value:"--tag",id:"--tag",level:3},{value:"--vendor",id:"--vendor",level:3},{value:"--kcl_args",id:"--kcl_args",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"compile the current kcl package",id:"compile-the-current-kcl-package",level:3},{value:"compile a kcl package tar file",id:"compile-a-kcl-package-tar-file",level:3},{value:"compile a kcl package from oci url",id:"compile-a-kcl-package-from-oci-url",level:3},{value:"compile a kcl package from oci ref",id:"compile-a-kcl-package-from-oci-ref",level:3}],m={toc:i},k="wrapper";function u(e){let{components:a,...n}=e;return(0,t.kt)(k,(0,r.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"kpm-run"},"kpm run"),(0,t.kt)("p",null,"Compile a kcl package."),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run [options][package_source]\n")),(0,t.kt)("h2",{id:"description"},"Description"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"kpm run")," will compile a kcl package."),(0,t.kt)("h2",{id:"options"},"options"),(0,t.kt)("h3",{id:"--input"},"--input"),(0,t.kt)("p",null,"Specify the entry file path of the package."),(0,t.kt)("h3",{id:"--tag"},"--tag"),(0,t.kt)("p",null,"Specify the tag of the package specified by oci url ",(0,t.kt)("inlineCode",{parentName:"p"},"package_source"),"."),(0,t.kt)("h3",{id:"--vendor"},"--vendor"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"--vendor")," will move the dependency packages into the current packages and automatically download the missing dependency packages."),(0,t.kt)("h3",{id:"--kcl_args"},"--kcl_args"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"--kcl_args")," specifies the arguments passed to the kcl compiler."),(0,t.kt)("h3",{id:"--help--h"},"--help, -h"),(0,t.kt)("p",null,"Show help for ",(0,t.kt)("inlineCode",{parentName:"p"},"kpm run")," command."),(0,t.kt)("h2",{id:"examples"},"Examples"),(0,t.kt)("h3",{id:"compile-the-current-kcl-package"},"compile the current kcl package"),(0,t.kt)("p",null,"Under the kcl package directory, ",(0,t.kt)("inlineCode",{parentName:"p"},"kpm run")," can be used to compile the current kcl package."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run\n")),(0,t.kt)("h3",{id:"compile-a-kcl-package-tar-file"},"compile a kcl package tar file"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"kpm run")," can be used to compile a kcl package tar file."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run /Users/demo/my_package.tar\n")),(0,t.kt)("h3",{id:"compile-a-kcl-package-from-oci-url"},"compile a kcl package from oci url"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"kpm run")," can be used to compile a kcl package from oci url."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run --tag 0.0.1 oci://localhost:5001/test/my_package\n")),(0,t.kt)("h3",{id:"compile-a-kcl-package-from-oci-ref"},"compile a kcl package from oci ref"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"kpm run")," can be used to compile a kcl package from oci ref."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run test/my_package:0.0.1\n")))}u.isMDXComponent=!0}}]);