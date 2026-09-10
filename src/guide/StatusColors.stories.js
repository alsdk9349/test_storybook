import ColorTable from './ColorTable.vue';
import NoteBox from './NoteBox.vue';

// B. 등급 · 상태 관련 색상
// A. 에너지와 같은 표 형식으로 정리하고, 원본 슬라이드의 설명 문구는 표 아래 박스에 담는다.
export default {
  title: '가이드/색상/B. 등급·상태',
  component: ColorTable,
  parameters: {
    // 문서형 스토리라 Controls 패널은 숨긴다.
    controls: { disable: true },
  },
};

const 대기질 = [
  { name: '좋음', hex: '#1c67d7', note: '' },
  { name: '보통', hex: '#01b56e', note: '' },
  { name: '나쁨', hex: '#f9c700', note: '' },
  { name: '매우나쁨', hex: '#e53030', note: '' },
];

const 부하대 = [
  { name: '경부하', hex: '#fe6d5f', note: '단가 오름차순 1단계 — 가장 밝음' },
  { name: '중간부하', hex: '#e9483d', note: '단가 오름차순 2단계' },
  { name: '최대부하', hex: '#cc2823', note: '단가 오름차순 3단계 — 가장 어두움' },
];

const 심각도 = [
  { name: '심각', hex: '#D32F2F', note: 'error 계열' },
  { name: '높음', hex: '#F57C00', note: 'warning 계열' },
  { name: '보통', hex: '#FBC02D', note: "'높음'과 분리하기 위한 권고값" },
  { name: '낮음', hex: '#42A5F5', note: 'info 계열' },
  { name: '정상', hex: '#66BB6A', note: 'success 계열' },
];

const 운영상태 = [
  { name: '정상', hex: '#22C55E', note: '' },
  { name: '주의', hex: '#F59E0B', note: '' },
  { name: '경보', hex: '#EF4444', note: '' },
  { name: '미계측', hex: '#94A3B8', note: '데이터 없음 — 무채색' },
];

const 정산상태 = [
  { name: '확정', hex: '#22C55E', note: '' },
  { name: '지급완료', hex: '#38BDF8', note: '' },
  { name: '검증중', hex: '#F59E0B', note: '' },
  { name: '조정중', hex: '#AB47BC', note: '' },
];

export const 등급_상태_팔레트 = {
  render: () => ({
    components: { ColorTable, NoteBox },
    setup() {
      return { 대기질, 부하대, 심각도, 운영상태, 정산상태 };
    },
    template: `
      <div style="max-width:960px;">
        <ColorTable title="대기질 등급 — 에어코리아 공식" :rows="대기질" />
        <NoteBox variant="info">
          법정 순색(#0000FF · #00FF00 …) 대신 에어코리아 자신이 실제 화면에 쓰는 가독 값을 따름 — 규정 색상 계열은 유지
        </NoteBox>

        <ColorTable title="부하대 — 순차 램프 (신호등 아님)" :rows="부하대" />
        <NoteBox variant="info">
          한전 · KPX에 공식 색 없음. 신호등 배색(녹→노→빨)은 적록색맹 안티패턴이라 배제 — 단가 오름차순이므로 단일 색상에 명도만 3단계
        </NoteBox>

        <ColorTable title="이벤트 심각도 (표준 없음)" :rows="심각도" />
        <NoteBox variant="warn" title="'높음'과 '보통'을 반드시 분리">
          현재 KPI는 '높음'과 '보통'이 둘 다 같은 경고색이라 구분이 안 됨 → 위 색으로 분리 필요
        </NoteBox>

        <ColorTable title="운영 상태" :rows="운영상태" />
        <ColorTable title="정산 상태" :rows="정산상태" />

        <NoteBox variant="warn" title="상태색은 색만으로 뜻을 전달하지 않음">
          반드시 아이콘 + 라벨을 함께 사용 (WCAG SC 1.4.1)
        </NoteBox>
      </div>
    `,
  }),
};
