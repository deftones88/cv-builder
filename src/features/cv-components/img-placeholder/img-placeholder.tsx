import { cn } from "@shared/lib/utils";
import { ImageUpIcon } from "lucide-react";
import {
  AspectRatioClasses,
  AspectRatioWHClasses,
} from "./img-placeholder.constants";
import { AspectRatio, UploaderSize } from "./img-placeholder.types";

export type ImgPlaceholderProps = {
  ratio?: AspectRatio;
  size?: UploaderSize;
  /** data URL 문자열. File 객체는 persist 직렬화가 되지 않아 사용하지 않는다. */
  image?: string;
  rounded?: boolean;
};

export const ImgPlaceholder = ({
  ratio = "2/3",
  size = "sm",
  image = undefined,
  rounded = false,
}: ImgPlaceholderProps) => {
  // 예전 버전이 저장한 `{}`(직렬화된 File) 같은 값이 남아 있어도 안전하게 무시한다
  const src = typeof image === "string" && image ? image : undefined;

  return (
    <section
      className={cn("w-full h-full", AspectRatioWHClasses[`${ratio}${size}`])}
    >
      <div
        className={cn(
          "relative w-full",
          AspectRatioClasses[ratio],
          !src && "border-2 border-dashed border-gray-300",
          rounded && "rounded-lg",
        )}
        data-html2canvas-ignore={!src}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {src ? (
            <img
              src={src}
              alt="image preview"
              className={cn(
                "w-full h-full object-cover",
                rounded && "rounded-lg",
              )}
            />
          ) : (
            <ImageUpIcon className="w-12 h-12 text-gray-400" />
          )}
        </div>
      </div>
    </section>
  );
};
