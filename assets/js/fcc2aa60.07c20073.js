"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2838],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7730:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],i={id:"parcels-api",title:"Parcels API",sidebar_label:"Parcels API"},p=void 0,s={unversionedId:"parcels-api",id:"version-5.x/parcels-api",title:"Parcels API",description:"Most parcel methods will be called on the parcel itself, with the exception being around mounting.",source:"@site/versioned_docs/version-5.x/parcels-api.md",sourceDirName:".",slug:"/parcels-api",permalink:"/docs/parcels-api",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/parcels-api.md",tags:[],version:"5.x",frontMatter:{id:"parcels-api",title:"Parcels API",sidebar_label:"Parcels API"},sidebar:"version-5.x/docs",previous:{title:"Applications API",permalink:"/docs/api"},next:{title:"Overview",permalink:"/docs/ecosystem"}},c=[{value:"mounting",id:"mounting",children:[{value:"Parcel Props",id:"parcel-props",children:[],level:3},{value:"mountParcel",id:"mountparcel",children:[],level:3},{value:"mountRootParcel",id:"mountrootparcel",children:[],level:3}],level:2},{value:"Parcel Object",id:"parcel-object",children:[{value:"unmount",id:"unmount",children:[],level:3},{value:"mount",id:"mount",children:[],level:3},{value:"update",id:"update",children:[],level:3},{value:"getStatus",id:"getstatus",children:[],level:3},{value:"loadPromise",id:"loadpromise",children:[],level:3},{value:"bootstrapPromise",id:"bootstrappromise",children:[],level:3},{value:"mountPromise",id:"mountpromise",children:[],level:3},{value:"unmountPromise",id:"unmountpromise",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most parcel methods will be called on the parcel itself, with the exception being around mounting."),(0,o.kt)("h2",{id:"mounting"},"mounting"),(0,o.kt)("p",null,"Both mount methods take a ",(0,o.kt)("a",{parentName:"p",href:"/docs/parcels-overview#parcel-configuration"},"parcelConfig")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/parcels-api#parcel-props"},"additional props"),".\nThey both return a ",(0,o.kt)("a",{parentName:"p",href:"/docs/parcels-api#parcel-object"},"parcel object"),". The parcel object contains all additional exposed methods."),(0,o.kt)("h3",{id:"parcel-props"},"Parcel Props"),(0,o.kt)("p",null,"When mounting a parcel the second argument is props, a JavaScript object of properties to be passed to the parcel. This object must have a domElement prop, which is the dom node that the parcel will mount into."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const parcelProps = {\n  customerId: 7,\n  numberOfTasks: 42,\n  domElement: document.createElement('div')\n}\n")),(0,o.kt)("h3",{id:"mountparcel"},"mountParcel"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"applicationProps.mountParcel(parcelConfig, parcelProps)"),". Each application is provided a mountParcel function.\nThe main advantage to using an applications ",(0,o.kt)("inlineCode",{parentName:"p"},"mountParcel")," function is that parcels mounted via an\napplications ",(0,o.kt)("inlineCode",{parentName:"p"},"mountParcel")," will be automatically unmounted when the application is unmounted."),(0,o.kt)("p",null,"The first argument may be either an object or a function that returns a promise that resolves with the object (a loading function)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Synchronous mounting\nconst parcel1 = applicationProps.mountParcel(parcelConfig, parcelProps);\n\n// Asynchronous mounting. Feel free to use webpack code splits or SystemJS dynamic loading\nconst parcel2 = applicationProps.mountParcel(() => import('./some-parcel'), parcelProps);\n")),(0,o.kt)("h3",{id:"mountrootparcel"},"mountRootParcel"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/api#mountrootparcel"},"mountRootParcel")," method will mount the parcel but ",(0,o.kt)("inlineCode",{parentName:"p"},"unmount")," must be called manually."),(0,o.kt)("h2",{id:"parcel-object"},"Parcel Object"),(0,o.kt)("p",null,"The parcel object contains the following functions and methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/parcels-api#mount"},"mount")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/parcels-api#unmount"},"unmount")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/parcels-api#update"},"update")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/parcels-api#getstatus"},"getStatus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/parcels-api#loadpromise"},"loadPromise")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/parcels-api#bootstrappromise"},"bootstrapPromise")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/parcels-api#mountpromise"},"mountPromise")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/parcels-api#unmountpromise"},"unmountPromise"))),(0,o.kt)("h3",{id:"unmount"},"unmount"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parcel.unmount()")," returns a promise that resolves once the parcel is successfully unmounted. The promise may throw an error which needs to be handled."),(0,o.kt)("h3",{id:"mount"},"mount"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parcel.mount()")," returns a promise that resolves once the parcel is successfully mounted. The promise can throw an error which needs to be handled."),(0,o.kt)("h3",{id:"update"},"update"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parcel.update(props)")," allows you to change the props passed into a parcel. Note that not all parcels support being updated. The ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," function returns a promise that resolves when the parcel is finished updating. See ",(0,o.kt)("a",{parentName:"p",href:"parcels-overview.html#update-optional"},"other documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"https://single-spa.js.org/docs/parcels-overview.html#quick-example"},"example")," for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const parcel = singleSpa.mountRootParcel(parcelConfig, parcelProps);\nparcel.update(newParcelProps);\n")),(0,o.kt)("h3",{id:"getstatus"},"getStatus"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parcel.getStatus()")," retuns a string of that parcels status. The string status is one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NOT_BOOTSTRAPPED"),": The parcel has not been bootstrapped"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BOOTSTRAPPING"),": The parcel is bootstrapping but has not finished"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NOT_MOUNTED"),": The parcel has bootstrapped, but is not mounted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MOUNTED"),": The parcel is currently active and mounted to the DOM"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UNMOUNTING"),": The parcel is unmounting, but has not finished"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UPDATING"),": The parcel is currently being updated, but has not finished"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SKIP_BECAUSE_BROKEN"),": The parcel threw an error during bootstrap, mount, unmount, or update. Other parcels may continue normally, but this one will be skipped.")),(0,o.kt)("h3",{id:"loadpromise"},"loadPromise"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parcel.loadPromise()")," returns a promise that will resolve once the parcel has been loaded."),(0,o.kt)("h3",{id:"bootstrappromise"},"bootstrapPromise"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parcel.bootstrapPromise()")," returns a promise that will resolve once the parcel has been bootstrapped."),(0,o.kt)("h3",{id:"mountpromise"},"mountPromise"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parcel.mountPromise()")," returns a promise that will resolve once the parcel has been mounted. This is helpful for knowing exactly when a parcel has been appended to the DOM"),(0,o.kt)("h3",{id:"unmountpromise"},"unmountPromise"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parcel.unmountPromise()")," returns a promise that will resolve once the parcel has been unmounted."))}m.isMDXComponent=!0}}]);