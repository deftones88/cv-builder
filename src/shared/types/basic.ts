export type SizeFull = "xs" | "sm" | "md" | "lg" | "xl";
export type Alignment = "left" | "center" | "right";

export type Version = { version: number; update: string };
export type SubVersion = { version: number; updates: Version[] };
export type VersionHistory = {
  majorVersion: number;
  subVersions: SubVersion[];
};
