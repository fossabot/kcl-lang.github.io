"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[20909],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>k});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),m=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=m(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(a),d=l,k=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return a?t.createElement(k,r(r({ref:n},c),{},{components:a})):t.createElement(k,r({ref:n},c))}));function k(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=a[m];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14574:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var t=a(87462),l=(a(67294),a(3905));const i={slug:"2023-12-09-kcl-new-semantic-model",title:"KCL \u65b0\u8bed\u4e49\u6a21\u578b",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Semantic"]},r=void 0,o={permalink:"/zh-CN/blog/2023-12-09-kcl-new-semantic-model",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-12-09-kcl-new-semantic-model/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-12-09-kcl-new-semantic-model/index.md",title:"KCL \u65b0\u8bed\u4e49\u6a21\u578b",description:"\u4ec0\u4e48\u662f KCL \u8bed\u4e49\u6a21\u578b\uff1f",date:"2023-12-09T00:00:00.000Z",formattedDate:"2023\u5e7412\u67089\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"Semantic",permalink:"/zh-CN/blog/tags/semantic"}],readingTime:15.195,hasTruncateMarker:!1,authors:[{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"}],frontMatter:{slug:"2023-12-09-kcl-new-semantic-model",title:"KCL \u65b0\u8bed\u4e49\u6a21\u578b",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Semantic"]},prevItem:{title:"KCL \u5728\u5de5\u7a0b\u5316\u914d\u7f6e\u7b56\u7565\u573a\u666f\u7684\u63a2\u7d22\u548c\u843d\u5730\u4f7f\u7528",permalink:"/zh-CN/blog/2023-12-09-engineering-config-policy-with-kcl-meeting"},nextItem:{title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 11.24 - 12.07) | \u5982\u4f55\u5728 KCL \u4e2d\u4f7f\u7528\u4e0d\u540c Kubernetes \u914d\u7f6e\u5408\u5e76\u7b56\u7565?",permalink:"/zh-CN/blog/2023-12-07-biweekly-newsletter"}},p={authorsImageUrls:[void 0]},m=[{value:"\u4ec0\u4e48\u662f KCL \u8bed\u4e49\u6a21\u578b\uff1f",id:"\u4ec0\u4e48\u662f-kcl-\u8bed\u4e49\u6a21\u578b",level:2},{value:"\u4e3a\u4ec0\u4e48 KCL \u9700\u8981\u65b0\u7684\u8bed\u4e49\u6a21\u578b\uff1f",id:"\u4e3a\u4ec0\u4e48-kcl-\u9700\u8981\u65b0\u7684\u8bed\u4e49\u6a21\u578b",level:2},{value:"\u65b0\u8bed\u4e49\u6a21\u578b\u7684\u4e3b\u8981\u601d\u8def\uff1aMap Reduce",id:"\u65b0\u8bed\u4e49\u6a21\u578b\u7684\u4e3b\u8981\u601d\u8defmap-reduce",level:2},{value:"\u65b0\u8bed\u4e49\u6a21\u578b Pipeline",id:"\u65b0\u8bed\u4e49\u6a21\u578b-pipeline",level:2},{value:"\u65b0\u8bed\u4e49\u6a21\u578b\u8bed\u4e49\u6570\u636e\u5e93\uff1aGlobalState",id:"\u65b0\u8bed\u4e49\u6a21\u578b\u8bed\u4e49\u6570\u636e\u5e93globalstate",level:2},{value:"SymbolData",id:"symboldata",level:3},{value:"ScopeData",id:"scopedata",level:3},{value:"SemanticDB",id:"semanticdb",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:m},s="wrapper";function u(e){let{components:n,...i}=e;return(0,l.kt)(s,(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-kcl-\u8bed\u4e49\u6a21\u578b"},"\u4ec0\u4e48\u662f KCL \u8bed\u4e49\u6a21\u578b\uff1f"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(23455).Z,width:"1480",height:"1238"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u201c\u8bed\u4e49\u6a21\u578b\u201d\u6307\u7684\u662f\u6e90\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684\u6a21\u5757\u3001\u51fd\u6570\u548c\u7c7b\u578b\u7684\u5185\u5b58\u8868\u793a\u3002\u8fd9\u79cd\u8868\u793a\u662f\u5b8c\u5168\u201c\u89e3\u6790\u201d\u7684\uff1a\u6240\u6709\u8868\u8fbe\u5f0f\u90fd\u6709\u7c7b\u578b\uff08\u6ce8\u610f\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u5728 KCL \u4e2d\u63a8\u5bfc\u7684\u8868\u8fbe\u5f0f\u7c7b\u578b\uff0c\u5b83\u4eec\u5c06\u88ab\u5b9a\u4e49\u4e3a any ",(0,l.kt)("strong",{parentName:"li"},"\u7c7b\u578b"),"\uff09\uff0c\u5e76\u4e14\u6240\u6709\u5f15\u7528\u90fd\u7ed1\u5b9a\u5230\u58f0\u660e\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u53ef\u4ee5\u63d0\u4ea4\u5c11\u91cf\u7684\u8f93\u5165\u6570\u636e\uff08\u901a\u5e38\u662f\u5bf9\u5355\u4e2a\u6587\u4ef6\u7684\u66f4\u6539\uff09\u5e76\u83b7\u5f97\u65b0\u7684\u4ee3\u7801\u6a21\u578b\u6765\u89e3\u91ca\u66f4\u6539\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u5f15\u64ce\u786e\u4fdd\u6a21\u578b\u662f",(0,l.kt)("strong",{parentName:"li"},"\u60f0\u6027\u7684\uff08\u6309\u9700\uff09\u548c\u589e\u91cf"),"\u8ba1\u7b97\u7684\uff0c\u5e76\u4e14\u53ef\u4ee5\u9488\u5bf9\u5c0f\u7684\u53d8\u5316\u5feb\u901f\u66f4\u65b0\u3002")),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48-kcl-\u9700\u8981\u65b0\u7684\u8bed\u4e49\u6a21\u578b"},"\u4e3a\u4ec0\u4e48 KCL \u9700\u8981\u65b0\u7684\u8bed\u4e49\u6a21\u578b\uff1f"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5148\u7b80\u7565\u5730\u770b\u4e00\u4e0b\u65e7\u8bed\u4e49\u6a21\u578b\u7684\u8bbe\u8ba1\uff1a\n",(0,l.kt)("img",{alt:"image.png",src:a(43389).Z,width:"1216",height:"812"}),"\n\u65e7\u8bed\u4e49\u6a21\u578b\u53ef\u4ee5\u7b80\u5355\u5730\u770b\u4f5c\u4e00\u4e2a\u5927\u91cf\u4f5c\u7528\u57df\u7684\u96c6\u5408\uff0c\u5176\u4e2d\u4e0d\u540c\u7684\u4f5c\u7528\u57df\u5185\u5b58\u50a8\u4e86\u4f5c\u7528\u57df\u4e4b\u95f4\u7684\u7236\u5b50\u8282\u70b9\u4ee5\u53ca\u5185\u90e8\u5305\u542b\u7684\u7b26\u53f7\u5b57\u7b26\u4e32\u53ca\u5bf9\u5e94\u7c7b\u578b\uff0c\u5b83\u53ef\u4ee5\u7b80\u5355\u5730\u6ee1\u8db3\u7f16\u8bd1\u5668\u5bf9\u7c7b\u578b\u68c0\u67e5\u548c\u4ee3\u7801\u751f\u6210\u7684\u9700\u6c42\u3002\u4f46\u6d89\u53ca\u5230\u9ad8\u7ea7\u5de5\u5177\u94fe\uff08\u4f8b\u5982 IDE\uff09\u8fd9\u79cd\u7b80\u5355\u7684\u7ed3\u6784\u5c31\u4e0d\u8db3\u4ee5\u6ee1\u8db3\u9700\u6c42\u4e86\u3002\n\u4e3e\u51e0\u4e2a\u5178\u578b\u7684 IDE \u67e5\u8be2\u4e3a\u4f8b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u5e94\u4f4d\u7f6e\u4e0b\u7684 ast \u8282\u70b9\u7684\u7c7b\u578b\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u5bf9\u5f53\u524d ast \u8282\u70b9\u7684\u5f15\u7528\u5728\u54ea\uff1f\uff08find reference\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u524d ast \u8282\u70b9\u5f15\u7528\u4e86\u54ea\u4e2a\u8282\u70b9\uff1f\uff08find definition\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u524d\u4f4d\u7f6e\u53ef\u8bbf\u95ee\u7684\u6240\u6709\u7b26\u53f7\uff1f")),(0,l.kt)("p",null,"\u4ec5\u5229\u7528\u65e7\u8bed\u4e49\u6a21\u578b\uff0c\u8fd9\u5c31\u8981\u6c42 IDE \u591a\u6b21\u904d\u5386 AST \u4ee5\u53ca\u8fdb\u884c\u591a\u6b21\u91cd\u590d\u8ba1\u7b97\uff0c\u53ef\u4ee5\u7b80\u5355\u5730\u5206\u6790\u4e00\u4e0b\u65e7\u8bed\u4e49\u6a21\u578b\u7684\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65e7\u8bed\u4e49\u6a21\u578b\u4fe1\u606f\u67e5\u8be2\u8f83\u4e3a\u56f0\u96be\uff0c\u4ec5\u5b58\u50a8\u4e86\u5b57\u7b26\u4e32\u5230\u7b26\u53f7\u7684\u6620\u5c04"),(0,l.kt)("li",{parentName:"ul"},"\u7b26\u53f7\u4e4b\u95f4\u7684\u5173\u8054\uff0c\u7b26\u53f7\u4e0e\u4f5c\u7528\u57df\u4e4b\u95f4\u7684\u5173\u8054\u8f83\u5f31\uff0c\u5bfc\u81f4\u9700\u8981\u67e5\u8be2\u76f8\u5173\u4fe1\u606f\u65f6\u5f80\u5f80\u9700\u8981\u904d\u5386\u6240\u6709\u4f5c\u7528\u57df"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u91cf\u7684\u4e2d\u95f4\u4fe1\u606f\u5728\u5206\u6790\u8fc7\u7a0b\u4e2d\u88ab\u4e22\u5f03\uff0c\u672a\u8fdb\u884c\u7f13\u5b58\uff0c\u5bfc\u81f4\u591a\u6b21\u67e5\u8be2\u8fdb\u884c\u91cd\u590d\u8fd0\u7b97")),(0,l.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0c\u65e7\u8bed\u4e49\u6a21\u578b\u65e0\u6cd5\u6ee1\u8db3\u9ad8\u7ea7\u5de5\u5177\u94fe\u7684\u67e5\u8be2\u9700\u6c42\uff0c\u5927\u91cf\u4fe1\u606f\u7f3a\u5931\uff0c\u53e6\u4e00\u65b9\u9762\uff0c\u65e7\u8bed\u4e49\u6a21\u578b\u4e0d\u652f\u6301\u589e\u91cf\u7f16\u8bd1\uff0c\u8fd9\u4e5f\u964d\u4f4e\u4e86\u5de5\u5177\u94fe\u7684\u7528\u6237\u4f53\u9a8c\u3002"),(0,l.kt)("h2",{id:"\u65b0\u8bed\u4e49\u6a21\u578b\u7684\u4e3b\u8981\u601d\u8defmap-reduce"},"\u65b0\u8bed\u4e49\u6a21\u578b\u7684\u4e3b\u8981\u601d\u8def\uff1aMap Reduce"),(0,l.kt)("p",null,"Map Reduce \u67b6\u6784\u7684\u60f3\u6cd5\u662f\u5c06\u5206\u6790\u5206\u4e3a\u76f8\u5bf9\u7b80\u5355\u7684\u7d22\u5f15\u9636\u6bb5\u548c\u5355\u72ec\u7684\u5b8c\u6574\u5206\u6790\u9636\u6bb5\u3002\n\u7d22\u5f15\u7684\u6838\u5fc3\u7ea6\u675f\u662f\u5b83\u57fa\u4e8e\u6bcf\u4e2a\u6587\u4ef6\u8fd0\u884c\uff0c\u7d22\u5f15\u5668\u83b7\u53d6\u5355\u4e2a\u6587\u4ef6\u7684\u6587\u672c\uff0c\u5bf9\u5176\u8fdb\u884c\u89e3\u6790\uff0c\u5e76\u5410\u51fa\u6709\u5173\u8be5\u6587\u4ef6\u7684\u4e00\u4e9b\u6570\u636e\u3002\u7d22\u5f15\u5668\u65e0\u6cd5\u89e6\u53ca\u5176\u4ed6\u6587\u4ef6\u3002\n\u5b8c\u6574\u5206\u6790\u53ef\u4ee5\u8bfb\u53d6\u5176\u4ed6\u6587\u4ef6\uff0c\u5e76\u5229\u7528\u7d22\u5f15\u4e2d\u7684\u4fe1\u606f\u6765\u8282\u7701\u5de5\u4f5c\u91cf\u3002\n\u8fd9\u542c\u8d77\u6765\u592a\u62bd\u8c61\u4e86\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\u2014\u2014Java\u3002\u5728 Java \u4e2d\uff0c\u6bcf\u4e2a\u6587\u4ef6\u90fd\u4ee5\u5305\u58f0\u660e\u5f00\u5934\u3002\u7d22\u5f15\u5668\u5c06\u5305\u7684\u540d\u79f0\u4e0e\u7c7b\u540d\u8fde\u63a5\u8d77\u6765\u4ee5\u83b7\u5f97\u5168\u9650\u5b9a\u540d\u3002\u5b83\u8fd8\u6536\u96c6\u7c7b\u4e2d\u58f0\u660e\u7684\u65b9\u6cd5\u96c6\u3001\u8d85\u7c7b\u548c\u63a5\u53e3\u7684\u5217\u8868\u7b49\u3002\n\u6bcf\u4e2a\u6587\u4ef6\u7684\u6570\u636e\u88ab\u5408\u5e76\u5230\u4e00\u4e2a\u7d22\u5f15\u4e2d\uff0c\u8be5\u7d22\u5f15\u5c06\u5168\u9650\u5b9a\u540d\uff08FQN\uff09\u6620\u5c04\u5230\u7c7b\u3002\u7d22\u5f15\u7684\u66f4\u65b0\u6210\u672c\u5f88\u4f4e\uff0c\u5f53\u6587\u4ef6\u4fee\u6539\u8bf7\u6c42\u5230\u8fbe\u65f6\uff0c\u7d22\u5f15\u4e2d\u8be5\u6587\u4ef6\u7684\u8d21\u732e\u5c06\u88ab\u5220\u9664\uff0c\u6587\u4ef6\u7684\u6587\u672c\u5c06\u88ab\u66f4\u6539\uff0c\u7d22\u5f15\u5668\u5c06\u5728\u65b0\u6587\u672c\u4e0a\u8fd0\u884c\u5e76\u6dfb\u52a0\u65b0\u7684\u8d21\u732e\u3002\u8981\u505a\u7684\u5de5\u4f5c\u91cf\u4e0e\u66f4\u6539\u7684\u6587\u4ef6\u6570\u91cf\u6210\u6b63\u6bd4\uff0c\u5e76\u4e14\u4e0e\u6587\u4ef6\u603b\u6570\u65e0\u5173\u3002\n\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u4f7f\u7528 FQN \u7d22\u5f15\u6765\u5feb\u901f\u63d0\u4f9b\u8865\u5168\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// File ./mypackage/Foo.java\npackage mypackage;\n\nimport java.util.*;\n\npublic class Foo {\n    public static Bar f() {\n        return new Bar();\n    }\n}\n\n// File ./mypackage/Bar.java\npackage mypackage;\n\npublic class Bar {\n    public void g() {}\n}\n\n// File ./Main.java\nimport mypackage.Foo;\n\npublic class Main {\n    public static void main(String[] args) {\n        Foo.f().\n    }\n}\n")),(0,l.kt)("p",null,"\u7528\u6237\u521a\u521a\u8f93\u5165\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Foo.f()."),"\uff0c\u6211\u4eec\u9700\u8981\u5f04\u6e05\u695a\u63a5\u6536\u8005\u8868\u8fbe\u5f0f\u7684\u7c7b\u578b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Bar"),"\uff0c\u5e76\u5efa\u8bae ",(0,l.kt)("inlineCode",{parentName:"p"},"g")," \u4f5c\u4e3a\u8865\u5168\u3002\n\u9996\u5148\uff0c\u5f53\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"Main.java")," \u88ab\u4fee\u6539\u65f6\uff0c\u6211\u4eec\u5728\u8fd9\u4e2a\u5355\u4e2a\u6587\u4ef6\u4e0a\u8fd0\u884c\u7d22\u5f15\u5668\uff1a\u6ca1\u6709\u4efb\u4f55\u53d8\u5316\uff08\u6587\u4ef6\u4ecd\u7136\u5305\u542b\u5177\u6709\u9759\u6001 ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," \u65b9\u6cd5\u7684\u7c7b ",(0,l.kt)("inlineCode",{parentName:"p"},"Main"),"\uff09\uff0c\u56e0\u6b64\u6211\u4eec\u4e0d\u9700\u8981\u66f4\u65b0 FQN \u7d22\u5f15\u3002\n\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u89e3\u6790\u540d\u79f0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Foo"),"\u3002\u6211\u4eec\u89e3\u6790\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"Main.java"),"\uff0c\u6ce8\u610f\u5230\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"import mypackage.Foo"),"\uff0c\u5e76\u4e14\u5728 FQN \u7d22\u5f15\u4e2d\u67e5\u627e ",(0,l.kt)("inlineCode",{parentName:"p"},"mypackage.Foo")," \u3002\u5728\u7d22\u5f15\u5f53\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Foo")," \u6709\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),", \u4e8e\u662f\u6211\u4eec\u4e5f\u6210\u529f\u89e3\u6790\u4e86\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"f()"),"\u3002\u7d22\u5f15\u8fd8\u5b58\u50a8\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," \u7684\u8fd4\u56de\u7c7b\u578b, \u4f46\u662f\u8bf7\u6ce8\u610f\uff0c\u7d22\u5f15\u4e2d\u5b58\u50a8\u7684\u662f\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},'"Bar"'),"\uff0c\u800c\u4e0d\u662f\u5bf9\u7c7b ",(0,l.kt)("inlineCode",{parentName:"p"},"Bar")," \u7684\u76f4\u63a5\u5f15\u7528\u3002\n\u8fd9\u6837\u505a\u7684\u539f\u56e0\u5728\u4e8e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Foo.java")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"import java.util.*")," \u4f1a\u5bfc\u81f4 ",(0,l.kt)("inlineCode",{parentName:"p"},"Bar")," \u53ef\u4ee5\u88ab\u63a8\u6d4b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.Bar")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"mypackage.Bar"),", \u7d22\u5f15\u5668\u5e76\u4e0d\u77e5\u9053\u5177\u4f53\u662f\u54ea\u4e00\u4e2a\uff0c\u56e0\u4e3a\u5b83\u53ea\u80fd\u201c\u770b\u5230\u201d\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"Foo.java")," \u7684\u6587\u672c\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u867d\u7136\u7d22\u5f15\u786e\u5b9e\u5b58\u50a8\u4e86\u65b9\u6cd5\u7684\u8fd4\u56de\u7c7b\u578b\uff0c\u4f46\u5b83\u4ee5\u672a\u89e3\u6790\u7684\u5f62\u5f0f\u5b58\u50a8\u5b83\u4eec\u3002\n\u4e0b\u4e00\u6b65\u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Foo.java")," \u7684\u4e0a\u4e0b\u6587\u4e2d\u89e3\u6790\u6807\u8bc6\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"Bar"),"\u3002\u8fd9\u4f1a\u7ee7\u7eed\u4f7f\u7528 FQN \u7d22\u5f15\uff0c\u5e76\u4e14\u5b9a\u4f4d\u5230\u7c7b ",(0,l.kt)("inlineCode",{parentName:"p"},"mypackage.Bar"),"\u3002\u4e8e\u662f\u6700\u540e\u7684\u6700\u540e\uff0c\u60f3\u8981\u7684\u8865\u5168\uff1a\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"g")," \u5c31\u88ab\u6211\u4eec\u627e\u5230\u4e86\n\u5b8c\u6210\u8fc7\u7a0b\u4e2d\u603b\u5171\u53ea\u89e6\u53ca\u4e86\u4e09\u4e2a\u6587\u4ef6\u3002FQN \u7d22\u5f15\u4f7f\u6211\u4eec\u80fd\u591f\u5b8c\u5168\u5ffd\u7565\u9879\u76ee\u4e2d\u7684\u6240\u6709\u5176\u4ed6\u6587\u4ef6\u3002\n\u5230\u76ee\u524d\u4e3a\u6b62\u6240\u63cf\u8ff0\u7684\u65b9\u6cd5\u7684\u4e00\u4e2a\u95ee\u9898\u662f\u4ece\u7d22\u5f15\u89e3\u6790\u7c7b\u578b\u9700\u8981\u5927\u91cf\u7684\u5de5\u4f5c\u3002\u4f8b\u5982\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"Foo.f")," \u88ab\u591a\u6b21\u8c03\u7528\uff0c\u8fd9\u9879\u5de5\u4f5c\u53ef\u80fd\u4f1a\u91cd\u590d\u3002\u89e3\u51b3\u529e\u6cd5\u662f\u6dfb\u52a0\u7f13\u5b58\u3002\u540d\u79f0\u89e3\u6790\u7ed3\u679c\u4f1a\u88ab\u8bb0\u5fc6\uff0c\u56e0\u6b64\u53ea\u9700\u8981\u8fdb\u884c\u4e00\u6b21\u89e3\u6790\u3002\u4efb\u4f55\u66f4\u6539\u90fd\u4f1a\u5bfc\u81f4\u7f13\u5b58\u5b8c\u5168\u6d88\u5931\u2014\u2014\u4f7f\u7528\u7d22\u5f15\uff0c\u91cd\u5efa\u7f13\u5b58\u7684\u6210\u672c\u5e76\u4e0d\u90a3\u4e48\u9ad8\u3002\n\u603b\u7ed3\u4e00\u4e0b\uff0c\u7b2c\u4e00\u79cd\u65b9\u6cd5\u7684\u5de5\u4f5c\u539f\u7406\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u6587\u4ef6\u90fd\u88ab\u72ec\u7acb\u4e14\u5e76\u884c\u5730\u7d22\u5f15\uff0c\u751f\u6210\u4e00\u4e2a\u201c\u5b58\u6839\u201d\u2014\u2014 \u6307\u4e00\u7ec4\u53ef\u89c1\u7684\u9876\u7ea7\u58f0\u660e\uff0c\u5177\u6709\u672a\u89e3\u6790\u7684\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6240\u6709\u5b58\u6839\u90fd\u5408\u5e76\u5230\u4e00\u4e2a\u7d22\u5f15\u6570\u636e\u7ed3\u6784\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u540d\u79f0\u89e3\u6790\u548c\u7c7b\u578b\u63a8\u65ad\u4e3b\u8981\u662f\u5728\u5b58\u6839\u57fa\u7840\u4e0a\u8fdb\u884c\u7684\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u540d\u79f0\u89e3\u6790\u662f\u60f0\u6027\u7684\uff08\u6211\u4eec\u4ec5\u5728\u9700\u8981\u65f6\u4ece\u5b58\u6839\u89e3\u6790\u7c7b\u578b\uff09\u5e76\u4e14\u662f\u8bb0\u5fc6\u7684\uff08\u6bcf\u79cd\u7c7b\u578b\u4ec5\u89e3\u6790\u4e00\u6b21\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u66f4\u6539\u65f6\u7f13\u5b58\u90fd\u4f1a\u5b8c\u5168\u5931\u6548"),(0,l.kt)("li",{parentName:"ol"},"\u7d22\u5f15\u662f\u589e\u91cf\u66f4\u65b0\u7684\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7f16\u8f91\u6ca1\u6709\u66f4\u6539\u6587\u4ef6\u7684\u5b58\u6839\uff0c\u5219\u4e0d\u9700\u8981\u66f4\u6539\u7d22\u5f15\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u65e7\u7d22\u5f15\u5c06\u88ab\u5220\u9664\uff0c\u65b0\u7d22\u5f15\u88ab\u91cd\u65b0\u6dfb\u52a0")))),(0,l.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u8db3\u591f\u7b80\u5355\u5e76\u5177\u6709\u51fa\u8272\u7684\u6027\u80fd\u3002\u5927\u90e8\u5206\u5de5\u4f5c\u4e3b\u8981\u5728\u7d22\u5f15\u9636\u6bb5\uff0c\u800c\u8fd9\u4e9b\u5de5\u4f5c\u6211\u4eec\u53ef\u4ee5\u5e76\u884c\u5730\u6267\u884c\u3002\u6b64\u67b6\u6784\u7684\u4e24\u4e2a\u793a\u4f8b\u662f ",(0,l.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"IntelliJ")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://sorbet.org/"},"Sorbet"),"\u3002\n\u8fd9\u79cd\u65b9\u6cd5\u7684\u4e3b\u8981\u7f3a\u70b9\u662f\u5b83\u53ea\u6709\u5728\u6709\u6548\u65f6\u624d\u6709\u6548\u2014\u2014 \u5177\u4f53\u800c\u8a00\uff0c\u5e76\u975e\u6bcf\u79cd\u8bed\u8a00\u90fd\u6709\u660e\u786e\u5b9a\u4e49\u7684 FQN \u6982\u5ff5\u3002\u4f46\u603b\u7684\u6765\u8bf4\uff0c\u8bbe\u8ba1\u597d\u6a21\u5757\u548c\u540d\u79f0\u89e3\u6790\u5bf9\u4e8e\u8bed\u8a00\u6765\u8bf4\u603b\u662f\u597d\u7684\uff0c\u5177\u4f53\u5230\u76ee\u524d\u7684\u60c5\u51b5\u4e0a\uff0cKCL \u6b63\u597d\u6ee1\u8db3\u8fd9\u4e2a\u6761\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u65b0\u8bed\u4e49\u6a21\u578b-pipeline"},"\u65b0\u8bed\u4e49\u6a21\u578b Pipeline"),(0,l.kt)("p",null,"\u65b0\u8bed\u4e49\u6a21\u578b\u603b\u4f53 pipeline \u5982\u4e0b\uff1a\n",(0,l.kt)("img",{alt:"image.png",src:a(99893).Z,width:"954",height:"772"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(53649).Z,width:"960",height:"778"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(50120).Z,width:"1316",height:"1296"}),"\n\u76f8\u8f83\u4e8e\u539f\u8bed\u4e49\u6a21\u578b\u5206\u6790\u6d41\u7a0b\uff0c\u65b0\u8bed\u4e49\u6a21\u578b\u65b0\u589e\u4e86 namer \u548c advanced_resolve \u4e24\u8f6e pass\uff0c\u4ece\u800c\u5728\u4e0d\u5f71\u54cd\u539f\u6709\u7f16\u8bd1\u5668\u6d41\u7a0b\u7684\u60c5\u51b5\u4e0b\u589e\u5f3a\u5bf9\u9ad8\u7ea7\u5de5\u5177\u94fe\u7684\u652f\u6301\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resolver")," \u57fa\u4e8e\u6587\u4ef6\u7ea7\u522b\u5de5\u4f5c\uff0c\u4e3b\u8981\u6d89\u53ca ",(0,l.kt)("inlineCode",{parentName:"li"},"GlobalState")," \u7684\u521d\u59cb\u5316\uff0c\u628a\u6e90\u4ee3\u7801\u89e3\u6790\u4e3a AST\uff0c\u5e76\u5efa\u7acb AST \u8282\u70b9\u5230\u7c7b\u578b\u7684\u6620\u5c04\u4ee5\u4f9b\u540e\u9762\u7684\u9636\u6bb5\u4f7f\u7528\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u7f13\u5b58\u5355\u4e2a\u6587\u4ef6\u7d22\u5f15\u7684\u8f93\u51fa\uff0c\u4ee5\u4fbf\u5728\u6587\u4ef6\u5185\u5bb9\u672a\u66f4\u6539\u65f6\u5b8c\u5168\u8df3\u8fc7\u5bf9\u8be5\u6587\u4ef6\u7684\u89e3\u6790\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"namer")," \u7684\u524d\u671f\u9636\u6bb5\u4e5f\u5c06\u57fa\u4e8e\u6587\u4ef6\u7ea7\u522b\u5de5\u4f5c\uff0c\u8be5\u9636\u6bb5\u6536\u96c6\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u5168\u5c40\u7b26\u53f7\uff0c\u4e4b\u540e\u5c06\u7b26\u53f7\u57fa\u4e8e FQN \u5408\u5e76\uff0c\u5f97\u5230\u552f\u4e00\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"GlobalState"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6587\u4ef6\u7ea7\u522b\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5728\u524d\u4e24\u4e2a\u9636\u6bb5\u8fdb\u884c\u589e\u91cf\u7f16\u8bd1"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"advanced_resolver")," \u5c06\u904d\u5386 AST \u89e3\u6790\u5c40\u90e8\u7b26\u53f7\u5e76\u5c06\u7b26\u53f7\u7684\u5f15\u7528\u6307\u5411\u5b83\u7684\u5b9a\u4e49,\u540c\u65f6\u8bbe\u7f6e\u5c40\u90e8\u4f5c\u7528\u57df\u7684 owner \u7b26\u53f7\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"Schema")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"Package"))),(0,l.kt)("h2",{id:"\u65b0\u8bed\u4e49\u6a21\u578b\u8bed\u4e49\u6570\u636e\u5e93globalstate"},"\u65b0\u8bed\u4e49\u6a21\u578b\u8bed\u4e49\u6570\u636e\u5e93\uff1aGlobalState"),(0,l.kt)("p",null,"\u65b0\u8bed\u4e49\u6a21\u578b\u7684\u6838\u5fc3\u7ed3\u6784\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"core::GlobalState"),"\uff0c\u5de5\u5177\u94fe\u4e3b\u8981\u901a\u8fc7\u5b83\u6765\u5b8c\u6210\u4e0e\u7f16\u8bd1\u5668\u7684\u4ea4\u4e92\u53ca\u67e5\u8be2\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"/// GlobalState is used to store semantic information of KCL source code\n#[derive(Default, Debug, Clone)]\npub struct GlobalState {\n    // store all allocated symbols\n    symbols: KCLSymbolData,\n    // store all allocated scopes\n    scopes: ScopeData,\n    // store package infomation for name mapping\n    packages: PackageDB,\n    // store semantic information after analysis\n    pub(crate) sema_db: SemanticDB,\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GlobalState")," \u4f5c\u4e3a\u65b0\u8bed\u4e49\u6a21\u578b\u7684\u8bed\u4e49\u6570\u636e\u5e93\u88ab\u4f7f\u7528\uff0c\u662f\u8bed\u4e49\u5206\u6790\u540e\u7684\u6700\u7ec8\u4ea7\u7269\uff0c\u4e3b\u8981\u5305\u542b\u56db\u4e2a\u65b9\u9762\u7684\u4fe1\u606f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SymbolData"),"\uff1a\u5b58\u50a8 AST \u4e2d\u7684\u6240\u6709\u7b26\u53f7\u4ee5\u53ca\u5b83\u4eec\u5bf9\u5e94\u7684\u8bed\u4e49\u4fe1\u606f\uff0c\u5e76\u7ef4\u62a4\u5f15\u7528\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ScopeData"),"\uff1a\u5b58\u50a8 AST \u4e2d\u6d89\u53ca\u7684\u6240\u6709\u4f5c\u7528\u57df\uff0c\u540c\u65f6\u5206\u9694\u7b26\u53f7\uff0c\u7ef4\u62a4\u7b26\u53f7\u53ef\u89c1\u6027\u4e0e\u4f5c\u7528\u57df\u5d4c\u5957\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PackageDB"),": \u5b58\u50a8\u5305\u4fe1\u606f\uff0c\u4f8b\u5982\u5305\u7684\u6587\u4ef6\u96c6\u5408\uff0c\u5bfc\u5165\u4fe1\u606f\u7b49"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SemanticDB"),": \u5b58\u50a8\u8f85\u52a9\u4fe1\u606f\uff0c\u52a0\u901f\u67e5\u8be2\uff0c\u5982\u7b26\u53f7\u7684\u6392\u5e8f\u548c\u4f4d\u7f6e\u7f13\u5b58\u7b49")),(0,l.kt)("h3",{id:"symboldata"},"SymbolData"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SymbolData")," \u8d1f\u8d23\u7ba1\u7406\u7b26\u53f7\u7684\u5206\u914d\uff0c\u5b58\u50a8\u5206\u914d\u7684\u7b26\u53f7\u4ee5\u53ca\u76f8\u5173\u7684\u8bed\u4e49\u4fe1\u606f, \u5728\u8fd9\u91cc\u6211\u4eec\u501f\u7528 rust \u7684 arena \u8bbe\u8ba1\u6765\u8bbf\u95ee\u76f8\u5173\u7b26\u53f7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Default, Debug, Clone)]\npub struct KCLSymbolData {\n    pub(crate) values: Arena<ValueSymbol>,\n    pub(crate) packages: Arena<PackageSymbol>,\n    pub(crate) attributes: Arena<AttributeSymbol>,\n    pub(crate) schemas: Arena<SchemaSymbol>,\n    pub(crate) type_aliases: Arena<TypeAliasSymbol>,\n    pub(crate) unresolved: Arena<UnresolvedSymbol>,\n    pub(crate) rules: Arena<RuleSymbol>,\n\n    pub(crate) symbols_info: SymbolDB,\n}\n")),(0,l.kt)("p",null,"\u5728\u65b0\u8bed\u4e49\u6a21\u578b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"core::SymbolRef")," \u6765\u8868\u793a\u5bf9\u4e00\u4e2a\u7b26\u53f7\u7684\u5f15\u7528\uff0c\u540c\u65f6\u4e5f\u5229\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"SymbolRef")," \u6765\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"SymbolData")," \u4e2d\u5177\u4f53\u7684\u7b26\u53f7\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]\npub struct SymbolRef {\n    pub(crate) id: generational_arena::Index,\n    pub(crate) kind: SymbolKind,\n}\n")),(0,l.kt)("p",null,"\u5177\u4f53\u800c\u8a00\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"SymbolData")," \u4f1a\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"SymbolRef")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"kind"),"\uff0c\u53d6\u51fa\u4e0d\u540c\u7c7b\u578b\u7684 Symbol\uff0c\u5e76\u8f6c\u5316\u4e3a\u62bd\u8c61\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"trait Symbol"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub type KCLSymbol = dyn Symbol<SymbolData = KCLSymbolData, \n    SemanticInfo = KCLSymbolSemanticInfo>;\npub fn get_symbol(&self, id: SymbolRef) -> Option<&KCLSymbol> {\n        match id.get_kind() {\n            SymbolKind::Schema => self\n                .schemas\n                .get(id.get_id())\n                .map(|symbol| symbol as &KCLSymbol),\n            ...\n        }\n    }\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Symbol {\n    type SymbolData;\n    type SemanticInfo;\n    fn get_sema_info(&self) -> &Self::SemanticInfo;\n    fn is_global(&self) -> bool;\n    fn get_range(&self) -> Range;\n    fn get_owner(&self) -> Option<SymbolRef>;\n    fn get_definition(&self) -> Option<SymbolRef>;\n    fn get_name(&self) -> String;\n    fn get_id(&self) -> Option<SymbolRef>;\n    fn get_attribute(&self, ...) -> Option<SymbolRef>;\n    fn has_attribute(&self, ...) -> bool;\n\n    fn get_all_attributes(&self, ...) -> Vec<SymbolRef>;\n\n    fn simple_dump(&self) -> String;\n\n    fn full_dump(&self, data: &Self::SymbolData) -> Option<String>;\n}\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a trait\uff0c\u5de5\u5177\u94fe\u53ef\u4ee5\u8f7b\u677e\u5730\u5b8c\u6210\u7b26\u53f7\u8bed\u4e49\u4fe1\u606f\u4ee5\u53ca\u5f15\u7528\u5173\u7cfb\u7684\u67e5\u8be2\u3002"),(0,l.kt)("h3",{id:"scopedata"},"ScopeData"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ScopeData")," \u7684\u8bbe\u8ba1\u601d\u8def\u5b9e\u9645\u4e0a\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"SymbolData")," \u7c7b\u4f3c\uff0c\u5b58\u50a8\u4e86\u4e0d\u540c\u7c7b\u578b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Scope")," \u5e76\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ScopeRef")," \u8bbf\u95ee\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Default, Debug, Clone)]\npub struct ScopeData {\n    /// map pkgpath to root_scope\n    pub(crate) root_map: IndexMap<String, ScopeRef>,\n    pub(crate) locals: generational_arena::Arena<LocalSymbolScope>,\n    pub(crate) roots: generational_arena::Arena<RootSymbolScope>,\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Scope {\n    type SymbolData;\n    fn get_filename(&self) -> &str;\n    fn get_parent(&self) -> Option<ScopeRef>;\n    fn get_children(&self) -> Vec<ScopeRef>;\n\n    fn contains_pos(&self, pos: &Position) -> bool;\n\n    fn get_owner(&self) -> Option<SymbolRef>;\n    fn look_up_def(&self, ...) -> Option<SymbolRef>;\n\n    fn get_all_defs(&self, ...) -> HashMap<String, SymbolRef>;\n\n    fn dump(&self, scope_data: &ScopeData, \n            symbol_data: &Self::SymbolData) -> Option<String>;\n}\n")),(0,l.kt)("h3",{id:"semanticdb"},"SemanticDB"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SemanticDB")," \u672c\u8d28\u4e0a\u662f\u8bed\u4e49\u5bf9\u8c61\u90e8\u5206\u8bed\u4e49\u4fe1\u606f\u7684\u7f13\u5b58\u548c\u6574\u5408\uff0c\u5b83\u7684\u4f5c\u7528\u4e3b\u8981\u662f\u7528\u4e8e\u52a0\u901f ",(0,l.kt)("inlineCode",{parentName:"p"},"GlobalState")," \u5185\u90e8\u4fe1\u606f\u7684\u7ef4\u62a4\u4ee5\u53ca\u67e5\u8be2\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Default, Clone)]\npub struct SemanticDB {\n    pub(crate) file_sema_map: IndexMap<String, FileSemanticInfo>,\n}\n\n#[derive(Debug, Clone)]\npub struct FileSemanticInfo {\n    pub(crate) filename: String,\n    pub(crate) symbols: Vec<SymbolRef>,\n    pub(crate) scopes: Vec<ScopeRef>,\n    pub(crate) symbol_locs: IndexMap<SymbolRef, CachedLocation>,\n    pub(crate) local_scope_locs: IndexMap<ScopeRef, CachedRange>,\n}\n")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"KCL \u65b0\u8bed\u4e49\u6a21\u578b\u5b9e\u8d28\u4e0a\u53ea\u505a\u4e86\u4e24\u4ef6\u4e8b\uff0c\u4e00\u662f\u5c06\u5de5\u5177\u94fe\u5728\u5e94\u7528\u5c42\u505a\u7684\u91cd\u590d\u8ba1\u7b97\u4e0b\u6c89\u81f3\u8bed\u4e49\u5c42\uff0c\u5e76\u8bbe\u8ba1\u5bf9\u5e94\u673a\u5236\u7b80\u5316\u4fe1\u606f\u67e5\u8be2\uff0c\u4e8c\u662f\u5c06\u8bed\u4e49\u5206\u6790\u8fc7\u7a0b\u4e2d\u4e22\u5931\u7684\u4fe1\u606f\u91cd\u65b0\u5206\u6790\u5e76\u7f13\u5b58\u3002\n\u8fd9\u4e48\u505a\u4e3b\u8981\u6709\u51e0\u4e2a\u76ee\u7684\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6536\u62e2\u4e86\u8ba1\u7b97\u8fc7\u7a0b\uff0c\u9632\u6b62\u4e86\u5e94\u7528\u5c42\u5bf9\u7f16\u8bd1\u5668\u8bed\u4e49\u6838\u5fc3\u7684\u4fb5\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5584\u4e86\u7f13\u5b58\u673a\u5236\uff0c\u7b80\u5316\u4e86\u589e\u91cf\u7f16\u8bd1\u7684\u5b9e\u73b0\uff0c\u4ece\u800c\u52a0\u901f\u67e5\u8be2\u901f\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5316\u5e94\u7528\u5c42\u5de5\u5177\u94fe\u7684\u5f00\u53d1\uff0c\u540c\u65f6\u51cf\u5c11\u5de5\u5177\u94fe\u5bf9 Corner Case \u7684\u5904\u7406\uff0c\u4ece\u800c\u63d0\u9ad8\u53ef\u7ef4\u62a4\u6027")),(0,l.kt)("p",null,"\u4ece\u5b9e\u8df5\u4e0a\u4e5f\u57fa\u672c\u8fbe\u5230\u4e86\u4e0a\u8ff0\u76ee\u7684\uff0c\u8fc1\u79fb\u540e\u7684 LSP \u76f8\u5173\u529f\u80fd\u7684\u4ee3\u7801\u91cf\u7ea6\u4e0b\u964d 60%\uff0c\u589e\u91cf\u7f16\u8bd1\u540e\u7f16\u8bd1\u901f\u5ea6\u7ea6\u63d0\u5347 500%\u3002"))}u.isMDXComponent=!0},23455:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/01-a4f6cb66bb886db68b7fb33069e7d7bc.png"},43389:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/02-40975ad67009f082400bce523d31386c.png"},99893:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/03-c2c78dc8d47dd97ac1ae13c114b6c30d.png"},53649:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/04-f50a1ff5aa06ed172217d6176fafdb14.png"},50120:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/05-1a4d9bc6eb1226873d9264609ddff30b.png"}}]);