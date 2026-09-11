import ColorTable from './ColorTable.vue';
import NoteBox from './NoteBox.vue';

// ① 테마 토큰과 레이아웃 — 라이트 테마 기준
export default {
  title: '가이드/테마 토큰과 레이아웃',
  component: ColorTable,
  parameters: {
    // 문서형 스토리라 Controls 패널은 숨긴다.
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
    components: { ColorTable, NoteBox },
    setup() {
      return { 테마토큰, 포인트색 };
    },
    template: `
      <div style="max-width:960px;">

        <ColorTable title="테마 토큰과 레이아웃 — 라이트 테마 기준" />

        <ColorTable title="디자인 토큰 (daisyUI 라이트 테마 기준)" :rows="테마토큰" />

        <ColorTable title="포인트 색 사용처" :rows="포인트색" />

        <NoteBox variant="info">
          모서리 반경 — 카드 · 박스 8px(.5rem) · 버튼 · 입력 4px(.25rem)
        </NoteBox>

        <ColorTable title="다른 플랫폼 적용 가이드" level="section" />
        <NoteBox variant="info">
          토큰 이름 기준으로 이식한다 (base-100 / 200 / 300 · neutral · primary …)
        </NoteBox>

      </div>
    `,
  }),
};

// 서브 페이지 레이아웃 구성 — 사이드바 / 상단바 / 카드 배치
export const 화면_레이아웃 = {
  render: () => ({
    components: { ColorTable },
    template: `
      <div style="max-width:960px;">
      <ColorTable title="화면 레이아웃 구성 (서브 페이지)" />

      <div style="max-width:820px; border:1px solid #dfe4ec; border-radius:8px; overflow:hidden; display:flex; height:420px; font-family:var(--font-sans); background:#ffffff;">

        <!-- 사이드바 -->
        <aside style="width:130px; background:#f7f9fc; border-right:1px solid #dfe4ec; padding:14px 12px;">
          <div style="font-size:12px; font-weight:700; line-height:1.6;">
            사이드바<br />#f7f9fc
          </div>
        </aside>

        <div style="flex:1; display:flex; flex-direction:column; min-width:0;">

          <!-- 상단바 높이 54px -->
          <header style="height:54px; background:#f7f9fc; border-bottom:1px solid #dfe4ec; display:flex; align-items:center; padding:0 18px; font-size:12px; font-weight:700;">
            상단바 #f7f9fc (높이 54px)
          </header>

          <!-- 콘텐츠 영역 #ffffff · 여백 20px · 카드 2개 -->
          <main style="flex:1; padding:20px; background:#ffffff; display:flex; flex-direction:column; gap:16px; position:relative;">

            <div style="flex:1; background:#f7f9fc; border:1px solid #dfe4ec; border-radius:8px; padding:16px 18px; font-size:12px; line-height:1.8;">
              카드 (data-box) #f7f9fc<br />
              테두리 #dfe4ec 1px · 반경 8px
            </div>

            <div style="flex:1; background:#f7f9fc; border:1px solid #dfe4ec; border-radius:8px; padding:16px 18px; font-size:12px; line-height:1.8;">
              박스 제목 18px/600 · 본문 14px<br />
              콘텐츠 여백 20px(p-5)
            </div>

            <!-- 콘텐츠 바탕색 표기 -->
            <span style="position:absolute; right:20px; bottom:6px; font-size:12px; color:rgba(0,0,0,.6);">#ffffff</span>
          </main>
        </div>
      </div>

      </div>
    `,
  }),
};
