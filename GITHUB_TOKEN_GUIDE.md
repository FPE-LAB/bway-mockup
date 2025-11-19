# GitHub Personal Access Token 생성 가이드

## 1단계: GitHub에 로그인
https://github.com 에 로그인하세요.

## 2단계: Settings로 이동
- 우측 상단 프로필 사진 클릭
- **Settings** 클릭

## 3단계: Developer settings로 이동
- 왼쪽 메뉴 맨 아래 **Developer settings** 클릭

## 4단계: Personal access tokens 생성
- **Personal access tokens** → **Tokens (classic)** 클릭
- 또는 직접: https://github.com/settings/tokens

## 5단계: 새 토큰 생성
- **Generate new token** → **Generate new token (classic)** 클릭
- Note: `bway-mockup 배포용` (원하는 이름)
- Expiration: 원하는 기간 선택 (예: 90 days 또는 No expiration)
- **Select scopes**에서:
  - ✅ **repo** 체크 (전체 체크됨)
    - repo:status
    - repo_deployment
    - public_repo
    - repo:invite
    - security_events
- 맨 아래 **Generate token** 클릭

## 6단계: 토큰 복사
⚠️ **중요**: 토큰은 이 페이지에서만 볼 수 있습니다!
`ghp_xxxxxxxxxxxxxxxxxxxx` 형태의 토큰을 복사하세요.

## 7단계: 푸시할 때 사용
터미널에서:
```bash
git push -u origin main
```

- Username: GitHub 사용자명 입력
- Password: **복사한 토큰을 붙여넣기** (일반 비밀번호 아님!)

---

## 간단 요약
1. GitHub → 프로필 → Settings
2. Developer settings → Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. repo 권한 체크 → Generate token
5. 토큰 복사
6. 푸시할 때 비밀번호 대신 토큰 입력

