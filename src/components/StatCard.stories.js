import StatCard from './StatCard.vue';

export default {
  title: '컴포넌트/KPI 카드',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'KPI 라벨' },
    value: { control: 'text', description: 'KPI 값' },
    unit: { control: 'text', description: '단위' },
    valueColor: { control: 'text', description: '값 색상 (토큰 변수 또는 HEX)' },
    hint: { control: 'text', description: '보조 설명' },
  },
  args: {
    label: '현재 부하',
    value: '1,284',
    unit: 'kW',
    valueColor: 'var(--energy-load)',
    hint: '전일 대비 +3.2%',
  },
};

export const 기본 = {};

// 알람 심각도 KPI - 발표자료 ④ 상태색 기준
export const 알람_심각도_KPI = {
  render: () => ({
    components: { StatCard },
    template: `
      <div style="font-family:var(--font-sans);">
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-bottom:16px;">
          <StatCard label="심각" value="2" unit="건" value-color="#ce2b2d" />
          <StatCard label="높음" value="5" unit="건" value-color="#8f6100" />
          <StatCard label="보통" value="11" unit="건" value-color="#b8860b" />
          <StatCard label="낮음" value="24" unit="건" value-color="#1b6fbf" />
          <StatCard label="정상" value="118" unit="건" value-color="#1e7c4b" />
        </div>
        <div style="border:1px solid #f0c9b8; background:#fcefe9; border-radius:8px; padding:14px 16px; font-size:12px; line-height:1.8; max-width:720px;">
          <strong style="color:#c0392b;">기존 문제</strong> — '높음'과 '보통'이 둘 다 warning(#8f6100)이라 실서비스에서 구분되지 않음.<br />
          색상 가이드 권고값은 차트용 #FBC02D 이지만, 흰 배경 대비가 1.65 라 KPI 숫자에는 쓸 수 없다.<br />
          위 예시처럼 명도를 낮춘 #b8860b 로 '높음'(#8f6100)과 분리한다 — 차트 마커는 #FBC02D 를 그대로 쓴다.
        </div>
      </div>
    `,
  }),
};

// 에너지 팔레트 연동 KPI
export const 에너지_팔레트_연동 = {
  render: () => ({
    components: { StatCard },
    template: `
      <div style="display:flex; gap:12px; flex-wrap:wrap; font-family:var(--font-sans);">
        <StatCard label="태양광 발전량" value="842" unit="kWh" value-color="var(--energy-solar)" hint="금일 누적" />
        <StatCard label="ESS 충방전" value="315" unit="kWh" value-color="var(--energy-ess)" hint="SOC 62%" />
        <StatCard label="계통 수전" value="1,020" unit="kWh" value-color="var(--energy-grid)" hint="한전 계통" />
        <StatCard label="전력 수요" value="1,284" unit="kW" value-color="var(--energy-load)" hint="전일 대비 +3.2%" />
        <StatCard label="에너지 자립률" value="41.3" unit="%" value-color="var(--energy-selfrate)" hint="목표 45%" />
      </div>
    `,
  }),
};
