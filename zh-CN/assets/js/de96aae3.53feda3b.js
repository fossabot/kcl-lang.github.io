"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[5466],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>s});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=l.createContext({}),c=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},k=function(e){var n=c(e.components);return l.createElement(i.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,s=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return t?l.createElement(s,p(p({ref:n},k),{},{components:t})):l.createElement(s,p({ref:n},k))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[m]="string"==typeof e?e:a,p[1]=o;for(var c=2;c<r;c++)p[c]=t[c];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=t(87462),a=(t(67294),t(3905));const r={},p="\u6a21\u5757\u548c\u5305",o={unversionedId:"user_docs/concepts/package-and-module",id:"user_docs/concepts/package-and-module",title:"\u6a21\u5757\u548c\u5305",description:"\u672c\u8282\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u7ec4\u7ec7 KCL \u4e2d\u7684\u6587\u4ef6\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/concepts/package-and-module.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/package-and-module",permalink:"/zh-CN/docs/next/user_docs/concepts/package-and-module",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/concepts/package-and-module.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1708611628,formattedLastUpdatedAt:"2024\u5e742\u670822\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"\u6838\u5fc3\u6982\u5ff5",permalink:"/zh-CN/docs/next/user_docs/concepts/"},next:{title:"\u7c7b\u578b\u548c\u5b9a\u4e49",permalink:"/zh-CN/docs/next/user_docs/concepts/type-and-definition"}},i={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Module",id:"module",level:2},{value:"\u521b\u5efa\u4e00\u4e2a module",id:"\u521b\u5efa\u4e00\u4e2a-module",level:3},{value:"Package",id:"package",level:2},{value:"\u76f8\u5bf9\u5bfc\u5165\u8def\u5f84",id:"\u76f8\u5bf9\u5bfc\u5165\u8def\u5f84",level:3},{value:"\u7edd\u5bf9\u5bfc\u5165\u8def\u5f84",id:"\u7edd\u5bf9\u5bfc\u5165\u8def\u5f84",level:3},{value:"\u5185\u7f6e\u5305",id:"\u5185\u7f6e\u5305",level:3},{value:"\u63d2\u4ef6\u5305",id:"\u63d2\u4ef6\u5305",level:3},{value:"\u4e3b\u5305",id:"\u4e3b\u5305",level:3},{value:"\u5c5e\u4e8e\u4e3b\u5305\u7684\u6587\u4ef6",id:"\u5c5e\u4e8e\u4e3b\u5305\u7684\u6587\u4ef6",level:4},{value:"kcl.mod \u548c kcl.yaml \u5f02\u540c",id:"kclmod-\u548c-kclyaml-\u5f02\u540c",level:2}],k={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,l.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u5757\u548c\u5305"},"\u6a21\u5757\u548c\u5305"),(0,a.kt)("p",null,"\u672c\u8282\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u7ec4\u7ec7 KCL \u4e2d\u7684\u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u5728\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"module"),"\u4e2d\uff0cKCL \u6309",(0,a.kt)("strong",{parentName:"p"},"package"),"\u8fdb\u884c\u7ec4\u7ec7\u6587\u4ef6\u3002package \u53ef\u4ee5\u5728 module \u5185\u5b9a\u4e49\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 KCL \u5305\u7ba1\u7406\u5668 ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm")," \u4ece\u5916\u90e8\u5bfc\u5165\u3002\u5728\u540e\u4e00\u79cd\u60c5\u51b5\u4e0b\uff0cKCL \u5728\u4e13\u7528\u4f4d\u7f6e\u4e2d\u7ef4\u62a4\u5305\u7684\u526f\u672c\u3002"),(0,a.kt)("h2",{id:"module"},"Module"),(0,a.kt)("p",null,"KCL \u6a21\u5757\u6309\u76ee\u5f55\u5c42\u6b21\u7ed3\u6784\u5e03\u7f6e\u914d\u7f6e\u3002\u5b83\u5305\u542b\u4e86\u786e\u5b9a KCL \u914d\u7f6e\u7ed3\u679c\u6240\u9700\u7684\u4e00\u5207\u3002\u6b64\u76ee\u5f55\u7684\u6839\u6807\u8bb0\u4e3a\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u76ee\u5f55\u3002\u6b64\u76ee\u5f55\u7684\u5185\u5bb9\u5927\u591a\u7531 kcl \u5de5\u5177\uff08\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm")," \u7b49\uff09\u7ba1\u7406\u3002\u4ece\u8fd9\u4e2a\u610f\u4e49\u4e0a\u8bb2\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u7c7b\u4f3c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},".git")," \u76ee\u5f55\uff0c\u6807\u8bb0\u7740\u4ed3\u5e93\u7684\u6839\u76ee\u5f55\uff0c\u4f46\u5b83\u7684\u5185\u5bb9\u4e3b\u8981\u7531 git \u5de5\u5177\u7ba1\u7406\u3002\u6b64\u5916\uff0cKCL \u6a21\u5757\u662f\u6587\u4ef6\u7ec4\u7ec7\u7684\u6700\u5927\u5355\u4f4d\uff0c\u5177\u6709\u6240\u6709 KCL \u6587\u4ef6\u548c\u4f9d\u8d56\u9879\u7684\u56fa\u5b9a\u4f4d\u7f6e\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u4f7f\u7528 KCL \u6a21\u5757\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod"),"\uff09\u662f\u53ef\u9009\u7684\uff0c\u4f46\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u8bed\u4e49\u7248\u672c\u7ba1\u7406\u3001\u5206\u53d1\u3001\u5171\u4eab\u548c\u91cd\u7528\u4ee3\u7801\uff0c\u5219\u9700\u8981\u4f7f\u7528\u5b83\u3002")),(0,a.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a-module"},"\u521b\u5efa\u4e00\u4e2a module"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728\u6a21\u5757\u6839\u76ee\u5f55\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u521b\u5efa\u6a21\u5757:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kpm init [module name]\n")),(0,a.kt)("p",null,"\u6a21\u5757\u540d\u5728\u9700\u8981\u5728\u6a21\u5757\u5185\u5bfc\u5165\u53e6\u4e00\u4e2a\u6a21\u5757\u7684\u5305\u65f6\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5fc5\u9700\u7684"),"\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u624b\u52a8\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u6587\u4ef6\u6765\u521b\u5efa\u6a21\u5757\u3002"),(0,a.kt)("h2",{id:"package"},"Package"),(0,a.kt)("p",null,"\u5728 KCL \u4e2d\uff0c\u4e00\u4e2a\u5305\u901a\u5e38\u7531\u5305\u542b KCL \u6587\u4ef6\u7684\u201c\u6587\u4ef6\u5939\u201d\u7ec4\u6210\u3002\u8fd9\u4e2a\u6587\u4ef6\u5939\u53ef\u4ee5\u662f\u5b9e\u9645\u7684\u78c1\u76d8\u7269\u7406\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u7531\u591a\u4e2a KCL \u6587\u4ef6\uff08\u901a\u5e38\u662f\u4e3b\u5305\uff09\u7ec4\u6210\u3002\u4e0d\u540c\u7684\u5305\u901a\u8fc7\u4e0d\u540c\u7684\u5305\u8def\u5f84\uff08\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes.core.v1"),"\uff09\u552f\u4e00\u5730\u5b9a\u4f4d\u3002"),(0,a.kt)("p",null,"\u5728\u540c\u4e00\u4e2a\u6a21\u5757\u5185\uff0c\u53ef\u4ee5\u901a\u8fc7\u76f8\u5bf9\u6216\u7edd\u5bf9\u8def\u5f84\u7684 import \u8bed\u53e5\u4e92\u76f8\u5bfc\u5165\u4e0d\u540c\u7684\u5305\u3002\u5728 KCL \u89e3\u6790\u8fc7\u7a0b\u4e2d\uff0c\u76f8\u5bf9 import \u5c06\u88ab\u66ff\u6362\u4e3a\u7edd\u5bf9 import\uff0c\u5e76\u901a\u8fc7\u5305\u8def\u5f84\u627e\u5230\u76f8\u5e94\u7684 KCL \u4ee3\u7801\u3002"),(0,a.kt)("h3",{id:"\u76f8\u5bf9\u5bfc\u5165\u8def\u5f84"},"\u76f8\u5bf9\u5bfc\u5165\u8def\u5f84"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".")," \u8fd0\u7b97\u7b26\u6765\u5b9e\u73b0 KCL \u5165\u53e3\u6587\u4ef6\u7684\u76f8\u5bf9\u8def\u5f84\u5bfc\u5165\u3002"),(0,a.kt)("p",null,"main.k:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import .model1  # Current directory module\nimport ..service  # Parent directory\nimport ...root  # Parent of parent directory\n\ns = service.ImageService {}\nm = root.Schema {}\n")),(0,a.kt)("h3",{id:"\u7edd\u5bf9\u5bfc\u5165\u8def\u5f84"},"\u7edd\u5bf9\u5bfc\u5165\u8def\u5f84"),(0,a.kt)("p",null,"KCL \u8bed\u53e5",(0,a.kt)("inlineCode",{parentName:"p"},"import a.b.c.d")," \u7684\u8bed\u4e49\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"kcl.mod")," \u4e0d\u5b58\u5728\uff0c\u5219\u5c06\u5f53\u524d\u76ee\u5f55\u89c6\u4e3a\u5305\u6839\u76ee\u5f55\uff0c\u5e76\u4ece\u5f53\u524d\u76ee\u5f55\u641c\u7d22\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"li"},"a/b/c/d"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5f53\u524d\u76ee\u5f55\u641c\u7d22\u5931\u8d25\uff0c\u5219\u4ece\u6839\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"li"},"ROOT_PATH/a/b/c/d")," \u641c\u7d22\uff0c\u5426\u5219\u5f15\u53d1\u5bfc\u5165\u9519\u8bef\u3002")),(0,a.kt)("p",null,"\u6839\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"ROOT_PATH")," \u7684\u5b9a\u4e49\u662f\u76f8\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u6587\u4ef6\u7684\u76ee\u5f55\u3002"),(0,a.kt)("p",null,"\u4ee3\u7801\u7ed3\u6784:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 root\n    \u251c\u2500\u2500 kcl.mod\n    \u251c\u2500\u2500 model\n    \u2502   \u251c\u2500\u2500 model1.k\n    |   \u251c\u2500\u2500 model2.k\n    \u2502   \u2514\u2500\u2500 main.k\n    \u251c\u2500\u2500 service\n    \u2502   \u2514\u2500\u2500 service1.k\n    \u2514\u2500\u2500 mixin\n        \u2514\u2500\u2500 mixin1.k\n")),(0,a.kt)("h3",{id:"\u5185\u7f6e\u5305"},"\u5185\u7f6e\u5305"),(0,a.kt)("p",null,"KCL \u6709\u4e00\u7cfb\u5217\u5185\u7f6e\u5305\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"math"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"regex")," \u7b49\u3002\u8981\u4f7f\u7528\u5185\u7f6e\u5305\uff0c\u76f4\u63a5\u5bfc\u5165\u5e76\u4f7f\u7528\u5176\u9650\u5b9a\u6807\u8bc6\u7b26\u8c03\u7528\u51fd\u6570\u3002\u4f8b\u5982\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nimage = "nginx:1.14.2"\nis_match = regex.match(image, "^[a-zA-Z]+:\\d+\\.\\d+\\.\\d+$")\n\n')),(0,a.kt)("p",null,"\u8f93\u51fa\u7684 YAML \u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"image: nginx:1.14.2\nis_match: true\n")),(0,a.kt)("h3",{id:"\u63d2\u4ef6\u5305"},"\u63d2\u4ef6\u5305"),(0,a.kt)("p",null,"KCL \u8fd8\u6709\u4e00\u7cfb\u5217\u63d2\u4ef6\u5305\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"hello"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"project_context")," \u7b49\u3002\u8981\u4f7f\u7528\u63d2\u4ef6\u5305\uff0c\u9700\u8981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl_plugin.")," \u5305\u8def\u5f84\u524d\u7f00\u5bfc\u5165\uff0c\u5e76\u4f7f\u7528\u5176\u9650\u5b9a\u6807\u8bc6\u7b26\u8c03\u7528\u51fd\u6570\u3002\u4f8b\u5982\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import kcl_plugin.hello\n\nresult = hello.add(1, 1)\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7684 YAML \u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"result: 2\n")),(0,a.kt)("h3",{id:"\u4e3b\u5305"},"\u4e3b\u5305"),(0,a.kt)("p",null,"\u5728 KCL \u4e2d\uff0c\u4e3b\u5305\u7684\u7ec4\u6210\u901a\u5e38\u7531\u7f16\u8bd1\u5668\u53c2\u6570\u786e\u5b9a\u3002\u8fd9\u662f\u56e0\u4e3aKCL\u6a21\u5f0f\u548c\u7ea6\u675f\u53ef\u4ee5\u5728\u5305\u4e2d\u7684\u6587\u4ef6\u4e2d\u5206\u9694\uff0c\u751a\u81f3\u53ef\u4ee5\u5728\u76ee\u5f55\u4e2d\u7ec4\u7ec7\uff0c\u8003\u8651\u5c06\u914d\u7f6e\u5199\u5165\u548c\u7ef4\u62a4\u5728\u9694\u79bb\u5757\u4e2d\u7684\u4fbf\u5229\u6027\u3002"),(0,a.kt)("h4",{id:"\u5c5e\u4e8e\u4e3b\u5305\u7684\u6587\u4ef6"},"\u5c5e\u4e8e\u4e3b\u5305\u7684\u6587\u4ef6"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4f7f\u7528KCL\u547d\u4ee4\u884c\u51b3\u5b9a\u4f7f\u7528\u54ea\u4e9b\u914d\u7f6e\u548c\u7ea6\u675f\uff0c\u4f8b\u5982\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kcl file1.k file2.k\n")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u4e3b\u5305\u5305\u542b\u4e24\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"file1.k")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"file2.k")," \u7684 KCL \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u5982\u679c KCL \u88ab\u544a\u77e5\u4e3a\u7279\u5b9a\u76ee\u5f55\u52a0\u8f7d\u6587\u4ef6\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kcl ./path/to/package\n")),(0,a.kt)("p",null,"\u5b83\u5c06\u53ea\u67e5\u627e ",(0,a.kt)("inlineCode",{parentName:"p"},".k")," \u540e\u7f00\u7684 KCL \u6587\u4ef6\uff0c\u5e76\u5ffd\u7565 ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"_test.k")," \u524d\u7f00\u7684 KCL \u6587\u4ef6\u5408\u5e76\u5230\u4e3b\u5305\u4e2d\u3002\u6b64\u5916\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"./path/to/package")," \u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u6587\u4ef6\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u6587\u4ef6\u5c06\u88ab\u5ffd\u7565\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u547d\u4ee4\u884c\u7f16\u8bd1\u8bbe\u7f6e\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.yaml"),"\uff09\u6765\u8bbe\u7f6e\u4e3b\u5305\u6587\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_cli_configs:\n  files:\n    - file1.k\n    - file2.k\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kcl -Y kcl.yaml\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u6ca1\u6709\u4e3a KCL \u6307\u5b9a\u4efb\u4f55\u8f93\u5165\u6587\u4ef6\uff0cKCL \u5c06\u4ece\u547d\u4ee4\u884c\u6267\u884c\u8def\u5f84\u67e5\u627e\u9ed8\u8ba4\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u6587\u4ef6\u8bfb\u53d6\u8f93\u5165\u6587\u4ef6\u3002\u6b64\u5916\uff0c\u5982\u679c\u6211\u4eec\u544a\u8bc9KCL\u8f93\u5165\u6587\u4ef6\u548c\u7f16\u8bd1\u8bbe\u7f6e\u6587\u4ef6\uff0cKCL\u5c06\u628a\u7528\u6237\u8f93\u5165\u7684\u8f93\u5165\u6587\u4ef6\u4f5c\u4e3a\u6700\u7ec8\u503c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u65e0\u8bba`kcl.yaml` \u4e2d\u662f\u5426\u914d\u7f6e `files` \u5b57\u6bb5\uff0c\u8f93\u5165\u6587\u4ef6\u7684\u6700\u7ec8\u503c\u4e3a["file1.k", "file2.k"]\nkcl -Y kcl.yaml file1.k file2.k\n')),(0,a.kt)("h2",{id:"kclmod-\u548c-kclyaml-\u5f02\u540c"},"kcl.mod \u548c kcl.yaml \u5f02\u540c"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5728 KCL \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u90fd\u662f\u53ef\u9009\u7684\u3002\u5b83\u4eec\u4e4b\u95f4\u7684\u533a\u522b\u5728\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u786e\u5b9a\u5305\u8def\u5f84\u7684\u6839\u8def\u5f84\u4ee5\u53ca KCL \u6a21\u5757\u662f\u5426\u5177\u6709\u5206\u53d1\u548c\u91cd\u7528\u8981\u6c42\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u786e\u5b9a\u4e3b\u5305\u7684 KCL \u6587\u4ef6\u7ec4\u6210\u3002"),(0,a.kt)("p",null,"\u5176\u6b21\uff0c\u5bf9\u4e8e\u4ec5\u7528\u4e8e\u5916\u90e8\u4f7f\u7528\u7684 kcl module\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u662f\u53ef\u9009\u7684\uff0c\u4f46 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u662f\u5fc5\u9700\u7684\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u9700\u8981\u58f0\u660e KCL \u7248\u672c\uff0c\u6a21\u5757\u7248\u672c\uff0c\u4f9d\u8d56\u5173\u7cfb\u548c\u5176\u4ed6\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u5bf9\u4e8e KCL IDE \u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u77e5\u9053\u4e3b\u5305\u4fe1\u606f\u624d\u80fd\u5f62\u6210\u5b8c\u6574\u7684\u7f16\u8bd1\u8fc7\u7a0b\uff0c\u56e0\u6b64\u5b83\u9700\u8981\u6839\u636e\u5149\u6807\u4f4d\u7f6e\u81ea\u52a8\u67e5\u627e\u4e3b\u5305\u7ec4\u6210\uff0c\u56e0\u4e3a\u6ca1\u6709\u4eba\u53ef\u4ee5\u901a\u8fc7 KCL \u547d\u4ee4\u884c\u6307\u5b9a\u8fd9\u4e9b\u4fe1\u606f\u3002\u4e00\u822c\u7684\u67e5\u8be2\u903b\u8f91\u662f\u67e5\u627e ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u7684\u5b58\u5728\u6027\u3002\u5982\u679c\u627e\u5230\u4e86\uff0c\u4e3b\u5305\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u4e2d\u7684\u6587\u4ef6\u5c5e\u6027\u7ec4\u6210\uff0c\u5982\u679c\u627e\u4e0d\u5230\uff0c\u4e3b\u5305\u7531\u5f53\u524d\u6587\u4ef6\u7ec4\u6210\u3002KCL IDE \u63d2\u4ef6\u4f1a\u6709\u9009\u62e9\u5730\u4e86\u89e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u6587\u4ef6\u3002\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u6587\u4ef6\u5b58\u5728\u65f6\uff0cIDE \u63d2\u4ef6\u4f1a\u8bfb\u53d6\u6240\u6709\u5305\u8def\u5f84\u53ca\u5176\u5728\u5916\u90e8\u4f9d\u8d56\u9879\u4e2d\u7684\u5b9e\u9645\u8def\u5f84\u7684\u76f8\u5e94\u4fe1\u606f\u3002"))}d.isMDXComponent=!0}}]);