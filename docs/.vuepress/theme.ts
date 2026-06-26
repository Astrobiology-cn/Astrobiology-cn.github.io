import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
  {
    hostname: "https://astrobiology-cn.github.io",

    author: {
      name: "Planetary Science Hub",
      url: "https://github.com/Astrobiology-cn",
    },

    iconAssets: "fontawesome-with-brands",

    logo: "/logo.svg",

    repo: "https://github.com/Astrobiology-cn/Astrobiology-cn.github.io",
    repoLabel: "GitHub",
    repoDisplay: true,

    docsDir: "docs",

    navbar,
    sidebar,

    footer: "行星科学知识库 | 探索宇宙的奥秘",
    displayFooter: true,

    metaLocales: {
      editLink: "在 GitHub 上编辑此页",
    },

    plugins: {
      copyCode: {
        showInMobile: false,
      },
    },

    markdown: {
      align: true,
      attrs: true,
      codeTabs: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      figure: true,
      math: {
        type: "katex",
      },
      mark: true,
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
  { custom: true },
);
