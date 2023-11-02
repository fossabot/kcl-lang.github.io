"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90261],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),k=r,d=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return t?a.createElement(d,i(i({ref:n},c),{},{components:t})):a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},97504:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={sidebar_position:1},i="\u7b80\u4ecb",p={unversionedId:"reference/xlang-api/overview",id:"version-0.5.1/reference/xlang-api/overview",title:"\u7b80\u4ecb",description:"KCL \u8bed\u8a00\u63d0\u4f9b C/Rust/Go/Python/Java \u7b49\u901a\u7528\u7f16\u7a0b\u8bed\u8a00\u63a5\u53e3\uff0c\u76f8\u5173\u8bed\u8a00\u6b63\u5728\u5f00\u53d1\u5b8c\u6574\u4e2d\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.1/reference/xlang-api/overview.md",sourceDirName:"reference/xlang-api",slug:"/reference/xlang-api/overview",permalink:"/zh-CN/docs/0.5.1/reference/xlang-api/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/reference/xlang-api/overview.md",tags:[],version:"0.5.1",lastUpdatedBy:"peefy",lastUpdatedAt:1698928861,formattedLastUpdatedAt:"2023\u5e7411\u67082\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"\u591a\u8bed\u8a00",permalink:"/zh-CN/docs/0.5.1/reference/xlang-api/"},next:{title:"Rest API",permalink:"/zh-CN/docs/0.5.1/reference/xlang-api/rest-api"}},o={},s=[{value:"C/Rust \u8bed\u8a00",id:"crust-\u8bed\u8a00",level:2},{value:"Go \u8bed\u8a00",id:"go-\u8bed\u8a00",level:2},{value:"API \u62bd\u8c61\u6a21\u578b",id:"api-\u62bd\u8c61\u6a21\u578b",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3},{value:"REST-API",id:"rest-api",level:2},{value:"\u542f\u52a8 REST \u670d\u52a1",id:"\u542f\u52a8-rest-\u670d\u52a1",level:3},{value:"<code>BuiltinService</code> \u670d\u52a1",id:"builtinservice-\u670d\u52a1",level:3},{value:"<code>KclvmService</code> \u670d\u52a1",id:"kclvmservice-\u670d\u52a1",level:3},{value:"Python \u8bed\u8a00",id:"python-\u8bed\u8a00",level:2},{value:"\u547d\u4ee4\u884c\u5de5\u5177",id:"\u547d\u4ee4\u884c\u5de5\u5177",level:3},{value:"API",id:"api",level:3},{value:"\u5176\u5b83\u8bed\u8a00",id:"\u5176\u5b83\u8bed\u8a00",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"KCL \u8bed\u8a00\u63d0\u4f9b C/Rust/Go/Python/Java \u7b49\u901a\u7528\u7f16\u7a0b\u8bed\u8a00\u63a5\u53e3\uff0c\u76f8\u5173\u8bed\u8a00\u6b63\u5728\u5f00\u53d1\u5b8c\u6574\u4e2d\u3002"),(0,r.kt)("h2",{id:"crust-\u8bed\u8a00"},"C/Rust \u8bed\u8a00"),(0,r.kt)("p",null,"KCL \u6838\u5fc3\u91c7\u7528 Rust \u8bed\u8a00\u5f00\u53d1\uff0c\u5bf9\u5916\u5bfc\u51fa C \u8bed\u8a00 API \u4f9b Go/Python/Java \u7b49\u9ad8\u7ea7\u8bed\u8a00\u5305\u88c5\u548c\u96c6\u6210\u3002"),(0,r.kt)("h2",{id:"go-\u8bed\u8a00"},"Go \u8bed\u8a00"),(0,r.kt)("p",null,"Go \u8bed\u8a00\u662f\u901a\u8fc7 CGO \u5305\u88c5 KCL \u63d0\u4f9b\u7684 C-API\uff0c\u540c\u65f6\u63d0\u4f9b\u66f4\u6df1\u5ea6\u7684\u5b9a\u5236\u7279\u6027\u4ee5\u6ee1\u8db3\u4e0a\u5c42\u5de5\u5177\u7684\u9700\u6c42\u3002"),(0,r.kt)("h3",{id:"api-\u62bd\u8c61\u6a21\u578b"},"API \u62bd\u8c61\u6a21\u578b"),(0,r.kt)("p",null,"Go \u8bed\u8a00 API \u7684\u62bd\u8c61\u6a21\u578b\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     kcl files   \u2502         \u2502   KCL-Go-API    \u2502           \u2502  KCLResultList  \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502  \u2502    1.k    \u2502  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.Get("a.b.c") \u2502\n\u2502  \u2502    2.k    \u2502  \u2502         \u2502  \u2502 Run(path) \u2502  \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\u2500\u2500\u2500\u2500\u2510    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502                 \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502    \u2502    \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2502    3.k    \u2502  \u2502    \u2502    \u2502                 \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.Get("k", &v) \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502    \u2502    \u2502                 \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502    \u251c\u2500\u2500\u2500\u25b6\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502                 \u2502\n\u2502  \u2502setting.yml\u2502  \u2502    \u2502    \u2502  \u2502RunFiles() \u2502  \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502    \u2502    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.JSONString() \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502    \u2502                 \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                       \u2502    \u2502                 \u2502           \u2502                 \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502    \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     Options     \u2502    \u2502    \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.YAMLString() \u2502\n\u2502WithOptions      \u2502    \u2502    \u2502  \u2502MustRun()  \u2502  \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502WithOverrides    \u2502\u2500\u2500\u2500\u2500\u2518    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502                 \u2502\n\u2502WithWorkDir      \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502WithDisableNone  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,r.kt)("p",null,"\u5176\u4e2d\u8f93\u5165\u7684\u6587\u4ef6\u5305\u542b KCL \u6587\u4ef6\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"setting.yml")," \u914d\u7f6e\u6587\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Options")," \u53ef\u4ee5\u7528\u4e8e\u6307\u5b9a\u989d\u5916\u7684\u53c2\u6570\u548c\u5de5\u4f5c\u76ee\u5f55\u7b49\u4fe1\u606f\u3002\u201cKCL-Go-API\u201d\u90e8\u5206\u662f\u63d0\u4f9b\u7684 KCL \u6267\u884c\u51fd\u6570\uff0c\u6267\u884c\u51fd\u6570\u6839\u636e\u8f93\u5165\u6587\u4ef6\u548c\u989d\u5916\u7684\u53c2\u6570\u6267\u884c KCL \u7a0b\u5e8f\uff0c\u6700\u7ec8\u8f93\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"KCLResultList")," \u7ed3\u679c\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"KCLResultList")," \u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"KCLResult")," \u6784\u6210\u7684\u5217\u8868\uff0c\u6bcf\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"KCLResult")," \u5bf9\u5e94\u4e00\u4e2a\u751f\u6210\u7684\u914d\u7f6e\u6587\u4ef6\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"map[string]interface{}"),"\u3002"),(0,r.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    kcl "kcl-lang.io/kcl-go"\n)\n\n\nfunc main() {\n    const k_code = `\nname = "kcl"\nage = 1\n\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n\nx0 = Person{}\nx1 = Person{age:101}\n`\n\n    result := kcl.MustRun("hello.k", kcl.WithCode(k_code)).First()\n    fmt.Println(result.YAMLString())\n\n    fmt.Println("----")\n    fmt.Println("x0.name:", result.Get("x0.name"))\n    fmt.Println("x1.age:", result.Get("x1.age"))\n\n    fmt.Println("----")\n\n    var person struct {\n        Name string\n        Age  int\n    }\n    fmt.Printf("person: %+v\\n", result.Get("x1", &person))\n}\n')),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"age: 1\nname: kcl\nx0:\n    age: 1\n    name: kcl\nx1:\n    age: 101\n    name: kcl\n\n----\nx0.name: kcl\nx1.age: 101\n----\nperson: &{Name:kcl Age:101}\n")),(0,r.kt)("h2",{id:"rest-api"},"REST-API"),(0,r.kt)("p",null,"KCL \u63d0\u4f9b\u7684 C-API \u5e76\u6ca1\u6709 REST-API\uff0cREST-API \u662f\u901a\u8fc7 Protobuf \u5b9a\u4e49\uff0c\u6700\u7ec8\u7531\u4e0a\u5c42\u7684 Go-SDK \u63d0\u4f9b\u5b9e\u73b0\u3002"),(0,r.kt)("h3",{id:"\u542f\u52a8-rest-\u670d\u52a1"},"\u542f\u52a8 REST \u670d\u52a1"),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u53ef\u4ee5\u542f\u52a8 RestAPI \u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'python3 -m pip install kclvm -U\npython3 -m gunicorn "kclvm.program.rpc-server.__main__:create_app()" -t 120 -w 4 -k uvicorn.workers.UvicornWorker -b :2021\n')),(0,r.kt)("p",null,"\u7136\u540e\u53ef\u4ee5\u901a\u8fc7 POST \u534f\u8bae\u8bf7\u6c42\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X POST http://127.0.0.1:2021/api:protorpc/BuiltinService.Ping --data \'{}\'\n{\n    "error": "",\n    "result": {}\n}\n')),(0,r.kt)("p",null,"\u5176\u4e2d POST \u8bf7\u6c42\u548c\u8fd4\u56de\u7684 JSON \u6570\u636e\u548c Protobuf \u5b9a\u4e49\u7684\u7ed3\u6784\u4fdd\u6301\u4e00\u81f4\u3002"),(0,r.kt)("h3",{id:"builtinservice-\u670d\u52a1"},(0,r.kt)("inlineCode",{parentName:"h3"},"BuiltinService")," \u670d\u52a1"),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"/api:protorpc/BuiltinService.Ping")," \u8def\u5f84\u8868\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"BuiltinService")," \u670d\u52a1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Ping")," \u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u5b8c\u6574\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"BuiltinService")," \u7531 Protobuf \u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"service BuiltinService {\n    rpc Ping(Ping_Args) returns(Ping_Result);\n    rpc ListMethod(ListMethod_Args) returns(ListMethod_Result);\n}\n\nmessage Ping_Args {\n    string value = 1;\n}\nmessage Ping_Result {\n    string value = 1;\n}\n\nmessage ListMethod_Args {\n    // empty\n}\nmessage ListMethod_Result {\n    repeated string method_name_list = 1;\n}\n")),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"Ping")," \u65b9\u6cd5\u53ef\u4ee5\u9a8c\u8bc1\u670d\u52a1\u662f\u5426\u6b63\u5e38\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ListMethod")," \u65b9\u6cd5\u53ef\u4ee5\u67e5\u8be2\u63d0\u4f9b\u7684\u5168\u90e8\u670d\u52a1\u548c\u51fd\u6570\u5217\u8868\u3002"),(0,r.kt)("h3",{id:"kclvmservice-\u670d\u52a1"},(0,r.kt)("inlineCode",{parentName:"h3"},"KclvmService")," \u670d\u52a1"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"KclvmService")," \u670d\u52a1\u662f\u548c KCL \u529f\u80fd\u76f8\u5173\u7684\u670d\u52a1\u3002\u7528\u6cd5\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"BuiltinService")," \u670d\u52a1\u4e00\u6837\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u6709\u4ee5\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," \u7ed3\u6784\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"schema Person:\n    key: str\n\n    check:\n        \"value\" in key  # 'key' is required and 'key' must contain \"value\"\n")),(0,r.kt)("p",null,"\u7136\u540e\u5e0c\u671b\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," \u6765\u6821\u9a8c\u4ee5\u4e0b\u7684 JSON \u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"key": "value"}\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"KclvmService")," \u670d\u52a1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateCode")," \u65b9\u6cd5\u5b8c\u6210\u3002\u53c2\u8003 ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateCode")," \u65b9\u6cd5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," \u53c2\u6570\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ValidateCode_Args {\n    string data = 1;\n    string code = 2;\n    string schema = 3;\n    string attribute_name = 4;\n    string format = 5;\n}\n")),(0,r.kt)("p",null,"\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," \u53c2\u6570\u7ed3\u6784\u6784\u9020 POST \u8bf7\u6c42\u9700\u8981\u7684 JSON \u6570\u636e\uff0c\u5176\u4e2d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," \u5b9a\u4e49\u548c\u8981\u6821\u9a8c\u7684 JSON \u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": "\\nschema Person:\\n    key: str\\n\\n    check:\\n        \\"value\\" in key  # \'key\' is required and \'key\' must contain \\"value\\"\\n",\n    "data": "{\\"key\\": \\"value\\"}"\n}\n')),(0,r.kt)("p",null,"\u5c06\u8be5 JSON \u6570\u636e\u4fdd\u5b58\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"vet-hello.json")," \u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u6821\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X POST \\\n    http://127.0.0.1:2021/api:protorpc/KclvmService.ValidateCode \\\n    -H  "accept: application/json" \\\n    --data @./vet-hello.json\n{\n    "error": "",\n    "result": {\n        "success": true\n    }\n}\n')),(0,r.kt)("p",null,"\u8bf4\u660e\u6821\u9a8c\u6210\u529f\u3002"),(0,r.kt)("h2",{id:"python-\u8bed\u8a00"},"Python \u8bed\u8a00"),(0,r.kt)("p",null,"\u4f7f\u7528 Python SDK \u8981\u6c42\u60a8\u672c\u5730\u5177\u5907\u9ad8\u4e8e 3.7.3 \u7684 Python \u7248\u672c\u548c pip \u5305\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\u5e76\u83b7\u5f97\u5e2e\u52a9\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install kclvm --user && python3 -m kclvm --help\n")),(0,r.kt)("h3",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,r.kt)("p",null,"\u7f16\u5199\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," \u7684 KCL \u6587\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'name = "kcl"\nage = 1\n\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n\nx0 = Person {}\nx1 = Person {\n    age = 101\n}\n')),(0,r.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5e76\u83b7\u5f97\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ python3 -m kclvm hello.k\nname: kcl\nage: 1\nx0:\n  name: kcl\n  age: 1\nx1:\n  name: kcl\n  age: 101\n")),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7 Python \u4ee3\u7801\u5b9e\u73b0\u5bf9 KCL \u6587\u4ef6\u7684\u6267\u884c"),(0,r.kt)("p",null,"\u7f16\u5199\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," \u7684 python \u6587\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kclvm.program.exec as kclvm_exec\nimport kclvm.vm.planner as planner\n\nprint(planner.plan(kclvm_exec.Run(["hello.k"]).filter_by_path_selector()))\n')),(0,r.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5e76\u83b7\u5f97\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ python3 main.py\nname: kcl\nage: 1\nx0:\n  name: kcl\n  age: 1\nx1:\n  name: kcl\n  age: 101\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u548c API \u53ef\u4ee5\u83b7\u5f97\u540c\u6837\u7684\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u76ee\u524d KCL Python SDK \u8fd8\u5904\u4e8e\u65e9\u671f\u9884\u89c8\u7248\u672c\uff0c\u540e\u7eed KCL \u56e2\u961f\u4f1a\u6301\u7eed\u66f4\u65b0\u5e76\u63d0\u4f9b\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\uff0c\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl-py"},"https://github.com/kcl-lang/kcl-py")),(0,r.kt)("h2",{id:"\u5176\u5b83\u8bed\u8a00"},"\u5176\u5b83\u8bed\u8a00"),(0,r.kt)("p",null,"\u7528\u6237\u4e5f\u53ef\u4ee5\u57fa\u4e8e C-API \u548c RestAPI \u5305\u88c5\u5176\u5b83\u8bed\u8a00\u7684 SDK\u3002"))}m.isMDXComponent=!0}}]);