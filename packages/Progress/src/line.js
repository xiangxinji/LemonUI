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
  computed: {
    sw() {
      return `${this.strokeWidth}px`;
    },
  },
  render() {
    const { sw } = this;
    return <div class="lemon-progress__line">
      <div class="progress_line" style={{ height: sw, borderRadius: sw }}>
        <div class="progress_line__inner" style={{ width: `${this.p}%`, borderRadius: sw, lineHeight: sw }}>
          { (this.textInside && this.p >= 10) && <span>{ this.format(this.p) }</span>}
        </div>
      </div>
      { !this.textInside && <span>{ this.format(this.p) } </span>}
    </div>;
  },

};
