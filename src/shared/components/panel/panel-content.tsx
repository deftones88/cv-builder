import { cn } from "@shared/util/cn";
import { PropsWithChildren } from "react";

type PanelContentProps = PropsWithChildren & { className?: string };

export const PanelContent = ({ children, className }: PanelContentProps) => {
  return (
    <div className={cn("flex-1 overflow-auto px-2", className)}>{children}</div>
  );
};
