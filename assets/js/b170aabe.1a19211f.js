"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[73585],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>k});var l=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)i=r[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)i=r[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=l.createContext({}),s=function(e){var t=l.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},_="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),_=s(i),d=n,k=_["".concat(p,".").concat(d)]||_[d]||u[d]||r;return i?l.createElement(k,o(o({ref:t},c),{},{components:i})):l.createElement(k,o({ref:t},c))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[_]="string"==typeof e?e:n,o[1]=a;for(var s=2;s<r;s++)o[s]=i[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,i)}d.displayName="MDXCreateElement"},83559:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var l=i(87462),n=(i(67294),i(3905));const r={title:"net",linkTitle:"net",type:"docs",description:"net system module",weight:100},o=void 0,a={unversionedId:"reference/model/net",id:"version-0.4.5/reference/model/net",title:"net",description:"net system module",source:"@site/versioned_docs/version-0.4.5/reference/model/net.md",sourceDirName:"reference/model",slug:"/reference/model/net",permalink:"/docs/0.4.5/reference/model/net",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/reference/model/net.md",tags:[],version:"0.4.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1701933583,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{title:"net",linkTitle:"net",type:"docs",description:"net system module",weight:100},sidebar:"reference",previous:{title:"math",permalink:"/docs/0.4.5/reference/model/math"},next:{title:"regex",permalink:"/docs/0.4.5/reference/model/regex"}},p={},s=[{value:"split_host_port",id:"split_host_port",level:2},{value:"join_host_port",id:"join_host_port",level:2},{value:"fqdn",id:"fqdn",level:2},{value:"parse_IP",id:"parse_ip",level:2},{value:"to_IP4",id:"to_ip4",level:2},{value:"to_IP16",id:"to_ip16",level:2},{value:"IP_string",id:"ip_string",level:2},{value:"is_IPv4",id:"is_ipv4",level:2},{value:"is_IP",id:"is_ip",level:2},{value:"is_loopback_IP",id:"is_loopback_ip",level:2},{value:"is_multicast_IP",id:"is_multicast_ip",level:2},{value:"is_interface_local_multicast_IP",id:"is_interface_local_multicast_ip",level:2},{value:"is_link_local_multicast_IP",id:"is_link_local_multicast_ip",level:2},{value:"is_link_local_unicast_IP",id:"is_link_local_unicast_ip",level:2},{value:"is_global_unicast_IP",id:"is_global_unicast_ip",level:2},{value:"is_unspecified_IP",id:"is_unspecified_ip",level:2}],c={toc:s},_="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(_,(0,l.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"split_host_port"},"split_host_port"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"split_host_port(ip_end_point: str) -> List[str]")),(0,n.kt)("p",null,"Split the 'host' and 'port' from the ip end point."),(0,n.kt)("h2",{id:"join_host_port"},"join_host_port"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"join_host_port(host, port) -> str")),(0,n.kt)("p",null,"Merge the 'host' and 'port'."),(0,n.kt)("h2",{id:"fqdn"},"fqdn"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fqdn(name: str = '') -> str")),(0,n.kt)("p",null,"Return Fully Qualified Domain Name (FQDN)."),(0,n.kt)("h2",{id:"parse_ip"},"parse_IP"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"parse_IP(ip) -> str")),(0,n.kt)("p",null,"Parse 'ip' to a real IP address"),(0,n.kt)("h2",{id:"to_ip4"},"to_IP4"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"to_IP4(ip) -> str")),(0,n.kt)("p",null,"Get the IP4 form of 'ip'."),(0,n.kt)("h2",{id:"to_ip16"},"to_IP16"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"to_IP16(ip) -> int")),(0,n.kt)("p",null,"Get the IP16 form of 'ip'."),(0,n.kt)("h2",{id:"ip_string"},"IP_string"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"IP_string(ip: str | int) -> str")),(0,n.kt)("p",null,"Get the IP string."),(0,n.kt)("h2",{id:"is_ipv4"},"is_IPv4"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"is_IPv4(ip: str) -> bool")),(0,n.kt)("p",null,"Whether 'ip' is a IPv4 one."),(0,n.kt)("h2",{id:"is_ip"},"is_IP"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"is_IP(ip: str) -> bool")),(0,n.kt)("p",null,"Whether ip is a valid ip address."),(0,n.kt)("h2",{id:"is_loopback_ip"},"is_loopback_IP"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"is_loopback_IP(ip: str) -> bool")),(0,n.kt)("p",null,"Whether 'ip' is a loopback one."),(0,n.kt)("h2",{id:"is_multicast_ip"},"is_multicast_IP"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"is_multicast_IP(ip: str) -> bool")),(0,n.kt)("p",null,"Whether 'ip' is a multicast one."),(0,n.kt)("h2",{id:"is_interface_local_multicast_ip"},"is_interface_local_multicast_IP"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"is_interface_local_multicast_IP(ip: str) -> bool")),(0,n.kt)("p",null,"Whether 'ip' is a interface, local and multicast one."),(0,n.kt)("h2",{id:"is_link_local_multicast_ip"},"is_link_local_multicast_IP"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"is_link_local_multicast_IP(ip: str) -> bool")),(0,n.kt)("p",null,"Whether 'ip' is a link local and multicast one."),(0,n.kt)("h2",{id:"is_link_local_unicast_ip"},"is_link_local_unicast_IP"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"is_link_local_unicast_IP(ip: str) -> bool")),(0,n.kt)("p",null,"Whether 'ip' is a link local and unicast one."),(0,n.kt)("h2",{id:"is_global_unicast_ip"},"is_global_unicast_IP"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"is_global_unicast_IP(ip: str) -> bool")),(0,n.kt)("p",null,"Whether 'ip' is a global and unicast one."),(0,n.kt)("h2",{id:"is_unspecified_ip"},"is_unspecified_IP"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"is_unspecified_IP(ip: str) -> bool")),(0,n.kt)("p",null,"Whether 'ip' is a unspecified one."))}u.isMDXComponent=!0}}]);