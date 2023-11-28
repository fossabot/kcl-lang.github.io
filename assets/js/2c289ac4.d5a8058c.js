"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96777],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67885:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:1},i="Overview",o={unversionedId:"tools/cli/kcl/overview",id:"tools/cli/kcl/overview",title:"Overview",description:"KCL toolchain is a toolset of KCL language, which aims to improve the efficiency of batch migration, writing, compiling and running of KCL.",source:"@site/docs/tools/cli/kcl/overview.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/overview",permalink:"/docs/next/tools/cli/kcl/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/kcl/overview.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"KCL Language Tools",permalink:"/docs/next/tools/cli/kcl/"},next:{title:"Doc",permalink:"/docs/next/tools/cli/kcl/docgen"}},p={},c=[{value:"KCL Tool",id:"kcl-tool",level:2},{value:"Args",id:"args",level:3}],u={toc:c},d="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"KCL toolchain is a toolset of KCL language, which aims to improve the efficiency of batch migration, writing, compiling and running of KCL."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Main Tools"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"kcl")," (alias of ",(0,r.kt)("inlineCode",{parentName:"td"},"kcl run"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide support for KCL in coding, compiling and running")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"kcl run"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide support for KCL in coding, compiling and running")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"kcl doc"),(0,r.kt)("td",{parentName:"tr",align:null},"Parses the KCL code and generate documents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"kcl fmt"),(0,r.kt)("td",{parentName:"tr",align:null},"Format the kcl code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"kcl import"),(0,r.kt)("td",{parentName:"tr",align:null},"Import other data and schema to KCL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"kcl lint"),(0,r.kt)("td",{parentName:"tr",align:null},"Check code style for KCL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"kcl mod"),(0,r.kt)("td",{parentName:"tr",align:null},"KCL module related features and package management")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"kcl play"),(0,r.kt)("td",{parentName:"tr",align:null},"Run the KCL playground in localhost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"kcl registry"),(0,r.kt)("td",{parentName:"tr",align:null},"KCL registry related features")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"kcl server"),(0,r.kt)("td",{parentName:"tr",align:null},"Run the KCL REST server in localhost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"kcl test"),(0,r.kt)("td",{parentName:"tr",align:null},"Run unit tests in KCL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"kcl vet"),(0,r.kt)("td",{parentName:"tr",align:null},"Validate data files such as JSON and YAML using KCL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IDE Plugin"),(0,r.kt)("td",{parentName:"tr",align:null},"IntelliJ IDEA KCL extension"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on IntelliJ IDEA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"NeoVim KCL extension"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on NeoVim")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"VS Code KCL extension"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on VS Code")))),(0,r.kt)("h2",{id:"kcl-tool"},"KCL Tool"),(0,r.kt)("h3",{id:"args"},"Args"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"This command runs the kcl code and displays the output. 'kcl run' takes multiple input for arguments.\n\nFor example, 'kcl run path/to/kcl.k' will run the file named path/to/kcl.k\n\nUsage:\n  run [flags]\n\nAliases:\n  run, r\n\nExamples:\n  # Run a single file and output YAML\n  kcl run path/to/kcl.k\n\n  # Run a single file and output JSON\n  kcl run path/to/kcl.k --format json\n\n  # Run multiple files\n  kcl run path/to/kcl1.k path/to/kcl2.k\n\n  # Run OCI packages\n  kcl run oci://ghcr.io/kcl-lang/hello-world\n\n  # Run the current package\n  kcl run\n\n\nFlags:\n  -D, --argument strings        Specify the top-level argument\n  -d, --debug                   Run in debug mode\n  -n, --disable_none            Disable dumping None values\n  -E, --external strings        Specify the mapping of package name and path where the package is located\n      --format string           Specify the output format (default \"yaml\")\n  -h, --help                    help for run\n      --no_style                Set to prohibit output of command line waiting styles, including colors, etc.\n  -o, --output string           Specify the YAML/JSON output file path\n  -O, --overrides strings       Specify the configuration override path and value\n  -S, --path_selector strings   Specify the path selectors\n  -q, --quiet                   Set the quiet mode (no output)\n  -Y, --setting strings         Specify the command line setting files\n  -k, --sort_keys               Sort output result keys\n  -r, --strict_range_check      Do perform strict numeric range checks\n  -t, --tag string              Specify the tag for the OCI or Git artifact\n  -V, --vendor                  Run in vendor mode\n")))}s.isMDXComponent=!0}}]);