import StatusBadge from './StatusBadge.vue';

export default {
  title: '컴포넌트/상태 뱃지',
  component: StatusBadge,
  tags: ['autodocs'],
  argTypes: {
    group: {
      control: 'select',
      options: ['ops', 'settle', 'severity', 'air', 'load'],
      description: '상태 그룹 - 운영 / 정산 / 심각도 / 대기질 / 부하대',
    },
    status: {
      control: 'text',
      description: '상태 값',
    },
  },
  args: {
    group: 'ops',
    status: '정상',
  },
};

export const 기본 = {};

const 그룹표 = [
  { group: 'ops', title: '운영 상태', items: ['정상', '주의', '경보', '미계측'] },
  { group: 'settle', title: '정산 상태', items: ['확정', '지급완료', '검증중', '조정중'] },
  { group: 'severity', title: '이벤트 심각도', items: ['심각', '높음', '보통', '낮음', '정상'] },
  { group: 'air', title: '대기질 등급', items: ['좋음', '보통', '나쁨', '매우나쁨'] },
  { group: 'load', title: '부하대', items: ['경부하', '중간부하', '최대부하'] },
];

export const 그룹별_전체 = {
  render: () => ({
    components: { StatusBadge },
    setup() {
      return { 그룹표 };
    },
    template: `
      <div style="font-family:var(--font-sans); max-width:720px;">
        <div v-for="g in 그룹표" :key="g.group" style="margin-bottom:22px;">
          <div style="font-size:12px; font-weight:600; color:rgba(0,0,0,.6); margin-bottom:8px;">{{ g.title }}</div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <StatusBadge v-for="s in g.items" :key="s" :group="g.group" :status="s" />
          </div>
        </div>

        <div style="border:1px solid #cfe3f5; background:#eef6fb; border-radius:8px; padding:14px 16px; font-size:12px; line-height:1.8;">
          <strong>상태색은 색만으로 뜻을 전달하지 않는다</strong> — 도형 마커 + 라벨을 함께 사용 (WCAG SC 1.4.1)<br />
          심각도의 '높음'(#F57C00)과 '보통'(#FBC02D)은 반드시 다른 색으로 분리한다.
        </div>
      </div>
    `,
  }),
};
