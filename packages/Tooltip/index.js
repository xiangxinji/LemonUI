import Tooltip from './src/index.vue';

Tooltip.install = function (Vue) {
  Vue.component(Tooltip.name, Tooltip);
};
export default Tooltip;
