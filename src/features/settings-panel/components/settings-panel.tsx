import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@shared/components/shadcnui";
import { useComponentsStore } from "@stores";
import { SettingsPanelForm } from "./settings-panel-form";
import { SettingsTitleBar } from "./settings-title-bar";

export const SettingsPanel = () => {
  const component = useComponentsStore((state) => state.component);
  if (!component) return null;

  return (
    <Sidebar side="right" collapsible="icon" className="w-110">
      <SidebarHeader>
        <SettingsTitleBar />
      </SidebarHeader>
      <SidebarContent className="group-data-[state=collapsed]:opacity-0 group-data-[state=expanded]:opacity-100">
        <div className="px-6">
          <SettingsPanelForm key={component.id} />
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
