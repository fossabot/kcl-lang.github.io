"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[14966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1},o="Overview",i={unversionedId:"tools/cli/kcl/overview",id:"version-0.5.1/tools/cli/kcl/overview",title:"Overview",description:"KCL toolchain is a toolset of KCL language, which aims to improve the efficiency of batch migration, writing, compiling and running of KCL.",source:"@site/versioned_docs/version-0.5.1/tools/cli/kcl/overview.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/overview",permalink:"/docs/0.5.1/tools/cli/kcl/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/tools/cli/kcl/overview.md",tags:[],version:"0.5.1",lastUpdatedBy:"Peefy",lastUpdatedAt:1708611628,formattedLastUpdatedAt:"Feb 22, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"KCL Language Tools",permalink:"/docs/0.5.1/tools/cli/kcl/"},next:{title:"Format",permalink:"/docs/0.5.1/tools/cli/kcl/fmt"}},c={},p=[{value:"KCL Tool",id:"kcl-tool",level:2},{value:"Args",id:"args",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"KCL toolchain is a toolset of KCL language, which aims to improve the efficiency of batch migration, writing, compiling and running of KCL."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Main Tools"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"kcl")),(0,a.kt)("td",{parentName:"tr",align:null},"Provide support for KCL in coding, compiling and running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl-test"),(0,a.kt)("td",{parentName:"tr",align:null},"Coming soon")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl-lint"),(0,a.kt)("td",{parentName:"tr",align:null},"Check code style for KCL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl-doc"),(0,a.kt)("td",{parentName:"tr",align:null},"Parses the KCL code and generate documents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl-fmt"),(0,a.kt)("td",{parentName:"tr",align:null},"Format the kcl code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl-vet"),(0,a.kt)("td",{parentName:"tr",align:null},"Validate data files such as JSON and YAML using KCL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IDE Plugin"),(0,a.kt)("td",{parentName:"tr",align:null},"IntelliJ IDEA KCL plugin"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on IntelliJ IDEA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"VS Code KCL plugin"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on VS Code")))),(0,a.kt)("h2",{id:"kcl-tool"},"KCL Tool"),(0,a.kt)("h3",{id:"args"},"Args"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"USAGE:\n    kcl [OPTIONS] [--] [input]...\n\nArguments:\n  [input]...  Specify the input files to run\n\nOptions:\n  -o, --output <output>\n          Specify the YAML output file path\n  -Y, --setting <setting>...\n          Specify the input setting file\n  -v, --verbose...\n          Print test information verbosely\n  -n, --disable_none\n          Disable dumping None values\n  -r, --strict_range_check\n          Do perform strict numeric range checks\n  -d, --debug\n          Run in debug mode (for developers only)\n  -k, --sort_keys\n          Sort result keys\n  -D, --argument <arguments>...\n          Specify the top-level argument\n  -S, --path_selector <path_selector>...\n          Specify the path selector\n  -O, --overrides <overrides>...\n          Specify the configuration override path and value\n      --target <target>\n          Specify the target type\n  -E, --external <package_map>...\n          Mapping of package name and path where the package is located\n  -h, --help\n          Print help\n")))}d.isMDXComponent=!0}}]);