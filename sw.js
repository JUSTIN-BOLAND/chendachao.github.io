if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,s,a)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return i;case"module":return d;default:return e(c)}})).then(e=>{const c=a(...e);return i.default||(i.default=c),i})}))}}define("./sw.js",["./workbox-90c7dc54"],(function(e){"use strict";importScripts("assets/push.js"),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.1ab544190e6bc31e109d.css",revision:"893893bba0727db8d61ac2d5ca67adfd"},{url:"10.8ab5327d4110e95adc57.bundle.js",revision:"bf52d494bb01af483206dce138f6bedb"},{url:"11.0f6c354b203a860732bf.bundle.js",revision:"180c0178f61729d691d6636464290eed"},{url:"12.8386ae8e26878f5b1555.bundle.js",revision:"4d99beb32171963656d07057e9073aef"},{url:"4.0b988d2aa67525a513c3.css",revision:"892c702506ad0999b4eb80e41bef752f"},{url:"5.918f670f7e7978c3db58.bundle.js",revision:"77ca1d68484a7dc1502f9913980d2702"},{url:"5.918f670f7e7978c3db58.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"6.104aea51378d628b8bb3.bundle.js",revision:"4bcb037efcb8ef6cbe424536fab341af"},{url:"7.ab3731e4d91fe6a8a00e.bundle.js",revision:"fedd5967bd68de2af901730c4b42e212"},{url:"7.ab3731e4d91fe6a8a00e.bundle.js.LICENSE.txt",revision:"c53c1bc379e96a757bf9754d2741d5b1"},{url:"8.f59deef42d5270294e3d.bundle.js",revision:"c5d0c210cf02ac19e721f7c7282de075"},{url:"9.62755697cfc6e53bc1b4.bundle.js",revision:"8ec3c3322a20abd48d034d132d9033b3"},{url:"assets/push.js",revision:"5c7a4098cf87fda7aa1a8cf553f8a4c7"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"index.html",revision:"149daf69568f790c38686115d4472c10"},{url:"install.c9174af1d5c06a241e7a.bundle.js",revision:"f2ba605fbc188489fccae810306f3f8c"},{url:"manifest.json",revision:"a924cc5a4dad7d365444f49923f5e91a"},{url:"print.6c5bf0dcac9aba3fb4c3.bundle.js",revision:"9024c652fe2ca87ab2fca1e79b6a76fd"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"sw-offline-google-analytics.js",revision:"55db6f581ecba045d7ce3f833b800869"},{url:"vendors~app.96a6ea67c829e146eea5.bundle.js",revision:"e3ef57226df10d0adfaf645b8fc82f43"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
