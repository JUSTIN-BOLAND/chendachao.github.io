if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,c,a)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return i;case"module":return d;default:return e(s)}})).then(e=>{const s=a(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-90c7dc54"],(function(e){"use strict";importScripts("assets/push.js"),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.e259631b8e710432d2d8.css",revision:"596d6187b88614235c651b632da65646"},{url:"10.18be12e8c4f3b13d12f0.bundle.js",revision:"f3a5846ba5a9a74a105b387c7cdaec24"},{url:"11.127cb8995498eee57101.bundle.js",revision:"4f213eabe33662acda9929dcd8ed1c2b"},{url:"12.057765acad676f8f4088.bundle.js",revision:"8405c0b502051e2872da427e5804cf9f"},{url:"13.03419512c3efc45aa24f.bundle.js",revision:"4b4641c908b2b51865458fa5724037c7"},{url:"4.b6c3d1e146c1a3d3d6e2.css",revision:"0f3d7cd857866dd90d6eabeb886ae9b0"},{url:"5.9e860a9d9ef1d961fa65.bundle.js",revision:"5607e825074f3777fbdb7b453e5c938d"},{url:"5.9e860a9d9ef1d961fa65.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"6.79e48df2fed754456c72.bundle.js",revision:"cddb3b7bfe1f526254eeab7888df2d14"},{url:"7.0a8d3e60d202c5882486.css",revision:"7723615eb233a1bf2c78267a680616f2"},{url:"7.a558d1471d29d459ad14.bundle.js",revision:"6473e15d3d61fecef4ca155be2a25f66"},{url:"8.0c99a32218be89d92153.bundle.js",revision:"31b21cda1542ee2c9f868785a5f95caa"},{url:"8.bf292f432cefdfbde7ea.css",revision:"2ea7740a8e64faa41b2b762f271eab81"},{url:"9.0dad12f25f1023888c46.bundle.js",revision:"0abc49895b6cb01b96ac51c1acf45456"},{url:"assets/i18n/en.json",revision:"26dfff07c30211f53f077ca3668d365d"},{url:"assets/i18n/zh.json",revision:"d02a08869c62532644137123a2299c4f"},{url:"assets/push.js",revision:"4276d0165d3189e2752bd3e9683300b5"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"index.html",revision:"77ba75870b3853a89d3d0617b1ad33e6"},{url:"install.b28a32f26f2a422dd08b.bundle.js",revision:"904b1e60f454e4f4f2e0b331a1827338"},{url:"manifest.json",revision:"a924cc5a4dad7d365444f49923f5e91a"},{url:"print.6c5bf0dcac9aba3fb4c3.bundle.js",revision:"9024c652fe2ca87ab2fca1e79b6a76fd"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"sw-offline-google-analytics.js",revision:"35c094d53f1849daf6be89828f463b72"},{url:"vendors~app.96a6ea67c829e146eea5.bundle.js",revision:"e3ef57226df10d0adfaf645b8fc82f43"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
