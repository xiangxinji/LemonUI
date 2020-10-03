import className from 'classname';
import Emitter from '../../../src/mixins/emitter';

export default {
  name: 'LeRadio',
  componentName: 'le.radio',
  inject: ['radioIns'],
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Boolean, Number],
    },
    label: {
      type: [String, Boolean, Number],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    size: {
      type: String,
      validator(v) {
        const arr = ['medium', 'small', 'mini'];
        return arr.includes(v);
      },
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    compValue() {
      if (!this.radioIns) {
        return false;
      }
      return this.radioIns.value === (this.value || this.label);
    },
  },
  render() {
    const classes = className({
      'lemon-radio': true,
      disabled: this.disabled,
      active: this.compValue,
    });
    return <div class={classes} onClick={this.handleChangeValue}>
         <div style={{ display: 'flex', 'align-items': 'center' }}>
           <span class='lemon-radio__core'></span>
           <span class="lemon-radio__label">{this.label}</span>
         </div>
    </div>;
  },
  methods: {
    handleChangeValue() {
      this.dispatch('le.radio.group', 'change-value', [this.value || this.label]);
    },
  },
};
