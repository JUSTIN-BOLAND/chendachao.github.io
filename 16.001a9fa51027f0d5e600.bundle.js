(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"5yLx":function(n,e,r){function t(n,e,r,t,o,i,a){try{var c=n[i](a),s=c.value}catch(n){return void r(n)}c.done?e(s):Promise.resolve(s).then(t,o)}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then(function(){var n,e=(n=regeneratorRuntime.mark((function n(e){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("SW registered: ",e);case 1:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(o,i){var a=n.apply(e,r);function c(n){t(a,o,i,c,s,"next",n)}function s(n){t(a,o,i,c,s,"throw",n)}c(void 0)}))});return function(n){return e.apply(this,arguments)}}()).catch((function(n){console.log("SW registration failed: ",n)}))}))}}]);