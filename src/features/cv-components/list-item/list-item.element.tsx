import { ComponentElement, Elements } from "@shared/types";
import { ListItem, ListItemProps } from "./list-item";

const type: Elements = "ListItem";

export const ListItemComponentElement: ComponentElement = {
  type,
  component: (props: ListItemProps) => <ListItem {...props} />,
  propertiesComponent: () => <div>ListItem</div>,
};
