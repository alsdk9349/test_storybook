import BaseBadge from './BaseBadge.vue';

export default {
  title: '공통/상태배지',
  component: BaseBadge,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['진행중', '완료', '지연', '대기'],
      description: '상태 종류',
    },
    text: {
      control: 'text',
      description: '표시 문구',
    },
  },
  args: {
    text: '진행중',
    status: '진행중',
  },
};

export const 진행중 = {};

export const 완료 = {
  args: { text: '완료', status: '완료' },
};

export const 지연 = {
  args: { text: '지연', status: '지연' },
};

// 전체 상태를 한 화면에서 비교
export const 전체_목록 = {
  render: () => ({
    components: { BaseBadge },
    template: `
      <div style="display:flex; gap:8px;">
        <BaseBadge text="진행중" status="진행중" />
        <BaseBadge text="완료" status="완료" />
        <BaseBadge text="지연" status="지연" />
        <BaseBadge text="대기" status="대기" />
      </div>
    `,
  }),
};
