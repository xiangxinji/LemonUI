<template>
  <div class="lemon-upload"  @click="triggerFileSelect">
    <input type="file" ref="fileEl"  :multiple="multiple" @change="handlerChange" :accept="accept"/>
    <slot ></slot>
  </div>
</template>

<script>

import { toArray, noop } from '@/helpers/functions';
import { isDef } from '@/helpers/validate';
import ajax from './ajax';

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
    accept: String,
    data: Object,
    headers: { type: Object, default() { return {}; } },
    withCredentials: { type: Boolean, default: false },
    size: { type: Number, default: 0 },
    limit: { type: Number },
    onStart: {
      type: Function,
      default: noop,
    },
    onProgress: { type: Function, default: noop },
    onError: { type: Function, default: noop },
    onSuccess: { type: Function, default: noop },
    onExceed: { type: Function, default: noop },
    beforeUpload: { type: Function, default: noop },
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
      if (isDef(this.limit) && this.size + files.length > this.limit) {
        this.onExceed(files);
        return;
      }
      this.uploadFiles(files);
    },
    uploadFiles(files) {
      const postFiles = toArray(files);
      postFiles.forEach((rawFile) => {
        this.onStart(rawFile);
        if (this.autoUpload) {
          this.upload(rawFile);
        }
      });
    },
    upload(rawFile) {
      this.fileElement.value = '';
      this.beforeUpload();
      const options = {
        action: this.action,
        withCredentials: this.withCredentials,
        data: this.data,
        headers: this.headers,
        filename: rawFile.name,
        file: rawFile,
        onProgress: (e) => this.onProgress(e, rawFile),
        onError: (e) => this.onError(e, rawFile),
        onSuccess: (e) => this.onSuccess(e, rawFile),
      };
      ajax(options);
    },
  },
};
</script>
