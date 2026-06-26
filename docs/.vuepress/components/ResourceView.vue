<script setup>
import resourcesData from "../data/resources.json";

const categories = [
  { key: "databases", label: "数据库", icon: "database" },
  { key: "tools", label: "工具", icon: "tools" },
  { key: "journals", label: "期刊", icon: "book" },
  { key: "conferences", label: "会议", icon: "calendar" },
  { key: "education", label: "教育", icon: "graduation-cap" },
];

const activeCategory = defineModel("activeCategory", { default: "databases" });
</script>

<template>
  <div class="resource-page">
    <div class="resource-header">
      <h1 class="resource-title">外部资源</h1>
      <p class="resource-subtitle">
        精选行星科学相关数据库、工具、期刊与网站
      </p>
    </div>

    <!-- 分类导航 -->
    <div class="resource-nav">
      <button
        v-for="cat in categories"
        :key="cat.key"
        class="resource-nav-item"
        :class="{ active: activeCategory === cat.key }"
        @click="activeCategory = cat.key"
      >
        <i :class="`fas fa-${cat.icon}`"></i>
        {{ cat.label }}
      </button>
    </div>

    <!-- 内容区 -->
    <div class="resource-content">
      <div
        v-for="item in resourcesData[activeCategory]"
        :key="item.name"
        class="resource-card"
      >
        <div class="resource-card-header">
          <h3 class="resource-name">{{ item.name }}</h3>
          <span v-if="item.tag" class="resource-tag">{{ item.tag }}</span>
        </div>
        <p class="resource-desc">{{ item.description }}</p>
        <div class="resource-meta">
          <span v-if="item.language" class="resource-lang">{{ item.language }}</span>
          <a
            v-if="item.url"
            :href="item.url"
            target="_blank"
            class="resource-link"
          >
            访问网站 <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resource-page {
  max-width: var(--fk-container-max, 1200px);
  margin: 0 auto;
  padding: var(--fk-space-6) var(--fk-space-5);
}

.resource-header {
  text-align: center;
  margin-bottom: var(--fk-space-6);
}

.resource-title {
  font-family: var(--fk-font-serif, serif);
  font-size: var(--fk-text-h1, 36px);
  line-height: var(--fk-lh-h1, 1.2);
  letter-spacing: var(--fk-ls-h1, -0.015em);
  font-weight: 600;
  color: var(--fk-text, #1E1E1E);
  margin-bottom: var(--fk-space-3);
}

.resource-subtitle {
  font-size: var(--fk-text-body, 16px);
  color: var(--fk-text-secondary, #6B6B6B);
  max-width: 600px;
  margin: 0 auto;
  line-height: var(--fk-lh-body, 1.6);
}

.resource-nav {
  display: flex;
  gap: var(--fk-space-2, 8px);
  margin-bottom: var(--fk-space-6);
  padding-bottom: var(--fk-space-4);
  border-bottom: 1px solid var(--fk-border, #EFEFEF);
  flex-wrap: wrap;
}

.resource-nav-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: var(--fk-radius-md, 8px);
  font-size: var(--fk-text-body-sm, 14px);
  font-weight: 500;
  color: var(--fk-text-secondary, #6B6B6B);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.resource-nav-item:hover {
  background: var(--fk-bg-alt, #F5F3EF);
  color: var(--fk-text, #1E1E1E);
}

.resource-nav-item.active {
  background: var(--fk-accent-bg, #E8F5EE);
  color: var(--fk-accent, #0C8C5E);
  font-weight: 600;
}

.resource-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: var(--fk-space-5, 24px);
}

.resource-card {
  background: var(--fk-surface, #FFFFFF);
  border: 1px solid var(--fk-border, #EFEFEF);
  border-radius: var(--fk-radius-lg, 12px);
  padding: var(--fk-space-5, 24px);
  box-shadow: var(--fk-shadow-sm, 0 1px 3px rgba(0,0,0,0.04));
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: var(--fk-space-3, 12px);
}

.resource-card:hover {
  box-shadow: var(--fk-shadow-md, 0 4px 12px rgba(0,0,0,0.06));
  transform: translateY(-2px);
}

.resource-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--fk-space-3);
}

.resource-name {
  font-size: var(--fk-text-h4, 18px);
  font-weight: 600;
  color: var(--fk-text, #1E1E1E);
  margin: 0;
  font-family: var(--fk-font-sans, sans-serif);
}

.resource-tag {
  background: var(--fk-link-bg, #EDF4FC);
  color: var(--fk-link, #478CD0);
  border-radius: 9999px;
  padding: 2px 10px;
  font-size: var(--fk-text-caption, 12px);
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
}

.resource-desc {
  font-size: var(--fk-text-body-sm, 14px);
  color: var(--fk-text-secondary, #6B6B6B);
  line-height: 1.5;
  margin: 0;
  flex-grow: 1;
}

.resource-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--fk-space-3);
  border-top: 1px solid var(--fk-border, #EFEFEF);
}

.resource-lang {
  font-size: var(--fk-text-caption, 12px);
  color: var(--fk-text-muted, #9E9E9E);
  font-weight: 500;
}

.resource-link {
  font-size: var(--fk-text-body-sm, 14px);
  color: var(--fk-link, #478CD0);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
}

.resource-link:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 640px) {
  .resource-content {
    grid-template-columns: 1fr;
  }

  .resource-nav {
    gap: 4px;
  }

  .resource-nav-item {
    padding: 6px 12px;
    font-size: 13px;
  }
}
</style>
