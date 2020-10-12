import Vue from 'vue';
import Notic from './index';
import LeButton from '../Button';
import '../../src/styles/index.scss';

Vue.use(Notic);

export default {
  title: '通知',
};

export const baseUsage = () => ({
  components: {
    LeButton,
  },
  methods: {
    addNotice() {
      this.$notice();
    },
  },
  template: `
        <LeButton @click="addNotice"> add notice </LeButton>
    `,
});

export const autoClose = () => ({
  components: {
    LeButton,
  },
  methods: {
    addNotice() {
      this.$notice({ autoClose: false });
    },
    addNotice1() {
      this.$notice({ timeout: 1000 });
    },
  },
  template: `
       <div>
         <LeButton @click="addNotice" > add notice , autoclose = false </LeButton>
         <LeButton @click="addNotice1" > add notice , timout = 1000 </LeButton>
       </div>
    `,
});

export const title = () => ({
  components: {
    LeButton,
  },
  methods: {
    addNotice() {
      this.$notice({ autoClose: false, title: '系统提示' });
      this.$notice({ autoClose: false, title: '系统提示', message: '当前环境并不安全' });
    },
  },
  template: `
       <div>
       <LeButton @click="addNotice" > add notice , title  </LeButton>
       </div>
    `,
});

export const showClose = () => ({
  components: {
    LeButton,
  },
  methods: {
    addNotice() {
      this.$notice({ autoClose: false, title: '系统提示', message: '时间不在于你拥有多少,而在于你怎样使用啊啊啊啊啊啊啊啊啊啊' });
    },
  },
  template: `
       <div>
       <LeButton @click="addNotice" > add notice , title  </LeButton>
       </div>
    `,
});

export const addHtmlTag = () => ({
  components: {
    LeButton,
  },
  methods: {
    addNotice() {
      this.$notice({
        autoClose: false, title: '系统提示系统提示系统提示系统提示系统提示', message: `
        你的控制台好像出现了一点问题,
        <a class="link" href="https://www.baidu.com"> go</a>
      `,
      });
    },
  },
  template: `
       <div>
       <LeButton @click="addNotice" > add notice , title  </LeButton>
       </div>
    `,
});
