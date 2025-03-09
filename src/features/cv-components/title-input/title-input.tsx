import { createElement } from "react";
import { InputVariants } from "./title-input.types";
import { presetTitle, styles, tagName } from "./title-input.constants";
import { cn } from "@shared/lib/utils";

export type TitleInputProps = {
  variant?: InputVariants;
  title?: string;
  className?: string;
};

export const TitleInput = ({
  variant = "h3",
  title = "",
  className = "",
}: TitleInputProps) => {
  return createElement(
    tagName[variant],
    { className: cn(styles[variant], className) },
    title ? title : presetTitle[variant],
  );
};
