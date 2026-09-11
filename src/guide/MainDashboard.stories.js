import ColorTable from './ColorTable.vue';
import NoteBox from './NoteBox.vue';
import GlassCard from '../components/GlassCard.vue';

// ④ 메인 대시보드 스타일과 상태색
// 지도 위 글래스 카드 규격과, 실제 화면에 쓰이는 상태색 기준을 정리한다.
export default {
  title: '가이드/메인 대시보드',
  component: ColorTable,
  parameters: {
    // 문서형 스토리라 Controls 패널은 숨긴다.
    controls: { disable: true },
  },
};

// 알람 심각도 KPI - 실서비스에 적용된 기준값
const 심각도KPI = [
  { name: '심각', hex: '#ce2b2d', note: 'error 토큰' },
  { name: '높음', hex: '#8f6100', note: 'warning 토큰' },
  {
    name: '보통',
    hex: '#8f6100',
    note: "'높음'과 동일 — 분리 필요 (권고 #FBC02D)",
  },
  { name: '낮음', hex: '#1b6fbf', note: 'info 토큰' },
  { name: '정상', hex: '#1e7c4b', note: 'success 토큰' },
];

// 기타 포인트 - 다른 팔레트에서 가져와 쓰는 색
const 기타포인트 = [
  { name: "대기질 '보통'", hex: '#01b56e', note: '에어코리아 공식값 그대로' },
  { name: '부하 KPI', hex: '#ab44c8', note: 'text-energy-load — 에너지 팔레트 연동' },
  { name: '자원 범례(한전)', hex: '#3670cd', note: '에너지 팔레트 연동' },
  { name: '선택 · 활성 상태', hex: '#1d63d8', note: 'primary — 화면 전체에서 일관되게 사용' },
];

export const 대시보드_스타일 = {
  render: () => ({
    components: { ColorTable, NoteBox, GlassCard },
    setup() {
      return { 심각도KPI, 기타포인트 };
    },
    template: `
      <div style="max-width:960px;">

        <ColorTable title="메인 대시보드 스타일과 상태색" />

        <ColorTable title="메인(지도) 대시보드 — 글래스 카드" level="section" />

        <!-- 원본 슬라이드처럼 글래스 카드 실물을 지도 배경 위에 올려 보여준다 -->
        <div style="background:linear-gradient(135deg,#cfe0f5,#e8f0e5 45%,#dfe7f2); border-radius:8px; padding:22px; margin-bottom:14px;">
          <div style="max-width:300px;">
            <GlassCard title="위젯 카드 제목">본문 영역</GlassCard>
          </div>
        </div>

        <NoteBox variant="info">
          · 배경 — 그라디언트 165° rgba(255,255,255,.72) → rgba(246,249,255,.55)<br />
          · 블러 — backdrop blur(16px) + saturate(1.2), 테두리 검정 8% 1px<br />
          · 반경 14px · 그림자 rgba(16,24,40,.10) 0 4px 24px + 안쪽 흰 70% 하이라이트<br />
          · 카드 제목 12px/600 검정 82% · 제목 밑줄 검정 8% · 선택 위젯 앰버 테두리<br />
          · 상단 헤더 — #ffffff 72% 투명(글래스) · 높이 54px<br />
          · 지도 위 글래스 구성이라 배경색 대신 투명도 · 블러가 핵심<br />
          <br />
          실제 렌더링은 <strong>컴포넌트 → 글래스 카드</strong>에서 확인
        </NoteBox>

        <ColorTable title="상태색 기준 — 알람 심각도 KPI" :rows="심각도KPI" />
        <NoteBox variant="warn">
          <span style="color:#c0392b; font-weight:600;">
            '높음'과 '보통'이 같은 warning 색인 문제가 실서비스에서 확인됨<br />
            — 색상 가이드 권고(#FBC02D)대로 분리 반영 필요
          </span>
        </NoteBox>

        <ColorTable title="기타 포인트" :rows="기타포인트" />

        <ColorTable title="다른 플랫폼 적용 가이드" level="section" />
        <NoteBox variant="info">
          토큰 이름 기준으로 이식한다 (base-100 / 200 / 300 · neutral · primary …)<br />
          차트 · 에너지 색은 별도 색상 가이드(A · B · C) 팔레트를 그대로 사용한다
        </NoteBox>

      </div>
    `,
  }),
};
