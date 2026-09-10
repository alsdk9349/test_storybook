<script setup>
// 색상 가이드 문서용 표 컴포넌트
// 색 견본 · 이름 · HEX · 참고사항을 한 줄씩 보여준다.
defineProps({
  // 표 제목
  title: {
    type: String,
    default: '',
  },
  // 제목 아래에 붙는 설명 문구
  caption: {
    type: String,
    default: '',
  },
  // 색상 목록 - [{ name, hex, note }]
  rows: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="color-table">
    <h3 v-if="title" class="color-table__title">{{ title }}</h3>
    <p v-if="caption" class="color-table__caption">{{ caption }}</p>

    <table class="color-table__grid">
      <thead>
        <tr>
          <th class="col-name">항목</th>
          <th class="col-chip">색</th>
          <th class="col-hex">HEX</th>
          <th class="col-note">참고사항</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.name">
          <td class="cell-name">{{ row.name }}</td>
          <td class="cell-chip">
            <span class="chip" :style="{ backgroundColor: row.hex }"></span>
          </td>
          <td class="cell-hex">{{ row.hex }}</td>
          <td class="cell-note">{{ row.note }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.color-table {
  font-family: var(--font-sans);
  color: var(--base-content);
  margin-bottom: 16px;
}

.color-table__title {
  font-size: var(--fs-box-title);
  font-weight: var(--fw-bold);
  margin: 0 0 6px;
}

.color-table__caption {
  font-size: var(--fs-label);
  font-weight: var(--fw-regular);
  color: var(--alpha-60);
  margin: 0 0 12px;
  line-height: 1.6;
}

.color-table__grid {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--base-100);
  border: var(--card-border);
  border-radius: var(--radius-card);
  overflow: hidden;
}

/* 헤더 - 원본 슬라이드와 같은 짙은 청록(#0e3a45) 바탕에 흰 글자 */
.color-table__grid th {
  background-color: #0e3a45;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  padding: 9px 14px;
}

/* 셀 - 14px/400 · 행 구분선 검정 6% */
.color-table__grid td {
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  padding: 10px 14px;
  border-bottom: 1px solid var(--grid-row-line);
  vertical-align: middle;
}

.color-table__grid tbody tr:last-child td {
  border-bottom: none;
}

.color-table__grid tbody tr:hover {
  background-color: var(--grid-row-hover);
}

.col-name,
.cell-name {
  width: 180px;
  font-weight: var(--fw-bold);
}

.col-chip,
.cell-chip {
  width: 56px;
}

.col-hex,
.cell-hex {
  width: 110px;
  font-family: 'Consolas', 'D2Coding', monospace;
  color: var(--alpha-70);
}

.cell-note {
  font-size: var(--fs-label);
  color: var(--alpha-70);
  line-height: 1.6;
}

/* 색 견본 */
.chip {
  display: block;
  width: 40px;
  height: 22px;
  border-radius: var(--radius-control);
  border: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
