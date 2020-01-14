(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),o=(n(0),n(289)),i={id:"ecosystem-preact",title:"single-spa-preact",sidebar_label:"Preact"},c=[{value:"Installation",id:"installation",children:[]},{value:"Quickstart",id:"quickstart",children:[]},{value:"Options",id:"options",children:[]}],p={rightToc:c},l="wrapper";function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(l,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"single-spa-preact is a helper library that helps implement ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://preactjs.com/"}),"Preact"),". Check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa-preact"}),"single-spa-preact github"),"."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save preact\n")),Object(o.b)("h2",{id:"quickstart"},"Quickstart"),Object(o.b)("p",null,"In your project's entry file, add the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import preact from 'preact';\nimport rootComponent from './path-to-root-component.js';\nimport singleSpaPreact from 'single-spa-preact';\n\nconst preactLifecycles = singleSpaPreact({\n  preact,\n  rootComponent,\n  domElementGetter: () => document.getElementById('main-content'),\n});\n\nexport const bootstrap = preactLifecycles.bootstrap;\nexport const mount = preactLifecycles.mount;\nexport const unmount = preactLifecycles.unmount;\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,"All options are passed to single-spa-preact via the ",Object(o.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(o.b)("inlineCode",{parentName:"p"},"singleSpaPreact(opts)"),". The following options are available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"preact"),": (required) The main Preact object, which is generally either exposed onto the window or is available via ",Object(o.b)("inlineCode",{parentName:"li"},"require('preact')")," or ",Object(o.b)("inlineCode",{parentName:"li"},"import preact from 'preact'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rootComponent"),": (required) The top level preact component which will be rendered"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (required) A function that takes in no arguments and returns a DOMElement. This dom element is where the Preact application will be bootstrapped, mounted, and unmounted.")))}s.isMDXComponent=!0},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),u=a,b=s[c+"."+u]||s[u]||l[u]||o;return n?r.a.createElement(b,Object.assign({},{ref:t},p,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);