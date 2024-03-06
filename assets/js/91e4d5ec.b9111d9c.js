"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4343],{3974:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var a=s(4848),r=s(8453);const t={id:"create-single-spa",title:"create-single-spa",sidebar_label:"create-single-spa"},i=void 0,l={id:"create-single-spa",title:"create-single-spa",description:"Single-spa offers a CLI for those who prefer autogenerated and managed configurations for webpack, babel, jest, etc. You do not have to use the CLI in order to use single-spa.",source:"@site/versioned_docs/version-6.x/create-single-spa.md",sourceDirName:".",slug:"/create-single-spa",permalink:"/docs/create-single-spa",draft:!1,unlisted:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-6.x/create-single-spa.md",tags:[],version:"6.x",frontMatter:{id:"create-single-spa",title:"create-single-spa",sidebar_label:"create-single-spa"},sidebar:"docs",previous:{title:"Videos",permalink:"/docs/videos"},next:{title:"Shared Webpack configs",permalink:"/docs/shared-webpack-configs"}},o={},c=[{value:"Installation and Usage",id:"installation-and-usage",level:2},{value:"CLI arguments",id:"cli-arguments",level:2},{value:"--dir",id:"--dir",level:3},{value:"--moduleType",id:"--moduletype",level:3},{value:"--framework",id:"--framework",level:3},{value:"--layout",id:"--layout",level:3},{value:"--skipInstall",id:"--skipinstall",level:3},{value:"Project types",id:"project-types",level:2},{value:"create-single-spa",id:"create-single-spa",level:2},{value:"generator-single-spa",id:"generator-single-spa",level:2},{value:"single-spa-web-server-utils",id:"single-spa-web-server-utils",level:2},{value:"Installation",id:"installation",level:3},{value:"getImportMaps",id:"getimportmaps",level:3},{value:"clearAllIntervals",id:"clearallintervals",level:3},{value:"reset",id:"reset",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Single-spa offers a CLI for those who prefer autogenerated and managed configurations for webpack, babel, jest, etc. You do not have to use the CLI in order to use single-spa."}),"\n",(0,a.jsxs)(n.p,{children:["The CLI is called ",(0,a.jsx)(n.code,{children:"create-single-spa"})," (",(0,a.jsx)(n.a,{href:"https://github.com/single-spa/create-single-spa/",children:"Github link"}),"). It is primarily intended for the creation of new projects, but may also be useful for migrating existing projects (especially migrating CRA or frameworkless projects)."]}),"\n",(0,a.jsx)(n.h2,{id:"installation-and-usage",children:"Installation and Usage"}),"\n",(0,a.jsx)(n.p,{children:"If you wish to have create-single-spa globally available, run the following in a terminal"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm install --global create-single-spa\n\n# or\nyarn global add create-single-spa\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then run the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"create-single-spa\n"})}),"\n",(0,a.jsx)(n.p,{children:"Alternatively, you may use create-single-spa without global installation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm init single-spa\n\n# or\nnpx create-single-spa\n\n# or\nyarn create single-spa\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will open up a CLI prompt asking you what kind of project you want to create or update."}),"\n",(0,a.jsx)(n.h2,{id:"cli-arguments",children:"CLI arguments"}),"\n",(0,a.jsx)(n.p,{children:"You may pass arguments to create-single-spa like so:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# Different ways of doing the same thing\ncreate-single-spa --framework react\nnpm init single-spa --framework react\nnpx create-single-spa --framework react\nyarn create single-spa --framework react\n"})}),"\n",(0,a.jsx)(n.p,{children:"Here are the available CLI options:"}),"\n",(0,a.jsx)(n.h3,{id:"--dir",children:"--dir"}),"\n",(0,a.jsx)(n.p,{children:"You may specify which directory create-single-spa runs in through either of the following ways:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# Two ways of doing the same thing\ncreate-single-spa my-dir\ncreate-single-spa --dir my-dir\n"})}),"\n",(0,a.jsx)(n.h3,{id:"--moduletype",children:"--moduleType"}),"\n",(0,a.jsxs)(n.p,{children:["You can specify which kind of microfrontend you are creating with the ",(0,a.jsx)(n.code,{children:"--moduleType"})," CLI argument:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"create-single-spa --moduleType root-config\ncreate-single-spa --moduleType app-parcel\ncreate-single-spa --moduleType util-module\n"})}),"\n",(0,a.jsx)(n.h3,{id:"--framework",children:"--framework"}),"\n",(0,a.jsxs)(n.p,{children:["You can specify which framework you're using with the ",(0,a.jsx)(n.code,{children:"--framework"})," CLI argument. Note that if you specify a framework that you may omit the ",(0,a.jsx)(n.code,{children:"--moduleType"}),", as it is inferred to be ",(0,a.jsx)(n.code,{children:"app-parcel"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"create-single-spa --framework react\ncreate-single-spa --framework vue\ncreate-single-spa --framework angular\n"})}),"\n",(0,a.jsx)(n.h3,{id:"--layout",children:"--layout"}),"\n",(0,a.jsxs)(n.p,{children:["When generating a root config, the ",(0,a.jsx)(n.code,{children:"--layout"})," CLI argument indicates that you want to use ",(0,a.jsx)(n.a,{href:"/docs/layout-overview",children:"single-spa-layout"})," in your root config."]}),"\n",(0,a.jsx)(n.h3,{id:"--skipinstall",children:"--skipInstall"}),"\n",(0,a.jsx)(n.p,{children:"This option skips npm/yarn/pnpm installation during project creation."}),"\n",(0,a.jsx)(n.h2,{id:"project-types",children:"Project types"}),"\n",(0,a.jsxs)(n.p,{children:["create-single-spa asks you if you'd like to create a single-spa application, a utility module, or a root-config. All three module types assume that you are using the ",(0,a.jsx)(n.a,{href:"/docs/recommended-setup",children:"recommended setup"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If you select that you'd like to create a single-spa application, you will be prompted for which framework you'd like to choose. React is implemented with premade configurations for babel + webpack + jest. Angular is implemented with Angular CLI and ",(0,a.jsx)(n.a,{href:"/docs/ecosystem-angular",children:"single-spa-angular"}),". Vue is implemented with Vue CLI and ",(0,a.jsx)(n.a,{href:"/docs/ecosystem-vue#vue-cli",children:"vue-cli-plugin-single-spa"}),"."]}),"\n",(0,a.jsx)(n.h1,{id:"npm-packages",children:"NPM packages"}),"\n",(0,a.jsx)(n.p,{children:"Within the create-single-spa repo, there are several NPM packages. The following sections document each package:"}),"\n",(0,a.jsx)(n.h2,{id:"create-single-spa",children:"create-single-spa"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/create-single-spa",children:"Github project"})}),"\n",(0,a.jsxs)(n.p,{children:["The core CLI, which invokes ",(0,a.jsx)(n.a,{href:"#generator-single-spa",children:"generator-single-spa"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"generator-single-spa",children:"generator-single-spa"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/generator-single-spa",children:"Github project"})}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.a,{href:"https://yeoman.io/",children:"Yeoman generator"})," that prompts the user and then creates files. This is primarily invoked via the create-single-spa CLI, but can also be ",(0,a.jsx)(n.a,{href:"https://yeoman.io/authoring/composability.html",children:"composed"})," if you'd like to customize it."]}),"\n",(0,a.jsx)(n.h2,{id:"single-spa-web-server-utils",children:"single-spa-web-server-utils"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"single-spa-web-server-utils"})," package is a collection of functions that help when implementing a web server for an index.html file. This package can be used to inline import maps into an HTML, which helps with the performance of your application. Additionally, it can be used to modify a browser import map so that it's suitable for usage in NodeJS for dynamic module loading and server rendering (",(0,a.jsx)(n.a,{href:"/docs/ssr-overview#a-module-loading",children:"Dynamic Module Loading"})," and ",(0,a.jsx)(n.a,{href:"/docs/ssr-overview#intro-to-ssr",children:"Server Rendering"}),"))."]}),"\n",(0,a.jsxs)(n.p,{children:["The web server utils poll the import map from a URL and generate a ",(0,a.jsx)(n.code,{children:"browserImportMap"})," and ",(0,a.jsx)(n.code,{children:"nodeImportMap"})," from the response."]}),"\n",(0,a.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm install --save single-spa-web-server-utils\n\n# alternatively\nyarn add single-spa-web-server-utils\n"})}),"\n",(0,a.jsx)(n.h3,{id:"getimportmaps",children:"getImportMaps"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"getImportMaps"})," function accepts an object parameter and returns a promise that resolves with an object with two import maps: ",(0,a.jsx)(n.code,{children:"browserImportMap"})," and ",(0,a.jsx)(n.code,{children:"nodeImportMap"}),". Note that import maps are polled at the specified interval forever until either ",(0,a.jsx)(n.code,{children:"reset()"})," or ",(0,a.jsx)(n.code,{children:"clearAllIntervals()"})," is called. Import Maps are stored in memory in a javascript variable that exists outside of the ",(0,a.jsx)(n.code,{children:"getImportMaps"})," function, so subsequent calls to ",(0,a.jsx)(n.code,{children:"getImportMaps"})," will all use the same cache."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const { getImportMaps } = require("single-spa-web-server-utils");\nconst http = require("http");\nconst ejs = require("ejs");\nconst fs = require("fs");\nconst path = require("path");\n\nconst htmlTemplate = ejs.compile(\n  fs.readFileSync(path.resolve(process.cwd(), "views/index.html"), "utf-8"),\n);\n\nhttp.createServer((req, res) => {\n  getImportMaps({\n    // required\n    // The URL at which the server\n    url: "https://my-cdn.com/live.importmap",\n\n    // optional - defaults to 30000\n    // The ms to wait when polling the import map\n    pollInterval: 30000,\n\n    // optional - defaults to false\n    // Whether to allow for import-map-overrides via cookies sent in the request.\n    // More details about overrides via cookies at\n    // https://github.com/joeldenning/import-map-overrides/blob/master/docs/api.md#node\n    allowOverrides: true,\n\n    // optional - only needed when allowOverrides is true\n    // The IncomingMessage from an http server. This is used to gather\n    // cookies for import-map-overrides\n    req,\n\n    // optional\n    // This allows you to remove entries from the downloaded import map\n    // from the returned `nodeImportMap`. This is useful for customizing\n    // an import map that is used in the browser so that it can be used\n    // for dynamic NodeJS module loading. Each key is a string import specifier.\n    // Keys that you return `true` for are preserved in the nodeImportMap.\n    nodeKeyFilter(key) {\n      return true;\n    },\n  }).then(({ browserImportMap, nodeImportMap }) => {\n    console.log(browserImportMap, nodeImportMap);\n\n    // Example of how to inline a browser import map\n    const htmlWithInlinedImportMap = htmlTemplate({\n      importMap: browserImportMap,\n    });\n    res.setResponseHeader("Content-Type", "text/html");\n    res.status(200).send(htmlWithInlinedImportMap);\n\n    // Example of how to apply a NodeJS import map\n    // More info at https://github.com/node-loader/node-loader-import-maps\n    global.nodeLoader.setImportMapPromise(Promise.resolve(nodeImportMap));\n    import("module-in-import-map");\n  });\n});\n'})}),"\n",(0,a.jsx)(n.h3,{id:"clearallintervals",children:"clearAllIntervals"}),"\n",(0,a.jsxs)(n.p,{children:["This clears all import map polling intervals that were created via ",(0,a.jsx)(n.code,{children:"setInterval()"})," inside of ",(0,a.jsx)(n.code,{children:"getImportMaps()"}),". This is useful for tests and for cleaning up memory."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import { clearAllIntervals } from "single-spa-web-server-utils";\n\nclearAllIntervals();\n'})}),"\n",(0,a.jsx)(n.h3,{id:"reset",children:"reset"}),"\n",(0,a.jsxs)(n.p,{children:["This clears all intervals (see ",(0,a.jsx)(n.a,{href:"#clearallintervals",children:"clearAllIntervals"}),"), and also clears the in-memory cache of all import maps. In other words, after ",(0,a.jsx)(n.code,{children:"reset()"})," is called, ",(0,a.jsx)(n.code,{children:"getImportMaps()"})," will always result in a new network request to fetch the import map."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import { reset } from "single-spa-web-server-utils";\n\nreset();\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var a=s(6540);const r={},t=a.createContext(r);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);