<template>
  <div>
    <Link />
    <lm-input></lm-input>
    <hr />
    <lm-button native-type="submit">添加信息</lm-button>

    <lm-button type="info" round size="small">爱斯达克加速度垃圾可适当拉卡时间段逻辑</lm-button>
    <lm-button type="warning" round size="mini">爱斯达克加速度垃圾可适当拉卡时间段逻辑</lm-button>
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