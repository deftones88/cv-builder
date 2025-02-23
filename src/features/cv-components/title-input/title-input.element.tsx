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
      type: FIELD_TYPES.TEXT,
      label: "내용",
      value: "내용을 입력하세요",
      propName: "title",
    },
  ],
};
