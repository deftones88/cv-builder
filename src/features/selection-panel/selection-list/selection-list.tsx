import { ChevronRight } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@shared/components/shadcnui";
import { SELECTION_CATEGORY } from "./selection-list.constants";
import { SelectionListSubmenu } from "./selection-list-submenu";

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
                    <SelectionListSubmenu categoryList={categoryList} />
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
