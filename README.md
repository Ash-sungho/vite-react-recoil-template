# Vite + React + Recoil + TypeScript 템플릿

이 프로젝트는 Vite, React, Recoil, TypeScript를 사용한 모던 웹 애플리케이션 개발을 위한 보일러플레이트 템플릿입니다.

## 🚀 기능

- **Vite**: 빠른 개발 서버와 최적화된 빌드 도구
- **React 18**: 최신 리액트 버전 적용
- **TypeScript**: 정적 타입 지원으로 개발 생산성 향상
- **Recoil**: 효율적인 상태 관리 라이브러리
- **Docker**: 컨테이너화 지원
- **ESLint & Prettier**: 코드 품질 및 일관성 유지
- **Vitest**: 단위 테스트 도구
- **이미지 최적화**: vite-plugin-imagemin 적용
- **환경 변수 관리**: 다양한 환경에 맞는 설정 지원

## 📋 사전 요구사항

- Node.js 18.0 이상
- npm 9.0.0 이상
- Docker (선택 사항)

## 🔧 설치 및 사용

### 로컬 개발 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview

# 테스트 실행
npm run test
```

### Docker 사용

```bash
# 개발 환경 실행
docker-compose up

# 프로덕션 이미지 빌드
docker build -t vite-react-recoil-app .

# 컨테이너 실행
docker run -d -p 80:80 --name vite-react-app vite-react-recoil-app
```

## 📁 프로젝트 구조

```
src/
├── api/           # API 관련 코드
├── assets/        # 정적 자원
├── components/    # 재사용 가능한 컴포넌트
├── hooks/         # 커스텀 훅
├── pages/         # 페이지 컴포넌트
├── recoil/        # Recoil 상태 관리
│   └── atoms/
│       └── count.ts  # 카운트 상태 예시
├── styles/        # 스타일 관련 파일
├── types/         # 타입 정의
└── utils/         # 유틸리티 함수
```

## 📦 배포

```bash
# 빌드
npm run build

# Docker 이미지 빌드
docker build -t vite-react-recoil-app .

# 컨테이너 실행
docker run -d -p 80:80 --name vite-react-app vite-react-recoil-app
```

## 🧪 테스트

```bash
# 테스트 실행
npm run test

# 테스트 커버리지 보고서 생성
npm run test:coverage
```

## 🔒 환경 변수

`.env` 파일을 사용하여 환경 변수를 관리합니다:

```
VITE_API_URL=http://localhost:8080
VITE_APP_TITLE=React Boilerplate
VITE_APP_VERSION=1.0.0
VITE_NODE_ENV=development
```

## 📝 라이선스

MIT

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다
