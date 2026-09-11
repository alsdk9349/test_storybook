# 스토리북 사용 가이드


- 배포 주소: https://alsdk9349.github.io/test_storybook/
- 저장소: https://github.com/alsdk9349/test_storybook
- 스택: Vue 3 + Vite + Storybook 10 (추가 UI 라이브러리 없음, 순수 CSS 변수)

---

## 1. 스토리북이 무엇인가

컴포넌트 하나를 **앱 전체를 띄우지 않고** 독립적으로 렌더링해서 확인하는 도구입니다.

핵심 용어는 두 개입니다.

| 용어 | 뜻 |
|---|---|
| **스토리(Story)** | 컴포넌트의 한 가지 상태. "비활성 버튼", "경보 상태 뱃지" 하나가 스토리 하나 |
| **스토리 파일** | 스토리들을 모아 놓은 `*.stories.js` 파일. 컴포넌트 파일 옆에 둔다 |

---

## 2. 실행

```bash
git clone https://github.com/alsdk9349/test_storybook.git
cd test_storybook
npm install          # 최초 1회만
npm run storybook    # 작업할 때마다
```

브라우저에서 `http://localhost:6006` 이 자동으로 열립니다.
파일을 저장하면 화면이 즉시 갱신되므로 재시작할 필요 없습니다.

| 명령 | 용도 |
|---|---|
| `npm run storybook` | 개발 서버 실행 (포트 6006) |
| `npm run build-storybook` | 정적 파일 빌드 → `storybook-static/` |

---

## 3. 화면 구성

```
┌──────────────┬───────────────────────────────────┐
│  사이드바     │          캔버스                    │
│              │   (컴포넌트가 실제로 그려지는 영역)   │
│ 가이드/       │                                   │
│  색상/        ├───────────────────────────────────┤
│  테마 토큰     │  Controls │ Actions │ A11y        │
│ 컴포넌트/      │  (props를 실시간으로 조작)          │
└──────────────┴───────────────────────────────────┘
```

- **사이드바** — 스토리 목록. `가이드`는 읽는 문서, `컴포넌트`는 조작하는 UI
- **캔버스** — 선택한 스토리의 렌더링 결과
- **Controls** — props를 직접 바꿔보는 패널. 코드를 고치지 않고 상태 확인
- **Docs 탭** — props 표 + 모든 스토리가 한 페이지에 정리 (자동 생성)
- **A11y 탭** — 접근성 자동 검사 결과. 공공기관 웹 접근성 검수 대응용
- 우상단 **`</>`** 버튼 — 현재 스토리의 소스 코드 확인
- **`/`** 키 — 스토리 검색

---

## 4. 저장소 구조

```
src/
├── styles/
│   └── tokens.css              모든 색상·폰트·여백을 CSS 변수로 정의 (단일 출처)
├── guide/                      읽기용 문서 스토리
│   ├── ColorTable.vue          색상 표 공용 컴포넌트
│   ├── SlotTable.vue           업종 슬롯 light/dark 대조표
│   ├── NoteBox.vue             표 아래 설명 박스
│   ├── EnergyColors.stories.js      A. 에너지
│   ├── StatusColors.stories.js      B. 등급·상태
│   ├── CategoryColors.stories.js    C. 카테고리
│   ├── ThemeTokens.stories.js       테마 토큰 + 화면 레이아웃
│   └── Typography.stories.js        폰트 위계
└── components/                 실제 사용할 UI 컴포넌트
    ├── GuideButton.vue         버튼
    ├── GuideField.vue          입력 · 셀렉트
    ├── StatusBadge.vue         상태 뱃지
    ├── StatCard.vue            KPI 카드
    ├── DataBox.vue             카드(data-box)
    ├── DataGrid.vue            그리드(테이블)
    ├── Pagination.vue          페이지네이션
    ├── GlassCard.vue           메인 대시보드 글래스 카드
    └── *.stories.js            각 컴포넌트의 스토리
```

`.storybook/main.js`가 `src/**/*.stories.js`를 자동으로 찾으므로, **파일만 만들면 목록에 나타납니다.** 별도 등록이 필요 없습니다.

---

## 5. 스토리 파일 작성법

### 기본 형태

```js
import GuideButton from './GuideButton.vue';

// 기본 내보내기 = 이 파일 전체의 설정
export default {
  title: '컴포넌트/버튼',        // 사이드바 경로. '/'로 계층 구분
  component: GuideButton,       // props 표 자동 생성 대상
  tags: ['autodocs'],           // Docs 탭 자동 생성
  argTypes: {                   // Controls 패널의 조작 UI 지정
    variant: {
      control: 'select',
      options: ['primary', 'normal', 'text'],
      description: '버튼 종류',
    },
    disabled: { control: 'boolean', description: '비활성 여부' },
  },
  args: {                       // 모든 스토리의 기본 props 값
    label: '검색',
    variant: 'primary',
    disabled: false,
  },
};

// 이름있는 내보내기 하나 = 스토리 하나
export const 주_버튼 = {};                                 // args를 그대로 사용
export const 보통_버튼 = { args: { variant: 'normal' } };   // 일부만 덮어쓰기
export const 비활성 = { args: { disabled: true } };
```

내보내는 이름이 사이드바에 그대로 표시됩니다. 한글 이름을 사용해도 됩니다.

### control 종류

| control | 쓰는 경우 |
|---|---|
| `'text'` | 문자열 |
| `'boolean'` | true / false |
| `'number'` | 숫자 |
| `'select'` | 선택지가 4개 이상 |
| `'radio'` | 선택지가 2~3개 |
| `'color'` | 색상 |
| `'object'` | 배열 · 객체 |

