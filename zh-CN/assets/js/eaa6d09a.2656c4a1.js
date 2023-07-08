"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(n),u=l,g=k["".concat(o,".").concat(u)]||k[u]||m[u]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},68696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:1},i="\u7b80\u4ecb",s={unversionedId:"user_docs/getting-started/intro",id:"version-0.4.6/user_docs/getting-started/intro",title:"\u7b80\u4ecb",description:"KCL \u662f\u4ec0\u4e48?",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.6/user_docs/getting-started/intro.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/intro",permalink:"/zh-CN/docs/0.4.6/user_docs/getting-started/intro",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/getting-started/intro.md",tags:[],version:"0.4.6",lastUpdatedBy:"Peefy",lastUpdatedAt:1688815917,formattedLastUpdatedAt:"2023\u5e747\u67088\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/0.4.6/user_docs/getting-started/"},next:{title:"\u5b89\u88c5",permalink:"/zh-CN/docs/0.4.6/user_docs/getting-started/install"}},o={},p=[{value:"KCL \u662f\u4ec0\u4e48?",id:"kcl-\u662f\u4ec0\u4e48",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 KCL?",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-kcl",level:2},{value:"\u5982\u4f55\u9009\u62e9",id:"\u5982\u4f55\u9009\u62e9",level:2},{value:"vs. YAML/JSON",id:"vs-yamljson",level:3},{value:"vs. Jsonnet/GCL",id:"vs-jsonnetgcl",level:3},{value:"vs. HCL",id:"vs-hcl",level:3},{value:"vs. CUE",id:"vs-cue",level:3},{value:"vs. Dhall",id:"vs-dhall",level:3},{value:"vs. Kustomize",id:"vs-kustomize",level:3},{value:"vs. Helm",id:"vs-helm",level:3},{value:"vs. CDK",id:"vs-cdk",level:3},{value:"vs. OPA/Rego",id:"vs-oparego",level:3}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("h2",{id:"kcl-\u662f\u4ec0\u4e48"},"KCL \u662f\u4ec0\u4e48?"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl"},"KCL")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\u3002KCL \u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-kcl"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 KCL?"),(0,l.kt)("p",null,"KCL \u671f\u671b\u901a\u8fc7\u66f4\u73b0\u4ee3\u5316\u7684\u58f0\u660e\u5f0f\u914d\u7f6e\u8bed\u8a00\u5728 Kubernetes \u8d44\u6e90\u7ba1\u7406\u89e3\u51b3\u5982\u4e0b\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,l.kt)("strong",{parentName:"li"},"\u4ee3\u7801\u62bd\u8c61"),"\u7b49\u624b\u6bb5\u5c4f\u853d\u57fa\u7840\u8bbe\u65bd\u548c\u5e73\u53f0\u7684\u7ec6\u8282\uff0c\u964d\u4f4e\u7814\u53d1\u8005\u8d1f\u62c5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7f16\u8f91"),"\u548c",(0,l.kt)("strong",{parentName:"li"},"\u6821\u9a8c"),"\u5df2\u6709\u7684\u5b58\u91cf\u914d\u7f6e\u6216\u6a21\u7248"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u914d\u7f6e\u8bed\u8a00\u65e0\u526f\u4f5c\u7528\u5730\u7ba1\u7406\u8de8\u56e2\u961f\u7684\u5927\u89c4\u6a21\u914d\u7f6e\u6570\u636e\uff0c\u63d0\u5347\u56e2\u961f\u534f\u4f5c\u6548\u7387",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7528",(0,l.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u7ea7\u9ad8\u6027\u80fd\u7f16\u7a0b\u8bed\u8a00"),"\u4ee5",(0,l.kt)("strong",{parentName:"li"},"\u7f16\u5199\u4ee3\u7801"),"\u7684\u65b9\u5f0f\u63d0\u5347\u914d\u7f6e\u7684\u7075\u6d3b\u5ea6\uff0c\u6bd4\u5982\u6761\u4ef6\u8bed\u53e5\u3001\u5faa\u73af\u3001\u51fd\u6570\u3001\u5305\u7ba1\u7406\u7b49\u7279\u6027\u63d0\u5347\u914d\u7f6e\u91cd\u7528\u7684\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u4ee3\u7801\u5c42\u9762\u63d0\u5347",(0,l.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u8bed\u4e49\u9a8c\u8bc1"),"\u7684\u80fd\u529b\uff0c\u6bd4\u5982\u5b57\u6bb5\u53ef\u9009/\u5fc5\u9009\u3001\u7c7b\u578b\u3001\u8303\u56f4\u7b49\u914d\u7f6e\u68c0\u67e5\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b",(0,l.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u5206\u5757\u7f16\u5199\u3001\u7ec4\u5408\u548c\u62bd\u8c61\u7684\u80fd\u529b"),"\uff0c\u6bd4\u5982\u7ed3\u6784\u5b9a\u4e49\u3001\u7ed3\u6784\u7ee7\u627f\u3001\u7ea6\u675f\u5b9a\u4e49\u7b49\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,l.kt)("strong",{parentName:"li"},"\u591a\u8bed\u8a00 SDK"),"\uff0c",(0,l.kt)("strong",{parentName:"li"},"KCL \u8bed\u8a00\u63d2\u4ef6"),"\u7b49\u624b\u6bb5\u63d0\u5347\u5176",(0,l.kt)("strong",{parentName:"li"},"\u81ea\u52a8\u5316"),"\u96c6\u6210\u80fd\u529b")))),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06 KCL \u7528\u4e8e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210\u9759\u6001\u914d\u7f6e\u6570\u636e\u5982 JSON, YAML \u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 schema \u5bf9\u914d\u7f6e\u6570\u636e\u8fdb\u884c\u5efa\u6a21\u5e76\u51cf\u5c11\u914d\u7f6e\u6570\u636e\u4e2d\u7684\u6837\u677f\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u914d\u7f6e\u6570\u636e\u5b9a\u4e49\u5e26\u6709\u89c4\u5219\u7ea6\u675f\u7684 schema \u5e76\u5bf9\u6570\u636e\u8fdb\u884c\u81ea\u52a8\u9a8c\u8bc1"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u526f\u4f5c\u7528\u5730\u7ec4\u7ec7\u3001\u7b80\u5316\u3001\u7edf\u4e00\u548c\u7ba1\u7406\u5e9e\u5927\u7684\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5206\u5757\u7f16\u5199\u914d\u7f6e\u6570\u636e\u53ef\u6269\u5c55\u5730\u7ba1\u7406\u5e9e\u5927\u7684\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u4e0e ",(0,l.kt)("a",{parentName:"li",href:"https://kusionstack.io"},"KusionStack")," \u4e00\u8d77\uff0c\u7528\u4f5c\u5e73\u53f0\u5de5\u7a0b\u8bed\u8a00\u6765\u4ea4\u4ed8\u73b0\u4ee3\u5e94\u7528\u7a0b\u5e8f")),(0,l.kt)("p",null,"\u9664\u4e86\u8bed\u8a00\u81ea\u8eab\uff0cKCL \u8fd8\u63d0\u4f9b\u4e86\u8bb8\u591a\u989d\u5916\u7684\u5de5\u5177\u5982\u683c\u5f0f\u5316\uff0c\u6d4b\u8bd5\u3001\u6587\u6863\u3001\u5305\u7ba1\u7406\u7b49\u5de5\u5177\u5e2e\u52a9\u60a8\u4f7f\u7528\u3001\u7406\u89e3\u548c\u68c0\u67e5\u7f16\u5199\u7684\u914d\u7f6e\u6216\u7b56\u7565\uff1b\u901a\u8fc7 VS Code \u7b49 IDE \u63d2\u4ef6\u548c Playground \u964d\u4f4e\u914d\u7f6e\u7f16\u5199\u3001\u5206\u4eab\u7684\u6210\u672c\uff1b\u901a\u8fc7 Rust, Go, \u548c Python \u591a\u8bed\u8a00 SDK \u81ea\u52a8\u5316\u5730\u7ba1\u7406\u548c\u6267\u884c\u914d\u7f6e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(55686).Z,width:"702",height:"419"})),(0,l.kt)("p",null,"\u6b64\u5916\uff0cKCL \u662f\u4e00\u79cd\u73b0\u4ee3\u9ad8\u7ea7\u9886\u57df\u7f16\u7a0b\u8bed\u8a00\uff0c\u5e76\u4e14\u5b83\u662f\u4e00\u79cd\u7f16\u8bd1\u9759\u6001\u7684\u5f3a\u7c7b\u578b\u8bed\u8a00\u3002KCL \u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u901a\u8fc7\u8bb0\u5f55\u548c\u51fd\u6570\u8bed\u8a00\u8bbe\u8ba1\u5c06",(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e\uff08config\uff09"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"\u5efa\u6a21\u62bd\u8c61\uff08schema\uff09"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"\u903b\u8f91\uff08lambda\uff09"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u7b56\u7565\uff08rule\uff09"),"\u4f5c\u4e3a\u6838\u5fc3\u80fd\u529b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(70159).Z,width:"427",height:"326"})),(0,l.kt)("p",null,"KCL \u8bd5\u56fe\u63d0\u4f9b\u72ec\u7acb\u4e8e\u8fd0\u884c\u65f6\u7684\u53ef\u7f16\u7a0b\u6027\uff0c\u4e0d\u5728\u672c\u5730\u63d0\u4f9b\u7ebf\u7a0b\u548cIO\u7b49\u7cfb\u7edf\u529f\u80fd\uff0c\u4f46\u652f\u6301\u4e91\u672c\u5730\u64cd\u4f5c\u573a\u666f\u7684\u529f\u80fd\uff0c\u5e76\u8bd5\u56fe\u4e3a\u89e3\u51b3\u9886\u57df\u95ee\u9898\u5e76\u63d0\u4f9b\u7a33\u5b9a\u3001\u5b89\u5168\u3001\u4f4e\u566a\u58f0\u3001\u4f4e\u526f\u4f5c\u7528\u3001\u6613\u4e8e\u81ea\u52a8\u5316\u548c\u6613\u4e8e\u7ba1\u7406\u7684\u7f16\u7a0b\u652f\u6301\u3002"),(0,l.kt)("p",null,"\u603b\u4e4b\uff0cKCL \u5177\u5907\u5982\u4e0b\u7279\u70b9:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7b80\u5355\u6613\u7528"),"\uff1a\u6e90\u4e8e Python\u3001Golang \u7b49\u9ad8\u7ea7\u8bed\u8a00\uff0c\u91c7\u7eb3\u51fd\u6570\u5f0f\u7f16\u7a0b\u8bed\u8a00\u7279\u6027\uff0c\u4f4e\u526f\u4f5c\u7528"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8bbe\u8ba1\u826f\u597d"),"\uff1a\u72ec\u7acb\u7684 Spec \u9a71\u52a8\u7684\u8bed\u6cd5\u3001\u8bed\u4e49\u3001\u8fd0\u884c\u65f6\u548c\u7cfb\u7edf\u5e93\u8bbe\u8ba1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5feb\u901f\u5efa\u6a21"),"\uff1a\u4ee5 ",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/lang/tour#schema"},"Schema")," \u4e3a\u4e2d\u5fc3\u7684\u914d\u7f6e\u7c7b\u578b\u53ca\u6a21\u5757\u5316\u62bd\u8c61"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u529f\u80fd\u5b8c\u5907"),"\uff1a\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/lang/tour#config-operations"},"Config"),"\u3001",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/lang/tour#schema"},"Schema"),"\u3001",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/lang/tour#function"},"Lambda"),"\u3001",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/lang/tour#rule"},"Rule")," \u7684\u914d\u7f6e\u53ca\u5176\u6a21\u578b\u3001\u903b\u8f91\u548c\u7b56\u7565\u7f16\u5199"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53ef\u9760\u7a33\u5b9a"),"\uff1a\u4f9d\u8d56",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/lang/tour/#type-system"},"\u9759\u6001\u7c7b\u578b\u7cfb\u7edf"),"\u3001",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/lang/tour/#validation"},"\u7ea6\u675f"),"\u548c",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/lang/tour#rule"},"\u81ea\u5b9a\u4e49\u89c4\u5219"),"\u7684\u914d\u7f6e\u7a33\u5b9a\u6027"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5f3a\u53ef\u6269\u5c55"),"\uff1a\u901a\u8fc7\u72ec\u7acb\u914d\u7f6e\u5757",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/lang/tour/#-operators-1"},"\u81ea\u52a8\u5408\u5e76\u673a\u5236"),"\u4fdd\u8bc1\u914d\u7f6e\u7f16\u5199\u7684\u9ad8\u53ef\u6269\u5c55\u6027"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6613\u81ea\u52a8\u5316"),"\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/lang/tour/#kcl-cli-variable-override"},"CRUD APIs"),"\uff0c",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/xlang-api/overview"},"\u591a\u8bed\u8a00 SDK"),"\uff0c",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl-plugin"},"\u8bed\u8a00\u63d2\u4ef6")," \u6784\u6210\u7684\u68af\u5ea6\u81ea\u52a8\u5316\u65b9\u6848"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6781\u81f4\u6027\u80fd"),"\uff1a\u4f7f\u7528 Rust & C\uff0c",(0,l.kt)("a",{parentName:"li",href:"https://llvm.org/"},"LLVM")," \u5b9e\u73b0\uff0c\u652f\u6301\u7f16\u8bd1\u5230\u672c\u5730\u4ee3\u7801\u548c ",(0,l.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WASM")," \u7684\u9ad8\u6027\u80fd\u7f16\u8bd1\u65f6\u548c\u8fd0\u884c\u65f6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"API \u4eb2\u548c"),"\uff1a\u539f\u751f\u652f\u6301 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl-openapi"},"OpenAPI"),"\u3001 Kubernetes CRD\uff0c Kubernetes YAML \u7b49 API \u751f\u6001\u89c4\u8303"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u53cb\u597d"),"\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/tools/cli/kcl/"},"\u8bed\u8a00\u5de5\u5177")," (Format\uff0cLint\uff0cTest\uff0cVet\uff0cDoc \u7b49)\u3001 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/vscode-kcl"},"IDE \u63d2\u4ef6")," \u6784\u5efa\u826f\u597d\u7684\u7814\u53d1\u4f53\u9a8c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5b89\u5168\u53ef\u63a7"),"\uff1a\u9762\u5411\u9886\u57df\uff0c\u4e0d\u539f\u751f\u63d0\u4f9b\u7ebf\u7a0b\u3001IO \u7b49\u7cfb\u7edf\u7ea7\u529f\u80fd\uff0c\u4f4e\u566a\u97f3\uff0c\u4f4e\u5b89\u5168\u98ce\u9669\uff0c\u6613\u7ef4\u62a4\uff0c\u6613\u6cbb\u7406"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u591a\u8bed\u8a00API"),"\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/xlang-api/go-api"},"Go"),"\uff0c",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/xlang-api/python-api"},"Python"),"\uff0c",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/xlang-api/java-api"},"Java")," \u548c ",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/reference/xlang-api/rest-api"},"REST API")," \u6ee1\u8db3\u4e0d\u540c\u573a\u666f\u548c\u5e94\u7528\u4f7f\u7528\u9700\u6c42"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u751f\u6001\u96c6\u6210"),"\uff1a\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kustomize-kcl"},"Kustomize KCL \u63d2\u4ef6"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/helm-kcl"},"Helm KCL \u63d2\u4ef6")," \u6216\u8005 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kpt-kcl-sdk"},"KPT KCL SDK")," \u76f4\u63a5\u7f16\u8f91\u6216\u6821\u9a8c\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u53ef\u7528"),"\uff1a\u5e7f\u6cdb\u5e94\u7528\u5728\u8682\u8681\u96c6\u56e2\u5e73\u53f0\u5de5\u7a0b\u53ca\u81ea\u52a8\u5316\u7684\u751f\u4ea7\u73af\u5883\u5b9e\u8df5\u4e2d")),(0,l.kt)("p",null,"\u867d\u7136 KCL \u4e0d\u662f\u901a\u7528\u8bed\u8a00\uff0c\u4f46\u5b83\u6709\u76f8\u5e94\u7684\u5e94\u7528\u573a\u666f\u3002\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u901a\u8fc7 KCL \u7f16\u5199",(0,l.kt)("strong",{parentName:"p"},"config"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"schema"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"function"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"rule"),"\uff0c\u5176\u4e2d config \u7528\u4e8e\u5b9a\u4e49\u6570\u636e\uff0cschema \u7528\u4e8e\u63cf\u8ff0\u6570\u636e\u7684\u6a21\u578b\u5b9a\u4e49\uff0crule \u7528\u4e8e\u9a8c\u8bc1\u6570\u636e\uff0cschema \u548c rule \u8fd8\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u6a21\u578b\u548c\u7ea6\u675f\u6765\u5145\u5206\u63cf\u8ff0\u6570\u636e\u3002\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 KCL \u4e2d\u7684 lambda \u7eaf\u51fd\u6570\u6765\u7ec4\u7ec7\u6570\u636e\u4ee3\u7801\uff0c\u5c01\u88c5\u901a\u7528\u4ee3\u7801\uff0c\u5e76\u5728\u9700\u8981\u65f6\u76f4\u63a5\u8c03\u7528\u5b83\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7528 KCL \u751f\u6210 kubernetes \u8d44\u6e90\u7684\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = name\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0a\u8ff0 KCL \u4ee3\u7801\u751f\u6210\u4e00\u4e2a Kubernetes YAML \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n")),(0,l.kt)("h2",{id:"\u5982\u4f55\u9009\u62e9"},"\u5982\u4f55\u9009\u62e9"),(0,l.kt)("p",null,"\u76ee\u524d\u793e\u533a\u5df2\u7ecf\u8fdb\u884c\u4e86\u5927\u91cf\u7684\u5c1d\u8bd5\u6765\u6539\u8fdb\u5176\u914d\u7f6e\u6280\u672f\uff0c\u4e3b\u8981\u53ef\u5206\u4e3a\u4e09\u7c7b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6a21\u677f\u3001\u4fee\u8865\u548c\u9a8c\u8bc1\u7684\u57fa\u4e8e\u4f4e\u7ea7\u6570\u636e\u683c\u5f0f\u7684\u5de5\u5177\uff0c\u4f7f\u7528\u5916\u90e8\u5de5\u5177\u6765\u589e\u5f3a\u91cd\u7528\u548c\u9a8c\u8bc1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9886\u57df\u7279\u5b9a\u8bed\u8a00\uff08DSL\uff09\u548c\u914d\u7f6e\u8bed\u8a00\uff08CL\uff09\uff0c\u4ee5\u589e\u5f3a\u8bed\u8a00\u80fd\u529b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u901a\u7528\u8bed\u8a00\uff08GPL\uff09\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4f7f\u7528 GPL \u7684\u4e91\u5f00\u53d1\u5de5\u5177\u5305\uff08CDK\uff09\u6216\u6846\u67b6\u6765\u5b9a\u4e49\u914d\u7f6e\u3002")),(0,l.kt)("p",null,"\u7b80\u5355\u7684\u9009\u62e9\u7b54\u6848\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u9700\u8981\u7f16\u5199\u7ed3\u6784\u5316\u7684\u9759\u6001\u7684 K-V\uff0c\u6216\u4f7f\u7528 Kubernetes \u539f\u751f\u7684\u6280\u672f\u5de5\u5177\uff0c\u5efa\u8bae\u9009\u62e9 YAML\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u5e0c\u671b\u5f15\u5165\u7f16\u7a0b\u8bed\u8a00\u4fbf\u5229\u6027\u4ee5\u6d88\u9664\u6587\u672c(\u5982 YAML\u3001JSON) \u6a21\u677f\uff0c\u6709\u826f\u597d\u7684\u53ef\u8bfb\u6027\uff0c\u6216\u8005\u4f60\u5df2\u662f Terraform \u7684\u7528\u6237\uff0c\u5efa\u8bae\u9009\u62e9 HCL\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u5e0c\u671b\u5f15\u5165\u7c7b\u578b\u529f\u80fd\u63d0\u5347\u7a33\u5b9a\u6027\uff0c\u7ef4\u62a4\u53ef\u6269\u5c55\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5efa\u8bae\u9009\u62e9 CUE\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u5e0c\u671b\u4ee5\u73b0\u4ee3\u8bed\u8a00\u65b9\u5f0f\u7f16\u5199\u590d\u6742\u7c7b\u578b\u548c\u5efa\u6a21\uff0c\u7ef4\u62a4\u53ef\u6269\u5c55\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u539f\u751f\u7684\u7eaf\u51fd\u6570\u548c\u7b56\u7565\uff0c\u548c\u751f\u4ea7\u7ea7\u7684\u6027\u80fd\u548c\u81ea\u52a8\u5316\uff0c\u5efa\u8bae\u76f4\u63a5\u9009\u62e9 KCL \u6216\u5c06 KCL \u7528\u4e8e\u5bf9\u5df2\u6709\u914d\u7f6e\u624b\u6bb5\u6216\u5de5\u5177\u8fdb\u884c\u589e\u5f3a\u3002")),(0,l.kt)("h3",{id:"vs-yamljson"},"vs. YAML/JSON"),(0,l.kt)("p",null,"YAML/JSON \u9002\u7528\u4e8e\u5c0f\u578b\u914d\u7f6e\u573a\u666f\u3002\u5bf9\u4e8e\u9700\u8981\u9891\u7e41\u4fee\u6539\u7684\u5927\u578b\u4e91\u539f\u751f\u914d\u7f6e\u573a\u666f\uff0c\u5b83\u4eec\u66f4\u9002\u5408 KCL\u3002\u6240\u6d89\u53ca\u7684\u4e3b\u8981\u533a\u522b\u662f\u914d\u7f6e\u6570\u636e\u62bd\u8c61\u548c\u90e8\u7f72\u4e4b\u95f4\u7684\u533a\u522b\uff1a"),(0,l.kt)("p",null,"\u4f7f\u7528 KCL \u8fdb\u884c\u914d\u7f6e\u7684\u4f18\u70b9\u662f\uff1a\u5bf9\u4e8e\u9759\u6001\u6570\u636e\uff0c\u62bd\u8c61\u4e00\u5c42\u7684\u4f18\u70b9\u610f\u5473\u7740\u6574\u4e2a\u7cfb\u7edf\u5177\u6709\u90e8\u7f72\u7075\u6d3b\u6027\u3002\u4e0d\u540c\u7684\u914d\u7f6e\u73af\u5883\u3001\u79df\u6237\u548c\u8fd0\u884c\u65f6\u53ef\u80fd\u5bf9\u9759\u6001\u6570\u636e\u6709\u4e0d\u540c\u7684\u8981\u6c42\uff0c\u751a\u81f3\u4e0d\u540c\u7684\u7ec4\u7ec7\u53ef\u80fd\u6709\u4e0d\u540c\u7684\u89c4\u8303\u548c\u4ea7\u54c1\u8981\u6c42\u3002KCL \u53ef\u7528\u4e8e\u516c\u5f00\u6700\u9700\u8981\u7684\u548c\u7ecf\u5e38\u4fee\u6539\u7684\u914d\u7f6e\u3002"),(0,l.kt)("h3",{id:"vs-jsonnetgcl"},"vs. Jsonnet/GCL"),(0,l.kt)("p",null,"GCL \u662f\u4e00\u79cd\u7528 Python \u5b9e\u73b0\u7684\u58f0\u660e\u5f0f\u914d\u7f6e\u8bed\u8a00\uff0c\u5b83\u63d0\u4f9b\u4e86\u652f\u6301\u6a21\u677f\u62bd\u8c61\u7684\u5fc5\u8981\u8bed\u8a00\u529f\u80fd\u3002\u7136\u800c GCL \u7f16\u8bd1\u5668\u672c\u8eab\u662f\u7528Python\u7f16\u5199\u7684\uff0c\u4e14\u8bed\u8a00\u672c\u8eab\u662f\u89e3\u91ca\u6267\u884c\u7684\u3002\u5bf9\u4e8e\u5927\u578b\u6a21\u677f\u5b9e\u4f8b\uff08\u5982 kubernetes \u6a21\u578b\uff09\uff0c\u6027\u80fd\u8f83\u5dee\u3002"),(0,l.kt)("p",null,"Jsonnet \u662f\u4e00\u79cd\u7528 C++ \u5b9e\u73b0\u7684\u6570\u636e\u6a21\u677f\u8bed\u8a00\uff0c\u9002\u7528\u4e8e\u5e94\u7528\u7a0b\u5e8f\u548c\u5de5\u5177\u5f00\u53d1\u4eba\u5458\uff0c\u53ef\u4ee5\u751f\u6210\u914d\u7f6e\u6570\u636e\u5e76\u901a\u8fc7\u4ee3\u7801\u7ec4\u7ec7\u3001\u7b80\u5316\u548c\u7ba1\u7406\u5927\u578b\u914d\u7f6e\uff0c\u800c\u4e0d\u4f1a\u4ea7\u751f\u526f\u4f5c\u7528\u3002"),(0,l.kt)("p",null,"Jsonnet \u548c GCL \u975e\u5e38\u64c5\u957f\u51cf\u5c11\u6837\u677f\u3002\u5b83\u4eec\u90fd\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7801\u751f\u6210\u914d\u7f6e\uff0c\u5c31\u50cf\u5de5\u7a0b\u5e08\u53ea\u9700\u8981\u7f16\u5199\u9ad8\u7ea7 GPL \u4ee3\u7801\uff0c\u800c\u4e0d\u662f\u624b\u52a8\u7f16\u5199\u5bb9\u6613\u51fa\u9519\u4e14\u96be\u4ee5\u7406\u89e3\u7684\u670d\u52a1\u5668\u4e8c\u8fdb\u5236\u4ee3\u7801\u4e00\u6837\u3002Jsonnet \u51cf\u5c11\u4e86 GCL \u7684\u4e00\u4e9b\u590d\u6742\u6027\uff0c\u4f46\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u5c5e\u4e8e\u540c\u4e00\u7c7b\u522b\u3002\u4e24\u8005\u90fd\u6709\u8bb8\u591a\u8fd0\u884c\u65f6\u9519\u8bef\uff0c\u7c7b\u578b\u68c0\u67e5\u548c\u7ea6\u675f\u80fd\u529b\u4e0d\u8db3\u3002"),(0,l.kt)("h3",{id:"vs-hcl"},"vs. HCL"),(0,l.kt)("p",null,"HCL \u662f\u4e00\u79cd Go \u5b9e\u73b0\u7684\u7ed3\u6784\u5316\u914d\u7f6e\u8bed\u8a00\u3002HCL\u7684\u539f\u751f\u8bed\u6cd5\u53d7\u5230libucl\u548cnginx\u914d\u7f6e\u7684\u542f\u53d1\u3002\u5b83\u7528\u4e8e\u521b\u5efa\u4e00\u79cd\u5bf9\u4eba\u7c7b\u548c\u673a\u5668\u53cb\u597d\u7684\u7ed3\u6784\u5316\u914d\u7f6e\u8bed\u8a00\uff0c\u4f5c\u4e3a",(0,l.kt)("a",{parentName:"p",href:"https://www.terraform.io/language"},"Terraform\u8bed\u8a00"),"\u4e3b\u8981\u7528\u4e8e DevOps\u5de5\u5177\u3001\u670d\u52a1\u5668\u914d\u7f6e\u548c\u8d44\u6e90\u914d\u7f6e\u7b49\u3002"),(0,l.kt)("p",null,"HCL \u4e0e GCL \u6709\u4e00\u4e9b\u6bd4\u8f83\u76f8\u4f3c\u7684\u5730\u65b9\u3002\u5b83\u786e\u5b9e\u5f15\u5165\u4e86\u7a77\u4eba\u7248\u672c\u7684\u7ee7\u627f\uff1a\u6587\u4ef6\u8986\u76d6\u3002\u53ef\u4ee5\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u5b9a\u4e49\u5b57\u6bb5\uff0c\u8fd9\u4e9b\u6587\u4ef6\u6309\u6587\u4ef6\u540d\u7684\u7279\u5b9a\u987a\u5e8f\u88ab\u8986\u76d6\u3002\u867d\u7136\u6ca1\u6709GCL\u90a3\u4e48\u590d\u6742\uff0c\u4f46\u5b83\u786e\u5b9e\u5b58\u5728\u4e00\u4e9b\u76f8\u540c\u7684\u95ee\u9898\u3002\u6a21\u5f0f\u662f\u56fa\u5b9a\u7684\uff0c\u80fd\u529b\u662f\u6709\u9650\u7684\u3002"),(0,l.kt)("p",null,"HCL \u7684\u7528\u6237\u754c\u9762\u4e0d\u80fd\u901a\u8fc7 Terraform \u63d0\u4f9b\u8005 Schema \u5b9a\u4e49\u76f4\u63a5\u611f\u77e5\u3002\u6b64\u5916\uff0c\u5728\u7f16\u5199\u590d\u6742\u5bf9\u8c61\u548c\u5fc5\u9700/\u53ef\u9009\u5b57\u6bb5\u5b9a\u4e49\u65f6\uff0c\u7528\u6237\u754c\u9762\u5f88\u9ebb\u70e6\u3002\u52a8\u6001\u53c2\u6570\u53d7\u53d8\u91cf\u7684\u6761\u4ef6\u5b57\u6bb5\u7ea6\u675f\u3002\u8d44\u6e90\u672c\u8eab\u7684\u7ea6\u675f\u9700\u8981\u7531\u63d0\u4f9b\u7a0b\u5e8f\u6a21\u5f0f\u5b9a\u4e49\uff0c\u6216\u8005\u4e0eSentinel/Rego \u548c\u5176\u4ed6\u7b56\u7565\u8bed\u8a00\u76f8\u7ed3\u5408\u3002\u8bed\u8a00\u672c\u8eab\u7684\u5b8c\u6574\u6027\u4e0d\u80fd\u81ea\u6211\u5c01\u95ed\uff0c\u5176\u5b9e\u73b0\u65b9\u6cd5\u4e5f\u4e0d\u7edf\u4e00\u3002"),(0,l.kt)("h3",{id:"vs-cue"},"vs. CUE"),(0,l.kt)("p",null,"CUE \u53ef\u4ee5\u901a\u8fc7\u7ed3\u6784\u3001\u65e0\u7ee7\u627f\u548c\u5176\u4ed6\u7279\u6027\u7528\u4f5c\u5efa\u6a21\uff0c\u5f53\u6a21\u578b\u5b9a\u4e49\u4e4b\u95f4\u6ca1\u6709\u51b2\u7a81\u65f6\u53ef\u4ee5\u5b9e\u73b0\u9ad8\u5ea6\u62bd\u8c61\u3002\u56e0\u4e3a CUE \u5728\u8fd0\u884c\u65f6\u6267\u884c\u6240\u6709\u7ea6\u675f\u68c0\u67e5\uff0c\u6240\u4ee5\u5b83\u5728\u5927\u89c4\u6a21\u914d\u7f6e\u5efa\u6a21\u573a\u666f\u4e2d\u53ef\u80fd\u5b58\u5728\u6027\u80fd\u74f6\u9888\u3002CUE \u5c06\u7c7b\u578b\u548c\u503c\u7ec4\u5408\u4e3a\u4e00\u4e2a\u6982\u5ff5\uff0c\u5e76\u901a\u8fc7\u5404\u79cd\u8bed\u6cd5\u7b80\u5316\u4e86\u7ea6\u675f\u7684\u7f16\u5199\u3002\u4f8b\u5982\uff0c\u4e0d\u9700\u8981\u6cdb\u578b\u7c7b\u578b\u548c\u679a\u4e3e\uff0c\u6c42\u548c\u7c7b\u578b\u548c\u7a7a\u503c\u5408\u5e76\u662f\u4e00\u56de\u4e8b\u3002CUE \u652f\u6301\u914d\u7f6e\u5408\u5e76\uff0c\u4f46\u5b83\u662f\u5b8c\u5168\u5e42\u7b49\u7684\u3002\u5b83\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u590d\u6742\u7684\u591a\u79df\u6237\u548c\u591a\u73af\u5883\u914d\u7f6e\u573a\u666f\u7684\u8981\u6c42\u3002\u5bf9\u4e8e\u590d\u6742\u7684\u5faa\u73af\u548c\u7ea6\u675f\u573a\u666f\uff0c\u7f16\u5199\u8d77\u6765\u5f88\u590d\u6742\uff0c\u7f16\u5199\u9700\u8981\u7cbe\u786e\u914d\u7f6e\u4fee\u6539\u6216\u8005 Patch \u7684\u573a\u666f\u4e5f\u5f88\u9ebb\u70e6\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e KCL\uff0c\u5efa\u6a21\u662f\u901a\u8fc7 KCL Schema \u8fdb\u884c\u7684\uff0c\u901a\u8fc7\u8bed\u8a00\u7ea7\u5de5\u7a0b\u548c\u4e00\u4e9b\u9762\u5411\u5bf9\u8c61\u7684\u7279\u6027\uff08\u5982\u5355\u4e00\u7ee7\u627f\u3001Mixin \u590d\u7528\uff09\u53ef\u4ee5\u5b9e\u73b0\u9ad8\u6a21\u578b\u62bd\u8c61\u3002KCL \u662f\u4e00\u79cd\u9759\u6001\u7f16\u8bd1\u8bed\u8a00\uff0c\u7528\u4e8e\u5927\u89c4\u6a21\u5efa\u6a21\u573a\u666f\u662f\u8fd0\u884c\u65f6\u5f00\u9500\u8f83\u4f4e (\u6027\u80fd\u66f4\u9ad8\uff0c\u66f4\u4f4e\u7684\u5185\u5b58\u6d88\u8017)\u3002KCL \u63d0\u4f9b\u4e86\u66f4\u4e30\u5bcc\u7684\u68c0\u67e5\u58f0\u660e\u6027\u7ea6\u675f\u8bed\u6cd5\uff0c\u8fd9\u4f7f\u5f97\u914d\u7f6e\u548c\u7b56\u7565\u7f16\u5199\u66f4\u52a0\u5bb9\u6613\u3002\u5bf9\u4e8e\u4e00\u4e9b\u914d\u7f6e\u5b57\u6bb5\u7ec4\u5408\u7ea6\u675f\uff0c\u5b83\u66f4\u5bb9\u6613\u7f16\u5199\uff08\u4e0e CUE \u76f8\u6bd4\uff0cKCL \u63d0\u4f9b\u4e86\u66f4\u591a\u7684 if-guard \u7ec4\u5408\u7ea6\u675f\u3001all/any/map/filter \u8868\u8fbe\u5f0f\u548c\u5176\u4ed6\u96c6\u5408\u7ea6\u675f\u7f16\u5199\u65b9\u6cd5\uff0c\u8fd9\u4f7f\u5f97\u7f16\u5199\u66f4\u5bb9\u6613\uff09\u3002"),(0,l.kt)("h3",{id:"vs-dhall"},"vs. Dhall"),(0,l.kt)("p",null,"Dhall \u662f\u4e00\u79cd\u53ef\u7f16\u7a0b\u914d\u7f6e\u8bed\u8a00\uff0c\u5b83\u7ec4\u5408\u4e86 JSON\u3001\u51fd\u6570\u3001\u7c7b\u578b\u548c imports \u5bfc\u5165\u7b49\u529f\u80fd, \u672c\u8eab\u98ce\u683c\u504f\u5411\u51fd\u6570\u5f0f\uff0c\u5982\u679c\u60a8\u5b66\u8fc7 haskell \u7b49\u51fd\u6570\u5f0f\u98ce\u683c\u8bed\u8a00\uff0c\u53ef\u80fd\u4f1a\u5bf9\u5b83\u611f\u5230\u719f\u6089\u7684\u3002\u76f8\u6bd4\u4e8e Dhall, KCL \u4e5f\u63d0\u4f9b\u4e86\u7c7b\u4f3c\u529f\u80fd\u7684\u7ec4\u5408\uff0c\u63d0\u4f9b\u7ed9\u7528\u6237\u914d\u7f6e\u53ef\u7f16\u7a0b\u548c\u62bd\u8c61\u7684\u80fd\u529b\uff0c\u4e0d\u8fc7 KCL \u5728\u5efa\u6a21\u3001\u7ea6\u675f\u68c0\u67e5\u3001\u81ea\u52a8\u5316\u7b49\u65b9\u9762\u505a\u4e86\u66f4\u591a\u7684\u6539\u8fdb\uff0c\u540c\u65f6\u80fd\u591f\u901a\u8fc7\u5305\u7ba1\u7406\u624b\u6bb5\u8fdb\u884c\u6a21\u578b\u5171\u4eab\u3002\u6b64\u5916\uff0cKCL \u7684\u8bed\u6cd5\u8bed\u4e49\u66f4\u8d34\u8fd1\u4e8e\u9762\u5411\u5bf9\u8c61\u8bed\u8a00\uff0c\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4f1a\u6bd4\u7eaf\u51fd\u6570\u5f0f\u98ce\u683c\u63a5\u53d7\u7a0b\u5ea6\u66f4\u9ad8\u3002"),(0,l.kt)("h3",{id:"vs-kustomize"},"vs. Kustomize"),(0,l.kt)("p",null,"Kustomize \u7684\u6838\u5fc3\u529f\u80fd\u662f\u5176\u6587\u4ef6\u7ea7\u8986\u76d6\u529f\u80fd\u3002\u4f46\u662f\u5b83\u5b58\u5728\u591a\u4e2a\u8986\u76d6\u94fe\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u627e\u5230\u7279\u5b9a\u5c5e\u6027\u503c\u7684\u8bed\u53e5\u4e0d\u80fd\u4fdd\u8bc1\u5b83\u662f\u6700\u7ec8\u503c\uff0c\u56e0\u4e3a\u5176\u4ed6\u5730\u65b9\u51fa\u73b0\u7684\u53e6\u4e00\u4e2a\u7279\u5b9a\u503c\u53ef\u4ee5\u8986\u76d6\u5b83\u3002\u5bf9\u4e8e\u590d\u6742\u7684\u573a\u666f\uff0cKustomsize \u6587\u4ef6\u7684\u7ee7\u627f\u94fe\u7684\u68c0\u7d22\u901a\u5e38\u4e0d\u5982 KCL \u4ee3\u7801\u7684\u7ee7\u627f\u94fe\u68c0\u7d22\u65b9\u4fbf\uff0c\u9700\u8981\u4ed4\u7ec6\u8003\u8651\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\u8986\u76d6\u987a\u5e8f\u3002\u6b64\u5916\uff0cKustomize \u65e0\u6cd5\u89e3\u51b3 YAML \u914d\u7f6e\u7f16\u5199\u3001\u7ea6\u675f\u9a8c\u8bc1\u3001\u6a21\u578b\u62bd\u8c61\u548c\u5f00\u53d1\u7b49\u95ee\u9898\uff0c\u66f4\u9002\u5408\u4e8e\u7b80\u5355\u7684\u914d\u7f6e\u573a\u666f\u3002"),(0,l.kt)("p",null,"\u5728 KCL \u4e2d\uff0c\u914d\u7f6e\u5408\u5e76\u64cd\u4f5c\u53ef\u4ee5\u5bf9\u4ee3\u7801\u4e2d\u7684\u6bcf\u4e2a\u914d\u7f6e\u5c5e\u6027\u8fdb\u884c\u7ec6\u7c92\u5ea6\u5904\u7406\uff0c\u5408\u5e76\u7b56\u7565\u53ef\u4ee5\u7075\u6d3b\u8bbe\u7f6e\uff0c\u800c\u4e0d\u9650\u4e8e\u6574\u4f53\u8d44\u6e90\uff0c\u914d\u7f6e\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u53ef\u4ee5\u901a\u8fc7KCL\u7684import\u8bed\u53e5\u8fdb\u884c\u9759\u6001\u5206\u6790\u3002"),(0,l.kt)("h3",{id:"vs-helm"},"vs. Helm"),(0,l.kt)("p",null,"Helm \u7684\u6982\u5ff5\u6e90\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u7684\u5305\u7ba1\u7406\u673a\u5236\u3002\u5b83\u662f\u4e00\u4e2a\u57fa\u4e8e\u6a21\u677f\u5316 YAML \u6587\u4ef6\u7684\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u652f\u6301\u5305\u4e2d\u8d44\u6e90\u7684\u6267\u884c\u548c\u7ba1\u7406\u3002"),(0,l.kt)("p",null,"KCL \u81ea\u7136\u63d0\u4f9b\u4e86 Helm \u529f\u80fd\u7684\u8d85\u96c6\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 KCL \u4f5c\u4e3a\u66ff\u4ee3\u3002\u5bf9\u4e8e\u91c7\u7528 Helm \u7684\u7528\u6237\uff0cKCL \u4e2d\u7684\u5806\u6808\u7f16\u8bd1\u7ed3\u679c\u53ef\u4ee5\u6253\u5305\u5e76\u4ee5 Helm \u683c\u5f0f\u4f7f\u7528\uff0c\u901a\u8fc7 kpm \u5305\u7ba1\u7406\u5de5\u5177\u8fdb\u884c\u5206\u53d1\u590d\u7528\u3002\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Helm-KCL \u63d2\u4ef6\u76f4\u63a5\u5bf9\u5df2\u6709\u7684 Helm Charts \u8fdb\u884c\u65e0\u4fb5\u5165\u7684\u53ef\u7f16\u7a0b\u6269\u5c55\u3002"),(0,l.kt)("h3",{id:"vs-cdk"},"vs. CDK"),(0,l.kt)("p",null,"\u7528CDK\u7684\u9ad8\u7ea7\u8bed\u8a00\u7f16\u5199\u53ef\u4ee5\u5f88\u597d\u5730\u96c6\u6210\u5230\u5e94\u7528\u7a0b\u5e8f\u9879\u76ee\u4e2d\uff0c\u8fd9\u5b9e\u9645\u4e0a\u662f\u5ba2\u6237\u7aef\u8fd0\u884c\u65f6\u7684\u4e00\u90e8\u5206\u3002\u5bf9\u4e8eKCL\uff0c\u7531KCL\u7f16\u5199\u7684\u5916\u90e8\u914d\u7f6e\u548c\u7b56\u7565\u4e0e\u5ba2\u6237\u7aef\u8fd0\u884c\u65f6\u5206\u79bb\u3002"),(0,l.kt)("p",null,"\u901a\u7528\u8bed\u8a00\u901a\u5e38\u662f\u8fc7\u5ea6\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u8fdc\u8fdc\u8d85\u51fa\u4e86\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\u3002\u901a\u7528\u8bed\u8a00\u4e2d\u5b58\u5728\u5404\u79cd\u5b89\u5168\u95ee\u9898\uff0c\u4f8b\u5982\u80fd\u529b\u8fb9\u754c\u95ee\u9898\uff08\u542f\u52a8\u672c\u5730\u7ebf\u7a0b\u3001\u8bbf\u95eeIO\u3001\u7f51\u7edc\u3001\u4ee3\u7801\u65e0\u9650\u5faa\u73af\u548c\u5176\u4ed6\u5b89\u5168\u98ce\u9669\uff09\u3002\u4f8b\u5982\uff0c\u5728\u97f3\u4e50\u9886\u57df\uff0c\u6709\u4e13\u95e8\u7684\u97f3\u7b26\u6765\u8868\u8fbe\u97f3\u4e50\uff0c\u8fd9\u4fbf\u4e8e\u5b66\u4e60\u548c\u4ea4\u6d41\uff0c\u5b83\u4e0d\u80fd\u7528\u4e00\u822c\u8bed\u8a00\u8868\u8fbe\u6e05\u695a\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u7531\u4e8e\u901a\u7528\u8bed\u8a00\u98ce\u683c\u591a\u6837\uff0c\u9700\u8981\u7edf\u4e00\u7ef4\u62a4\u3001\u7ba1\u7406\u548c\u81ea\u52a8\u5316\u3002\u901a\u7528\u8bed\u8a00\u901a\u5e38\u7528\u4e8e\u7f16\u5199\u5ba2\u6237\u7aef\u8fd0\u884c\u65f6\uff0c\u5b83\u662f\u670d\u52a1\u5668\u8fd0\u884c\u65f6\u7684\u5ef6\u7eed\uff0c\u4e0d\u9002\u5408\u7f16\u5199\u72ec\u7acb\u4e8e\u8fd0\u884c\u65f6\u7684\u914d\u7f6e\uff0c\u88ab\u7f16\u8bd1\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e76\u6700\u7ec8\u4ece\u8fdb\u7a0b\u5f00\u59cb\u8fd0\u884c\u3002\u6b64\u5916\uff0cGPL \u7a33\u5b9a\u6027\u548c\u53ef\u6269\u5c55\u6027\u4e0d\u6613\u63a7\u5236\u3002\u7136\u800c\uff0cKCL \u914d\u7f6e\u8bed\u8a00\u901a\u5e38\u7528\u4e8e\u7f16\u5199\u6570\u636e\uff0c\u5c06\u6570\u636e\u4e0e\u7b80\u5355\u903b\u8f91\u76f8\u7ed3\u5408\uff0c\u5b83\u63cf\u8ff0\u4e86\u9884\u671f\u7684\u6700\u7ec8\u7ed3\u679c\uff0c\u7136\u540e\u7531\u7f16\u8bd1\u5668\u6216\u5f15\u64ce\u4f7f\u7528\uff0c\u65e2\u5177\u5907\u4e30\u5bcc\u7684\u7f16\u7a0b\u62bd\u8c61\u80fd\u529b\uff0c\u53c8\u5177\u5907\u65b9\u4fbf\u7684\u6570\u636e\u5904\u7406\u65b9\u5f0f\u3002"),(0,l.kt)("h3",{id:"vs-oparego"},"vs. OPA/Rego"),(0,l.kt)("p",null,"Rego \u8d77\u6e90\u4e8e\u903b\u8f91\u7f16\u7a0b\uff0c\u5b83\u57fa\u4e8e Datalog\uff0c\u662f\u4e00\u79cd\u53d7\u9650\u5236\u7684 Prolog \u5f62\u5f0f\uff0c\u800c KCL \u57fa\u4e8e\u9759\u6001\u7c7b\u578b\u7ed3\u6784\uff0c\u5177\u5907\u90e8\u5206 OOP \u7279\u6027\u3002Rego \u7c7b\u578b\u5316\u7279\u5f81\u7ed3\u6784\u7684\u8bbe\u8ba1\u662f\u4e3a\u4e86\u89e3\u51b3 Prolog \u5728\u4eba\u7c7b\u8bed\u8a00\u7f16\u7801\u5e94\u7528\u4e2d\u7684\u7f3a\u70b9\uff0c\u5c06 Datalog \u53d8\u91cf\u7528\u4e8e\u7f16\u7a0b\u672c\u8d28\u4e0a\u662f\u7ea6\u675f\u9a8c\u8bc1\u4efb\u52a1\uff0cDatalog \u662f\u4e00\u79cd\u4f18\u79c0\u7684\u67e5\u8be2\u8bed\u8a00\u3002\u4f46\u5bf9\u4e8e\u7ea6\u675f\u5f3a\u5236\u6267\u884c\uff0c\u5b83\u6709\u70b9\u9ebb\u70e6\uff0c\u56e0\u4e3a\u5b9e\u9645\u4e0a\u9996\u5148\u9700\u8981\u67e5\u8be2\u8981\u5e94\u7528\u7ea6\u675f\u7684\u503c\u624d\u80fd\u8fdb\u884c\u6821\u9a8c\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0cKCL \u7684\u65b9\u6cd5\u66f4\u6613\u4e8e\u627e\u5230\u89c4\u8303\u5316\u3001\u7b80\u5316\u3001\u9762\u5411\u4eba\u7c7b\u6613\u8bfb\uff0c\u9762\u5411\u8fd0\u884c\u65f6\u6027\u80fd\u4f18\u826f\u7684\u7ea6\u675f\u548c\u6821\u9a8c\u8868\u793a\uff0c\u5177\u5907\u9759\u6001\u7c7b\u578b\uff0c\u5e76\u4e14\u5b83\u66f4\u9002\u5408\u4e8e\u4ece OpenAPI \u751f\u6210\u6216\u8005\u521b\u5efa OpenAPI\u3002"))}m.isMDXComponent=!0},70159:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kcl-concepts-ab0af9c71c218368b5f789b5c9092753.png"},55686:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kcl-overview-4e6b6311b7b042e5b6d46c4877d0c2f9.png"}}]);