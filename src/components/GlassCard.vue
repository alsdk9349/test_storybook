<script setup>
// 메인(지도) 대시보드 글래스 카드 - 발표자료 ④ 규격
// 배경 : 그라디언트 165° rgba(255,255,255,.72) -> rgba(246,249,255,.55)
// 블러 : backdrop blur(16px) + saturate(1.2) · 테두리 검정 8% 1px
// 반경 14px · 그림자 rgba(16,24,40,.10) 0 4px 24px + 안쪽 흰 70% 하이라이트
// 카드 제목 12px/600 검정 82% · 제목 밑줄 검정 8% · 선택 위젯은 앰버 테두리
defineProps({
  // 위젯 카드 제목
  title: {
    type: String,
    default: '',
  },
  // 선택된 위젯 여부 - 선택 시 앰버 테두리
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="glass" :class="{ 'glass--selected': selected }">
    <header v-if="title" class="glass__header">{{ title }}</header>
    <div class="glass__body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.glass {
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.72),
    rgba(246, 249, 255, 0.55)
  );
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--radius-glass);
  box-shadow:
    rgba(16, 24, 40, 0.1) 0 4px 24px,
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  padding: 14px 16px;
  font-family: var(--font-sans);
  color: var(--base-content);
}

/* 선택 위젯 - 앰버 테두리 */
.glass--selected {
  border-color: #f59e0b;
}

/* 카드 제목 12px/600 · 검정 82% · 밑줄 검정 8% */
.glass__header {
  font-size: var(--fs-label);
  font-weight: var(--fw-bold);
  color: rgba(0, 0, 0, 0.82);
  padding-bottom: 8px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.glass__body {
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  line-height: 1.7;
}
</style>
