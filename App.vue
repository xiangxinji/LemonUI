<template>
  <div>
      <Link />
      <lm-input></lm-input>
  </div>
</template>

<script>
import Link from '@/Link/index.vue'
import Input from '@/Input/index.vue'
export default {
    components:{
        Link,
        LmInput : Input 
    }
};
</script>

<style>
</style>