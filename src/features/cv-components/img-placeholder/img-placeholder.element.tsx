import { FIELD_TYPES } from "@shared/constants/form";
import { ComponentElement, Elements, FormField } from "@shared/types";
import { FC } from "react";
import { ImgPlaceholder } from "./img-placeholder";

const type: Elements = "ImgPlaceholder";

export const ImgPlaceholderComponentElement: ComponentElement = {
  type,
  component: ImgPlaceholder as FC,
  getSettingsFormField: () =>
    [
      {
        id: 1,
        type: FIELD_TYPES.UPLOADER,
        label: "파일 업로드",
        value: undefined,
        propName: "image",
        options: ["업로드할 파일을 선택해주세요", "image/*"],
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
