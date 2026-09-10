import DataBox from './DataBox.vue';
import GuideButton from './GuideButton.vue';
import StatCard from './StatCard.vue';

export default {
  title: '컴포넌트/데이터 박스',
  component: DataBox,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: '박스 제목' },
  },
  args: {
    title: '시간대별 발전량',
  },
};

export const 기본 = {
  render: (args) => ({
    components: { DataBox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width:640px;">
        <DataBox v-bind="args">
          본문 영역입니다. 배경 #f7f9fc · 테두리 #dfe4ec 1px · 반경 8px · 콘텐츠 여백 20px 규격을 따릅니다.
        </DataBox>
      </div>
    `,
  }),
};

export const 액션_버튼_포함 = {
  render: () => ({
    components: { DataBox, GuideButton },
    template: `
      <div style="max-width:640px;">
        <DataBox title="설비 목록">
          <template #action>
            <GuideButton label="엑셀 내려받기" variant="normal" />
          </template>
          제목 우측에 액션 버튼을 배치할 수 있습니다.
        </DataBox>
      </div>
    `,
  }),
};

export const KPI_묶음_배치 = {
  render: () => ({
    components: { DataBox, StatCard },
    template: `
      <div style="max-width:760px;">
        <DataBox title="여수산단 에너지 현황">
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <StatCard label="태양광 발전량" value="842" unit="kWh" value-color="var(--energy-solar)" />
            <StatCard label="전력 수요" value="1,284" unit="kW" value-color="var(--energy-load)" />
            <StatCard label="에너지 자립률" value="41.3" unit="%" value-color="var(--energy-selfrate)" />
          </div>
        </DataBox>
      </div>
    `,
  }),
};
