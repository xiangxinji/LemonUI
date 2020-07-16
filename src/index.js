import "./styles/index.scss";

import Link from "./Link/index.vue";
import Button from "./Button/index.vue";

const components = {
  Link,
  Button,
};
export default {
  install(Vue) {
    Object.keys(components).forEach(function(key) {
      Vue.component("si-" + key.toLowerCase(), components[key]);
    });
  },
};
