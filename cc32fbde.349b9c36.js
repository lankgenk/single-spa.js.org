(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),i=(n(0),n(182)),r={id:"ecosystem-react",title:"single-spa-react",sidebar_label:"React"},l={unversionedId:"ecosystem-react",id:"version-4.x/ecosystem-react",isDocsHomePage:!1,title:"single-spa-react",description:"Build Status",source:"@site/versioned_docs/version-4.x/ecosystem-react.md",slug:"/ecosystem-react",permalink:"/docs/4.x/ecosystem-react",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-4.x/ecosystem-react.md",version:"4.x",sidebar_label:"React",sidebar:"version-4.x/docs",previous:{title:"The single-spa ecosystem",permalink:"/docs/4.x/ecosystem"},next:{title:"single-spa-vue",permalink:"/docs/4.x/ecosystem-vue"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Quickstart",id:"quickstart",children:[]},{value:"Options",id:"options",children:[]},{value:"Notes",id:"notes",children:[]},{value:"SingleSpaContext",id:"singlespacontext",children:[]},{value:"Parcels",id:"parcels",children:[]},{value:"Create React App",id:"create-react-app",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://travis-ci.com/single-spa/single-spa-react"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://travis-ci.com/single-spa/single-spa-react.svg?branch=master",alt:"Build Status"})))),Object(i.b)("p",null,"single-spa-react is a helper library that helps implement ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for use with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React"),". Check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-react"}),"single-spa-react github"),"."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-react\n\n# or\nyarn add single-spa-react\n")),Object(i.b)("p",null,"Alternatively, you can use single-spa-react by adding ",Object(i.b)("inlineCode",{parentName:"p"},'<script src="https://unpkg.com/single-spa-react"><\/script>')," and accessing the singleSpaReact global variable."),Object(i.b)("h2",{id:"quickstart"},"Quickstart"),Object(i.b)("p",null,'Your bundler\'s "entry file" should look like this, which allows your application to be downloaded as an in-browser ES module.'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport rootComponent from './path-to-root-component.js';\n// Note that SingleSpaContext is a react@16.3 (if available) context that provides the singleSpa props\nimport singleSpaReact, {SingleSpaContext} from 'single-spa-react';\n\nconst reactLifecycles = singleSpaReact({\n  React,\n  ReactDOM,\n  rootComponent,\n});\n\nexport const bootstrap = reactLifecycles.bootstrap;\nexport const mount = reactLifecycles.mount;\nexport const unmount = reactLifecycles.unmount;\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("p",null,"All options are passed to single-spa-react via the ",Object(i.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(i.b)("inlineCode",{parentName:"p"},"singleSpaReact(opts)"),". The following options are available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"React"),": (required) The main React object, which is generally either exposed onto the window or is available via ",Object(i.b)("inlineCode",{parentName:"li"},"require('react')")," ",Object(i.b)("inlineCode",{parentName:"li"},"import React from 'react'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ReactDOM"),": (required) The main ReactDOMbject, which is available via ",Object(i.b)("inlineCode",{parentName:"li"},"require('react-dom')")," ",Object(i.b)("inlineCode",{parentName:"li"},"import ReactDOM from 'react-dom'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rootComponent"),": (required) The top level React component which will be rendered. Can be omitted only if ",Object(i.b)("inlineCode",{parentName:"li"},"loadRootComponent")," is provided."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"loadRootComponent"),": (optional) A loading function that returns a promise that resolves with the parcel. This takes the place of the ",Object(i.b)("inlineCode",{parentName:"li"},"rootComponent")," opt, when provided. It is intended to help people\nwho want to lazy load the source code for their root component. The source code will be lazy loaded during the bootstrap lifecycle."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"suppressComponentDidCatchWarning"),": (optional) A boolean that indicates if single-spa-react should warn when the rootComponent does not implement componentDidCatch. Defaults to false."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (optional) A function that takes in no arguments and returns a DOMElement. This dom element is where the\nReact application will be bootstrapped, mounted, and unmounted. Note that this opt can be omitted. When omitted, the ",Object(i.b)("inlineCode",{parentName:"li"},"domElementGetter")," or ",Object(i.b)("inlineCode",{parentName:"li"},"domElement"),Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#custom-props"}),"custom single-spa props")," are used.\nTo use those, do ",Object(i.b)("inlineCode",{parentName:"li"},"singleSpa.registerApplication(name, app, activityFn, {domElementGetter: function() {...}})")," or\n",Object(i.b)("inlineCode",{parentName:"li"},"singleSpa.registerApplication(name, app, activityFn, {domElement: document.getElementById(...)})"),". If no dom element can be found through any\nof those methods, then a container div will be created and appended to document.body, by default."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"parcelCanUpdate"),": (optional) A boolean that controls whether an update lifecycle will be created for the returned parcel. Note that option does not impact single-spa applications, but only parcels.\nIt is true by default."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"renderType"),": (optional) ENUM of one of the following: ","[ 'render', 'hydrate', 'createRoot', 'createBlockingRoot' ]",". Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"'render'"),". Allows you to choose which ReactDOM render method you want to use for your application.")),Object(i.b)("h2",{id:"notes"},"Notes"),Object(i.b)("p",null,"For react@>=16, it is best practice to have each single-spa application's root application implement componentDidCatch in order to avoid\nthe entire application unmounting unexpectedly when an error occurs. single-spa-react will warn to the console if componentDidCatch is not\nimplemented. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html"}),"https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html")," for more details."),Object(i.b)("h2",{id:"singlespacontext"},"SingleSpaContext"),Object(i.b)("h2",{id:"parcels"},"Parcels"),Object(i.b)("p",null,"single-spa-react can also be used to create a single-spa parcel (instead of a single-spa application). To do so, simply call singleSpaReact() the same as for an application, except without a\ndomElementGetter (since those are provided by the code that will mount the parcel)."),Object(i.b)("p",null,"Additionally, single-spa-react provides a ",Object(i.b)("inlineCode",{parentName:"p"},"<Parcel>")," component to make using framework agnostic single-spa parcels easier. This allows you to put the parcel into your render method's jsx, instead of having to implement componentDidMount and componentWillUnmount.\nYou can use the Parcel component either by npm installing the library and importing ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa-react/parcel")," or by adding ",Object(i.b)("inlineCode",{parentName:"p"},'<script src="https://unpkg.com/single-spa-react/parcel"><\/script>')," and then accessing the Parcel component with ",Object(i.b)("inlineCode",{parentName:"p"},"window.Parcel.default"),"."),Object(i.b)("h4",{id:"parcel-props"},"Parcel props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config"),' (required): Either a single-spa parcel config object, or a "loading function" that returns a Promise that resolves with the parcel config.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"wrapWith")," (optional): A string ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName"}),"tagName"),".",Object(i.b)("inlineCode",{parentName:"li"},"<Parcel>")," will create a dom node of that type for the parcel to be mounted into. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"div")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"appendTo")," (optional): A dom element to append the parcel to. By default, this is not needed because the parcel will be mounted in the DOM that the ",Object(i.b)("inlineCode",{parentName:"li"},"<Parcel>")," component was rendered into. Useful for appending parcels to document.body or other separate parts of the dom."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mountParcel")," (sometimes required, sometimes not): The ",Object(i.b)("inlineCode",{parentName:"li"},"mountParcel")," function provided by single-spa. In general, it is preferred to use an application's mountParcel function instead of the\nsingle-spa's root mountParcel function, so that single-spa can keep track of the parent-child relationship and automatically unmount the application's parcels when the application unmounts.\nNote that if the ",Object(i.b)("inlineCode",{parentName:"li"},"<Parcel>")," component is being rendered by a single-spa application that uses single-spa-react, it is ",Object(i.b)("strong",{parentName:"li"},"unnecessary")," to pass in the prop, since ",Object(i.b)("inlineCode",{parentName:"li"},"<Parcel>")," can get the prop\nfrom ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#singlespacontext"}),"SingleSpaContext")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handleError")," (optional): A function that will be called with errors thrown by the parcel. If not provided, errors will be thrown on the window, by default."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"parcelDidMount")," (optional): A function that will be called when the parcel finishes loading and mounting.")),Object(i.b)("h4",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import Parcel from \'single-spa-react/parcel\'\nimport * as parcelConfig from \'./my-parcel.js\'\n\n// config is required. The parcel will be mounted inside of the\n// of a div inside of the react component tree\n<Parcel\n  config={parcelConfig}\n\n  wrapWith="div"\n  handleError={err => console.error(err)}\n\n  customProp1="customPropValue2"\n  customProp2="customPropValue2"\n/>\n\n// If you pass in an appendTo prop, the parcel will be mounted there instead of\n// to a dom node inside of the current react component tree\n<Parcel>\n  config={parcelConfig}\n  wrapWith="div"\n  appendTo={document.body}\n/>\n\n// You can also pass in a "loading function" as the config.\n// The loading function must return a promise that resolves with the parcel config.\n// The parcel will be mounted once the promise resolves.\n<Parcel\n  config={() => import(\'./my-parcel.js\')}\n  wrapWith="div"\n/>\n\n// If you are rendering the Parcel component from a single-spa application, you do not need to pass a mountParcel prop.\n// But if you have a separate react component tree that is not rendered by single-spa-react, you **must** pass in a mountParcel prop\n// In general, it is preferred to use an application\'s mountParcel function instead of the single-spa\'s root mountParcel function,\n// so that single-spa can keep track of the parent-child relationship and automatically unmount the application\'s parcels when the application\n// unmounts\n<Parcel\n  mountParcel={singleSpa.mountParcel}\n  config={parcelConfig}\n  wrapWith="div"\n/>\n')),Object(i.b)("h2",{id:"create-react-app"},"Create React App"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://single-spa.js.org/docs/faq.html#create-react-app"}),"FAQ for CRA")))}s.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(r,".").concat(m)]||d[m]||b[m]||i;return n?o.a.createElement(u,l(l({ref:t},p),{},{components:n})):o.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);