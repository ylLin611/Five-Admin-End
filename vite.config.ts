import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import banner from 'vite-plugin-banner'
import pkg from './package.json'

const resolve = (dir: string): string => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 3000,
    // proxy: {
    //   '/devapi': {
    //     target: 'http://192.168.10.198',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/devapi/, ''),
    //   },
    // },
  },

  // build: {
  //   rollupOptions: {
  //     output: {
  //       // 其中一种方式
  //       manualChunks: {
  //         'ant-design-vue': ['ant-design-vue'],
  //         '@icon-park': ['@icon-park/vue-next'],
  //       },
  //     },
  //   },
  // },

  resolve: {
    alias: {
      // 兼容webpack的习惯
      '@': resolve('src'),
      '@img': resolve('src/assets/img'),
      '@less': resolve('src/assets/less'),
      '@libs': resolve('src/libs'),
      '@cp': resolve('src/components'),
      // 兼容webpack的静态资源
      '~@': resolve('src'),
      '~@img': resolve('src/assets/img'),
      '~@less': resolve('src/assets/less'),
      '~@libs': resolve('src/libs'),
      '~@cp': resolve('src/components'),
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1890ff',
          hack: `true; @import '@less/config.less'`,
        },
      },
    },
  },

  plugins: [
    vue(),
    autoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts',
      imports: ['vue'],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    components({
      resolvers: [ElementPlusResolver()],
      dirs: [resolve('src/components')],
      extensions: ['vue', 'ts'],
      deep: true,
      dts: false,
    }),
    banner(
      `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: v${pkg.description}\n * author: ${pkg.author}\n */`
    ),
  ],
})
