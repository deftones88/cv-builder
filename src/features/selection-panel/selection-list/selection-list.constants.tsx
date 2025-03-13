import { Elements } from "@shared/types";
import {
  AArrowDownIcon,
  AArrowUpIcon,
  BriefcaseBusinessIcon,
  CalendarClockIcon,
  Heading,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Image,
  ImageIcon,
  ListIcon,
  ListOrderedIcon,
  PilcrowIcon,
  RectangleHorizontal,
  RectangleVertical,
  Square,
  SquareUserIcon,
  TextIcon,
  TextQuoteIcon,
  TypeIcon,
  UserRoundPenIcon,
} from "lucide-react";
import {
  SelectionBtnElement,
  SelectionCategoryList,
  CategoryList,
} from "./selection-list.types";
import { EXPERIENCE_DEFAULT_TEXT } from "@features/cv-components/experience";

//#region Custom
export const HEADINGS_CATEGORY: SelectionBtnElement[] = [
  {
    title: "H1",
    icon: Heading1Icon,
    type: "TextInput",
    props: {
      variant: "h1",
    },
    settingsTitle: ["Heading", "H1"],
  },
  {
    title: "H2",
    icon: Heading2Icon,
    type: "TextInput",
    props: {
      variant: "h2",
    },
    settingsTitle: ["Heading", "H2"],
  },
  {
    title: "H3",
    icon: Heading3Icon,
    type: "TextInput",
    settingsTitle: ["Heading", "H3"],
  },
  {
    title: "H4",
    icon: Heading4Icon,
    type: "TextInput",
    props: {
      variant: "h4",
    },
    settingsTitle: ["Heading", "H4"],
  },
  {
    title: "p",
    icon: PilcrowIcon,
    type: "TextInput",
    props: {
      variant: "p",
    },
    settingsTitle: ["Heading", "p"],
  },
  {
    title: "blockquote",
    icon: TextQuoteIcon,
    type: "TextInput",
    props: {
      variant: "blockquote",
    },
    settingsTitle: ["Heading", "blockquote"],
  },
  {
    title: "Lead",
    icon: TypeIcon,
    type: "TextInput",
    props: {
      variant: "lead",
    },
    settingsTitle: ["Heading", "Lead"],
  },
  {
    title: "Large",
    icon: AArrowUpIcon,
    type: "TextInput",
    props: {
      variant: "large",
    },
    settingsTitle: ["Heading", "Large"],
  },
  {
    title: "Small",
    icon: AArrowDownIcon,
    type: "TextInput",
    props: {
      variant: "small",
    },
    settingsTitle: ["Heading", "Small"],
  },
  {
    title: "Muted",
    icon: TypeIcon,
    className: "text-[#777]",
    type: "TextInput",
    props: {
      variant: "muted",
    },
    settingsTitle: ["Heading", "Muted"],
  },
];

export const IMAGE_CATEGORY: SelectionBtnElement[] = [
  {
    title: "2:3 - 세로",
    icon: RectangleVertical,
    type: "ImgPlaceholder",
    props: {
      ratio: "2/3",
    },
    settingsTitle: ["Image", "2:3 - 세로"],
  },
  {
    title: "3:2 - 가로",
    icon: RectangleHorizontal,
    type: "ImgPlaceholder",
    props: {
      ratio: "3/2",
    },
    settingsTitle: ["Image", "3:2 - 가로"],
  },
  {
    title: "3:4 - 세로",
    icon: RectangleVertical,
    type: "ImgPlaceholder",
    props: {
      ratio: "3/4",
    },
    settingsTitle: ["Image", "3:4 - 세로"],
  },
  {
    title: "4:3 - 가로",
    icon: RectangleHorizontal,
    type: "ImgPlaceholder",
    props: {
      ratio: "4/3",
    },
    settingsTitle: ["Image", "4:3 - 가로"],
  },
  {
    title: "9:16 - 세로",
    icon: RectangleVertical,
    type: "ImgPlaceholder",
    props: {
      ratio: "9/16",
    },
    settingsTitle: ["Image", "9:16 - 세로"],
  },
  {
    title: "16:9 - 가로",
    icon: RectangleHorizontal,
    type: "ImgPlaceholder",
    props: {
      ratio: "16/9",
    },
    settingsTitle: ["Image", "16:9 - 가로"],
  },
  {
    title: "Square",
    icon: Square,
    type: "ImgPlaceholder",
    props: {
      ratio: "1/1",
    },
    settingsTitle: ["Image", "Square"],
  },
];

