import axios, { AxiosResponse, type AxiosRequestConfig } from 'axios'
import { ElLoading, ElMessage } from 'element-plus'

const config: AxiosRequestConfig = {
  baseURL: '/api',
  timeout: 300000,
}

const fAxios = axios.create(config)

let loading: { close: () => void }
fAxios.interceptors.request.use(
  (config) => {
    loading = ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)',
    })
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

fAxios.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    loading.close()
    if (response.status === 200) {
      return response.data
    } else {
      ElMessage(response.data.error)
      return Promise.reject(response.data)
    }
  },
  (error) => {
    loading.close()
    return Promise.reject(error)
  }
)

export { fAxios }
