<template>
  <div :class="wrappperClass">
    <ul :style="{ height , transform : `translateX(${ moveSize }px)`}">
      <slot></slot>
    </ul>
    <button class="btn-pre" @click="handleChangeCurrent(current - 1)"></button>
    <button class="btn-next" @click="handleChangeCurrent(current + 1)"></button>
  </div>
</template>

<script>

export default {
  name: 'LeCarousel',
  componentName: 'le.carousel',
  components: {
  },
  props: {
    height: {
      type: String,
      default: '150px',
    },
    interval: {
      type: Number,
      default: 3000,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(v) {
        return v === 'horizontal' || v === 'vertical';
      },
    },
  },
  provide() {
    return {
      carouselIns: this,
    };
  },
  data() {
    return {
      current: 0,
      moveSize: 0,
      itemInstances: [],
      panelSize: {
        width: 0,
        height: 0,
      },
    };
  },
  computed: {
    itemsSize() {
      return this.itemInstances.length;
    },
    wrappperClass() {
      return {
        'le-carousel': true,
        vertical: this.direction === 'vertical',
      };
    },
  },
  created() {
    this.$on('add-children', (vm) => {
      this.itemInstances.push(vm);
    });

    this.$on('remove-children', (vm) => {
      const i = this.itemInstances.indexOf(vm);
      if (i !== -1) this.itemInstances.splice(i, 1);
    });
  },

  mounted() {

  },

  methods: {
    handleChangeCurrent(i) {
      if (i !== 0 && !(i)) {
        i = 0;
      }
      if (i < 0) {
        i = this.itemsSize - 1;
      } else if (i > this.itemsSize - 1) {
        i = 0;
      }
      this.current = i;
      this.getPanelSize();
      this.moveSize = 0 - (this.current * this.panelSize.width);
      console.log(this.moveSize);
    },

    getPanelSize() {
      const { width, height } = window.getComputedStyle(this.$el);
      this.panelSize = {
        width: width.replace('px', ''),
        height: height.replace('px', ''),
      };
    },
  },
};
</script>
