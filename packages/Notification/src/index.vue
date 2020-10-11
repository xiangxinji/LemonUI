<template>
  <div :class="wrapperClass" :style="wrapperStyle">
    notification {{ top }}
    <button @click="handleClose"> close</button>
  </div>
</template>

<script>
import NotificationManager from './notification';

export default {
  name: 'LeNotification',
  componentName: 'le.notification',
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    timeout: {
      type: Number,
      default: 3000,
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
    console.log(this);
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
