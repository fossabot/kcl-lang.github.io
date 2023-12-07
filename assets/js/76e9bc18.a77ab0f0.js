"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[86355],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70893:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={slug:"2023-11-20-search-k8s-module-on-artifacthub",title:"Kubernetes Modules Here Are All You Need!",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","Kubernetes","Modules","ArtifactHub"]},l=void 0,i={permalink:"/blog/2023-11-20-search-k8s-module-on-artifacthub",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-11-20-search-k8s-module-on-artifacthub/index.md",source:"@site/blog/2023-11-20-search-k8s-module-on-artifacthub/index.md",title:"Kubernetes Modules Here Are All You Need!",description:"Introduction",date:"2023-11-20T00:00:00.000Z",formattedDate:"November 20, 2023",tags:[{label:"KCL",permalink:"/blog/tags/kcl"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"},{label:"Modules",permalink:"/blog/tags/modules"},{label:"ArtifactHub",permalink:"/blog/tags/artifact-hub"}],readingTime:5.125,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2023-11-20-search-k8s-module-on-artifacthub",title:"Kubernetes Modules Here Are All You Need!",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","Kubernetes","Modules","ArtifactHub"]},prevItem:{title:"KCL Biweekly Newsletter (2023 11.09 - 11.23) | Cloud-Native Modules, Language, and Toolchain Update Express!",permalink:"/blog/2023-11-23-biweekly-newsletter"},nextItem:{title:"KCL Biweekly Newsletter (2023 10.26 - 11.08) | Better IDE Experience Enhancements and More Cloud-Native Modules",permalink:"/blog/2023-11-08-biweekly-newsletter"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"HelloWorld Example",id:"helloworld-example",level:2},{value:"Use ArtifactHub to search for the modules you need",id:"use-artifacthub-to-search-for-the-modules-you-need",level:2},{value:"Summary",id:"summary",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In previous updates, we have added package management capability to the KCL language, solving the issue of how to obtain and publish third-party libraries. However, a new problem arises during the development process where teammates are often unsure which library to use to address their specific problem. Before using a third-party library through the package management tool, it is necessary to select the appropriate library based on the specific requirements of the cloud-native operations and the capabilities of various third-party libraries."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," is a constraint-based record and functional language hosted by Cloud Native Computing Foundation (CNCF) that enhances the writing of complex configurations, including those for cloud-native scenarios. With its advanced programming language technology and practices, KCL is dedicated to promoting better modularity, scalability, and stability for configurations. It enables simpler logic writing and offers ease of automation APIs and integration with homegrown systems."),(0,r.kt)("p",null,"Therefore, we have leveraged the ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/"},"ArtifactHub")," project under CNCF to build a marketplace for KCL third-party libraries. In this marketplace, users with specific needs can freely choose the third-party libraries they require, while those who have ideas and are willing to share can also contribute and share their libraries in this marketplace. Next, we will use a simple example of publishing an application to familiarize ourselves with how to retrieve KCL third-party libraries on ArtifactHub and develop KCL programs based on the library documentation."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install KCL: ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://kcl-lang.io/docs/user_docs/getting-started/install/"},"https://kcl-lang.io/docs/user_docs/getting-started/install/")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install kubectl: ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"https://kubernetes.io/docs/tasks/tools/#kubectl"))),(0,r.kt)("li",{parentName:"ul"},"Install minikube: ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://minikube.sigs.k8s.io/docs/start/"},"https://minikube.sigs.k8s.io/docs/start/")))),(0,r.kt)("p",null,"Start minikube using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"minikube start --cache-images=true\n")),(0,r.kt)("p",null,"If the Ingress controller is not installed in your minikube, you can use the following command to install it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"minikube addons enable ingress\n")),(0,r.kt)("h2",{id:"helloworld-example"},"HelloWorld Example"),(0,r.kt)("p",null,"First, let's prepare a simple JavaScript application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const express = require("express");\nconst app = express();\nconst port = 8080;\n\n// Define a route that responds to GET requests\napp.get("/", (req, res) => {\n  res.send("Welcome to my web application!");\n});\n\n// Start the server\napp.listen(port, () => {\n  console.log(`Web app listening at http://localhost:${port}`);\n});\n')),(0,r.kt)("p",null,"Prepare an image for this application and upload it to the image registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM node:14\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 8080\nCMD [ "node", "app.js" ]\n')),(0,r.kt)("p",null,"In this example, we will use the image ",(0,r.kt)("inlineCode",{parentName:"p"},"ghcr.io/test/my-web-app:1.0")," to demonstrate the specific content. With the preparation work completed, we can now use KCL to write the corresponding release code."),(0,r.kt)("h2",{id:"use-artifacthub-to-search-for-the-modules-you-need"},"Use ArtifactHub to search for the modules you need"),(0,r.kt)("p",null,"First, I want to publish my my-web-app application, and I need to use a third-party library for Kubernetes to accomplish my task. By searching for the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," on ArtifactHub, you can see the currently available third-party libraries for ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"index-page",src:a(10711).Z,width:"1060",height:"601"})),(0,r.kt)("p",null,"On the homepage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," module, you can find the documentation and more detailed information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," module."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"k8s-page",src:a(66182).Z,width:"1068",height:"758"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALL")," button on the right provides you with the installation method for the ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," third-party library."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"k8s-install-page",src:a(70647).Z,width:"1080",height:"613"})),(0,r.kt)("p",null,"Since we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," as a dependency for our package, we can install it using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init my-kubernetes-config && cd my-kubernetes-config && kcl mod add k8s:1.28\n")),(0,r.kt)("p",null,"Next, we need to write the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"service"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress")," sections for the application release. We will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Service"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress")," schemas from the ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," module we just added. For more information about schemas, you can refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/next/reference/lang/tour#schema"},"https://kcl-lang.io/docs/next/reference/lang/tour#schema")),(0,r.kt)("p",null,"If you are not familiar with these three contents, you can directly search in the details page of the model. Taking ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," as an example, you can find more detailed information in the documentation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deployment",src:a(18465).Z,width:"1080",height:"490"})),(0,r.kt)("p",null,"Based on the documentation, we can write the following deployment config in the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import k8s.api.apps.v1 as d\n\ndeployment = d.Deployment {\n    metadata.name = "web-app-deployment"\n    spec = {\n        selector.matchLabels = {app = "web-app"}\n        template = {\n            metadata.labels = {app = "web-app"}\n            spec.containers = [{\n                name = "web-app"\n                image = "ghcr.io/test/my-web-app:1.0"\n                ports = [{containerPort = 80}]\n            }]\n        }\n    }\n}\n')),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," section, we can find related documentation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"service",src:a(81829).Z,width:"1080",height:"540"})),(0,r.kt)("p",null,"The corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," content is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'import k8s.api.core.v1 as s\nservice = s.Service {\n    metadata.name = "web-app-service"\n    spec.selector = {"app": "web-app"}\n    spec.ports = [{\n        port: 80\n        targetPort: 8080\n    }]\n}\n')),(0,r.kt)("p",null,"About ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress"),", you can find related documentation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ingress",src:a(74910).Z,width:"1080",height:"579"})),(0,r.kt)("p",null,"The corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress")," content is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import k8s.api.networking.v1 as i\n\ningress = i.Ingress {\n    metadata.name = "web-app-ingress"\n    spec.rules = [\n        {\n            host: "web-app.example.com"\n            http.paths = [\n                {\n                    path: "/"\n                    pathType: "Prefix"\n                    backend.service.name: "web-app-service"\n                    backend.service.port: {\n                        number: 8080\n                    }\n                }\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Finally, add the following content to the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," file to render the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"service"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress")," as the YAML stream format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"manifests.yaml_stream([\n    deployment\n    service\n    ingress\n])\n")),(0,r.kt)("p",null,"You can compile the corresponding KCL program and apply it to the cluster using the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl run main.k | kubectl apply -f -\n")),(0,r.kt)("p",null,"At this point, we have successfully deployed the application ",(0,r.kt)("inlineCode",{parentName:"p"},"my-web-app")," with the help of ",(0,r.kt)("inlineCode",{parentName:"p"},"ArtifactHub"),". Finally, let's take a look at the deployment effect through kubectl port forwarding. Use the following command to forward the port."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/web-app-service 8080:80\n")),(0,r.kt)("p",null,"Then use the following command or directly access ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")," in the browser to access our deployed application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://localhost:8080\n\nWelcome to my web application!\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this blog, we demonstrated how to select the appropriate KCL third-party library on ArtifactHub through a simple application deployment. Currently, there are more than 150+ KCL third-party libraries available on ArtifactHub for you to choose from. Come and check if there is a KCL model you need!"),(0,r.kt)("p",null,"In the example provided in this blog, we used KCL to write the program for deploying the application. In future updates, we will further abstract the KCL program in this blog with features such as dynamic parameters and introduce more application models such as Open Application Model (OAM), and package them into a separate module for release on ArtifactHub. If you also have KCL modules that you want to share with others, we will continue to update detailed steps and guides to help you successfully publish your package. Stay tuned!"))}u.isMDXComponent=!0},18465:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deployment-4c48cb0322567b7a9bb6fa72add27fe3.png"},10711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index-page-5be59bc5c5d26caa4dd532a2ab88e4ab.png"},74910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ingress-033c971c9a89d43c2dab5a2e533acedb.png"},70647:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/k8s-install-page-2f6bcea900e6aa1d4927c2a071407d07.png"},66182:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/k8s-page-ef5ac237c942bb5b7168b48dcf52b7a7.png"},81829:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/service-c9a8a508ff5a293adcaa6c222e3de5d4.png"}}]);