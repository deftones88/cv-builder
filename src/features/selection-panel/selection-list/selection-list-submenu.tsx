import { SelectionListType } from "../selection-list";
import {
  SidebarMenuButton,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@shared/components/shadcnui";
import { SelectionElement } from "../selection-element";
import { ChevronRight } from "lucide-react";

type SelectionListSubmenuProps = {
  categoryList: SelectionListType.CategoryList[];
};

export const SelectionListSubmenu = ({
  categoryList,
}: SelectionListSubmenuProps) => {
  return (
    <SidebarMenuSub className="m-0 ml-1 border-l-0 p-0">
      {categoryList.map((item) => (
        <Collapsible
          key={item.title}
          asChild
          className="group/collapsible"
          defaultOpen={item.isActive}
        >
          <SidebarMenuSubItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span className="font-gawun-dodum">{item.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent className="mr-0">
              <SidebarMenuSub className="grid grid-cols-2 gap-2 p-2 pr-0">
                {item.items?.map((subItem, idx) => (
                  <SelectionElement
                    element={subItem}
                    categoryIdx={idx}
                    key={subItem.title}
                  />
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuSubItem>
        </Collapsible>
      ))}
    </SidebarMenuSub>
  );
};
