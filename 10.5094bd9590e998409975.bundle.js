(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Hh5m:function(e,o,t){"use strict";t.r(o);var n=t("0FX9"),c=t.n(n),i=t("pWKE");o.default=function(){var e=/localhost|127.0.0.1/.test(window.location.origin)?"https://chendachao.github.io":window.location.origin,o=document.querySelector("#dialog"),t=document.querySelectorAll(".closeBtn"),n=document.querySelector(".qrcode-handler");i.a.registerDialog(o),n.addEventListener("click",(function(){o.showModal(),c.a.toDataURL(e,{errorCorrectionLevel:"H",type:"image/jpeg",quality:1,margin:1,color:{}}).then((function(e){document.querySelector(".mobile-qrcode").src=e})).catch((function(e){console.error(e)}))})),t.forEach((function(e){e.addEventListener("click",(function(){o.close()}))})),o.addEventListener("click",(function(e){var t=o.getBoundingClientRect();t.top<=e.clientY&&e.clientY<=t.bottom&&t.left<=e.clientX&&e.clientX<=t.right||o.close()}))}}}]);