import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: [
          'vue',
          'vue-router', //Vue路由全部API
          {
            axios: [
              ['default', 'axios'], // import { default as axios } from 'axios'
            ],
          },
        ],
        dts: 'src/auto-import.d.ts',
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dirs: ['src/components/', 'src/util/'],
        resolvers: [ElementPlusResolver()],
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        // localEnabled: command === 'serve', //保证开发阶段可以使用mock接口
        localEnabled: command === 'serve', //保证开发阶段可以使用mock接口
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
})
