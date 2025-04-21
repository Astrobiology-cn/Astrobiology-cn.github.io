import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    // 读书笔记架构更换到 docsify，不能使用相对链接
    { text: "读书笔记", icon: "fa6-brands:readme", link: "https://astrobiology-cn.github.io/reading" },
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
          children: ["planet_dynamics.md", "planet_properties.md", "planet_tectonics_motion.md", "planet_igrf_intro.md", "planet_oribit.md", "planet_magneticfield.md", "planet_geomagnetic.md","elasticity_and_flexture.md"],
        },
        {
          text: "🌌行星科学导论",
          prefix: "/planetsci/planetintroduction",
          link: "",
          collapsible: true,
          children: [],
        },
        {
          text: "🔮行星物质科学",
          icon: "",
          prefix: "/planetsci/planetmaterial",
          link: "",
          collapsible: true,
          children: ["igneous_rock-0.md"],
        },
        {
          text: "🏔️行星表面过程",
          icon: "",
          collapsible: true,
          children: [],
        },
        {
          text: "🌋行星内部结构",
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
          prefix: "/biosci/genetics",
          link: "",
          collapsible: true,
          children: ["Genetics-FG2G_6ed_Chapter-1.md"],
        },
        {
          text: "发育生物学",
          icon: "fluent-emoji:fly",
          prefix: "/biosci/devebio",
          link: "",
          collapsible: true,
          children: ["devebio-0.md"],
        },
      ],
    },
    {
      text: "🛸 天体生物学",
      icon: "",
      prefix: "/astrobio/",
      link: "",
      collapsible: true,
      children: [
        "astrobio-i0.md",
        "astrobio-c0.md"
      ],
    },
    {
      text: "🔢 数学物理",
      icon: "",
      prefix: "/math/",
      link: "",
      collapsible: true,
      children: ["math_intro.md",
        {
          text: "高等数学",
          icon: "",
          prefix: "/math/advanced_math",
          link: "",
          collapsible: true,
          children: ["advanced_math-0.md"],
        },
        {
          text: "普通物理",
          icon: "",
          prefix: "/math/general_physics",
          link: "",
          collapsible: true,
          children: ["general_physics-0.md"],
        },
        {
          text: "概率统计",
          icon: "",
          prefix: "/math/statistics",
          link: "",
          collapsible: true,
          children: ["statistics-0.md"],
        },
        "gdc.md",
        "Legendre.md",
        "spherical-triangle.md",
      ],
    },
    {
      text: "📚 通识教育",
      icon: "",
      prefix: "/general/",
      link: "",
      collapsible: true,
      children: [
        "general_intro.md",
        "Japeco-0.md"
      ],
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
  "/astrobio/astrobio-course": "structure",
  "/biosci/genetics/": "structure",
  "/biosci/devebio/": "structure",
  "/math/advanced_math/": "structure",
  "/math/statistics/": "structure",
  "/general/Japeco/": "structure",
  "/planetsci/planetmaterial": "structure",



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
