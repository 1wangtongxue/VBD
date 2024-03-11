import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaconf'
import mdItCustomAttrs  from 'markdown-it-custom-attrs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/VBD/",
  title: "my-boke-demo",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'/docs/public/head.jpg',
    nav: nav,

    sidebar:sidebar , //侧边栏
    outline:{  //右边侧边栏的跳转目录
      level: [1, 60],
      label: '目录'
    },
    i18nRouting: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  //配置的图片放大功能
  markdown:{
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      })
    }
  },
  //引入图片灯箱js和css文件
  head:[
    [
      "link",
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
  ]
})
