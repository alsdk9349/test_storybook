# Vue 3 + Storybook — GitHub Pages 배포 가이드

개발 PC에서 GitHub 저장소를 만들고, push 한 번으로 Storybook을 웹 URL로 공개하는 전체 절차서.

- 최종 접속 주소 형태: `https://<깃허브계정>.github.io/<저장소명>/`
- 검증 환경: Node.js 22 / npm 10 / Vue 3.5 / Vite 8 / Storybook 10.6

---

## 1. 사전 준비

| 항목 | 내용 |
|---|---|
| Node.js | 20 이상 (`node -v` 로 확인, 미설치 시 nodejs.org LTS 설치) |
| Git | `git --version` 으로 확인 |
| GitHub 계정 | 없으면 github.com 에서 가입 |

---

## 2. 프로젝트 준비

압축을 풀고 해당 폴더에서 의존성을 설치한다.

```bash
cd vue-storybook-demo
npm install
```

로컬에서 확인한다.

```bash
npm run storybook
```

브라우저에서 `http://localhost:6006` 이 자동으로 열린다. 종료는 `Ctrl + C`.

---

## 3. GitHub 저장소 생성 및 업로드

### 3-1. 저장소 생성

- github.com → 우측 상단 `+` → **New repository**
- Repository name: 예) `vue-storybook-demo`
- 공개 범위: **Public** 선택 (무료 계정은 Private 저장소에서 Pages 사용 불가)
- README·gitignore 추가 옵션은 **모두 체크 해제**
- **Create repository** 클릭

### 3-2. 소스 업로드

프로젝트 폴더에서 아래 명령을 순서대로 실행한다. 마지막 줄의 주소는 본인 저장소 주소로 교체한다.

```bash
git init
git add .
git commit -m "Storybook 초기 구성"
git branch -M main
git remote add origin https://github.com/<깃허브계정>/vue-storybook-demo.git
git push -u origin main
```

---

## 4. GitHub Pages 활성화

- 저장소 → **Settings** → 좌측 **Pages**
- **Build and deployment** → Source 를 **GitHub Actions** 로 변경
- 별도 저장 버튼 없이 즉시 적용됨

> 이 설정을 하지 않으면 워크플로가 배포 단계에서 실패한다.

---

## 5. 자동 배포 확인

- 저장소 → **Actions** 탭 → `Deploy Storybook to GitHub Pages` 실행 확인
- 최초 실행은 2~4분 소요
- 완료 후 **Settings → Pages** 상단 또는 Actions 의 deploy 단계에 접속 URL이 표시됨

이후 `main` 브랜치에 push 할 때마다 자동으로 재배포된다.

```bash
git add .
git commit -m "버튼 컴포넌트 수정"
git push
```

---

## 6. 컴포넌트 추가 방법

### 6-1. 컴포넌트 작성

`src/components/BaseInput.vue`

```vue
<script setup>
// 부모로부터 받는 값(props) 정의
defineProps({
  label: { type: String, required: true },
  placeholder: { type: String, default: '' },
});
</script>

<template>
  <label>
    {{ label }}
    <input type="text" :placeholder="placeholder" />
  </label>
</template>
```

### 6-2. 스토리 작성

`src/components/BaseInput.stories.js`

```js
import BaseInput from './BaseInput.vue';

export default {
  title: '공통/입력', // 좌측 트리 경로
  component: BaseInput,
  tags: ['autodocs'], // Docs 탭 자동 생성
  args: { label: '사업명', placeholder: '입력하세요' },
};

// 각 export 가 화면 하나가 된다
export const 기본 = {};

export const 안내문구_포함 = {
  args: { placeholder: '예) 광양산단 에너지자급자족 인프라구축' },
};
```

파일을 저장하면 로컬 서버에 즉시 반영되고, push 하면 웹에도 반영된다.

---

## 7. 폴더 구조

```
vue-storybook-demo/
├─ .github/workflows/
│  └─ deploy-storybook.yml   ← GitHub Pages 자동 배포 설정
├─ .storybook/
│  ├─ main.js                ← 스토리 탐색 경로·애드온 설정
│  └─ preview.js             ← 공통 파라미터·트리 정렬 순서
├─ src/
│  ├─ 소개.mdx               ← 카탈로그 안내 문서
│  └─ components/
│     ├─ BaseButton.vue      ← 공통 버튼
│     ├─ BaseButton.stories.js
│     ├─ BaseBadge.vue       ← 상태 배지
│     └─ BaseBadge.stories.js
├─ package.json
└─ vite.config.js
```

---

## 8. 주요 명령어

| 명령 | 설명 |
|---|---|
| `npm run storybook` | 로컬 개발 서버 실행 (localhost:6006) |
| `npm run build-storybook` | 정적 사이트 빌드 → `storybook-static/` 생성 |
| `npm run dev` | 일반 Vue 앱 개발 서버 실행 |

---

## 9. 참고 사항

- **외부 공개가 부담될 경우**: `npm run build-storybook` 실행 후 생성되는 `storybook-static` 폴더를 압축해 전달하면, 받는 쪽에서 `index.html` 을 열어 동일하게 확인할 수 있다. 웹서버 없이 동작한다.
- **접근성 점검**: 하단 `Accessibility` 패널에서 명도 대비·대체 텍스트 등 위반 항목이 자동 검출된다. 공공기관 웹 접근성 심사 대비에 활용 가능하다.
- **사내 서버 이관**: 운영 단계에서는 `storybook-static` 폴더를 그대로 웹서버 문서 루트에 복사하면 된다. 별도 백엔드가 필요 없다.
