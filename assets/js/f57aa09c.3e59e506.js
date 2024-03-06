"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6451],{1614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(4848),s=t(8453);const o={id:"migrating-existing-spas",title:"Migrating existing SPAs",sidebar_label:"Migrating existing code"},r=void 0,a={id:"migrating-existing-spas",title:"Migrating existing SPAs",description:"If you're interested in migrating existing SPAs into a single-spa, you'll",source:"@site/versioned_docs/version-6.x/migrating-existing-spas.md",sourceDirName:".",slug:"/migrating-existing-spas",permalink:"/docs/migrating-existing-spas",draft:!1,unlisted:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-6.x/migrating-existing-spas.md",tags:[],version:"6.x",frontMatter:{id:"migrating-existing-spas",title:"Migrating existing SPAs",sidebar_label:"Migrating existing code"},sidebar:"docs",previous:{title:"Splitting applications",permalink:"/docs/separating-applications"},next:{title:"Overview",permalink:"/docs/parcels-overview"}},l={},c=[{value:"Converting SPAs into registered applications",id:"converting-spas-into-registered-applications",level:2},{value:"(1) Implementing lifecycle functions",id:"1-implementing-lifecycle-functions",level:3},{value:"(2) Getting the CSS, fonts, <code>&lt;script&gt;</code> dependencies to work",id:"2-getting-the-css-fonts-script-dependencies-to-work",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"If you're interested in migrating existing SPAs into a single-spa, you'll\nneed to do three things:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.a,{href:"/docs/configuration",children:"single spa config"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#converting-spas-into-registered-applications",children:"Convert your SPA or SPAs to be registered applications"})}),"\n",(0,i.jsxs)(n.li,{children:["Adjust your HTML file so that your single spa config is the new boss in town.\nSee ",(0,i.jsx)(n.a,{href:"/docs/configuration#indexhtml-file",children:"docs"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"converting-spas-into-registered-applications",children:"Converting SPAs into registered applications"}),"\n",(0,i.jsxs)(n.p,{children:["Your existing SPAs, whether they be Angular, React, or something else, probably are\nnot used to unmounting themselves from the DOM. Also, they probably have had the luxury\nof controlling the entire HTML page themselves, instead of being purely JavaScript applications\nthat don't have sole control over ",(0,i.jsx)(n.code,{children:"<script>"})," tags and ",(0,i.jsx)(n.code,{children:"<link>"})," tags. So in order to convert them\ninto single-spa registered applications, they will need to overcome those obstacles while implementing\nlifecycle functions."]}),"\n",(0,i.jsx)(n.h3,{id:"1-implementing-lifecycle-functions",children:"(1) Implementing lifecycle functions"}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/docs/building-applications#registered-application-lifecycle",children:"registered application lifecycle"})," docs to see what you need to do.\nThe hardest part will almost certainly be the ",(0,i.jsx)(n.code,{children:"unmount"})," lifecycle, since most SPAs aren't accustomed\nto going dormant and unmounting themselves from the DOM. When implementing your lifecycle functions, first check out the ",(0,i.jsx)(n.a,{href:"/docs/ecosystem",children:"ecosystem"}),"\ndocs before reinventing the wheel yourself. If that doesn't have everything you need, you'll have to make sure that your\nSPA can clean up its DOM, DOM event listeners (all of them, but ",(0,i.jsx)(n.em,{children:"especially"})," hashchange and popstate),\nand memory."]}),"\n",(0,i.jsxs)(n.h3,{id:"2-getting-the-css-fonts-script-dependencies-to-work",children:["(2) Getting the CSS, fonts, ",(0,i.jsx)(n.code,{children:"<script>"})," dependencies to work"]}),"\n",(0,i.jsxs)(n.p,{children:["Since existing SPAs are used to having an index.html file for their css, fonts,\nthird party script-tags, etc., it's likely that you'll have to do some work\nto make sure all of those keep on working when your SPA becomes an html-less ",(0,i.jsx)(n.a,{href:"/docs/building-applications",children:"\napplication"}),". It is best to try to put all that\nyou can into the JavaScript bundle, but your escape hatch is to put the things\nyou need into your ",(0,i.jsx)(n.a,{href:"/docs/configuration",children:"single spa config"}),"."]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);