import { ComponentElement, Elements } from "@shared/types";
import { ListItem } from "./list-item";
import { FIELD_TYPES } from "@shared/constants";
import { FC } from "react";

const type: Elements = "ListItem";

export const ListItemComponentElement: ComponentElement = {
  type,
  component: ListItem as FC,
  settingsFormField: [
    {
      id: 1,
      type: FIELD_TYPES.TEXT,
      label: "string,",
      value: "string",
      options: ["string"],
    },
  ],
};
