import { Elements } from "@shared/types";
import { LucideIcon } from "lucide-react";
import { ElementType } from "react";

export type CategoryList = {
  title: string;
  // url: string;
  icon?: LucideIcon;
  items?: SelectionBtnElement[];
  type: Elements;
  isActive?: boolean;
};

export type SelectionCategoryList = {
  groupTitle: string;
  categoryList: CategoryList[];
  isActive?: boolean;
};

export type SelectionBtnElement = {
  title: string;
  icon: ElementType;
  className?: string;
  type: Elements;
  props?: unknown;
  settingsTitle: string[];
};
