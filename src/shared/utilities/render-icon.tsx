import Images from "@shared/assets/images";
import { FORM_ICON_LIST } from "@shared/constants";
import { IconType } from "@shared/types";

export const renderIcon = (icon: IconType) => {
  const className = "w-4 h-4";
  if (typeof icon === "string") {
    if (icon.startsWith("data:image/")) {
      return <img src={icon} alt="icon" className={className} />;
    }
    return <span>{icon}</span>;
  }

  const IconComponent = icon;
  return <IconComponent className={className} />;
};

export const mapString2Icon = (iconStr: string): IconType => {
  const icon =
    FORM_ICON_LIST.find((list) => list.value === iconStr)?.icon ??
    Images.githubLogo;
  return icon;
};
