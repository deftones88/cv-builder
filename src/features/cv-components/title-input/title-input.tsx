import { createElement } from "react";
import { InputVariants } from "./title-input.types";
import { presetTitle, styles, tagName } from "./title-input.constants";

export type TitleInputProps = {
  variant?: InputVariants;
  title?: string;
};

export const TitleInput = ({ variant = "h3", title }: TitleInputProps) => {
  return createElement(
    tagName[variant],
    { className: styles[variant] },
    title ? title : presetTitle[variant],
  );
};
