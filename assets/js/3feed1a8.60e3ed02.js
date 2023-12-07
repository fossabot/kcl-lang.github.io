"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[62096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(o,".").concat(h)]||d[h]||c[h]||r;return n?i.createElement(m,s(s({ref:t},u),{},{components:n})):i.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:3},s="YAML",l={unversionedId:"user_docs/support/faq-yaml",id:"version-0.5.0/user_docs/support/faq-yaml",title:"YAML",description:"1. What is the difference between single and double quote YAML strings?",source:"@site/versioned_docs/version-0.5.0/user_docs/support/faq-yaml.md",sourceDirName:"user_docs/support",slug:"/user_docs/support/faq-yaml",permalink:"/docs/0.5.0/user_docs/support/faq-yaml",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/user_docs/support/faq-yaml.md",tags:[],version:"0.5.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1701933583,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"KCL",permalink:"/docs/0.5.0/user_docs/support/faq-kcl"},next:{title:"Command Line Tool",permalink:"/docs/0.5.0/user_docs/support/faq-cli"}},o={},p=[{value:"1. What is the difference between single and double quote YAML strings?",id:"1-what-is-the-difference-between-single-and-double-quote-yaml-strings",level:2},{value:"2. What is the meaning of symbols such as | - + &gt; in YAML?",id:"2-what-is-the-meaning-of-symbols-such-as------in-yaml",level:2},{value:"3. What is the meaning of numbers that appear after symbols | - + &gt; such as |1 and |2 in YAML?",id:"3-what-is-the-meaning-of-numbers-that-appear-after-symbols------such-as-1-and-2-in-yaml",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"yaml"},"YAML"),(0,a.kt)("h2",{id:"1-what-is-the-difference-between-single-and-double-quote-yaml-strings"},"1. What is the difference between single and double quote YAML strings?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"YAML double-quoted strings are the only style that can express arbitrary strings, by using ",(0,a.kt)("inlineCode",{parentName:"li"},"\\")," escape characters, such as ",(0,a.kt)("inlineCode",{parentName:"li"},'\\"')," to escape double quotes ",(0,a.kt)("inlineCode",{parentName:"li"},'"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\\\\")," to escape backslashes ",(0,a.kt)("inlineCode",{parentName:"li"},"\\"),", and a single backslash ",(0,a.kt)("inlineCode",{parentName:"li"},"\\")," can be used as a continuation character for double-quoted strings."),(0,a.kt)("li",{parentName:"ul"},"YAML single-quoted strings differ from YAML double-quoted strings in that ",(0,a.kt)("inlineCode",{parentName:"li"},"\\")," and ",(0,a.kt)("inlineCode",{parentName:"li"},'"')," can be used freely without escaping, but two single-quotes ",(0,a.kt)("inlineCode",{parentName:"li"},"''")," are used to escape single-quote ",(0,a.kt)("inlineCode",{parentName:"li"},"'")," characters.")),(0,a.kt)("p",null,"For the following example, the contents of the three string variables are the same."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"string1: 'here '' s to \"quotes\"'\nstring2: 'here''s to \"quotes\"'\nstring3: here's to \"quotes\"\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: KCL's strategy for outputting YAML strings is to output unquoted strings or double-quoted strings preferentially when single quotes appear in the string content, and output single-quoted strings in other cases to avoid the burden of understanding.")),(0,a.kt)("p",null,"For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.1/"},"YAML Spec v1.2")),(0,a.kt)("h2",{id:"2-what-is-the-meaning-of-symbols-such-as------in-yaml"},"2. What is the meaning of symbols such as | - + > in YAML?"),(0,a.kt)("p",null,"When using KCL multi-line strings (triple quote strings), the output YAML often carries some special tokens, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"|"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,a.kt)("inlineCode",{parentName:"p"},">"),", etc. These tokens usually are the representation method of YAML multi-line string, such as the following KCL code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'data = """This is a KCL multi line string (the first line)\nThis is a KCL multi line string (the second line)\nThis is a KCL multi line string (the third line)\n\n\n"""\nvar = 1\n')),(0,a.kt)("p",null,"The output YAML is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"data: |+\n  This is a KCL multi line string (the first line)\n  This is a KCL multi line string (the second line)\n  This is a KCL multi line string (the third line)\n\n\nvar: 1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"|")," represents ",(0,a.kt)("strong",{parentName:"li"},"block style"),", which is used to represent a multi-line string, where all newlines in the string represent the real newlines."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">")," represents ",(0,a.kt)("strong",{parentName:"li"},"folding style"),", in which all newlines in the string will be replaced by spaces."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," are used to control the use of newlines at the end of strings. The default is to keep a single newline at the end of the string. If we want to remove all newlines, we can put a ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," after the style indicator ",(0,a.kt)("inlineCode",{parentName:"li"},"|")," or ",(0,a.kt)("inlineCode",{parentName:"li"},">"),". If we want to keep the newline at the end, we need to put a ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," after ",(0,a.kt)("inlineCode",{parentName:"li"},"|")," or ",(0,a.kt)("inlineCode",{parentName:"li"},">"),".")),(0,a.kt)("p",null,"For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://yaml-multiline.info/"},"YAML Multiline String")," and ",(0,a.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.1/"},"YAML Spec v1.2")),(0,a.kt)("h2",{id:"3-what-is-the-meaning-of-numbers-that-appear-after-symbols------such-as-1-and-2-in-yaml"},"3. What is the meaning of numbers that appear after symbols | - + > such as |1 and |2 in YAML?"),(0,a.kt)("p",null,"Numbers represent ",(0,a.kt)("strong",{parentName:"p"},"explicit indentation indicators")," in YAML. For long strings in YAML, YAML usually the first non-blank line determines the indentation level of the string, and when the first non-blank line is preceded by a non-leading character, such as a newline, we must use ",(0,a.kt)("strong",{parentName:"p"},"explicit indent indicators")," to specify the indent level of the content, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"|1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"|2")," etc."),(0,a.kt)("p",null,"For example, for the following KCL code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'longStringStartWithNewline = """\nThis is the second line\nThis is the third line\n"""\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"longStringStartWithNewline: |2\n\n  This is the second line\n  This is the third line\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Writing long strings from the first line.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'longString = """This is the second line\nThis is the third line\n"""\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Writing long strings with line continuation characters.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'longString = """\\\nThis is the second line\nThis is the third line\n"""\n')),(0,a.kt)("p",null,"The YAML output by the above two methods is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"longString: |\n  This is the second line\n  This is the third line\n")),(0,a.kt)("p",null,"For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.1/"},"YAML Spec v1.2")))}c.isMDXComponent=!0}}]);