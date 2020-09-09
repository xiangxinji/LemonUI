import './styles/index.scss';

// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// customer components ...
import Link from '../packages/Link/index.vue';
import Button from '../packages/Button/index.vue';
import Icon from '../packages/Icon/index.vue';
import Switch from '../packages/Switch/index.vue';
import Alert from '../packages/Alert/index.vue';

library.add(fas);

const components = {
  Link,
  Button,
  Icon,
  Switch,
  Alert,
};

export default {
  install(Vue) {
    Object.keys(components).forEach((key) => {
      Vue.component(`le-${key.toLowerCase()}`, components[key]);
    });
  },
};
