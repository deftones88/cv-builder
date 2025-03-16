import { ComponentElement, Elements } from "@shared/types";
import { FC } from "react";
import { Experience, ExperienceProps } from "./experience";
import { FIELD_TYPES } from "@shared/constants";
import {
  DEFAULT_DATE_RANGE,
  EXPERIENCE_DEFAULT_TEXT,
} from "./experience.constants";

const type: Elements = "Experience";

export const ExperienceComponentElement: ComponentElement = {
  type,
  component: Experience as FC,
  getSettingsFormField: (props: ExperienceProps) => {
    return [
      {
        id: 1,
        type: FIELD_TYPES.TEXT,
        label: "제목",
        value: props.title ?? EXPERIENCE_DEFAULT_TEXT.title,
        propName: "title",
      },
      {
        id: 2,
        type: FIELD_TYPES.TEXT,
        label: "내용",
        value: props.description ?? EXPERIENCE_DEFAULT_TEXT.description,
        propName: "description",
      },
      {
        id: 3,
        type: FIELD_TYPES.DATE_RANGE,
        label: "기간 설정",
        value: props.dateRange ?? DEFAULT_DATE_RANGE,
        propName: "dateRange",
      },
      {
        id: 4,
        type: FIELD_TYPES.SELECT,
        label: "기간 구분자",
        value: props.separator ?? ".",
        propName: "separator",
        options: [".", "/"],
      },
      {
        id: 5,
        type: FIELD_TYPES.SWITCH,
        label: "날짜 표시 형식",
        value: props.hasDate ?? true,
        propName: "hasDate",
        options: ["연월 표시", "연월일 표시"],
      },
    ];
  },
};
