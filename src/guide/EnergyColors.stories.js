import ColorTable from './ColorTable.vue';
import NoteBox from './NoteBox.vue';

// A. 에너지 관련 색상
// 흰(#ffffff)과 다크(#20293a) 양쪽 차트 배경에서 대비 3:1 이상을 만족하는 공용 값이다.
export default {
  title: '가이드/색상/A. 에너지',
  component: ColorTable,
  parameters: {
    // 문서형 스토리라 Controls 패널은 숨긴다.
    controls: { disable: true },
  },
};

const 에너지색상 = [
  {
    name: '태양광',
    hex: '#b48c00',
    note: 'Electricity Maps 표준(solar #FFC700) — 원색은 흰 배경 대비 1.56:1 이라 명도를 낮춰 사용(채도 23% 손해)',
  },
  {
    name: 'ESS · 배터리',
    hex: '#009a7b',
    note: 'Electricity Maps 표준(battery #1DA484) 계열',
  },
  {
    name: '한전 계통',
    hex: '#3670cd',
    note: 'KEPCO CI Royal Blue(#004098) 계열',
  },
  {
    name: '전력 수요(부하)',
    hex: '#ab44c8',
    note: '표준(Fraunhofer)은 진회색이지만 기존 보라 유지 — 한전 파랑과 색각이상 구분이 어려움(ΔE 8.3)이라 함께 나오는 차트는 직접 라벨 필수',
  },
  {
    name: '열 / P2H / 난방',
    hex: '#d82f2a',
    note: 'PyPSA-Eur 표준(heat #cc1f1f) 계열',
  },
  {
    name: '온실가스 배출량',
    hex: '#b4563c',
    note: 'Electricity Maps CO2 강도(#9E4229) 계열',
  },
  {
    name: '냉방 / 냉열',
    hex: '#019eb9',
    note: '표준 없음 — 냉 = 하늘색 관례로 결정',
  },
  {
    name: '에너지 자립률',
    hex: '#009853',
    note: '표준 없음 — 프로젝트 결정',
  },
  {
    name: 'COP / 효율 / SOC',
    hex: '#d22e68',
    note: '표준 없음 — 프로젝트 결정',
  },
  {
    name: '예측값 · 비교값',
    hex: '#929598',
    note: '무채색 관례 — 실측과 구분하는 것이 목적이라 채도 검사 대상 아님',
  },
];

export const 에너지_팔레트 = {
  render: () => ({
    components: { ColorTable, NoteBox },
    setup() {
      return { 에너지색상 };
    },
    template: `
      <div style="max-width:960px;">
        <!-- 대제목 - rows 없이 title만 넘기면 제목만 크게 출력된다 -->
        <ColorTable title="A. 에너지 관련 색상" />

        <ColorTable :rows="에너지색상" />

        <!-- 원본 슬라이드와 동일하게 하단에 두 개의 주석 박스를 나란히 배치한다. -->
        <div style="display:flex; gap:14px; flex-wrap:wrap;">
          <div style="flex:1 1 380px;">
            <NoteBox variant="warn" title="ESS 충전 · 방전은 색을 나누지 않는다">
              같은 ESS 색에 방향으로 구분(충전 위 · 방전 아래). 색상환 360°를 탐색해도 분리 불가함이 계산으로 확인됨
            </NoteBox>
          </div>
          <div style="flex:1 1 300px;">
            <NoteBox variant="info">
              모든 색은 흰(#ffffff) · 다크(#20293a) 양쪽 차트 배경에서 대비 3:1 이상 — light/dark 공용 값
            </NoteBox>
          </div>
        </div>
      </div>
    `,
  }),
};
