<template>
  <div class="preview-panel">
    <Lemon-button />
    <lemon-link />
    <lemon-icon />
    <Lemon-switch />
  </div>
</template>

<script>
import LemonButton from './preview-components/button.vue';
import LemonLink from './preview-components/link.vue';
import LemonIcon from './preview-components/icon.vue';
import LemonSwitch from './preview-components/switch.vue';

export default {
  components: {
    LemonButton,
    LemonLink,
    LemonIcon,
    LemonSwitch,
  },
};
</script>

<style lang="scss">
.preview-block {
  padding: 20px 30px;
}
</style>
