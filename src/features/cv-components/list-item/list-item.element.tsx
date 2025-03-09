import { ComponentElement, Elements } from "@shared/types";
import { FC } from "react";
import type { ListItemProps } from "./list-item";
import { ListItem } from "./list-item";
import { getListItemFormFieldList } from "./list-item.services";

const type: Elements = "ListItem";

export const ListItemComponentElement: ComponentElement = {
  type,
  component: ListItem as FC,
  getSettingsFormField: (props: ListItemProps) =>
    getListItemFormFieldList(props),
};
