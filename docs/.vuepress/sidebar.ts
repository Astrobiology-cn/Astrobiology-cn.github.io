import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    // 读书笔记架构更换到 docsify，不能使用相对链接
    { text: "读书笔记", icon: "fa6-brands:readme", link:"https://astrobiology-cn.github.io/reading" },
    // 指定显示页面
    {
      text: "🏝 行星科学",
      icon: "",
      prefix: "/planetsci/",
      link: "",
      collapsible: true,
      children: [
                  "intro2planetsci.md",
                  {
                    text: "☀️行星科学基础",
                    icon: "",
                    prefix: "/planetsci/planetfundamental",
                    link: "",
                    collapsible: true,
                    children: ["类地行星动力学.md","行星的属性.md"],
                  },
                  {
                    text: "🌌行星科学导论",
                    icon: "",
                    collapsible: true,
                    children: [
                                {
                                  text: "火星",
                                  icon: "",
                                  prefix: "/planetsci/mars/",
                                  link: "",
                                  collapsible: true,
                                  children: ["火星地质与气候演化历史.md"],
                                },
                                {
                                  text: "月球",
                                  icon: "",
                                  collapsible: true,
                                  children: [""],
                                },
                                {
                                  text: "水星",
                                  icon: "",
                                  collapsible: true,
                                  children: [""],
                                },
                                {
                                  text: "木星",
                                  icon: "",
                                  collapsible: true,
                                  children: [""],
                                },
                              ],
                  },
                  {
                    text: "🔮行星物质科学",
                    icon: "",
                    collapsible: true,
                    children: [],
                  },
                ],
    },
    {
      text: "🔬 生命科学",
      icon: "",
      prefix: "/biosci/",
      link: "",
      collapsible: true,
      children: [
                  "intro2biosci.md",
                  {
                    text: "遗传学",
                    icon: "openmoji:dna",
                    prefix:"/biosci/genetics",
                    link:"",
                    collapsible: true,
                    children: ["Genetics-FG2G_6ed_Chapter-1.md"],
                  },
                  {
                    text: "发育生物学",
                    icon: "fluent-emoji:fly",
                    prefix:"/biosci/devebio",
                    link:"",
                    collapsible: true,
                    children: ["发育调控的普适原理.md"],
                  },
                ],
    },
    {
      text: "🛸 天体生物学",
      icon: "",
      prefix: "/astrobiosci/",
      link: "",
      collapsible: true,
      children: [
                  {
                    text: "天体生物学导论",
                    icon: "",
                    collapsible: true,
                    children: [],
                  },
                ],
    },
    {
      text: "🔢 数学物理",
      icon: "",
      prefix: "/math/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🧰 应用手册",
      icon: "",
      prefix: "/apps/",
      link: "",
      collapsible: true,
      children: [
        "Applist.md",
        "toolbox.md",
        "encrypt03.md",
        {
          text: "其他",
          icon: "fa6-solid:code-compare",
          collapsible: true,
          children: ["design.md"],
        },
      ],
    },
    {
      text: "🏗️ 网站部署",
      icon: "",
      prefix: "/deploy/",
      link: "",
      collapsible: true,
      children: [
        "Static.md",
        "CloudServices.md",
        "VPS.md",
        {
          text: "部署工具",
          icon: "fa6-brands:windows",
          collapsible: true,
          children: ["GitHub.md", "Cloudflare.md", "MySQL.md", "DNS.md"],
        },
      ],
    },
    {
      text: "🔡 代码编程",
      icon: "",
      prefix: "/code/",
      collapsible: true,
      children: [
        "README.md",
        {
          text: "Basic",
          icon: "fa6-solid:cube",
          collapsible: true,
          children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
        },
        {
          text: "FrondEnd",
          icon: "fa6-solid:object-group",
          collapsible: true,
          children: ["Vue.md", "HTML.md", "Javascript.md", "Python.md"],
        },
      ],
    },
    {
      text: "🛖 生活记录",
      icon: "",
      prefix: "/family/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "加密目录",
      icon: "material-symbols:encrypted",
      prefix: "/encrypt/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ],
  // 专题区（独立侧边栏）
  "/apps/topic/": "structure",
  "/biosci/genetics/":"structure",
  // 如果你不想使用默认侧边栏，可以按照路径自行设置。但需要去掉下方配置中的注释，以避免博客和时间轴出现异常。_posts 目录可以不存在。
  /*"/_posts/": [
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ], */
});
