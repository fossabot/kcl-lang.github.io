"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[95216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),o=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(n),k=a,h=u["".concat(p,".").concat(k)]||u[k]||m[k]||r;return n?l.createElement(h,i(i({ref:t},c),{},{components:n})):l.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<r;o++)i[o]=n[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},46820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var l=n(87462),a=(n(67294),n(3905));const r={sidebar_position:3},i="Go API",s={unversionedId:"reference/xlang-api/go-api",id:"version-0.5.3/reference/xlang-api/go-api",title:"Go API",description:"KCL Go SDK",source:"@site/versioned_docs/version-0.5.3/reference/xlang-api/go-api.md",sourceDirName:"reference/xlang-api",slug:"/reference/xlang-api/go-api",permalink:"/docs/0.5.3/reference/xlang-api/go-api",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.3/reference/xlang-api/go-api.md",tags:[],version:"0.5.3",lastUpdatedBy:"peefy",lastUpdatedAt:1709793003,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"reference",previous:{title:"Rest API",permalink:"/docs/0.5.3/reference/xlang-api/rest-api"},next:{title:"Python API",permalink:"/docs/0.5.3/reference/xlang-api/python-api"}},p={},o=[{value:"KCL Go SDK",id:"kcl-go-sdk",level:2},{value:"Index",id:"index",level:2},{value:"Constants",id:"constants",level:2},{value:"func FormatCode",id:"func-formatcode",level:2},{value:"func FormatPath",id:"func-formatpath",level:2},{value:"func InitKclvmPath",id:"func-initkclvmpath",level:2},{value:"func InitKclvmRuntime",id:"func-initkclvmruntime",level:2},{value:"func LintPath",id:"func-lintpath",level:2},{value:"func ListDepFiles",id:"func-listdepfiles",level:2},{value:"func ListDownStreamFiles",id:"func-listdownstreamfiles",level:2},{value:"func ListUpStreamFiles",id:"func-listupstreamfiles",level:2},{value:"func OverrideFile",id:"func-overridefile",level:2},{value:"func ValidateCode",id:"func-validatecode",level:2},{value:"type KCLResult",id:"type-kclresult",level:2},{value:"type KCLResultList",id:"type-kclresultlist",level:2},{value:"func MustRun",id:"func-mustrun",level:3},{value:"func Run",id:"func-run",level:3},{value:"func RunFiles",id:"func-runfiles",level:3},{value:"type KclType",id:"type-kcltype",level:2},{value:"func GetSchemaType",id:"func-getschematype",level:3},{value:"type ListDepFilesOption",id:"type-listdepfilesoption",level:2},{value:"type ListDepsOptions",id:"type-listdepsoptions",level:2},{value:"type Option",id:"type-option",level:2},{value:"func WithCode",id:"func-withcode",level:3},{value:"func WithDisableNone",id:"func-withdisablenone",level:3},{value:"func WithKFilenames",id:"func-withkfilenames",level:3},{value:"func WithOptions",id:"func-withoptions",level:3},{value:"func WithOverrides",id:"func-withoverrides",level:3},{value:"func WithPrintOverridesAST",id:"func-withprintoverridesast",level:3},{value:"func WithSettings",id:"func-withsettings",level:3},{value:"func WithSortKeys",id:"func-withsortkeys",level:3},{value:"func WithWorkDir",id:"func-withworkdir",level:3},{value:"type ValidateOptions",id:"type-validateoptions",level:2}],c={toc:o},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-api"},"Go API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import kcl "kcl-lang.io/kcl-go"\n')),(0,a.kt)("h2",{id:"kcl-go-sdk"},"KCL Go SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     kcl files   \u2502         \u2502   KCL-Go-API    \u2502           \u2502  KCLResultList  \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502  \u2502    1.k    \u2502  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.Get("a.b.c") \u2502\n\u2502  \u2502    2.k    \u2502  \u2502         \u2502  \u2502 Run(path) \u2502  \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\u2500\u2500\u2500\u2500\u2510    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502                 \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502    \u2502    \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2502    3.k    \u2502  \u2502    \u2502    \u2502                 \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.Get("k", &v) \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502    \u2502    \u2502                 \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502    \u251c\u2500\u2500\u2500\u25b6\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502                 \u2502\n\u2502  \u2502setting.yml\u2502  \u2502    \u2502    \u2502  \u2502RunFiles() \u2502  \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502    \u2502    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.JSONString() \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502    \u2502                 \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                       \u2502    \u2502                 \u2502           \u2502                 \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502    \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     Options     \u2502    \u2502    \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.YAMLString() \u2502\n\u2502WithOptions      \u2502    \u2502    \u2502  \u2502MustRun()  \u2502  \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502WithOverrides    \u2502\u2500\u2500\u2500\u2500\u2518    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502                 \u2502\n\u2502WithWorkDir      \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502WithDisableNone  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    const k_code = `\nname = "kcl"\nage = 1\n\ntwo = 2\n\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n\nx0 = Person {}\nx1 = Person {\n    age = 101\n}\n`\n\n    yaml := kcl.MustRun("testdata/main.k", kcl.WithCode(k_code)).First().YAMLString()\n    fmt.Println(yaml)\n\n    fmt.Println("----")\n\n    result := kcl.MustRun("./testdata/main.k").First()\n    fmt.Println(result.JSONString())\n\n    fmt.Println("----")\n    fmt.Println("x0.name:", result.Get("x0.name"))\n    fmt.Println("x1.age:", result.Get("x1.age"))\n\n    fmt.Println("----")\n\n    var person struct {\n        Name string\n        Age  int\n    }\n    fmt.Printf("person: %+v\\n", result.Get("x1", &person))\n}\n')))),(0,a.kt)("h2",{id:"index"},"Index"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#go-api"},"Go API"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#kcl-go-sdk"},"KCL Go SDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#index"},"Index")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#constants"},"Constants")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-formatcode"},"func FormatCode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-formatpath"},"func FormatPath")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-initkclvmpath"},"func InitKclvmPath")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-initkclvmruntime"},"func InitKclvmRuntime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-lintpath"},"func LintPath")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-listdepfiles"},"func ListDepFiles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-listdownstreamfiles"},"func ListDownStreamFiles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-listupstreamfiles"},"func ListUpStreamFiles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-overridefile"},"func OverrideFile")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-validatecode"},"func ValidateCode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#type-kclresult"},"type KCLResult")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#type-kclresultlist"},"type KCLResultList"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-mustrun"},"func MustRun")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-run"},"func Run")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-runfiles"},"func RunFiles")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#type-kcltype"},"type KclType"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-getschematype"},"func GetSchemaType")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#type-listdepfilesoption"},"type ListDepFilesOption")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#type-listdepsoptions"},"type ListDepsOptions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#type-option"},"type Option"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-withcode"},"func WithCode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-withdisablenone"},"func WithDisableNone")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-withkfilenames"},"func WithKFilenames")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-withoptions"},"func WithOptions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-withoverrides"},"func WithOverrides")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-withprintoverridesast"},"func WithPrintOverridesAST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-withsettings"},"func WithSettings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-withsortkeys"},"func WithSortKeys")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#func-withworkdir"},"func WithWorkDir")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#type-validateoptions"},"type ValidateOptions"))))),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("p",null,"KclvmAbiVersion is the current kclvm ABI version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"const KclvmAbiVersion = scripts.KclvmAbiVersion\n")),(0,a.kt)("h2",{id:"func-formatcode"},"func ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L110"},"FormatCode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func FormatCode(code interface{}) ([]byte, error)\n")),(0,a.kt)("p",null,"FormatCode returns the formatted code."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"{\n    out, err := kcl.FormatCode(`a  =  1+2`)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(string(out))\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"a = 1 + 2\n")))),(0,a.kt)("h2",{id:"func-formatpath"},"func ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L122"},"FormatPath")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func FormatPath(path string) (changedPaths []string, err error)\n")),(0,a.kt)("p",null,"FormatPath formats files from the given path path: if path is ","`",".","`"," or empty string, all KCL files in current directory will be formatted, not recursively if path is ","`","path/file.k","`",", the specified KCL file will be formatted if path is ","`","path/to/dir","`",", all KCL files in the specified dir will be formatted, not recursively if path is ","`","path/to/dir/...","`",", all KCL files in the specified dir will be formatted recursively"),(0,a.kt)("p",null,"the returned changedPaths are the changed file paths ","(","relative path",")"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    changedPaths, err := kcl.FormatPath("testdata/fmt")\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(changedPaths)\n}\n')))),(0,a.kt)("h2",{id:"func-initkclvmpath"},"func ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L54"},"InitKclvmPath")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func InitKclvmPath(kclvmRoot string)\n")),(0,a.kt)("p",null,"InitKclvmPath init kclvm path."),(0,a.kt)("h2",{id:"func-initkclvmruntime"},"func ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L59"},"InitKclvmRuntime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func InitKclvmRuntime(n int)\n")),(0,a.kt)("p",null,"InitKclvmRuntime init kclvm process."),(0,a.kt)("h2",{id:"func-lintpath"},"func ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L142"},"LintPath")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func LintPath(paths []string) (results []string, err error)\n")),(0,a.kt)("p",null,"LintPath lint files from the given path"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n\n    results, err := kcl.LintPath([]string{"testdata/lint/import.k"})\n    if err != nil {\n        log.Fatal(err)\n    }\n    for _, s := range results {\n        fmt.Println(s)\n    }\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Module 'a' is reimported multiple times\nModule 'a' imported but unused\n")))),(0,a.kt)("h2",{id:"func-listdepfiles"},"func ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L127"},"ListDepFiles")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func ListDepFiles(workDir string, opt *ListDepFilesOption) (files []string, err error)\n")),(0,a.kt)("p",null,"ListDepFiles return the depend files from the given path"),(0,a.kt)("h2",{id:"func-listdownstreamfiles"},"func ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L137"},"ListDownStreamFiles")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func ListDownStreamFiles(workDir string, opt *ListDepsOptions) ([]string, error)\n")),(0,a.kt)("p",null,"ListDownStreamFiles return a list of downstream depend files from the given changed path list."),(0,a.kt)("h2",{id:"func-listupstreamfiles"},"func ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L132"},"ListUpStreamFiles")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func ListUpStreamFiles(workDir string, opt *ListDepsOptions) (deps []string, err error)\n")),(0,a.kt)("p",null,"ListUpStreamFiles return a list of upstream depend files from the given path list"),(0,a.kt)("h2",{id:"func-overridefile"},"func ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L154"},"OverrideFile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func OverrideFile(file string, specs, importPaths []string) (bool, error)\n")),(0,a.kt)("p",null,"OverrideFile rewrites a file with override spec file: string. The File that need to be overridden specs: ","[","]","string. List of specs that need to be overridden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Each spec string satisfies the form: <pkgpath>:<field_path>=<filed_value> or <pkgpath>:<field_path>-\nWhen the pkgpath is '__main__', it can be omitted.\n")),(0,a.kt)("p",null,"importPaths. List of import statements that need to be added"),(0,a.kt)("h2",{id:"func-validatecode"},"func ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L159"},"ValidateCode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func ValidateCode(data, code string, opt *ValidateOptions) (ok bool, err error)\n")),(0,a.kt)("p",null,"ValidateCode validate data match code"),(0,a.kt)("h2",{id:"type-kclresult"},"type ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L47"},"KCLResult")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type KCLResult = kcl.KCLResult\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    const k_code = `\nname = "kcl"\nage = 1\n\ntwo = 2\n\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n\nx0 = Person {name = "kcl-go"}\nx1 = Person {age = 101}\n`\n\n    result := kcl.MustRun("testdata/main.k", kcl.WithCode(k_code)).First()\n\n    fmt.Println("x0.name:", result.Get("x0.name"))\n    fmt.Println("x1.age:", result.Get("x1.age"))\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"x0.name: kcl-go\nx1.age: 101\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example ('et_struct)"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    const k_code = `\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n    X: int = 2\n\nx = {\n    "a": Person {age = 101}\n    "b": 123\n}\n`\n\n    result := kcl.MustRun("testdata/main.k", kcl.WithCode(k_code)).First()\n\n    var person struct {\n        Name string\n        Age  int\n    }\n    fmt.Printf("person: %+v\\n", result.Get("x.a", &person))\n    fmt.Printf("person: %+v\\n", person)\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"person: &{Name:kcl Age:101}\nperson: {Name:kcl Age:101}\n")))),(0,a.kt)("h2",{id:"type-kclresultlist"},"type ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L48"},"KCLResultList")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type KCLResultList = kcl.KCLResultList\n")),(0,a.kt)("h3",{id:"func-mustrun"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L64"},"MustRun")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func MustRun(path string, opts ...Option) *KCLResultList\n")),(0,a.kt)("p",null,"MustRun is like Run but panics if return any error."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    yaml := kcl.MustRun("testdata/main.k", kcl.WithCode(`name = "kcl"`)).First().YAMLString()\n    fmt.Println(yaml)\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"name: kcl\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example (Raw Yaml)"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    const code = `\nb = 1\na = 2\n`\n    yaml := kcl.MustRun("testdata/main.k", kcl.WithCode(code)).GetRawYamlResult()\n    fmt.Println(yaml)\n\n    yaml_sorted := kcl.MustRun("testdata/main.k", kcl.WithCode(code), kcl.WithSortKeys(true)).GetRawYamlResult()\n    fmt.Println(yaml_sorted)\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"b: 1\na: 2\na: 2\nb: 1\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example (Schema Type)"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    const code = `\nschema Person:\n    name: str = ""\n\nx = Person()\n`\n    json := kcl.MustRun("testdata/main.k", kcl.WithCode(code)).First().JSONString()\n    fmt.Println(json)\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "x": {\n        "name": ""\n    }\n}\n')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example (Settings)"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    yaml := kcl.MustRun("./testdata/app0/kcl.yaml").First().YAMLString()\n    fmt.Println(yaml)\n}\n')))),(0,a.kt)("h3",{id:"func-run"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L69"},"Run")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func Run(path string, opts ...Option) (*KCLResultList, error)\n")),(0,a.kt)("p",null,"Run evaluates the KCL program with path and opts, then returns the object list."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example (Get Field)"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n\n    x, err := kcl.Run("./testdata/app0/kcl.yaml")\n    assert(err == nil, err)\n\n    fmt.Println(x.First().Get("deploy_topology.1.zone"))\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"R000A\n")))),(0,a.kt)("h3",{id:"func-runfiles"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L74"},"RunFiles")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func RunFiles(paths []string, opts ...Option) (*KCLResultList, error)\n")),(0,a.kt)("p",null,"RunFiles evaluates the KCL program with multi file path and opts, then returns the object list."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    result, _ := kcl.RunFiles([]string{"./testdata/app0/kcl.yaml"})\n    fmt.Println(result.First().YAMLString())\n}\n')))),(0,a.kt)("h2",{id:"type-kcltype"},"type ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L50"},"KclType")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type KclType = kcl.KclType\n")),(0,a.kt)("h3",{id:"func-getschematype"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L176"},"GetSchemaType")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func GetSchemaType(file, code, schemaName string) ([]*KclType, error)\n")),(0,a.kt)("p",null,"GetSchemaType returns schema types from a kcl file or code."),(0,a.kt)("p",null,"file: string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The kcl filename\n")),(0,a.kt)("p",null,"code: string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The kcl code string\n")),(0,a.kt)("p",null,"schema_name: string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The schema name got, when the schema name is empty, all schemas are returned.\n")),(0,a.kt)("h2",{id:"type-listdepfilesoption"},"type ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L45"},"ListDepFilesOption")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type ListDepFilesOption = list.Option\n")),(0,a.kt)("h2",{id:"type-listdepsoptions"},"type ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L44"},"ListDepsOptions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type ListDepsOptions = list.DepOptions\n")),(0,a.kt)("h2",{id:"type-option"},"type ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L43"},"Option")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Option = kcl.Option\n")),(0,a.kt)("h3",{id:"func-withcode"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L79"},"WithCode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithCode(codes ...string) Option\n")),(0,a.kt)("p",null,"WithCode returns a Option which hold a kcl source code list."),(0,a.kt)("h3",{id:"func-withdisablenone"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L97"},"WithDisableNone")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithDisableNone(disableNone bool) Option\n")),(0,a.kt)("p",null,"WithDisableNone returns a Option which hold a disable none switch."),(0,a.kt)("h3",{id:"func-withkfilenames"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L82"},"WithKFilenames")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithKFilenames(filenames ...string) Option\n")),(0,a.kt)("p",null,"WithKFilenames returns a Option which hold a filenames list."),(0,a.kt)("h3",{id:"func-withoptions"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L85"},"WithOptions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithOptions(key_value_list ...string) Option\n")),(0,a.kt)("p",null,"WithOptions returns a Option which hold a key=value pair list for option function."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{\n    const code = `\nname = option("name")\nage = option("age")\n`\n    x, err := kcl.Run("hello.k", kcl.WithCode(code),\n        kcl.WithOptions("name=kcl", "age=1"),\n    )\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Println(x.First().YAMLString())\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"age: 1\nname: kcl\n")))),(0,a.kt)("h3",{id:"func-withoverrides"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L88"},"WithOverrides")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithOverrides(override_list ...string) Option\n")),(0,a.kt)("p",null,"WithOverrides returns a Option which hold a override list."),(0,a.kt)("h3",{id:"func-withprintoverridesast"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L100"},"WithPrintOverridesAST")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithPrintOverridesAST(printOverridesAST bool) Option\n")),(0,a.kt)("p",null,"WithPrintOverridesAST returns a Option which hold a printOverridesAST switch."),(0,a.kt)("h3",{id:"func-withsettings"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L91"},"WithSettings")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithSettings(filename string) Option\n")),(0,a.kt)("p",null,"WithSettings returns a Option which hold a settings file."),(0,a.kt)("h3",{id:"func-withsortkeys"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L105"},"WithSortKeys")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithSortKeys(sortKeys bool) Option\n")),(0,a.kt)("p",null,"WithSortKeys returns a Option which hold a sortKeys switch."),(0,a.kt)("h3",{id:"func-withworkdir"},"func ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L94"},"WithWorkDir")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithWorkDir(workDir string) Option\n")),(0,a.kt)("p",null,"WithWorkDir returns a Option which hold a work dir."),(0,a.kt)("h2",{id:"type-validateoptions"},"type ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L46"},"ValidateOptions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type ValidateOptions = validate.ValidateOptions\n")))}m.isMDXComponent=!0}}]);