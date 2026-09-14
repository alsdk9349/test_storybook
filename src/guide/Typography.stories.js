import ColorTable from './ColorTable.vue';
import SpecTable from './SpecTable.vue';
import NoteBox from './NoteBox.vue';

// ③ 폰트 (Pretendard)
// A · B · C 색상 가이드와 같은 형식으로 정리한다.
export default {
  title: '가이드/타이포그래피',
  component: SpecTable,
  parameters: {
    // 문서형 스토리라 Controls 패널은 숨긴다.
    controls: { disable: true },
  },
};

// 크기 위계
const 크기위계 = [
  {
    name: '페이지 타이틀',
    value: '24px / 800',
    sample: '에너지 자급자족 현황',
    sampleStyle: { fontSize: '24px', fontWeight: 800 },
  },
  {
    name: 'KPI 값 (stat-value)',
    value: '24px / 800 · 상태색',
    sample: '1,284 kW',
    sampleStyle: { fontSize: '24px', fontWeight: 800, color: '#ab44c8' },
  },
  {
    name: '박스 제목 (box-header)',
    value: '18px / 600',
    sample: '시간대별 발전량',
    sampleStyle: { fontSize: '18px', fontWeight: 600 },
  },
  {
    name: '본문 · 테이블 셀 · 입력',
    value: '14px / 400',
    sample: '여수국가산업단지 태양광 발전설비 운영 현황',
    sampleStyle: { fontSize: '14px', fontWeight: 400 },
  },
  {
    name: '필드 라벨 · 위젯 제목',
    value: '12px / 600',
    sample: '산단',
    sampleStyle: { fontSize: '12px', fontWeight: 600 },
  },
  {
    name: 'KPI 라벨 · 보조 정보',
    value: '12px / 400 · 검정 60%',
    sample: '전일 대비 +3.2%',
    sampleStyle: { fontSize: '12px', fontWeight: 400, color: 'rgba(0,0,0,.6)' },
  },
  {
    name: '범례 · 캡션',
    value: '11px / 400 · 검정 70%',
    sample: '단위: kWh · 출처: FEMS',
    sampleStyle: { fontSize: '11px', fontWeight: 400, color: 'rgba(0,0,0,.7)' },
  },
];

// 투명도 위계 - 검정 알파로 층을 만든다
const 투명도위계 = [
  {
    name: '기본 텍스트',
    value: '#1b2430 (100%)',
    sample: '기본 텍스트입니다',
    sampleStyle: { fontSize: '14px', color: '#1b2430' },
  },
  {
    name: '위젯 제목',
    value: '검정 90%',
    sample: '위젯 제목입니다',
    sampleStyle: { fontSize: '14px', color: 'rgba(0,0,0,.9)' },
  },
  {
    name: '범례 라벨',
    value: '검정 70%',
    sample: '범례 라벨입니다',
    sampleStyle: { fontSize: '14px', color: 'rgba(0,0,0,.7)' },
  },
  {
    name: '보조 라벨 · KPI 제목',
    value: '검정 60%',
    sample: '보조 라벨입니다',
    sampleStyle: { fontSize: '14px', color: 'rgba(0,0,0,.6)' },
  },
  {
    name: '비활성 탭',
    value: '검정 55%',
    sample: '비활성 탭입니다',
    sampleStyle: { fontSize: '14px', color: 'rgba(0,0,0,.55)' },
  },
  {
    name: '플레이스홀더 · 빈 상태 문구',
    value: '검정 40%',
    sample: '기업명 또는 초성 검색',
    sampleStyle: { fontSize: '14px', color: 'rgba(0,0,0,.4)' },
  },
];

export const 폰트_위계 = {
  render: () => ({
    components: { ColorTable, SpecTable, NoteBox },
    setup() {
      return { 크기위계, 투명도위계 };
    },
    template: `
      <div style="max-width:960px;">

        <ColorTable title="폰트 (Pretendard, 현재 구미에서도 사용 중)" />

        <NoteBox variant="info" title="Pretendard Variable / Pretendard">
          대체 순서: pretendard → 맑은 고딕
        </NoteBox>

        <SpecTable title="크기 위계" :rows="크기위계" />

        <SpecTable title="투명도 위계 — 검정 알파로 층" name-label="단계" :rows="투명도위계" />

        <!-- 원본 슬라이드처럼 제목을 박스 안에 넣고, 색·크기·굵기도 슬라이드 값에 맞춘다 -->
        <div style="background:#fdf4e5; border:1px solid #eccd93; border-radius:8px; padding:16px 18px; margin-bottom:28px;">
          <strong style="display:block; font-size:13px; font-weight:700; color:#8f6100; margin-bottom:10px;">
            지켜야 할 것 (웹표준 연계)
          </strong>
          <div style="font-size:12px; font-weight:400; color:#244046; line-height:1.9;">
            · KPI 숫자는 24px + bold 유지 — 줄이면 4.5:1 대비가 요구되어 위반<br />
            · 작은 텍스트(범례 · 축)에는 상태색 대신 기본 텍스트색 + 색 마커 사용
          </div>
        </div>

        <ColorTable title="다른 플랫폼 적용 가이드" level="section" />
        <NoteBox variant="info">
          이 폰트 체인과 크기 · 투명도 위계를 그대로 가져가면 라이트 테마 톤이 동일하게 재현됨
        </NoteBox>

      </div>
    `,
  }),
};
