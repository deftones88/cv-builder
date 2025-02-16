import { Alignment } from "@shared/lib/constants/types";
import { cn } from "@shared/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    align?: Alignment;
  };

export const Container = ({
  children,
  align = "left",
  ...props
}: ContainerProps) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "mx-auto p-2 flex flex-col content-center justify-center",
        `items-${align}`,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
