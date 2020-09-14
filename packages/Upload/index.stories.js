import LeUpload from './src/index.vue';
import LeButton from '../Button/src/index.vue';
import '../../src/styles/index.scss';

export default {
  title: '上传',
};

export const 基本使用 = () => ({
  components: {
    LeUpload,
    LeButton,
  },
  data() {
    return {
      uploadAction: 'http://localhost:3000',
      data: {
        color: 'red',
        index: 0,
      },
    };
  },
  template: `
      <le-upload :action="uploadAction">
        <LeButton size="small" type="primary" slot="trigger" >点击上传</LeButton>
      </le-upload>
    `,
});

export const 手动上传 = () => ({
  components: {
    LeUpload,
    LeButton,
  },
  data() {
    return {
      uploadAction: 'http://localhost:3000',
      data: {
        color: 'red',
        index: 0,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.uploader.submit();
    },
  },
  template: `
      <le-upload ref="uploader" :action="uploadAction" :auto-upload="false">
        <LeButton size="small" type="primary" slot="trigger" >点击上传</LeButton>
        <LeButton size="small" type="success" @click="handleSubmit">点我开始</LeButton>
      </le-upload>
    `,
});

export const 文件个数限制 = () => ({
  components: {
    LeUpload,
    LeButton,
  },
  data() {
    return {
      uploadAction: 'http://localhost:3000',
      data: {
        color: 'red',
        index: 0,
      },
    };
  },
  methods: {
    handleOnExceed() {
      alert('你已经超过个数了');
    },
  },
  template: `
    <le-upload ref="uploader" :action="uploadAction" :auto-upload="false" :limit="3" :on-exceed="handleOnExceed">
      <LeButton size="small" type="primary" slot="trigger" >点击上传</LeButton>
    </le-upload>
  `,
});
