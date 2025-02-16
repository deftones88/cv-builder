import { Alignment, Size } from "@shared/lib/constants/types";
import { cn } from "@shared/lib/utils";
import { PropsWithChildren, useState } from "react";
import { PanelTitle } from "./panel-title";
import { PanelContent } from "./panel-content";
import { Button } from "../shadcn-ui";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PanelProps = PropsWithChildren & {
  position?: Omit<Alignment, "center">;
  width?: Size;
  collapsible?: boolean;
  className?: string;
  elevated?: boolean;
};

export const Panel = ({
  children,
  width = "md",
  className = "",
  collapsible = false,
  position = "left",
  elevated = false,
}: PanelProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getWidthClass = (size: Size): string => {
    const widthClasses: Record<Size, string> = {
      xs: "w-xs",
      sm: "w-sm",
      md: "w-md",
      lg: "w-lg",
      xl: "w-xl",
    };
    return widthClasses[size] || widthClasses.md;
  };

  const getElevated = (elevated: boolean) => {
    if (elevated) {
      return isLeft ? "shadow-lg" : "shadow-lg";
    } else {
      return isLeft ? "border-r" : "border-l ml-auto";
    }
  };
  const isLeft = position === "left";

  return (
    <div className="relative">
      {collapsible && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn("absolute top-2 z-10", isLeft ? "left-2" : "right-2")}
        >
          {isLeft === isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      )}
      <div
        className={cn(
          "mx-auto h-full flex flex-col content-center justify-center bg-white transition-all duration-300 py-2 px-3",
          isCollapsed
            ? "!w-0 overflow-hidden opacity-0 invisible p-0"
            : getWidthClass(width),
          getElevated(elevated),
          isLeft && collapsible && !isCollapsed && "pl-15",
          className,
        )}
      >
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

Panel.Title = PanelTitle;
Panel.Content = PanelContent;
