import { mapString2Icon, renderIcon } from "@shared/utilities";
import { ImgPlaceholder } from "@features/cv-components/img-placeholder";
import { ImgPlaceholderProps } from "@features/cv-components/img-placeholder/";
import { AlignmentClass, DEFAULT_INFO_LIST } from "./contact.constants";
import { InfoList } from "./contact.type";
import { TitleInput } from "@features/cv-components/title-input";
import { cn } from "@shared/lib/utils";
import { Alignment } from "@shared/types";

export type ContactProps = {
  infoList?: InfoList[];
  hasImage?: boolean;
  title?: string | undefined;
  name?: string | undefined;
  listAlignment?: Alignment;
} & Partial<ImgPlaceholderProps>;

export const Contact = ({
  infoList = DEFAULT_INFO_LIST,
  hasImage = false,
  title = undefined,
  name = undefined,
  listAlignment = "left",
  ...imgProps
}: ContactProps) => {
  return (
    <section className="w-full px-2">
      {title && <TitleInput title={title} />}
      <div className={cn("flex justify-end", hasImage && "items-center")}>
        {hasImage && (
          <div className="mr-auto w-70">
            <ImgPlaceholder {...imgProps} />
          </div>
        )}
        {name && (
          <div className="mr-auto w-70 overflow-hidden">
            <TitleInput variant={"h1"} title={name} />
          </div>
        )}
        <div className={"w-auto h-full"}>
          <ul
            className={cn(
              "flex flex-col text-sm",
              AlignmentClass[listAlignment],
            )}
          >
            {infoList.map((info) => {
              const icon = mapString2Icon(info.icon);
              return (
                <li key={info.id} className="flex gap-2 items-center">
                  <p>{renderIcon(icon)}</p>
                  <p className="max-w-50 overflow-hidden truncate">
                    {info.info}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
