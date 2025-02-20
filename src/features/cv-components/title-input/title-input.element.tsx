import { ComponentElement, Elements } from "@shared/types";
import { TitleInput, TitleInputProps } from "./title-input";

const type: Elements = "TextInput";

export const TitleInputComponentElement: ComponentElement = {
  type,
  component: (props: TitleInputProps) => <TitleInput {...props} />,
  propertiesComponent: () => <div>TitleComponent</div>,
};
