"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Abstraction",sidebar_position:3},r=void 0,s={unversionedId:"user_docs/guides/abstraction",id:"version-0.6.0/user_docs/guides/abstraction",title:"Abstraction",description:"Introduction",source:"@site/versioned_docs/version-0.6.0/user_docs/guides/abstraction.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/abstraction",permalink:"/docs/0.6.0/user_docs/guides/abstraction",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/user_docs/guides/abstraction.md",tags:[],version:"0.6.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:3,frontMatter:{title:"Abstraction",sidebar_position:3},sidebar:"user_docs",previous:{title:"Validation",permalink:"/docs/0.6.0/user_docs/guides/validation"},next:{title:"Schema Definition",permalink:"/docs/0.6.0/user_docs/guides/schema-definition"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Use KCL for Abstraction",id:"use-kcl-for-abstraction",level:2},{value:"0. Prerequisite",id:"0-prerequisite",level:3},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Transform the Application Config into Docker Compose Config",id:"2-transform-the-application-config-into-docker-compose-config",level:3},{value:"3. Transform the Application Config into Kubernetes Deployment and Service Manifests",id:"3-transform-the-application-config-into-kubernetes-deployment-and-service-manifests",level:3},{value:"Summary",id:"summary",level:2},{value:"Further Information",id:"further-information",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Abstraction refers to a simplified representation of an entity, typically used in computing. It allows for the concealment of specific details while presenting the most relevant information to the programmer. Each abstraction is tailored to suit a specific need, and can greatly enhance the usability of a given entity. In the context of KCL, abstraction can make code easier to understand and maintain, while also simplifying the user interface."),(0,o.kt)("p",null,"It should be noted that code abstraction is not meant to reduce code size, but rather to improve maintainability and extendability. During the process of abstracting code, factors such as reusability, readability, and scalability should be taken into consideration, and the code should be optimized as needed."),(0,o.kt)("p",null,"The values of the good abstraction"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Provides distinct focal points for better comprehension for specific identities, roles, and scenarios."),(0,o.kt)("li",{parentName:"ol"},"Shields lower-level details to avoid potential errors."),(0,o.kt)("li",{parentName:"ol"},"Enhances user-friendliness and automation with better portability and good APIs.")),(0,o.kt)("p",null,"KCL may not assess the rationality of a user's abstraction, but it offers technical solutions to facilitate the process."),(0,o.kt)("h2",{id:"use-kcl-for-abstraction"},"Use KCL for Abstraction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now, let's begin to abstract Docker Compose and Kubernetes models into an application config.")),(0,o.kt)("p",null,"Application centric development allows developers to focus on their workload's architecture rather than the tech stack in the target environment, infrastructure or platform. We define our application once with the ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," schema and then use the KCL CLI to translate it to multiple platforms, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker Compose")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," with different versions."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Docker Compose")," is a tool for defining and running multi-container Docker applications. With Docker Compose, you can define your application's services, networks, and volumes in a single file, and then use it to start and stop your application as a single unit. Docker Compose simplifies the process of running complex, multi-container applications by handling the details of networking, storage, and other infrastructure concerns."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes manifests")," are YAML files that define Kubernetes objects such as Pods, Deployments, and Services. Manifests provide a declarative way to define the desired state of your application, including the number of replicas, the image to use, and the network configuration. Kubernetes uses the manifests to create and manage the resources needed to deploy and run your application."),(0,o.kt)("p",null,"Here are some references to learn more about Docker Compose and Kubernetes manifests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/"},"Kubernetes manifest documentation"))),(0,o.kt)("p",null,"The application model aims to reduce developer toil and cognitive load by only having to define a single KCL file that works across multiple platforms, and it is designed to be applied to multiple environments to reduce the amount of configuration. Now, let's learn how to do this."),(0,o.kt)("h3",{id:"0-prerequisite"},"0. Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL"))),(0,o.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,o.kt)("p",null,"Firstly, let's get the example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/abstraction\n")),(0,o.kt)("p",null,"We can run the following command to show the config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat main.k\n")),(0,o.kt)("p",null,"The output is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import .app\n\napp.App {\n    name = "app"\n    containers.nginx = {\n        image = "nginx"\n        ports = [{containerPort = 80}]\n    }\n    service.ports = [{ port = 80 }]\n}\n')),(0,o.kt)("p",null,"In the above code, we defined a configuration using the ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," schema, where we configured an ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," container and configured it with an ",(0,o.kt)("inlineCode",{parentName:"p"},"80")," service port."),(0,o.kt)("p",null,"Besides, KCL allows developers to define the resources required for their applications in a declarative manner and is tied to a platform such as Docker Compose or Kubernetes manifests and allows to generate a platform-specific configuration file such as ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," or a Kubernetes ",(0,o.kt)("inlineCode",{parentName:"p"},"manifests.yaml")," file. Next, let's generate the corresponding configuration."),(0,o.kt)("h3",{id:"2-transform-the-application-config-into-docker-compose-config"},"2. Transform the Application Config into Docker Compose Config"),(0,o.kt)("p",null,"If we want to transform the application config into the docker compose config, we can run the command simply:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl main.k docker_compose_render.k\n")),(0,o.kt)("p",null,"The output is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  app:\n    image: nginx\n    ports:\n      - published: 80\n        target: 80\n        protocol: TCP\n")),(0,o.kt)("h3",{id:"3-transform-the-application-config-into-kubernetes-deployment-and-service-manifests"},"3. Transform the Application Config into Kubernetes Deployment and Service Manifests"),(0,o.kt)("p",null,"If we want to transform the application config into the Kubernetes manifests, we can run the command simply:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl main.k kubernetes_render.k\n")),(0,o.kt)("p",null,"The output is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app\n  labels:\n    app: app\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: app\n  template:\n    metadata:\n      labels:\n        app: app\n    spec:\n      containers:\n        - name: nginx\n          image: nginx\n          ports:\n            - protocol: TCP\n              containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: app\n  labels:\n    app: app\nspec:\n  selector:\n    app: app\n  ports:\n    - port: 80\n      protocol: TCP\n")),(0,o.kt)("p",null,"Look, it's so simple. If you want to learn more information about the application model, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl-lang.io/tree/main/examples/abstraction"},"here"),"."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Through the use of KCL, we are able to separate the abstraction and implementation details of a model, allowing for the abstract model to be mapped to various infrastructures or platforms. This is achieved through flexible switching between different implementations and the combination of compilation, which shields configuration differences and ultimately reduces the cognitive burden."),(0,o.kt)("h2",{id:"further-information"},"Further Information"),(0,o.kt)("p",null,"In addition to manually maintaining the configuration, we can also use KCL APIs to integrate ",(0,o.kt)("strong",{parentName:"p"},"automatic configuration changes")," into our applications. For specific instructions, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/automation"},"here"),"."))}d.isMDXComponent=!0}}]);