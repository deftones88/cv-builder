import { FIELD_TYPES } from "@shared/constants";
import { ComponentElement, Elements } from "@shared/types";
import { FC } from "react";
import { ListItem, ListItemProps } from "./list-item";
import {
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
        value: props.list ?? [
          "다양한 이해관계자와의 원활한 의사소통 및 협상 능력 보유",
          "복잡한 문제에 대한 창의적 해결책 도출 및 실행 역량 입증",
        ],
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
