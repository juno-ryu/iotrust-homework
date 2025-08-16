# 📄 PRD -- 디센트 모바일 앱 Discovery 메인 화면 구현

## 1. 개요

본 프로젝트는 디센트(D'Cent) 모바일 지갑 앱의 **Discovery 메인 화면**을
프론트엔드에서 구현하는 것을 목표로 한다.\
제공된 화면 캡처와 시연 영상 자료를 기반으로 UI/UX와 데이터 구조를
설계하고, 환경별/언어별/플랫폼별로 서비스 노출 조건을 처리한다.

---

## 2. 목표

- **UI/UX 정확도**: 캡처 자료와 유사한 구조 구현\
- **데이터 조건 처리**: 언어, 플랫폼, 빌드 환경 조합에 따른 서비스
  노출\
- **다국어 지원**: 한국어·영어 UI 동시 지원\
- **환경 분리**: dev / stage / prod 환경별 API base URL 및 빌드 설정\
- **사용자 경험 강화**: 로딩·예외 처리·팝업 인터랙션

---

## 3. 주요 기능 요구사항

### 3.1 상단 배너 영역

- 슬라이드 배너 구현\
- 자동 슬라이드 및 수동 스와이프 지원\
- 하단 인디케이터 표시\
- CTA 버튼 지원\
- 배너 클릭 또는 CTA 버튼 클릭 시 지정된 URL로 이동

### 3.2 즐겨찾기(Favorites) 리스트

- 각 항목에 삭제 버튼 제공\
- 삭제 시 팝업 안내 후 삭제 동작\
- 즐겨찾기 데이터는 API 응답을 기반으로 렌더링 (dev 환경에서는 mock
  데이터 사용)

### 3.3 서비스(Service) 리스트

- 서비스 노출 조건
  - 언어: 한국어 / 영어\
  - 플랫폼: Android / iOS\
  - 빌드 환경: dev / stage / prod\
- 조건 조합에 따라 서비스 노출 여부 결정
  - 예) A 서비스는 한국어 + Android + dev 환경에서만 표시

---

## 4. 데이터 구조 설계 (예시)

```ts
interface Banner {
  id: string;
  imageUrl: string;
  ctaText: string;
  ctaUrl: string;
}

interface Favorite {
  id: string;
  title: string;
  url: string;
  iconUrl: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  language: ("ko" | "en")[];
  platform: ("android" | "ios")[];
  environments: ("dev" | "stage" | "prod")[];
  link: string;
}
```

---

## 5. 환경 구성

- 프레임워크: Next.js
- 환경 분리: `.env` 파일 사용
  - `NEXT_PUBLIC_API_BASE_URL_DEV`\
  - `NEXT_PUBLIC_API_BASE_URL_STAGE`\
  - `NEXT_PUBLIC_API_BASE_URL_PROD`\
- dev 환경: mock 데이터 사용\
- stage/prod 환경: 외부 API 요청 구조 포함

---

## 6. 비기능 요구사항

- 예외 처리: API 응답 없음, 빈 리스트 처리\
- 로딩 상태 표시: Skeleton UI 또는 로더\
- 코드 품질: 명확한 커밋 메시지, 기능 단위 커밋\
- 다국어 처리: i18n 라이브러리 활용\
- UI 반응성: 모바일 최적화

---

## 7. 참고 자료

- 제공된 디센트 앱 화면 캡처\
- 시연 동영상 (외부 제공)\
- IoTrust 프론트엔드 과제 가이드

---

## 8. 산출물

- GitHub Public Repo 링크\
- README.md\
- 기술 스택\
- 실행 및 빌드 방법\
- 구현 주요 요소\
- 제한 시간 내 미구현 부분 & 개선 아이디어
