"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69580],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),p=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=n,h=m["".concat(u,".").concat(k)]||m[k]||c[k]||r;return a?l.createElement(h,i(i({ref:t},s),{},{components:a})):l.createElement(h,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=a(87462),n=(a(67294),a(3905));const r={slug:"2022-kcl-0.4.6-alpha.1-release-blog",title:"KCL v0.4.6-alpha.1 \u53d1\u5e03\u65e5\u5fd7",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL","KusionStack","Kusion"]},i=void 0,o={permalink:"/zh-CN/blog/2022-kcl-0.4.6-alpha.1-release-blog",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-03-20-kcl-0.4.6-alpha.1-release/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-03-20-kcl-0.4.6-alpha.1-release/index.md",title:"KCL v0.4.6-alpha.1 \u53d1\u5e03\u65e5\u5fd7",description:"\u7b80\u4ecb",date:"2023-03-20T00:00:00.000Z",formattedDate:"2023\u5e743\u670820\u65e5",tags:[{label:"Release Blog",permalink:"/zh-CN/blog/tags/release-blog"},{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"KusionStack",permalink:"/zh-CN/blog/tags/kusion-stack"},{label:"Kusion",permalink:"/zh-CN/blog/tags/kusion"}],readingTime:1.98,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2022-kcl-0.4.6-alpha.1-release-blog",title:"KCL v0.4.6-alpha.1 \u53d1\u5e03\u65e5\u5fd7",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL","KusionStack","Kusion"]},prevItem:{title:"OS2ATC 2022 \u4f1a\u8bae KCL \u4ecb\u7ecd\u5185\u5bb9",permalink:"/zh-CN/blog/2023-03-26-kcl-os2atc-meeting"},nextItem:{title:"\u5168\u65b0\u7684 KCL Playground \u6765\u4e86!",permalink:"/zh-CN/blog/2023-kcl-playground-0.4.5-release"}},u={authorsImageUrls:[void 0]},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u53d1\u5e03\u5185\u5bb9",id:"\u53d1\u5e03\u5185\u5bb9",level:2},{value:"\u4e0b\u4e00\u6b65\u8ba1\u5212",id:"\u4e0b\u4e00\u6b65\u8ba1\u5212",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54",level:2},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,n.kt)("p",null,"KCL \u56e2\u961f\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03 KCL v0.4.6-alpha.1 \u7248\u672c\u73b0\u5728\u5df2\u7ecf\u53ef\u7528\uff01"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kcl/releases/tag/v0.4.6-alpha.1"},"KCL v0.4.6-alpha.1 \u53d1\u5e03\u9875\u9762")," \u6216\u8005 ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL \u5b98\u65b9\u7f51\u7ad9")," \u83b7\u5f97 KCL \u4e8c\u8fdb\u5236\u4e0b\u8f7d\u94fe\u63a5\u548c\u66f4\u591a\u8be6\u7ec6\u53d1\u5e03\u4fe1\u606f\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kcl"},"KCL")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\uff0c\u671f\u671b\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u548c\u7b56\u7565\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u5feb\u7684\u81ea\u52a8\u5316\u96c6\u6210\u548c\u826f\u597d\u7684\u751f\u6001\u5ef6\u5c55\u6027\u3002"),(0,n.kt)("h2",{id:"\u53d1\u5e03\u5185\u5bb9"},"\u53d1\u5e03\u5185\u5bb9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b\u6570\u5b57\u3001\u5b57\u9762\u503c\u3001\u62ec\u53f7\u7b49\u8bcd\u6cd5\u9519\u8bef\u6062\u590d"),(0,n.kt)("li",{parentName:"ul"},"KCL IDE \u63d2\u4ef6\u652f\u6301\u9519\u8bef\u548c\u544a\u8b66\u663e\u793a\uff0c\u8df3\u8f6c\u7b49\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u5206\u7f16\u8bd1\u5668\u62a5\u9519\u6539\u5584"),(0,n.kt)("li",{parentName:"ul"},"KCL Playground \u652f\u6301\u4ee3\u7801\u5206\u4eab\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kcl/issues/434"},"Kubernetes KPT \u5de5\u5177\u96c6\u6210\u65b9\u6848\u8bbe\u8ba1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kcl/issues/426"},"Kubernetes Helm KCL \u5de5\u5177\u63d2\u4ef6\u65b9\u6848"))),(0,n.kt)("h2",{id:"\u4e0b\u4e00\u6b65\u8ba1\u5212"},"\u4e0b\u4e00\u6b65\u8ba1\u5212"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"KPM \u5305\u7ba1\u7406\u5de5\u5177\u6b63\u5f0f\u53d1\u5e03"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u591a KCL \u7f16\u8bd1\u5668\u8bed\u6cd5\u9519\u8bef\u6062\u590d\u652f\u6301\u65b0\u7248 IDE \u63d2\u4ef6\u53d1\u5e03\uff0c\u6027\u80fd\u9884\u8ba1\u63d0\u5347 20 \u500d"),(0,n.kt)("li",{parentName:"ul"},"Helm\uff0cKPT \u7b49 Kubernetes \u5de5\u5177 KCL \u96c6\u6210\u6b63\u5f0f\u53d1\u5e03")),(0,n.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54"),(0,n.kt)("p",null,"\u8be6\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/support/"},"KCL \u5e38\u89c1\u95ee\u9898")),(0,n.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,n.kt)("p",null,"\u611f\u8c22\u6240\u6709 KCL \u7528\u6237\u5728\u6b64\u6b21\u7248\u672c\u66f4\u65b0\u8fc7\u7a0b\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u7684\u53cd\u9988\u4e0e\u5efa\u8bae\u3002\u66f4\u591a\u5176\u4ed6\u8d44\u6e90\u8bf7\u53c2\u8003\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kcl-lang.io/"},"KCL \u7f51\u7ad9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"Kusion \u7f51\u7ad9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kcl"},"KCL Github \u4ed3\u5e93")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion Github \u4ed3\u5e93")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"Konfig Github \u4ed3\u5e93"))),(0,n.kt)("p",null,"\u6b22\u8fce\u52a0\u5165\u6211\u4eec\u7684",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"\u793e\u533a"),"\u8fdb\u884c\u4ea4\u6d41 \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f"))}c.isMDXComponent=!0}}]);