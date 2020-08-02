<template>
  
</template>

<script>
export default {
    props : {
        // 模式 , 水平或者垂直
        mode : {
            type : String , 
            default : "vertical" , 
            validator (v) {
                return v === "vertical" || v === "horizontal"
            }
        }
    }
}
</script>

<style>

</style>