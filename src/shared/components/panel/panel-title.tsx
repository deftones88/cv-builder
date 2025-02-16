import { Alignment } from "@shared/constants/types";
import { cn } from "@shared/util";
import { PropsWithChildren } from "react";

type PanelTitleProps = PropsWithChildren & {
  className?: string;
  align?: Alignment;
};

export const PanelTitle = ({
  children,
  className,
  align = "left",
}: PanelTitleProps) => {
  return (
    <h2
      className={cn("text-xl font-semibold mb-4", `text-${align}`, className)}
    >
      {children}
    </h2>
  );
};
