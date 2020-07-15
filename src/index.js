import "./index.scss";

import Link from "./Link/index.vue";
import Button from "./Button/index.vue";

const components = {
  Link,
  Button,
};
export default {
  install(Vue) {
    Object.keys(components).forEach(function(key) {
      console.log(key, "组件已经进行安装!!!");
      Vue.component("si-" + key.toLowerCase(), components[key]);
    });
  },
};
