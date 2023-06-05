"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u914d\u7f6e",sidebar_position:1},i=void 0,s={unversionedId:"user_docs/guides/configuration",id:"version-0.4.4/user_docs/guides/configuration",title:"\u914d\u7f6e",description:"\u4f7f\u7528 KCL \u7f16\u5199\u914d\u7f6e\u4ee3\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.4/user_docs/guides/configuration.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/configuration",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/configuration",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/user_docs/guides/configuration.md",tags:[],version:"0.4.4",lastUpdatedBy:"Peefy",lastUpdatedAt:1685958977,formattedLastUpdatedAt:"2023\u5e746\u67085\u65e5",sidebarPosition:1,frontMatter:{title:"\u914d\u7f6e",sidebar_position:1},sidebar:"user_docs",previous:{title:"\u7528\u6237\u624b\u518c",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/"},next:{title:"\u6821\u9a8c",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/validation"}},l={},c=[{value:"\u4f7f\u7528 KCL \u7f16\u5199\u914d\u7f6e\u4ee3\u7801",id:"\u4f7f\u7528-kcl-\u7f16\u5199\u914d\u7f6e\u4ee3\u7801",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528-kcl-\u7f16\u5199\u914d\u7f6e\u4ee3\u7801"},"\u4f7f\u7528 KCL \u7f16\u5199\u914d\u7f6e\u4ee3\u7801"),(0,a.kt)("p",null,"KCL \u7684\u6838\u5fc3\u7279\u6027\u662f\u5176",(0,a.kt)("strong",{parentName:"p"},"\u5efa\u6a21"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u7ea6\u675f"),"\u80fd\u529b\uff0cKCL \u6838\u5fc3\u529f\u80fd\u57fa\u672c\u56f4\u7ed5 KCL \u8fd9\u4e2a\u4e24\u4e2a\u6838\u5fc3\u7279\u6027\u5c55\u5f00\uff0c\u6b64\u5916 KCL \u9075\u5faa\u4ee5\u7528\u6237\u4e3a\u4e2d\u5fc3\u7684\u914d\u7f6e\u7406\u5ff5\u800c\u8bbe\u8ba1\u5176\u6838\u5fc3\u7279\u6027\uff0c\u53ef\u4ee5\u4ece\u4e24\u4e2a\u65b9\u9762\u7406\u89e3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4ee5\u9886\u57df\u6a21\u578b\u4e3a\u4e2d\u5fc3\u7684\u914d\u7f6e\u89c6\u56fe"),"\uff1a\u501f\u52a9 KCL \u8bed\u8a00\u4e30\u5bcc\u7684\u7279\u6027\u53ca ",(0,a.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/tools/cli/openapi/"},"KCL OpenAPI")," \u7b49\u5de5\u5177\uff0c\u53ef\u4ee5\u5c06\u793e\u533a\u4e2d\u5e7f\u6cdb\u7684\u3001\u8bbe\u8ba1\u826f\u597d\u7684\u6a21\u578b\u76f4\u63a5\u96c6\u6210\u5230 KCL \u4e2d\uff08\u6bd4\u5982 K8s \u8d44\u6e90\u6a21\u578b\uff09\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u573a\u666f\u8bbe\u8ba1\u3001\u5b9e\u73b0\u81ea\u5df1\u7684 KCL \u6a21\u578b (\u5e93) \uff0c\u5f62\u6210\u4e00\u6574\u5957\u9886\u57df\u6a21\u578b\u67b6\u6784\u4ea4\u7531\u5176\u4ed6\u914d\u7f6e\u7ec8\u7aef\u7528\u6237\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4ee5\u7ec8\u7aef\u7528\u6237\u4e3a\u4e2d\u5fc3\u7684\u914d\u7f6e\u89c6\u56fe"),"\uff1a\u501f\u52a9 KCL \u7684\u4ee3\u7801\u5c01\u88c5\u3001\u62bd\u8c61\u548c\u590d\u7528\u80fd\u529b\uff0c\u53ef\u4ee5\u5bf9\u6a21\u578b\u67b6\u6784\u8fdb\u884c\u8fdb\u4e00\u6b65\u62bd\u8c61\u548c\u7b80\u5316\uff08\u6bd4\u5982\u5c06 K8s \u8d44\u6e90\u6a21\u578b\u62bd\u8c61\u4e3a\u4ee5\u5e94\u7528\u4e3a\u6838\u5fc3\u7684 Server \u6a21\u578b\uff09\uff0c\u505a\u5230",(0,a.kt)("strong",{parentName:"li"},"\u6700\u5c0f\u5316\u7ec8\u7aef\u7528\u6237\u914d\u7f6e\u8f93\u5165"),"\uff0c\u7b80\u5316\u7528\u6237\u7684\u914d\u7f6e\u754c\u9762\uff0c\u65b9\u4fbf\u624b\u52a8\u6216\u8005\u4f7f\u7528\u81ea\u52a8\u5316 API \u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002")),(0,a.kt)("p",null,"\u4e0d\u8bba\u662f\u4ee5\u4f55\u4e3a\u4e2d\u5fc3\u7684\u914d\u7f6e\u89c6\u56fe\uff0c\u5bf9\u4e8e\u4ee3\u7801\u800c\u8a00\uff08\u5305\u62ec\u914d\u7f6e\u4ee3\u7801\uff09\u90fd\u5b58\u5728\u5bf9\u914d\u7f6e\u6570\u636e\u7ea6\u675f\u7684\u9700\u6c42\uff0c\u6bd4\u5982\u7c7b\u578b\u7ea6\u675f\u3001\u914d\u7f6e\u5b57\u6bb5\u5fc5\u9009/\u53ef\u9009\u7ea6\u675f\u3001\u8303\u56f4\u7ea6\u675f\u3001\u4e0d\u53ef\u53d8\u6027\u7ea6\u675f\u7b49\uff0c\u8fd9\u4e5f\u662f KCL \u81f4\u529b\u4e8e\u89e3\u51b3\u7684\u6838\u5fc3\u95ee\u9898\u4e4b\u4e00\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"main.k")," \u7684 KCL \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    gender: "Male" | "Female"\n    name: Name\n\nschema Name:\n    first: str\n    middle?: str  # Optional, but must be non-empty when specified\n    last: str\n\n    check:\n        first != ""\n        last != ""\n        middle != ""\n\nalice = Person {\n    # gendre: "Female" # Error: misspelled attribute\n    gender: "Female"\n    name.first: "Alice"\n    name.last: "White"\n}\n')),(0,a.kt)("p",null,"\u6267\u884c\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee3\u7801\u5316\u7684\u65b9\u5f0f\u5f97\u5230\u4e86\u4e00\u4e2a YAML \u914d\u7f6e\u6587\u4ef6\u8f93\u51fa\uff0c\u8fd9\u5373\u662f KCL \u7684\u57fa\u672c\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"alice:\n  gender: Female\n  name:\n    first: Alice\n    last: White\n")))}p.isMDXComponent=!0}}]);