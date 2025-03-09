import { ChevronRight } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@shared/components/shadcnui";
import { SelectionElement } from "../selection-element";
import { SELECTION_CATEGORY } from "./selection-list.constants";

export function SelectionList() {
  return (
    <>
      {SELECTION_CATEGORY.map((group) => {
        const { groupTitle, isActive, categoryList } = group;
        return (
          <SidebarGroup key={groupTitle}>
            <SidebarMenu>
              <Collapsible
                key={groupTitle}
                asChild
                defaultOpen={isActive}
                className="group/section"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={groupTitle}
                      className="bg-zinc-100 rounded-sm"
                    >
                      <span className="text-ml font-bold">
                        {groupTitle.toUpperCase()}
                      </span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/section:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
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
                                <span className="font-gawun-dodum">
                                  {item.title}
                                </span>
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
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroup>
        );
      })}
    </>
  );
}
