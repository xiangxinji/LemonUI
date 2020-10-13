<template>
  <div class="lemon-slider slider-wrapper">
    <div  ref="track" class="track" id="track" :style="{width : width + 'px'}">
      <div ref="dragBox" class="drop-box"></div>
    </div>
    <br>
    stepGutter = {{ stepGutter }}  index = {{ index }} value = {{ value }}  maxIndex = {{ maxIndex }}
  </div>
</template>

<script>
export default {
  name: 'LeSlider',
  componentName: 'le.slider',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    disabled: Boolean,
    step: {
      type: Number,
      default: 1,
    },
    showStops: Boolean,
    width: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      // 鼠标点击和移动的差距
      suff: 0,
      // 当前滑块的 x
      currentX: 0,
      index: 0,
    };
  },
  computed: {
    dropBox() {
      return this.$refs.dragBox;
    },
    trackBox() {
      return this.$refs.track;
    },
    maxIndex() {
      return this.scope / this.step;
    },
    stepGutter() {
      return this.width / (this.scope / this.step);
    },
    scope() {
      return this.max - this.min;
    },
  },
  mounted() {
    this.dropBox.onmousedown = (event) => {
      this.currentX = event.clientX;
      document.addEventListener('mousemove', this.moveDrop);
    };
    document.onmouseup = () => {
      this.suff = 0;
      document.removeEventListener('mousemove', this.moveDrop);
    };
  },
  watch: {
    index: {
      immediate: true,
      handler(n) {
        if (n) {
          this.dropBox.style.left = `${n * this.stepGutter}px`;
        }
      },
    },
  },
  methods: {
    moveDrop(event) {
      // 先保留好差距
      this.suff = event.clientX - this.currentX;
      if (this.suff < 0 - this.stepGutter && this.index > 0) {
        this.index -= 1;
        this.$emit('change', this.min + this.index * this.step);
        this.suff = 0;
        this.currentX = this.dropBox.getBoundingClientRect().x;
      } else if (this.suff > this.stepGutter && this.index < this.maxIndex) {
        this.index += 1;
        this.$emit('change', this.min + this.index * this.step);
        this.suff = 0;
        this.currentX = this.dropBox.getBoundingClientRect().x;
      }
    },
  },
  created() {
    this.$emit('change', this.min);
  },
};
</script>
