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
        version: 1,
        updates: [
          { version: 2, update: "Presets - Profile" },
          { version: 1, update: "Export to PDF, save to session" },
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

export const TODOS = ["페이지 추가", "이력서 템플릿"];
