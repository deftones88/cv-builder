import { cn } from "@shared/util/cn";
import { HTMLAttributes, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, ...props }: ContainerProps) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "mx-auto w-full h-full flex content-center justify-center bg-gray-100",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
