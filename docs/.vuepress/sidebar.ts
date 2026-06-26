import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/knowledge/": [
    {
      text: "数学物理方法",
      icon: "calculator",
      prefix: "math-physics/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "回归分析",
      icon: "chart-line",
      prefix: "regression/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "宇宙化学",
      icon: "flask",
      prefix: "cosmochemistry/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "行星科学基础",
      icon: "globe",
      prefix: "planetary-basics/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "地球物理学",
      icon: "mountain",
      prefix: "geophysics/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "遥感技术",
      icon: "satellite",
      prefix: "remote-sensing/",
      children: "structure",
      collapsible: true,
    },
  ],
  "/scholars/": [
    {
      text: "学者资源",
      icon: "user-graduate",
      link: "/scholars/",
    },
  ],
  "/resources/": [
    {
      text: "外部资源",
      icon: "link",
      link: "/resources/",
    },
  ],
});
