<template>
  <div :class="wrapperClass" @click="handleClickEvent">
    <input type="checkbox" :name="name" :disabled="disabled" />
    <span class="lemon-switch__core" :style="coreStyles"></span>
  </div>
</template>

<script>
export default {
  name: 'LeSwitch',
  componentName: 'le.switch',
  props: {
    // 激活与未激活颜色
    activeColor: {
      type: String,
      default: '#409eff',
    },
    inactiveColor: {
      type: String,
      default: '#dcdfe6',
    },
    // 长度
    width: {
      type: Number,
      default: 40,
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 激活的值 , 关闭的值
    activeValue: {
      default: true,
    },
    inactiveValue: {
      default: false,
    },
    name: {
      type: String,
    },
    // 值
    value: {
      type: Boolean,
      required: true,
    },
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  methods: {
    handleClickEvent() {
      if (this.disabled) {
        return;
      }
      const v = this.value === this.activeValue ? this.inactiveValue : this.activeValue;
      this.$emit('change', v);
    },
  },
  computed: {
    wrapperClass() {
      return {
        'lemon-switch': true,
        'is-checked': this.value === this.activeValue,
        disabled: this.disabled,
      };
    },
    coreStyles() {
      return {
        width: `${this.width}px`,
        backgroundColor: this.value === this.activeValue ? this.activeColor : this.inactiveColor,
      };
    },
  },
};
</script>
