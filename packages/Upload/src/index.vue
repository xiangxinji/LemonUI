<script>
import { noop, toArray } from '@/helpers/functions';
import { isDef } from '@/helpers/validate';
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
    },
    handleProgress(e, rawFile) {
      const file = this.getFile(rawFile.uid);
      if (isDef(file)) {
        file.percentage = e.percent;
        this.onProgress(e, rawFile, this.uploadFiles);
      }
    },
    handleError(e, rawFile) {
      const file = this.getFile(rawFile.uid);
      if (isDef(file)) {
        file.status = 'error';
      }
      this.onError(e, rawFile, this.uploadFiles);
    },
    handleSuccess(e, rawFile) {
      const file = this.getFile(rawFile.uid);
      if (isDef(file)) {
        file.status = 'success';
      }
      this.onSuccess(e, rawFile, this.uploadFiles);
    },
    handleExceed(files) {
      this.onExceed(files, this.uploadFiles);
    },
    getFile(uid) {
      let r = null;
      this.uploadFiles.forEach((item) => {
        if (uid === item.uid) r = item;
      });
      return r;
    },

    submit() {
      if (this.$refs.uploader && this.uploadFiles.length > 0) {
        this.uploadFiles.forEach((item) => {
          this.$refs.uploader.upload(item.raw);
        });
      }
    },
  },
  render() {
    const uploadData = {
      props: {
        action: this.action,
        multiple: this.multiple,
        autoUpload: this.autoUpload,
        accept: this.accept,
        data: this.data,
        headers: this.headers,
        withCredentials: this.withCredentials,
        beforeUpload: this.beforeUpload,
        size: this.uploadFiles.length,
        limit: this.limit,
        'on-start': this.handlerStart,
        'on-progress': this.handleProgress,
        'on-error': this.handleError,
        'on-success': this.handleSuccess,
        'on-exceed': this.handleExceed,
      },
    };
    const trigger = this.$slots.trigger || this.$slots.default;
    const uploadComponent = <upload ref="uploader" { ...uploadData } >{trigger}</upload>;
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
