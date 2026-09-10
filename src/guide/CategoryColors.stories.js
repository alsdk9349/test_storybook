import ColorTable from './ColorTable.vue';
import SlotTable from './SlotTable.vue';
import NoteBox from './NoteBox.vue';

// C. 카테고리 - 값의 분류
// A. 에너지와 같은 표 형식으로 정리하고, 원본 슬라이드의 설명 문구는 표 아래 박스에 담는다.
export default {
  title: '가이드/색상/C. 카테고리',
  component: ColorTable,
  parameters: {
    controls: { disable: true },
  },
};

// 업종 슬롯 - 이 항목만 light / dark 값이 다르다.
const 업종슬롯 = [
  { slot: '1', light: '#2a78d6', dark: '#3987e5', note: '계약종 산업용(갑)' },
  { slot: '2', light: '#1baf7a', dark: '#199e70', note: '계약종 고압A' },
  { slot: '3', light: '#eda100', dark: '#c98500', note: '계약종 고압B' },
  { slot: '4', light: '#008300', dark: '#008300', note: '계약종 고압C · light/dark 동일' },
  { slot: '5', light: '#4a3aa7', dark: '#9085e9', note: '' },
  { slot: '6', light: '#e34948', dark: '#e66767', note: '' },
  { slot: '7', light: '#e87ba4', dark: '#d55181', note: '' },
  { slot: '8 (기타)', light: '#929598', dark: '#929598', note: '무채색 · light/dark 동일' },
];

const 자원유형 = [
  { name: '기업', hex: '#3670cd', note: '한전 계통 색 재사용' },
  { name: '태양광', hex: '#b48c00', note: '에너지 팔레트 재사용' },
  { name: 'ESS', hex: '#009a7b', note: '에너지 팔레트 재사용' },
  { name: 'P2H', hex: '#d82f2a', note: '에너지 팔레트 재사용' },
  { name: '인버터', hex: '#d22e68', note: '에너지 팔레트 재사용' },
  { name: 'FEMS', hex: '#019eb9', note: '에너지 팔레트 재사용' },
];

const 산단 = [
  { name: '여수', hex: '#2AC8B4', note: '메인 지도의 산단 경계선 색 기준' },
  { name: '율촌', hex: '#DCA830', note: '메인 지도의 산단 경계선 색 기준' },
];

export const 카테고리_팔레트 = {
  render: () => ({
    components: { ColorTable, SlotTable, NoteBox },
    setup() {
      return { 업종슬롯, 자원유형, 산단 };
    },
    template: `
      <div style="max-width:960px;">
        <SlotTable title="업종 — 사용량 상위 7개 + 기타 (슬롯 순서 고정)" :rows="업종슬롯" />
        <NoteBox variant="info" title="이 항목만 light / dark 값이 다름">
          dark 배경 파이에서는 7색 구분 불가(ΔE 4.7) → 직접 라벨 필수, 파이보다 정렬된 막대 권장<br />
          계약종도 같은 슬롯 — 산업용(갑)=1 · 고압A=2 · 고압B=3 · 고압C=4
        </NoteBox>

        <ColorTable title="자원 유형 (지도 마커) — 에너지 색 재사용" :rows="자원유형" />
        <NoteBox variant="info">
          지도는 어떤 두 마커든 이웃할 수 있어 전체 쌍으로 검증 — ΔE 11.6 하한밴드라 마커에 라벨 필수
        </NoteBox>

        <ColorTable title="산단 — 값이 아니라 지역 표식" :rows="산단" />
        <NoteBox variant="info">
          기준은 메인 지도의 산단 경계선 색. 축·라벨로 이미 산단이 구분되는 차트(산단별 발전량 · 거래 규모)에는 색을 쓰지 않음
        </NoteBox>
      </div>
    `,
  }),
};
