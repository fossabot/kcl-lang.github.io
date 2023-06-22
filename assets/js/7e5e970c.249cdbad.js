"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),f=l,c=u["".concat(p,".").concat(f)]||u[f]||s[f]||a;return n?i.createElement(c,r(r({ref:t},m),{},{components:n})):i.createElement(c,r({ref:t},m))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(87462),l=(n(67294),n(3905));const a={title:"math",linkTitle:"math",type:"docs",description:"math system module",weight:100},r=void 0,o={unversionedId:"reference/model/math",id:"reference/model/math",title:"math",description:"math system module",source:"@site/docs/reference/model/math.md",sourceDirName:"reference/model",slug:"/reference/model/math",permalink:"/docs/next/reference/model/math",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/docs/reference/model/math.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1687453636,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"math",linkTitle:"math",type:"docs",description:"math system module",weight:100},sidebar:"reference",previous:{title:"manifests",permalink:"/docs/next/reference/model/manifests"},next:{title:"net",permalink:"/docs/next/reference/model/net"}},p={},d=[{value:"ceil",id:"ceil",level:2},{value:"factorial",id:"factorial",level:2},{value:"floor",id:"floor",level:2},{value:"gcd",id:"gcd",level:2},{value:"isfinite",id:"isfinite",level:2},{value:"isinf",id:"isinf",level:2},{value:"isnan",id:"isnan",level:2},{value:"modf",id:"modf",level:2},{value:"exp",id:"exp",level:2},{value:"expm1",id:"expm1",level:2},{value:"log",id:"log",level:2},{value:"log1p",id:"log1p",level:2},{value:"log2",id:"log2",level:2},{value:"log10",id:"log10",level:2},{value:"pow",id:"pow",level:2},{value:"sqrt",id:"sqrt",level:2}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ceil"},"ceil"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ceil(x) -> int")),(0,l.kt)("p",null,"Return the ceiling of ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," as an Integral. This is the smallest integer >= x."),(0,l.kt)("h2",{id:"factorial"},"factorial"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"factorial(x) -> int")),(0,l.kt)("p",null,"Return ",(0,l.kt)("inlineCode",{parentName:"p"},"x!"),". Raise a error if ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is negative or non-integral."),(0,l.kt)("h2",{id:"floor"},"floor"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"floor(x) -> int")),(0,l.kt)("p",null,"Return the floor of ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," as an Integral. This is the largest integer <= x."),(0,l.kt)("h2",{id:"gcd"},"gcd"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gcd(a: int, b: int) -> int")),(0,l.kt)("p",null,"Return the greatest common divisor of ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")),(0,l.kt)("h2",{id:"isfinite"},"isfinite"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"isfinite(x) -> bool")),(0,l.kt)("p",null,"Return ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is neither an infinity nor a ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," otherwise."),(0,l.kt)("h2",{id:"isinf"},"isinf"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"isinf(x) -> bool")),(0,l.kt)("p",null,"Return ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is a positive or negative infinity, and ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," otherwise."),(0,l.kt)("h2",{id:"isnan"},"isnan"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"isnan(x) -> bool")),(0,l.kt)("p",null,"Return ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is a ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN")," (not a number), and ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," otherwise."),(0,l.kt)("h2",{id:"modf"},"modf"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"modf(x) -> List[float, float]")),(0,l.kt)("p",null,"Return the fractional and integer parts of ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),". Both results carry the sign of ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and are floats."),(0,l.kt)("h2",{id:"exp"},"exp"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"exp(x) -> float")),(0,l.kt)("p",null,"Return ",(0,l.kt)("inlineCode",{parentName:"p"},"e")," raised to the power of ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,l.kt)("h2",{id:"expm1"},"expm1"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"expm1(x) -> float")),(0,l.kt)("p",null,"Return ",(0,l.kt)("inlineCode",{parentName:"p"},"exp(x) - 1"),". This function avoids the loss of precision involved in the direct evaluation of ",(0,l.kt)("inlineCode",{parentName:"p"},"exp(x) - 1")," for small ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,l.kt)("h2",{id:"log"},"log"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"log(x) -> float")),(0,l.kt)("p",null,"Return the logarithm of ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," to the base ",(0,l.kt)("inlineCode",{parentName:"p"},"e"),"."),(0,l.kt)("h2",{id:"log1p"},"log1p"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"log1p(x) -> float")),(0,l.kt)("p",null,"Return the natural logarithm of ",(0,l.kt)("inlineCode",{parentName:"p"},"1+x")," (base ",(0,l.kt)("inlineCode",{parentName:"p"},"e"),"). The result is computed in a way which is accurate for ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," near zero."),(0,l.kt)("h2",{id:"log2"},"log2"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"log2(x) -> float"),"\nReturn the base 2 logarithm of ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,l.kt)("h2",{id:"log10"},"log10"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"log10(x) -> float")),(0,l.kt)("p",null,"Return the base 10 logarithm of ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,l.kt)("h2",{id:"pow"},"pow"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pow(x, y) -> float")),(0,l.kt)("p",null,"Return ",(0,l.kt)("inlineCode",{parentName:"p"},"x**y")," (",(0,l.kt)("inlineCode",{parentName:"p"},"x")," to the power of ",(0,l.kt)("inlineCode",{parentName:"p"},"y"),")."),(0,l.kt)("h2",{id:"sqrt"},"sqrt"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sqrt(x) -> float")),(0,l.kt)("p",null,"Return the square root of ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"."))}s.isMDXComponent=!0}}]);