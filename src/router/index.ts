import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'
import { ElMessage } from 'element-plus'

const routeRecordRaw: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: () => import('@/view/login/index.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    meta: {
      title: 'Page not found',
      isLogin: false
    },
    component: () => import('@/components/layout/index.vue'),
    children:[
      {
        path: '',
        component: () => import('@/view/notFound/index.vue'),
      }   
    ]
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  },
  {
    path: '/home',
    component: () => import('@/components/layout/index.vue'),
    children:[
      {
        path: '',
        component: () => import('@/view/home/index.vue'),
      }   
    ]
  },
  {
    path: '/product',
    component: () => import('@/components/layout/index.vue'),
    children:[
      {
        path: '',
        component: () => import('@/view/product/index.vue'),
      }
    ]
  },
]
 
const router: Router = createRouter({
  history: createWebHistory(),
  routes: routeRecordRaw,
})

router.beforeEach((to, from, next) =>{
  if(!localStorage.getItem('token')){
    if(to.path === '/login'){
      next()
    }else{
      ElMessage.warning('请登录')
      router.push('/login')
    }
  }else{
    next()
  }
})
export default router