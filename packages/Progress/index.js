import Progress from './src';

Progress.install = function install(Vue) {
  Vue.component(Progress.name, Progress);
};

export default Progress;
