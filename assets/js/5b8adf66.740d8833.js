"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2950],{530:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(4848),i=t(8453);const a={title:"A step-by-step guide to single-spa",author:"Joel Denning",authorURL:"https://twitter.com/Joelbdenning",authorImageURL:"https://pbs.twimg.com/profile_images/716746867451625472/2NMyKAd1_400x400.jpg"},s=void 0,r={permalink:"/blog/2016/12/16/a-step-by-step-guide-to-single-spa",source:"@site/blog/2016-12-16-a-step-by-step-guide-to-single-spa.md",title:"A step-by-step guide to single-spa",description:"Running Angular 1, React, Angular 2, and Vue.js side by side sounds pretty cool. And it seems appealing to have multiple applications coexisting on the same page, each lazily loaded.",date:"2016-12-16T00:00:00.000Z",formattedDate:"December 16, 2016",tags:[],readingTime:9.705,hasTruncateMarker:!1,authors:[{name:"Joel Denning",url:"https://twitter.com/Joelbdenning",imageURL:"https://pbs.twimg.com/profile_images/716746867451625472/2NMyKAd1_400x400.jpg"}],frontMatter:{title:"A step-by-step guide to single-spa",author:"Joel Denning",authorURL:"https://twitter.com/Joelbdenning",authorImageURL:"https://pbs.twimg.com/profile_images/716746867451625472/2NMyKAd1_400x400.jpg"},unlisted:!1,prevItem:{title:"single-spa parcels, explained",permalink:"/blog/2018/06/19/single-spa-parcels-explained"},nextItem:{title:"A Case for SOA in the Browser",permalink:"/blog/2016/02/26/a-case-for-soa-in-the-browser"}},l={authorsImageUrls:[void 0]},c=[{value:"Step One: choose a module loader.",id:"step-one-choose-a-module-loader",level:2},{value:"Step Two: create a brand new HTML file",id:"step-two-create-a-brand-new-html-file",level:2},{value:"Step Three: register an \u201capplication\u201d",id:"step-three-register-an-application",level:2},{value:"Step Four: create \u201c.app.js\u201d file",id:"step-four-create-appjs-file",level:2},{value:"Getting all of those frameworks to work together.",id:"getting-all-of-those-frameworks-to-work-together",level:3},{value:"Step Five: test it out!",id:"step-five-test-it-out",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Running Angular 1, React, Angular 2, and Vue.js side by side sounds pretty cool. And it seems appealing to have multiple applications coexisting on the same page, each lazily loaded."}),"\n",(0,o.jsxs)(n.p,{children:["But using ",(0,o.jsx)(n.a,{href:"/",children:"single-spa"})," for the first time can be tricky because you\u2019ll come across terms like \u201capplication lifecycles\u201d, \u201croot application\u201d, \u201cloading function\u201d, \u201cchild application\u201d, and \u201cactivity function.\u201d"]}),"\n",(0,o.jsxs)(n.p,{children:["This blog post will take you through setting things up and what choices you have when using single-spa. It\u2019s based on what I\u2019ve seen at ",(0,o.jsx)(n.a,{href:"https://medium.com/canopy-tax",children:"Canopy Tax"})," where we went from an Angular 1 monolith to an Angular 1, React, and Svelte polyglot."]}),"\n",(0,o.jsxs)(n.p,{children:["If you\u2019d like to jump straight to a fully working, self contained code example, check out this ",(0,o.jsx)(n.a,{href:"https://github.com/joeldenning/simple-single-spa-webpack-example",children:"webpack single-spa starter project"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"step-one-choose-a-module-loader",children:"Step One: choose a module loader."}),"\n",(0,o.jsxs)(n.p,{children:["Your module loader / bundler is the library you\u2019ll use to lazy load code. I recommend either ",(0,o.jsx)(n.a,{href:"https://webpack.js.org/",children:"Webpack"})," or ",(0,o.jsx)(n.a,{href:"https://jspm.io/",children:"JSPM"}),", if you\u2019re starting from scratch."]}),"\n",(0,o.jsxs)(n.p,{children:["If you go with Webpack, try to use Webpack 2 if you can, since it has ",(0,o.jsx)(n.a,{href:"https://webpack.js.org/guides/migrating/#code-splitting-with-es2015",children:"support for promise-based lazy loading"}),". This will make things easier for you later on, since single-spa requires that your ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#loading-function",children:"loading functions"})," return promises. If you can\u2019t use Webpack 2, getting single-spa to lazy load your code with Webpack 1 will require some boilerplate code."]}),"\n",(0,o.jsx)(n.p,{children:"JSPM/SystemJS has worse documentation than Webpack, but is a great solution for module loading if you can get past that. I recommend using jspm@0.17\u200a\u2014\u200ait\u2019s still in beta but has been worked on for over a year and at Canopy we find it stable enough to use in production."}),"\n",(0,o.jsxs)(n.p,{children:["If you\u2019re struggling to decide between the two, then ask yourself the following: Do I want multiple completely separate bundles? If you don\u2019t, I recommend Webpack because it has better docs, a larger community, and fewer gotchas. Otherwise, I\u2019d go with JSPM, since Webpack has no plans to support dynamic runtime loading ",(0,o.jsx)(n.a,{href:"https://twitter.com/TheLarkInn/status/789968589419745280",children:"(See tweet below from Mr. Larkin, himself)"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"step-two-create-a-brand-new-html-file",children:"Step Two: create a brand new HTML file"}),"\n",(0,o.jsxs)(n.p,{children:["The next step is to create what single-spa calls your ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md",children:"\u201croot application.\u201d"})," Really your root application is just the stuff that initializes single-spa, and it starts with an HTML file."]}),"\n",(0,o.jsx)(n.p,{children:"Even if you\u2019ve got an existing project that already has it\u2019s own HTML file, I recommend starting fresh with a new HTML file. That way, there is a clear distinction between what is in your root application (shared between all apps) and what is in a child application (not shared with everything)."}),"\n",(0,o.jsx)(n.p,{children:"You\u2019ll want to keep your root application as small as possible, since it\u2019s sort of the master controller of everything and could become a bottleneck. You don\u2019t want to be constantly changing both the root application and the child applications."}),"\n",(0,o.jsxs)(n.p,{children:["So for now, just have a ",(0,o.jsx)(n.code,{children:"<script>"})," to a single JavaScript file (root-application.js), which will be explained in Step Three."]}),"\n",(0,o.jsx)(n.p,{children:"Since Webpack is probably the more common use case, my code examples from here on will assume that you\u2019re using Webpack 2. The equivalent Webpack 1 or JSPM code has all the same concepts and only some minor code differences."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width" />\n    <title>A single-spa application</title>\n  </head>\n  <body>\n    <div id="cool-app"></div>\n    <script src="root-application.js"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"step-three-register-an-application",children:"Step Three: register an \u201capplication\u201d"}),"\n",(0,o.jsxs)(n.p,{children:["Now it\u2019s time to finish up your root application by writing your \u201croot-application.js\u201d file. The primary purpose of root-application.js is to call ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#declaring-child-applications",children:"singleSpa.registerApplication(..)"})," for each of the applications that will be managed by single-spa."]}),"\n",(0,o.jsx)(n.p,{children:"If you\u2019re into analogies, you can think of single-spa as the operating system for your single page application, managing which \u201cprocesses\u201d (or \u201cchild applications\u201d) are running at any given time. At any moment, some of the child applications will be active on the DOM and others will not. As the user navigates throughout the app, some applications will be unmounting from the DOM and others will be mounting to the DOM."}),"\n",(0,o.jsx)(n.p,{children:"Another way to look at it is that single-spa is a master router on top of your other routers."}),"\n",(0,o.jsxs)(n.p,{children:["To do this, first ",(0,o.jsx)(n.code,{children:"npm install single-spa"})," and then call the ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#declaring-child-applications",children:"registerApplication"})," function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { registerApplication, start } from "single-spa";\n\n// Register your first application with single-spa. More apps will be registered as you create them\nregisterApplication("cool-app", loadCoolApp, isCoolAppActive);\n\n// Tell single-spa that you\'re ready for it to mount your application to the DOM\nstart();\n\n// This is a "loading function"\nfunction loadCoolApp() {\n  return import("./cool-app/cool.app.js");\n}\n\n// This is an "activity function"\nfunction isCoolAppActive() {\n  return window.location.hash.startsWith("#/cool");\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Because single-spa is ",(0,o.jsx)(n.em,{children:"so very"})," cool, we\u2019ve created an app called \u201ccool-app\u201d that will be lazy loaded and mounted to the DOM whenever the url hash starts with ",(0,o.jsx)(n.code,{children:"#/cool"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"loadCoolApp"})," function is what single-spa calls a loading function. Inside of it, the ",(0,o.jsx)(n.code,{children:"import"})," introduces a code splitting point\u200a\u2014\u200aWebpack will create separate code chunks that will be lazy loaded by single-spa."]}),"\n",(0,o.jsx)(n.p,{children:"For your specific project, you probably won\u2019t have a hash prefix of \u201ccool\u201d, but I recommend establishing some kind of convention that makes it easy to determine which apps are active. This will simplify the maintenance of your activity functions, as you add more and more child applications."}),"\n",(0,o.jsxs)(n.p,{children:["If you\u2019re going to start out with just one child application, then it might make sense to implement the activity function as ",(0,o.jsx)(n.code,{children:"() => true"}),". You can worry about getting fancier once you have more than one application."]}),"\n",(0,o.jsxs)(n.p,{children:["The last thing is to call ",(0,o.jsx)(n.code,{children:"start()"}),". This is something you ",(0,o.jsx)(n.strong,{children:"must do for things to work."})," The purpose is to give control over timing and performance. But until that is a concern, ",(0,o.jsx)(n.code,{children:"start"})," is just one of those things you do, and then maybe ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa/blob/master/docs/single-spa-api.md#start",children:"read about it"})," later if you ever need to."]}),"\n",(0,o.jsx)(n.h2,{id:"step-four-create-appjs-file",children:"Step Four: create \u201c.app.js\u201d file"}),"\n",(0,o.jsx)(n.p,{children:"When you open up your index.html file in the browser, you\u2019ll now see\u2026.. a blank screen! We\u2019re really close, but there\u2019s one crucial step left: building your app.js file."}),"\n",(0,o.jsx)(n.p,{children:"After that, you\u2019ll have everything working for your first single-spa application."}),"\n",(0,o.jsx)(n.p,{children:"An app.js file is a configuration file that you create for each child application. It is the code that is lazy loaded when your activity function returns true."}),"\n",(0,o.jsx)(n.p,{children:"There are three things that you need to implement in the app.js file:"}),"\n",(0,o.jsxs)("ol",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"",target:"_blank",rel:"noopener noreferrer",children:"A bootstrap lifecycle"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"",target:"_blank",rel:"noopener noreferrer",children:"A mount lifecycle"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"",target:"_blank",rel:"noopener noreferrer",children:"An unmount lifecycle"})})]}),"\n",(0,o.jsx)(n.p,{children:"A \u201clifecycle\u201d is a function or array of functions that will be called by single-spa; you export these from the app.js file. Each function must return a Promise so that single-spa knows when it is completed."}),"\n",(0,o.jsx)(n.p,{children:"Here is a simple example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// single-spa will import this file and call the exported lifecyle functions\n\nlet user;\n\nexport function bootstrap() {\n  return fetch("/api/users/0")\n    .then((response) => response.json())\n    .then((json) => (user = json));\n}\n\nexport function mount() {\n  /* This is normally where you would have your framework-specific code like\n   * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*\n   * into this function is what makes single-spa so powerful -- any framework\n   * can implement a "mount" and "unmount" to become a single-spa application.\n   */\n  return Promise.resolve().then(() => {\n    document.getElementById("user-app").innerHTML = `\n        <div>\n          Hello ${user.name}!\n        <div>\n      `;\n  });\n}\n\nexport function unmount() {\n  /* Real world use cases would be something like ReactDOM.unmountComponentAtNode()\n   * or vue.$destroy()\n   */\n  return Promise.resolve().then(() => {\n    document.getElementById("user-app").innerHTML = "";\n  });\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["At this point, you might be seeing the ",(0,o.jsx)(n.code,{children:"document.getElementById"})," and ",(0,o.jsx)(n.code,{children:"innerHTML ="})," and worry that you\u2019ve been duped\u200a\u2014\u200amaybe single-spa is really just a poor excuse for a ui component framework."]}),"\n",(0,o.jsx)(n.p,{children:"And really, don\u2019t we already have a lot of different ways to write UI components?"}),"\n",(0,o.jsx)(n.h3,{id:"getting-all-of-those-frameworks-to-work-together",children:"Getting all of those frameworks to work together."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Using multiple frameworks"})," is where single-spa really shines. It is not a ui framework itself, but a framework for using other frameworks."]}),"\n",(0,o.jsx)(n.p,{children:"Each child application can be written in any framework, so long as it implements application lifecycle functions. Then the mini-apps cooperate to form the entire single page application."}),"\n",(0,o.jsx)(n.p,{children:"So going back to our previous example, we could choose to write our \u201ccool.app.js\u201d as an Angular 1 app, and choose something else for future apps:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import singleSpaAngularJS from "single-spa-angularjs";\nimport angular from "angular";\nimport "./app.module.js";\nimport "./routes.js";\n\nconst domElementGetter = () => document.getElementById("cool-app");\n\nconst angularLifecycles = singleSpaAngularJS({\n  angular,\n  domElementGetter,\n  mainAngularModule: "single-spa-app",\n  uiRouter: true,\n  preserveGlobal: true,\n});\n\nexport const bootstrap = [\n  aboutToBootstrap,\n  angularLifecycles.bootstrap,\n  doneBootstrapping,\n];\n\nexport const mount = [angularLifecycles.mount];\n\nexport const unmount = [angularLifecycles.unmount];\n\nfunction aboutToBootstrap() {\n  console.log("about to bootstrapping");\n  return Promise.resolve();\n}\n\nfunction doneBootstrap() {\n  console.log("finished bootstrapping");\n  return Promise.resolve();\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, we use a helper library called ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa-angularjs",children:"single-spa-angularjs"})," which abstracts away the specifics of initializing Angular 1 apps. This blogpost doesn\u2019t show you the ",(0,o.jsx)(n.code,{children:"app.module.js"})," or ",(0,o.jsx)(n.code,{children:"routes.js"})," files, but you can see an example implementation ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa-examples/tree/master/src/angularJS",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The pattern is to call ",(0,o.jsx)(n.code,{children:"singleSpaAngularJS"})," at the very beginning, which returns ",(0,o.jsx)(n.code,{children:"bootstrap"}),", ",(0,o.jsx)(n.code,{children:"mount"}),", and ",(0,o.jsx)(n.code,{children:"unmount"})," lifecycle functions for you."]}),"\n",(0,o.jsx)(n.p,{children:"You might notice that this time the lifecycles are exported as arrays of functions instead of just functions\u200a\u2014\u200ayou can choose whichever works best for you."}),"\n",(0,o.jsxs)(n.p,{children:["The advantage of exporting an array of functions is that you can add in your own custom behavior (like ",(0,o.jsx)(n.code,{children:"aboutToBootstrap"})," and ",(0,o.jsx)(n.code,{children:"doneBootstrap"}),") that will run before or after the Angular 1 lifecycles. When you export an array, each item in the array must be a function that returns a promise. Single-spa will wait for each promise to resolve, in order, before calling the next function in the array."]}),"\n",(0,o.jsx)(n.p,{children:"To learn more about single-spa helper libraries, check out these github projects:"}),"\n",(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://github.com/single-spa/single-spa-angularjs",target:"_blank",rel:"noopener noreferrer",children:"single-spa-angularjs"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://github.com/single-spa/single-spa-angular",target:"_blank",rel:"noopener noreferrer",children:"single-spa-angular"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://github.com/single-spa/single-spa-react",target:"_blank",rel:"noopener noreferrer",children:"single-spa-react"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://github.com/single-spa/single-spa-vue",target:"_blank",rel:"noopener noreferrer",children:"single-spa-vue"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://github.com/single-spa/single-spa-svelte",target:"_blank",rel:"noopener noreferrer",children:"single-spa-svelte"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://github.com/single-spa/single-spa-preact",target:"_blank",rel:"noopener noreferrer",children:"single-spa-preact"})})]}),"\n",(0,o.jsxs)(n.p,{children:["You can also see a fully working example of an angular app coexisting with other apps at the ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa-examples",children:"single-spa-examples"})," repo or the ",(0,o.jsx)(n.a,{href:"http://single-spa.surge.sh/",children:"live demo"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"step-five-test-it-out",children:"Step Five: test it out!"}),"\n",(0,o.jsx)(n.p,{children:"Refresh your page and you should now have a functioning single-spa application!"}),"\n",(0,o.jsxs)(n.p,{children:["Try navigating to a url that your child app is active for (",(0,o.jsx)(n.code,{children:"#/cool"}),") and then navigating away from it. When you do so, the page will not refresh but you should see your application mount itself to the DOM and then unmount."]}),"\n",(0,o.jsxs)(n.p,{children:["If you run into problems, try to narrow down whether the problem is in the root application or in the child application. Is your root application being executed? Are the declareChildApplication calls being made? Have you called ",(0,o.jsx)(n.code,{children:"start()"}),"? Is there a network request to download the code for your child application? Is your child application's ",(0,o.jsx)(n.code,{children:"bootstrap"})," lifecycle being called? What about ",(0,o.jsx)(n.code,{children:"mount"}),"?"]}),"\n",(0,o.jsx)("img",{src:"https://cdn-images-1.medium.com/max/1600/1*WMFuo-hz-Q31UVbTHAx4lw.png",alt:"cdn-images-1"}),"\n",(0,o.jsxs)(n.p,{children:["It may be helpful to add a navigation menu, so you can verify everything mounts and unmounts to the DOM correctly. If you want to level up your single-spa skills even more, make the navigation menu an entire child application whose activity function is ",(0,o.jsx)(n.code,{children:"() => true"}),". An example that does just that is found ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa-examples/blob/master/src/single-spa-examples.js#L3",children:"here"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa-examples/blob/master/src/navbar/navbar.app.js",children:"here"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"While you are verifying that everything is working, keep in mind that each application goes through five phases:"}),"\n",(0,o.jsx)("img",{src:"https://cdn-images-1.medium.com/max/1600/1*utKlcxBkDXfQAQR52B0hAA.png",alt:"an applications's lifecycle"}),"\n",(0,o.jsx)(n.p,{children:"Conclusion"}),"\n",(0,o.jsxs)(n.p,{children:["As you get your feet wet, you\u2019ll probably run into some (hopefully small) hiccups setting things up. When this tutorial is not enough, there are other resources on ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa",children:"Github"})," and here in the ",(0,o.jsx)(n.a,{href:"/docs/building-applications",children:"docs"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Single-spa is still a relatively new thing, and we\u2019d love to hear your feedback and questions. We welcome contributions from everyone."}),"\n",(0,o.jsxs)(n.p,{children:["If you\u2019re excited about the possibilities, feel free to contact me on ",(0,o.jsx)(n.a,{href:"https://twitter.com/Joelbdenning",children:"twitter (@joelbdenning)"}),". And if you are not excited, then still feel free to contact me, but only after you leave some nasty comments :)"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);