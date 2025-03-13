import {
  ImgPlaceholder,
  ImgPlaceholderProps,
} from "@features/cv-components/img-placeholder";
import {
  TitleInput,
  TitleInputProps,
} from "@features/cv-components/title-input";
import { cn } from "@shared/lib/utils";
import { ProfileAlignmentEng } from "./profile.types";

export type ProfileProps = ImgPlaceholderProps &
  TitleInputProps & {
    isImageFirst?: boolean;
    alignment?: ProfileAlignmentEng;
  };

export const Profile = ({
  isImageFirst = true,
  alignment = "between",
  ...props
}: ProfileProps) => {
  const { ratio, size, image, rounded, variant, title, className } = props;
  const imgPlaceHolderProps = {
    ratio,
    size,
    image,
    rounded,
  };
  const titleInputProps = {
    variant,
    title,
    className,
  };
  return (
    <section className={cn("flex items-end gap-2", `justify-${alignment}`)}>
      {isImageFirst && <ImgPlaceholder {...imgPlaceHolderProps} />}
      <TitleInput {...titleInputProps} />
      {!isImageFirst && <ImgPlaceholder {...imgPlaceHolderProps} />}
    </section>
  );
};
