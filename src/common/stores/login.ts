import { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { loginSite } from '../service'
import { LoginForm } from '../types'
import localCache from '@/common/utils/cache'
import { ElMessage } from 'element-plus'
import i18n from '@/language/i18n'
import router from '../router'

export const useLoginStore = defineStore('login', {
  state: () => ({
    token: '',
  }),
  actions: {
    // 异步更新 message
    login(loginForm: LoginForm): void {
      loginSite(loginForm).then(
        (res: AxiosResponse<Record<string, string>>) => {
          console.log(res)

          if (res.data.token) {
            this.token = res.data.token
            // 浏览器缓存
            localCache.setCache('token', this.token)
            localCache.setCache('username', loginForm.username)
            ElMessage({
              message: i18n.global.t('main.登陆成功'),
              type: 'success',
            })
            // 跳到首页
            router.replace('/home')
          } else {
            ElMessage({
              message: i18n.global.t('main.登录失败'),
              type: 'error',
            })
          }
        }
      )
    },
  },
})
