import GlassCard from './GlassCard.vue';
import StatusBadge from './StatusBadge.vue';

export default {
  title: '컴포넌트/글래스 카드',
  component: GlassCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: '위젯 카드 제목' },
    selected: { control: 'boolean', description: '선택된 위젯 여부 (앰버 테두리)' },
  },
  args: {
    title: '실시간 발전 현황',
    selected: false,
  },
  // 글래스는 지도 위에 올라가는 구성이라 배경이 있어야 확인된다.
  decorators: [
    () => ({
      template: `
        <div style="background:linear-gradient(135deg,#cfe0f5,#e8f0e5 45%,#dfe7f2); padding:28px; border-radius:8px;">
          <story />
        </div>
      `,
    }),
  ],
};

export const 기본 = {
  render: (args) => ({
    components: { GlassCard },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width:320px;">
        <GlassCard v-bind="args">
          본문 영역 — 지도 위 글래스 구성이라 배경색 대신 투명도와 블러가 핵심입니다.
        </GlassCard>
      </div>
    `,
  }),
};

export const 선택_위젯 = {
  args: { selected: true },
  render: (args) => ({
    components: { GlassCard },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width:320px;">
        <GlassCard v-bind="args">선택된 위젯은 앰버 테두리로 구분합니다.</GlassCard>
      </div>
    `,
  }),
};

export const 대시보드_배치 = {
  render: () => ({
    components: { GlassCard, StatusBadge },
    template: `
      <div style="display:flex; flex-direction:column; gap:14px;">
        <div style="height:54px; background:rgba(255,255,255,.72); backdrop-filter:blur(16px); border-radius:8px; display:flex; align-items:center; padding:0 18px; font-family:var(--font-sans); font-size:14px; font-weight:600;">
          상단 헤더 — #ffffff 72% 투명(글래스) · 높이 54px
        </div>

        <div style="display:flex; gap:14px; flex-wrap:wrap;">
          <div style="width:260px;">
            <GlassCard title="발전 현황">
              태양광 842 kWh<br />ESS 315 kWh
            </GlassCard>
          </div>
          <div style="width:260px;">
            <GlassCard title="설비 상태" :selected="true">
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <StatusBadge group="ops" status="정상" />
                <StatusBadge group="ops" status="주의" />
                <StatusBadge group="ops" status="경보" />
              </div>
            </GlassCard>
          </div>
          <div style="width:260px;">
            <GlassCard title="대기질">
              <StatusBadge group="air" status="보통" />
            </GlassCard>
          </div>
        </div>
      </div>
    `,
  }),
};
