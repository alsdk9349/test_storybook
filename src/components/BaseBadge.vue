<script setup>
// 공통 상태 배지 컴포넌트
defineProps({
  // 배지에 표시할 문구
  text: {
    type: String,
    required: true,
  },
  // 상태 종류 - 진행중 / 완료 / 지연 / 대기
  status: {
    type: String,
    default: '대기',
    validator: (value) => ['진행중', '완료', '지연', '대기'].includes(value),
  },
});
</script>

<template>
  <span class="base-badge" :class="`base-badge--${status}`">{{ text }}</span>
</template>

<style scoped>
.base-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-family: 'Pretendard', 'Malgun Gothic', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.6;
}

/* 상태별 배경/글자 색상 */
.base-badge--진행중 {
  background-color: #e3f2fd;
  color: #004098;
}

.base-badge--완료 {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.base-badge--지연 {
  background-color: #ffebee;
  color: #c62828;
}

.base-badge--대기 {
  background-color: #eceff1;
  color: #546e7a;
}
</style>
