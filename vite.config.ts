import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'


import path from 'path'

export default defineConfig({
  server: {
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/dev-api': {
        target: 'http://127.0.0.1:3003',
        // target: 'https://api.moonc.love',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, '')
      },
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver(),
      ],
      dts: 'src/components.d.ts'
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.vue', '.json']
  }
})
