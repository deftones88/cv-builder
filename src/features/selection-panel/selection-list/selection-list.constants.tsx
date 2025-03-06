import { Elements } from "@shared/types";
import {
  AArrowDownIcon,
  AArrowUpIcon,
  Heading,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Image,
  ListIcon,
  ListOrderedIcon,
  PilcrowIcon,
  RectangleHorizontal,
  RectangleVertical,
  Square,
  TextQuoteIcon,
  TypeIcon,
} from "lucide-react";
import {
  SelectionBtnElement,
  SelectionCategoryList,
} from "./selection-list.types";

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
];

export const SELECTION_CATEGORY: SelectionCategoryList[] = [
  {
    title: "Heading",
    icon: Heading,
    isActive: true,
    items: HEADINGS_CATEGORY,
    type: "TextInput",
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

export const categoryMap: Record<Elements, SelectionBtnElement[]> = {
  TextInput: HEADINGS_CATEGORY,
  ImgPlaceholder: IMAGE_CATEGORY,
  ListItem: LIST_CATEGORY,
};
