<template>
  <div>{{params}}</div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, inject } from 'vue'
const params = inject('flag',ref(0))

</script>

<style lang="less" scoped>
div{
    width: 100%;
    height: 200px;
    background: red; 
}
</style>