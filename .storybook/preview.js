/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    // Controls 패널에서 값의 타입을 자동 추론하는 규칙
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // 접근성 검사 결과 표시 방식
    // 'todo'  - 테스트 UI에만 표시
    // 'error' - 위반 시 CI 실패 처리
    // 'off'   - 검사 끄기
    a11y: {
      test: 'todo',
    },

    // 좌측 트리 정렬 순서 - 가이드 문서를 항상 맨 위에 노출
    options: {
      storySort: {
        order: ['소개', '공통'],
      },
    },
  },
};

export default preview;
