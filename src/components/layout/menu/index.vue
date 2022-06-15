<template>
  <div class="menu">
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" :default-active="path"
      text-color="#fff" router>
      <MenuItem :data="menuList" />
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import MenuItem from './menuItem.vue'

type MenuList = {
  name: string,
  path: string,
  icon?: string
  children?: MenuList[]
}
const route = useRoute()
const path = ref<string>('')
const menuList: MenuList[] = [
  {
    name: '首页',
    path: '/home',
    icon: 'https://uapp-test.s3.cn-north-1.amazonaws.com.cn/a85f9fbf-4c0b-41e7-88ac-33814d11e39b.png'
  },
  {
    name: '产品中心1',
    path: '/product1',
    children: [
      {
        name: '添加产品2',
        path: '/product2',
        icon: 'https://uapp-test.s3.cn-north-1.amazonaws.com.cn/a85f9fbf-4c0b-41e7-88ac-33814d11e39b.png',
        children: [
            {
                name: '添加产品3',
                path: '/product'
            }
        ]
      }
    ]
  }
]

onMounted(() =>{
  path.value = route.path
})

</script>

<style lang="less" scoped>
.menu {
  width: 200px;
  border-right: 1px solid #ccc;
  background-color: #545c64;
}
</style>