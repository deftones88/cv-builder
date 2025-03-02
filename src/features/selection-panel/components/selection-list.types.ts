import { Elements } from "@shared/types";
import { LucideIcon } from "lucide-react";
import { ElementType } from "react";

export type SelectionCategoryList = {
  title: SelectionCategory;
  // url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: SelectionBtnElement[];
  type: Elements;
};

export type SelectionBtnElement = {
  title: string;
  icon: ElementType;
  className?: string;
  type: Elements;
  props?: unknown;
  settingsTitle: string[];
};

export type SelectionCategory = "Heading" | "Image" | "List";
