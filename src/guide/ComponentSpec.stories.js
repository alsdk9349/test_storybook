import ColorTable from './ColorTable.vue';
import NoteBox from './NoteBox.vue';
import GuideButton from '../components/GuideButton.vue';
import GuideField from '../components/GuideField.vue';
import DataGrid from '../components/DataGrid.vue';
import StatCard from '../components/StatCard.vue';

// ② 컴포넌트 — 버튼 · 입력 · 그리드
// 실제 컴포넌트를 함께 보여주고, 규격 문구는 박스에 담는다.
export default {
  title: '가이드/컴포넌트',
  component: ColorTable,
  parameters: {
    // 문서형 스토리라 Controls 패널은 숨긴다.
    controls: { disable: true },
  },
};

// 그리드 예시 데이터 - 원본 슬라이드의 게시판 화면
// 원본 슬라이드처럼 모든 열을 가운데 정렬한다
const 그리드컬럼 = [
  { key: 'no', label: 'No', width: '70px', align: 'center' },
  { key: 'title', label: '게시물제목', align: 'center' },
  { key: 'writer', label: '입력자', width: '140px', align: 'center' },
  { key: 'date', label: '입력일시', width: '140px', align: 'center' },
];

const 그리드데이터 = [
  { no: 350, title: '게시글199AA', writer: '시스템관리자', date: '2024-04-09' },
  { no: 349, title: '게시글198', writer: '시스템관리자', date: '2024-04-09' },
  { no: 348, title: '게시글197', writer: '시스템관리자', date: '2024-04-09' },
];

export const 컴포넌트_규격 = {
  render: () => ({
    components: { ColorTable, NoteBox, GuideButton, GuideField, DataGrid, StatCard },
    setup() {
      return { 그리드컬럼, 그리드데이터 };
    },
    template: `
      <div style="max-width:960px;">

        <ColorTable title="컴포넌트 — 버튼 · 입력 · 그리드" />

        <ColorTable title="버튼" level="section" />
        <!-- 원본 슬라이드처럼 버튼마다 옆에 설명을 따로 붙인다 -->
        <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:24px;">

          <div style="display:flex; align-items:center; gap:18px;">
            <div style="width:120px; flex-shrink:0;">
              <GuideButton label="검색" variant="primary" />
            </div>
            <div style="font-size:12px; color:rgba(0,0,0,.7); line-height:1.8;">
              btn-primary — 배경 #1d63d8 · 글자 #ffffff<br />
              테두리 #1a57be 1px · 반경 4px · 14px/600
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:18px;">
            <div style="width:120px; flex-shrink:0;">
              <GuideButton label="이전" variant="normal" />
            </div>
            <div style="font-size:12px; color:rgba(0,0,0,.7); line-height:1.8;">
              보통 버튼 — 배경 #f1f4f9 · 글자 #1b2430<br />
              테두리 검정 12%(#d6dbe4) · 반경 4px
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:18px;">
            <div style="width:120px; flex-shrink:0;">
              <GuideButton label="비활성 탭" variant="text" />
            </div>
            <div style="font-size:12px; color:rgba(0,0,0,.7); line-height:1.8;">
              비활성 텍스트 — 검정 55% (탭 · 미선택 항목)<br />
              활성 페이지 번호는 primary 배경 + #ffffff 글자
            </div>
          </div>

        </div>

        <ColorTable title="입력 · 셀렉트" level="section" />
        <div style="display:flex; gap:16px; align-items:flex-end; margin-bottom:14px; flex-wrap:wrap;">
          <GuideField label="산단" type="select" :options="['전체','여수','율촌']" model-value="전체" />
          <!-- 원본 슬라이드에서 이 입력은 그리드 컨트롤 배경(#f1f4f9) 이다 -->
          <GuideField label="기업명" placeholder="기업명 또는 초성 검색" surface="grid" />
        </div>
        <NoteBox variant="info">
          · 필드 라벨 12px/600 · 입력 글자 14px/400 · 반경 4~5px<br />
          · 검색조건 셀렉트 배경 #ffffff / 그리드 컨트롤 #f1f4f9<br />
          · 테두리는 검정 10~14% · 플레이스홀더는 검정 55%
        </NoteBox>

        <NoteBox variant="info">
          · KPI 요약 (stat) - 라벨 12px 검정 60% · 값 24px/800 상태색<br />
          · 예: 부하 KPI는 text-energy-load(#ab44c8) — 색상 가이드 팔레트 연동
        </NoteBox>

        <ColorTable title="그리드 (테이블)" level="section" />
        <div style="background:#f7f9fc; border:1px solid #dfe4ec; border-radius:8px; padding:20px; margin-bottom:14px;">
          <DataGrid :columns="그리드컬럼" :rows="그리드데이터" />
        </div>
        <NoteBox variant="info">
          · 행 1 = 기본(투명) · 행 2 = 줄무늬(검정 2.5%) · 행 3 = 호버(검정 4%)<br />
          · 헤더 — 배경 #dfe4ec · 글자 16px/600 · 하단 보더 검정 10%<br />
          · 셀 — 글자 14px/400 #1b2430 · 행 구분선 검정 6% 1px<br />
          · 행 배경은 투명(카드색 노출) — 줄무늬 · 호버는 검정 알파로<br />
          · 선택 행 — rgb(13,110,253) 계열 (DataTables 기본값 유지)<br />
          · 페이지네이션 — 활성: primary 배경 + #ffffff · 이전/다음: #f1f4f9 + 12% 테두리
        </NoteBox>

      </div>
    `,
  }),
};
