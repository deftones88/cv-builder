# CV Builder (이력서 빌더)

온라인 이력서 제작 도구 | Online CV Creation Tool

## 시연 링크

- [CV Builder](https://deftones88.github.io/cv-builder)

## 프로젝트 소개

이력서 빌더는 직관적인 인터페이스를 통해 전문적인 이력서를 만들 수 있는 웹 애플리케이션입니다. 3개의 패널로 구성된 사용자 친화적인 디자인을 특징으로 합니다 :

- **선택 패널** : 다양한 이력서 컴포넌트 선택
- **캔버스** : 실시간으로 이력서를 구성하고 미리보기 할 수 있는 캔버스
- **상세 설정 패널** : 선택한 컴포넌트의 세부 내용 및 스타일 설정

## 주요 기능

- 직관적인 드래그 앤 드롭 인터페이스
- 실시간 미리보기
- 반응형 디자인
- <span style="color:gray">다양한 이력서 섹션을 위한 맞춤형 컴포넌트 (구현 예정)</span>
- <span style="color:gray">PDF 내보내기 기능 (구현 예정)</span>
- <span style="color:gray">작업 내용 자동 저장 (구현 예정)</span>
- <span style="color:gray">다양한 이력서 템플릿 (구현 예정)</span>

## 기술 스택

- **프론트엔드** : TypeScript, React
- **상태 관리** : Zustand
- **스타일링** : Tailwind CSS
- **빌드 도구** : Vite

## 실행 방법

```bash
# 프로젝트 클론
git clone https://github.com/deftones88/cv-builder.git

# 프로젝트 폴더로 이동
cd cv-builder

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 프로젝트 구조

```
src/
├── features/
│   ├── canvas/             # 중앙 캔버스 및 미리보기 컴포넌트
│   ├── cv-components/      # 이력서 컴포넌트 (헤딩, 사진, 리스트 등)
│   ├── selection-panel/    # 왼쪽 패널 (컴포넌트 선택)
│   └── settings-panel/     # 오른쪽 패널 (속성 설정)
├── layouts/                # 레이아웃 컴포넌트
├── pages/                  # 페이지 컴포넌트
├── shared/
│   ├── assets/             # 이미지, 아이콘 등 정적 자산
│   ├── components/         # 공통 컴포넌트
│   ├── constants/          # 상수 정의
│   ├── hooks/              # 커스텀 React 훅
│   ├── lib/                # 유틸리티 라이브러리
│   ├── styles/             # 전역 스타일
│   ├── types/              # TypeScript 타입 정의
│   └── stores/             # 상태 관리 (Zustand)
```

## 포트폴리오 프로젝트 목적

이 프로젝트는 다음과 같은 기술적 역량을 보여주기 위해 개발되었습니다 :

- TypeScript와 React를 활용한 복잡한 UI 구현
- 드래그 앤 드롭 기능 구현
- 상태 관리 및 데이터 흐름 설계
- 반응형 웹 디자인
- 클린 코드 작성 및 모듈화
