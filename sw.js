if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,s,a)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return i;case"module":return d;default:return e(c)}})).then(e=>{const c=a(...e);return i.default||(i.default=c),i})}))}}define("./sw.js",["./workbox-90c7dc54"],(function(e){"use strict";importScripts("assets/push.js"),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.8db3cc3f66f66b07d70c.css",revision:"7d918451aab5e48a34ce175064f4c973"},{url:"10.e3e4a3415b2d8e714cd6.bundle.js",revision:"f527184da86e713e9bfd696947c19fd7"},{url:"11.127cb8995498eee57101.bundle.js",revision:"4f213eabe33662acda9929dcd8ed1c2b"},{url:"12.566c6b386e28e65c9b5d.bundle.js",revision:"c3260627bf30030dd9a0c74fe5e2add9"},{url:"13.03419512c3efc45aa24f.bundle.js",revision:"4b4641c908b2b51865458fa5724037c7"},{url:"4.b6c3d1e146c1a3d3d6e2.css",revision:"0f3d7cd857866dd90d6eabeb886ae9b0"},{url:"5.9e860a9d9ef1d961fa65.bundle.js",revision:"5607e825074f3777fbdb7b453e5c938d"},{url:"5.9e860a9d9ef1d961fa65.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"6.0a8d3e60d202c5882486.css",revision:"7723615eb233a1bf2c78267a680616f2"},{url:"6.9d8d7d360b3b7071caab.bundle.js",revision:"9cee3ba38e1cfd9d5a2bf099684dcd4c"},{url:"7.68dedc153befb9fa4fac.bundle.js",revision:"8a2d956aa5b61e9024c63b9b9fef8204"},{url:"7.bf292f432cefdfbde7ea.css",revision:"2ea7740a8e64faa41b2b762f271eab81"},{url:"8.5d413655d82829e19999.bundle.js",revision:"9493d51414b014f7b22dfe92e06c744f"},{url:"9.897386a2ffab5fb556ec.bundle.js",revision:"23262884c86bd79657a769d76d8b0c80"},{url:"assets/push.js",revision:"5c7a4098cf87fda7aa1a8cf553f8a4c7"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"index.html",revision:"a62c35a6b78918da30239256902e3485"},{url:"install.b28a32f26f2a422dd08b.bundle.js",revision:"904b1e60f454e4f4f2e0b331a1827338"},{url:"manifest.json",revision:"a924cc5a4dad7d365444f49923f5e91a"},{url:"print.6c5bf0dcac9aba3fb4c3.bundle.js",revision:"9024c652fe2ca87ab2fca1e79b6a76fd"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"sw-offline-google-analytics.js",revision:"55db6f581ecba045d7ce3f833b800869"},{url:"vendors~app.96a6ea67c829e146eea5.bundle.js",revision:"e3ef57226df10d0adfaf645b8fc82f43"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
