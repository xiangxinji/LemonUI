import "./styles/index.scss";

import Link from "./Link/index.vue";
import Button from "./Button/index.vue";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)


const components = {
  Link,
  Button,
};
export default {
  install(Vue) {
    Object.keys(components).forEach(function(key) {
      Vue.component("le-" + key.toLowerCase(), components[key]);
    });
  },
};
