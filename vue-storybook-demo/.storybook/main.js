/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  // 스토리 파일 탐색 경로 - src 하위의 *.stories.js 와 문서용 *.mdx 를 모두 인식
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  // 사용 애드온
  // - addon-docs : Props 표와 자동 문서(Docs 탭) 생성
  // - addon-a11y : 웹 접근성 자동 점검 (공공기관 웹 접근성 검수에 유용)
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],

  framework: '@storybook/vue3-vite',
};

export default config;
