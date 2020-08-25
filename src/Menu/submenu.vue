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
  components: {
  },
  props: {
    index: {
      type: String,
    },
  },
  inject: ['menuContext'],
  name: 'submenu',
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
