<script setup>
// 규격 표 - 색이 아니라 수치(글자 크기 · 투명도 등)를 정리할 때 사용한다.
// 표 형태는 ColorTable 과 동일하게 맞췄다.
defineProps({
  // 표 제목
  title: {
    type: String,
    default: '',
  },
  // 첫 번째 열의 머리글
  nameLabel: {
    type: String,
    default: '항목',
  },
  // 두 번째 열의 머리글
  valueLabel: {
    type: String,
    default: '값',
  },
  // 규격 목록 - [{ name, value, sample, sampleStyle }]
  // sample       : 미리보기 열에 표시할 문구
  // sampleStyle  : 미리보기에 적용할 인라인 스타일 객체
  rows: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="spec-table">
    <h3 v-if="title" class="spec-table__title">{{ title }}</h3>

    <table class="spec-table__grid">
      <thead>
        <tr>
          <th class="col-name">{{ nameLabel }}</th>
          <th class="col-value">{{ valueLabel }}</th>
          <th class="col-sample">미리보기</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.name">
          <td class="cell-name">{{ row.name }}</td>
          <td class="cell-value">{{ row.value }}</td>
          <td class="cell-sample">
            <span :style="row.sampleStyle">{{ row.sample }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.spec-table {
  font-family: var(--font-sans);
  color: var(--base-content);
  margin-bottom: 16px;
}

.spec-table__title {
  font-size: var(--fs-box-title);
  font-weight: var(--fw-bold);
  margin: 0 0 12px;
}

.spec-table__grid {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--base-100);
  border: var(--card-border);
  border-radius: var(--radius-card);
  overflow: hidden;
}

/* 헤더 - 원본 슬라이드와 같은 짙은 청록(#0e3a45) 바탕에 흰 글자 */
.spec-table__grid th {
  background-color: #0e3a45;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  padding: 9px 14px;
}

.spec-table__grid td {
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  padding: 10px 14px;
  border-bottom: 1px solid var(--grid-row-line);
  vertical-align: middle;
}

.spec-table__grid tbody tr:last-child td {
  border-bottom: none;
}

.spec-table__grid tbody tr:hover {
  background-color: var(--grid-row-hover);
}

.col-name,
.cell-name {
  width: 240px;
  font-weight: var(--fw-bold);
}

.col-value,
.cell-value {
  width: 200px;
  font-size: var(--fs-label);
  color: var(--alpha-70);
}

.cell-sample {
  line-height: 1.4;
}
</style>
