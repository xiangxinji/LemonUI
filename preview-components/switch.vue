<template>
  <container title="switch">
      <lemon-switch v-model="case1" />

      <lemon-switch :width="120" v-model="case1" />
  </container>
</template>

<script>
import container from './container.vue';
import LemonSwitch from '../src/Switch/index.vue';

export default {
  components: {
    container,
    LemonSwitch,
  },
  data() {
    return {
      case1: true,
    };
  },
};
</script>

<style>

</style>
