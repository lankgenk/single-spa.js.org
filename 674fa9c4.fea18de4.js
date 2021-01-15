(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(182)),i={title:"single-spa parcels, explained",author:"Joel Denning",authorURL:"https://twitter.com/joelbdenning",authorImageURL:"https://avatars2.githubusercontent.com/u/5524384?s=400&u=ff145fcb2ae5305555628a446e9f725d4e145aaa&v=4"},s={permalink:"/blog/2018/06/19/single-spa-parcels-explained",source:"@site/blog/2018-06-19-single-spa-parcels-explained.md",description:"Ever since single-spa@1.0.0, the single-spa team has been dedicated to bringing microservices to the frontend. We have made it possible for AngularJS, React, Angular, Vue, and other frameworks to coexist side by side in the same page.",date:"2018-06-19T00:00:00.000Z",tags:[],title:"single-spa parcels, explained",readingTime:3.69,truncated:!1,prevItem:{title:"single-spa Inspector and 4.1",permalink:"/blog/2019/02/20/single-spa-inspector"},nextItem:{title:"A step-by-step guide to single-spa",permalink:"/blog/2016/12/16/a-step-by-step-guide-to-single-spa"}},c=[{value:"Another way to do framework agnostic components?",id:"another-way-to-do-framework-agnostic-components",children:[]},{value:"Okay but you haven\u2019t told me what a single-spa parcel is",id:"okay-but-you-havent-told-me-what-a-single-spa-parcel-is",children:[]},{value:"A few more specifics",id:"a-few-more-specifics",children:[]},{value:"Syntactic sugar makes this easier",id:"syntactic-sugar-makes-this-easier",children:[]},{value:"How hard is it to try this out?",id:"how-hard-is-it-to-try-this-out",children:[]},{value:"Let us know what you think!",id:"let-us-know-what-you-think",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Ever since ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:single-spa@1.0.0"}),"single-spa@1.0.0"),", the single-spa team has been dedicated to bringing microservices to the frontend. We have made it possible for AngularJS, React, Angular, Vue, and other frameworks to coexist side by side in the same page."),Object(r.b)("p",null,"And with the release of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/releases/tag/v4.0.0"}),"version 4"),", I\u2019m pleased to announce that ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa"}),"single-spa")," is expanding that effort so that ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"individual components"))," written with different frameworks can interoperate. It is new terrain for the single-spa community, which previously had focused on getting large applications to interoperate with each other, instead of the individual components."),Object(r.b)("h2",{id:"another-way-to-do-framework-agnostic-components"},"Another way to do framework agnostic components?"),Object(r.b)("p",null,"For those familiar with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components"}),"web components")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"}),"custom elements"),", you may be wondering why a JavaScript library would try to do what browsers are starting natively to do."),Object(r.b)("p",null,"And as one of the contributors to the custom elements polyfill, let me be the first one to say that we did not make this decision lightly."),Object(r.b)("p",null,"If you\u2019re interested in diving into the details, check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/canopy-tax/one-companys-relationship-with-custom-elements-d360baf3b253"}),"One Company\u2019s Relationship With Custom Elements"),", which explains some of the difficulties we\u2019ve been through with web components and custom elements."),Object(r.b)("p",null,"TLDR: React and some other frameworks don\u2019t interop with custom elements very well. Additionally dealing with inner HTML, attributes vs properties, and customized builtins can be a pain."),Object(r.b)("h2",{id:"okay-but-you-havent-told-me-what-a-single-spa-parcel-is"},"Okay but you haven\u2019t told me what a single-spa parcel is"),Object(r.b)("p",null,"A parcel is single-spa\u2019s way of building a component in one framework and using it in another."),Object(r.b)("p",null,"To implement a parcel, just create a JavaScript object that has 3\u20134 functions on it. We call this JavaScript object a ",Object(r.b)("em",{parentName:"p"},"parcel config")," and there are three required functions to implement: bootstrap, mount, and unmount. A fourth function, update, is optional."),Object(r.b)("p",null,"Each of the functions will be called by single-spa at the right time, but the parcel config will control what happens. In other words, single-spa controls the \u201cwhen,\u201d but the parcel config controls the \u201cwhat\u201d and the \u201chow.\u201d"),Object(r.b)("p",null,"Once you\u2019ve implemented the parcel config, simply call singleSpa.mountRootParcel(parcelConfig, parcelProps) to mount it. This is the key to what makes parcels framework agnostic \u2014 regardless of whether the parcel config is implemented with React, Angular, Vue, or anything else, to use the parcel you always just call mountRootParcel()."),Object(r.b)("h2",{id:"a-few-more-specifics"},"A few more specifics"),Object(r.b)("p",null,"We\u2019ve glossed over a few things that I want to touch on real quick:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"How do you implement the lifecycle functions on the parcel config?")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"        Use a helper library for your framework of choice. [single-spa-react](https://github.com/single-spa/single-spa-react), [single-spa-angular](https://github.com/single-spa/single-spa-angular) (for angular@2+), [single-spa-angularjs](https://github.com/single-spa/single-spa-angularjs), [single-spa-vue](https://github.com/single-spa/single-spa-vue), and [others](https://github.com/single-spa/single-spa/blob/master/docs/single-spa-ecosystem.md) will implement the entire parcel config for you.\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"What are the props you pass to mountRootParcel()?")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"        The props passed as the second argument to singleSpa.mountRootParcel(parcelConfig, parcelProps) are an object with one required prop and as many custom props as you\u2019d like. The required prop is domElement, which tells the parcel where to mount. And the custom props get passed through to the parcel config lifecycle functions.\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"How do you re-render and unmount a parcel?")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'        The singleSpa.mountRootParcel() function returns a parcel object that lets you re-render and unmount the parcel whenever you\u2019d like to.\n\n        <iframe src="https://medium.com/media/b2d981b380b937009f7ce84e1cc2d753" frameBorder="0" />\n')))),Object(r.b)("h2",{id:"syntactic-sugar-makes-this-easier"},"Syntactic sugar makes this easier"),Object(r.b)("p",null,"Calling all of those functions manually might get annoying. So let\u2019s make it easier. Here\u2019s an example of some syntactic sugar for React. Similar features will be added soon for Angular, Vue, and other frameworks."),Object(r.b)("iframe",{src:"https://medium.com/media/9b5904d3423359cb2eef410f9ee35648",frameBorder:"0"}),Object(r.b)("h2",{id:"how-hard-is-it-to-try-this-out"},"How hard is it to try this out?"),Object(r.b)("p",null,"You can get started with parcels immediately, without using the rest of single-spa. To do so, either npm install or script tag single-spa, then call mountRootParcel with your first parcel config."),Object(r.b)("p",null,"You can also check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://codepen.io/joeldenning/pen/qKVoQg?editors=0010#0"}),"this codepen example")," to start out."),Object(r.b)("p",null,"And if you are already a user of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md"}),"single-spa applications"),", parcels mean that your applications can mount and unmount shared functionality whenever you want them to. Since parcels don\u2019t have ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/configuration#activity-function"}),"activity functions"),", you don\u2019t have to set up routes for them."),Object(r.b)("h2",{id:"let-us-know-what-you-think"},"Let us know what you think!"),Object(r.b)("p",null,"We\u2019d love to get your feedback on parcels. What do you think of this new way of framework interop? Is the implementation easy to understand? Are parcels useful for you or do they not quite fit into what you\u2019re trying to accomplish?How hard was it for you to try out?"),Object(r.b)("p",null,"Check out the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/parcels.md"}),"official docs")," for more examples, explanations, and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/parcels-api.md"}),"api documentation"),"."),Object(r.b)("p",null,"And let us know your thoughts in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://join.slack.com/t/single-spa/shared_invite/zt-jy1x8x93-52Tth0fZBUzZmHcEpWw2Jg"}),"single-spa Slack channel"),", a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/issues"}),"Github issue"),", or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/Single_spa"}),"on Twitter"),"!"))}p.isMDXComponent=!0},182:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,m=u["".concat(i,".").concat(b)]||u[b]||h[b]||r;return a?o.a.createElement(m,s(s({ref:t},l),{},{components:a})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);