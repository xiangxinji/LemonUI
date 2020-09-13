import Switch from './src/index.vue';

Switch.install = function install(Vue) {
  Vue.component(Switch.name, Switch);
};
export default Switch;
