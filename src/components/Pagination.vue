<script setup>
// 페이지네이션 - 발표자료 ② 그리드 규격
// 활성: primary 배경 + #ffffff 글자 / 이전·다음: #f1f4f9 + 검정 12% 테두리
import { computed } from 'vue';

const props = defineProps({
  // 현재 페이지 (1부터 시작)
  current: {
    type: Number,
    default: 1,
  },
  // 전체 페이지 수
  total: {
    type: Number,
    default: 5,
  },
});

defineEmits(['update:current']);

// 1 ~ total 까지의 페이지 번호 목록
const 페이지목록 = computed(() =>
  Array.from({ length: props.total }, (_, i) => i + 1),
);
</script>

<template>
  <nav class="pager" aria-label="페이지 이동">
    <button
      type="button"
      class="pager__nav"
      :disabled="current <= 1"
      @click="$emit('update:current', current - 1)"
    >
      이전
    </button>

    <button
      v-for="page in 페이지목록"
      :key="page"
      type="button"
      class="pager__page"
      :class="{ 'pager__page--active': page === current }"
      :aria-current="page === current ? 'page' : undefined"
      @click="$emit('update:current', page)"
    >
      {{ page }}
    </button>

    <button
      type="button"
      class="pager__nav"
      :disabled="current >= total"
      @click="$emit('update:current', current + 1)"
    >
      다음
    </button>
  </nav>
</template>

<style scoped>
.pager {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-sans);
}

.pager__nav,
.pager__page {
  min-width: 32px;
  height: 32px;
  padding: 0 10px;
  font-family: var(--font-sans);
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  color: var(--base-content);
  background-color: var(--base-200);
  border: 1px solid var(--control-border);
  border-radius: var(--radius-control);
  cursor: pointer;
}

.pager__nav:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

/* 활성 페이지 번호 - primary 배경 + 흰 글자 */
.pager__page--active {
  background-color: var(--primary);
  border-color: var(--primary-border);
  color: #ffffff;
  font-weight: var(--fw-bold);
}
</style>
