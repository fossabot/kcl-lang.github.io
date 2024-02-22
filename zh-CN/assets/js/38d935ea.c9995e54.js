"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[51079],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={id:"vault",sidebar_label:"Vault"},i="Vault",o={unversionedId:"user_docs/guides/secret-management/vault",id:"version-0.5.3/user_docs/guides/secret-management/vault",title:"Vault",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.3/user_docs/guides/secret-management/1-vault.md",sourceDirName:"user_docs/guides/secret-management",slug:"/user_docs/guides/secret-management/vault",permalink:"/zh-CN/docs/0.5.3/user_docs/guides/secret-management/vault",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.3/user_docs/guides/secret-management/1-vault.md",tags:[],version:"0.5.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1708611628,formattedLastUpdatedAt:"2024\u5e742\u670822\u65e5",sidebarPosition:1,frontMatter:{id:"vault",sidebar_label:"Vault"},sidebar:"user_docs",previous:{title:"Gitlab CI",permalink:"/zh-CN/docs/0.5.3/user_docs/guides/ci-integration/gitlab-ci"},next:{title:"KusionStack",permalink:"/zh-CN/docs/0.5.3/user_docs/guides/working-with-kusion/"}},s={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5177\u4f53\u6b65\u9aa4",id:"\u5177\u4f53\u6b65\u9aa4",level:2},{value:"1. \u83b7\u5f97\u793a\u4f8b",id:"1-\u83b7\u5f97\u793a\u4f8b",level:3},{value:"2. \u9884\u5b58\u654f\u611f\u4fe1\u606f",id:"2-\u9884\u5b58\u654f\u611f\u4fe1\u606f",level:3},{value:"3. \u90e8\u7f72\u914d\u7f6e",id:"3-\u90e8\u7f72\u914d\u7f6e",level:3},{value:"4. \u9a8c\u8bc1\u654f\u611f\u4fe1\u606f",id:"4-\u9a8c\u8bc1\u654f\u611f\u4fe1\u606f",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vault"},"Vault"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"This guide will show you that KCL solves the secret management problem by integrating ",(0,l.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/vault"},"Vault")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helmfile/vals"},"Vals"),"."),(0,l.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install ",(0,l.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"KCL")),(0,l.kt)("li",{parentName:"ul"},"Prepare a ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes Cluster")),(0,l.kt)("li",{parentName:"ul"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/vault/downloads"},"Vault")),(0,l.kt)("li",{parentName:"ul"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/helmfile/vals"},"Vals"))),(0,l.kt)("h2",{id:"\u5177\u4f53\u6b65\u9aa4"},"\u5177\u4f53\u6b65\u9aa4"),(0,l.kt)("h3",{id:"1-\u83b7\u5f97\u793a\u4f8b"},"1. \u83b7\u5f97\u793a\u4f8b"),(0,l.kt)("p",null,"We put the application source code and infrastructure deployment code in different repos, which can be maintained by different roles to achieve the separation of concerns."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get the application code")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/secret-management/vault\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Show the config")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cat main.k\n")),(0,l.kt)("p",null,"The output is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# Secret Management using Vault and Vals\n\napiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n    annotations: {\n        "secret-store": "vault"\n        # Valid format:\n        #  "ref+vault://PATH/TO/KV_BACKEND#/KEY"\n        "foo": "ref+vault://secret/foo#/foo"\n        "bar": "ref+vault://secret/bar#/bar"\n    }\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"The main.k file extends the configuration of the Nginx application and customizes annotations. Among them, the value of annotation ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," follow secret reference format (",(0,l.kt)("inlineCode",{parentName:"p"},"ref+vault://PATH/TO/KV_BACKEND#/KEY"),"):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ref+vault"),": indicates that this is a secret reference, and the external storage service is ",(0,l.kt)("inlineCode",{parentName:"li"},"Vault"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PATH/TO/KV_BACKEND"),": specifies the path where a secret is stored."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"KEY"),": specifies the key to reading secret.")),(0,l.kt)("p",null,"The complete format is concatenated using a style similar to URI expressions, which can retrieve a secret stored externally."),(0,l.kt)("h3",{id:"2-\u9884\u5b58\u654f\u611f\u4fe1\u606f"},"2. \u9884\u5b58\u654f\u611f\u4fe1\u606f"),(0,l.kt)("p",null,"Start the Vault Server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vault server -dev\nexport VAULT_ADDR='http://127.0.0.1:8200'\n# Note: Replace with your token\nexport VAULT_TOKEN=yourtoken\n")),(0,l.kt)("p",null,"After Vault is started in development mode and unpacked, secrets are pre-stored, and the path and keys are consistent with ",(0,l.kt)("inlineCode",{parentName:"p"},"main.k"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vault kv put secret/foo foo=foo\nvault kv put secret/bar bar=bar\n")),(0,l.kt)("h3",{id:"3-\u90e8\u7f72\u914d\u7f6e"},"3. \u90e8\u7f72\u914d\u7f6e"),(0,l.kt)("p",null,"Using the following command to apply the deployment manifest."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl main.k | vals eval -f - | kubectl apply -f -\n")),(0,l.kt)("p",null,"The expect output is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"deployment.apps/nginx created\n")),(0,l.kt)("h3",{id:"4-\u9a8c\u8bc1\u654f\u611f\u4fe1\u606f"},"4. \u9a8c\u8bc1\u654f\u611f\u4fe1\u606f"),(0,l.kt)("p",null,"Next, verify that the secrets have been retrieved from Vault and replace the values of annotations of Nginx:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verify the ",(0,l.kt)("inlineCode",{parentName:"li"},"foo")," annotation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy nginx -o yaml | grep 'foo:'\n")),(0,l.kt)("p",null,"The output is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"foo: foo\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verify the ",(0,l.kt)("inlineCode",{parentName:"li"},"bar")," annotation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy nginx -o yaml | grep 'bar:'\n")),(0,l.kt)("p",null,"The output is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"bar: bar\n")),(0,l.kt)("p",null,"So far, we have retrieved the secrets hosted in ",(0,l.kt)("inlineCode",{parentName:"p"},"Vault")," and put them into use."),(0,l.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,l.kt)("p",null,"This guide introduces how KCL solves the secret management by integrating Vault and Vals. By following these steps, we can retrieve the secrets hosted in Vault and utilize them."))}d.isMDXComponent=!0}}]);