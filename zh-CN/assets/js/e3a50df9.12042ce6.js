"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:0},c="\u6982\u89c8",a={unversionedId:"reference/model/overview",id:"version-0.4.4/reference/model/overview",title:"\u6982\u89c8",description:"KCL \u662f\u9762\u5411\u914d\u7f6e\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u901a\u8fc7\u5185\u7f6e\u6a21\u5757\u3001KCL \u6a21\u5757\u548c\u63d2\u4ef6\u6a21\u5757\u63d0\u4f9b\u5de5\u7a0b\u5316\u7684\u6269\u5c55\u80fd\u529b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.4/reference/model/overview.md",sourceDirName:"reference/model",slug:"/reference/model/overview",permalink:"/zh-CN/docs/0.4.4/reference/model/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/reference/model/overview.md",tags:[],version:"0.4.4",lastUpdatedBy:"peefy",lastUpdatedAt:1698928861,formattedLastUpdatedAt:"2023\u5e7411\u67082\u65e5",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"reference",previous:{title:"\u7cfb\u7edf\u6a21\u5757",permalink:"/zh-CN/docs/0.4.4/reference/model/"},next:{title:"builtin",permalink:"/zh-CN/docs/0.4.4/reference/model/builtin"}},l={},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,o.kt)("p",null,"KCL \u662f\u9762\u5411\u914d\u7f6e\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u901a\u8fc7\u5185\u7f6e\u6a21\u5757\u3001KCL \u6a21\u5757\u548c\u63d2\u4ef6\u6a21\u5757\u63d0\u4f9b\u5de5\u7a0b\u5316\u7684\u6269\u5c55\u80fd\u529b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(86288).Z,width:"1544",height:"884"})),(0,o.kt)("p",null,"\u7528\u6237\u4ee3\u7801\u4e2d\u4e0d\u7528\u5bfc\u5165\u76f4\u63a5\u4f7f\u7528 builtin \u7684\u51fd\u6570\uff08\u6bd4\u5982\u7528 len \u8ba1\u7b97\u5217\u8868\u7684\u957f\u5ea6\u3001\u901a\u8fc7 typeof \u83b7\u53d6\u503c\u7684\u7c7b\u578b\u7b49\uff09\uff0c\u800c\u5bf9\u4e8e\u5b57\u7b26\u4e32\u7b49\u57fa\u7840\u7c7b\u578b\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5185\u7f6e\u65b9\u6cd5\uff08\u6bd4\u5982\u8f6c\u5316\u5b57\u7b26\u4e32\u7684\u5927\u5c0f\u5199\u7b49\u65b9\u6cd5\uff09\u3002\u5bf9\u4e8e\u76f8\u5bf9\u590d\u6742\u7684\u901a\u7528\u5de5\u4f5c\u5219\u901a\u8fc7\u6807\u51c6\u5e93\u63d0\u4f9b\uff0c\u6bd4\u5982\u901a\u8fc7 import \u5bfc\u5165 math \u5e93\u5c31\u53ef\u4ee5\u4f7f\u7528\u76f8\u5173\u7684\u6570\u5b66\u51fd\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7\u5bfc\u5165 regex \u5e93\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5e93\u3002\u800c\u9488\u5bf9 KCL \u4ee3\u7801\u4e5f\u53ef\u4ee5\u7ec4\u7ec7\u4e3a\u6a21\u5757\uff0c\u6bd4\u5982 Konfig \u5927\u5e93\u4e2d\u5c06\u57fa\u7840\u8bbe\u65bd\u548c\u5404\u79cd\u6807\u51c6\u7684\u5e94\u7528\u62bd\u8c61\u4e3a\u6a21\u5757\u4f9b\u4e0a\u5c42\u7528\u6237\u4f7f\u7528\u3002\u6b64\u5916\u8fd8\u53ef\u4ee5\u901a\u8fc7 Plugin \u673a\u5236\uff0c\u91c7\u7528 Python \u4e3a KCL \u5f00\u53d1\u63d2\u4ef6\uff0c\u6bd4\u5982\u76ee\u524d\u6709 meta \u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u7f51\u7edc\u67e5\u8be2\u4e2d\u5fc3\u914d\u7f6e\u4fe1\u606f\uff0capp-context \u63d2\u4ef6\u5219\u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u5e94\u7528\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u4ece\u800c\u7b80\u5316\u4ee3\u7801\u7684\u7f16\u5199\u3002"))}f.isMDXComponent=!0},86288:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kcl-module-5ec74277ff23c98d06956ab10f3f2fb6.png"}}]);