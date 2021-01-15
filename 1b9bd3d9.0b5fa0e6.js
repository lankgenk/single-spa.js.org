(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{182:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return a?i.a.createElement(m,l(l({ref:t},s),{},{components:a})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(182)),o={id:"module-types",title:"single-spa Microfrontend Types",sidebar_label:"Microfrontend Types"},l={unversionedId:"module-types",id:"version-5.x/module-types",isDocsHomePage:!1,title:"single-spa Microfrontend Types",description:"Concept: single-spa Microfrontend Types",source:"@site/versioned_docs/version-5.x/module-types.md",slug:"/module-types",permalink:"/docs/module-types",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/module-types.md",version:"5.x",sidebar_label:"Microfrontend Types",sidebar:"version-5.x/docs",previous:{title:"Microfrontends Overview",permalink:"/docs/microfrontends-concept"},next:{title:"Configuring single-spa",permalink:"/docs/configuration"}},c=[{value:"Applications",id:"applications",children:[{value:"Applications are declarative",id:"applications-are-declarative",children:[]},{value:"Applications have managed lifecycles",id:"applications-have-managed-lifecycles",children:[]},{value:"Applications and their public interface",id:"applications-and-their-public-interface",children:[]}]},{value:"Parcels",id:"parcels",children:[{value:"Parcels are imperative",id:"parcels-are-imperative",children:[]},{value:"You manage the lifecycles of parcels",id:"you-manage-the-lifecycles-of-parcels",children:[]},{value:"Parcels are best suited for sharing pieces of UI between frameworks",id:"parcels-are-best-suited-for-sharing-pieces-of-ui-between-frameworks",children:[]}]},{value:"Utilities",id:"utilities",children:[{value:"How do Utilites relate to single-spa?",id:"how-do-utilites-relate-to-single-spa",children:[]},{value:"Utility modules share common logic",id:"utility-modules-share-common-logic",children:[]},{value:"Examples of Utility MFEs",id:"examples-of-utility-mfes",children:[]}]}],s={toc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"concept-single-spa-microfrontend-types"},"Concept: single-spa Microfrontend Types"),Object(r.b)("p",null,"Single-spa has ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/microfrontends-concept/#types-of-microfrontends"}),"different categories")," of microfrontends. It is up to you where and how you use each of them. However, the single-spa core team has ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/recommended-setup/#applications-versus-parcels-versus-utility-modules"}),"recommendations"),"."),Object(r.b)("p",null,"Here is how each single-spa microfrontend works conceptually. This information should help you understand our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/recommended-setup/#applications-versus-parcels-versus-utility-modules"}),"recommendations"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Topic"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Application"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parcel"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Utility"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Routing"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"has multiple routes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"has no routes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"has no routes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"API"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"declarative API"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"imperative API"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"exports a public interface")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Renders UI"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"renders UI"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"renders UI"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"may or may not render UI")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Lifecycles"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"single-spa managed lifecycles"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"custom managed lifecycles"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"external module: no direct single-spa lifecycles")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When to use"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"core building block"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"only needed with multiple frameworks"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"useful to share common logic, or create a service")))),Object(r.b)("p",null,"Each single-spa microfrontend is an in-browser JavaScript module (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/recommended-setup#in-browser-versus-build-time-modules"}),"explanation"),")."),Object(r.b)("h2",{id:"applications"},"Applications"),Object(r.b)("h3",{id:"applications-are-declarative"},"Applications are declarative"),Object(r.b)("p",null,"Applications use a declarative API called ",Object(r.b)("inlineCode",{parentName:"p"},"registerApplication"),". Your single-spa config (also sometimes called the root config) defines applications ahead of time and defines the conditions for when each application is active, but it doesn't mount the applications directly."),Object(r.b)("h3",{id:"applications-have-managed-lifecycles"},"Applications have managed lifecycles"),Object(r.b)("p",null,"single-spa manages registered applications and is in charge of all of their lifecycles. This prevents you from needing to write a bunch of logic about when applications should mount and unmount; single-spa takes care of that for you.\nAll that single-spa needs to make this work automatically is an activity function that describes when your application should be active."),Object(r.b)("h3",{id:"applications-and-their-public-interface"},"Applications and their public interface"),Object(r.b)("p",null,"Applications ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),Object(r.b)("em",{parentName:"a"},"must")," export their lifecycles")," so they can be managed by single-spa, but they can also export additional methods, values, components, parcels, or more as part of their public interface. It is common to use these exports inside another application so you can create highly cohesive modules with low coupling."),Object(r.b)("h2",{id:"parcels"},"Parcels"),Object(r.b)("h3",{id:"parcels-are-imperative"},"Parcels are imperative"),Object(r.b)("p",null,"Parcels exist in many ways as an escape hatch from the normal declarative flow. They exist primarily to allow you to reuse pieces of UI across applications when those applications are written in multiple frameworks."),Object(r.b)("h3",{id:"you-manage-the-lifecycles-of-parcels"},"You manage the lifecycles of parcels"),Object(r.b)("p",null,"When you call ",Object(r.b)("inlineCode",{parentName:"p"},"mountParcel")," or ",Object(r.b)("inlineCode",{parentName:"p"},"mountRootParcel")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/parcels-api"}),"(see API)")," the parcel is mounted immediately and returns the parcel object. You need to call the ",Object(r.b)("inlineCode",{parentName:"p"},"unmount")," method on the parcel manually when the component that calls ",Object(r.b)("inlineCode",{parentName:"p"},"mountParcel")," unmounts."),Object(r.b)("h3",{id:"parcels-are-best-suited-for-sharing-pieces-of-ui-between-frameworks"},"Parcels are best suited for sharing pieces of UI between frameworks"),Object(r.b)("p",null,"Creating a parcel is as easy as using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/ecosystem#help-for-frameworks"}),"single-spa helpers")," for that framework on a specific component/UI. This returns an object (",Object(r.b)("inlineCode",{parentName:"p"},"parcelConfig"),") that single-spa can use to create and mount a parcel.\nBecause single-spa can mount a parcel anywhere, this gives you a way to share UI/components across frameworks. It should not be used if the shared UI is being used in another application of the same framework.\nFor example: ",Object(r.b)("inlineCode",{parentName:"p"},"application1")," is written in Vue and contains all the UI and logic to create a user. ",Object(r.b)("inlineCode",{parentName:"p"},"application2")," is written in React and needs to create a user. Using a single-spa parcel allows you to wrap your ",Object(r.b)("inlineCode",{parentName:"p"},"application1")," Vue component\nin a way that will make it work inside ",Object(r.b)("inlineCode",{parentName:"p"},"application2")," despite the different frameworks.\nThink of parcels as a single-spa specific implementation of webcomponents."),Object(r.b)("h2",{id:"utilities"},"Utilities"),Object(r.b)("h3",{id:"how-do-utilites-relate-to-single-spa"},"How do Utilites relate to single-spa?"),Object(r.b)("p",null,"A utility is an in-browser module that (generally) has it's own repository and CI process. It exports a public interface of functions and variables that any other microfrontend can import and use. A utility microfrontend is just like any other microfrontend, except it doesn't serve as a single-spa application or parcel."),Object(r.b)("h3",{id:"utility-modules-share-common-logic"},"Utility modules share common logic"),Object(r.b)("p",null,"Utility modules are a great place to share common logic. Instead of each application creating their own implementation of common logic, you can use a plain JavaScript object (single-spa utility) to share that logic.\nFor example: Authorization. How does each application know which user is logged in? You could have each application ask the server or read a JWT but that creates duplicate work in each application.\nUsing the utility module pattern would allow you to create one module that implements the authorization logic. This module would export any needed methods, and then your other single-spa applications could use those authorization methods by importing them.\nThis approach also works well for data ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/recommended-setup#api-data"}),"fetching"),"."),Object(r.b)("h3",{id:"examples-of-utility-mfes"},"Examples of Utility MFEs"),Object(r.b)("p",null,"The following are commonly implemented as a Utility MFE:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Notification service"),Object(r.b)("li",{parentName:"ul"},"Styleguide/component library"),Object(r.b)("li",{parentName:"ul"},"Error tracking service"),Object(r.b)("li",{parentName:"ul"},"Authorization service"),Object(r.b)("li",{parentName:"ul"},"Data fetching")))}p.isMDXComponent=!0}}]);