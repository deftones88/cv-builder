// import { Panel } from "@shared/components/panel";

import { SelectionList } from "./selection-list";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@shared/components/shadcnui";
import { SELECTION_CATEGORY } from "../constants";
import { TitleBar } from "./title-bar";

export const SelectionPanel = () => {
  return (
    // <Panel width="xs" elevated>
    //   <Panel.Title>Selection Panel</Panel.Title>
    // </Panel>
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TitleBar />
      </SidebarHeader>
      <SidebarContent>
        <SelectionList items={SELECTION_CATEGORY} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
