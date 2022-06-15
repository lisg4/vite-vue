<template>
  <template v-for="(item, index) in data">
    <el-sub-menu
      :key="index"
      :index="item.path"
      v-if="Array.isArray(item.children) && item.children.length > 0"
    >
      <template #title>
        <img class="menu-icon" :src="item?.icon" />
        <span>{{ item.name }}</span>
      </template>
      <menuitem :data="item.children"></menuitem>
    </el-sub-menu>
    <el-menu-item :key="item.path" v-else :index="item.path">
      <img class="menu-icon" :src="item?.icon" />
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'menuitem'
})
</script>

<script setup lang="ts">
import { defineProps } from "vue"

type MenuList = {
  name: string,
  path: string,
  icon?: string,
  children?: MenuList[]
}
interface Props{
  data: MenuList[]
}
defineProps<Props>()

</script>
<style lang="less" scoped>
.menu-icon{
  width: 16px;
  height: 16px;
  margin-right: 16px;
}
</style>