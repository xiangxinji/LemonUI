<template>
  <div class="lemon-radio__group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LeRadioGroup',
  componentName: 'le.radio.group',
  provide() {
    return {
      radioIns: this,
    };
  },
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    value: {
      type: [String, Boolean, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator(v) {
        const arr = ['medium', 'small', 'mini'];
        return arr.includes(v);
      },
    },
  },
  created() {
    this.$on('change-value', (value) => {
      this.$emit('change', value);
    });
  },
};
</script>
