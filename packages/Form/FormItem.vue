<template>
  <div :class="wrapperClasses">
    <div :class="{'lemon-formitem__label' : true  }" :style="{width:labelWidthExt}">
      {{ label }}：
    </div>
    <div class="lemon-formitem__content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  componentName: 'le.form.item',
  inject: ['formIns'],
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
    labelWidth: {
      type: String,
    },
    rules: {
      type: Object,
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      validator(v) {
        const sizes = ['medium', 'small', 'mini'];
        return sizes.includes(v);
      },
    },
  },
  computed: {
    // EXT 后缀表示 是继承了 form 表单的props
    labelWidthExt() {
      return this.labelWidth || (this.formIns && this.formIns.labelWidth) || '80px';
    },
    sizeExt() {
      return this.size || (this.formIns && this.formIns.size) || 'medium';
    },
    inlineExt() {
      return (this.formIns && this.formIns.inline) || false;
    },
    labelPositionExt() {
      return (this.formIns && this.formIns.labelPosition) || 'right';
    },
    wrapperClasses() {
      return {
        'lemon-formitem': true,
        [`lemon-formitem__${this.sizeExt}`]: true,
        inline__model: this.inlineExt,
      };
    },
  },
};
</script>
