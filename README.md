# 디센트 모바일 앱 Discovery 메인 화면 클론 코딩

본 프로젝트는 디센트(D'Cent) 모바일 지갑 앱의 **Discovery 메인 화면**을 클론 코딩하는 프로젝트입니다.

## 1. 기술 스택

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI library**: swiper.js
- **State Management**: React Hooks
- **Internationalization**: i18next
- **Linting**: ESLint

## 2. 프로젝트 실행 및 빌드 방법

### 실행

```bash
yarn dev
```

### 빌드

```bash
yarn build
```

### Staging 빌드 및 실행

```bash
yarn build:staging
yarn start:staging
```

## 3. 구현한 주요 요소

- **상단 배너**: `swiper` 라이브러리를 사용하여 자동 슬라이드 및 수동 스와이프가 가능한 배너를 구현했습니다.
- **즐겨찾기 리스트**: API로부터 즐겨찾기 목록을 받아와 목록을 표시하고, 각 항목을 삭제할 수 있는 기능을 구현했습니다.
- **서비스 리스트**: API로부터 서비스 목록을 받아와 목록을 표시합니다.
- **다국어 지원**: `i18next`를 사용하여 한국어와 영어를 지원합니다. `middleware.ts`에서 언어 정보를 받아와 각 페이지와 컴포넌트에 전달합니다.
- **API 연동**: `fetch` API를 사용하여 서버로부터 데이터를 받아옵니다. 각 API는 `app/api` 디렉토리에서 확인할 수 있습니다.

## 4. 제한 시간 내 구현하지 못한 부분 & 보완하고 싶은 점

- **서비스 리스트 필터링**: PRD에 명시된 플랫폼, 언어, 빌드 환경에 따른 서비스 리스트 필터링 기능이 현재는 구현되어 있지 않습니다. 현재는 모든 서비스 리스트를 그대로 보여주고 있습니다.
- **즐겨찾기 삭제 기능**: 현재는 UI만 구현되어 있고, 실제 삭제 로직은 구현되어 있지 않습니다.
- **리패칭 기능**: revalidate를 활용한 캐싱 및 데이터 리패칭 부분 구현 필요
- **로딩 및 에러 처리**: Skeleton UI나 로딩 스피너와 같은 로딩 상태 표시 기능과 API 에러 발생 시 사용자에게 보여줄 에러 처리 UI가 미흡합니다.

## 5. AI 사용부분

- **PRD 문서생성**: CHAT GPT
- **README 문서생성 및 코딩 보조**: GEMINI
