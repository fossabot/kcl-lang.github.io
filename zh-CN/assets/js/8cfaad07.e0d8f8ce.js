"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40718],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={title:"\u6a21\u578b\u5b9a\u4e49",sidebar_position:3},o=void 0,l={unversionedId:"user_docs/guides/schema-definition",id:"version-0.4.3/user_docs/guides/schema-definition",title:"\u6a21\u578b\u5b9a\u4e49",description:"KCL \u7684\u6838\u5fc3\u573a\u666f\u662f\u5199\u914d\u7f6e\u548c\u6821\u9a8c\uff0c\u56e0\u6b64 KCL \u88ab\u8bbe\u8ba1\u4e4b\u521d\u7684\u4e00\u4e2a\u6838\u5fc3\u7279\u6027\u5c31\u662f\u5efa\u6a21\uff0c\u5bf9\u5e94\u5230 KCL \u7684\u5173\u952e\u5b57 schema\uff0cschema \u53ef\u4ee5\u88ab\u7528\u4e8e\u5b9a\u4e49\u7ed3\u6784\u548c\u7ea6\u675f\uff0c\u6bd4\u5982\u5b57\u6bb5\u7684\u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\uff0c\u5b57\u6bb5\u7684\u8303\u56f4\u548c\u5404\u79cd\u5176\u4ed6\u7ea6\u675f\u7b49\u5185\u5bb9\u3002\u6b64\u5916\uff0c\u4f7f\u7528 KCL schema \u5b9a\u4e49\u7684\u7ed3\u6784\u53ef\u4ee5\u53cd\u8fc7\u6765\u7528\u4e8e\u9a8c\u8bc1\u5b9e\u73b0\u3001\u9a8c\u8bc1\u8f93\u5165\uff08JSON\u3001YAML \u7b49\u7ed3\u6784\u5316\u6570\u636e\uff09\u6216\u751f\u6210\u4ee3\u7801\uff08\u751f\u6210\u591a\u8bed\u8a00\u7ed3\u6784\u4f53\u3001OpenAPI \u7b49\uff09\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.3/user_docs/guides/schema-definition.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/schema-definition",permalink:"/zh-CN/docs/0.4.3/user_docs/guides/schema-definition",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/user_docs/guides/schema-definition.md",tags:[],version:"0.4.3",lastUpdatedBy:"peefy",lastUpdatedAt:1690174683,formattedLastUpdatedAt:"2023\u5e747\u670824\u65e5",sidebarPosition:3,frontMatter:{title:"\u6a21\u578b\u5b9a\u4e49",sidebar_position:3},sidebar:"user_docs",previous:{title:"\u6821\u9a8c",permalink:"/zh-CN/docs/0.4.3/user_docs/guides/validation"},next:{title:"\u6570\u636e\u96c6\u6210",permalink:"/zh-CN/docs/0.4.3/user_docs/guides/data-integration"}},p={},s=[{value:"\u5b9a\u4e49\u7ed3\u6784\u548c\u7ea6\u675f",id:"\u5b9a\u4e49\u7ed3\u6784\u548c\u7ea6\u675f",level:2}],c={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"KCL \u7684\u6838\u5fc3\u573a\u666f\u662f\u5199\u914d\u7f6e\u548c\u6821\u9a8c\uff0c\u56e0\u6b64 KCL \u88ab\u8bbe\u8ba1\u4e4b\u521d\u7684\u4e00\u4e2a\u6838\u5fc3\u7279\u6027\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5efa\u6a21"),"\uff0c\u5bf9\u5e94\u5230 KCL \u7684\u5173\u952e\u5b57 ",(0,a.kt)("inlineCode",{parentName:"p"},"schema"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," \u53ef\u4ee5\u88ab\u7528\u4e8e\u5b9a\u4e49\u7ed3\u6784\u548c\u7ea6\u675f\uff0c\u6bd4\u5982\u5b57\u6bb5\u7684\u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\uff0c\u5b57\u6bb5\u7684\u8303\u56f4\u548c\u5404\u79cd\u5176\u4ed6\u7ea6\u675f\u7b49\u5185\u5bb9\u3002\u6b64\u5916\uff0c\u4f7f\u7528 KCL schema \u5b9a\u4e49\u7684\u7ed3\u6784\u53ef\u4ee5\u53cd\u8fc7\u6765\u7528\u4e8e\u9a8c\u8bc1\u5b9e\u73b0\u3001\u9a8c\u8bc1\u8f93\u5165\uff08JSON\u3001YAML \u7b49\u7ed3\u6784\u5316\u6570\u636e\uff09\u6216\u751f\u6210\u4ee3\u7801\uff08\u751f\u6210\u591a\u8bed\u8a00\u7ed3\u6784\u4f53\u3001OpenAPI \u7b49\uff09\u3002"),(0,a.kt)("h2",{id:"\u5b9a\u4e49\u7ed3\u6784\u548c\u7ea6\u675f"},"\u5b9a\u4e49\u7ed3\u6784\u548c\u7ea6\u675f"),(0,a.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u6709\u5982\u4e0b\u5b9a\u4e49\u7684 KCL \u6587\u4ef6 (main.k)\u3002\u5728\u5176\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," \u5173\u952e\u5b57\u5b9a\u4e49\u4e86\u4e09\u4e2a\u6a21\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"App"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Volume"),"\u3002\u5e76\u4e14 ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," \u6a21\u578b\u5177\u6709\u56db\u4e2a\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"domainType"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"containerPort"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"volumes")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"services"),"\uff0c\u5176\u4e2d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domainType")," \u7684\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u8054\u5408\u7c7b\u578b\uff0c\u4e0e\u201c\u679a\u4e3e\u201d\u7c7b\u4f3c\uff0c\u8fd9\u8868\u660e ",(0,a.kt)("inlineCode",{parentName:"li"},"domainType")," \u7684\u503c\u53ea\u80fd\u53d6 ",(0,a.kt)("inlineCode",{parentName:"li"},'"Standard"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"Customized"')," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},'"Global"')," \u4e2d\u7684\u4e00\u4e2a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"containerPort")," \u7684\u7c7b\u578b\u4e3a\u6574\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"int"),", \u6b64\u5916\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"check")," \u5173\u952e\u5b57\u5b9a\u4e49\u4e86\u5176\u53d6\u503c\u8303\u56f4 1 ~ 65535"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"services")," \u7684\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"Service")," \u5217\u8868\u7c7b\u578b\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Service"),"\uff0c\u5e76\u4e14\u6211\u4eec\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"?")," \u6807\u8bb0\u4e86\u5b83\u662f\u4e00\u4e2a\u53ef\u9009\u5c5e\u6027\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u4e0d\u4e3a\u5176\u8d4b\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"volumes")," \u7684\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"Volume")," \u5217\u8868\u7c7b\u578b\uff0c\u5e76\u4e14\u6211\u4eec\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"?")," \u6807\u8bb0\u4e86\u5b83\u662f\u4e00\u4e2a\u53ef\u9009\u5c5e\u6027\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u4e0d\u4e3a\u5176\u8d4b\u503c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    domainType: "Standard" | "Customized" | "Global"\n    containerPort: int\n    services?: [Service]  # `?` specifies a optional attribute\n    volumes?: [Volume]  # `?` specifies a optional attribute\n\n    check:\n        1 <= containerPort <= 65535  # `containerPort` must be in range [1, 65535]\n\nschema Service:\n    clusterIP: str\n    $type: str\n\n    check:\n        clusterIP == "None" if $type == "ClusterIP" # When `type` is "ClusterIP", `clusterIP` must be `"None"`\n\nschema Volume:\n    container: str = "*"  # The default value of `container` is "*"\n    mountPath: str\n\n    check:\n        mountPath not in ["/", "/boot", "/home", "dev", "/etc", "/root"]  # `mountPath` must not be one of the list `["/", "/boot", "/home", "dev", "/etc", "/root"]`\n\napp: App {\n    domainType = "Standard"\n    containerPort = 80\n    volumes = [\n        {\n            mountPath = "/tmp"\n        }\n    ]\n    services = [\n        {\n            clusterIP = "None"\n            $type = "ClusterIP"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u884c\u53ef\u4ee5\u83b7\u5f97 ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," \u5b9e\u4f8b\u7684 YAML \u8f93\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kcl main.k\napp:\n  domainType: Standard\n  containerPort: 80\n  volumes:\n  - container: '*'\n    mountPath: /tmp\n  services:\n  - clusterIP: None\n    type: ClusterIP\n")),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," \u6a21\u578b\u653e\u5165\u5355\u72ec\u7684 app_module.k \u4e2d\uff0c\u5728\u9700\u8981\u65f6\u6211\u4eec\u53ef\u4ee5\u5728 main.k \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," \u5173\u952e\u5b57\u8fdb\u884c\u6a21\u5757\u5316\u7ba1\u7406\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u6587\u4ef6\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 app_module.k\n\u2514\u2500\u2500 main.k\n")),(0,a.kt)("p",null,"\u5176\u4e2d app_module.k \u7684\u5185\u5bb9\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    domainType: "Standard" | "Customized" | "Global"\n    containerPort: int\n    volumes: [Volume]\n    services: [Service]\n\n    check:\n        1 <= containerPort <= 65535\n\nschema Service:\n    clusterIP: str\n    $type: str\n\n    check:\n        clusterIP == "None" if $type == "ClusterIP"\n\nschema Volume:\n    container: str = "*"  # The default value of `container` is "*"\n    mountPath: str\n\n    check:\n        mountPath not in ["/", "/boot", "/home", "dev", "/etc", "/root"]\n')),(0,a.kt)("p",null,"main.k \u7684\u5185\u5bb9\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import .app_module  # A relative path import\n\napp: app_module.App {\n    domainType = "Standard"\n    containerPort = 80\n    volumes = [\n        {\n            mountPath = "/tmp"\n        }\n    ]\n    services = [\n        {\n            clusterIP = "None"\n            $type = "ClusterIP"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u884c\u4ecd\u7136\u53ef\u4ee5\u83b7\u5f97 ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," \u5b9e\u4f8b\u7684 YAML \u8f93\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kcl main.k\napp:\n  domainType: Standard\n  containerPort: 80\n  volumes:\n  - container: '*'\n    mountPath: /tmp\n  services:\n  - clusterIP: None\n    type: ClusterIP\n")))}u.isMDXComponent=!0}}]);