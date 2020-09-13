<template>
    <li :class="wrapperClass">
        <div class="submenu-title">
            <slot name="title"></slot>
        </div>
        <ul class="submenu-container">
            <slot></slot>
        </ul>
    </li>
</template>

<script>
export default {
  name: 'LeSubMenu',
  componentName: 'le.submenu',
  components: {
  },
  props: {
    index: {
      type: String,
    },
  },
  inject: ['menuContext'],
  computed: {
    wrapperClass() {
      return {
        'lemon-submenu': true,
      };
    },
  },
  methods: {
    changeCurrentIndex() {
      this.menuContext.currentIndex = this.index;
    },
  },
};
</script>