### 여러 개를 한 화면에 나열할 때

props 조작이 아니라 "전부 한눈에 비교"가 목적이면 `render`로 템플릿을 직접 씁니다.

```js
export const 전체_목록 = {
  render: () => ({
    components: { GuideButton },
    template: `
      <div style="display:flex; gap:8px;">
        <GuideButton label="검색" variant="primary" />
        <GuideButton label="이전" variant="normal" />
        <GuideButton label="비활성 탭" variant="text" />
      </div>
    `,
  }),
};
```

### 상태가 필요할 때 (v-model 등)

```js
import { ref } from 'vue';

export const 동작_확인 = {
  render: () => ({
    components: { Pagination },
    setup() {
      const 현재페이지 = ref(1);       // 스토리 안에서 상태 관리
      return { 현재페이지 };
    },
    template: `<Pagination v-model:current="현재페이지" :total="7" />`,
  }),
};
```

### 슬롯에 다른 컴포넌트를 넣을 때

```js
export const 뱃지_삽입 = {
  render: () => ({
    components: { DataGrid, StatusBadge },
    setup() { return { 컬럼, 데이터 }; },
    template: `
      <DataGrid :columns="컬럼" :rows="데이터">
        <template #cell-status="{ value }">
          <StatusBadge group="ops" :status="value" />
        </template>
      </DataGrid>
    `,
  }),
};
```

---

## 6. 컴포넌트 작성 규칙

### 색상은 반드시 토큰으로

`tokens.css`에 정의된 CSS 변수만 사용합니다. HEX를 직접 쓰면 나중에 값이 바뀔 때 누락됩니다.

```css
/* 올바름 */
.btn { background-color: var(--primary); border-radius: var(--radius-control); }

/* 지양 */
.btn { background-color: #1d63d8; border-radius: 4px; }
```

주요 토큰:

| 분류 | 변수 |
|---|---|
| 배경 | `--base-100` `--base-200` `--base-300` `--neutral` |
| 텍스트 | `--base-content` `--alpha-70` `--alpha-60` `--alpha-55` `--alpha-40` |
| 의미색 | `--primary` `--secondary` `--accent` `--info` `--success` `--warning` `--error` |
| 에너지 | `--energy-solar` `--energy-ess` `--energy-grid` `--energy-load` 등 |
| 형태 | `--radius-card`(8px) `--radius-control`(4px) `--card-padding`(20px) |
| 글자 | `--fs-title`(24) `--fs-box-title`(18) `--fs-body`(14) `--fs-label`(12) |

전체 목록은 스토리북의 `가이드 → 테마 토큰`, `가이드 → 색상`에서 확인할 수 있습니다.

### 그 외

- `<style scoped>` 사용 — 전역 오염 방지
- props에 `validator`와 주석을 달면 Controls 패널과 Docs에 그대로 노출됨
- 상태색은 색만으로 뜻을 전달하지 않도록 마커·라벨 병기 (WCAG SC 1.4.1)
- 주석은 한글로 작성

---

## 7. 새 컴포넌트 추가 절차

1. `src/components/NewThing.vue` 생성 — props 정의, scoped CSS는 토큰 사용
2. `src/components/NewThing.stories.js` 생성 — `title: '컴포넌트/새 이름'`
3. 저장하면 사이드바에 자동 반영
4. Controls로 모든 상태를 확인하고, A11y 탭에 위반이 없는지 점검
5. 커밋 → push → 자동 배포

---

## 8. 주의할 점

**`title`은 저장소 전체에서 유일해야 합니다.**
중복되면 빌드가 `Unable to index` 오류로 실패합니다. 기존에 쓰인 경로는 사이드바에서 먼저 확인하세요.

**사이드바 정렬은 `.storybook/preview.js`에서 지정합니다.**
`storySort.order`에 적히지 않은 항목은 파일 탐색 순서대로 뒤섞이므로, 새 그룹을 추가하면 이 배열에도 넣어야 합니다.

**`npm run build-storybook`으로 미리 확인하세요.**
개발 서버에서는 통과해도 빌드에서 걸리는 경우가 있습니다. push 전에 한 번 돌려보면 배포 실패를 막을 수 있습니다.

---

## 9. 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드·배포합니다.

- 워크플로우: `.github/workflows/deploy-storybook.yml`
- 진행 상황: 저장소 `Actions` 탭 (2~4분 소요)
- 결과: https://alsdk9349.github.io/test_storybook/

배포가 안 되면 `Actions` 탭에서 실패한 단계의 로그를 먼저 확인하세요.

---

## 10. 문제 해결

| 증상 | 원인과 조치 |
|---|---|
| `Cannot find module` | `npm install` 실행 |
| 포트 6006 사용 중 | 이전 서버가 살아있음. 해당 터미널에서 `Ctrl + C` |
| 사이드바에 새 스토리가 안 보임 | 파일명이 `*.stories.js`인지, `src/` 하위인지 확인 |
| 빌드 시 `Unable to index` | 서로 다른 파일에 같은 `title`이 있음 |
| 색상이 적용되지 않음 | `tokens.css`에 없는 변수명. 오타 확인 |
| `preview.js` 수정이 반영 안 됨 | 설정 파일은 서버 재시작이 필요할 수 있음 |

---

## 11. 참고

- Storybook 공식 문서: https://storybook.js.org/docs
- 스토리 작성 형식(CSF 3): https://storybook.js.org/docs/api/csf
