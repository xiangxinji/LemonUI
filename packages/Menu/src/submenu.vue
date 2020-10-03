<template>
  <ul class="lemon-submenu">
    <li :class="{'lemon-submenu__title' : true , active : isActive}" @click="changeCurrentIndex" :style="[paddingStyle]">
      <slot name="title">
        {{ title }}
      </slot>
    </li>
    <slot v-show="open"></slot>
  </ul>
</template>

<script>
import MenuMixin from './menu-mixin';

export default {
  name: 'LeSubMenu',
  componentName: 'le.submenu',
  components: {
  },
  mixins: [MenuMixin],
  props: {
    title: String,
    index: {
      type: String,
    },
  },
  computed: {
    isActive() {
      return this.menuContext ? this.menuContext.currentIndex === this.index : false;
    },
  },
  data() {
    return {
      open: true,
    };
  },
  methods: {
    changeCurrentIndex() {
      if (this.menuContext) {
        this.menuContext.currentIndex = this.index;
      }
    },
  },
};
</script>