export const LIST_CATEGORY: SelectionBtnElement[] = [
  {
    title: "Ordered",
    icon: ListOrderedIcon,
    type: "ListItem",
    props: {
      listStyle: "decimal",
    },
    settingsTitle: ["List", "Ordered"],
  },
  {
    title: "Unordered",
    icon: ListIcon,
    type: "ListItem",
    props: {
      listStyle: "disc",
    },
    settingsTitle: ["List", "Unordered"],
  },
  {
    title: "제목 - OL",
    icon: ListOrderedIcon,
    type: "ListItem",
    props: {
      title: "업무 역량",
      listStyle: "decimal",
    },
    settingsTitle: ["List", "Ordered"],
  },
  {
    title: "제목 - UL",
    icon: ListIcon,
    type: "ListItem",
    props: {
      title: "업무 역량",
      listStyle: "disc",
    },
    settingsTitle: ["List", "Unordered"],
  },
];

export const CUSTOM_CATEGORY_LIST: CategoryList[] = [
  {
    title: "Heading",
    icon: Heading,
    items: HEADINGS_CATEGORY,
    type: "TextInput",
    isActive: true,
  },
  {
    title: "Image",
    icon: Image,
    items: IMAGE_CATEGORY,
    type: "ImgPlaceholder",
  },
  {
    title: "List",
    icon: ListIcon,
    items: LIST_CATEGORY,
    type: "ListItem",
  },
];
//#endregion custom

//#region Presets
export const PROFILE_CATEGORY: SelectionBtnElement[] = [
  {
    title: "사진 + 이름",
    icon: ImageIcon,
    type: "Profile",
    props: {
      isImageFirst: true,
      ratio: "1/1",
      size: "lg",
      variant: "h1",
    },
    settingsTitle: ["Profile", "사진 + 이름"],
  },
  {
    title: "이름 + 사진",
    icon: TextIcon,
    type: "Profile",
    props: {
      isImageFirst: false,
      ratio: "1/1",
      size: "lg",
      variant: "h1",
    },
    settingsTitle: ["Profile", "이름 + 사진"],
  },
];

export const CONTACT_CATEGORY: SelectionBtnElement[] = [
  {
    title: "Icon List",
    icon: ListOrderedIcon,
    type: "Contact",
    props: {
      listStyle: "decimal",
    },
    settingsTitle: ["Contact", "Icon List"],
  },
  {
    title: "사진 + List",
    icon: ListOrderedIcon,
    type: "Contact",
    props: {
      hasImage: true,
      ratio: "1/1",
      size: "lg",
    },
    settingsTitle: ["Contact", "사진 + List"],
  },
  {
    title: "제목 + List",
    icon: ListOrderedIcon,
    type: "Contact",
    props: {
      title: "Contact",
      variant: "h3",
    },
    settingsTitle: ["Contact", "제목 + List"],
  },
  {
    title: "이름 + List",
    icon: ListOrderedIcon,
    type: "Contact",
    props: {
      name: "김영희",
      variant: "h1",
    },
    settingsTitle: ["Contact", "이름 + List"],
  },
];

export const EXPERIENCE_CATEGORY: SelectionBtnElement[] = [
  {
    title: "Date",
    icon: CalendarClockIcon,
    type: "Experience",
    props: EXPERIENCE_DEFAULT_TEXT,
    settingsTitle: ["Contact", "Icon List"],
  },
];

export const PRESET_CATEGORY_LIST: CategoryList[] = [
  {
    title: "Profile",
    icon: UserRoundPenIcon,
    items: PROFILE_CATEGORY,
    type: "Profile",
    isActive: true,
  },
  {
    title: "Contact",
    icon: SquareUserIcon,
    items: CONTACT_CATEGORY,
    type: "Contact",
  },
  {
    title: "Experience",
    icon: BriefcaseBusinessIcon,
    items: EXPERIENCE_CATEGORY,
    type: "Experience",
  },
];
//#endregion presets

export const SELECTION_CATEGORY: SelectionCategoryList[] = [
  {
    groupTitle: "Presets",
    categoryList: PRESET_CATEGORY_LIST,
    isActive: true,
  },
  {
    groupTitle: "Custom",
    categoryList: CUSTOM_CATEGORY_LIST,
    isActive: true,
  },
];

export const CATEGORY_MAP: Record<Elements, SelectionBtnElement[]> = {
  TextInput: HEADINGS_CATEGORY,
  ImgPlaceholder: IMAGE_CATEGORY,
  ListItem: LIST_CATEGORY,
  Profile: PROFILE_CATEGORY,
  Contact: CONTACT_CATEGORY,
  Experience: EXPERIENCE_CATEGORY,
};
