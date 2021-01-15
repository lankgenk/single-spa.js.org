(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),o=(n(0),n(182)),r={id:"ecosystem-backbone",title:"single-spa-backbone",sidebar_label:"Backbone"},p={unversionedId:"ecosystem-backbone",id:"version-5.x/ecosystem-backbone",isDocsHomePage:!1,title:"single-spa-backbone",description:"A single-spa helper library which provides lifecycle events for building single-spa applications using Backbone.",source:"@site/versioned_docs/version-5.x/ecosystem-backbone.md",slug:"/ecosystem-backbone",permalink:"/docs/ecosystem-backbone",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/ecosystem-backbone.md",version:"5.x",sidebar_label:"Backbone",sidebar:"version-5.x/docs",previous:{title:"single-spa-riot",permalink:"/docs/ecosystem-riot"},next:{title:"single-spa-html",permalink:"/docs/ecosystem-html-web-components"}},c=[{value:"NPM package",id:"npm-package",children:[]},{value:"Quickstart",id:"quickstart",children:[{value:"Option 1: Using <code>RequireJS</code> with <code>data-main</code>",id:"option-1-using-requirejs-with-data-main",children:[]},{value:"Option 2: Using <code>RequireJS</code> without <code>data-main</code>",id:"option-2-using-requirejs-without-data-main",children:[]},{value:"Option 3: Load Backbone app using production build",id:"option-3-load-backbone-app-using-production-build",children:[]}]},{value:"Options",id:"options",children:[{value:"Note : Out of AppWithRequire, AppWithBackboneJs and  App only one is required",id:"note--out-of-appwithrequire-appwithbackbonejs-and--app-only-one-is-required",children:[]}]}],l={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A single-spa helper library which provides lifecycle events for building single-spa applications using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://backbonejs.org/"}),"Backbone"),"."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@emtecinc/single-spa-backbone"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@emtecinc/single-spa-backbone.svg",alt:"npm Package"}))),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/emtecinc/single-spa-backbone/blob/master/LICENSE"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/l/@emtecinc/single-spa-backbone.svg",alt:"License"})))),Object(o.b)("p",null,"There are mostly three styles of creating backbone applications"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://requirejs.org/"}),"RequireJS")," which will loads the application and all it's dependencies, including the templates loaded using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://handlebarsjs.com/"}),"Handlebars"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/requirejs/text"}),"RequireJS:Text")," or any other engine. "),Object(o.b)("p",{parentName:"li"},"If your application is written using this style, then you will have to pass the ",Object(o.b)("inlineCode",{parentName:"p"},"AppWithRequire")," parameter as options in the plugin, and choose the flavour to load the app, either through ",Object(o.b)("inlineCode",{parentName:"p"},"data-main")," attribute or without it.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://backbonejs.org/"}),"Backbone")," and ApplicationPath (Entry point of application) directly as script elements and optionally loading other dependencies.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Loading a single application bundle which includes application dependencies like i.e. Backbone, Require, Underscore, Jquery etc. "))),Object(o.b)("h2",{id:"npm-package"},"NPM package"),Object(o.b)("p",null,"npm install --save @emtecinc/single-spa-backbone"),Object(o.b)("p",null,"The npm package can be ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@emtecinc/single-spa-backbone"}),"found here"),". "),Object(o.b)("h2",{id:"quickstart"},"Quickstart"),Object(o.b)("h3",{id:"option-1-using-requirejs-with-data-main"},"Option 1: Using ",Object(o.b)("inlineCode",{parentName:"h3"},"RequireJS")," with ",Object(o.b)("inlineCode",{parentName:"h3"},"data-main")),Object(o.b)("p",null,"First, in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#registered-applications"}),"single-spa application"),", run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install --save @emtec/single-spa-backbone"),". Then, create an entry file for application like below, assuming the application has some ",Object(o.b)("inlineCode",{parentName:"p"},"BasePath")," with ",Object(o.b)("inlineCode",{parentName:"p"},"AppPath")," and `RequireJsPath' being relative to the base path."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaBackbone from '@emtecinc/single-spa-backbone';\n\nconst backBoneLifecycles = singleSpaBackbone({\n    BasePath: 'appBasePath',\n    AppWithRequire:\n    {\n        IsDataMain: true,\n        AppPath: 'src/app',\n        RequireJsPath: 'lib/require.js'\n    },\n    DomElementSetter: domElementSetter\n});\n\nexport const bootstrap = [\n    backBoneLifecycles.bootstrap,\n];\n\nexport const mount = [\n    backBoneLifecycles.mount,\n];\n\nexport const unmount = [\n    backBoneLifecycles.unmount,\n];\n\n\nfunction domElementSetter() {\n\n    //use the same element id to render into, in the backbone app\n    let el = document.getElementById('shell-container');\n    if (!el) {\n        el = document.createElement('div');\n        el.id = 'shell-container';\n        document.body.appendChild(el);\n    }\n\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"DomElementSetter")," gives you a provision to hook up your callback, and can be used to create a container element in the dom which will be used to load the app."),Object(o.b)("p",null,"Please note that this hook up is just a setter and don't expect you to return a value. You need to explicitly use the same element #id in the backbone application to use it as app region or container."),Object(o.b)("h3",{id:"option-2-using-requirejs-without-data-main"},"Option 2: Using ",Object(o.b)("inlineCode",{parentName:"h3"},"RequireJS")," without ",Object(o.b)("inlineCode",{parentName:"h3"},"data-main")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"IsDataMain")," will be set to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," in this case"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaBackbone from '@emtecinc/single-spa-backbone';\n\nconst backBoneLifecycles = singleSpaBackbone({\n    BasePath: 'appBasePath',\n    AppWithBackboneJs:\n    {\n        AppPath: 'src/app',\n        BackboneJsPath: 'lib/backbone.js'\n    },\n    DomElementSetter: domElementSetter\n});\n\nexport const bootstrap = backBoneLifecycles.bootstrap;\n\nexport const mount = backBoneLifecycles.mount;\n\nexport const unmount = backBoneLifecycles.unmount;\n\nfunction domElementSetter() {\n\n    //use the same element id to render into, in the backbone app\n    let el = document.getElementById('shell-container');\n    if (!el) {\n        el = document.createElement('div');\n        el.id = 'shell-container';\n        document.body.appendChild(el);\n    }\n\n}\n")),Object(o.b)("h3",{id:"option-3-load-backbone-app-using-production-build"},"Option 3: Load Backbone app using production build"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaBackbone from '@emtecinc/single-spa-backbone';\n\nconst backBoneLifecycles = singleSpaBackbone({\n    BasePath: 'appBasePath',\n    App:\n    {\n        AppPath: 'src/app'\n    },\n    DomElementSetter: domElementSetter\n});\n\nexport const bootstrap = backBoneLifecycles.bootstrap;\n\nexport const mount = backBoneLifecycles.mount;\n\nexport const unmount = backBoneLifecycles.unmount;\n\n\nfunction domElementSetter() {\n\n    //use the same element id to render into, in the backbone app\n    let el = document.getElementById('shell-container');\n    if (!el) {\n        el = document.createElement('div');\n        el.id = 'shell-container';\n        document.body.appendChild(el);\n    }\n\n}\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,"All options are passed to single-spa-backbone via the ",Object(o.b)("inlineCode",{parentName:"p"},"userOptions")," parameter when calling ",Object(o.b)("inlineCode",{parentName:"p"},"singleSpaBackbone(userOptions)"),". The following properties are available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"BasePath")," (required) : The base path of the backbone application. Mostly it will be the public path from where the app is server and other paths will be relative to this. This parameter expects a string type.\noptional")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"AppWithRequire")," (required) : This parameter takes an object and expects below properties:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"IsDataMain")," (optional) : This parameter takes a boolean value and is used to specify whether require js will use ",Object(o.b)("inlineCode",{parentName:"li"},"data-main")," to load the app."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppPath")," (required) : This parameter takes a string value and specifies the path of the JavaScript file, which is entry point of your application and will be booted up using RequireJs. The path is relative to BasePath."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RequireJsPath")," (required) : This parameter takes a string value and takes the path of the RequireJs file and is relative to BasePath."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DependenciesJsPaths")," (optional) : This is an optional parameter takes an array of strings. It can be used to optionally provide a list of JavaScript paths which you want to load in the browser."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"AppWithBackboneJs")," (optional) : This parameter takes an object and expects below properties:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppPath")," (required) : This parameter takes a string value and specifies the path of the JavaScript file, which is entry point of your application and will be booted up using Backbone Js. The path is relative to BasePath."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BackboneJsPath")," (required) : This parameter takes a string value and takes the path of the Backbone Js file and is relative to BasePath."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DependenciesJsPaths")," (optional) : This is an optional parameter takes an array of strings. It can be used to optionally provide a list of JavaScript paths which you want to load in the browser."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"App")," (optional) : This parameter takes an object and expects below properties:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppPath")," (required) : This parameter takes a string value and specifies the path of the JavaScript file, which is the production build of your backbone application. The path is relative to BasePath.")))),Object(o.b)("h3",{id:"note--out-of-appwithrequire-appwithbackbonejs-and--app-only-one-is-required"},"Note : Out of AppWithRequire, AppWithBackboneJs and  App only one is required"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DomElementSetter")," (optional) : This is an optional parameter and can be mostly used to create a dom element, whose id can be later used in the backbone app to load the application. However, you can freely use this callback for any other purpose. It is called before anything else.")))}s.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return n?i.a.createElement(m,p(p({ref:t},l),{},{components:n})):i.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);