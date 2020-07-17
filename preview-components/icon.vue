<template>
  <container title="icon">
      <lemon-icon color="red" icon="user"></lemon-icon>
      <lemon-icon icon="car"></lemon-icon>
      <lemon-icon class="ic" color="skyblue" icon="tree"></lemon-icon>
      <lemon-icon color="orange" icon="stop"></lemon-icon>
      <lemon-icon icon="home"></lemon-icon>
  </container>
</template>

<script>
import container from './container.vue'
import LemonIcon from '../src/Icon/index.vue'
export default {
    components : {
        container ,
        LemonIcon
    }
}
</script>

<style lang="scss">
.ic{
    width:20px;
}
</style>