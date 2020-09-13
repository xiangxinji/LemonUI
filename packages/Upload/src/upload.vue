<template>
  <div class="lemon-upload"  @click="triggerFileSelect">
    <input type="file" ref="fileEl"  :multiple="multiple" @change="handlerChange"/>
    <slot ></slot>
  </div>
</template>

<script>

import { toArray, noop } from '@/helpers/functions';

export default {
  inject: ['uploader'],
  computed: {
    fileElement() {
      return this.$refs.fileEl;
    },
  },
  props: {
    action: {
      type: String,
      reuired: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    autoUpload: {
      type: Boolean,
      default: true,
    },
    onStart: {
      type: Function,
      default: noop,
    },
  },
  mounted() {

  },
  methods: {
    triggerFileSelect() {
      this.fileElement.click();
    },
    handlerChange(e) {
      const { files } = e.target;
      if (!files) return;
      this.uploadFiles(files);
    },
    uploadFiles(files) {
      const postFiles = toArray(files);
      postFiles.forEach((rawFile) => {
        this.onStart(rawFile);
        if (this.autoUpload) {
          // 上传
          console.log('上传中 , 未完成');
          this.upload();
        }
      });
    },
    upload(rawFile) {
      this.fileElement.value = '';
    },
  },
};
</script>
