<template>
  <container title="alert">
    <section style="margin-bottom:10px;">
      <lemon-button @click="handleClick">
        手动打开
      </lemon-button>
      <lemon-button @click="handleClose">
        手动关闭
      </lemon-button>
    </section>

    <lemon-alert
      ref="first"
      :title="title"
      :description="description"
      type="success"
    ></lemon-alert>
    <lemon-alert close-text="知道了" :title="title"></lemon-alert>
    <lemon-alert :closable="false" :center="true" :title="title" type="warning"></lemon-alert>
    <lemon-alert :title="title" effect="dark" type="danger"></lemon-alert>
  </container>
</template>

<script>
import container from './container.vue';
import LemonAlert from '../src/Alert/index.vue';
import LemonButton from '../src/Button/index.vue';

export default {
  components: {
    container,
    LemonAlert,
    LemonButton,
  },
  data() {
    return {
      title: '那些有些人想对我说的话!!!',
      description: '这就是一些描述信息,描述信息哦哦哦哦',
    };
  },
  methods: {
    handleClick() {
      this.$refs.first.open();
    },
    handleClose() {
      this.$refs.first.close();
    },
  },
};
</script>

<style></style>
