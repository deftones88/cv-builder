export type AspectRatio =
  | "1/1"
  | "2/3"
  | "3/2"
  | "3/4"
  | "4/3"
  | "16/9"
  | "9/16";

export type UploaderSize = "sm" | "md" | "lg";
export type RatioSizeKey = `${AspectRatio}${UploaderSize}`;
