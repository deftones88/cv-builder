import { Alignment, Size } from "@shared/constants/types";
import { cn } from "@shared/util";
import { PropsWithChildren, useState } from "react";
import { PanelTitle } from "./panel-title";
import { PanelContent } from "./panel-content";
import { Button } from "../shadcnui";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PanelProps = PropsWithChildren & {
  position?: Omit<Alignment, "center">;
  width?: Size;
  collapsible?: boolean;
  className?: string;
};

export const Panel = ({
  children,
  width = "md",
  className = "",
  collapsible = false,
  position = "left",
}: PanelProps) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsible);

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
          "mx-auto h-full flex flex-col content-center justify-center bg-gray-100 transition-all duration-300 bg-white py-2 px-3",
          isCollapsed
            ? "!w-0 overflow-hidden opacity-0 invisible p-0"
            : getWidthClass(width),
          isLeft ? "border-r" : "border-l ml-auto",
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
