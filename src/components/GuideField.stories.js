import GuideField from './GuideField.vue';
import GuideButton from './GuideButton.vue';

export default {
  title: '컴포넌트/입력·셀렉트',
  component: GuideField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['text', 'select'],
      description: '입력 종류',
    },
    surface: {
      control: 'radio',
      options: ['search', 'grid'],
      description: '표면 - 검색조건(흰 배경) / 그리드 컨트롤(#f1f4f9)',
    },
    label: { control: 'text', description: '필드 라벨' },
    placeholder: { control: 'text', description: '플레이스홀더 문구' },
  },
  args: {
    label: '기업명',
    type: 'text',
    surface: 'search',
    placeholder: '기업명 또는 초성 검색',
    modelValue: '',
  },
};

export const 텍스트_입력 = {};

export const 셀렉트 = {
  args: {
    label: '산단',
    type: 'select',
    options: ['전체', '여수', '율촌'],
    modelValue: '전체',
  },
};

export const 그리드_컨트롤 = {
  args: {
    label: '표시 개수',
    type: 'select',
    surface: 'grid',
    options: ['10', '30', '50'],
    modelValue: '10',
  },
};

// 실제 검색조건 영역 구성 예시
export const 검색조건_영역 = {
  render: () => ({
    components: { GuideField, GuideButton },
    template: `
      <div style="background:#f7f9fc; border:1px solid #dfe4ec; border-radius:8px; padding:20px; font-family:var(--font-sans);">
        <div style="display:flex; gap:16px; align-items:flex-end; flex-wrap:wrap;">
          <GuideField label="산단" type="select" :options="['전체','여수','율촌']" model-value="전체" />
          <GuideField label="기업명" placeholder="기업명 또는 초성 검색" />
          <GuideButton label="검색" variant="primary" />
          <GuideButton label="초기화" variant="normal" />
        </div>
        <p style="font-size:12px; color:rgba(0,0,0,.6); line-height:1.7; margin:16px 0 0;">
          필드 라벨 12px/600 · 입력 글자 14px/400 · 반경 4~5px<br />
          검색조건 셀렉트 배경 #ffffff / 그리드 컨트롤 #f1f4f9<br />
          테두리는 검정 10~14% · 플레이스홀더는 검정 55%
        </p>
      </div>
    `,
  }),
};
