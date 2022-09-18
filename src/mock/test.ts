import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        status: 'success',
        data: {
          token: 'JLKJSLD122134134KJASDLKJASD',
        },
      }
    },
  },
] as MockMethod[]
