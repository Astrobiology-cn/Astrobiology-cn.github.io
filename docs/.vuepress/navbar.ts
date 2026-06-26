import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "学科知识",
    icon: "book",
    prefix: "/knowledge/",
    children: [
      { text: "数学物理方法", icon: "calculator", link: "math-physics/" },
      { text: "回归分析", icon: "chart-line", link: "regression/" },
      { text: "宇宙化学", icon: "flask", link: "cosmochemistry/" },
      { text: "行星科学基础", icon: "globe", link: "planetary-basics/" },
      { text: "地球物理学", icon: "mountain", link: "geophysics/" },
      { text: "遥感技术", icon: "satellite", link: "remote-sensing/" },
    ],
  },
  {
    text: "学者资源",
    icon: "user-graduate",
    link: "/scholars/",
  },
  {
    text: "外部资源",
    icon: "link",
    link: "/resources/",
  },
  {
    text: "关于",
    icon: "circle-info",
    link: "/intro.html",
  },
]);
