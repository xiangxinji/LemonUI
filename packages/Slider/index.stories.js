import Slider from './src/index.vue';
import '../../src/styles/index.scss';

export default {
  title: '滑动',
};

export const baseUasge = () => ({
  components: {
    LeSlider: Slider,
  },
  data() {
    return {
      value: 1,
    };
  },
  template: `
   <div style="padding:20px;">
    <le-slider v-model="value" :min="400" :step="5" :max="500"></le-slider>
   </div>
  `,
});
