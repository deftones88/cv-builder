import { ComponentElement, Elements } from "@shared/types";
import { TitleInput } from "./title-input";
import { FIELD_TYPES } from "@shared/constants";
import { FC } from "react";

const type: Elements = "TextInput";

export const TitleInputComponentElement: ComponentElement = {
  type,
  component: TitleInput as FC,
  settingsFormField: [
    {
      id: 1,
      type: FIELD_TYPES.RADIO,
      label: "종류",
      value: "종류를 선택하세요",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "blockquote",
        "lead",
        "large",
        "small",
        "muted",
      ],
    },
    {
      id: 2,
      type: FIELD_TYPES.TEXT,
      label: "내용",
      value: "내용을 입력하세요",
    },
  ],
};
