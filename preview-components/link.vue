<template>
  <container title="link">
        <lemon-link >默认按钮</lemon-link>
      
      <lemon-link type="primary" >主要按钮</lemon-link>
      
      <lemon-link type="success">成功按钮</lemon-link>
      
      <lemon-link type="danger">错误按钮</lemon-link>
      
      <lemon-link type="warning">警告按钮</lemon-link>

      <lemon-link type="info">信息按钮</lemon-link>
  </container>
</template>

<script>
import container from './container.vue'
import LemonLink from '../src/Link/index.vue'
export default {
    components : {
        container ,
        LemonLink
    }
}
</script>

<style>

</style>