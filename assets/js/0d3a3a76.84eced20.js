"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29485],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57095:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},i="Use KCL to Generate and Manage Kubernetes Resources",s={unversionedId:"user_docs/guides/working-with-k8s/generate_k8s_manifests",id:"version-0.4.3/user_docs/guides/working-with-k8s/generate_k8s_manifests",title:"Use KCL to Generate and Manage Kubernetes Resources",description:"When we deploy software systems, we do not think they are fixed. Evolving business requirements, infrastructure requirements, and other factors mean that systems are constantly changing. When we need to change the system behavior quickly, and the change process needs expensive and lengthy reconstruction and redeployment process, business code change is often not enough. Configuration can provide us with a low overhead way to change system functions. For example, we often write JSON or YAML files as shown below for our system configuration.",source:"@site/versioned_docs/version-0.4.3/user_docs/guides/working-with-k8s/generate_k8s_manifests.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/generate_k8s_manifests",permalink:"/docs/0.4.3/user_docs/guides/working-with-k8s/generate_k8s_manifests",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/user_docs/guides/working-with-k8s/generate_k8s_manifests.md",tags:[],version:"0.4.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1690274001,formattedLastUpdatedAt:"Jul 25, 2023",frontMatter:{},sidebar:"user_docs",previous:{title:"Adopt From Kubernetes to KCL",permalink:"/docs/0.4.3/user_docs/guides/working-with-k8s/adopt_from_kubernetes"},next:{title:"KusionStack",permalink:"/docs/0.4.3/user_docs/guides/working-with-kusion/"}},l={},c=[{value:"Why use KCL",id:"why-use-kcl",level:2},{value:"How to use KCL to generate and manage Kubernetes resources",id:"how-to-use-kcl-to-generate-and-manage-kubernetes-resources",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Generate Kubernetes manifests",id:"generate-kubernetes-manifests",level:3},{value:"Write code to manage Kubernetes resources",id:"write-code-to-manage-kubernetes-resources",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-kcl-to-generate-and-manage-kubernetes-resources"},"Use KCL to Generate and Manage Kubernetes Resources"),(0,r.kt)("p",null,"When we deploy software systems, we do not think they are fixed. Evolving business requirements, infrastructure requirements, and other factors mean that systems are constantly changing. When we need to change the system behavior quickly, and the change process needs expensive and lengthy reconstruction and redeployment process, business code change is often not enough. Configuration can provide us with a low overhead way to change system functions. For example, we often write JSON or YAML files as shown below for our system configuration."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON configuration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "server": {\n        "addr": "127.0.0.1",\n        "listen": 4545\n    },\n    "database": {\n        "enabled": true,\n        "ports": [\n            8000,\n            8001,\n            8002\n        ],\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YAML configuration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  addr: 127.0.0.1\n  listen: 4545\ndatabase:\n  enabled: true\n  ports:\n  - 8000\n  - 8001\n  - 8002\n")),(0,r.kt)("p",null,"We can choose to store the static configuration in JSON and YAML files as needed. In addition, the configuration can also be stored in a high-level language that allows more flexible configuration, which can be coded, rendered, and statically configured. KCL is such a configuration language. We can write KCL code to generate JSON/YAML and other configurations."),(0,r.kt)("h2",{id:"why-use-kcl"},"Why use KCL"),(0,r.kt)("p",null,'When we manage the Kubernetes resources, we often maintain it by hand, or use Helm and Kustomize tools to maintain our YAML configurations or configuration templates, and then apply the resources to the cluster through kubectl tools. However, as a "YAML engineer", maintaining YAML configuration every day is undoubtedly trivial and boring, and prone to errors. For example as follows:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata: ... # Omit\nspec:\n  selector:\n    matchlabels:\n      cell: RZ00A\n  replicas: 2\n  template:\n    metadata: ... # Omit\n    spec:\n      tolerations:\n      - effect: NoSchedules\n        key: is-over-quota\n        operator: Equal\n        value: 'true'\n      containers:\n      - name: test-app\n          image: images.example/app:v1 # Wrong ident\n        resources:\n          limits:\n            cpu: 2 # Wrong type. The type of cpu should be str\n            memory: 4Gi\n            # Field missing: ephemeral-storage\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: is-over-quota\n                operator: In\n                values:\n                - 'true'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The structured data in YAML is untyped and lacks validation methods, so the validity of all data cannot be checked immediately."),(0,r.kt)("li",{parentName:"ul"},"YAML has poor programming ability. It is easy to write incorrect indents and has no common code organization methods such as logical judgment. It is easy to write a large number of repeated configurations and difficult to maintain."),(0,r.kt)("li",{parentName:"ul"},"The design of Kubernetes is complex, and it is difficult for users to understand all the details, such as the ",(0,r.kt)("inlineCode",{parentName:"li"},"toleration")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"affinity")," fields in the above configuration. If users do not understand the scheduling logic, it may be wrongly omitted or superfluous added.")),(0,r.kt)("p",null,"Therefore, KCL expects to solve the following problems in Kubernetes YAML resource management:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("strong",{parentName:"li"},"production level high-performance programming language")," to ",(0,r.kt)("strong",{parentName:"li"},"write code")," to improve the flexibility of configuration, such as conditional statements, loops, functions, package management and other features to improve the ability of configuration reuse."),(0,r.kt)("li",{parentName:"ul"},"Improve the ability of ",(0,r.kt)("strong",{parentName:"li"},"configuration semantic verification")," at the code level, such as optional/required fields, types, ranges, and other configuration checks."),(0,r.kt)("li",{parentName:"ul"},"Provide ",(0,r.kt)("strong",{parentName:"li"},"the ability to write, combine and abstract configuration blocks"),", such as structure definition, structure inheritance, constraint definition, etc.")),(0,r.kt)("h2",{id:"how-to-use-kcl-to-generate-and-manage-kubernetes-resources"},"How to use KCL to generate and manage Kubernetes resources"),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"First, you can visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/kcl-quick-start"},"KCL Quick Start")," to download and install KCL according to the instructions, and then prepare a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," environment."),(0,r.kt)("h3",{id:"generate-kubernetes-manifests"},"Generate Kubernetes manifests"),(0,r.kt)("p",null,"We can write the following KCL code and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k"),". KCL is inspired by Python. Its basic syntax is very close to Python, which is easy to learn. The configuration mode is simple, ",(0,r.kt)("inlineCode",{parentName:"p"},"k [: T] = v"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," denotes the configured attribute name, ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," denotes the configured attribute value and ",(0,r.kt)("inlineCode",{parentName:"p"},": T")," denotes an optional type annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"In the above KCL code, we declare the ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kind"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," and other variables of a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," resource, and assign the corresponding contents respectively. In particular, we will assign ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.labels")," fields are reused in ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.selector.matchLabels")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.metadata.labels")," field. It can be seen that, compared with YAML, the data structure defined by KCL is more compact, and configuration reuse can be realized by defining local variables."),(0,r.kt)("p",null,"We can get a Kubernetes YAML file by executing the following command line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n")),(0,r.kt)("p",null,"Of course, we can use KCL together with kubectl and other tools. Let's execute the following commands and see the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k | kubectl apply -f -\n\ndeployment.apps/nginx-deployment configured\n")),(0,r.kt)("p",null,"It can be seen from the command line that it is completely consistent with the deployment experience of using YAML configuration and kubectl application directly."),(0,r.kt)("p",null,"Check the deployment status through kubectl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy\n\nNAME               READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   3/3     3            3           15s\n")),(0,r.kt)("h3",{id:"write-code-to-manage-kubernetes-resources"},"Write code to manage Kubernetes resources"),(0,r.kt)("p",null,"When publishing Kubernetes resources, we often encounter scenarios where configuration parameters need to be dynamically specified. For example, different environments need to set different ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," field values to generate resources in different environments. For this scenario, we can dynamically receive external parameters through KCL conditional statements and ",(0,r.kt)("inlineCode",{parentName:"p"},"option")," functions. Based on the above example, we can adjust the configuration parameters according to different environments. For example, for the following code, we wrote a conditional statement and entered a dynamic parameter named ",(0,r.kt)("inlineCode",{parentName:"p"},"env"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2" if option("env") == "prod" else "${metadata.name}:latest"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Use the KCL command line ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," flag to receive an external dynamic parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -D env=prod\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'image=metadata.name+": 1.14.2" if option ("env")=="prod" else metadata.name + ": latest"')," in the above code snippet means that when the value of the dynamic parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"prod"),", the value of the image field is ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx: 1.14.2"),"; otherwise, it is' nginx: latest'. Therefore, we can set env to different values as required to obtain Kubernetes resources with different contents."),(0,r.kt)("p",null,"KCL also supports maintaining the dynamic parameters of the option function in the configuration file, such as writing the ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_options:\n  - key: env\n    value: prod\n")),(0,r.kt)("p",null,"The same YAML output can be obtained by using the following command line to simplify the input process of KCL dynamic parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -Y kcl.yaml\n")),(0,r.kt)("p",null,"The output is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n")))}d.isMDXComponent=!0}}]);