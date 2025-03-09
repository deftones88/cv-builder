import { cn } from "@shared/lib/utils";
import { TitleInput } from "../title-input";
import { DEFAULT_LIST, LIST_STYLE_TYPE_MAP } from "./list-item.constants";
import type { LIST_STYLE_TYPE } from "./list-item.types";

export type ListItemProps = {
  title?: string;
  list?: string[];
  listStyle?: LIST_STYLE_TYPE;
};

export const ListItem = ({
  title = undefined,
  list = DEFAULT_LIST,
  listStyle = "disc",
}: ListItemProps) => {
  const ListTag = LIST_STYLE_TYPE_MAP[listStyle];

  return (
    <section>
      {title && <TitleInput variant={"h4"} title={title} />}
      {
        <ListTag
          className={cn("pl-2 list-inside text-xs", `list-${listStyle}`)}
        >
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ListTag>
      }
    </section>
  );
};
