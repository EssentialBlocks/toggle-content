!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=33)}({33:function(e,t){function r(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}document.addEventListener("DOMContentLoaded",(function(e){var t=document.querySelectorAll(".eb-toggle-wrapper");if(t){var n,o=r(t);try{var l=function(){var e=n.value,t=e.querySelector(".eb-toggle-switch > input"),r=e.querySelector(".eb-toggle-primary-label"),o=e.querySelector(".eb-toggle-secondary-label"),l=e.querySelector(".eb-toggle-primary-label-text"),i=e.querySelector(".eb-toggle-secondary-label-text"),a=e.querySelector(".eb-toggle-slider"),c=e.querySelector(".eb-toggle-controller"),u=e.querySelector(".eb-toggle-content"),s=e.querySelector(".eb-toggle-seperator"),d=e.getAttribute("data-init-content"),y=e.getAttribute("data-size"),f=e.getAttribute("data-switch-style"),g=e.getAttribute("data-primary-color"),b=e.getAttribute("data-secondary-color"),p=e.getAttribute("data-active-color"),h=e.getAttribute("data-bg-color"),m=e.getAttribute("data-active-bg"),v=window.getComputedStyle(u.children[0]).display,x=window.getComputedStyle(u.children[1]).display,S=e.querySelector(".eb-text-switch-label").getAttribute("for"),w=e.querySelector("#".concat(S));function A(){"toggle"!==f&&(r.style.background=m||"inherit",o.style.background=h||"inherit"),q()}function k(){"toggle"!==f&&(o.style.background=m||"inherit",r.style.background=h||"inherit"),j()}function q(){t.checked=!1,u.children[0].style.display=v,u.children[1].style.display="none",o.style.color=b,r.style.color=p||g,"toggle"===f&&(i.style.color=b,l.style.color=p||g),"text"!==f&&(c.style.transform="translateX(0px)")}function j(){t.checked=!0,u.children[1].style.display=x,u.children[0].style.display="none",r.style.color=g,o.style.color=p,"toggle"===f&&(l.style.color=g,i.style.color=p||b),"text"!==f&&(c.style.transform=function(){switch(y){case"s":return"translateX(22px)";case"m":return"translateX(26px)";case"l":return"translateX(36px)";case"xl":return"translateX(42px)"}}())}"primary"===d?q():(w.checked=!0,j()),w.addEventListener("change",(function(){this.checked?j():q()})),"text"===f&&(r.style.background=h||"inherit",o.style.background=h||"inherit",s.style.background=h||"inherit"),r.addEventListener("click",A),o.addEventListener("click",k),"text"===f&&("primary"===d?A():k()),"rounded"==f&&(a.style.borderRadius="21px",c.style.borderRadius=function(){switch(y){case"s":return"10px";case"m":return"13px";case"l":return"18px";case"xl":return"21px"}}()),"primary"===d?q():j(),t.addEventListener("change",(function(){this.checked?j():q()}))};for(o.s();!(n=o.n()).done;)l()}catch(e){o.e(e)}finally{o.f()}}}))}});