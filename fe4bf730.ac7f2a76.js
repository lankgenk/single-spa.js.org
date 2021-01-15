(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),i=(n(0),n(182)),a={id:"ecosystem-riot",title:"single-spa-riot",sidebar_label:"Riot"},s={unversionedId:"ecosystem-riot",id:"version-4.x/ecosystem-riot",isDocsHomePage:!1,title:"single-spa-riot",description:"single-spa-riot is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with riot. Check out the single-spa-riot github.",source:"@site/versioned_docs/version-4.x/ecosystem-riot.md",slug:"/ecosystem-riot",permalink:"/docs/4.x/ecosystem-riot",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-4.x/ecosystem-riot.md",version:"4.x",sidebar_label:"Riot",sidebar:"version-4.x/docs",previous:{title:"single-spa-svelte",permalink:"/docs/4.x/ecosystem-svelte"},next:{title:"single-spa-backbone",permalink:"/docs/4.x/ecosystem-backbone"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Options",id:"options",children:[]}],c={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"single-spa-riot is a helper library that helps implement ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/4.x/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://riot.js.org/"}),"riot"),". Check out the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ariesjia/single-spa-riot"}),"single-spa-riot github"),"."),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/package/single-spa-riot"}),Object(i.b)("img",Object(o.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/single-spa-riot.svg",alt:"NPM"})))),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://travis-ci.com/ariesjia/single-spa-riot"}),Object(i.b)("img",Object(o.a)({parentName:"a"},{src:"https://travis-ci.com/ariesjia/single-spa-riot.svg?branch=master",alt:"Build Status"})))),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://bundlephobia.com/result?p=single-spa-riot"}),Object(i.b)("img",Object(o.a)({parentName:"a"},{src:"https://badgen.net/bundlephobia/minzip/single-spa-riot",alt:"minified"})))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-riot\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import * as Riot from 'riot';\nimport singleSpaRiot from 'single-spa-riot';\nimport App from './App.riot'\n\nconst riotLifecycles = singleSpaRiot({\n  rootComponent: Riot.component(App),\n  domElementGetter: () => document.getElementById('#app')\n});\n\nexport const bootstrap = riotLifecycles.bootstrap;\n\nexport const mount = riotLifecycles.mount;\n\nexport const unmount = riotLifecycles.unmount;\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("p",null,"All options are passed to single-spa-riot via the ",Object(i.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(i.b)("inlineCode",{parentName:"p"},"singleSpaRiot(opts)"),". The following options are available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (required) the callback to get root component mount element."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rootComponent"),": (optional and replaces ",Object(i.b)("inlineCode",{parentName:"li"},"appOptions.loadRootComponent"),") the root riot component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"loadRootComponent"),": (optional and replaces ",Object(i.b)("inlineCode",{parentName:"li"},"appOptions.rootComponent"),") A promise that resolves with your root component. This is useful for lazy loading.")))}l.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(n),u=o,d=b["".concat(a,".").concat(u)]||b[u]||m[u]||i;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);