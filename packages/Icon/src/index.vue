<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'LeIcon',
  componentName: 'le.icon',
  props: {
    color: {
      type: String,
    },
    size: {
      type: Number,
      default: 20,
    },
  },
  render() {
    return (
      <div class="lemon__icon">
        <FontAwesomeIcon
          style={{ color: this.color, fontSize: this.size }}
          {...{ attrs: this.$attrs }}
        ></FontAwesomeIcon>
      </div>
    );
  },
};
</script>
