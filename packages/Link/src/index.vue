<template>
  <a :class="wrapperClasses" :href="href">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'LeLink',
  componentName: 'le.link',
  props: {
    // 类型
    type: {
      type: String,
      validator(v) {
        const types = [
          'default',
          'primary',
          'success',
          'warning',
          'danger',
          'info',
        ];
        return types.includes(v);
      },
      default: 'default',
    },
    // 下划线
    underline: {
      type: Boolean,
      default: true,
    },
    // 禁用
    disabeld: {
      type: Boolean,
      default: false,
    },
    // 跳转地址
    href: {
      type: String,
    },
  },

  computed: {
    wrapperClasses() {
      return {
        lemon__link: true,
        'link-underline': this.underline,
        'link-disabeld': true,
        [`link-type-${this.type}`]: true,
      };
    },
  },
};
</script>
