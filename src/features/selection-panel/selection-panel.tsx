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
      <SidebarContent>
        <SelectionList />
      </SidebarContent>
      <SidebarFooter>
        <SelectionPanelFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
