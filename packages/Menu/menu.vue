<template>
  <ul :class="wrapperClass">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  componentName: 'le.menu',
  provide() {
    return {
      menuContext: this,
    };
  },
  props: {
    // 模式 , 水平或者垂直
    model: {
      type: String,
      default: 'vertical',
      validator(v) {
        return v === 'vertical' || v === 'horizontal';
      },
    },
    defaultIndex: {
      type: String,
    },
  },
  created() {
    if (this.defaultIndex) {
      this.index = this.defaultIndex;
    }
  },
  data() {
    return {
      currentIndex: '1',
    };
  },
  computed: {
    wrapperClass() {
      return {
        'lemon-menu': true,
        [`menu-mode-${this.model}`]: true,
      };
    },
  },
};
</script>

<style></style>
