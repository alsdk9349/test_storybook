import ColorTable from './ColorTable.vue';

// ① 테마 토큰과 레이아웃 — 라이트 테마 기준
export default {
  title: '가이드/테마 토큰',
  component: ColorTable,
  parameters: {
    controls: { disable: true },
  },
};

const 테마토큰 = [
  { name: 'base-100', hex: '#ffffff', note: '페이지·차트 배경 (콘텐츠 바탕)' },
  { name: 'base-200', hex: '#f1f4f9', note: '입력·페이징 등 컨트롤 표면' },
  { name: 'base-300', hex: '#dfe4ec', note: '테이블 헤더 · 카드 테두리 · 구분선' },
  { name: 'base-content', hex: '#1b2430', note: '기본 텍스트' },
  { name: 'neutral', hex: '#f7f9fc', note: '사이드바 · 상단바 · 카드 배경' },
  { name: 'primary', hex: '#1d63d8', note: '주 버튼 · 활성(선택) 상태' },
  { name: 'secondary', hex: '#1f6ba6', note: '보조 액션' },
  { name: 'accent', hex: '#5b45c8', note: '강조 포인트' },
  { name: 'info', hex: '#1b6fbf', note: "정보 · '낮음' 등급" },
  { name: 'success', hex: '#1e7c4b', note: '성공 · 정상 · 로고 포인트(MG)' },
  { name: 'warning', hex: '#8f6100', note: "경고 · '높음' 등급" },
  { name: 'error', hex: '#ce2b2d', note: "오류 · '심각' 등급" },
];

const 포인트색 = [
  { name: "로고 'MG'", hex: '#1e7c4b', note: '' },
  { name: '활성 메뉴', hex: '#1565c0', note: '' },
  { name: '활성 메뉴그룹', hex: '#1f6fb2', note: '' },
  { name: '테마 토글', hex: '#3b49c4', note: '' },
];

export const 토큰_목록 = {
  render: () => ({
    components: { ColorTable },
    setup() {
      return { 테마토큰, 포인트색 };
    },
    template: `
      <div style="max-width:960px;">
        <ColorTable title="디자인 토큰 (라이트 테마)" :rows="테마토큰" />
        <ColorTable title="포인트 색 사용처" :rows="포인트색" />
        <div style="border:1px solid #dfe4ec; background:#f7f9fc; border-radius:8px; padding:14px 16px; font-size:12px; line-height:1.8;">
          <strong>모서리 반경</strong> — 카드·박스 8px(.5rem) · 버튼·입력 4px(.25rem)<br />
          <strong>상단바 높이</strong> — 54px · <strong>콘텐츠 여백</strong> 20px(p-5)<br />
          <strong>이식 기준</strong> — 토큰 이름 기준으로 옮긴다(base-100/200/300 · neutral · primary …)
        </div>
      </div>
    `,
  }),
};

// 서브 페이지 레이아웃 구성 — 사이드바 / 상단바 / 카드 배치
export const 화면_레이아웃 = {
  render: () => ({
    template: `
      <div style="max-width:960px; border:1px solid #dfe4ec; border-radius:8px; overflow:hidden; display:flex; height:420px; font-family:var(--font-sans);">
        <!-- 사이드바 #f7f9fc -->
        <aside style="width:180px; background:#f7f9fc; border-right:1px solid #dfe4ec; padding:16px 12px;">
          <div style="font-size:18px; font-weight:800; color:#1e7c4b; margin-bottom:20px;">MG</div>
          <div style="font-size:14px; font-weight:600; color:#1565c0; padding:8px 10px; background:rgba(21,101,192,.08); border-radius:4px;">활성 메뉴</div>
          <div style="font-size:14px; color:rgba(0,0,0,.55); padding:8px 10px;">일반 메뉴</div>
          <div style="font-size:14px; color:rgba(0,0,0,.55); padding:8px 10px;">일반 메뉴</div>
        </aside>

        <div style="flex:1; display:flex; flex-direction:column; background:#ffffff;">
          <!-- 상단바 높이 54px -->
          <header style="height:54px; background:#f7f9fc; border-bottom:1px solid #dfe4ec; display:flex; align-items:center; padding:0 20px; font-size:14px; font-weight:600;">
            상단바 #f7f9fc (높이 54px)
          </header>

          <!-- 콘텐츠 영역 #ffffff · 여백 20px -->
          <main style="flex:1; padding:20px; background:#ffffff;">
            <div style="background:#f7f9fc; border:1px solid #dfe4ec; border-radius:8px; padding:20px; height:100%;">
              <div style="font-size:18px; font-weight:600; margin-bottom:8px;">카드(data-box) 제목 18px/600</div>
              <div style="font-size:14px; color:rgba(0,0,0,.7); line-height:1.7;">
                배경 #f7f9fc · 테두리 #dfe4ec 1px · 반경 8px · 콘텐츠 여백 20px(p-5)<br />
                본문 14px
              </div>
            </div>
          </main>
        </div>
      </div>
    `,
  }),
};
