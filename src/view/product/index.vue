<template>
    <div>产品</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getUserInfo } from '@/service'

onMounted(async () =>{
    const params = {
        "imageTypeId":58,
        "platformCode":"b2b"
    }
    const res = await getUserInfo(params)
    console.log(res)
})
</script>

<style lang="less" scoped>

</style>
