import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    name: 'home',
    component: () => import('@/modules/Home.vue'),
    meta: {
      title: 'Home',
    },
  },
  /**
   * Login
   */
  {
    path: '/login',
    name: 'login',
    component: () => import('@common/views/login/Login.vue'),
    meta: {
      title: 'Login',
    },
  },
]

export default routes
