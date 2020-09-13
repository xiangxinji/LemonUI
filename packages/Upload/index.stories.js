import LeUpload from './src/index.vue';
import LeButton from '../Button/src/index.vue';
import '../../src/styles/index.scss';

export default {
  title: '上传',
};

export const baseUsage = () => ({
  components: {
    LeUpload,
    LeButton,
  },
  data() {
    return {
      uploadAction: 'https://www.baidu.com?upload=',
    };
  },
  template: `
      <le-upload :action="uploadAction">
        <LeButton size="small" type="primary" slot="trigger" >点击上传</LeButton>
        <LeButton size="small" type="success"> 取消上传</LeButton>
      </le-upload>
    `,
});
