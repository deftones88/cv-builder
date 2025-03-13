import { SelectionList } from "./selection-list";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@shared/components/shadcnui";
import { SelectionPanelHeader } from "./selection-panel-header";
import { SelectionPanelFooter } from "./selection-panel-footer";

export const SelectionPanel = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SelectionPanelHeader />
      </SidebarHeader>
      <SidebarContent className="group-data-[state=collapsed]:opacity-0 group-data-[state=expanded]:opacity-100">
        <SelectionList />
      </SidebarContent>
      <SidebarFooter className="group-data-[state=collapsed]:opacity-0 group-data-[state=expanded]:opacity-100">
        <SelectionPanelFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
