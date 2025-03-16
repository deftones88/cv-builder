import { VersionHistory } from "@shared/types";

export const PROJECT_INFO = {
  title: "CV Builder",
  github: "@deftones88",
} as const;

export const VERSION_HISTORY: VersionHistory[] = [
  {
    majorVersion: 1,
    subVersions: [
      {
        version: 1,
        updates: [
          { version: 2, update: "From Switch 추가" },
          { version: 1, update: "Carousel 추가 및 PDF 오류 해결" },
        ],
      },
      {
        version: 0,
        updates: [{ version: 1, update: "Page 추가" }],
      },
    ],
  },
  {
    majorVersion: 0,
    subVersions: [
      {
        version: 1,
        updates: [
          { version: 2, update: "Presets - Profile" },
          { version: 1, update: "PDF 저장, 작업 내용 저장" },
        ],
      },
      {
        version: 0,
        updates: [
          { version: 2, update: "Presets - Contact, Experience" },
          { version: 1, update: "Custom - Heading, Image, List" },
        ],
      },
    ],
  },
] as const;

export const TODOS = [
  "이력서 템플릿",
  "기간 설정 방식 보강",
  "storybook 에러 해결",
  "error boundary 구현",
];
