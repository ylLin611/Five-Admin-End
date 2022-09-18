import { LoginForm } from '../types'
import { fAxios } from './request'

export const loginSite = (params: LoginForm) => fAxios.post('/login', params)
