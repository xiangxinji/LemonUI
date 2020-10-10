import line from './line';
import circle from './circle';

const noopForArgs = (v) => `${v}%`;

export default {
  components: {
    lineProgress: line,
    circleProgress: circle,
  },
  props: {
    percentage: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      default: 'line',
      validator(v) {
        const arr = ['line', 'circle', 'dashboard'];
        return arr.includes(v);
      },
    },
    strokeWidth: {
      type: Number,
      default: 6,
    },
    textInside: {
      type: Boolean,
      default: false,
    },
    showText: {
      type: Boolean,
      default: false,
    },
    format: {
      type: Function,
      default: noopForArgs,
    },
    theme: {
      type: String,
      default: 'primary',
    },
    radius: {
      type: Number,
      default: 50,
    },
  },
  render(h) {
    const {
      strokeWidth, textInside, showText, percentage, format, radius,
    } = this;
    const props = {
      strokeWidth,
      textInside,
      showText,
      percentage: percentage > 100 ? 100 : percentage,
      format,
      radius,
    };
    return (
      <div class={`lemon-progress progress-${this.type} theme-${this.theme}`}>
        {
          h(`${this.type}Progress`, { props }, null)
        }
      </div>
    );
  },
};
