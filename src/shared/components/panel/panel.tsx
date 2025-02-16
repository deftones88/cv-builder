import { Size } from "@shared/constants/types";
import { cn } from "@shared/util/cn";
import { PropsWithChildren, useState } from "react";
import { PanelTitle } from "./panel-title";
import { PanelContent } from "./panel-content";

type PanelProps = PropsWithChildren & {
  position?: "left" | "right";
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

  const getWidthClass = (size: string) => {
    const widthClasses: { [key: string]: string } = {
      sm: "w-md",
      md: "w-lg",
      lg: "w-xl",
      xl: "w-2xl",
    };
    return widthClasses[size] || widthClasses.md;
  };

  const isLeft = position === "left";

  return (
    <div
      className={cn(
        "mx-auto w-full h-full flex flex-col content-center justify-center bg-gray-100 transition-all duration-300 bg-white py-2 px-3",
        isCollapsed ? "w-0 overflow-hidden" : getWidthClass(width),
        isLeft ? "border-r" : "border-l ml-auto",
        className,
      )}
    >
      {collapsible && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "absolute top-2 p-2 rounded hover:bg-gray-100",
            isLeft ? "left-2" : "right-2",
          )}
        >
          {isLeft ? (isCollapsed ? "→" : "←") : isCollapsed ? "←" : "→"}
        </button>
      )}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

Panel.Title = PanelTitle;
Panel.Content = PanelContent;
