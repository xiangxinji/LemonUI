<template>
<transition name="dialog-fade">
  <div :class="{'lemon-dialog__wrapper' : true , 'disable-modal' : !modal }" v-show="visible">
    <div class="lemon-dialog" :style="dialogStyle">
      <div class="le-dialog__header">
        <slot>
          <div class="le-dialog__title">{{ title }}</div>
        </slot>
        <div class="le-header__icon" @click="handleClickCloseIcon">
          <icon icon="times"></icon>
        </div>
      </div>
      <div class="le-dialog__body">
        <slot></slot>
      </div>
      <div class="le-dialog__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import { noop } from '@/helpers/functions';
import Icon from '../../Icon';

export default {
  name: 'LeDialog',
  componentName: 'le.dialog',
  components: {
    Icon,
  },
  props: {
    visible: { type: Boolean, default: true },
    title: String,
    width: { type: String, default: '50%' },
    fullscreen: { type: Boolean, default: false },
    top: { type: String, default: '15vh' },
    modal: { type: Boolean, default: true },
    lockScroll: { type: Boolean, default: true },
    showClose: { type: Boolean, default: true },
    beforeClose: { type: Function, default: noop },
    destroyOnClose: { type: Boolean, default: false },
  },
  watch: {
    visible(value) {
      if (value) {
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    },
  },
  computed: {
    dialogStyle() {
      if (this.fullscreen) {
        return { width: '100%', margin: '0px', height: '100%' };
      }
      return { width: this.width, marginTop: this.top };
    },
  },
  methods: {
    handleClickCloseIcon() {
      this.$emit('update:visible', false);
    },
  },
};
</script>
