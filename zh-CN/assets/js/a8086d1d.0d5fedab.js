"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),c=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,d=s["".concat(p,".").concat(m)]||s[m]||k[m]||a;return n?l.createElement(d,r(r({ref:t},u),{},{components:n})):l.createElement(d,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<a;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},10475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var l=n(87462),i=(n(67294),n(3905));const a={sidebar_position:3},r="Lint \u68c0\u67e5\u4ee3\u7801\u98ce\u683c",o={unversionedId:"tools/cli/kcl/lint",id:"version-0.4.3/tools/cli/kcl/lint",title:"Lint \u68c0\u67e5\u4ee3\u7801\u98ce\u683c",description:"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684\u547d\u4ee4\u884c\u5de5\u5177\u5bf9 KCL \u4ee3\u7801\u8fdb\u884c\u68c0\u67e5\uff0c\u5e76\u652f\u6301\u591a\u79cd\u8f93\u51fa\u683c\u5f0f\u3002\u672c\u6587\u6863\u5c55\u793a KCL Lint \u5de5\u5177\u7684\u4f7f\u7528\u65b9\u5f0f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.3/tools/cli/kcl/lint.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/lint",permalink:"/zh-CN/docs/0.4.3/tools/cli/kcl/lint",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/tools/cli/kcl/lint.md",tags:[],version:"0.4.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1687453636,formattedLastUpdatedAt:"2023\u5e746\u670822\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tools",previous:{title:"\u683c\u5f0f\u5316\u4ee3\u7801",permalink:"/zh-CN/docs/0.4.3/tools/cli/kcl/fmt"},next:{title:"Validation \u6821\u9a8c\u4ee3\u7801",permalink:"/zh-CN/docs/0.4.3/tools/cli/kcl/vet"}},p={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5de5\u7a0b\u7ed3\u6784",id:"\u5de5\u7a0b\u7ed3\u6784",level:3},{value:"KCL Lint \u5de5\u5177\u4f7f\u7528\u65b9\u5f0f",id:"kcl-lint-\u5de5\u5177\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"CLI \u53c2\u6570",id:"cli-\u53c2\u6570",level:3},{value:"Lint \u914d\u7f6e\u53c2\u6570",id:"lint-\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u4f18\u5148\u7ea7",id:"\u4f18\u5148\u7ea7",level:4},{value:".kcllint",id:"kcllint",level:4},{value:"\u9ed8\u8ba4\u914d\u7f6e",id:"\u9ed8\u8ba4\u914d\u7f6e",level:4},{value:"\u9519\u8bef\u4ee3\u7801",id:"\u9519\u8bef\u4ee3\u7801",level:3}],u={toc:c};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lint-\u68c0\u67e5\u4ee3\u7801\u98ce\u683c"},"Lint \u68c0\u67e5\u4ee3\u7801\u98ce\u683c"),(0,i.kt)("p",null,"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684\u547d\u4ee4\u884c\u5de5\u5177\u5bf9 KCL \u4ee3\u7801\u8fdb\u884c\u68c0\u67e5\uff0c\u5e76\u652f\u6301\u591a\u79cd\u8f93\u51fa\u683c\u5f0f\u3002\u672c\u6587\u6863\u5c55\u793a KCL Lint \u5de5\u5177\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("h3",{id:"\u5de5\u7a0b\u7ed3\u6784"},"\u5de5\u7a0b\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},".\n\u2514\u2500\u2500 Test\n    \u2514\u2500\u2500 kcl.mod\n    \u2514\u2500\u2500 .kcllint\n    \u2514\u2500\u2500 a.k\n    \u2514\u2500\u2500 b.k\n    \u2514\u2500\u2500 dir\n        \u2514\u2500\u2500 c.k\n    \u2514\u2500\u2500 test.k\n")),(0,i.kt)("p",null,"\u5176\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},".kcllint")," \u6587\u4ef6\u4e3a\u914d\u7f6e\u53c2\u6570\u6587\u4ef6\uff0c\u975e\u5fc5\u9700\u9879\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"a.k"),",",(0,i.kt)("inlineCode",{parentName:"p"},"b.k"),",",(0,i.kt)("inlineCode",{parentName:"p"},"c.k"),",",(0,i.kt)("inlineCode",{parentName:"p"},"test.k")," \u4e3a\u6d4b\u8bd5\u7684 kcl \u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-lint your_config.k\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-lint your_config_path\n")),(0,i.kt)("p",null,"lint \u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-lint --config abspath/.kcllint your_config.k\n")),(0,i.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"/Users/../test.k:12:1: E0501 line too long (122 > 120 characters)\n# line too long, line too long, line too long, line too long, line too long, line too long, line too long, line too long,\n^\n\n/Users/../test.k:14:1: E0413 Import b should be placed at the top of the module\nimport b\n^\n\n\nCheck total 1 files:\n1       E0413: ImportStmt is not at the top of the file\n1       E0501: Line too long\nKCL Lint: 2 problems\n")),(0,i.kt)("h2",{id:"kcl-lint-\u5de5\u5177\u4f7f\u7528\u65b9\u5f0f"},"KCL Lint \u5de5\u5177\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("h3",{id:"cli-\u53c2\u6570"},"CLI \u53c2\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"usage: kcl-lint [-h] [--config file] [file]\n\npositional arguments:\n  file           KCL file path\n\noptional arguments:\n  -h, --help     show this help message and exit\n  --config file  KCL lint config path\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--config : lint \u914d\u7f6e\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"li"},".kcllint")," \u7684\u8def\u5f84"),(0,i.kt)("li",{parentName:"ul"},"file : \u9700\u8981\u68c0\u67e5\u7684\u5355\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},".k")," \u6587\u4ef6\u8def\u5f84\u6216\u8def\u5f84\u76ee\u5f55\u4e0b\u7684\u6240\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},".k")," \u6587\u4ef6\uff0c\u652f\u6301\u7edd\u5bf9\u8def\u5f84\u6216\u5f53\u524d\u76ee\u5f55\u7684\u76f8\u5bf9\u8def\u5f84")),(0,i.kt)("h3",{id:"lint-\u914d\u7f6e\u53c2\u6570"},"Lint \u914d\u7f6e\u53c2\u6570"),(0,i.kt)("h4",{id:"\u4f18\u5148\u7ea7"},"\u4f18\u5148\u7ea7"),(0,i.kt)("p",null,"Lint \u7684\u914d\u7f6e\u53c2\u6570\u7684\u4f18\u5148\u7ea7\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"CLI \u53c2\u6570\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"--config file")," \u8def\u5f84\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},".kcllint")," \u6587\u4ef6"),(0,i.kt)("li",{parentName:"ol"},"\u88ab\u68c0\u67e5 ",(0,i.kt)("inlineCode",{parentName:"li"},".k")," \u6587\u4ef6\u6240\u5728\u76ee\u5f55\u6216\u88ab\u68c0\u67e5\u76ee\u5f55\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},".kcllint")," \u6587\u4ef6"),(0,i.kt)("li",{parentName:"ol"},"\u9ed8\u8ba4\u914d\u7f6e")),(0,i.kt)("h4",{id:"kcllint"},".kcllint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".kcllint")," \u6587\u4ef6\u4ee5 yaml \u683c\u5f0f\u4e66\u5199\u3002\u5176\u5185\u5bb9\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check_list \u7528\u4e8e\u9009\u62e9\u68c0\u67e5\u7684 checker\uff0c\u53ef\u9009\u9879\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},'"import"')," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},'"misc"')),(0,i.kt)("li",{parentName:"ul"},"ignore \u7528\u4e8e\u9009\u62e9\u5ffd\u7565\u7684\u68c0\u67e5\u9879\uff0c\u53ef\u9009\u9879\u89c1\u9519\u8bef\u4ee3\u7801"),(0,i.kt)("li",{parentName:"ul"},"max_line_length \u4e3a\u68c0\u67e5\u7684\u53c2\u6570\uff0c\u5373\u5355\u884c\u4ee3\u7801\u6700\u5927\u957f\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"output \u7528\u4e8e\u9009\u62e9\u8f93\u51fa\u6d41\u548c\u8f93\u51fa\u683c\u5f0f\uff0c\u53ef\u9009\u9879\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},'"stdout"'),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},'"file"'),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},'"sarif"')),(0,i.kt)("li",{parentName:"ul"},'output_path \u4e3a\u53ef\u9009\u9879\uff0c\u5f53 output \u9009\u62e9\u4e86\u201cfile\u201d\u6216"sarif"\uff0c\u5219\u5fc5\u987b\u8bbe\u7f6e\u8f93\u51fa\u6587\u4ef6\u7684\u8def\u5f84')),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'check_list: ["import","misc"]\nignore: ["E0501"]\nmax_line_length: 120\noutput: ["stdout"]\noutput_path:\n')),(0,i.kt)("h4",{id:"\u9ed8\u8ba4\u914d\u7f6e"},"\u9ed8\u8ba4\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'check_list: ["import", "misc"]\nignore": []\nmax_line_length: 200\noutput: ["stdout"]\n')),(0,i.kt)("h3",{id:"\u9519\u8bef\u4ee3\u7801"},"\u9519\u8bef\u4ee3\u7801"),(0,i.kt)("p",null,"\u76ee\u524d\u63d0\u4f9b import_checker \u548c misc_checker"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"import_checker",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"E0401: Unable to import."),(0,i.kt)("li",{parentName:"ul"},"W0401: Reimport."),(0,i.kt)("li",{parentName:"ul"},"E0406: Module import itself."),(0,i.kt)("li",{parentName:"ul"},"W0411: Import but unused."),(0,i.kt)("li",{parentName:"ul"},"E0413: ImportStmt is not at the top of the file"))),(0,i.kt)("li",{parentName:"ul"},"misc_checker",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"E0501: Line too long")))))}k.isMDXComponent=!0}}]);