"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7727],{3928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(4848),r=n(8453);const o={id:"ecosystem-preact",title:"single-spa-preact",sidebar_label:"Preact"},i=void 0,a={id:"ecosystem-preact",title:"single-spa-preact",description:"single-spa-preact is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Preact. Check out the single-spa-preact github.",source:"@site/versioned_docs/version-6.x/ecosystem-preact.md",sourceDirName:".",slug:"/ecosystem-preact",permalink:"/docs/ecosystem-preact",draft:!1,unlisted:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-6.x/ecosystem-preact.md",tags:[],version:"6.x",frontMatter:{id:"ecosystem-preact",title:"single-spa-preact",sidebar_label:"Preact"},sidebar:"docs",previous:{title:"Inferno",permalink:"/docs/ecosystem-inferno"},next:{title:"Svelte",permalink:"/docs/ecosystem-svelte"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Options",id:"options",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["single-spa-preact is a helper library that helps implement ",(0,s.jsx)(t.a,{href:"configuration#registering-applications",children:"single-spa registered application"})," ",(0,s.jsx)(t.a,{href:"/docs/building-applications#registered-application-lifecycle",children:"lifecycle functions"})," (bootstrap, mount and unmount) for for use with ",(0,s.jsx)(t.a,{href:"https://preactjs.com/",children:"Preact"}),". Check out the ",(0,s.jsx)(t.a,{href:"https://github.com/single-spa/single-spa-preact",children:"single-spa-preact github"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install --save preact\n"})}),"\n",(0,s.jsx)(t.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,s.jsx)(t.p,{children:"In your project's entry file, add the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import preact from "preact";\nimport rootComponent from "./path-to-root-component.js";\nimport singleSpaPreact from "single-spa-preact";\n\nconst preactLifecycles = singleSpaPreact({\n  preact,\n  rootComponent,\n  domElementGetter: () => document.getElementById("main-content"),\n});\n\nexport const bootstrap = preactLifecycles.bootstrap;\nexport const mount = preactLifecycles.mount;\nexport const unmount = preactLifecycles.unmount;\n'})}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.p,{children:["All options are passed to single-spa-preact via the ",(0,s.jsx)(t.code,{children:"opts"})," parameter when calling ",(0,s.jsx)(t.code,{children:"singleSpaPreact(opts)"}),". The following options are available:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"preact"}),": (required) The main Preact object, which is generally either exposed onto the window or is available via ",(0,s.jsx)(t.code,{children:"require('preact')"})," or ",(0,s.jsx)(t.code,{children:"import preact from 'preact'"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"rootComponent"}),": (required) The top level preact component which will be rendered"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"domElementGetter"}),": (optional) A function that is given the single-spa props and returns a DOMElement. This dom element is where the Preact application will be bootstrapped, mounted, and unmounted. If omitted, a div will be created and appended to the body."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);