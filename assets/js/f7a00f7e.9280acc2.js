"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const l={title:"Lexical",linkTitle:"Lexical",type:"docs",weight:2,description:"Lexical"},a=void 0,o={unversionedId:"reference/lang/spec/lexical",id:"version-0.5.2/reference/lang/spec/lexical",title:"Lexical",description:"Lexical",source:"@site/versioned_docs/version-0.5.2/reference/lang/spec/lexical.md",sourceDirName:"reference/lang/spec",slug:"/reference/lang/spec/lexical",permalink:"/docs/0.5.2/reference/lang/spec/lexical",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/reference/lang/spec/lexical.md",tags:[],version:"0.5.2",lastUpdatedBy:"peefy",lastUpdatedAt:1698928861,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{title:"Lexical",linkTitle:"Lexical",type:"docs",weight:2,description:"Lexical"},sidebar:"reference",previous:{title:"KCL Spec",permalink:"/docs/0.5.2/reference/lang/spec/kcl-spec"},next:{title:"Modules",permalink:"/docs/0.5.2/reference/lang/spec/modules"}},s={},c=[{value:"Lexical Conventions",id:"lexical-conventions",level:2},{value:"Grammar Notation",id:"grammar-notation",level:2},{value:"Source File Encoding",id:"source-file-encoding",level:2},{value:"Line Structure",id:"line-structure",level:2},{value:"Explicit Line Joining",id:"explicit-line-joining",level:3},{value:"Implicit Line Joining",id:"implicit-line-joining",level:3},{value:"Blank Lines",id:"blank-lines",level:3},{value:"Indentation",id:"indentation",level:3},{value:"Comments",id:"comments",level:3},{value:"Identifiers and Keywords",id:"identifiers-and-keywords",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Literals",id:"literals",level:3},{value:"String Literals",id:"string-literals",level:3},{value:"Numeric Literals",id:"numeric-literals",level:3},{value:"Operators and Delimiters",id:"operators-and-delimiters",level:2},{value:"Operators",id:"operators",level:3},{value:"Delimiters",id:"delimiters",level:3},{value:"Reference",id:"reference",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"lexical-conventions"},"Lexical Conventions"),(0,r.kt)("p",null,"This chapter covers the KCL lexical conventions including grammar notation, lines, comments and tokens."),(0,r.kt)("h2",{id:"grammar-notation"},"Grammar Notation"),(0,r.kt)("p",null,"The syntax is specified using Extended Backus-Naur Form (EBNF), porting to lark parser (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lark-parser/lark"},"https://github.com/lark-parser/lark"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'- name  grammar production\n- NAME  lexical token\n- "x"   lexical token\n- ()    grouping\n- |     alternation\n- []    option (0 or 1 times)\n- ?     option (0 or 1 times)\n- *     repetition (0 to n times)\n- +     repetition (1 to n times)\n')),(0,r.kt)("h2",{id:"source-file-encoding"},"Source File Encoding"),(0,r.kt)("p",null,"KCL source code is Unicode text encoded in ",(0,r.kt)("strong",{parentName:"p"},"UTF-8"),"."),(0,r.kt)("p",null,"The following are basic Unicode elements, which will be used in literal notations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"newline           ::= U+000A\nquota             ::= singlequote | doublequote\nsinglequote       ::= U+0027\ndoublequote       ::= U+0022\nsource character  ::= Unicode code point\n")),(0,r.kt)("p",null,"The form a...b in literal notations represents the set of characters from a through b."),(0,r.kt)("h2",{id:"line-structure"},"Line Structure"),(0,r.kt)("p",null,"The line structure of KCL programs is equivalent to that of Python."),(0,r.kt)("p",null,"A KCL program is divided into a number of logical lines. Each logical line consists of one or more physical lines."),(0,r.kt)("p",null,"A token named ",(0,r.kt)("inlineCode",{parentName:"p"},"NEWLINE")," is used to divide logical lines."),(0,r.kt)("p",null,"A physical line is a sequence of characters end with a line termination sequence, which can be the ASCII LF (linefeed) character, the ASCII sequence CR LF (return followed by linefeed), or the ASCII CR (return) character."),(0,r.kt)("h3",{id:"explicit-line-joining"},"Explicit Line Joining"),(0,r.kt)("p",null,"To join multiple physical lines into one logical line, the ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," character can be used. The character should be the last none-space character in each physical line except the very last line."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"note")),(0,r.kt)("p",{parentName:"blockquote"},"Any character except the ASCII space, tab (",(0,r.kt)("inlineCode",{parentName:"p"},"\\t"),") and formfeed (",(0,r.kt)("inlineCode",{parentName:"p"},"\\f"),") is considered a none-space character.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A line ending in a backslash cannot carry a comment (, which will be introduced shortly afterwards)."),(0,r.kt)("li",{parentName:"ul"},"A backslash does not continue a comment."),(0,r.kt)("li",{parentName:"ul"},"A backslash does not continue a token except for string literals (i.e., tokens other than string literals cannot be split across physical lines using a backslash)."),(0,r.kt)("li",{parentName:"ul"},"A backslash is illegal elsewhere on a line outside a string literal.")),(0,r.kt)("h3",{id:"implicit-line-joining"},"Implicit Line Joining"),(0,r.kt)("p",null,"Expressions in parentheses, square brackets or curly braces can be split over more than one physical line without using backslashes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implicitly continued lines can carry comments."),(0,r.kt)("li",{parentName:"ul"},"The indentation of the continuation lines is not important."),(0,r.kt)("li",{parentName:"ul"},"Blank continuation lines are allowed."),(0,r.kt)("li",{parentName:"ul"},"There is no ",(0,r.kt)("inlineCode",{parentName:"li"},"NEWLINE")," token between implicit continuation lines."),(0,r.kt)("li",{parentName:"ul"},"Implicitly continued lines can also occur within triple-quoted strings (see below); in that case they cannot carry comments.")),(0,r.kt)("h3",{id:"blank-lines"},"Blank Lines"),(0,r.kt)("h3",{id:"indentation"},"Indentation"),(0,r.kt)("h3",{id:"comments"},"Comments"),(0,r.kt)("p",null,"Starting with a ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," character that is not part of a string literal is a comment. A comment ends at the end of the physical line."),(0,r.kt)("p",null,"A comment signifies the end of the logical line unless the implicit line joining rules are invoked."),(0,r.kt)("p",null,"Comments are ignored by the syntax."),(0,r.kt)("h3",{id:"identifiers-and-keywords"},"Identifiers and Keywords"),(0,r.kt)("p",null,"Identifiers (also referred to as names) are described by the following lexical definitions."),(0,r.kt)("p",null,"Within the ASCII range (from ",(0,r.kt)("inlineCode",{parentName:"p"},"U+0001")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"U+007F"),"), the valid characters for identifiers are the uppercase and lowercase letters ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," through ",(0,r.kt)("inlineCode",{parentName:"p"},"Z"),", the underscore ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," and, except for the first character, the digits ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," through ",(0,r.kt)("inlineCode",{parentName:"p"},"9"),"."),(0,r.kt)("p",null,"Identifiers are unlimited in length. The case is significant."),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("p",null,"The following identifiers are used as reserved words, or keywords of the language, and cannot be used as ordinary identifiers. They must be spelled exactly as written here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True       False      None        Undefined   import\nand        or         in          is          not\nas         if         else        elif        for\nschema     mixin      protocol    check       assert\nall        any        map         filter      lambda\nrule\n")),(0,r.kt)("p",null,"The following tokens are not used, but they are reserved as possible future keywords:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pass       return     validate   rule        flow\ndef        del        raise      except      try\nfinally    while      from       with        yield\nglobal     nonlocal   struct     class       final\n")),(0,r.kt)("h3",{id:"literals"},"Literals"),(0,r.kt)("p",null,"Literals are notations for constant values of some built-in types."),(0,r.kt)("h3",{id:"string-literals"},"String Literals"),(0,r.kt)("p",null,"String literals are described by the following lexical definitions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'stringliteral   ::=  [stringprefix](shortstring | longstring)\nstringprefix    ::=  "r" | "R"\nshortstring     ::=  "\'" shortstringitem* "\'" | \'"\' shortstringitem* \'"\'\nlongstring      ::=  "\'\'\'" longstringitem* "\'\'\'" | \'"""\' longstringitem* \'"""\'\nshortstringitem ::=  shortstringchar | stringescapeseq\nlongstringitem  ::=  longstringchar | stringescapeseq\nshortstringchar ::=  <any source character except "\\" or newline or the quote>\nlongstringchar  ::=  <any source character except "\\">\nstringescapeseq ::=  "\\" <any source character>\n')),(0,r.kt)("p",null,"Multiple adjacent string or bytes literals (delimited by whitespace),possibly using different quoting conventions, are allowed, and their meaning is the same as their concatenation."),(0,r.kt)("h3",{id:"numeric-literals"},"Numeric Literals"),(0,r.kt)("p",null,"There are two types of numeric literals: integers and floating-point numbers."),(0,r.kt)("p",null,"Integer literals are described by the following lexical definitions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'integer      ::=  decinteger | bininteger | octinteger | hexinteger\ndecinteger   ::=  nonzerodigit (["_"] digit)* | "0"+ (["_"] "0")*\nbininteger   ::=  "0" ("b" | "B") (["_"] bindigit)+\noctinteger   ::=  "0" ("o" | "O") (["_"] octdigit)+\nhexinteger   ::=  "0" ("x" | "X") (["_"] hexdigit)+\nnonzerodigit ::=  "1"..."9"\ndigit        ::=  "0"..."9"\nbindigit     ::=  "0" | "1"\noctdigit     ::=  "0"..."7"\nhexdigit     ::=  digit | "a"..."f" | "A"..."F"\n')),(0,r.kt)("p",null,"Floating-point literals are described by the following lexical definitions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'floatnumber   ::=  pointfloat | exponentfloat\npointfloat    ::=  [digitpart] fraction | digitpart "."\nexponentfloat ::=  (digitpart | pointfloat) exponent\ndigitpart     ::=  digit (["_"] digit)*\nfraction      ::=  "." digitpart\nexponent      ::=  ("e" | "E") ["+" | "-"] digitpart\n')),(0,r.kt)("h2",{id:"operators-and-delimiters"},"Operators and Delimiters"),(0,r.kt)("h3",{id:"operators"},"Operators"),(0,r.kt)("p",null,"The following tokens are operators:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"+       -       *       **      /       //      %\n<<      >>      &       |       ^       <       >\n~       <=      >=      ==      !=      @\n")),(0,r.kt)("h3",{id:"delimiters"},"Delimiters"),(0,r.kt)("p",null,"The following tokens serve as delimiters in the grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"(       )       [       ]       {       }\n,       :       .       ;       =       +=\n-=      *=      **=     /=      //=     %=      \n<<=     >>=     &=      |=      ^=\n")),(0,r.kt)("p",null,"The period can also occur in floating-point literals."),(0,r.kt)("p",null,"The following printing ASCII characters have special meaning as part of other tokens or are otherwise significant to the lexical analyzer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"'       \"       #       \\\n")),(0,r.kt)("p",null,"The following printing ASCII characters are not used in KCL. Their occurrence outside string literals and comments is an unconditional error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"?       `\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"Since the lexical conventions of KCL is very similar to that of Python, we use the following document as the reference when writing this chapter."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/reference/lexical_analysis.html"},"https://docs.python.org/3/reference/lexical_analysis.html"))))}u.isMDXComponent=!0}}]);