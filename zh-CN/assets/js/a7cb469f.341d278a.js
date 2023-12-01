"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76631],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return t?n.createElement(g,o(o({ref:r},l),{},{components:t})):n.createElement(g,o({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},72295:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(67294),a=t(86010),i=t(39960),o=t(44996);const c={disabled:"disabled_OCxU",card:"card_HCHm","Card-with-image":"Card-with-image_DUm4","Card-without-image":"Card-without-image_thTk","Card-container":"Card-container_Hxgs","Card-image":"Card-image_ud45","Card-icon":"Card-icon_KjUn","Card-iconset__container":"Card-iconset__container_Ig5G","Card-icon-default":"Card-icon-default_vE0K","Card-icon-hover":"Card-icon-hover_Rl7T","Card-icon-row":"Card-icon-row_Y7dQ","Card-icon--active":"Card-icon--active_anFW","Card-ionicon":"Card-ionicon_rF57","Card-content":"Card-content_j__g","Card-header":"Card-header_Gs72","Card-size-lg":"Card-size-lg_wdTb","markdown-content":"markdown-content_CXsk"};const s=function(e){const r=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:n.createElement("header",{className:c["Card-header"]},e.header),d=e.hoverIcon||e.icon,l=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:c["Card-container"]},(e.icon||d)&&n.createElement("div",{className:c["Card-icon-row"]},e.icon&&n.createElement("img",{src:(0,o.Z)(e.icon),className:c["Card-icon"]+" "+c["Card-icon-default"]}),d&&n.createElement("img",{src:(0,o.Z)(d),className:c["Card-icon"]+" "+c["Card-icon-hover"]})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:c["Card-ionicon"]}),e.iconset&&n.createElement("div",{className:c["Card-iconset__container"]},e.iconset.split(",").map(((r,t)=>n.createElement("img",{src:(0,o.Z)(r),className:`${c["Card-icon"]} ${t===e.activeIndex?c["Card-icon-active"]:""}`,"data-index":t,key:t})))),e.header&&s,n.createElement("div",{className:c["Card-content"]},e.children))),u=(0,a.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return r?n.createElement("docs-card",{class:c[u]},n.createElement("div",{className:(0,a.Z)(c.card,c["docs-card"])},l)):t?n.createElement("docs-card",{class:c[u]},n.createElement("a",{className:(0,a.Z)(c.card,c["docs-card"]),href:e.href,target:"_blank"},l)):n.createElement("docs-card",{class:c[u]},n.createElement(i.Z,{to:e.href,className:(0,a.Z)(c.card,c["docs-card"])},l))}},4434:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(67294);const a=function(e){return n.createElement("docs-cards",{class:e.className},e.children)}},61618:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var n=t(87462),a=(t(67294),t(3905)),i=t(72295),o=t(4434);const c={id:"overview",sidebar_label:"\u6982\u8ff0"},s="Konfig \u6982\u8ff0",d={unversionedId:"user_docs/guides/working-with-konfig/overview",id:"version-0.7.0/user_docs/guides/working-with-konfig/overview",title:"Konfig \u6982\u8ff0",description:"\u5728 KCL \u4e2d\u63a8\u8350\u901a\u8fc7\u914d\u7f6e\u5e93\u7684\u65b9\u5f0f\u7edf\u4e00\u7ba1\u7406\u6240\u6709\u7684\u914d\u7f6e\u6e05\u5355\u548c\u6a21\u578b\u5e93\uff0c\u5373\u4e0d\u4ec5\u5b58\u653e\u62bd\u8c61\u6a21\u578b\u672c\u8eab\u7684 KCL \u5b9a\u4e49\uff0c\u8fd8\u5b58\u653e\u5404\u79cd\u7c7b\u578b\u7684\u914d\u7f6e\u6e05\u5355\uff0c\u6bd4\u5982\u5e94\u7528\u7684\u8fd0\u7ef4\u914d\u7f6e\u3001\u7b56\u7565\u914d\u7f6e\u7b49\u3002\u914d\u7f6e\u5927\u5e93\u63a8\u8350\u6258\u7ba1\u5728\u5404\u7c7b VCS \u7cfb\u7edf\u4e2d\uff0c\u4ee5\u65b9\u4fbf\u505a\u914d\u7f6e\u7684\u56de\u6eda\u548c\u6f02\u79fb\u68c0\u67e5\u3002\u914d\u7f6e\u5927\u5e93\u7684\u6700\u4f73\u5b9e\u8df5\u4ee3\u53f7\u4e3a Konfig\uff0c\u4ed3\u5e93\u6258\u7ba1\u5728 Github\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7.0/user_docs/guides/working-with-konfig/1-overview.md",sourceDirName:"user_docs/guides/working-with-konfig",slug:"/user_docs/guides/working-with-konfig/overview",permalink:"/zh-CN/docs/user_docs/guides/working-with-konfig/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/working-with-konfig/1-overview.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701417593,formattedLastUpdatedAt:"2023\u5e7412\u67081\u65e5",sidebarPosition:1,frontMatter:{id:"overview",sidebar_label:"\u6982\u8ff0"},sidebar:"user_docs",previous:{title:"KCL Operator",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator"},next:{title:"\u5de5\u7a0b\u7ed3\u6784",permalink:"/zh-CN/docs/user_docs/guides/working-with-konfig/structure"}},l={},u=[{value:"\u6587\u6863",id:"\u6587\u6863",level:2}],m={toc:u},p="wrapper";function g(e){let{components:r,...c}=e;return(0,a.kt)(p,(0,n.Z)({},m,c,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"konfig-\u6982\u8ff0"},"Konfig \u6982\u8ff0"),(0,a.kt)("p",null,"\u5728 KCL \u4e2d\u63a8\u8350\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u5e93"),"\u7684\u65b9\u5f0f\u7edf\u4e00\u7ba1\u7406\u6240\u6709\u7684\u914d\u7f6e\u6e05\u5355\u548c\u6a21\u578b\u5e93\uff0c\u5373\u4e0d\u4ec5\u5b58\u653e\u62bd\u8c61\u6a21\u578b\u672c\u8eab\u7684 KCL \u5b9a\u4e49\uff0c\u8fd8\u5b58\u653e\u5404\u79cd\u7c7b\u578b\u7684\u914d\u7f6e\u6e05\u5355\uff0c\u6bd4\u5982\u5e94\u7528\u7684\u8fd0\u7ef4\u914d\u7f6e\u3001\u7b56\u7565\u914d\u7f6e\u7b49\u3002\u914d\u7f6e\u5927\u5e93\u63a8\u8350\u6258\u7ba1\u5728\u5404\u7c7b VCS \u7cfb\u7edf\u4e2d\uff0c\u4ee5\u65b9\u4fbf\u505a\u914d\u7f6e\u7684\u56de\u6eda\u548c\u6f02\u79fb\u68c0\u67e5\u3002\u914d\u7f6e\u5927\u5e93\u7684\u6700\u4f73\u5b9e\u8df5\u4ee3\u53f7\u4e3a Konfig\uff0c\u4ed3\u5e93\u6258\u7ba1\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/konfig"},"Github"),"\u3002"),(0,a.kt)("p",null,"\u26a1\ufe0f \u914d\u7f6e\u5927\u5e93\u4e3b\u8981\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"KCL \u6a21\u5757\u58f0\u660e\u6587\u4ef6\uff08kcl.mod\uff09"),(0,a.kt)("li",{parentName:"ul"},"KCL \u9886\u57df\u6a21\u578b\u5e93 (Kubernetes, Prometheus \u7b49)"),(0,a.kt)("li",{parentName:"ul"},"\u5404\u7c7b\u914d\u7f6e\u6e05\u5355\u76ee\u5f55 (\u5e94\u7528\u8fd0\u7ef4\u914d\u7f6e\u7b49)"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6784\u5efa\u548c\u6d4b\u8bd5\u811a\u672c (Makefile\uff0cGithub CI \u6587\u4ef6\u7b49)")),(0,a.kt)("p",null,"\u4e4b\u6240\u4ee5\u7528\u4e00\u4e2a\u7edf\u4e00\u7684\u4ed3\u5e93\u7ba1\u7406\u5168\u90e8\u7684 KCL \u914d\u7f6e\u4ee3\u7801\uff0c\u662f\u7531\u4e8e\u4e0d\u540c\u4ee3\u7801\u5305\u7684\u7814\u53d1\u4e3b\u4f53\u4e0d\u540c\uff0c\u4f1a\u5f15\u53d1\u51fa\u5305\u7ba1\u7406\u548c\u7248\u672c\u7ba1\u7406\u7684\u95ee\u9898\u3002\u5c06\u4e1a\u52a1\u914d\u7f6e\u4ee3\u7801\u3001\u57fa\u7840\u914d\u7f6e\u4ee3\u7801\u5728\u4e00\u4e2a\u7edf\u4e00\u4ed3\u5e93\u4e2d\uff0c\u4ee3\u7801\u95f4\u7684\u7248\u672c\u4f9d\u8d56\u7ba1\u7406\u4f1a\u6bd4\u8f83\u7b80\u5355\uff0c\u901a\u8fc7\u5b9a\u4f4d\u552f\u4e00\u4ee3\u7801\u5e93\u7684\u76ee\u5f55\u53ca\u6587\u4ef6\u5373\u53ef\uff0c\u53ef\u4ee5\u5c06\u914d\u7f6e\u4ee3\u7801\u7edf\u4e00\u7ba1\u7406\uff0c\u4fbf\u4e8e\u67e5\u627e\u3001\u4fee\u6539\u3001\u7ef4\u62a4\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u914d\u7f6e\u5927\u5e93\uff08Konfig\uff09\u7684\u67b6\u6784\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(15883).Z,width:"363",height:"356"})),(0,a.kt)("p",null,"Konfig \u63d0\u4f9b\u7ed9\u7528\u6237\u5f00\u7bb1\u5373\u7528\u3001\u9ad8\u5ea6\u62bd\u8c61\u7684\u914d\u7f6e\u754c\u9762\uff0c\u6a21\u578b\u5e93\u6700\u521d\u6734\u7d20\u7684\u51fa\u53d1\u70b9\u5c31\u662f\u6539\u5584 YAML \u7528\u6237\u7684\u6548\u7387\u548c\u4f53\u9a8c\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u5c06\u4ee3\u7801\u66f4\u7e41\u6742\u7684\u6a21\u578b\u62bd\u8c61\u5c01\u88c5\u5230\u7edf\u4e00\u7684\u6a21\u578b\u4e2d\uff0c\u4ece\u800c\u7b80\u5316\u7528\u6237\u4fa7\u914d\u7f6e\u4ee3\u7801\u7684\u7f16\u5199\u3002Konfig \u7531\u4ee5\u4e0b\u90e8\u5206\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6838\u5fc3\u6a21\u578b"),"\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u524d\u7aef\u6a21\u578b"),"\uff1a\u524d\u7aef\u6a21\u578b\u5373\u300c\u7528\u6237\u754c\u9762\u300d\uff0c\u5305\u542b\u5e73\u53f0\u4fa7\u66b4\u9732\u7ed9\u7528\u6237\u7684\u6240\u6709\u53ef\u914d\u7f6e\u5c5e\u6027\uff0c\u5176\u4e2d\u7701\u7565\u4e86\u4e00\u4e9b\u91cd\u590d\u7684\u3001\u53ef\u63a8\u5bfc\u7684\u914d\u7f6e\uff0c\u62bd\u8c61\u51fa\u5fc5\u8981\u5c5e\u6027\u66b4\u9732\u7ed9\u7528\u6237\uff0c\u5177\u6709\u7528\u6237\u53cb\u597d\u7684\u7279\u6027\uff0c\u6bd4\u5982 server.k\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u540e\u7aef\u6a21\u578b"),"\uff1a\u540e\u7aef\u6a21\u578b\u662f\u300c\u6a21\u578b\u5b9e\u73b0\u300d\uff0c\u662f\u8ba9\u524d\u7aef\u6a21\u578b\u5c5e\u6027\u751f\u6548\u7684\u6a21\u578b\uff0c\u4e3b\u8981\u5305\u542b\u524d\u7aef\u6a21\u578b\u5b9e\u4f8b\u7684\u6e32\u67d3\u903b\u8f91\uff0c\u540e\u7aef\u6a21\u578b\u4e2d\u53ef\u501f\u52a9 KCL \u7f16\u5199\u6821\u9a8c\u548c\u903b\u8f91\u5224\u65ad\u7b49\u4ee5\u63d0\u9ad8\u914d\u7f6e\u4ee3\u7801\u590d\u7528\u6027\u548c\u5065\u58ee\u6027\uff0c\u5bf9\u7528\u6237\u4e0d\u611f\u77e5\uff0c\u6bd4\u5982 server_backend.k"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u9886\u57df\u6a21\u578b"),"\uff1a\u662f\u4e0d\u5305\u542b\u4efb\u4f55\u5b9e\u73b0\u903b\u8f91\u548c\u62bd\u8c61\u7684\u6a21\u578b\uff0c\u5f80\u5f80\u7531\u5de5\u5177\u8f6c\u6362\u751f\u6210\uff0c\u65e0\u9700\u4fee\u6539\uff0c\u548c\u771f\u6b63\u751f\u6548\u7684 YAML \u5c5e\u6027\u4e00\u4e00\u5bf9\u5e94\uff0c\u5e95\u5c42\u6a21\u578b\u9700\u8981\u7ecf\u8fc7\u8fdb\u4e00\u6b65\u62bd\u8c61\uff0c\u4e00\u822c\u4e0d\u76f4\u63a5\u88ab\u7528\u6237\u4f7f\u7528\u3002\u6bd4\u5982\uff0ck8s \u662f Kubernetes \u573a\u666f\u7684\u5e95\u5c42\u6a21\u578b\u5e93\u3002")),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u6838\u5fc3\u6a21\u578b\u5185\u90e8\u901a\u8fc7\u524d\u7aef\u6a21\u578b\u548c\u540e\u7aef\u6a21\u578b\u4e24\u5c42\u62bd\u8c61\u7b80\u5316\u524d\u7aef\u7528\u6237\u7684\u914d\u7f6e\u4ee3\u7801\uff0c\u5e95\u5c42\u6a21\u578b\u5219\u662f\u901a\u8fc7 KCL Import \u5de5\u5177\u81ea\u52a8\u751f\u6210\u3002"),(0,a.kt)("h2",{id:"\u6587\u6863"},"\u6587\u6863"),(0,a.kt)(o.Z,{mdxType:"DocsCards"},(0,a.kt)(i.Z,{header:"\u7ed3\u6784",href:"structure",mdxType:"DocsCard"},(0,a.kt)("p",null,"Konfig \u4ed3\u5e93\u76ee\u5f55\u548c\u4ee3\u7801\u7ed3\u6784\u7684\u8bf4\u660e\u3002")),(0,a.kt)(i.Z,{header:"\u5feb\u901f\u5f00\u59cb",href:"guide",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u4f7f\u7528 Konfig \u7684\u5feb\u901f\u6307\u5357\u3002")),(0,a.kt)(i.Z,{header:"\u6700\u4f73\u5b9e\u8df5",href:"practice",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u5c06\u65b0\u6a21\u578b\u96c6\u6210\u5230 Konfig \u4ee5\u53ca KCL \u4ee3\u7801\u7f16\u5199\u7684\u6700\u4f73\u5b9e\u8df5\u6307\u5357\u3002"))))}g.isMDXComponent=!0},15883:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/konfig-arch-d449927f5a1b7e08eaec85ac24ad4bc1.png"}}]);