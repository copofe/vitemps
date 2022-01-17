import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '项目文档',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      {
        text: '规范',
        link: '/style/',
      },
      {
        text: '组件',
        link: '/components/',
      },
    ],
  }
})