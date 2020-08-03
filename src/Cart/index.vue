<template functional>
  <div :class="{ 'lemon-cart': true, ['shadow-' + shadow]: true }">
    <div class="title-wrap">
      <slot name="title"> {{ header }} </slot>
    </div>
    <div class="content-wrap" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
    },
    bodyStyle: {
      type: Object,
    },
    shadow: {
      type: String,
      default: 'always',
      validator(v) {
        const arr = ['always', 'hover', 'never'];
        return arr.includes(v);
      },
    },
  },
};
</script>

<style></style>
