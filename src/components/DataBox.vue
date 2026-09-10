<script setup>
// 서브 페이지의 카드(data-box) - 발표자료 ① 레이아웃 규격
// 배경 #f7f9fc · 테두리 #dfe4ec 1px · 반경 8px
// 박스 제목 18px/600 · 본문 14px · 콘텐츠 여백 20px(p-5)
defineProps({
  // 박스 제목
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <section class="data-box">
    <header v-if="title || $slots.action" class="data-box__header">
      <h3 v-if="title" class="data-box__title">{{ title }}</h3>
      <!-- 우측 액션 영역 (버튼 등) -->
      <div class="data-box__action">
        <slot name="action" />
      </div>
    </header>

    <div class="data-box__body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.data-box {
  background-color: var(--neutral);
  border: var(--card-border);
  border-radius: var(--radius-card);
  padding: var(--card-padding);
  font-family: var(--font-sans);
  color: var(--base-content);
}

.data-box__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

/* 박스 제목 18px/600 */
.data-box__title {
  font-size: var(--fs-box-title);
  font-weight: var(--fw-bold);
  margin: 0;
}

/* 본문 14px */
.data-box__body {
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  line-height: 1.7;
}
</style>
