<template>
  <div :class="wrapperClass" :style="{'opacity': show ? 1 : 0 }">
    <div class="title-box">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="description-box">
      <slot>
        {{ description }}
      </slot>
    </div>

    <div class="close-wrapper" v-if="closable" @click="show = false">
      <lemon-icon icon="times" :size="14" color="#ccc"></lemon-icon>
    </div>
  </div>
</template>

<script>
import LemonIcon from '../Icon/index.vue';

export default {
  components: {
    LemonIcon,
  },
  watch: {
    show(nv) {
      if (!nv) {
        setTimeout(() => {
          this.$el.style.display = 'none';
        }, 400);
      }
    },
  },
  data() {
    return {
      show: true,
    };
  },
  props: {
    // 标题
    title: {
      type: String,
    },
    // 类型
    type: {
      type: String,
      default: 'info',
      validator(v) {
        const arr = ['success', 'warning', 'info', 'danger'];
        return arr.includes(v);
      },
    },
    // 描述
    description: {
      type: String,
    },
    // 是否可以关闭
    closable: {
      type: Boolean,
      default: true,
    },
    // 是否居中
    center: {
      type: Boolean,
      default: true,
    },
    // 主题
    effect: {
      type: String,
      default: 'light',
      validator(v) {
        return v === 'light' || v === 'dark';
      },
    },
  },
  computed: {
    wrapperClass() {
      return {
        'lemon-alert': true,
        [`type__${this.type}`]: true,
        align__center: this.center,
        [`effect__${this.effect}`]: true,
      };
    },
  },
};
</script>

<style></style>
