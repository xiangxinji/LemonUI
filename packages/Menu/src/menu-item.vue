<template>
    <li :class="wrapperClass" @click="changeCurrentIndex" :style="[paddingStyle]">
        <slot></slot>
    </li>
</template>

<script>

import MenuMixin from './menu-mixin';

export default {
  name: 'LeMenuItem',
  componentName: 'le.menu.item',
  mixins: [
    MenuMixin,
  ],
  props: {
    index: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeCurrentIndex() {
      if (this.disabled) return;
      if (this.menuContext) {
        this.menuContext.currentIndex = this.index;
      }
    },
  },
  computed: {
    wrapperClass() {
      const classNames = {
        'lemon-menu-item': true,
        disabled: this.disabled,
      };
      if (this.menuContext) {
        classNames.active = this.menuContext.currentIndex === this.index;
      }
      return classNames;
    },
  },

  mounted() {
    console.log(this.menuContext);
  },
};
</script>

<style></style>
