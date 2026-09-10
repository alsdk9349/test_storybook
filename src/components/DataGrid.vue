<script setup>
// 그리드(테이블) - 발표자료 ② 그리드 규격
// 헤더  : 배경 #dfe4ec · 글자 16px/600 · 하단 보더 검정 10%
// 셀    : 14px/400 #1b2430 · 행 구분선 검정 6%
// 행 배경은 투명(카드색 노출) - 줄무늬(검정 2.5%) · 호버(검정 4%)는 검정 알파로 처리
// 선택 행 : rgb(13,110,253) 계열 (DataTables 기본값 유지)
defineProps({
  // 컬럼 정의 - [{ key, label, width, align }]
  columns: {
    type: Array,
    required: true,
  },
  // 행 데이터 배열
  rows: {
    type: Array,
    required: true,
  },
  // 줄무늬 표시 여부
  striped: {
    type: Boolean,
    default: true,
  },
  // 선택된 행의 인덱스 (없으면 -1)
  selectedIndex: {
    type: Number,
    default: -1,
  },
});

defineEmits(['select']);
</script>

<template>
  <table class="grid">
    <colgroup>
      <col v-for="col in columns" :key="col.key" :style="{ width: col.width }" />
    </colgroup>

    <thead>
      <tr>
        <th
          v-for="col in columns"
          :key="col.key"
          :style="{ textAlign: col.align || 'left' }"
        >
          {{ col.label }}
        </th>
      </tr>
    </thead>

    <tbody :class="{ 'grid--striped': striped }">
      <tr
        v-for="(row, index) in rows"
        :key="index"
        :class="{ 'grid__row--selected': index === selectedIndex }"
        @click="$emit('select', index)"
      >
        <td
          v-for="col in columns"
          :key="col.key"
          :style="{ textAlign: col.align || 'left' }"
        >
          <!-- 셀 안에 컴포넌트를 넣고 싶을 때 사용하는 슬롯 -->
          <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
            {{ row[col.key] }}
          </slot>
        </td>
      </tr>

      <!-- 빈 상태 문구는 검정 40% -->
      <tr v-if="rows.length === 0">
        <td :colspan="columns.length" class="grid__empty">조회된 데이터가 없습니다.</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.grid {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-sans);
  background-color: transparent; /* 카드색이 그대로 비치도록 투명 */
}

/* 헤더 */
.grid thead th {
  background-color: var(--grid-header-bg);
  font-size: 16px;
  font-weight: var(--fw-bold);
  color: var(--base-content);
  padding: 10px 14px;
  border-bottom: 1px solid var(--grid-header-border);
}

/* 셀 */
.grid tbody td {
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  color: var(--base-content);
  padding: 10px 14px;
  border-bottom: 1px solid var(--grid-row-line);
}

/* 줄무늬 - 짝수 행에 검정 2.5% */
.grid--striped tr:nth-child(even) {
  background-color: var(--grid-row-stripe);
}

/* 호버 - 검정 4% */
.grid tbody tr:hover {
  background-color: var(--grid-row-hover);
  cursor: pointer;
}

/* 선택 행 */
.grid__row--selected,
.grid__row--selected:hover {
  background-color: var(--grid-row-selected);
}

/* 빈 상태 */
.grid__empty {
  text-align: center;
  color: var(--alpha-40);
  padding: 32px 14px;
}
</style>
