import Progress from './src';
import Button from '../Button/src/index.vue';
import '../../src/styles/index.scss';

export default {
  title: '进度条',
};

export const baseUsage = () => ({
  components: {
    LeProgress: Progress,
    LeButton: Button,
  },
  data() {
    return {
      d: 30,
    };
  },
  template: `
   <div>
     <le-button size="small" @click="d += 10">加一点</le-button>
     <le-button size="small" @click="d -= 10">减一点</le-button>
     <le-progress :percentage="d"></le-progress>
     <le-progress :percentage="d" theme="danger"></le-progress>
     <le-progress :percentage="d" theme="warning"></le-progress>
     <le-progress :percentage="d" theme="success"></le-progress>
     <le-progress :percentage="d" theme="info"></le-progress>
     <le-progress :percentage="d" theme="light"></le-progress>
     <le-progress :percentage="d" theme="dark"></le-progress>
   </div>
  `,
});
