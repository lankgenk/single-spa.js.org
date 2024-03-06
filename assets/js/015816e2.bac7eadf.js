"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[569],{1909:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(4848),t=n(8453);const o={id:"ecosystem-vue",title:"single-spa-vue",sidebar_label:"Vue"},l=void 0,r={id:"ecosystem-vue",title:"single-spa-vue",description:"single-spa-vue is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Vue.js. Check out the single-spa-vue github.",source:"@site/versioned_docs/version-4.x/ecosystem-vue.md",sourceDirName:".",slug:"/ecosystem-vue",permalink:"/docs/4.x/ecosystem-vue",draft:!1,unlisted:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-4.x/ecosystem-vue.md",tags:[],version:"4.x",frontMatter:{id:"ecosystem-vue",title:"single-spa-vue",sidebar_label:"Vue"},sidebar:"docs",previous:{title:"React",permalink:"/docs/4.x/ecosystem-react"},next:{title:"Angular",permalink:"/docs/4.x/ecosystem-angular"}},a={},c=[{value:"Starter repo",id:"starter-repo",level:2},{value:"Live demo",id:"live-demo",level:2},{value:"Installation",id:"installation",level:2},{value:"Vue CLI",id:"vue-cli",level:3},{value:"Without Vue CLI",id:"without-vue-cli",level:3},{value:"Usage",id:"usage",level:2},{value:"Shared dependencies",id:"shared-dependencies",level:2},{value:"Shared deps with Vue CLI",id:"shared-deps-with-vue-cli",level:3},{value:"Shared deps without Vue CLI",id:"shared-deps-without-vue-cli",level:3},{value:"Options",id:"options",level:2},{value:"As a single-spa parcel",id:"as-a-single-spa-parcel",level:2},{value:"Custom Props",id:"custom-props",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["single-spa-vue is a helper library that helps implement ",(0,i.jsx)(s.a,{href:"configuration#registering-applications",children:"single-spa registered application"})," ",(0,i.jsx)(s.a,{href:"/docs/4.x/building-applications#registered-application-lifecycle",children:"lifecycle functions"})," (bootstrap, mount and unmount) for for use with ",(0,i.jsx)(s.a,{href:"https://vuejs.org/",children:"Vue.js"}),". Check out the ",(0,i.jsx)(s.a,{href:"https://github.com/single-spa/single-spa-vue",children:"single-spa-vue github"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"starter-repo",children:"Starter repo"}),"\n",(0,i.jsxs)(s.p,{children:["For a full example, see ",(0,i.jsx)(s.a,{href:"https://github.com/joeldenning/coexisting-vue-microfrontends",children:"coexisting-vue-microfrontends"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"live-demo",children:"Live demo"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://coexisting-vue-microfrontends.surge.sh",children:"https://coexisting-vue-microfrontends.surge.sh"})}),"\n",(0,i.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(s.h3,{id:"vue-cli",children:"Vue CLI"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://github.com/single-spa/vue-cli-plugin-single-spa",children:"vue-cli-plugin-single-spa"})," will get everything set up."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"vue add single-spa\n"})}),"\n",(0,i.jsx)(s.p,{children:"The CLI Plugin does the following for you:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Modify your webpack config so that your project works as a single-spa application or parcel."}),"\n",(0,i.jsxs)(s.li,{children:["Install ",(0,i.jsx)(s.a,{href:"https://github.com/single-spa/single-spa-vue",children:"single-spa-vue"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Modify your ",(0,i.jsx)(s.code,{children:"main.js"})," or ",(0,i.jsx)(s.code,{children:"main.ts"})," file so that your project works as a single-spa application or parcel."]}),"\n",(0,i.jsxs)(s.li,{children:["Add a ",(0,i.jsx)(s.code,{children:"set-public-path.js"})," that will use ",(0,i.jsx)(s.code,{children:"systemjs-webpack-interop"})," in order to set the public path of your application."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"without-vue-cli",children:"Without Vue CLI"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"npm install --save single-spa-vue\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Alternatively, you can use single-spa-vue by adding ",(0,i.jsx)(s.code,{children:'<script src="https://unpkg.com/single-spa-vue"><\/script>'})," to your HTML file and\naccessing the ",(0,i.jsx)(s.code,{children:"singleSpaVue"})," global variable."]}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(s.p,{children:["Install ",(0,i.jsx)(s.code,{children:"systemjs-webpack-interop"})," if you have not already done so."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"npm install systemjs-webpack-interop -S"})}),"\n",(0,i.jsxs)(s.p,{children:["Create a file at the same level as your ",(0,i.jsx)(s.code,{children:"main.js/ts"})," called ",(0,i.jsx)(s.code,{children:"set-public-path.js"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'import { setPublicPath } from "systemjs-webpack-interop";\n\nsetPublicPath("appName");\n'})}),"\n",(0,i.jsx)(s.p,{children:"Change your application's entry file to be the following."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'import "./set-public-path";\nimport Vue from "vue";\nimport App from "./App.vue";\nimport router from "./router";\nimport singleSpaVue from "single-spa-vue";\n\nconst vueLifecycles = singleSpaVue({\n  Vue,\n  appOptions: {\n    render: (h) => h(App),\n    router,\n  },\n});\n\nexport const bootstrap = vueLifecycles.bootstrap;\nexport const mount = vueLifecycles.mount;\nexport const unmount = vueLifecycles.unmount;\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Note that if you are using the Vue CLI Plugin, your ",(0,i.jsx)(s.code,{children:"main.ts"})," or ",(0,i.jsx)(s.code,{children:"main.js"})," file will be updated with this code automatically and the ",(0,i.jsx)(s.code,{children:"set-public-path.js"})," file\nwill automatically be created with the app name being your package.json's name property."]}),"\n",(0,i.jsx)(s.h2,{id:"shared-dependencies",children:"Shared dependencies"}),"\n",(0,i.jsx)(s.p,{children:"For performance, it is best to share a single version and instance of Vue, Vue Router, and other large libraries."}),"\n",(0,i.jsxs)(s.p,{children:["To do this, add your shared dependencies as ",(0,i.jsx)(s.a,{href:"https://webpack.js.org/configuration/externals",children:"webpack externals"}),". Then you use\nan in-browser module loader such as ",(0,i.jsx)(s.a,{href:"https://github.com/systemjs/systemjs",children:"systemjs"})," to provide those shared dependencies\nto each of the single-spa applications. Adding ",(0,i.jsx)(s.code,{children:"vue"})," and other libraries to your\n",(0,i.jsx)(s.a,{href:"http://single-spa-playground.org/playground/import-map",children:"import map"}),". For an example import map that is doing this,\ncheckout ",(0,i.jsx)(s.a,{href:"https://github.com/joeldenning/coexisting-vue-microfrontends/blob/master/root-html-file/index.html",children:"coexisting-vue-microfrontends' index.html file"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Sharing a single instance of Vue and other common libraries is highly recommended. See the\n",(0,i.jsx)(s.a,{href:"https://single-spa.js.org/docs/faq#is-there-a-recommended-setup",children:"recommended setup for single-spa"})," for more details on why."]}),"\n",(0,i.jsx)(s.h3,{id:"shared-deps-with-vue-cli",children:"Shared deps with Vue CLI"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'// vue.config.js\nmodule.exports = {\n  chainWebpack: (config) => {\n    config.externals(["vue", "vue-router"]);\n  },\n};\n'})}),"\n",(0,i.jsx)(s.h3,{id:"shared-deps-without-vue-cli",children:"Shared deps without Vue CLI"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'// webpack.config.js\nmodule.exports = {\n  externals: ["vue", "vue-router"],\n};\n'})}),"\n",(0,i.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(s.p,{children:["All options are passed to single-spa-vue via the ",(0,i.jsx)(s.code,{children:"opts"})," parameter when calling ",(0,i.jsx)(s.code,{children:"singleSpaVue(opts)"}),". The following options are available:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Vue"}),": (required) The main Vue object, which is generally either exposed onto the window or is available via ",(0,i.jsx)(s.code,{children:"require('vue')"})," ",(0,i.jsx)(s.code,{children:"import Vue from 'vue'"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"appOptions"}),": (required) An object which will be used to instantiate your Vue.js application. ",(0,i.jsx)(s.code,{children:"appOptions"})," will pass directly through to ",(0,i.jsx)(s.code,{children:"new Vue(appOptions)"}),". Note that if you do not provide an ",(0,i.jsx)(s.code,{children:"el"})," to appOptions, that a div will be created and appended to the DOM as a default container for your Vue application."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"loadRootComponent"}),": (optional and replaces ",(0,i.jsx)(s.code,{children:"appOptions.render"}),") A promise that resolves with your root component. This is useful for lazy loading."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"as-a-single-spa-parcel",children:"As a single-spa parcel"}),"\n",(0,i.jsxs)(s.p,{children:["To create a single-spa parcel, simply omit the ",(0,i.jsx)(s.code,{children:"el"})," option from your appOptions, since the dom element will be specified by the user of the Parcel. Every other\noption should be provided exactly the same as in the example above."]}),"\n",(0,i.jsx)(s.h2,{id:"custom-props",children:"Custom Props"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/building-applications#custom-props",children:"single-spa custom props"})," are added to your App component as\n",(0,i.jsx)(s.code,{children:"appOptions.data"}),", and are accessible via ",(0,i.jsx)(s.code,{children:"vm.$data"}),". See ",(0,i.jsx)(s.a,{href:"https://vuejs.org/v2/api/#data",children:"this Vue documentation"}),"\nfor more information on ",(0,i.jsx)(s.code,{children:"appOptions.data"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>r});var i=n(6540);const t={},o=i.createContext(t);function l(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);