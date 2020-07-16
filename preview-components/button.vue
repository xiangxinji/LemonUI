<template>
  <container title="button">
      <lemon-button >默认按钮</lemon-button>
      
      <lemon-button type="primary" >主要按钮</lemon-button>
      
      <lemon-button type="success">成功按钮</lemon-button>
      
      <lemon-button type="danger">错误按钮</lemon-button>
      
      <lemon-button type="warning">警告按钮</lemon-button>

      <lemon-button type="info">信息按钮</lemon-button>
      
  </container>
</template>

<script>
import container from './container.vue'
import LemonButton from '../src/Button/index.vue'
export default {
    components : {
        container ,
        LemonButton
    }
}
</script>

<style>

</style>