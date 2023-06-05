"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>_,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},_=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,_=s(e,["components","mdxType","originalType","parentName"]),N=o(n),d=a,E=N["".concat(p,".").concat(d)]||N[d]||m[d]||i;return n?r.createElement(E,l(l({ref:t},_),{},{components:n})):r.createElement(E,l({ref:t},_))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=N;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},68557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"KCL Spec",linkTitle:"KCL Spec",type:"docs",weight:2,description:"KCL Spec"},l=void 0,s={unversionedId:"reference/lang/spec/kcl-spec",id:"version-0.4.3/reference/lang/spec/kcl-spec",title:"KCL Spec",description:"KCL Spec",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.3/reference/lang/spec/kcl-spec.md",sourceDirName:"reference/lang/spec",slug:"/reference/lang/spec/kcl-spec",permalink:"/zh-CN/docs/0.4.3/reference/lang/spec/kcl-spec",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/reference/lang/spec/kcl-spec.md",tags:[],version:"0.4.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1685958977,formattedLastUpdatedAt:"2023\u5e746\u67085\u65e5",frontMatter:{title:"KCL Spec",linkTitle:"KCL Spec",type:"docs",weight:2,description:"KCL Spec"},sidebar:"reference",previous:{title:"Expressions",permalink:"/zh-CN/docs/0.4.3/reference/lang/spec/expressions"},next:{title:"Lexical",permalink:"/zh-CN/docs/0.4.3/reference/lang/spec/lexical"}},p={},o=[{value:"\u8bcd\u6cd5\u89c4\u5219",id:"\u8bcd\u6cd5\u89c4\u5219",level:2},{value:"\u5173\u952e\u5b57\u548c\u4fdd\u7559\u5b57",id:"\u5173\u952e\u5b57\u548c\u4fdd\u7559\u5b57",level:3},{value:"\u884c\u6ce8\u91ca",id:"\u884c\u6ce8\u91ca",level:3},{value:"\u8fd0\u7b97\u7b26",id:"\u8fd0\u7b97\u7b26",level:3},{value:"\u5206\u9694\u7b26",id:"\u5206\u9694\u7b26",level:3},{value:"\u8fd0\u7b97\u7b26\u7684\u4f18\u5148\u7ea7",id:"\u8fd0\u7b97\u7b26\u7684\u4f18\u5148\u7ea7",level:3},{value:"EBNF \u8bed\u6cd5",id:"ebnf-\u8bed\u6cd5",level:2}],_={toc:o};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bcd\u6cd5\u89c4\u5219"},"\u8bcd\u6cd5\u89c4\u5219"),(0,a.kt)("h3",{id:"\u5173\u952e\u5b57\u548c\u4fdd\u7559\u5b57"},"\u5173\u952e\u5b57\u548c\u4fdd\u7559\u5b57"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f KCL \u8bed\u8a00\u7684\u5173\u952e\u5b57\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    True       False      None        Undefined   import\n    and        or         in          is          not\n    as         if         else        elif        for\n    schema     mixin      protocol    check       assert\n    all        any        map         filter      lambda\n    rule\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f KCL \u8bed\u8a00\u7684\u4fdd\u7559\u5b57\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    pass       return     validate   rule        flow\n    def        del        raise      except      try\n    finally    while      from       with        yield\n    global     nonlocal   struct     class       final\n")),(0,a.kt)("h3",{id:"\u884c\u6ce8\u91ca"},"\u884c\u6ce8\u91ca"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# a comment\n")),(0,a.kt)("h3",{id:"\u8fd0\u7b97\u7b26"},"\u8fd0\u7b97\u7b26"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    +       -       *       **      /       //      %\n    <<      >>      &       |       ^       <       >\n    ~       <=      >=      ==      !=      =\n    +=      -=      *=      **=     /=      //=     %=\n    <<=     >>=     &=      ^=\n")),(0,a.kt)("h3",{id:"\u5206\u9694\u7b26"},"\u5206\u9694\u7b26"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    (       )       [       ]       {       }\n    ,       :       .       ;       @\n")),(0,a.kt)("h3",{id:"\u8fd0\u7b97\u7b26\u7684\u4f18\u5148\u7ea7"},"\u8fd0\u7b97\u7b26\u7684\u4f18\u5148\u7ea7"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u7684\u8fd0\u7b97\u7b26\u5217\u8868\u6839\u636e\u4f18\u5148\u7ea7\u4ece ",(0,a.kt)("strong",{parentName:"p"},"\u9ad8\u5230\u5e95")," \u6392\u5217\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"**")),(0,a.kt)("td",{parentName:"tr",align:null},"Exponentiation (highest priority)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"+x")," ",(0,a.kt)("inlineCode",{parentName:"td"},"-x")," ",(0,a.kt)("inlineCode",{parentName:"td"},"~x")),(0,a.kt)("td",{parentName:"tr",align:null},"Positive, negative, bitwise NOT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"*")," ",(0,a.kt)("inlineCode",{parentName:"td"},"/")," ",(0,a.kt)("inlineCode",{parentName:"td"},"%")," ",(0,a.kt)("inlineCode",{parentName:"td"},"//")),(0,a.kt)("td",{parentName:"tr",align:null},"Multiplication, division, floor division and remainder")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"+")," ",(0,a.kt)("inlineCode",{parentName:"td"},"-")),(0,a.kt)("td",{parentName:"tr",align:null},"Addition and subtraction")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<<")," ",(0,a.kt)("inlineCode",{parentName:"td"},">>")),(0,a.kt)("td",{parentName:"tr",align:null},"Left and right shifts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"&")),(0,a.kt)("td",{parentName:"tr",align:null},"Bitwise AND")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"^")),(0,a.kt)("td",{parentName:"tr",align:null},"Bitwise XOR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"`"),(0,a.kt)("td",{parentName:"tr",align:null},"`")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"in"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"not in"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"is"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"is not"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"<="),", ",(0,a.kt)("inlineCode",{parentName:"td"},">"),", ",(0,a.kt)("inlineCode",{parentName:"td"},">="),", ",(0,a.kt)("inlineCode",{parentName:"td"},"!="),", ",(0,a.kt)("inlineCode",{parentName:"td"},"==")),(0,a.kt)("td",{parentName:"tr",align:null},"Comparisons, including membership and identity operators")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"not")),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean NOT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"and")),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean AND")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"or")),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean OR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"if \u2013 else")),(0,a.kt)("td",{parentName:"tr",align:null},"Conditional expression =")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"="),", ",(0,a.kt)("inlineCode",{parentName:"td"},"+="),", ",(0,a.kt)("inlineCode",{parentName:"td"},"-="),", ",(0,a.kt)("inlineCode",{parentName:"td"},"*="),", ",(0,a.kt)("inlineCode",{parentName:"td"},"/="),", ",(0,a.kt)("inlineCode",{parentName:"td"},"%="),", ",(0,a.kt)("inlineCode",{parentName:"td"},"&="),", `"),(0,a.kt)("td",{parentName:"tr",align:null},"=",(0,a.kt)("inlineCode",{parentName:"td"},", "),"^=",(0,a.kt)("inlineCode",{parentName:"td"},", "),"**=",(0,a.kt)("inlineCode",{parentName:"td"},", "),"//=",(0,a.kt)("inlineCode",{parentName:"td"},", "),"<<=",(0,a.kt)("inlineCode",{parentName:"td"},", "),">>=`")))),(0,a.kt)("h2",{id:"ebnf-\u8bed\u6cd5"},"EBNF \u8bed\u6cd5"),(0,a.kt)("p",null,"KCL \u91c7\u7528 Python \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://lark-parser.readthedocs.io/en/latest/"},"LarkParser")," \u5de5\u5177\u63cf\u8ff0\u8bed\u6cd5\uff0c\u89c4\u8303\u89c4\u5219\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bnf"},'// Copyright 2021 The KCL Authors. All rights reserved.\n\n//////////// KCL grammar ////////////\nstart: (NEWLINE | preamble_statement)*\n\n//////////// statement ////////////\npreamble_statement: preamble_small_stmt | preamble_compound_stmt\npreamble_small_stmt: (small_stmt | import_stmt) NEWLINE\npreamble_compound_stmt: compound_stmt | schema_stmt\nstatement: small_stmt NEWLINE | compound_stmt\ncompound_stmt: if_stmt\nsmall_stmt: assign_stmt | expr_stmt | assert_stmt\n\n//////////// import_stmt ////////////\nimport_stmt: IMPORT dot_name (AS NAME)?\ndot_name: [leading_dots] identifier (DOT identifier)*\nleading_dots: DOT+\n\n/////////// assert_stmt ////////////\nassert_stmt: ASSERT test (COMMA test)?\n\n//////////// if_stmt ////////////\nif_stmt: IF test COLON suite (ELIF test COLON suite)* (ELSE COLON suite)?\nsuite: small_stmt NEWLINE | NEWLINE _INDENT statement+ _DEDENT\n\n//////////// assign_stmt ////////////\nassign_stmt: primary_expr (ASSIGN primary_expr)* ASSIGN test\n    | primary_expr augassign test\naugassign: COMP_PLUS | COMP_MINUS | COMP_MULTIPLY | COMP_DOUBLE_STAR | COMP_DIVIDE\n    | COMP_DOUBLE_DIVIDE | COMP_MOD | COMP_AND | COMP_OR | COMP_XOR | COMP_SHIFT_LEFT\n    | COMP_SHIFT_RIGHT\n\n//////////// schema_stmt ////////////\nschema_stmt: [decorators] SCHEMA [RELAXED] identifier [LEFT_BRACKETS [arguments] RIGHT_BRACKETS] [LEFT_PARENTHESES operand_name RIGHT_PARENTHESES] COLON NEWLINE [schema_body]\nschema_body: _INDENT (string NEWLINE)* [mixin_stmt] (schema_attribute_stmt | statement)* [check_block] _DEDENT\nschema_attribute_stmt: [decorators] (FINAL)? identifier COLON type [(ASSIGN | augassign) test] NEWLINE\n\n/////////// decorators ////////////\ndecorators: (AT primary_expr NEWLINE)+\n\n//////////// type ////////////\ntype: type_element (OR type_element)*\ntype_element: schema_type | basic_type | compound_type\nschema_type: operand_name\nbasic_type: STRING_TYPE | INT_TYPE | FLOAT_TYPE | BOOL_TYPE\ncompound_type: list_type | dict_type\nlist_type: LEFT_BRACKETS (type)? RIGHT_BRACKETS\ndict_type: LEFT_BRACE (type)? COLON (type)? RIGHT_BRACE\n\n//////////// check_block ////////////\ncheck_block: CHECK COLON NEWLINE _INDENT check_expr+ _DEDENT\ncheck_expr: check_test [COMMA primary_expr] NEWLINE\ncheck_test: or_test [IF or_test]\n\n//////////// mixin_stmt ////////////\nmixin_stmt: MIXIN LEFT_BRACKETS [mixins | multiline_mixins] RIGHT_BRACKETS NEWLINE\nmultiline_mixins: NEWLINE _INDENT mixins NEWLINE _DEDENT\nmixins: operand_name (COMMA (NEWLINE mixins | operand_name))*\n\n//////////// expression_stmt ////////////\nexpr_stmt: expression\nexpression: test (COMMA test)*\ntest: if_expr | primary_expr | unary_expr | binary_expr\nif_expr: test IF test ELSE test\nunary_expr: (PLUS | MINUS | NOT) primary_expr | L_NOT test\nbinary_expr: test bin_op test\nbin_op: L_OR\n      | L_AND\n      | EQUAL_TO | NOT_EQUAL_TO | LESS_THAN | GREATER_THAN | LESS_THAN_OR_EQUAL_TO | GREATER_THAN_OR_EQUAL_TO \n      | IN | L_NOT IN | IS | IS L_NOT\n      | OR\n      | XOR\n      | AND\n      | MINUS | PLUS\n      | MULTIPLY | MOD | DIVIDE | DOUBLE_DIVIDE\n      | SHIFT_LEFT | SHIFT_RIGHT\n\nprimary_expr: operand | primary_expr select_suffix | primary_expr call_suffix | primary_expr subscript_suffix | primary_expr schema_expr\noperand: operand_name | number | string\n    | TRUE | FALSE | NONE | list_expr | list_comp | dict_expr\n    | dict_comp | LEFT_PARENTHESES test RIGHT_PARENTHESES\noperand_name: identifier | qualified_identifier\n\nselect_suffix: DOT (identifier | dict_identifier_selector | list_identifier_selector)\ndict_identifier_selector: MULTIPLY | LEFT_BRACE identifier (COMMA identifier)* RIGHT_BRACE\nlist_identifier_selector: subscript_suffix\n\n//////////// call_suffix ////////////\ncall_suffix: LEFT_PARENTHESES [arguments [COMMA]] RIGHT_PARENTHESES\n\n//////////// subscript_suffix ////////////\nsubscript_suffix: LEFT_BRACKETS (test | [test] COLON [test] [COLON [test]]) RIGHT_BRACKETS\n\n//////////// arguments ////////////\narguments: argument (COMMA argument)*\nargument: test | NAME ASSIGN test | MULTIPLY test | DOUBLE_STAR test\n\n\n//////////// operand ////////////\nidentifier: NAME\nqualified_identifier: identifier DOT identifier\n\n//////////// list_expr ////////////\nlist_expr: LEFT_BRACKETS [list_items | NEWLINE _INDENT list_items _DEDENT] RIGHT_BRACKETS\nlist_items: list_item ((COMMA [NEWLINE] | NEWLINE) list_item)* [COMMA] [NEWLINE]\nlist_item: test | star_expr\nlist_comp: LEFT_BRACKETS (list_item comp_clause+ | NEWLINE _INDENT list_item comp_clause+ _DEDENT) RIGHT_BRACKETS\n//////////// dict_expr ////////////\ndict_expr: LEFT_BRACE [entries | NEWLINE _INDENT entries _DEDENT] RIGHT_BRACE\ndict_comp: LEFT_BRACE (entry comp_clause+ | NEWLINE _INDENT entry comp_clause+ _DEDENT) RIGHT_BRACE\nentries: entry ((COMMA [NEWLINE] | NEWLINE) entry)* [COMMA] [NEWLINE]\nentry: test COLON test | double_star_expr\ncomp_clause: FOR loop_variables [COMMA] IN or_test [NEWLINE] [IF test [NEWLINE]]\n\nstar_expr: MULTIPLY primary_expr\ndouble_star_expr: DOUBLE_STAR primary_expr\nloop_variables: primary_expr (COMMA primary_expr)*\n\n//////////// schema_expr ////////////\nschema_expr: (LEFT_PARENTHESES [arguments] RIGHT_PARENTHESES)? dict_expr\n\n//////////// misc ////////////\nnumber: DEC_NUMBER | HEX_NUMBER | BIN_NUMBER | OCT_NUMBER | FLOAT_NUMBER | IMAG_NUMBER\nstring: STRING | LONG_STRING\n\n// Tokens\n\nASSIGN: "="\nCOLON: ":"\nSEMI_COLON: ";"\nCOMMA: ","\nLEFT_PARENTHESES: "("\nRIGHT_PARENTHESES: ")"\nLEFT_BRACKETS: "["\nRIGHT_BRACKETS: "]"\nLEFT_BRACE: "{"\nRIGHT_BRACE: "}"\nPLUS: "+"\nMINUS: "-"\nMULTIPLY: "*"\nDIVIDE: "/"\nMOD: "%"\nDOT: "."\nAND: "&"\nOR: "|"\nXOR: "^"\nNOT: "~"\nLESS_THAN: "<"\nGREATER_THAN: ">"\nEQUAL_TO: "=="\nNOT_EQUAL_TO: "!="\nGREATER_THAN_OR_EQUAL_TO: ">="\nLESS_THAN_OR_EQUAL_TO: "<="\nDOUBLE_STAR: "**"\nDOUBLE_DIVIDE: "//"\nSHIFT_LEFT: "<<"\nSHIFT_RIGHT: ">>"\nAT: "@"\n\nCOMP_PLUS: "+="\nCOMP_MINUS: "-="\nCOMP_MULTIPLY: "*="\nCOMP_DIVIDE: "/="\nCOMP_MOD: "%="\nCOMP_AND: "&="\nCOMP_OR: "|="\nCOMP_XOR: "^="\nCOMP_DOUBLE_STAR: "**="\nCOMP_DOUBLE_DIVIDE: "//="\nCOMP_SHIFT_LEFT: "<<="\nCOMP_SHIFT_RIGHT: ">>="\n\n// Special tokens\nIMPORT: "import"\nAS: "as"\nSCHEMA: "schema"\nMIXIN: "mixin"\nRELAXED: "relaxed"\nCHECK: "check"\nFOR: "for"\nASSERT: "assert"\nIF: "if"\nELIF: "elif"\nELSE: "else"\nL_OR: "or"\nL_AND: "and"\nL_NOT: "not"\nIN: "in"\nIS: "is"\nFINAL: "final"\nLAMBDA: "lambda"\n\nSTRING_TYPE: "str"\nINT_TYPE: "int"\nFLOAT_TYPE: "float"\nBOOL_TYPE: "bool"\n\n// Constant tokens\nTRUE: "True"\nFALSE: "False"\nNONE: "None"\n\nNAME: /[a-zA-Z_]\\w*/\nCOMMENT: /#[^\\n]*/\nNEWLINE: ( /\\r?\\n[\\t ]*/ | COMMENT )+\n\nSTRING: /[ubf]?r?("(?!"").*?(?<!\\\\)(\\\\\\\\)*?"|\'(?!\'\').*?(?<!\\\\)(\\\\\\\\)*?\')/i\nLONG_STRING: /[ubf]?r?(""".*?(?<!\\\\)(\\\\\\\\)*?"""|\'\'\'.*?(?<!\\\\)(\\\\\\\\)*?\'\'\')/is\n\nDEC_NUMBER: /\\-?0|\\-?[1-9]\\d*/i\nHEX_NUMBER.2: /\\-?0[xX][0-9a-fA-F]+/i\nOCT_NUMBER.2: /\\-?0[oO][0-7]+/i\nBIN_NUMBER.2 : /\\-?0[bB][0-1]+/i\nFLOAT_NUMBER.2: /(([-+]?\\d+\\.\\d*|\\.\\d+)(e[-+]?\\d+)?|\\d+(e[-+]?\\d+))/i\nIMAG_NUMBER.2: /\\d+j/i | FLOAT_NUMBER "j"i\n\n%ignore /[\\t \\f]+/  // WS\n%ignore /\\\\[\\t \\f]*\\r?\\n/   // LINE_CONT\n%declare _INDENT _DEDENT\n')))}m.isMDXComponent=!0}}]);