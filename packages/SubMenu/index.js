import SubMenu from '../Menu/src/submenu.vue';

SubMenu.install = function install(Vue) {
  Vue.component(SubMenu.name, SubMenu);
};
export default SubMenu;
