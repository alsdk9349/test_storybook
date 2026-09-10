<script setup>
// 공통 버튼 컴포넌트
// 부모로부터 받는 값(props)을 정의하면 Storybook Controls 패널에 자동으로 노출된다.
defineProps({
  // 버튼에 표시할 문구
  label: {
    type: String,
    required: true,
  },
  // 버튼 종류 - 기본(primary) / 보조(secondary) / 위험(danger)
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
  },
  // 버튼 크기
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  // 비활성 여부
  disabled: {
    type: Boolean,
    default: false,
  },
});

// 부모로 전달하는 이벤트 정의
defineEmits(['click']);
</script>

<template>
  <button
    type="button"
    class="base-button"
    :class="[`base-button--${variant}`, `base-button--${size}`]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: 'Pretendard', 'Malgun Gothic', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.base-button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

/* 종류별 색상 - 한전KDN 네이비 계열 */
.base-button--primary {
  background-color: #004098;
  color: #ffffff;
}

.base-button--secondary {
  background-color: #ffffff;
  color: #004098;
  border-color: #004098;
}

.base-button--danger {
  background-color: #c62828;
  color: #ffffff;
}

/* 크기별 여백과 글자 크기 */
.base-button--small {
  padding: 6px 12px;
  font-size: 12px;
}

.base-button--medium {
  padding: 9px 18px;
  font-size: 14px;
}

.base-button--large {
  padding: 13px 26px;
  font-size: 16px;
}
</style>
