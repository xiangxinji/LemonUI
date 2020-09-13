import MenuItem from '../Menu/src/menu-item.vue';

MenuItem.install = function install(Vue) {
  Vue.component(MenuItem.name, MenuItem);
};

export default MenuItem;
