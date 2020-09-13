import Transition from './src/index.vue';

Transition.install = function install(Vue) {
  Vue.component(Transition.name, Transition);
};
export default Transition;
