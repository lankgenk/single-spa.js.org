"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6349],{3859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(4848),o=n(8453);const s={id:"e2e",title:"E2E testing",sidebar_label:"E2E testing"},r=void 0,a={id:"testing/e2e",title:"E2E testing",description:"As microfrontends gain widespread adoption, testing tools will catch up and the testing story will improve.",source:"@site/versioned_docs/version-6.x/testing/e2e.md",sourceDirName:"testing",slug:"/testing/e2e",permalink:"/docs/testing/e2e",draft:!1,unlisted:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-6.x/testing/e2e.md",tags:[],version:"6.x",frontMatter:{id:"e2e",title:"E2E testing",sidebar_label:"E2E testing"},sidebar:"docs",previous:{title:"Unit testing",permalink:"/docs/testing/units"},next:{title:"Overview",permalink:"/docs/layout-overview"}},l={},d=[{value:"Testing Options",id:"testing-options",level:2},{value:"&quot;E2E&quot; testing with &quot;standalone&quot; mode",id:"e2e-testing-with-standalone-mode",level:3},{value:"Testing everything together",id:"testing-everything-together",level:3},{value:"Configuring E2E tests to work with overrides",id:"configuring-e2e-tests-to-work-with-overrides",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"As microfrontends gain widespread adoption, testing tools will catch up and the testing story will improve."})}),"\n",(0,i.jsxs)(t.p,{children:["End to End (E2E) testing a single-spa ",(0,i.jsx)(t.a,{href:"/docs/module-types#applications",children:"application"}),", ",(0,i.jsx)(t.a,{href:"/docs/module-types#parcels",children:"parcel"}),", or ",(0,i.jsx)(t.a,{href:"/docs/module-types/#utilities",children:"utility"})," is very similar to E2E testing in other architectures. Because you are testing in the browser you can even use tools like ",(0,i.jsx)(t.a,{href:"https://github.com/joeldenning/import-map-overrides",children:"import-map-overrides"})," to run your tests in a production or production like environment with an override ",(0,i.jsx)(t.em,{children:"before"})," deploying to that environment."]}),"\n",(0,i.jsxs)(t.p,{children:["In general we suggest only using E2E tests to test integration points between microfrontends and core functionality following principles of either the ",(0,i.jsx)(t.a,{href:"https://www.browserstack.com/guide/testing-pyramid-for-test-automation",children:"testing pyramid"})," or the ",(0,i.jsx)(t.a,{href:"https://kentcdodds.com/blog/write-tests",children:"testing trophy"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"testing-options",children:"Testing Options"}),"\n",(0,i.jsxs)(t.p,{children:["In single-spa, there are more ways to test your code in a browser using tools like ",(0,i.jsx)(t.a,{href:"https://www.cypress.io/",children:"cypress"}),". Two common approaches are to test individual applications by using standalone mode and testing everything together, both provide value in different ways."]}),"\n",(0,i.jsx)(t.h3,{id:"e2e-testing-with-standalone-mode",children:'"E2E" testing with "standalone" mode'}),"\n",(0,i.jsxs)(t.p,{children:["While not perfect standalone mode offers a way to run individual single-spa applications and can be used to test a single-spa application. If the microfrontend relies upon configuration or initialization happening in your single-spa ",(0,i.jsx)(t.code,{children:"root-config"})," you cannot test those areas in standalone mode without mocking. Standalone mode works by creating a custom single-spa root-config on the fly that will just render the one application, so the code is the same as if it were running in production but the configuration is different."]}),"\n",(0,i.jsx)(t.h3,{id:"testing-everything-together",children:"Testing everything together"}),"\n",(0,i.jsxs)(t.p,{children:["Much like E2E tests run in traditional SPA applications you can open a brower and run assertions using tools like ",(0,i.jsx)(t.a,{href:"https://www.cypress.io/",children:"Cypress"}),". Taking this approach is mirroring a full end to end test. You are running the exact same code that is in the environment. With some configuration and tools like ",(0,i.jsx)(t.a,{href:"https://github.com/joeldenning/import-map-overrides",children:"import-map-overrides"})," you can set-up your testing environment to work with overrides to the import map and can run end-to-end tests before deploying your code changes to an environment."]}),"\n",(0,i.jsx)(t.h4,{id:"configuring-e2e-tests-to-work-with-overrides",children:"Configuring E2E tests to work with overrides"}),"\n",(0,i.jsx)(t.p,{children:"At a high level you will need to do the following before your environment can utilize overrides in E2E tests"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Use a tool like ",(0,i.jsx)(t.a,{href:"https://github.com/joeldenning/import-map-overrides",children:"import-map-overrides"})]}),"\n",(0,i.jsx)(t.li,{children:'Get the built code on a publically accessible domain. Similar to a "review app"'}),"\n",(0,i.jsx)(t.li,{children:"Configure your E2E testing environment to set the override"}),"\n",(0,i.jsx)(t.li,{children:"Run the E2E tests"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);