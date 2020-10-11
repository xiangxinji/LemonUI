import Vue from 'vue';
import Notic from './index';
import '../../src/styles/index.scss';

Vue.use(Notic);

export default {
  title: '通知',
};

export const baseUsage = () => ({
  components: {
  },
  mounted() {

  },
  methods: {
    addNotice() {
      this.$notice();
    },
  },
  template: `
        <button @click="addNotice"> add notice </button>
    `,
});

export const autoClose = () => ({
  components: {
  },
  mounted() {

  },
  methods: {
    addNotice() {
      this.$notice({ autoClose: false });
    },
    addNotice1() {
      this.$notice({ timeout: 1000  });
    },
  },
  template: `
       <div>
       <button @click="addNotice" > add notice , autoclose = false </button>
       <button @click="addNotice1" > add notice , timout = 1000 </button>
       </div>
    `,
});
