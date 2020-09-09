<template>
  <div class="lemon-transition">
    <transition :name="name">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  componentName: 'le.transition',
  props: {
    name: {
      type: String,
      validator(v) {
        const names = [
          'fade-in-linear',
          'fade-in',
          'zoom-in-center',
          'zoom-in-top',
          'zoom-in-bottom',
        ];
        return names.includes(v);
      },
    },
  },
  computed: {},
};
</script>
