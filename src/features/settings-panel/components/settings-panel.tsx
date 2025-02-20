// import { Panel } from "@shared/components/panel";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@shared/components/shadcnui";
// import { SelectionElements } from "@shared/constants";
import { useComponentsStore } from "@stores";

export const SettingsPanel = () => {
  const component = useComponentsStore((state) => state.component);
  if (!component) return null;
  // const { settings: props, type } = component;
  // const ComponentElement = SelectionElements[type].component;
  return (
    // <Panel position="right" width="md" collapsible elevated>
    //   <Panel.Title>Settings Panel</Panel.Title>
    // </Panel>
    <Sidebar side="right" collapsible="icon">
      <SidebarHeader>
        <SidebarTrigger />
        <h2>Settings Panel</h2>
      </SidebarHeader>
      <SidebarContent>
        {/* <ComponentElement {...props} /> */}
        {component.type}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
