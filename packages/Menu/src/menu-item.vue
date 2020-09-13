<template>
    <li :class="wrapperClass" @click="changeCurrentIndex">
        <slot></slot>
    </li>
</template>

<script>
export default {
  name: 'LeMenuItem',
  componentName: 'le.menu.item',
  inject: ['menuContext'],
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
