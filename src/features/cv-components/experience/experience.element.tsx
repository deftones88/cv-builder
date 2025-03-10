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
        label: "내용",
        value: props.title ? props.title : EXPERIENCE_DEFAULT_TEXT.title,
        propName: "title",
      },
      {
        id: 2,
        type: FIELD_TYPES.TEXT,
        label: "내용",
        value: props.description
          ? props.description
          : EXPERIENCE_DEFAULT_TEXT.description,
        propName: "description",
      },
      {
        id: 2,
        type: FIELD_TYPES.DATE_RANGE,
        label: "내용",
        value: props.dateRange ? props.dateRange : DEFAULT_DATE_RANGE,
        propName: "dateRange",
      },
    ];
  },
};
