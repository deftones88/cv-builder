import { LIST_STYLE_TYPE } from "./list-item.types";

export const LIST_STYLE_OPTION = {
  ol: [
    "1, 2, 3, ...",
    "01, 02, 03, ...",
    "I, II, III, IV, ...",
    "li, ii, iii, iv, ...",
    "A, B, C, ...",
    "a, b, c, ...",
  ],
  ul: ["●", "○", "■", "없음"],
};

export const LIST_STYLE_DISPLAY_TO_VALUE = {
  "1, 2, 3, ...": "decimal",
  "01, 02, 03, ...": "decimal-leading-zero",
  "I, II, III, IV, ...": "upper-roman",
  "i, ii, iii, iv, ...": "lower-roman",
  "A, B, C, ...": "upper-alpha",
  "a, b, c, ...": "lower-alpha",
  "●": "disc",
  "○": "circle",
  "■": "square",
  "없음": "none",
};

export const LIST_STYLE_VALUE_TO_DISPLAY = {
  "decimal": "1, 2, 3, ...",
  "decimal-leading-zero": "01, 02, 03, ...",
  "upper-roman": "I, II, III, IV, ...",
  "lower-roman": "i, ii, iii, iv, ...",
  "upper-alpha": "A, B, C, ...",
  "lower-alpha": "a, b, c, ...",
  "disc": "●",
  "circle": "○",
  "square": "■",
  "none": "없음",
};

export const LIST_STYLE_TYPE_MAP: Record<LIST_STYLE_TYPE, "ol" | "ul"> = {
  "decimal": "ol",
  "decimal-leading-zero": "ol",
  "upper-roman": "ol",
  "lower-roman": "ol",
  "upper-alpha": "ol",
  "lower-alpha": "ol",
  "disc": "ul",
  "circle": "ul",
  "square": "ul",
  "none": "ul",
};
