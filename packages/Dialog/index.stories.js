import Dialog from './src/index.vue';
import '../../src/styles/index.scss';

export default {
  title: '弹层',
};

export const baseUsage = () => ({
  components: {
    LeDialog: Dialog,
  },
  data() {
    return {
      show: true,
    };
  },
  template: `
    <le-dialog title="提示" :visible.sync="show" :modal="false">
      <template slot="footer">
        123123
      </template>
    </le-dialog>
  `,
});
