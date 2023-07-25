"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55304],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},63892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={},i="Differences between KCL and Kustomize",l={unversionedId:"user_docs/guides/working-with-k8s/vs_kustomize",id:"version-0.4.5/user_docs/guides/working-with-k8s/vs_kustomize",title:"Differences between KCL and Kustomize",description:"In this section, we introduced KCL's Kubernetes configuration management scenarios more richly by comparing it with other Kubernetes configuration management tools, such as Kustomize.",source:"@site/versioned_docs/version-0.4.5/user_docs/guides/working-with-k8s/vs_kustomize.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/vs_kustomize",permalink:"/docs/0.4.5/user_docs/guides/working-with-k8s/vs_kustomize",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/user_docs/guides/working-with-k8s/vs_kustomize.md",tags:[],version:"0.4.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1690274001,formattedLastUpdatedAt:"Jul 25, 2023",frontMatter:{},sidebar:"user_docs",previous:{title:"Differences between KCL and Helm",permalink:"/docs/0.4.5/user_docs/guides/working-with-k8s/vs_helm"},next:{title:"Overview",permalink:"/docs/0.4.5/user_docs/guides/working-with-konfig/overview"}},s={},p=[{value:"Kustomize",id:"kustomize",level:2},{value:"KCL",id:"kcl",level:2},{value:"Summary",id:"summary",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"differences-between-kcl-and-kustomize"},"Differences between KCL and Kustomize"),(0,o.kt)("p",null,"In this section, we introduced KCL's Kubernetes configuration management scenarios more richly by comparing it with other Kubernetes configuration management tools, such as Kustomize."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kustomize.io/"},"Kustomize")," provides a solution to customize the basic configuration and differential configuration of Kubernetes resources without templates. The configuration can be merged or overwritten through file-level YAML configuration with multiple strategies. In Kustomize, users need to know more about the content and location to be changed, For basic YAML with complex recursion too deep, it may not be easy to match Kustomize files through selectors."),(0,o.kt)("p",null,"In KCL, the user can directly write the configuration that needs to be modified in the corresponding code in the corresponding place, eliminating the cost of reading basic YAML. At the same time, the user can reuse the configuration fragments by code, avoiding massive copying and pasting of YAML configuration. The information density is higher, and it is not easy to make mistakes through KCL."),(0,o.kt)("p",null,"A classic example of Kustomize multi-environment configuration management is used to explain the differences between Kustomize and KCL in Kubernetes resource configuration management."),(0,o.kt)("h2",{id:"kustomize"},"Kustomize"),(0,o.kt)("p",null,"Kustomize has the concepts of ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"overlay"),". In general, base and overlay are general a directory including a ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," file. One base directory can be used by multiple overlay directories."),(0,o.kt)("p",null,"We can execute the following command line to obtain a typical Kustomize project"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a base directory and create a deployment resource")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a directory to hold the base\nmkdir base\n# Create a base/deployment.yaml\ncat <<EOF > base/deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ldap\n  labels:\n    app: ldap\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: ldap\n  template:\n    metadata:\n      labels:\n        app: ldap\n    spec:\n      containers:\n        - name: ldap\n          image: osixia/openldap:1.1.11\n          args: ["--copy-service"]\n          volumeMounts:\n            - name: ldap-data\n              mountPath: /var/lib/ldap\n          ports:\n            - containerPort: 389\n              name: openldap\n      volumes:\n        - name: ldap-data\n          emptyDir: {}\nEOF\n# Create a base/kustomization.yaml\ncat <<EOF > base/kustomization.yaml\nresources:\n- deployment.yaml\nEOF\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a directory to hold the prod overlay configuration.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a directory to hold the prod overlay\nmkdir prod\n# Create a prod/deployment.yaml\ncat <<EOF > prod/deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ldap\nspec:\n  replicas: 6\n  template:\n    spec:\n      volumes:\n        - name: ldap-data\n          emptyDir: null\n          gcePersistentDisk:\n            readOnly: true\n            pdName: ldap-persistent-storage\nEOF\ncat <<EOF > prod/kustomization.yaml\nresources:\n  - ../base\npatchesStrategicMerge:\n  - deployment.yaml\nEOF\n")),(0,o.kt)("p",null,"Thus, we can get a basic Kustomize directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},".\n\u251c\u2500\u2500 base\n\u2502   \u251c\u2500\u2500 deployment.yaml\n\u2502   \u2514\u2500\u2500 kustomization.yaml\n\u2514\u2500\u2500 prod\n    \u251c\u2500\u2500 deployment.yaml\n    \u2514\u2500\u2500 kustomization.yaml\n")),(0,o.kt)("p",null,"The base directory stores the basic deployment configuration, and the prod environment stores the deployment configuration that needs to be overwritten. The ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.name")," and other attributes such as ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.template.spec.volumes[0].name")," are used to indicate which resource to overwrite"),(0,o.kt)("p",null,"We can display the real deployment configuration of the prod environment through the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl kustomize ./prod\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: ldap\n  name: ldap\nspec:\n  replicas: 6\n  selector:\n    matchLabels:\n      app: ldap\n  template:\n    metadata:\n      labels:\n        app: ldap\n    spec:\n      containers:\n      - args:\n        - --copy-service\n        image: osixia/openldap:1.1.11\n        name: ldap\n        ports:\n        - containerPort: 389\n          name: openldap\n        volumeMounts:\n        - mountPath: /var/lib/ldap\n          name: ldap-data\n      volumes:\n      - gcePersistentDisk:\n          pdName: ldap-persistent-storage\n          readOnly: true\n        name: ldap-data\n")),(0,o.kt)("p",null,"We can also directly apply the configuration to the cluster through the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -k ./prod\n\ndeployment.apps/ldap created\n")),(0,o.kt)("h2",{id:"kcl"},"KCL"),(0,o.kt)("p",null,"We can write the following KCL code and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"main.k"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "ldap"\n    labels.app = "ldap"\n}\nspec = {\n    replicas = 1\n    # When env is prod, override the `replicas` attribute with `6`\n    if option("env") == "prod": replicas = 6\n    # Assign `metadata.labels` to `selector.matchLabels`\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "osixia/openldap:1.1.11"\n            args = ["--copy-service"]\n            volumeMounts = [{ name = "ldap-data", mountPath = "/var/lib/ldap" }]\n            ports = [{ containerPort = 80, name = "openldap" }]\n        }\n    ]\n    template.spec.volumes = [\n        {\n            name = "ldap-data"\n            emptyDir = {}\n            # When env is prod\n            # override the `emptyDir` attribute with `None`\n            # patch a `gcePersistentDisk` attribute with the value `{readOnly = True, pdName = "ldap-persistent-storage"}`\n            if option("env") == "prod":\n                emptyDir = None\n                gcePersistentDisk = {\n                    readOnly = True\n                    pdName = "ldap-persistent-storage"\n                }\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"In the above KCL code, we declare the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kind"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"spec")," and other attributes of a Kubernetes ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment")," resource, and assign the corresponding contents respectively. In particular, we assign ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.labels")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.selector.matchLabels")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.template.metadata.labels"),". It can be seen that the data structure defined by KCL is more compact than Kustomize or YAML, and configuration reuse can be realized by defining local variables."),(0,o.kt)("p",null,"In KCL, we can dynamically receive external parameters through conditional statements and the ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," builtin function, and set different configuration values for different environments to generate resources. For example, for the above code, we wrote a conditional statement and entered a dynamic parameter named ",(0,o.kt)("inlineCode",{parentName:"p"},"env"),". When ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"prod"),", we will overwrite the ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas")," attribute from ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"6"),", and make some adjustments to the volume configuration named ",(0,o.kt)("inlineCode",{parentName:"p"},"ldap-data"),", such as changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"emptyDir")," attribute to ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", and adding the configuration value of ",(0,o.kt)("inlineCode",{parentName:"p"},"gcePersistentDisk"),"."),(0,o.kt)("p",null,"We can use the following command to view diff between different environment configurations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"diff \\\n  <(kcl main.k) \\\n  <(kcl main.k -D env=prod) |\\\n  more\n")),(0,o.kt)("p",null,"The output is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"8c8\n<   replicas: 1\n---\n>   replicas: 6\n30c30,33\n<         emptyDir: {}\n---\n>         emptyDir: null\n>         gcePersistentDisk:\n>           readOnly: true\n>           pdName: ldap-persistent-storage\n")),(0,o.kt)("p",null,"It can be seen that the diff between the production environment configuration and the base configuration mainly lies in the attributes of ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"emptyDir")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gcePersistentDisk"),", which is consistent with the expectation."),(0,o.kt)("p",null,"In addition, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-o")," parameter of the KCL command line tool to output the compiled YAML to a file and view the diff between files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate base deployment\nkcl main.k -o deployment.yaml\n# Generate prod deployment\nkcl main.k -o prod-deployment.yaml -D env=prod\n# Diff prod deployment and base deployment\ndiff prod-deployment.yaml deployment.yaml\n")),(0,o.kt)("p",null,"Of course, we can also use KCL tools together with kubectl and other tools to apply the configuration of the production environment to the cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k -D env=prod | kubectl apply -f -\n\ndeployment.apps/ldap created\n")),(0,o.kt)("p",null,"Finally, check the deployment status through kubectl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy\n\nNAME   READY   UP-TO-DATE   AVAILABLE   AGE\nldap   0/6     6            0           15s\n")),(0,o.kt)("p",null,"It can be seen from the results of the command that it is completely consistent with the deployment experience of using Kustomize configuration and kubectl apply directly, and there are no more side effects."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This article briefly introduces the quick start of writing complex multi-environment Kubernetes configuration with KCL and the comparison of Kustomize tool for Kubernetes multi-environment configuration management."),(0,o.kt)("p",null,"It can be seen that, compared with Kustomize, KCL reduces the number of configuration files and code lines by means of code generation on the basis of configuration reuse and coverage, And like Kustomize, it is a pure client solution, which can move the configuration and policy verification to the left as far as possible without additional dependency or burden on the cluster, or even without a real Kubernetes cluster."))}m.isMDXComponent=!0}}]);