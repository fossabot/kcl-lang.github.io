"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:o,a[1]=r;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const l={sidebar_position:4},a="Command Line Tool",r={unversionedId:"user_docs/support/faq-cli",id:"version-0.6.0/user_docs/support/faq-cli",title:"Command Line Tool",description:"1. What is the function of the settings.yaml in the application directory of the Konfig?",source:"@site/versioned_docs/version-0.6.0/user_docs/support/faq-cli.md",sourceDirName:"user_docs/support",slug:"/user_docs/support/faq-cli",permalink:"/docs/0.6.0/user_docs/support/faq-cli",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/user_docs/support/faq-cli.md",tags:[],version:"0.6.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"user_docs",previous:{title:"YAML",permalink:"/docs/0.6.0/user_docs/support/faq-yaml"},next:{title:"Installation Troubleshooting",permalink:"/docs/0.6.0/user_docs/support/faq-install"}},p={},s=[{value:"1. What is the function of the <code>settings.yaml</code> in the application directory of the Konfig?",id:"1-what-is-the-function-of-the-settingsyaml-in-the-application-directory-of-the-konfig",level:2},{value:"2. How to input dynamic options? How to get dynamic options in code?",id:"2-how-to-input-dynamic-options-how-to-get-dynamic-options-in-code",level:3},{value:"3. How to compile multiple files?",id:"3-how-to-compile-multiple-files",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command-line-tool"},"Command Line Tool"),(0,o.kt)("h2",{id:"1-what-is-the-function-of-the-settingsyaml-in-the-application-directory-of-the-konfig"},"1. What is the function of the ",(0,o.kt)("inlineCode",{parentName:"h2"},"settings.yaml")," in the application directory of the Konfig?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.yaml")," in KCL indicates the configuration file of the KCL command line tool. You can put the compiled configuration into it, such as the file to be compiled, the option dynamic parameter that needs to be input(",(0,o.kt)("inlineCode",{parentName:"p"},"-d"),"), whether to ignore the null value(",(0,o.kt)("inlineCode",{parentName:"p"},"-n"),") and other configurations."),(0,o.kt)("p",null,"For example, for the following arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl main.k -D key=value -n -r\n")),(0,o.kt)("p",null,"It can be replaced by the following command line arguments and ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl -Y settings.yaml\n")),(0,o.kt)("p",null,"settings.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_cli_configs:\n  files:\n    - main.k\n  disable_none: true\n  strict_range_check: true\nkcl_options:\n  - key: key\n    value: value\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kcl_cli_configs")," indicates configurable compilation arguments, ",(0,o.kt)("inlineCode",{parentName:"li"},"file")," indicates the KCL file used for compilation\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"disable_none")," indicates whether to use ",(0,o.kt)("inlineCode",{parentName:"li"},"-n"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"strict_range_check")," indicates whether to use ",(0,o.kt)("inlineCode",{parentName:"li"},"-r"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kcl_options")," indicates dynamic options that can be configured, ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," indicates option name, ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," indicates option value")),(0,o.kt)("p",null,"Note: The file name does not need to be ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.yaml"),", but the configuration in it must meet the requirements."),(0,o.kt)("h3",{id:"2-how-to-input-dynamic-options-how-to-get-dynamic-options-in-code"},"2. How to input dynamic options? How to get dynamic options in code?"),(0,o.kt)("p",null,"KCL supports multiple ways to input dynamic options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-D"),": Use the command line argument ",(0,o.kt)("inlineCode",{parentName:"li"},"-D")," to input dynamic options. It supports basic data types str/int/float/bool and structured data types list/dict")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kcl main.k -D env-type=TEST -D deploy-topology=\'[{"cluster":"my-cluster","idc":"my-idc","replicas":2,"workspace":"my-idc","zone":"my-zone"}]\'\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-Y"),": Use the command line argument ",(0,o.kt)("inlineCode",{parentName:"li"},"-Y")," to input dynamic options by configuration file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_options:\n  - key: env-type\n    value: TEST\n  - key: deploy-topology\n    value:\n      - cluster: my-cluster\n        idc: my-idc\n        replicas: 2\n        workspace: my-workspace\n        zone: my-zone\n")),(0,o.kt)("p",null,"Use the built-in function ",(0,o.kt)("inlineCode",{parentName:"p"},"option()")," to get it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'env = option("env-type")\ndeploy_topology = option("deploy-topology")\n')),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"env: TEST\ndeploy_topology:\n  - cluster: my-cluster\n    idc: my-idc\n    replicas: 2\n    workspace: my-workspace\n    zone: my-zone\n")),(0,o.kt)("h3",{id:"3-how-to-compile-multiple-files"},"3. How to compile multiple files?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Input multiple files in the command line:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl file1.k file2.k file3.k\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set multiple files in configuration file and use command line argument ",(0,o.kt)("inlineCode",{parentName:"li"},"-Y"),":")),(0,o.kt)("p",null,"settings.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_cli_configs:\n  files:\n    - file1.k\n    - file2.k\n    - file3.k\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl -Y settings.yaml\n")))}m.isMDXComponent=!0}}]);