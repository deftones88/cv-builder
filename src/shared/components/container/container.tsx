import { Alignment } from "@shared/types";
import { cn } from "@shared/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

/**
 * Tailwind는 소스를 정적 스캔하므로 `items-${align}` 같은 동적 클래스는
 * CSS에 생성되지 않는다. (게다가 `items-left`는 존재하지 않는 클래스다)
 */
const ALIGNMENT_CLASS: Record<Alignment, string> = {
  left: "items-start",
  center: "items-center",
  right: "items-end",
};

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
        ALIGNMENT_CLASS[align],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
