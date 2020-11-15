<template>
  <div :class="wrapperClass" @click="handleClick">
    <slot></slot>
    <div class="popper-wrapper" ref="popperRef" :style="popperStyle" v-show="active">
      <div class="popper-panel">
        <div class="title" v-if="title">
          <slot name="title"></slot>
        </div>
        <div class="content"></div>
      </div>
      <div class="popper-arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LePopover',
  props: {
    title: String,
    placement: {
      type: String,
      default: 'top',
      validator(v) {
        const arr = ['top', 'left', 'right', 'bottom'];
        return arr.includes(v);
      },
    },
    width: {
      type: Number,
      default: 200,
    },
    offset: {
      type: Number,
      default: 10,
    },
    trigger: {
      type: String,
      default: 'click',
      validator(v) {
        const arr = ['click', 'hover', 'focus', 'manual'];
        return arr.includes(v);
      },
    },
  },
  data() {
    return {
      active: false,
      rect: null,
      innerSize: 8,
    };
  },
  methods: {
    handleTriggerActive() {
      this.rect = this.$el.getBoundingClientRect();
      console.log(this.rect);
      this.active = true;
    },
    handleClick() {
      if (this.trigger === 'click') {
        this.handleTriggerActive();
      }
    },
  },
  computed: {
    popperEl() {
      return this.$refs.popperRef;
    },
    popperStyle() {
      const s = this.popperPosition;
      return {
        ...s,
        width: `${this.width}px`,
      };
    },
    wrapperClass() {
      return {
        'le-popover': true,
        [`position-${this.placement}`]: true,
      };
    },
    popperPosition() {
      return {};
    },
  },
};
</script>
