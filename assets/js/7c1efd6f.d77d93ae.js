"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=s,g=d["".concat(o,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const r={title:"Statements",linkTitle:"Statements",type:"docs",weight:2,description:"Statements"},i=void 0,l={unversionedId:"reference/lang/spec/statements",id:"reference/lang/spec/statements",title:"Statements",description:"Statements",source:"@site/docs/reference/lang/spec/statements.md",sourceDirName:"reference/lang/spec",slug:"/reference/lang/spec/statements",permalink:"/docs/next/reference/lang/spec/statements",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/docs/reference/lang/spec/statements.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1687453636,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Statements",linkTitle:"Statements",type:"docs",weight:2,description:"Statements"},sidebar:"reference",previous:{title:"Schema",permalink:"/docs/next/reference/lang/spec/schema"},next:{title:"Variables",permalink:"/docs/next/reference/lang/spec/variables"}},o={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Small Statements",id:"small-statements",level:3},{value:"Assignment Statements",id:"assignment-statements",level:4},{value:"Expression Statements",id:"expression-statements",level:4},{value:"Import Statements",id:"import-statements",level:4},{value:"Assert Statements",id:"assert-statements",level:4},{value:"Conditional Statements",id:"conditional-statements",level:4},{value:"Schema Statements",id:"schema-statements",level:4}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,"In KCL, statements consist of small statements and compound statements. The syntax is the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bnf"},"preamble_statement: preamble_small_stmt | preamble_compound_stmt\npreamble_small_stmt: (small_stmt | import_stmt) NEWLINE\npreamble_compound_stmt: compound_stmt | schema_stmt\nstatement: small_stmt NEWLINE | compound_stmt\ncompound_stmt: if_stmt\nsmall_stmt: assign_stmt | expr_stmt | assert_stmt\n")),(0,s.kt)("p",null,"The preamble statement is used to define the module level statements, consist of ",(0,s.kt)("inlineCode",{parentName:"p"},"statement"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"import_stmt"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"schema_stmt"),". The statement is used to define the block level statements, which are used in the ",(0,s.kt)("inlineCode",{parentName:"p"},"if")," statement and ",(0,s.kt)("inlineCode",{parentName:"p"},"schema")," statement."),(0,s.kt)("h3",{id:"small-statements"},"Small Statements"),(0,s.kt)("p",null,"A small statement is comprised of a single logical line. Multiple statements in one-line are not allowed."),(0,s.kt)("h4",{id:"assignment-statements"},"Assignment Statements"),(0,s.kt)("p",null,"Generally, assign_stmt is divided into assignment and augmented assignment. The syntax is the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bnf"},'assign_stmt: target_primary ("=" target_primary)* "=" test | target_primary augassign test\naugassign: "+=" | "-=" | "*=" | "**=" | "/=" | "//=" | "%=" | "&=" | "|=" | "^=" | "<<=" | ">>=" | "or" | "and"\ntarget_primary: identifier | target_primary DOT identifier\n')),(0,s.kt)("p",null,"An assignment statement has the form ",(0,s.kt)("inlineCode",{parentName:"p"},"lhs = rhs"),". It evaluates the expression on the right-hand side then assigns its value (or values) to the variable (or variables) on the left-hand side."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"target_primary")," on the left-hand side is an ",(0,s.kt)("inlineCode",{parentName:"p"},"identifier")," or an ",(0,s.kt)("inlineCode",{parentName:"p"},"identifier")," followed by select dots."),(0,s.kt)("p",null,"Note: When using ",(0,s.kt)("strong",{parentName:"p"},"target_primary")," will cause collisions, use ",(0,s.kt)("strong",{parentName:"p"},"primary_expr")," as an alternative."),(0,s.kt)("p",null,"Examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'k = 1\na.b = "a.b"\n')),(0,s.kt)("p",null,"To keep it simple, the compound target is not supported as ",(0,s.kt)("strong",{parentName:"p"},"target_primary"),"."),(0,s.kt)("p",null,"The right value of an assignment statement is a conditional expression, which is discussed separately."),(0,s.kt)("p",null,"An augmented assignment, which has the form ",(0,s.kt)("inlineCode",{parentName:"p"},"lhs op= rhs")," updates the variable ",(0,s.kt)("inlineCode",{parentName:"p"},"lhs")," by applying a binary arithmetic operator op (one of +, -, *, /, //, %, &, |, ^, <<, >>) to the previous value of ",(0,s.kt)("inlineCode",{parentName:"p"},"lhs")," and the value of ",(0,s.kt)("inlineCode",{parentName:"p"},"rhs"),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"target_primary")," on the left-hand side is the same as assignment statement. Examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'_x -= 1\n_filename += ".k"\n')),(0,s.kt)("p",null,"There is no concept of in-place modification in KCL. The ",(0,s.kt)("inlineCode",{parentName:"p"},"augassign")," statement will modify a copy of the ",(0,s.kt)("strong",{parentName:"p"},"target_primary")," and assign the copy to ",(0,s.kt)("strong",{parentName:"p"},"target_primary"),"."),(0,s.kt)("p",null,"In particular, in KCL, the ",(0,s.kt)("inlineCode",{parentName:"p"},"|=")," symbol represents the ",(0,s.kt)("strong",{parentName:"p"},"union")," operation, which is defined as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The behavior of the ",(0,s.kt)("strong",{parentName:"li"},"union")," operation needs to be consistent with the behavior of the ",(0,s.kt)("strong",{parentName:"li"},"configuration definition"),".")),(0,s.kt)("p",null,"See ",(0,s.kt)("strong",{parentName:"p"},"expressions")," spec for more details of union operator in ",(0,s.kt)("strong",{parentName:"p"},"Arithmetic Operations"),"."),(0,s.kt)("h4",{id:"expression-statements"},"Expression Statements"),(0,s.kt)("p",null,"An expression statement evaluates an expression and discards its result."),(0,s.kt)("p",null,"Syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bnf"},"expr_stmt: expression\n")),(0,s.kt)("p",null,"An expression statement supported in KCL is function invocation expression, which is discussed in ",(0,s.kt)("strong",{parentName:"p"},"expression")," spec."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"print(k) # print a variable\n")),(0,s.kt)("h4",{id:"import-statements"},"Import Statements"),(0,s.kt)("p",null,"Import statements are used to ",(0,s.kt)("strong",{parentName:"p"},"search")," and ",(0,s.kt)("strong",{parentName:"p"},"load")," a module, and define a name or names in the local namespace for the scope where the import statement occurs."),(0,s.kt)("p",null,"Syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bnf"},'import_stmt: "import" dot_name ("as" NAME)?\ndot_name: [leading_dots] identifier (DOT identifier)*\nleading_dots: "."+\n')),(0,s.kt)("p",null,"Examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import math # import a built-in module math\nimport pkg # import pkg\nimport pkg.foo # import pkg.foo\nimport pkg.subpkg # import a subpkg in a pkg\nimport .pkg2.subpkg3 # import a subpkg in a pkg inside of current pkg\nimport ...pkg2 # Go two levels up then import pkg2\n")),(0,s.kt)("p",null,"See ",(0,s.kt)("strong",{parentName:"p"},"module")," spec for more details of module spec."),(0,s.kt)("h4",{id:"assert-statements"},"Assert Statements"),(0,s.kt)("p",null,"Assert statements are a convenient way to insert debugging assertions into KCL code."),(0,s.kt)("p",null,"The syntax is the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'assert_stmt: ASSERT test ("," test)?\n')),(0,s.kt)("p",null,"The conditional expression in assert will be evaluated and get a boolean. Report an error if returning a ",(0,s.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,s.kt)("p",null,"Examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"assert: x > 1 # report an error on x <= 1\n")),(0,s.kt)("h4",{id:"conditional-statements"},"Conditional Statements"),(0,s.kt)("p",null,"KCL allows using conditional statements to control the instructions to\nbe executed. They are also called the control-flow statements."),(0,s.kt)("p",null,"The only type of control-flow syntax is the well-known ",(0,s.kt)("inlineCode",{parentName:"p"},"if-elif-else")," syntax."),(0,s.kt)("p",null,"The syntax of the ",(0,s.kt)("inlineCode",{parentName:"p"},"if-elif-else")," statement is the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bnf"},'if_stmt: "if" test ":" suite ("elif" test ":" suite)* (ELSE ":" suite)?\nsuite: small_stmt | NEWLINE _INDENT statement+ _DEDENT\n')),(0,s.kt)("p",null,"An ",(0,s.kt)("inlineCode",{parentName:"p"},"if")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"elif")," statement evaluates a given expression. When the expression\nis evaluated to ",(0,s.kt)("inlineCode",{parentName:"p"},"True"),", a list of statements following ",(0,s.kt)("inlineCode",{parentName:"p"},":")," are executed."),(0,s.kt)("p",null,"The following is an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'a = 10\nif a == 0:\n    print("a is zero")\nelif a < 100:\n    print("a < 100")\n    print("maybe a is negative")\nelse:\n    print("a >= 100")\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"if-elif-else")," statements can be nested. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'a = 10\nif a == 0:\n    print("a is zero")\nelif a < 100:\n    print("a < 100")\n    if a < 0:\n        print("a is negative")\n    print("No matter a is negative or positive, this message is printed")\nelse:\n    print("a >= 100")\n')),(0,s.kt)("h4",{id:"schema-statements"},"Schema Statements"),(0,s.kt)("p",null,"Schema statements are used to define a type of configuration data. The syntax is the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bnf"},'schema_stmt: [decorators] "schema" ["relaxed"] identifier ["[" [arguments] "]"] ["(" operand_name ")"] ":" NEWLINE [schema_body]\nschema_body: _INDENT (string NEWLINE)* [mixin_stmt] (schema_attribute_stmt | statement)* [check_block] _DEDENT\n')),(0,s.kt)("p",null,"See ",(0,s.kt)("strong",{parentName:"p"},"schema")," spec for more details of schema spec."))}c.isMDXComponent=!0}}]);