import Images from "@shared/assets/images";
import { IconType } from "@shared/types";
import { GlobeIcon, HomeIcon, PhoneIcon } from "lucide-react";

export const FIELD_TYPES = {
  TEXT: "text",
  SELECT: "select",
  RADIO: "radio",
  UPLOADER: "uploader",
  CHECKBOX: "checkbox",
  ARRAY: "array",
  ICON_ARRAY: "icon-array",
} as const;

export const FORM_ICON_LIST: { id: string; icon: IconType; value: string }[] = [
  { id: "github", icon: Images.githubLogo, value: "github" },
  { id: "home", icon: HomeIcon, value: "home" },
  { id: "cell", icon: PhoneIcon, value: "cell" },
  { id: "web", icon: GlobeIcon, value: "web" },
];
