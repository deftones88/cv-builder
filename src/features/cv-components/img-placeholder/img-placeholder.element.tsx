import { FIELD_TYPES } from "@shared/constants/form";
import { FC } from "react";
import { ComponentElement, Elements, FormField } from "@shared/types";
import { ImgPlaceholder } from "./img-placeholder";

const type: Elements = "ImgPlaceholder";

export const ImgPlaceholderComponentElement: ComponentElement = {
  type,
  component: ImgPlaceholder as FC,
  settingsFormField: [
    {
      id: 1,
      type: FIELD_TYPES.UPLOADER,
      label: "파일 업로드",
      value: "업로드할 파일을 선택해주세요",
      propName: "image",
    },
    {
      id: 2,
      type: FIELD_TYPES.RADIO,
      label: "크기",
      value: "small",
      options: ["small", "medium", "large"],
      propName: "size",
      map: {
        small: "sm",
        medium: "md",
        large: "lg",
      },
    },
    {
      id: 3,
      type: FIELD_TYPES.CHECKBOX,
      label: "모서리 설정",
      value: [false],
      propName: "rounded",
      options: ["둥근 모서리"],
    },
  ] satisfies FormField[],
};
