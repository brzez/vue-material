import mdInkRipple from './mdInkRipple.vue';

export default function install(Vue) {
  Vue.component('md-ink-ripple', window.mdInkRipple || mdInkRipple);
}
