!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="./src/build/",r(r.s=2)}([function(t,n,r){"use strict";n.__esModule=!0;var e=function(){return function(){this.prop="A:basic"}}();n.A=e},function(t,n,r){"use strict";var e,o=this&&this.__extends||(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)});n.__esModule=!0;var u=function(t){function n(){var n=t.call(this)||this;return n.prop="B:delivered",n}return o(n,t),n}(r(0).A);n.B=u},function(t,n,r){"use strict";n.__esModule=!0;var e=r(0),o=r(1);(new(function(){function t(){}return t.prototype.main=function(){var t=new e.A,n=new o.B;console.log(t.prop,"\n",n.prop)},t}())).main()}]);