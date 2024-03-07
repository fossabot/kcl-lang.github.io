"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[43419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(g,s(s({ref:t},l),{},{components:r})):n.createElement(g,s({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={id:"structure",sidebar_label:"\u5de5\u7a0b\u7ed3\u6784"},s="Konfig \u5de5\u7a0b\u7ed3\u6784",a={unversionedId:"user_docs/guides/working-with-konfig/structure",id:"version-0.8.0/user_docs/guides/working-with-konfig/structure",title:"Konfig \u5de5\u7a0b\u7ed3\u6784",description:"\u672c\u6587\u4e3b\u8981\u89e3\u91ca Konfig \u914d\u7f6e\u5e93\u7684\u76ee\u5f55\u548c\u4ee3\u7801\u7ed3\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.8.0/user_docs/guides/working-with-konfig/2-structure.md",sourceDirName:"user_docs/guides/working-with-konfig",slug:"/user_docs/guides/working-with-konfig/structure",permalink:"/zh-CN/docs/user_docs/guides/working-with-konfig/structure",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.8.0/user_docs/guides/working-with-konfig/2-structure.md",tags:[],version:"0.8.0",lastUpdatedBy:"peefy",lastUpdatedAt:1709793003,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",sidebarPosition:2,frontMatter:{id:"structure",sidebar_label:"\u5de5\u7a0b\u7ed3\u6784"},sidebar:"user_docs",previous:{title:"\u6982\u8ff0",permalink:"/zh-CN/docs/user_docs/guides/working-with-konfig/overview"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/user_docs/guides/working-with-konfig/guide"}},c={},u=[{value:"\u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784",id:"\u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784",level:2}],l={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"konfig-\u5de5\u7a0b\u7ed3\u6784"},"Konfig \u5de5\u7a0b\u7ed3\u6784"),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u89e3\u91ca Konfig \u914d\u7f6e\u5e93\u7684\u76ee\u5f55\u548c\u4ee3\u7801\u7ed3\u6784"),(0,o.kt)("h2",{id:"\u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784"},"\u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784"),(0,o.kt)("p",null,"\u6838\u5fc3\u6a21\u578b\u5e93\u547d\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"models"),"\uff0c\u4e3b\u8981\u5305\u542b\u524d\u7aef\u6a21\u578b\u3001\u540e\u7aef\u6a21\u578b\u3001Mixin\u3001\u6e32\u67d3\u5668\u7b49\uff0c\u76ee\u5f55\u7ed3\u6784\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"models\n\u251c\u2500\u2500 commons         # \u57fa\u7840\u8d44\u6e90\u6838\u5fc3\u6a21\u578b\u5e93\n\u251c\u2500\u2500 kube            # \u4e91\u539f\u751f\u8d44\u6e90\u6838\u5fc3\u6a21\u578b\u5e93\n\u2502   \u251c\u2500\u2500 backend         # \u540e\u7aef\u6a21\u578b\n\u2502   \u251c\u2500\u2500 frontend        # \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 common          # \u901a\u7528\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 configmap       # ConfigMap \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 container       # \u5bb9\u5668\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 ingress         # Ingress \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 resource        # \u8d44\u6e90\u89c4\u683c\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 secret          # Secret \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 service         # Service \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 sidecar         # Sidecar \u5bb9\u5668\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 strategy        # \u7b56\u7565\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 volume          # Volume \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u2514\u2500\u2500 server.k        # \u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u524d\u7aef\u6a21\u578b\n\u2502   \u251c\u2500\u2500 metadata        # \u5e94\u7528\u8fd0\u7ef4\u7684\u5143\u6570\u636e\u6a21\u578b\n\u2502   \u251c\u2500\u2500 mixins          # \u7edf\u4e00\u653e\u7f6e\u53ef\u590d\u7528\u7684 Mixin\n\u2502   \u251c\u2500\u2500 render          # \u6e32\u67d3\u5668\uff0c\u628a\u524d\u540e\u7aef\u6a21\u578b\u8054\u7cfb\u5728\u4e00\u8d77\u7684\u6865\u6881\n\u2502   \u251c\u2500\u2500 templates       # \u9759\u6001\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 utils           # \u5de5\u5177\u65b9\u6cd5\n\u2514\u2500\u2500 metadata        # \u901a\u7528\u5143\u6570\u636e\u6a21\u578b\n")))}p.isMDXComponent=!0}}]);