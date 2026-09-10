import { ref } from 'vue';
import Pagination from './Pagination.vue';

export default {
  title: '컴포넌트/페이지네이션',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    current: { control: 'number', description: '현재 페이지' },
    total: { control: 'number', description: '전체 페이지 수' },
  },
  args: {
    current: 1,
    total: 5,
  },
};

export const 기본 = {};

// 클릭으로 페이지가 실제로 바뀌는 예시
export const 동작_확인 = {
  render: () => ({
    components: { Pagination },
    setup() {
      // 현재 페이지 상태를 스토리 안에서 관리한다.
      const 현재페이지 = ref(2);
      return { 현재페이지 };
    },
    template: `
      <div style="font-family:var(--font-sans);">
        <Pagination v-model:current="현재페이지" :total="7" />
        <p style="font-size:12px; color:rgba(0,0,0,.6); margin-top:12px;">
          선택된 페이지: {{ 현재페이지 }}
        </p>
      </div>
    `,
  }),
};
