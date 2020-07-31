<template>
  <div :class="wrapperClass" @click="handleClickEvent">
    <input type="checkbox" :name="name" />
    <span class="lemon-switch__core" :style="coreStyles"></span>
  </div>
</template>

<script>
export default {
  props: {
    // 激活与未激活颜色
    activeColor: {
      type: String,
      default: 'rgb(19, 206, 102)',
    },
    inactiveColor: {
      type: String,
      default: 'rgb(255, 73, 73)',
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
      this.$emit('change', !this.value);
    },
  },
  computed: {
    wrapperClass() {
      return {
        'lemon-switch': true,
        'is-checked': this.value,
      };
    },
    coreStyles() {
      return {
        width: `${this.width}px`,
        backgroundColor: this.value ? this.activeColor : this.inactiveColor,
      };
    },
  },
};
</script>

<style></style>
