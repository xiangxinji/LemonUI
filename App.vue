<template>
  <div>
    <h2>
      link
    </h2>
    <hr>
    <Link >默认链接</Link>
    <Link type="primary" >主要链接</link>
    <Link type="danger" >错误链接</link>
    <Link type="warning" >警告链接</link>
    <Link type="info" >信息链接</link>
  </div>
</template>

<script>
import Link from "@/Link/index.vue";
import Input from "@/Input/index.vue";
import Button from "@/Button/index.vue";
export default {
  components: {
    Link,
    LmInput: Input,
    lmButton: Button
  }
};
</script>

<style>
</style>