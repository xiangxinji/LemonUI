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
    radius: {
      type: Number,
    },
  },
  watch: {
    percentage: {
      immediate: true,
      handler(v) {
        setTimeout(() => {
          this.p = v;
          this.sar = this.z / 100 * this.p;
        });
      },
    },
  },
  data() {
    return {
      p: 0,
      // 周长
      z: 0,
      sar: 0,
    };
  },
  render() {
    return <div class="lemon-progress__circle" style={this.wrapperStyle}>
      <svg class="progress-circle" width="100%" height="100%">
        <circle cx={this.centerPointer.x} cy={this.centerPointer.y} fill="none" stroke="#ccc" r={this.radius} stroke-width={this.strokeWidth} stroke="#efefef" ></circle>
        <circle style={{ opacity: this.p || 0 }} cx={this.centerPointer.x} cy={this.centerPointer.y} fill="none" stroke="#ccc" r={this.radius} stroke-linecap="round" stroke-width={this.strokeWidth} stroke="skyblue" stroke-dasharray={`${this.sar} ${this.z}`} ></circle>
      </svg>
    </div>;
  },
  created() {
    this.z = this.radius * Math.PI * 2;
  },
  computed: {
    wrapperStyle() {
      const total = this.strokeWidth * 2 + this.radius * 2;
      return {
        width: `${total}px`,
        height: `${total}px`,
      };
    },
    centerPointer() {
      const total = this.strokeWidth * 2 + this.radius * 2;
      return {
        x: total / 2,
        y: total / 2,
      };
    },
  },
};
