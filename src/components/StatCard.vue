<script setup>
// KPI 요약(stat) - 발표자료 ② 규격
// 라벨 12px 검정 60% · 값 24px/800 상태색
// 예: 부하 KPI는 에너지 팔레트의 --energy-load(#ab44c8) 사용
defineProps({
  // KPI 라벨
  label: {
    type: String,
    required: true,
  },
  // KPI 값
  value: {
    type: [String, Number],
    required: true,
  },
  // 값 뒤에 붙는 단위
  unit: {
    type: String,
    default: '',
  },
  // 값에 적용할 색 - 토큰 변수 또는 HEX
  valueColor: {
    type: String,
    default: 'var(--base-content)',
  },
  // 보조 설명 (전일 대비 등)
  hint: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="stat">
    <div class="stat__label">{{ label }}</div>
    <div class="stat__value" :style="{ color: valueColor }">
      {{ value }}<span v-if="unit" class="stat__unit">{{ unit }}</span>
    </div>
    <div v-if="hint" class="stat__hint">{{ hint }}</div>
  </div>
</template>

<style scoped>
.stat {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  min-width: 160px;
  padding: 16px 18px;
  /* 값에 상태색을 쓰므로 대비 기준(3:1)이 성립하는 흰 배경을 쓴다 */
  background-color: var(--base-100);
  border: var(--card-border);
  border-radius: var(--radius-card);
  font-family: var(--font-sans);
}

/* 라벨 12px · 검정 60% */
.stat__label {
  font-size: var(--fs-label);
  font-weight: var(--fw-regular);
  color: var(--alpha-60);
}

/* 값 24px/800 - 줄이면 대비 4.5:1 요구가 걸리므로 크기·굵기를 유지한다 */
.stat__value {
  font-size: var(--fs-title);
  font-weight: var(--fw-black);
  line-height: 1.2;
}

/* 단위는 14px 작은 글자라 상태색 대신 기본 텍스트색을 쓴다 (대비 4.5:1 확보) */
.stat__unit {
  font-size: var(--fs-body);
  font-weight: var(--fw-bold);
  margin-left: 3px;
  color: var(--base-content);
}

/* 보조 정보 12px · 검정 60% */
.stat__hint {
  font-size: var(--fs-label);
  font-weight: var(--fw-regular);
  color: var(--alpha-60);
}
</style>
