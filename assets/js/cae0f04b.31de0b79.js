"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5709],{4166:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"4.x","label":"4.x","banner":"unmaintained","badge":true,"className":"docs-version-4.x","isLast":false,"docsSidebars":{"version-4.x/docs":[{"type":"category","label":"Overview","items":[{"type":"link","label":"Overview of single-spa","href":"/docs/4.x/getting-started-overview","docId":"getting-started-overview"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Tutorials","items":[{"type":"link","label":"Starting from scratch","href":"/docs/4.x/starting-from-scratch","docId":"starting-from-scratch"},{"type":"link","label":"React - Migrating to single-spa","href":"/docs/4.x/migrating-react-tutorial","docId":"migrating-react-tutorial"},{"type":"link","label":"AngularJS - Migrating to single-spa","href":"/docs/4.x/migrating-angularJS-tutorial","docId":"migrating-angularJS-tutorial"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Examples","items":[{"type":"link","label":"Resources","href":"/docs/4.x/examples","docId":"examples"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Concept: Root Config","items":[{"type":"link","label":"Configuring single-spa","href":"/docs/4.x/configuration","docId":"configuration"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Concept: Application","items":[{"type":"link","label":"single-spa applications","href":"/docs/4.x/building-applications","docId":"building-applications"},{"type":"link","label":"Splitting applications","href":"/docs/4.x/separating-applications","docId":"separating-applications"},{"type":"link","label":"Migrating existing code","href":"/docs/4.x/migrating-existing-spas","docId":"migrating-existing-spas"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Concept: Parcel","items":[{"type":"link","label":"Overview","href":"/docs/4.x/parcels-overview","docId":"parcels-overview"}],"collapsible":true,"collapsed":true},{"type":"category","label":"API","items":[{"type":"link","label":"Applications API","href":"/docs/4.x/api","docId":"api"},{"type":"link","label":"Parcels API","href":"/docs/4.x/parcels-api","docId":"parcels-api"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Ecosystem","items":[{"type":"link","label":"Overview","href":"/docs/4.x/ecosystem","docId":"ecosystem"},{"type":"link","label":"React","href":"/docs/4.x/ecosystem-react","docId":"ecosystem-react"},{"type":"link","label":"Vue","href":"/docs/4.x/ecosystem-vue","docId":"ecosystem-vue"},{"type":"link","label":"Angular","href":"/docs/4.x/ecosystem-angular","docId":"ecosystem-angular"},{"type":"link","label":"AngularJS","href":"/docs/4.x/ecosystem-angularjs","docId":"ecosystem-angularjs"},{"type":"link","label":"Cycle","href":"/docs/4.x/ecosystem-cycle","docId":"ecosystem-cycle"},{"type":"link","label":"Ember","href":"/docs/4.x/ecosystem-ember","docId":"ecosystem-ember"},{"type":"link","label":"Inferno","href":"/docs/4.x/ecosystem-inferno","docId":"ecosystem-inferno"},{"type":"link","label":"Preact","href":"/docs/4.x/ecosystem-preact","docId":"ecosystem-preact"},{"type":"link","label":"Svelte","href":"/docs/4.x/ecosystem-svelte","docId":"ecosystem-svelte"},{"type":"link","label":"Riot","href":"/docs/4.x/ecosystem-riot","docId":"ecosystem-riot"},{"type":"link","label":"Backbone","href":"/docs/4.x/ecosystem-backbone","docId":"ecosystem-backbone"},{"type":"link","label":"HTML / Web Components","href":"/docs/4.x/ecosystem-html-web-components","docId":"ecosystem-html-web-components"},{"type":"link","label":"Leaked globals","href":"/docs/4.x/ecosystem-leaked-globals","docId":"ecosystem-leaked-globals"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Contributing","items":[{"type":"link","label":"Overview","href":"/docs/4.x/contributing-overview","docId":"contributing-overview"},{"type":"link","label":"Code of Conduct","href":"/docs/4.x/code-of-conduct","docId":"code-of-conduct"}],"collapsible":true,"collapsed":true}]},"docs":{"api":{"id":"api","title":"Applications API","description":"single-spa exports named functions and variables rather than a single default export.","sidebar":"version-4.x/docs"},"building-applications":{"id":"building-applications","title":"Building single-spa applications","description":"A single-spa registered application is everything that a normal SPA is, except that it doesn\'t have an HTML page. In a single-spa world, your SPA contains many registered applications, where each has its own framework. Registered applications have their own client-side routing and their own frameworks/libraries. They render their own HTML and have full freedom to do whatever they want, whenever they are mounted. The concept of being mounted refers to whether a registered application is putting content on the DOM or not. What determines if a registered application is mounted is its activity function. Whenever a registered application is not mounted, it should remain completely dormant until mounted.","sidebar":"version-4.x/docs"},"code-of-conduct":{"id":"code-of-conduct","title":"Code of Conduct","description":"This code of conduct outlines our expectations for participants within the single-spa community, as well as steps to reporting unacceptable behavior. We are committed to providing a welcoming and inspiring community for all and expect our code of conduct to be honored. Anyone who violates this code of conduct may be banned from the community.","sidebar":"version-4.x/docs"},"configuration":{"id":"configuration","title":"Configuring single-spa","description":"The single-spa root config consists of the following:","sidebar":"version-4.x/docs"},"contributing-overview":{"id":"contributing-overview","title":"Contributing to Single-spa","description":"Thanks for checking out single-spa! We\'re excited to hear and learn from you.","sidebar":"version-4.x/docs"},"ecosystem":{"id":"ecosystem","title":"The single-spa ecosystem","description":"The single-spa ecosystem is quickly growing to support as many frameworks and build tools as possible.","sidebar":"version-4.x/docs"},"ecosystem-angular":{"id":"ecosystem-angular","title":"single-spa-angular","description":"Introduction","sidebar":"version-4.x/docs"},"ecosystem-angularjs":{"id":"ecosystem-angularjs","title":"single-spa-angularjs","description":"single-spa-angularjs is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with AngularJS. Check out the single-spa-angularjs github.","sidebar":"version-4.x/docs"},"ecosystem-backbone":{"id":"ecosystem-backbone","title":"single-spa-backbone","description":"A single-spa helper library which provides lifecycle events for building single-spa applications using Backbone.","sidebar":"version-4.x/docs"},"ecosystem-cycle":{"id":"ecosystem-cycle","title":"single-spa-cycle","description":"single-spa-cycle is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Cycle.js. Check out the single-spa-cycle github.","sidebar":"version-4.x/docs"},"ecosystem-ember":{"id":"ecosystem-ember","title":"single-spa-ember","description":"single-spa-ember is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Ember.js. Check out the single-spa-ember github.","sidebar":"version-4.x/docs"},"ecosystem-html-web-components":{"id":"ecosystem-html-web-components","title":"single-spa-html","description":"single-spa-html is a helper library for mounting raw HTML and web components as","sidebar":"version-4.x/docs"},"ecosystem-inferno":{"id":"ecosystem-inferno","title":"single-spa-inferno","description":"single-spa-inferno is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Inferno. Check out the single-spa-inferno github.","sidebar":"version-4.x/docs"},"ecosystem-leaked-globals":{"id":"ecosystem-leaked-globals","title":"single-spa-leaked-globals","description":"single-spa-leaked-globals is a helper library for dealing with single-spa-applications","sidebar":"version-4.x/docs"},"ecosystem-preact":{"id":"ecosystem-preact","title":"single-spa-preact","description":"single-spa-preact is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Preact. Check out the single-spa-preact github.","sidebar":"version-4.x/docs"},"ecosystem-react":{"id":"ecosystem-react","title":"single-spa-react","description":"Build Status","sidebar":"version-4.x/docs"},"ecosystem-riot":{"id":"ecosystem-riot","title":"single-spa-riot","description":"single-spa-riot is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with riot. Check out the single-spa-riot github.","sidebar":"version-4.x/docs"},"ecosystem-svelte":{"id":"ecosystem-svelte","title":"single-spa-svelte","description":"single-spa-svelte is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with svelte. Check out the single-spa-svelte github.","sidebar":"version-4.x/docs"},"ecosystem-vue":{"id":"ecosystem-vue","title":"single-spa-vue","description":"single-spa-vue is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Vue.js. Check out the single-spa-vue github.","sidebar":"version-4.x/docs"},"examples":{"id":"examples","title":"Single-spa Examples","description":"There are a variety of single-spa example repositories, each for different use cases:","sidebar":"version-4.x/docs"},"faq":{"id":"faq","title":"Frequently Asked Questions","description":"What does single-spa do?"},"getting-started-overview":{"id":"getting-started-overview","title":"Getting Started with single-spa","description":"JavaScript Microfrontends","sidebar":"version-4.x/docs"},"glossary":{"id":"glossary","title":"Glossary","description":"Activity Function"},"migrating-angularJS-tutorial":{"id":"migrating-angularJS-tutorial","title":"Migrating an Existing AngularJS Project","description":"Project Setup","sidebar":"version-4.x/docs"},"migrating-existing-spas":{"id":"migrating-existing-spas","title":"Migrating existing SPAs","description":"If you\'re interested in migrating existing SPAs into a single-spa, you\'ll","sidebar":"version-4.x/docs"},"migrating-react-tutorial":{"id":"migrating-react-tutorial","title":"Migrating an Existing React Project","description":"Project Setup","sidebar":"version-4.x/docs"},"parcels-api":{"id":"parcels-api","title":"Parcels API","description":"Most parcel methods will be called on the parcel itself, with the exception being around mounting.","sidebar":"version-4.x/docs"},"parcels-overview":{"id":"parcels-overview","title":"Parcels","description":"A single-spa parcel is a framework agnostic component. It is a chunk of functionality meant to be mounted manually by an application, without having to worry about which framework was used to implement the parcel or application. Parcels use similar methodology as registered applications but are mounted by a manual function call rather than the activity function.","sidebar":"version-4.x/docs"},"separating-applications":{"id":"separating-applications","title":"Splitting up applications","description":"In a large, microserviced system, your root single-spa configuration and each of the applications should probably have its own git repository. How to do that in a JavaScript project isn\'t necessarily clear, so some options are listed below.","sidebar":"version-4.x/docs"},"starting-from-scratch":{"id":"starting-from-scratch","title":"Starting From Scratch","description":"single-spa allows you to build micro frontends that coexist and can each be written with their own framework. This will allow you and your team to:","sidebar":"version-4.x/docs"}}}')}}]);