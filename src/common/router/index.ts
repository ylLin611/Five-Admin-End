import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { websiteTitle } from '@/config'
import localCache from '@/common/utils/cache'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
router.beforeEach((to) => {
  if (to.path !== '/login') {
    if (!localCache.getCache('token')) {
      router.replace('/login')
    }
  }
})
router.afterEach((to) => {
  const { title } = to.meta
  document.title = title ? `${title} - ${websiteTitle}` : websiteTitle
})

export default router
