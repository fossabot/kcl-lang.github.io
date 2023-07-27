"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(o,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:3},s="YAML",l={unversionedId:"user_docs/support/faq-yaml",id:"user_docs/support/faq-yaml",title:"YAML",description:"1. What is the difference between single and double quote YAML strings?",source:"@site/docs/user_docs/support/faq-yaml.md",sourceDirName:"user_docs/support",slug:"/user_docs/support/faq-yaml",permalink:"/docs/next/user_docs/support/faq-yaml",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/support/faq-yaml.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1690462472,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"KCL",permalink:"/docs/next/user_docs/support/faq-kcl"},next:{title:"Command Line Tool",permalink:"/docs/next/user_docs/support/faq-cli"}},o={},p=[{value:"1. What is the difference between single and double quote YAML strings?",id:"1-what-is-the-difference-between-single-and-double-quote-yaml-strings",level:2},{value:"2. What is the meaning of symbols such as | - + &gt; in YAML?",id:"2-what-is-the-meaning-of-symbols-such-as------in-yaml",level:2},{value:"3. What is the meaning of numbers that appear after symbols | - + &gt; such as |1 and |2 in YAML?",id:"3-what-is-the-meaning-of-numbers-that-appear-after-symbols------such-as-1-and-2-in-yaml",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"yaml"},"YAML"),(0,i.kt)("h2",{id:"1-what-is-the-difference-between-single-and-double-quote-yaml-strings"},"1. What is the difference between single and double quote YAML strings?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"YAML double-quoted strings are the only style that can express arbitrary strings, by using ",(0,i.kt)("inlineCode",{parentName:"li"},"\\")," escape characters, such as ",(0,i.kt)("inlineCode",{parentName:"li"},'\\"')," to escape double quotes ",(0,i.kt)("inlineCode",{parentName:"li"},'"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},"\\\\")," to escape backslashes ",(0,i.kt)("inlineCode",{parentName:"li"},"\\"),", and a single backslash ",(0,i.kt)("inlineCode",{parentName:"li"},"\\")," can be used as a continuation character for double-quoted strings."),(0,i.kt)("li",{parentName:"ul"},"YAML single-quoted strings differ from YAML double-quoted strings in that ",(0,i.kt)("inlineCode",{parentName:"li"},"\\")," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"')," can be used freely without escaping, but two single-quotes ",(0,i.kt)("inlineCode",{parentName:"li"},"''")," are used to escape single-quote ",(0,i.kt)("inlineCode",{parentName:"li"},"'")," characters.")),(0,i.kt)("p",null,"For the following example, the contents of the three string variables are the same."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'string1: \'here \'\' s to "quotes"\'\nstring2: "here\'s to \\"quotes\\""\nstring3: here\'s to "quotes"\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: KCL's strategy for outputting YAML strings is to output unquoted strings or double-quoted strings preferentially when single quotes appear in the string content, and output single-quoted strings in other cases to avoid the burden of understanding.")),(0,i.kt)("p",null,"For more details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.1/"},"YAML Spec v1.2")),(0,i.kt)("h2",{id:"2-what-is-the-meaning-of-symbols-such-as------in-yaml"},"2. What is the meaning of symbols such as | - + > in YAML?"),(0,i.kt)("p",null,"When using KCL multi-line strings (triple quote strings), the output YAML often carries some special tokens, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"|"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", etc. These tokens usually are the representation method of YAML multi-line string, such as the following KCL code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'data = """This is a KCL multi line string (the first line)\nThis is a KCL multi line string (the second line)\nThis is a KCL multi line string (the third line)\n\n\n"""\nvar = 1\n')),(0,i.kt)("p",null,"The output YAML is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"data: |+\n  This is a KCL multi line string (the first line)\n  This is a KCL multi line string (the second line)\n  This is a KCL multi line string (the third line)\n\n\nvar: 1\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"|")," represents ",(0,i.kt)("strong",{parentName:"li"},"block style"),", which is used to represent a multi-line string, where all newlines in the string represent the real newlines."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},">")," represents ",(0,i.kt)("strong",{parentName:"li"},"folding style"),", in which all newlines in the string will be replaced by spaces."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," are used to control the use of newlines at the end of strings. The default is to keep a single newline at the end of the string. If we want to remove all newlines, we can put a ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," after the style indicator ",(0,i.kt)("inlineCode",{parentName:"li"},"|")," or ",(0,i.kt)("inlineCode",{parentName:"li"},">"),". If we want to keep the newline at the end, we need to put a ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," after ",(0,i.kt)("inlineCode",{parentName:"li"},"|")," or ",(0,i.kt)("inlineCode",{parentName:"li"},">"),".")),(0,i.kt)("p",null,"For more details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://yaml-multiline.info/"},"YAML Multiline String")," and ",(0,i.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.1/"},"YAML Spec v1.2")),(0,i.kt)("h2",{id:"3-what-is-the-meaning-of-numbers-that-appear-after-symbols------such-as-1-and-2-in-yaml"},"3. What is the meaning of numbers that appear after symbols | - + > such as |1 and |2 in YAML?"),(0,i.kt)("p",null,"Numbers represent ",(0,i.kt)("strong",{parentName:"p"},"explicit indentation indicators")," in YAML. For long strings in YAML, YAML usually the first non-blank line determines the indentation level of the string, and when the first non-blank line is preceded by a non-leading character, such as a newline, we must use ",(0,i.kt)("strong",{parentName:"p"},"explicit indent indicators")," to specify the indent level of the content, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"|1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"|2")," etc."),(0,i.kt)("p",null,"For example, for the following KCL code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'longStringStartWithEndline = """\nThis is the second line\nThis is the third line\n"""\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"longStringStartWithEndline: |2\n\n  This is the second line\n  This is the third line\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Writing long strings from the first line.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'longString = """This is the second line\nThis is the third line\n"""\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Writing long strings with line continuation characters.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'longString = """\\\nThis is the second line\nThis is the third line\n"""\n')),(0,i.kt)("p",null,"The YAML output by the above two methods is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"longString: |\n  This is the second line\n  This is the third line\n")),(0,i.kt)("p",null,"For more details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.1/"},"YAML Spec v1.2")))}c.isMDXComponent=!0}}]);