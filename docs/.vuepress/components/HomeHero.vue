<script setup></script>

<template>
  <div class="fk-hero">
    <div class="fk-hero-content">
      <h1 class="fk-hero-title">行星科学知识库</h1>
      <p class="fk-hero-subtitle">
        探索宇宙奥秘，共享行星科学学习资源
      </p>
      <div class="fk-hero-actions">
        <a href="/planetary-science/knowledge/math-physics/" class="vp-button primary">
          开始学习
        </a>
        <a href="/planetary-science/intro.html" class="vp-button ghost">
          了解更多
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fk-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: var(--fk-space-10, 128px) var(--fk-space-5, 24px);
  text-align: center;
  background: linear-gradient(
    180deg,
    var(--fk-bg, #FAFAF8) 0%,
    var(--fk-bg-alt, #F5F3EF) 100%
  );
  border-bottom: 1px solid var(--fk-border, #EFEFEF);
}

.fk-hero-content {
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--fk-space-4, 16px);
}

.fk-hero-title {
  font-family: var(--fk-font-serif, "Crimson Pro", Georgia, serif);
  font-size: var(--fk-text-display, 48px);
  line-height: var(--fk-lh-display, 1.15);
  letter-spacing: var(--fk-ls-display, -0.02em);
  font-weight: 600;
  color: var(--fk-text, #1E1E1E);
  margin: 0;
}

.fk-hero-subtitle {
  font-family: var(--fk-font-sans, "Inter", sans-serif);
  font-size: var(--fk-text-body-lg, 18px);
  line-height: var(--fk-lh-body, 1.6);
  color: var(--fk-text-secondary, #6B6B6B);
  margin: 0;
  max-width: 480px;
}

.fk-hero-actions {
  display: flex;
  gap: var(--fk-space-3, 12px);
  flex-wrap: wrap;
  justify-content: center;
  margin-top: var(--fk-space-2, 8px);
}

/* Responsive */
@media (max-width: 640px) {
  .fk-hero {
    min-height: 50vh;
    padding: var(--fk-space-8, 64px) var(--fk-space-4, 16px);
  }

  .fk-hero-title {
    font-size: 36px;
  }

  .fk-hero-subtitle {
    font-size: var(--fk-text-body, 16px);
  }
}
</style>
