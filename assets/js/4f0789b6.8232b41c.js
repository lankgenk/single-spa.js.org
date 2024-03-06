"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4199],{1336:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=o(4848),i=o(8453);const r={id:"ecosystem-inferno",title:"single-spa-inferno",sidebar_label:"Inferno"},s=void 0,l={id:"ecosystem-inferno",title:"single-spa-inferno",description:"single-spa-inferno is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Inferno. Check out the single-spa-inferno github.",source:"@site/versioned_docs/version-6.x/ecosystem-inferno.md",sourceDirName:".",slug:"/ecosystem-inferno",permalink:"/docs/ecosystem-inferno",draft:!1,unlisted:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-6.x/ecosystem-inferno.md",tags:[],version:"6.x",frontMatter:{id:"ecosystem-inferno",title:"single-spa-inferno",sidebar_label:"Inferno"},sidebar:"docs",previous:{title:"Ember",permalink:"/docs/ecosystem-ember"},next:{title:"Preact",permalink:"/docs/ecosystem-preact"}},c={},a=[{value:"Quickstart",id:"quickstart",level:2},{value:"Options",id:"options",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["single-spa-inferno is a helper library that helps implement ",(0,t.jsx)(n.a,{href:"configuration#registering-applications",children:"single-spa registered application"})," ",(0,t.jsx)(n.a,{href:"/docs/building-applications#registered-application-lifecycle",children:"lifecycle functions"})," (bootstrap, mount and unmount) for for use with ",(0,t.jsx)(n.a,{href:"https://infernojs.org/",children:"Inferno"}),". Check out the ",(0,t.jsx)(n.a,{href:"https://github.com/single-spa/single-spa-inferno",children:"single-spa-inferno github"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,t.jsxs)(n.p,{children:["First, in the application, run ",(0,t.jsx)(n.code,{children:"npm install --save single-spa-inferno"}),". Then, add the following to your application's entry file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import Inferno from "inferno";\nimport rootComponent from "./path-to-root-component.js";\nimport singleSpaInferno from "single-spa-inferno";\n\nconst infernoLifecycles = singleSpaInferno({\n  Inferno,\n  createElement,\n  rootComponent,\n  domElementGetter: () => document.getElementById("main-content"),\n});\n\nexport const bootstrap = infernoLifecyles.bootstrap;\nexport const mount = infernoLifecyles.mount;\nexport const unmount = infernoLifecyles.unmount;\n'})}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.p,{children:["All options are passed to single-spa-inferno via the ",(0,t.jsx)(n.code,{children:"opts"})," parameter when calling ",(0,t.jsx)(n.code,{children:"singleSpaInferno(opts)"}),". The following options are available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"inferno"}),": (required) The main Inferno object, which is generally either exposed onto the window or is available via ",(0,t.jsx)(n.code,{children:"require('inferno')"})," or ",(0,t.jsx)(n.code,{children:"import Inferno from 'inferno'"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"createElement"}),": (required) The default export from Inferno's ",(0,t.jsx)(n.code,{children:"inferno-create-element"})," package."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rootComponent"}),": (required) The top level Inferno component which will be rendered."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"domElementGetter"}),": (required) A function that takes in no arguments and returns a DOMElement. This dom element is where the Inferno application will be bootstrapped, mounted, and unmounted."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(6540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);