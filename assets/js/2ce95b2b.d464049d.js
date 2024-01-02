"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[6774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={id:"gitlab-ci",sidebar_label:"Gitlab CI"},r="Gitlab CI Integration",l={unversionedId:"user_docs/guides/ci-integration/gitlab-ci",id:"version-0.5.1/user_docs/guides/ci-integration/gitlab-ci",title:"Gitlab CI Integration",description:"Introduction",source:"@site/versioned_docs/version-0.5.1/user_docs/guides/ci-integration/2-gitlab-ci.md",sourceDirName:"user_docs/guides/ci-integration",slug:"/user_docs/guides/ci-integration/gitlab-ci",permalink:"/docs/0.5.1/user_docs/guides/ci-integration/gitlab-ci",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/user_docs/guides/ci-integration/2-gitlab-ci.md",tags:[],version:"0.5.1",lastUpdatedBy:"peefy",lastUpdatedAt:1704165384,formattedLastUpdatedAt:"Jan 2, 2024",sidebarPosition:2,frontMatter:{id:"gitlab-ci",sidebar_label:"Gitlab CI"},sidebar:"user_docs",previous:{title:"Github Actions",permalink:"/docs/0.5.1/user_docs/guides/ci-integration/github-actions"},next:{title:"Vault",permalink:"/docs/0.5.1/user_docs/guides/secret-management/vault"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"How to",id:"how-to",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Commit the Application Code",id:"2-commit-the-application-code",level:3},{value:"3. Configuration Automatic Update",id:"3-configuration-automatic-update",level:3},{value:"Summary",id:"summary",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitlab-ci-integration"},"Gitlab CI Integration"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In the GitOps section, we have introduced how to integrate KCL with GitOps. In this section, we will continue to provide sample solutions for KCL and CI integrations. We hope to implement the end-to-end application development process by using containers, Continuous Integration (CI) for generation, and GitOps for Continuous Deployment (CD). In this scheme, we use a ",(0,a.kt)("strong",{parentName:"p"},"Flask application")," and ",(0,a.kt)("strong",{parentName:"p"},"Gitlab CI")," as examples."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: You can use any containerized application and different CI systems such as ",(0,a.kt)("strong",{parentName:"p"},"Github Actions"),", ",(0,a.kt)("strong",{parentName:"p"},"Jenkins CI"),", etc. in this solution.")),(0,a.kt)("p",null,"The overall workflow is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Develop application code and submit it to the Gitlab repository to trigger CI."),(0,a.kt)("li",{parentName:"ul"},"Gitlab generate container images from application code and push them to the ",(0,a.kt)("inlineCode",{parentName:"li"},"docker.io")," container registry."),(0,a.kt)("li",{parentName:"ul"},"Gitlab CI automatically synchronizes and updates the KCL manifest deployment file based on the version of the container image in the docker.io container registry.")),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("p",null,"We put the application source code and infrastructure deployment code in different repos, which can be maintained by different roles to achieve the separation of concerns."),(0,a.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get the application code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://gitlab.com/kcl-lang/flask-demo.git/\ncd flask-demo\n")),(0,a.kt)("p",null,"This is a web application written in Python. We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the application directory to generate a container image of this application, and also use Gitlab CI to automatically build a image named ",(0,a.kt)("inlineCode",{parentName:"p"},"flask_demo"),", the CI configuration is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n  - publish\n  - deploy\n\npublish:\n  stage: publish\n  image:\n    name: cnych/kaniko-executor:v0.22.0\n    entrypoint: [""]\n  script:\n    - echo "{\\"auths\\":{\\"$CI_REGISTRY\\":{\\"username\\":\\"$CI_REGISTRY_USER\\",\\"password\\":\\"$CI_REGISTRY_PASSWORD\\"}}}" > /kaniko/.docker/config.json\n    - /kaniko/executor --context $CI_PROJECT_DIR --dockerfile ./Dockerfile --destination $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\n  only:\n    - main\n\ndeploy:\n  stage: deploy\n  image: cnych/kustomize:v1.0\n  before_script:\n    - git remote set-url origin https://gitlab.com/kcl-lang/flask-demo\n    - git config --global user.email "gitlab@git.local"\n    - git config --global user.name "GitLab CI/CD"\n    # Install KCL\n    - wget -q https://kcl-lang.io/script/install.sh -O - | /bin/bash\n  script:\n    - git checkout -B main\n    - cd deployment\n    # Image auto update\n    - /usr/local/kclvm/bin/kcl -d -O config.containers.flask_demo.image="$CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA"\n    - git commit -am \'[skip ci] image update to $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA\'\n    - git push origin main\n  only:\n    - main\n')),(0,a.kt)("p",null,"We need the workflow in the source code repository to automatically trigger the workflow in the deployment manifest repository. At this point, we need to config ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings -> CI/CD -> Variables")," including ",(0,a.kt)("inlineCode",{parentName:"p"},"CI_REGISTRY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CI_REGISTRY_IMAGE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CI_REGISTRY_USER"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CI_REGISTRY_PASSWORD"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CI_USERNAME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CI_PASSWORD")," and update application code to trigger automation build and deploy."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(28635).Z,width:"3018",height:"1416"})),(0,a.kt)("h3",{id:"2-commit-the-application-code"},"2. Commit the Application Code"),(0,a.kt)("p",null,"After submitting in the ",(0,a.kt)("inlineCode",{parentName:"p"},"flask-demo")," repository, Gitlab will automatically build a container image and push it to the Docker hub. It will also then trigger the Action of the ",(0,a.kt)("inlineCode",{parentName:"p"},"flask-demo-kcl-manifest")," repository and modify the image value in the deployment manifest repository through ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/automation"},"KCL Automation API"),". Now let's create a submission in the ",(0,a.kt)("inlineCode",{parentName:"p"},"flask-demo")," repository, and we can see that the code submission triggers the Gitlab CI process for the application repository ",(0,a.kt)("inlineCode",{parentName:"p"},"Build -> Pipelines")," page."),(0,a.kt)("h3",{id:"3-configuration-automatic-update"},"3. Configuration Automatic Update"),(0,a.kt)("p",null,"After the Gitlab CI process in the application repository is completed, an automatic update configuration CI will be triggered in the repository where the KCL configuration is stored and submitted to the main branch of the ",(0,a.kt)("inlineCode",{parentName:"p"},"flask-demo")," repository."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We can obtain the deployment manifest source code for compilation and validation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout main && git pull && cd deploy && kcl\n")),(0,a.kt)("p",null,"The output YAML is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: flask_demo\n  template:\n    metadata:\n      labels:\n        app: flask_demo\n    spec:\n      containers:\n        - name: flask_demo\n          image: "kcllang/flask_demo:6428cff4309afc8c1c40ad180bb9cfd82546be3e"\n          ports:\n            - protocol: TCP\n              containerPort: 5000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  type: NodePort\n  selector:\n    app: flask_demo\n  ports:\n    - port: 5000\n      protocol: TCP\n      targetPort: 5000\n')),(0,a.kt)("p",null,"From the above configuration, it can be seen that the image of the resource is indeed automatically updated to the newly constructed image value. In addition, we can also use the ",(0,a.kt)("strong",{parentName:"p"},"Argo CD KCL plugin")," to automatically synchronize data from the Git repository and deploy the application to the Kubernetes cluster."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"By integrating KCL and Gitlab CI, we can integrate the container build and delivery workflow by automatically updating the image values in the configuration, in order to achieve end-to-end application development process and improve R&D deployment efficiency."))}u.isMDXComponent=!0},28635:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gitlab-ci-variables-fbaadd89b12dd076f0f50aac4105f31d.jpg"}}]);