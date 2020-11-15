<template>
  <div class="lemon-scrollbar" :style="wrapperStyle" @mouseover="handleMouseIn" @mouseleave="handleMouseOut">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LeScrollbar',
  data() {
    return {
      mouseIn: false,
    };
  },
  methods: {
    handleMouseIn() {
      this.mouseIn = true;
    },
    handleMouseOut() {
      this.mouseIn = false;
    },
  },
  computed: {
    wrapperStyle() {
      return { height: '200px', overflow: this.mouseIn ? 'scroll' : 'hidden' };
    },
  },
};
</script>
