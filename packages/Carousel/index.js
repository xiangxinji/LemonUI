import Carousel from './src/index.vue';

Carousel.install = function install(Vue) {
  Vue.component(Carousel.name, Carousel);
};

export default Carousel;
