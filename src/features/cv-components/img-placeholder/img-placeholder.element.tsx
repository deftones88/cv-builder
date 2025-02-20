import { ComponentElement, Elements } from "@shared/types";
import { ImgPlaceholder, ImgPlaceholderProps } from "./img-placeholder";

const type: Elements = "ImgPlaceholder";

export const ImgPlaceholderComponentElement: ComponentElement = {
  type,
  component: (props: ImgPlaceholderProps) => <ImgPlaceholder {...props} />,
  propertiesComponent: () => <div>ImgPlaceholder</div>,
};
