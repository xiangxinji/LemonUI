import CarouselItem from '../Carousel/src/item.vue';

CarouselItem.install = function install(Vue) {
  Vue.component(CarouselItem.name, CarouselItem);
};
export default CarouselItem;
