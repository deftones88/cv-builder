import { FIELD_TYPES } from "@shared/constants";
import { ComponentElement, Elements } from "@shared/types";
import { FC } from "react";
import { ListItem, ListItemProps } from "./list-item";
import {
  DEFAULT_LIST,
  LIST_STYLE_DISPLAY_TO_VALUE,
  LIST_STYLE_OPTION,
  LIST_STYLE_TYPE_MAP,
  LIST_STYLE_VALUE_TO_DISPLAY,
} from "./list-item.constants";

const type: Elements = "ListItem";

export const ListItemComponentElement: ComponentElement = {
  type,
  component: ListItem as FC,
  getSettingsFormField: (props: ListItemProps) => {
    const listType = LIST_STYLE_TYPE_MAP[props.listStyle ?? "disc"]; // 'ol' | 'ul'
    const selectValue = props.listStyle
      ? LIST_STYLE_VALUE_TO_DISPLAY[props.listStyle]
      : "불렛 종류룰 고르세요";
    return [
      {
        id: 1,
        type: FIELD_TYPES.ARRAY,
        label: "목록 내용",
        value: props.list ?? DEFAULT_LIST,
        propName: "list",
      },
      {
        id: 2,
        type: FIELD_TYPES.SELECT,
        label: "불렛 종류",
        value: selectValue,
        options: LIST_STYLE_OPTION[listType],
        propName: "listStyle",
        map: LIST_STYLE_DISPLAY_TO_VALUE,
      },
    ];
  },
};
