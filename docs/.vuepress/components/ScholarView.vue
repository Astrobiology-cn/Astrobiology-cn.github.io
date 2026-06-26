<script setup>
import { ref, computed, onMounted } from "vue";
import scholarsData from "../data/scholars.json";

const scholars = ref(scholarsData);

// 视图模式：从 localStorage 读取，默认 grid
const viewMode = ref("grid");

onMounted(() => {
  const saved = localStorage.getItem("psh-scholar-view");
  if (saved && ["list", "grid"].includes(saved)) {
    viewMode.value = saved;
  }
});

function setView(mode) {
  viewMode.value = mode;
  localStorage.setItem("psh-scholar-view", mode);
}

const countryLabel = (c) => {
  const map = { USA: "🇺🇸 美国", China: "🇨🇳 中国", France: "🇫🇷 法国" };
  return map[c] || c;
};

const initials = (name) => {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const avatarColor = (name) => {
  const colors = [
    "#0C8C5E",
    "#478CD0",
    "#6366F1",
    "#A855F7",
    "#22C55E",
    "#FB9100",
    "#F77463",
    "#14B8A6",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
};
</script>

<template>
  <div class="scholar-page">
    <!-- 标题区 -->
    <div class="scholar-header">
      <h1 class="scholar-title">学者资源</h1>
      <p class="scholar-subtitle">
        汇集行星科学领域的国内外知名学者与研究机构
      </p>
    </div>

    <!-- 统计与视图切换 -->
    <div class="scholar-toolbar">
      <span class="scholar-count">共 {{ scholars.length }} 位学者</span>

      <div class="fk-segmented-control">
        <button
          class="fk-segment"
          :class="{ active: viewMode === 'list' }"
          @click="setView('list')"
        >
          <i class="fas fa-list"></i> 列表
        </button>
        <button
          class="fk-segment"
          :class="{ active: viewMode === 'grid' }"
          @click="setView('grid')"
        >
          <i class="fas fa-th-large"></i> 展板
        </button>
      </div>
    </div>

    <!-- 展板视图 (Grid) -->
    <div v-if="viewMode === 'grid'" class="scholar-grid">
      <div
        v-for="s in scholars"
        :key="s.name"
        class="fk-scholar-card"
      >
        <!-- 头像 -->
        <div
          class="scholar-avatar"
          :style="{ backgroundColor: avatarColor(s.name) }"
        >
          <span class="avatar-initials">{{ initials(s.name) }}</span>
        </div>

        <!-- 信息 -->
        <div class="scholar-info">
          <h3 class="scholar-name">{{ s.nameCn || s.name }}</h3>
          <p v-if="s.nameCn" class="scholar-name-en">{{ s.name }}</p>
          <p class="scholar-institution">
            {{ s.institutionCn || s.institution }}
          </p>
          <p class="scholar-country">{{ countryLabel(s.country) }}</p>
        </div>

        <!-- 研究方向标签 -->
        <div class="scholar-tags">
          <span v-for="f in s.fields" :key="f" class="fk-tag">{{ f }}</span>
        </div>

        <!-- 简介 -->
        <p class="scholar-bio">{{ s.bio }}</p>

        <!-- 亮点 -->
        <div class="scholar-highlight">
          <i class="fas fa-star"></i> {{ s.highlight }}
        </div>

        <!-- 链接 -->
        <a
          v-if="s.homepage"
          :href="s.homepage"
          target="_blank"
          class="scholar-link"
        >
          个人主页 <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>

    <!-- 列表视图 (List) -->
    <div v-else class="scholar-list-wrapper">
      <table class="fk-list-view">
        <thead>
          <tr>
            <th>姓名</th>
            <th>机构</th>
            <th>国家</th>
            <th>研究方向</th>
            <th>代表作</th>
            <th>链接</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in scholars" :key="s.name">
            <td class="fk-list-name">
              {{ s.nameCn || s.name }}
              <span v-if="s.nameCn" class="name-en">{{ s.name }}</span>
            </td>
            <td>{{ s.institutionCn || s.institution }}</td>
            <td>{{ countryLabel(s.country) }}</td>
            <td>
              <span v-for="f in s.fields" :key="f" class="fk-tag">{{ f }}</span>
            </td>
            <td>{{ s.highlight }}</td>
            <td>
              <a v-if="s.homepage" :href="s.homepage" target="_blank" class="fk-list-link">
                主页
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.scholar-page {
  max-width: var(--fk-container-max, 1200px);
  margin: 0 auto;
  padding: var(--fk-space-6) var(--fk-space-5);
}

.scholar-header {
  text-align: center;
  margin-bottom: var(--fk-space-6);
}

.scholar-title {
  font-family: var(--fk-font-serif, serif);
  font-size: var(--fk-text-h1, 36px);
  line-height: var(--fk-lh-h1, 1.2);
  letter-spacing: var(--fk-ls-h1, -0.015em);
  font-weight: 600;
  color: var(--fk-text, #1E1E1E);
  margin-bottom: var(--fk-space-3);
}

.scholar-subtitle {
  font-size: var(--fk-text-body, 16px);
  color: var(--fk-text-secondary, #6B6B6B);
  max-width: 600px;
  margin: 0 auto;
  line-height: var(--fk-lh-body, 1.6);
}

.scholar-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--fk-space-6);
  padding: var(--fk-space-3) 0;
  border-bottom: 1px solid var(--fk-border, #EFEFEF);
}

.scholar-count {
  font-size: var(--fk-text-body-sm, 14px);
  color: var(--fk-text-muted, #9E9E9E);
  font-weight: 500;
}

/* Grid View */
.scholar-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--fk-space-5, 24px);
}

.fk-scholar-card {
  background: var(--fk-surface, #FFFFFF);
  border: 1px solid var(--fk-border, #EFEFEF);
  border-radius: var(--fk-radius-xl, 16px);
  padding: var(--fk-space-5, 24px);
  box-shadow: var(--fk-shadow-sm, 0 1px 3px rgba(0,0,0,0.04));
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: var(--fk-space-3, 12px);
  overflow: hidden;
}

.fk-scholar-card:hover {
  box-shadow: var(--fk-shadow-md, 0 4px 12px rgba(0,0,0,0.06));
  transform: translateY(-2px);
}

.scholar-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 20px;
  flex-shrink: 0;
  font-family: var(--fk-font-sans, sans-serif);
}

.avatar-initials {
  line-height: 1;
}

.scholar-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.scholar-name {
  font-family: var(--fk-font-serif, serif);
  font-size: var(--fk-text-h4, 18px);
  font-weight: 600;
  color: var(--fk-text, #1E1E1E);
  margin: 0;
}

.scholar-name-en {
  font-size: var(--fk-text-body-sm, 14px);
  color: var(--fk-text-muted, #9E9E9E);
  margin: 0;
  font-style: italic;
}

.scholar-institution {
  font-size: var(--fk-text-body-sm, 14px);
  color: var(--fk-text-secondary, #6B6B6B);
  margin: 0;
}

.scholar-country {
  font-size: var(--fk-text-caption, 12px);
  color: var(--fk-text-muted, #9E9E9E);
  margin: 0;
}

.scholar-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fk-space-2, 8px);
  margin-top: var(--fk-space-1, 4px);
}

.fk-tag {
  background: var(--fk-accent-bg, #E8F5EE);
  color: var(--fk-accent, #0C8C5E);
  border-radius: 9999px;
  padding: 4px 12px;
  font-size: var(--fk-text-caption, 12px);
  font-weight: 500;
  white-space: nowrap;
}

.scholar-bio {
  font-size: var(--fk-text-body-sm, 14px);
  color: var(--fk-text-secondary, #6B6B6B);
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.scholar-highlight {
  font-size: var(--fk-text-caption, 12px);
  color: var(--fk-warn, #FB9100);
  background: var(--fk-warn-bg, #FFF8E8);
  padding: 6px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}

.scholar-link {
  font-size: var(--fk-text-body-sm, 14px);
  color: var(--fk-link, #478CD0);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  padding-top: var(--fk-space-2, 8px);
  border-top: 1px solid var(--fk-border, #EFEFEF);
}

.scholar-link:hover {
  text-decoration: underline;
}

/* List View */
.scholar-list-wrapper {
  overflow-x: auto;
}

.fk-list-view {
  width: 100%;
  border-collapse: collapse;
  background: var(--fk-surface, #FFFFFF);
  border-radius: var(--fk-radius-lg, 12px);
  overflow: hidden;
  box-shadow: var(--fk-shadow-sm, 0 1px 3px rgba(0,0,0,0.04));
  border: 1px solid var(--fk-border, #EFEFEF);
}

.fk-list-view th,
.fk-list-view td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--fk-border, #EFEFEF);
}

.fk-list-view th {
  font-size: 11px;
  font-weight: 600;
  color: var(--fk-text-muted, #9E9E9E);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: var(--fk-bg-alt, #F5F3EF);
}

.fk-list-view td {
  font-size: var(--fk-text-body-sm, 14px);
  color: var(--fk-text, #1E1E1E);
  vertical-align: top;
}

.fk-list-view tr:hover td {
  background-color: var(--fk-bg-alt, #F5F3EF);
}

.fk-list-view tr:last-child td {
  border-bottom: none;
}

.fk-list-name {
  font-weight: 600;
  color: var(--fk-text, #1E1E1E);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.name-en {
  font-weight: 400;
  color: var(--fk-text-muted, #9E9E9E);
  font-size: 12px;
  font-style: italic;
}

.fk-list-link {
  color: var(--fk-link, #478CD0);
  font-size: 12px;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 640px) {
  .scholar-grid {
    grid-template-columns: 1fr;
  }

  .scholar-toolbar {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  .fk-list-view th,
  .fk-list-view td {
    padding: 8px 12px;
    font-size: 12px;
  }
}
</style>
