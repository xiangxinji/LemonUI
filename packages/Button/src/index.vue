<template>
  <button @click="$emit('click')" :class="wrapperClasses" v-bind="$attrs" :type="nativeType">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'LeButton',
  componentName: 'le.button',
  props: {
    // 尺寸
    size: {
      type: String,
      validator(val) {
        const sizes = ['medium', 'small', 'mini'];
        return sizes.includes(val);
      },
      default: 'medium',
    },
    // 类型
    type: {
      type: String,
      validator(val) {
        const types = [
          'default',
          'primary',
          'success',
          'warning',
          'danger',
          'info',
        ];
        return types.includes(val);
      },
      default: 'default',
    },
    // 是否变成圆形按钮
    circle: {
      type: Boolean,
      default: false,
    },
    // 是否圆角
    round: {
      type: Boolean,
      default: false,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 原生按钮类型
    nativeType: {
      type: String,
      validator(val) {
        const types = ['button', 'submit', 'reset'];
        return types.includes(val);
      },
    },
  },

  computed: {
    wrapperClasses() {
      return {
        lemon__button: true,
        [`button-type-${this.type}`]: true,
        [`button-size-${this.size}`]: true,
        'button-disabled': this.disabled,
        'button-round': this.round,
        'button-circle': this.circle,
      };
    },
  },

  data() {
    return {
      clicked: false,
    };
  },

  methods: {},
};
</script>

<style>
</style>
