"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),c=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,d=u["".concat(p,".").concat(m)]||u[m]||k[m]||o;return n?l.createElement(d,r(r({ref:t},s),{},{components:n})):l.createElement(d,r({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:i,r[1]=a;for(var c=2;c<o;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var l=n(87462),i=(n(67294),n(3905));const o={sidebar_position:3},r="Lint",a={unversionedId:"tools/cli/kcl/lint",id:"version-0.4.5/tools/cli/kcl/lint",title:"Lint",description:"The KCL Lint tool supports checking some warning-level defects in KCL code and supports multiple output formats. This document shows how to use the KCL Lint tool.",source:"@site/versioned_docs/version-0.4.5/tools/cli/kcl/lint.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/lint",permalink:"/docs/0.4.5/tools/cli/kcl/lint",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/tools/cli/kcl/lint.md",tags:[],version:"0.4.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1690274001,formattedLastUpdatedAt:"Jul 25, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tools",previous:{title:"Format",permalink:"/docs/0.4.5/tools/cli/kcl/fmt"},next:{title:"Validation",permalink:"/docs/0.4.5/tools/cli/kcl/vet"}},p={},c=[{value:"Example",id:"example",level:2},{value:"Project Struct",id:"project-struct",level:3},{value:"KCL Lint Tool",id:"kcl-lint-tool",level:2},{value:"Args",id:"args",level:3},{value:"Lint Configuration",id:"lint-configuration",level:3},{value:"Priority",id:"priority",level:4},{value:".kcllint",id:"kcllint",level:4},{value:"Default Configuration:",id:"default-configuration",level:4},{value:"Error Code",id:"error-code",level:3}],s={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lint"},"Lint"),(0,i.kt)("p",null,"The KCL Lint tool supports checking some warning-level defects in KCL code and supports multiple output formats. This document shows how to use the KCL Lint tool."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"project-struct"},"Project Struct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},".\n\u2514\u2500\u2500 Test\n    \u2514\u2500\u2500 kcl.mod\n    \u2514\u2500\u2500 .kcllint\n    \u2514\u2500\u2500 a.k\n    \u2514\u2500\u2500 b.k\n    \u2514\u2500\u2500 dir\n        \u2514\u2500\u2500 c.k\n    \u2514\u2500\u2500 test.k\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".kcllint")," is the configuration file of lint and it is optional. ",(0,i.kt)("inlineCode",{parentName:"p"},"a.k"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b.k"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"c.k")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test.k")," are the kcl file to be checked."),(0,i.kt)("p",null,"Args\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-lint your_config.k\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-lint your_config_path\n")),(0,i.kt)("p",null,"lint configuration file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-lint --config abspath/.kcllint your_config.k\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"/Users/../test.k:12:1: E0501 line too long (122 > 120 characters)\n# line too long, line too long, line too long, line too long, line too long, line too long, line too long, line too long,\n^\n\n/Users/../test.k:14:1: E0413 Import b should be placed at the top of the module\nimport b\n^\n\n\nCheck total 1 files:\n1       E0413: ImportStmt is not at the top of the file\n1       E0501: Line too long\nKCL Lint: 2 problems\n")),(0,i.kt)("h2",{id:"kcl-lint-tool"},"KCL Lint Tool"),(0,i.kt)("h3",{id:"args"},"Args"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"usage: kcl-lint [-h] [--config file] [file]\n\npositional arguments:\n  file           KCL file path\n\noptional arguments:\n  -h, --help     show this help message and exit\n  --config file  KCL lint config path\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--config: path of ",(0,i.kt)("inlineCode",{parentName:"li"},".kcllint")),(0,i.kt)("li",{parentName:"ul"},"file: the path of a single ",(0,i.kt)("inlineCode",{parentName:"li"},"*.k")," file or directory to be checked. Support the absolute path or relative path of the current directory.")),(0,i.kt)("h3",{id:"lint-configuration"},"Lint Configuration"),(0,i.kt)("h4",{id:"priority"},"Priority"),(0,i.kt)("p",null,"The priority of Lint's configuration is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},".kcllint")," set in CLI Args"),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},".kcllint")," under the directory of checked ",(0,i.kt)("inlineCode",{parentName:"li"},".k")," file or checked directory"),(0,i.kt)("li",{parentName:"ol"},"default configuration")),(0,i.kt)("h4",{id:"kcllint"},".kcllint"),(0,i.kt)("p",null,"The file ",(0,i.kt)("inlineCode",{parentName:"p"},".kcllint")," is written in YAML. Its contents include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check_list: kinds of checks, including ",(0,i.kt)("inlineCode",{parentName:"li"},'"import"')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"misc"')),(0,i.kt)("li",{parentName:"ul"},"ignore: ignored check items. See the ",(0,i.kt)("inlineCode",{parentName:"li"},"Error Code")," for optional items."),(0,i.kt)("li",{parentName:"ul"},"max_line_length: check parameter, that is, the maximum length of code"),(0,i.kt)("li",{parentName:"ul"},"output: output streams and formats, including ",(0,i.kt)("inlineCode",{parentName:"li"},'"stdout"'),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},'"file"')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"sarif"')),(0,i.kt)("li",{parentName:"ul"},"output_path: The path of the output file. It is optional, but it is required when the ",(0,i.kt)("inlineCode",{parentName:"li"},"output")," is set as ",(0,i.kt)("inlineCode",{parentName:"li"},'"file"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"sarif"'))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'check_list: ["import","misc"]\nignore: ["E0501"]\nmax_line_length: 120\noutput: ["stdout"]\noutput_path:\n')),(0,i.kt)("h4",{id:"default-configuration"},"Default Configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'check_list: ["import", "misc"]\nignore": []\nmax_line_length: 200\noutput: ["stdout"]\n')),(0,i.kt)("h3",{id:"error-code"},"Error Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"import_checker",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"E0401: Unable to import."),(0,i.kt)("li",{parentName:"ul"},"W0401: Reimport."),(0,i.kt)("li",{parentName:"ul"},"E0406: Module import itself."),(0,i.kt)("li",{parentName:"ul"},"W0411: Import but unused."),(0,i.kt)("li",{parentName:"ul"},"E0413: ImportStmt is not at the top of the file"))),(0,i.kt)("li",{parentName:"ul"},"misc_checker",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"E0501: Line too long")))))}k.isMDXComponent=!0}}]);