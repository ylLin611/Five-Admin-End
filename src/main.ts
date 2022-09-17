import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/common/router'
import i18n from './language/i18n'
import 'normalize.css'
import 'element-plus/theme-chalk/index.css'

// 全局样式
import '@less/global.less'

createApp(App)
  .use(i18n)
  .use(createPinia()) // 启用 Pinia
  .use(router)
  .mount('#app')
