import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Vite 기본 설정 - Vue 단일 파일 컴포넌트(.vue) 처리 플러그인만 사용
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
});
