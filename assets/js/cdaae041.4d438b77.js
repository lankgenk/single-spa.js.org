"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1666],{4418:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=a(4848),i=a(8453);const t={title:"Shared Webpack configs"},o=void 0,c={id:"shared-webpack-configs",title:"Shared Webpack configs",description:"single-spa also publishes a few shared Webpack config packages that include basics needed for creating single-spa applications. These configs are used by applications generated with create-single-spa, and can be used as a starting point to extend/modify a custom configuration for your organization/team.",source:"@site/versioned_docs/version-5.x/shared-webpack-configs.md",sourceDirName:".",slug:"/shared-webpack-configs",permalink:"/docs/5.x/shared-webpack-configs",draft:!1,unlisted:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/shared-webpack-configs.md",tags:[],version:"5.x",frontMatter:{title:"Shared Webpack configs"},sidebar:"docs",previous:{title:"create-single-spa",permalink:"/docs/5.x/create-single-spa"},next:{title:"Overview",permalink:"/docs/5.x/microfrontends-concept"}},r={},l=[{value:"webpack-config-single-spa",id:"webpack-config-single-spa",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"webpack-config-single-spa-react",id:"webpack-config-single-spa-react",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"webpack-config-single-spa-ts",id:"webpack-config-single-spa-ts",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Usage",id:"usage-2",level:3},{value:"webpack-config-single-spa-react-ts",id:"webpack-config-single-spa-react-ts",level:2},{value:"Installation",id:"installation-3",level:3},{value:"Usage",id:"usage-3",level:3},{value:"Custom Webpack configuration",id:"custom-webpack-configuration",level:2},{value:"Example: load SVGs as components",id:"example-load-svgs-as-components",level:4},{value:"Replacing plugins",id:"replacing-plugins",level:3},{value:"Example: replace HtmlWebpackPlugin instance",id:"example-replace-htmlwebpackplugin-instance",level:4}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["single-spa also publishes a few shared Webpack config packages that include basics needed for creating single-spa applications. These configs are used by applications generated with ",(0,s.jsx)(n.a,{href:"/docs/create-single-spa",children:"create-single-spa"}),", and can be used as a starting point to extend/modify a custom configuration for your organization/team."]}),"\n",(0,s.jsxs)(n.p,{children:["These packages are housed within the ",(0,s.jsx)(n.a,{href:"https://github.com/single-spa/create-single-spa/tree/main/packages",children:"create-single-spa repository"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"webpack-config-single-spa",children:"webpack-config-single-spa"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa",children:"Github project"})}),"\n",(0,s.jsx)(n.p,{children:"A shareable, customizable webpack config that is used for single-spa modules."}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev webpack-config-single-spa webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa webpack-merge\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const singleSpaDefaults = require("webpack-config-single-spa");\nconst { merge } = require("webpack-merge"); // webpack-merge@5.0.3+\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: "name-of-company",\n    // The name of the current project. This usually matches the git repo\'s name\n    projectName: "name-of-project",\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n    // optional\n    // This changes whether package names that start with @your-org-name are\n    // treated as webpack externals or not. Defaults to true\n    orgPackagesAsExternal: true,\n\n    // optional, defaults to 1\n    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop\n    rootDirectoryLevel: 1,\n\n    // optional, defaults to false\n    // Disable html-webpack-plugin (and standalone-single-spa-webpack-plugin) entirely\n    // This is intended for root configs, but can be used in other cases, too\n    disableHtmlGeneration: false,\n  });\n\n  return merge(defaultConfig, {\n    // modify the webpack config however you\'d like to by adding to this object\n  });\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"webpack-config-single-spa-react",children:"webpack-config-single-spa-react"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react",children:"Github project"})}),"\n",(0,s.jsxs)(n.p,{children:["A shareable, customizable webpack config that adds react-specific configuration to ",(0,s.jsx)(n.code,{children:"webpack-config-single-spa"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev webpack-config-single-spa-react webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-react webpack-merge\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const singleSpaDefaults = require('webpack-config-single-spa-react');\nconst webpackMerge = require('webpack-merge');\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n    // optional\n    // This changes whether package names that start with @your-org-name are\n    // treated as webpack externals or not. Defaults to true\n    orgPackagesAsExternal: true,\n\n    // optional, defaults to 1\n    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop\n    rootDirectoryLevel: 1,\n\n    // optional, defaults to {}\n    // This controls the options given to standalone-single-spa-webpack-plugin\n    // See https://github.com/single-spa/standalone-single-spa-webpack-plugin#usage\n    standaloneOptions: {},\n  });\n\n     // modify the webpack config however you'd like to by adding to this object\n  });\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"webpack-config-single-spa-ts",children:"webpack-config-single-spa-ts"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-ts",children:"Github project"})}),"\n",(0,s.jsxs)(n.p,{children:["A shareable, customizable webpack config that adds typescript-specific configuration to ",(0,s.jsx)(n.code,{children:"webpack-config-single-spa"}),". Note that webpack-config-single-spa-ts has a peerDependency on ",(0,s.jsx)(n.code,{children:"typescript"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"installation-2",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev webpack-config-single-spa-ts webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-ts webpack-merge\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usage-2",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const webpackMerge = require("webpack-merge");\nconst singleSpaDefaults = require("webpack-config-single-spa-ts");\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: "name-of-company",\n    // The name of the current project. This usually matches the git repo\'s name\n    projectName: "name-of-project",\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n  });\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you\'d like to by adding to this object\n  });\n};\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const singleSpaTs = require("webpack-config-single-spa-ts");\n\n// Alternatively, you may modify a webpack config directly\nconst myOtherWebpackConfig = {\n  /* ... */\n};\nconst finalConfig = singleSpaDefaults.modifyConfig(myOtherWebpackConfig);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"webpack-config-single-spa-react-ts",children:"webpack-config-single-spa-react-ts"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react-ts",children:"Github project"})}),"\n",(0,s.jsx)(n.p,{children:"A shareable, customizable webpack config that creates a webpack config that works with both react and typescript. Note that webpack-config-single-spa-react-ts simply merges the config from webpack-config-single-spa-react with that of webpack-config-single-spa-ts."}),"\n",(0,s.jsx)(n.h3,{id:"installation-3",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev webpack-config-single-spa-react-ts webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-react-ts webpack-merge\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usage-3",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const webpackMerge = require("webpack-merge");\nconst singleSpaDefaults = require("webpack-config-single-spa-react-ts");\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: "name-of-company",\n\n    // The name of the current project. This usually matches the git repo\'s name\n    projectName: "name-of-project",\n\n    // optional\n    // This changes whether package names that start with @your-org-name are\n    // treated as webpack externals or not. Defaults to true\n    orgPackagesAsExternal: true,\n\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n\n    // optional, defaults to 1\n    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop\n    rootDirectoryLevel: 1,\n\n    // optional, defaults to false.\n    // When true, this removes html-webpack-plugin and standalone-single-spa-webpack-plugin\n    disableHtmlGeneration: false,\n  });\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you\'d like to by adding to this object\n  });\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"custom-webpack-configuration",children:"Custom Webpack configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Our shared Webpack configs are intended to be extensible to fit the requirements of your applications. These custom config options can be made in each project's ",(0,s.jsx)(n.code,{children:"webpack.config.js"})," file generated by create-single-spa, or used as the basis for a tailored shared config for your organization."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"require.resolve"})," to reuse loaders that are included as dependencies","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"this is especially useful for reusing any of webpack-config-single-spa-*'s dependencies"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["webpack-merge ",(0,s.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge#limitations",children:"does not support merging configs exported as a function"}),", which may be relevant if creating shared config packages. webpack-config-single-spa-* configs require ",(0,s.jsx)(n.code,{children:"webpackConfigEnv"})," and ",(0,s.jsx)(n.code,{children:"argv"})," parameters which necesitates ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/configuration-types/#exporting-a-function",children:"exporting a config function"})," but return a plain object. This makes it compatible with webpack-merge."]}),"\n",(0,s.jsxs)(n.li,{children:["Use webpack-merge's ",(0,s.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge#mergewithrules",children:(0,s.jsx)(n.code,{children:"mergeWithRules"})})," function to merge and de-duplicate ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/module/#modulerules",children:"webpack rules"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-load-svgs-as-components",children:"Example: load SVGs as components"}),"\n",(0,s.jsxs)(n.p,{children:["You must also install ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@svgr/webpack",children:"@svgr/webpack"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Available in webpack-config-single-spa@5.3.0+"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const singleSpaDefaults = require("webpack-config-single-spa");\nconst { mergeWithRules } = require("webpack-merge");\n\nconst merge = mergeWithRules({\n  module: {\n    rules: {\n      // replace the entire `rule` if the `test` property matches\n      test: "match",\n      use: "replace",\n    },\n  },\n});\n\nmodule.exports = (env, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    orgName: "abcde",\n    projectName: "fghij",\n    webpackConfigEnv: env,\n    argv,\n  });\n\n  const config = merge(defaultConfig, {\n    module: {\n      rules: [\n        {\n          test: /\\.svg$/i,\n          use: [{ loader: "@svgr/webpack" }],\n        },\n      ],\n    },\n  });\n\n  // console.dir(config, null, 2) // useful for debugging\n  return config;\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"replacing-plugins",children:"Replacing plugins"}),"\n",(0,s.jsxs)(n.p,{children:["Use webpack-merge's ",(0,s.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge#mergewithcustomize-customizearray-customizeobject-configuration--configuration",children:(0,s.jsx)(n.code,{children:"mergeWithCustomize"})})," to resolve duplicate plugins or replace instances. Duplicate plugins often result in cryptic errors!"]}),"\n",(0,s.jsxs)(n.p,{children:["When referencing a loader that is installed as a dependency of webpack-config-single-spa, use ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/modules.html#modules_require_resolve_request_options",children:"require.resolve"})," to ensure its path is resolved correctly."]}),"\n",(0,s.jsx)(n.h4,{id:"example-replace-htmlwebpackplugin-instance",children:"Example: replace HtmlWebpackPlugin instance"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const { mergeWithCustomize, unique } = require("webpack-merge");\nconst singleSpaDefaults = require("webpack-config-single-spa");\nconst HtmlWebpackPlugin = require("html-webpack-plugin");\n\nconst merge = mergeWithCustomize({\n  customizeArray: unique(\n    "plugins",\n    ["HtmlWebpackPlugin"],\n    (plugin) => plugin.constructor && plugin.constructor.name,\n  ),\n});\n\nmodule.exports = (env, argv) => {\n  const orgName = "example";\n  const myEnv = process.env.NODE_ENV || "development";\n\n  const defaultConfig = singleSpaDefaults({\n    orgName,\n    projectName: "custom-root-config",\n    webpackConfigEnv: env,\n    argv,\n  });\n\n  const config = merge(defaultConfig, {\n    plugins: [\n      new HtmlWebpackPlugin({\n        inject: false,\n        template: "src/custom.ejs",\n        templateParameters: {\n          isLocal: env?.isLocal,\n          // additional templateParameters can now be supplied\n          orgName,\n          environment: myEnv,\n        },\n      }),\n    ],\n  });\n\n  // console.dir(config, null, 2) // useful for debugging\n  return config;\n};\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>c});var s=a(6540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);