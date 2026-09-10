<script setup>
// 버튼 - 발표자료 ② 컴포넌트 규격
// primary : 배경 #1d63d8 · 글자 #ffffff · 테두리 #1a57be 1px · 반경 4px · 14px/600
// normal  : 배경 #f1f4f9 · 글자 #1b2430 · 테두리 검정 12%
// text    : 비활성 탭 등 - 검정 55% 글자만
defineProps({
  // 버튼 문구
  label: {
    type: String,
    required: true,
  },
  // 버튼 종류
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'normal', 'text'].includes(value),
  },
  // 비활성 여부
  disabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['click']);
</script>

<template>
  <button
    type="button"
    class="guide-btn"
    :class="`guide-btn--${variant}`"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.guide-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 16px;
  font-family: var(--font-sans);
  font-size: var(--fs-body);
  font-weight: var(--fw-bold);
  border-radius: var(--radius-control);
  border: 1px solid transparent;
  cursor: pointer;
  transition: filter 0.15s ease;
}

.guide-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.guide-btn:not(:disabled):hover {
  filter: brightness(0.96);
}

/* 주 버튼 */
.guide-btn--primary {
  background-color: var(--primary);
  color: #ffffff;
  border-color: var(--primary-border);
}

/* 보통 버튼 */
.guide-btn--normal {
  background-color: var(--base-200);
  color: var(--base-content);
  border-color: rgba(0, 0, 0, 0.12);
}

/* 텍스트 버튼 - 비활성 탭 · 미선택 항목 */
.guide-btn--text {
  background-color: transparent;
  color: var(--alpha-55);
  border-color: transparent;
}
</style>
