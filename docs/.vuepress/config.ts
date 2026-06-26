import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

// 自定义 markdown-it 插件：解析 Obsidian Callout 语法
function calloutPlugin(md: any) {
  const calloutRegex = /^>\s*\[!?(\w+)\]\s*(.*)$/;

  md.block.ruler.before(
    "blockquote",
    "obsidian_callout",
    function (
      state: any,
      startLine: number,
      endLine: number,
      silent: boolean
    ): boolean {
      const start = state.bMarks[startLine] + state.tShift[startLine];
      const max = state.eMarks[startLine];
      const lineText = state.src.substring(start, max);

      const match = lineText.match(calloutRegex);
      if (!match) return false;

      const type = match[1].toLowerCase();
      const title =
        match[2].trim() ||
        type.charAt(0).toUpperCase() + type.slice(1);

      // 收集 callout 内容的所有行
      let nextLine = startLine + 1;

      while (nextLine < endLine) {
        const pos = state.bMarks[nextLine] + state.tShift[nextLine];
        const maxPos = state.eMarks[nextLine];
        const line = state.src.substring(pos, maxPos);

        // 检查是否仍然是引用块的一部分（以 > 开头或空行）
        if (!line.startsWith(">") && !line.match(/^\s*$/)) break;

        // 空行要向前看一行
        if (line.match(/^\s*$/)) {
          if (nextLine + 1 >= endLine) break;
          const lookAheadPos =
            state.bMarks[nextLine + 1] + state.tShift[nextLine + 1];
          const lookAheadMax = state.eMarks[nextLine + 1];
          const lookAheadLine = state.src.substring(
            lookAheadPos,
            lookAheadMax
          );
          if (!lookAheadLine.startsWith(">")) break;
        }

        nextLine++;
      }

      if (silent) return true;

      // 图标映射
      const iconMap: Record<string, string> = {
        note: "💡",
        tip: "💡",
        theorem: "📐",
        proof: "✏️",
        example: "📝",
        definition: "📖",
        warning: "⚠️",
        danger: "🚨",
        info: "ℹ️",
        success: "✅",
        question: "❓",
        quote: "💬",
      };
      const icon = iconMap[type] || "💡";

      // 创建 token
      const tokenOpen = state.push("callout_open", "div", 1);
      tokenOpen.markup = ">";
      tokenOpen.info = type;
      tokenOpen.attrs = [
        ["class", `callout callout-${type}`],
        ["data-callout", type],
      ];
      tokenOpen.meta = { title, icon };
      tokenOpen.map = [startLine, nextLine];

      // 标题
      const titleOpen = state.push("callout_title_open", "div", 1);
      titleOpen.meta = { icon, title };
      state.push("callout_title_close", "div", -1);

      // 内容区域
      const contentOpen = state.push("callout_content_open", "div", 1);
      contentOpen.attrs = [["class", "callout-content"]];

      // 处理内部内容：去掉每行开头的 "> " 或 ">"
      const oldTShift = [...state.tShift];
      for (let i = startLine + 1; i < nextLine; i++) {
        const pos = state.bMarks[i] + state.tShift[i];
        const maxPos = state.eMarks[i];
        const line = state.src.substring(pos, maxPos);
        if (line.startsWith("> ")) {
          state.tShift[i] = state.tShift[i] + 2;
        } else if (line.startsWith(">")) {
          state.tShift[i] = state.tShift[i] + 1;
        }
      }

      state.md.block.tokenize(state, startLine + 1, nextLine);

      // 恢复 tShift
      for (let i = startLine + 1; i < nextLine; i++) {
        state.tShift[i] = oldTShift[i];
      }

      state.push("callout_content_close", "div", -1);
      state.push("callout_close", "div", -1);

      state.line = nextLine;
      return true;
    }
  );

  // 渲染规则
  md.renderer.rules.callout_open = function (
    tokens: any[],
    idx: number
  ): string {
    const token = tokens[idx];
    const type = token.info;
    return `<div class="callout callout-${type}" data-callout="${type}">`;
  };
  md.renderer.rules.callout_close = function (): string {
    return "</div>";
  };
  md.renderer.rules.callout_title_open = function (
    tokens: any[],
    idx: number
  ): string {
    const token = tokens[idx];
    const icon = token.meta?.icon || "💡";
    const title = token.meta?.title || "";
    return `<div class="callout-title"><span class="callout-icon">${icon}</span><span>${title}</span></div>`;
  };
  md.renderer.rules.callout_title_close = function (): string {
    return "";
  };
  md.renderer.rules.callout_content_open = function (): string {
    return `<div class="callout-content">`;
  };
  md.renderer.rules.callout_content_close = function (): string {
    return "</div>";
  };
}

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "行星科学知识库",
  description: "行星科学学习资源与知识共享平台",

  bundler: viteBundler(),

  theme,

  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#0C8C5E" }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    ],
  ],

  extendsMarkdown: (md) => {
    md.use(calloutPlugin);
  },
});
