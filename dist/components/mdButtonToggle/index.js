/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=415)})({0:function(t,e){t.exports=function(t,e,o,n){var r,d=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,d=t.default);var u="function"==typeof d?d.options:d;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),o&&(u._scopeId=o),n){var c=u.computed||(u.computed={});Object.keys(n).forEach((function(t){var e=n[t];c[t]=function(){return e}}))}return{esModule:r,exports:d,options:u}}},1:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(t){return!(!t||!t.$el||0===t._uid)&&(t.mdTheme||t.mdName?t:this.getClosestThemedParent(t.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var t=this.closestThemedParent.mdTheme;return t||(t=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+t}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent)}},t.exports=e.default},242:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){t.component("md-button-toggle",l.default),t.material.styles.push(c.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var d=o(338),l=n(d),u=o(321),c=n(u);t.exports=e.default},265:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),r=(function(t){return t&&t.__esModule?t:{default:t}})(n),d=void 0;e.default={props:{mdSingle:Boolean},mixins:[r.default],mounted:function(){var t=this;this.$children.forEach((function(e){var o=e.$el;d=function(){t.mdSingle?(t.$children.forEach((function(t){t.$el.classList.remove("md-toggle")})),o.classList.add("md-toggle")):o.classList.toggle("md-toggle")},o&&o.classList.contains("md-button")&&o.addEventListener("click",d)}))},beforeDestroy:function(){this.$children.forEach((function(t){var e=t.$el;e&&e.classList.contains("md-button")&&e.removeEventListener("click",d)}))}},t.exports=e.default},300:function(t,e){},321:function(t,e){t.exports='.THEME_NAME.md-button-toggle .md-button:after{width:1px;position:absolute;top:0;bottom:0;left:0;content:" "}.THEME_NAME.md-button-toggle .md-toggle{color:BACKGROUND-CONTRAST-0.54;background-color:BACKGROUND-CONTRAST-0.26}.THEME_NAME.md-button-toggle .md-toggle:hover:not([disabled]){background-color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-button-toggle .md-toggle+.md-toggle:after{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-button-toggle.md-primary .md-toggle{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME.md-button-toggle.md-primary .md-toggle:hover:not([disabled]){background-color:PRIMARY-COLOR}.THEME_NAME.md-button-toggle.md-primary .md-toggle+.md-toggle:after{background-color:PRIMARY-COLOR-600}.THEME_NAME.md-button-toggle.md-accent .md-toggle{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-button-toggle.md-accent .md-toggle:hover:not([disabled]){background-color:ACCENT-COLOR}.THEME_NAME.md-button-toggle.md-accent .md-toggle+.md-toggle:after{background-color:ACCENT-COLOR-600}.THEME_NAME.md-button-toggle.md-warn .md-toggle{color:WARN-CONTRAST;background-color:WARN-COLOR}.THEME_NAME.md-button-toggle.md-warn .md-toggle:hover:not([disabled]){background-color:WARN-COLOR}.THEME_NAME.md-button-toggle.md-warn .md-toggle+.md-toggle:after{background-color:WARN-COLOR-600}.THEME_NAME.md-button-toggle [disabled]{color:rgba(0,0,0,0.26)}.THEME_NAME.md-button-toggle [disabled].md-toggle{color:BACKGROUND-CONTRAST-0.2;background-color:rgba(0,0,0,0.26)}\n'},338:function(t,e,o){o(300);var n=o(0)(o(265),o(380),null,null);t.exports=n.exports},380:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-button-toggle",class:[t.themeClass]},[t._t("default")],2)},staticRenderFns:[]}},415:function(t,e,o){t.exports=o(242)}})}));