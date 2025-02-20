import {
  AArrowDownIcon,
  AArrowUpIcon,
  BookOpen,
  Bot,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  PilcrowIcon,
  SquareTerminal,
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

export const MEDIA_CATEGORY: SelectionBtnElement[] = [
  {
    title: "Genesis",
    icon: Heading1Icon,
    type: "ImgPlaceholder",
  },
  {
    title: "Explorer",
    icon: Heading1Icon,
    type: "ImgPlaceholder",
  },
  {
    title: "Quantum",
    icon: Heading1Icon,
    type: "ImgPlaceholder",
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
    title: "Headings",
    icon: SquareTerminal,
    isActive: true,
    items: HEADINGS_CATEGORY,
    type: "TextInput",
  },
  {
    title: "Media",
    // url: "#",
    icon: Bot,
    items: MEDIA_CATEGORY,
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
