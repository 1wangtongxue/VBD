import{_ as t,D as i,c as o,m as n,a as s,I as p,w as e,U as l,o as c}from"./chunks/framework.Cx4QRP8n.js";const r="/VBD/assets/evi.DlaXVBnM.png",d="/VBD/assets/ml.CTlzKpEK.png",h="/VBD/assets/tu1.Dxr2Yd9A.png",u="/VBD/assets/title-router.CzH5mymc.png",_="/VBD/assets/home.DR47a-Q9.png",g="/VBD/assets/diyhome.Ccen7jpF.png",m="/VBD/assets/sider1.6WQL-U5G.png",f="/VBD/assets/sidebar2.DamfEDZO.png",v="/VBD/assets/sidebar3.BZn49Skd.png",b="/VBD/assets/vbd1.DsiF6KeX.png",is=JSON.parse('{"title":"vitepress 实现博客效果","description":"","frontmatter":{},"headers":[],"relativePath":"views/column/vitepress/studayVitepress.md","filePath":"views/column/vitepress/studayVitepress.md"}'),k={name:"views/column/vitepress/studayVitepress.md"},T=l(`<h1 id="vitepress-实现博客效果" tabindex="-1">vitepress 实现博客效果 <a class="header-anchor" href="#vitepress-实现博客效果" aria-label="Permalink to &quot;vitepress 实现博客效果&quot;">​</a></h1><p>学习并记录一些技术知识点</p><h2 id="vitepress官网" tabindex="-1">vitepress官网 <a class="header-anchor" href="#vitepress官网" aria-label="Permalink to &quot;vitepress官网&quot;">​</a></h2><p><a href="https://vitejs.cn/vitepress/" target="_blank" rel="noreferrer">https://vitejs.cn/vitepress/</a></p><h2 id="一、-博客搭建" tabindex="-1">一、 博客搭建 <a class="header-anchor" href="#一、-博客搭建" aria-label="Permalink to &quot;一、 博客搭建&quot;">​</a></h2><h4 id="_1-1-首先创建并进入一个项目目录" tabindex="-1">1.1 首先创建并进入一个项目目录 <a class="header-anchor" href="#_1-1-首先创建并进入一个项目目录" aria-label="Permalink to &quot;1.1 首先创建并进入一个项目目录&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> mkdir vitepressBokeDemo   &amp;&amp;    cd vitepressBokeDemo</span></span></code></pre></div><h4 id="_1-2-快速搭建" tabindex="-1">1.2 快速搭建 <a class="header-anchor" href="#_1-2-快速搭建" aria-label="Permalink to &quot;1.2 快速搭建&quot;">​</a></h4><p>使用包管理器进行初始化，这个项目使用的是pnpm</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 如果没有安装过pnpm，可以全局安装下</span></span>
<span class="line"><span>sudo npm install -g pnpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 用pnpm初始化</span></span>
<span class="line"><span>pnpm init</span></span></code></pre></div><p>项目初始化完成之后，进行安装vitepress依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#安装命令</span></span>
<span class="line"><span>pnpm add vitepress -D</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#使用pnpm初始化，在package.json中增加</span></span>
<span class="line"><span> &quot;pnpm&quot;: {</span></span>
<span class="line"><span>   &quot;peerDependencyRules&quot;: {</span></span>
<span class="line"><span>     &quot;ignoreMissing&quot;: [</span></span>
<span class="line"><span>       &quot;@algolia/client-search&quot;</span></span>
<span class="line"><span>     ]</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span></code></pre></div><p>官网中有个命令行向导可以帮助构建项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm exec vitepress init</span></span></code></pre></div>`,14),x=n("img",{src:r,"data-fancybox":"gallery"},null,-1),y=n("img",{src:d},null,-1),C=n("br",null,null,-1),q=n("img",{src:h,"data-fancybox":"gallery"},null,-1),V=n("br",null,null,-1),A=n("h2",{id:"二、美化个人博客",tabindex:"-1"},[s("二、美化个人博客 "),n("a",{class:"header-anchor",href:"#二、美化个人博客","aria-label":'Permalink to "二、美化个人博客"'},"​")],-1),D=n("h4",{id:"_2-1-首页修改",tabindex:"-1"},[s("2.1 首页修改 "),n("a",{class:"header-anchor",href:"#_2-1-首页修改","aria-label":'Permalink to "2.1 首页修改"'},"​")],-1),S=n("strong",null,"(1)修改左上角的title",-1),P=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  title: &quot;my-boke-demo&quot;,</span></span></code></pre></div>`,1),I=n("strong",null,"(2)右上角的导航自定义",-1),B=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  title: &quot;my-boke-demo&quot;,</span></span>
<span class="line"><span>  //将相关的导航栏信息传递进来</span></span>
<span class="line"><span>   nav: [],</span></span>
<span class="line"><span>   })</span></span></code></pre></div><p>现在来定义下navbar的内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>// docs/.vitepress/relaConf/index.ts 由于配置内容较多，单起个文件</span></span>
<span class="line"><span>export * from &#39;./navbar&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//在docs/.vitepress/relaConf/navbar.ts中配置</span></span>
<span class="line"><span>import { DefaultTheme } from &#39;vitepress&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const nav:DefaultTheme.NavItem[]=[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        text: &#39;首页&#39;,</span></span>
<span class="line"><span>        link: &#39;/&#39; // 表示docs/index.md</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        text: &#39;个人成长&#39;,</span></span>
<span class="line"><span>        items: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            text: &#39;笔记&#39;,</span></span>
<span class="line"><span>            link: &#39; /views/tryIndex.md&#39; // 表示docs/views/Travel/index.md</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>//在config.mts中引入并使用</span></span>
<span class="line"><span>import { nav } from &#39;./relaconf&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  title: &quot;my-boke-demo&quot;,</span></span>
<span class="line"><span>  //将相关的导航栏信息传递进来</span></span>
<span class="line"><span>   nav: nav,</span></span>
<span class="line"><span>   })</span></span></code></pre></div><p>展示效果如下 <img src="`+u+`" data-fancybox="gallery"><br></p><h4 id="_2-2-首页home美化修改" tabindex="-1">2.2 首页home美化修改 <a class="header-anchor" href="#_2-2-首页home美化修改" aria-label="Permalink to &quot;2.2 首页home美化修改&quot;">​</a></h4><p>home页也可以改成我们想要的效果</p><p><strong>(1)美化home页</strong> 修改的文件位置在docs/index.md中,配置如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>---</span></span>
<span class="line"><span># https://vitepress.dev/reference/default-theme-home-page</span></span>
<span class="line"><span>layout: home </span></span>
<span class="line"><span>title: 小王同学 </span></span>
<span class="line"><span>lastUpdated: true</span></span>
<span class="line"><span>hero:</span></span>
<span class="line"><span>  name: &quot;小王同学&quot;</span></span>
<span class="line"><span>  text: &quot;A VitePress Site&quot;</span></span>
<span class="line"><span>  tagline: /保持清醒/热爱美食</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//首页右边的图片  </span></span>
<span class="line"><span>  image:</span></span>
<span class="line"><span>    src: /head.jpg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//按钮相关配置    </span></span>
<span class="line"><span>  actions:</span></span>
<span class="line"><span>    - theme: brand</span></span>
<span class="line"><span>      text: 进入主页</span></span>
<span class="line"><span>      link: /</span></span>
<span class="line"><span>    - theme: alt</span></span>
<span class="line"><span>      text: 个人成长</span></span>
<span class="line"><span>      link: /views/tryIndex.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//按钮下方的描述</span></span>
<span class="line"><span>features:</span></span>
<span class="line"><span>  - icon: 🤹 </span></span>
<span class="line"><span>    title: Web前端</span></span>
<span class="line"><span>    details: 国内某互联网厂搬砖人员</span></span>
<span class="line"><span>  - icon: 🍟</span></span>
<span class="line"><span>    title: 喜欢美食</span></span>
<span class="line"><span>    details: 热爱美食</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>---</span></span></code></pre></div>`,8),N=n("img",{src:_,"data-fancybox":"gallery"},null,-1),E=n("br",null,null,-1),w=n("strong",null,"(2)自定义组件",-1),R=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;home-wrapper&quot;&gt;</span></span>
<span class="line"><span>      &lt;div v-for=&quot;item in list&quot; :key=&quot;item&quot; class=&quot;home-item&quot; @click=&quot;changeBTN(item)&quot;&gt;{{ item }}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;script &gt;</span></span>
<span class="line"><span>  export default{</span></span>
<span class="line"><span>    data(){</span></span>
<span class="line"><span>      return{</span></span>
<span class="line"><span>        list :[1, 2, 3, 4, 5, 6, 7, 8, 9],</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods:{</span></span>
<span class="line"><span>      changeBTN(val){</span></span>
<span class="line"><span>        console.log(val,&quot;点击的某个标识div&quot;)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;style scoped&gt;</span></span>
<span class="line"><span>  .home-wrapper {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: center;</span></span>
<span class="line"><span>    margin-top: 40px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .home-item {</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>    margin: 4px 4px 10px;</span></span>
<span class="line"><span>    padding: 4px 8px;</span></span>
<span class="line"><span>    font-weight: bolder;</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>    border-radius: 2px;</span></span>
<span class="line"><span>    line-height: 13px;</span></span>
<span class="line"><span>    font-size: 13px;</span></span>
<span class="line"><span>    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);</span></span>
<span class="line"><span>    transition: all 0.5s;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span></code></pre></div>`,1),j=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>    import homeIndex from &quot;../docs/.vitepress/components/home.vue&quot;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;homeIndex&gt;&lt;/homeIndex&gt;</span></span></code></pre></div><p>展示效果如下图所示 <img src="`+g+'" data-fancybox="gallery"><br></p><h4 id="_2-3-侧边栏美化" tabindex="-1">2.3 侧边栏美化 <a class="header-anchor" href="#_2-3-侧边栏美化" aria-label="Permalink to &quot;2.3 侧边栏美化&quot;">​</a></h4>',3),$=n("strong",null,"(1)定义侧边栏",-1),z=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export const nav: DefaultTheme.NavItem[] = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        text: &#39;首页&#39;,</span></span>
<span class="line"><span>        link: &#39;/&#39; // 表示docs/index.md</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>    text: &#39;前端开发&#39;,</span></span>
<span class="line"><span>    items: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        text: &#39;get和post的区别&#39;,</span></span>
<span class="line"><span>        link: &#39;/column/Algorithm/&#39; // 对应docs/column/Algorithm下的idnex.md文件</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span></code></pre></div>`,1),K=n("img",{src:m,"data-fancybox":"gallery"},null,-1),Q=n("br",null,null,-1),U=n("strong",null,"(2)美化侧边栏",-1),F=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//配置代码</span></span>
<span class="line"><span>  export const sidebar: DefaultTheme.Sidebar = [</span></span>
<span class="line"><span>       // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置</span></span>
<span class="line"><span>       // 第一部分</span></span>
<span class="line"><span>       {</span></span>
<span class="line"><span>        text: &#39;get和post的区别&#39;,</span></span>
<span class="line"><span>        items: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            text: &#39;get&#39;,</span></span>
<span class="line"><span>            link: &#39;/column/Algorithm/001_Stack&#39;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            text: &#39;post&#39;,</span></span>
<span class="line"><span>            link: &#39;/column/Algorithm/002_Queue&#39;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div>`,1),H=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//引入到config.ts中使用</span></span>
<span class="line"><span>import { defineConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span>import { nav, sidebar } from &#39;./relaconf&#39;</span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>themeConfig: {</span></span>
<span class="line"><span>    nav: nav,</span></span>
<span class="line"><span>    sidebar:sidebar , //侧边栏</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>展示效果下图所示 <img src="`+f+'" data-fancybox="gallery"><br></p><h4 id="_2-4-锚点导航" tabindex="-1">2.4 锚点导航 <a class="header-anchor" href="#_2-4-锚点导航" aria-label="Permalink to &quot;2.4 锚点导航&quot;">​</a></h4>',3),M=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> themeConfig: {</span></span>
<span class="line"><span>    outline:{  //右边侧边栏的跳转目录</span></span>
<span class="line"><span>      level: [1, 60],</span></span>
<span class="line"><span>      label: &#39;目录&#39;</span></span>
<span class="line"><span>    },</span></span></code></pre></div><p>具体展示如下图所示： <img src="`+v+'" data-fancybox="gallery"><br></p><h2 id="三、部署到github-page" tabindex="-1">三、部署到github page <a class="header-anchor" href="#三、部署到github-page" aria-label="Permalink to &quot;三、部署到github page&quot;">​</a></h2>',3),O=n("br",null,null,-1),W=l('<h4 id="_3-1-设置公钥ssh" tabindex="-1">3.1 设置公钥ssh <a class="header-anchor" href="#_3-1-设置公钥ssh" aria-label="Permalink to &quot;3.1 设置公钥ssh&quot;">​</a></h4><p>要设置公钥ssh，要本地和远程仓库相连接。在网上找了个配置 <a href="https://blog.csdn.net/vxstar/article/details/131783270" target="_blank" rel="noreferrer">https://blog.csdn.net/vxstar/article/details/131783270</a><br></p><h4 id="_3-2-创建仓库-本地配置" tabindex="-1">3.2 创建仓库-本地配置 <a class="header-anchor" href="#_3-2-创建仓库-本地配置" aria-label="Permalink to &quot;3.2 创建仓库-本地配置&quot;">​</a></h4>',3),X=n("br",null,null,-1),Z=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  base: &quot;/VBD/&quot;, //这里是根路径</span></span>
<span class="line"><span>  )}</span></span></code></pre></div>`,1),G=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span>set -e</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 生成静态文件</span></span>
<span class="line"><span>npm run docs:build</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进入生成的文件夹</span></span>
<span class="line"><span>cd ../docs/.vitepress/dist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span>git add -A</span></span>
<span class="line"><span>git commit -m &#39;deploy&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#git@github.com:1wangtongxue/VBD.git修改成自己的仓库名称</span></span>
<span class="line"><span># 意思为将master构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~</span></span>
<span class="line"><span>git push -f git@github.com:1wangtongxue/VBD.git master:gh-pages</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd -</span></span></code></pre></div><p>完成后，就可以把调试好的代码，推到github上的master上，然后开始跑脚本，发布到生产环境。 运行代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &quot;first&quot;</span></span>
<span class="line"><span>git push origin HEAD:refs/for/master</span></span>
<span class="line"><span>//在pack.json中配置</span></span>
<span class="line"><span>&quot;docs:deploy&quot;: &quot;sh vitepress-starter/deploy.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//跑脚本 使用git bash 在vitepress-starter文件中使用命令跑脚本</span></span>
<span class="line"><span>sh ./vitepress-starter/deploy.sh</span></span></code></pre></div>`,3),J=n("img",{src:b,"data-fancybox":"gallery"},null,-1),L=n("br",null,null,-1);function Y(ss,ns,as,ps,es,ls){const a=i("font");return c(),o("div",null,[T,n("p",null,[s("构建图如下： "),x,s(" 文件的目录结构如下 "),y,C,s(" 到这里基本完成了 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s(" vitepress")]),_:1})]),s(" 的初始化。 可以运行 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("pnpm run docs:dev")]),_:1})]),s(" 运行项目，效果如下 "),q,V]),A,D,n("p",null,[S,s(" 修改 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("docs/.vitepress/config.mts")]),_:1})]),s(" 文件里的数据")]),P,n("p",null,[I,s(" 修改 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("docs/.vitepress/config.mts")]),_:1})]),s(" 文件里的数据")]),B,n("p",null,[s("好了，配置完来看下效果吧 "),N,E,w,s(" 如果想在home页下方增加一点图片啊图标之类的，就可以自定义组件，引入展示 例如在 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("docs/.vitepress/components/home.vue")]),_:1})]),s(" 中创建个文件，写一些想要展示的代码 展示代码如下")]),R,n("p",null,[s("接着，在 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("docs/index.md")]),_:1})]),s(" 中引入")]),j,n("p",null,[$,s(" 先在navbar.ts中创建目录专栏叫 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("get和post的区别")]),_:1})])]),z,n("p",null,[s("定义好的效果如下 "),K,Q,s(" 此时发现右边的侧边栏怎么莫名其妙的，其实这是我们初始化项目的时候，脚手架给我们预置好的侧边栏内容，对应的 是 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("docs/.vitepress/config.ts")]),_:1})]),s(" 中的 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("themeConfig.sidebar")]),_:1})]),s("。接下来我们修改一下侧边栏的内容吧。")]),n("p",null,[U,s(" 在 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("nvabar.ts")]),_:1})]),s(" 文件中配置如下代码")]),F,n("p",null,[s("引入到 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("config.ts")]),_:1})]),s(" 中使用")]),H,n("p",null,[s("锚点导航配置文件在 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("config.ts")]),_:1})]),s(" 中，在 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("themeConfig")]),_:1})]),s(" 中配置 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("outline")]),_:1})]),s(" 具体代码如下")]),M,n("p",null,[s("到这里已经完成了一个简易的博客搭建，那么就发布上线吧。 采用 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("github")]),_:1})]),s(" 进行部署项目"),O]),W,n("p",null,[s("使用 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("github page")]),_:1})]),s(" 来部署 那么就有需要注意：新建仓库的时候选择 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("public状态")]),_:1}),s("。")]),X,s(" 假如仓库名称为： "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("VBD")]),_:1})]),s(" (vitepressBokeDome的缩写) 那么我们需要到项目中的 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("config.ts")]),_:1})]),s(" 文件中 去做配置。")]),Z,n("p",null,[s("其次，写一个脚本，在根目录下创建一个文件夹 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("vitepress-starter")]),_:1})]),s(" ，再创建一个 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("deploy.sh")]),_:1})]),s(" 文件， 代码如下")]),G,n("p",null,[s("最后在仓库的 "),n("strong",null,[p(a,{color:"#ff8f9e"},{default:e(()=>[s("setting——pages")]),_:1})]),s(" 中可以看到 要在分支切换成在对应的分支，点击Save按钮，它会在上面生成对应的连接，点击连接就可以访问了 "),J,L])])}const os=t(k,[["render",Y]]);export{is as __pageData,os as default};
