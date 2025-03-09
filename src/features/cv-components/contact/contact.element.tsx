import { ComponentElement, Elements } from "@shared/types";
import { Contact, ContactProps } from "./contact";
import { FC } from "react";
import { FIELD_TYPES } from "@shared/constants";
import { DEFAULT_INFO_LIST } from "./contact.constants";

const type: Elements = "Contact";

export const ContactComponentElement: ComponentElement = {
  type,
  component: Contact as FC,
  getSettingsFormField: (props: ContactProps) => {
    return [
      {
        id: 1,
        type: FIELD_TYPES.RADIO,
        label: "정렬",
        value: props.listAlignment ?? "왼쪽",
        propName: "listAlignment",
        options: ["왼쪽", "가운데", "오른쪽"],
        map: { 오른쪽: "right", 가운데: "center", 왼쪽: "left" },
      },
      {
        id: 2,
        type: FIELD_TYPES.ICON_ARRAY,
        label: "연락처 목록",
        value: props.infoList ?? DEFAULT_INFO_LIST,
        propName: "infoList",
      },
    ];
  },
};
