import { mapString2Icon, renderIcon } from "@shared/utilities";
import { ImgPlaceholder } from "../img-placeholder";
import { ImgPlaceholderProps } from "../img-placeholder/img-placeholder";
import { DEFAULT_INFO_LIST } from "./contact.constants";
import { InfoList } from "./contact.type";
import { TitleInput } from "../title-input";
import { cn } from "@shared/lib/utils";
import { Alignment } from "@shared/types";

export type ContactProps = {
  infoList?: InfoList[];
  hasImage?: boolean;
  title?: string | undefined;
  listAlignment?: Alignment;
} & Partial<ImgPlaceholderProps>;

export const Contact = ({
  infoList = DEFAULT_INFO_LIST,
  hasImage = false,
  title = undefined,
  listAlignment = "left",
}: ContactProps) => {
  const alignmentClass =
    listAlignment === "right"
      ? "items-end"
      : listAlignment === "left"
      ? "items-start"
      : "items-center";
  return (
    <section className="w-full px-2">
      {title ? <TitleInput title={title} /> : null}
      <div className="flex justify-end">
        {hasImage && (
          <div className="mr-auto w-full">
            <ImgPlaceholder />
          </div>
        )}
        <div className="w-auto">
          <ul className={cn("flex flex-col text-sm", alignmentClass)}>
            {infoList.map((info) => {
              const icon = mapString2Icon(info.icon);
              return (
                <li key={info.id} className="flex gap-2 items-center">
                  <p>{renderIcon(icon)}</p>
                  <p>{info.info}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
