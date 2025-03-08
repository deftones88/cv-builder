import { VersionHistory } from "@shared/types";

export const PROJECT_INFO = {
  title: "CV Builder",
  github: "@deftones88",
} as const;

export const VERSION_HISTORY: VersionHistory[] = [
  {
    majorVersion: 0,
    subVersions: [
      {
        version: 0,
        updates: [
          { version: 2, update: "Presets" },
          { version: 1, update: "Heading, Image, List" },
        ],
      },
    ],
  },
] as const;

export const TODOS = [
  "페이지 추가",
  "PDF 내보내기 기능",
  "이력서 템플릿",
  "작업 내용 자동 저장",
];
