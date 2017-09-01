/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.VueMaterial=t(require("vue")):e.VueMaterial=t(e.Vue)})(this,(function(e){return (function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=433)})({0:function(e,t){e.exports=function(e,t,n,i){var o,r=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,r=e.default);var a="function"==typeof r?r.options:r;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),i){var u=a.computed||(a.computed={});Object.keys(i).forEach((function(e){var t=i[e];u[e]=function(){return t}}))}return{esModule:o,exports:r,options:a}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent)}},e.exports=t.default},110:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(49),r=i(o),s=n(37),a=i(s),u=n(1),c=i(u),d=n(79),l=i(d);t.default={props:{id:[String,Number],mdPosition:{type:String,default:"bottom center"},mdDuration:{type:[String,Number],default:4e3}},mixins:[c.default],data:function(){return{snackbarId:this.id||"snackbar-"+(0,r.default)(),active:!1,rootElement:{},snackbarElement:{},directionClass:null,closeTimeout:null}},computed:{classes:function(){var e={"md-active":this.active};return this.directionClass=this.mdPosition.replace(/ /g,"-"),e["md-position-"+this.directionClass]=!0,e}},watch:{active:function(e){var t="md-has-toast-"+this.directionClass;e?(document.body.classList.add(t),document.body.classList.add("md-has-toast")):(document.body.classList.remove(t),document.body.classList.remove("md-has-toast"))}},methods:{removeElement:function(){if(document.body.contains(this.snackbarElement)){var e=this.snackbarElement.querySelector(".md-ripple.md-active");e&&e.classList.remove("md-active"),document.body.removeChild(this.snackbarElement)}},open:function(){l.default.current&&l.default.current.close(),l.default.current=this,document.body.appendChild(this.snackbarElement),window.getComputedStyle(this.$refs.container).backgroundColor,this.active=!0,this.$emit("open"),this.closeTimeout=window.setTimeout(this.close,this.mdDuration),this.timeoutStartedAt=Date.now()},close:function(){var e=this;if(this.$refs.container){var t=function t(){e.$refs.container.removeEventListener(a.default,t),e.removeElement()};l.default.current=null,this.active=!1,this.$emit("close"),this.$refs.container.removeEventListener(a.default,t),this.$refs.container.addEventListener(a.default,t),window.clearTimeout(this.closeTimeout),this.pendingDuration=this.mdDuration}},pauseTimeout:function(){this.pendingDuration=this.pendingDuration-(Date.now()-this.timeoutStartedAt),this.timeoutStartedAt=0,window.clearTimeout(this.closeTimeout)},resumeTimeout:function(){this.timeoutStartedAt=Date.now(),this.closeTimeout=window.setTimeout(this.close,this.pendingDuration)}},mounted:function(){var e=this;this.$nextTick((function(){e.snackbarElement=e.$el,e.snackbarElement.parentNode.removeChild(e.snackbarElement),e.timeoutStartedAt=0,e.pendingDuration=e.mdDuration}))},beforeDestroy:function(){window.clearTimeout(this.closeTimeout),this.removeElement()}},e.exports=t.default},161:function(e,t){},172:function(e,t){e.exports=".THEME_NAME .md-snackbar .md-ink-ripple,.THEME_NAME.md-snackbar .md-ink-ripple{color:#fff}\n"},203:function(e,t,n){n(161);var i=n(0)(n(110),n(234),null,null);e.exports=i.exports},234:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-snackbar",class:[e.themeClass,e.classes],attrs:{id:e.snackbarId},on:{mouseenter:e.pauseTimeout,mouseleave:e.resumeTimeout}},[n("div",{ref:"container",staticClass:"md-snackbar-container"},[n("div",{staticClass:"md-snackbar-content"},[e._t("default")],2)])])},staticRenderFns:[]}},239:function(t,n){t.exports=e},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(function(){var e=document.createElement("span"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in t)if(void 0!==e.style[n])return t[n]})(),e.exports=t.default},433:function(e,t,n){e.exports=n(73)},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){return Math.random().toString(36).slice(4)};t.default=i,e.exports=t.default},73:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-snackbar",s.default),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(203),s=i(r),a=n(172),u=i(a);e.exports=t.default},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(239),o=(function(e){return e&&e.__esModule?e:{default:e}})(i),r=new o.default({data:function(){return{current:null}}});t.default=r,e.exports=t.default}})}));