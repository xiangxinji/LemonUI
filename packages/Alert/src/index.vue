<template>
  <div :class="wrapperClass" :style="{ opacity: show ? 1 : 0 }">
    <div class="title-box">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="description-box">
      <slot>
        {{ description }}
      </slot>
    </div>

    <div class="close-wrapper" v-if="closable" @click="show = false">
      <span v-if="closeText">
        {{ closeText }}
      </span>
      <lemon-icon v-else icon="times" :size="14" color="#ccc"></lemon-icon>
    </div>
  </div>
</template>

<script>
import LemonIcon from '../../Icon/src/index.vue';

export default {
  name: 'LeAlert',
  componentName: 'le.alert',
  components: {
    LemonIcon,
  },
  watch: {
    show(nv) {
      if (!nv) {
        setTimeout(() => {
          this.$el.style.display = 'none';
        }, 400);
      } else {
        this.$el.style.display = 'block';
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
      default: false,
    },
    // 主题
    effect: {
      type: String,
      default: 'light',
      validator(v) {
        return v === 'light' || v === 'dark';
      },
    },
    // 关闭的文字
    closeText: {
      type: String,
    },
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
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
