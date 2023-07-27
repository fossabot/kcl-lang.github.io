"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3564],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>k});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),m=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=m(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(a),u=r,k=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return a?t.createElement(k,l(l({ref:n},c),{},{components:a})):t.createElement(k,l({ref:n},c))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88769:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var t=a(87462),r=(a(67294),a(3905));const o={},l="Differences between KCL and Helm",i={unversionedId:"user_docs/guides/working-with-k8s/vs_helm",id:"version-0.4.4/user_docs/guides/working-with-k8s/vs_helm",title:"Differences between KCL and Helm",description:"In this section, we introduced KCL's Kubernetes configuration management scenarios more richly by comparing it with other Kubernetes configuration management tools, such as Helm.",source:"@site/versioned_docs/version-0.4.4/user_docs/guides/working-with-k8s/vs_helm.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/vs_helm",permalink:"/docs/0.4.4/user_docs/guides/working-with-k8s/vs_helm",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/user_docs/guides/working-with-k8s/vs_helm.md",tags:[],version:"0.4.4",lastUpdatedBy:"peefy",lastUpdatedAt:1690462472,formattedLastUpdatedAt:"Jul 27, 2023",frontMatter:{},sidebar:"user_docs",previous:{title:"Use KCL to Generate and Manage Kubernetes Resources",permalink:"/docs/0.4.4/user_docs/guides/working-with-k8s/generate_k8s_manifests"},next:{title:"Differences between KCL and Kustomize",permalink:"/docs/0.4.4/user_docs/guides/working-with-k8s/vs_kustomize"}},s={},m=[{value:"Helm",id:"helm",level:2},{value:"KCL",id:"kcl",level:2},{value:"Summary",id:"summary",level:2},{value:"Future Plan",id:"future-plan",level:2},{value:"More Documents",id:"more-documents",level:2}],c={toc:m},p="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"differences-between-kcl-and-helm"},"Differences between KCL and Helm"),(0,r.kt)("p",null,"In this section, we introduced KCL's Kubernetes configuration management scenarios more richly by comparing it with other Kubernetes configuration management tools, such as Helm."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," is a tool for generating deployable manifests for Kubernetes objects, which philosophically takes the task of generating the final manifests in two distinct forms. Helm is an imperative templating tool for managing Kubernetes packages called charts. Charts are a templated version of your yaml manifests with a subset of Go Templating mixed throughout, as well it is a package manager for kubernetes that can package, configure, and deploy/apply the helm charts onto kubernetes clusters."),(0,r.kt)("p",null,"In KCL, the user can directly write the configuration instead of template files with more tools and IDE plugin support that needs to be modified in the corresponding code in the corresponding place, eliminating the cost of reading basic YAML. At the same time, the user can reuse the configuration fragments by code, avoiding massive copying and pasting of YAML configuration. The information density is higher, and it is not easy to make mistakes through KCL."),(0,r.kt)("p",null,"A classic example of helm chart configuration management is used to explain the differences between Helm and KCL in Kubernetes resource configuration management."),(0,r.kt)("h2",{id:"helm"},"Helm"),(0,r.kt)("p",null,"Helm has the concepts of ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"template"),". In general, the Helm chart project is generally a directory including a ",(0,r.kt)("inlineCode",{parentName:"p"},"Chart.yaml"),"."),(0,r.kt)("p",null,"We can execute the following command line to obtain a typical Helm Chart project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a directory named ",(0,r.kt)("inlineCode",{parentName:"li"},"workload-helm")," to hold the chart project")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a directory to hold the chart project\nmkdir workload-helm\n# Create a workload-helm/Chart.yaml\ncat <<EOF > workload-helm/Chart.yaml\napiVersion: v2\nappVersion: 0.3.0\ndescription: A helm chart to provision standard workloads.\nname: workload\ntype: application\nversion: 0.3.0\nEOF\n# Create a workload-helm/values.yaml\ncat <<EOF > workload-helm/values.yaml\nservice:\n  type: ClusterIP\n  ports:\n    - name: www\n      protocol: TCP\n      port: 80\n      targetPort: 80\n\ncontainers:\n  my-container:\n    image:\n      name: busybox:latest\n    command: ["/bin/echo"]\n    args: \n      - "-c"\n      - "Hello World!"\n    resources:\n      limits:\n        cpu: 100m\n        memory: 128Mi\n      requests:\n        cpu: 100m\n        memory: 128Mi\nEOF\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a directory to hold templates")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a directory to hold templates\nmkdir workload-helm/templates\n# Create a workload-helm/templates/helpers.tpl\ncat <<EOF > workload-helm/templates/helpers.tpl\n{{/*\nExpand the name of the chart.\n*/}}\n{{- define "workload.name" -}}\n{{- default .Release.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}\n{{- end }}\n{{/*\nCreate a default fully qualified app name.\nWe truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).\nIf release name contains chart name it will be used as a full name.\n*/}}\n{{- define "workload.fullname" -}}\n{{- \\$name := default .Chart.Name .Values.nameOverride }}\n{{- if contains \\$name .Release.Name }}\n{{- .Release.Name | trunc 63 | trimSuffix "-" }}\n{{- else }}\n{{- printf "%s-%s" .Release.Name \\$name | trunc 63 | trimSuffix "-" }}\n{{- end }}\n{{- end }}\n{{/*\nCreate chart name and version as used by the chart label.\n*/}}\n{{- define "workload.chart" -}}\n{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}\n{{- end }}\n{{/*\nCommon labels\n*/}}\n{{- define "workload.labels" -}}\nhelm.sh/chart: {{ include "workload.chart" . }}\n{{ include "workload.selectorLabels" . }}\n{{- if .Chart.AppVersion }}\napp.kubernetes.io/version: {{ .Chart.AppVersion | quote }}\n{{- end }}\napp.kubernetes.io/managed-by: {{ .Release.Service }}\n{{- end }}\n{{/*\nSelector labels\n*/}}\n{{- define "workload.selectorLabels" -}}\napp.kubernetes.io/name: {{ include "workload.name" . }}\napp.kubernetes.io/instance: {{ .Release.Name }}\n{{- end }}\nEOF\ncat <<EOF > workload-helm/templates/deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ include "workload.name" . }}\n  labels:\n    {{- include "workload.labels" . | nindent 4 }}\nspec:\n  selector:\n    matchLabels:\n      {{- include "workload.selectorLabels" . | nindent 6 }}\n  template:\n    metadata:\n      labels:\n        {{- include "workload.selectorLabels" . | nindent 8 }}\n    spec:\n      containers:\n        {{- range \\$name, \\$container := .Values.containers }}\n        - name: {{ \\$name }}\n          image: "{{ $container.image.name }}"\n          {{- with \\$container.command }}\n          command:\n            {{- toYaml \\$container.command | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.args }}\n          args:\n            {{- toYaml \\$container.args | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.env }}\n          env:\n            {{- toYaml \\$container.env | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.volumeMounts }}\n          volumeMounts:\n            {{- toYaml \\$container.volumeMounts | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.livenessProbe }}\n          livenessProbe:\n            {{- toYaml \\$container.livenessProbe | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.readinessProbe }}\n          readinessProbe:\n            {{- toYaml \\$container.readinessProbe | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.resources }}\n          resources:\n            {{- toYaml \\$container.resources | nindent 12 }}\n          {{- end }}\n        {{- end }}\nEOF\ncat <<EOF > workload-helm/templates/service.yaml\n{{ if .Values.service }}\napiVersion: v1\nkind: Service\nmetadata:\n  name: {{ include "workload.name" . }}\n  labels:\n    {{- include "workload.labels" . | nindent 4 }}\nspec:\n  type: {{ .Values.service.type }}\n  selector:\n    {{- include "workload.selectorLabels" . | nindent 4 }}\n  {{- with .Values.service.ports }}\n  ports:\n    {{- toYaml . | nindent 4 }}\n  {{- end }}\n{{- end }}\nEOF\n')),(0,r.kt)("p",null,"Thus, we can get a basic Helm chart directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},".\n\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 templates\n\u2502   \u251c\u2500\u2500 _helpers.tpl\n\u2502   \u251c\u2500\u2500 deployment.yaml\n\u2502   \u2514\u2500\u2500 service.yaml\n\u2514\u2500\u2500 values.yaml\n")),(0,r.kt)("p",null,"We can display the real deployment configuration of through the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm template workload-helm\n")),(0,r.kt)("p",null,"The output YAML is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\n# Source: workload-helm/templates/service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: release-name\n  labels:\n    helm.sh/chart: workload-0.3.0\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\n    app.kubernetes.io/version: "0.3.0"\n    app.kubernetes.io/managed-by: Helm\nspec:\n  type: ClusterIP\n  selector:\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\n  ports:\n    - name: www\n      port: 80\n      protocol: TCP\n      targetPort: 80\n---\n# Source: workload-helm/templates/deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: release-name\n  labels:\n    helm.sh/chart: workload-0.3.0\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\n    app.kubernetes.io/version: "0.3.0"\n    app.kubernetes.io/managed-by: Helm\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: release-name\n      app.kubernetes.io/instance: release-name\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: release-name\n        app.kubernetes.io/instance: release-name\n    spec:\n      containers:\n        - name: my-container\n          image: "busybox:latest"\n          command:\n            - /bin/echo\n          args:\n            - -c\n            - Hello World!\n          resources:\n            limits:\n              cpu: 100m\n              memory: 128Mi\n            requests:\n              cpu: 100m\n              memory: 128Mi\n')),(0,r.kt)("h2",{id:"kcl"},"KCL"),(0,r.kt)("p",null,"In KCL, we provide the ability similar to Helm ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," to configure dynamic parameters through configuration files ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.yaml"),"."),(0,r.kt)("p",null,"We can execute the following command line to obtain a typical KCL project with the ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.yaml"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a directory named ",(0,r.kt)("inlineCode",{parentName:"li"},"workload-kcl")," to hold the KCL project")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a directory to hold the KCL project\nmkdir workload-kcl\n# Create a workload-kcl/kcl.yaml\ncat <<EOF > workload-kcl/kcl.yaml\nkcl_options:\n  - key: containers\n    value:\n      my-container:\n        image:\n          name: busybox:latest\n        command: ["/bin/echo"]\n        args: \n          - "-c"\n          - "Hello World!"\n        resources:\n          limits:\n            cpu: 100m\n            memory: 128Mi\n          requests:\n            cpu: 100m\n            memory: 128Mi\n\n  - key: service\n    value:\n      type: ClusterIP\n      ports:\n        - name: www\n          protocol: TCP\n          port: 80\n          targetPort: 80\nEOF\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create KCL files to hold kubernetes resources.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a workload-kcl/deployment.k\ncat <<EOF > workload-kcl/deployment.k\napiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "release-name"\n    labels = {\n        "app.kubernetes.io/name" = "release-name"\n        "app.kubernetes.io/instance" = "release-name"\n    }\n}\nspec = {\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = name\n            image = container.image.name\n            command = container.command\n            command = container.args\n            env = container.env\n            resources = container.resources\n        } for name, container in option("containers") or {}\n    ]\n}\nEOF\ncat <<EOF > workload-kcl/service.k\napiVersion = "v1"\nkind = "Service"\nmetadata = {\n    name = "release-name"\n    labels = {\n        "app.kubernetes.io/name" = "release-name"\n        "app.kubernetes.io/instance" = "release-name"\n    }\n}\nspec = {\n    selector.matchLabels = metadata.labels\n    type = option("service", default={})?.type\n    ports = option("service", default={})?.ports\n}\nEOF\n')),(0,r.kt)("p",null,"In the above KCL code, we declare the ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kind"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," and other attributes of Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," resources, and assign the corresponding contents respectively. In particular, we assign ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.labels")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.selector.matchLabels")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.metadata.labels"),". It can be seen that the data structure defined by KCL is more compact than Helm template or YAML, and configuration reuse can be realized by defining local variables."),(0,r.kt)("p",null,"In KCL, we can dynamically receive external parameters through conditional statements and the ",(0,r.kt)("inlineCode",{parentName:"p"},"option")," builtin function, and set different configuration values to generate resources."),(0,r.kt)("p",null,"We can get the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," resources throw the following command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Deployment"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl workload-kcl/deployment.k -Y workload-kcl/kcl.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: release-name\n  labels:\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: release-name\n      app.kubernetes.io/instance: release-name\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: release-name\n        app.kubernetes.io/instance: release-name\n    spec:\n      containers:\n      - name: my-container\n        image: busybox:latest\n        command:\n        - -c\n        - Hello World!\n        resources:\n          limits:\n            cpu: 100m\n            memory: 128Mi\n          requests:\n            cpu: 100m\n            memory: 128Mi\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Service"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl workload-kcl/service.k -Y workload-kcl/kcl.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: release-name\n  labels:\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: release-name\n      app.kubernetes.io/instance: release-name\n  type: ClusterIP\n  ports:\n  - name: www\n    protocol: TCP\n    port: 80\n    targetPort: 80\n")),(0,r.kt)("p",null,"In addition, we can overwrite the value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," file with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," parameter, such as executing the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl workload-kcl/service.k -Y workload-kcl/kcl.yaml -D service=None\napiVersion: v1\nkind: Service\nmetadata:\n  name: release-name\n  labels:\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: release-name\n      app.kubernetes.io/instance: release-name\n  type: null\n  ports: null\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"It can be seen that, compared with Helm, KCL reduces the number of configuration files and code lines by means of code generation on the basis of configuration reuse and coverage, And like Helm, it is a pure client solution, which can move the configuration and policy verification to the left as far as possible without additional dependency or burden on the cluster, or even without a real Kubernetes cluster."),(0,r.kt)("p",null,"Helm can define reusable templates in the ",(0,r.kt)("inlineCode",{parentName:"p"},".tpl")," file and support other templates to reference it. However, only defined templates can be reused. In a complex Helm chart project, we need to define a lot of additional basic templates. Compared with the cumbersome writing method of Helm, all contents in KCL are variables. No additional syntax is required to specify templates. Any variables can be referenced to each other."),(0,r.kt)("p",null,"In addition, there are a large number of ",(0,r.kt)("inlineCode",{parentName:"p"},"{{- include }}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nindent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"toYaml")," tag characters that have nothing to do with actual logic in Helm. You need to calculate spaces and indents at each reference. In KCL, there are fewer useless codes, and there is no need for too many ",(0,r.kt)("inlineCode",{parentName:"p"},"{{*}}")," to mark code blocks. The information density is higher, and the indentation and space have been completely liberated."),(0,r.kt)("p",null,"In fact, KCL and Helm are not antagonistic. We can even use KCL to write HelmRelease templates and provide programmable extension capabilities for existing Helm chart to write YAML validators."),(0,r.kt)("h2",{id:"future-plan"},"Future Plan"),(0,r.kt)("p",null,"We also expect that KCL models and constraints can be managed as a package (this package has only KCL files). For example, the Kubernetes models and constraints can be used out of the box. Users can generate configurations or verify existing configurations, and can simply extend the models and constraints users want through KCL inheritance."),(0,r.kt)("p",null,"At this stage, you can use tools such as Git or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oras-project/oras"},"OCI Registry As Storage (ORAS)")," to manage KCL configuration versions."),(0,r.kt)("h2",{id:"more-documents"},"More Documents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"KCL Github Repo: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl"},"https://github.com/kcl-lang/kcl")),(0,r.kt)("li",{parentName:"ul"},"KCL Website: ",(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io"},"https://kcl-lang.io"))))}d.isMDXComponent=!0}}]);