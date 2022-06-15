<template>
  <div class="layout">
    <Menu />
    <div class="layout-right">
      <Header />
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './menu/index.vue'
</script>
<style lang="less" scoped>
.layout {
  display: flex;
  height: 100%;
  overflow: hidden;
  &-right{
      flex: 1;
      display: flex;
      flex-direction: column;
  }
}
</style>
