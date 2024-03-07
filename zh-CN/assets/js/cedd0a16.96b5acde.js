"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[82919],{3905:(e,t,i)=>{i.d(t,{Zo:()=>_,kt:()=>k});var n=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)i=p[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)i=p[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var a=n.createContext({}),s=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},_=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,p=e.originalType,a=e.parentName,_=o(e,["components","mdxType","originalType","parentName"]),c=s(i),d=l,k=c["".concat(a,".").concat(d)]||c[d]||u[d]||p;return i?n.createElement(k,r(r({ref:t},_),{},{components:i})):n.createElement(k,r({ref:t},_))}));function k(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=i.length,r=new Array(p);r[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<p;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},69220:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=i(87462),l=(i(67294),i(3905));const p={title:"net",linkTitle:"net",type:"docs",description:"net \u5305 - \u7f51\u7edcIP\u5904\u7406",weight:100},r=void 0,o={unversionedId:"reference/model/net",id:"version-0.5.0/reference/model/net",title:"net",description:"net \u5305 - \u7f51\u7edcIP\u5904\u7406",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.0/reference/model/net.md",sourceDirName:"reference/model",slug:"/reference/model/net",permalink:"/zh-CN/docs/0.5.0/reference/model/net",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/reference/model/net.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1709793003,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",frontMatter:{title:"net",linkTitle:"net",type:"docs",description:"net \u5305 - \u7f51\u7edcIP\u5904\u7406",weight:100},sidebar:"reference",previous:{title:"math",permalink:"/zh-CN/docs/0.5.0/reference/model/math"},next:{title:"regex",permalink:"/zh-CN/docs/0.5.0/reference/model/regex"}},a={},s=[{value:"split_host_port",id:"split_host_port",level:2},{value:"join_host_port",id:"join_host_port",level:2},{value:"fqdn",id:"fqdn",level:2},{value:"parse_IP",id:"parse_ip",level:2},{value:"to_IP4",id:"to_ip4",level:2},{value:"to_IP16",id:"to_ip16",level:2},{value:"IP_string",id:"ip_string",level:2},{value:"is_IPv4",id:"is_ipv4",level:2},{value:"is_IP",id:"is_ip",level:2},{value:"is_loopback_IP",id:"is_loopback_ip",level:2},{value:"is_multicast_IP",id:"is_multicast_ip",level:2},{value:"is_interface_local_multicast_IP",id:"is_interface_local_multicast_ip",level:2},{value:"is_link_local_multicast_IP",id:"is_link_local_multicast_ip",level:2},{value:"is_link_local_unicast_IP",id:"is_link_local_unicast_ip",level:2},{value:"is_global_unicast_IP",id:"is_global_unicast_ip",level:2},{value:"is_unspecified_IP",id:"is_unspecified_ip",level:2}],_={toc:s},c="wrapper";function u(e){let{components:t,...i}=e;return(0,l.kt)(c,(0,n.Z)({},_,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"split_host_port"},"split_host_port"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"split_host_port(ip_end_point: str) -> List[str]")),(0,l.kt)("p",null,"\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"ip_end_point")," \u5206\u79bb\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"host")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"port"),"\u3002"),(0,l.kt)("h2",{id:"join_host_port"},"join_host_port"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"join_host_port(host, port) -> str")),(0,l.kt)("p",null,"\u5408\u5e76 ",(0,l.kt)("inlineCode",{parentName:"p"},"host")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"port"),"\u3002"),(0,l.kt)("h2",{id:"fqdn"},"fqdn"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fqdn(name: str = '') -> str")),(0,l.kt)("p",null,"\u8fd4\u56de\u5b8c\u5168\u9650\u5b9a\u57df\u540d\uff08FQDN\uff09\u3002"),(0,l.kt)("h2",{id:"parse_ip"},"parse_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"parse_IP(ip) -> str")),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u89e3\u6790\u4e3a\u771f\u5b9e\u7684 IP \u5730\u5740\u3002"),(0,l.kt)("h2",{id:"to_ip4"},"to_IP4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"to_IP4(ip) -> str")),(0,l.kt)("p",null,"\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u7684 IPv4 \u8868\u793a\u5f62\u5f0f\u3002"),(0,l.kt)("h2",{id:"to_ip16"},"to_IP16"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"to_IP16(ip) -> int")),(0,l.kt)("p",null,"\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u7684 IPv6 \u8868\u793a\u5f62\u5f0f\u3002"),(0,l.kt)("h2",{id:"ip_string"},"IP_string"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IP_string(ip: str | int) -> str")),(0,l.kt)("p",null,"\u8fd4\u56de IP \u5b57\u7b26\u4e32\u3002"),(0,l.kt)("h2",{id:"is_ipv4"},"is_IPv4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_IPv4(ip: str) -> bool")),(0,l.kt)("p",null,"\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u662f\u5426\u4e3a IPv4\u3002"),(0,l.kt)("h2",{id:"is_ip"},"is_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_IP(ip: str) -> bool")),(0,l.kt)("p",null,"\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u662f\u5426\u4e3a\u6709\u6548\u7684 IP \u5730\u5740\u3002"),(0,l.kt)("h2",{id:"is_loopback_ip"},"is_loopback_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_loopback_IP(ip: str) -> bool")),(0,l.kt)("p",null,"\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u662f\u5426\u4e3a\u56de\u73af\u5730\u5740\u3002"),(0,l.kt)("h2",{id:"is_multicast_ip"},"is_multicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_multicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u662f\u5426\u4e3a\u7ec4\u64ad\u5730\u5740\u3002"),(0,l.kt)("h2",{id:"is_interface_local_multicast_ip"},"is_interface_local_multicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_interface_local_multicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u662f\u5426\u4e3a\u63a5\u53e3\u3001\u672c\u5730\u548c\u7ec4\u64ad\u5730\u5740\u3002"),(0,l.kt)("h2",{id:"is_link_local_multicast_ip"},"is_link_local_multicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_link_local_multicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u662f\u5426\u4e3a\u94fe\u8def\u672c\u5730\u548c\u7ec4\u64ad\u5730\u5740\u3002"),(0,l.kt)("h2",{id:"is_link_local_unicast_ip"},"is_link_local_unicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_link_local_unicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u662f\u5426\u4e3a\u94fe\u8def\u672c\u5730\u548c\u5355\u64ad\u5730\u5740\u3002"),(0,l.kt)("h2",{id:"is_global_unicast_ip"},"is_global_unicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_global_unicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u662f\u5426\u4e3a\u5168\u5c40\u5355\u64ad\u5730\u5740\u3002"),(0,l.kt)("h2",{id:"is_unspecified_ip"},"is_unspecified_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_unspecified_IP(ip: str) -> bool")),(0,l.kt)("p",null,"\u5224\u65ad ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u662f\u5426\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"unspecified")," \u5730\u5740\u3002"))}u.isMDXComponent=!0}}]);