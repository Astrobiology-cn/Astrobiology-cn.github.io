import MarkdownIt from "markdown-it";
import containerPlugin from "markdown-it-container";

export default function calloutPlugin(md: MarkdownIt) {
    const types = ["note", "tip", "info", "warning", "caution", "important"];

    types.forEach((type) => {
        md.use(containerPlugin, `callout-${type}`, {
            validate: (params) => {
                return params.trim().match(new RegExp(`^> [!](?:${type})`));
            },
            render: (tokens, idx) => {
                const token = tokens[idx];
                if (token.nesting === 1) {
                    // 开始标签
                    return `<div class="callout callout-${type}">`;
                } else {
                    // 结束标签
                    return "</div>";
                }
            },
        });
    });
}