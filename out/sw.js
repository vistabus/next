if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),m={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>m[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-0ea65fa9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/144.png",revision:"7c90988165fd6410665b0b2015e7388f"},{url:"/192.png",revision:"c1793e050deccfa8406ade1b361b0a99"},{url:"/512.png",revision:"b7052235a63c7cf4095da4b426f502c7"},{url:"/NEWschedule.csv",revision:"4f73b71d2b63ff8a58036a28cbbd3c2f"},{url:"/_next/static/chunks/403-4debc0249ccdf415.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/874-34d4b6014dd9e69e.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/app/_not-found/page-6eaa8044d3d8727d.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/app/layout-cf3e72125907e168.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/app/not~offline/page-053b6613da659126.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/app/page-f33ef0f07c0a9803.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/fd9d1056-f43482efa2213a55.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/main-9e906a2cc2fcd995.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/main-app-cb70e48068458e4d.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-1b0bcae20b4d9521.js",revision:"mgNWiS3ixwHm1h0rRmcHm"},{url:"/_next/static/css/77c2e6df3befd544.css",revision:"77c2e6df3befd544"},{url:"/_next/static/css/bef403e4b51110e5.css",revision:"bef403e4b51110e5"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/mgNWiS3ixwHm1h0rRmcHm/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/mgNWiS3ixwHm1h0rRmcHm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/apple-touch-icon.png",revision:"a7167caf3385ef293017b5b1375e2de4"},{url:"/db.js",revision:"4e0139925185eb951ece4657bd44dba2"},{url:"/favicon-16x16.png",revision:"8ea87b441d6fb37b86c3af61f9f82ef6"},{url:"/favicon-32x32.png",revision:"262e16f157f3531abed9699b95e56185"},{url:"/favicon.ico",revision:"07ccd73816a4ebd79fab8b21e1fce447"},{url:"/icon.png",revision:"b7052235a63c7cf4095da4b426f502c7"},{url:"/manifest.json",revision:"99010d1ac6e2dab78aad170649ed9cd2"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/ss.png",revision:"aebca88e83f68a4de3c47e67135f3b0d"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
