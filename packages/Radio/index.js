import Radio from './src/index';
import RadioGroup from '../RadioGroup';

Radio.install = function install(Vue) {
  Vue.component(Radio.name, Radio);
  RadioGroup.install(Vue);
};

export default Radio;
