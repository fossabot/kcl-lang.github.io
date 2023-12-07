"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[34010],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(t),d=i,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=t(87462),i=(t(67294),t(3905));const r={title:"Write complex config using KCL Schema",linkTitle:"Write complex config using KCL Schema",type:"docs",weight:2,description:"Write complex config using KCL Schema",sidebar_position:2},o=void 0,l={unversionedId:"reference/lang/codelab/schema",id:"version-0.5.6/reference/lang/codelab/schema",title:"Write complex config using KCL Schema",description:"Write complex config using KCL Schema",source:"@site/versioned_docs/version-0.5.6/reference/lang/codelab/schema.md",sourceDirName:"reference/lang/codelab",slug:"/reference/lang/codelab/schema",permalink:"/docs/0.5.6/reference/lang/codelab/schema",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.6/reference/lang/codelab/schema.md",tags:[],version:"0.5.6",lastUpdatedBy:"Peefy",lastUpdatedAt:1701933583,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:2,frontMatter:{title:"Write complex config using KCL Schema",linkTitle:"Write complex config using KCL Schema",type:"docs",weight:2,description:"Write complex config using KCL Schema",sidebar_position:2},sidebar:"reference",previous:{title:"Write simple config with KCL",permalink:"/docs/0.5.6/reference/lang/codelab/simple"},next:{title:"Co-configuration with config operations",permalink:"/docs/0.5.6/reference/lang/codelab/collaborative"}},s={},m=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"What We Will Learn",id:"what-we-will-learn",level:3},{value:"2. Write Simple Schema",id:"2-write-simple-schema",level:2},{value:"3. Enhance Schema as Needed",id:"3-enhance-schema-as-needed",level:2},{value:"4. Create Config Based on Simple Schema",id:"4-create-config-based-on-simple-schema",level:2},{value:"5. Write More Complex Logic in Schema",id:"5-write-more-complex-logic-in-schema",level:2},{value:"6. Create New Schema via Schema Combinations",id:"6-create-new-schema-via-schema-combinations",level:2},{value:"7. Create Config of Deeply Nested Schema using Dict/Map",id:"7-create-config-of-deeply-nested-schema-using-dictmap",level:2},{value:"8. Declare Schema Validation Rules",id:"8-declare-schema-validation-rules",level:2},{value:"9. Create New Schema via Schema Inheritance",id:"9-create-new-schema-via-schema-inheritance",level:2},{value:"10. Create New Schema by Multiple Protocol and Mixin Schemas Inheritance",id:"10-create-new-schema-by-multiple-protocol-and-mixin-schemas-inheritance",level:2},{value:"11. Share and Reuse Schema",id:"11-share-and-reuse-schema",level:2},{value:"12. The Final Step",id:"12-the-final-step",level:2}],c={toc:m},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,i.kt)("p",null,"KCL is a simple and easy-to-use configuration language, where users can simply write the reusable configuration code."),(0,i.kt)("p",null,"In this codelab, we will learn how to write customized config using KCL, such that we can define a schema and write the config in a collaborative way."),(0,i.kt)("h3",{id:"what-we-will-learn"},"What We Will Learn"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define a simple schema"),(0,i.kt)("li",{parentName:"ol"},"Set default immutable values to schema fields"),(0,i.kt)("li",{parentName:"ol"},"Create config based on a simple schema"),(0,i.kt)("li",{parentName:"ol"},"Write complex logic in schema"),(0,i.kt)("li",{parentName:"ol"},"Create a new schema via schema combinations"),(0,i.kt)("li",{parentName:"ol"},"Create a config of a deeply nested schema using dict/map"),(0,i.kt)("li",{parentName:"ol"},"Create new schema via schema inheritance"),(0,i.kt)("li",{parentName:"ol"},"Create new schema via multiple mixin schemas"),(0,i.kt)("li",{parentName:"ol"},"Declare validation rules for the schema"),(0,i.kt)("li",{parentName:"ol"},"Config schema output layout"),(0,i.kt)("li",{parentName:"ol"},"Share and reuse schema")),(0,i.kt)("h2",{id:"2-write-simple-schema"},"2. Write Simple Schema"),(0,i.kt)("p",null,"Suppose we want to define a workload with certain attributes, we can create a simple config by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"my_config.k"),", we can fill in the following code as below which defines a reusable schema of the configuration of deploy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"schema Deployment:\n    name: str\n    cpu: int\n    memory: int\n    image: str\n    service: str\n    replica: int\n    command: [str]\n    labels: {str:str}\n")),(0,i.kt)("p",null,"In the code above, ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"memory")," are defined as int value; ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"service")," are string; ",(0,i.kt)("inlineCode",{parentName:"p"},"command")," is a list of string type; ",(0,i.kt)("inlineCode",{parentName:"p"},"labels")," is a dict type, whose key type and value type are both string."),(0,i.kt)("p",null,"Besides, each attribute ",(0,i.kt)("strong",{parentName:"p"},"must")," be assigned with a not-None value as a schema instance unless it is modified by a question mark ",(0,i.kt)("strong",{parentName:"p"},"?")," as an optional attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"schema Deployment:\n    name: str\n    cpu: int\n    memory: int\n    image: str\n    service: str\n    replica: int\n    command: [str]\n    labels?: {str:str}  # labels is an optional attribute\n")),(0,i.kt)("p",null,"When there is an inheritance relationship:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the attribute is optional in the base schema, it could be optional or required in the sub-schema."),(0,i.kt)("li",{parentName:"ul"},"If the attribute is required in the base schema, it must be required in the sub-schema.")),(0,i.kt)("h2",{id:"3-enhance-schema-as-needed"},"3. Enhance Schema as Needed"),(0,i.kt)("p",null,"Suppose we need to set default values to service and replica, we can make them as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Deployment:\n    name: str\n    cpu: int\n    memory: int\n    image: str\n    service: str = "my-service"  # defaulting\n    replica: int = 1  # defaulting\n    command: [str]\n    labels?: {str:str}  # labels is an optional attribute\n')),(0,i.kt)("p",null,"And then we can set the service type annotation as the string literal type to make it immutable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Deployment:\n    name: str\n    cpu: int\n    memory: int\n    image: str\n    service: "my-service" = "my-service"\n    replica: int = 1\n    command: [str]\n    labels?: {str:str}\n')),(0,i.kt)("p",null,"In the schema, type hint is a ",(0,i.kt)("inlineCode",{parentName:"p"},"must"),", for example we can define cpu as ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu: int"),"."),(0,i.kt)("p",null,"Specially, we can define a string-interface dict as ",(0,i.kt)("inlineCode",{parentName:"p"},"{str:}"),", and in case we want to define an object or interface, just define as ",(0,i.kt)("inlineCode",{parentName:"p"},"{:}"),"."),(0,i.kt)("h2",{id:"4-create-config-based-on-simple-schema"},"4. Create Config Based on Simple Schema"),(0,i.kt)("p",null,"Now we have a simple schema definition, we can use it to define config as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment {\n    name = "my-nginx"\n    cpu = 256\n    memory = 512\n    image = "nginx:1.14.2"\n    command = ["nginx"]\n    labels = {\n        run = "my-nginx"\n        env = "pre-prod"\n    }\n}\n')),(0,i.kt)("p",null,"Run with the following KCL command, we should be able to see the generated yaml files as the output as below:"),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    kcl my_config.k\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  name: my-nginx\n  cpu: 256\n  memory: 512\n  image: nginx:1.14.2\n  service: my-service\n  replica: 1\n  command:\n    - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Check the manual and specification out for more details about collection data types and block.")),(0,i.kt)("p",null,"In addition, the ",(0,i.kt)("strong",{parentName:"p"},"config selector expressions")," can be used to init a schema instance, and we can ignore the comma at the end of the line in the config expression."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment {\n    name = "my-nginx"\n    cpu = 256\n    memory = 512\n    image = "nginx:1.14.2"\n    command = ["nginx"]  # Ignore the comma at the end of the line\n    labels.run = "my-nginx"  # A dict variable in schema can use selector expressions\n    labels.env = "pre-prod"  # A dict variable in schema can use selector expressions\n}\n')),(0,i.kt)("h2",{id:"5-write-more-complex-logic-in-schema"},"5. Write More Complex Logic in Schema"),(0,i.kt)("p",null,"Suppose we have some schema logic, we can wrapper it into schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Deployment[priority]:\n    name: str\n    cpu: int = _cpu\n    memory: int = _cpu * 2\n    image: str\n    service: "my-service" = "my-service"\n    replica: int = 1\n    command: [str]\n    labels?: {str:str}\n\n    _cpu = 2048\n    if priority == 1:\n        _cpu = 256\n    elif priority == 2:\n        _cpu = 512\n    elif priority == 3:\n        _cpu = 1024\n    else:\n        _cpu = 2048\n')),(0,i.kt)("p",null,"Now, we can define a config by creating a schema instance and pass in priority as an argument to schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment(priority=2) {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    command = ["nginx"]\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n}\n')),(0,i.kt)("p",null,"Run with kcl, we should see the generated yaml files as output as below:"),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl my_config.k\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  name: my-nginx\n  cpu: 512\n  memory: 1024\n  image: nginx:1.14.2\n  service: my-service\n  replica: 1\n  command:\n    - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n")),(0,i.kt)("h2",{id:"6-create-new-schema-via-schema-combinations"},"6. Create New Schema via Schema Combinations"),(0,i.kt)("p",null,"Now we want to define a detailed schema with service and volumes, we can do it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Deployment[priority]:\n    name: str\n    cpu: int = _cpu\n    memory: int = _cpu * 2\n    volumes?: [Volume]\n    image: str\n    service?: Service\n    replica: int = 1\n    command: [str]\n    labels?: {str:str}\n\n    if priority == 1:\n        _cpu = 256\n    elif priority == 2:\n        _cpu = 512\n    elif priority == 3:\n        _cpu = 1024\n    else:\n        _cpu = 2048\n\nschema Port:\n    name: str\n    protocol: str\n    port: int\n    targetPort: int\n\nschema Service:\n    name: "my-service" = "my-service"\n    ports: [Port]\n\nschema Volume:\n    name: str\n    mountPath: str\n    hostPath: str\n')),(0,i.kt)("p",null,"In this case, Deployment is composed of Service and a list of Volumes, and Service is composed of a list of Ports."),(0,i.kt)("h2",{id:"7-create-config-of-deeply-nested-schema-using-dictmap"},"7. Create Config of Deeply Nested Schema using Dict/Map"),(0,i.kt)("p",null,"Now we have a new Deployment schema, however, we may notice that it contains multiple layers of nested structures, in fact, this is very common in complex structure definitions, and we often have to write imperative assembly code to generate the final structure."),(0,i.kt)("p",null,"With KCL, we can create the config with simple dict declaration, with the capability of full schema initialization and validation. For example, we can simply config nginx by the new Deployment schema as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment(priority=2) {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    volumes = [Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n    service.ports = [Port {\n        name = "http"\n        protocol = "TCP"\n        port = 80\n        targetPort = 9376\n    }]\n}\n')),(0,i.kt)("p",null,"Run with KCL, we will see the generated yaml files as below:"),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl my_config.k\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  name: my-nginx\n  cpu: 512\n  memory: 1024\n  volumes:\n    - name: mydir\n      mountPath: /test-pd\n      hostPath: /data\n  image: nginx:1.14.2\n  service:\n    name: my-service\n    ports:\n      - name: http\n        protocol: TCP\n        port: 80\n        targetPort: 9376\n  replica: 1\n  command:\n    - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n")),(0,i.kt)("p",null,"Note that, the dict that we use to define Deployment config must be aligned with the schema definition, otherwise we will get an error. For example, suppose we define a wrong type of service port as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment(priority=2) {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    volumes = [Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n    service.ports = [Port {\n        name = "http"\n        protocol = "TCP"\n        port = [80]  # wrong data type, trying to assign List to int\n        targetPort = 9376\n    }]\n}\n')),(0,i.kt)("p",null,"Run with KCL, we will see the error message as output as below:"),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"kcl my_config.k\n")),(0,i.kt)("p",null,"Stderr:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The type got is inconsistent with the type expected: expect int, got [int(80)]\n")),(0,i.kt)("h2",{id:"8-declare-schema-validation-rules"},"8. Declare Schema Validation Rules"),(0,i.kt)("p",null,"Now we have seen a complex schema, in which every field has a type hint to make it less error-prone. But this is not good enough, we want to support more enhanced verifications to our schemas, so that code errors in schemas and configs can be discovered as soon as possible."),(0,i.kt)("p",null,"Lots of validation rules, like None type check, range check, value check, length check, regular expression matching, enum check have already been added or in progress. Here is a code sample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nschema Deployment[priority]:\n    name: str\n    cpu: int = _cpu\n    memory: int = _cpu * 2\n    volumes?: [Volume]\n    image: str\n    service?: Service\n    replica: int = 1\n    command: [str]\n    labels?: {str:str}\n\n    if priority == 1:\n        _cpu = 256\n    elif priority == 2:\n        _cpu = 512\n    elif priority == 3:\n        _cpu = 1024\n    else:\n        _cpu = 2048\n\n    check:\n        multiplyof(cpu, 256), "cpu must be a multiplier of 256"\n        regex.match(image, "^[a-zA-Z]+:\\d+\\.\\d+\\.\\d+$"), "image name should be like \'nginx:1.14.2\'"\n        1 <= replica < 100, "replica should be in range (1, 100)"\n        len(labels) >= 2 if labels, "the length of labels should be large or equal to 2"\n        "env" in labels, "\'env\' must be in labels"\n        len(command) > 0, "the command list should be non-empty"\n\nschema Port:\n    name: str\n    protocol: str\n    port: int\n    targetPort: int\n\n    check:\n        port in [80, 443], "we can only expose 80 and 443 port"\n        protocol in ["HTTP", "TCP"], "protocol must be either HTTP or TCP"\n        1024 < targetPort, "targetPort must be larger than 1024"\n\nschema Service:\n    name: "my-service" = "my-service"\n    ports: [Port]\n\n    check:\n        len(ports) > 0, "ports list must be non-empty"\n\nschema Volume:\n    name: str\n    mountPath: str\n    hostPath: str\n')),(0,i.kt)("p",null,"Since the attributes defined by the schema are ",(0,i.kt)("strong",{parentName:"p"},"required")," by default, the verification that judges that the variable cannot be None/Undefined can be omitted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"schema Volume:\n    name: str\n    mountPath: str\n    hostPath: str\n")),(0,i.kt)("p",null,"Now we can write the config based on the new schema and expose config errors in time. For example, with the invalid config as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment(priority=2) {\n    name = "my-nginx"\n    image = "nginx:1142"  # image value is not matching the regex\n    volumes = [Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n    service.ports = [Port {\n        name = "http"\n        protocol = "TCP"\n        port = 80\n        targetPort = 9376\n    }]\n}\n')),(0,i.kt)("p",null,"Every field is type-valid, but the image name is invalid."),(0,i.kt)("p",null,"Run with KCL, we will see the error message as below:"),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl my_config.k\n")),(0,i.kt)("p",null,"Stderr:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Schema check is failed to check condition: regex.match(image, "^[a-zA-Z]+:\\d+\\.\\d+\\.\\d+$"), "image name should be like \'nginx:1.14.2\'"\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The verification capability of KCL covers the verification defined by Openapi so that we can write any API verifications through KCL.")),(0,i.kt)("h2",{id:"9-create-new-schema-via-schema-inheritance"},"9. Create New Schema via Schema Inheritance"),(0,i.kt)("p",null,"Now we have a solid Deployment schema definition and we can use it to declare config."),(0,i.kt)("p",null,"Usually, schema Deployment will be used in multiple scenarios. We can directly use the schema to declare the configurations in different use cases (see the above section), or we can produce a more specific schema definition through inheritance."),(0,i.kt)("p",null,"For example, we can use the Deployment schema as a basis, to define the nginx's base schema, and extend the definition\nin each scenario."),(0,i.kt)("p",null,"In this case, we define some commonly used attributes. Please note that we mark the name to be immutable with the 'final' keyword to prevent it from being overwritten."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Nginx(Deployment):\n    """ A base nginx schema """\n    name: "my-nginx" = "my-nginx"\n    image: str = "nginx:1.14.2"\n    replica: int = 3\n    command: [str] = ["nginx"]\n\nschema NginxProd(Nginx):\n    """ A prod nginx schema with stable configurations """\n    volumes: [Volume] = [{\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    """ A volume mapped to host path """\n    service: Service = {\n        ports = [{\n            name = "http"\n            protocol = "TCP"\n            port = 80\n            targetPort = 9376\n        }]\n    }\n    """ An 80 port to target backend server """\n')),(0,i.kt)("p",null,"Now we have some static configurations for nginx. It is recommended to declare configurations that we think are static there, and put more dynamic configurations as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Nginx {\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'nginx = NginxProd {\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n}\n')),(0,i.kt)("p",null,'Now, we can simply define nginx prod config just with runtime label value "prod" which is not that static.'),(0,i.kt)("p",null,"In fact, under some complex situation, we can split all configurations into the basic, business, and environment configuration definitions in this way, and achieve collaboration among team members based on this."),(0,i.kt)("p",null,"Run with KCL, we will see the generated yaml files as output as below:"),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl prod_config.k\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  name: my-nginx\n  cpu: 512\n  memory: 1024\n  volumes:\n    - name: mydir\n      mountPath: /test-pd\n      hostPath: /data\n  image: nginx:1.14.2\n  service:\n    name: my-service\n    ports:\n      - name: http\n        protocol: TCP\n        port: 80\n        targetPort: 9376\n  replica: 3\n  command:\n    - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n")),(0,i.kt)("h2",{id:"10-create-new-schema-by-multiple-protocol-and-mixin-schemas-inheritance"},"10. Create New Schema by Multiple Protocol and Mixin Schemas Inheritance"),(0,i.kt)("p",null,"Now, we can complete the declaration of the server configuration through the Deployment schema."),(0,i.kt)("p",null,"However, usually, the actual situation is more complicated, and the deployment may have a variety of optional variable accessories."),(0,i.kt)("p",null,"For example, we want to support a persistent volume claim based on an existing schema, as a reusable Kubernetes schema. In this case, we can just wrapper it with a ",(0,i.kt)("inlineCode",{parentName:"p"},"mixin")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"protocol")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import k8spkg.api.core.v1\n\nprotocol PVCProtocol:\n    pvc?: {str:}\n\nmixin PersistentVolumeClaimMixin for PVCProtocol:\n    """\n    PersistentVolumeClaim (PVC) sample:\n    Link: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims\n    """\n\n    # Mix in a new attribute `kubernetesPVC`\n    kubernetesPVC?: v1.PersistentVolumeClaim\n\n    if pvc:\n        kubernetesPVC = v1.PersistentVolumeClaim {\n            metadata.name = pvc.name\n            metadata.labels = pvc.labels\n            spec = {\n                accessModes = pvc.accessModes\n                resources = pvc.resources\n                storageClassName = pvc.storageClassName\n            }\n        }\n')),(0,i.kt)("p",null,"With this PersistentVolumeClaimMixin, we define a PVC schema with a clear ",(0,i.kt)("inlineCode",{parentName:"p"},"user interface"),", and use Kubernetes PVC as an implementation. Then, we can define a server schema with Deployment schema, and PVC mixin schema."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'schema Server(Deployment):\n    mixin [PersistentVolumeClaimMixin]\n    pvc?: {str:}\n    """ pvc user interface data defined by PersistentVolumeClaimMixin """\n')),(0,i.kt)("p",null,"In the Server schema, Deployment is the base schema, and PersistentVolumeClaimMixin is an optional add-on whose user interface data is ",(0,i.kt)("inlineCode",{parentName:"p"},"pvc?: {str:}"),"."),(0,i.kt)("p",null,"Note, the ",(0,i.kt)("inlineCode",{parentName:"p"},"mixin")," is often used to add new attributes to the host schema, or to modify the existing attributes of the host schema. Thus, ",(0,i.kt)("inlineCode",{parentName:"p"},"mixin")," can use the attributes in the host schema. Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"mixin")," is designed to be reusable, we need an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"protocol")," to constrain the attribute names and types in the host schema for the ",(0,i.kt)("inlineCode",{parentName:"p"},"mixin"),"."),(0,i.kt)("p",null,"Now, if we want a deploy with a PVC, just declare as user interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'server = Server {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    volumes = [Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels = {\n        run = "my-nginx"\n        env = "pre-prod"\n    }\n    service.ports = [Port {\n        name = "http"\n        protocol = "TCP"\n        port = 80\n        targetPort = 9376\n    }]\n    pvc = {\n        name = "my_pvc"\n        accessModes = ["ReadWriteOnce"]\n        resources.requests.storage = "8Gi"\n        storageClassName = "slow"\n    }\n}\n')),(0,i.kt)("p",null,"Run with kcl, we will see the generated yaml files as output as below:"),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl server.k\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  name: my-nginx\n  cpu: 512\n  memory: 1024\n  volumes:\n    - name: mydir\n      mountPath: /test-pd\n      hostPath: /data\n  image: nginx:1.14.2\n  service:\n    name: my-service\n    ports:\n      - name: http\n        protocol: TCP\n        port: 80\n        targetPort: 9376\n  replica: 1\n  command:\n    - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n  pvc:\n    name: my_pvc\n    accessModes:\n      - ReadWriteOnce\n    resources:\n      requests:\n        storage: 8Gi\n    storageClassName: slow\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: my_pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: slow\n  resources:\n    requests:\n      storage: 8Gi\n")),(0,i.kt)("p",null,"If we don't want a persistent volume, just remove the pvc config block."),(0,i.kt)("h2",{id:"11-share-and-reuse-schema"},"11. Share and Reuse Schema"),(0,i.kt)("p",null,"The Server schema could be shared via ",(0,i.kt)("inlineCode",{parentName:"p"},"import"),", we can simply package our code with KCL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver = pkg.Server {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    volumes = [Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n    service.ports = [Port {\n        name = "http"\n        protocol = "TCP"\n        port = 80\n        targetPort = 9376\n    }]\n}\n')),(0,i.kt)("p",null,"Another skill we should know about sharing code is, modules under the same package do not need to import each other."),(0,i.kt)("p",null,"Suppose we have models in a pkg:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pkg/\n    - deploy.k\n    - server.k\n    - pvc.k\n")),(0,i.kt)("p",null,"And in ",(0,i.kt)("inlineCode",{parentName:"p"},"server.k"),", we can just use Deployment schema in ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.k")," and pvc schema in ",(0,i.kt)("inlineCode",{parentName:"p"},"pvc.k")," without import:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# no import needed\nschema Server(Deployment):\n    mixin [PersistentVolumeClaimMixin]\n    pvc?: {str:}\n    """ pvc user interface data defined by PersistentVolumeClaimMixin """\n')),(0,i.kt)("p",null,"And then users must import the pkg to use it as a whole:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver = pkg.Server {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    volumes = [pkg.Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels = {\n        run = "my-nginx"\n        env = "pre-prod"\n    }\n    service.ports = [pkg.Port {\n        name = "http"\n        protocol = "TCP"\n        port = 80\n        targetPort = 9376\n    }]\n}\n')),(0,i.kt)("p",null,"Run kcl command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl pkg_server.k\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  name: my-nginx\n  cpu: 512\n  memory: 1024\n  volumes:\n    - name: mydir\n      mountPath: /test-pd\n      hostPath: /data\n  image: nginx:1.14.2\n  service:\n    name: my-service\n    ports:\n      - name: http\n        protocol: TCP\n        port: 80\n        targetPort: 9376\n  replica: 1\n  command:\n    - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n")),(0,i.kt)("h2",{id:"12-the-final-step"},"12. The Final Step"),(0,i.kt)("p",null,"Congratulations!"),(0,i.kt)("p",null,"We have completed the second lesson about KCL, we have used KCL to replace our key-value text file to get better programming support."))}u.isMDXComponent=!0}}]);