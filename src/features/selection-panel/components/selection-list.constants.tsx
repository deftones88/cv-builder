import {
  AArrowDownIcon,
  AArrowUpIcon,
  BookOpen,
  Heading,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Image,
  PilcrowIcon,
  RectangleVertical,
  Square,
  TextQuoteIcon,
  TypeIcon,
} from "lucide-react";
import {
  SelectionBtnElement,
  SelectionCategoryList,
} from "./selection-list.types";
import { Elements } from "@shared/types";

export const HEADINGS_CATEGORY: SelectionBtnElement[] = [
  {
    title: "H1",
    icon: Heading1Icon,
    type: "TextInput",
    props: {
      variant: "h1",
    },
  },
  {
    title: "H2",
    icon: Heading2Icon,
    type: "TextInput",
    props: {
      variant: "h2",
    },
  },
  {
    title: "H3",
    icon: Heading3Icon,
    type: "TextInput",
  },
  {
    title: "H4",
    icon: Heading4Icon,
    type: "TextInput",
    props: {
      variant: "h4",
    },
  },
  {
    title: "p",
    icon: PilcrowIcon,
    type: "TextInput",
    props: {
      variant: "p",
    },
  },
  {
    title: "blockquote",
    icon: TextQuoteIcon,
    type: "TextInput",
    props: {
      variant: "blockquote",
    },
  },
  {
    title: "Lead",
    icon: TypeIcon,
    type: "TextInput",
    props: {
      variant: "lead",
    },
  },
  {
    title: "Large",
    icon: AArrowUpIcon,
    type: "TextInput",
    props: {
      variant: "large",
    },
  },
  {
    title: "Small",
    icon: AArrowDownIcon,
    type: "TextInput",
    props: {
      variant: "small",
    },
  },
  {
    title: "Muted",
    icon: TypeIcon,
    className: "text-[#777]",
    type: "TextInput",
    props: {
      variant: "muted",
    },
  },
];

export const IMAGE_CATEGORY: SelectionBtnElement[] = [
  {
    title: "Square",
    icon: Square,
    type: "ImgPlaceholder",
    props: {
      ratio: "1/1",
    },
  },
  {
    title: "2/3",
    icon: RectangleVertical,
    type: "ImgPlaceholder",
    props: {
      ratio: "2/3",
    },
  },
  {
    title: "3/4",
    icon: RectangleVertical,
    type: "ImgPlaceholder",
    props: {
      ratio: "3/4",
    },
  },
  {
    title: "9/16",
    icon: RectangleVertical,
    type: "ImgPlaceholder",
    props: {
      ratio: "9/16",
    },
  },
];

export const LIST_CATEGORY: SelectionBtnElement[] = [
  {
    title: "Introduction",
    icon: Heading1Icon,
    type: "ListItem",
  },
  {
    title: "Get Started",
    icon: Heading1Icon,
    type: "ListItem",
  },
  {
    title: "Tutorials",
    icon: Heading1Icon,
    type: "ListItem",
  },
  {
    title: "Changelog",
    icon: Heading1Icon,
    type: "ListItem",
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
    // url: "#",
    icon: Image,
    items: IMAGE_CATEGORY,
    type: "ImgPlaceholder",
  },
  {
    title: "List",
    // url: "#",
    icon: BookOpen,
    items: LIST_CATEGORY,
    type: "ListItem",
  },
];

export const categoryMap: Record<Elements, SelectionBtnElement[]> = {
  TextInput: HEADINGS_CATEGORY,
  ImgPlaceholder: IMAGE_CATEGORY,
  ListItem: LIST_CATEGORY,
};
