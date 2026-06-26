# 行星科学知识库 - 工作流文档

## 概述

本项目采用 **Obsidian + VuePress** 双平台工作流：
- **Obsidian**：本地 Markdown 编辑与预览
- **VuePress**：静态网站构建与部署

## 目录结构

```
planetary-science/
├── docs/                          # VuePress 网站内容
│   ├── .vuepress/                 # VuePress 配置
│   │   ├── components/            # 自定义 Vue 组件
│   │   ├── data/                  # JSON 数据文件
│   │   ├── styles/                # 自定义样式
│   │   ├── config.ts              # 主配置
│   │   ├── theme.ts               # 主题配置
│   │   ├── client.ts              # 客户端配置
│   │   ├── navbar.ts              # 导航栏
│   │   └── sidebar.ts             # 侧边栏
│   ├── README.md                  # 首页（自定义 Vue 组件）
│   ├── intro.md                   # 关于页面
│   ├── knowledge/                 # 学科知识（Obsidian 同步）
│   │   ├── math-physics/
│   │   ├── regression/
│   │   ├── cosmochemistry/
│   │   ├── planetary-basics/
│   │   ├── geophysics/
│   │   └── remote-sensing/
│   ├── scholars/                  # 学者资源（Vue 组件）
│   └── resources/                 # 外部资源（Vue 组件）
├── .obsidian/
│   └── snippets/
│       └── fresh-knowledge.css    # Obsidian CSS 片段
├── DESIGN.md                      # 设计系统规范
└── package.json
```

## 写作工作流

### 1. 在 Obsidian 中编辑

打开 `docs/knowledge/` 目录下的 Markdown 文件，使用 Obsidian 编辑。

### 2. 兼容语法对照

| 功能 | Obsidian 语法 | VuePress 效果 | 说明 |
|------|--------------|--------------|------|
| **定理** | `> [!theorem] 标题` | 蓝色定理框 | 两边都支持 |
| **证明** | `> [!proof]` | 灰色证明框 + QED | 两边都支持 |
| **定义** | `> [!definition] 标题` | 紫色定义框 | 两边都支持 |
| **示例** | `> [!example] 标题` | 绿色示例框 | 两边都支持 |
| **提示** | `> [!note]` / `> [!tip]` | 绿色提示框 | 两边都支持 |
| **警告** | `> [!warning]` | 黄色警告框 | 两边都支持 |
| **图注** | `<figure>` + `<figcaption>` | 居中图片 + 图注 | 两边都支持 |
| **数学公式** | `$...$` / `$$...$$` | KaTeX 渲染 | 两边都支持 |
| **代码块** | ` ```python ` | 代码高亮 | 两边都支持 |
| **表格** | `| 表头 |` | 样式表格 | 两边都支持 |
| **链接** | `[文本](URL)` | 可点击链接 | 两边都支持 |

### 3. 不兼容语法（避免使用）

| Obsidian 语法 | VuePress 不支持 | 替代方案 |
|--------------|----------------|----------|
| `![[内部链接]]` | 内部链接 | 使用标准 `[文本](路径)` |
| `%%注释%%` | 注释语法 | 使用 HTML `<!-- 注释 -->` |
| ```` ```query ```` | 查询块 | 不使用 |
| `^块引用` | 块引用 | 不使用 |

### 4. 构建与部署

```bash
# 本地预览
npm run docs:dev

# 构建
npm run docs:build

# 部署（GitHub Actions 自动部署到 gh-pages）
# 只需 push 到 main 分支
```

## 学者/资源页面数据更新

学者信息和外部资源数据存储在 JSON 文件中：
- `docs/.vuepress/data/scholars.json`
- `docs/.vuepress/data/resources.json`

直接编辑 JSON 文件即可更新页面内容，无需修改 Markdown。

## Obsidian 配置

1. 将 `docs/knowledge/` 作为 Obsidian Vault 的子目录打开
2. 在 Obsidian 设置 → 外观 → CSS 片段中，启用 `fresh-knowledge.css`
3. 确保已安装第三方插件（可选）：
   - **MathJax**: 用于数学公式渲染
   - **Dataview**: 如需查询文档

## 设计系统参考

项目遵循 `DESIGN.md` 中的 FreshKnowledge 设计系统：
- **颜色**: `#FAFAF8` 暖白背景，`#0C8C5E` 青绿强调色
- **字体**: Crimson Pro（衬线标题）+ Inter（无衬线正文）
- **间距**: 4px 基准网格，section 间最小 64px

## 贡献指南

1. 在 Obsidian 中编辑 `docs/knowledge/` 下的 Markdown 文件
2. 使用兼容语法（参考上表）
3. 提交 Pull Request 到 GitHub
4. GitHub Actions 自动构建并部署
