"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=o,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"ArgoCD",sidebar_position:6},i=void 0,s={unversionedId:"user_docs/guides/working-with-k8s/argocd",id:"version-0.5.0/user_docs/guides/working-with-k8s/argocd",title:"ArgoCD",description:"Introduction",source:"@site/versioned_docs/version-0.5.0/user_docs/guides/working-with-k8s/argocd.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/argocd",permalink:"/docs/user_docs/guides/working-with-k8s/argocd",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/user_docs/guides/working-with-k8s/argocd.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1688289324,formattedLastUpdatedAt:"Jul 2, 2023",sidebarPosition:6,frontMatter:{title:"ArgoCD",sidebar_position:6},sidebar:"user_docs",previous:{title:"KPT KCL SDK",permalink:"/docs/user_docs/guides/working-with-k8s/kpt_kcl_sdk"},next:{title:"Overview",permalink:"/docs/user_docs/guides/working-with-konfig/overview"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Configure Plugins",id:"1-configure-plugins",level:3},{value:"2. Update ArgoCD Deployment",id:"2-update-argocd-deployment",level:3},{value:"3. Create KCL Project",id:"3-create-kcl-project",level:3},{value:"4. Configure Drift Detection",id:"4-configure-drift-detection",level:3},{value:"Summary",id:"summary",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"ArgoCD has already some common built-in plugins, including helm, jsonnet, and kustomize. For KCL, as a brand-new configuration language, if you want to integrate ArgoCD to complete drift detection, you need to follow its plugin mechanism and configure KCL as a third-party plugin."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Install ArgoCD:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n")),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("h3",{id:"1-configure-plugins"},"1. Configure Plugins"),(0,o.kt)("p",null,"Write the patch YAML configuration file and update the ArgoCD configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<EOF > patch-argocd-cm.yaml\ndata:\n  configManagementPlugins: |\n    - name: kcl\n      generate:\n        command: ["kcl"]\n      lockRepo: true\nEOF\nkubectl -n argocd patch cm/argocd-cm -p "$(cat patch-argocd-cm.yaml)"\n')),(0,o.kt)("h3",{id:"2-update-argocd-deployment"},"2. Update ArgoCD Deployment"),(0,o.kt)("p",null,"After completing the first step, ArgoCD will recognize the KCL plugin, but the KCL plugin has not been loaded into the ArgoCD image. To implement configuration drift detection, we have to tune the Deployment of argocd-repo-server."),(0,o.kt)("p",null,"Download ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/examples/blob/main/kusion/argo-cd/patch-argocd-repo-server.yaml"},"patch")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://raw.githubusercontent.com/KusionStack/examples/main/kusion/argo-cd/patch-argocd-repo-server.yaml\n")),(0,o.kt)("p",null,"Update configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n argocd patch deploy/argocd-repo-server -p "$(cat patch-argocd-repo-server.yaml)"\n')),(0,o.kt)("p",null,"Update complete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n argocd -l app.kubernetes.io/name=argocd-repo-server\n")),(0,o.kt)("h3",{id:"3-create-kcl-project"},"3. Create KCL Project"),(0,o.kt)("p",null,"At this point, the preparation work has been completed, and now the verification process is started. Here we use example projects from the open-source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig")," library."),(0,o.kt)("p",null,"Enable local port forwarding"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/argocd-server -n argocd 8080:443\n")),(0,o.kt)("p",null,"Login to ArgoCD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"argocd login localhost:8080\n")),(0,o.kt)("p",null,"Create ArgoCD Application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"argocd app create guestbook-test \\\n--repo https://github.com/KusionStack/konfig.git \\\n--path appops/guestbook/prod \\\n--dest-namespace default \\\n--dest-server https://kubernetes.default.svc \\\n--config-management-plugin kcl\n")),(0,o.kt)("p",null,"If you are using a private repository, you need to configure the private repository access with private key credentials before executing the create command."),(0,o.kt)("p",null,"Please refer ",(0,o.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/#ssh-private-key-credential"},"Private Repositories")," for more details."),(0,o.kt)("p",null,"After successfully creating, you can see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"application 'guestbook-test' created\n")),(0,o.kt)("p",null,"Through the ArgoCD UI, you can see that the created applications have not been synchronized yet.\nHere, you can manually synchronize or set automatic synchronization."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(49352).Z,width:"1330",height:"380"})),(0,o.kt)("p",null,"Set synchronization policy (only ",(0,o.kt)("inlineCode",{parentName:"p"},"unsynced")," resources):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"argocd app set guestbook-test --sync-option ApplyOutOfSyncOnly=true\n")),(0,o.kt)("p",null,"For more information on synchronization strategies, see ",(0,o.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/"},"Sync Options")),(0,o.kt)("p",null,"Sync succeeded:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(53722).Z,width:"2654",height:"362"})),(0,o.kt)("h3",{id:"4-configure-drift-detection"},"4. Configure Drift Detection"),(0,o.kt)("p",null,"At this point, the ArgoCD monitoring KCL project has been completed, implement configuration drift detection and achieve result consistency.\nLet's modify the mirror version of ",(0,o.kt)("inlineCode",{parentName:"p"},"guestbook-test")," to implement configuration changes."),(0,o.kt)("p",null,"Update image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},' appConfiguration: frontend.Server {\n-    image = "gcr.io/google-samples/gb-frontend:v4"\n+    image = "gcr.io/google-samples/gb-frontend:v5"\n     schedulingStrategy.resource = res_tpl.tiny\n }\n')),(0,o.kt)("p",null,"Compile Again"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kusion compile -w appops/guestbook/prod\n")),(0,o.kt)("p",null,"Git commit and push"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "manual drifted config for appops/guestbook/prod"\ngit push origin main\n')),(0,o.kt)("p",null,"Drift configuration auto-convergence"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(33820).Z,width:"2654",height:"414"})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This document introduces how to integrate KCL as a third-party plugin into ArgoCD for configuration drift detection. It includes the prerequisite of installing ArgoCD, the quick start steps including configuring plugins, updating ArgoCD deployment, creating KCL projects, and configuring drift detection."))}u.isMDXComponent=!0},49352:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/out-of-sync-37f958b3a8b314e916ea330492dee2f0.jpg"},33820:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reconcile-drifted-config-40ba407f682c028fa3ebd7cd403881a7.jpg"},53722:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/synced-9247a7d5a6437d211b07ae03344a8ac3.jpg"}}]);