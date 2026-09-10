import GuideButton from './GuideButton.vue';

export default {
  title: '컴포넌트/버튼',
  component: GuideButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'normal', 'text'],
      description: '버튼 종류 - 주 버튼 / 보통 버튼 / 텍스트 버튼',
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
  args: {
    label: '검색',
    variant: 'primary',
    disabled: false,
  },
};

export const 주_버튼 = {
  args: { label: '검색', variant: 'primary' },
};

export const 보통_버튼 = {
  args: { label: '이전', variant: 'normal' },
};

export const 텍스트_버튼 = {
  args: { label: '비활성 탭', variant: 'text' },
};

export const 비활성 = {
  args: { label: '검색', disabled: true },
};

// 발표자료의 버튼 규격을 한 화면에 정리
export const 규격_비교 = {
  render: () => ({
    components: { GuideButton },
    template: `
      <div style="display:flex; flex-direction:column; gap:18px; font-family:var(--font-sans);">
        <div style="display:flex; gap:14px; align-items:center;">
          <GuideButton label="검색" variant="primary" />
          <span style="font-size:12px; color:rgba(0,0,0,.6); line-height:1.7;">
            btn-primary — 배경 #1d63d8 · 글자 #ffffff<br />테두리 #1a57be 1px · 반경 4px · 14px/600
          </span>
        </div>
        <div style="display:flex; gap:14px; align-items:center;">
          <GuideButton label="이전" variant="normal" />
          <span style="font-size:12px; color:rgba(0,0,0,.6); line-height:1.7;">
            보통 버튼 — 배경 #f1f4f9 · 글자 #1b2430<br />테두리 검정 12%(#d6dbe4) · 반경 4px
          </span>
        </div>
        <div style="display:flex; gap:14px; align-items:center;">
          <GuideButton label="비활성 탭" variant="text" />
          <span style="font-size:12px; color:rgba(0,0,0,.6); line-height:1.7;">
            비활성 텍스트 — 검정 55% (탭 · 미선택 항목)<br />활성 페이지 번호는 primary 배경 + #ffffff 글자
          </span>
        </div>
      </div>
    `,
  }),
};
