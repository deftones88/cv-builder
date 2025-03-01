import { AspectRatio, RatioSizeKey } from "./img-placeholder.types";

export const AspectRatioClasses: Record<AspectRatio, string> = {
  "1/1": "aspect-square",
  "2/3": "aspect-[2/3]",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-[16/9]",
  "9/16": "aspect-[9/16]",
} as const;

export const AspectRatioWHClasses: Record<RatioSizeKey, string> = {
  "1/1sm": "max-w-[50px]",
  "1/1md": "max-w-[100px]",
  "1/1lg": "max-w-[200px]",
  "2/3sm": "max-w-[60px]",
  "2/3md": "max-w-[100px]",
  "2/3lg": "max-w-[200px]",
  "3/2sm": "max-w-[90px]",
  "3/2md": "max-w-[150px]",
  "3/2lg": "max-w-[280px]",
  "3/4sm": "max-w-[60px]",
  "3/4md": "max-w-[120px]",
  "3/4lg": "max-w-[200px]",
  "4/3sm": "max-w-[80px]",
  "4/3md": "max-w-[160px]",
  "4/3lg": "max-w-[267px]",
  "9/16sm": "max-w-[60px]",
  "9/16md": "max-w-[120px]",
  "9/16lg": "max-w-[200px]",
  "16/9sm": "max-w-[107px]",
  "16/9md": "max-w-[213px]",
  "16/9lg": "max-w-[356px]",
} as const;

export enum EXTRA_CONFIG {
  ROUNDED = 0,
}
