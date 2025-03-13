import { FIELD_TYPES } from "@shared/constants/form";
import { ComponentElement, Elements, FormField } from "@shared/types";
import { FC } from "react";
import { ImgPlaceholder, ImgPlaceholderProps } from "./img-placeholder";
import { SIZE_MAP } from "./img-placeholder.constants";

const type: Elements = "ImgPlaceholder";

export const ImgPlaceholderComponentElement: ComponentElement = {
  type,
  component: ImgPlaceholder as FC,
  getSettingsFormField: (props: ImgPlaceholderProps) =>
    [
      {
        id: 1,
        type: FIELD_TYPES.UPLOADER,
        label: "파일 업로드",
        value: props.image ?? undefined,
        propName: "image",
        options: ["업로드할 파일을 선택해주세요", "image/*"],
      },
      {
        id: 2,
        type: FIELD_TYPES.RADIO,
        label: "크기",
        value:
          Object.keys(SIZE_MAP).find((key) => SIZE_MAP[key] === props.size) ||
          "small",
        options: ["small", "medium", "large"],
        propName: "size",
        map: SIZE_MAP,
      },
      {
        id: 3,
        type: FIELD_TYPES.CHECKBOX,
        label: "모서리 설정",
        value: props?.rounded ?? false,
        propName: "rounded",
        options: ["둥근 모서리"],
      },
    ] satisfies FormField[],
};
