<script setup>
// 업종 슬롯 대조표 - light / dark 값이 다른 유일한 항목이라 전용 표로 만든다.
// 표 형태(헤더 · 테두리 · 글자 크기)는 ColorTable 과 동일하게 맞췄다.
defineProps({
  // 표 제목
  title: {
    type: String,
    default: '',
  },
  // 슬롯 목록 - [{ slot, light, dark }]
  rows: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="slot-table">
    <h3 v-if="title" class="slot-table__title">{{ title }}</h3>

    <table class="slot-table__grid">
      <thead>
        <tr>
          <th class="col-slot">슬롯</th>
          <th class="col-chip">light</th>
          <th class="col-hex">HEX</th>
          <th class="col-chip">dark</th>
          <th class="col-hex">HEX</th>
          <th class="col-note">참고사항</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.slot">
          <td class="cell-slot">{{ row.slot }}</td>
          <td>
            <span class="chip" :style="{ backgroundColor: row.light }"></span>
          </td>
          <td class="cell-hex">{{ row.light }}</td>
          <td>
            <span class="chip" :style="{ backgroundColor: row.dark }"></span>
          </td>
          <td class="cell-hex">{{ row.dark }}</td>
          <td class="cell-note">{{ row.note }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.slot-table {
  font-family: var(--font-sans);
  color: var(--base-content);
  margin-bottom: 16px;
}

.slot-table__title {
  font-size: var(--fs-box-title);
  font-weight: var(--fw-bold);
  margin: 0 0 12px;
}

.slot-table__grid {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--base-100);
  border: var(--card-border);
  border-radius: var(--radius-card);
  overflow: hidden;
}

/* 헤더 - 원본 슬라이드와 같은 짙은 청록(#0e3a45) 바탕에 흰 글자 */
.slot-table__grid th {
  background-color: #0e3a45;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  padding: 9px 14px;
}

.slot-table__grid td {
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  padding: 8px 14px;
  border-bottom: 1px solid var(--grid-row-line);
  vertical-align: middle;
}

.slot-table__grid tbody tr:last-child td {
  border-bottom: none;
}

.slot-table__grid tbody tr:hover {
  background-color: var(--grid-row-hover);
}

.col-slot,
.cell-slot {
  width: 96px;
  font-weight: var(--fw-bold);
}

.col-chip {
  width: 60px;
}

.col-hex,
.cell-hex {
  width: 100px;
  font-family: 'Consolas', 'D2Coding', monospace;
  color: var(--alpha-70);
}

.cell-note {
  font-size: var(--fs-label);
  color: var(--alpha-70);
  line-height: 1.6;
}

.chip {
  display: block;
  width: 40px;
  height: 22px;
  border-radius: var(--radius-control);
  border: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
