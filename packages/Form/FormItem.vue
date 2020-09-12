<template>
  <div :class="wrapperClasses">
    <div
      :class="{ 'lemon-formitem__label': true }"
      :style="{ width: labelWidthExt }"
    >
      {{ label }}：
    </div>
    <div class="lemon-formitem__content">
      <slot></slot>
    </div>
    {{ errorMessage }} - {{ validateState}}
  </div>
</template>

<script>
import {
  isDef, isFunc, isObj, isNotDef, isError,
} from '@/helpers/validate';
import Emitter from '@/mixins/emitter';
import syncValidate from './syncValidate.js';

export default {
  componentName: 'le.form.item',
  inject: ['form'],
  mixins: [Emitter],
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
      type: [Object, Array],
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
      return (
        this.labelWidth || (this.formIns && this.formIns.labelWidth) || '80px'
      );
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
  mounted() {
    this.dispatch('le.form', 'add.field', [this]);
  },
  beforeDestroy() {
    this.dispatch('le.form', 'remove.field', [this]);
  },
  data() {
    return {
      validateState: 'inited',
      errorMessage: '',
      asynValidating: false,
    };
  },
  methods: {
    // todo 允许被公开调用的validate 方法
    validate() {
      this.validateState = 'validating';
      return this.validateByNotTrigger();
    },
    // todo 校验每个规则 (需要触发条件)
    validateByTrigger(trigger) {
      this.validateState = 'validating';
      const rules = this.filterTriggerRules(trigger);
      this.rulesIterator(rules);
    },
    // todo 不匹配 trigger 字段
    validateByNotTrigger() {
      const rules = this.filterTriggerRules();
      return this.rulesIterator(rules);
    },
    /**
     * 根据这个trigger 过滤 rules
     */
    filterTriggerRules(trigger) {
      if (isNotDef(this.prop)) {
        return [];
      }
      const rules = this.getRules();
      return rules.filter((rule) => (isDef(trigger) ? rule.trigger === trigger : true));
    },

    rulesIterator(rules) {
      // ! 将所有的异步防范进行抽离, 和同步的进行区分
      const validators = [];
      const syncRules = [];
      rules.forEach((r) => {
        if (isFunc(r.validator)) validators.push(r);
        else syncRules.push(r);
      });
      // 优先处理同步规则
      return new Promise((validateSuccess, validatFail) => {
        let result = null;
        for (let i = 0; i < syncRules.length; i++) {
          const rule = syncRules[i];
          result = syncValidate(rule, this.form.model[this.prop]);
          if (isDef(result)) {
            // ! 如果有一条同步规则不符合 , 直接reject
            this.setValidateContext('error', result.message);
            return validatFail();
          }
        }
        // ! 如果rules中有异步方法, 进行一一调用, 只有用户使用 callback 并且没有 Error 传入
        // ! Promise 将进入 resolve , 否则进行 reject
        if (this.asynValidating) {
          const all = validators.map((rule) => new Promise((resolve, reject) => {
            rule.validator.call(null, rule, this.form.model[this.prop], (error) => {
              if (isDef(error) && isError(error)) {
                this.setValidateContext('error', error.message);
                return reject();
              }
              this.setValidateContext('success', '');
              return resolve;
            });
          }));
          validateSuccess(Promise.all(all));
        } else {
          validateSuccess();
        }
        return null;
      });
    },
    // todo set validate state and error message
    setValidateContext(state, message) {
      this.validateState = state;
      this.errorMessage = message;
    },
    /**
     * 获取这一个规则列表 , 最终都会转换成数组
     * 以 form-item 组件的 rules 优先
     */
    getRules() {
      let r = [];
      if (isDef(this.rules)) {
        r = this.rules;
      } else if (isDef(this.form) && isDef(this.form.rules)) {
        r = this.form.rules[this.prop];
      }
      if (isObj(r)) {
        r = [r];
      }
      // 将异步函数进行滞后, 这样可以确保在异步函数执行之前,同步校验必须先全部执行成功
      r.sort((a) => (isFunc(a.validator) ? 1 : -1));
      // 其中包含 异步函数
      this.asynValidating = r.some((rule) => isFunc(rule.validator));
      console.log(r);
      return r;
    },

    initValidateState() {
      this.validateState = 'inited';
      this.errorMessage = '';
      this.asynValidating = false;
    },
  },
};
</script>
