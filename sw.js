if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,d,s)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+c.slice(1)};return Promise.all(d.map(c=>{switch(c){case"exports":return a;case"module":return i;default:return e(c)}})).then(e=>{const c=s(...e);return a.default||(a.default=c),a})}))}}define("./sw.js",["./workbox-90c7dc54"],(function(e){"use strict";importScripts("assets/push.js"),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./images/bg.ea2ccd94172d6c7e54bb0ac80f073a8e.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"./images/site.5506f7ed8473c2bc037655e6d04a11c7.png",revision:"2fbe1afb47b580c6122f4f8931fa965d"},{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.391ed6f93170a8bf4607.css",revision:"7ee1d228dadbf9a1a9c99eff1c899d39"},{url:"10.6045c5104d7fb264e6c1.bundle.js",revision:"8098dc253e53e94482108458f787e3f1"},{url:"11.a52f987f6cd1019f87d7.css",revision:"ccbcc0e22eb7faacac20152b9c06a60a"},{url:"11.cfce01f03e63156211da.bundle.js",revision:"a05eda39ee32cf68ad4cdc14e7287deb"},{url:"12.2766291b78c49837ab7f.bundle.js",revision:"8007adefae7b0d5000131d36c6615067"},{url:"12.d5864ac7ed260191a16d.css",revision:"a40131300bb38c8ec9a68abf6c758bd6"},{url:"13.328fb35137b4974de094.bundle.js",revision:"5ff8ed10e6ba355f073a953abbea1366"},{url:"13.bcc7c7879255550b5153.css",revision:"ce5858be43a9d0e5a76f073208f03878"},{url:"14.86d89bd2becba9da24d6.bundle.js",revision:"1c8ab5ca403c5674dbe54e4f875c38f4"},{url:"15.1a416e606ebdf86f5379.bundle.js",revision:"abfa00457ea88f469d2a2385155d2150"},{url:"16.001a9fa51027f0d5e600.bundle.js",revision:"8557c848502ac99eae07166a83041ad2"},{url:"2.2909b6911f1524906957.css",revision:"9043bafd7c68d4ad916113ee8d6b90b2"},{url:"6.5eb56dce1e6fca71c950.bundle.js",revision:"aba795d34adef45706ea44253e80ccf1"},{url:"6.5eb56dce1e6fca71c950.bundle.js.LICENSE.txt",revision:"11ba6bbe7acfcc6f0660e132a4496982"},{url:"6.bf3ff6c25dec61dd8706.css",revision:"5416cf0afab048b992216407ada9c37e"},{url:"7.744c187dd0d533dad6f5.bundle.js",revision:"87bf4c3ab2fe0d75a27d99be35c58cd9"},{url:"7.744c187dd0d533dad6f5.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"7.b6c3d1e146c1a3d3d6e2.css",revision:"0f3d7cd857866dd90d6eabeb886ae9b0"},{url:"8.4af8b432196f227bdeb4.css",revision:"ccfe873fe88bdbdda1dd8d890c33f557"},{url:"8.edcd4c6a8b80e21faf0d.bundle.js",revision:"e48f72624044d0bf2f851182cb60d91d"},{url:"9.a684734f1ee2acf9a702.bundle.js",revision:"93dcc4c0ad2eca2444a18e78eb3eb079"},{url:"9.bf292f432cefdfbde7ea.css",revision:"2ea7740a8e64faa41b2b762f271eab81"},{url:"app.f4904d0c39d45de69158.bundle.js",revision:"9c90fae1caf57453bbf240957e20e28b"},{url:"assets/data/en/chendachao.json",revision:"ae8b2be14ca3221dfcbba1f4ffaf2873"},{url:"assets/data/zh/chendachao.json",revision:"2e04c8fd7445c0054e4eddbffca3493e"},{url:"assets/i18n/en.json",revision:"d8da9f2f2df117a842cfa6bc873ff794"},{url:"assets/i18n/zh.json",revision:"22fe833378eb5ff0273a6bbdffb2b4d8"},{url:"assets/push.js",revision:"4276d0165d3189e2752bd3e9683300b5"},{url:"cv.342f65acc103a06b3daa.bundle.js",revision:"23efbe18f8e05924a133b0f4e97f5c24"},{url:"cv.html",revision:"d2c0bcf996a8a08f04d993d25654dbc6"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"index.html",revision:"d48ab8064057ab425f73454dc62511c5"},{url:"install.f7147728b5687f162f43.bundle.js",revision:"105640ef3eb10a8818284682a7c4d59f"},{url:"manifest.json",revision:"a924cc5a4dad7d365444f49923f5e91a"},{url:"print.961aa252323b3aa928d9.bundle.js",revision:"3ef3af31c5a967116faeaa10f9ea254b"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.1e57ec297546e983d91d.bundle.js",revision:"983bc59ab550180ae8f2fb36ed974737"},{url:"sw-offline-google-analytics.js",revision:"35c094d53f1849daf6be89828f463b72"},{url:"vendors~app~cv.35d466276b16fec2f1e2.bundle.js",revision:"bbbf5008871dea4c1d2b0b45378b6c31"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
