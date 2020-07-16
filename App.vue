<template>
  <div class="preview-panel">
    <Lemon-button />
    <lemon-link />
  </div>
</template>

<script>
import LemonButton from "./preview-components/button.vue";
import LemonLink from './preview-components/link.vue'
export default {
  components: {
    LemonButton,
    LemonLink
  }
};
</script>

<style lang="scss">
.preview-block {
  padding: 20px 30px;
}
</style>