import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 公共路由
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    redirect: '/home',
  },
  /**
   * Login
   */
  {
    path: '/login',
    name: 'login',
    component: () => import('@common/views/Login.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@common/views/Home.vue'),
    meta: {
      title: 'Home',
    },
  },
]

export default routes
