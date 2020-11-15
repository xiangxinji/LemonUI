import Scrollbar from './src/index.vue';

Scrollbar.install = function (Vue) {
  Vue.component(Scrollbar.name, Scrollbar);
};
export default Scrollbar;
