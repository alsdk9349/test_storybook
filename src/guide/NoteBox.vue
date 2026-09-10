<script setup>
// 색상 가이드 문서용 주석 박스
// 원본 슬라이드 하단의 설명 박스와 같은 형태다.
// warn : 연한 살구 배경 + 주홍 글자 (주의·문제 지적)
// info : 연한 청록 배경 + 기본 글자 (보충 설명)
defineProps({
  // 박스 종류
  variant: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'warn'].includes(value),
  },
  // 굵게 표시할 첫 줄 제목 (없으면 본문만)
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="note-box" :class="`note-box--${variant}`">
    <strong v-if="title" class="note-box__title">{{ title }}</strong>
    <div class="note-box__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.note-box {
  border-radius: 8px;
  padding: 14px 16px;
  font-size: 12px;
  line-height: 1.7;
  margin-bottom: 28px;
}

/* 보충 설명 */
.note-box--info {
  background-color: #eef6f5;
  border: 1px solid #cfe0dd;
  color: var(--base-content);
}

/* 주의 · 문제 지적 */
.note-box--warn {
  background-color: #fcefe9;
  border: 1px solid #f0c9b8;
  color: var(--base-content);
}

.note-box__title {
  display: block;
  font-weight: 700;
  margin-bottom: 4px;
}

.note-box--warn .note-box__title {
  color: #c0392b;
}
</style>
