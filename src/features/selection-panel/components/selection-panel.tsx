// import { Panel } from "@shared/components/panel";

import { SelectionList } from "./selection-list";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@shared/components/shadcnui";
import { SelectionTitleBar } from "./selection-title-bar";
import { SELECTION_CATEGORY } from "./selection-list.constants";

export const SelectionPanel = () => {
  return (
    // <Panel width="xs" elevated>
    //   <Panel.Title>Selection Panel</Panel.Title>
    // </Panel>
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SelectionTitleBar />
      </SidebarHeader>
      <SidebarContent>
        <SelectionList items={SELECTION_CATEGORY} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
