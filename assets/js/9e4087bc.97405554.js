"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2711],{1712:(e,r,a)=>{a.r(r),a.d(r,{default:()=>o});a(6540);var s=a(8774),t=a(1312),i=a(9024),n=a(9641),l=a(1107),c=a(4848);function h(e){let{year:r,posts:a}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.A,{as:"h3",id:r,children:r}),(0,c.jsx)("ul",{children:a.map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)(s.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:r}=e;return(0,c.jsx)("section",{className:"margin-vert--lg",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,c.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,c.jsx)(h,{...e})},r)))})})})}function o(e){let{archive:r}=e;const a=(0,t.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,t.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const r=e.reduce(((e,r)=>{var a;const s=r.metadata.date.split("-")[0],t=null!=(a=e.get(s))?a:[];return e.set(s,[r,...t])}),new Map);return Array.from(r,(e=>{let[r,a]=e;return{year:r,posts:a}}))}(r.blogPosts);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.be,{title:a,description:s}),(0,c.jsxs)(n.A,{children:[(0,c.jsx)("header",{className:"hero hero--primary",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(l.A,{as:"h1",className:"hero__title",children:a}),(0,c.jsx)("p",{className:"hero__subtitle",children:s})]})}),(0,c.jsx)("main",{children:h.length>0&&(0,c.jsx)(d,{years:h})})]})]})}}}]);