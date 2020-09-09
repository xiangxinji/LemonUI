<template>
<div :class="wrapperClass">
   <div>
       <slot></slot>
       <div style="clear:both;"></div>
   </div>
</div>
</template>

<script>
export default {
  componentName: 'le.form',
  provide() {
    return {
      formIns: this,
    };
  },
  props: {
    model: Object,
    rules: Object,
    inline: {
      type: Boolean,
      default: false,
    },
    labelWidth: {
      type: String,
    },
    labelPosition: {
      type: String,
      default: 'right',
      validator(v) {
        const positions = ['right', 'left', 'top'];
        return positions.includes(v);
      },
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'medium',
      validator(v) {
        const sizes = ['medium', 'small', 'mini'];
        return sizes.includes(v);
      },
    },
  },
  computed: {
    wrapperClass() {
      return {
        'lemon-form': true,
        inline: this.inline,
        [`label-position-${this.labelPosition}`]: true,
      };
    },
  },
};
</script>
