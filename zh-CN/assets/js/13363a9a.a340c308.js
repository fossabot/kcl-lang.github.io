"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25460],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>k});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),m=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=m(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,k=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return a?t.createElement(k,o(o({ref:n},p),{},{components:a})):t.createElement(k,o({ref:n},p))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<l;m++)o[m]=a[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18201:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var t=a(87462),r=(a(67294),a(3905));const l={},o="KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Helm \u7bc7",s={unversionedId:"user_docs/guides/working-with-k8s/vs_helm",id:"version-0.4.6/user_docs/guides/working-with-k8s/vs_helm",title:"KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Helm \u7bc7",description:"\u8fd9\u4e00\u8282\u6211\u4eec\u901a\u8fc7\u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5bf9\u6bd4\u5982 Helm \u4ecb\u7ecd KCL \u5728 Kubernetes \u914d\u7f6e\u7ba1\u7406\u573a\u666f\u66f4\u4e30\u5bcc\u7684\u5185\u5bb9\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.6/user_docs/guides/working-with-k8s/vs_helm.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/vs_helm",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/vs_helm",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/working-with-k8s/vs_helm.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1690462472,formattedLastUpdatedAt:"2023\u5e747\u670827\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"Kustomize KCL \u63d2\u4ef6",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/kustomize_kcl_plugin"},next:{title:"KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Kustomize \u7bc7",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/vs_kustomize"}},i={},m=[{value:"Helm",id:"helm",level:2},{value:"KCL",id:"kcl",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u672a\u6765\u8ba1\u5212",id:"\u672a\u6765\u8ba1\u5212",level:2}],p={toc:m},c="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl-\u4e0e\u5176\u4ed6-kubernetes-\u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c---helm-\u7bc7"},"KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Helm \u7bc7"),(0,r.kt)("p",null,"\u8fd9\u4e00\u8282\u6211\u4eec\u901a\u8fc7\u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5bf9\u6bd4\u5982 Helm \u4ecb\u7ecd KCL \u5728 Kubernetes \u914d\u7f6e\u7ba1\u7406\u573a\u666f\u66f4\u4e30\u5bcc\u7684\u5185\u5bb9\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," \u662f\u4e00\u4e2a\u4e3a Kubernetes \u5bf9\u8c61\u751f\u6210\u53ef\u90e8\u7f72\u6e05\u5355\u7684\u5de5\u5177\uff0c\u5b83\u627f\u62c5\u4e86\u4ee5\u4e24\u79cd\u4e0d\u540c\u5f62\u5f0f\u751f\u6210\u6700\u7ec8\u6e05\u5355\u7684\u4efb\u52a1\u3002Helm \u662f\u4e00\u4e2a\u7ba1\u7406 Kubernetes \u5305\uff08\u79f0\u4e3a charts\uff09\u7684\u5fc5\u5907\u6a21\u677f\u5de5\u5177\u3002\u56fe\u8868\u662f YAML \u6e05\u5355\u7684\u6a21\u677f\u5316\u7248\u672c\uff0c\u5176\u4e2d\u6df7\u5408\u4e86 Go template \u7684\u5b50\u96c6\uff0c\u5b83\u4e5f\u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5668\uff0c\u53ef\u4ee5\u6253\u5305\u3001\u914d\u7f6e\u548c\u90e8\u7f72/\u5e94\u7528 Helm \u56fe\u8868\u5230 Kubernetes \u96c6\u7fa4\u3002"),(0,r.kt)("p",null,"\u5728 KCL \u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u66f4\u591a\u7684\u5de5\u5177\u548c IDE \u63d2\u4ef6\u652f\u6301\u76f4\u63a5\u7f16\u5199\u914d\u7f6e\u4ee3\u7801\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u6a21\u677f\u6587\u4ef6\uff0c\u8fd9\u4e9b\u5de5\u5177\u548c\u63d2\u4ef6\u652f\u6301\u9700\u8981\u5728\u76f8\u5e94\u4f4d\u7f6e\u7684\u4ee3\u7801\u4e2d\u8fdb\u884c\u4fee\u6539\uff0c\u4ece\u800c\u6d88\u9664\u4e86\u8bfb\u53d6 YAML \u7684\u6210\u672c\u3002\u540c\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4ee3\u7801\u91cd\u7528\u914d\u7f6e\u7247\u6bb5\uff0c\u907f\u514d\u4e86YAML \u914d\u7f6e\u7684\u5927\u91cf\u590d\u5236\u548c\u7c98\u8d34\u3002\u4fe1\u606f\u5bc6\u5ea6\u66f4\u9ad8\uff0c\u66f4\u4e0d\u5bb9\u6613\u51fa\u9519\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u4ee5\u4e00\u4e2a\u7ecf\u5178\u7684 Helm Chart \u914d\u7f6e\u7ba1\u7406\u7684\u4f8b\u5b50\u8be6\u7ec6\u8bf4\u660e Kustomize \u548c KCL \u5728 Kubernetes \u8d44\u6e90\u914d\u7f6e\u7ba1\u7406\u4e0a\u7684\u533a\u522b\u3002"),(0,r.kt)("h2",{id:"helm"},"Helm"),(0,r.kt)("p",null,"Helm \u5177\u5907 ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"template")," \u7684\u6982\u5ff5, \u901a\u5e38\u4e00\u4e2a Helm Chart \u7531\u4e00\u4e2a\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," \u7684\u8def\u5f84\u7ec4\u6210\u3002\u6211\u4eec\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u83b7\u5f97\u4e00\u4e2a\u5178\u578b\u7684 Helm Chart \u5de5\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"workload-helm")," \u76ee\u5f55\u6765\u4fdd\u5b58 chart \u5de5\u7a0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a directory to hold the chart project\nmkdir workload-helm\n# Create a workload-helm/Chart.yaml\ncat <<EOF > workload-helm/Chart.yaml\napiVersion: v2\nappVersion: 0.3.0\ndescription: A helm chart to provision standard workloads.\nname: workload\ntype: application\nversion: 0.3.0\nEOF\n# Create a workload-helm/values.yaml\ncat <<EOF > workload-helm/values.yaml\nservice:\n  type: ClusterIP\n  ports:\n    - name: www\n      protocol: TCP\n      port: 80\n      targetPort: 80\n\ncontainers:\n  my-container:\n    image:\n      name: busybox:latest\n    command: ["/bin/echo"]\n    args: \n      - "-c"\n      - "Hello World!"\n    resources:\n      limits:\n        cpu: 100m\n        memory: 128Mi\n      requests:\n        cpu: 100m\n        memory: 128Mi\nEOF\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6a21\u7248\u6587\u4ef6\u5939")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a directory to hold templates\nmkdir workload-helm/templates\n# Create a workload-helm/templates/helpers.tpl\ncat <<EOF > workload-helm/templates/helpers.tpl\n{{/*\nExpand the name of the chart.\n*/}}\n{{- define "workload.name" -}}\n{{- default .Release.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}\n{{- end }}\n{{/*\nCreate a default fully qualified app name.\nWe truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).\nIf release name contains chart name it will be used as a full name.\n*/}}\n{{- define "workload.fullname" -}}\n{{- \\$name := default .Chart.Name .Values.nameOverride }}\n{{- if contains \\$name .Release.Name }}\n{{- .Release.Name | trunc 63 | trimSuffix "-" }}\n{{- else }}\n{{- printf "%s-%s" .Release.Name \\$name | trunc 63 | trimSuffix "-" }}\n{{- end }}\n{{- end }}\n{{/*\nCreate chart name and version as used by the chart label.\n*/}}\n{{- define "workload.chart" -}}\n{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}\n{{- end }}\n{{/*\nCommon labels\n*/}}\n{{- define "workload.labels" -}}\nhelm.sh/chart: {{ include "workload.chart" . }}\n{{ include "workload.selectorLabels" . }}\n{{- if .Chart.AppVersion }}\napp.kubernetes.io/version: {{ .Chart.AppVersion | quote }}\n{{- end }}\napp.kubernetes.io/managed-by: {{ .Release.Service }}\n{{- end }}\n{{/*\nSelector labels\n*/}}\n{{- define "workload.selectorLabels" -}}\napp.kubernetes.io/name: {{ include "workload.name" . }}\napp.kubernetes.io/instance: {{ .Release.Name }}\n{{- end }}\nEOF\ncat <<EOF > workload-helm/templates/deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ include "workload.name" . }}\n  labels:\n    {{- include "workload.labels" . | nindent 4 }}\nspec:\n  selector:\n    matchLabels:\n      {{- include "workload.selectorLabels" . | nindent 6 }}\n  template:\n    metadata:\n      labels:\n        {{- include "workload.selectorLabels" . | nindent 8 }}\n    spec:\n      containers:\n        {{- range \\$name, \\$container := .Values.containers }}\n        - name: {{ \\$name }}\n          image: "{{ $container.image.name }}"\n          {{- with \\$container.command }}\n          command:\n            {{- toYaml \\$container.command | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.args }}\n          args:\n            {{- toYaml \\$container.args | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.env }}\n          env:\n            {{- toYaml \\$container.env | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.volumeMounts }}\n          volumeMounts:\n            {{- toYaml \\$container.volumeMounts | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.livenessProbe }}\n          livenessProbe:\n            {{- toYaml \\$container.livenessProbe | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.readinessProbe }}\n          readinessProbe:\n            {{- toYaml \\$container.readinessProbe | nindent 12 }}\n          {{- end }}\n          {{- with \\$container.resources }}\n          resources:\n            {{- toYaml \\$container.resources | nindent 12 }}\n          {{- end }}\n        {{- end }}\nEOF\ncat <<EOF > workload-helm/templates/service.yaml\n{{ if .Values.service }}\napiVersion: v1\nkind: Service\nmetadata:\n  name: {{ include "workload.name" . }}\n  labels:\n    {{- include "workload.labels" . | nindent 4 }}\nspec:\n  type: {{ .Values.service.type }}\n  selector:\n    {{- include "workload.selectorLabels" . | nindent 4 }}\n  {{- with .Values.service.ports }}\n  ports:\n    {{- toYaml . | nindent 4 }}\n  {{- end }}\n{{- end }}\nEOF\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u5f97\u5230\u5982\u4e0b\u7684 Helm chart \u5de5\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},".\n\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 templates\n\u2502   \u251c\u2500\u2500 _helpers.tpl\n\u2502   \u251c\u2500\u2500 deployment.yaml\n\u2502   \u2514\u2500\u2500 service.yaml\n\u2514\u2500\u2500 values.yaml\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u7684\u547d\u4ee4\u6e32\u67d3\u771f\u5b9e\u7684\u90e8\u7f72\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm template workload-helm\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u5f97\u5230\u5982\u4e0b YAML \u8f93\u51fa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\n# Source: workload-helm/templates/service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: release-name\n  labels:\n    helm.sh/chart: workload-0.3.0\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\n    app.kubernetes.io/version: "0.3.0"\n    app.kubernetes.io/managed-by: Helm\nspec:\n  type: ClusterIP\n  selector:\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\n  ports:\n    - name: www\n      port: 80\n      protocol: TCP\n      targetPort: 80\n---\n# Source: workload-helm/templates/deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: release-name\n  labels:\n    helm.sh/chart: workload-0.3.0\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\n    app.kubernetes.io/version: "0.3.0"\n    app.kubernetes.io/managed-by: Helm\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: release-name\n      app.kubernetes.io/instance: release-name\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: release-name\n        app.kubernetes.io/instance: release-name\n    spec:\n      containers:\n        - name: my-container\n          image: "busybox:latest"\n          command:\n            - /bin/echo\n          args:\n            - -c\n            - Hello World!\n          resources:\n            limits:\n              cpu: 100m\n              memory: 128Mi\n            requests:\n              cpu: 100m\n              memory: 128Mi\n')),(0,r.kt)("h2",{id:"kcl"},"KCL"),(0,r.kt)("p",null,"\u5728 KCL \u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e0e Helm ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u76f8\u4f3c\u7684\u52a8\u6001\u914d\u7f6e\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u6587\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u7684\u547d\u4ee4\u83b7\u5f97\u4e00\u4e2a\u5178\u578b\u7684 KCL \u5de5\u7a0b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"workload-kcl")," \u76ee\u5f55\u6765\u4fdd\u5b58 KCL \u5de5\u7a0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a directory to hold the KCL project\nmkdir workload-kcl\n# Create a workload-kcl/kcl.yaml\ncat <<EOF > workload-kcl/kcl.yaml\nkcl_options:\n  - key: containers\n    value:\n      my-container:\n        image:\n          name: busybox:latest\n        command: ["/bin/echo"]\n        args: \n          - "-c"\n          - "Hello World!"\n        resources:\n          limits:\n            cpu: 100m\n            memory: 128Mi\n          requests:\n            cpu: 100m\n            memory: 128Mi\n\n  - key: service\n    value:\n      type: ClusterIP\n      ports:\n        - name: www\n          protocol: TCP\n          port: 80\n          targetPort: 80\nEOF\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5982\u4e0b KCL \u6587\u4ef6\u6765\u4fdd\u5b58 kubernetes \u8d44\u6e90")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a workload-kcl/deployment.k\ncat <<EOF > workload-kcl/deployment.k\napiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "release-name"\n    labels = {\n        "app.kubernetes.io/name" = "release-name"\n        "app.kubernetes.io/instance" = "release-name"\n    }\n}\nspec = {\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = name\n            image = container.image.name\n            command = container.command\n            command = container.args\n            env = container.env\n            resources = container.resources\n        } for name, container in option("containers") or {}\n    ]\n}\nEOF\ncat <<EOF > workload-kcl/service.k\napiVersion = "v1"\nkind = "Service"\nmetadata = {\n    name = "release-name"\n    labels = {\n        "app.kubernetes.io/name" = "release-name"\n        "app.kubernetes.io/instance" = "release-name"\n    }\n}\nspec = {\n    selector.matchLabels = metadata.labels\n    type = option("service", default={})?.type\n    ports = option("service", default={})?.ports\n}\nEOF\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0 KCL \u4ee3\u7801\u4e2d\u6211\u4eec\u5206\u522b\u58f0\u660e\u4e86\u4e00\u4e2a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," \u8d44\u6e90\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kind"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," \u7b49\u53d8\u91cf\uff0c\u5e76\u5206\u522b\u8d4b\u503c\u4e86\u76f8\u5e94\u7684\u5185\u5bb9\uff0c\u7279\u522b\u5730\uff0c\u6211\u4eec\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.labels")," \u5b57\u6bb5\u5206\u522b\u91cd\u7528\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.selector.matchLabels")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.metadata.labels")," \u5b57\u6bb5\u3002\u53ef\u4ee5\u770b\u51fa\uff0c\u76f8\u6bd4\u4e8e Helm \u6a21\u7248 \u6216\u8005 YAML\uff0cKCL \u5b9a\u4e49\u7684\u6570\u636e\u7ed3\u6784\u66f4\u52a0\u7d27\u51d1\uff0c\u800c\u4e14\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u5c40\u90e8\u53d8\u91cf\u5b9e\u73b0\u914d\u7f6e\u91cd\u7528\u3002"),(0,r.kt)("p",null,"\u5728 KCL \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6761\u4ef6\u8bed\u53e5\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"option")," \u5185\u7f6e\u51fd\u6570\u63a5\u6536\u52a8\u6001\u53c2\u6570\uff0c\u5e76\u8bbe\u7f6e\u4e0d\u540c\u7684\u914d\u7f6e\u503c\u4ee5\u751f\u6210\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u7684\u547d\u4ee4\u5f97\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," YAML \u8f93\u51fa:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Deployment"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kcl workload-kcl/deployment.k -Y workload-kcl/kcl.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: release-name\n  labels:\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: release-name\n      app.kubernetes.io/instance: release-name\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: release-name\n        app.kubernetes.io/instance: release-name\n    spec:\n      containers:\n      - name: my-container\n        image: busybox:latest\n        command:\n        - -c\n        - Hello World!\n        resources:\n          limits:\n            cpu: 100m\n            memory: 128Mi\n          requests:\n            cpu: 100m\n            memory: 128Mi\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Service"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kcl workload-kcl/service.k -Y workload-kcl/kcl.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: release-name\n  labels:\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: release-name\n      app.kubernetes.io/instance: release-name\n  type: ClusterIP\n  ports:\n  - name: www\n    protocol: TCP\n    port: 80\n    targetPort: 80\n")),(0,r.kt)("p",null,"\u6b64\u5916\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," \u6807\u5fd7\u8bbe\u7f6e\u989d\u5916\u7684\u53c2\u6570\u5e76\u8986\u76d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u6587\u4ef6\u7684\u914d\u7f6e\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kcl workload-kcl/service.k -Y workload-kcl/kcl.yaml -D service=None\napiVersion: v1\nkind: Service\nmetadata:\n  name: release-name\n  labels:\n    app.kubernetes.io/name: release-name\n    app.kubernetes.io/instance: release-name\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: release-name\n      app.kubernetes.io/instance: release-name\n  type: null\n  ports: null\n")),(0,r.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0c\u4e0e Helm \u76f8\u6bd4\uff0cKCL \u901a\u8fc7\u5728\u914d\u7f6e\u91cd\u7528\u548c\u8986\u76d6\u7684\u57fa\u7840\u4e0a\u751f\u6210\u4ee3\u7801\uff0c\u51cf\u5c11\u4e86\u914d\u7f6e\u6587\u4ef6\u548c\u4ee3\u7801\u884c\u7684\u6570\u91cf\u3002\u4e0e Helm \u4e00\u6837\uff0c\u5b83\u662f\u4e00\u4e2a\u7eaf\u5ba2\u6237\u7aef\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u5c06\u914d\u7f6e\u548c\u7b56\u7565\u9a8c\u8bc1\u5c3d\u53ef\u80fd\u5730\u5de6\u79fb\uff0c\u800c\u4e0d\u4f1a\u5bf9\u96c6\u7fa4\u9020\u6210\u989d\u5916\u7684\u4f9d\u8d56\u6216\u8d1f\u62c5\uff0c\u6216\u8005\u751a\u81f3\u6ca1\u6709 Kubernetes \u96c6\u7fa4\u65f6\u4e5f\u53ef\u4ee5\u901a\u8fc7 KCL Schema \u7b49\u7279\u6027\u5bf9 YAML \u8fdb\u884c\u5145\u5206\u9a8c\u8bc1\u548c\u6d4b\u8bd5\u3002"),(0,r.kt)("p",null,"Helm \u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".tpl")," \u6587\u4ef6\u4e2d\u5b9a\u4e49\u53ef\u91cd\u7528\u6a21\u677f\uff0c\u5e76\u652f\u6301\u5176\u4ed6\u6a21\u677f\u5f15\u7528\u5b83\u3002\u4f46\u662f\uff0c\u53ea\u6709\u6a21\u677f\u5b9a\u4e49\u624d\u80fd\u91cd\u7528\u3002\u5728\u4e00\u4e2a\u590d\u6742\u7684 Helm \u56fe\u8868\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u8bb8\u591a\u9644\u52a0\u7684\u57fa\u672c\u6a21\u677f\u3002\u4e0e Helm \u7e41\u7410\u7684\u5199\u4f5c\u65b9\u6cd5\u76f8\u6bd4\uff0cKCL \u4e2d\u7684\u6240\u6709\u5185\u5bb9\u90fd\u662f\u53d8\u91cf\u3002\u6307\u5b9a\u6a21\u677f\u4e0d\u9700\u8981\u5176\u4ed6\u8bed\u6cd5\u3002\u4efb\u4f55\u53d8\u91cf\u90fd\u53ef\u4ee5\u76f8\u4e92\u5f15\u7528\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0cHelm \u4e2d\u8fd8\u6709\u5927\u91cf\u4e0e\u5b9e\u9645\u903b\u8f91\u65e0\u5173\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"{{- include }}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nindent")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"toYaml")," \u6807\u8bb0\u5b57\u7b26\uff0c\u6211\u4eec\u9700\u8981\u8ba1\u7b97\u6bcf\u4e2a Helm \u5f15\u7528\u5904\u7684\u7a7a\u683c\u548c\u7f29\u8fdb\u3002\u5728 KCL \u4e2d\uff0c\u65e0\u7528\u4ee3\u7801\u66f4\u5c11\uff0c\u5e76\u4e14\u4e0d\u9700\u8981\u5f88\u591a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"{{*}}")," \u6765\u6807\u8bb0\u4ee3\u7801\u5757\uff0c\u4fe1\u606f\u5bc6\u5ea6\u66f4\u9ad8\u3002"),(0,r.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0cKCL \u548c Helm Chart \u5e76\u4e0d\u5bf9\u7acb\u3002\u6211\u4eec\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528 KCL \u7f16\u5199 Helm \u6a21\u677f\u6216\u8005\u4f7f\u7528 KCL \u6765\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),"\uff0c\u6216\u8005\u4e3a\u73b0\u6709\u7684 Helm \u56fe\u8868\u63d0\u4f9b\u53ef\u7f16\u7a0b\u6269\u5c55\u529f\u80fd\uff0c\u6bd4\u5982\u4e3a Helm \u5f00\u53d1\u53ef\u9009\u7684 KCL Schema \u63d2\u4ef6\u6765\u9a8c\u8bc1\u5df2\u6709\u7684 Helm \u56fe\u8868\u6216\u8005\u4e3a Helm Chart \u7f16\u5199\u989d\u5916\u7684 Transformer \u6765 Patch \u5df2\u6709\u7684 Helm Chart\u3002"),(0,r.kt)("h2",{id:"\u672a\u6765\u8ba1\u5212"},"\u672a\u6765\u8ba1\u5212"),(0,r.kt)("p",null,"\u6211\u4eec\u540e\u7eed\u8ba1\u5212 KCL \u7684\u6a21\u578b\u548c\u7ea6\u675f\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u5305\u6765\u7ba1\u7406\uff08\u8fd9\u4e2a\u5305\u53ea\u6709 KCL \u6587\u4ef6\uff09\u3002\u4f8b\u5982\uff0cKubernetes \u7684\u6a21\u578b\u548c\u7ea6\u675f\u53ef\u4ee5\u5f00\u7bb1\u5373\u7528\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5df2\u6709\u7684\u6a21\u578b\u751f\u6210\u914d\u7f6e\u6216\u9a8c\u8bc1\u73b0\u6709\u914d\u7f6e\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 KCL \u7ee7\u627f\u624b\u6bb5\u7b80\u5355\u5730\u6269\u5c55\u7528\u6237\u60f3\u8981\u7684\u6a21\u578b\u548c\u7ea6\u675f\u3002"),(0,r.kt)("p",null,"\u5728\u6b64\u9636\u6bb5\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Git \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oras-project/oras"},"OCI Registry as Storage\uff08ORAS)")," \u7b49\u5de5\u5177\u6765\u7ba1\u7406 KCL \u914d\u7f6e\u7248\u672c\u3002"))}u.isMDXComponent=!0}}]);