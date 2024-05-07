import { DefaultTheme } from 'vitepress';

export const nav:DefaultTheme.NavItem[]=[
    {
        text: '首页',
        link: '/' // 表示docs/index.md
      },
      {
        text: '个人成长',
        items: [
          {
            text: '笔记',
            link: ' /views/tryIndex.md' // 表示docs/views/Travel/index.md
          },

        ]
      },
      {
        text: '前端开发',
        items: [
          {
            text: '学习uniapp',
            link: '/views/column/uniapp/studayUniapp.md' // 表示docs/views/Travel/index.md
          },
            {
                text: 'ruoyi',
                link: '/views/column/ruoyi/studayRuoYi.md' // 表示docs/views/vitepress/index.md
            },
            {
                text: 'vitepress创建自己的博客',
                link: '/views/column/vitepress/studayVitepress.md' // 表示docs/views/vitepress/index.md
            },
          {
            text: '二次封装表单and表格',
            link: '/views/column/test/tryFrom.md' // 表示docs/views/Travel/index.md
          },

        ]
      },

]
export const sidebar:DefaultTheme.Sidebar=[
        {
            text: '学习知识',
            items: [
              {
                text: '学习uniapp',
                link: '/views/column/uniapp/studayUniapp.md' // 表示docs/views/Travel/index.md
              },
              {
                text: '学习vitepress',
                link: '/views/column/vitepress/studayVitepress.md' // 表示docs/views/Travel/index.md
              },
              {
                text: '学习ruoyi',
                link: '/views/column/ruoyi/studayRuoYi.md' // 表示docs/views/Travel/index.md
              },

            ]
          },

    ]
