<template>
  <div :class="wrapperClass" :style="wrapperStyle">
    <div class="close" @click="handleClose">
      <le-icon icon="times" color="#ccc" v-if="showClose"></le-icon>
    </div>
      <div class="title" v-if="title">
        {{ title }}
      </div>
      <div class="message-panel" v-html="message">
      </div>
  </div>
</template>

<script>
import Icon from '../../Icon';
import NotificationManager from './notification';

export default {
  name: 'LeNotification',
  componentName: 'le.notification',
  components: {
    LeIcon: Icon,
  },
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    timeout: {
      type: Number,
      default: 8000,
    },
    title: String,
    message: String,
    showClose: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      zIndex: 0,
      notificationManager: null,
      top: 0,
      opacity: 1,
    };
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.handleClose();
      }, this.timeout);
    }
  },
  computed: {
    wrapperStyle() {
      if (this.notificationManager === null) return {};
      return {
        top: `${this.top}px`,
        zIndex: this.notificationManager.index,
        opacity: this.opacity,
        right: '10px',
      };
    },
    wrapperClass() {
      return {
        'lemon-notification': true,
        [`align-${this.align}`]: true,
      };
    },
  },
  methods: {
    handleClose() {
      this.opacity = 0;
      NotificationManager.remove(this);
      setTimeout(() => {
        this.$el.remove();
        this.$destroy();
      }, 300);
    },
  },
};
</script>
