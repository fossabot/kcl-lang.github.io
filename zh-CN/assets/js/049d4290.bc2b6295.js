"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62912],{3905:(e,r,n)=>{n.d(r,{Zo:()=>m,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},m=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(n),g=a,d=s["".concat(i,".").concat(g)]||s[g]||u[g]||l;return n?t.createElement(d,o(o({ref:r},m),{},{components:n})):t.createElement(d,o({ref:r},m))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16372:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const l={},o="kpm login",p={unversionedId:"reference/package-management/command-reference/login",id:"version-0.5.0/reference/package-management/command-reference/login",title:"kpm login",description:"\u767b\u9646 kpm registry.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.0/reference/package-management/command-reference/6.login.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/login",permalink:"/zh-CN/docs/0.5.0/reference/package-management/command-reference/login",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/reference/package-management/command-reference/6.login.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701417593,formattedLastUpdatedAt:"2023\u5e7412\u67081\u65e5",sidebarPosition:6,frontMatter:{},sidebar:"reference",previous:{title:"kpm run",permalink:"/zh-CN/docs/0.5.0/reference/package-management/command-reference/run"},next:{title:"kpm logout",permalink:"/zh-CN/docs/0.5.0/reference/package-management/command-reference/logout"}},i={},c=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--username, -u",id:"--username--u",level:3},{value:"--password, -p",id:"--password--p",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u767b\u9646\u5230 kpm registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801",id:"\u767b\u9646\u5230-kpm-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801",level:3},{value:"\u767b\u9646\u5230 kpm registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\uff0c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",id:"\u767b\u9646\u5230-kpm-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",level:3},{value:"\u767b\u9646\u5230 kpm registry, \u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",id:"\u767b\u9646\u5230-kpm-registry-\u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",level:3}],m={toc:c},s="wrapper";function u(e){let{components:r,...n}=e;return(0,a.kt)(s,(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-login"},"kpm login"),(0,a.kt)("p",null,"\u767b\u9646 kpm registry."),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login [options][kpm_registry]\n")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm login")," \u5c06\u4f1a\u767b\u9646 kpm registry\u3002"),(0,a.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("h3",{id:"--username--u"},"--username, -u"),(0,a.kt)("p",null,"\u6307\u5b9a kpm registry \u7684\u7528\u6237\u540d\u3002"),(0,a.kt)("h3",{id:"--password--p"},"--password, -p"),(0,a.kt)("p",null,"\u6307\u5b9a kpm registry \u7684\u5bc6\u7801\u3002"),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"\u5c55\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm login")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u767b\u9646\u5230-kpm-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801"},"\u767b\u9646\u5230 kpm registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login -u <account_name> -p <password> <oci_registry>\n")),(0,a.kt)("p",null,"\u671f\u671b\u8f93\u51fa\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Login succeeded\n")),(0,a.kt)("h3",{id:"\u767b\u9646\u5230-kpm-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"},"\u767b\u9646\u5230 kpm registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\uff0c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login -u <account_name> <oci_registry>\n")),(0,a.kt)("p",null,"\u671f\u671b\u8f93\u51fa\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Password:\nLogin succeeded\n")),(0,a.kt)("h3",{id:"\u767b\u9646\u5230-kpm-registry-\u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"},"\u767b\u9646\u5230 kpm registry, \u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login <oci_registry>\n")),(0,a.kt)("p",null,"\u671f\u671b\u8f93\u51fa\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Username: <account_name>\nPassword:\nLogin succeeded\n")))}u.isMDXComponent=!0}}]);