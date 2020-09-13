import LeSwitch from './src/index.vue';

import { renderByTemplate } from '../../utils/storybook';
import '../../src/styles/index.scss';

export default {
  title: '开关',
};

const render = renderByTemplate('LeSwitch', LeSwitch);

export const using = () => ({
  components: {
    LeSwitch,
  },
  data() {
    return {
      flag: true,
    };
  },
  template: `
            <div style="padding:16px 8px;">
                <LeSwitch v-model="flag"></LeSwitch>
            </div>
        `,
});
