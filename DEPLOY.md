# 배포 가이드

B-WAY 목업을 온라인에 배포하는 방법입니다.

## 방법 1: Vercel (가장 간단, 추천 ⭐)

### 1단계: GitHub에 코드 올리기

```bash
# Git 저장소 초기화 (이미 완료됨)
git add .
git commit -m "Initial commit: B-WAY MVP Mockup"

# GitHub에서 새 저장소 생성 후:
git remote add origin https://github.com/당신의사용자명/bway-mockup.git
git branch -M main
git push -u origin main
```

### 2단계: Vercel에 배포

1. https://vercel.com 접속
2. "Sign Up" → GitHub 계정으로 로그인
3. "Add New Project" 클릭
4. 방금 만든 GitHub 저장소 선택
5. 설정:
   - Framework Preset: **Vite**
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 감지됨)
   - Output Directory: `dist` (자동 감지됨)
6. "Deploy" 클릭

**완료!** 몇 분 후 `https://당신의프로젝트명.vercel.app` 링크가 생성됩니다.

---

## 방법 2: GitHub Pages

### 1단계: vite.config.js 수정

GitHub Pages는 서브 경로에서 실행되므로 base 경로를 설정해야 합니다:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bway-mockup/', // 저장소 이름으로 변경
})
```

### 2단계: GitHub Actions 설정

`.github/workflows/deploy.yml` 파일 생성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 3단계: GitHub 저장소 설정

1. GitHub 저장소 → Settings → Pages
2. Source: **GitHub Actions** 선택
3. 저장소에 코드 푸시하면 자동 배포됨

**완료!** `https://당신의사용자명.github.io/bway-mockup/` 링크로 접속 가능

---

## 방법 3: Netlify

1. https://netlify.com 접속 → GitHub 계정으로 로그인
2. "Add new site" → "Import an existing project"
3. GitHub 저장소 선택
4. 설정:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. "Deploy site" 클릭

**완료!** `https://당신의프로젝트명.netlify.app` 링크 생성

---

## 추천 순서

1. **Vercel** - 가장 간단하고 빠름, 자동 HTTPS, 커스텀 도메인 지원
2. **Netlify** - Vercel과 비슷하게 간단함
3. **GitHub Pages** - 무료이지만 설정이 조금 복잡함

