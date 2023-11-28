"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={id:"github-actions",sidebar_label:"Github Actions"},r="Github Actions Integration",s={unversionedId:"user_docs/guides/ci-integration/github-actions",id:"user_docs/guides/ci-integration/github-actions",title:"Github Actions Integration",description:"Introduction",source:"@site/docs/user_docs/guides/ci-integration/1-github-actions.md",sourceDirName:"user_docs/guides/ci-integration",slug:"/user_docs/guides/ci-integration/github-actions",permalink:"/docs/next/user_docs/guides/ci-integration/github-actions",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/ci-integration/1-github-actions.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:1,frontMatter:{id:"github-actions",sidebar_label:"Github Actions"},sidebar:"user_docs",previous:{title:"Quick Start",permalink:"/docs/next/user_docs/guides/gitops/gitops-quick-start"},next:{title:"Gitlab CI",permalink:"/docs/next/user_docs/guides/ci-integration/gitlab-ci"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"How to",id:"how-to",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Commit the Application Code",id:"2-commit-the-application-code",level:3},{value:"3. Configuration Automatic Update",id:"3-configuration-automatic-update",level:3},{value:"Summary",id:"summary",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github-actions-integration"},"Github Actions Integration"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In the GitOps section, we have introduced how to integrate KCL with GitOps. In this section, we will continue to provide sample solutions for KCL and CI integrations. We hope to implement the end-to-end application development process by using containers, Continuous Integration (CI) for generation, and GitOps for Continuous Deployment (CD). In this scheme, we use a ",(0,o.kt)("strong",{parentName:"p"},"Flask application")," and ",(0,o.kt)("strong",{parentName:"p"},"Github Actions")," as examples."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You can use any containerized application and different CI systems such as ",(0,o.kt)("strong",{parentName:"p"},"Gitlab CI"),", ",(0,o.kt)("strong",{parentName:"p"},"Jenkins CI"),", etc. in this solution.")),(0,o.kt)("p",null,"The overall workflow is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Develop application code and submit it to the GitHub repository to trigger CI."),(0,o.kt)("li",{parentName:"ul"},"GitHub Actions generate container images from application code and push them to the ",(0,o.kt)("inlineCode",{parentName:"li"},"docker.io")," container registry."),(0,o.kt)("li",{parentName:"ul"},"GitHub Actions automatically synchronizes and updates the KCL manifest deployment file based on the version of the container image in the docker.io container registry.")),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL"))),(0,o.kt)("h2",{id:"how-to"},"How to"),(0,o.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,o.kt)("p",null,"We put the application source code and infrastructure deployment code in different repos, which can be maintained by different roles to achieve the separation of concerns."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get the application code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/flask-demo.git/\ncd flask-demo\n")),(0,o.kt)("p",null,"This is a web application written in Python. We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the application directory to generate a container image of this application, and also use Github CI to automatically build a image named ",(0,o.kt)("inlineCode",{parentName:"p"},"flask_demo"),", the CI configuration is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# This is a basic workflow to help you get started with Actions\n\nname: CI\n\n# Controls when the workflow will run\non:\n  # Triggers the workflow on push or pull request events but only for the main branch\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\njobs:\n  # This workflow contains a single job called "build"\n  build:\n    # The type of runner that the job will run on\n    runs-on: ubuntu-latest\n\n    # Steps represent a sequence of tasks that will be executed as part of the job\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - uses: actions/checkout@v2\n\n      - name: Docker Login\n        uses: docker/login-action@v1.10.0\n        with:\n          username: ${{ secrets.DOCKER_USERNAME }}\n          password: ${{ secrets.DOCKER_PASSWORD }}\n          logout: true\n\n      # Runs a set of commands using the runners shell\n      - name: build image\n        run: |\n          make image\n          docker tag flask_demo:latest ${{ secrets.DOCKER_USERNAME }}/flask_demo:${{ github.sha }}\n          docker push ${{ secrets.DOCKER_USERNAME }}/flask_demo:${{ github.sha }}\n\n      # Trigger KCL manifest\n      - name: Trigger CI\n        uses: InformaticsMatters/trigger-ci-action@1.0.1\n        with:\n          ci-owner: kcl-lang\n          ci-repository: flask-demo-kcl-manifests\n          ci-ref: refs/heads/main\n          ci-user: kcl-bot\n          ci-user-token: ${{ secrets.DEPLOY_ACCESS_TOKEN }}\n          ci-name: CI\n          ci-inputs: >-\n            image=${{ secrets.DOCKER_USERNAME }}/flask_demo\n            sha-tag=${{ github.sha }}\n')),(0,o.kt)("p",null,"We need the workflow in the source code repository to automatically trigger the workflow in the deployment manifest repository. At this point, we need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets.DEPLOY_ACCESS_TOKEN")," with Github CI operation permissions and ",(0,o.kt)("strong",{parentName:"p"},"Docker Hub")," image push account information ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets.DOCKER_USERNAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets.DOCKER_PASSWORD")," can be configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secrets and variables")," settings of the Github, as shown in the following figure"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(37711).Z,width:"2204",height:"632"})),(0,o.kt)("h3",{id:"2-commit-the-application-code"},"2. Commit the Application Code"),(0,o.kt)("p",null,"After submitting in the ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-demo")," repository, Github will automatically build a container image and push it to the Docker hub. It will also then trigger the Action of the ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-demo-kcl-manifest")," repository and modify the image value in the deployment manifest repository through ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/automation"},"KCL Automation API"),". Now let's create a submission in the ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-demo")," repository, and we can see that the code submission triggers the Github CI process for the application repository."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4991).Z,width:"2252",height:"1038"})),(0,o.kt)("h3",{id:"3-configuration-automatic-update"},"3. Configuration Automatic Update"),(0,o.kt)("p",null,"After the Github CI process in the application repository is completed, an automatic update configuration CI will be triggered in the repository where the KCL configuration is stored and submitted to the main branch of the ",(0,o.kt)("inlineCode",{parentName:"p"},"flask-demo-kcl-manifests")," repository. The commit information is as follows"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(47725).Z,width:"2240",height:"1090"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We can obtain the deployment manifest source code for compilation and validation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/flask-demo-kcl-manifests.git/\ncd flask-demo-kcl-manifests\ngit checkout main && git pull && kcl\n")),(0,o.kt)("p",null,"The output YAML is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: flask_demo\n  template:\n    metadata:\n      labels:\n        app: flask_demo\n    spec:\n      containers:\n        - name: flask_demo\n          image: "kcllang/flask_demo:6428cff4309afc8c1c40ad180bb9cfd82546be3e"\n          ports:\n            - protocol: TCP\n              containerPort: 5000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  type: NodePort\n  selector:\n    app: flask_demo\n  ports:\n    - port: 5000\n      protocol: TCP\n      targetPort: 5000\n')),(0,o.kt)("p",null,"From the above configuration, it can be seen that the image of the resource is indeed automatically updated to the newly constructed image value. In addition, we can also use the ",(0,o.kt)("strong",{parentName:"p"},"Argo CD KCL plugin")," to automatically synchronize data from the Git repository and deploy the application to the Kubernetes cluster."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"By integrating KCL and Github CI, we can integrate the container build and delivery workflow by automatically updating the image values in the configuration, in order to achieve end-to-end application development process and improve R&D deployment efficiency."))}d.isMDXComponent=!0},4991:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/app-ci-8be610b01c177f72ff2f2f617b7305bd.png"},37711:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/github-secrets-997c2a5201a5ae259e3310d6015d1f9e.png"},47725:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-auto-update-514f27b74172b114a5dc877e98fd88f4.png"}}]);