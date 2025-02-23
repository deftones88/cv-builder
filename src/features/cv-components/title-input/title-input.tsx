import { createElement } from "react";
import { InputVariants } from "./title-input.types";
import { styles, tagName } from "./title-input.constants";

type TitleInputProps = {
  variant?: InputVariants;
  title?: string;
};

export const TitleInput = ({
  variant = "h3",
  title = "Sample Title",
}: TitleInputProps) => {
  return createElement(tagName[variant], { className: styles[variant] }, title);
};
