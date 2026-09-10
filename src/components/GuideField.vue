<script setup>
// 검색조건 입력 · 셀렉트 - 발표자료 ② 컴포넌트 규격
// 필드 라벨 12px/600 · 입력 글자 14px/400 · 반경 4~5px
// 검색조건 셀렉트 배경 #ffffff / 그리드 컨트롤 #f1f4f9
// 테두리는 검정 10~14% · 플레이스홀더는 검정 55%
defineProps({
  // 필드 라벨
  label: {
    type: String,
    default: '',
  },
  // 입력 종류 - 텍스트 입력 / 셀렉트
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'select'].includes(value),
  },
  // 셀렉트 선택지
  options: {
    type: Array,
    default: () => [],
  },
  // 플레이스홀더 문구
  placeholder: {
    type: String,
    default: '',
  },
  // 표면 종류 - 검색조건(흰 배경) / 그리드 컨트롤(#f1f4f9)
  surface: {
    type: String,
    default: 'search',
    validator: (value) => ['search', 'grid'].includes(value),
  },
  // 입력 값 (v-model 연동)
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="field">
    <label v-if="label" class="field__label">{{ label }}</label>

    <select
      v-if="type === 'select'"
      class="field__control"
      :class="`field__control--${surface}`"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
    </select>

    <input
      v-else
      class="field__control"
      :class="`field__control--${surface}`"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.field {
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--font-sans);
}

/* 필드 라벨 12px/600 */
.field__label {
  font-size: var(--fs-label);
  font-weight: var(--fw-bold);
  color: var(--base-content);
}

/* 입력 글자 14px/400 · 반경 4~5px */
.field__control {
  height: 34px;
  min-width: 180px;
  padding: 0 10px;
  font-family: var(--font-sans);
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  color: var(--base-content);
  border: 1px solid var(--control-border);
  border-radius: 5px;
  outline: none;
}

.field__control:focus {
  border-color: var(--primary);
}

/* 플레이스홀더는 검정 55% */
.field__control::placeholder {
  color: var(--alpha-55);
}

/* 검색조건 셀렉트 배경 #ffffff */
.field__control--search {
  background-color: var(--base-100);
}

/* 그리드 컨트롤 배경 #f1f4f9 */
.field__control--grid {
  background-color: var(--base-200);
}
</style>
