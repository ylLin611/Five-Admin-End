import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

class FiveRequest {
  // axios
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}
export default FiveRequest
