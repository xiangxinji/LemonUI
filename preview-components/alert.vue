<template>
  <container title="alert">
      <lemon-alert :title="title" type="success"></lemon-alert>
      <lemon-alert :title="title"  ></lemon-alert>
      <lemon-alert :title="title" type="warning"></lemon-alert>
      <lemon-alert :title="title" effect="dark" type="danger"></lemon-alert>
  </container>
</template>

<script>
import container from './container.vue';
import LemonAlert from '../src/Alert/index.vue';

export default {
  components: {
    container,
    LemonAlert,
  },
  data() {
    return {
      title: '那些有些人想对我说的话!!!',
      description: '这就是一些描述信息,描述信息哦哦哦哦',
    };
  },
};
</script>

<style></style>
