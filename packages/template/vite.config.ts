/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3031,
  },
  resolve: {
    alias: {
      '::': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    Unocss(),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    Components({
      dts: true,
      extensions: ['vue', 'ts'],
      directoryAsNamespace: true,
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'pinia',
      'dayjs',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
});
