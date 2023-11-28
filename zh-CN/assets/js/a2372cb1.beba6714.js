"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,g=l["".concat(s,".").concat(m)]||l[m]||k[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="\u5982\u4f55\u5728 github action \u4e2d\u4f7f\u7528 kpm \u53d1\u5e03\u60a8\u7684 KCL \u5305",c={unversionedId:"user_docs/guides/package-management/how-to/push_github_action",id:"version-0.5.1/user_docs/guides/package-management/how-to/push_github_action",title:"\u5982\u4f55\u5728 github action \u4e2d\u4f7f\u7528 kpm \u53d1\u5e03\u60a8\u7684 KCL \u5305",description:"kpm \u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406 kcl \u5305\u7684\u5de5\u5177\u3002\u672c\u6587\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u5728 GitHub Action \u4e2d\u4f7f\u7528 kpm \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230\u53d1\u5e03\u5230 ghcr.io \u4e2d\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.1/user_docs/guides/package-management/4-how-to/6-push_github_action.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/push_github_action",permalink:"/zh-CN/docs/0.5.1/user_docs/guides/package-management/how-to/push_github_action",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/user_docs/guides/package-management/4-how-to/6-push_github_action.md",tags:[],version:"0.5.1",lastUpdatedBy:"peefy",lastUpdatedAt:1701161281,formattedLastUpdatedAt:"2023\u5e7411\u670828\u65e5",sidebarPosition:6,frontMatter:{},sidebar:"user_docs",previous:{title:"\u53d1\u5e03 KCL \u5305\u5230 docker.io",permalink:"/zh-CN/docs/0.5.1/user_docs/guides/package-management/how-to/share_your_pkg_docker"},next:{title:"Kubernetes",permalink:"/zh-CN/docs/0.5.1/user_docs/guides/working-with-k8s/"}},s={},u=[{value:"\u6b65\u9aa4 1\uff1a\u5b89\u88c5 kpm",id:"\u6b65\u9aa4-1\u5b89\u88c5-kpm",level:2},{value:"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u4e00\u4e2a GitHub \u8d26\u53f7",id:"\u6b65\u9aa4-2\u521b\u5efa\u4e00\u4e2a-github-\u8d26\u53f7",level:2},{value:"\u6b65\u9aa4 3: \u4e3a\u60a8\u7684 KCL \u5305\u521b\u5efa\u4e00\u4e2a GitHub \u4ed3\u5e93\u5e76\u8fdb\u884c\u76f8\u5173\u914d\u7f6e",id:"\u6b65\u9aa4-3-\u4e3a\u60a8\u7684-kcl-\u5305\u521b\u5efa\u4e00\u4e2a-github-\u4ed3\u5e93\u5e76\u8fdb\u884c\u76f8\u5173\u914d\u7f6e",level:2},{value:"1. \u4e3a\u60a8\u7684 KCL \u7a0b\u5e8f\u5305\u51c6\u5907\u4ed3\u5e93",id:"1-\u4e3a\u60a8\u7684-kcl-\u7a0b\u5e8f\u5305\u51c6\u5907\u4ed3\u5e93",level:3},{value:"2. \u4e3a\u60a8\u7684\u4ed3\u5e93\u8bbe\u7f6e OCI Registry\uff0c\u8d26\u6237\u548c\u5bc6\u7801",id:"2-\u4e3a\u60a8\u7684\u4ed3\u5e93\u8bbe\u7f6e-oci-registry\u8d26\u6237\u548c\u5bc6\u7801",level:3},{value:"\u6b65\u9aa4 4: \u5c06\u60a8\u7684 KCL \u5305\u6dfb\u52a0\u5230\u4ed3\u5e93\u4e2d\u5e76\u7f16\u5199 github action workflow",id:"\u6b65\u9aa4-4-\u5c06\u60a8\u7684-kcl-\u5305\u6dfb\u52a0\u5230\u4ed3\u5e93\u4e2d\u5e76\u7f16\u5199-github-action-workflow",level:2}],p={toc:u},l="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5982\u4f55\u5728-github-action-\u4e2d\u4f7f\u7528-kpm-\u53d1\u5e03\u60a8\u7684-kcl-\u5305"},"\u5982\u4f55\u5728 github action \u4e2d\u4f7f\u7528 kpm \u53d1\u5e03\u60a8\u7684 KCL \u5305"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kpm"},"kpm")," \u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406 kcl \u5305\u7684\u5de5\u5177\u3002\u672c\u6587\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u5728 GitHub Action \u4e2d\u4f7f\u7528 kpm \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230\u53d1\u5e03\u5230 ghcr.io \u4e2d\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6b65\u9aa4\uff0c\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 kpm \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230 OCI Registry\u3002"),(0,o.kt)("h2",{id:"\u6b65\u9aa4-1\u5b89\u88c5-kpm"},"\u6b65\u9aa4 1\uff1a\u5b89\u88c5 kpm"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5728\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5 kpm\u3002\u60a8\u53ef\u4ee5\u6309\u7167 ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/package-management/installation"},"kpm \u5b89\u88c5\u6587\u6863"),"\u4e2d\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u6b65\u9aa4-2\u521b\u5efa\u4e00\u4e2a-github-\u8d26\u53f7"},"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u4e00\u4e2a GitHub \u8d26\u53f7"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u6709 GitHub \u5e10\u53f7\u4e86\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u8df3\u8fc7\u8fd9\u4e00\u6b65"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/zh/get-started/signing-up-for-github/signing-up-for-a-new-github-account"},"\u6ce8\u518c\u65b0\u7684\u4e00\u4e2a GitHub \u8d26\u53f7")),(0,o.kt)("h2",{id:"\u6b65\u9aa4-3-\u4e3a\u60a8\u7684-kcl-\u5305\u521b\u5efa\u4e00\u4e2a-github-\u4ed3\u5e93\u5e76\u8fdb\u884c\u76f8\u5173\u914d\u7f6e"},"\u6b65\u9aa4 3: \u4e3a\u60a8\u7684 KCL \u5305\u521b\u5efa\u4e00\u4e2a GitHub \u4ed3\u5e93\u5e76\u8fdb\u884c\u76f8\u5173\u914d\u7f6e"),(0,o.kt)("h3",{id:"1-\u4e3a\u60a8\u7684-kcl-\u7a0b\u5e8f\u5305\u51c6\u5907\u4ed3\u5e93"},"1. \u4e3a\u60a8\u7684 KCL \u7a0b\u5e8f\u5305\u51c6\u5907\u4ed3\u5e93"),(0,o.kt)("p",null,"\u60a8\u9700\u8981\u4e3a\u60a8\u7684 KCL \u7a0b\u5e8f\u5305\u51c6\u5907\u4e00\u4e2a GitHub \u4ed3\u5e93\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/zh/get-started/quickstart/create-a-repo"},"\u521b\u5efa\u4e00\u4e2a GitHub \u4ed3\u5e93")),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u6dfb\u52a0\u60a8\u7684 KCL \u7a0b\u5e8f\uff0c\u4ee5\u4ed3\u5e93 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/awesome-kusion/catalog.git"},"https://github.com/awesome-kusion/catalog.git")," \u4e3a\u4f8b\uff0c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 .github\n\u2502   \u2514\u2500\u2500 workflows\n\u2502       \u2514\u2500\u2500 push.yaml # github action \u6587\u4ef6\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 kcl.mod # kcl.mod \u5c06\u5f53\u524d\u4ed3\u5e93\u5185\u5bb9\u5b9a\u4e49\u4e3a\u4e00\u4e2a kcl \u5305\n\u251c\u2500\u2500 kcl.mod.lock # kcl.mod.lock \u662f kpm \u81ea\u52a8\u751f\u6210\u7684\u6587\u4ef6\n\u2514\u2500\u2500 main.k # \u60a8\u7684 KCL \u7a0b\u5e8f\n")),(0,o.kt)("h3",{id:"2-\u4e3a\u60a8\u7684\u4ed3\u5e93\u8bbe\u7f6e-oci-registry\u8d26\u6237\u548c\u5bc6\u7801"},"2. \u4e3a\u60a8\u7684\u4ed3\u5e93\u8bbe\u7f6e OCI Registry\uff0c\u8d26\u6237\u548c\u5bc6\u7801"),(0,o.kt)("p",null,"\u4ee5 docker.io \u4e3a\u4f8b\uff0c\u60a8\u53ef\u4ee5\u4e3a\u60a8\u7684\u4ed3\u5e93\u8bbe\u7f6e secrets ",(0,o.kt)("inlineCode",{parentName:"p"},"REG"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"REG_ACCOUNT")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"REG_TOKEN"),"\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"REG")," \u7684\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker.io"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"REG_ACCOUNT")," \u7684\u503c\u4e3a\u60a8\u7684 docker.io \u8d26\u6237, ",(0,o.kt)("inlineCode",{parentName:"p"},"REG_TOKEN")," \u4e3a\u60a8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker.io")," \u767b\u5f55\u5bc6\u7801\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/zh/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository"},"\u4e3a\u4ed3\u5e93\u6dfb\u52a0 secrets")),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ghcr.io")," \u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Registry"),", \u60a8\u9700\u8981\u4f7f\u7528 GitHub token \u4f5c\u4e3a secrets\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#personal-access-tokens-classic"},"\u521b\u5efa\u4e00\u4e2a GitHub Token")),(0,o.kt)("h2",{id:"\u6b65\u9aa4-4-\u5c06\u60a8\u7684-kcl-\u5305\u6dfb\u52a0\u5230\u4ed3\u5e93\u4e2d\u5e76\u7f16\u5199-github-action-workflow"},"\u6b65\u9aa4 4: \u5c06\u60a8\u7684 KCL \u5305\u6dfb\u52a0\u5230\u4ed3\u5e93\u4e2d\u5e76\u7f16\u5199 github action workflow"),(0,o.kt)("p",null,"\u4e3a\u8fd9\u4e2a\u4ed3\u5e93\u6dfb\u52a0 github action \u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/push.yml"),"\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: KPM Push Workflow\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n\n      - name: Set up Go 1.19\n        uses: actions/setup-go@v2\n        with:\n          go-version: 1.19\n\n      - name: Install kpm\n        run: go install kcl-lang.io/kpm@latest\n\n      - name: Login and Push\n        env:\n          # \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6307\u5b9a OCI Registry \u548c\u8d26\u6237\n          KPM_REG: ${{ secrets.REG }}\n          KPM_REPO: ${{ secrets.REG_ACCOUNT }}\n          # kpm login \u65f6\u4f7f\u7528 secrets.REG_TOKEN\n        run: kpm login -u ${{ secrets.REG_ACCOUNT }} -p ${{ secrets.REG_TOKEN }} ${{ secrets.REG }} && kpm push\n\n      - name: Run kpm project from oci registry\n        run: kpm run oci://${{ secrets.REG }}/${{ secrets.REG_ACCOUNT }}/catalog --tag 0.0.1\n")))}k.isMDXComponent=!0}}]);