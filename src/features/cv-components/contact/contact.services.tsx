import { ContactProps } from "./contact";
import { FIELD_TYPES } from "@shared/constants";
import {
  ALIGNMENT_ENG_TO_KOR_MAP,
  ALIGNMENT_KOR_TO_ENG_MAP,
  DEFAULT_INFO_LIST,
} from "./contact.constants";
import { sizeMap } from "@features/cv-components/img-placeholder";

export const getContactFormFieldList = (props: ContactProps) => {
  const { hasImage, title, name, listAlignment, infoList } = props;
  const imageList = hasImage
    ? [
        {
          id: 0,
          type: FIELD_TYPES.SELECT,
          label: "비율",
          value: props.ratio ?? "1/1",
          propName: "ratio",
          options: ["1/1", "2/3", "3/2", "3/4", "4/3", "16/9", "9/16"],
        },
        {
          id: 1,
          type: FIELD_TYPES.UPLOADER,
          label: "파일 업로드",
          value: props.image ?? undefined,
          propName: "image",
          options: ["업로드할 파일을 선택해주세요", "image/*"],
        },
        {
          id: 2,
          type: FIELD_TYPES.RADIO,
          label: "크기",
          value:
            Object.keys(sizeMap).find((key) => sizeMap[key] === props.size) ||
            "large",
          options: ["small", "medium", "large"],
          propName: "size",
          map: sizeMap,
        },
        {
          id: 3,
          type: FIELD_TYPES.CHECKBOX,
          label: "모서리 설정",
          value: props?.rounded ?? false,
          propName: "rounded",
          options: ["둥근 모서리"],
        },
      ]
    : [];
  const titleList = title
    ? [
        {
          id: 4,
          type: FIELD_TYPES.TEXT,
          label: "내용",
          value: title,
          propName: "title",
        },
      ]
    : [];
  const nameList = name
    ? [
        {
          id: 5,
          type: FIELD_TYPES.TEXT,
          label: "내용",
          value: name,
          propName: "name",
        },
      ]
    : [];
  const defaultList = [
    {
      id: 6,
      type: FIELD_TYPES.RADIO,
      label: "연락처 정렬",
      value: ALIGNMENT_ENG_TO_KOR_MAP[listAlignment ?? "left"],
      propName: "listAlignment",
      options: ["왼쪽", "가운데", "오른쪽"],
      map: ALIGNMENT_KOR_TO_ENG_MAP,
    },
    {
      id: 7,
      type: FIELD_TYPES.ICON_ARRAY,
      label: "연락처 목록",
      value: infoList ?? DEFAULT_INFO_LIST,
      propName: "infoList",
    },
  ];
  return [...imageList, ...titleList, ...nameList, ...defaultList];
};
