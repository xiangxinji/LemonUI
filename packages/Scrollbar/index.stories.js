import LeScrollbar from './src/index.vue';

import '../../src/styles/index.scss';

export default {
  title: '滚动容器',
};

export const baseUsage = () => ({
  components: {
    LeScrollbar,
  },
  template: `
    <le-scrollbar>
      <div style="height:500px;background-color:skyblue;">
        111
      </div>
    </le-scrollbar>
  `,
});
