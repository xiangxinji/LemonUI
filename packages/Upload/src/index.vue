<script>
import { noop, toArray } from '@/helpers/functions';
import upload from './upload.vue';

export default {
  name: 'LeUpload',
  componentName: 'le.upload',
  provide() {
    return {
      uploader: this,
    };
  },
  components: {
    upload,
  },
  props: {
    action: {
      type: String,
      required: true,
    },
    headers: Object,
    multiple: {
      type: Boolean,
      default: false,
    },
    data: Object,
    withCredentials: {
      type: Boolean,
      default: false,
    },
    showFileList: {
      type: Boolean,
      default: true,
    },
    drag: {
      type: Boolean,
      default: false,
    },
    accept: String,
    onPreview: {
      type: Function,
      default: noop,
    },
    onRemove: {
      type: Function,
      default: noop,
    },
    onSuccess: {
      type: Function,
      default: noop,
    },
    onError: {
      type: Function,
      default: noop,
    },
    onProgress: {
      type: Function,
      default: noop,
    },
    onChange: {
      type: Function,
      default: noop,
    },
    onExceed: {
      type: Function,
      default: noop,
    },
    beforeUpload: {
      type: Function,
      default: noop,
    },
    beforeRemove: {
      type: Function,
      default: noop,
    },
    listType: {
      type: String,
      default: 'text',
      validator(v) {
        const arr = ['text', 'picture', 'picture-card'];
        return arr.includes(v);
      },
    },
    autoUpload: {
      type: Boolean,
      default: true,
    },
    fileList: {
      type: Array,
      default() {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
    },
  },
  data() {
    return {
      uploadFiles: [],
      tempIndex: 0,
    };
  },
  methods: {
    /**
     * todo 在上传之前,将数据进行整合和初始化
     * @param rawFile
     */
    handlerStart(rawFile) {
      rawFile.uid = `${Date.now()}-${this.tempIndex++}`;
      const file = {
        status: 'ready',
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile,
      };
      this.uploadFiles.push(file);
      console.log(this.uploadFiles);
    },
  },
  render() {
    const uploadData = {
      props: {
        action: this.action,
        multiple: this.multiple,
        autoUpload: this.autoUpload,
        'on-start': this.handlerStart,
      },
    };
    const trigger = this.$slots.trigger || this.$slots.default;
    const uploadComponent = <upload { ...uploadData } >{trigger}</upload>;
    return (
        <div>
          {
            this.$slots.trigger ? [uploadComponent, this.$slots.default] : uploadComponent
          }
        </div>
    );
  },
};
</script>
