"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[86339],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var l=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},g=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=u(t),g=i,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||r;return t?l.createElement(m,o(o({ref:n},s),{},{components:t})):l.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[c]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<r;u++)o[u]=t[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}g.displayName="MDXCreateElement"},52301:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var l=t(87462),i=(t(67294),t(3905));const r={sidebar_position:1},o="Introduction",a={unversionedId:"reference/plugin/overview",id:"version-0.4.3/reference/plugin/overview",title:"Introduction",description:"KCL provides plugin support through a plugin agent and auxiliary command line tools, and the KCL plugin framework supports different general-purpose languages to develop plugins. Here we take Python as an example to briefly explain the use of plugins.",source:"@site/versioned_docs/version-0.4.3/reference/plugin/overview.md",sourceDirName:"reference/plugin",slug:"/reference/plugin/overview",permalink:"/docs/0.4.3/reference/plugin/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/reference/plugin/overview.md",tags:[],version:"0.4.3",lastUpdatedBy:"peefy",lastUpdatedAt:1709793003,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"Plugin System",permalink:"/docs/0.4.3/reference/plugin/"},next:{title:"project_context",permalink:"/docs/0.4.3/reference/plugin/project_context"}},p={},u=[{value:"1. Hello Plugin",id:"1-hello-plugin",level:2},{value:"2. <code>kcl-plugin</code> Command",id:"2-kcl-plugin-command",level:2},{value:"3. Plugin Information and Documentation",id:"3-plugin-information-and-documentation",level:2},{value:"4. Plugin Directory Structure",id:"4-plugin-directory-structure",level:2},{value:"5. Create Plugin",id:"5-create-plugin",level:2},{value:"6. Remove Plugin",id:"6-remove-plugin",level:2},{value:"7. Test Plugin",id:"7-test-plugin",level:2}],s={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"KCL provides plugin support through a plugin agent and auxiliary command line tools, and the KCL plugin framework supports different general-purpose languages to develop plugins. Here we take Python as an example to briefly explain the use of plugins."),(0,i.kt)("p",null,"KCL plugin Git repository: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl-plugin"},"https://github.com/kcl-lang/kcl-plugin")),(0,i.kt)("h2",{id:"1-hello-plugin"},"1. Hello Plugin"),(0,i.kt)("p",null,"KCL plugins are installed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," subdirectory of KCL (usually installed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.kcl/plugins")," directory), or set through the ",(0,i.kt)("inlineCode",{parentName:"p"},"$KCL_PLUGINS_ROOT")," environment variable. KCL plugins are managed in the Git repository: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl-plugin"},"https://github.com/kcl-lang/kcl-plugin"),", we can clone the repository for development."),(0,i.kt)("p",null,"Enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl-plugin info")," command to view the plugin directory (replace ",(0,i.kt)("inlineCode",{parentName:"p"},"/Users/kcl_user")," with the local ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME")," path):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl-plugin info\n# plugin_root: /Users/kcl_user/.kcl/plugins\n")),(0,i.kt)("p",null,"View the list of plugins with the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl-plugin list")," subcommand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl-plugin list\nhello: hello doc - 0.0.1\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," is an example builtin plugin (do not modify the plugin)."),(0,i.kt)("p",null,"In KCL code, the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," plugin can be imported via ",(0,i.kt)("inlineCode",{parentName:"p"},"import kcl_plugin.hello"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k")," code is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import kcl_plugin.hello\n\nname = "kcl"\nthree = hello.add(1,2)\n')),(0,i.kt)("p",null,"The output result is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\nname: kcl\nthree: 3\n")),(0,i.kt)("h2",{id:"2-kcl-plugin-command"},"2. ",(0,i.kt)("inlineCode",{parentName:"h2"},"kcl-plugin")," Command"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kcl-plugin")," is a plugin helper command line tool, the command line help is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl-plugin\nusage: kcl-plugin [-h] {list,info,init,gendoc,test} ...\npositional arguments:\n  {list,info,init,gendoc,test}\n                        kcl plugin sub commands\n    list                list all plugins\n    info                show plugin document\n    init                init a new plugin\n    gendoc              gen all plugins document\n    test                test plugin\noptional arguments:\n  -h, --help            show this help message and exit\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"list")," subcommand is used to view the list of plugins."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"info")," subcommand is used to view the plugin directory and information about each plugin."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"init")," subcommand is used to initialize new plugins."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"gendoc")," subcommand is used to update the API documentation of all plugins."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," subcommand is used to test specified plugins.")),(0,i.kt)("h2",{id:"3-plugin-information-and-documentation"},"3. Plugin Information and Documentation"),(0,i.kt)("p",null,"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl-plugin info hello")," to view the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," plugin information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ kcl-plugin info hello\n{\n    "name": "hello",\n    "describe": "hello doc",\n    "long_describe": "long describe",\n    "version": "0.0.1",\n    "method": {\n        "add": "add two numbers, and return result",\n        "foo": "no doc",\n        "list_append": "no doc",\n        "say_hello": "no doc",\n        "tolower": "no doc",\n        "update_dict": "no doc"\n    }\n}\n')),(0,i.kt)("p",null,"The information of the plugin mainly includes the name and version information of the plugin, and the function information provided by the plugin. This information is consistent with the automatically generated ",(0,i.kt)("inlineCode",{parentName:"p"},"api.md")," file in the plugin directory (regenerate the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.md")," file for all plugins via ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl-plugin gendoc")," when the plugin API document changes)."),(0,i.kt)("h2",{id:"4-plugin-directory-structure"},"4. Plugin Directory Structure"),(0,i.kt)("p",null,"The directory structure of the plugin is as follows (replace ",(0,i.kt)("inlineCode",{parentName:"p"},"/Users/kcl_user")," with the local ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME")," path):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree /Users/kcl_user/.kcl/plugins/\n/Users/kcl_user/.kcl/plugins/\n\u251c\u2500\u2500 _examples\n\u251c\u2500\u2500 _test\n\u2514\u2500\u2500 hello\n    \u251c\u2500\u2500 api.md\n    \u251c\u2500\u2500 plugin.py\n    \u2514\u2500\u2500 plugin_test.py\n$\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"_examples")," directory is the sample code of the plugin, the ",(0,i.kt)("inlineCode",{parentName:"p"},"_test")," directory is the KCL test code of the plugin, and the other directories starting with letters are ordinary plugins. The content of the plugin is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat ./hello/plugin.py\n# Copyright 2020 The KCL Authors. All rights reserved.\nINFO = {\n    'name': 'hello',\n    'describe': 'hello doc',\n    'long_describe': 'long describe',\n    'version': '0.0.1',\n}\ndef add(a: int, b: int) -> int:\n    \"\"\"add two numbers, and return result\"\"\"\n    return a + b\n...\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO")," specifies the name of the plugin, a brief description, a detailed description and version information. And all the functions whose names start with letters are the functions provided by the plugin, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," function can be called directly in KCL."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: KCL plugins are implemented in an independent pure Python code file, and plugins cannot directly call each other.")),(0,i.kt)("h2",{id:"5-create-plugin"},"5. Create Plugin"),(0,i.kt)("p",null,"A plugin can be created with the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl-plugin init")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kcl-plugin init hi\n$ kcl-plugin list\nhello: hello doc - 0.0.1\nhi: hi doc - 0.0.1\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl-plugin init")," command will construct a new plugin from the built-in template, and then we can view the created plugin information with the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl-plugin list")," command."),(0,i.kt)("h2",{id:"6-remove-plugin"},"6. Remove Plugin"),(0,i.kt)("p",null,"KCL plugins are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," subdirectory of KCL (usually installed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.kcl/plugins")," directory).\nWe can query the plugin installation directory with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl-plugin info"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl-plugin info\n/Users/kcl_user/.kcl/plugins/\n$ tree /Users/kcl_user/.kcl/plugins/\n/Users/kcl_user/.kcl/plugins/\n\u251c\u2500\u2500 _examples\n\u251c\u2500\u2500 _test\n\u2514\u2500\u2500 hello      -- Delete this directory to delete the hello plugin\n    \u251c\u2500\u2500 api.md\n    \u251c\u2500\u2500 plugin.py\n    \u2514\u2500\u2500 plugin_test.py\n$\n")),(0,i.kt)("h2",{id:"7-test-plugin"},"7. Test Plugin"),(0,i.kt)("p",null,"There is a ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_test.py")," file in the plugin directory, which is the unit test file of the plugin (based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"pytest")," testing framework). Also placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"_test")," directory are plugin integration tests for KCL files. The ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_test.py")," unit test is required, and the KCL integration tests in the ",(0,i.kt)("inlineCode",{parentName:"p"},"_test")," directory can be added as needed."),(0,i.kt)("p",null,"Unit tests for plugins can be executed via ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl-plugin test"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl-plugin test hello\n============================= test session starts ==============================\nplatform darwin -- Python 3.7.6+, pytest-5.3.5, py-1.9.0, pluggy-0.13.1\nrootdir: /Users/kcl_user\ncollected 5 items\n.kcl/plugins/hello/plugin_test.py .....      [100%]\n============================== 5 passed in 0.03s ===============================\n$\n")),(0,i.kt)("p",null,"Integration tests can be tested by executing the ",(0,i.kt)("inlineCode",{parentName:"p"},"python3 -m pytest")," command in the ",(0,i.kt)("inlineCode",{parentName:"p"},"_test")," directory."))}d.isMDXComponent=!0}}]);