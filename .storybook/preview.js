// 디자인 토큰 - 모든 스토리에 공통 적용
import '../src/styles/tokens.css';

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

    // 캔버스 배경 - 라이트 테마 기준
    backgrounds: {
      options: {
        light: { name: '라이트 (base-100)', value: '#ffffff' },
        surface: { name: '컨트롤 표면 (base-200)', value: '#f1f4f9' },
      },
    },

    // 좌측 트리 정렬 순서 - 가이드 문서를 항상 위에 노출
    // 하위 그룹까지 배열로 지정해야 순서가 고정된다.
    // 지정하지 않으면 파일 탐색 순서대로 뒤섞이므로 A · B · C를 명시한다.
    options: {
      storySort: {
        order: [
          '소개',
          '가이드',
          [
            '색상',
            ['A. 에너지', 'B. 등급·상태', 'C. 카테고리'],
            '테마 토큰과 레이아웃',
            '컴포넌트',
            '타이포그래피',
            '메인 대시보드',
          ],
          '컴포넌트',
          '공통',
        ],
      },
    },
  },

  // 기본 배경값
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
};

export default preview;
