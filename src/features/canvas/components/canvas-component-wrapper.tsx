import { SelectionElements } from "@shared/constants";
import { ComponentElementInstance } from "@shared/types";

type CanvasComponentWrapperProps = {
  component: ComponentElementInstance;
};

export const CanvasComponentWrapper = ({
  component,
}: CanvasComponentWrapperProps) => {
  const ComponentElement = SelectionElements[component.type].component;
  const props = component.settings;
  return <ComponentElement {...props} />;
};
