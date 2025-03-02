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
  image?: File | undefined;
  rounded?: boolean;
};

export const ImgPlaceholder = ({
  ratio = "2/3",
  size = "sm",
  image = undefined,
  rounded = false,
}: ImgPlaceholderProps) => {
  return (
    <div
      className={cn("w-full mx-auto", AspectRatioWHClasses[`${ratio}${size}`])}
    >
      <div
        className={cn(
          "relative w-full",
          AspectRatioClasses[ratio],
          !image && "rounded-lg border-2 border-dashed border-gray-300",
        )}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
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
    </div>
  );
};
