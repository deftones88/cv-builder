import { Paper } from "../../canvas-paper.types";

export const PAPER_PRESETS: { label: Paper; dimension: number }[] = [
  { label: "A4", dimension: 210 / 297 },
  { label: "Letter", dimension: 8.5 / 11 },
  //   { label: "A3", dimension: 297 / 420 },
] as const;
