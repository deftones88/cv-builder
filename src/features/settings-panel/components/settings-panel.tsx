// import { Panel } from "@shared/components/panel";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@shared/components/shadcnui";

export const SettingsPanel = () => {
  return (
    // <Panel position="right" width="md" collapsible elevated>
    //   <Panel.Title>Settings Panel</Panel.Title>
    // </Panel>
    <Sidebar side="right" collapsible="icon">
      <SidebarHeader>
        <SidebarTrigger />
        <h2>Settings Panel</h2>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
