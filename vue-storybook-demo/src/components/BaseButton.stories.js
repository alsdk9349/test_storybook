import BaseButton from './BaseButton.vue';

// 스토리 파일의 기본 설정
// title  : 좌측 트리에서의 경로 ('/' 로 계층 구분)
// component : 대상 컴포넌트 (Props 표가 자동 생성됨)
// argTypes  : Controls 패널에서 값을 어떤 UI로 조작할지 지정
export default {
  title: '공통/버튼',
  component: BaseButton,
  tags: ['autodocs'], // Docs 탭 자동 생성
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: '버튼 종류',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    disabled: {
      control: 'boolean',
      description: '비활성 여부',
    },
    label: {
      control: 'text',
      description: '버튼 문구',
    },
  },
  // 모든 스토리에 공통으로 적용할 기본값
  args: {
    label: '확인',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
};

// 각 export 가 화면 하나(= 스토리)로 만들어진다.
export const 기본 = {};

export const 보조 = {
  args: { label: '취소', variant: 'secondary' },
};

export const 위험 = {
  args: { label: '삭제', variant: 'danger' },
};

export const 비활성 = {
  args: { label: '확인', disabled: true },
};

// 여러 변형을 한 화면에 나열하려면 render 함수를 직접 작성한다.
export const 크기별_비교 = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display:flex; gap:8px; align-items:center;">
        <BaseButton v-bind="args" size="small" label="작게" />
        <BaseButton v-bind="args" size="medium" label="보통" />
        <BaseButton v-bind="args" size="large" label="크게" />
      </div>
    `,
  }),
};
