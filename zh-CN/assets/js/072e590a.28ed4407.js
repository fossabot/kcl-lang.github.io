"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[23495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const l={sidebar_position:1},i="\u8fd0\u884c KCL \u4ee3\u7801",a={unversionedId:"tools/cli/kcl/run",id:"tools/cli/kcl/run",title:"\u8fd0\u884c KCL \u4ee3\u7801",description:"\u53c2\u6570\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/cli/kcl/run.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/run",permalink:"/zh-CN/docs/next/tools/cli/kcl/run",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/kcl/run.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1701933583,formattedLastUpdatedAt:"2023\u5e7412\u67087\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/next/tools/cli/kcl/overview"},next:{title:"\u6587\u6863\u751f\u6210\u5de5\u5177",permalink:"/zh-CN/docs/next/tools/cli/kcl/docgen"}},c={},s=[{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8fd0\u884c-kcl-\u4ee3\u7801"},"\u8fd0\u884c KCL \u4ee3\u7801"),(0,o.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Usage:\n  kcl run [flags]\n\nAliases:\n  run, r\n\nExamples:\n  # Run a single file and output YAML\n  kcl run path/to/kcl.k\n\n  # Run a single file and output JSON\n  kcl run path/to/kcl.k --format json\n\n  # Run multiple files\n  kcl run path/to/kcl1.k path/to/kcl2.k\n\n  # Run OCI packages\n  kcl run oci://ghcr.io/kcl-lang/hello-world\n\n  # Run the current package\n  kcl run\n\n\nFlags:\n  -D, --argument strings        Specify the top-level argument\n  -d, --debug                   Run in debug mode\n  -n, --disable_none            Disable dumping None values\n  -E, --external strings        Specify the mapping of package name and path where the package is located\n      --format string           Specify the output format (default "yaml")\n  -h, --help                    help for run\n      --no_style                Set to prohibit output of command line waiting styles, including colors, etc.\n  -o, --output string           Specify the YAML/JSON output file path\n  -O, --overrides strings       Specify the configuration override path and value\n  -S, --path_selector strings   Specify the path selectors\n  -q, --quiet                   Set the quiet mode (no output)\n  -Y, --setting strings         Specify the command line setting files\n  -k, --sort_keys               Sort output result keys\n  -r, --strict_range_check      Do perform strict numeric range checks\n  -t, --tag string              Specify the tag fo\n')))}f.isMDXComponent=!0}}]);