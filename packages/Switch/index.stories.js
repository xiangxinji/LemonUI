import LeSwitch from './src/index.vue';

import '../../src/styles/index.scss';

export default {
  title: '开关',
};

const render = (template) => ({
  components: {
    LeSwitch,
  },
  data() {
    return {
      value: false,
      textValue: '张三',
    };
  },
  template: `
    <div style="padding:16px 8px;">
      ${template}
    </div>
  `,
});

export const baseUsage = () => render(`
   <LeSwitch v-model="value"></LeSwitch>
`);

export const customerColor = () => render(`
    <LeSwitch activeColor="red" inactiveColor="skyblue" v-model="value">
    </LeSwitch>
`);

export const width = () => render(`
  <LeSwitch v-model="value" width="300">
  </LeSwitch>
`);

export const disabled = () => render(`
  <LeSwitch v-model="value" :disabled="true">
  </LeSwitch>
`);

export const customerValue = () => render(`
  <LeSwitch v-model="textValue" active-value="张三" inactive-value="李四">
  </LeSwitch>
`);
