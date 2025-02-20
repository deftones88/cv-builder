import { ChevronRight } from "lucide-react";

import {
  SidebarGroup,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarMenuSub,
} from "@shared/components/shadcnui";
import { SelectionCategoryList } from "./selection-list.types";
import { SelectionElement } from "./selection-element";

type SelectionListProp = { items: SelectionCategoryList[] };

export function SelectionList({ items }: SelectionListProp) {
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="grid grid-cols-2 gap-2 p-2">
                  {item.items?.map((subItem, idx) => (
                    <SelectionElement
                      element={subItem}
                      categoryIdx={idx}
                      key={subItem.title}
                    />
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
