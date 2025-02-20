import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    "/DailyRoutine",
    "/Fitness",
    "/BioinorganicChemistry.zh",
    "/testdemo",
    "/uploaddemo",
    // 读书笔记架构更换到 docsify，不能使用相对链接
    { text: "读书笔记", icon: "fa6-brands:readme", link: "https://newzone.top/reading/" },
    // 指定显示页面
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
      text: "🏝 行星科学",
      icon: "",
      prefix: "/planetsci/",
      link: "",
      collapsible: true,
      children: [
        {
          text: "🪐 固体行星物",
          icon: "",
          collapsible: true,
          children: ["固体行星物理Chapter-1.md", "固体行星物理Chapter-2.md", "固体行星物理Chapter-3.md", "固体行星物理Chanpter-4.md"],
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
        {
          text: "🧬 遗传学",
          icon: "",
          collapsible: true,
          children: ["Genetics-FG2G-6ed_Chapter-1.md", "Genetics-FG2G-6ed_Chapter-2.md", "Genetics-FG2G-6ed_Chapter-3.md", "Genetics-FG2G-6ed_Chapter-4.md", "Genetics-FG2G-6ed_Chapter-5.md", "Genetics-FG2G-6ed_Chapter-6.md", "Genetics-FG2G-6ed_Chapter-7.md", "Genetics-FG2G-6ed_Chapter-8.md", "Genetics-FG2G-6ed_Chapter-9.md", "Genetics-FG2G-6ed_Chapter-10.md", "Genetics-FG2G-6ed_Chapter-11.md", "Genetics-FG2G-6ed_Chapter-12.md", "Genetics-FG2G-6ed_Chapter-13.md", "Genetics-FG2G-6ed_Chapter-14.md", "Genetics-FG2G-6ed_Chapter-15.md", "Genetics-FG2G-6ed_Chapter-16.md", "Genetics-FG2G-6ed_Chapter-17.md", "Genetics-FG2G-6ed_Chapter-18.md", "Genetics-FG2G-6ed_Chapter-19.md", "Genetics-FG2G-6ed_Chapter-20.md", "Genetics-FG2G-6ed_Chapter-21.md", "Genetics-FG2G-6ed_Chapter-22.md"],
        },
        {
          text: "🪰 发育生物学",
          icon: "",
          collapsible: true,
          children: [],
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
