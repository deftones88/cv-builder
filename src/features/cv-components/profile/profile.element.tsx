import { ComponentElement, Elements } from "@shared/types";
import { FC } from "react";
import { Profile, type ProfileProps } from "./profile";
import { FIELD_TYPES } from "@shared/constants";
import { SIZE_MAP } from "@features/cv-components/img-placeholder";
import { presetTitle } from "@features/cv-components/title-input";
import { PROFILE_ALIGNMENT_MAP } from "./profile.constants";
import { ProfileAlignmentKor } from "./profile.types";

const type: Elements = "Profile";

export const ProfileComponentElement: ComponentElement = {
  type,
  component: Profile as FC,
  getSettingsFormField: (props: ProfileProps) => {
    return [
      {
        id: 0,
        type: FIELD_TYPES.RADIO,
        label: "정렬",
        value:
          Object.keys(PROFILE_ALIGNMENT_MAP).find(
            (key) =>
              PROFILE_ALIGNMENT_MAP[key as ProfileAlignmentKor] ===
              props.alignment,
          ) ?? "양쪽",
        options: ["왼쪽", "양쪽", "오른쪽"] as ProfileAlignmentKor[],
        propName: "alignment",
        map: PROFILE_ALIGNMENT_MAP,
      },
      {
        id: 1,
        type: FIELD_TYPES.TEXT,
        label: "이름",
        value: props.title ?? presetTitle[props.variant ?? "h1"],
        propName: "title",
      },
      {
        id: 2,
        type: FIELD_TYPES.SELECT,
        label: "사진 비율",
        value: props.ratio ?? "1/1",
        propName: "ratio",
        options: ["1/1", "2/3", "3/2", "3/4", "4/3", "16/9", "9/16"],
      },
      {
        id: 3,
        type: FIELD_TYPES.UPLOADER,
        label: "사진 파일 업로드",
        value: props.image ?? undefined,
        propName: "image",
        options: ["업로드할 파일을 선택해주세요", "image/*"],
      },
      {
        id: 4,
        type: FIELD_TYPES.RADIO,
        label: "사진 크기",
        value:
          Object.keys(SIZE_MAP).find((key) => SIZE_MAP[key] === props.size) ||
          "small",
        options: ["small", "medium", "large"],
        propName: "size",
        map: SIZE_MAP,
      },
      {
        id: 5,
        type: FIELD_TYPES.CHECKBOX,
        label: "사진 모서리 설정",
        value: props?.rounded ?? false,
        propName: "rounded",
        options: ["둥근 모서리"],
      },
    ];
  },
};
