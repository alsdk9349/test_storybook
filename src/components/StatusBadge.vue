<script setup>
// 상태 뱃지 - 발표자료 B. 등급 · 상태 색상 기준
// 색만으로 뜻을 전달하지 않는다 - 도형 마커 + 라벨을 항상 함께 노출한다 (WCAG SC 1.4.1)
import { computed } from 'vue';

// 상태 그룹별 색상 정의
const 색상표 = {
  // 운영 상태
  ops: {
    정상: '#22C55E',
    주의: '#F59E0B',
    경보: '#EF4444',
    미계측: '#94A3B8',
  },
  // 정산 상태
  settle: {
    확정: '#22C55E',
    지급완료: '#38BDF8',
    검증중: '#F59E0B',
    조정중: '#AB47BC',
  },
  // 이벤트 심각도 - '높음'과 '보통'은 반드시 다른 색
  severity: {
    심각: '#D32F2F',
    높음: '#F57C00',
    보통: '#FBC02D',
    낮음: '#42A5F5',
    정상: '#66BB6A',
  },
  // 대기질 등급
  air: {
    좋음: '#1c67d7',
    보통: '#01b56e',
    나쁨: '#f9c700',
    매우나쁨: '#e53030',
  },
  // 부하대
  load: {
    경부하: '#fe6d5f',
    중간부하: '#e9483d',
    최대부하: '#cc2823',
  },
};

const props = defineProps({
  // 상태 그룹
  group: {
    type: String,
    default: 'ops',
    validator: (value) => ['ops', 'settle', 'severity', 'air', 'load'].includes(value),
  },
  // 상태 값 (그룹 안의 라벨)
  status: {
    type: String,
    required: true,
  },
});

// 그룹과 상태로 색을 찾는다. 없으면 무채색으로 처리한다.
const 색 = computed(() => 색상표[props.group]?.[props.status] ?? '#94A3B8');
</script>

<template>
  <span class="badge" :style="{ borderColor: 색, color: 색 }">
    <span class="badge__dot" :style="{ backgroundColor: 색 }" aria-hidden="true"></span>
    <span class="badge__label">{{ status }}</span>
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 24px;
  padding: 0 10px;
  font-family: var(--font-sans);
  font-size: var(--fs-label);
  font-weight: var(--fw-bold);
  line-height: 1;
  background-color: var(--base-100);
  border: 1px solid;
  border-radius: 999px;
  white-space: nowrap;
}

/* 색 이외의 단서 - 도형 마커 */
.badge__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
