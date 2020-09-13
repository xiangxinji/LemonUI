// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icon from './src/index.vue';

// add icon lib
library.add(fas);

Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon);
};
export default Icon;
