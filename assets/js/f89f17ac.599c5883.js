"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7593],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6346:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],a={id:"ecosystem-vite",title:"Vite",sidebar_label:"Vite"},l=void 0,p={unversionedId:"ecosystem-vite",id:"version-5.x/ecosystem-vite",title:"Vite",description:"Vite is a tool for both local development and the building of applications. It was created within the Vue ecosystem, but can be used with other UI frameworks, too.",source:"@site/versioned_docs/version-5.x/ecosystem-vite.md",sourceDirName:".",slug:"/ecosystem-vite",permalink:"/docs/ecosystem-vite",draft:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/ecosystem-vite.md",tags:[],version:"5.x",frontMatter:{id:"ecosystem-vite",title:"Vite",sidebar_label:"Vite"},sidebar:"version-5.x/docs",previous:{title:"AlpineJS",permalink:"/docs/ecosystem-alpinejs"},next:{title:"Snowpack",permalink:"/docs/ecosystem-snowpack"}},c={},u=[{value:"Example repo",id:"example-repo",level:2},{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Local development",id:"local-development",level:2},{value:"Native Modules vs SystemJS",id:"native-modules-vs-systemjs",level:2},{value:"vite-plugin-single-spa",id:"vite-plugin-single-spa",level:2},{value:"Main Features",id:"main-features",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vitejs/vite"},"Vite")," is a tool for both local development and the building of applications. It was created within the Vue ecosystem, but can be used with other UI frameworks, too."),(0,r.kt)("h2",{id:"example-repo"},"Example repo"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/joeldenning/vite-single-spa-example"},"https://github.com/joeldenning/vite-single-spa-example")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"By default, Vite uses ES modules in local development, but not in production. This works well with single-spa, which encourages using ",(0,r.kt)("a",{parentName:"p",href:"/docs/recommended-setup#in-browser-versus-build-time-modules"},"in-browser modules")," as the interface for each microfrontend. To use vite with single-spa, you must export the ",(0,r.kt)("a",{parentName:"p",href:"/docs/building-applications#registered-application-lifecycle"},"single-spa lifecycle functions")," from your Vite's ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js")," file and then make a few modifications to the ",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.js")," file."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main.js")," file to not mount your app immediately, but rather to export the single-spa lifecycles. For Vue apps, see ",(0,r.kt)("a",{parentName:"p",href:"https://single-spa.js.org/docs/ecosystem-vue#usage"},"https://single-spa.js.org/docs/ecosystem-vue#usage"),"."),(0,r.kt)("p",null,"The following Vite config can be used as the basis for a single-spa + Vite setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import vue from '@vitejs/plugin-vue'\n\nexport default {\n  rollupOptions: {\n    input: 'src/main.js',\n    format: 'system',\n    preserveEntrySignatures: true\n  },\n  base: 'http://localhost:3000',\n  plugins: [vue({\n    template: {\n      transformAssetUrls: {\n        base: '/src'\n      }\n    }\n  })],\n}\n")),(0,r.kt)("h2",{id:"local-development"},"Local development"),(0,r.kt)("p",null,"Vite works well with ",(0,r.kt)("a",{parentName:"p",href:"https://single-spa.js.org/docs/recommended-setup#local-development"},"development via import map overrides"),". You should use http://localhost:3000/src/main.js as the URL for your import map override.  It is important to note, however, that assets such as images and fonts won't load.  The import map is only used to load JavaScript, not media files.  The import map does not affect asset URL's.  Asset URL's are affected by Vite's ",(0,r.kt)("inlineCode",{parentName:"p"},"base")," configuration property, and Vite doesn't respect full URL's in said property while in serve mode (",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),").  While in serve mode, a base with a full URL is stripped down to its path.  Therefore, the asset URL's don't really get the correct host URL.  The author of ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/vite-plugin-single-spa"},"vite-plugin-single-spa")," has opened ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vitejs/vite/discussions/13927"},"a discussion in Vite's GitHub")," that you can opt to support by upvoting it."),(0,r.kt)("h2",{id:"native-modules-vs-systemjs"},"Native Modules vs SystemJS"),(0,r.kt)("p",null,"single-spa works well with native modules, systemjs, or even both. With Vite + single-spa, a general recommendation is to use native modules during local development, but SystemJS in production (since browser support for Import Maps is still pending). Doing this is nice because it matches Vite's development workflow; however, mixing native and systemjs modules also can have some caveats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The browser and SystemJS maintain separate module registries. This means that you can't share imports between SystemJS and native modules. So if you are doing an import map override for a Vite application on a page that also uses SystemJS, you may end up with multiple instances of Vue (and other shared libraries), which is different than how things will work in production. This is generally okay, except for situations where the Vue instance is modified via ",(0,r.kt)("inlineCode",{parentName:"li"},"Vue.use()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/systemjs/systemjs/pull/2187"},"This PR to SystemJS")," shows how you can populate native modules into the SystemJS registry, allowing for one-way sharing of modules between the two registries. The PR was closed due to some edge cases, but it generally works. Even though the PR is closed, you can paste the ESM extra into your root config and it will work. If you have interest in driving forward better SystemJS + ESM compatibility, comment on Github or Slack with your interest.")),(0,r.kt)("h2",{id:"vite-plugin-single-spa"},"vite-plugin-single-spa"),(0,r.kt)("p",null,"This is a new entry that is currently in the early stages of development, but shows significant progress (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WJSoftware/vite-plugin-single-spa"},"view in GitHub"),").  It claims to be able to convert out-of-the-box Vite projects (regardless of the framework) into single-spa micro-frontend projects and even root config projects.  While the single-spa team discourages the use of UI frameworks in root configs, it is indeed an alternative that may interest people."),(0,r.kt)("p",null,"To convert a Vite project to a root config project, all that is needed is install ",(0,r.kt)("inlineCode",{parentName:"p"},"vite-plugin-single-spa"),", and then use it in ",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.ts"),".  This is a Vite + Vue example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import vitePluginSingleSpa from 'vite-plugin-single-spa';\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [vue(), vitePluginSingleSpa({\n    type: 'root'\n    }\n  })]\n});\n")),(0,r.kt)("p",null,"To convert a Vite project to a micro-frontend project, a similarly minimalistic configuration is needed, plus a file that exports the single-spa lifecycle functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// vite.config.ts for a Vite + React project\n\nimport react from '@vitejs/plugin-react'\nimport vitePluginSingleSpa from 'vite-plugin-single-spa';\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [react(), vitePluginSingleSpa({\n    serverPort: 4101,\n    spaEntryPoint: 'src/spa.tsx'\n  })],\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/spa.tsx\n\nimport React from 'react';\nimport ReactDOMClient from 'react-dom/client';\n// @ts-ignore\nimport singleSpaReact from 'single-spa-react';\nimport App from './App';\nimport { cssLifecycle } from 'vite-plugin-single-spa/ex';\n\nconst lc = singleSpaReact({\n    React,\n    ReactDOMClient,\n    rootComponent: App,\n    errorBoundary(err: any, _info: any, _props: any) {\n        return <div>Error: {err}</div>\n    }\n});\n\nexport const bootstrap = [cssLifecycle.bootstrap, lc.bootstrap];\nexport const mount = [cssLifecycle.mount, lc.mount];\nexport const unmount = [cssLifecycle.unmount, lc.unmount];\n")),(0,r.kt)("h3",{id:"main-features"},"Main Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supports stock Vite projects, regardless of framework."),(0,r.kt)("li",{parentName:"ul"},"Micro-frontend projects behave dually while in serve mode:  The micro-frontend can be previewed as a standalone web application with its server URL, or it can be served as a single-spa micro-frontend."),(0,r.kt)("li",{parentName:"ul"},"As seen in the example above, it provides an extra module that automatically mounts and unmounts the CSS referenced by the lifecycle-exporting module (",(0,r.kt)("inlineCode",{parentName:"li"},"src/spa.tsx")," in the example). ",(0,r.kt)("strong",{parentName:"li"},"COMING SOON")),(0,r.kt)("li",{parentName:"ul"},"Automatically picks up import maps from ",(0,r.kt)("inlineCode",{parentName:"li"},"src/importMap.dev.json")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"src/importMap.json"),"."),(0,r.kt)("li",{parentName:"ul"},"Automatically adds the ",(0,r.kt)("inlineCode",{parentName:"li"},"import-map-overrides")," NPM package, user interface included.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT"),":  The author of this plug-in does not believe in creating dedicated root config projects.  Furthermore, this package will, by default, create import maps for native modules.  We at single-spa recommend SystemJS modules.  Yes, single-spa is perfectly capable of working with native modules as well."),(0,r.kt)("p",null,"The opinions of the author of this plug-in in no way represent those of single-spa, and it is an independent work.  We present it here as one more option in the Vite ecosystem."))}d.isMDXComponent=!0}}]);