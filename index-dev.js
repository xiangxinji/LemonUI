import Vue from 'vue';
import './src/styles/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';

library.add(fas);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
