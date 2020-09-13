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
  name: 'LeForm',
  componentName: 'le.form',
  provide() {
    return {
      form: this,
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
  data() {
    return {
      fields: [],
    };
  },
  created() {
    this.$on('add.field', (field) => {
      this.fields.push(field);
    });
    /**
     * 删除form item
     */
    this.$on('remove.field', (field) => {
      // eslint-disable-next-line no-underscore-dangle
      this.fields = this.fields.filter((f) => f._uid !== field._uid);
    });
  },

  /**
   *  methods
   */
  methods: {
    validate() {
      return new Promise((resolve) => {
        resolve(Promise.all(this.fields.map((field) => field.validate && field.validate())));
      });
    },
  },
};
</script>
