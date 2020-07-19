this.goog=this.goog||{},this.goog.offlineGoogleAnalytics=function(){"use strict";var e="offline-google-analytics",t={NAME:"offline-google-analytics",STORE:"urls",VERSION:1},o=1728e5,r={ANALYTICS_JS_PATH:"/analytics.js",COLLECT_PATH:"/collect",HOST:"www.google-analytics.com"};var n,s=(function(e){!function(){function t(e){return Array.prototype.slice.call(e)}function o(e){return new Promise((function(t,o){e.onsuccess=function(){t(e.result)},e.onerror=function(){o(e.error)}}))}function r(e,t,r){var n,s=new Promise((function(s,i){o(n=e[t].apply(e,r)).then(s,i)}));return s.request=n,s}function n(e,t,o){var n=r(e,t,o);return n.then((function(e){return e?new u(e,n.request):void 0}))}function s(e,t,o){o.forEach((function(o){Object.defineProperty(e.prototype,o,{get:function(){return this[t][o]},set:function(e){this[t][o]=e}})}))}function i(e,t,o,n){n.forEach((function(n){n in o.prototype&&(e.prototype[n]=function(){return r(this[t],n,arguments)})}))}function a(e,t,o,r){r.forEach((function(r){r in o.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,o,r){r.forEach((function(r){r in o.prototype&&(e.prototype[r]=function(){return n(this[t],r,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function g(e){this._tx=e,this.complete=new Promise((function(t,o){e.oncomplete=function(){t()},e.onerror=function(){o(e.error)},e.onabort=function(){o(e.error)}}))}function p(e,t,o){this._db=e,this.oldVersion=t,this.transaction=new g(o)}function f(e){this._db=e}s(l,"_index",["name","keyPath","multiEntry","unique"]),i(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),i(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),o(t._request).then((function(e){return e?new u(e,t._request):void 0}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),i(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),g.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(g,"_tx",["objectStoreNames","mode"]),a(g,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["deleteObjectStore","close"]),f.prototype.transaction=function(){return new g(this._db.transaction.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(o){o.prototype[e.replace("open","iterate")]=function(){var o=t(arguments),r=o[o.length-1],n=this._store||this._index,s=n[e].apply(n,o.slice(0,-1));s.onsuccess=function(){r(s.result)}}}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var o=this,r=[];return new Promise((function(n){o.iterateCursor(e,(function(e){return e?(r.push(e.value),void 0!==t&&r.length==t?void n(r):void e.continue()):void n(r)}))}))})}));var d={open:function(e,t,o){var n=r(indexedDB,"open",[e,t]),s=n.request;return s.onupgradeneeded=function(e){o&&o(new p(s.result,e.oldVersion,s.transaction))},n.then((function(e){return new f(e)}))},delete:function(e){return r(indexedDB,"deleteDatabase",[e])}};e.exports=d,e.exports.default=e.exports}()}(n={exports:{}},n.exports),n.exports);class i{constructor(e,t,o){if(null==e||null==t||null==o)throw Error("name, version, storeName must be passed to the constructor.");this._name=e,this._version=t,this._storeName=o}_getDb(){return this._dbPromise||(this._dbPromise=s.open(this._name,this._version,e=>{e.createObjectStore(this._storeName)}).then(e=>e)),this._dbPromise}close(){return this._dbPromise?this._dbPromise.then(e=>{e.close(),this._dbPromise=null}):void 0}put(e,t){return this._getDb().then(o=>{const r=o.transaction(this._storeName,"readwrite");return r.objectStore(this._storeName).put(t,e),r.complete})}delete(e){return this._getDb().then(t=>{const o=t.transaction(this._storeName,"readwrite");return o.objectStore(this._storeName).delete(e),o.complete})}get(e){return this._getDb().then(t=>t.transaction(this._storeName).objectStore(this._storeName).get(e))}getAllValues(){return this._getDb().then(e=>e.transaction(this._storeName).objectStore(this._storeName).getAll())}getAllKeys(){return this._getDb().then(e=>e.transaction(this._storeName).objectStore(this._storeName).getAllKeys())}}const a=new i(t.NAME,t.VERSION,t.STORE);class c{constructor({title:e,isPrimary:t}={}){this._isPrimary=t||!1,this._groupTitle=e||"",this._logs=[],this._childGroups=[],this._isFirefox=!1,/Firefox\/\d*\.\d*/.exec(navigator.userAgent)&&(this._isFirefox=!0),this._isEdge=!1,/Edge\/\d*\.\d*/.exec(navigator.userAgent)&&(this._isEdge=!0)}addLog(e){this._logs.push(e)}addChildGroup(e){0===e._logs.length||this._childGroups.push(e)}print(){return this._isEdge?void this._printEdgeFriendly():(this._openGroup(),this._logs.forEach(e=>{this._printLogDetails(e)}),this._childGroups.forEach(e=>{e.print()}),void this._closeGroup())}_printEdgeFriendly(){this._logs.forEach(e=>{let t=e.message;"string"==typeof t&&(t=t.replace(/%c/g,""));const o=[t];e.error&&o.push(e.error),e.args&&o.push(e.args);(e.logFunc||console.log)(...o)}),this._childGroups.forEach(e=>{e.print()})}_printLogDetails(e){const t=e.logFunc?e.logFunc:console.log;let o=[e.message];e.colors&&!this._isEdge&&(o=o.concat(e.colors)),e.args&&(o=o.concat(e.args)),t(...o)}_openGroup(){if(this._isPrimary){if(0===this._childGroups.length)return;const e=this._logs.shift();if(this._isFirefox)return void this._printLogDetails(e);e.logFunc=console.group,this._printLogDetails(e)}else console.groupCollapsed(this._groupTitle)}_closeGroup(){this._isPrimary&&0===this._childGroups.length||console.groupEnd()}}var l={isDevBuild:function(){return!1},isLocalhost:function(){return!("localhost"!==location.hostname&&"[::1]"!==location.hostname&&!location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},isServiceWorkerGlobalScope:function(){return"ServiceWorkerGlobalScope"in self&&self instanceof ServiceWorkerGlobalScope}};self.goog=self.goog||{},self.goog.LOG_LEVEL=self.goog.LOG_LEVEL||{none:-1,verbose:0,debug:1,warn:2,error:3};var u=new class{constructor(){this._defaultLogLevel=l.isDevBuild()?self.goog.LOG_LEVEL.debug:self.goog.LOG_LEVEL.warn}log(e){this._printMessage(self.goog.LOG_LEVEL.verbose,e)}debug(e){this._printMessage(self.goog.LOG_LEVEL.debug,e)}warn(e){this._printMessage(self.goog.LOG_LEVEL.warn,e)}error(e){this._printMessage(self.goog.LOG_LEVEL.error,e)}_printMessage(e,t){if(this._shouldLogMessage(e,t)){this._getAllLogGroups(e,t).print()}}_getAllLogGroups(e,t){const o=new c({isPrimary:!0,title:"sw-helpers log."}),r=this._getPrimaryMessageDetails(e,t);if(o.addLog(r),t.error){const e={message:t.error,logFunc:console.error};o.addLog(e)}const n=new c({title:"Extra Information."});if(t.that&&t.that.constructor&&t.that.constructor.name){const e=t.that.constructor.name;n.addLog(this._getKeyValueDetails("class",e))}return t.data&&("object"!=typeof t.data||t.data instanceof Array?n.addLog(this._getKeyValueDetails("additionalData",t.data)):Object.keys(t.data).forEach(e=>{n.addLog(this._getKeyValueDetails(e,t.data[e]))})),o.addChildGroup(n),o}_getKeyValueDetails(e,t){return{message:`%c${e}: `,colors:["color: #3498db"],args:t}}_getPrimaryMessageDetails(e,t){let o,r;e===self.goog.LOG_LEVEL.verbose?(o="Info",r="#bdc3c7"):e===self.goog.LOG_LEVEL.debug?(o="Debug",r="#2ecc71"):e===self.goog.LOG_LEVEL.warn?(o="Warn",r="#f1c40f"):e===self.goog.LOG_LEVEL.error&&(o="Error",r="#e74c3c");let n=`%c🔧 %c[${o}]`;const s=["color: #bdc3c7","color: "+r];let i;return"string"==typeof t?i=t:t.message&&(i=t.message),i&&(i=i.replace(/\s+/g," "),n+="%c "+i,s.push("color: #7f8c8d; font-weight: normal")),{message:n,colors:s}}_shouldLogMessage(e,t){if(!t)return!1;let o=this._defaultLogLevel;return self&&self.goog&&"number"==typeof self.goog.logLevel&&(o=self.goog.logLevel),!(o===self.goog.LOG_LEVEL.none||e<o)}};const h=new i(t.NAME,t.VERSION,t.STORE);var g=e=>(e=e||{},h.getAllKeys().then(t=>Promise.all(t.map(t=>h.get(t).then(r=>{const n=Date.now()-r,s=new URL(t);if(n>o)return;if(!("searchParams"in s))return;let i=e.parameterOverrides||{};i.qt=n,Object.keys(i).sort().forEach(e=>{s.searchParams.set(e,i[e])});let a=e.hitFilter;if("function"==typeof a)try{a(s.searchParams)}catch(e){return}return fetch(s.toString())}).then(()=>h.delete(t))))));return{initialize:t=>{t=t||{};let o=!1;self.addEventListener("fetch",n=>{const s=new URL(n.request.url),i=n.request;if(s.hostname===r.HOST)if(s.pathname===r.COLLECT_PATH){const e=i.clone();n.respondWith(fetch(i).then(e=>(o&&g(t),o=!1,e),()=>(u.log("Enqueuing failed request..."),o=!0,((e,t)=>{const o=new URL(e.url);return e.text().then(e=>(e&&(o.search=e),a.put(o.toString(),t||Date.now())))})(e).then(()=>Response.error()))))}else s.pathname===r.ANALYTICS_JS_PATH&&n.respondWith(caches.open(e).then(e=>fetch(i).then(t=>e.put(i,t.clone()).then(()=>t)).catch(t=>(u.error(t),e.match(i)))))}),g(t)}}}();