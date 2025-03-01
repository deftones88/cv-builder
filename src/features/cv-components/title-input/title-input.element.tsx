import { ComponentElement, Elements } from "@shared/types";
import { TitleInput, TitleInputProps } from "./title-input";
import { FIELD_TYPES } from "@shared/constants";
import { FC } from "react";
import { presetTitle } from "./title-input.constants";

const type: Elements = "TextInput";

export const TitleInputComponentElement: ComponentElement = {
  type,
  component: TitleInput as FC,
  getSettingsFormField: (props: TitleInputProps) => [
    {
      id: 1,
      type: FIELD_TYPES.TEXT,
      label: "내용",
      value: props.title ? props.title : presetTitle[props.variant ?? "h3"],
      propName: "title",
    },
  ],
};
