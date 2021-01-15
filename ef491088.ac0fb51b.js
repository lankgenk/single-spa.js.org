(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(182)),a={id:"contributing-overview",title:"Contributing to Single-spa",sidebar_label:"Overview"},l={unversionedId:"contributing-overview",id:"version-5.x/contributing-overview",isDocsHomePage:!1,title:"Contributing to Single-spa",description:"List of current contributors",source:"@site/versioned_docs/version-5.x/contributing-overview.md",slug:"/contributing-overview",permalink:"/docs/contributing-overview",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/contributing-overview.md",version:"5.x",sidebar_label:"Overview",sidebar:"version-5.x/docs",previous:{title:"single-spa-inspector",permalink:"/docs/devtools"},next:{title:"Code of Conduct",permalink:"/docs/code-of-conduct"}},c=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Types of contributions we&#39;re looking for",id:"types-of-contributions-were-looking-for",children:[]},{value:"Ground rules &amp; expectations",id:"ground-rules--expectations",children:[]},{value:"How to contribute",id:"how-to-contribute",children:[]},{value:"Setting up your environment",id:"setting-up-your-environment",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Create a branch",id:"create-a-branch",children:[]},{value:"Test the change",id:"test-the-change",children:[]},{value:"Push it",id:"push-it",children:[]}]},{value:"Community",id:"community",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/contributors"}),"List of current contributors")),Object(i.b)("p",null,"Thanks for checking out single-spa! We're excited to hear and learn from you."),Object(i.b)("p",null,"We've put together the following guidelines to help you figure out where you can best be helpful."),Object(i.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(i.b)("ol",{start:0},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#types-of-contributions-were-looking-for"}),"Types of contributions we're looking for")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#ground-rules-expectations"}),"Ground rules & expectations")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#how-to-contribute"}),"How to contribute")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#setting-up-your-environment"}),"Setting up your environment")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#community"}),"Community"))),Object(i.b)("h2",{id:"types-of-contributions-were-looking-for"},"Types of contributions we're looking for"),Object(i.b)("p",null,"There are many ways you can directly contribute to the guides (in descending order of need):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Examples"),Object(i.b)("li",{parentName:"ul"},"Helper Libraries (like single-spa-react) for missing frameworks"),Object(i.b)("li",{parentName:"ul"},"Bug fixes"),Object(i.b)("li",{parentName:"ul"},"Answering questions in the slack channel"),Object(i.b)("li",{parentName:"ul"},"new helper packages for frameworks")),Object(i.b)("p",null,"Interested in making a contribution? Read on!"),Object(i.b)("h2",{id:"ground-rules--expectations"},"Ground rules & expectations"),Object(i.b)("p",null,"Before we get started, here are a few things we expect from you (and that you should expect from others):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Be kind and thoughtful in your conversations around this project. We all come from different backgrounds and projects, which means we likely have different perspectives on "how open source is done." Try to listen to others rather than convince them that your way is correct.'),Object(i.b)("li",{parentName:"ul"},"Please read the single-spa ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/code-of-conduct/"}),"Contributor Code of Conduct"),". By participating in this project, you agree to abide by its terms."),Object(i.b)("li",{parentName:"ul"},"If you open a pull request, please ensure that your contribution passes all tests. If there are test failures, you will need to address them before we can merge your contribution."),Object(i.b)("li",{parentName:"ul"},"When adding content, please consider if it is widely valuable. Please don't add references or links to things you or your employer have created as others will do so if they appreciate it.")),Object(i.b)("h2",{id:"how-to-contribute"},"How to contribute"),Object(i.b)("p",null,"If you'd like to contribute, start by searching through the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/issues"}),"issues")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/pulls"}),"pull requests")," to see whether someone else has raised a similar idea or question."),Object(i.b)("p",null,"If you don't see your idea listed, and you think it fits into the goals of this guide, do one of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"If your contribution is minor,")," such as a small typo or bug fix, open a pull request."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"If your contribution is major,")," such as a new feature, start by opening an issue first. That way, other people can weigh in on the discussion before you do any work.")),Object(i.b)("h2",{id:"setting-up-your-environment"},"Setting up your environment"),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Git"),Object(i.b)("li",{parentName:"ol"},"Node: install version 8.4 or greater"),Object(i.b)("li",{parentName:"ol"},"Yarn: See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://yarnpkg.com/lang/en/docs/install/"}),"Yarn website for installation instructions")),Object(i.b)("li",{parentName:"ol"},"A fork of the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa"}),"single-spa repo")),Object(i.b)("li",{parentName:"ol"},"A clone of the repo on your local machine")),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"cd single-spa")," to go into the project root"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"yarn")," to install single-spa's dependencies")),Object(i.b)("h3",{id:"create-a-branch"},"Create a branch"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"git checkout master")," from any folder in your local ",Object(i.b)("inlineCode",{parentName:"li"},"single-spa")," repository"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"git pull origin master")," to ensure you have the latest main code"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"git checkout -b the-name-of-my-branch")," (replacing ",Object(i.b)("inlineCode",{parentName:"li"},"the-name-of-my-branch")," with a suitable name) to create a branch")),Object(i.b)("h3",{id:"test-the-change"},"Test the change"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"yarn test")," from the project root.")),Object(i.b)("h3",{id:"push-it"},"Push it"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},'git add . && git commit -m "My message"')," (replacing ",Object(i.b)("inlineCode",{parentName:"li"},"My message")," with a commit message, such as ",Object(i.b)("inlineCode",{parentName:"li"},"Fixed application lifecycles"),") to stage and commit your changes"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"git push my-fork-name the-name-of-my-branch")),Object(i.b)("li",{parentName:"ol"},"Go to the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa"}),"single-spa repo")," and you should see recently pushed branches."),Object(i.b)("li",{parentName:"ol"},"Follow GitHub's instructions to submit a new Pull Request.")),Object(i.b)("h2",{id:"community"},"Community"),Object(i.b)("p",null,"Discussions about single-spa take place on the single-spa repository's ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/issues"}),"Issues")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/pulls"}),"Pull Requests")," sections. Anybody is welcome to join these conversations. There is also a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://join.slack.com/t/single-spa/shared_invite/zt-jy1x8x93-52Tth0fZBUzZmHcEpWw2Jg"}),"slack community")," for regular updates."),Object(i.b)("p",null,"Wherever possible, do not take these conversations to private channels, including contacting the maintainers directly. Keeping communication public means everybody can benefit and learn from the conversation."))}b.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(a,".").concat(m)]||u[m]||p[m]||i;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);