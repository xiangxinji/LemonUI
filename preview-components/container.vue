<template>
  <div class="preview-block">
      <h2>{{ title }} </h2>
      <hr>
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>
