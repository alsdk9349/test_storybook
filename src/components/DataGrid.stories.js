import { ref } from 'vue';
import DataGrid from './DataGrid.vue';
import DataBox from './DataBox.vue';
import Pagination from './Pagination.vue';
import StatusBadge from './StatusBadge.vue';

export default {
  title: '컴포넌트/그리드',
  component: DataGrid,
  tags: ['autodocs'],
  argTypes: {
    striped: { control: 'boolean', description: '줄무늬 표시 여부' },
    selectedIndex: { control: 'number', description: '선택된 행 인덱스 (없으면 -1)' },
  },
};

const 컬럼 = [
  { key: 'no', label: 'No', width: '70px', align: 'center' },
  { key: 'title', label: '게시물제목' },
  { key: 'writer', label: '입력자', width: '140px' },
  { key: 'date', label: '입력일시', width: '140px', align: 'center' },
];

const 데이터 = [
  { no: 350, title: '게시글199AA', writer: '시스템관리자', date: '2024-04-09' },
  { no: 349, title: '게시글198', writer: '시스템관리자', date: '2024-04-09' },
  { no: 348, title: '게시글197', writer: '시스템관리자', date: '2024-04-09' },
  { no: 347, title: '게시글196', writer: '시스템관리자', date: '2024-04-08' },
  { no: 346, title: '게시글195', writer: '시스템관리자', date: '2024-04-08' },
];

export const 기본 = {
  render: (args) => ({
    components: { DataGrid, DataBox },
    setup() {
      return { args, 컬럼, 데이터 };
    },
    template: `
      <div style="max-width:760px;">
        <DataBox title="게시판">
          <DataGrid v-bind="args" :columns="컬럼" :rows="데이터" />
        </DataBox>
      </div>
    `,
  }),
  args: { striped: true, selectedIndex: -1 },
};

// 행 상태별 배경 규격 확인
export const 행_상태 = {
  render: () => ({
    components: { DataGrid, DataBox },
    setup() {
      return { 컬럼, 데이터: 데이터.slice(0, 3) };
    },
    template: `
      <div style="max-width:760px;">
        <DataBox title="행 상태">
          <DataGrid :columns="컬럼" :rows="데이터" :selected-index="2" />
          <p style="font-size:12px; color:rgba(0,0,0,.6); margin:12px 0 0; line-height:1.8;">
            행 1 = 기본(투명) · 행 2 = 줄무늬(검정 2.5%) · 행 3 = 선택(rgb 13,110,253 계열)<br />
            마우스를 올리면 호버(검정 4%)가 적용됩니다.
          </p>
        </DataBox>
      </div>
    `,
  }),
};

// 상태 뱃지를 셀에 넣고 페이지네이션까지 붙인 실제 화면 구성
export const 실제_화면_구성 = {
  render: () => ({
    components: { DataGrid, DataBox, Pagination, StatusBadge },
    setup() {
      const 선택행 = ref(-1);
      const 현재페이지 = ref(1);
      const 설비컬럼 = [
        { key: 'no', label: 'No', width: '60px', align: 'center' },
        { key: 'name', label: '설비명' },
        { key: 'sandan', label: '산단', width: '90px' },
        { key: 'type', label: '자원유형', width: '100px' },
        { key: 'status', label: '운영상태', width: '120px', align: 'center' },
      ];
      const 설비데이터 = [
        { no: 1, name: '여수 A동 옥상 태양광', sandan: '여수', type: '태양광', status: '정상' },
        { no: 2, name: '여수 B동 ESS', sandan: '여수', type: 'ESS', status: '주의' },
        { no: 3, name: '율촌 1공장 인버터', sandan: '율촌', type: '인버터', status: '경보' },
        { no: 4, name: '율촌 2공장 FEMS', sandan: '율촌', type: 'FEMS', status: '미계측' },
      ];
      return { 선택행, 현재페이지, 설비컬럼, 설비데이터 };
    },
    template: `
      <div style="max-width:820px;">
        <DataBox title="설비 운영 현황">
          <DataGrid
            :columns="설비컬럼"
            :rows="설비데이터"
            :selected-index="선택행"
            @select="선택행 = $event"
          >
            <template #cell-status="{ value }">
              <StatusBadge group="ops" :status="value" />
            </template>
          </DataGrid>

          <div style="display:flex; justify-content:center; margin-top:16px;">
            <Pagination v-model:current="현재페이지" :total="5" />
          </div>
        </DataBox>
      </div>
    `,
  }),
};
