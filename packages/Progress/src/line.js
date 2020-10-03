export default {
  props: {
    percentage: {
      type: Number,
      required: true,
    },
    strokeWidth: {
      type: Number,
    },
    textInside: {
      type: Boolean,
    },
    showText: {
      type: Boolean,
    },
    format: {
      type: Function,
    },
  },
  data() {
    return {
      p: 0,
    };
  },
  watch: {
    percentage: {
      immediate: true,
      handler(v) {
        setTimeout(() => {
          this.p = v;
        });
      },
    },
  },
  render() {
    return <div class="lemon-progress__line">
      <div class="progress_line" style={{ height: `${this.strokeWidth}px`, borderRadius: `${this.strokeWidth}px` }}>
        <div class="progress_line__inner" style={{ width: `${this.p}%`, borderRadius: `${this.strokeWidth}px` }}></div>
      </div>
      <span>{ this.format(this.p) } %</span>
    </div>;
  },

};
