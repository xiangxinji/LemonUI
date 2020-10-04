export default {
  name: 'LeInput',
  componentName: 'le.input',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      required: true,
    },
    maxLength: Number,
    minLength: Number,
    // 是否显示字数统计 , (type text  | textarea ) 有效
    showWordLimit: Boolean,
    placeholder: String,
    showPassword: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      validator(v) {
        const arr = ['medium', 'small', 'mini'];
        return arr.includes(v);
      },
    },
    // 输入框的行数, 只有type = textarea 有效
    rows: {
      type: Number,
      default: 2,
    },
    name: String,
    readonly: Boolean,
    resize: String,
  },
  render() {
    return <div class="lemon-input">
      <div className="lemon-input__wrapper">
        {this.type !== 'textarea' ? this.renderInputTag() : this.renderTextAreaTag()}
      </div>
    </div>;
  },
  methods: {
    handlerInputEvent(e) {
      if (this.disabled) return;
      //  ! 特殊处理 minLength ! 可能不需要
      if (this.minLength && e.target.value >= this.minLength) {
        this.$emit('change', e.target.value);
      }
    },
    renderInputTag() {
      const {
        name, maxLength, minLength, value, type, placeholder, disabled, readonly,
        handlerInputEvent,
      } = this;
      return <input readOnly={readonly} disabled={disabled} placeholder={placeholder} type={type} value={value} name={name}
                    maxLength={maxLength} minLength={minLength} onInput={handlerInputEvent} />;
    },
    clearValue() {
      this.$emit('change', '');
    },
    renderTextAreaTag() {
      const {
        placeholder, name, maxLength, minLength, value, disabled, resize, rows, readonly,
        handlerInputEvent,
      } = this;
      return <textarea readOnly={readonly} rows={rows} resize={resize} disabled={disabled} value={value} name={name} maxLength={maxLength} minLength={minLength}
                       onInput={handlerInputEvent}>{ placeholder }</textarea>;
    },
  },
};
