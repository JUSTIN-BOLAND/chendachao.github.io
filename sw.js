if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return n;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-90c7dc54"],(function(e){"use strict";importScripts("assets/push.js"),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.94732edc92f6b1c174bd.css",revision:"a78549e438e849ffb5a5beaa9983fd41"},{url:"10.d66ba15575772854d786.bundle.js",revision:"e42e1b15e9383940aed9fbb979bd20b5"},{url:"11.127cb8995498eee57101.bundle.js",revision:"4f213eabe33662acda9929dcd8ed1c2b"},{url:"12.2e8d3ef8e05bf0a3d728.bundle.js",revision:"54d248fc939c291bb65e4365509c88e2"},{url:"13.03419512c3efc45aa24f.bundle.js",revision:"4b4641c908b2b51865458fa5724037c7"},{url:"4.afa54f4bd73963ed81fe.css",revision:"cd93197801b4e9d2fd71b0b3b0afe104"},{url:"5.8af8d5ca7c9a445d5524.bundle.js",revision:"3397574f590f82985e4317141aa102ba"},{url:"5.8af8d5ca7c9a445d5524.bundle.js.LICENSE.txt",revision:"11ba6bbe7acfcc6f0660e132a4496982"},{url:"5.bf3ff6c25dec61dd8706.css",revision:"5416cf0afab048b992216407ada9c37e"},{url:"6.0932139b7363e0b2ae1c.bundle.js",revision:"50b73c620abd23099228a4e07c9bcc3d"},{url:"6.0932139b7363e0b2ae1c.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"7.0a8d3e60d202c5882486.css",revision:"7723615eb233a1bf2c78267a680616f2"},{url:"7.4a925574a5ef973421df.bundle.js",revision:"2fbb925635a9475267cdff7e44c4107f"},{url:"8.0c99a32218be89d92153.bundle.js",revision:"31b21cda1542ee2c9f868785a5f95caa"},{url:"8.bf292f432cefdfbde7ea.css",revision:"2ea7740a8e64faa41b2b762f271eab81"},{url:"9.55248340f9337670af63.bundle.js",revision:"a3be487250d594625e63b95219929cbf"},{url:"assets/data/en/chendachao.json",revision:"6738b487a48cf2d1d8b701d89e5c4c2e"},{url:"assets/data/zh/chendachao.json",revision:"6738b487a48cf2d1d8b701d89e5c4c2e"},{url:"assets/i18n/en.json",revision:"8a14f36ede1db397965217a3a090d742"},{url:"assets/i18n/zh.json",revision:"e85ff6a801ea577039b8ec2dce0c8626"},{url:"assets/push.js",revision:"4276d0165d3189e2752bd3e9683300b5"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"index.html",revision:"5241ab085e273e0770d534b8608355e6"},{url:"install.b28a32f26f2a422dd08b.bundle.js",revision:"904b1e60f454e4f4f2e0b331a1827338"},{url:"manifest.json",revision:"a924cc5a4dad7d365444f49923f5e91a"},{url:"print.6c5bf0dcac9aba3fb4c3.bundle.js",revision:"9024c652fe2ca87ab2fca1e79b6a76fd"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"sw-offline-google-analytics.js",revision:"35c094d53f1849daf6be89828f463b72"},{url:"vendors~app.a3a4377156b4d169d53b.bundle.js",revision:"aea0e6a5abf8e83e1580aa8cef9fdbbf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map